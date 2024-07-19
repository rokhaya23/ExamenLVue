import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes.js';


const app = createApp(App);

// Créez et configurez l'EventBus comme une propriété globale
const EventBus = app.config.globalProperties.$bus = createApp();

createApp(App).use(router).mount('#app')
