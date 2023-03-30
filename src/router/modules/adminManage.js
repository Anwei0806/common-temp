import Layout from '@/layout'

const adminManageRouter = {
	path: '/adminManage',
	component: Layout,
	redirect: '/adminManage/perShare',
	name: 'AdminManage',
	meta: { title: '后台管理', icon: 'adminManage', roles: ['admin'] },
	children: [
		{
			path: 'perShare',
			component: () => import('@/views/adminManage/perShare'),
			name: 'PerShare',
			meta: { title: '权限分配', icon: 'adminManage', noCache: true }
		},
		{
			path: 'baseManage',
			component: () => import('@/views/adminManage/baseManage'),
			name: 'BaseManage',
			meta: { title: '基地管理', icon: 'adminManage', noCache: true }
		}
	]
}

export default adminManageRouter
