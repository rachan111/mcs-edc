import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/mcs-edc-logo.png'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)

  const lastScrollY = useRef(0)

  const currentPath = window.location.pathname

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      const scrollDifference =
        currentScrollY - lastScrollY.current

      if (currentScrollY <= 10) {
        setHeaderVisible(true)
      } else if (scrollDifference > 5) {
        setHeaderVisible(false)
        setMenuOpen(false)
      } else if (scrollDifference < -5) {
        setHeaderVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const isHomePage = currentPath === '/'

  const isProgramsPage =
    currentPath === '/programs' ||
    currentPath.startsWith('/programs/')

  const isSuccessStoriesPage =
    currentPath === '/success-stories' ||
    currentPath.startsWith('/success-stories/')

  const isNewsletterPage =
    currentPath === '/newsletter' ||
    currentPath.startsWith('/newsletter/')

  const isAboutPage =
    currentPath === '/about' ||
    currentPath.startsWith('/about/')

  const isContactPage =
    currentPath === '/contact' ||
    currentPath.startsWith('/contact/')

  return (
    <header
      className={`site-header ${
        headerVisible ? 'visible' : 'hidden'
      }`}
    >

      <div className="container header-container">

        <a
          href="/"
          className="header-logo"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="MCS-EDC - Workforce and Economic Development for All"
          />
        </a>


        <nav
          className="desktop-navigation"
          aria-label="Main navigation"
        >

          <a
            href="/"
            className={isHomePage ? 'active' : ''}
          >
            Home
          </a>

          <a
            href="/programs"
            className={isProgramsPage ? 'active' : ''}
          >
            Explore Programs
          </a>

          <a
            href="/success-stories"
            className={
              isSuccessStoriesPage ? 'active' : ''
            }
          >
            Success Stories
          </a>

          <a
            href="/newsletter"
            className={
              isNewsletterPage ? 'active' : ''
            }
          >
            Newsletter
          </a>

          <a
            href="/about"
            className={isAboutPage ? 'active' : ''}
          >
            About Us
          </a>

          <a
            href="/contact"
            className={isContactPage ? 'active' : ''}
          >
            Contact
          </a>

        </nav>


        <button
          className="mobile-menu-button"
          type="button"
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      <nav
        className={`mobile-navigation ${
          menuOpen ? 'open' : ''
        }`}
        aria-label="Mobile navigation"
      >

        <a
          href="/"
          className={isHomePage ? 'active' : ''}
          onClick={closeMenu}
        >
          Home
        </a>

        <a
          href="/programs"
          className={isProgramsPage ? 'active' : ''}
          onClick={closeMenu}
        >
          Explore Programs
        </a>

        <a
          href="/success-stories"
          className={
            isSuccessStoriesPage ? 'active' : ''
          }
          onClick={closeMenu}
        >
          Success Stories
        </a>

        <a
          href="/newsletter"
          className={
            isNewsletterPage ? 'active' : ''
          }
          onClick={closeMenu}
        >
          Newsletter
        </a>

        <a
          href="/about"
          className={isAboutPage ? 'active' : ''}
          onClick={closeMenu}
        >
          About Us
        </a>

        <a
          href="/contact"
          className={isContactPage ? 'active' : ''}
          onClick={closeMenu}
        >
          Contact
        </a>

      </nav>

    </header>
  )
}

export default Header