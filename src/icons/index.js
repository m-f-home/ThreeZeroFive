import { createApp } from 'vue'
import svgIcon from '../components/svg_icon.vue'

const app = createApp()

app.component('svg-icon', svgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
