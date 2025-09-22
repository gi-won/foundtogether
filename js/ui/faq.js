// js/ui/faq.js
// FAQ 관련 UI 함수 모듈
import { appState, setFilteredFaqs, setCurrentFaqCategory, addFaq } from '../state.js';
import { closeModal, debounce } from '../utils.js';

/**
 * 필터링된 FAQ 목록을 화면에 렌더링합니다.
 * 각 아이템은 클릭하여 상세 내용을 볼 수 있습니다.
 */
export function renderFaqs() {
  const faqList = document.querySelector('.faq__list');
  if (!faqList) return;
  faqList.innerHTML = appState.filteredFaqs.map(faq => `
    <div class="faq-item" data-faq-id="${faq.id}" tabindex="0" role="button" aria-label="${faq.title} FAQ 보기">
      <div class="faq-item__header">
        ${faq.isPrivate ? '<span class="faq-item__privacy" aria-label="비공개 게시물">🔒</span>' : ''}
        <h3 class="faq-item__title">${faq.title}</h3>
        <span class="faq-item__category">${faq.category}</span>
      </div>
    </div>
  `).join('');
}

/**
 * 특정 ID의 FAQ 상세 정보를 표시합니다.
 * 비밀번호가 필요한 경우 비밀번호 입력 폼을, 그렇지 않은 경우 상세 내용을 렌더링합니다.
 * @param {number} faqId - 표시할 FAQ의 ID.
 */
export function showFaqDetail(faqId) {
  const listSection = document.getElementById('faq');
  const detailSection = document.getElementById('faq-detail');
  const detailContent = document.getElementById('faq-detail-content');
  const faq = appState.data.faqs.find(f => f.id === faqId);
  if (!faq || !listSection || !detailSection || !detailContent) return;
  if (faq.isPrivate) {
    detailContent.innerHTML = `
      <h2 id="faq-detail-title" class="section__title">${faq.title}</h2>
      <div class="faq-password-form">
        <h4>비공개 게시물입니다</h4>
        <p>비밀번호를 입력해주세요.</p>
        <form data-action="verify-faq-password" data-faq-id="${faq.id}">
          <div class="form-group">
            <label for="faq-password-input" class="form-label">비밀번호</label>
            <input type="password" id="faq-password-input" class="form-control" required>
          </div>
          <button type="submit" class="btn btn--primary">확인</button>
        </form>
      </div>
    `;
  } else {
    renderFaqContent(faq, detailContent);
  }
  listSection.classList.add('hidden');
  detailSection.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * FAQ의 제목, 질문, 답변 내용을 HTML로 렌더링하여 컨테이너에 삽입합니다.
 * @param {object} faq - 렌더링할 FAQ 객체.
 * @param {HTMLElement} container - HTML을 삽입할 컨테이너 요소.
 */
export function renderFaqContent(faq, container) {
  const answer = faq.detailedAnswer || faq.answer;
  const formattedAnswer = answer.replace(/\n/g, '<br>');
  container.innerHTML = `
    <h2 id="faq-detail-title" class="section__title">${faq.title}</h2>
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

/**
 * FAQ 목록 뷰를 다시 표시합니다.
 */
export function showFaqList() {
  const listSection = document.getElementById('faq');
  const detailSection = document.getElementById('faq-detail');
  if (listSection && detailSection) {
    listSection.classList.remove('hidden');
    detailSection.classList.add('hidden');
    window.location.hash = '';
  }
}

/**
 * FAQ 탭 변경 이벤트를 처리합니다.
 * @param {string} category - 선택된 카테고리.
 * @param {HTMLElement} tabElement - 클릭된 탭 요소.
 */
export function handleFaqTabChange(category, tabElement) {
  document.querySelectorAll('.faq__tab').forEach(tab => {
    tab.classList.remove('active');
    tab.setAttribute('aria-selected', 'false');
  });
  tabElement.classList.add('active');
  tabElement.setAttribute('aria-selected', 'true');
  setCurrentFaqCategory(category);
  filterFaqs();
}

/**
 * 현재 카테고리와 검색어에 따라 FAQ 목록을 필터링하고 다시 렌더링합니다.
 */
export function filterFaqs() {
  const faqSearch = document.getElementById('faq-search');
  const searchTerm = faqSearch ? faqSearch.value.toLowerCase() : '';
  const filtered = appState.data.faqs.filter(faq => {
    const matchesCategory = !appState.currentFaqCategory || faq.category === appState.currentFaqCategory;
    const matchesSearch = !searchTerm || faq.title.toLowerCase().includes(searchTerm) || faq.question.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });
  setFilteredFaqs(filtered);
  renderFaqs();
}

/**
 * 'FAQ 추가' 폼 제출 이벤트를 처리합니다.
 * 새로운 FAQ 객체를 생성하고 상태에 추가한 후, UI를 업데이트합니다.
 * @param {Event} e - 폼 제출 이벤트 객체.
 */
export function handleAddFaqSubmit(e) {
  e.preventDefault();
  const category = document.getElementById('faq-category').value;
  const title = document.getElementById('faq-title').value;
  const question = document.getElementById('faq-question').value;
  const isPrivate = document.querySelector('input[name="faq-privacy"]:checked').value === 'private';
  const password = isPrivate ? document.getElementById('faq-password').value : null;
  const newFaq = {
    id: (appState.data.faqs.length > 0 ? Math.max(...appState.data.faqs.map(f => f.id)) : 0) + 1,
    category,
    title,
    question,
    isPrivate,
    password,
    answer: '답변 대기중입니다. 빠른 시일 내에 답변드리겠습니다.'
  };
  addFaq(newFaq);
  renderFaqs();
  closeModal('add-faq-modal');
  e.target.reset();
  togglePasswordField();
  alert('FAQ가 성공적으로 등록되었습니다.');
}

/**
 * FAQ 등록 폼에서 '비공개' 옵션 선택 시 비밀번호 입력 필드를 토글합니다.
 */
export function togglePasswordField() {
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

/**
 * FAQ 페이지의 모든 기능(탭, 검색, 목록 아이템 클릭 등)에 대한 이벤트 리스너를 설정합니다.
 */
export function setupFaqFunctionality() {
    const tabs = document.querySelectorAll('.faq__tab');
    const searchInput = document.getElementById('faq-search');
    const faqList = document.querySelector('.faq__list');
    const detailSection = document.getElementById('faq-detail');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => handleFaqTabChange(tab.dataset.category, tab));
    });

    if (searchInput) {
        searchInput.addEventListener('input', debounce(filterFaqs, 300));
    }

    if (faqList) {
        faqList.addEventListener('click', (e) => {
            const item = e.target.closest('.faq-item');
            if (item) {
                e.preventDefault();
                const faqId = parseInt(item.dataset.faqId, 10);
                showFaqDetail(faqId);
            }
        });
        faqList.addEventListener('keydown', (e) => {
            const item = e.target.closest('.faq-item');
            if (item && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                const faqId = parseInt(item.dataset.faqId, 10);
                showFaqDetail(faqId);
            }
        });
    }

    if (detailSection) {
        detailSection.addEventListener('submit', (e) => {
            if (e.target.dataset.action === 'verify-faq-password') {
                e.preventDefault();
                const form = e.target;
                const faqId = parseInt(form.dataset.faqId, 10);
                const passwordInput = form.querySelector('#faq-password-input');
                verifyFaqPassword(faqId, passwordInput.value);
            }
        });
    }

    filterFaqs();
}

/**
 * 비공개 FAQ의 비밀번호를 확인하고, 일치하면 내용을 표시합니다.
 * @param {number} faqId - 확인할 FAQ의 ID.
 * @param {string} enteredPassword - 사용자가 입력한 비밀번호.
 */
function verifyFaqPassword(faqId, enteredPassword) {
    const faq = appState.data.faqs.find(f => f.id === faqId);
    if (!faq) return;

    if (enteredPassword === faq.password) {
        const detailContent = document.getElementById('faq-detail-content');
        renderFaqContent(faq, detailContent);
    } else {
        alert('비밀번호가 일치하지 않습니다.');
    }
}
