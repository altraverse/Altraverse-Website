import {
  expertiseItems,
  founders,
  missionItems,
  valueItems,
} from "../data/siteContent";
import { cx } from "../lib/cx";

export default function Home({
  isCompactAccordionView,
  isAccordionOpen,
  getAccordionContentStyle,
  handleAccordionClick,
  handleSubmit,
  formStatus,
  isSubmitting,
}) {
  return (
    <main>
      <section id="home" className="hero-section section-pad">
        <div className="container">
          <div className="hero-stack">
            <div className="hero-copy hero-copy-centered reveal">
              <div className="eyebrow-pill">
                <i className="bi bi-stars" />
                Building the future of ethical technology
              </div>
              <p className="hero-kicker">
                A calm digital studio for thoughtful products and premium
                experiences.
              </p>
              <h1>
                Building
                <span> Human-Centered </span>
                Digital Futures
              </h1>
              <p className="hero-text">
                Altraverse creates elegant digital products, refined interfaces,
                and purposeful brand experiences with clarity, restraint, and
                long-term thinking.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary btn-lg" href="#about">
                  Explore our vision
                </a>
                <a className="btn btn-outline-light btn-lg" href="#contact">
                  Get in touch
                </a>
              </div>
            </div>

            <div className="hero-startup-board reveal reveal-delay-1">
              <div className="hero-startup-card hero-startup-band">
                <div className="hero-band-copy">
                  <span className="mini-label">
                    EARLY STAGE, CLEAR DIRECTION
                  </span>
                  <p>Minimal, focused, and built with intent from day one.</p>
                </div>
                <div className="hero-metrics hero-metrics-startup">
                  <div className="hero-metric">
                    <strong>Brand</strong>
                    <span>Clear identity</span>
                  </div>
                  <div className="hero-metric">
                    <strong>Product</strong>
                    <span>Refined interfaces</span>
                  </div>
                  <div className="hero-metric">
                    <strong>Direction</strong>
                    <span>Long-term thinking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-pad">
        <div className="container">
          <div className="section-heading centered reveal">
            <div className="eyebrow-pill">
              <i className="bi bi-gem" />
              About Us
            </div>
            <h2>Where Altruism Meets the Universe</h2>
            <p>
              Altraverse is born from two powerful ideas: altruism and universe.
              We create elegant digital ecosystems where advanced technology
              amplifies people instead of replacing them.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <div className="premium-card feature-story reveal">
                <div className="story-badge">PREMIUM PHILOSOPHY</div>
                <p className="lead mb-4">
                  We are not just building products. We are crafting a new
                  digital standard where visual sophistication, ethical
                  engineering, and business clarity work together in one
                  seamless experience.
                </p>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="mini-card">
                      <i className="bi bi-heart" />
                      <h3>Altruism</h3>
                      <p>Selfless design thinking focused on human value.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mini-card">
                      <i className="bi bi-globe2" />
                      <h3>Universe</h3>
                      <p>Infinite possibility shaped into useful digital systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="premium-card stacked-metrics reveal reveal-delay-1">
                <div className="metric-box">
                  <span>Human-centered technology</span>
                  <strong>01</strong>
                </div>
                <div className="metric-box">
                  <span>Elegant product ecosystems</span>
                  <strong>02</strong>
                </div>
                <div className="metric-box accent">
                  <span>Technology with purpose</span>
                  <strong>03</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="section-pad">
        <div className="container">
          <div className="section-heading reveal">
            <div className="eyebrow-pill">
              <i className="bi bi-bullseye" />
              Purpose-Driven
            </div>
            <h2>Mission &amp; Vision</h2>
            <p>
              We build ethical, human-centered technology that empowers people,
              connects ideas, and shapes a better digital future with calm
              precision.
            </p>
          </div>

          <div className="row g-4">
            {missionItems.map((item, index) => (
              <div className="col-md-6 col-xl-3" key={item.title}>
                <div
                  className={cx(
                    "premium-card info-card accordion-card reveal",
                    index === 1 && "reveal-delay-1",
                    index === 2 && "reveal-delay-2",
                    index === 3 && "reveal-delay-3",
                    isAccordionOpen("mission", index) && "is-open",
                  )}
                  data-mobile-accordion="mission"
                >
                  <button
                    className="accordion-trigger"
                    type="button"
                    aria-expanded={isAccordionOpen("mission", index)}
                    onClick={() => handleAccordionClick("mission", index)}
                  >
                    <span className="accordion-title-wrap">
                      <i className={cx("bi", item.icon, "card-icon")} />
                      <span className="accordion-title">{item.title}</span>
                    </span>
                    <i className="bi bi-chevron-down accordion-plus" />
                  </button>
                  <div
                    className="accordion-content"
                    style={getAccordionContentStyle("mission", index)}
                  >
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="section-pad">
        <div className="container">
          <div className="section-heading centered reveal">
            <div className="eyebrow-pill">
              <i className="bi bi-grid-1x2-fill" />
              Our Expertise
            </div>
            <h2>What We Build</h2>
            <p>
              From concept to scale, we craft dark, modern digital experiences
              that feel premium in motion and reliable in production.
            </p>
          </div>

          <div className="row g-4">
            {expertiseItems.map((item, index) => (
              <div className="col-md-6 col-xl-3" key={item.title}>
                <div
                  className={cx(
                    "premium-card expertise-card accordion-card reveal",
                    index === 1 && "reveal-delay-1",
                    index === 2 && "reveal-delay-2",
                    index === 3 && "reveal-delay-3",
                    isAccordionOpen("expertise", index) && "is-open",
                  )}
                  data-mobile-accordion="expertise"
                >
                  <button
                    className="accordion-trigger"
                    type="button"
                    aria-expanded={isAccordionOpen("expertise", index)}
                    onClick={() => handleAccordionClick("expertise", index)}
                  >
                    <span className="accordion-title">{item.title}</span>
                    <i className="bi bi-chevron-down accordion-plus" />
                  </button>
                  <div
                    className="accordion-content"
                    style={getAccordionContentStyle("expertise", index)}
                  >
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="section-pad">
        <div className="container">
          <div className="section-heading centered reveal">
            <div className="eyebrow-pill">
              <i className="bi bi-lightning-charge" />
              Core Principles
            </div>
            <h2>Our Values</h2>
            <p>
              These principles guide every decision we make, every product we
              ship, and every relationship we build.
            </p>
          </div>

          <div className="row g-4">
            {valueItems.map((item, index) => (
              <div className="col-md-6 col-xl-3" key={item.title}>
                <div
                  className={cx(
                    "premium-card value-card accordion-card reveal",
                    item.featured && "featured",
                    index === 1 && "reveal-delay-1",
                    index === 2 && "reveal-delay-2",
                    index === 3 && "reveal-delay-3",
                    isAccordionOpen("values", index) && "is-open",
                  )}
                  data-mobile-accordion="values"
                >
                  <span className="value-index">{item.index}</span>
                  <button
                    className="accordion-trigger"
                    type="button"
                    aria-expanded={isAccordionOpen("values", index)}
                    onClick={() => handleAccordionClick("values", index)}
                  >
                    <span className="accordion-title">{item.title}</span>
                    <i className="bi bi-chevron-down accordion-plus" />
                  </button>
                  <div
                    className="accordion-content"
                    style={getAccordionContentStyle("values", index)}
                  >
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="section-pad">
        <div className="container">
          <div className="section-heading reveal">
            <div className="eyebrow-pill">
              <i className="bi bi-people-fill" />
              Leadership
            </div>
            <h2>Meet the Founders</h2>
            <p>
              Vision, strategy, and execution brought together through a shared
              belief that premium technology should create meaningful human
              impact.
            </p>
          </div>

          <div className="row g-4">
            {founders.map((founder) => (
              <div className="col-lg-6" key={founder.name}>
                <article
                  className={cx(
                    "premium-card founder-card reveal",
                    founder.revealClass,
                  )}
                >
                  <span className="story-badge">{founder.badge}</span>
                  <h3>{founder.name}</h3>
                  <p className="role">{founder.role}</p>
                  <p>{founder.quote}</p>
                  <div className="social-row">
                    {founder.socials.map((social) => (
                      <a href={social.href} aria-label={social.label} key={social.href}>
                        <i className={cx("bi", social.icon)} />
                      </a>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad contact-section">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-5">
              <div className="section-heading reveal">
                <div className="eyebrow-pill">
                  <i className="bi bi-envelope-heart" />
                  Get In Touch
                </div>
                <h2>Let&apos;s Build the Future Together</h2>
                <p>
                  Have an idea, a partnership, or a product vision? Let&apos;s
                  shape it into a premium digital experience.
                </p>
              </div>
              <div className="contact-details reveal reveal-delay-1">
                <div className="contact-line">
                  <i className="bi bi-envelope" />
                  <div>
                    <span>Email</span>
                    <p>altraverse.co@gmail.com</p>
                  </div>
                </div>
                <div className="contact-line">
                  <i className="bi bi-geo-alt" />
                  <div>
                    <span>Location</span>
                    <p>Nagpur, Maharashtra, India</p>
                  </div>
                </div>
                <div className="contact-line">
                  <i className="bi bi-telephone" />
                  <div>
                    <span>Helpline</span>
                    <p>+91 9503168159</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="premium-card form-shell reveal reveal-delay-2">
                <form
                  className="row g-3"
                  id="contactForm"
                  action="https://formspree.io/f/mykkkoor"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Altraverse contact form submission"
                  />
                  <input
                    type="hidden"
                    name="_source"
                    value="Altraverse website contact form"
                  />
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-control premium-input"
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control premium-input"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      className="form-control premium-input"
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="form-control premium-input"
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button
                      id="submit-button"
                      className="btn btn-primary btn-lg w-100"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Send Message
                      <i className="bi bi-arrow-right ms-2" />
                    </button>
                  </div>
                  <div className="col-12">
                    <p className={cx("form-note mb-0", formStatus.type)} id="form-status">
                      {formStatus.message}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
