import { createRouter, createWebHistory } from 'vue-router'
import ResumeView from '../views/ResumeView.vue'
import ServicesView from '../views/ServicesView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ReviewsView from '../views/PortfolioView.vue'
import ContactsView from '../views/ContactsView.vue'

const routes = [
	{
		path: '/',
		name: 'resume',
		component: ResumeView
	},
	{
		path: '/services',
		name: 'services',
		component: ServicesView
	},
	{
		path: '/portfolio',
		name: 'portfolio',
		component: PortfolioView
	},
	{
		path: '/reviews',
		name: 'reviews',
		component: ReviewsView
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: ContactsView
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
