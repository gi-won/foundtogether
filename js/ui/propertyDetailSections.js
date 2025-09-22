// propertyDetailSections.js - 재사용 가능한 섹션 렌더러
export function renderMetricsGrid(items, extraClasses = '') {
  if (!items || items.length === 0) {
    return '<p class="product-card__empty">정보가 준비 중입니다.</p>';
  }
  return `
    <div class="product-details__metrics-grid ${extraClasses}">
      ${items.map(item => `
        <div class="product-details__metric-item">
          <span class="product-details__metric-label">${item.label}</span>
          <span class="product-details__metric-value">${item.value}</span>
        </div>
      `).join('')}
    </div>
  `;
}

export function renderSectionHeading(title, helperHtml = '', id = '') {
  const helper = helperHtml ? `<span class="product-card__helper product-details__location-helper-inline">${helperHtml}</span>` : '';
  const idAttr = id ? ` id="${id}"` : '';
  return `
    <div class="product-details__section-heading">
      <h4${idAttr} class="product-details__section-title">${title}</h4>
      ${helper}
    </div>
  `;
}
