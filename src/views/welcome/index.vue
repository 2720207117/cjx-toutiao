<template>
    <div class="welcome-container"></div>
</template>

<script>
export default {
  created () {
    this.$http.get('articles').then(res => console.log(res.data))
  }
}
</script>

<style lang="less" scoped>
  .welcome-container {
      width: 100%;
      height: 100%;
      background: url('../../assets/images/welcome.jpg') no-repeat center
  }
</style>
