import './assets/base.css'
import './assets/main.css'

import veeValidatePlugin from "./includes/validation";
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(veeValidatePlugin);

app.mount('#app')
