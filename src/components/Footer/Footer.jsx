import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">

        <div className="footer-copyright">
          <p>
            Copyright © 2025 MCS EDC
          </p>

          <p>
            All Rights Reserved.
          </p>
        </div>

        <div className="footer-address">
          <p>
            3333 Wilshire Blvd. Suite 405
          </p>

          <p>
            Los Angeles, CA 90010
          </p>
        </div>

        <div className="footer-credit">
          <span>Built by</span>
          <strong>@rasadreams</strong>
        </div>

      </div>
    </footer>
  )
}

export default Footer