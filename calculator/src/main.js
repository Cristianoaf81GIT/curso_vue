import Vue from "vue";
import App from "./App";

// repo https://github.com/cod3rcursos/web-moderno/tree/master/exercicios-web

new Vue({
  el: "#app",
  // render(createElement) {
  //   return createElement(App);
  // }
  render: h => h(App)
}).$mount("#app");
