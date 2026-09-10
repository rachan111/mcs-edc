import youthbuildImage from '../../../assets/youthbuild-program.png'

import manzanoImage from '../../../assets/manzano-family-success-story.png'
import wildfireImage from '../../../assets/wildfire-severe-storm-cleanup-projects.png'
import seedsImage from '../../../assets/seeds-2-5-etp.png'
import youthbuildCardFiveImage from '../../../assets/mcs-edc-blog-card-5.png'
import wipaImage from '../../../assets/mcs-edc-blog-card-6.png'

import './ProgramTwo.css'

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

function ProgramTwo() {
  const handleShare = async () => {
    const shareData = {
      title: 'Newsletter : Youthbuild Presentation',
      text: 'Newsletter : Youthbuild Presentation - MCS EDC',
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
              Program Update
            </span>

            <h1>
              Newsletter : Youthbuild Presentation
            </h1>

            <div className="blog-hero-meta">
              <span>22 April 2026</span>
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
                  alt="MCS EDC YouthBuild program presentation"
                />
              </div>

              <div className="blog-article-body">

                <p>
                  MCS EDC’s YouthBuild staff participated in the
                  Department of Labor’s Annual YouthBuild Grantee
                  Convening held March 10–12, 2026.
                </p>

                <p>
                  During the event, YouthBuild Program Director
                  Sam Cabrera, along with Activities/Educational
                  Coordinator Lauren Foley and Case Manager
                  Michael Garcia, had the opportunity to share
                  their best practices and hard-won lessons with
                  fellow DOL YouthBuild grantees.
                </p>

                <p>
                  The program continues to demonstrate strong
                  outcomes, with participants successfully
                  completing classroom training, engaging in
                  hands-on learning through partnerships with
                  Habitat for Humanity, and transitioning into
                  unsubsidized employment with local unions.
                </p>

                <p>
                  YouthBuild also plays a critical role in
                  supporting participants as they overcome
                  significant life barriers, including
                  homelessness, housing insecurity, and prior
                  justice involvement.
                </p>

                <p>
                  MCS EDC looks forward to continuing to build on
                  these positive outcomes, and interested
                  participants are encouraged to reach out via
                  email at{' '}
                  <a
                    href="mailto:mgarcia@mcslosangeles.com"
                    className="blog-email-link"
                  >
                    mgarcia@mcslosangeles.com
                  </a>{' '}
                  or{' '}
                  <a
                    href="mailto:lfoley@mcslosangeles.com"
                    className="blog-email-link"
                  >
                    lfoley@mcslosangeles.com
                  </a>
                  .
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
                    program update.
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
                        program.id === 2
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

export default ProgramTwo