<template>
  <div style="text-align: right">
  <p v-html="english"></p>
  <button :disabled="isBtnDisabled">Button</button>
  <button :disabled="isBtnDisabled2">Button2</button>
    <div v-bind="objectOfAttrs"></div>
  </div>
  <time :title="toTitleDate(date)" :datetime="date">
    {{ formatDate(date) }}
  </time>
</template>

<script>
export default {
  name: "EnglishDemo",
  data(){
    return{
      date: new Date(),
      objectOfAttrs: {
        id: 'container',
        class: 'wrapper'
      },
      isBtnDisabled:"",
      isBtnDisabled2:null,
      english: "absorb: v.汲取；吸收  acquaintance: n.对（某人某事的）了解；认识；熟人" +
          "\n\t assign: v.分配（任务）给某人  aware: n.知道的；意识到的" +
          "\n\t command n.掌握，运用能力  commit: v.做出（错或非法的事）；犯（罪或错）等" +
          "\n\t communicate v.交流情况（消息、思想等）；沟通  complain: v.抱怨" +
          "\n\t concentrate(on): v.集中注意力，专心  constant: a.经常（发生）的，不断的" +
          "\n\t effective: a.有效的  enlarge: v.扩大，放大；变大" +
          "\n\t environment: n.环境；自然（生态）环境  handle: v.处理，对付，控制" +
          "\n\t means: n.方法，手段  nevertheless: ad.然而，尽管如此" +
          "\n\t opportunity: n.机会  process: n.过程" +
          "\n\t purchase: n.购买；购置物 v.购买  reliable: a.可靠的" +
          "\n\t strategy: n.策略  summarize: v.总结；概括，概述" +
          "\n\t apart from: 除……外（还有）  at a time: 每次，一次" +
          "\n\t be bound to: 肯定会  by no means:决不" +
          "\n\t in addition to: 除……外（还有）  in detail: 详细地" +
          "\n\t on a regular/daily/weekly basis 经常/每天/每周" +
          "\n\t over and over again: 反复，多次  put……into practice: 把……付诸实践" +
          "\n\t seek out: 寻找，找出  watch out for: 密切注意" +
          "",
    }
  },
  methods:{
    toTitleDate(date){
      return "123"
    },
    formatDate(date){
      return "000"
    }
  }
}
</script>

<style scoped>

</style>
