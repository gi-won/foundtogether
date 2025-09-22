// 반드시 ES 모듈로 실행되어야 하므로, HTML에서 <script type="module" src="app.js"></script>로 로드해야 합니다.
import { CONSTANTS, debounce, showModal, closeModal, navigateToSection } from './js/utils.js';
import { appState, setInitialData, setFilteredProperties, setFilteredFaqs, setCurrentFaqCategory, addFaq } from './js/state.js';
import { loadLayout } from './js/layout.js';
import { fetchData } from './js/api.js';
import { renderPopularProperties, renderProperties, handlePropertyCardActivation } from './js/ui/propertyCard.js';
import { showPropertyDetail, showPropertiesList } from './js/ui/propertyDetail.js';
import { setupFaqFunctionality, handleAddFaqSubmit, togglePasswordField, showFaqDetail as showFaqDetailFromModule, showFaqList as showFaqListFromModule } from './js/ui/faq.js';

let propertyCardGlobalHandlersBound = false;

document.addEventListener(CONSTANTS.DOM_CONTENT_LOADED, initApp);

/**
 * 애플리케이션을 초기화합니다.
 * 데이터 로드, 상태 설정, 이벤트 리스너 바인딩, 현재 페이지 렌더링을 수행합니다.
 */
async function initApp() {
    loadLayout();

    try {
        const appData = await fetchData();
        setInitialData(appData);

        setupEventListeners();
        setupGlobalPropertyCardHandlers();
        setupForms();
        
        initCurrentPage();
    } catch (error) {
        console.error("애플리케이션 초기화 실패:", error);
        document.body.innerHTML = `<div style="text-align: center; padding: 50px; font-size: 1.2rem;">데이터를 불러오는 데 실패했습니다. 페이지를 새로고침 해주세요.</div>`;
    }
}

/**
 * 현재 URL 경로를 기반으로 적절한 페이지 콘텐츠를 초기화하고 렌더링합니다.
 */
function initCurrentPage() {
    const path = window.location.pathname;

    if (path.includes('index.html') || path === '/') {
        renderServices(appState.data);
        renderPopularProperties(appState.data);
        renderReviews(appState.data);
    } else if (path.includes('properties.html')) {
        setupPropertyFilters();
        const propertyId = parseInt(window.location.hash.substring(1), 10);
        if (!isNaN(propertyId)) {
            showPropertyDetail(propertyId);
        }
    } else if (path.includes('faq.html')) {
        setupFaqFunctionality();
    }
}

/**
 * 메인 페이지의 서비스 목록을 렌더링합니다.
 * @param {object} appData - 서비스 데이터를 포함하는 앱 데이터 객체.
 */
function renderServices() {

  const servicesGrid = document.querySelector('.services__grid');

  if (!servicesGrid) return;

  const appData = appState.data;

  servicesGrid.innerHTML = appData.services.map(service => `

    <div class="service-card">

      <span class="service-card__icon" aria-hidden="true">${service.icon}</span>

      <h3 class="service-card__title">${service.title}</h3>

      <p class="service-card__description">${service.description}</p>

    </div>

  `).join('');

}

/**
 * 모든 페이지에서 매물 카드에 대한 클릭 및 키보드 이벤트를 처리하는 전역 핸들러를 설정합니다.
 */
function setupGlobalPropertyCardHandlers() {
  if (propertyCardGlobalHandlersBound) return;

  document.addEventListener('click', (event) => {
    const card = event.target.closest('.property-card');
    if (card) {
        handlePropertyCardActivation(card, event);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const card = event.target.closest('.property-card');
    if (card) {
        handlePropertyCardActivation(card, event);
    }
  });

  propertyCardGlobalHandlersBound = true;
}

/**
 * 메인 페이지의 고객 후기 목록을 렌더링합니다.
 * @param {object} appData - 리뷰 데이터를 포함하는 앱 데이터 객체.
 */
function renderReviews(appData) {

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

/**
 * 전역 이벤트 리스너(모바일 메뉴, 네비게이션, 모달 등)를 설정합니다.
 */
function setupEventListeners() {
    const mobileToggle = document.querySelector('.header__mobile-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener(CONSTANTS.CLICK_EVENT, toggleMobileMenu);
    }

    document.querySelectorAll('[data-nav-target]').forEach(el => {
        el.addEventListener(CONSTANTS.CLICK_EVENT, (e) => {
            e.preventDefault();
            navigateToSection(el.dataset.navTarget);
        });
    });

    document.querySelectorAll('[data-action="open-modal"]').forEach(el => {
        el.addEventListener(CONSTANTS.CLICK_EVENT, () => {
            if (el.dataset.modalId) {
                showModal(el.dataset.modalId);
            }
        });
    });
    document.querySelectorAll('.modal__close, .modal__overlay').forEach(el => {
        el.addEventListener(CONSTANTS.CLICK_EVENT, () => {
            const modal = el.closest('.modal');
            if (modal) closeModal(modal.id);
        });
    });

    document.querySelectorAll('#back-to-list-btn, #back-to-faq-list-btn').forEach(button => {
        button.addEventListener(CONSTANTS.CLICK_EVENT, () => {
            const detailSection = button.closest('#property-detail, #faq-detail');
            if (detailSection && detailSection.id === 'property-detail') {
                showPropertiesList();
            } else if (detailSection && detailSection.id === 'faq-detail') {
                showFaqListFromModule();
            }
        });
    });

    document.querySelectorAll('[data-action="go-to-analysis"]').forEach(button => {
        button.addEventListener(CONSTANTS.CLICK_EVENT, goToAnalysis);
    });

    setupAccessibility();
}

/**
 * 필터 값의 변경에 따라 매물 목록을 필터링하고 다시 렌더링합니다.
 */
function applyFilters() {
    const regionFilter = document.getElementById('region-filter');
    const categoryFilter = document.getElementById('category-filter');
    const subcategoryFilter = document.getElementById('subcategory-filter');
    const costFilter = document.getElementById('cost-filter');
    const searchInput = document.getElementById('search-input');

    const region = regionFilter ? regionFilter.value : '';
    const category = categoryFilter ? categoryFilter.value : '';
    const subcategory = subcategoryFilter ? subcategoryFilter.value : '';
    const costRange = costFilter ? costFilter.value : '';
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

    const filtered = appState.data.properties.filter(property => {
        const matchesRegion = !region || property.location.includes(region);
        const matchesCategory = !category || property.businessCategory === category;
        const matchesSubcategory = !subcategory || property.businessSubcategory === subcategory;
        const matchesCost = !costRange || checkStartupCostRange(property.startupCost, costRange);
        const matchesSearch = !searchTerm || property.title.toLowerCase().includes(searchTerm) || property.location.toLowerCase().includes(searchTerm);
        return matchesRegion && matchesCategory && matchesSubcategory && matchesCost && matchesSearch;
    });

    setFilteredProperties(filtered);
    renderProperties(appState);
}

/**
 * 주 업종 선택에 따라 세부 업종 드롭다운 옵션을 동적으로 채웁니다.
 * @param {HTMLSelectElement} categoryFilter - 주 업종 필터 요소.
 * @param {HTMLSelectElement} subcategoryFilter - 세부 업종 필터 요소.
 */
function populateSubcategoryOptions(categoryFilter, subcategoryFilter) {

  if (!subcategoryFilter) return;



  const previousValue = subcategoryFilter.value;

  let options = '<option value="">전체</option>';

  const category = categoryFilter ? categoryFilter.value : '';


  if (category && appState.businessCategoriesMap[category]) {

    options += appState.businessCategoriesMap[category]

      .map(subcategory => `<option value="${subcategory}">${subcategory}</option>`)

      .join('');

  }

  subcategoryFilter.innerHTML = options;


  if (category && appState.businessCategoriesMap[category] && appState.businessCategoriesMap[category].includes(previousValue)) {

    subcategoryFilter.value = previousValue;

  } else {

    subcategoryFilter.value = '';

  }

}

/**
 * 창업 비용이 주어진 범위에 속하는지 확인합니다.
 * @param {number} cost - 확인할 창업 비용.
 * @param {string} range - 비용 범위 문자열 (예: '1000이하').
 * @returns {boolean} 범위에 속하면 true, 아니면 false.
 */

function checkStartupCostRange(cost, range) {

  const number = Number(cost);

  if (Number.isNaN(number)) return true;



  switch (range) {

    case '1000이하':

      return number <= 1000;

    case '1000-2000':

      return number > 1000 && number <= 2000;

    case '2000초과':

      return number > 2000;

    default:

      return true;

  }

}

/**
 * Populates the main business category filter dropdown from the application state.
 */
function populateCategoryFilters() {
    const categoryFilter = document.getElementById('category-filter');
    if (!categoryFilter) return;

    // Clear existing options except the first one ("전체")
    while (categoryFilter.options.length > 1) {
        categoryFilter.remove(1);
    }

    const categories = Object.keys(appState.businessCategoriesMap);
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

/**
 * 매물 목록 페이지의 필터 관련 이벤트 리스너를 설정합니다.
 */

function setupPropertyFilters() {

  const regionFilter = document.getElementById('region-filter');

  const categoryFilter = document.getElementById('category-filter');

  const subcategoryFilter = document.getElementById('subcategory-filter');

  const costFilter = document.getElementById('cost-filter');

  const searchInput = document.getElementById('search-input');

  populateCategoryFilters(); // Populate main categories first



  if (regionFilter) regionFilter.addEventListener('change', applyFilters);

  if (categoryFilter) {

    categoryFilter.addEventListener('change', () => {

      populateSubcategoryOptions(categoryFilter, subcategoryFilter);

      applyFilters();

    });

  }

  if (subcategoryFilter) subcategoryFilter.addEventListener('change', applyFilters);

  if (costFilter) costFilter.addEventListener('change', applyFilters);

  if (searchInput) searchInput.addEventListener('input', debounce(applyFilters, 300));



  populateSubcategoryOptions(categoryFilter, subcategoryFilter);
  applyFilters();
}

/**
 * 상담 신청 및 FAQ 등록 폼의 제출 이벤트를 설정합니다.
 */
function setupForms() {
  const consultationForms = document.querySelectorAll('.consultation__form');
  consultationForms.forEach(form => {
    if (form.dataset.bound === CONSTANTS.TRUE_STRING) return;

    form.addEventListener(CONSTANTS.SUBMIT_EVENT, function(e) {
      e.preventDefault();

      const nameInput = form.querySelector('[data-field="name"]');
      const phoneInput = form.querySelector('[data-field="phone"]');
      const messageInput = form.querySelector('[data-field="message"]');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !phone) {
        alert('이름과 연락처를 입력해 주세요.');
        if (!name && nameInput) nameInput.focus();
        else if (phoneInput) phoneInput.focus();
        return;
      }

      const messageLine = message ? `\n문의 내용: ${message}` : '';
      alert(`상담 신청이 접수되었습니다.\n이름: ${name}\n연락처: ${phone}${messageLine}\n전문 매니저가 곧 연락드리겠습니다.`);

      form.reset();
    });

    form.dataset.bound = CONSTANTS.TRUE_STRING;
  });

  const addFaqForm = document.getElementById('add-faq-form');
  if (addFaqForm && addFaqForm.dataset.bound !== CONSTANTS.TRUE_STRING) {
    addFaqForm.addEventListener(CONSTANTS.SUBMIT_EVENT, handleAddFaqSubmit);
    addFaqForm.dataset.bound = CONSTANTS.TRUE_STRING;
  }

  const privacyRadios = document.querySelectorAll('input[name="faq-privacy"]');
  privacyRadios.forEach(radio => {
    if (radio.dataset.bound === CONSTANTS.TRUE_STRING) return;
    radio.addEventListener(CONSTANTS.CHANGE_EVENT, togglePasswordField);
    radio.dataset.bound = CONSTANTS.TRUE_STRING;
  });
}

/**
 * 모바일 화면에서 내비게이션 메뉴를 토글합니다.
 */
function toggleMobileMenu() {

  const headerNav = document.querySelector('.header__nav');

  const mobileToggle = document.querySelector('.header__mobile-toggle');

  

  if (!headerNav || !mobileToggle) return;

  

  const isExpanded = mobileToggle.getAttribute(CONSTANTS.ARIA_EXPANDED) === CONSTANTS.TRUE_STRING;

  mobileToggle.setAttribute(CONSTANTS.ARIA_EXPANDED, !isExpanded);

  mobileToggle.setAttribute(CONSTANTS.ARIA_LABEL, isExpanded ? '메뉴 열기' : '메뉴 닫기');

  headerNav.classList.toggle('active');

  

  if (!isExpanded) {

    const firstNavLink = headerNav.querySelector('.header__nav-link');

    if (firstNavLink) {

      firstNavLink.focus();

    }

  }

}

/**
 * 웹 접근성을 위한 기능을 설정합니다. (예: 스킵 네비게이션)
 */

function setupAccessibility() {

  const skipLink = document.querySelector('.sr-only-focusable');

  if (skipLink) {

    skipLink.addEventListener(CONSTANTS.CLICK_EVENT, function(e) {

      e.preventDefault();

      const mainContent = document.getElementById('main-content');

      if (mainContent) {

        mainContent.setAttribute('tabindex', '-1');
        mainContent.focus();

        mainContent.scrollIntoView();

      }

    });

  }

}

function goToAnalysis() {

  alert('성향 분석 서비스로 이동합니다.');

  window.open('https://foundtogether.netlify.app/', '_blank');

}
