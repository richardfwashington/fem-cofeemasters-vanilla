const Store = {
  menu: null,
  cart: [],
};

const proxiedStore = new Proxy(Store, {
  set(target, property, value) {
    target[property] = value;
    if(property=="menu") {
      window.dispatchEvent(new Event("appmenuchange")); // Window not document as we are using shadow DOMs
    }
    if(property=="cart") {
      window.dispatchEvent(new Event("appcartchange"));
    }
    return true;
  },
get(target, property) {
  console.info('getting..');
  return target[property];
}
});

export default proxiedStore;
