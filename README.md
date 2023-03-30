### 项目简介
common-pc-template是一个pc端快速开发模板，基于vue2.0+axios+router+vuex+element的全家桶组合。集成axios分模块请求，mock自定义模拟接口服务，git最新信息查看，动态分类router，analyzer包体积监控，eslint代码审查，prettier统一代码风格，及公共三方库cdn加载配置。
角色 admin editor 可根据不同角色 配置对应路由
账号：admin  密码：123456
账号：admin  密码：123456

### 快速预览
1. 克隆项目
git clone http://10.1.1.160/base-framework/common-pc-template.git
3. 进入项目
cd common-pc-template
5. 依赖下载
yarn 
7. 运行
yarn serve
8. 打包
yarn build
9. 包体积查看
yarn analyzer

### 新人须知
- [x] 最新git 提交信息如何查看
首先按上述运行项目后 打开浏览器控制台(f12) 查看如下地方
![](https://huatu.98youxi.com/markdown/work/uploads/upload_bdd6b18cfbaf09ae53519170030649b7.png)



- [x] 了解项目整体目录 及目录文件开发时如何存放
views 页面存放
router/modules 路由分模块配置
styles 公共样式存放
api/modules 接口分模块配置
common/utils/directives.js  全局指令
common/utils/filters.js  全局过滤器
剩余部分 看下面整体目录

- [x] 项目代码检查 格式化代码配置成功
vscode 编辑器 下载eslint prettier
![](https://huatu.98youxi.com/markdown/work/uploads/upload_f06ddf34475dd2bfd1ecf604360ce2ac.png)
![](https://huatu.98youxi.com/markdown/work/uploads/upload_7c91da67631ca7bda26878798223140e.png)
找到根目录下<font class="text-color-1" color="#f44336">.vscode .eslintrc.js </font>两个文件 可修改自己的配置 目前都已配置 直接用即可 
找到.vue 文件 编辑打乱代码格式 ctrl+s 代码是否格式化成功

- [x] mock学会配置对应接口 正常访问调用
先找到对应mock/modules 目录 如下配置
![](https://huatu.98youxi.com/markdown/work/uploads/upload_d3e0c74937671a933aa0bc7a343f67cd.png)
再找到index.js 文件 进行配置 ![](https://huatu.98youxi.com/markdown/work/uploads/upload_eef1ef6cc96183cee37f461f06767a63.png)
到这边mock 接口配置完成 可进行调用 下面介绍 如何配置api 进行分模块调用

- [x] api如何分模块配置 及如何进行调用
中大型项目中随着模块类页面较多 接口也变得繁多 如何打理好这些接口 以防重复或者错乱调用 就得想办法给它去分模块 举上例 kaiManage 页面中配置 找到src/api/modules 目录 如下配置
![](https://huatu.98youxi.com/markdown/work/uploads/upload_2ae50738aacb99b4b6e572ec8b6a93ee.png)
同样 再通过主js 进行分模块导出
![](https://huatu.98youxi.com/markdown/work/uploads/upload_01520dafe54af22efeb8131f7af169b6.png)
最后 再将整个api目录挂载到vue 原型链上 页面中访问 就可以如下访问
![](https://huatu.98youxi.com/markdown/work/uploads/upload_658f3fb8de4e895a6ec558931a985227.png)
- [x] 路由权限 按钮权限逻辑学会配置
按钮权限 
在项目目录中全局指令中有详细介绍
![](https://huatu.98youxi.com/markdown/work/uploads/upload_dae385cf40e773692e6cb3a8039b34ac.png)
v-action="唯一key" 用户信息接口 获取到唯一的key 权限 进行展示 隐藏

路由权限 
根据登录进来的用户信息接口 获取到对应的role 角色key 根据这个角色key 绑定在对应要展示的路由中 如何绑定 看下图
![](https://huatu.98youxi.com/markdown/work/uploads/upload_e22461da794cb9fbd602a59763a8199c.png)


### 构建目录
```
├─.env.development 开发地址
├─.env.production 生产地址
├─.eslintrc.js   代码检查
├─babel.config.js js转义配置
├─vue.config.js 项目配置 
├─src
|  ├─App.vue
|  ├─main.js
|  ├─permission.js 权限路由拦截
|  ├─settings.js  全局参数设置
|  ├─views 各主页面
|  |   ├─redirect
|  |   |    └index.vue
|  |   ├─login
|  |   |   ├─auth-redirect.vue
|  |   |   └index.vue
|  |   ├─kpiManage
|  |   |     └index.vue
|  |   ├─error-page
|  |   |     ├─401.vue
|  |   |     └404.vue
|  |   ├─dashboard
|  |   |     └index.vue
|  |   ├─adminManage
|  |   |      ├─baseManage.vue
|  |   |      └perShare.vue
|  ├─store 缓存仓库 (分模块)
|  |   ├─getters.js
|  |   ├─index.js
|  |   ├─modules 
|  |   |    ├─app.js
|  |   |    ├─permission.js
|  |   |    └user.js
|  ├─router 路由(分模块路由配置)
|  |   ├─index.js
|  |   ├─modules
|  |   |    ├─adminManage.js
|  |   |    └kpiManage.js
|  ├─layout 页面布局
|  |   ├─index.vue
|  |   ├─mixin
|  |   |   └ResizeHandler.js
|  |   ├─components
|  |   |     ├─AppMain.vue
|  |   |     ├─index.js
|  |   |     ├─Navbar.vue
|  |   |     ├─Sidebar
|  |   |     |    ├─FixiOSBug.js
|  |   |     |    ├─index.vue
|  |   |     |    ├─Item.vue
|  |   |     |    ├─Link.vue
|  |   |     |    ├─Logo.vue
|  |   |     |    └SidebarItem.vue
|  ├─components 公共组件
|  |     ├─SvgIcon
|  |     |    └index.vue
|  |     ├─Hamburger
|  |     |     └index.vue
|  |     ├─Breadcrumb
|  |     |     └index.vue
|  ├─common 公共资源(工具类js/css 等等)
|  |   ├─utils
|  |   |   ├─auth.js cookie操作
|  |   |   ├─cdn.js  cdn配置地址
|  |   |   ├─directives.js 全局自定义指令
|  |   |   ├─filters.js 全局自定义过滤器
|  |   |   ├─get-page-title.js 
|  |   |   ├─index.js 全局工具类函数
|  |   |   ├─request.js 全局axios请求拦截器
|  |   |   ├─svgPlugin.js 
|  |   |   ├─validate.js 全局表单校验函数
|  |   |   └version.js git提交信息
|  |   ├─theme element 主题
|  |   |   ├─index.css
|  |   |   ├─fonts
|  |   |   |   ├─element-icons.ttf
|  |   |   |   └element-icons.woff
|  |   ├─styles  
|  |   |   ├─btn.scss
|  |   |   ├─element-ui.scss
|  |   |   ├─element-variables.scss
|  |   |   ├─index.scss
|  |   |   ├─mixin.scss
|  |   |   ├─sidebar.scss
|  |   |   ├─transition.scss
|  |   |   └variables.scss
|  ├─api 请求api封装处(分模块调用 例:kpiManage接口调用)
|  |  ├─index.js
|  |  ├─modules
|  |  |    ├─kpiManage.js
|  |  |    └user.js
├─public 单页面主html处(cdnStore放置公共第三方地址减少项目内打包体积)
|   ├─favicon.ico
|   ├─index.html
|   ├─cdnStore cdn引入公共资源
|   |    ├─vuex
|   |    |  └vuex.min.js
|   |    ├─vue-router
|   |    |     └vue-router.min.js
|   |    ├─vue
|   |    |  └vue.runtime.min.js
|   |    ├─nprogress
|   |    |     ├─nprogress.min.css
|   |    |     └nprogress.min.js
|   |    ├─moment
|   |    |   └moment.min.js
|   |    ├─element-ui
|   |    |     └index.js
|   |    ├─echarts
|   |    |    └echarts.min.js
|   |    ├─axios
|   |    |   └axios.min.js
├─mock 模拟服务(可根据后端文档数据自定义对应接口 加快整体开发效率 例:kpiManage接口调用) 
|  ├─index.js
|  ├─mock-server.js
|  ├─utils.js
|  ├─modules
|  |    ├─kpiManage.js
|  |    └user.js
```
