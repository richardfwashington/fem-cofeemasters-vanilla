const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        Router.go(a.getAttribute("href"));
      });
    });

    window.addEventListener('popstate',  event => {
      Router.go(event.state.route, false);
  });
  },
  go: (route, addToHistory=true) => {
    if (addToHistory) {
        history.pushState({ route }, '', route);
    }
    let pageElement = null;
    switch (route) {
        case "/":
            pageElement = document.createElement("menu-page");
            break;
        case "/order":
            pageElement = document.createElement("order-page");
            break;
        default:
            if (route.startsWith("/product-")) {                
                pageElement = document.createElement("details-page");
                pageElement.dataset.productId = route.substring(route.lastIndexOf("-")+1);
                pageElement.dataset.id = paramId;
            }
            break;   
    }
    if (pageElement) {
        document.querySelector("main").innerHTML = "";
        document.querySelector("main").appendChild(pageElement);
    }

    window.scrollX = 0;
}
};

export default Router;
