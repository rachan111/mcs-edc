import wipaImage from '../../../assets/mcs-edc-blog-card-6.png'
import manzanoImage from '../../../assets/manzano-family-success-story.png'
import youthbuildPresentationImage from '../../../assets/youthbuild-program.png'
import wildfireImage from '../../../assets/wildfire-severe-storm-cleanup-projects.png'
import seedsImage from '../../../assets/seeds-2-5-etp.png'
import youthbuildImage from '../../../assets/mcs-edc-blog-card-5.png'

import './ProgramSix.css'

const relatedPrograms = [
  {
    id: 1,
    title: 'SEEDS 2.5 : Manzano Family Success Story',
    date: '8 May 2026',
    image: manzanoImage,
    path: '/programs/program-one',
  },
  {
    id: 2,
    title: 'Newsletter : Youthbuild Presentation',
    date: '22 April 2026',
    image: youthbuildPresentationImage,
    path: '/programs/program-two',
  },
  {
    id: 3,
    title: 'Wildfire and Severe Storm Clean-Up Projects',
    date: '14 June 2025',
    image: wildfireImage,
    path: '/programs/program-three',
  },
  {
    id: 4,
    title: 'MCS EDC SEEDS 2.5 ETP',
    date: '13 June 2025',
    image: seedsImage,
    path: '/programs/program-four',
  },
  {
    id: 5,
    title: 'MCS EDC Youthbuild',
    date: '13 June 2025',
    image: youthbuildImage,
    path: '/programs/program-five',
  },
  {
    id: 6,
    title: 'MCS EDC WIPA Program',
    date: '13 June 2025',
    image: wipaImage,
    path: '/programs/program-six',
  },
]

function ProgramSix() {
  const handleShare = async () => {
    const shareUrl = window.location.href

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'MCS EDC WIPA Program',
          text: 'MCS EDC WIPA Program',
          url: shareUrl,
        })
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl)
        alert('Link copied to clipboard.')
      } else {
        alert('Sharing is not supported on this browser.')
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Share failed:', error)
      }
    }
  }

  return (
    <main className="program-six-page">

      <section className="program-six-hero">
        <div className="container">
          <div className="program-six-hero-content">

            <span className="program-six-category">
              Program
            </span>

            <h1>
              MCS EDC WIPA Program
            </h1>

            <span className="program-six-date">
              13 June 2025
            </span>

          </div>
        </div>
      </section>

      <section className="program-six-content-section">
        <div className="container">

          <div className="program-six-layout">

            <article className="program-six-article">

              <div className="program-six-featured-image">
                <img
                  src={wipaImage}
                  alt="MCS EDC WIPA Program"
                />
              </div>

              <div className="program-six-article-body">

                <p>
                  MCS Economic Development Corporation is a
                  competitively procured cooperative award grantee
                  with the Social Security Administration. MCS EDC
                  provides Social Security Work Incentive Planning
                  and Assistance (WIPA) services to individuals with
                  disabilities residing in qualifying* zip codes
                  throughout Los Angeles, Ventura and Santa Barbara
                  Counties.
                </p>

              </div>

              <div className="program-six-share">

                <span>
                  Share this post:
                </span>

                <button
                  type="button"
                  onClick={handleShare}
                >
                  Share
                </button>

              </div>

            </article>

            <aside className="program-six-sidebar">

              <div className="program-six-sidebar-card">

                <h2>
                  Explore More
                </h2>

                <p className="program-six-sidebar-subtitle">
                  Programs &amp; Stories
                </p>

                <div className="program-six-related-list">

                  {relatedPrograms.map((program) => (
                    <a
                      key={program.id}
                      href={program.path}
                      className={`program-six-related-item ${
                        program.id === 6 ? 'current' : ''
                      }`}
                    >

                      <div className="program-six-related-image">
                        <img
                          src={program.image}
                          alt=""
                        />
                      </div>

                      <div className="program-six-related-content">

                        <span className="program-six-related-date">
                          {program.date}
                        </span>

                        <h3>
                          {program.title}
                        </h3>

                        <span className="program-six-related-link">
                          Read More →
                        </span>

                      </div>

                    </a>
                  ))}

                </div>

              </div>

            </aside>

          </div>

        </div>
      </section>

    </main>
  )
}

export default ProgramSix