<template>
  <el-container class="home-container">
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header class="home-header">
        <span  class="el-icon-s-fold"></span>
        <span class="text">江苏传智播客教育有限公司</span>
        <el-dropdown class="select">
          <span class="el-dropdown-link">
              <img width="30px" src="../../assets/images/avatar.jpg" alt="头像">
              <b style="vertical-algin: middle">疯狂的打火机</b>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span class="el-icon-s-operation"></span>
              个人设置
            </el-dropdown-item>
            <el-dropdown-item>
              <span  class="el-icon-unlock"></span>
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
          <img src="../../assets/images/welcome.jpg" alt="welcome.jpg">
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
  .home-container {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      .home-header {
        border-bottom: 1px solid #000;
        line-height: 60px;
        .el-icon-s-fold {
            font-size: 26px;
            vertical-align: middle; // 让字体图标与文字中线对齐
        }
        .text {
            vertical-align: middle;
            margin-left: 10px;
        }
        .select {
          float: right;
        }
        .el-dropdown-link img {
          vertical-align: middle;
          margin-right: 10px;
        }
      }

  }
</style>
