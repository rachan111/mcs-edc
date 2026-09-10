import './Newsletter.css'

const newsletters = [
  {
    id: 1,
    title: 'Newsletter : YouthBuild Presentation',
    date: '22 April 2026',
    category: 'Newsletter',
    description:
      'Explore the latest YouthBuild presentation and learn more about the opportunities and work connected with the program.',
    link: '/programs/program-two',
  },
]

function Newsletter() {
  return (
    <main className="newsletter-page">

      {/* Hero */}
      <section className="newsletter-hero">
        <div className="container">
          <div className="newsletter-hero-content">

            <span>Stay Connected</span>

            <h1>Newsletter</h1>

            <div
              className="newsletter-hero-line"
              aria-hidden="true"
            ></div>

            <p>
              News, updates, and highlights from MCS-EDC.
            </p>

          </div>
        </div>
      </section>


      {/* Newsletter Archive */}
      <section className="newsletter-section">
        <div className="container">

          <div className="newsletter-section-header">

            <div>
              <span>Latest Updates</span>

              <h2>From MCS-EDC</h2>
            </div>

            <p>
              Stay informed about our programs, initiatives,
              and the work happening across our communities.
            </p>

          </div>


          <div className="newsletter-grid">

            {newsletters.map((newsletter) => (
              <article
                className="newsletter-card"
                key={newsletter.id}
              >

                <div className="newsletter-card-preview">
                  <div className="newsletter-paper">

                    <div className="newsletter-paper-top">
                      <span>MCS-EDC</span>
                      <span>NEWSLETTER</span>
                    </div>

                    <div className="newsletter-paper-content">

                      <span className="newsletter-paper-label">
                        YouthBuild
                      </span>

                      <h3>
                        YouthBuild
                        <br />
                        Presentation
                      </h3>

                      <div
                        className="newsletter-paper-line"
                        aria-hidden="true"
                      ></div>

                      <p>
                        Workforce development,
                        opportunity, and community.
                      </p>

                    </div>

                    <div className="newsletter-paper-footer">
                      MCS-EDC
                    </div>

                  </div>
                </div>


                <div className="newsletter-card-content">

                  <div className="newsletter-card-meta">
                    <span>{newsletter.category}</span>
                    <time>{newsletter.date}</time>
                  </div>

                  <h3>{newsletter.title}</h3>

                  <p>
                    {newsletter.description}
                  </p>

                  <a
                    href={newsletter.link}
                    className="newsletter-read-more"
                  >
                    Read Newsletter
                    <span aria-hidden="true">→</span>
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* More Coming */}
      <section className="newsletter-coming">
        <div className="container">

          <div className="newsletter-coming-inner">

            <div>
              <span>More To Come</span>

              <h2>
                More MCS-EDC
                <br />
                updates are on the way.
              </h2>
            </div>

            <p>
              We will continue adding newsletters and updates
              as they become available.
            </p>

          </div>

        </div>
      </section>


      {/* Contact */}
      <section className="newsletter-contact">
        <div className="container">

          <div className="newsletter-contact-inner">

            <div>
              <span>Stay Connected</span>

              <h2>
                Have a question?
              </h2>
            </div>

            <a href="/contact">
              Contact Us
              <span aria-hidden="true">→</span>
            </a>

          </div>

        </div>
      </section>

    </main>
  )
}

export default Newsletter