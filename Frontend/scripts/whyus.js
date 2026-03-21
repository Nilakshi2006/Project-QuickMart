// ===== Smooth Scroll for Navbar Links =====
const navLinks = document.querySelectorAll('#navLink a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    // Only smooth scroll if href is an internal fragment link (starts with '#') and not just '#'
    if (href && href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ===== Hero & CTA Button Redirects =====
const heroButton = document.querySelector('.hero-text .hero-btn');
const ctaButton = document.querySelector('.cta .cta-btn');

if (heroButton) {
  heroButton.addEventListener('click', () => {
    window.location.href = 'products.html';
  });
}

if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    window.location.href = 'signup.html';
  });
}

// ===== Scroll Animation for Why-Us Cards =====
const cards = document.querySelectorAll('.why-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-card');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
