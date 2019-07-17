<template>
  <div class="login-container">
    <el-card class="box-card">
        <img src="../../assets/images/logo_index.png" alt="logo_index.png">

      <!-- 表单 -->
      <el-form status-icon :model="loginForm" :rules="loginRules" ref="loginForm">  <!-- 表单组件 -->
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
          <el-button type="primary" style="width: 100%" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  // 导出
  data () {
    const checkMobile = (rule, value, callback) => {
      // 具体的校验逻辑
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不正确'))
      }
    }
    return {
      // 表单对应的对象
      loginForm: {
        mobile: '13439211668',
        code: '246810'
      },
      // 表单的校验规则对象
      loginRules: {
        mobile: [
          // 具体的校验规则 例: 是否必填 长度 格式
          { required: true, message: '手机号必填', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码必填', trigger: 'blur' },
          { len: 6, message: '验证码必须为6位', trigger: 'blur' }
        ]
      },
      // 默认选中复选框
      checked: true

    }
  },
  methods: {
    login () {
      // 整体表单的校验
      // 如果校验成功进行登录
      // this.$refs.loginForm.validate((valid) => {
      //   if (valid) {
      //     // 如果校验成 进行登录
      //     this.$http.post(
      //       'http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginForm
      //     ).then(res => {
      //       // res是响应对象 包含响应数据
      //       const data = res.data
      //       // 后台返回的json内容，已经转换成了对象
      //       console.log(data)

      //       // 登录成功后要做什么？
      //       // 1. 跳转到首页
      //       // 2. 保持登录状态
      //       // 2.1 保存登录后返回的用户信息 包含token
      //       // 2.2 使用 sessionStorage 来储存 关闭浏览器回话失效
      //       // sessionStorage.setItem('key', 'value') 都为字符串格式 res.data.data是对象格式 须用 JSON.stringfy转为json字符串格式
      //       window.sessionStorage.setItem('hm-toutiao', JSON.stringify(res.data.data))
      //       this.$router.push('/') // ---> 跳转到首页
      //     }).catch(() => {
      //       // 提示错误 使用组件 消息提示组件
      //       this.$message.error('手机号或验证码输入错误！')
      //     })
      //   }
      // })

      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          // 当接口调用失败的时候，以下代码出现异常
          // js语法： try{ 业务逻辑 }catch(err){ 业务逻辑失败调用catch，进行错误的处理 }
          try {
            const res = await this.$http.post('authorizations', this.loginForm) // 获取响应对象
            window.sessionStorage.setItem('hm-toutiao', JSON.stringify(res.data.data)) // 将有关token信息的数据保存到sessionStorage
            this.$router.push('/') // 跳转到首页
          } catch (error) {
            // 提示错误 使用组件 消息提示组件
            this.$message.error('手机号或验证码输入错误')
          }
        }
      })
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
