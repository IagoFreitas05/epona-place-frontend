import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'


//createApp(App).use(router).mount('#app')

const app = createApp(App).use(store).use(router)
app.use(VueAxios, axios)
app.mount('#app')
