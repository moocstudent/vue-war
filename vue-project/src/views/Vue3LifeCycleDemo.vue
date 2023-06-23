<template>
  <div>
    <h1>生命周期{{ state.count }}</h1>
    <div v-if="state.show">
      <Test/>
    </div>
  </div>
</template>

<script>
import EnglishDemo from "@/views/EnglishDemo.vue";
import {
  onBeforeMount, onMounted, onBeforeUpdate, onUpdated,
  onBeforeUnmount, onUnmounted, onErrorCaptured, reactive
} from "vue";

export default {
  name: "Vue3LifeCycleDemo",
  components: {
    EnglishDemo
  },
  setup() {
    const state = reactive({
      count: 0,
      show: true
    })
    //2minutes hide component
    setTimeout(() => {
      state.count = 2
      state.show = false
    }, 2000)

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })

    onUnmounted(() => {
      console.log('onUnmounted')
    })

    onErrorCaptured(() => {
      console.log('onErrorCaptured')
    })

    return {
      state
    }
  }
}
</script>

<style scoped>

</style>
