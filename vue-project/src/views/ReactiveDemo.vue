<template>
  <p>{{this.compareResult}}</p>
  <br>
  <p>{{count}}</p>
  <br>
  <button @click="increment">increment count</button>
  <br>
  <p>{{this.obj.nested}}</p>
  <br>
  <p>{{this.obj.arr}}</p>
  <br>
  <button @click="mutateDeeply">change obj</button>
</template>

<script>
import {nextTick} from "vue";

export default {
  name: "ReactiveDemo",
  data(){
    return {
      count: 1,
      someObject: {},
      compareResult: null,
      obj: {
        nested: { count: 0 },
        arr: ['foo','bar']
      }
    }
  },
  methods: {
    mutateDeeply() {
      /**
       * 深层响应性
       * 在Vue中，状态都是默认深层响应式的。这意味着即使在更改深层次的对象或数组，你的改动
       * 也能被检测到
       * 以下都会按照期望工作
       */
      this.obj.nested.count ++
      this.obj.arr.push('baz')
    },
    increment() {
      this.count ++;
      console.log('this.count in increment:', this.count)
      nextTick(()=> {
        /**
         * DOM更新时机
         * 当你更改响应式状态后，DOM会自动更新。然而，你得注意DOM的更新并不是同步的。相反，
         * Vue将缓冲它们直到更新周期的"下个时机"以确保无论你进行了多少次状态更改，每个组件
         * 都只更新一次。
         * 若要等待一个状态改变后的DOM更新完成，你可以使用nextTick()这个全局API：
         */
        //访问更新后的DOM
        console.log('nextTick count:',this.count)
      })
    }
    // increment: () => {
    //   //反例： 无法访问此处的 `this`
    // }
  },
  // `mounted` 是生命周期钩子，之后我们会讲到
  mounted() {
    // `this` 指向当前组件实例
    console.log(this.count) // 1
    //数据属性也可以被更改
    this.count = 2
    //在其他方法或是生命周期中也可以调用方法
    this.increment()

    const newObject = {}
    this.someObject = newObject
    /**
     * 当你在赋值后再访问this.someObject, 此值已经是原来的 newObject 的一个响应式代理。
     * 与Vue 2不同的是，这里原始的newObject不会变为响应式：请确保始终通过 this 来访问
     * 响应式状态。
     */
    console.log(newObject === this.someObject)
    this.compareResult = newObject === this.someObject
  }
}
</script>

<style scoped>
p{
  font-size: 20px;
}
  button{
    width:200px;
    height:50px
  }
</style>
