import { useEffect, useState } from "react";
import { cx } from "../lib/cx";
import Nagrow1 from "../assets/nagrow/nagrow-1.jpeg";
import Nagrow2 from "../assets/nagrow/nagrow-2.jpeg";
import Nagrow3 from "../assets/nagrow/nagrow-3.jpeg";
import Nagrow4 from "../assets/nagrow/nagrow-4.jpeg";
import Nagrow5 from "../assets/nagrow/nagrow-5.jpeg";
import Nagrow6 from "../assets/nagrow/nagrow-6.jpeg";
import Nagrow7 from "../assets/nagrow/nagrow-7.jpeg";
import ParkSpot from "../assets/parkspot.png";
import Foodie from "../assets/foodie.png";
import Medical from "../assets/medical.png";

export const PROJECT_DATA = [
  {
    id: 1,
    featured: true,
    title: "Nagrow - Food Delivery Platform",
    description:
      "A fast, premium food delivery platform built to make discovery, ordering, and checkout feel effortless across every screen.",
    tags: ["Featured", "Food Delivery", "Mobile App"],
    tech: "React Native · Node · Express",
    screenshot: Nagrow1,
    screenshots: [
      Nagrow1,
      Nagrow2,
      Nagrow3,
      Nagrow4,
      Nagrow5,
      Nagrow6,
      Nagrow7,
    ],
    metrics: [
      { label: "Flow Speed", value: 94 },
      { label: "Scalability", value: 91 },
      { label: "UX Score", value: 96 },
    ],
    cta: "In Development",
    href: "#",
    // index: "01",
  },
  {
    id: 2,
    featured: false,
    title: "Mediplus — Healthcare Web Platform",
    description:
      "Full-featured medical website with doctor listings, appointment booking, and service pages. Built to establish trust and make healthcare access feel simple and human.",
    tags: ["Healthcare", "Web Design"],
    tech: "React · Next.js · Tailwind CSS",
    screenshot: Medical,
    cta: "Explore",
    href: "https://mediplus-mmabiaa.vercel.app/",
  },
  {
    id: 3,
    featured: false,
    title: "ParkSpot — Find Parking, Anywhere",
    description:
      "Real-time parking discovery for urban drivers. ParkSpot surfaces available spots near your destination, compares pricing, and lets you reserve in seconds — no circling, no stress.",
    tags: ["Web App", "Maps & Location"],
    tech: "React · Node.js · Google Maps API",
    screenshot: ParkSpot,
    cta: "Explore",
    href: "https://parkspot-23d2.onrender.com/",
  },
  {
    id: 4,
    featured: false,
    title: "Foodie — Restaurant Branding & Web",
    description:
      "Bold brand identity and marketing website for a premium burger restaurant. Rich visuals, table reservation flow, and an online menu — built to turn first-time visitors into regulars.",
    tags: ["Branding", "Web Design"],
    tech: "React · Framer Motion · Figma",
    screenshot: Foodie,
    cta: "Explore",
    href: "https://codewithsadee.github.io/foodie/",
  },
];

/* ── Section header ───────────────────────────────────────────────── */
function SectionHeader({ sectionLabel, heading, subheading }) {
  return (
    <div className="section-heading centered reveal">
      <div className="eyebrow-pill mt-5">
        <i className="bi bi-grid-3x3-gap-fill" />
        {sectionLabel}
      </div>
      <h2>{heading}</h2>
      <p>{subheading}</p>
    </div>
  );
}

/* ── Mobile screenshot carousel — lives inside the flagship panel ── */
function MobileCarousel({ screenshots = [], activeIndex }) {
  if (!screenshots.length) return null;

  // Show 3 phones fanned: previous, active, next
  const total = screenshots.length;
  const prev = (activeIndex - 1 + total) % total;
  const next = (activeIndex + 1) % total;

  const slots = [
    { imgIndex: prev, pos: "left" },
    { imgIndex: activeIndex, pos: "center" },
    { imgIndex: next, pos: "right" },
  ];

  const posStyle = {
    left: {
      transform: "translateX(-42%) rotate(-8deg) scale(0.82)", // was -52%
      zIndex: 1,
      opacity: 0.45,
    },
    center: {
      transform: "translateX(0%) rotate(0deg) scale(1)",
      zIndex: 3,
      opacity: 1,
    },
    right: {
      transform: "translateX(42%) rotate(8deg) scale(0.82)", // was 52%
      zIndex: 1,
      opacity: 0.45,
    },
  };
  return (
    /* outer — takes full width of flagship panel, fixed height */
    <div
      className="relative flex items-end justify-center mt-10"
      style={{ height: 380, zIndex: 9999 }}
    >
      {slots.map(({ imgIndex, pos }) => (
        <div
          key={`${pos}-${imgIndex}`}
          className=" absolute bottom-0 transition-all duration-1000 ease-out"
          style={{
            width: "clamp(120px, 36vw, 200px)", // was fixed 200
            height: "clamp(240px, 80vw, 450px)", // was fixed 450
            ...posStyle[pos],
          }}
        >
          {/* phone shell */}
          <div
            className="relative h-full w-full overflow-hidden"
            style={{
              borderRadius: 10,
              border: "2px solid rgba(255,255,255,0.12)",
              background: "#0a0a0b",
              boxShadow:
                pos === "center"
                  ? "0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)"
                  : "none",
            }}
          >
            {/* notch */}
            {/* <div
              className="absolute top-2 left-1/2 z-10 -translate-x-1/2"
              style={{
                width: 42,
                height: 10,
                borderRadius: 8,
                background: "#0a0a0b",
                border: "1.5px solid rgba(255,255,255,0.08)",
              }}
            /> */}
            <img
              src={screenshots[imgIndex]}
              alt="App screenshot"
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ borderRadius: 10 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Dot indicator ────────────────────────────────────────────────── */
function DotRow({ total, active }) {
  return (
    <div className="mt-4 flex items-center justify-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: i === active ? 18 : 5,
            height: 5,
            borderRadius: 3,
            background:
              i === active ? "rgba(215,255,217,0.7)" : "rgba(255,255,255,0.15)",
            transition: "all 0.4s ease",
          }}
        />
      ))}
    </div>
  );
}

/* ── Regular card preview (unchanged for non-featured) ───────────── */
function ProjectPreview({ src, alt }) {
  if (src) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-[24px] border border-white/6 bg-[#111113]">
        <img
          src={src}
          alt={alt || "Project preview"}
          loading="lazy"
          className="h-full w-full object-cover opacity-90 transition duration-300 hover:scale-[1.02] hover:opacity-100"
        />
      </div>
    );
  }
  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-[24px] border border-white/6 bg-[#111113]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="relative z-[1] inline-grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-[rgba(245,247,251,0.58)]">
        <i className="bi bi-window-stack text-lg" />
      </div>
    </div>
  );
}

/* ── Shared sub-components ────────────────────────────────────────── */
function ProjectTags({ tags }) {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={tag}
          className={cx(
            "inline-flex rounded-full border px-3 py-1 text-[0.66rem] font-extrabold uppercase tracking-[0.14em]",
            index === 0 && tag === "Featured"
              ? "border-[rgba(215,255,217,0.18)] bg-[rgba(215,255,217,0.08)] text-[var(--accent)]"
              : "border-white/8 bg-white/5 text-[var(--muted-strong)]",
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectFooter({ tech, cta, href }) {
  return (
    <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/6 pt-5 max-sm:flex-col max-sm:items-start">
      <div className="flex items-center gap-2 text-[0.72rem] text-[var(--muted)]">
        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
        <span>{tech}</span>
      </div>
      {cta && cta !== "In Development" && (
        <a
          href={href || "#"}
          className="inline-flex items-center gap-2 text-[0.76rem] font-bold uppercase tracking-[0.12em] text-[var(--muted-strong)] transition hover:text-[var(--text)]"
        >
          {cta}
          <i className="bi bi-arrow-right" />
        </a>
      )}
    </div>
  );
}

/* ── Featured card — NO wide horizontal screenshot, phones go right ─ */
function FeaturedProjectCard({ project }) {
  const gallery = project.screenshots?.length
    ? project.screenshots
    : project.screenshot
      ? [project.screenshot]
      : [];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (gallery.length <= 1) return;
    const id = window.setInterval(
      () => setActiveIndex((i) => (i + 1) % gallery.length),
      2200,
    );
    return () => window.clearInterval(id);
  }, [gallery.length]);

  return (
    <article className="premium-card reveal md:col-span-2">
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.85fr)]">
        {/* ── LEFT: info panel only (no wide screenshot) ── */}
        <div className="my-auto rounded-[22px] border border-white/6 bg-white/[0.02] p-6 ">
          <div>
            <ProjectTags tags={project.tags} />
            <h3 className="mb-3 text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold tracking-[-0.05em] text-[var(--text)]">
              {project.title}
            </h3>
            <p className="text-[13px] hero-text max-w-none leading-tight ">
              {project.description}
            </p>
          </div>
          <ProjectFooter
            tech={project.tech}
            cta={project.cta}
            href={project.href}
          />
        </div>

        {/* ── RIGHT: flagship panel with phone carousel ── */}
        <div className="flex h-full flex-col rounded-[22px] border border-white/6 bg-white/[0.02] p-6">
          {/* index + label */}
          <div className="mb-4">
            <div className="text-[clamp(3rem,10vw,5rem)] font-[300] leading-none tracking-[-0.08em] text-white/10">
              {project.index}
            </div>
            {/* <p className="mt-2 text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-[var(--muted)]">
              Flagship project
            </p> */}
          </div>

          {/* phone carousel */}
          {gallery.length > 0 && (
            <>
              <MobileCarousel screenshots={gallery} activeIndex={activeIndex} />
              <DotRow total={gallery.length} active={activeIndex} />
            </>
          )}

          {/* metrics */}
          {/* {project.metrics?.length ? (
            <div className="mt-6 space-y-4 border-t border-white/6 pt-5">
              {project.metrics.map((metric) => (
                <div className="flex items-center gap-3" key={metric.label}>
                  <span className="min-w-20 text-[0.72rem] text-[var(--muted)]">
                    {metric.label}
                  </span>
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/8">
                    <div
                      className="h-full rounded-full bg-[rgba(215,255,217,0.7)]"
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                  <span className="min-w-9 text-right text-[0.72rem] text-[var(--muted-strong)]">
                    {metric.value}%
                  </span>
                </div>
              ))}
            </div>
          ) : null} */}
        </div>
      </div>
    </article>
  );
}

/* ── Regular project card (unchanged) ────────────────────────────── */
function RegularProjectCard({ project, revealClass }) {
  return (
    <article className={cx("premium-card reveal", revealClass)}>
      <div className="space-y-5">
        <ProjectPreview src={project.screenshot} alt={project.title} />
        <div className="rounded-[22px] border border-white/6 bg-white/[0.02] p-5">
          <ProjectTags tags={project.tags} />
          <h3 className="mb-3 text-[1.5rem] font-extrabold tracking-[-0.04em] text-[var(--text)]">
            {project.title}
          </h3>
          <p className="mb-6 text-[1rem] leading-[1.75] text-[var(--muted)]">
            {project.description}
          </p>
          <ProjectFooter
            tech={project.tech}
            cta={project.cta}
            href={project.href}
          />
        </div>
      </div>
    </article>
  );
}

/* ── Main export ─────────────────────────────────────────────────── */
export default function ProjectSection({
  projects = PROJECT_DATA,
  heading = "Products built with clarity and purpose",
  subheading = "From concept to scale, each project reflects our commitment to ethical, human-centered digital experiences.",
  sectionLabel = "Our Work",
}) {
  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-pad">
      <div className="container">
        <SectionHeader
          sectionLabel={sectionLabel}
          heading={heading}
          subheading={subheading}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProject && <FeaturedProjectCard project={featuredProject} />}
          {regularProjects.map((project, index) => (
            <RegularProjectCard
              key={project.id}
              project={project}
              revealClass={
                index === 0
                  ? "reveal-delay-1"
                  : index === 1
                    ? "reveal-delay-2"
                    : "reveal-delay-3"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
