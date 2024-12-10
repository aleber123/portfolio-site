import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)
const head = createHead()

// Add meta tags for SEO and accessibility
head.addHeadObjs({
  title: 'Frontend Developer Portfolio',
  meta: [
    { name: 'description', content: 'Frontend Developer portfolio specializing in Vue.js, accessibility, and design systems' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#4a90e2' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
  ]
})

app.use(router)
app.use(head)

// Global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error('Global error:', err)
  console.error('Error info:', info)
}

// Mount the app
app.mount('#app')
