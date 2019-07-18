<template>
  <div class="container">
    <!-- 筛选容器 -->
    <el-card>
      <div slot="header">
        <!-- 头部 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <!-- 筛选容器内容 -->
      <el-form :model="reqParams" size="small" label-width="80px">
        <el-form-item label="状态: ">
          <el-radio-group v-model="reqParams.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="频道: ">
          <el-select v-model="reqParams.channel_id" placeholder="请选择">
            <el-option
              v-for="item in channelOptions"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="时间: ">
          <el-date-picker
            v-model="dateValues"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 结果容器 -->
    <el-card>结果容器</el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 提交给后台的筛选条件 传参
      // 数据是''和null的区别：''时会向后端传一个空数据；null时不会向后端发送该字段
      reqParams: {
        status: null,
        channel_id: null,
        begin_pubdate: null,
        end_pubdate: null
      },

      // 默认频道数据
      channelOptions: [{ name: 'Java', id: 1 }],

      // 日期控件的数据
      dateValues: []
    }
  }
}
</script>

<style lang="less" scoped>
// 注意：el-card 是组件，解析后标签的名字不是el-card，标签上类名和自定义标签名字一致
.el-card {
  margin-bottom: 20px;
}
</style>
