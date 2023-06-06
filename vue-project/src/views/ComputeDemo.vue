<template>
<p>Has published books:</p>
  <br>
  <p>this is computed string below:</p>
  <br>
  <span>{{ publishedBooksMessage }}</span>
  <p>this is computed date below:</p>
  <br>
  <span>{{ now }}</span>
  <br>
  <p>this is computed date() method below:</p>
  <br>
  <span>{{ Date.now() }}</span>

</template>

<script>
export default {
  name: "ComputeDemo",
  data(){
    return {
      author:{
        name:'John Doe',
        books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
        ]
      }
    }
  },
  computed:{
    //一个计算属性的 getter
    publishedBooksMessage() {
      // `this` 指向当前组件实例
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
    now() {
      return Date.now();
    }
  }
}
</script>

<style scoped>

</style>
