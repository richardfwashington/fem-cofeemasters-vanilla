export default class MenuPage extends HTMLElement {
    constructor() {
        super(); 

        this.root = this.attachShadow({ mode: "open" }); // Set root to a shadow DOM

        const styles = document.createElement("style");
        this.root.appendChild(styles);

        async function loadCSS() {
            const request = await fetch('/components/MenuPage.css');
            const css = await request.text();
            styles.textContent = css;
        }
        loadCSS();

    }
    connectedCallback() {
        const template = document.getElementById('menu-page-template');
        const content = template.content.cloneNode(true);
        this.root.appendChild(content); // Attach to the shadow DOM to isolate styles
    }
}
customElements.define("menu-page", MenuPage);