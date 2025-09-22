// utils.js - 범용 유틸리티 함수 및 상수 모듈

export const CONSTANTS = {
  HIDDEN_CLASS: 'hidden',
  ACTIVE_CLASS: 'active',
  CLICK_EVENT: 'click',
  KEYDOWN_EVENT: 'keydown',
  SUBMIT_EVENT: 'submit',
  CHANGE_EVENT: 'change',
  INPUT_EVENT: 'input',
  DOM_CONTENT_LOADED: 'DOMContentLoaded',
  DATA_ACTION: 'data-action',
  DATA_PROPERTY_ID: 'data-property-id',
  DATA_FAQ_ID: 'data-faq-id',
  DATA_MODAL_ID: 'data-modal-id',
  DATA_NAV_TARGET: 'data-nav-target',
  DATA_IMAGE_URL: 'data-image-url',
  DATA_FIELD: 'data-field',
  DATA_BOUND: 'data-bound',
  DATA_CATEGORY: 'data-category',
  ARIA_EXPANDED: 'aria-expanded',
  ARIA_HIDDEN: 'aria-hidden',
  ARIA_SELECTED: 'aria-selected',
  ARIA_PRESSED: 'aria-pressed',
  ARIA_LABEL: 'aria-label',
  ARIA_REQUIRED: 'aria-required',
  ROLE_BUTTON: 'button',
  TAG_A: 'A',
  TAG_BUTTON: 'BUTTON',
  KEY_ENTER: 'Enter',
  KEY_SPACE: ' ',
  KEY_ESCAPE: 'Escape',
  TRUE_STRING: 'true',
  FALSE_STRING: 'false',
  BEHAVIOR_SMOOTH: 'smooth',
};

export function formatCurrency(value) {
  if (value === undefined || value === null || value === '') return '-';
  const number = Number(value);
  if (Number.isNaN(number)) return value;
  return `₩${number.toLocaleString('ko-KR')}만 원`;
}

export function formatDate(value) {
  if (!value) return '-';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('ko-KR');
}

export function getStatusConfig(status) {
  const normalized = (status || '').trim();
  switch (normalized) {
    case '계약완료':
      return { className: 'contract', label: '계약완료' };
    case '검토중':
      return { className: 'pending', label: '검토중' };
    default:
      return { className: 'available', label: '임대중' };
  }
}

export function debounce(func, wait) {
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

export function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  setTimeout(() => {
    const firstInput = modal.querySelector('input, select, textarea, button');
    if (firstInput) {
      firstInput.focus();
    }
  }, 100);
}

export function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

export function navigateToSection(sectionId) {
  if (!sectionId) return;
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    const mobileToggle = document.querySelector('.header__mobile-toggle');
    if (mobileToggle && mobileToggle.getAttribute('aria-expanded') === 'true') {
      toggleMobileMenu();
    }
    return;
  }
  const routes = {
    properties: 'properties.html#properties',
    faq: 'faq.html#faq',
    main: 'index.html#main',
  };
  const destination = routes[sectionId];
  if (destination) {
    window.location.href = destination;
  }
}
