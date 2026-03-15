document.addEventListener('DOMContentLoaded', () => {
  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Trigger reveals already in viewport
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('active');
    });
  }, 100);

  // Navbar scroll
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  });

  // Mobile menu
  const toggle = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeBtn = document.querySelector('.mobile-nav .close-btn');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => mobileNav.classList.add('open'));
    if (closeBtn) closeBtn.addEventListener('click', () => mobileNav.classList.remove('open'));
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  // Typing effect for hero
  const typed = document.querySelector('.typed-text');
  if (typed) {
    const words = ['DevOps Engineer', 'Cloud Architect', 'K8s Specialist', 'CI/CD Expert'];
    let wi = 0, ci = 0, deleting = false;
    function type() {
      const word = words[wi];
      typed.textContent = deleting ? word.substring(0, ci--) : word.substring(0, ci++);
      if (!deleting && ci > word.length) { setTimeout(() => { deleting = true; type(); }, 2000); return; }
      if (deleting && ci < 0) { deleting = false; wi = (wi + 1) % words.length; }
      setTimeout(type, deleting ? 40 : 80);
    }
    type();
  }

  // Counter animation for stats
  document.querySelectorAll('[data-count]').forEach(el => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const target = +el.dataset.count;
          const suffix = el.dataset.suffix || '';
          let current = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = current + suffix;
          }, 30);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    io.observe(el);
  });
});
