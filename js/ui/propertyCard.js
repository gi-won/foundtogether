// js/ui/propertyCard.js
// propertyCard 관련 UI 함수 모듈

import { getStatusConfig, formatCurrency } from "../utils.js";
import { showPropertyDetail } from "./propertyDetail.js";

/**
 * 개별 매물 카드 HTML 문자열을 생성합니다.
 * @param {object} property - 매물 데이터 객체.
 * @param {boolean} isLinkToPage - 상세 페이지로 이동하는 <a> 태그로 감쌀지 여부.
 * @returns {string} 생성된 HTML 문자열.
 */
export function createPropertyCard(property, isLinkToPage) {
  const statusConfig = getStatusConfig(property.status);
  const metrics = [
    { label: '월 매출', value: formatCurrency(property.monthlyRevenue) },
    { label: '월 순이익', value: formatCurrency(property.monthlyProfit) },
    { label: '창업 비용', value: formatCurrency(property.startupCost) }
  ];
  const metricsHtml = metrics.map(metric => `
    <div class="property-card__detail">
      <span class="property-card__detail-label">${metric.label}</span>
      <span class="property-card__detail-value">${metric.value}</span>
    </div>
  `).join('');
  const businessTags = [property.businessCategory, property.businessSubcategory].filter(Boolean);
  const imageUrl = property.images && property.images.length > 0 ? property.images[0] : '';
  const cardContent = `
    <div class="property-card__image" role="img" aria-label="매물 이미지">
      <img src="${imageUrl}" alt="${property.title}" onload="this.style.display='block'" onerror="this.style.display='none'">
      ${imageUrl ? '' : '<span class="placeholder-text">이미지를 불러오는 중입니다...</span>'}
    </div>
    <div class="property-card__content">
      <h3 class="property-card__title">${property.title}</h3>
      <p class="property-card__location">${property.location}</p>
      <div class="property-card__details">
        ${metricsHtml}
      </div>
      ${businessTags.length ? `<div class="property-card__tags">${businessTags.map(tag => `<span class="product-detail__tag">${tag}</span>`).join("")}</div>` : ''}
      <span class="property-card__status property-card__status--${statusConfig.className}">
        ${statusConfig.label}
      </span>
    </div>
  `;
  if (isLinkToPage) {
    return `<a href="properties.html#${property.id}" class="property-card" data-property-id="${property.id}">${cardContent}</a>`;
  } else {
    return `<div class="property-card" data-property-id="${property.id}" tabindex="0" role="button" aria-label="${property.title} 상세보기">${cardContent}</div>`;
  }
}

/**
 * 인기 매물 목록을 렌더링합니다.
 * @param {object} appData - 애플리케이션 데이터.
 */
export function renderPopularProperties(appData) {
  const propertiesGrid = document.querySelector('.popular-properties .properties__grid');
  if (!propertiesGrid) return;
  const popularProperties = appData.properties.slice(0, 6);
  propertiesGrid.innerHTML = popularProperties.map(property => createPropertyCard(property, true)).join('');
}

/**
 * 필터링된 매물 목록을 렌더링합니다.
 * @param {object} appState - 애플리케이션의 현재 상태 객체.
 */
export function renderProperties(appState) {
  const propertiesList = document.querySelector('.properties__list');
  if (!propertiesList) return;
  propertiesList.innerHTML = appState.filteredProperties.map(property => createPropertyCard(property, false)).join('');
  // 이벤트 핸들러 바인딩은 메인 스크립트(app.js)에서 이벤트 위임을 통해 전역적으로 처리합니다.
}

/**
 * 매물 카드 클릭 또는 키보드 활성화 이벤트를 처리합니다.
 * 상세 페이지로 이동하거나 상세 뷰를 표시합니다.
 * @param {HTMLElement} card - 활성화된 매물 카드 요소.
 * @param {Event} event - 발생한 이벤트 객체.
 */
export function handlePropertyCardActivation(card, event) {
  if (!card) return;
  let propertyId = parseInt(card.dataset.propertyId, 10);
  if (Number.isNaN(propertyId)) {
    const href = card.getAttribute && card.getAttribute('href');
    if (href) {
      const hash = href.split('#').pop();
      propertyId = parseInt(hash, 10);
    }
  }
  if (Number.isNaN(propertyId)) return;
  if (event && card.tagName !== 'A') {
    event.preventDefault();
  }
  if (card.tagName !== 'A') {
    showPropertyDetail(propertyId);
  }
}
