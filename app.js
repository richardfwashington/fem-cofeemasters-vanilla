import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";

window.app = {};
app.store = Store;

// Wait for everything to be in memory before we try and manipulate the DOM
window.addEventListener("DOMContentLoaded", () => {
  loadData();
});

/*
window.addEventListener("DOMContentLoaded", () => {
  let nav = document.querySelector("nav");

  console.log(nav);

  nav.innerHTML = `
  <h1>Hello DOM</h1>
  <p>This is HTML within a JavaScript string</p>
  `;
});*
/*
// Use $ instead of document.querySelector - just like JQuery
const $ = (args) => document.querySelector(args);

// Use $$ instead of document.querySelectorAll
const $$ = (args) => document.querySelectorAll(args);

// Use .on instead of addEventListener
HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, c);

// Use .off instead of removeEventListener
HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);

// Use element.$ instead of element.querySelector
HTMLElement.prototype.$ = (s) => this.querySelector(s);

// Use element.$$ instead of element.querySelectorAll
HTMLElement.prototype.$$ = (s) => this.querySelectorAll(s);*/
