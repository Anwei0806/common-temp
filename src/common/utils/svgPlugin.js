import SvgIcon from '@/components/SvgIcon/index'
const componentPlugin = {
	install: function (vue, options) {
		if (options && options.imports && Array.isArray(options.imports) && options.imports.length > 0) {
			//按需引入svg图标
			const { imports } = options
			imports.forEach(name => {
				require(`@/assets/svgs/${name}.svg`)
			})
		} else {
			//全量引入
			const ctx = require.context('@/assets/svgs', false, /\.svg$/)
			ctx.keys().forEach(path => {
				const temp = path.match(/\.\/([A-Za-z0-9\-_]+)\.svg$/)
				if (!temp) return
				const name = temp[1]
				require(`@/assets/svgs/${name}.svg`)
			})
		}
		vue.component(SvgIcon.name, SvgIcon)
	}
}
export default componentPlugin
