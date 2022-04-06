<template>
  <div>
    <h3>attrs子组件</h3>
    <attrs-child-son v-bind="$attrs" v-on="$listeners"></attrs-child-son>
  </div>
</template>

<script>
import AttrsChildSon from "./AttrsChildSon.vue";
export default {
  components: { AttrsChildSon },
  data() {
    return {
       const content2=[{modelName: "legalPersonInfo","id":"spouseImgData","definitionKey":"loan_apply_single_20200805000000002","taskName":"客户经理进件","elementGroup":"1200","code":"1001","name":"结婚证","customType":"","type":"2","totalType":"2","description":null,"elementRequired":"0","createTime":"2022-03-07T17:08:01","updateTime":"2022-03-22T09:49:55"},
      {modelName: "legalPersonInfo","id":"spouseImgData","definitionKey":"loan_apply_single_20200805000000002","taskName":"客户经理进件","elementGroup":"1200","code":"1002","name":"配偶身份证","customType":"","type":"1","totalType":"2","description":"","elementRequired":"0","createTime":"2022-03-07T16:25:04","updateTime":"2022-03-22T09:49:55"},
      {modelName: "legalPersonInfo","id":"spouseImgData","definitionKey":"loan_apply_single_20200805000000002","taskName":"客户经理进件","elementGroup":"1200","code":"1005","name":"户籍证明","customType":"","type":"1","totalType":"1","description":null,"elementRequired":"0","createTime":"2020-05-06T17:20:16","updateTime":"2022-03-22T09:49:55"}]
    }
  },
};
</script>

<style>
</style>