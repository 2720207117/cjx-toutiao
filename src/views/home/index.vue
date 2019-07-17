<template>
  <el-container class="home-container">
    <el-aside class="home-aside" :width="collapse?'64px' : '200px'">
      <div class="logo" :class="{close: collapse}"></div>

      <!-- 导航菜单组件 -->
      <el-menu
        default-active="/"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border-right:none"
        :collapse="collapse"
        :collapse-transition="false"
        router
       >
       <!-- :collapse-transition="false"  关闭默认折叠动画 -->
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>

    </el-aside>
    <el-container>
      <el-header class="home-header">
        <span class="el-icon-s-fold" @click="toggleMenu()"></span>
        <span class="text">江苏传智播客教育有限公司</span>
        <el-dropdown class="select">
          <span class="el-dropdown-link">
            <img width="30px" :src="avatar" alt="头像" />
            <b style="vertical-algin: middle">{{name}}</b>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span class="el-icon-s-operation"></span>
              个人设置
            </el-dropdown-item>
            <el-dropdown-item>
              <span class="el-icon-unlock"></span>
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <!-- 显示二级路由对应的组件 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      collapse: false,
      name: '', // 定义用户的名字
      avatar: '' // 定义用户的头像
    }
  },
  created () { // 钩子函数 组件初始化(创建)成功的时候
    const user = JSON.parse(window.sessionStorage.getItem('hm-toutiao')) // 获取用户数据 并且转成json对象格式
    this.name = user.name // 将获取到的用户名字赋值给定义的名字 --> 用{{name}}
    this.avatar = user.photo // 将获取到的用户头像信息赋值给定义的头像  --> 使用用v-bind 即: 绑定src属性  :src="avatar"
  },
  methods: {
    toggleMenu () {
      this.collapse = !this.collapse
    }
  }
}
</script>

<style scoped lang="less">
.home-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .home-aside {
    background: rgb(0, 32, 51);
    .logo {
      width: 100%;
      height: 60px;
      background: url(../../assets/images/logo_admin.png) no-repeat center /
        140px auto;
    }
    .close {
        background: url(../../assets/images/logo_admin_01.png) no-repeat center /
        36px auto;
    }
  }
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
