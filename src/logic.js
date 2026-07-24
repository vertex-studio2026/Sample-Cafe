/* ============================================================
   MAISON ROAST — Cafe Website Logic
   ============================================================ */

(function () {
  'use strict';

  /* ── Loading Screen ─────────────────────────────────────── */
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 2000);
    });
  }

  /* ── Navbar scroll effect ───────────────────────────────── */
  const navbar = document.getElementById('navbar');
  const backTop = document.getElementById('back-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      if (navbar) navbar.classList.add('scrolled');
      if (backTop) backTop.classList.add('visible');
    } else {
      if (navbar) navbar.classList.remove('scrolled');
      if (backTop) backTop.classList.remove('visible');
    }
  }, { passive: true });

  /* ── Back to top ─────────────────────────────────────────── */
  if (backTop) {
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── Hero bg entrance ───────────────────────────────────── */
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    setTimeout(() => heroBg.classList.add('loaded'), 100);
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      if (scroll < window.innerHeight) {
        heroBg.style.transform = `scale(1) translateY(${scroll * 0.3}px)`;
      }
    }, { passive: true });
  }

  /* ── Hamburger / Mobile Menu ────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Smooth nav links ────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Scroll Reveal ───────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = Number(el.dataset.delay) || 0;
          setTimeout(() => el.classList.add('visible'), delay);
          revealObserver.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: show all
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ── Counter Animation ───────────────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => countObserver.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ── Menu Tabs ───────────────────────────────────────────── */
  const tabs   = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const panel = document.getElementById('panel-' + target);
      if (panel) panel.classList.add('active');
    });
  });

  /* ── Gallery Lightbox ────────────────────────────────────── */
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lightbox-img');
  const lbClose  = document.getElementById('lightbox-close');

  if (lightbox && lbImg && lbClose) {
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
          lbImg.src = img.src;
          lbImg.alt = img.alt;
          lightbox.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') item.click();
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
    lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
  }

  /* ── Testimonials Slider ─────────────────────────────────── */
  const track  = document.querySelector('.testimonials-track');
  const tCards = document.querySelectorAll('.testimonial-card');
  const dots   = document.querySelectorAll('.t-dot');
  const prevBtn = document.getElementById('t-prev');
  const nextBtn = document.getElementById('t-next');

  if (track && tCards.length) {
    let slideIndex = 0;

    function visibleCount() {
      return window.innerWidth < 768 ? 1 : 3;
    }

    function goTo(idx) {
      const vc = visibleCount();
      const maxIdx = Math.max(0, tCards.length - vc);
      slideIndex = Math.max(0, Math.min(idx, maxIdx));
      const cardW = tCards[0].offsetWidth + 28;
      track.style.transform = `translateX(-${slideIndex * cardW}px)`;
      const dotIndex = Math.min(Math.floor(slideIndex / vc), dots.length - 1);
      dots.forEach((d, i) => d.classList.toggle('active', i === dotIndex));
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { goTo(slideIndex - visibleCount()); resetAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goTo(slideIndex + visibleCount()); resetAuto(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i * visibleCount()); resetAuto(); }));

    let autoPlay;
    function startAuto() {
      autoPlay = setInterval(() => {
        const vc = visibleCount();
        const next = slideIndex + vc;
        goTo(next >= tCards.length ? 0 : next);
      }, 5000);
    }
    function resetAuto() { clearInterval(autoPlay); startAuto(); }
    startAuto();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => goTo(0), 250);
    });
  }

  /* ── Reservation Form ────────────────────────────────────── */
  const form    = document.getElementById('res-form');
  const success = document.getElementById('form-success');
  if (form && success) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.style.display = 'none';
      success.style.display = 'block';
      setTimeout(() => {
        success.style.display = 'none';
        form.style.display = 'block';
        form.reset();
      }, 4500);
    });
  }

  /* ── Newsletter ──────────────────────────────────────────── */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      const btn   = newsletterForm.querySelector('button');
      if (btn) {
        btn.textContent = '✓ Subscribed!';
        btn.style.background = '#2e7d32';
      }
      if (input) input.value = '';
      setTimeout(() => {
        if (btn) { btn.textContent = 'Subscribe'; btn.style.background = ''; }
      }, 3000);
    });
  }

  /* ── Menu order button feedback ──────────────────────────── */
  document.querySelectorAll('.menu-order').forEach(btn => {
    btn.addEventListener('click', function () {
      this.textContent = '✓';
      this.style.background = '#2e7d32';
      this.style.color = '#fff';
      setTimeout(() => {
        this.textContent = '+';
        this.style.background = '';
        this.style.color = '';
      }, 1200);
    });
  });

  /* ── Active section highlight in nav ────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if ('IntersectionObserver' in window && navLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            const active = link.getAttribute('href') === '#' + entry.target.id;
            link.style.color = active ? 'var(--gold-light)' : '';
          });
        }
      });
    }, { threshold: 0.45 });
    sections.forEach(s => sectionObserver.observe(s));
  }

})();
