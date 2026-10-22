
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
  const [captcha, setCaptcha] = useState(generateCaptcha)
  const [captchaInput, setCaptchaInput] = useState('')
  const [captchaError, setCaptchaError] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha())
    setCaptchaInput('')
    setCaptchaError('')
    setFormMessage('')
    setMessageType('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setCaptchaError('')
    setFormMessage('')
    setMessageType('')

    if (!captchaInput.trim()) {
      setCaptchaError('Please enter the CAPTCHA code.')
      return
    }

    if (captchaInput.trim().toUpperCase() !== captcha) {
      setCaptchaError(
        'The CAPTCHA code is incorrect. Please try again.'
      )
      setCaptcha(generateCaptcha())
      setCaptchaInput('')
      return
    }

    /*
      CAPTCHA verification passed in the browser.

      Email delivery is not connected in this handler.
      Connect a server-side endpoint before using this
      form to receive real contact messages.
    */

    setMessageType('success')
    setFormMessage(
      'CAPTCHA verified successfully! Email submission is not connected yet.'
    )

    setCaptcha(generateCaptcha())
    setCaptchaInput('')
    event.currentTarget.reset()
  }

  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="container">

          <div className="contact-layout">

            {/* Contact information */}
            <aside className="contact-info-panel">

              <span className="contact-eyebrow">
                Get In Touch
              </span>

              <h1>
                Let's start a
                <br />
                conversation.
              </h1>

              <p className="contact-intro">
                Have a question about MCS-EDC, our programs,
                or the opportunities we offer? Send us a
                message and connect with our team.
              </p>

              <div className="contact-info-list">

                <div className="contact-info-item">
                  <span className="contact-info-label">
                    Email
                  </span>
                  <a href="mailto:info@mcs-edc.org">
                    info@mcs-edc.org
                  </a>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-label">
                    Address
                  </span>
                  <p>
                    3333 Wilshire Blvd. Suite 405
                    <br />
                    Los Angeles, CA 90010
                  </p>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-label">
                    Office Hours
                  </span>
                  <p>Monday – Friday, 9:00 AM – 5:00 PM</p>
                </div>

              </div>

              <div className="contact-info-bottom">
                Workforce and Economic Development for All.
              </div>

            </aside>


            {/* Contact form */}
            <div className="contact-form-panel">

              <div className="contact-form-heading">
                <span>Contact Us</span>
                <h2>Send us a message</h2>
                <p>
                  Fill in the details below. All fields are
                  required.
                </p>
              </div>


              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form-row">

                  <div className="contact-form-group">
                    <label htmlFor="contact-name">
                      Full Name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      autoComplete="name"
                      maxLength={100}
                      required
                    />
                  </div>


                  <div className="contact-form-group">
                    <label htmlFor="contact-email">
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      maxLength={254}
                      required
                    />
                  </div>

                </div>


                <div className="contact-form-group">
                  <label htmlFor="contact-subject">
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="What is your message about?"
                    maxLength={150}
                    required
                  />
                </div>


                <div className="contact-form-group">
                  <label htmlFor="contact-message">
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    maxLength={5000}
                    required
                  />
                </div>


                {/* Custom text CAPTCHA */}
                <div className="contact-captcha">

                  <div className="contact-captcha-heading">
                    <div>
                      <label htmlFor="captcha-answer">
                        Security Verification
                      </label>

                      <p>
                        Enter the characters shown below.
                      </p>
                    </div>

                    <button
                      type="button"
                      className="captcha-refresh"
                      onClick={refreshCaptcha}
                      aria-label="Generate a new CAPTCHA code"
                      title="Generate a new code"
                    >
                      <span aria-hidden="true">↻</span>
                      <span>Refresh</span>
                    </button>
                  </div>


                  <div className="captcha-challenge-row">

                    <div
                      className="captcha-challenge"
                      aria-label="CAPTCHA code. Enter the five displayed characters."
                    >
                      {captcha.split('').map((character, index) => (
                        <span
                          className={`captcha-character captcha-character-${index + 1}`}
                          key={`${character}-${index}`}
                          aria-hidden="true"
                        >
                          {character}
                        </span>
                      ))}
                    </div>

                    <span className="captcha-length">
                      5 characters
                    </span>

                  </div>


                  <div className="contact-form-group captcha-input-group">
                    <input
                      id="captcha-answer"
                      name="captcha"
                      type="text"
                      placeholder="Enter CAPTCHA code"
                      value={captchaInput}
                      onChange={(event) => {
                        setCaptchaInput(
                          event.target.value
                            .replace(/[^a-zA-Z0-9]/g, '')
                            .slice(0, 5)
                        )

                        setCaptchaError('')
                        setFormMessage('')
                        setMessageType('')
                      }}
                      autoComplete="off"
                      autoCapitalize="characters"
                      spellCheck={false}
                      maxLength={5}
                      aria-invalid={Boolean(captchaError)}
                      aria-describedby={
                        captchaError
                          ? 'captcha-error'
                          : 'captcha-help'
                      }
                      required
                    />

                    {captchaError && (
                      <p
                        className="captcha-error"
                        id="captcha-error"
                        role="alert"
                      >
                        {captchaError}
                      </p>
                    )}

                    {!captchaError && (
                      <p
                        className="captcha-help"
                        id="captcha-help"
                      >
                        Letters are not case-sensitive.
                      </p>
                    )}
                  </div>

                </div>


                {formMessage && (
                  <div
                    className={`contact-form-feedback ${messageType}`}
                    role="status"
                    aria-live="polite"
                  >
                    {formMessage}
                  </div>
                )}


                <button
                  type="submit"
                  className="contact-submit-button"
                >
                  Verify and Continue
                  <span aria-hidden="true">→</span>
                </button>

                <p className="contact-form-note">
                  Your information should be handled securely.
                  Do not include passwords or sensitive personal
                  information in your message.
                </p>

              </form>

            </div>

          </div>

        </div>
      </section>
    </main>
  )
}

export default Contact
