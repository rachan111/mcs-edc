import './About.css'

function About() {
  return (
    <main className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span>About Us</span>

            <h1>MCS-EDC</h1>

            <div
              className="about-hero-line"
              aria-hidden="true"
            ></div>

            <p>
              Workforce and Economic Development for All.
            </p>
          </div>
        </div>
      </section>


      {/* Who We Are */}
      <section className="about-intro">
        <div className="container">

          <div className="about-intro-grid">

            <div className="about-intro-title">
              <span>Who We Are</span>
              <h2>
                Creating opportunities.
                <br />
                Building futures.
              </h2>
            </div>

            <div className="about-intro-text">
              <p>
                MCS-EDC works to create pathways to workforce
                and economic opportunity for individuals,
                families, and communities.
              </p>

              <p>
                Through our programs and partnerships, we connect
                people with opportunities that can help them
                learn, work, grow, and build a stronger future.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Mission */}
      <section className="about-mission">
        <div className="container">

          <div className="about-mission-inner">

            <span>Our Mission</span>

            <h2>
              Workforce and Economic
              <br />
              Development <strong>for All.</strong>
            </h2>

          </div>

        </div>
      </section>


      {/* What We Do */}
      <section className="about-focus">
        <div className="container">

          <div className="about-focus-heading">
            <span>What We Do</span>

            <h2>
              Focused on opportunity.
            </h2>
          </div>


          <div className="about-focus-grid">

            <div className="about-focus-item">
              <span>01</span>

              <h3>Workforce Development</h3>

              <p>
                Helping people build skills and connect with
                employment opportunities.
              </p>
            </div>


            <div className="about-focus-item">
              <span>02</span>

              <h3>Economic Opportunity</h3>

              <p>
                Supporting pathways toward greater economic
                independence and stability.
              </p>
            </div>


            <div className="about-focus-item">
              <span>03</span>

              <h3>Community Development</h3>

              <p>
                Supporting initiatives that help create stronger
                and more resilient communities.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Closing */}
      <section className="about-closing">
        <div className="container">

          <div className="about-closing-inner">

            <div>
              <span>MCS-EDC</span>

              <h2>
                Opportunity starts
                <br />
                with connection.
              </h2>
            </div>

            <div className="about-closing-action">

              <p>
                Learn more about our work or connect with
                the MCS-EDC team.
              </p>

              <a href="/contact">
                Contact Us
                <span aria-hidden="true">→</span>
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}

export default About