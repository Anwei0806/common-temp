import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Layout from '@/layout'

/* Router 模块 */
import kpiManage from './modules/kpiManage'
import adminManage from './modules/adminManage'

export const constantRoutes = [
	{
		path: '/redirect',
		component: Layout,
		hidden: true,
		children: [
			{
				path: '/redirect/:path(.*)',
				component: () => import('@/views/redirect/index')
			}
		]
	},
	{
		path: '/login',
		component: () => import('@/views/login/index'),
		hidden: true
	},
	{
		path: '/404',
		component: () => import('@/views/error-page/404'),
		hidden: true
	},
	{
		path: '/401',
		component: () => import('@/views/error-page/401'),
		hidden: true
	},
	{
		path: '/auth-redirect',
		component: () => import('@/views/login/auth-redirect'),
		hidden: true
	},
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		children: [
			{
				path: 'dashboard',
				component: () => import('@/views/dashboard/index'),
				name: 'Dashboard',
				meta: { title: '首页展示', icon: 'dashboard', affix: true }
			}
		]
	}
]

export const asyncRoutes = [
	kpiManage,
	adminManage,
	{
		hidden: true,
		path: '/error',
		component: Layout,
		redirect: 'noRedirect',
		name: 'ErrorPages',
		meta: {
			title: 'Error Pages',
			icon: '404'
		},
		children: [
			{
				path: '401',
				component: () => import('@/views/error-page/401'),
				name: 'Page401',
				meta: { title: '401', noCache: true }
			},
			{
				path: '404',
				component: () => import('@/views/error-page/404'),
				name: 'Page404',
				meta: { title: '404', noCache: true }
			}
		]
	},
	{ path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
	new Router({
		// mode: 'history',
		scrollBehavior: () => ({ y: 0 }),
		routes: constantRoutes
	})

const router = createRouter()
export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher
}

export default router
