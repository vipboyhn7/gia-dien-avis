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
        <span class="top-icon">✉</span>
        <span>admin@avis.io.vn</span>
      </a>
      <span class="top-divider"></span>
      <span class="top-item top-address">
        <span class="top-icon">⌖</span>
        <span>Tầng 5, ADG Tower, 17 Lê Văn Thiêm, Thanh Xuân, Hà Nội</span>
      </span>
    </div>
    <div class="top-actions">
      <a href="tel:0879423777" class="top-hotline">
        <span class="top-hotline-icon">☎</span>
        <span>0879.423.777</span>
      </a>
      <span class="top-divider"></span>
      <div class="top-social">
        <a href="https://www.facebook.com/attechjsc" target="_blank" rel="noopener" aria-label="Facebook">Facebook</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">Instagram</a>
      </div>
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
        <li><span>Chủ nhật</span><b>Hỗ trợ trực tuyến</b></li>
      </ul>
    </div>
    <div>
      <h3>Trụ sở &amp; Thông tin liên hệ</h3>
      <strong>TRỤ SỞ CHÍNH</strong>
      <address>
        <a href="mailto:admin@avis.io.vn">✉ admin@avis.io.vn</a>
        <a href="tel:0879423777">☎ 0879.423.777</a>
        <span>⌖ Tầng 5, ADG Tower, 17 Lê Văn Thiêm, Thanh Xuân, Hà Nội</span>
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

function renderSharedComponents() {
  const headerContainer = document.getElementById('site-header');
  const footerContainer = document.getElementById('site-footer');

  // 1. Render immediately from bundled templates (zero layout shift, works offline and on file://)
  if (headerContainer && !headerContainer.hasChildNodes()) {
    headerContainer.innerHTML = SITE_HEADER_TEMPLATE.trim();
    applyActiveNav(headerContainer);
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
          document.dispatchEvent(new CustomEvent('avis:header-rendered'));
        }
      })
      .catch(() => {});

    fetch('footer.html?t=' + Date.now())
      .then(res => res.ok ? res.text() : null)
      .then(html => {
        if (html && footerContainer) {
          footerContainer.innerHTML = html.trim();
          document.dispatchEvent(new CustomEvent('avis:footer-rendered'));
        }
      })
      .catch(() => {});
  }
}

// Auto-execute immediately to prevent layout shift
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderSharedComponents);
} else {
  renderSharedComponents();
}
