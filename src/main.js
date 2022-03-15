import Vue from 'vue'
import App from './App.vue'
import sumFunction from './myPlugin/sumPlugin/index'

Vue.config.productionTip = false
Vue.use(sumFunction)

const vm = new Vue({
  render: h => h(App),
}).$mount('#app')
console.log(vm)