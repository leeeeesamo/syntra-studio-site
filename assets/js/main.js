// Syntra Studio main interactions
// Smooth scroll, active nav highlight, minimal testimonials slider

(function() {
  const navLinks = Array.from(document.querySelectorAll('a[data-nav]'));

  // Smooth scroll for internal anchors
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Active link highlighting on scroll
  const sections = navLinks
    .map((l) => document.getElementById(l.getAttribute('href').replace('#', '')))
    .filter(Boolean);

  const setActive = (id) => {
    navLinks.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
  };

  const onScroll = () => {
    const offset = 120; // header height threshold
    let current = sections[0]?.id;
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      if (rect.top - offset <= 0) current = sec.id;
    }
    if (current) setActive(current);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', onScroll);

  // Testimonials slider
  const slider = document.querySelector('[data-slider]');
  const dotsWrap = document.querySelector('[data-dots]');
  if (slider && dotsWrap) {
    const slides = Array.from(slider.children);
    let index = 0;

    // dots
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', `Go to slide ${i+1}`);
      b.addEventListener('click', () => go(i));
      dotsWrap.appendChild(b);
    });
    const dots = Array.from(dotsWrap.children);

    const update = () => {
      slider.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
    };

    const go = (i) => {
      index = (i + slides.length) % slides.length;
      update();
    };

    update();

    // auto-advance
    let timer = setInterval(() => go(index + 1), 6000);
    slider.addEventListener('pointerdown', () => {
      clearInterval(timer);
      timer = null;
    }, { once: true });

    // swipe support (basic)
    let startX = null;
    slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });
    slider.addEventListener('touchend', (e) => {
      if (startX == null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) {
        go(index + (dx < 0 ? 1 : -1));
      }
      startX = null;
    });
  }
})();
