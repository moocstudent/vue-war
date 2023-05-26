<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ message }}</h2>
    <h3 @click="countPlus">{{counter.count}}</h3>
  </div>


</template>

<script setup>
/**
 * Vue的核心功能是声明式渲染：通过扩展于标准HTML的模板语法，我们可以
 * 根据JavaScript的状态来描述HTML应该是什么样子的。当状态改变时，
 * HTML会自动更新。
 * 能在改变时触发更新的状态被称作是响应式的。我们可以使用Vue的reactive()
 * API来声明响应式状态。由reactive()创建的对象都是JavaScript Proxy，
 * 其行为与普通对象一样
 */
import {reactive, ref} from 'vue'

/**
 * reactive()只适用于对象(包括数组和内置类型，如Map和Set)。而另一个
 * API ref() 则可以接受任何值类型。 ref会返回一个包裹对象，并在.value
 * 属性下暴露内部值 ，（而同样，选项式的data组件选项也是声明响应式的
 */
const counter = reactive({count:0})
const message = ref('Hello World!')
function countPlus() {
  counter.count++
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    text-align: center;
  }
}

</style>
