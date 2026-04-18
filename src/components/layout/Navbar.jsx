import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../../data/siteContent";
import { cx } from "../../lib/cx";
import Logo from "../../assets/newLogo.png";

export default function Navbar({
  isScrolled,
  isNavOpen,
  isMobileView,
  onToggleNav,
  onNavLinkClick,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleAnchorNavigation = (href) => {
    onNavLinkClick();

    if (isHomePage) {
      return;
    }

    navigate(`/${href}`);
  };

  return (
    <nav
      className={cx(
        "navbar navbar-expand-lg navbar-dark fixed-top premium-nav",
        isScrolled && "scrolled",
      )}
    >
      <div className="container">
        <div className="nav-shell">
          <Link
            className="navbar-brand d-flex align-items-center gap-2"
            to="/"
            onClick={onNavLinkClick}
          >
            <span className="brand-mark">
              <img
                className="brand-logo"
                src={Logo}
                alt="Altraverse logo"
                width="500"
                height="500"
                fetchPriority="high"
                decoding="async"
              />
            </span>
            <span className="brand-copy">
              <strong>Altraverse</strong>
              <small>Technology with purpose</small>
            </span>
          </Link>
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
            onClick={onToggleNav}
          >
            <span className="navbar-toggle-box" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
          <div
            className={cx(
              "navbar-collapse",
              isMobileView
                ? isNavOpen
                  ? "navbar-collapse-mobile-open"
                  : "navbar-collapse-mobile-hidden"
                : "navbar-collapse-desktop",
            )}
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto align-items-lg-center nav-center-badge">
              {navItems.map((item) => (
                <li className="nav-item" key={item.href}>
                  {isHomePage ? (
                    <a
                      className="nav-link"
                      href={item.href}
                      onClick={onNavLinkClick}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      className="nav-link"
                      to={`/${item.href}`}
                      onClick={() => handleAnchorNavigation(item.href)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="nav-actions">
              <Link
                className="nav-status"
                to="/projects"
                onClick={() => {
                  onNavLinkClick();
                }}
                style={{ alignItems: "center" }}
              >
                {/* <i className="bi bi-dot" /> */}
                <h2
                  style={{
                    fontSize: "1rem",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  Our Projects
                </h2>
              </Link>
              {isHomePage ? (
                <a
                  className="btn btn-primary nav-cta"
                  href="#contact"
                  onClick={onNavLinkClick}
                >
                  Connect with us
                </a>
              ) : (
                <Link
                  className="btn btn-primary nav-cta"
                  to="/#contact"
                  onClick={() => handleAnchorNavigation("#contact")}
                >
                  Connect with us
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
