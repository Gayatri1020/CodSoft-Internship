
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  document.querySelectorAll('.nav__menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const scrollRevealOption = {
    distance: "60px",
    origin: "bottom",
    duration: 1200,
    delay: 100,
    easing: "ease-in-out"
  };

  ScrollReveal().reveal(".hero__image", { ...scrollRevealOption, delay: 100 });
  ScrollReveal().reveal(".main-heading", { ...scrollRevealOption, delay: 300 });
  ScrollReveal().reveal(".subheading", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".description", { ...scrollRevealOption, delay: 700 });
  ScrollReveal().reveal(".hero__buttons", { ...scrollRevealOption, delay: 900 });
});
