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

        this.addEventListener('appmenuchange', () => {
            console.info('caught');
            this.render();
        });
        this.render();
    }

    render() {
        console.log(app.store.menu);
        if(app.store.menu) {
            for(let category of app.store.menu) {
                const liCategory = document.createElement("li");
                liCategory.innerHTML = `
                <h3>${category.name}</h3>
                <ul class="category">

                </ul>`;
                this.root.querySelector("#menu").appendChild(liCategory);
            }
            
        } else {
            this.root.querySelector("#menu").innerHTML = "Loading...";
        }
    }

}
customElements.define("menu-page", MenuPage);