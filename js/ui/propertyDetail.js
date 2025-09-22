// propertyDetail.js - 매물 상세 UI 모듈
import { CONSTANTS, formatCurrency, formatDate, getStatusConfig } from '../utils.js';
import { appState } from '../state.js';

/**
 * 매물 상세 페이지의 헤더 HTML을 생성합니다.
 * @param {object} property - 매물 데이터 객체.
 * @returns {string} 헤더 HTML 문자열.
 */
function renderPropertyHeader(property) {
    return `
        <header class="product-detail__header">
          <h2 id="property-detail-title" class="product-detail__title">${property.title}</h2>
          <p class="product-detail__location">${property.location || ""}</p>
        </header>
    `;
}

/**
 * 매물 상세 페이지의 이미지 캐러셀 HTML을 생성합니다.
 * @param {object} property - 매물 데이터 객체.
 * @returns {string} 이미지 캐러셀 HTML 문자열.
 */
function createImageCarousel(property) {
    if (!property.images || property.images.length === 0) {
        return `
            <div class="product-detail__image-wrapper">
                <span class="placeholder-text">이미지를 준비 중입니다.</span>
            </div>
        `;
    }
    return `
        <div class="image-carousel">
            <div class="carousel-main">
                <img src="${property.images[0]}" alt="${property.title}">
            </div>
            <div class="carousel-thumbnails">
                ${property.images.map((img, index) => `
                    <img src="${img}" alt="${property.title} ${index + 1}" class="${index === 0 ? CONSTANTS.ACTIVE_CLASS : ''}" data-action="change-carousel-image" data-image-url="${img}" role="button" tabindex="0">
                `).join('')}
            </div>
        </div>
    `;
}

/**
 * 매물 상세 페이지의 요약 카드(우측 사이드바) HTML을 생성합니다.
 * @param {object} property - 매물 데이터 객체.
 * @returns {string} 요약 카드 HTML 문자열.
 */
function createSummaryCard(property) {
    const statusConfig = getStatusConfig(property.status);
    const businessTags = [property.businessCategory, property.businessSubcategory].filter(Boolean);
    const priceValue = formatCurrency(property.startupCost);
    
    const summaryMetrics = [
        { label: "월 매출", value: formatCurrency(property.monthlyRevenue) },
        { label: "월 순이익", value: formatCurrency(property.monthlyProfit) }
    ].filter(item => item.value && item.value !== "-");

    const summaryMetricsHtml = summaryMetrics.map(item => `
            <li class="product-summary__metric">
              <span class="product-summary__metric-label">${item.label}</span>
              <span class="product-summary__metric-value">${item.value}</span>
            </li>
          `).join("");

    const summaryMetaItems = [
        property.location ? `<li><span class="product-summary__meta-label">권역</span><span class="product-summary__meta-value">${property.location}</span></li>` : '',
        property.createdAt ? `<li><span class="product-summary__meta-label">등록일</span><span class="product-summary__meta-value">${formatDate(property.createdAt)}</span></li>` : ''
    ].filter(Boolean).join('');

    const summaryMetaHtml = summaryMetaItems
        ? `<ul class="product-summary__meta">${summaryMetaItems}</ul>`
        : '';

    return `
        <div class="product-card product-card--summary">
          <div class="product-card__badge product-card__badge--${statusConfig.className}">${statusConfig.label}</div>
          <h3 class="product-card__title">${property.title}</h3>
          ${property.description ? `<p class="product-card__subtitle">${property.description}</p>` : ""}
          ${businessTags.map(tag => `<span class="product-detail__tag">${tag}</span>`).join("")}
          <div class="product-summary__price">
            <span class="product-summary__price-label">창업 비용</span>
            <span class="product-summary__price-value">${priceValue}</span>
          </div>
          ${summaryMetricsHtml ? `<ul class="product-summary__metrics">${summaryMetricsHtml}</ul>` : ""}
          ${summaryMetaHtml}
          <div class="product-summary__consultation hero__consultation-card hero__consultation-card--inline">
            <h3 id="detail-consultation-title-${property.id}" class="hero__consultation-card-title">빠른 상담</h3>
            <form class="consultation__form consultation__form--detail" role="form" aria-labelledby="detail-consultation-title-${property.id}" data-property-id="${property.id}">
              <div class="form-group">
                <label for="detail-name-${property.id}" class="form-label">이름 <span aria-label="필수 입력">*</span></label>
                <input type="text" id="detail-name-${property.id}" class="form-control" data-field="name" required aria-required="true" placeholder="성함을 입력해 주세요">
              </div>
              <div class="form-group">
                <label for="detail-phone-${property.id}" class="form-label">연락처 <span aria-label="필수 입력">*</span></label>
                <input type="tel" id="detail-phone-${property.id}" class="form-control" data-field="phone" required aria-required="true" placeholder="연락 가능한 번호를 입력해 주세요">
              </div>
              <div class="form-group">
                <label for="detail-message-${property.id}" class="form-label">문의 내용</label>
                <textarea id="detail-message-${property.id}" class="form-control" rows="3" data-field="message" placeholder="궁금한 사항이나 요청을 자유롭게 남겨 주세요"></textarea>
              </div>
              <button type="submit" class="btn btn--primary btn--full-width">상담 신청</button>
            </form>
          </div>
        </div>
    `;
}

/**
 * 매물 상세 페이지의 주요 정보(좌측) HTML을 생성합니다.
 * @param {object} property - 매물 데이터 객체.
 * @returns {string} 주요 정보 HTML 문자열.
 */
function createDetailInfo(property) {
    const highlightData = [
        { label: "월 매출", value: formatCurrency(property.monthlyRevenue) },
        { label: "월 순이익", value: formatCurrency(property.monthlyProfit) },
        { label: "창업 비용", value: formatCurrency(property.startupCost) }
    ].filter(item => item.value && item.value !== "-");

    const metricsCardContent = highlightData.length
        ? `<div class="product-details__metrics-grid">
              ${highlightData.map(item => `
                <div class="product-details__metric-item">
                  <span class="product-details__metric-label">${item.label}</span>
                  <span class="product-details__metric-value">${item.value}</span>
                </div>
              `).join("")}
           </div>`
        : `<p class="product-card__empty">투자 지표가 준비 중입니다.</p>`;

    const metricsSectionHtml = `
            <section class="product-details__section">
              <h4 class="product-details__section-title">투자 지표</h4>
              ${metricsCardContent}
            </section>
          `;

    const businessMetaHtml = [
        property.businessCategory ? `<div class="product-details__business-item"><span class="product-details__business-label">업종</span><span class="product-details__business-value">${property.businessCategory}</span></div>` : "",
        property.businessSubcategory ? `<div class="product-details__business-item"><span class="product-details__business-label">세부 업종</span><span class="product-details__business-value">${property.businessSubcategory}</span></div>` : ""
    ].filter(Boolean).join("");

    const businessSectionHtml = `
            <section class="product-details__section">
              <h4 class="product-details__section-title">사업 정보</h4>
              ${businessMetaHtml ? `<div class="product-details__business-info">${businessMetaHtml}</div>` : `<p class="product-card__empty">사업 정보가 준비 중입니다.</p>`}
            </section>
          `;

    const mapUrl = property.location ? `https://map.kakao.com/?q=${encodeURIComponent(property.location)}` : '#';
    const locationDetailsHtml = property.location
        ? `
                <div class="product-details__location-text">
                  <p class="product-card__text"><strong>위치</strong> ${property.location}</p>
                  <p class="product-card__helper">정확한 주소는 상담 시 안내해 드립니다.</p>
                </div>
                <a class="product-card__link product-details__map-link" href="${mapUrl}" target="_blank" rel="noopener">
                  <span class="icon-map" aria-hidden="true">📍</span> 지도에서 살펴보기
                </a>
              `
        : `<p class="product-card__empty">위치 정보가 준비 중입니다.</p>`;

    const registrationListHtml = property.createdAt
        ? `<ul class="product-meta product-meta--columns">
              <li><span class="product-meta__label">등록일</span><span class="product-meta__value">${formatDate(property.createdAt)}</span></li>
            </ul>`
        : '';

    const locationSectionHtml = `
            <section class="product-details__section">
              <h4 class="product-details__section-title">입지 & 일정</h4>
              <div class="product-details__content">
                ${locationDetailsHtml}
                ${registrationListHtml}
              </div>
            </section>
          `;

    return `
            <article class="product-card product-card--details">
              <h3 class="product-card__title">주요 정보</h3>
              <div class="product-card__content-group">
                ${metricsSectionHtml}
                ${businessSectionHtml}
                ${locationSectionHtml}
              </div>
            </article>
          `;
}

/**
 * 매물 상세 설명 섹션 HTML을 생성합니다.
 * @param {object} property - 매물 데이터 객체.
 * @returns {string} 상세 설명 섹션 HTML 문자열.
 */
function createDescriptionSection(property) {
    const detailDescription = formatPropertyDetailRichText(property.detailedDescription || property.description);
    return `
        <article class="product-card product-card--description product-detail__description">
          <h3 class="product-card__title">상세 설명</h3>
          <div class="product-card__richtext">
            ${detailDescription || "<p>상세 설명이 준비 중입니다.</p>"}
          </div>
        </article>
    `;
}

/**
 * 상담 및 지원 섹션 HTML을 생성합니다.
 * @returns {string} 상담 및 지원 섹션 HTML 문자열.
 */
function createSupportSection() {
    return `
        <article class="product-card product-card--support product-detail__support">
          <h3 class="product-card__title">상담 & 지원</h3>
          <p class="product-card__subtitle">전문 매니저가 선별한 매물을 빠르게 안내해 드립니다.</p>
          <p class="product-summary__contact">전화 문의 1800-6755</p>
          <a class="btn btn--primary btn--full-width product-summary__call-button" href="tel:18006755">전화하기</a>
        </article>
    `;
}

/**
 * 특정 ID의 매물 상세 정보를 표시합니다.
 * DOM을 업데이트하고, 상세 페이지 뷰로 전환합니다.
 * @param {number} propertyId - 표시할 매물의 ID.
 */
export function showPropertyDetail(propertyId) {
    const listSection = document.getElementById('properties');
    const detailSection = document.getElementById('property-detail');
    const detailContent = document.getElementById('property-detail-content');

    if (!listSection || !detailSection || !detailContent) {
        console.error("상세 페이지를 표시하기 위한 필수 DOM 요소가 없습니다.");
        return;
    }

    const property = appState.data.properties.find(p => p.id === propertyId);
    if (!property) {
        console.error(`ID가 ${propertyId}인 매물을 찾을 수 없습니다.`);
        detailContent.innerHTML = `<p>요청하신 매물 정보를 찾을 수 없습니다.</p>`;
        return;
    }

    const headerHtml = renderPropertyHeader(property);
    const imageCarouselHtml = createImageCarousel(property);
    const detailInfoHtml = createDetailInfo(property);
    const summaryCardHtml = createSummaryCard(property);
    const descriptionHtml = createDescriptionSection(property);
    const supportHtml = createSupportSection();

    detailContent.innerHTML = `
      <article class="product-detail" aria-labelledby="property-detail-title">
        ${headerHtml}
        <div class="detail-layout">
          <div class="detail-layout__main">
            <section class="product-card product-card--media" aria-label="창업 매물 이미지">
              ${imageCarouselHtml}
            </section>
            ${detailInfoHtml}
          </div>
          <aside class="detail-layout__aside">
            ${summaryCardHtml}
          </aside>
        </div>
        ${descriptionHtml}
        ${supportHtml}
      </article>
    `;
    window.location.hash = propertyId;
    listSection.classList.add('hidden');
    detailSection.classList.remove('hidden');
    setupPropertyDetailInteractions(detailContent);
    // setupForms()는 app.js에서 한 번만 호출되므로 여기서 호출할 필요가 없습니다.
    window.scrollTo({ top: 0, behavior: CONSTANTS.BEHAVIOR_SMOOTH });
}

/**
 * 캐러셀 썸네일 클릭 시 메인 이미지를 변경합니다.
 * @param {HTMLElement} thumbnail - 클릭된 썸네일 이미지 요소.
 */
export function changeCarouselImage(thumbnail) {
  const imageUrl = thumbnail.dataset.imageUrl;
  const mainImage = thumbnail.closest('.image-carousel').querySelector('.carousel-main img');
  mainImage.src = imageUrl;
  const thumbnails = thumbnail.closest('.carousel-thumbnails').querySelectorAll('img');
  thumbnails.forEach(thumb => thumb.classList.remove('active'));
  thumbnail.classList.add('active');
}

/**
 * 매물 상세 페이지 내의 상호작용(탭, 위시리스트, 캐러셀 등)에 대한 이벤트 리스너를 설정합니다.
 * @param {HTMLElement} detailContent - 상세 페이지의 컨텐츠 컨테이너 요소.
 */
export function setupPropertyDetailInteractions(detailContent) {
    if (!detailContent) return;

    const tabs = detailContent.querySelectorAll('.product-detail__tab');
    const panels = detailContent.querySelectorAll('.product-detail__panel');
    if (tabs.length && panels.length) {
        panels.forEach(panel => {
            if (!panel.classList.contains('is-active')) {
                panel.hidden = true;
            }
        });
        tabs.forEach(tab => {
            const isActive = tab.classList.contains('is-active');
            tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
            tab.setAttribute('tabindex', isActive ? '0' : '-1');
            tab.addEventListener('click', () => {
                const target = tab.dataset.tab;
                tabs.forEach(t => {
                    const active = t === tab;
                    t.classList.toggle('is-active', active);
                    t.setAttribute('aria-selected', active ? 'true' : 'false');
                    t.setAttribute('tabindex', active ? '0' : '-1');
                });
                panels.forEach(panel => {
                    const match = panel.dataset.tabPanel === target;
                    panel.classList.toggle('is-active', match);
                    panel.hidden = !match;
                });
            });
        });
    }
    const wishlistBtn = detailContent.querySelector('[data-action="wishlist"]');
    if (wishlistBtn) {
        wishlistBtn.setAttribute('aria-pressed', 'false');
        wishlistBtn.addEventListener('click', () => {
            const isActive = wishlistBtn.classList.toggle('is-active');
            wishlistBtn.textContent = isActive ? '관심 매물 저장됨' : '관심 매물 담기';
            wishlistBtn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
    }
    const consultBtn = detailContent.querySelector('[data-action="consult"]');
    if (consultBtn) {
        consultBtn.addEventListener('click', () => {
            const consultationSection = document.querySelector('.hero__consultation-card') || document.querySelector('.consultation__form');
            if (consultationSection) {
                consultationSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    const chatBtn = detailContent.querySelector('[data-action="chat"]');
    if (chatBtn) {
        const defaultLabel = chatBtn.textContent;
        chatBtn.addEventListener('click', () => {
            chatBtn.textContent = '상담 연결 대기 중...';
            chatBtn.disabled = true;
            setTimeout(() => {
                chatBtn.textContent = defaultLabel;
                chatBtn.disabled = false;
            }, 2000);
        });
    }

    // 이미지 캐러셀 이벤트 위임
    const carouselThumbnails = detailContent.querySelector('.carousel-thumbnails');
    if (carouselThumbnails) {
        carouselThumbnails.addEventListener('click', (event) => {
            const thumbnail = event.target.closest('[data-action="change-carousel-image"]');
            if (thumbnail) {
                changeCarouselImage(thumbnail);
            }
        });
    }
}
/**
 * 상세 설명 텍스트의 특정 마크업을 HTML 태그로 변환합니다.
 * (예: **text** -> <strong>text</strong>)
 * @param {string} text - 변환할 원본 텍스트.
 * @returns {string} HTML로 변환된 텍스트.
 */
export function formatPropertyDetailRichText(text) {
    if (!text) return '';
    const strongPattern = /[*]{2}(.*?)[*]{2}/g;
    const paragraphSplitter = /(?:\r?\n){2,}/;
    const lineBreakPattern = /\r?\n/g;
    const withStrong = text.replace(strongPattern, '<strong>$1</strong>');
    const paragraphs = withStrong.split(paragraphSplitter)
        .map(part => part.trim())
        .filter(Boolean);
    return paragraphs
        .map(paragraph => `<p>${paragraph.replace(lineBreakPattern, '<br>')}</p>`)
        .join('');
}

/**
 * 매물 목록 뷰를 다시 표시합니다.
 */
export function showPropertiesList() {
    const listSection = document.getElementById('properties');
    const detailSection = document.getElementById('property-detail');
    if (listSection && detailSection) {
        listSection.classList.remove('hidden');
        detailSection.classList.add('hidden');
        window.location.hash = '';
    }
}
