import request from '@/common/utils/request'

export function getKpiManageList(params) {
	return request({
		url: '/vue-element-admin/kpiManage/list',
		method: 'get',
		params
	})
}
