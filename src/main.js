import Vue from 'vue'
import App from './App.vue'

import VueDirectiveMarkdown from '../vue-directive-markdown'
Vue.directive('md', VueDirectiveMarkdown)

new Vue({
  el: '#app',
  render: h => h(App)
})
