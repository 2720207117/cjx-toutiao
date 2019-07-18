<template>
  <div class="container">
    <p>头部</p>
    <p class="content">
      <slot name="con" :text="textName"></slot>
    </p>
    <p>底部</p>
  </div>

    <!-- 这是使用组件和插槽的用法 -->
  <!-- <my-test> -->
    <!-- 此写法是 vue版本 2.6.0 之前的写法 -->
    <!-- <template slot="con" slot-scope="scope">{{scope.text}}</template> -->

    <!-- 现在写法 -->
    <!-- <template v-slot:con="scope">{{scope.text}}</template>
  </my-test> -->
</template>

<script>
export default {
  data () {
    return {
      textName: '这是作用域插槽'
    }
  }
}
</script>

<style lang="less" scoped>
</style>
