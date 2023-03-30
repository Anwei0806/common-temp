/** *
 * Vue.config.js配置
 * @Author ANWEI
 * 2022.5.20
 */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // 打包插件体积分析插件
const TerserPlugin = require('terser-webpack-plugin') // 去除console插件
const CompressionPlugin = require('compression-webpack-plugin') //开启 gzip 压缩
const ProjectVersion = require('./src/common/utils/version.js')
const { assetsCDN } = require('./src/common/utils/cdn.js')

const path = require('path')
function resolve(dir) {
	return path.join(__dirname, dir)
}

const isProd = process.env.NODE_ENV === 'production' // 判断是否是生产模式

module.exports = {
	// 选项
	transpileDependencies: ['sockjs-client', 'js-base64', 'js-cookie'], // 指定babel-loader转义的插件 其余不转义
	publicPath: './', // 基本路径配置
	outputDir: 'dist', // 打包构建时的输出目录
	assetsDir: 'static', // 放置静态资源的目录
	indexPath: 'index.html', // html的输出路径
	filenameHashing: true, // 文件名哈希
	lintOnSave: true, // 是否在保存的时候使用'eslint-loader'进行检查
	runtimeCompiler: false, // 是否使用带有浏览器内编译器的完整构建版本
	productionSourceMap: false, // 生产环境是否生成 SourceMap
	devServer: {
		open: 'http://localhost:8080', // 自动启动
		host: '0.0.0.0',
		port: 8080, // 服务端口
		https: false,
		hotOnly: false, // 热更新
		proxy: {
			// 本地代理包含user的接口 如： /user/getUser
			'/dev-api': {
				// 目标 API 地址
				target: 'http://192.168.0.122:8088',
				// 将主机标头的原点更改为目标URL
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': '' // 代理的路径
				}
			}
		},
		before: require('./mock/mock-server.js')
	},
	css: {
		// 是否使用css分离插件 ExtractTextPlugin
		extract: isProd,
		// 开启 CSS source maps?
		sourceMap: false
	},
	chainWebpack: config => {
		//SvgIcon组件配置
		const svgRule = config.module.rule('svg')
		svgRule.uses.clear()
		svgRule.exclude.add(/node_modules/)
		svgRule
			.test(/\.svg$/)
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]'
			})
			.end()
		config.plugins.delete('preload') // 移除preload(预载插件)
		config.plugins.delete('prefetch') // 移除prefetch(预取插件)
		config.entry('main').add('babel-polyfill') // main是入口js文件
		// 设置别名路径
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@views', resolve('./src/views'))
			.set('@router', resolve('./src/router'))
			.set('@store', resolve('./src/store'))
			.set('@utils', resolve('./src/common/utils'))
		config.optimization.minimize(true) // 压缩代码
		config.optimization.splitChunks({
			// 分割代码
			chunks: 'all'
		})
		config.plugin('html').tap(args => {
			//全局添加cdn
			args[0].ProjectVersion = ProjectVersion //全局添加git版本信息
			args[0].cdn = isProd
				? (assetsCDN.build = {
						css: assetsCDN.build.css.map(v => `${process.env.VUE_APP_BASE_API}/${v}`),
						js: assetsCDN.build.js.map(v => `${process.env.VUE_APP_BASE_API}/${v}`)
				  })
				: (assetsCDN.dev = {
						css: assetsCDN.dev.css.map(v => `/${v}`),
						js: assetsCDN.dev.js.map(v => `/${v}`)
				  })
			return args
		})
		config.externals(assetsCDN.externals)
		// 打包分析
		process.env.use_analyzer && config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)
	},
	configureWebpack: config => {
		config.plugins = [
			...config.plugins,
			// 开启 gzip 压缩
			new CompressionPlugin({
				filename: '[path][base].gz',
				algorithm: 'gzip',
				test: /\.js$|\.css$|\.html$/,
				threshold: 10240,
				minRatio: 0.8
			})
		]
		// 生产环境下清除 console.log
		if (isProd) {
			return {
				optimization: {
					minimizer: [
						new TerserPlugin({
							terserOptions: {
								compress: {
									drop_console: true
								}
							}
						})
					]
				}
			}
		}
	}
}
