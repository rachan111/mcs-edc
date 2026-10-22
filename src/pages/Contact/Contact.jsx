
import { useState } from 'react'
import './Contact.css'

const CAPTCHA_CHARACTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

function generateCaptcha() {
  return Array.from({ length: 5 }, () => {
    const index = Math.floor(
      Math.random() * CAPTCHA_CHARACTERS.length
    )

    return CAPTCHA_CHARACTERS[index]
  }).join('')
}

function Contact() {
  const [status, setStatus] = useState({
    type: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [captcha, setCaptcha] = useState(generateCaptcha)
  const [captchaInput, setCaptchaInput] = useState('')
  const [captchaError, setCaptchaError] = useState('')

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha())
    setCaptchaInput('')
    setCaptchaError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setStatus({ type: '', message: '' })
    setCaptchaError('')

    if (isSubmitting) return

    if (!captchaInput.trim()) {
      setCaptchaError('Please enter the CAPTCHA code.')
      return
    }

    if (captchaInput.trim().toUpperCase() !== captcha) {
      setCaptchaError(
        'Incorrect CAPTCHA code. Please try again.'
      )
      setCaptcha(generateCaptcha())
      setCaptchaInput('')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    // The CAPTCHA answer should not be sent as contact data.
    delete data.captcha

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })

      // Read the response as text first, so an empty or
      // non-JSON response doesn't cause an unhandled JSON error.
      const responseText = await response.text()

      let result = {}

      if (responseText.trim()) {
        try {
          result = JSON.parse(responseText)
        } catch {
          if (!response.ok) {
            throw new Error(
              `The server returned an unexpected response (HTTP ${response.status}).`
            )
          }

          throw new Error(
            'The contact API returned an invalid response. Please check the API configuration.'
          )
        }
      } else if (response.ok) {
        throw new Error(
          'The contact API returned an empty response. Please check the /api/contact endpoint.'
        )
      }

      if (!response.ok) {
        throw new Error(
          result.message ||
          `Unable to send your message (HTTP ${response.status}).`
        )
      }

      setStatus({
        type: 'success',
        message:
          result.message || 'Your message was sent successfully.',
      })

      form.reset()
      setCaptcha(generateCaptcha())
      setCaptchaInput('')
      setCaptchaError('')
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error.message ||
          'Unable to send your message right now.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <span>Get In Touch</span>

            <h1>Contact Us</h1>

            <div
              className="contact-hero-line"
              aria-hidden="true"
            />

            <p>
              Have a question, want to learn more about our
              programs, or looking to connect with MCS-EDC?
              We would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-card">

            {/* Information Panel */}
            <div className="contact-info-panel">
              <span className="contact-info-label">
                Let&apos;s Connect
              </span>

              <h2>
                We&apos;d love to hear from you.
              </h2>

              <p className="contact-info-description">
                Whether you have a question about our programs,
                need more information, or would like to explore
                an opportunity to work with MCS-EDC, reach out
                to our team.
              </p>

              <div className="contact-info-details">
                <div className="contact-info-item">
                  <div
                    className="contact-info-icon"
                    aria-hidden="true"
                  >
                    @
                  </div>

                  <div>
                    <span>Email</span>
                    <a href="mailto:info@mcs-edc.org">
                      info@mcs-edc.org
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div
                    className="contact-info-icon"
                    aria-hidden="true"
                  >
                    ☎
                  </div>

                  <div>
                    <span>Phone</span>
                    <a href="tel:+12135550100">
                      (213) 555-0100
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div
                    className="contact-info-icon"
                    aria-hidden="true"
                  >
                    ●
                  </div>

                  <div>
                    <span>Visit Us</span>
                    <p>
                      3333 Wilshire Blvd. Suite 405
                      <br />
                      Los Angeles, CA 90010
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-info-note">
                <span>Office Hours</span>
                <p>
                  Monday – Friday
                  <br />
                  9:00 AM – 5:00 PM
                </p>
              </div>
            </div>

            {/* Form Panel */}
            <div className="contact-form-panel">
              <div className="contact-form-heading">
                <span>Send a Message</span>

                <h2>How can we help?</h2>

                <p>
                  Fill out the form below and our team will
                  get back to you.
                </p>
              </div>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">
                      Full Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="Your full name"
                      autoComplete="name"
                      maxLength={100}
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">
                      Email Address <span>*</span>
                    </label>

                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      maxLength={254}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-phone">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder="Your phone number"
                      autoComplete="tel"
                      maxLength={30}
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-subject">
                      Subject <span>*</span>
                    </label>

                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      placeholder="How can we help?"
                      maxLength={150}
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">
                    Message <span>*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us how we can help..."
                    rows={6}
                    maxLength={5000}
                    required
                  />
                </div>

                {/* Compact CAPTCHA */}
                <div className="home-contact-captcha">
                  <div className="home-captcha-heading">
                    <div>
                      <label htmlFor="home-captcha-answer">
                        Security Verification
                      </label>

                      <p>Enter the characters shown below.</p>
                    </div>

                    <button
                      type="button"
                      className="home-captcha-refresh"
                      onClick={refreshCaptcha}
                      aria-label="Generate a new CAPTCHA code"
                      title="Generate a new code"
                    >
                      <span aria-hidden="true">↻</span>
                      Refresh
                    </button>
                  </div>

                  <div className="home-captcha-challenge-row">
                    <div
                      className="home-captcha-challenge"
                      aria-label="CAPTCHA challenge with five characters"
                    >
                      {captcha.split('').map((character, index) => (
                        <span
                          className={`home-captcha-character home-captcha-character-${index + 1}`}
                          key={`${character}-${index}`}
                          aria-hidden="true"
                        >
                          {character}
                        </span>
                      ))}
                    </div>

                    <span className="home-captcha-length">
                      5 characters
                    </span>
                  </div>

                  <div className="home-captcha-input-group">
                    <input
                      id="home-captcha-answer"
                      name="captcha"
                      type="text"
                      value={captchaInput}
                      onChange={(event) => {
                        setCaptchaInput(
                          event.target.value
                            .replace(/[^a-zA-Z0-9]/g, '')
                            .slice(0, 5)
                        )

                        setCaptchaError('')
                      }}
                      placeholder="Enter CAPTCHA code"
                      autoComplete="off"
                      autoCapitalize="characters"
                      spellCheck={false}
                      maxLength={5}
                      aria-invalid={Boolean(captchaError)}
                      aria-describedby={
                        captchaError
                          ? 'home-captcha-error'
                          : 'home-captcha-help'
                      }
                      required
                    />

                    {captchaError ? (
                      <p
                        id="home-captcha-error"
                        className="home-captcha-error"
                        role="alert"
                      >
                        {captchaError}
                      </p>
                    ) : (
                      <p
                        id="home-captcha-help"
                        className="home-captcha-help"
                      >
                        Letters are not case-sensitive.
                      </p>
                    )}
                  </div>
                </div>

                {status.message && (
                  <div
                    className={`contact-form-status ${status.type}`}
                    role="status"
                    aria-live="polite"
                  >
                    {status.message}
                  </div>
                )}

                <div className="contact-form-footer">
                  <p>
                    <span>*</span> Required fields
                  </p>

                  <button
                    type="submit"
                    className="contact-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="contact-closing">
        <div className="container">
          <div className="contact-closing-content">
            <span>MCS-EDC</span>

            <h2>Building Opportunity Together</h2>

            <p>
              Your questions, ideas, and connections help us
              build stronger communities and create new
              opportunities.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Contact
