import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.config.productionTip = false

Vue.component('HelloWorld', HelloWorld)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
