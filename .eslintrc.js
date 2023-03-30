module.exports = {
	root: true, // 当前配置为根配置，将不再从上级文件夹查找配置
	env: {
		node: true
	},
	extends: [
		// 扩展使用 vue 检查规则和eslint推荐规则
		'plugin:vue/essential' //vue 检查规则
		// 'eslint:recommended' //eslint推荐规则
	],
	parserOptions: {
		parser: 'babel-eslint' //采用 babel-eslint 作为语法解析器
	},
	rules: {
		//校验规则自定义下方
		// 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'error',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'error'
	}
}
