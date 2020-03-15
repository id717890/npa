import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueJsModal from 'vue-js-modal'
import VueAnalytics from 'vue-analytics'
import 'aos/dist/aos.css'
import AOS from 'aos'
AOS.init()
Vue.use(VueJsModal, { dynamic: true })
Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-62478858-9'
})

import AxiosConfig from './api/http-config'
Vue.$http = AxiosConfig

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
