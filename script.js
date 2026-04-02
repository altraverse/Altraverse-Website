const navbar = document.querySelector(".premium-nav");
const revealItems = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isMobileView = () => window.innerWidth <= 991.98;
const isCompactAccordionView = () => window.innerWidth <= 767.98;

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const syncNavbarState = () => {
  if (!navbar) return;
  if (window.scrollY > 32) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

let scrollTicking = false;
const onScroll = () => {
  if (scrollTicking) return;

  scrollTicking = true;
  requestAnimationFrame(() => {
    syncNavbarState();
    scrollTicking = false;
  });
};

syncNavbarState();
window.addEventListener("scroll", onScroll, { passive: true });

const form = document.getElementById("contactForm");
const formStatus = document.getElementById("form-status");
const submitButton = document.getElementById("submit-button");

if (form && formStatus && submitButton) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    formStatus.classList.remove("success", "error");
    formStatus.textContent = "Sending your message...";
    submitButton.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      formStatus.classList.add("success");
      formStatus.textContent = "Message sent successfully.";
    } catch (error) {
      formStatus.classList.add("error");
      formStatus.textContent = "Message could not be sent. Please try again.";
    } finally {
      submitButton.disabled = false;
    }
  });
}

const accordionCards = document.querySelectorAll("[data-mobile-accordion]");

const syncAccordionState = () => {
  if (!isCompactAccordionView()) {
    accordionCards.forEach((card) => {
      card.classList.add("is-open");
      const trigger = card.querySelector(".accordion-trigger");
      if (trigger) trigger.setAttribute("aria-expanded", "true");
    });
    return;
  }

  const groups = [...new Set([...accordionCards].map((card) => card.dataset.mobileAccordion))];

  groups.forEach((group) => {
    const groupCards = [...document.querySelectorAll(`[data-mobile-accordion="${group}"]`)];
    const openCard = groupCards.find((card) => card.classList.contains("is-open")) || groupCards[0];

    groupCards.forEach((card) => {
      const shouldOpen = card === openCard;
      card.classList.toggle("is-open", shouldOpen);
      const trigger = card.querySelector(".accordion-trigger");
      if (trigger) trigger.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    });
  });
};

accordionCards.forEach((card) => {
  const trigger = card.querySelector(".accordion-trigger");

  if (!trigger) return;

  trigger.addEventListener("click", () => {
    if (!isCompactAccordionView()) return;

    const group = card.dataset.mobileAccordion;
    const groupCards = document.querySelectorAll(`[data-mobile-accordion="${group}"]`);

    if (card.classList.contains("is-open")) {
      card.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      return;
    }

    groupCards.forEach((item) => {
      const active = item === card;
      item.classList.toggle("is-open", active);
      const itemTrigger = item.querySelector(".accordion-trigger");
      if (itemTrigger) itemTrigger.setAttribute("aria-expanded", active ? "true" : "false");
    });
  });
});

syncAccordionState();
window.addEventListener("resize", syncAccordionState, { passive: true });

const navbarCollapse = document.getElementById("navbarNav");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!isMobileView() || !navbarCollapse) return;
    const collapseInstance =
      bootstrap.Collapse.getInstance(navbarCollapse) ||
      new bootstrap.Collapse(navbarCollapse, { toggle: false });
    if (collapseInstance) collapseInstance.hide();
  });
});
