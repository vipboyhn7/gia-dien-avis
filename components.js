/**
 * AVIS VIỆT NAM - MODULAR COMPONENT LOADER
 * Quản lý tập trung Header, Topbar, Footer & Navigation cho toàn bộ các trang.
 * Hỗ trợ Backend (BE) cấu hình hoặc nhúng template trực tiếp từ header.html & footer.html.
 */

const SITE_HEADER_TEMPLATE = `
<!-- System Status Bar -->
<div class="topline">
  <div class="shell topbar">
    <div class="top-contact">
      <a href="mailto:admin@avis.io.vn" class="top-item">
        <span class="top-icon">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </span>
        <span>admin@avis.io.vn</span>
      </a>
      <span class="top-divider"></span>
      <span class="top-item top-address">
        <span class="top-icon">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
          </svg>
        </span>
        <span>Tầng 5, ADG Tower, 17 Lê Văn Thiêm, Thanh Xuân, Hà Nội</span>
      </span>
    </div>
    <div class="top-actions">
      <!-- Mạng xã hội: Quản lý & thêm icon tập trung tại file: social.html -->
      <div class="top-social" id="top-social" data-component="social">
        <a href="https://www.facebook.com/profile.php?id=61585447386440&sk=followers&locale=vi_VN" target="_blank"
          rel="noopener" aria-label="Facebook" title="Facebook">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener" aria-label="X (Twitter)" title="X (Twitter)">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://t.me/" target="_blank" rel="noopener" aria-label="Telegram" title="Telegram">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.66-.74 1.66-1.66 0-.91-.74-1.66-1.66-1.66-.91 0-1.65.75-1.65 1.66 0 .92.74 1.66 1.65 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
          </svg>
        </a>
      </div>
      <span class="top-divider"></span>
      <a href="tel:0879423777" class="top-hotline">
        <span class="top-hotline-icon">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </span>
        <span>0879.423.777</span>
      </a>
    </div>
  </div>
</div>

<!-- Main Navigation Header -->
<header class="header">
  <div class="shell nav-wrap">
    <a href="index.html" class="brand" aria-label="AVIS Việt Nam">
      <img src="assets/logo-aviss.jpg" alt="AVIS Việt Nam">
      <div class="brand-text">
        <span class="brand-name">Avis</span>
        <span class="brand-slogan">Tech Savvy, Customer Happy</span>
      </div>
    </a>

    <!-- Category Menu Bar with Horizontal Scroll Support -->
    <nav id="main-nav" class="main-nav" aria-label="Menu chính">
      <a href="index.html" data-nav="index">TRANG CHỦ</a>
      <a href="ve-chung-toi.html" data-nav="ve-chung-toi">VỀ CHÚNG TÔI</a>
      <a href="dich-vu.html" data-nav="dich-vu">DỊCH VỤ</a>
      <a href="doi-tac.html" data-nav="doi-tac">ĐỐI TÁC</a>
      <a href="tuyen-dung.html" data-nav="tuyen-dung">TUYỂN DỤNG</a>
      <a href="lien-he.html" data-nav="lien-he">LIÊN HỆ</a>
    </nav>

    <!-- Expanding Inline Search Bar (covers main-nav when active) -->
    <div class="inline-search-bar" id="inline-search-bar" role="search" aria-expanded="false">
      <div class="search-input-wrap">
        <span class="search-input-icon">⌕</span>
        <input type="text" id="inline-search-input" placeholder="Tìm kiếm dịch vụ, giải pháp, dự án, vị trí tuyển dụng..." autocomplete="off" spellcheck="false">
        <button type="button" class="search-clear-btn" id="search-clear-btn" aria-label="Xóa từ khóa" title="Xóa từ khóa">✕</button>
      </div>
      <button type="button" class="search-close-btn" id="search-close-btn" aria-label="Đóng thanh tìm kiếm">
        <span>Đóng</span>
      </button>
      <div class="search-results-dropdown" id="search-results-dropdown">
        <div class="search-quick-tags">
          <span class="search-tag-label">Gợi ý phổ biến:</span>
          <div class="search-tag-items">
            <a href="dich-vu-phat-trien-phan-mem.html">Phát triển phần mềm</a>
            <a href="dich-vu-tu-van-giai-phap.html">Tư vấn giải pháp</a>
            <a href="dich-vu-dao-tao-it.html">Đào tạo IT</a>
            <a href="dich-vu-outsourcing.html">IT Outsourcing</a>
            <a href="tuyen-dung.html">Tuyển dụng</a>
            <a href="lien-he.html">Liên hệ</a>
          </div>
        </div>
        <div class="search-live-list" id="search-live-list"></div>
      </div>
    </div>

    <!-- Header Tools (Search + Theme Switcher where Tư vấn dự án used to be) -->
    <div class="header-tools">
      <button class="search-toggle" id="search-toggle" type="button" aria-label="Tìm kiếm nhanh (⌘K)" title="Tìm kiếm nhanh (⌘K)">
        <span class="search-icon-symbol">⌕</span>
      </button>
      <button class="theme-toggle" id="theme-toggle" type="button" aria-label="Chuyển đổi giao diện sáng/tối" title="Chuyển đổi giao diện sáng/tối">
        <span class="theme-icon-sun">☀️</span>
        <span class="theme-icon-moon">🌙</span>
      </button>
      <button class="menu" type="button" aria-label="Mở menu di động" aria-controls="main-nav" aria-expanded="false">☰</button>
    </div>
  </div>
</header>
`;

const SITE_FOOTER_TEMPLATE = `
<!-- Quick Floating Action Dock -->
<div class="quick-actions">
  <a class="chat-action" href="https://m.me/102485755879467" target="_blank" rel="noopener"
    aria-label="Chat trực tuyến với AVIS" title="Chat Messenger">💬</a>
  <a class="floating" href="lien-he.html"><span></span> Tư vấn dự án ngay</a>
  <button type="button" class="scroll-top" aria-label="Cuộn lên đầu trang" title="Về đầu trang">↑</button>
</div>

<!-- Enterprise Main Footer -->
<footer class="main-footer">
  <div class="shell footer-grid">
    <div>
      <div class="footer-brand">
        <a href="index.html" class="brand" aria-label="AVIS Việt Nam">
          <img src="assets/logo-aviss.jpg" alt="AVIS Vietnam">
          <div class="brand-text">
            <span class="brand-name">Avis</span>
            <span class="brand-slogan">Tech Savvy, Customer Happy</span>
          </div>
        </a>
      </div>
      <p class="footer-company-name"><strong><span class="text-nowrap">CÔNG TY CỔ PHẦN</span> <span class="text-nowrap">CÔNG NGHỆ AVIS VIỆT NAM</span></strong></p>
      <p>Đơn vị tiên phong cung cấp giải pháp <span class="text-nowrap">công nghệ thông tin</span>, kiến trúc <span class="text-nowrap">phần mềm</span> cao cấp và đồng hành <span class="text-nowrap">chuyển đổi số</span> tin cậy cho <span class="text-nowrap">doanh nghiệp</span> Việt Nam.</p>
    </div>
    <div>
      <h3>Thời gian làm việc</h3>
      <ul>
        <li><span>Thứ 2 đến Thứ 6</span><b>08:00 – 17:00</b></li>
        <li><span>Thứ 7</span><b>08:00 – 12:00</b></li>
        <li><span>Chủ nhật</span><b>Nghỉ</b></li>
      </ul>
    </div>
    <div>
      <h3>Trụ sở &amp; Thông tin liên hệ</h3>
      <address>
        <a href="mailto:admin@avis.io.vn" class="footer-contact-link">
          <span class="info-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </span>
          <span>admin@avis.io.vn</span>
        </a>
        <a href="tel:0879423777" class="footer-contact-link">
          <span class="info-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </span>
          <span>0879.423.777</span>
        </a>
        <div class="footer-contact-item">
          <span class="info-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
            </svg>
          </span>
          <span>Tầng 5, ADG Tower, 17 Lê Văn Thiêm, Thanh Xuân, Hà Nội</span>
        </div>
      </address>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="shell">
      <span>© 2026 AVIS Việt Nam. All rights reserved. Tiên phong giải pháp công nghệ cao.</span>
      <a href="index.html">AVIS Technology Ecosystem ↗</a>
    </div>
  </div>
</footer>
`;

function applyActiveNav(headerContainer) {
  if (!headerContainer) return;
  const path = window.location.pathname.toLowerCase();
  let currentNav = 'index';

  if (path.includes('ve-chung-toi')) {
    currentNav = 've-chung-toi';
  } else if (path.includes('dich-vu')) {
    currentNav = 'dich-vu';
  } else if (path.includes('doi-tac')) {
    currentNav = 'doi-tac';
  } else if (path.includes('tuyen-dung')) {
    currentNav = 'tuyen-dung';
  } else if (path.includes('lien-he')) {
    currentNav = 'lien-he';
  } else {
    currentNav = 'index';
  }

  const navLinks = headerContainer.querySelectorAll('#main-nav a');
  navLinks.forEach(link => {
    const target = link.getAttribute('data-nav');
    if (target === currentNav) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function loadSocialComponent() {
  if (window.location.protocol.startsWith('http')) {
    fetch('social.html?t=' + Date.now())
      .then(res => res.ok ? res.text() : null)
      .then(html => {
        if (html) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const newSocial = doc.querySelector('.top-social');
          const content = newSocial ? newSocial.innerHTML : html.trim();
          document.querySelectorAll('.top-social, [data-component="social"]').forEach(el => {
            el.innerHTML = content;
          });
          document.dispatchEvent(new CustomEvent('avis:social-rendered'));
        }
      })
      .catch(() => { });
  }
}

function renderSharedComponents() {
  const headerContainer = document.getElementById('site-header');
  const footerContainer = document.getElementById('site-footer');

  // 1. Render immediately from bundled templates (zero layout shift, works offline and on file://)
  if (headerContainer && !headerContainer.hasChildNodes()) {
    headerContainer.innerHTML = SITE_HEADER_TEMPLATE.trim();
    applyActiveNav(headerContainer);
    loadSocialComponent();
  }

  if (footerContainer && !footerContainer.hasChildNodes()) {
    footerContainer.innerHTML = SITE_FOOTER_TEMPLATE.trim();
  }

  // 2. If running via HTTP/HTTPS (Live Server, local dev, or hosting), also fetch header.html & footer.html dynamically
  if (window.location.protocol.startsWith('http')) {
    fetch('header.html?t=' + Date.now())
      .then(res => res.ok ? res.text() : null)
      .then(html => {
        if (html && headerContainer) {
          headerContainer.innerHTML = html.trim();
          applyActiveNav(headerContainer);
          loadSocialComponent();
          document.dispatchEvent(new CustomEvent('avis:header-rendered'));
        }
      })
      .catch(() => { });

    fetch('footer.html?t=' + Date.now())
      .then(res => res.ok ? res.text() : null)
      .then(html => {
        if (html && footerContainer) {
          footerContainer.innerHTML = html.trim();
          document.dispatchEvent(new CustomEvent('avis:footer-rendered'));
        }
      })
      .catch(() => { });
  }
}

// Auto-execute immediately to prevent layout shift
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderSharedComponents);
} else {
  renderSharedComponents();
}
