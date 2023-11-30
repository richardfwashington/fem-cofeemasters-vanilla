window.addEventListener("DOMContentLoaded", () => {
  let nav = $("nav");

  console.log(nav);

  nav.innerHTML = `
  <h1>Hello DOM</h1>
  <p>This is HTML within a JavaScript string</p>
  `;
});

// Use $ instead of document.querySelector - just like JQuery
const $ = function (args) {
  return document.querySelector(args);
};

// Use $$ instead of document.querySelectorAll
const $$ = function (args) {
  return document.querySelectorAll(args);
};

// Use .on instead of addEventListener
HTMLElement.prototype.on = function (a, b, c) {
  return this.addEventListener(a, b, c);
};

// Use .off instead of removeEventListener
HTMLElement.prototype.off = function (a, b) {
  return this.removeEventListener(a, b);
};

// Use element.$ instead of element.querySelector
HTMLElement.prototype.$ = function (s) {
  return this.querySelector(s);
};
// Use element.$$ instead of element.querySelectorAll
HTMLElement.prototype.$$ = function (s) {
  return this.querySelectorAll(s);
};
