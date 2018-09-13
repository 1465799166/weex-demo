import Vue from 'vue'
import Router from 'vue-router'
import Home from './index'
import Slider from './components/slider'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'index',
      children: [
        {
          path: 'slider',
          component: Slider,
          name: 'slider'
        }
      ]

    }
  ]
})
