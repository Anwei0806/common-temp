import Layout from '@/layout'

const kpiManageRouter = {
	path: '/kpiManage',
	component: Layout,
	redirect: '/kpiManage/index',
	meta: { roles: ['editor'] },
	children: [
		{
			path: 'index',
			component: () => import('@/views/kpiManage/index'),
			name: 'KpiManage',
			meta: { title: 'KPI管理', icon: 'kpiManage', noCache: true }
		}
	]
}

export default kpiManageRouter
