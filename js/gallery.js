/**
 * Melodies of Grace (MOG) - Gallery & Lightbox Logic
 * Handles dynamic rendering, category filtering, and fullscreen interactive lightbox.
 */

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  initEventsTabs();
});

let currentGalleryList = [];
let activeLightboxIndex = 0;

function initGallery() {
  const container = document.getElementById('gallery-container');
  if (!container || !window.mogData || !window.mogData.gallery) return;

  currentGalleryList = [...window.mogData.gallery];
  renderGalleryGrid(currentGalleryList);

  // Setup category filter buttons
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        currentGalleryList = [...window.mogData.gallery];
      } else {
        currentGalleryList = window.mogData.gallery.filter(item => 
          item.category.toLowerCase().includes(filter.toLowerCase())
        );
      }
      renderGalleryGrid(currentGalleryList);
    });
  });

  initLightbox();
}

function renderGalleryGrid(items) {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  container.innerHTML = '';
  if (items.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--color-text-muted); grid-column: 1/-1; padding: 40px 0;">No photographs found in this category.</p>`;
    return;
  }

  items.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'gallery-masonry-item reveal-on-scroll';
    el.innerHTML = `
      <img src="${item.src}" alt="${item.title}" loading="lazy">
      <div class="gallery-item-info">
        <span class="gallery-item-category">${item.category}</span>
        <h3 class="gallery-item-title">${item.title}</h3>
      </div>
    `;

    el.addEventListener('click', () => {
      openLightbox(index);
    });

    container.appendChild(el);
  });
}

/**
 * Interactive Fullscreen Lightbox
 */
function initLightbox() {
  const modal = document.getElementById('gallery-lightbox');
  if (!modal) return;

  const closeBtn = modal.querySelector('.lightbox-close');
  const prevBtn = modal.querySelector('.lightbox-prev');
  const nextBtn = modal.querySelector('.lightbox-next');

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', showPrevImage);
  nextBtn?.addEventListener('click', showNextImage);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
  });
}

function openLightbox(index) {
  const modal = document.getElementById('gallery-lightbox');
  if (!modal || !currentGalleryList[index]) return;

  activeLightboxIndex = index;
  updateLightboxContent();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('gallery-lightbox');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightboxContent() {
  const modal = document.getElementById('gallery-lightbox');
  if (!modal) return;

  const item = currentGalleryList[activeLightboxIndex];
  if (!item) return;

  const img = modal.querySelector('.lightbox-img');
  const title = modal.querySelector('.lightbox-title');
  const desc = modal.querySelector('.lightbox-desc');
  const counter = modal.querySelector('.lightbox-counter');

  if (img) img.src = item.src;
  if (img) img.alt = item.title;
  if (title) title.textContent = item.title;
  if (desc) desc.textContent = item.caption || item.category;
  if (counter) counter.textContent = `${activeLightboxIndex + 1} / ${currentGalleryList.length}`;
}

function showPrevImage() {
  activeLightboxIndex = (activeLightboxIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
  updateLightboxContent();
}

function showNextImage() {
  activeLightboxIndex = (activeLightboxIndex + 1) % currentGalleryList.length;
  updateLightboxContent();
}

/**
 * Toggle between Gallery & Events sections if tabbed
 */
function initEventsTabs() {
  const tabBtns = document.querySelectorAll('.page-subtab-btn');
  const tabContents = document.querySelectorAll('.page-subtab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add('active');
    });
  });
}
