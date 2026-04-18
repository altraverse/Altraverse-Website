import { Link } from "react-router-dom";
import Logo from "../../assets/newLogo.png";

export default function Footer() {
  return (
    <footer className="footer-shell">
      <div className="container">
        <div className="footer-card">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link
                className="navbar-brand d-inline-flex align-items-center gap-2 mb-3"
                to="/"
              >
                <span className="brand-mark">
                  <img
                    className="brand-logo"
                    src={Logo}
                    alt="Altraverse logo"
                    width="500"
                    height="500"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="brand-copy">
                  <strong>Altraverse</strong>
                  <small>Technology with purpose</small>
                </span>
              </Link>
              <p>
                Thoughtful digital products shaped with clarity, aesthetics, and
                human intent.
              </p>
            </div>
            <div className="footer-connect">
              <h3>Connect-us</h3>
              <div className="social-row">
                <a
                  href="https://www.instagram.com/altraverse.in/"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/company/altraverse"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin" />
                </a>
                <a
                  href="https://youtube.com/@altraverseofficial?si=DZTV9MA-5WRBiQvd"
                  aria-label="YouTube"
                >
                  <i className="bi bi-youtube" />
                </a>
                <a href="https://x.com/altraverse_in?s=21" aria-label="X">
                  <i className="bi bi-twitter-x" />
                </a>
                <a
                  href="https://www.threads.com/@altraverse.in?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                  aria-label="Threads"
                >
                  <i className="bi bi-threads" />
                </a>
              </div>
            </div>
            <div className="footer-copy">
              <p>&copy; 2026 Altraverse. Built with care for humanity.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
