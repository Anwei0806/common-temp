<template>
	<div class="kpiManage-container">KPI管理</div>
</template>

<script>
export default {
	name: 'KpiManage',
	components: {},
	data() {
		return {}
	},
	computed: {},
	created() {
		this.initKpiManageList()
	},
	methods: {
		initKpiManageList() {
			console.log(this.$Api.kpiManage)
			this.$Api.kpiManage.getKpiManageList().then(res => {
				let { code, data, msg } = res.data
				if (code == 20000) {
				}
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.kpiManage-container {
	padding: 20px;
}
</style>
