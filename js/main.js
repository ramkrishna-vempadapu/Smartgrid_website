/* ============================================================
   Smart Grid R&D Center — IITH
   js/main.js — Navigation, Scroll Effects, Animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Active nav link ────────────────────────────────────────── */
  const navLinks = document.querySelectorAll('.navbar__link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Navbar scroll effect ───────────────────────────────────── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ── Mobile nav toggle ──────────────────────────────────────── */
  const toggle = document.querySelector('.navbar__toggle');
  const mobileNav = document.querySelector('.navbar__mobile');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        toggle.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        toggle.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── Scroll reveal animations ───────────────────────────────── */
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  /* ── Stat counter animation ─────────────────────────────────── */
  const statNumbers = document.querySelectorAll('.stat-counter');

  if (statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);

          if (!isNaN(target)) {
            animateCounter(el, 0, target, 1500);
          }

          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(el, start, end, duration) {
    const startTime = performance.now();
    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(start + (end - start) * eased);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  /* ── Tabs ────────────────────────────────────────────────────── */
  const tabBtns = document.querySelectorAll('.tab-btn');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;
      const tabGroup = btn.closest('.tabs').dataset.group;

      // Deactivate all in group
      document.querySelectorAll(`[data-group="${tabGroup}"] .tab-btn`).forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      document.querySelectorAll(`[data-tab-panel][data-group="${tabGroup}"]`).forEach(panel => {
        panel.classList.remove('active');
      });

      // Activate target
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const panel = document.querySelector(`[data-tab-panel="${targetId}"][data-group="${tabGroup}"]`);
      if (panel) panel.classList.add('active');
    });
  });

  /* ── Smooth anchor scroll ───────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Copy hashtag on click ──────────────────────────────────── */
  document.querySelectorAll('.hashtag').forEach(tag => {
    tag.addEventListener('click', () => {
      const text = tag.textContent.trim();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          const original = tag.textContent;
          tag.textContent = '✓ Copied!';
          setTimeout(() => { tag.textContent = original; }, 1500);
        });
      }
    });
    tag.title = 'Click to copy';
    tag.style.cursor = 'pointer';
  });

  /* ── Back to top (if button exists) ────────────────────────── */
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.opacity = window.scrollY > 400 ? '1' : '0';
      backToTop.style.pointerEvents = window.scrollY > 400 ? 'auto' : 'none';
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
