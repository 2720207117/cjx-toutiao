<template>
  <div class="container">
      <p>头部</p>
      <p class="content">
        <slot name="con" :text="textName"></slot>
      </p>
      <p>底部</p>
  </div>
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
