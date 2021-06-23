import { createApp } from 'vue'
import router from "./router.js"
import App from './App.vue'

const Vue = createApp(App)

Vue.use(router)
Vue.mount('#app')
