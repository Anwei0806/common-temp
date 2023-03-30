const list = [{ name: '01' }, { name: '02' }]

module.exports = [
	// kpiManage 列表
	{
		url: '/vue-element-admin/kpiManage/list',
		type: 'get',
		response: config => {
			return {
				code: 20000,
				data: list
			}
		}
	}
]
