import './assets/main.css'

import { createApp } from 'vue'
//从一个单文件组件中导入根组件
import App from './App.vue'
import router from './router'

/**
 * 应用实例
 * 每个Vue应用都是通过createApp函数创建一个新的应用实例：
 *
 * we传入createApp的对象实际上是一个组件，每个应用都需要一个"根组件"，
 * 其它组件将作为其子组件。（而且根组件在一个project貌似只能存在一个）
 *
 */
const app = createApp(App)

app.use(router)
/**
 * 挂载应用
 * 应用实例必须在调用了.mount()方法后才会渲染出来。
 * 该方法接收一个"容器"参数，可以是一个实际的DOM元素或是一个CSS选择器字符串。
 */
app.mount('#app')
/**
 * 应用根组件的内容将会被渲染在容器元素里面。容器元素自己将不会被视为应用的一部分。
 * .amount()方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于
 * 其它资源注册的方法，它的返回值是根组件实例而非应用实例。
 *
 * DOM中的根组件模板
 * 根组件的模板通常是组件本身的一部分，但也可以直接通过在挂载容器内编写模板来单独提供：
 * 当根组件没有设置template选项时，Vue将自动使用容器的innerHTML作为模板。
 * DOM内模板通常用于无构建步骤的Vue应用程序。它们也可以与服务器端框架一起使用，其中
 * 根模板可能时由服务器动态生成的。
 */
