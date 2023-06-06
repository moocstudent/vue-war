<template>

</template>

<script>
export default {
  name: "ComputedDemo2",
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  /**
   * 计算属性默认是只读的。当你尝试修改一个计算属性时，你会收到一个运行时警告。只在某些特殊场景中
   * 你可能才需要用到"可写"的属性，你可以通过同时提供getter和setter来创建：
   */
  computed: {
    /**
     * 现在当你再运行this.fullName = 'John Doe'时，setter会被调用而this.firstName和
     * this.lastName会随之更新。
     */
    fullName: {
      //getter
      /**
       * Getter不应有副作用
       * 计算属性的getter应只做计算而没有任何其他的副作用，这一点非常重要，请务必牢记。举例来
       * 说，不要在getter中做异步请求或者更改DOM！一个计算属性的声明中描述的是如何根据其他值
       * 派生一个值。因此getter的职责应该仅为计算和返回该值。在之后的指引中我们会讨论如何使用
       * 监听器根据其他响应式状态的变更来创建副作用。
       * @returns {string}
       */
      get() {
        return this.firstName + ' ' + this.lastName
      },
      //setter
      set(newValue) {
        //注意： 我们这里使用的是解构赋值语法
        [this.firstName,this.lastName] = newValue.split(' ')
      }
    }
  }
}
</script>

<style scoped>

</style>
