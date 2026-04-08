const pageName = document.body.dataset.page;
const navLinks = document.querySelectorAll(".main-nav a");
const revealItems = document.querySelectorAll(".hero-copy, .hero-card, .content-section");

navLinks.forEach((link) => {
  if (link.dataset.nav === pageName) {
    link.classList.add("is-active");
    link.setAttribute("aria-current", "page");
  }
});

revealItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => observer.observe(item));
