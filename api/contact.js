export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' })
  }

  try {
    const { name, email, phone, subject, message } = req.body || {}

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all required fields.'
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.'
      })
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_RECEIVER) {
      return res.status(500).json({
        success: false,
        message: 'Email service is not configured yet.'
      })
    }

    const safePhone = phone || 'Not provided'
    const fromAddress = process.env.CONTACT_FROM || 'MCS-EDC Website <onboarding@resend.dev>'

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [process.env.CONTACT_RECEIVER],
        reply_to: email,
        subject: `MCS-EDC Contact Form: ${subject}`,
        text: [
          'New contact form submission from the MCS-EDC website',
          '',
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${safePhone}`,
          `Subject: ${subject}`,
          '',
          'Message:',
          message
        ].join('\n'),
        html: `
          <h2>New MCS-EDC Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(safePhone)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
        `
      })
    })

    const result = await resendResponse.json()

    if (!resendResponse.ok) {
      console.error('Resend error:', result)
      return res.status(502).json({
        success: false,
        message: 'Unable to send your message right now. Please try again later.'
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you. Your message has been sent successfully.'
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({
      success: false,
      message: 'Unable to send your message right now. Please try again later.'
    })
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
