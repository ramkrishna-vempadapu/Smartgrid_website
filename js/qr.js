/* ============================================================
   Smart Grid R&D Center — IITH
   js/qr.js — QR Code Generation for Physical Display Bridges
   Physical lab displays → QR code → Website page
   Uses qrcode.js (loaded via CDN in each HTML page)
   ============================================================ */

/**
 * Generate a QR code into a container element.
 * @param {string} containerId - ID of the element to render QR into
 * @param {string} url - Full URL to encode
 * @param {object} options - Optional overrides
 */
function generateQR(containerId, url, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Clear container
  container.innerHTML = '';

  const config = {
    text:          url,
    width:         container.dataset.qrSize ? parseInt(container.dataset.qrSize) : 128,
    height:        container.dataset.qrSize ? parseInt(container.dataset.qrSize) : 128,
    colorDark:     "#2A1208",
    colorLight:    "#FFFFFF",
    correctLevel:  QRCode.CorrectLevel.M,
    ...options
  };

  try {
    new QRCode(container, config);
  } catch (e) {
    container.innerHTML = `<div style="
      width:${config.width}px;height:${config.height}px;
      display:flex;align-items:center;justify-content:center;
      border:1px dashed #E7D3C2;border-radius:4px;
      font-size:10px;color:#A68C7B;text-align:center;padding:8px;">
      QR code<br>pending
    </div>`;
  }
}

/**
 * Generate all QR codes on the page.
 * Looks for elements with data-qr-url attribute.
 */
function generateAllQRCodes() {
  const qrContainers = document.querySelectorAll('[data-qr-url]');

  qrContainers.forEach(container => {
    const url = container.dataset.qrUrl;
    const size = parseInt(container.dataset.qrSize) || 128;

    if (!url || url.trim() === '' || url === '#') {
      container.innerHTML = `<div style="
        width:${size}px;height:${size}px;
        display:flex;align-items:center;justify-content:center;
        border:1px dashed #E7D3C2;border-radius:4px;
        background:#FFF9F2;font-size:9px;color:#A68C7B;
        text-align:center;padding:8px;line-height:1.3;">
        QR code<br>directory
      </div>`;
      return;
    }

    // Build full URL if relative
    let fullUrl = url;
    if (!url.startsWith('http')) {
      fullUrl = window.location.origin + '/' + url;
    }

    if (typeof QRCode !== 'undefined') {
      generateQR(container.id || `qr-${Math.random().toString(36).substr(2,9)}`, fullUrl, { width: size, height: size });
    } else {
      // QRCode library not loaded — show placeholder
      container.innerHTML = `<div style="
        width:${size}px;height:${size}px;
        display:flex;align-items:center;justify-content:center;
        border:1px dashed #E7D3C2;border-radius:4px;
        font-size:9px;color:#A68C7B;text-align:center;padding:8px;">
        QR library<br>loading…
      </div>`;
    }
  });
}

/**
 * Build the QR code URL for a display item.
 * @param {string} destination - Relative page path (e.g. "team.html#current")
 * @returns {string} Full URL
 */
function buildDisplayUrl(destination) {
  return window.location.origin + '/' + destination;
}

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', generateAllQRCodes);
} else {
  generateAllQRCodes();
}
