<template>
    <div id="app">
      <button @click="count++">
        Count is : {{ count }}
      </button>
    </div>
</template>

<script>

export default {
  name: "CountDemo",
  data(){
    return {
      count: 0
    }
  }
}


</script>

<style scoped>
button{height:30px;width:100px}

</style>
