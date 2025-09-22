import { getHeaderHTML } from './ui/header.js';
import { getFooterHTML } from './ui/footer.js';

/**
 * Injects a given HTML string into a specified element.
 * @param {string} html - The HTML string to inject.
 * @param {string} elementId - The ID of the element to inject the content into.
 */
function injectComponent(html, elementId) {
    const placeholder = document.getElementById(elementId);
    if (!placeholder) {
        console.warn(`Placeholder element with ID "${elementId}" not found.`);
        return;
    }
    try {
        placeholder.outerHTML = html; // Replace the placeholder with the fetched content
    } catch (error) {
        console.error(`Error injecting component into ${elementId}:`, error);
        placeholder.innerHTML = `<p style="color: red; text-align: center;">Error loading content.</p>`;
    }
}

/**
 * Loads the common header and footer components into the page.
 */
export function loadLayout() {
    injectComponent(getHeaderHTML(), 'header-placeholder');
    injectComponent(getFooterHTML(), 'footer-placeholder');
}