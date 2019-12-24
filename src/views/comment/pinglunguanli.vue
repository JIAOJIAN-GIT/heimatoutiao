<template>
<el-card>
    <bread-crunmb slot="header">
        <template slot="title">评论管理</template>
    </bread-crunmb>
    <el-table :data="list">
        <el-table-column prop="title" label="标题" width="600"></el-table-column>
        <el-table-column :formatter="formatterfunction" prop="comment_status" label="评论状态"></el-table-column>
        <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
        <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
        <el-table-column label="操作">
            <template slot-scope="obj">
                <el-button size="small" type="text">修改</el-button>
                <el-button size="small" type="text">{{obj.row.comment_status?"关闭":"打开"}}评论</el-button>
            </template>
        </el-table-column>
    </el-table>
</el-card>

</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getComment () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(res => {
        this.list = res.data.results
        console.log(res.data.results)
      })
    },
    formatterfunction (row, column, cellValue, index) {
      console.log(cellValue)
      return cellValue ? '正常' : '关闭'
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style>

</style>
