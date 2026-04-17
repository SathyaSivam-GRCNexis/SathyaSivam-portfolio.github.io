/* ============================================
   PRIVACY & GRC PORTFOLIO — PREMIUM SCRIPTS
   Particles, Typed Text, Cursor, Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // === PAGE LOADER ===
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('loaded');
      document.body.style.overflow = '';
      startRevealAnimations();
    }, 2200);
  });

  // Fallback: remove loader after 4s
  setTimeout(() => {
    loader.classList.add('loaded');
    startRevealAnimations();
  }, 4000);

  // === PARTICLE SYSTEM ===
  const canvas = document.getElementById('particles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '79, 209, 197' : '167, 139, 250';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fill();
      }
    }

    function initParticles() {
      const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79, 209, 197, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      drawConnections();
      animationId = requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    // Pause when not visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animateParticles();
      }
    });
  }

  // === NAVIGATION ===
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav__link');
  const mobileOverlay = document.getElementById('mobileOverlay');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }, { passive: true });

  // Mobile toggle
  function toggleMobileNav() {
    navToggle.classList.toggle('nav__toggle--active');
    navLinks.classList.toggle('nav__links--open');
    mobileOverlay.classList.toggle('mobile-overlay--active');
    document.body.style.overflow = navLinks.classList.contains('nav__links--open') ? 'hidden' : '';
  }

  navToggle.addEventListener('click', toggleMobileNav);
  mobileOverlay.addEventListener('click', toggleMobileNav);

  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('nav__links--open')) {
        toggleMobileNav();
      }
    });
  });

  // Active link highlighting
  const sections = document.querySelectorAll('.section, .hero');
  const observerOpts = {
    root: null,
    rootMargin: '-25% 0px -55% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinkItems.forEach(link => {
          link.classList.remove('nav__link--active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  }, observerOpts);

  sections.forEach(section => sectionObserver.observe(section));

  // === SMOOTH SCROLL ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = target.offsetTop - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });

  // === SCROLL REVEAL ===
  function startRevealAnimations() {
    const revealElements = document.querySelectorAll('[data-reveal]');

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // === TYPED TEXT EFFECT ===
  const typedEl = document.getElementById('heroTyped');
  if (typedEl) {
    const phrases = [
      'What risk did you identify and how did you reduce it?',
      'Mapping controls across ISO 27001, SOC 2, and GDPR.',
      'Building audit-ready processes, not just documentation.',
      'Risk-first thinking. Business-aligned compliance.',
      'From gap analysis to remediation — end to end.'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 50;

    function typeEffect() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        typedEl.textContent = currentPhrase.substring(0, charIndex - 1) + '|';
        charIndex--;
        typingSpeed = 25;
      } else {
        typedEl.textContent = currentPhrase.substring(0, charIndex + 1) + '|';
        charIndex++;
        typingSpeed = 55;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 2500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 300;
      }

      setTimeout(typeEffect, typingSpeed);
    }

    // Start typing after loader
    setTimeout(typeEffect, 2800);
  }

  // === COUNTER ANIMATION ===
  const allCounters = document.querySelectorAll('[data-count]');

  function countUp(element, target) {
    const duration = 2000;
    const start = performance.now();

    function animate(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      element.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = target;
      }
    }

    requestAnimationFrame(animate);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.count, 10);
        countUp(entry.target, target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  allCounters.forEach(counter => counterObserver.observe(counter));

  // === TILT EFFECT ON CARDS ===
  if (window.innerWidth > 768) {
    const tiltCards = document.querySelectorAll('[data-tilt]');

    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / centerY * -4;
        const rotateY = (x - centerX) / centerX * 4;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      });
    });
  }

  // === BACK TO TOP ===
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // === PARALLAX ON HERO ORBS ===
  if (window.innerWidth > 768) {
    const orbs = document.querySelectorAll('.hero__orb');
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 15;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    }, { passive: true });
  }

  // === MAGNETIC BUTTON EFFECT ===
  if (window.innerWidth > 768) {
    const magneticBtns = document.querySelectorAll('.btn--primary, .btn--glass');

    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // === CERT FLIP CARDS — TOUCH SUPPORT ===
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    const certFlips = document.querySelectorAll('.cert-flip');
    certFlips.forEach(card => {
      card.addEventListener('click', () => {
        // Close other open cards
        certFlips.forEach(other => {
          if (other !== card) other.classList.remove('cert-flip--active');
        });
        card.classList.toggle('cert-flip--active');
      });
    });
  }

  // === CONTACT FORM (Formspree AJAX) ===
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('contactSubmitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Update button to loading state
      const btnText = submitBtn.querySelector('span');
      const originalText = btnText.textContent;
      btnText.textContent = 'Sending...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          formStatus.innerHTML = '<div class="form-status--success"><i data-lucide="check-circle"></i> Message sent successfully! I\'ll get back to you within 24 hours.</div>';
          contactForm.reset();
          lucide.createIcons();
        } else {
          const data = await response.json();
          const errorMsg = data.errors ? data.errors.map(err => err.message).join(', ') : 'Something went wrong.';
          formStatus.innerHTML = `<div class="form-status--error"><i data-lucide="alert-circle"></i> ${errorMsg} Please try emailing me directly.</div>`;
          lucide.createIcons();
        }
      } catch (error) {
        formStatus.innerHTML = '<div class="form-status--error"><i data-lucide="alert-circle"></i> Network error. Please try emailing me directly at sathyasivam.ps@gmail.com</div>';
        lucide.createIcons();
      }

      // Reset button
      btnText.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
    });
  }

  // === FLOATING SOCIAL SIDEBAR — SHOW ON SCROLL ===
  const socialSidebar = document.getElementById('socialSidebar');
  if (socialSidebar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        socialSidebar.classList.add('social-sidebar--visible');
      } else {
        socialSidebar.classList.remove('social-sidebar--visible');
      }
    }, { passive: true });
  }

});
