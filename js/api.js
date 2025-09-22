// js/api.js
// API 호출 및 데이터 처리 함수 모듈

/**
 * 애플리케이션에 필요한 모든 데이터를 data.json에서 비동기적으로 가져옵니다.
 * @returns {Promise<object>} properties, faqs, services, reviews, businessCategories를 포함하는 데이터 객체.
 * @throws {Error} 네트워크 응답이 정상이 아닐 경우 에러를 발생시킵니다.
 */
export async function fetchData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Could not fetch data:", error);
        throw error;
    }
}

export async function fetchProperties() {
  // 실제 API 엔드포인트에 맞게 수정 필요
  const response = await fetch('/api/properties');
  if (!response.ok) throw new Error('매물 데이터를 불러오지 못했습니다.');
  return await response.json();
}

export async function fetchFaqs() {
  const response = await fetch('/api/faqs');
  if (!response.ok) throw new Error('FAQ 데이터를 불러오지 못했습니다.');
  return await response.json();
}

export async function fetchCategories() {
  const response = await fetch('/api/categories');
  if (!response.ok) throw new Error('카테고리 데이터를 불러오지 못했습니다.');
  return await response.json();
}

export async function fetchPropertyDetail(id) {
  const response = await fetch(`/api/properties/${id}`);
  if (!response.ok) throw new Error('매물 상세 정보를 불러오지 못했습니다.');
  return await response.json();
}

export async function fetchPropertyImages(id) {
  const response = await fetch(`/api/properties/${id}/images`);
  if (!response.ok) throw new Error('매물 이미지 정보를 불러오지 못했습니다.');
  return await response.json();
}

export async function fetchPropertyRichText(id) {
  const response = await fetch(`/api/properties/${id}/richtext`);
  if (!response.ok) throw new Error('매물 상세 설명을 불러오지 못했습니다.');
  return await response.json();
}

export async function fetchPropertyStatus(id) {
  const response = await fetch(`/api/properties/${id}/status`);
  if (!response.ok) throw new Error('매물 상태 정보를 불러오지 못했습니다.');
  return await response.json();
}

export async function fetchPropertyOwner(id) {
  const response = await fetch(`/api/properties/${id}/owner`);
  if (!response.ok) throw new Error('매물 소유자 정보를 불러오지 못했습니다.');
  return await response.json();
}

export async function fetchPropertyLocation(id) {
  const response = await fetch(`/api/properties/${id}/location`);
  if (!response.ok) throw new Error('매물 위치 정보를 불러오지 못했습니다.');
  return await response.json();
}

export async function fetchPropertyPrice(id) {
  const response = await fetch(`/api/properties/${id}/price`);
  if (!response.ok) throw new Error('매물 가격 정보를 불러오지 못했습니다.');
  return await response.json();
}

export async function fetchPropertyTags(id) {
  const response = await fetch(`/api/properties/${id}/tags`);
  if (!response.ok) throw new Error('매물 태그 정보를 불러오지 못했습니다.');
  return await response.json();
}

export async function fetchPropertyContact(id) {
  const response = await fetch(`/api/properties/${id}/contact`);
  if (!response.ok) throw new Error('매물 연락처 정보를 불러오지 못했습니다.');
  return await response.json();
}

export async function fetchPropertySimilar(id) {
  const response = await fetch(`/api/properties/${id}/similar`);
  if (!response.ok) throw new Error('유사 매물 정보를 불러오지 못했습니다.');
  return await response.json();
}

export async function fetchPropertyHistory(id) {
  const response = await fetch(`/api/properties/${id}/history`);
  if (!response.ok) throw new Error('매물 이력 정보를 불러오지 못했습니다.');
  return await response.json();
}
