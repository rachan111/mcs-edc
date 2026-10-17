import youthbuildImage from '../../../assets/mcs-edc-blog-card-5.webp'

import manzanoImage from '../../../assets/manzano-family-success-story.webp'
import youthbuildPresentationImage from '../../../assets/youthbuild-program.webp'
import wildfireImage from '../../../assets/wildfire-severe-storm-cleanup-projects.webp'
import seedsImage from '../../../assets/seeds-2-5-etp.webp'
import wipaImage from '../../../assets/mcs-edc-blog-card-6.webp'

import './ProgramFive.css'

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

function ProgramFive() {
  const handleShare = async () => {
    const shareData = {
      title: 'MCS EDC YouthBuild',
      text: 'MCS EDC YouthBuild - MCS EDC',
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
              Youth Development
            </span>

            <h1>
              MCS EDC YouthBuild
            </h1>

            <div className="blog-hero-meta">
              <span>13 June 2025</span>
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
                  src={youthbuildImage}
                  alt="MCS EDC YouthBuild program"
                />
              </div>

              <div className="blog-article-body">

                <p>
                  MCS EDC operates a Department of Labor
                  YouthBuild Program for disconnected young adults
                  residing in the East San Gabriel Valley.
                </p>

                <p>
                  YouthBuild provides hands-on construction
                  training experience and classroom training in
                  construction.
                </p>

                <p>
                  All youth participants will complete coursework
                  and upon completion receive Nationally
                  recognized Home Builders Institute's
                  Pre-Apprenticeship Certificate.
                </p>

                <p>
                  YouthBuild also provides opportunities for team
                  building and personal development.
                </p>

              </div>


              {/* Share */}

              <div className="blog-share">

                <div className="blog-share-content">
                  <span className="blog-share-label">
                    Share this post
                  </span>

                  <p>
                    Help us spread the word about YouthBuild
                    opportunities.
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
                        program.id === 5
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

export default ProgramFive