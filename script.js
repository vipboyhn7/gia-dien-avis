document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. THEME SWITCHER (DARK / LIGHT MODE)
  // ==========================================================================
  const storedTheme = localStorage.getItem('avis-theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('avis-theme', theme);
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối');
    }
  }

  // Initialize theme
  applyTheme(storedTheme);

  document.addEventListener('click', (e) => {
    if (e.target.closest('#theme-toggle')) {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    }
  });

  // ==========================================================================
  // 2. MOBILE MENU & TOUCH DRAWER
  // ==========================================================================
  document.addEventListener('click', (e) => {
    const menuBtn = e.target.closest('.menu');
    if (menuBtn) {
      const menu = document.querySelector('.nav-wrap nav');
      const isOpen = menu?.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      menuBtn.textContent = isOpen ? '✕' : '☰';
      document.body.style.overflow = isOpen ? 'hidden' : '';
      return;
    }

    const menuLink = e.target.closest('.nav-wrap nav a');
    if (menuLink) {
      const menu = document.querySelector('.nav-wrap nav');
      const menuBtn = document.querySelector('.menu');
      menu?.classList.remove('open');
      menuBtn?.setAttribute('aria-expanded', 'false');
      if (menuBtn) menuBtn.textContent = '☰';
      document.body.style.overflow = '';
    }
  });

  // ==========================================================================
  // 3. HEADER SCROLL GLASS STATE
  // ==========================================================================
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // ==========================================================================
  // 4. SCROLL TO TOP
  // ==========================================================================
  document.addEventListener('click', (e) => {
    if (e.target.closest('.scroll-top')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // ==========================================================================
  // 5. HERO SLIDER LOGIC (DYNAMIC AUTO-GENERATION OF DOTS & REAL-TIME ADAPTATION)
  // ==========================================================================
  const sliderContainer = document.querySelector('.hero-slider');
  const slides = [...document.querySelectorAll('.hero-slide')];
  const dotsContainer = document.querySelector('.slider-dots');
  
  if (slides.length && sliderContainer) {
    let current = 0;
    let timer = null;

    // Tự động sinh các nút dots dựa trên số lượng slide thực tế trong HTML
    if (dotsContainer) {
      dotsContainer.innerHTML = slides.map((_, i) => 
        `<button type="button" aria-label="Mở slide ${i + 1}" class="${i === 0 ? 'active' : ''}"></button>`
      ).join('');
    }

    const dots = dotsContainer ? [...dotsContainer.querySelectorAll('button')] : [];

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === current);
        slide.setAttribute('aria-hidden', String(i !== current));
      });
      dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    }

    function startAutoSlide() {
      stopAutoSlide();
      timer = setInterval(() => show(current + 1), 6000);
    }

    function stopAutoSlide() {
      if (timer) clearInterval(timer);
    }

    document.querySelector('.slider-arrow.prev')?.addEventListener('click', () => {
      show(current - 1);
      startAutoSlide();
    });
    
    document.querySelector('.slider-arrow.next')?.addEventListener('click', () => {
      show(current + 1);
      startAutoSlide();
    });

    dots.forEach((dot, i) => dot.addEventListener('click', () => {
      show(i);
      startAutoSlide();
    }));

    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);

    show(0);
    startAutoSlide();
  }

  // ==========================================================================
  // 6. EXPANDING INLINE SEARCH BAR & LIVE QUICK SEARCH
  // ==========================================================================
  const searchIndex = [
    { title: 'Phát triển phần mềm theo yêu cầu', badge: 'Dịch vụ', url: 'dich-vu-phat-trien-phan-mem.html', desc: 'Kiến trúc tối ưu, giao diện UX/UI quốc tế' },
    { title: 'Tư vấn & Khảo sát giải pháp công nghệ', badge: 'Dịch vụ', url: 'dich-vu-tu-van-giai-phap.html', desc: 'Lộ trình chuyển đổi số và tối ưu chi phí' },
    { title: 'Đào tạo nhân sự IT thực chiến', badge: 'Dịch vụ', url: 'dich-vu-dao-tao-it.html', desc: 'Backend, Frontend, Tester QA, DevOps, AI & Data' },
    { title: 'IT Outsourcing & Dedicated Team (ODC)', badge: 'Dịch vụ', url: 'dich-vu-outsourcing.html', desc: 'Cung cấp nhân sự công nghệ linh hoạt' },
    { title: 'Toàn bộ danh mục dịch vụ công nghệ', badge: 'Dịch vụ', url: 'dich-vu.html', desc: 'Khám phá hệ sinh thái giải pháp số AVIS' },
    { title: 'Cơ hội nghề nghiệp & Tuyển dụng', badge: 'Tuyển dụng', url: 'tuyen-dung.html', desc: 'Đãi ngộ hấp dẫn, lộ trình phát triển rõ ràng' },
    { title: 'Về AVIS Việt Nam - Năng lực & Giá trị', badge: 'Về chúng tôi', url: 've-chung-toi.html', desc: 'Đối tác công nghệ tin cậy của doanh nghiệp' },
    { title: 'Đội ngũ chuyên gia công nghệ tinh nhuệ', badge: 'Về chúng tôi', url: 've-chung-toi-doi-ngu.html', desc: '100+ kỹ sư sở hữu chứng chỉ quốc tế uy tín' },
    { title: 'Tầm nhìn phát triển của AVIS', badge: 'Về chúng tôi', url: 've-chung-toi-tam-nhin.html', desc: 'Dẫn đầu về ICT, AI Cloud và chuyển đổi số' },
    { title: 'Sứ mệnh phụng sự doanh nghiệp', badge: 'Về chúng tôi', url: 've-chung-toi-su-menh.html', desc: 'Đem lại giá trị thực tế và đo đếm được' },
    { title: 'Giá trị cốt lõi & Phương châm', badge: 'Về chúng tôi', url: 've-chung-toi-gia-tri-cot-loi.html', desc: 'Lấy cái tâm làm gốc, đồng hành dài hạn' },
    { title: 'Đối tác chiến lược (AWS, NCB, CMC, FIS)', badge: 'Đối tác', url: 'doi-tac.html', desc: 'Mạng lưới đối tác công nghệ và tài chính hàng đầu' },
    { title: 'Liên hệ & Đặt lịch tư vấn miễn phí', badge: 'Liên hệ', url: 'lien-he.html', desc: 'Hỗ trợ trực tuyến 24/7 và báo giá dự án' },
    { title: 'Triển khai giải pháp cổng thanh toán Fintech', badge: 'Dự án', url: 'index.html#projects', desc: 'Bảo mật cấp độ ngân hàng PCI-DSS' },
    { title: 'Hệ sinh thái số & Command Center', badge: 'Công nghệ', url: 'index.html#showcase', desc: 'Hợp nhất dữ liệu và kiểm soát thông minh' },
    { title: 'Quy trình hợp tác Agile Scrum', badge: 'Quy trình', url: 'index.html#process', desc: '3 giai đoạn minh bạch từ ý tưởng đến kết quả' }
  ];

  function removeVietnameseTones(str) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .toLowerCase();
  }

  function openInlineSearch() {
    const navWrap = document.querySelector('.nav-wrap');
    const input = document.getElementById('inline-search-input');
    const searchBar = document.getElementById('inline-search-bar');
    const dropdown = document.getElementById('search-results-dropdown');

    if (navWrap && searchBar) {
      navWrap.classList.add('search-open');
      searchBar.setAttribute('aria-expanded', 'true');
      if (dropdown) dropdown.classList.add('visible');
      setTimeout(() => input?.focus(), 80);
    }
  }

  function closeInlineSearch() {
    const navWrap = document.querySelector('.nav-wrap');
    const searchBar = document.getElementById('inline-search-bar');
    const dropdown = document.getElementById('search-results-dropdown');
    const input = document.getElementById('inline-search-input');
    const clearBtn = document.getElementById('search-clear-btn');

    if (navWrap && searchBar) {
      navWrap.classList.remove('search-open');
      searchBar.setAttribute('aria-expanded', 'false');
      if (dropdown) dropdown.classList.remove('visible');
      if (input) input.value = '';
      if (clearBtn) clearBtn.style.display = 'none';
      renderSearchResults('');
    }
  }

  function renderSearchResults(query) {
    const dropdown = document.getElementById('search-results-dropdown');
    const liveList = document.getElementById('search-live-list');
    const quickTags = dropdown?.querySelector('.search-quick-tags');
    const clearBtn = document.getElementById('search-clear-btn');

    if (!dropdown || !liveList) return;

    if (clearBtn) {
      clearBtn.style.display = query ? 'inline-block' : 'none';
    }

    if (!query) {
      if (quickTags) quickTags.style.display = 'flex';
      liveList.innerHTML = '';
      return;
    }

    if (quickTags) quickTags.style.display = 'none';

    const normalizedQuery = removeVietnameseTones(query);
    const matches = searchIndex.filter(item => {
      const titleClean = removeVietnameseTones(item.title);
      const descClean = removeVietnameseTones(item.desc);
      const badgeClean = removeVietnameseTones(item.badge);
      return titleClean.includes(normalizedQuery) || descClean.includes(normalizedQuery) || badgeClean.includes(normalizedQuery);
    });

    if (matches.length === 0) {
      liveList.innerHTML = `
        <div class="search-no-results">
          <p>Không tìm thấy kết quả phù hợp cho <strong>"${escapeHtml(query)}"</strong></p>
          <small>Thử tìm từ khóa ngắn hơn: "phần mềm", "tuyển dụng", "liên hệ", "đối tác"...</small>
        </div>
      `;
      return;
    }

    liveList.innerHTML = matches.map(item => `
      <a href="${item.url}" class="search-item">
        <div>
          <div class="search-item-title">${highlightText(item.title, query)}</div>
          <small style="color: var(--text-muted); font-size: 11.5px;">${escapeHtml(item.desc)}</small>
        </div>
        <span class="search-item-badge">${item.badge}</span>
      </a>
    `).join('');
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[m]);
  }

  function highlightText(text, keyword) {
    if (!keyword) return escapeHtml(text);
    const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return escapeHtml(text).replace(regex, '<span style="color: var(--orange); font-weight: 700; text-decoration: underline;">$1</span>');
  }

  // Delegated clicks for Search Toggle and Close
  document.addEventListener('click', (e) => {
    // Click Search Toggle
    if (e.target.closest('#search-toggle') || e.target.closest('.search-toggle')) {
      e.preventDefault();
      const navWrap = document.querySelector('.nav-wrap');
      if (navWrap?.classList.contains('search-open')) {
        closeInlineSearch();
      } else {
        openInlineSearch();
      }
      return;
    }

    // Click Close Search button
    if (e.target.closest('#search-close-btn')) {
      e.preventDefault();
      closeInlineSearch();
      return;
    }

    // Click Clear button
    if (e.target.closest('#search-clear-btn')) {
      e.preventDefault();
      const input = document.getElementById('inline-search-input');
      if (input) {
        input.value = '';
        input.focus();
        renderSearchResults('');
      }
      return;
    }

    // Click outside search bar closes it
    const navWrap = document.querySelector('.nav-wrap');
    if (navWrap?.classList.contains('search-open')) {
      if (!e.target.closest('.inline-search-bar') && !e.target.closest('.search-toggle')) {
        closeInlineSearch();
      }
    }
  });

  // Search input typing
  document.addEventListener('input', (e) => {
    if (e.target.id === 'inline-search-input') {
      renderSearchResults(e.target.value.trim());
    }
  });

  // Keyboard navigation & shortcuts
  document.addEventListener('keydown', (e) => {
    // Cmd+K or Ctrl+K opens inline search
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openInlineSearch();
      return;
    }

    // Escape closes inline search
    if (e.key === 'Escape') {
      const navWrap = document.querySelector('.nav-wrap');
      if (navWrap?.classList.contains('search-open')) {
        closeInlineSearch();
      }
    }

    // Enter in search input opens first result
    if (e.key === 'Enter' && e.target.id === 'inline-search-input') {
      const firstResult = document.querySelector('.search-live-list .search-item');
      if (firstResult) {
        e.preventDefault();
        window.location.href = firstResult.getAttribute('href');
      }
    }
  });

  // ==========================================================================
  // 6.1 HORIZONTAL MOUSEWHEEL SCROLL FOR CATEGORY MENU BAR
  // ==========================================================================
  function initNavHorizontalScroll() {
    const mainNav = document.getElementById('main-nav') || document.querySelector('.nav-wrap nav');
    if (mainNav) {
      mainNav.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0 && mainNav.scrollWidth > mainNav.clientWidth) {
          e.preventDefault();
          mainNav.scrollLeft += e.deltaY * 0.9;
        }
      }, { passive: false });
    }
  }

  initNavHorizontalScroll();
  document.addEventListener('avis:header-rendered', initNavHorizontalScroll);

  // ==========================================================================
  // 7. INTERACTIVE TELEMETRY DASHBOARD
  // ==========================================================================
  const asideIcons = document.querySelectorAll('.dash-body aside i');
  const metricStrong = document.querySelector('.metrics > div:first-child strong');
  const metricProcess = document.querySelector('.metrics > div:last-child strong');
  const bars = document.querySelectorAll('.bars i');

  if (asideIcons.length && bars.length) {
    const presets = [
      { perf: '96.4%', proc: '142', heights: [45, 60, 50, 80, 65, 90, 75, 98, 85, 100, 92, 80] },
      { perf: '98.9%', proc: '215', heights: [70, 75, 82, 88, 92, 95, 91, 99, 94, 98, 100, 96] },
      { perf: '92.1%', proc: '98',  heights: [35, 45, 52, 60, 58, 70, 65, 78, 82, 79, 85, 74] },
      { perf: '97.5%', proc: '180', heights: [55, 68, 72, 85, 80, 92, 88, 95, 90, 96, 94, 91] }
    ];

    asideIcons.forEach((icon, idx) => {
      icon.addEventListener('click', () => {
        asideIcons.forEach(i => i.classList.remove('selected'));
        icon.classList.add('selected');

        const data = presets[idx % presets.length];
        if (metricStrong) metricStrong.textContent = data.perf;
        if (metricProcess) metricProcess.textContent = data.proc;

        bars.forEach((bar, bIdx) => {
          bar.style.height = `${data.heights[bIdx % data.heights.length]}%`;
        });
      });
    });

    setInterval(() => {
      if (!document.hidden && bars.length) {
        const randomBar = bars[Math.floor(Math.random() * bars.length)];
        const currentH = parseInt(randomBar.style.height || '60', 10);
        const variation = (Math.random() * 14 - 7);
        const newH = Math.min(100, Math.max(30, Math.round(currentH + variation)));
        randomBar.style.height = `${newH}%`;
      }
    }, 3500);
  }

  // ==========================================================================
  // 8. CAREERS TABS & APPLICATION MODAL
  // ==========================================================================
  // A. Tab filter
  const careerTabs = document.querySelectorAll('.career-tab-btn');
  const jobCards = document.querySelectorAll('.job-card');

  careerTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      careerTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      jobCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'modal-fade 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // B. Application Modal Logic
  const applyModal = document.getElementById('apply-modal');
  const modalJobTitle = document.getElementById('modal-job-title');
  const appliedPositionInput = document.getElementById('applied-position-input');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const applyButtons = document.querySelectorAll('.btn-apply');

  function openApplyModal(jobName) {
    if (!applyModal) return;
    if (modalJobTitle) modalJobTitle.textContent = jobName || 'Vị trí công nghệ AVIS';
    if (appliedPositionInput) appliedPositionInput.value = jobName || '';
    applyModal.style.display = 'grid';
    document.body.style.overflow = 'hidden';
  }

  function closeApplyModal() {
    if (!applyModal) return;
    applyModal.style.display = 'none';
    document.body.style.overflow = '';
  }

  applyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const jobName = btn.getAttribute('data-job');
      openApplyModal(jobName);
    });
  });

  modalCloseBtn?.addEventListener('click', closeApplyModal);

  applyModal?.addEventListener('click', event => {
    if (event.target === applyModal) closeApplyModal();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && applyModal && applyModal.style.display !== 'none') {
      closeApplyModal();
    }
  });

  // C. CV Drag & Drop Dropzone
  const cvFileInput = document.getElementById('cv-file-input');
  const cvDropzone = document.getElementById('cv-dropzone');
  const cvFileSelected = document.getElementById('cv-file-selected');
  const cvFilename = document.getElementById('cv-filename');
  const cvError = document.getElementById('cv-error');

  if (cvFileInput && cvDropzone) {
    cvFileInput.addEventListener('change', () => {
      if (cvFileInput.files && cvFileInput.files.length > 0) {
        const file = cvFileInput.files[0];
        if (cvFilename) cvFilename.textContent = file.name;
        if (cvFileSelected) cvFileSelected.style.display = 'flex';
        if (cvError) cvError.style.display = 'none';
      }
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      cvDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        cvDropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      cvDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        cvDropzone.classList.remove('dragover');
      });
    });

    cvDropzone.addEventListener('drop', (e) => {
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        cvFileInput.files = e.dataTransfer.files;
        const file = e.dataTransfer.files[0];
        if (cvFilename) cvFilename.textContent = file.name;
        if (cvFileSelected) cvFileSelected.style.display = 'flex';
        if (cvError) cvError.style.display = 'none';
      }
    });
  }

  // D. Career Form Submission
  const careerForm = document.getElementById('career-apply-form');
  careerForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    careerForm.querySelector('.form-success')?.remove();

    let valid = true;
    const nameField = careerForm.elements.namedItem('name');
    const phoneField = careerForm.elements.namedItem('phone');
    const emailField = careerForm.elements.namedItem('email');

    // Name
    if (!nameField.value.trim()) {
      nameField.classList.add('ng-invalid', 'ng-touched');
      valid = false;
    } else {
      nameField.classList.remove('ng-invalid');
    }

    // Phone
    const phoneRegex = /^[0-9+() .-]{9,15}$/;
    if (!phoneRegex.test(phoneField.value.trim())) {
      phoneField.classList.add('ng-invalid', 'ng-touched');
      valid = false;
    } else {
      phoneField.classList.remove('ng-invalid');
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value.trim())) {
      emailField.classList.add('ng-invalid', 'ng-touched');
      valid = false;
    } else {
      emailField.classList.remove('ng-invalid');
    }

    // CV file
    if (!cvFileInput || !cvFileInput.files || cvFileInput.files.length === 0) {
      if (cvError) cvError.style.display = 'block';
      valid = false;
    } else {
      if (cvError) cvError.style.display = 'none';
    }

    if (!valid) return;

    const btnSubmit = document.getElementById('btn-submit-cv');
    if (btnSubmit) {
      btnSubmit.textContent = 'Đang gửi hồ sơ...';
      btnSubmit.disabled = true;
    }

    setTimeout(() => {
      careerForm.insertAdjacentHTML('beforeend', `
        <div class="form-success" role="status" style="margin-top: 20px;">
          <b>✓</b>
          <div>
            <strong style="color:var(--text-primary);">Hồ sơ ứng tuyển đã được gửi thành công!</strong>
            <span style="display:block;margin-top:2px;">Bộ phận Tuyển dụng AVIS sẽ xem xét CV và liên hệ phỏng vấn bạn trong vòng 3 ngày làm việc.</span>
          </div>
        </div>
      `);
      careerForm.reset();
      if (cvFileSelected) cvFileSelected.style.display = 'none';
      if (btnSubmit) {
        btnSubmit.textContent = 'Xác nhận gửi hồ sơ →';
        btnSubmit.disabled = false;
      }
    }, 800);
  });

  // ==========================================================================
  // 9. GENERAL CONTACT FORM FEEDBACK
  // ==========================================================================
  const generalForm = document.querySelector('.contact-form:not(#career-apply-form)');
  generalForm?.addEventListener('submit', event => {
    event.preventDefault();
    generalForm.querySelector('.form-success')?.remove();

    let valid = true;
    const validations = {
      name: v => v.length > 0,
      phone: v => /^[0-9+() .-]{9,15}$/.test(v),
      email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: v => v.length >= 10
    };

    for (const [name, test] of Object.entries(validations)) {
      const field = generalForm.elements.namedItem(name);
      if (field) {
        const isGood = test(field.value.trim());
        field.classList.toggle('ng-invalid', !isGood);
        field.classList.add('ng-touched');
        valid = valid && isGood;
      }
    }

    if (!valid) return;

    generalForm.insertAdjacentHTML('beforeend', `
      <div class="form-success" role="status">
        <b>✓</b>
        <div>
          <strong style="color:var(--text-primary);">Yêu cầu tư vấn đã được gửi thành công!</strong>
          <span style="display:block;margin-top:2px;">Chuyên viên giải pháp của AVIS sẽ liên hệ hỗ trợ bạn trong vòng 24 giờ.</span>
        </div>
      </div>
    `);
    generalForm.reset();
  });
});
