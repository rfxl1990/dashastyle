// ============================================
// DashaStyle – Main JS
// ============================================

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav__links--open');
    navToggle.classList.toggle('nav__toggle--active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav__links--open');
      navToggle.classList.remove('nav__toggle--active');
    });
  });
}

// Navbar style on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

// ── Image Comparison Slider ──
const compare = document.getElementById('compare');
const afterImg = document.getElementById('compare-after');
const slider = document.getElementById('compare-slider');

if (compare && afterImg && slider) {
  let pos = 50; // current animated position
  let targetPos = 50; // target position
  let raf;

  function updateSlider() {
    afterImg.style.clipPath = `inset(0 0 0 ${pos}%)`;
    slider.style.left = pos + '%';
  }

  function animate() {
    pos += (targetPos - pos) * 0.12;

    if (Math.abs(targetPos - pos) < 0.1) {
      pos = targetPos;
    }

    updateSlider();

    if (Math.abs(targetPos - pos) > 0.05) {
      raf = requestAnimationFrame(animate);
    }
  }

  function setTarget(p) {
    targetPos = p;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(animate);
  }

  function getPosition(e) {
    const rect = compare.getBoundingClientRect();
    const x = 'touches' in e
      ? e.touches[0].clientX - rect.left
      : e.clientX - rect.left;
    return Math.min(Math.max((x / rect.width) * 100, 0), 100);
  }

  // Hover mode: follows mouse
  compare.addEventListener('mousemove', (e) => setTarget(getPosition(e)));
  compare.addEventListener('mouseleave', () => setTarget(50));

  // Touch support
  compare.addEventListener('touchmove', (e) => {
    e.preventDefault();
    setTarget(getPosition(e));
  }, { passive: false });
  compare.addEventListener('touchend', () => setTarget(50));

  // Initial render
  updateSlider();
}
