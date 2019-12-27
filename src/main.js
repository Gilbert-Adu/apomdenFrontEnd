import Vue from 'vue'
import Downloads from './components/Downloads'
import MainPage from './components/MainPage'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faDownload, faCamera, faWindows)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  template: '<MainPage/>',
  components: { MainPage }
})
