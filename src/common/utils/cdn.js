// 打包引入 cdn 链接 减少项目体积
const assetsCDN = {
	externals: {
		vue: 'Vue',
		vuex: 'Vuex',
		'vue-router': 'VueRouter',
		axios: 'axios',
		echarts: 'echarts',
		'element-ui': 'ELEMENT',
		moment: 'moment',
		nprogress: 'NProgress'
	},
	dev: {
		css: ['cdnStore/nprogress/nprogress.min.css'],
		js: [
			'cdnStore/vue/vue.runtime.min.js',
			'cdnStore/echarts/echarts.min.js',
			'cdnStore/vue-router/vue-router.min.js',
			'cdnStore/vuex/vuex.min.js',
			'cdnStore/axios/axios.min.js',
			'cdnStore/element-ui/index.js',
			'cdnStore/moment/moment.min.js',
			'cdnStore/nprogress/nprogress.min.js'
		]
	},
	build: {
		css: ['cdnStore/nprogress/nprogress.min.css'],
		js: [
			'cdnStore/vue/vue.runtime.min.js',
			'cdnStore/echarts/echarts.min.js',
			'cdnStore/vue-router/vue-router.min.js',
			'cdnStore/vuex/vuex.min.js',
			'cdnStore/axios/axios.min.js',
			'cdnStore/element-ui/index.js',
			'cdnStore/moment/moment.min.js',
			'cdnStore/nprogress/nprogress.min.js'
		]
	}
}
module.exports = { assetsCDN }
