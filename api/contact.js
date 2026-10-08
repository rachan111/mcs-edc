export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed.'
    })
  }

  try {
    const {
      name,
      email,
      phone,
      subject,
      message
    } = req.body || {}

    // Name, email and message are required.
    // Subject is optional because the homepage form does not have a subject field.
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all required fields.'
      })
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.'
      })
    }

    // Check Resend configuration
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.CONTACT_RECEIVER
    ) {
      console.error('Missing email environment variables.')

      return res.status(500).json({
        success: false,
        message: 'Email service is not configured yet.'
      })
    }

    const safePhone = phone || 'Not provided'
    const safeSubject = subject || 'Website Inquiry'

    const fromAddress =
      process.env.CONTACT_FROM ||
      'MCS-EDC Website <onboarding@resend.dev>'

    // Send email using Resend
    const resendResponse = await fetch(
      'https://api.resend.com/emails',
      {
        method: 'POST',

        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          from: fromAddress,

          to: [
            process.env.CONTACT_RECEIVER
          ],

          reply_to: email,

          subject: `MCS-EDC Contact Form: ${safeSubject}`,

          text: [
            'New contact form submission from the MCS-EDC website',
            '',
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${safePhone}`,
            `Subject: ${safeSubject}`,
            '',
            'Message:',
            message
          ].join('\n'),

          html: `
            <h2>New MCS-EDC Contact Form Submission</h2>

            <p>
              <strong>Name:</strong>
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(email)}
            </p>

            <p>
              <strong>Phone:</strong>
              ${escapeHtml(safePhone)}
            </p>

            <p>
              <strong>Subject:</strong>
              ${escapeHtml(safeSubject)}
            </p>

            <hr />

            <p>
              <strong>Message:</strong>
            </p>

            <p>
              ${escapeHtml(message).replace(/\n/g, '<br />')}
            </p>
          `
        })
      }
    )

    const result = await resendResponse.json()

    // Resend returned an error
    if (!resendResponse.ok) {
      console.error('Resend error:', result)

      return res.status(502).json({
        success: false,
        message:
          'Unable to send your message right now. Please try again later.'
      })
    }

    // Success
    return res.status(200).json({
      success: true,
      message:
        'Thank you. Your message has been sent successfully.'
    })

  } catch (error) {
    console.error('Contact form error:', error)

    return res.status(500).json({
      success: false,
      message:
        'Unable to send your message right now. Please try again later.'
    })
  }
}


// Escape user-provided text before putting it into HTML email
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}