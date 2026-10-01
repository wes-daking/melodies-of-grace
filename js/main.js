/**
 * Melodies of Grace (MOG) - Main JavaScript Logic
 * Handles global navigation, mobile drawer, header state on scroll,
 * reveal animations, and universal modal utilities.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeSystem();
  initNavbar();
  initScrollAnimations();
  initTeamModal();
  initFooterYear();
});

/**
 * Mobile Navigation & Header Scroll State
 */
function initNavbar() {
  const navbar = document.querySelector('.mog-navbar');
  const toggleBtn = document.querySelector('.mobile-toggle-btn');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  // Header background on scroll
  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('mobile-open');
      if (isOpen) {
        navLinks.classList.remove('mobile-open');
        toggleBtn.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        body.classList.remove('menu-locked');
      } else {
        navLinks.classList.add('mobile-open');
        toggleBtn.classList.add('open');
        toggleBtn.setAttribute('aria-expanded', 'true');
        body.classList.add('menu-locked');
      }
    });

    // Close on navigation click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        toggleBtn.classList.remove('open');
        body.classList.remove('menu-locked');
      });
    });
  }
}

/**
 * Intersection Observer for Smooth Scroll Reveals
 */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Team Member Modal Details
 */
function initTeamModal() {
  const modal = document.getElementById('team-modal');
  if (!modal) return;

  const modalImg = modal.querySelector('.modal-member-img');
  const modalName = modal.querySelector('.modal-member-name');
  const modalRole = modal.querySelector('.modal-member-role');
  const modalBio = modal.querySelector('.modal-member-bio');
  const modalQuote = modal.querySelector('.modal-member-quote');
  const closeBtn = modal.querySelector('.modal-close');

  // Open modal handler
  window.openTeamMemberModal = function(memberId) {
    if (!window.mogData || !window.mogData.team) return;
    const member = window.mogData.team.find(m => m.id === memberId);
    if (!member) return;

    if (modalImg) modalImg.src = member.image;
    if (modalImg) modalImg.alt = member.name;
    if (modalName) modalName.textContent = member.name;
    
    const modalCountry = modal.querySelector('.modal-member-country');
    if (modalCountry) {
      modalCountry.textContent = member.country ? `Country: ${member.country}` : '';
    }

    if (modalRole) {
      let roleText = '';
      if (member.part) roleText += `Part: ${member.part}`;
      if (member.departmentRole) {
        roleText += roleText ? ` • ${member.departmentRole}` : member.departmentRole;
      }
      modalRole.textContent = roleText;
    }

    if (modalBio) {
      if (member.bio && member.bio.trim()) {
        modalBio.style.display = 'block';
        modalBio.textContent = member.bio;
      } else {
        modalBio.style.display = 'none';
        modalBio.textContent = '';
      }
    }
    if (modalQuote) {
      if (member.quote && member.quote.trim()) {
        modalQuote.style.display = 'block';
        modalQuote.textContent = `"${member.quote}"`;
      } else {
        modalQuote.style.display = 'none';
      }
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Close handlers
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * Universal Image Modal (For flyers and concert photos)
 */
window.openImageZoomModal = function(imageSrc, titleText, captionText) {
  let zoomModal = document.getElementById('image-zoom-modal');
  if (!zoomModal) {
    zoomModal = document.createElement('div');
    zoomModal.id = 'image-zoom-modal';
    zoomModal.className = 'lightbox-modal';
    zoomModal.innerHTML = `
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <div class="lightbox-content">
        <img class="lightbox-img" src="" alt="Enlarged view">
      </div>
      <div class="lightbox-caption-bar">
        <h4 class="lightbox-title"></h4>
        <p class="lightbox-desc"></p>
      </div>
    `;
    document.body.appendChild(zoomModal);

    zoomModal.querySelector('.lightbox-close').addEventListener('click', () => {
      zoomModal.classList.remove('active');
      document.body.style.overflow = '';
    });
    zoomModal.addEventListener('click', (e) => {
      if (e.target === zoomModal) {
        zoomModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  zoomModal.querySelector('.lightbox-img').src = imageSrc;
  zoomModal.querySelector('.lightbox-title').textContent = titleText || '';
  zoomModal.querySelector('.lightbox-desc').textContent = captionText || '';

  zoomModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

/**
 * Footer Year Stamp
 */
function initFooterYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/**
 * Global Theme System (Light, Dark, and System Preferences)
 */
function initThemeSystem() {
  const THEME_STORAGE_KEY = 'mog-theme-preference';
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

  function getStoredPreference() {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'system';
  }

  function getEffectiveTheme(preference) {
    if (preference === 'system') {
      return mediaQuery.matches ? 'light' : 'dark';
    }
    return preference;
  }

  function applyTheme(preference) {
    const effective = getEffectiveTheme(preference);
    document.documentElement.setAttribute('data-theme', effective);

    // Update UI state across all theme switcher instances
    const switchers = document.querySelectorAll('.theme-switcher-wrapper');
    switchers.forEach(sw => {
      const btns = sw.querySelectorAll('.theme-pill-btn');
      btns.forEach(btn => {
        const choice = btn.getAttribute('data-theme-choice');
        if (choice === preference) {
          btn.classList.add('active');
          btn.setAttribute('aria-checked', 'true');
        } else {
          btn.classList.remove('active');
          btn.setAttribute('aria-checked', 'false');
        }
      });
    });
  }

  // Listen to OS system color-scheme changes
  mediaQuery.addEventListener('change', () => {
    const currentPref = getStoredPreference();
    if (currentPref === 'system') {
      applyTheme('system');
    }
  });

  // Global click delegation for theme switcher buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.theme-pill-btn');
    if (!btn) return;
    const choice = btn.getAttribute('data-theme-choice');
    if (!choice) return;
    localStorage.setItem(THEME_STORAGE_KEY, choice);
    applyTheme(choice);
  });

  // Initial sync
  applyTheme(getStoredPreference());
}

