/* ============================================================
   Smart Grid R&D Center — IIT Hyderabad
   js/team.js — Team Page UI, Sections, Filters & Profile Modal
   ============================================================ */

(function () {
  'use strict';

  // Active state
  let currentFilter = 'All';
  let activeMemberSlug = null;

  // DOM Elements
  let filterContainer = null;
  let gridContainer = null;
  let emptyState = null;
  let profileModal = null;
  let modalBackdrop = null;
  let modalContent = null;
  let lastFocusedElement = null;

  // Section definitions for organized directory display
  const SECTIONS = {
    'faculty': {
      title: 'Faculty & Advisory',
      badge: 'Academic Direction',
      subtitle: 'Leading research vision, laboratory governance and academic initiatives at IIT Hyderabad'
    },
    'ls-electricals': {
      title: 'Team from LS Electricals',
      badge: 'Industrial Project Sponsorship',
      subtitle: 'Project sponsorship, ETAP power studies, switchgear maintenance, protective relay testing and field operations'
    },
    'researchers': {
      title: 'Research Scholars & Fellows',
      badge: 'Research & Innovation',
      subtitle: 'PhD researchers, scholars and fellows investigating smart grid algorithms, microgrids, and intelligent energy architectures'
    }
  };

  // Helper to safely obtain TEAM_DATA
  function getTeamData() {
    if (typeof window !== 'undefined' && Array.isArray(window.TEAM_DATA)) {
      return window.TEAM_DATA;
    }
    if (typeof TEAM_DATA !== 'undefined' && Array.isArray(TEAM_DATA)) {
      return TEAM_DATA;
    }
    return [];
  }

  function initTeamPage() {
    filterContainer = document.getElementById('team-filters');
    gridContainer = document.getElementById('team-grid');
    emptyState = document.getElementById('team-empty');
    profileModal = document.getElementById('team-profile-modal');
    modalBackdrop = document.getElementById('team-modal-backdrop');
    modalContent = document.getElementById('team-modal-content');

    if (!gridContainer) return;

    const team = getTeamData();

    // 1. Render filter pills dynamically
    renderFilters(team);

    // 2. Render initial team cards (with organized section dividers)
    renderCards(team, currentFilter);

    // 3. Bind event listeners
    bindEvents(team);

    // 4. Check URL for direct deep linking (?member=slug or #slug)
    checkInitialUrl(team);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTeamPage);
  } else {
    initTeamPage();
  }

  /* ── 1. Dynamic Filters ─────────────────────────────────────── */
  function renderFilters(team) {
    if (!filterContainer) return;

    if (!Array.isArray(team) || team.length === 0) {
      filterContainer.innerHTML = '';
      return;
    }

    // Defined semantic categories in priority order
    const categoryList = [
      'All',
      'Faculty & Advisory',
      'Team from LS Electricals',
      'PhD Scholar',
      'Visiting Researcher',
      'M.Tech Researcher',
      'Research Fellow'
    ];

    filterContainer.innerHTML = categoryList.map(cat => {
      const isActive = cat === currentFilter;
      return `
        <button type="button" 
                class="team-filter-pill ${isActive ? 'active' : ''}" 
                data-category="${escapeHtml(cat)}"
                role="tab"
                aria-selected="${isActive ? 'true' : 'false'}">
          ${escapeHtml(cat)}
        </button>
      `;
    }).join('');
  }

  /* ── 2. Render Cards & Sections ─────────────────────────────── */
  function renderCards(team, filter) {
    if (!gridContainer) return;

    if (!Array.isArray(team) || team.length === 0) {
      gridContainer.innerHTML = '';
      gridContainer.style.display = 'none';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    let html = '';

    if (filter === 'All') {
      // Group cards into 3 clearly separated sections
      const sectionsOrder = ['faculty', 'ls-electricals', 'researchers'];

      sectionsOrder.forEach(secKey => {
        const secMeta = SECTIONS[secKey];
        const secMembers = team.filter(m => (m.section || '').trim() === secKey);

        if (secMembers.length > 0 && secMeta) {
          html += `
            <div class="team-section-divider">
              <div class="team-section-divider__top">
                <span class="team-section-divider__badge">${escapeHtml(secMeta.badge)}</span>
                <span class="team-section-divider__count">${secMembers.length} Members</span>
              </div>
              <h2 class="team-section-divider__title">${escapeHtml(secMeta.title)}</h2>
              <p class="team-section-divider__subtitle">${escapeHtml(secMeta.subtitle)}</p>
            </div>
          `;
          html += secMembers.map(m => createCardHtml(m)).join('');
        }
      });
    } else {
      // Filtered view
      const filtered = team.filter(m => {
        const role = (m.role || '').trim();
        if (filter === 'Team from LS Electricals' && role === 'Team from LS Electricals') return true;
        if (filter === 'Faculty & Advisory' && role === 'Faculty & Advisory') return true;
        return role === filter.trim();
      });

      if (filtered.length === 0) {
        gridContainer.innerHTML = '';
        gridContainer.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';
        return;
      }

      // If viewing Team from LS Electricals or Faculty, show the section header too
      if (filter === 'Team from LS Electricals') {
        const secMeta = SECTIONS['ls-electricals'];
        html += `
          <div class="team-section-divider">
            <div class="team-section-divider__top">
              <span class="team-section-divider__badge">${escapeHtml(secMeta.badge)}</span>
              <span class="team-section-divider__count">${filtered.length} Members</span>
            </div>
            <h2 class="team-section-divider__title">${escapeHtml(secMeta.title)}</h2>
            <p class="team-section-divider__subtitle">${escapeHtml(secMeta.subtitle)}</p>
          </div>
        `;
      } else if (filter === 'Faculty & Advisory') {
        const secMeta = SECTIONS['faculty'];
        html += `
          <div class="team-section-divider">
            <div class="team-section-divider__top">
              <span class="team-section-divider__badge">${escapeHtml(secMeta.badge)}</span>
              <span class="team-section-divider__count">${filtered.length} Members</span>
            </div>
            <h2 class="team-section-divider__title">${escapeHtml(secMeta.title)}</h2>
            <p class="team-section-divider__subtitle">${escapeHtml(secMeta.subtitle)}</p>
          </div>
        `;
      }

      html += filtered.map(m => createCardHtml(m)).join('');
    }

    if (emptyState) emptyState.style.display = 'none';
    gridContainer.style.display = 'grid';
    gridContainer.innerHTML = html;

    // Attach click listeners to cards
    gridContainer.querySelectorAll('.team-card').forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.dataset.slug;
        if (slug) {
          openProfile(slug, team, true);
        }
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const slug = card.dataset.slug;
          if (slug) {
            openProfile(slug, team, true);
          }
        }
      });
    });
  }

  function createCardHtml(m) {
    const slug = escapeHtml(m.slug || slugify(m.name || 'member'));
    const name = escapeHtml(m.name || 'Team Member');
    const designation = escapeHtml(m.designation || '');
    const badgeText = escapeHtml(m.badge || m.role || '');
    const photo = m.photo ? escapeHtml(m.photo) : '';
    const initials = getInitials(m.name || 'TM');
    const researchAreas = Array.isArray(m.researchAreas) ? m.researchAreas : [];

    return `
      <article class="team-card" data-slug="${slug}" tabindex="0" role="button" aria-label="View profile of ${name}">
        <div class="team-card__image-box">
          ${photo ? `
            <img src="${photo}" 
                 alt="${name}" 
                 class="team-card__photo" 
                 loading="lazy"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="team-card__avatar-fallback" style="display:none;">${initials}</div>
          ` : `
            <div class="team-card__avatar-fallback">${initials}</div>
          `}
          ${badgeText ? `<span class="team-card__badge">${badgeText}</span>` : ''}
        </div>

        <div class="team-card__body">
          <h3 class="team-card__name">${name}</h3>
          ${designation ? `<p class="team-card__designation">${designation}</p>` : ''}

          ${researchAreas.length > 0 ? `
            <div class="team-card__tags" aria-label="Research Areas">
              ${researchAreas.slice(0, 3).map(area => `
                <span class="team-tag">${escapeHtml(area)}</span>
              `).join('')}
              ${researchAreas.length > 3 ? `<span class="team-tag team-tag--more">+${researchAreas.length - 3}</span>` : ''}
            </div>
          ` : ''}

          <div class="team-card__footer">
            <span class="team-card__cta">
              View Profile <span class="team-card__arrow" aria-hidden="true">&rarr;</span>
            </span>
          </div>
        </div>
      </article>
    `;
  }

  /* ── 3. Profile Modal View (With Exact Bullet Points) ───────── */
  function openProfile(slug, team, updateUrl = true) {
    const member = team.find(m => m.slug === slug || slugify(m.name || '') === slug);
    if (!member || !profileModal || !modalContent) return;

    lastFocusedElement = document.activeElement;
    activeMemberSlug = slug;

    // Render detailed profile
    modalContent.innerHTML = createProfileHtml(member);

    // Show modal
    profileModal.classList.add('active');
    document.body.classList.add('modal-open');
    profileModal.setAttribute('aria-hidden', 'false');

    // Deep linking URL sync (?member=slug)
    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set('member', slug);
      window.history.pushState({ memberSlug: slug }, '', url.toString());
    }

    // Bind modal close buttons
    const closeBtn = profileModal.querySelector('.team-modal__close');
    if (closeBtn) {
      closeBtn.focus();
      closeBtn.addEventListener('click', () => closeProfile(true));
    }
  }

  function closeProfile(updateUrl = true) {
    if (!profileModal) return;

    profileModal.classList.remove('active');
    document.body.classList.remove('modal-open');
    profileModal.setAttribute('aria-hidden', 'true');
    activeMemberSlug = null;

    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.delete('member');
      window.history.pushState({}, '', url.pathname);
    }

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  function createProfileHtml(m) {
    const name = escapeHtml(m.name || 'Team Member');
    const designation = escapeHtml(m.designation || '');
    const badgeText = escapeHtml(m.badge || m.role || '');
    const organization = escapeHtml(m.organization ? m.organization.trim() : '');
    const photo = m.photo ? escapeHtml(m.photo) : '';
    const email = m.email ? escapeHtml(m.email.trim()) : '';
    const phone = m.phone ? escapeHtml(m.phone.trim()) : '';
    const googleScholar = m.googleScholar ? escapeHtml(m.googleScholar.trim()) : '';
    const bio = m.bio ? escapeHtml(m.bio.trim()) : '';
    const initials = getInitials(m.name || 'TM');
    const researchAreas = Array.isArray(m.researchAreas) ? m.researchAreas.filter(a => a && a.trim() !== '') : [];
    const highlights = Array.isArray(m.highlights) ? m.highlights.filter(h => h && h.trim() !== '') : [];
    const projects = Array.isArray(m.projects) ? m.projects.filter(p => p && p.trim() !== '') : [];
    const publications = Array.isArray(m.publications) ? m.publications.filter(p => p && p.trim() !== '') : [];
    const patents = Array.isArray(m.patents) ? m.patents.filter(p => p && p.trim() !== '') : [];

    return `
      <!-- DARK COMPACT HEADER -->
      <div class="profile-header">
        <div class="profile-header__glow-decor" aria-hidden="true"></div>
        <div class="profile-header__grid-decor" aria-hidden="true"></div>

        <div class="profile-header__inner">
          <div class="profile-header__avatar-wrap">
            ${photo ? `
              <img src="${photo}" 
                   alt="${name}" 
                   class="profile-header__photo"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="profile-header__avatar-fallback" style="display:none;">${initials}</div>
            ` : `
              <div class="profile-header__avatar-fallback">${initials}</div>
            `}
          </div>

          <div class="profile-header__info">
            ${badgeText ? `<span class="profile-role-badge">${badgeText}</span>` : ''}
            <h2 class="profile-name">${name}</h2>
            ${designation ? `<p class="profile-designation">${designation}</p>` : ''}
            <p class="profile-institution">${organization ? organization + ' &middot; ' : ''}Smart Grid R&amp;D Center &middot; IIT Hyderabad</p>

            <div class="profile-actions">
              ${email ? `
                <a href="mailto:${email}" class="profile-btn profile-btn--email" title="Send email to ${name}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <span>${email}</span>
                </a>
              ` : ''}

              ${phone ? `
                <a href="tel:${phone.replace(/\s+/g, '')}" class="profile-btn profile-btn--email" title="Call ${name}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>${phone}</span>
                </a>
              ` : ''}

              ${googleScholar ? `
                <a href="${googleScholar}" target="_blank" rel="noopener noreferrer" class="profile-btn profile-btn--scholar" title="View Google Scholar profile of ${name}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>
                  <span>Google Scholar &rarr;</span>
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </div>

      <!-- UNIFIED COMPACT CONTENT BODY -->
      <div class="profile-body">
        
        <!-- Key Focus & Responsibilities (Exact Bullet Points) -->
        ${highlights.length > 0 ? `
          <section class="profile-section">
            <h3 class="profile-section__title">
              <svg class="profile-section__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              <span>Key Focus &amp; Responsibilities</span>
            </h3>
            <ul class="profile-project-list">
              ${highlights.map(h => `
                <li class="profile-project-item">
                  <span class="profile-project-item__bullet" aria-hidden="true">&bull;</span>
                  <span class="profile-project-item__text">${escapeHtml(h)}</span>
                </li>
              `).join('')}
            </ul>
          </section>
        ` : ''}

        <!-- About Section (if distinct from highlights) -->
        ${bio && !highlights.length ? `
          <section class="profile-section">
            <h3 class="profile-section__title">
              <svg class="profile-section__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>About</span>
            </h3>
            <p class="profile-bio">${bio}</p>
          </section>
        ` : ''}

        <!-- Research Areas Section -->
        ${researchAreas.length > 0 ? `
          <section class="profile-section">
            <h3 class="profile-section__title">
              <svg class="profile-section__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><path d="M10.4 13.6 6.5 17.5"/><path d="m13.6 10.4 3.9-3.9"/></svg>
              <span>Areas of Specialization</span>
            </h3>
            <div class="profile-tags">
              ${researchAreas.map(area => `
                <span class="profile-tag">${escapeHtml(area)}</span>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <!-- Research Projects Section -->
        ${projects.length > 0 ? `
          <section class="profile-section">
            <h3 class="profile-section__title">
              <svg class="profile-section__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
              <span>Projects &amp; Initiatives</span>
            </h3>
            <ul class="profile-project-list">
              ${projects.map(proj => `
                <li class="profile-project-item">
                  <span class="profile-project-item__bullet" aria-hidden="true">&rsaquo;</span>
                  <span class="profile-project-item__text">${escapeHtml(proj)}</span>
                </li>
              `).join('')}
            </ul>
          </section>
        ` : ''}

        <!-- Selected Publications Section -->
        ${publications.length > 0 ? `
          <section class="profile-section">
            <h3 class="profile-section__title">
              <svg class="profile-section__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
              <span>Selected Publications</span>
            </h3>
            <div class="profile-pubs">
              ${publications.map((pub, idx) => {
                const numStr = (idx + 1) < 10 ? '0' + (idx + 1) : String(idx + 1);
                return `
                  <div class="profile-pub-entry">
                    <span class="profile-pub-badge" aria-label="Publication ${idx + 1}">${numStr}</span>
                    <div class="profile-pub-text">${escapeHtml(pub)}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </section>
        ` : ''}

        <!-- Patents & Intellectual Property Section -->
        ${patents.length > 0 ? `
          <section class="profile-section">
            <h3 class="profile-section__title">
              <svg class="profile-section__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Patents &amp; Intellectual Property</span>
            </h3>
            <ul class="profile-project-list">
              ${patents.map(pat => `
                <li class="profile-project-item">
                  <span class="profile-project-item__bullet" aria-hidden="true">&rsaquo;</span>
                  <span class="profile-project-item__text">${escapeHtml(pat)}</span>
                </li>
              `).join('')}
            </ul>
          </section>
        ` : ''}

      </div>
    `;
  }

  /* ── 4. Event Binding ───────────────────────────────────────── */
  function bindEvents(team) {
    // Filter pill click
    if (filterContainer) {
      filterContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.team-filter-pill');
        if (!btn) return;

        const category = btn.dataset.category;
        if (!category || category === currentFilter) return;

        currentFilter = category;

        // Update active state
        filterContainer.querySelectorAll('.team-filter-pill').forEach(b => {
          const isActive = b.dataset.category === currentFilter;
          b.classList.toggle('active', isActive);
          b.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        // Re-render cards
        renderCards(team, currentFilter);
      });
    }

    // Modal backdrop click
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', () => closeProfile(true));
    }

    // Keyboard navigation: Escape key closes modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && profileModal && profileModal.classList.contains('active')) {
        closeProfile(true);
      }
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
      const url = new URL(window.location.href);
      const memberSlug = url.searchParams.get('member');
      if (memberSlug) {
        openProfile(memberSlug, team, false);
      } else if (profileModal && profileModal.classList.contains('active')) {
        closeProfile(false);
      }
    });
  }

  /* ── 5. Deep Linking ────────────────────────────────────────── */
  function checkInitialUrl(team) {
    const url = new URL(window.location.href);
    let memberSlug = url.searchParams.get('member');

    if (!memberSlug && window.location.hash) {
      memberSlug = window.location.hash.replace(/^#/, '');
    }

    if (memberSlug) {
      setTimeout(() => {
        openProfile(memberSlug, team, false);
      }, 100);
    }
  }

  /* ── Utilities ──────────────────────────────────────────────── */
  function getInitials(name) {
    if (!name) return 'TM';
    const clean = name.replace(/^Dr\.\s*/i, '').trim();
    const parts = clean.split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/^dr\.\s*/i, 'dr-')
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

})();
