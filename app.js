document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const glow = document.querySelector(".cursor-glow");

  if (!hero || !glow) return;

  let rafId = null;

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Move glow
    if (!rafId) {
      rafId = requestAnimationFrame(() => {
        glow.style.left = x + "px";
        glow.style.top = y + "px";
        glow.style.opacity = "1";
        rafId = null;
      });
    }

    // Create sparkle (LIMITED)
    if (Math.random() < 0.3) {
      createSparkle(x, y);
    }
  });

  hero.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
  });

  function createSparkle(x, y) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";

    const size = Math.random() * 4 + 4;
    sparkle.style.width = size + "px";
    sparkle.style.height = size + "px";

    sparkle.style.left = x + (Math.random() * 20 - 10) + "px";
    sparkle.style.top = y + (Math.random() * 20 - 10) + "px";

    hero.appendChild(sparkle);

    // Remove after animation
    setTimeout(() => sparkle.remove(), 800);
  }
});

// ================================= Mission-Cards

function toggleCard(card) {
  if (window.innerWidth > 768) return; // desktop does nothing

  document.querySelectorAll(".mission-card").forEach(c => {
    if (c !== card) c.classList.remove("active");
  });

  card.classList.toggle("active");
}

const nav = document.querySelector(".navbar");
if (nav) {
  document.documentElement.style.setProperty("--nav-height", nav.offsetHeight + "px");
}

// ================================= Navbar Auto-Collapse on Mobile
// Smoothly collapse navbar when clicking nav links on mobile
(function() {
  function initNavbarCollapse() {
    const navbarCollapse = document.getElementById("navbarNav");
    const navLinks = document.querySelectorAll(".nav-link");
    
    if (!navbarCollapse || navLinks.length === 0) return;
    
    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        // Check if navbar is expanded (mobile view)
        if (navbarCollapse.classList.contains("show")) {
          // Small delay to allow smooth scroll to start first
          setTimeout(() => {
            // Use Bootstrap's Collapse API for smooth animation
            if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
              let bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
              if (!bsCollapse) {
                // Create new instance if it doesn't exist
                bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                  toggle: false
                });
              }
              // Hide the navbar smoothly (Bootstrap handles the CSS transition)
              bsCollapse.hide();
            } else {
              // Fallback: Use Bootstrap classes directly for smooth transition
              const navbarToggler = document.querySelector(".navbar-toggler");
              if (navbarToggler && navbarToggler.getAttribute("aria-expanded") === "true") {
                navbarToggler.click();
              }
            }
          }, 100); // Small delay for better UX - allows scroll to start
        }
      });
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", initNavbarCollapse);
  } else {
    // DOM already loaded
    initNavbarCollapse();
  }
})();

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    status.textContent = "Sending...";
    status.style.color = "#333";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        status.textContent = "✅ Message sent successfully!";
        status.style.color = "green";
        form.reset();
      } else {
        status.textContent = "❌ Failed to send message.";
        status.style.color = "red";
      }
    } catch (error) {
      status.textContent = "❌ Network error. Try again later.";
      status.style.color = "red";
    }
  });
