
// Animazioni allo scroll: le sezioni entrano una sola volta.
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("active");
  });
}

// Menu mobile accessibile.
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

function closeMenu() {
  if (!hamburger || !navLinks) return;

  navLinks.classList.remove("show");
  hamburger.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-label", "Apri il menu");
  document.body.classList.remove("menu-open");
}

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute(
      "aria-label",
      isOpen ? "Chiudi il menu" : "Apri il menu"
    );

    document.body.classList.toggle("menu-open", isOpen);
  });

  // Chiudi il menu quando si seleziona una voce.
  navItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });

  // Chiudi il menu con ESC.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Chiudi il menu quando si torna alla versione desktop.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}
