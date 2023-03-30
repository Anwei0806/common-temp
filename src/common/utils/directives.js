import Vue from 'vue'
import store from '@/store'

/**
 * Action 权限指令
 * 指令用法：
 *  - 在需要控制 action 级别权限的组件上使用 v-action:[method] , 如下：
 *    <el-button v-action="'add'" >添加用户</el-button>
 *    <el-button v-action="'delete'">删除用户</el-button>
 *    <a v-action="'edit'" @click="edit(record)">修改</a>
 *
 *  - 当前用户没有权限时，组件上使用了该指令则会被隐藏
 *  - 当后台权限跟 pro 提供的模式不同时，只需要针对这里的权限过滤进行修改即可
 */
const action = Vue.directive('action', {
	inserted: function (el, binding, vnode) {
		const actionName = binding.value
		const roles = store.getters.roles
		console.log(roles, actionName)
		if (roles.indexOf(actionName) == -1) {
			el.style.display = 'none'
		} else {
			el.style.display = 'block'
		}
	}
})

const preventClick = Vue.directive('preventClick', {
	inserted(el, binding) {
		el.addEventListener('click', () => {
			if (!el.disabled) {
				el.disabled = true
				setTimeout(() => {
					el.disabled = false
				}, 1000)
			}
		})
	}
})

export default { action, preventClick }
