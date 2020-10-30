import { createApp } from 'vue'

import App from './App'

import contextmenu from '../src'

import '../src/themes/default/index.less'
import './styles/index.less'

const app = createApp(App)

app.use(contextmenu)
app.mount('#app')
