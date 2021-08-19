import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//ui
import { Button } from 'ant-design-vue';

createApp(App).use(router).use(Button).mount('#app')
