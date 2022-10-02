import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ChakraPlugin from '@chakra-ui/vue-next'


const app = createApp(App)

app.use(ChakraPlugin)

app.mount('#app')
