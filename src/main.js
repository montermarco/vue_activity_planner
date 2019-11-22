import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// h stands for hyperscript
new Vue({
  render: h => h(App),
}).$mount('#app')


  