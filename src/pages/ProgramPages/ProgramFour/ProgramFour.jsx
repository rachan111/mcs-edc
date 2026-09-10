import seedsImage from '../../../assets/seeds-2-5-etp.png'

import manzanoImage from '../../../assets/manzano-family-success-story.png'
import youthbuildImage from '../../../assets/youthbuild-program.png'
import wildfireImage from '../../../assets/wildfire-severe-storm-cleanup-projects.png'
import youthbuildCardFiveImage from '../../../assets/mcs-edc-blog-card-5.png'
import wipaImage from '../../../assets/mcs-edc-blog-card-6.png'

import './ProgramFour.css'

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

function ProgramFour() {
  const handleShare = async () => {
    const shareData = {
      title: 'MCS EDC SEEDS 2.5 ETP',
      text: 'MCS EDC SEEDS 2.5 ETP - MCS EDC',
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
              Program Initiative
            </span>

            <h1>
              MCS EDC SEEDS 2.5 ETP
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
                  src={seedsImage}
                  alt="MCS EDC SEEDS 2.5 ETP initiative"
                />
              </div>

              <div className="blog-article-body">

                <p>
                  MCS EDC’s SEED Initiative: Silicosis
                  Impacted: Economic Empowerment for Immigrant
                  Workers will target these incredibly vulnerable
                  Silicosis-affected communities to offer an
                  alternative path to economic stability and
                  self-sufficiency through entrepreneurship,
                  addressing both economic and health-related
                  challenges.
                </p>

                <p>
                  The primary demographic consists of immigrant
                  Latino workers, predominantly Spanish-speaking
                  LEP individuals, who face significant barriers
                  including health risks, limited legal status,
                  inconsistent enforcement of safety measures, and
                  a lack of awareness about their long-term health
                  impacts and rights as workers.
                </p>

                <p>
                  MCS EDC’s SEED program Silicosis Impacted:
                  Economic Empowerment for Immigrant Workers will
                  provide comprehensive entrepreneurial training
                  and support to empower these individuals,
                  offering viable new career paths outside of
                  hazardous work environments.
                </p>

                <p>
                  By focusing on culturally and linguistically
                  adapted outreach and technical assistance, MCS
                  EDC seeks to foster economic mobility and
                  self-sufficiency, reduce reliance on high-risk
                  employment, and promote community health and
                  economic stability.
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
                    important initiative.
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
                        program.id === 4
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

export default ProgramFour