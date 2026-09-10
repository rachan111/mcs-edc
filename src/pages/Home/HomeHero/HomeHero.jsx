import heroImage from '../../../assets/mcs-edc-hero-desktop.png'
import './HomeHero.css'

function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero-image">
        <img
          src={heroImage}
          alt="Workforce professional wearing safety equipment at a construction site"
          width="1920"
          height="1024"
          fetchPriority="high"
        />
      </div>

      <div className="home-hero-overlay">
        <div className="container">
          <div className="home-hero-content">

            <h1>
              Workforce and
              <span>Economic Development for All</span>
            </h1>

            <div className="home-hero-line" aria-hidden="true"></div>

            <p>
              Building stronger communities through opportunity,
              skills, and sustainable growth.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero