<template>
  <div class="container">
    <!-- 筛选容器 -->
    <el-card>
      <div slot="header">
        <!-- 头部 面包屑导航 -->
        <!--  <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        </el-breadcrumb>-->

        <!-- 使用面包屑导航组件 -->
        <my-bread>内容管理</my-bread>
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
    <el-card>
      <div slot="header">
        根据筛选条件共查询到
        <b>0</b> 条结果：
      </div>
      <el-table :data="articles">
        <el-table-column label="封面">
          <template slot-scope="scope">
            <el-image lazy :src="scope.row.cover.images" style="width:100px; height:75px">
              <div slot="error" class="image-slot">
                <img
                  style="width:100px; height=75px"
                  src="../../assets/images/error.gif"
                  alt="图片丢失"
                />
              </div>
            </el-image>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <!-- {{scope.row}} -->
            <el-tag v-if="scope.row.status === 0" type="info">草稿</el-tag>
            <el-tag v-if="scope.row.status === 1" >待审核</el-tag>
            <el-tag v-if="scope.row.status === 2" type="success">审核通过</el-tag>
            <el-tag v-if="scope.row.status === 3" type="warning">审核失败</el-tag>
            <el-tag v-if="scope.row.status === 4" type="danger">已删除</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="pubdate" label="发布时间"></el-table-column>
        <el-table-column width="120px" label="操作">
          <template slot-scope="scope">
            <el-button icon="el-icon-edit" circle plain type="primary"></el-button>
            <el-button icon="el-icon-delete" circle plain type="danger"></el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="box">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
// 全局使用自定义插件后 这里不需要再进行导入
// import MyBread from '@/components/my-bread.vue' // 导入自定义公共组件
export default {
  // components: { MyBread },
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
      channelOptions: [],

      // 日期控件的数据
      dateValues: [],

      // 文章列表数据
      articles: []
    }
  },
  created () {
    // 获取频道数据
    this.getChannelOptions()
    // 获取列表数据
    this.getArticles()
  },
  methods: {
    async getChannelOptions () {
      // const o = { data:{} }; const {data} = o  一层结构 对象的一层结构
      // const res = {data:{data:{channels:[]}}}; 多层结构  const {data:{data:data}}
      const {
        data: { data }
      } = await this.$http.get('channels')
      this.channelOptions = data.channels
    },
    async getArticles () {
      // post传参 axios.post('url', {参数对象})
      // get传参  axios.get('get', {params:{参数对象}})
      const {
        data: { data }
      } = await this.$http.get('articles', { params: this.params })
      this.articles = data.results
    }
  }
}
</script>

<style lang="less" scoped>
// 注意：el-card 是组件，解析后标签的名字不是el-card，标签上类名和自定义标签名字一致
.el-card {
  margin-bottom: 20px;
}
.box {
  margin-top: 20px;
  text-align: center;
}
</style>
