<template>
  <div class="show">
  <button @click="toggle">toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😭</h1>
  </div>
</template>

<!--选项式-->
<script>
export default {
  name:'ToggleDemo',
  data() {
    return {
      awesome: true
    }
  },
  methods: {
    toggle() {
      this.awesome = !this.awesome
    }
  }
}
</script>

<!--组合式-->
<!--<script setup>-->
<!--import {ref} from "vue";-->

<!--const awesome = ref(true)-->

<!--function toggle(){-->
<!--  awesome.value = !awesome.value-->
<!--}-->
<!--</script>-->

<style scoped>
show {
  text-align: right;
}
button {
  width: 200px;
  height: 40px;
}
</style>


