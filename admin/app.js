// 올인원 점포·창업 플랫폼 관리자 웹사이트 JavaScript

// 전역 상태 관리
const AppState = {
    currentPage: 'dashboard',
    currentItemId: null,
    isInitialized: false,
    isLoggedIn: false,
    editors: {},
    data: {
        properties: [
            {
                id: 1,
                title: "홍대입구역 인근 음식점",
                location: "서울 마포구 홍대입구역",
                monthlyRevenue: 300,
                monthlyProfit: 5000,
                startupCost: 1500,
                status: "매물",
                businessType: "한식, 카페, 치킨",
                description: "홍대 핫플레이스 위치, 유동인구 많음",
                image: "/api/placeholder/150/100",
                createdAt: "2025-08-30",
                updatedAt: "2025-09-01"
            },
            {
                id: 2,
                title: "강남역 오피스텔 상가",
                location: "서울 강남구 강남역",
                monthlyRevenue: 500,
                monthlyProfit: 10000,
                startupCost: 3000,
                status: "계약중",
                businessType: "카페, 의료업, 서비스업",
                description: "강남 핵심상권, 직장인 타겟 최적",
                image: "/api/placeholder/150/100",
                createdAt: "2025-08-28",
                updatedAt: "2025-08-31"
            },
            {
                id: 3,
                title: "신촌 대학가 매장",
                location: "서울 서대문구 신촌",
                monthlyRevenue: 250,
                monthlyProfit: 3000,
                startupCost: 800,
                status: "매물",
                businessType: "치킨, 카페, 분식",
                description: "대학생 고객층, 접근성 우수",
                image: "/api/placeholder/150/100",
                createdAt: "2025-08-25",
                updatedAt: "2025-08-30"
            },
            {
                id: 4,
                title: "이태원 글로벌 매장",
                location: "서울 용산구 이태원",
                monthlyRevenue: 400,
                monthlyProfit: 8000,
                startupCost: 2000,
                status: "매물",
                businessType: "레스토랑, 바, 카페",
                description: "외국인 관광객 다수, 야간영업 유리",
                image: "/api/placeholder/150/100",
                createdAt: "2025-08-20",
                updatedAt: "2025-08-25"
            },
            {
                id: 5,
                title: "건대입구 상권",
                location: "서울 광진구 건대입구",
                monthlyRevenue: 280,
                monthlyProfit: 4000,
                startupCost: 1200,
                status: "계약완료",
                businessType: "치킨, 피자, 분식",
                description: "대학생 밀집지역, 배달 주문 많음",
                image: "/api/placeholder/150/100",
                createdAt: "2025-08-15",
                updatedAt: "2025-08-20"
            }
        ],
        faqs: [
            {
                id: 1,
                title: "권리금 산정 방법이 궁금합니다",
                category: "매매",
                isPrivate: true,
                password: "1234",
                question: "권리금을 어떻게 산정하나요?",
                answer: "권리금은 입지가치, 시설가치, 영업가치를 종합하여 산정됩니다.",
                isFixed: false,
                views: 245,
                createdAt: "2025-08-20",
                updatedAt: "2025-08-28"
            },
            {
                id: 2,
                title: "AI 성향분석은 어떻게 작동하나요?",
                category: "창업",
                isPrivate: false,
                question: "AI 성향분석 서비스에 대해 알고 싶습니다.",
                answer: "예비창업자의 투자성향, 관심업종 등을 분석합니다.",
                isFixed: true,
                views: 189,
                createdAt: "2025-08-18",
                updatedAt: "2025-08-25"
            },
            {
                id: 3,
                title: "창업 컨설팅 절차는 어떻게 되나요?",
                category: "창업",
                isPrivate: false,
                question: "창업 컨설팅을 받고 싶습니다.",
                answer: "1단계: 상담신청, 2단계: 현황분석, 3단계: 맞춤 솔루션 제공",
                isFixed: false,
                views: 156,
                createdAt: "2025-08-15",
                updatedAt: "2025-08-22"
            },
            {
                id: 4,
                title: "임대차 계약 시 주의사항",
                category: "법률",
                isPrivate: false,
                question: "임대차 계약할 때 주의할 점은?",
                answer: "권리금 보호, 원상복구 조건, 계약갱신 조건 등을 꼼꼼히 확인하세요.",
                isFixed: true,
                views: 312,
                createdAt: "2025-08-10",
                updatedAt: "2025-08-18"
            },
            {
                id: 5,
                title: "매물 등록 방법",
                category: "매매",
                isPrivate: false,
                question: "매물을 등록하려면 어떻게 해야 하나요?",
                answer: "홈페이지 매물등록 메뉴에서 필요 정보를 입력하시면 됩니다.",
                isFixed: false,
                views: 98,
                createdAt: "2025-08-05",
                updatedAt: "2025-08-15"
            }
        ],
        inquiries: [
            {
                id: 1,
                name: "김철수",
                phone: "010-1234-5678",
                content: "홍대 매물에 대해 상세한 정보를 알고 싶습니다. 권리금 협상이 가능한지 궁금합니다.",
                status: "신규",
                answer: "",
                memo: "",
                createdAt: "2025-09-01"
            },
            {
                id: 2,
                name: "이영희",
                phone: "010-9876-5432",
                content: "카페 창업을 준비 중입니다. 상권분석 서비스에 대해 문의드립니다.",
                status: "진행중",
                answer: "안녕하세요. 상권분석 서비스에 대해 안내드리겠습니다.",
                memo: "카페 창업 희망, 홍대/신촌 지역 관심",
                createdAt: "2025-08-30"
            },
            {
                id: 3,
                name: "박민수",
                phone: "010-5555-1111",
                content: "프랜차이즈 창업에 관심있습니다. 추천 업종이 있나요?",
                status: "완료",
                answer: "현재 시장 트렌드를 고려할 때 건강식품, 펜케이크 전문점 등이 유망합니다.",
                memo: "프랜차이즈 창업 관심, 투자금 5000만원 내외",
                createdAt: "2025-08-28"
            },
            {
                id: 4,
                name: "정수현",
                phone: "010-7777-2222",
                content: "강남 지역 매물 문의드립니다. 임대료 협상 여지가 있을까요?",
                status: "신규",
                answer: "",
                memo: "",
                createdAt: "2025-08-27"
            },
            {
                id: 5,
                name: "최준호",
                phone: "010-3333-4444",
                content: "법률 자문이 필요합니다. 권리금 관련 분쟁이 있어서요.",
                status: "진행중",
                answer: "법무팀에서 검토 후 연락드리겠습니다.",
                memo: "권리금 분쟁, 법률자문 필요",
                createdAt: "2025-08-25"
            }
        ],
        stats: {
            newInquiries: 12,
            activeFaqs: 45,
            monthlyVisitors: 2847,
            totalProperties: 156
        },
        partners: [],
        siteSettings: {
            heroTitle: "올인원 점포·창업 플랫폼",
            heroSubtitle: "성공적인 창업을 위한 완벽한 솔루션",
            heroImage: "",
            companyAddress: "",
            companyCeo: "",
            companyLicense: "",
            privacyOfficer: "",
            lawFirm: "",
            csPhone: "",
            csEmail: "",
            csHours: ""
        },
        businessCategories: {
            "휴게점": ["중형커피점", "대형커피점", "테이크아웃", "아이스크림", "기타", "제과점"],
            "음식점": ["김밥전문점", "일식", "패스트푸드", "일반식당", "분식점", "한식", "기타", "레스토랑", "고기전문점"],
            "주류점": ["일반주점", "치킨호프", "이자까야", "맥주전문점", "기타", "와인바", "Bar", "단란주점", "유흥주점", "노래주점"],
            "판매·서비스": ["판매점", "쥬얼리", "화장품", "편의점", "패션잡화", "유명의류", "판매기타", "미용실", "피부관리", "세차장", "서비스기타"],
            "오락·스포츠": ["스크린골프", "노래방", "당구장", "PC방", "휘트니스", "기타"],
            "특수상권": ["대형건물", "대형마트", "백화점", "영화관", "대형쇼핑몰", "기타"],
            "무점포·기타": ["공실", "기타"]
        }
    },
    filters: {
        properties: { region: '', business: '', status: '', search: '' },
        faqs: { category: '', status: '', search: '' },
        inquiries: { status: 'all' }
    },
    pagination: {
        properties: { current: 1, size: 10 },
        faqs: { current: 1, size: 10 },
        inquiries: { current: 1, size: 10 }
    }
};

function showLogin(options = {}) {
    const { skipHistory = false, replaceState = false } = options;
    const loginContainer = document.getElementById('admin-login');
    const adminLayout = document.querySelector('.admin-layout');
    if (!loginContainer || !adminLayout) {
        return;
    }

    loginContainer.classList.remove('is-hidden');
    adminLayout.classList.add('is-hidden');

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.reset();
        const firstInput = loginForm.querySelector('input');
        if (firstInput) {
            firstInput.focus();
        }
    }

    AppState.isLoggedIn = false;

    if (window.history && window.history.pushState) {
        const state = { scope: 'admin', page: 'login' };
        const url = '#login';

        if (replaceState) {
            window.history.replaceState(state, '', url);
        } else if (!skipHistory) {
            window.history.pushState(state, '', url);
        }
    }
}

function handleLogout() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (sidebar) {
        sidebar.classList.remove('open');
    }
    if (overlay) {
        overlay.classList.remove('show');
    }

    AppState.currentPage = 'dashboard';
    showLogin();
}

// DOM이 로드되면 초기화
document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('admin-login');
    const loginForm = document.getElementById('login-form');
    const adminLayout = document.querySelector('.admin-layout');

    if (loginContainer && loginForm && adminLayout) {
        showLogin({ replaceState: true });

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            AppState.isLoggedIn = true;
            loginContainer.classList.add('is-hidden');
            adminLayout.classList.remove('is-hidden');

            if (!AppState.isInitialized) {
                initializeApp();
            }

            navigateToPage('dashboard');
        });
    } else {
        AppState.isLoggedIn = true;

        if (!AppState.isInitialized) {
            initializeApp();
        }

        navigateToPage(AppState.currentPage, null, { skipHistory: true, replaceState: true });
    }
});

window.addEventListener('popstate', handleAdminPopState);

// 앱 초기화
function initializeApp() {
    if (AppState.isInitialized) {
        return;
    }

    AppState.isInitialized = true;
    setupEventListeners();
    renderDashboard();
    initializePartnersSection();
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 네비게이션 메뉴
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            navigateToPage(page);
        });
    });

    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }

    // 사이드바 토글
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');

            // 오버레이 생성/토글
            let overlay = document.querySelector('.sidebar-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'sidebar-overlay';
                document.body.appendChild(overlay);

                overlay.addEventListener('click', function() {
                    sidebar.classList.remove('open');
                    overlay.classList.remove('show');
                });
            }

            overlay.classList.toggle('show', sidebar.classList.contains('open'));
        });
    }

    // 폼 이벤트
    setupFormEventListeners();
}


// 폼 이벤트 리스너
function setupFormEventListeners() {
    // 히어로 섹션 폼
    const heroForm = document.getElementById('hero-form');
    if (heroForm) {
        heroForm.addEventListener('submit', handleHeroFormSubmit);
    }

    // 사이트 설정 폼
    const siteSettingsForm = document.getElementById('site-settings-form');
    if (siteSettingsForm) {
        siteSettingsForm.addEventListener('submit', handleSiteSettingsSubmit);
    }

    // 매물 폼
    const propertyForm = document.getElementById('property-form');
    if (propertyForm) {
        propertyForm.addEventListener('submit', handlePropertyFormSubmit);
    }

    // FAQ 폼
    const faqForm = document.getElementById('faq-form');
    if (faqForm) {
        faqForm.addEventListener('submit', handleFaqFormSubmit);
    }

    // FAQ 비공개 설정
    document.querySelectorAll('input[name="faq-privacy"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const passwordGroup = document.getElementById('faq-password-group');
            if (passwordGroup) {
                passwordGroup.style.display = this.value === 'private' ? 'block' : 'none';
            }
        });
    });

    // 문의 답변 폼
    const inquiryForm = document.getElementById('inquiry-response-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', handleInquiryResponseSubmit);
    }

    // 문의 상태별 탭
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            AppState.filters.inquiries.status = this.dataset.status;
            AppState.pagination.inquiries.current = 1;
            renderInquiriesTable();
        });
    });

    // 파일 업로드
    setupFileUploads();

    // 업종 선택
    const categorySelect = document.getElementById('property-category');
    if (categorySelect) {
        categorySelect.addEventListener('change', handleCategoryChange);
    }
}

function handleCategoryChange(e) {
    const category = e.target.value;
    const subcategorySelect = document.getElementById('property-subcategory');
    
    if (!subcategorySelect) return;

    subcategorySelect.innerHTML = '<option value="">상세 업종을 선택하세요</option>';

    if (category && AppState.data.businessCategories[category]) {
        const subcategories = AppState.data.businessCategories[category];
        subcategories.forEach(subcategory => {
            const option = document.createElement('option');
            option.value = subcategory;
            option.textContent = subcategory;
            subcategorySelect.appendChild(option);
        });
    }
}

// 페이지 네비게이션 (수정됨)
function navigateToPage(page, action = null, options = {}) {
    const { skipHistory = false, replaceState = false } = options;
    console.log('Navigating to:', page, 'Action:', action);

    const loginContainer = document.getElementById('admin-login');
    const adminLayout = document.querySelector('.admin-layout');
    if (loginContainer && adminLayout) {
        loginContainer.classList.add('is-hidden');
        adminLayout.classList.remove('is-hidden');
    }
    AppState.isLoggedIn = true;

    // 페이지 콘텐츠 비활성화
    document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    // 현재 페이지 상태 업데이트
    AppState.currentPage = page;

    // 네비게이션 링크 활성화
    const navLink = document.querySelector(`[data-page="${page}"]`);
    if (navLink) navLink.classList.add('active');

    // 렌더링 대상 페이지
    let targetPage = page;

    // 특수한 액션 처리
    if (action === 'add') {
        if (page === 'properties') {
            targetPage = 'property-form';
            AppState.currentItemId = null;
        } else if (page === 'faqs') {
            targetPage = 'faq-form';
            AppState.currentItemId = null;
        }
    }

    // 페이지 표시
    const pageElement = document.getElementById(`page-${targetPage}`);
    if (pageElement) {
        pageElement.classList.add('active');
        console.log('Page activated:', targetPage);
    } else {
        console.error('Page not found:', targetPage);
    }

    // 페이지별 렌더링
    switch (page) {
        case 'dashboard':
            renderDashboard();
            break;
        case 'main-settings':
            renderMainSettings();
            break;
        case 'properties':
            if (action === 'add') {
                renderPropertyForm();
            } else {
                renderPropertiesPage();
            }
            break;
        case 'faqs':
            if (action === 'add') {
                renderFaqForm();
            } else {
                renderFaqsPage();
            }
            break;
        case 'inquiries':
            renderInquiriesPage();
            break;
    }

    if (window.history && window.history.pushState) {
        const state = { scope: 'admin', page, action: action || null };
        const url = action ? `#${page}:${action}` : `#${page}`;

        if (replaceState) {
            window.history.replaceState(state, '', url);
        } else if (!skipHistory) {
            window.history.pushState(state, '', url);
        }
    }
}

function handleAdminPopState(event) {
    const state = event.state;
    if (!state || state.scope !== 'admin') {
        return;
    }

    if (state.page === 'login') {
        showLogin({ skipHistory: true });
        return;
    }

    if (!AppState.isLoggedIn) {
        showLogin({ skipHistory: true, replaceState: true });
        return;
    }

    if (!AppState.isInitialized) {
        initializeApp();
    }

    const loginContainer = document.getElementById('admin-login');
    const adminLayout = document.querySelector('.admin-layout');
    if (loginContainer && adminLayout) {
        loginContainer.classList.add('is-hidden');
        adminLayout.classList.remove('is-hidden');
    }

    navigateToPage(state.page, state.action || null, { skipHistory: true });
}

// 대시보드 렌더링
function renderDashboard() {
    const { stats } = AppState.data;
    
    // 통계 업데이트
    const statElements = {
        'stat-inquiries': stats.newInquiries,
        'stat-faqs': stats.activeFaqs,
        'stat-visitors': stats.monthlyVisitors,
        'stat-properties': stats.totalProperties
    };

    Object.keys(statElements).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = statElements[id].toLocaleString();
        }
    });

    // 최근 활동 피드
    renderRecentProperties();
    renderPendingInquiries();
    renderRecentFaqs();
}

// 최근 매물 렌더링
function renderRecentProperties() {
    const container = document.getElementById('recent-properties');
    if (!container) return;
    
    const recent = AppState.data.properties
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5);

    container.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>제목</th>
                    <th>위치</th>
                    <th>등록일</th>
                </tr>
            </thead>
            <tbody>
                ${recent.map(item => `
                    <tr>
                        <td>${item.title}</td>
                        <td>${item.location}</td>
                        <td>${item.createdAt}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// 대기 문의 렌더링
function renderPendingInquiries() {
    const container = document.getElementById('pending-inquiries');
    if (!container) return;
    
    const pending = AppState.data.inquiries
        .filter(item => item.status === '신규')
        .slice(0, 5);

    container.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>문의자</th>
                    <th>내용</th>
                    <th>등록일</th>
                </tr>
            </thead>
            <tbody>
                ${pending.map(item => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.content.substring(0, 20)}...</td>
                        <td>${item.createdAt}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// 최근 FAQ 렌더링
function renderRecentFaqs() {
    const container = document.getElementById('recent-faqs');
    if (!container) return;
    
    const recent = AppState.data.faqs
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        .slice(0, 5);

    container.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>제목</th>
                    <th>카테고리</th>
                    <th>수정일</th>
                </tr>
            </thead>
            <tbody>
                ${recent.map(item => `
                    <tr>
                        <td>${item.title}</td>
                        <td>${item.category}</td>
                        <td>${item.updatedAt}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// 메인 설정 렌더링
function renderMainSettings() {
    const settings = AppState.data.siteSettings;
    
    // 폼 필드 채우기
    const fields = {
        'hero-title': settings.heroTitle,
        'hero-subtitle': settings.heroSubtitle,
        'company-address': settings.companyAddress,
        'company-ceo': settings.companyCeo,
        'company-license': settings.companyLicense,
        'privacy-officer': settings.privacyOfficer,
        'law-firm': settings.lawFirm,
        'cs-phone': settings.csPhone,
        'cs-email': settings.csEmail,
        'cs-hours': settings.csHours
    };

    Object.keys(fields).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.value = fields[id];
        }
    });

    renderPartnersSection();
}

// 파트너 섹션 초기화
function initializePartnersSection() {
    const container = document.getElementById('partners-list');
    if (!container) return;

    // 기본 5개 빈 로우 생성
    for (let i = 0; i < 5; i++) {
        addPartnerRow();
    }
}

// 파트너 로우 추가
function addPartnerRow() {
    const container = document.getElementById('partners-list');
    if (!container) return;

    const index = container.children.length + 1;
    const row = document.createElement('div');
    row.className = 'partner-row';
    row.innerHTML = `
        <div class="partner-order">${index}</div>
        <div class="partner-thumbnail">
            <i class="fas fa-image"></i>
        </div>
        <input type="text" class="form-control" placeholder="파일명" readonly>
        <button type="button" class="btn btn--outline btn--sm partner-upload-btn">
            <i class="fas fa-upload"></i> 업로드
        </button>
        <button type="button" class="btn btn--warning btn--sm" onclick="removePartnerRow(this)">
            <i class="fas fa-trash"></i>
        </button>
        <input type="file" accept="image/*" style="display: none;">
    `;

    // 업로드 버튼 이벤트
    const uploadBtn = row.querySelector('.partner-upload-btn');
    const fileInput = row.querySelector('input[type="file"]');
    const thumbnail = row.querySelector('.partner-thumbnail');
    const filename = row.querySelector('input[type="text"]');

    uploadBtn.addEventListener('click', () => fileInput.click());
    
    fileInput.addEventListener('change', function() {
        if (this.files[0]) {
            const file = this.files[0];
            filename.value = file.name;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                thumbnail.innerHTML = `<img src="${e.target.result}" alt="파트너 로고">`;
            };
            reader.readAsDataURL(file);
        }
    });

    container.appendChild(row);
}

// 파트너 로우 제거
function removePartnerRow(button) {
    const row = button.closest('.partner-row');
    row.remove();
    
    // 순서 재정렬
    const container = document.getElementById('partners-list');
    const rows = container.querySelectorAll('.partner-row');
    rows.forEach((row, index) => {
        row.querySelector('.partner-order').textContent = index + 1;
    });
}

// 파트너 섹션 렌더링
function renderPartnersSection() {
    // 이미 초기화되어 있으므로 별도 처리 불요
}

// 매물 관리 페이지 렌더링
function renderPropertiesPage() {
    setupPropertyFilters();
    renderPropertiesTable();
}

// 매물 필터 설정
function setupPropertyFilters() {
    const filters = ['property-region-filter', 'property-business-filter', 'property-status-filter'];
    const searchInput = document.getElementById('property-search');

    filters.forEach((filterId, index) => {
        const filter = document.getElementById(filterId);
        if (filter) {
            filter.addEventListener('change', function() {
                const keys = ['region', 'business', 'status'];
                AppState.filters.properties[keys[index]] = this.value;
                AppState.pagination.properties.current = 1;
                renderPropertiesTable();
            });
        }
    });

    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                AppState.filters.properties.search = this.value;
                AppState.pagination.properties.current = 1;
                renderPropertiesTable();
            }, 300);
        });
    }
}

// 매물 테이블 렌더링
function renderPropertiesTable() {
    const container = document.getElementById('properties-table');
    if (!container) return;

    const { properties } = AppState.data;
    const { filters, pagination } = AppState;
    
    // 필터링
    let filtered = properties.filter(item => {
        return (
            (!filters.properties.region || item.location.includes(filters.properties.region)) &&
            (!filters.properties.business || item.businessType.includes(filters.properties.business)) &&
            (!filters.properties.status || item.status === filters.properties.status) &&
            (!filters.properties.search || 
                item.title.toLowerCase().includes(filters.properties.search.toLowerCase()) ||
                item.location.toLowerCase().includes(filters.properties.search.toLowerCase()))
        );
    });

    // 정렬 (수정일 > 등록일)
    filtered.sort((a, b) => {
        const aDate = new Date(a.updatedAt);
        const bDate = new Date(b.updatedAt);
        if (aDate.getTime() !== bDate.getTime()) {
            return bDate - aDate;
        }
        return new Date(b.createdAt) - new Date(a.createdAt);
    });

    // 페이지네이션
    const { current, size } = pagination.properties;
    const total = filtered.length;
    const totalPages = Math.ceil(total / size);
    const start = (current - 1) * size;
    const end = start + size;
    const pageData = filtered.slice(start, end);

    // 테이블 렌더링
    container.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th><input type="checkbox" id="select-all-properties"></th>
                    <th>썸네일</th>
                    <th>제목</th>
                    <th>위치</th>
                    <th>월 매출</th>
                    <th>월 순이익</th>
                    <th>상태</th>
                    <th>등록일</th>
                    <th>액션</th>
                </tr>
            </thead>
            <tbody>
                ${pageData.map(item => `
                    <tr>
                        <td class="checkbox-cell">
                            <input type="checkbox" value="${item.id}">
                        </td>
                        <td>
                            <img src="${item.image}" alt="썸네일" class="thumbnail">
                        </td>
                        <td>${item.title}</td>
                        <td>${item.location}</td>
                        <td>${item.monthlyRevenue}만원</td>
                        <td>${item.monthlyProfit}만원</td>
                        <td><span class="status-badge status-${getStatusClass(item.status)}">${item.status}</span></td>
                        <td>${item.createdAt}</td>
                        <td>
                            <button class="btn btn--outline btn--sm" onclick="editProperty(${item.id})">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn btn--warning btn--sm" onclick="deleteProperty(${item.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    // 전체 선택 체크박스
    const selectAllCheckbox = document.getElementById('select-all-properties');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            const checkboxes = container.querySelectorAll('tbody input[type="checkbox"]');
            checkboxes.forEach(cb => cb.checked = this.checked);
        });
    }

    // 페이지네이션 렌더링
    renderPagination('properties', current, totalPages);
}

// 상태 클래스 반환
function getStatusClass(status) {
    const statusMap = {
        '매물': 'available',
        '계약중': 'contracted',
        '계약완료': 'completed',
        '신규': 'new',
        '진행중': 'progress',
        '완료': 'done'
    };
    return statusMap[status] || 'available';
}

// 매물 폼 표시
function showPropertyForm(id = null) {
    AppState.currentItemId = id;
    navigateToPage('property-form');
    renderPropertyForm(id);
}

// 매물 폼 렌더링
function renderPropertyForm(id = null) {
    const isEdit = id !== null;
    const property = isEdit ? AppState.data.properties.find(p => p.id === id) : null;
    
    const titleElement = document.getElementById('property-form-title');
    if (titleElement) {
        titleElement.textContent = isEdit ? '매물 수정' : '새 매물 등록';
    }

    // 폼 필드 초기화
    const form = document.getElementById('property-form');
    if (form) {
        if (isEdit && property) {
            const fields = {
                'property-title': property.title,
                'property-location': property.location,
                'monthly-revenue': property.monthlyRevenue,
                'monthly-profit': property.monthlyProfit,
                'startup-cost': property.startupCost,
                'property-status': property.status,
            };

            Object.keys(fields).forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.value = fields[id];
                }
            });

            if (property.businessType) {
                const [category, subcategory] = property.businessType.split(', ');
                const categorySelect = document.getElementById('property-category');
                const subcategorySelect = document.getElementById('property-subcategory');

                if (categorySelect) {
                    categorySelect.value = category;
                    handleCategoryChange({ target: categorySelect }); 
                }
                if (subcategorySelect && subcategory) {
                    subcategorySelect.value = subcategory;
                }
            }

        } else {
            form.reset();
            handleCategoryChange({ target: { value: '' } });
        }
    }

    // Quill 에디터 초기화 (지연 실행)
    setTimeout(() => {
        if (!AppState.editors.propertyDescription) {
            const editorContainer = document.getElementById('property-description-editor');
            if (editorContainer) {
                AppState.editors.propertyDescription = new Quill('#property-description-editor', {
                    theme: 'snow',
                    placeholder: '매물에 대한 상세 설명을 입력하세요...',
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline'],
                            ['link'],
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            ['clean']
                        ]
                    }
                });
            }
        }

        if (AppState.editors.propertyDescription) {
            if (isEdit && property) {
                AppState.editors.propertyDescription.root.innerHTML = property.description || '';
            } else {
                AppState.editors.propertyDescription.setText('');
            }
        }
    }, 100);
}

// 매물 편집
function editProperty(id) {
    showPropertyForm(id);
}

// 매물 삭제
function deleteProperty(id) {
    showConfirmModal('매물 삭제', '정말로 이 매물을 삭제하시겠습니까?', () => {
        AppState.data.properties = AppState.data.properties.filter(p => p.id !== id);
        AppState.data.stats.totalProperties = AppState.data.properties.length;
        renderPropertiesTable();
        showToast('매물이 삭제되었습니다.', 'success');
    });
}

// 전체 매물 선택
function selectAllProperties() {
    const selectAllCheckbox = document.getElementById('select-all-properties');
    if (selectAllCheckbox) {
        selectAllCheckbox.click();
    }
}

// 선택된 매물 일괄 삭제
function bulkDeleteProperties() {
    const checkedBoxes = document.querySelectorAll('#properties-table tbody input[type="checkbox"]:checked');
    if (checkedBoxes.length === 0) {
        showToast('삭제할 매물을 선택해주세요.', 'warning');
        return;
    }

    const ids = Array.from(checkedBoxes).map(cb => parseInt(cb.value));
    
    showConfirmModal('일괄 삭제', `선택된 ${ids.length}개의 매물을 삭제하시겠습니까?`, () => {
        AppState.data.properties = AppState.data.properties.filter(p => !ids.includes(p.id));
        AppState.data.stats.totalProperties = AppState.data.properties.length;
        renderPropertiesTable();
        showToast(`${ids.length}개의 매물이 삭제되었습니다.`, 'success');
    });
}

// FAQ 페이지 렌더링
function renderFaqsPage() {
    setupFaqFilters();
    renderFaqsTable();
}

// FAQ 필터 설정
function setupFaqFilters() {
    const categoryFilter = document.getElementById('faq-category-filter');
    const statusFilter = document.getElementById('faq-status-filter');
    const searchInput = document.getElementById('faq-search');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            AppState.filters.faqs.category = this.value;
            AppState.pagination.faqs.current = 1;
            renderFaqsTable();
        });
    }

    if (statusFilter) {
        statusFilter.addEventListener('change', function() {
            AppState.filters.faqs.status = this.value;
            AppState.pagination.faqs.current = 1;
            renderFaqsTable();
        });
    }

    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                AppState.filters.faqs.search = this.value;
                AppState.pagination.faqs.current = 1;
                renderFaqsTable();
            }, 300);
        });
    }
}

// FAQ 테이블 렌더링
function renderFaqsTable() {
    const container = document.getElementById('faqs-table');
    if (!container) return;

    const { faqs } = AppState.data;
    const { filters, pagination } = AppState;
    
    // 필터링
    let filtered = faqs.filter(item => {
        return (
            (!filters.faqs.category || item.category === filters.faqs.category) &&
            (!filters.faqs.status || 
                (filters.faqs.status === 'public' && !item.isPrivate) ||
                (filters.faqs.status === 'private' && item.isPrivate)) &&
            (!filters.faqs.search || 
                item.title.toLowerCase().includes(filters.faqs.search.toLowerCase()) ||
                item.question.toLowerCase().includes(filters.faqs.search.toLowerCase()))
        );
    });

    // 정렬 (고정 > 등록일)
    filtered.sort((a, b) => {
        if (a.isFixed !== b.isFixed) {
            return b.isFixed - a.isFixed;
        }
        return new Date(b.createdAt) - new Date(a.createdAt);
    });

    // 페이지네이션
    const { current, size } = pagination.faqs;
    const total = filtered.length;
    const totalPages = Math.ceil(total / size);
    const start = (current - 1) * size;
    const end = start + size;
    const pageData = filtered.slice(start, end);

    // 테이블 렌더링
    container.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th><input type="checkbox" id="select-all-faqs"></th>
                    <th>제목</th>
                    <th>카테고리</th>
                    <th>상태</th>
                    <th>등록일</th>
                    <th>조회수</th>
                    <th>액션</th>
                </tr>
            </thead>
            <tbody>
                ${pageData.map(item => `
                    <tr>
                        <td class="checkbox-cell">
                            <input type="checkbox" value="${item.id}">
                        </td>
                        <td>
                            ${item.isFixed ? '<i class="fas fa-thumbtack" style="color: var(--color-primary); margin-right: 4px;"></i>' : ''}
                            ${item.title}
                        </td>
                        <td>${item.category}</td>
                        <td>
                            <span class="status-badge ${item.isPrivate ? 'status-warning' : 'status-success'}">
                                ${item.isPrivate ? '비공개' : '공개'}
                            </span>
                        </td>
                        <td>${item.createdAt}</td>
                        <td>${item.views}</td>
                        <td>
                            <button class="btn btn--outline btn--sm" onclick="editFaq(${item.id})">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn btn--warning btn--sm" onclick="deleteFaq(${item.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    // 전체 선택 체크박스
    const selectAllCheckbox = document.getElementById('select-all-faqs');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            const checkboxes = container.querySelectorAll('tbody input[type="checkbox"]');
            checkboxes.forEach(cb => cb.checked = this.checked);
        });
    }

    // 페이지네이션 렌더링
    renderPagination('faqs', current, totalPages);
}

// FAQ 폼 표시
function showFaqForm(id = null) {
    AppState.currentItemId = id;
    navigateToPage('faq-form');
    renderFaqForm(id);
}

// FAQ 폼 렌더링
function renderFaqForm(id = null) {
    const isEdit = id !== null;
    const faq = isEdit ? AppState.data.faqs.find(f => f.id === id) : null;
    
    const titleElement = document.getElementById('faq-form-title');
    if (titleElement) {
        titleElement.textContent = isEdit ? 'FAQ 수정' : '새 FAQ 작성';
    }

    const form = document.getElementById('faq-form');
    if (form) {
        if (isEdit && faq) {
            document.getElementById('faq-title').value = faq.title;
            document.getElementById('faq-category').value = faq.category;
            document.querySelector(`input[name="faq-privacy"][value="${faq.isPrivate ? 'private' : 'public'}"]`).checked = true;
            document.getElementById('faq-password').value = faq.password || '';
            document.getElementById('faq-fixed').checked = faq.isFixed;
            
            // 비공개 설정 표시
            const passwordGroup = document.getElementById('faq-password-group');
            if (passwordGroup) {
                passwordGroup.style.display = faq.isPrivate ? 'block' : 'none';
            }
        } else {
            form.reset();
            document.getElementById('faq-password-group').style.display = 'none';
        }
    }

    // Quill 에디터 초기화 (지연 실행)
    setTimeout(() => {
        if (!AppState.editors.faqQuestion) {
            const questionEditor = document.getElementById('faq-question-editor');
            if (questionEditor) {
                AppState.editors.faqQuestion = new Quill('#faq-question-editor', {
                    theme: 'snow',
                    placeholder: '질문 내용을 입력하세요...',
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline'],
                            ['link'],
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            ['clean']
                        ]
                    }
                });
            }
        }

        if (!AppState.editors.faqAnswer) {
            const answerEditor = document.getElementById('faq-answer-editor');
            if (answerEditor) {
                AppState.editors.faqAnswer = new Quill('#faq-answer-editor', {
                    theme: 'snow',
                    placeholder: '답변 내용을 입력하세요...',
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline'],
                            ['link'],
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            ['clean']
                        ]
                    }
                });
            }
        }

        if (isEdit && faq) {
            if (AppState.editors.faqQuestion) {
                AppState.editors.faqQuestion.root.innerHTML = faq.question || '';
            }
            if (AppState.editors.faqAnswer) {
                AppState.editors.faqAnswer.root.innerHTML = faq.answer || '';
            }
        } else {
            if (AppState.editors.faqQuestion) {
                AppState.editors.faqQuestion.setText('');
            }
            if (AppState.editors.faqAnswer) {
                AppState.editors.faqAnswer.setText('');
            }
        }
    }, 100);
}

// FAQ 편집
function editFaq(id) {
    showFaqForm(id);
}

// FAQ 삭제
function deleteFaq(id) {
    showConfirmModal('FAQ 삭제', '정말로 이 FAQ를 삭제하시겠습니까?', () => {
        AppState.data.faqs = AppState.data.faqs.filter(f => f.id !== id);
        AppState.data.stats.activeFaqs = AppState.data.faqs.filter(f => !f.isPrivate).length;
        renderFaqsTable();
        showToast('FAQ가 삭제되었습니다.', 'success');
    });
}

// 전체 FAQ 선택
function selectAllFaqs() {
    const selectAllCheckbox = document.getElementById('select-all-faqs');
    if (selectAllCheckbox) {
        selectAllCheckbox.click();
    }
}

// 선택된 FAQ 일괄 삭제
function bulkDeleteFaqs() {
    const checkedBoxes = document.querySelectorAll('#faqs-table tbody input[type="checkbox"]:checked');
    if (checkedBoxes.length === 0) {
        showToast('삭제할 FAQ를 선택해주세요.', 'warning');
        return;
    }

    const ids = Array.from(checkedBoxes).map(cb => parseInt(cb.value));
    
    showConfirmModal('일괄 삭제', `선택된 ${ids.length}개의 FAQ를 삭제하시겠습니까?`, () => {
        AppState.data.faqs = AppState.data.faqs.filter(f => !ids.includes(f.id));
        AppState.data.stats.activeFaqs = AppState.data.faqs.filter(f => !f.isPrivate).length;
        renderFaqsTable();
        showToast(`${ids.length}개의 FAQ가 삭제되었습니다.`, 'success');
    });
}

// 문의 관리 페이지 렌더링
function renderInquiriesPage() {
    renderInquiriesTable();
}

// 문의 테이블 렌더링
function renderInquiriesTable() {
    const container = document.getElementById('inquiries-table');
    if (!container) return;

    const { inquiries } = AppState.data;
    const { filters, pagination } = AppState;
    
    // 필터링
    let filtered = inquiries.filter(item => {
        return filters.inquiries.status === 'all' || item.status === filters.inquiries.status;
    });

    // 정렬 (등록일)
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // 페이지네이션
    const { current, size } = pagination.inquiries;
    const total = filtered.length;
    const totalPages = Math.ceil(total / size);
    const start = (current - 1) * size;
    const end = start + size;
    const pageData = filtered.slice(start, end);

    // 테이블 렌더링
    container.innerHTML = `
        <table class="data-table">
            <thead>
                <tr>
                    <th>문의자명</th>
                    <th>연락처</th>
                    <th>문의내용</th>
                    <th>등록일</th>
                    <th>상태</th>
                    <th>액션</th>
                </tr>
            </thead>
            <tbody>
                ${pageData.map(item => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.phone}</td>
                        <td>${item.content.substring(0, 30)}${item.content.length > 30 ? '...' : ''}</td>
                        <td>${item.createdAt}</td>
                        <td><span class="status-badge status-${getStatusClass(item.status)}">${item.status}</span></td>
                        <td>
                            <button class="btn btn--outline btn--sm" onclick="viewInquiry(${item.id})">
                                <i class="fas fa-eye"></i> 상세보기
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    // 페이지네이션 렌더링
    renderPagination('inquiries', current, totalPages);
}

// 문의 상세보기
function viewInquiry(id) {
    AppState.currentItemId = id;
    navigateToPage('inquiry-detail');
    renderInquiryDetail(id);
}

// 문의 상세 렌더링
function renderInquiryDetail(id) {
    const inquiry = AppState.data.inquiries.find(i => i.id === id);
    if (!inquiry) return;

    document.getElementById('inquiry-name').textContent = inquiry.name;
    document.getElementById('inquiry-phone').textContent = inquiry.phone;
    document.getElementById('inquiry-date').textContent = inquiry.createdAt;
    document.getElementById('inquiry-content').textContent = inquiry.content;

    // 상태 라디오 버튼 설정
    document.querySelector(`input[name="inquiry-status"][value="${inquiry.status}"]`).checked = true;
    
    // 메모 설정
    document.getElementById('inquiry-memo').value = inquiry.memo || '';

    // 답변 에디터 초기화
    setTimeout(() => {
        if (!AppState.editors.inquiryAnswer) {
            const answerEditor = document.getElementById('inquiry-answer-editor');
            if (answerEditor) {
                AppState.editors.inquiryAnswer = new Quill('#inquiry-answer-editor', {
                    theme: 'snow',
                    placeholder: '답변 내용을 입력하세요...',
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline'],
                            ['link'],
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            ['clean']
                        ]
                    }
                });
            }
        }

        if (AppState.editors.inquiryAnswer && inquiry.answer) {
            AppState.editors.inquiryAnswer.root.innerHTML = inquiry.answer;
        } else if (AppState.editors.inquiryAnswer) {
            AppState.editors.inquiryAnswer.setText('');
        }
    }, 100);
}

// 페이지네이션 렌더링
function renderPagination(type, current, totalPages) {
    const container = document.getElementById(`${type}-pagination`);
    if (!container || totalPages <= 1) {
        if (container) container.innerHTML = '';
        return;
    }

    let html = '';
    
    // 이전 페이지
    html += `<button ${current === 1 ? 'disabled' : ''} onclick="changePage('${type}', ${current - 1})">
        <i class="fas fa-chevron-left"></i>
    </button>`;

    // 페이지 번호
    const startPage = Math.max(1, current - 2);
    const endPage = Math.min(totalPages, current + 2);

    if (startPage > 1) {
        html += `<button onclick="changePage('${type}', 1)">1</button>`;
        if (startPage > 2) {
            html += `<span>...</span>`;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        html += `<button class="${i === current ? 'active' : ''}" onclick="changePage('${type}', ${i})">${i}</button>`;
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            html += `<span>...</span>`;
        }
        html += `<button onclick="changePage('${type}', ${totalPages})">${totalPages}</button>`;
    }

    // 다음 페이지
    html += `<button ${current === totalPages ? 'disabled' : ''} onclick="changePage('${type}', ${current + 1})">
        <i class="fas fa-chevron-right"></i>
    </button>`;

    container.innerHTML = html;
}

// 페이지 변경
function changePage(type, page) {
    AppState.pagination[type].current = page;
    
    switch (type) {
        case 'properties':
            renderPropertiesTable();
            break;
        case 'faqs':
            renderFaqsTable();
            break;
        case 'inquiries':
            renderInquiriesTable();
            break;
    }
}

// 파일 업로드 설정
function setupFileUploads() {
    // 히어로 이미지 업로드
    const heroUpload = document.getElementById('hero-image-upload');
    if (heroUpload) {
        const fileInput = heroUpload.querySelector('input[type="file"]');
        
        heroUpload.addEventListener('click', () => fileInput.click());
        heroUpload.addEventListener('dragover', handleDragOver);
        heroUpload.addEventListener('drop', handleDrop);
        
        fileInput.addEventListener('change', function() {
            if (this.files[0]) {
                handleFileUpload(this.files[0], heroUpload);
            }
        });
    }

    // 매물 이미지 업로드
    const propertyUpload = document.getElementById('property-images-upload');
    if (propertyUpload) {
        const fileInput = propertyUpload.querySelector('input[type="file"]');
        
        propertyUpload.addEventListener('click', () => fileInput.click());
        propertyUpload.addEventListener('dragover', handleDragOver);
        propertyUpload.addEventListener('drop', handleDrop);
        
        fileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                Array.from(this.files).forEach(file => {
                    handleFileUpload(file, propertyUpload, true);
                });
            }
        });
    }
}

// 드래그 오버 처리
function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.style.borderColor = 'var(--color-primary)';
}

// 드롭 처리
function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.style.borderColor = 'var(--color-border)';
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        const isMultiple = e.currentTarget.id === 'property-images-upload';
        if (isMultiple) {
            Array.from(files).forEach(file => {
                handleFileUpload(file, e.currentTarget, true);
            });
        } else {
            handleFileUpload(files[0], e.currentTarget);
        }
    }
}

// 파일 업로드 처리
function handleFileUpload(file, container, isMultiple = false) {
    if (!file.type.startsWith('image/')) {
        showToast('이미지 파일만 업로드 가능합니다.', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        if (isMultiple) {
            addImagePreview(e.target.result, file.name, container);
        } else {
            // 단일 이미지 처리 (히어로 섹션)
            container.innerHTML = `
                <img src="${e.target.result}" alt="미리보기" style="max-width: 200px; max-height: 150px; border-radius: var(--radius-base);">
                <p>${file.name}</p>
                <button type="button" class="btn btn--outline btn--sm" onclick="removeImage(this)">
                    <i class="fas fa-times"></i> 제거
                </button>
            `;
        }
    };
    reader.readAsDataURL(file);
}

// 이미지 미리보기 추가
function addImagePreview(src, name, container) {
    const previewContainer = document.getElementById('property-images-preview') || createImagePreviewContainer(container);
    
    const imageDiv = document.createElement('div');
    imageDiv.className = 'image-preview';
    imageDiv.innerHTML = `
        <img src="${src}" alt="${name}">
        <button type="button" class="remove-btn" onclick="removeImagePreview(this)">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    previewContainer.appendChild(imageDiv);
}

// 이미지 미리보기 컨테이너 생성
function createImagePreviewContainer(uploadContainer) {
    let previewContainer = document.getElementById('property-images-preview');
    if (!previewContainer) {
        previewContainer = document.createElement('div');
        previewContainer.id = 'property-images-preview';
        previewContainer.className = 'image-preview-container';
        uploadContainer.parentNode.appendChild(previewContainer);
    }
    return previewContainer;
}

// 이미지 제거
function removeImage(button) {
    const container = button.closest('.file-upload-area');
    container.innerHTML = `
        <i class="fas fa-upload"></i>
        <p>이미지를 드래그하거나 클릭해서 업로드하세요</p>
        <input type="file" accept="image/*" style="display: none;">
    `;
    setupFileUploads(); // 이벤트 리스너 재설정
}

// 이미지 미리보기 제거
function removeImagePreview(button) {
    button.closest('.image-preview').remove();
}

// 폼 제출 핸들러들
function handleHeroFormSubmit(e) {
    e.preventDefault();
    
    AppState.data.siteSettings.heroTitle = document.getElementById('hero-title').value;
    AppState.data.siteSettings.heroSubtitle = document.getElementById('hero-subtitle').value;
    
    showToast('히어로 섹션이 저장되었습니다.', 'success');
}

function handleSiteSettingsSubmit(e) {
    e.preventDefault();
    
    const settings = AppState.data.siteSettings;
    settings.companyAddress = document.getElementById('company-address').value;
    settings.companyCeo = document.getElementById('company-ceo').value;
    settings.companyLicense = document.getElementById('company-license').value;
    settings.privacyOfficer = document.getElementById('privacy-officer').value;
    settings.lawFirm = document.getElementById('law-firm').value;
    settings.csPhone = document.getElementById('cs-phone').value;
    settings.csEmail = document.getElementById('cs-email').value;
    settings.csHours = document.getElementById('cs-hours').value;
    
    showToast('사이트 설정이 저장되었습니다.', 'success');
}

function handlePropertyFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        title: document.getElementById('property-title').value,
        location: document.getElementById('property-location').value,
        monthlyRevenue: parseInt(document.getElementById('monthly-revenue').value),
        monthlyProfit: parseInt(document.getElementById('monthly-profit').value),
        startupCost: parseInt(document.getElementById('startup-cost').value) || 0,
        status: document.getElementById('property-status').value,
        businessType: `${document.getElementById('property-category').value}, ${document.getElementById('property-subcategory').value}`,
        description: AppState.editors.propertyDescription?.root.innerHTML || '',
        image: '/api/placeholder/150/100' // 실제로는 업로드된 이미지 URL
    };

    // 유효성 검사
    if (!formData.title || !formData.location || !formData.monthlyRevenue || !formData.monthlyProfit) {
        showToast('필수 항목을 모두 입력해주세요.', 'error');
        return;
    }

    showLoadingSpinner(true);
    
    setTimeout(() => {
        const isEdit = AppState.currentItemId !== null;
        
        if (isEdit) {
            const index = AppState.data.properties.findIndex(p => p.id === AppState.currentItemId);
            if (index !== -1) {
                AppState.data.properties[index] = {
                    ...AppState.data.properties[index],
                    ...formData,
                    updatedAt: new Date().toISOString().split('T')[0]
                };
            }
            showToast('매물이 수정되었습니다.', 'success');
        } else {
            const newProperty = {
                id: Math.max(...AppState.data.properties.map(p => p.id)) + 1,
                ...formData,
                createdAt: new Date().toISOString().split('T')[0],
                updatedAt: new Date().toISOString().split('T')[0]
            };
            AppState.data.properties.push(newProperty);
            AppState.data.stats.totalProperties = AppState.data.properties.length;
            showToast('새 매물이 등록되었습니다.', 'success');
        }
        
        showLoadingSpinner(false);
        navigateToPage('properties');
    }, 1000);
}

function handleFaqFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        title: document.getElementById('faq-title').value,
        category: document.getElementById('faq-category').value,
        isPrivate: document.querySelector('input[name="faq-privacy"]:checked').value === 'private',
        password: document.getElementById('faq-password').value,
        isFixed: document.getElementById('faq-fixed').checked,
        question: AppState.editors.faqQuestion?.root.innerHTML || '',
        answer: AppState.editors.faqAnswer?.root.innerHTML || ''
    };

    // 유효성 검사
    if (!formData.title || !formData.category) {
        showToast('필수 항목을 모두 입력해주세요.', 'error');
        return;
    }

    if (formData.isPrivate && !formData.password) {
        showToast('비공개 설정 시 비밀번호를 입력해주세요.', 'error');
        return;
    }

    showLoadingSpinner(true);
    
    setTimeout(() => {
        const isEdit = AppState.currentItemId !== null;
        
        if (isEdit) {
            const index = AppState.data.faqs.findIndex(f => f.id === AppState.currentItemId);
            if (index !== -1) {
                AppState.data.faqs[index] = {
                    ...AppState.data.faqs[index],
                    ...formData,
                    updatedAt: new Date().toISOString().split('T')[0]
                };
            }
            showToast('FAQ가 수정되었습니다.', 'success');
        } else {
            const newFaq = {
                id: Math.max(...AppState.data.faqs.map(f => f.id)) + 1,
                ...formData,
                views: 0,
                createdAt: new Date().toISOString().split('T')[0],
                updatedAt: new Date().toISOString().split('T')[0]
            };
            AppState.data.faqs.push(newFaq);
            AppState.data.stats.activeFaqs = AppState.data.faqs.filter(f => !f.isPrivate).length;
            showToast('새 FAQ가 작성되었습니다.', 'success');
        }
        
        showLoadingSpinner(false);
        navigateToPage('faqs');
    }, 1000);
}

function handleInquiryResponseSubmit(e) {
    e.preventDefault();
    
    const status = document.querySelector('input[name="inquiry-status"]:checked').value;
    const memo = document.getElementById('inquiry-memo').value;
    const answer = AppState.editors.inquiryAnswer?.root.innerHTML || '';

    showLoadingSpinner(true);
    
    setTimeout(() => {
        const inquiry = AppState.data.inquiries.find(i => i.id === AppState.currentItemId);
        if (inquiry) {
            inquiry.status = status;
            inquiry.memo = memo;
            inquiry.answer = answer;
        }
        
        showLoadingSpinner(false);
        showToast('문의 답변이 저장되었습니다.', 'success');
        navigateToPage('inquiries');
    }, 1000);
}

// 유틸리티 함수들
function showConfirmModal(title, message, onConfirm) {
    document.getElementById('confirm-title').textContent = title;
    document.getElementById('confirm-message').textContent = message;
    
    const modal = document.getElementById('confirm-modal');
    modal.classList.remove('hidden');
    
    const confirmBtn = document.getElementById('confirm-action');
    confirmBtn.onclick = function() {
        onConfirm();
        closeModal('confirm-modal');
    };
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const iconMap = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    
    toast.innerHTML = `
        <i class="fas ${iconMap[type]} toast-icon"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function showLoadingSpinner(show) {
    const spinner = document.getElementById('loading-spinner');
    if (show) {
        spinner.classList.remove('hidden');
    } else {
        spinner.classList.add('hidden');
    }
}



