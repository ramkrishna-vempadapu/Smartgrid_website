/* ============================================================
   Smart Grid R&D Center — IIT Hyderabad
   js/media.js — Institutional Photo Archive, Lightbox & Lab Selfie Creator
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const albumsData = window.MEDIA_ALBUMS || {};
  const highlightsData = window.RESEARCH_HIGHLIGHTS || [];
  const selfieConfig = window.SELFIE_CONFIG || {};

  // 1. Initialize Sticky Category Navigation Bar
  initCategoryNavigation();

  // 2. Render Research in Action Highlights
  initResearchHighlights(highlightsData);

  // 3. Initialize Interactive Gallery Sections
  initSectionGallery('discom-section-mount', albumsData.discom || [], 'discom', 'Industry Visits & DISCOM Batches');
  initSectionGallery('students-section-mount', albumsData.students || [], 'students', 'Student Workshops & Batches');
  initSectionGallery('visitors-section-mount', albumsData.visitors || [], 'visitors', 'Visitors & Delegations');
  initSectionGallery('setup-section-mount', albumsData.setup || [], 'setup', 'Laboratory Setup');
  initSectionGallery('hardware-section-mount', albumsData.hardware || [], 'hardware', 'Hardware Development & Testing');

  // 4. Initialize Global Lightbox with Photo Download
  initLightboxModal();

  // 5. Initialize Official Lab Selfie Creator (Preserved Canvas Feature)
  initSelfieCreator(selfieConfig);

  // 6. Initialize Hashtags Copy
  initHashtags();
});

/* ── Lightbox Global State ───────────────────────────────────── */
let lightboxItems = [];
let lightboxCurrentIndex = 0;

/* ── 1. STICKY CATEGORY NAVIGATION ───────────────────────────── */
function initCategoryNavigation() {
  const navLinks = document.querySelectorAll('.media-cat-nav__link');
  if (!navLinks.length) return;

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);

      navLinks.forEach(l => l.classList.remove('media-cat-nav__link--active'));
      link.classList.add('media-cat-nav__link--active');

      if (targetEl) {
        const navOffset = 130;
        const pos = targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    });
  });

  // Highlight active link on scroll
  const sections = ['research-action', 'discom-batches', 'student-batches', 'visitors-delegations', 'lab-setup', 'hardware-testing', 'selfie-point'];
  window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset + 120;
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPos) {
        navLinks.forEach(l => {
          if (l.getAttribute('data-target') === sections[i]) {
            navLinks.forEach(n => n.classList.remove('media-cat-nav__link--active'));
            l.classList.add('media-cat-nav__link--active');
          }
        });
        break;
      }
    }
  }, { passive: true });
}

/* ── 2. RESEARCH IN ACTION HIGHLIGHTS ────────────────────────── */
function initResearchHighlights(highlights) {
  const container = document.getElementById('research-action-grid');
  if (!container || !highlights.length) return;

  container.innerHTML = highlights.map(item => `
    <div class="research-highlight-card">
      <div class="research-highlight-card__media">
        <img src="${item.image}" alt="${item.title}" class="research-highlight-card__img" loading="lazy">
        <span class="research-highlight-card__tag">${item.tag}</span>
      </div>
      <div class="research-highlight-card__body">
        <div class="research-highlight-card__header">
          <span class="research-highlight-card__icon">${item.icon}</span>
          <h3 class="research-highlight-card__title">${item.title}</h3>
        </div>
        <p class="research-highlight-card__desc">${item.description}</p>
        <div class="research-highlight-card__action">
          <button class="research-highlight-card__btn" onclick="scrollToSection('${item.targetSection}')">
            View Gallery →
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

window.scrollToSection = function(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    const navOffset = 130;
    const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
    window.scrollTo({ top: pos, behavior: 'smooth' });
  }
};

/* ── 3. INTERACTIVE SECTION-LEVEL GALLERY SYSTEM ─────────────── */
function initSectionGallery(mountId, albums, sectionKey, sectionLabel) {
  const mount = document.getElementById(mountId);
  if (!mount) return;

  renderAlbumsView(mount, albums, sectionKey, sectionLabel);
}

// ── Render Album Cards for a Section ────────────────────────────
function renderAlbumsView(mount, albums, sectionKey, sectionLabel) {
  const count = albums ? albums.length : 0;
  let layoutMod = 'archive-albums-grid--3-col';
  if (count === 1) layoutMod = 'archive-albums-grid--1-col';
  else if (count === 2) layoutMod = 'archive-albums-grid--2-col';

  const html = `
    <div class="archive-albums-grid ${layoutMod}">
      ${albums.map(album => {
        const photoCount = album.images ? album.images.length : 0;
        const hasPhotos = photoCount > 0;
        const coverImg = album.coverImage || (hasPhotos ? album.images[0] : null);

        return `
          <div class="archive-album-card ${!hasPhotos ? 'archive-album-card--empty' : ''}" 
               data-album-id="${album.id}" tabindex="0" role="button" aria-label="Open album: ${album.title}">
            <div class="archive-album-card__media">
              ${hasPhotos ? `
                <img src="${coverImg}" alt="${album.title}" class="archive-album-card__img" loading="lazy">
                <span class="archive-album-card__badge">${album.badge || album.title}</span>
                <span class="archive-album-card__count">📷 ${photoCount} ${photoCount === 1 ? 'Photo' : 'Photos'}</span>
                <div class="archive-album-card__overlay">
                  <span class="archive-album-card__cta">View Gallery →</span>
                </div>
              ` : `
                <div class="archive-album-card__empty-cover">
                  <span class="archive-empty-icon">📷</span>
                  <span class="archive-empty-text">Photos Coming Soon</span>
                </div>
                <span class="archive-album-card__badge archive-album-card__badge--dim">${album.badge || 'Upcoming'}</span>
              `}
            </div>
            <div class="archive-album-card__body">
              <span class="archive-album-card__category-badge">${album.badge || sectionLabel}</span>
              <h4 class="archive-album-card__title">${album.title}</h4>
              ${album.subtitle ? `<div class="archive-album-card__subtitle">${album.subtitle}</div>` : ''}
              <p class="archive-album-card__desc">${album.description}</p>
              <div class="archive-album-card__footer">
                <span class="archive-album-card__photo-count">
                  ${hasPhotos ? `${photoCount} ${photoCount === 1 ? 'Photo' : 'Photos'}` : 'Coming Soon'}
                </span>
                <span class="archive-album-card__action-link ${!hasPhotos ? 'archive-album-card__action-link--muted' : ''}">
                  ${hasPhotos ? 'View Gallery →' : 'Coming Soon'}
                </span>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  mount.innerHTML = html;

  // Bind clicks on Album Cards
  mount.querySelectorAll('.archive-album-card').forEach(card => {
    const albumId = card.getAttribute('data-album-id');
    const openAlbum = () => {
      const album = albums.find(a => a.id === albumId);
      if (album) {
        renderPhotosView(mount, albums, album, sectionKey, sectionLabel);
      }
    };
    card.addEventListener('click', openAlbum);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openAlbum();
      }
    });
  });
}

// ── Render Photos for a Specific Album ──────────────────────────
function renderPhotosView(mount, albums, album, sectionKey, sectionLabel) {
  const images = album.images || [];
  const photoCount = images.length;

  const currentItems = images.map((imgUrl, idx) => ({
    image: imgUrl,
    title: `${album.title} — Photo ${idx + 1}`,
    categoryLabel: `${sectionLabel} · ${album.title}`,
    caption: `${album.subtitle ? album.subtitle + ' — ' : ''}${album.description}`
  }));

  const html = `
    <div class="archive-photo-view">
      <!-- Top Action Bar with Back Button & Breadcrumbs -->
      <div class="archive-photo-view__bar">
        <button class="archive-back-btn" id="btn-back-${album.id}" aria-label="Back to ${sectionLabel}">
          ← Back to ${sectionLabel}
        </button>
        <div class="archive-photo-view__breadcrumbs">
          <span class="archive-photo-view__crumb-link" id="crumb-back-${album.id}">${sectionLabel}</span>
          <span class="archive-photo-view__crumb-sep">/</span>
          <span class="archive-photo-view__crumb-active">${album.title}</span>
        </div>
      </div>

      <!-- Album Header -->
      <div class="archive-photo-view__header">
        <div class="archive-photo-view__titles">
          <span class="archive-photo-view__badge">${album.badge || sectionLabel}</span>
          <h3 class="archive-photo-view__title">${album.title}</h3>
          <div class="archive-photo-view__institution">Smart Grid R&amp;D Center · IIT Hyderabad</div>
          <p class="archive-photo-view__desc">${album.description}</p>
        </div>
        <div class="archive-photo-view__meta">
          <span class="archive-photo-counter-pill">📷 ${photoCount} ${photoCount === 1 ? 'Photograph' : 'Photographs'}</span>
        </div>
      </div>

      <!-- Photos Grid -->
      ${photoCount > 0 ? `
        <div class="archive-photos-grid">
          ${images.map((imgUrl, imgIdx) => `
            <div class="archive-photo-item" data-photo-idx="${imgIdx}" tabindex="0" role="button" aria-label="View photo ${imgIdx + 1} of ${album.title}">
              <div class="archive-photo-item__box">
                <img src="${imgUrl}" alt="${album.title} - Photo ${imgIdx + 1}" class="archive-photo-item__img" loading="lazy">
                <div class="archive-photo-item__overlay">
                  <span class="archive-photo-item__zoom">🔍 View Enlarged</span>
                </div>
                <span class="archive-photo-item__idx">${imgIdx + 1} / ${photoCount}</span>
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="archive-empty-state">
          <div class="archive-empty-state__icon">📷</div>
          <h4 class="archive-empty-state__title">Photos Coming Soon</h4>
          <p class="archive-empty-state__desc">Photographs for this album will be archived here following the upcoming laboratory session.</p>
          <button class="btn btn--outline-primary" id="btn-empty-back-${album.id}">← Back to ${sectionLabel}</button>
        </div>
      `}
    </div>
  `;

  mount.innerHTML = html;

  // Bind Back Button
  const handleBack = (e) => {
    e.preventDefault();
    renderAlbumsView(mount, albums, sectionKey, sectionLabel);
    // Smooth scroll to section container
    const navOffset = 130;
    const pos = mount.getBoundingClientRect().top + window.pageYOffset - navOffset;
    window.scrollTo({ top: pos, behavior: 'smooth' });
  };

  document.getElementById(`btn-back-${album.id}`)?.addEventListener('click', handleBack);
  document.getElementById(`crumb-back-${album.id}`)?.addEventListener('click', handleBack);
  document.getElementById(`btn-empty-back-${album.id}`)?.addEventListener('click', handleBack);

  // Bind Lightbox click handlers
  mount.querySelectorAll('.archive-photo-item').forEach(item => {
    const idx = parseInt(item.getAttribute('data-photo-idx'), 10);
    const triggerLightbox = () => openLightbox(currentItems, idx);
    item.addEventListener('click', triggerLightbox);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerLightbox();
      }
    });
  });

  // Smooth scroll to album view
  const navOffset = 130;
  const pos = mount.getBoundingClientRect().top + window.pageYOffset - navOffset;
  window.scrollTo({ top: pos, behavior: 'smooth' });
}

/* ── 4. PROFESSIONAL PHOTO LIGHTBOX WITH DOWNLOAD ────────────── */
function initLightboxModal() {
  let modal = document.getElementById('photo-lightbox');
  if (modal) return;

  modal = document.createElement('div');
  modal.id = 'photo-lightbox';
  modal.className = 'photo-lightbox';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Photo Lightbox');
  modal.innerHTML = `
    <div class="photo-lightbox__backdrop"></div>
    <div class="photo-lightbox__content">
      <div class="photo-lightbox__topbar">
        <div class="photo-lightbox__top-info">
          <span class="photo-lightbox__badge" id="lightbox-badge">Category</span>
          <span class="photo-lightbox__counter" id="lightbox-counter">01 / 10</span>
        </div>
        <div class="photo-lightbox__top-actions">
          <button class="photo-lightbox__btn-download" id="lightbox-btn-download" title="Download High-Resolution Photo">
            ⬇ Download Photo
          </button>
          <button class="photo-lightbox__close" aria-label="Close Lightbox">✕ Close</button>
        </div>
      </div>
      <button class="photo-lightbox__nav photo-lightbox__nav--prev" aria-label="Previous Photo">❮</button>
      <div class="photo-lightbox__stage">
        <img src="" alt="" class="photo-lightbox__img" id="lightbox-img">
        <div class="photo-lightbox__info">
          <h3 class="photo-lightbox__title" id="lightbox-title">Photo Title</h3>
          <p class="photo-lightbox__desc" id="lightbox-desc">Detailed photo caption</p>
        </div>
      </div>
      <button class="photo-lightbox__nav photo-lightbox__nav--next" aria-label="Next Photo">❯</button>
    </div>
  `;
  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.photo-lightbox__close');
  const backdrop = modal.querySelector('.photo-lightbox__backdrop');
  const prevBtn = modal.querySelector('.photo-lightbox__nav--prev');
  const nextBtn = modal.querySelector('.photo-lightbox__nav--next');
  const downloadBtn = modal.querySelector('#lightbox-btn-download');

  closeBtn.addEventListener('click', closeLightbox);
  backdrop.addEventListener('click', closeLightbox);

  prevBtn.addEventListener('click', () => navigateLightbox(-1));
  nextBtn.addEventListener('click', () => navigateLightbox(1));

  // Photo Download
  downloadBtn.addEventListener('click', () => {
    const item = lightboxItems[lightboxCurrentIndex];
    if (!item || !item.image) return;

    const link = document.createElement('a');
    link.href = item.image;
    // Extract filename or create clean download name
    const fileName = item.image.split('/').pop() || 'smart-grid-photo.jpg';
    link.download = `SmartGrid-IITH-${fileName}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const toast = createToastElement();
    showToast(toast, "💾 Photo download started!");
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('photo-lightbox--open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(items, index) {
  lightboxItems = items;
  lightboxCurrentIndex = index || 0;
  const modal = document.getElementById('photo-lightbox');
  if (!modal) return;

  updateLightboxContent();
  modal.classList.add('photo-lightbox--open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('photo-lightbox');
  if (!modal) return;
  modal.classList.remove('photo-lightbox--open');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  if (!lightboxItems.length) return;
  lightboxCurrentIndex += dir;
  if (lightboxCurrentIndex < 0) lightboxCurrentIndex = lightboxItems.length - 1;
  if (lightboxCurrentIndex >= lightboxItems.length) lightboxCurrentIndex = 0;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = lightboxItems[lightboxCurrentIndex];
  if (!item) return;

  const img = document.getElementById('lightbox-img');
  const badge = document.getElementById('lightbox-badge');
  const counter = document.getElementById('lightbox-counter');
  const title = document.getElementById('lightbox-title');
  const desc = document.getElementById('lightbox-desc');

  if (img) {
    img.src = item.image;
    img.alt = item.title || 'Photo';
  }
  if (badge) badge.textContent = item.categoryLabel || 'Photograph';
  
  const padIndex = String(lightboxCurrentIndex + 1).padStart(2, '0');
  const padTotal = String(lightboxItems.length).padStart(2, '0');
  if (counter) counter.textContent = `${padIndex} / ${padTotal}`;
  
  if (title) title.textContent = item.title || '';
  if (desc) desc.textContent = item.caption || '';
}

/* ── 5. OFFICIAL LAB SELFIE CREATOR (PRESERVED CANVAS) ─────────── */
function initSelfieCreator(config) {
  const canvas = document.getElementById('selfie-canvas');
  const fileInput = document.getElementById('selfie-upload-input');
  const btnUpload = document.getElementById('btn-selfie-upload');
  const btnZoomIn = document.getElementById('btn-selfie-zoom-in');
  const btnZoomOut = document.getElementById('btn-selfie-zoom-out');
  const btnUp = document.getElementById('btn-selfie-up');
  const btnDown = document.getElementById('btn-selfie-down');
  const btnLeft = document.getElementById('btn-selfie-left');
  const btnRight = document.getElementById('btn-selfie-right');
  const btnReset = document.getElementById('btn-selfie-reset');
  const btnDownload = document.getElementById('btn-selfie-download');
  const statusMsg = document.getElementById('selfie-status-msg');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Frame resolution (1536 x 1024 for selfie.png)
  const FRAME_W = config.frameWidth || 1536;
  const FRAME_H = config.frameHeight || 1024;
  canvas.width = FRAME_W;
  canvas.height = FRAME_H;

  // Cutout zone for selfie.png
  const CUTOUT = config.cutout || {
    x: 275,
    y: 235,
    width: 985,
    height: 560,
    radius: 24
  };

  // State
  let frameImage = new Image();
  let userImage = null;
  let userImgScale = 1.0;
  let userImgOffsetX = 0;
  let userImgOffsetY = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;

  // Load Frame Image
  frameImage.crossOrigin = 'anonymous';
  frameImage.src = config.frameImage || 'assets/images/media/selfie.png';
  frameImage.onload = () => {
    drawCanvas();
  };

  // Trigger file input
  if (btnUpload && fileInput) {
    btnUpload.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleImageUpload);
  }

  function handleImageUpload(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        userImage = img;
        const scaleX = CUTOUT.width / img.width;
        const scaleY = CUTOUT.height / img.height;
        userImgScale = Math.max(scaleX, scaleY);
        userImgOffsetX = 0;
        userImgOffsetY = 0;

        if (statusMsg) {
          statusMsg.textContent = "✅ Photo loaded! Drag directly on the image or use buttons to adjust.";
          statusMsg.style.color = "#00C896";
        }
        drawCanvas();
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  function drawCanvas() {
    ctx.clearRect(0, 0, FRAME_W, FRAME_H);

    // 1. Draw base frame
    if (frameImage.complete && frameImage.naturalWidth > 0) {
      ctx.drawImage(frameImage, 0, 0, FRAME_W, FRAME_H);
    } else {
      ctx.fillStyle = '#2A1208';
      ctx.fillRect(0, 0, FRAME_W, FRAME_H);
    }

    // 2. Draw User Photo inside Cutout with clipping
    ctx.save();
    
    ctx.beginPath();
    const r = CUTOUT.radius;
    const x = CUTOUT.x;
    const y = CUTOUT.y;
    const w = CUTOUT.width;
    const h = CUTOUT.height;
    
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    ctx.clip();

    if (userImage) {
      const renderedW = userImage.width * userImgScale;
      const renderedH = userImage.height * userImgScale;
      const centerX = CUTOUT.x + (CUTOUT.width / 2) + userImgOffsetX;
      const centerY = CUTOUT.y + (CUTOUT.height / 2) + userImgOffsetY;
      const drawX = centerX - (renderedW / 2);
      const drawY = centerY - (renderedH / 2);

      ctx.drawImage(userImage, drawX, drawY, renderedW, renderedH);
    } else {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(x, y, w, h);

      ctx.strokeStyle = 'rgba(255, 122, 0, 0.12)';
      ctx.lineWidth = 1.5;
      for (let gx = x; gx <= x + w; gx += 60) {
        ctx.beginPath();
        ctx.moveTo(gx, y);
        ctx.lineTo(gx, y + h);
        ctx.stroke();
      }
      for (let gy = y; gy <= y + h; gy += 60) {
        ctx.beginPath();
        ctx.moveTo(x, gy);
        ctx.lineTo(x + w, gy);
        ctx.stroke();
      }

      ctx.fillStyle = '#C94B00';
      ctx.font = 'bold 34px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('📸 VISITOR PHOTOGRAPHY ZONE', x + w / 2, y + h / 2 - 25);

      ctx.fillStyle = '#6B5144';
      ctx.font = '22px Inter, sans-serif';
      ctx.fillText('Click [Upload Your Photo] below to create your official lab selfie', x + w / 2, y + h / 2 + 25);
    }

    ctx.restore();

    ctx.strokeStyle = '#FF7A00';
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  // Controls
  if (btnZoomIn) {
    btnZoomIn.addEventListener('click', () => {
      userImgScale *= 1.15;
      drawCanvas();
    });
  }
  if (btnZoomOut) {
    btnZoomOut.addEventListener('click', () => {
      userImgScale = Math.max(0.15, userImgScale / 1.15);
      drawCanvas();
    });
  }
  if (btnUp) {
    btnUp.addEventListener('click', () => {
      userImgOffsetY -= 35;
      drawCanvas();
    });
  }
  if (btnDown) {
    btnDown.addEventListener('click', () => {
      userImgOffsetY += 35;
      drawCanvas();
    });
  }
  if (btnLeft) {
    btnLeft.addEventListener('click', () => {
      userImgOffsetX -= 35;
      drawCanvas();
    });
  }
  if (btnRight) {
    btnRight.addEventListener('click', () => {
      userImgOffsetX += 35;
      drawCanvas();
    });
  }
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (userImage) {
        const scaleX = CUTOUT.width / userImage.width;
        const scaleY = CUTOUT.height / userImage.height;
        userImgScale = Math.max(scaleX, scaleY);
      } else {
        userImgScale = 1.0;
      }
      userImgOffsetX = 0;
      userImgOffsetY = 0;
      drawCanvas();
    });
  }

  // Drag on Canvas
  function getCanvasCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  }

  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    const coords = getCanvasCoords(e);
    dragStartX = coords.x - userImgOffsetX;
    dragStartY = coords.y - userImgOffsetY;
    canvas.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging || !userImage) return;
    const coords = getCanvasCoords(e);
    userImgOffsetX = coords.x - dragStartX;
    userImgOffsetY = coords.y - dragStartY;
    drawCanvas();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    canvas.style.cursor = 'grab';
  });

  canvas.addEventListener('touchstart', (e) => {
    isDragging = true;
    const coords = getCanvasCoords(e);
    dragStartX = coords.x - userImgOffsetX;
    dragStartY = coords.y - userImgOffsetY;
  }, { passive: true });

  canvas.addEventListener('touchmove', (e) => {
    if (!isDragging || !userImage) return;
    const coords = getCanvasCoords(e);
    userImgOffsetX = coords.x - dragStartX;
    userImgOffsetY = coords.y - dragStartY;
    drawCanvas();
  }, { passive: true });

  canvas.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Wheel Zoom
  canvas.addEventListener('wheel', (e) => {
    if (!userImage) return;
    e.preventDefault();
    if (e.deltaY < 0) {
      userImgScale *= 1.08;
    } else {
      userImgScale = Math.max(0.15, userImgScale / 1.08);
    }
    drawCanvas();
  }, { passive: false });

  // Download
  if (btnDownload) {
    btnDownload.addEventListener('click', () => {
      drawCanvas();
      const link = document.createElement('a');
      link.download = 'SmartGrid-IITH-Lab-Selfie.jpg';
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      const toast = createToastElement();
      showToast(toast, "🎉 Lab Selfie Downloaded Successfully!");
    });
  }
}

/* ── 6. HASHTAGS & TOAST NOTIFICATION ─────────────────────────── */
function initHashtags() {
  const hashtagSpans = document.querySelectorAll('.hashtag, .selfie-point__hashtag');
  if (!hashtagSpans.length) return;

  const toast = createToastElement();

  hashtagSpans.forEach(tag => {
    tag.style.cursor = 'pointer';
    tag.setAttribute('title', 'Click to copy hashtag');
    tag.setAttribute('role', 'button');
    tag.setAttribute('tabindex', '0');

    const copyTag = () => {
      const text = tag.textContent.trim();
      let handled = false;

      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        try {
          navigator.clipboard.writeText(text).then(() => {
            showToast(toast, `Copied ${text} to clipboard!`);
          }).catch(() => {
            fallbackCopy(text, toast);
          });
          handled = true;
        } catch (err) {
          fallbackCopy(text, toast);
          handled = true;
        }
      }

      if (!handled) {
        fallbackCopy(text, toast);
      }
    };

    tag.addEventListener('click', copyTag);
    tag.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        copyTag();
      }
    });
  });
}

function fallbackCopy(text, toast) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(ta);
    if (successful) {
      showToast(toast, `Copied ${text} to clipboard!`);
    } else {
      showToast(toast, `Hashtag: ${text}`);
    }
  } catch (err) {
    showToast(toast, `Hashtag: ${text}`);
  }
}

function createToastElement() {
  let toast = document.getElementById('media-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'media-toast';
    toast.className = 'media-toast';
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }
  return toast;
}

function showToast(toast, msg) {
  toast.textContent = msg;
  toast.classList.add('media-toast--visible');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('media-toast--visible');
  }, 2600);
}
