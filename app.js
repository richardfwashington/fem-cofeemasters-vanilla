window.addEventListener("DOMContentLoaded", () => {
  let nav = document.querySelector("nav");

  console.log(nav);

  nav.innerHTML = `
  <h1>Hello DOM</h1>
  <p>This is HTML within a JavaScript string</p>
  `;
});

window.addEventListener("DOMContentLoaded", () => {});
