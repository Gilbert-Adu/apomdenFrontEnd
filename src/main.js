import Vue from 'vue'
import Downloads from './components/Pages/Downloads'
import MainPage from './components/Pages/MainPage'
import BaseButton from './components/Buttons/BaseButton'
import LikeButton from './components/Buttons/LikeButton'
import CommentButton from './components/Buttons/CommentButton'
import ShareButton from './components/Buttons/ShareButton'
import SubscribeButton from './components/Buttons/SubscribeButton'
import NavBar from './components/Navigation/NavBar'
import Login from './components/Pages/Login'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faDownload, faBars, faWindows, faThumbsUp, faShare,faHeart,faComment)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  template: '<NavBar/>',
  components: { NavBar }
})
