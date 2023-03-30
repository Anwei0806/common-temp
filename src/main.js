import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import plugin from '@/common/utils/svgPlugin'
import '@/common/theme/index.css' // 主题样式
import '@/common/styles/index.scss' // 全局样式
import '@/permission' //路由权限
import '@/common/utils/directives' //全局自定义指令
import '@/common/utils/filters' //全局自定义过滤器

Vue.use(plugin, { imports: [] })

import * as Api from '@/api'
Vue.prototype.$Api = Api

import moment from 'moment'
Vue.prototype.$Moment = moment

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.prototype.$bus = new Vue() // 全局事件总线

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
