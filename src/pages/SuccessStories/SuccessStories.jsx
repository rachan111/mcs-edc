import './SuccessStories.css'

import manzanoFamily from '../../assets/manzano-family-success-story.png'

const successStories = [
  {
    title: 'SEEDS 2.5 : Manzano Family Success Story',
    date: '8 May 2026',
    link: '/success-stories',
  },
]

function SuccessStories() {
  return (
    <main className="success-stories-page">

      {/* Page Hero */}

      <section className="success-stories-hero">
        <div className="container">
          <div className="success-stories-hero-content">

            <span>Our Impact</span>

            <h1>Success Stories</h1>

            <div
              className="success-stories-hero-line"
              aria-hidden="true"
            ></div>

            <p>
              Stories of individuals, families, and communities
              creating new opportunities and building stronger
              futures.
            </p>

          </div>
        </div>
      </section>


      {/* Main Content */}

      <section className="success-stories-content-section">
        <div className="container">

          <div className="success-stories-layout">

            {/* Main Story */}

            <article className="success-story-article">

              <div className="success-story-header">

                <span className="success-story-category">
                  Success Story
                </span>

                <h2>
                  SEEDS 2.5 : Manzano Family Success Story
                </h2>

                <time dateTime="2026-05-08">
                  8 May 2026
                </time>

              </div>


              <div className="success-story-featured-image">
                <img
                  src={manzanoFamily}
                  alt="Manzano family success story"
                  width="1280"
                  height="1280"
                />
              </div>


              <div className="success-story-body">

                <p className="success-story-introduction">
                  The Manzano family has turned their individual
                  passions into a thriving entrepreneurial network
                  within Panorama City.
                </p>

                <p>
                  Ricardo Manzano launched
                  <strong> “Party Rentals Manzano,” </strong>
                  utilizing SEEDS grant funds to expand his
                  inventory of jumpers and chairs to better serve
                  local celebrations, while Ismael Manzano
                  established
                  <strong> “Mundo De Globos” </strong>
                  to provide professional balloon artistry and
                  event decor.
                </p>

                <p>
                  By partnering together, Ricardo and Ismael provide
                  a streamlined experience for event essentials.
                  While Ricardo and Ismael handle the event side of
                  the business, Jonatan Manzano contributes to the
                  family&apos;s success through
                  <strong> “Venta de Zapatos Manzano,” </strong>
                  turning his personal passion for sneaker
                  collecting into a professional online venture.
                </p>


                <div className="success-story-highlight">

                  <span>
                    The Impact of SEEDS 2.5
                  </span>

                  <h3>
                    Turning Passion Into Opportunity
                  </h3>

                  <p>
                    The SEEDS grant provided the critical funding
                    and professional training the Manzano family
                    needed to transform their individual passions
                    into formal, flourishing businesses.
                  </p>

                </div>


                <p>
                  The SEEDS grant provided the critical funding and
                  professional training the Manzano family needed
                  to transform their individual passions into
                  formal, flourishing businesses, turning their
                  creative hobbies into a unified family success
                  story.
                </p>


                <div className="success-story-conclusion">

                  <div
                    className="success-story-conclusion-line"
                    aria-hidden="true"
                  ></div>

                  <p>
                    Their story is a powerful example of how access
                    to resources, training, and opportunity can
                    help individuals turn their skills and passions
                    into sustainable economic opportunities.
                  </p>

                </div>

              </div>

            </article>


            {/* Success Stories Sidebar */}

            <aside className="success-stories-sidebar">

              <div className="success-stories-sidebar-inner">

                <span className="sidebar-label">
                  Explore
                </span>

                <h2>
                  More Success Stories
                </h2>

                <div
                  className="sidebar-line"
                  aria-hidden="true"
                ></div>


                <div className="success-stories-list">

                  {successStories.map((story) => (
                    <a
                      href={story.link}
                      className="success-story-sidebar-link"
                      key={story.link}
                    >
                      <div className="sidebar-story-content">

                        <span className="sidebar-story-date">
                          {story.date}
                        </span>

                        <h3>
                          {story.title}
                        </h3>

                        <span className="sidebar-read-more">
                          Read Story
                          <span aria-hidden="true">
                            →
                          </span>
                        </span>

                      </div>
                    </a>
                  ))}

                </div>


                <div className="coming-soon-sidebar">

                  <span>
                    More stories coming soon
                  </span>

                  <p>
                    We are working to bring you more stories
                    highlighting the people and communities
                    MCS-EDC serves.
                  </p>

                </div>

              </div>

            </aside>

          </div>

        </div>
      </section>

    </main>
  )
}

export default SuccessStories