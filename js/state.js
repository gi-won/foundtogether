// state.js - 앱 상태 관리 모듈

/**
 * 애플리케이션의 전역 상태를 저장하는 객체.
 * @property {object} data - 원본 데이터 소스.
 * @property {Array<object>} data.properties - 전체 매물 목록.
 * @property {Array<object>} data.faqs - 전체 FAQ 목록.
 * @property {Array<object>} data.services - 서비스 목록.
 * @property {Array<object>} data.reviews - 고객 후기 목록.
 * @property {object} businessCategoriesMap - 업종 카테고리 맵.
 * @property {Array<object>} filteredProperties - 필터링된 매물 목록.
 * @property {Array<object>} filteredFaqs - 필터링된 FAQ 목록.
 * @property {string} currentFaqCategory - 현재 선택된 FAQ 카테고리.
 */
export const appState = {
  data: {
    properties: [],
    faqs: [],
    services: [],
    reviews: [],
    businessCategories: {},
  },
  businessCategoriesMap: {},
  filteredProperties: [],
  filteredFaqs: [],
  currentFaqCategory: '',
};

/**
 * 초기 데이터를 받아 appState를 설정합니다.
 * @param {object} data - data.json에서 fetch한 초기 데이터.
 */
export function setInitialData(data) {
  appState.data = data;
  appState.businessCategoriesMap = data.businessCategories || {};
  setFilteredProperties(data.properties);
  setFilteredFaqs(data.faqs);
}

/**
 * 필터링된 매물 목록을 상태에 저장합니다.
 * @param {Array<object>} properties - 필터링된 매물 배열.
 */
export function setFilteredProperties(properties) {
  appState.filteredProperties = properties;
}

/**
 * 필터링된 FAQ 목록을 상태에 저장합니다.
 * @param {Array<object>} faqs - 필터링된 FAQ 배열.
 */
export function setFilteredFaqs(faqs) {
  appState.filteredFaqs = faqs;
}

/**
 * 현재 FAQ 카테고리를 상태에 저장합니다.
 * @param {string} category - 선택된 FAQ 카테고리.
 */
export function setCurrentFaqCategory(category) {
  appState.currentFaqCategory = category;
}

/**
 * 새로운 FAQ를 상태에 추가합니다.
 * @param {object} faq - 새로 추가할 FAQ 객체.
 */
export function addFaq(faq) {
  appState.data.faqs.push(faq);
  setFilteredFaqs(appState.data.faqs);
}
