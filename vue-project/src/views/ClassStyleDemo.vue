<template>
<!--  数据绑定的一个常见需求场景是操纵元素的CSS class列表和内联样式。-->
<!--  因为class和style都是attribute，我们可以和其他attribute一样-->
<!--  使用v-bind将它们和动态的字符串绑定。但是，在处理比较复杂的绑定时，-->
<!--  通过拼接生成字符串是麻烦且易出错的。因此，Vue专门为class和style-->
<!--  的v-bind用法提供了特殊的功能增强。除了字符串外，表达式的值也可以-->
<!--  是对象或数组。-->
<!--  我们可以给 :class （v-bind:class 的缩写)传递一个对象来动态切换class:-->
  <div class="static" :class="{ active: isActive , 'text-danger': hasError }"></div>
  <div :class="classObj"></div>
</template>

<script>
export default {
  name: "ClassStyleDemo",
  data() {
    return {
      isActive: true,
      error:null,
      hasError: false,
      //放入computed
      // classObj:{
      //   active: true,
      //   'text-danger': false
      // }
    }
  },
  computed:{
    classObject() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
}
</script>

<style scoped>

</style>
