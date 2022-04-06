<!--
 * @Author: your name
 * @Date: 2022-03-04 15:15:21
 * @LastEditTime: 2022-03-04 15:19:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3-demo\src\components\Component.vue
-->
<template>
  <div>
    <my-pra></my-pra>
    <my-pra2></my-pra2>
    <my-pra3></my-pra3>
  </div>
</template>

<script>
import MyPra from './demo/Pra.vue'
import MyPra2 from './demo/Pra2.vue'
import MyPra3 from './demo/Pra3.vue'

export default {
  name: 'MyComponent',
  data() {
    return {
      message: 'MyComponent 子组件'
    }
  },
  components: {
    MyPra,
    MyPra2,
    MyPra3
  }
}
</script>

<style>
</style>