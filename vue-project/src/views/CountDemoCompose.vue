<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<script setup>
import {onMounted, ref} from "vue";

//响应式状态
const count = ref(0);

//用来修改状态、触发更新的函数
function increment() {
  count.value ++
}

//生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})

</script>

<style scoped>
button{height:30px;width:100px;background-color: aquamarine}
/**
两种 API 风格都能够覆盖大部分的应用场景。它们只是同一个底层系统所提供的两套不同的接口。实际上，选项式 API 是在组合式 API 的基础上实现的！
关于 Vue 的基础概念和知识在它们之间都是通用的。
选项式 API 以“组件实例”的概念为中心 (即上述例子中的 this)，对于有面向对象语言背景的用户来说，这通常与基于类的心智模型更为一致。
同时，它将响应性相关的细节抽象出来，并强制按照选项来组织代码，从而对初学者而言更为友好。
组合式 API 的核心思想是直接在函数作用域内定义响应式状态变量，并将从多个函数中得到的状态组合起来处理复杂问题。
这种形式更加自由，也需要你对 Vue 的响应式系统有更深的理解才能高效使用。相应的，它的灵活性也使得组织和重用逻辑的模式变得更加强大。
 */
</style>
