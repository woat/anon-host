import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pricing from '@/components/Pricing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
		{
			path: '/pricing',
			name: 'Pricing',
			component: Pricing
		}
  ]
})
