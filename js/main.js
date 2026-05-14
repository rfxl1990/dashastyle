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

// ── Diagonal Split: hover + animated divider line ──
const split = document.getElementById('split');
const splitLeft = document.getElementById('split-left');
const divider = document.getElementById('split-divider');

if (split) {
  // Default line positions (percent)
  const DEFAULT = { topX: 60, botX: 35 };
  const HOVER_LEFT = { topX: 95, botX: 80 };
  const HOVER_RIGHT = { topX: 25, botX: 5 };

  let current = { topX: DEFAULT.topX, botX: DEFAULT.botX };
  let target = { ...current };
  let raf;

  function updateDivider() {
    const glowLine = divider.querySelector('.split__line--glow');
    const coreLine = divider.querySelector('.split__line--core');
    if (glowLine) {
      glowLine.setAttribute('x1', current.topX);
      glowLine.setAttribute('x2', current.botX);
    }
    if (coreLine) {
      coreLine.setAttribute('x1', current.topX);
      coreLine.setAttribute('x2', current.botX);
    }
  }

  function animate() {
    const ease = 0.04;
    current.topX += (target.topX - current.topX) * ease;
    current.botX += (target.botX - current.botX) * ease;

    const topX = current.topX;
    const botX = current.botX;
    splitLeft.style.clipPath =
      `polygon(0% 0%, ${topX}% 0%, ${botX}% 100%, 0% 100%)`;

    updateDivider();

    // Keep animating until we're very close
    if (Math.abs(target.topX - current.topX) > 0.01 ||
        Math.abs(target.botX - current.botX) > 0.01) {
      raf = requestAnimationFrame(animate);
    }
  }

  function startAnimate(t) {
    target = t;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(animate);
  }

  split.addEventListener('mousemove', (e) => {
    const rect = split.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;

    if (x < 0.45) {
      startAnimate(HOVER_LEFT);
      split.classList.add('hover-left');
      split.classList.remove('hover-right');
    } else {
      startAnimate(HOVER_RIGHT);
      split.classList.add('hover-right');
      split.classList.remove('hover-left');
    }
  });

  split.addEventListener('mouseleave', () => {
    startAnimate(DEFAULT);
    split.classList.remove('hover-left', 'hover-right');
  });
}
