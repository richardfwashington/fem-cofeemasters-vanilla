const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        Router.go(a.getAttribute("href"));
      });
    });
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`);
  },
};

export default Router;
