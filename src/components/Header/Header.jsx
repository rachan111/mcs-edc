import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/mcs-edc-logo.png'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)

  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = currentScrollY - lastScrollY.current

      // Always show header at the top
      if (currentScrollY <= 10) {
        setHeaderVisible(true)
      }
      // Scrolling down
      else if (scrollDifference > 5) {
        setHeaderVisible(false)
        setMenuOpen(false)
      }
      // Scrolling up
      else if (scrollDifference < -5) {
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

  return (
    <header
      className={`site-header ${
        headerVisible ? 'visible' : 'hidden'
      }`}
    >
      <div className="container header-container">

        {/* Logo */}
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

        {/* Desktop Navigation */}
        <nav
          className="desktop-navigation"
          aria-label="Main navigation"
        >
          <a href="/" className="active">
            Home
          </a>

          <a href="/programs">
            Explore Programs
          </a>

          <a href="/success-stories">
            Success Stories
          </a>

          <a href="/about">
            About Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
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

      {/* Mobile Navigation */}
      <nav
        className={`mobile-navigation ${
          menuOpen ? 'open' : ''
        }`}
        aria-label="Mobile navigation"
      >
        <a href="/" onClick={closeMenu}>
          Home
        </a>

        <a href="/programs" onClick={closeMenu}>
          Explore Programs
        </a>

        <a href="/success-stories" onClick={closeMenu}>
          Success Stories
        </a>

        <a href="/about" onClick={closeMenu}>
          About Us
        </a>
      </nav>
    </header>
  )
}

export default Header