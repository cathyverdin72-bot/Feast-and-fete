// ============================================
// FEAST & FÊTE
// Main JavaScript
// ============================================

document.addEventListener("DOMContentLoaded", () => {

  // --------------------------------------------
  // MOBILE NAVIGATION
  // --------------------------------------------

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

      nav.classList.toggle("mobile-active");

      if (nav.classList.contains("mobile-active")) {
        menuToggle.textContent = "✕";
      } else {
        menuToggle.textContent = "☰";
      }

    });


    // Close mobile menu when a link is clicked

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(link => {

      link.addEventListener("click", () => {

        nav.classList.remove("mobile-active");

        menuToggle.textContent = "☰";

      });

    });

  }


  // --------------------------------------------
  // HEADER SCROLL EFFECT
  // --------------------------------------------

  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  });


  // --------------------------------------------
  // SIMPLE SCROLL REVEAL
  // --------------------------------------------

  const revealElements = document.querySelectorAll(
    ".concept-card, .category-card, .experience-content, .experience-image"
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.15
    }
  );


  revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

  });

});
