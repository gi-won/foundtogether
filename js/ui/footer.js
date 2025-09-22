/**
 * Returns the HTML string for the common site footer.
 * @returns {string} The footer HTML.
 */
export function getFooterHTML() {
    return `
    <footer role="contentinfo" class="footer">
        <div class="container">
            <div class="footer__content">
                <div class="footer__section">
                    <h3>회사정보</h3>
                    <p>주식회사 제이앤씨</p>
                    <p>부산시 해운대구 센텀중앙로 97 에이동 2305호 (재송동, 센텀스카이비즈)</p>
                    <p>대표: 황지환 | 사업자등록번호: 716-88-01290</p>
                </div>
                <div class="footer__section">
                    <h3>법무법인 파트너</h3>
                    <p>법무법인 성안</p>
                    <p>계약서 작성 및 분쟁조정 지원</p>
                </div>
                <div class="footer__section">
                    <h3>고객센터</h3>
                    <p>전화: 1800-6755</p>
                    <p>이메일: yjy@thefcha.com</p>
                    <p>운영시간: 평일 09:00-18:00</p>
                </div>
            </div>
            <div class="footer__bottom">
                <p>&copy; 2025 thefcha. All rights reserved.</p>
                <div class="footer__links">
                    <a href="privacy.html" target="_blank">개인정보처리방침</a>
                    <a href="terms.html" target="_blank">이용약관</a>
                </div>
            </div>
        </div>
    </footer>`;
}