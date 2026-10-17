import { useEffect, useState } from 'react'

import manzanoImage from '../../../assets/manzano-family-success-story.webp'
import youthbuildImage from '../../../assets/youthbuild-program.webp'
import wildfireImage from '../../../assets/wildfire-severe-storm-cleanup-projects.webp'
import seedsImage from '../../../assets/seeds-2-5-etp.webp'
import youthbuildCardFiveImage from '../../../assets/mcs-edc-blog-card-5.webp'
import wipaImage from '../../../assets/mcs-edc-blog-card-6.webp'

import './ExplorePrograms.css'

const programs = [
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

function ExplorePrograms() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [cardsPerSlide, setCardsPerSlide] = useState(3)

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth <= 600) {
        setCardsPerSlide(1)
      } else if (window.innerWidth <= 900) {
        setCardsPerSlide(2)
      } else {
        setCardsPerSlide(3)
      }
    }

    updateCardsPerSlide()

    window.addEventListener('resize', updateCardsPerSlide)

    return () => {
      window.removeEventListener('resize', updateCardsPerSlide)
    }
  }, [])

  const totalSlides = Math.ceil(
    programs.length / cardsPerSlide
  )

  const moveNext = () => {
    setCurrentSlide((previousSlide) => {
      if (previousSlide >= totalSlides - 1) {
        return 0
      }

      return previousSlide + 1
    })
  }

  const movePrevious = () => {
    setCurrentSlide((previousSlide) => {
      if (previousSlide <= 0) {
        return totalSlides - 1
      }

      return previousSlide - 1
    })
  }

  useEffect(() => {
    const autoScroll = setInterval(() => {
      moveNext()
    }, 5000)

    return () => {
      clearInterval(autoScroll)
    }
  }, [cardsPerSlide, totalSlides])

  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0)
    }
  }, [currentSlide, totalSlides])

  return (
    <section className="explore-programs">
      <div className="container">

        <div className="explore-programs-heading">
          <span className="explore-programs-label">
            What We Do
          </span>

          <h2>Explore Our Programs</h2>

          <div
            className="explore-programs-line"
            aria-hidden="true"
          ></div>
        </div>

        <div className="programs-carousel">

          <button
            type="button"
            className="programs-slider-arrow programs-slider-arrow-left"
            onClick={movePrevious}
            aria-label="Previous programs"
          >
            ←
          </button>

          <div className="programs-slider-window">

            <div
              className="programs-slider-track"
              style={{
                transform: `translateX(-${
                  currentSlide * 100
                }%)`,
              }}
            >

              {programs.map((program) => (
                <a
                  key={program.id}
                  href={program.path}
                  className="program-card"
                >

                  <div className="program-card-image">
                    <img
                      src={program.image}
                      alt={program.title}
                    />
                  </div>

                  <div className="program-card-content">

                    <span className="program-card-date">
                      {program.date}
                    </span>

                    <h3>
                      {program.title}
                    </h3>

                    <span className="program-card-link">
                      Learn More →
                    </span>

                  </div>

                </a>
              ))}

            </div>

          </div>

          <button
            type="button"
            className="programs-slider-arrow programs-slider-arrow-right"
            onClick={moveNext}
            aria-label="Next programs"
          >
            →
          </button>

        </div>

        <div className="programs-slider-dots">
          {Array.from({ length: totalSlides }).map(
            (_, index) => (
              <button
                key={index}
                type="button"
                className={
                  index === currentSlide
                    ? 'active'
                    : ''
                }
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to program slide ${
                  index + 1
                }`}
              />
            )
          )}
        </div>

      </div>
    </section>
  )
}

export default ExplorePrograms