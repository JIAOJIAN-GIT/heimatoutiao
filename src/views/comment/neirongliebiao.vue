<template>
<el-card>
    <bread-crunmb slot="header">
        <template slot="title">内容列表</template>
    </bread-crunmb>
    <el-form style="padding-left:10px">
        <el-form-item label="文章状态:">
            <el-radio-group v-model="formData.status">
                文章状态：
                <el-radio :label="5">全部</el-radio>
                <el-radio :label="0">草稿</el-radio>
                <el-radio :label="1">待审核</el-radio>
                <el-radio :label="2">审核通过</el-radio>
                <el-radio :label="3">审核失败</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="频道列表">
            <!-- {{channels}} -->
            <el-select v-model="formData.channel_id"  >
                <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="时间选择">
            {{formData.shijian}}
            <el-date-picker
                v-model="formData.shijian"
                type="daterange"   value-format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
    </el-form>

    <!-- 主题 -->
    <div class="title">
        <span>共找到{{paging.total}}条符合条件的内容</span>
    </div>
    <div class="list" v-for="item in list" :key="item.id">
        <div class="left">
            <img :src="item.cover.images.length ? item.cover.images[0] : url" alt="">
            <div>
                <span>{{item.title}}</span>
                <el-tag :type="item.status | filtersType" class="biaoqian" style="width:80px">{{item.status | filtersStatus}}</el-tag>
                <span>{{item.pubdate}}</span>
            </div>
        </div>
        <div class="right">
            <div>
                <i class="el-icon-edit"></i>
                <span>修改</span>
            </div>
            <div>
                <i class="el-icon-delete"></i>
                <span @click="del(item.id)">删除</span>
            </div>
        </div>
    </div>
    <el-row class="paging" type="flex" justify="center" align="middle" style="height:60px">
        <el-pagination background
        layout="prev, pager, next"
        :current-page="paging.currentPage"
        :total="paging.total"
        :page-size="paging.pageSize"
        @current-change="changePage">
        </el-pagination>
    </el-row>
</el-card>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        status: 5,
        channel_id: null,
        shijian: []
      },
      paging: {
        pageSize: 10,
        total: 100,
        currentPage: 1
      },
      channels: [],
      list: [],
      url: require('../../assets/404.png')
    }
  },
  watch: {
    formData: {
      handler: function () {
        // alert(1)
        this.change()
      },
      deep: true
    }
  },
  filters: {
    filtersStatus (value) {
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核失败'
        default:
          break
      }
    },
    filtersType (value) {
      switch (value) {
        case 0:
          return 'warning'
        case 1:
          return 'info'
        case 2:
          return ''
        case 3:
          return 'danger'
        default:
          break
      }
    }
  },
  methods: {
    del (id) {
      this.$confirm('你确定要删除该文章吗？').then(() => {
        this.$axios({
          url: `/articles/${id.toString()}`,
          method: 'delete'
        }).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.getArticles()
        })
      })
    },
    changePage (newPage) {
      this.paging.currentPage = newPage
      this.changeTwo()
    },
    zhuangtai () {
      this.$axios({
        url: '/channels'
      }).then(res => {
        this.channels = res.data.channels
      })
    },
    change () {
      this.paging.currentPage = 1
      this.changeTwo()
    },
    changeTwo () {
      let params = {
        page: this.paging.currentPage,
        per_page: this.paging.pageSize,
        status: this.formData.status === 5 ? null : this.formData.status,
        channel_id: this.formData.channel_id,
        begin_pubdate: this.formData.shijian.length ? this.formData.shijian[0] : null,
        end_pubdate: this.formData.shijian.length > 1 ? this.formData.shijian[1] : null
      }
      this.getArticles(params)
    },
    getArticles (params) {
      this.$axios({
        url: '/articles',
        params
      }).then(res => {
        this.list = res.data.results
        console.log(res.data.results)
        this.paging.total = res.data.total_count
      })
    }
  },
  created () {
    this.zhuangtai()
    this.getArticles({ page: 1, per_page: 10 })
  }
}
</script>

<style lang="less" scoped>
.title{
    font-size: 15px;
    line-height: 60px;
    border-bottom: 1px dashed #ccc;
    padding-left: 10px
}
.list{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #f2f3f5;
    font-size: 14px;
    .left{
        display: flex;
        img{
            width: 200px;
            height: 140px;
            margin-right: 10px;
        }
        div{
            display:flex;
            flex-direction: column;
            line-height: 30px;
        }
    }
    .right{
        display: flex;
        div{
            margin-left: 20px;
        }
    }
}
// .paging{
//     height: 60px;
//     display: flex;
//     justify-content: center;
//     align-items: center
// }
</style>
