<template>
  <div class="login-container">
    <el-card class="box-card">
        <img src="../../assets/images/logo_index.png" alt="logo_index.png">
        <!-- 表单 -->

    </el-card>
  </div>
</template>

<script>
export default {
  // 导出

}
</script>

<style lang="less" scoped>
// scoped: 限制样式只在当前组件使用
.login-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("../../assets/images/login_bg.jpg") no-repeat center / cover; // center/cover : 将背景图按照比例铺满容器
}

.box-card {
  width: 450px;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
      display: block;
      width: 200px;
      margin: 0 auto;
  }
}
</style>
