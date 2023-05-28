<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <p>Vue使用一种基于HTML的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的DOM上。
    所有的Vue模板都是语法层面合法的HTML，可以被符合规范的浏览器和HTML解析器解析。

    在底层机制中，Vue会将模板编译成高度优化的JavaScript代码。结合响应式系统，当应用状态变更
    时，Vue能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的DOM操作。</p>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
