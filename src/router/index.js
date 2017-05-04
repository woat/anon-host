import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Plans from '@/components/Plans'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
		{
			path: '/plans',
			name: 'Plans',
			component: Plans
		},
		{
			path: '*',
			name: 'Not Found',
			component: NotFound
		}
  ]
})
