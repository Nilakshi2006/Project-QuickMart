document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLink = document.getElementById("navLink");

  if (!navToggle || !navLink) return;

  // Toggle Menu
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navLink.classList.toggle("active");
  });

  // Close menu when a nav item is clicked
  document.querySelectorAll("#navLink a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("open");
      navLink.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !navToggle.contains(e.target) &&
      !navLink.contains(e.target)
    ) {
      navToggle.classList.remove("open");
      navLink.classList.remove("active");
    }
  });

  // Reset menu when switching back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navToggle.classList.remove("open");
      navLink.classList.remove("active");
    }
  });
});