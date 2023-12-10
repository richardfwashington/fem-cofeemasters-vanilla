export default class MenuPage extends HTMLElement {
    constructor() {
        super(); 

        this.root = this.attachShadow({ mode: "open" }); // Set root to a shadow DOM

    }
    connectedCallback() {
        const template = document.getElementById('menu-page-template');
        const content = template.content.cloneNode(true);
        this.root.appendChild(content); // Attach to the shadow DOM to isolate styles
    }
}
customElements.define("menu-page", MenuPage);