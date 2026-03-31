const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

reveals.forEach((item) => revealObserver.observe(item));

const navbar = document.querySelector(".premium-nav");

const syncNavbarState = () => {
  if (window.scrollY > 32) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

syncNavbarState();
window.addEventListener("scroll", syncNavbarState);

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

const isMobileView = () => window.innerWidth <= 991.98;

const accordionCards = document.querySelectorAll("[data-mobile-accordion]");

const syncAccordionState = () => {
  if (!isMobileView()) {
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
    if (!isMobileView()) return;

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
window.addEventListener("resize", syncAccordionState);

const navbarCollapse = document.getElementById("navbarNav");
const navLinks = document.querySelectorAll(".nav-link");
const navShell = document.querySelector(".nav-shell");

if (navbarCollapse && navShell) {
  navbarCollapse.addEventListener("show.bs.collapse", () => {
    navShell.classList.add("nav-shell-expanded");
  });

  navbarCollapse.addEventListener("hide.bs.collapse", () => {
    navShell.classList.remove("nav-shell-expanded");
  });

  navbarCollapse.addEventListener("hidden.bs.collapse", () => {
    navShell.classList.remove("nav-shell-expanded");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!isMobileView()) return;
    const collapseInstance =
      bootstrap.Collapse.getInstance(navbarCollapse) ||
      new bootstrap.Collapse(navbarCollapse, { toggle: false });
    if (collapseInstance) collapseInstance.hide();
  });
});
