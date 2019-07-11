<template>
  <div class="login-container">
    <el-card class="box-card">
        <img src="../../assets/images/logo_index.png" alt="logo_index.png">

        <!-- 表单 -->
         <el-form>  <!-- 表单组件 -->
        <el-form-item>  <!-- 表单项组件 -->
          <el-input placeholder="请输入手机号"></el-input>  <!-- 表单元素 -->
        </el-form-item>
        <el-form-item>  <!-- 表单项组件 -->
          <el-input placeholder="验证码" style="width: 280px;"></el-input>  <!-- 表单元素 -->
          <el-button style="float: right;">发送验证</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked"></el-checkbox> 我已阅读并同意<el-link type="primary">用户协议</el-link>和<el-link type="primary">隐私条款</el-link>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width: 100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  // 导出
  data () {
    return {
      form: {
        name: ''
      },
      checked: true
    }
  }
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
    margin: 10px auto 30px;
  }
  a {
    text-decoration: none;
  }
  .el-checkbox {
    margin-right: 5px;
  }
}
</style>
