/**
 * Returns the HTML string for the common site header.
 * @returns {string} The header HTML.
 */
export function getHeaderHTML() {
    return `
    <header role="banner" class="header">
        <div class="container">
            <div class="header__content">
                <h1 class="header__logo">
                    <a href="index.html" aria-label="더프차 홈으로 이동">
                        <img class="header__logo-img" src="imgs/thefcha_horizontal_logo.svg" alt="thefcha logo">
                    </a>
                </h1>
                <button class="header__mobile-toggle" aria-label="메뉴 열기" aria-expanded="false" aria-controls="header-nav">
                    <span class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
                <nav class="header__nav" id="header-nav" role="navigation" aria-label="주요 메뉴">
                    <ul class="header__nav-list">
                        <li><a href="index.html" class="header__nav-link">회사소개</a></li>
                        <li><a href="properties.html" class="header__nav-link">창업물건</a></li>
                        <li><a href="faq.html" class="header__nav-link">FAQ게시판</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>`;
}