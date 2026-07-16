(function() {
  'use strict';

  async function fetchJSON(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) {console.warn('Failed to load', url);return null;}
      return await res.json();
    } catch(e) {console.warn('Error loading', url);return null;}
  }

  async function fetchText(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) {console.warn('Failed to load', url);return null;}
      return await res.text();
    } catch(e) {console.warn('Error loading', url);return null;}
  }

  async function loadSettings() {
    const data = await fetchJSON('admin/content/settings.json');
    if (!data) return;
    document.querySelectorAll('[data-setting]').forEach(el => {
      const key = el.getAttribute('data-setting');
      if (data[key]) el.textContent = data[key];
    });
    document.querySelectorAll('[data-setting-href]').forEach(el => {
      const key = el.getAttribute('data-setting-href');
      if (data[key]) el.href = data[key];
    });
  }

  async function loadPackages(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const fallback = container.innerHTML;
    container.innerHTML = '';
    try {
      const indexRes = await fetch('admin/content/packages/index.json');
      const ymlFiles = await indexRes.json();
      let loaded = 0;
      for (const file of ymlFiles) {
        const yml = await fetchText('admin/content/packages/' + file);
        if (!yml) continue;
        const card = parseYamlToCard(yml);
        if (card) { container.insertAdjacentHTML('beforeend', card); loaded++; }
      }
      if (loaded === 0) container.innerHTML = fallback;
    } catch(e) { container.innerHTML = fallback; console.warn('Could not load packages dynamically'); }
  }

  function parseYamlToCard(yml) {
    const lines = yml.split('\n');
    const data = {};
    let currentKey = '', currentList = [], inList = false;
    lines.forEach(line => {
      const trimmed = line.trim();
      const indent = line.length - line.trimStart().length;
      if (trimmed.startsWith('- ')) {
        if (!inList) { currentList = []; inList = true; }
        let item = trimmed.replace(/^- (name:\s*)?/, '').trim();
        item = item.replace(/^["']|["']$/g, '');
        currentList.push(item);
        return;
      } else if (inList) {
        if (indent === 0) {
          data[currentKey] = currentList;
          currentList = []; inList = false;
        } else {
          return;
        }
      }
      if (!inList) {
        const colonIdx = line.indexOf(':');
        if (colonIdx > 0) {
          const k = line.substring(0, colonIdx).trim();
          const v = line.substring(colonIdx + 1).trim().replace(/^["']|["']$/g, '');
          data[k] = v;
          currentKey = k;
          if (['inclusions', 'destinations', 'exclusions', 'requirements'].includes(k)) { currentList = []; inList = true; }
        }
      }
    });
    if (inList && currentList.length) data[currentKey] = currentList;
    if (!data.title) return '';
    const badge = data.badge ? `<span class="featured-badge" style="background:${data.badgeBg || '#f7a349'}">${data.badge}</span>` : '';
    const priceHtml = data.price ? `<div class="package-price"><span class="price">${data.price}</span>${data.per ? `<p class="per">${data.per}</p>` : ''}</div>` : '';
    const inclHtml = data.inclusions && data.inclusions.length ? `<p style="font-weight:600;margin:15px 0 8px;color:var(--text-dark);">Inclusions:</p><ul class="package-features">${data.inclusions.map(i => `<li><i class="fas fa-check"></i> ${i}</li>`).join('')}</ul>` : '';
    const destHtml = data.destinations && data.destinations.length ? `<ul class="package-features">${data.destinations.map(d => {
      if (typeof d === 'string') return `<li><i class="fas fa-location-dot"></i> ${d}</li>`;
      return `<li><i class="fas fa-location-dot"></i> ${d.name || d} — <strong>${d.price || ''}</strong></li>`;
    }).join('')}</ul>` : '';
    const noteHtml = data.note ? `<p style="color:var(--text-light);font-size:0.9rem;margin-bottom:10px;">${data.note}</p>` : '';
    const subInfo = data.location ? `<p style="margin:3px 0;color:var(--text-light);"><i class="fas fa-map-pin"></i> ${data.location}</p>` : '';
    const exclHtml = data.exclusions && data.exclusions.length ? `<p style="font-weight:600;margin:10px 0 5px;color:var(--text-light);">Exclusions:</p><ul class="package-features">${data.exclusions.map(e => `<li><i class="fas fa-times" style="color:#c0392b;"></i> ${e}</li>`).join('')}</ul>` : '';
    const reqHtml = data.requirements && data.requirements.length ? `<p style="font-weight:600;margin:10px 0 5px;color:var(--text-light);">Requirements:</p><ul class="package-features">${data.requirements.map(r => `<li><i class="fas fa-exclamation-circle" style="color:#e67e22;"></i> ${r}</li>`).join('')}</ul>` : '';
    const extraInfo = data.priceSingle ? `<p style="margin:3px 0;color:var(--text-light);"><strong>Single:</strong> ${data.priceSingle}</p>` : '';
    const extraInfo2 = data.priceCouple ? `<p style="margin:3px 0;color:var(--text-light);"><strong>Couple:</strong> ${data.priceCouple}</p>` : '';
    const reqLine = data.requirements ? `<p><strong>Requirements:</strong> ${data.requirements}</p>` : '';
    const duration = data.duration ? `<p class="duration">${data.groupSize ? `<i class="fas fa-users"></i> ${data.groupSize} &middot; ` : ''}<i class="far fa-clock"></i> ${data.duration}</p>` : (data.groupSize ? `<p class="duration"><i class="fas fa-users"></i> ${data.groupSize}</p>` : '');
    return `
      <div class="package-card animate-on-scroll">
        <div class="package-header">
          ${badge}
          <h3>${data.title}</h3>
          ${duration}
          ${subInfo}
        </div>
        <div class="package-body">
          ${priceHtml}
          ${extraInfo}
          ${extraInfo2}
          ${noteHtml}
          ${inclHtml}
          ${destHtml}
          ${exclHtml}
          ${reqHtml}
          ${reqLine}
        </div>
        <div class="package-footer">
          <a href="${data.bookLink || 'https://wa.me/256782725895'}" target="_blank" class="btn btn-primary"><i class="fab fa-whatsapp"></i> Book Now</a>
        </div>
      </div>`;
  }

  async function loadBlogPosts(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const fallback = container.innerHTML;
    container.innerHTML = '';
    try {
      const indexRes = await fetch('admin/content/blog/index.json');
      const mdFiles = await indexRes.json();
      for (const file of mdFiles) {
        const md = await fetchText('admin/content/blog/' + file);
        if (!md) continue;
        const post = parseMarkdownPost(md);
        if (post) container.insertAdjacentHTML('beforeend', post);
      }
    } catch(e) { container.innerHTML = fallback; console.warn('Could not load blog posts dynamically'); }
  }

  function parseMarkdownPost(md) {
    const titleMatch = md.match(/title:\s*"([^"]+)"/);
    const tagMatch = md.match(/tag:\s*"([^"]+)"/);
    const imageMatch = md.match(/image:\s*"([^"]+)"/);
    const excerptMatch = md.match(/excerpt:\s*"([^"]+)"/);
    const bodyStart = md.indexOf('---\n', md.indexOf('---\n') + 1);
    const body = bodyStart > 0 ? md.substring(bodyStart + 4).trim() : md;
    if (!titleMatch) return '';
    const title = titleMatch[1];
    const tag = tagMatch ? tagMatch[1] : '';
    const image = imageMatch ? imageMatch[1] : '';
    const excerpt = excerptMatch ? excerptMatch[1] : '';
    const contentId = 'blog-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `
      <article class="blog-post animate-on-scroll">
        <div class="blog-image">
          <img src="${image}" alt="${title}" loading="lazy">
        </div>
        <div class="blog-content">
          <span class="blog-tag">${tag}</span>
          <h3>${title}</h3>
          <p>${excerpt}</p>
          <div id="${contentId}" class="blog-full" style="display:none;">
            ${markdownToHtml(body)}
          </div>
          <a href="#" onclick="toggleBlog('${contentId}');return false;" class="read-more">Read More <i class="fas fa-chevron-down"></i></a>
        </div>
      </article>`;
  }

  function markdownToHtml(md) {
    let html = md.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    html = html.replace(/^\*\*(.+?)\*\*/gm, '<strong>$1</strong>');
    html = html.replace(/^[-*] (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');
    html = html.replace(/—/g, '&mdash;');
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');
    return '<p>' + html + '</p>';
  }

  async function loadReviews(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const fallback = container.innerHTML;
    container.innerHTML = '';
    try {
      const indexRes = await fetch('admin/content/reviews/index.json');
      const ymlFiles = await indexRes.json();
      let loaded = 0;
      for (const file of ymlFiles) {
        const yml = await fetchText('admin/content/reviews/' + file);
        if (!yml) continue;
        const nameMatch = yml.match(/name:\s*"([^"]+)"/);
        const ratingMatch = yml.match(/rating:\s*(\d+)/);
        const textMatch = yml.match(/text:\s*"([^"]+)"/);
        if (nameMatch && textMatch) {
          const stars = parseInt(ratingMatch ? ratingMatch[1] : 5);
          container.insertAdjacentHTML('beforeend', `
            <div class="review-card animate-on-scroll">
              <div class="review-stars">${'<i class="fas fa-star"></i>'.repeat(stars)}</div>
              <p>"${textMatch[1]}"</p>
              <h4>- ${nameMatch[1]}</h4>
            </div>
          `);
          loaded++;
        }
      }
      if (loaded === 0) container.innerHTML = fallback;
    } catch(e) { container.innerHTML = fallback; console.warn('Could not load reviews dynamically'); }
  }

  async function loadFAQ(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const fallback = container.innerHTML;
    container.innerHTML = '';
    try {
      const indexRes = await fetch('admin/content/faq/index.json');
      const ymlFiles = await indexRes.json();
      let loaded = 0;
      for (const file of ymlFiles) {
        const yml = await fetchText('admin/content/faq/' + file);
        if (!yml) continue;
        const q = yml.match(/question:\s*"([^"]+)"/);
        const a = yml.match(/answer:\s*"([^"]+)"/);
        if (q && a) {
          container.insertAdjacentHTML('beforeend', `
            <div class="faq-item animate-on-scroll">
              <div class="faq-question">
                <span>${q[1]}</span>
                <i class="fas fa-chevron-down"></i>
              </div>
              <div class="faq-answer">
                <div class="faq-answer-content">${a[1]}</div>
              </div>
            </div>
          `);
          loaded++;
        }
      }
      if (loaded === 0) container.innerHTML = fallback;
    } catch(e) { container.innerHTML = fallback; console.warn('Could not load FAQs dynamically'); }
  }

  async function loadDestinations(containerId, modalDataId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const settings = await fetchJSON('admin/content/settings.json');
    if (!settings || !settings.destinations) return;
    const hiddenDiv = document.getElementById(modalDataId);
    if (hiddenDiv) {
      hiddenDiv.innerHTML = settings.destinations.map(d => `
        <div id="dest-${d.id}">
          <h2>${d.title}</h2>
          <p><strong>Why visit?</strong> ${d.whyVisit}</p>
          <ul>${d.reasons.map(r => `<li>${r}</li>`).join('')}</ul>
        </div>
      `).join('');
    }
    if (container) {
      container.innerHTML = settings.destinations.map(d => `
        <div class="destination-card animate-on-scroll" onclick="openDestModal('${d.id}')">
          <img src="${d.image}" alt="${d.title}" loading="lazy">
          <div class="dest-overlay">
            <h3>${d.title}</h3>
            <p><i class="fas fa-info-circle"></i> Click to explore</p>
          </div>
        </div>
      `).join('');
    }
  }

  async function loadServices() {
    const s = await fetchJSON('admin/content/settings.json');
    if (!s || !s.services) return;
    const grid = document.querySelector('.services-grid');
    if (!grid) return;
    const sectionTitle = grid.closest('section')?.querySelector('.section-title, h2');
    const sectionSubtitle = grid.closest('section')?.querySelector('.section-subtitle, .subtitle');
    if (s.servicesTitle && sectionTitle) sectionTitle.textContent = s.servicesTitle;
    if (s.servicesSubtitle && sectionSubtitle) sectionSubtitle.textContent = s.servicesSubtitle;
    grid.innerHTML = s.services.map(svc => `
      <div class="service-card animate-on-scroll">
        <i class="${svc.icon}" style="font-size:2.5rem;color:var(--logo-orange);margin-bottom:15px;"></i>
        <h3>${svc.title}</h3>
        <p>${svc.description}</p>
      </div>
    `).join('');
  }

  async function loadHero() {
    const s = await fetchJSON('admin/content/settings.json');
    if (!s) return;
    const badgeEl = document.querySelector('.hero-badge');
    const headingEl = document.querySelector('.hero-content h1');
    const descEl = document.querySelector('.hero-content p');
    const travelerEl = document.querySelector('[data-stat="travelers"]');
    const destStatEl = document.querySelector('[data-stat="destinations"]');
    if (s.heroBadge && badgeEl) badgeEl.innerHTML = s.heroBadge;
    if (s.heroHeading && headingEl) headingEl.innerHTML = s.heroHeading.replace('Nexdo Adventours', '<span>Nexdo Adventours</span>');
    if (s.heroDescription && descEl) descEl.textContent = s.heroDescription;
    if (s.heroTravelers && travelerEl) travelerEl.textContent = s.heroTravelers;
    if (s.heroDestinations && destStatEl) destStatEl.textContent = s.heroDestinations;
  }

  async function loadAbout() {
    const s = await fetchJSON('admin/content/settings.json');
    if (!s) return;
    const titleEl = document.querySelector('#about .section-title, #about h2');
    const textEl = document.querySelector('#about .about-text p');
    const featList = document.querySelector('#about .about-features');
    if (s.aboutTitle && titleEl) titleEl.innerHTML = s.aboutTitle.replace('Authentic Experiences', '<span>Authentic Experiences</span>');
    if (s.aboutText && textEl) textEl.textContent = s.aboutText;
    if (s.aboutFeatures && featList) {
      featList.innerHTML = s.aboutFeatures.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('');
    }
  }

  function initObservers() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.1});
    document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', async function() {
    loadSettings();
    loadHero();
    loadAbout();
    loadServices();
    loadDestinations('destinationsGrid', 'destData');
    loadPackages('packagesGrid');
    loadBlogPosts('blogPosts');
    loadReviews('reviewsGrid');
    loadFAQ('faqContainer');
    setTimeout(initObservers, 1000);
  });
})();