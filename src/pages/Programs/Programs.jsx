import './Programs.css'

import manzanoFamily from '../../assets/manzano-family-success-story.webp'
import youthbuild from '../../assets/youthbuild-program.webp'
import wildfireCleanup from '../../assets/wildfire-severe-storm-cleanup-projects.webp'
import seedsETP from '../../assets/seeds-2-5-etp.webp'
import youthbuildStory from '../../assets/mcs-edc-blog-card-5.webp'
import wipaProgram from '../../assets/mcs-edc-blog-card-6.webp'

const programs = [
  {
    image: manzanoFamily,
    date: '8 May 2026',
    category: 'Success Story',
    title: 'SEEDS 2.5 : Manzano Family Success Story',
    link: '/programs/program-one',
  },
  {
    image: youthbuild,
    date: '22 April 2026',
    category: 'Program Update',
    title: 'Newsletter : Youthbuild Presentation',
    link: '/programs/program-two',
  },
  {
    image: wildfireCleanup,
    date: '14 June 2025',
    category: 'Community Recovery',
    title: 'Wildfire and Severe Storm Clean-Up Projects',
    link: '/programs/program-three',
  },
  {
    image: seedsETP,
    date: '13 June 2025',
    category: 'Program Initiative',
    title: 'MCS EDC SEEDS 2.5 ETP',
    link: '/programs/program-four',
  },
  {
    image: youthbuildStory,
    date: '13 June 2025',
    category: 'Youth Development',
    title: 'MCS EDC YouthBuild',
    link: '/programs/program-five',
  },
  {
    image: wipaProgram,
    date: '13 June 2025',
    category: 'Program',
    title: 'MCS EDC WIPA Program',
    link: '/programs/program-six',
  },
]

function Programs() {
  return (
    <main className="programs-page">

      <section className="programs-hero">
        <div className="container">
          <div className="programs-hero-content">
            <span>Explore</span>

            <h1>Programs & Stories</h1>

            <div
              className="programs-hero-line"
              aria-hidden="true"
            ></div>

            <p>
              Discover the programs, initiatives, and community
              stories that reflect MCS-EDC&apos;s commitment to
              workforce and economic development.
            </p>
          </div>
        </div>
      </section>

      <section className="programs-list-section">
        <div className="container">

          <div className="programs-section-heading">
            <span>Our Work</span>

            <h2>Programs & Community Impact</h2>

            <p>
              Explore our latest programs, success stories,
              community initiatives, and opportunities.
            </p>
          </div>

          <div className="programs-grid">
            {programs.map((program) => (
              <article
                className="program-card"
                key={program.link}
              >
                <a
                  href={program.link}
                  className="program-card-image-link"
                  aria-label={`Read ${program.title}`}
                >
                  <div className="program-card-image">
                    <img
                      src={program.image}
                      alt=""
                      loading="lazy"
                      width="600"
                      height="450"
                    />
                  </div>
                </a>

                <div className="program-card-content">

                  <div className="program-card-meta">
                    <span>{program.category}</span>
                    <time>{program.date}</time>
                  </div>

                  <h3>
                    <a href={program.link}>
                      {program.title}
                    </a>
                  </h3>

                  <a
                    href={program.link}
                    className="program-card-link"
                  >
                    Read More
                    <span aria-hidden="true">→</span>
                  </a>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}

export default Programs