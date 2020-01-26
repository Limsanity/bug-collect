import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import HelloWorld from '@/components/HelloWorld.vue'
// Vue.component('HelloWorld', HelloWorld)
// Vue.component('HelloWorld', () => import('@/components/HelloWorld.vue'))
Vue.component('HelloWorld', function (resolve) {
  // resolve(HelloWorld)
  setTimeout(() => {
    resolve(HelloWorld)
  }, 3000)
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
