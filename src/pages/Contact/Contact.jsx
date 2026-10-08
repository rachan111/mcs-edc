import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Unable to send your message.')
      }

      setStatus({ type: 'success', message: result.message })
      event.currentTarget.reset()
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to send your message right now.'
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
            ></div>

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

                <span>
                  Send a Message
                </span>

                <h2>
                  How can we help?
                </h2>

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
                      Full Name
                      <span>*</span>
                    </label>

                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                    />
                  </div>


                  <div className="contact-field">
                    <label htmlFor="contact-email">
                      Email Address
                      <span>*</span>
                    </label>

                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="you@example.com"
                      autoComplete="email"
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
                    />
                  </div>


                  <div className="contact-field">
                    <label htmlFor="contact-subject">
                      Subject
                      <span>*</span>
                    </label>

                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                </div>


                <div className="contact-field">

                  <label htmlFor="contact-message">
                    Message
                    <span>*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us how we can help..."
                    rows="6"
                    required
                  ></textarea>

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
                    <span>*</span>
                    Required fields
                  </p>

                  <button
                    type="submit"
                    className="contact-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <span aria-hidden="true">
                      →
                    </span>
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

            <h2>
              Building Opportunity Together
            </h2>

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