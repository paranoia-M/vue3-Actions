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
      data: {
        companyBasicInfo: {
          id: null,
          customNo: "CM20220328000000574",
          companyName: "11111",
          accountOpenLicenseNum: "3333333",
        },
        cmCptciInfo: { id: null, natureBuss: "100", rgstCpt: "1" },
        legalPersonInfo: {
          id: null,
          cardImg: { srcfaceFile: null, srcantiFile: null },
          spouseCardImg: { srcfaceFile: null, srcantiFile: null },
        },
        contactInfo: { id: null },
      },
    };
  },
};
</script>

<style>
</style>