<template>
  <div class="container">
    <button @click="toPrant()">给父组件数据</button>
  </div>
</template>

<script>
export default {
  name: 'my-channel',
  data () {
    return {
      childText: '子组件数据'
    }
  },
  methods: {
    toPrant () {
      // 发送数据给父组件
      this.$emit('input', this.childText)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
