// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active"); // rimuovere se vuoi animazione solo una volta
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li a");

// Funzione per aprire/chiudere menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("active");
});

// Chiudi menu quando clicchi su un link
navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("show");
    hamburger.classList.remove("active");
  });
});

