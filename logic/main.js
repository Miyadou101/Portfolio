document.addEventListener("DOMContentLoaded", () => {
  // Modal for Latest Project (Galaxy Warriors)
  const modal = document.querySelector(".project__modal");
  const openBtn = document.querySelector(".latest-toggle");
  const closeBtn = document.querySelector(".project__modal-close");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      modal.classList.add("active-modal");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active-modal");
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active-modal");
    }
  });

  // Add any other JS interactions from the original template here,
  // like navigation toggle, smooth scrolling, dark mode toggle, etc.
  
  // Example: Navigation menu toggle (if your template uses one)
  const navToggle = document.querySelector(".nav__toggle");
  const navMenu = document.querySelector(".nav__menu");
  
  if(navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show-menu");
    });
  }

  // Example: Scroll sections active link
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
      } else {
        document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
      }
    });
  });

  // Add other functionality as per the original template's main.js here...
});
