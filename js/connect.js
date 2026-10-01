/**
 * Melodies of Grace (MOG) - Connect & Dispatch Engine
 * Manages Booking requests, Auditions registration, and Merchandise orders
 * with direct WhatsApp API integration and email fallback.
 */

document.addEventListener('DOMContentLoaded', () => {
  initConnectTabs();
  initBookingForm();
  initMerchOrderModal();
  initAuditionsAction();
});

/**
 * Switch tabs between Booking, Auditions, and Merch
 */
function initConnectTabs() {
  const tabs = document.querySelectorAll('.connect-tab-btn');
  const sections = document.querySelectorAll('.connect-section-view');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      tabs.forEach(t => t.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      tab.classList.add('active');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }

      // Update URL hash without scrolling abruptly
      if (history.pushState) {
        history.pushState(null, null, `#${targetId}`);
      }
    });
  });

  // Handle hash in URL on load
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const matchingTab = document.querySelector(`.connect-tab-btn[data-tab="${hash}"]`);
    if (matchingTab) matchingTab.click();
  }
}

/**
 * Booking Form Validation and WhatsApp / Email Dispatch
 */
function initBookingForm() {
  const form = document.getElementById('mog-booking-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#booking-name')?.value.trim();
    const org = form.querySelector('#booking-org')?.value.trim();
    const email = form.querySelector('#booking-email')?.value.trim();
    const phone = form.querySelector('#booking-phone')?.value.trim();
    const eventType = form.querySelector('#booking-event-type')?.value;
    const date = form.querySelector('#booking-date')?.value;
    const location = form.querySelector('#booking-location')?.value.trim();
    const details = form.querySelector('#booking-details')?.value.trim();

    if (!name || !email || !phone || !eventType || !location) {
      alert('Please complete all required fields (*)');
      return;
    }

    const whatsAppNumber = window.mogData?.config?.whatsAppNumber || "919311406305";

    // Format professional WhatsApp message
    const message = `*MELODIES OF GRACE — BOOKING INQUIRY*
---------------------------------------
*Name / Contact:* ${name}
*Organization / Church:* ${org || 'N/A'}
*Email:* ${email}
*Phone:* ${phone}
*Event Type:* ${eventType}
*Preferred Date:* ${date || 'Flexible'}
*Venue / City:* ${location}
*Event Details:* ${details || 'None provided'}
---------------------------------------
Sent via Melodies of Grace Official Portal`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(waUrl, '_blank');

    // Show friendly success confirmation
    showToastNotification("Booking inquiry generated! Redirecting to WhatsApp to send directly to our executive team.");
    form.reset();
  });
}

/**
 * Merchandise Size Selection and WhatsApp Order Generator
 */
function initMerchOrderModal() {
  let modal = document.getElementById('merch-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'merch-modal';
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <div class="mog-form-card" style="max-width: 500px; width: 92%;">
        <div style="text-align: center; margin-bottom: 20px;">
          <span style="color: var(--color-gold); font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">Official Apparel</span>
          <h3 id="modal-merch-title" style="color: var(--color-cream); margin-top: 6px; font-size: 1.35rem;"></h3>
          <p id="modal-merch-price" style="color: var(--color-gold); font-weight: 700; font-size: 1.1rem; margin-top: 4px;"></p>
        </div>

        <div style="margin-bottom: 20px;">
          <label class="form-label">Select Size <span class="req">*</span></label>
          <div id="modal-size-selector" style="display: flex; gap: 10px; flex-wrap: wrap;">
            <!-- Render sizes dynamically -->
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <label class="form-label">Quantity</label>
          <input type="number" id="modal-merch-qty" class="form-input" min="1" max="10" value="1" style="width: 100px;">
        </div>

        <div style="margin-bottom: 24px;">
          <label class="form-label">Your Delivery City / Campus <span class="req">*</span></label>
          <input type="text" id="modal-merch-dest" class="form-input" placeholder="e.g. Greater Noida, Delhi NCR, or International">
        </div>

        <button id="modal-merch-confirm" class="btn btn-gold" style="width: 100%;">
          Order via WhatsApp &rarr;
        </button>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.lightbox-close').addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  let selectedItem = null;
  let selectedSize = "L";

  window.openMerchOrderModal = function(itemId) {
    if (!window.mogData || !window.mogData.merchandise) return;
    selectedItem = window.mogData.merchandise.find(m => m.id === itemId);
    if (!selectedItem) return;

    modal.querySelector('#modal-merch-title').textContent = selectedItem.name;
    modal.querySelector('#modal-merch-price').textContent = selectedItem.priceDisplay;

    const sizeContainer = modal.querySelector('#modal-size-selector');
    sizeContainer.innerHTML = '';
    selectedSize = selectedItem.sizes[0] || 'L';

    selectedItem.sizes.forEach((sz, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `filter-btn ${idx === 0 ? 'active' : ''}`;
      btn.textContent = sz;
      btn.style.padding = '8px 18px';
      btn.addEventListener('click', () => {
        sizeContainer.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSize = sz;
      });
      sizeContainer.appendChild(btn);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const confirmBtn = modal.querySelector('#modal-merch-confirm');
  confirmBtn?.addEventListener('click', () => {
    if (!selectedItem) return;
    const qty = modal.querySelector('#modal-merch-qty')?.value || 1;
    const dest = modal.querySelector('#modal-merch-dest')?.value.trim();

    if (!dest) {
      alert('Please enter your delivery city or campus.');
      return;
    }

    const whatsAppNumber = window.mogData?.config?.whatsAppNumber || "919311406305";
    const msg = `*MELODIES OF GRACE — MERCHANDISE ORDER*
---------------------------------------
*Item:* ${selectedItem.name}
*Size:* ${selectedSize}
*Quantity:* ${qty}
*Unit Price:* ${selectedItem.priceDisplay}
*Destination / Campus:* ${dest}
---------------------------------------
Hello MOG Team! I would like to order this official apparel item. Please share payment and pickup/shipping details.`;

    const waUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');

    modal.classList.remove('active');
    document.body.style.overflow = '';
    showToastNotification("Order details prepared! Redirecting to WhatsApp to complete your purchase with our store manager.");
  });
}

/**
 * Audition direct WhatsApp inquiry
 */
function initAuditionsAction() {
  window.openAuditionWhatsApp = function() {
    const whatsAppNumber = window.mogData?.config?.whatsAppNumber || "919311406305";
    const msg = `*MELODIES OF GRACE — AUDITION INQUIRY*
---------------------------------------
Hello Melodies of Grace Leadership!
I am interested in auditioning for MOG.
*My Name:* 
*Vocal Part / Instrument:* (Soprano / Alto / Tenor / Bass / Keyboards / Drums / Bass / Guitar / Violin)
*Location / University:* 
Please share upcoming audition dates and screening requirements!`;

    window.open(`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };
}

/**
 * Simple Toast Notification Helper
 */
function showToastNotification(text) {
  let toast = document.getElementById('mog-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'mog-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: var(--color-gold);
      color: var(--color-noir);
      padding: 16px 24px;
      border-radius: var(--radius-md);
      font-weight: 600;
      font-size: 0.92rem;
      z-index: 100000;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      transition: opacity 0.3s ease, transform 0.3s ease;
      opacity: 0;
      transform: translateY(20px);
      max-width: 380px;
      line-height: 1.4;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = text;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
  }, 4500);
}
