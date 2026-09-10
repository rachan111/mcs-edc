import manzanoImage from '../../../assets/manzano-family-success-story.png'
import youthbuildImage from '../../../assets/youthbuild-program.png'
import wildfireImage from '../../../assets/wildfire-severe-storm-cleanup-projects.png'
import seedsImage from '../../../assets/seeds-2-5-etp.png'
import youthbuildCardFiveImage from '../../../assets/mcs-edc-blog-card-5.png'
import wipaImage from '../../../assets/mcs-edc-blog-card-6.png'

import './ProgramOne.css'

const otherPrograms = [
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
    image: youthbuildImage,
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
    image: youthbuildCardFiveImage,
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

function ProgramOne() {
  const handleShare = async () => {
    const shareData = {
      title: 'SEEDS 2.5 : Manzano Family Success Story',
      text: 'SEEDS 2.5 : Manzano Family Success Story - MCS EDC',
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch {
        // User cancelled the share dialog.
      }

      return
    }

    try {
      await navigator.clipboard.writeText(window.location.href)
      alert('Blog link copied to clipboard.')
    } catch {
      alert('Unable to copy the blog link.')
    }
  }

  return (
    <main className="blog-page">

      {/* =========================
          Blog Hero
          ========================= */}

      <section className="blog-hero">
        <div className="container">

          <div className="blog-hero-content">

            <span className="blog-category">
              Success Story
            </span>

            <h1>
              SEEDS 2.5 : Manzano Family Success Story
            </h1>

            <div className="blog-hero-meta">
              <span>8 May 2026</span>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          Blog Content
          ========================= */}

      <section className="blog-content-section">
        <div className="container">

          <div className="blog-layout">

            {/* Main Article */}

            <article className="blog-article">

              <div className="blog-featured-image">
                <img
                  src={manzanoImage}
                  alt="Manzano family success story"
                />
              </div>

              <div className="blog-article-body">

                <p>
                  The Manzano family has turned their individual
                  passions into a thriving entrepreneurial network
                  within Panorama City.
                </p>

                <p>
                  Ricardo Manzano launched
                  “Party Rentals Manzano,” utilizing SEEDS grant
                  funds to expand his inventory of jumpers and
                  chairs to better serve local celebrations, while
                  Ismael Manzano established “Mundo De Globos” to
                  provide professional balloon artistry and event
                  decor.
                </p>

                <p>
                  By partnering together, Ricardo and Ismael
                  provide a streamlined experience for event
                  essentials.
                </p>

                <p>
                  While Ricardo and Ismael handle the event side
                  of the business, Jonatan Manzano contributes to
                  the family’s success through
                  “Venta de Zapatos Manzano,” turning his personal
                  passion for sneaker collecting into a
                  professional online venture.
                </p>

                <p>
                  The SEEDS grant provided the critical funding
                  and professional training the Manzano family
                  needed to transform their individual passions
                  into formal, flourishing businesses, turning
                  their creative hobbies into a unified family
                  success story.
                </p>

              </div>


              {/* Share */}

              <div className="blog-share">

                <div className="blog-share-content">
                  <span className="blog-share-label">
                    Share this post
                  </span>

                  <p>
                    Help us spread the word about this
                    community success story.
                  </p>
                </div>

                <button
                  type="button"
                  className="blog-share-button"
                  onClick={handleShare}
                >
                  Share Post
                  <span aria-hidden="true">→</span>
                </button>

              </div>

            </article>


            {/* Sidebar */}

            <aside className="blog-sidebar">

              <div className="blog-sidebar-card">

                <div className="blog-sidebar-heading">
                  <span>
                    Explore More
                  </span>

                  <h2>
                    Programs & Stories
                  </h2>

                  <div
                    className="blog-sidebar-line"
                    aria-hidden="true"
                  ></div>
                </div>


                <div className="blog-sidebar-list">

                  {otherPrograms.map((program) => (
                    <a
                      key={program.id}
                      href={program.path}
                      className={`blog-sidebar-item ${
                        program.id === 1
                          ? 'current'
                          : ''
                      }`}
                    >

                      <div className="blog-sidebar-image">
                        <img
                          src={program.image}
                          alt=""
                        />
                      </div>

                      <div className="blog-sidebar-info">

                        <span className="blog-sidebar-date">
                          {program.date}
                        </span>

                        <h3>
                          {program.title}
                        </h3>

                        <span className="blog-sidebar-link">
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

export default ProgramOne