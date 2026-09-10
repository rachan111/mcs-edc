import './Contact.css'

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">

        {/* Contact Heading */}
        <div className="contact-heading">
          <span className="contact-label">
            Get In Touch
          </span>

          <h2>Contact Us</h2>

          <div
            className="contact-line"
            aria-hidden="true"
          ></div>

          <p>
            Have a question, want to learn more about our programs,
            or looking to connect with MCS-EDC? We would love to
            hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* Name + Email */}
            <div className="contact-form-row">

              <div className="form-field">
                <label htmlFor="contact-name">
                  Name
                </label>

                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">
                  Email
                </label>

                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </div>

            </div>

            {/* Message */}
            <div className="form-field">
              <label htmlFor="contact-message">
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your message..."
                rows="6"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="contact-submit"
            >
              Submit
              <span aria-hidden="true">→</span>
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact