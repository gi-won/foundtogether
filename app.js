// Application data with real images
const appData = {
  "properties": [
    {
      "id": 1,
      "title": "홍대입구역 인근 음식점",
      "location": "서울 마포구 홍대입구역",
      "price": "월 300만원",
      "deposit": "보증금 5,000만원", 
      "area": "33㎡ (10평)",
      "keyMoney": "권리금 1,500만원",
      "status": "매물",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1756634604/pplx_project_search_images/1168166c32d479f0f2f0e2d3335d6eb3846020f5.png",
      "description": "홍대 핫플레이스 위치, 유동인구 많음, 음식점 창업 최적",
      "recommendedBusiness": "한식, 카페, 치킨",
      "detailedDescription": "홍대입구역에서 도보 3분 거리에 위치한 프리미엄 음식점 매물입니다. 하루 평균 유동인구 15,000명 이상의 핫플레이스로, 20-30대 고객층이 주를 이룹니다. 기존 인테리어가 잘 되어 있어 추가 투자비용을 절약할 수 있으며, 주변에 대학교와 직장이 많아 점심·저녁 시간대 안정적인 고객 확보가 가능합니다."
    },
    {
      "id": 2,
      "title": "강남역 오피스텔 상가",
      "location": "서울 강남구 강남역",
      "price": "월 500만원",
      "deposit": "보증금 1억원",
      "area": "66㎡ (20평)",
      "keyMoney": "권리금 3,000만원", 
      "status": "매물",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1754969202/pplx_project_search_images/410365114c83957ac4781e1f338b89da6eae30ea.png",
      "description": "강남 핵심상권, 직장인 타겟 최적",
      "recommendedBusiness": "카페, 의료업, 서비스업",
      "detailedDescription": "강남역 2번 출구에서 1분 거리의 프리미엄 오피스텔 상가입니다. 주변 직장인들의 접근성이 뛰어나며, 고급 인테리어와 넓은 공간으로 다양한 업종 운영이 가능합니다. 특히 의료업이나 전문 서비스업에 최적화된 공간으로, 안정적인 고객층 확보가 용이합니다."
    },
    {
      "id": 3,
      "title": "신촌 대학가 매장",
      "location": "서울 서대문구 신촌",
      "price": "월 250만원",
      "deposit": "보증금 3,000만원",
      "area": "50㎡ (15평)",
      "keyMoney": "권리금 800만원",
      "status": "매물", 
      "image": "https://pplx-res.cloudinary.com/image/upload/v1756634604/pplx_project_search_images/9ec35ba80b91d725f68495150465fdf7f523449a.png",
      "description": "대학생 고객층, 접근성 우수",
      "recommendedBusiness": "치킨, 카페, 분식",
      "detailedDescription": "연세대학교와 이화여자대학교 사이에 위치한 대학가 핵심 상권입니다. 젊은 고객층이 주를 이루며, 저렴한 가격대의 메뉴로 높은 회전율을 기대할 수 있습니다. 특히 야식업종과 카페 운영에 최적화된 입지로, 학기 중 안정적인 매출이 보장됩니다."
    },
    {
      "id": 4,
      "title": "이태원 외국인 상권",
      "location": "서울 용산구 이태원",
      "price": "월 400만원",
      "deposit": "보증금 6,000만원",
      "area": "45㎡ (14평)",
      "keyMoney": "권리금 2,000만원",
      "status": "계약중",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1756634604/pplx_project_search_images/bb1914b638b1f6ae244e012529df57fe9e010484.png", 
      "description": "외국인 관광객 많음, 독특한 컨셉 환영",
      "recommendedBusiness": "세계음식, 바, 카페",
      "detailedDescription": "이태원 메인 스트리트에 위치한 글로벌 상권의 프리미엄 매물입니다. 외국인 관광객과 외국인 거주자들이 주 고객층으로, 독특하고 차별화된 컨셉의 업종에 최적입니다. 24시간 유동인구가 있어 다양한 영업시간대 운영이 가능합니다."
    },
    {
      "id": 5,
      "title": "부산 해운대 해변가",
      "location": "부산 해운대구",
      "price": "월 350만원",
      "deposit": "보증금 4,000만원",
      "area": "40㎡ (12평)",
      "keyMoney": "권리금 1,200만원",
      "status": "매물",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1756634604/pplx_project_search_images/4b86471b9efad2fd17727c98f32b6106fe1363b1.png",
      "description": "해변 접근성, 관광객 유동인구",
      "recommendedBusiness": "카페, 디저트, 해산물",
      "detailedDescription": "해운대 해수욕장에서 도보 2분 거리의 환상적인 오션뷰 매물입니다. 여름 성수기에는 관광객들로 북적이며, 사계절 내내 아름다운 바다 전망을 감상할 수 있습니다. 특히 카페나 레스토랑 운영 시 차별화된 경쟁력을 확보할 수 있습니다."
    },
    {
      "id": 6,
      "title": "대구 동성로 중심가",
      "location": "대구 중구 동성로",
      "price": "월 280만원", 
      "deposit": "보증금 3,500만원",
      "area": "35㎡ (11평)",
      "keyMoney": "권리금 1,000만원",
      "status": "매물",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1756634604/pplx_project_search_images/9909d2ffa712f816404dd994a17de56c4de60c5c.png",
      "description": "대구 최고 번화가, 젊은층 유동인구",
      "recommendedBusiness": "의류, 카페, 뷰티",
      "detailedDescription": "대구의 명동이라 불리는 동성로 한복판에 위치한 1층 상가입니다. 주말과 저녁시간대 젊은 고객들로 활기가 넘치며, 패션·뷰티·카페 등 트렌디한 업종에 최적화된 입지입니다. 대구 지역 최고의 상권으로 브랜드 인지도 향상에도 큰 도움이 됩니다."
    }
  ],
  "faqs": [
    {
      "id": 1,
      "category": "매매",
      "title": "권리금 산정 방법이 궁금합니다",
      "isPrivate": true,
      "password": "1234",
      "question": "권리금을 어떻게 산정하는지 자세한 방법을 알고 싶습니다.",
      "answer": "권리금은 입지가치, 시설가치, 영업가치를 종합하여 산정됩니다. 1) 입지가치: 유동인구, 접근성, 상권성숙도 2) 시설가치: 인테리어, 설비 상태 3) 영업가치: 매출액, 고객층, 브랜드 파워를 고려합니다. 저희 플랫폼에서는 법무법인과 협력하여 정확한 권리금 산정 서비스를 제공합니다.",
      "detailedAnswer": "권리금 산정은 다음과 같은 세부 요소들을 종합적으로 고려합니다:\n\n**1. 입지가치 (40%)**\n- 유동인구 수 및 질\n- 대중교통 접근성\n- 주변 상권의 성숙도\n- 향후 개발계획\n\n**2. 시설가치 (35%)**\n- 인테리어 상태 및 투자비용\n- 주방, 화장실 등 필수시설\n- 건물 노후도\n- 주차공간 등 부대시설\n\n**3. 영업가치 (25%)**\n- 기존 업체의 매출 실적\n- 고객층의 충성도\n- 브랜드 인지도\n- 영업권의 지속성\n\n법무법인 성안과 협력하여 객관적이고 투명한 권리금 산정 서비스를 제공하며, 분쟁 발생 시 조정 서비스도 함께 제공합니다."
    },
    {
      "id": 2,
      "category": "창업",
      "title": "AI 성향분석은 어떻게 작동하나요?",
      "isPrivate": false,
      "question": "AI 성향분석 서비스에 대해 알고 싶습니다.",
      "answer": "예비창업자의 투자성향, 관심업종, 경험, 선호지역 등을 분석하여 최적의 창업 아이템과 입지를 추천합니다. 별도 앱을 통해 데이터를 수집하고, 머신러닝 알고리즘으로 개인 맞춤 추천을 제공합니다.",
      "detailedAnswer": "AI 성향분석 서비스는 다음 단계로 진행됩니다:\n\n**1단계: 데이터 수집**\n- 전용 모바일 앱을 통한 설문조사\n- 투자 가능 금액, 선호 업종, 경험 등 입력\n- 앱 사용 패턴 및 관심 매물 분석\n\n**2단계: AI 분석**\n- 머신러닝 알고리즘으로 성향 패턴 분석\n- 유사한 성공 사례와의 매칭\n- 위험도 및 성공 확률 계산\n\n**3단계: 맞춤 추천**\n- 개인별 최적 업종 추천\n- 적합한 상권 및 입지 제안\n- 예상 투자비용 및 수익성 분석\n\n**4단계: 지속적 업데이트**\n- 시장 변화에 따른 실시간 추천 업데이트\n- 창업 후 성과 피드백을 통한 정확도 향상"
    },
    {
      "id": 3,
      "category": "법률", 
      "title": "계약서 작성 비용은 얼마인가요?",
      "isPrivate": true,
      "password": "5678",
      "question": "법무법인을 통한 계약서 작성 비용이 궁금합니다.",
      "answer": "법무법인 성안과 협력하여 합리적인 비용으로 계약서 작성 서비스를 제공합니다. 일반 양수도 계약서는 30만원부터, 복잡한 경우 50만원 수준입니다. 정확한 비용은 상담을 통해 안내드립니다.",
      "detailedAnswer": "법무법인 성안과의 협력을 통한 계약서 작성 서비스 비용은 다음과 같습니다:\n\n**기본 서비스**\n- 일반 임대차 계약서: 20만원\n- 양수도 계약서: 30만원\n- 프랜차이즈 가맹 계약서: 40만원\n\n**추가 서비스**\n- 권리금 관련 특약 추가: 5만원\n- 복잡한 조건부 계약: 10만원\n- 계약서 검토 및 수정: 15만원\n- 분쟁 조정 서비스: 별도 협의\n\n**플랫폼 이용자 혜택**\n- 최대 20% 할인 적용\n- 무료 초기 상담 (30분)\n- 계약 후 3개월 간 무료 법률 자문\n\n정확한 비용은 계약의 복잡성과 추가 서비스에 따라 달라지므로, 사전 상담을 통해 정확한 견적을 제공해드립니다."
    },
    {
      "id": 4,
      "category": "매매",
      "title": "허위매물은 어떻게 걸러내나요?",
      "isPrivate": false, 
      "question": "허위매물 방지 시스템에 대해 설명해주세요.",
      "answer": "전문 에이전트가 모든 매물을 현장 확인하고, 등록 전 검수 과정을 거칩니다. 또한 실시간 모니터링으로 허위정보를 즉시 차단하며, 신고 시스템을 통해 지속적으로 관리합니다.",
      "detailedAnswer": "허위매물 방지를 위한 다층 보안 시스템을 운영합니다:\n\n**1단계: 매물 등록 검증**\n- 150여 명의 전문 에이전트가 직접 현장 확인\n- 건물 등기부등본, 임대차 계약서 등 서류 검증\n- 사진 및 동영상을 통한 실제 상태 확인\n\n**2단계: 실시간 모니터링**\n- AI 기반 이상 매물 탐지 시스템\n- 시세 대비 과도한 저가 매물 자동 필터링\n- 중복 등록 및 복사 매물 차단\n\n**3단계: 신고 및 제재 시스템**\n- 이용자 신고 시스템 운영\n- 허위매물 확인 시 즉시 삭제 및 등록자 제재\n- 반복 위반 시 영구 이용 제한\n\n**4단계: 지속적 관리**\n- 월 1회 이상 매물 현황 업데이트\n- 계약 완료된 매물 즉시 삭제\n- 고객 피드백을 통한 정확성 검증"
    },
    {
      "id": 5,
      "category": "창업",
      "title": "상권분석 리포트 샘플을 볼 수 있나요?",
      "isPrivate": false,
      "question": "전문 상권분석 리포트는 어떤 내용인가요?",
      "answer": "유동인구, 연령대별 분포, 소비패턴, 경쟁업체 현황, 임대료 수준, 향후 개발계획 등을 포함한 종합 분석 리포트를 제공합니다. 정부 공공데이터와 자체 조사 데이터를 융합하여 신뢰성 높은 정보를 제공합니다.",
      "detailedAnswer": "전문 상권분석팀이 제공하는 종합 리포트 구성:\n\n**1. 상권 개요**\n- 상권 범위 및 특성\n- 주요 랜드마크 및 교통 현황\n- 상권 성장성 및 안정성 평가\n\n**2. 유동인구 분석**\n- 시간대별/요일별 유동인구 데이터\n- 연령별/성별 고객 분포\n- 거주민 vs 유동인구 비율\n\n**3. 소비 패턴 분석**\n- 업종별 매출 현황\n- 평균 객단가 및 결제 패턴\n- 계절별 소비 트렌드\n\n**4. 경쟁환경 분석**\n- 동일 업종 경쟁업체 현황\n- 시장 포화도 및 진입 장벽\n- 차별화 포인트 제안\n\n**5. 임대료 및 권리금**\n- 평방미터당 평균 임대료\n- 권리금 시세 동향\n- 향후 임대료 전망\n\n**6. 향후 전망**\n- 재개발/재건축 계획\n- 신규 상업시설 입점 예정\n- 상권 성장성 예측\n\n정부의 데이터 바우처 사업을 통해 확보한 공공데이터와 자체 현장조사 데이터를 융합하여 높은 신뢰성을 보장합니다."
    }
  ],
  "services": [
    {
      "title": "점포 매매·임대",
      "description": "직거래부터 중개까지, 투명한 거래 프로세스",
      "icon": "🏪"
    },
    {
      "title": "프랜차이즈 정보", 
      "description": "브랜드별 창업비용, 매출, 폐점률 비교 분석",
      "icon": "📊"
    },
    {
      "title": "AI 상권분석",
      "description": "빅데이터 기반 맞춤형 입지 및 업종 추천",
      "icon": "🤖"
    },
    {
      "title": "법률 지원",
      "description": "법무법인 협력을 통한 계약서 작성 및 분쟁조정",
      "icon": "⚖️"
    }
  ],
  "reviews": [
    {
      "name": "김○○",
      "business": "카페 운영",
      "content": "AI 추천으로 최적의 입지를 찾았고, 법률 지원까지 받아서 안전하게 창업할 수 있었습니다.",
      "rating": 5
    },
    {
      "name": "이○○",
      "business": "치킨전문점",
      "content": "상권분석 덕분에 매출 예측이 정확했고, 권리금 협상에서도 도움을 많이 받았습니다.",
      "rating": 5
    },
    {
      "name": "박○○", 
      "business": "미용실",
      "content": "허위매물 없이 실제 조건과 일치하는 매물을 찾을 수 있어서 만족합니다.",
      "rating": 4
    }
  ]
};

// Application state
let appState = {
  currentSection: 'main',
  filteredProperties: appData.properties,
  filteredFaqs: appData.faqs,
  currentFaqCategory: ''
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app');
  initializeApp();
  setupEventListeners();
  setupAccessibility();
});

function initializeApp() {
  console.log('Initializing app');
  renderServices();
  renderPopularProperties();
  renderReviews();
  renderProperties();
  renderFaqs();
}

function setupEventListeners() {
  console.log('Setting up event listeners');
  
  // Mobile menu toggle
  const mobileToggle = document.querySelector('.header__mobile-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // Navigation links
  const navLinks = document.querySelectorAll('.header__nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const targetSection = href.substring(1);
      console.log('Navigating to:', targetSection);
      navigateToSection(targetSection);
    });
  });
  
  // Hero CTA button
  const heroCta = document.querySelector('.hero__cta');
  if (heroCta) {
    heroCta.addEventListener('click', function() {
      navigateToSection('properties');
    });
  }
  
  // Logo click
  const logoLink = document.querySelector('.header__logo a');
  if (logoLink) {
    logoLink.addEventListener('click', function(e) {
      e.preventDefault();
      navigateToSection('main');
    });
  }
  
  // Property filters
  setupPropertyFilters();
  
  // FAQ functionality
  setupFaqFunctionality();
  
  // Forms
  setupForms();
  
  // Modal handling
  setupModalHandling();
  
  // Keyboard navigation
  document.addEventListener('keydown', handleKeyboardNavigation);
}

function setupPropertyFilters() {
  const regionFilter = document.getElementById('region-filter');
  const businessFilter = document.getElementById('business-filter');
  const priceFilter = document.getElementById('price-filter');
  const searchInput = document.getElementById('search-input');
  
  if (regionFilter) regionFilter.addEventListener('change', applyFilters);
  if (businessFilter) businessFilter.addEventListener('change', applyFilters);
  if (priceFilter) priceFilter.addEventListener('change', applyFilters);
  if (searchInput) searchInput.addEventListener('input', debounce(applyFilters, 300));
}

function setupFaqFunctionality() {
  // FAQ tabs
  const faqTabs = document.querySelectorAll('.faq__tab');
  faqTabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.dataset.category;
      handleFaqTabChange(category, this);
    });
  });
  
  // FAQ search
  const faqSearch = document.getElementById('faq-search');
  if (faqSearch) {
    faqSearch.addEventListener('input', debounce(filterFaqs, 300));
  }
}

function setupForms() {
  // Consultation form
  const consultationForm = document.querySelector('.consultation__form');
  if (consultationForm) {
    consultationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const inquiry = document.getElementById('inquiry').value;
      
      if (name && phone) {
        alert(`상담 신청이 완료되었습니다.\n이름: ${name}\n연락처: ${phone}\n빠른 시일 내에 연락드리겠습니다.`);
        this.reset();
        announceToScreenReader('상담 신청이 완료되었습니다');
      }
    });
  }
  
  // Add FAQ form
  const addFaqForm = document.getElementById('add-faq-form');
  if (addFaqForm) {
    addFaqForm.addEventListener('submit', handleAddFaqSubmit);
  }
  
  // Privacy radio buttons
  const privacyRadios = document.querySelectorAll('input[name="faq-privacy"]');
  privacyRadios.forEach(radio => {
    radio.addEventListener('change', togglePasswordField);
  });
  
  // Chatbot button
  const chatbotBtn = document.querySelector('.consultation__chatbot');
  if (chatbotBtn) {
    chatbotBtn.addEventListener('click', function() {
      alert('AI 챗봇 서비스가 곧 시작됩니다. 빠른 상담을 원하시면 상담 신청 양식을 이용해주세요.');
    });
  }
}

function setupAccessibility() {
  // Skip link functionality
  const skipLink = document.querySelector('.sr-only-focusable');
  if (skipLink) {
    skipLink.addEventListener('click', function(e) {
      e.preventDefault();
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView();
      }
    });
  }
  
  // Create ARIA live region for announcements
  createLiveRegion();
}

function createLiveRegion() {
  const liveRegion = document.createElement('div');
  liveRegion.id = 'live-region';
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  document.body.appendChild(liveRegion);
}

function announceToScreenReader(message) {
  const liveRegion = document.getElementById('live-region');
  if (liveRegion) {
    liveRegion.textContent = message;
    setTimeout(() => {
      liveRegion.textContent = '';
    }, 1000);
  }
}

function toggleMobileMenu() {
  const headerNav = document.querySelector('.header__nav');
  const mobileToggle = document.querySelector('.header__mobile-toggle');
  
  if (!headerNav || !mobileToggle) return;
  
  const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
  mobileToggle.setAttribute('aria-expanded', !isExpanded);
  mobileToggle.setAttribute('aria-label', isExpanded ? '메뉴 열기' : '메뉴 닫기');
  headerNav.classList.toggle('active');
  
  // Focus management
  if (!isExpanded) {
    const firstNavLink = headerNav.querySelector('.header__nav-link');
    if (firstNavLink) {
      firstNavLink.focus();
    }
  }
}

function navigateToSection(sectionId) {
  console.log('Navigating to section:', sectionId);
  
  // Update navigation state
  const navLinks = document.querySelectorAll('.header__nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
  });
  
  const activeLink = document.querySelector(`[href="#${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
    activeLink.setAttribute('aria-current', 'page');
  }
  
  // Show/hide sections
  const sections = document.querySelectorAll('.section, .hero');
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.classList.remove('hidden');
    } else if (section.id && section.id !== sectionId) {
      section.classList.add('hidden');
    } else if (!section.id && sectionId !== 'main') {
      section.classList.add('hidden');
    } else if (!section.id && sectionId === 'main') {
      section.classList.remove('hidden');
    }
  });
  
  // Special handling for main page - show all main sections
  if (sectionId === 'main') {
    const mainSections = document.querySelectorAll('.hero, .services, .strengths, .popular-properties, .reviews');
    mainSections.forEach(section => {
      section.classList.remove('hidden');
    });
  }
  
  // Scroll to top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Focus on section heading for accessibility
  setTimeout(() => {
    const targetSection = document.getElementById(sectionId) || document.querySelector('.hero');
    if (targetSection) {
      const heading = targetSection.querySelector('h2');
      if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus();
      }
    }
  }, 300);
  
  appState.currentSection = sectionId;
  announceToScreenReader(`${getSectionName(sectionId)} 섹션으로 이동했습니다`);
  
  // Close mobile menu if open
  const headerNav = document.querySelector('.header__nav');
  if (headerNav && headerNav.classList.contains('active')) {
    toggleMobileMenu();
  }
}

function getSectionName(sectionId) {
  const sectionNames = {
    'main': '회사소개',
    'properties': '창업물건',
    'faq': 'FAQ게시판'
  };
  return sectionNames[sectionId] || sectionId;
}

function renderServices() {
  const servicesGrid = document.querySelector('.services__grid');
  if (!servicesGrid) return;
  
  servicesGrid.innerHTML = appData.services.map(service => `
    <div class="service-card">
      <span class="service-card__icon" aria-hidden="true">${service.icon}</span>
      <h3 class="service-card__title">${service.title}</h3>
      <p class="service-card__description">${service.description}</p>
    </div>
  `).join('');
}

function renderPopularProperties() {
  const propertiesGrid = document.querySelector('.popular-properties .properties__grid');
  if (!propertiesGrid) return;
  
  // Show first 6 properties
  const popularProperties = appData.properties.slice(0, 6);
  propertiesGrid.innerHTML = popularProperties.map(property => createPropertyCard(property)).join('');
  
  // Add click handlers
  addPropertyCardHandlers(propertiesGrid);
}

function renderProperties() {
  const propertiesList = document.querySelector('.properties__list');
  if (!propertiesList) return;
  
  propertiesList.innerHTML = appState.filteredProperties.map(property => createPropertyCard(property)).join('');
  
  // Add click handlers
  addPropertyCardHandlers(propertiesList);
}

function addPropertyCardHandlers(container) {
  const propertyCards = container.querySelectorAll('.property-card');
  propertyCards.forEach(card => {
    // Remove any existing event listeners
    const newCard = card.cloneNode(true);
    card.parentNode.replaceChild(newCard, card);
    
    // Add click handler
    newCard.addEventListener('click', function(e) {
      e.preventDefault();
      const propertyId = parseInt(this.dataset.propertyId);
      console.log('Opening property modal for ID:', propertyId);
      openPropertyModal(propertyId);
    });
    
    // Add keyboard support
    newCard.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const propertyId = parseInt(this.dataset.propertyId);
        console.log('Opening property modal for ID (keyboard):', propertyId);
        openPropertyModal(propertyId);
      }
    });
  });
}

function createPropertyCard(property) {
  const statusClass = property.status === '매물' ? 'available' : 'contract';
  const statusText = property.status === '매물' ? '매물' : '계약중';
  
  return `
    <div class="property-card" 
         data-property-id="${property.id}" 
         tabindex="0" 
         role="button"
         aria-label="${property.title} 상세보기">
      <div class="property-card__image" role="img" aria-label="매물 이미지">
        <img src="${property.image}" alt="${property.title}" onload="this.style.display='block'" onerror="this.style.display='none'">
        <span class="placeholder-text">이미지 로딩중...</span>
      </div>
      <div class="property-card__content">
        <h3 class="property-card__title">${property.title}</h3>
        <p class="property-card__location">${property.location}</p>
        <div class="property-card__details">
          <div class="property-card__price">${property.price}</div>
          <div class="property-card__area">${property.area}</div>
          <div class="property-card__deposit">${property.deposit}</div>
          <div class="property-card__key-money">${property.keyMoney}</div>
        </div>
        <span class="property-card__status property-card__status--${statusClass}">
          ${statusText}
        </span>
      </div>
    </div>
  `;
}

function renderReviews() {
  const reviewsGrid = document.querySelector('.reviews__grid');
  if (!reviewsGrid) return;
  
  reviewsGrid.innerHTML = appData.reviews.map(review => `
    <div class="review-card">
      <div class="review-card__header">
        <div>
          <div class="review-card__author">${review.name}</div>
          <div class="review-card__business">${review.business}</div>
        </div>
        <div class="review-card__rating" aria-label="${review.rating}점 평가">
          ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
        </div>
      </div>
      <p class="review-card__content">${review.content}</p>
    </div>
  `).join('');
}

// Global function for filters (called from HTML)
window.applyFilters = function() {
  console.log('Applying filters');
  const regionFilter = document.getElementById('region-filter');
  const businessFilter = document.getElementById('business-filter');
  const priceFilter = document.getElementById('price-filter');
  const searchInput = document.getElementById('search-input');
  
  if (!regionFilter || !businessFilter || !priceFilter || !searchInput) return;
  
  const regionValue = regionFilter.value;
  const businessValue = businessFilter.value;
  const priceValue = priceFilter.value;
  const searchValue = searchInput.value.toLowerCase();
  
  appState.filteredProperties = appData.properties.filter(property => {
    const matchesRegion = !regionValue || property.location.includes(regionValue);
    const matchesBusiness = !businessValue || property.recommendedBusiness.includes(businessValue);
    const matchesPrice = !priceValue || checkPriceRange(property.price, priceValue);
    const matchesSearch = !searchValue || 
      property.title.toLowerCase().includes(searchValue) ||
      property.location.toLowerCase().includes(searchValue);
    
    return matchesRegion && matchesBusiness && matchesPrice && matchesSearch;
  });
  
  renderProperties();
  announceToScreenReader(`${appState.filteredProperties.length}개의 매물이 검색되었습니다`);
};

function checkPriceRange(price, range) {
  const priceNumber = parseInt(price.replace(/[^0-9]/g, ''));
  
  switch(range) {
    case '300만원 이하':
      return priceNumber <= 300;
    case '300-500만원':
      return priceNumber > 300 && priceNumber <= 500;
    case '500만원 이상':
      return priceNumber > 500;
    default:
      return true;
  }
}

function renderFaqs() {
  const faqList = document.querySelector('.faq__list');
  if (!faqList) return;
  
  faqList.innerHTML = appState.filteredFaqs.map(faq => `
    <div class="faq-item" 
         data-faq-id="${faq.id}" 
         tabindex="0" 
         role="button"
         aria-label="${faq.title} FAQ 보기">
      <div class="faq-item__header">
        ${faq.isPrivate ? '<span class="faq-item__privacy" aria-label="비공개 게시물">🔒</span>' : ''}
        <h3 class="faq-item__title">${faq.title}</h3>
        <span class="faq-item__category">${faq.category}</span>
      </div>
    </div>
  `).join('');
  
  // Add click handlers
  const faqItems = faqList.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const faqId = parseInt(this.dataset.faqId);
      console.log('Opening FAQ modal for ID:', faqId);
      openFaqModal(faqId);
    });
    
    // Add keyboard support
    item.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const faqId = parseInt(this.dataset.faqId);
        console.log('Opening FAQ modal for ID (keyboard):', faqId);
        openFaqModal(faqId);
      }
    });
  });
}

function handleFaqTabChange(category, tabElement) {
  console.log('Changing FAQ tab to:', category);
  
  // Update tab states
  document.querySelectorAll('.faq__tab').forEach(tab => {
    tab.classList.remove('active');
    tab.setAttribute('aria-selected', 'false');
  });
  
  tabElement.classList.add('active');
  tabElement.setAttribute('aria-selected', 'true');
  
  // Filter FAQs
  appState.currentFaqCategory = category;
  filterFaqs();
}

function filterFaqs() {
  const faqSearch = document.getElementById('faq-search');
  const searchTerm = faqSearch ? faqSearch.value.toLowerCase() : '';
  
  appState.filteredFaqs = appData.faqs.filter(faq => {
    const matchesCategory = !appState.currentFaqCategory || faq.category === appState.currentFaqCategory;
    const matchesSearch = !searchTerm || 
      faq.title.toLowerCase().includes(searchTerm) ||
      faq.question.toLowerCase().includes(searchTerm);
    
    return matchesCategory && matchesSearch;
  });
  
  renderFaqs();
  announceToScreenReader(`${appState.filteredFaqs.length}개의 FAQ가 검색되었습니다`);
}

function openPropertyModal(propertyId) {
  console.log('Opening property modal for:', propertyId);
  const property = appData.properties.find(p => p.id === propertyId);
  if (!property) {
    console.error('Property not found:', propertyId);
    return;
  }
  
  const modal = document.getElementById('property-modal');
  const title = document.getElementById('property-modal-title');
  const body = modal.querySelector('.modal__body');
  
  if (!modal || !title || !body) {
    console.error('Modal elements not found');
    return;
  }
  
  title.textContent = property.title;
  
  body.innerHTML = `
    <div class="property-modal__image" role="img" aria-label="매물 이미지">
      <img src="${property.image}" alt="${property.title}" onload="this.style.display='block';this.nextElementSibling.style.display='none'" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <span class="placeholder-text">이미지 로딩중...</span>
    </div>
    <div class="property-modal__details">
      <div class="property-modal__detail">
        <div class="property-modal__detail-label">위치</div>
        <div class="property-modal__detail-value">${property.location}</div>
      </div>
      <div class="property-modal__detail">
        <div class="property-modal__detail-label">월임대료</div>
        <div class="property-modal__detail-value">${property.price}</div>
      </div>
      <div class="property-modal__detail">
        <div class="property-modal__detail-label">보증금</div>
        <div class="property-modal__detail-value">${property.deposit}</div>
      </div>
      <div class="property-modal__detail">
        <div class="property-modal__detail-label">면적</div>
        <div class="property-modal__detail-value">${property.area}</div>
      </div>
      <div class="property-modal__detail">
        <div class="property-modal__detail-label">권리금</div>
        <div class="property-modal__detail-value">${property.keyMoney}</div>
      </div>
      <div class="property-modal__detail">
        <div class="property-modal__detail-label">추천업종</div>
        <div class="property-modal__detail-value">${property.recommendedBusiness}</div>
      </div>
    </div>
    <div class="property-modal__description">
      <h4>매물 설명</h4>
      <p>${property.detailedDescription || property.description}</p>
    </div>
    <!-- 상세 문의 페이지 버튼 삭제
    <div class="property-modal__actions">
      <button class="btn btn--primary" onclick="requestAiRecommendation(${property.id})">
        AI 추천 받기
      </button>
      <button class="btn btn--secondary" onclick="requestLegalSupport(${property.id})">
        법률지원 문의
      </button>
      <button class="btn btn--outline" onclick="openInquiryForm(${property.id})">
        매물 문의
      </button>
      -->
    </div>
  `;
  
  showModal('property-modal');
}

function openFaqModal(faqId) {
  console.log('Opening FAQ modal for:', faqId);
  const faq = appData.faqs.find(f => f.id === faqId);
  if (!faq) {
    console.error('FAQ not found:', faqId);
    return;
  }
  
  const modal = document.getElementById('faq-modal');
  const title = document.getElementById('faq-modal-title');
  const body = modal.querySelector('.modal__body');
  
  if (!modal || !title || !body) {
    console.error('Modal elements not found');
    return;
  }
  
  title.textContent = faq.title;
  
  if (faq.isPrivate) {
    body.innerHTML = `
      <div class="faq-password-form">
        <h4>비공개 게시물입니다</h4>
        <p>비밀번호를 입력해주세요.</p>
        <form onsubmit="verifyFaqPassword(event, ${faq.id})">
          <div class="form-group">
            <label for="faq-password-input" class="form-label">비밀번호</label>
            <input type="password" id="faq-password-input" class="form-control" required>
          </div>
          <button type="submit" class="btn btn--primary">확인</button>
        </form>
      </div>
    `;
  } else {
    showFaqContent(faq);
  }
  
  showModal('faq-modal');
}

// Global functions (called from HTML)
window.verifyFaqPassword = function(event, faqId) {
  event.preventDefault();
  
  const faq = appData.faqs.find(f => f.id === faqId);
  const passwordInput = document.getElementById('faq-password-input');
  const enteredPassword = passwordInput.value;
  
  if (enteredPassword === faq.password) {
    showFaqContent(faq);
    announceToScreenReader('비밀번호가 확인되었습니다');
  } else {
    alert('비밀번호가 일치하지 않습니다.');
    passwordInput.focus();
  }
};

function showFaqContent(faq) {
  const body = document.querySelector('#faq-modal .modal__body');
  
  const answer = faq.detailedAnswer || faq.answer;
  const formattedAnswer = answer.replace(/\n/g, '<br>');
  
  body.innerHTML = `
    <div class="faq-content__question">
      <h4>질문</h4>
      <p>${faq.question}</p>
    </div>
    <div class="faq-content__answer">
      <h4>답변</h4>
      <p>${formattedAnswer}</p>
    </div>
  `;
}

// Global function for opening Add FAQ modal
window.openAddFaqModal = function() {
  showModal('add-faq-modal');
  
  // Focus on first input
  setTimeout(() => {
    const firstInput = document.getElementById('faq-category');
    if (firstInput) {
      firstInput.focus();
    }
  }, 100);
};

function togglePasswordField() {
  const privateRadio = document.querySelector('input[name="faq-privacy"][value="private"]');
  const passwordGroup = document.getElementById('password-group');
  
  if (privateRadio && privateRadio.checked) {
    passwordGroup.style.display = 'block';
    const passwordInput = document.getElementById('faq-password');
    if (passwordInput) passwordInput.required = true;
  } else {
    passwordGroup.style.display = 'none';
    const passwordInput = document.getElementById('faq-password');
    if (passwordInput) passwordInput.required = false;
  }
}

function handleAddFaqSubmit(e) {
  e.preventDefault();
  
  const category = document.getElementById('faq-category').value;
  const title = document.getElementById('faq-title').value;
  const question = document.getElementById('faq-question').value;
  const isPrivate = document.querySelector('input[name="faq-privacy"]:checked').value === 'private';
  const password = isPrivate ? document.getElementById('faq-password').value : null;
  
  const newFaq = {
    id: appData.faqs.length + 1,
    category: category,
    title: title,
    question: question,
    isPrivate: isPrivate,
    password: password,
    answer: '답변 대기중입니다. 빠른 시일 내에 답변드리겠습니다.'
  };
  
  appData.faqs.push(newFaq);
  appState.filteredFaqs = appData.faqs;
  
  renderFaqs();
  closeModal('add-faq-modal');
  
  // Reset form
  e.target.reset();
  togglePasswordField();
  
  announceToScreenReader('새 FAQ가 등록되었습니다');
  alert('FAQ가 성공적으로 등록되었습니다.');
}

function setupModalHandling() {
  // Close modal when clicking overlay or close button
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal__overlay') || e.target.classList.contains('modal__close')) {
      const modal = e.target.closest('.modal');
      if (modal) {
        closeModal(modal.id);
      }
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal:not(.hidden)');
      if (openModal) {
        closeModal(openModal.id);
      }
    }
  });
}

function showModal(modalId) {
  console.log('Showing modal:', modalId);
  const modal = document.getElementById(modalId);
  if (!modal) {
    console.error('Modal not found:', modalId);
    return;
  }
  
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  
  // Focus management
  setTimeout(() => {
    const focusableElements = modal.querySelectorAll('button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  }, 100);
  
  // Trap focus within modal
  trapFocus(modal);
}

// Global function for closing modals
window.closeModal = function(modalId) {
  console.log('Closing modal:', modalId);
  const modal = document.getElementById(modalId);
  if (!modal) return;
  
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  
  // Return focus to trigger element if available
  const activeElement = document.activeElement;
  if (activeElement && activeElement.blur) {
    activeElement.blur();
  }
};

function trapFocus(modal) {
  const focusableElements = modal.querySelectorAll('button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  const trapHandler = function(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };
  
  modal.addEventListener('keydown', trapHandler);
  
  // Remove event listener when modal is closed
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'class' && modal.classList.contains('hidden')) {
        modal.removeEventListener('keydown', trapHandler);
        observer.disconnect();
      }
    });
  });
  
  observer.observe(modal, { attributes: true });
}

function handleKeyboardNavigation(e) {
  // Handle arrow key navigation for property cards and FAQ items
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    const activeElement = document.activeElement;
    
    if (activeElement.classList.contains('property-card') || activeElement.classList.contains('faq-item')) {
      e.preventDefault();
      
      const container = activeElement.closest('.properties__grid, .properties__list, .faq__list');
      const items = container.querySelectorAll('.property-card, .faq-item');
      const currentIndex = Array.from(items).indexOf(activeElement);
      
      let nextIndex;
      if (e.key === 'ArrowDown') {
        nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      } else {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      }
      
      items[nextIndex].focus();
    }
  }
}

// 성향 분석 페이지로 이동하는 함수
function goToAnalysis() {
  // 실제로는 성향분석 앱이나 페이지로 연결
  alert('성향 분석 서비스로 이동합니다.');
  
  // 예시: 외부 앱으로 연결
  window.open('https://foundtogether.netlify.app/', '_blank');
  
  // 또는 내부 페이지로 이동
  // navigateToPage('analysis');
}


// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Global property action functions
window.requestAiRecommendation = function(propertyId) {
  alert('AI 분석을 시작합니다. 개인 성향 분석 후 맞춤 추천을 제공해드리겠습니다.');
  closeModal('property-modal');
};

window.requestLegalSupport = function(propertyId) {
  alert('법무법인 성안과 연결해드리겠습니다. 계약서 작성 및 법률 상담을 받으실 수 있습니다.');
  closeModal('property-modal');
};

window.openInquiryForm = function(propertyId) {
  alert('매물 문의 폼으로 이동합니다. 담당자가 빠르게 연락드리겠습니다.');
  closeModal('property-modal');
};

// Global navigation function
window.navigateToSection = navigateToSection;