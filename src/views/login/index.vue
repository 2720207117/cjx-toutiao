<template>
  <div class="login-container">
    <el-card class="box-card">
      <img src="../../assets/images/logo_index.png" alt="logo_index.png" />

      <!-- 表单 -->
      <el-form :model="loginForm" :rules="loginRules">  <!-- 表单组件 -->
        <el-form-item prop="mobile">  <!-- 表单项组件 -->
          <el-input placeholder="请输入手机号" v-model="loginForm.mobile"></el-input>  <!-- 表单元素 -->
        </el-form-item>
        <el-form-item prop="code">  <!-- 表单项组件 -->
          <el-input placeholder="验证码" style="width: 280px;" v-model="loginForm.code"></el-input>  <!-- 表单元素 -->
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
    // 表单对应的对象
      loginForm: {
        mobile: '',
        code: ''
      },
      // 表单的校验规则对象
      loginRules: {
        mobile: [
          // 具体的校验规则 例: 是否必填 长度 格式
          { required: true, message: '手机号必填', trigger: 'blur' },
          { max: 11, min: 11, message: '手机号为11位数字', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码必填', trigger: 'blur' }
        ]
      },
      // 默认选中复选框
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
