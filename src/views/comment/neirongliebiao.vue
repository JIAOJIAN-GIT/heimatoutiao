<template>
<el-card>
    <bread-crunmb slot="header">
        <template slot="title">内容列表</template>
    </bread-crunmb>
    <el-form>
        <el-form-item label="文章状态:">
            <el-radio-group v-model="radios">
                文章状态：
                <el-radio :label="0">全部</el-radio>
                <el-radio :label="1">草稿</el-radio>
                <el-radio :label="2">待审核</el-radio>
                <el-radio :label="3">审核通过</el-radio>
                <el-radio :label="4">审核失败</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="频道列表">
            <el-select v-model="value">
                <el-option >caa</el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="时间选择">
            <el-time-picker
                is-range
                v-model="value1"
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围">
            </el-time-picker>
        </el-form-item>
    </el-form>
</el-card>
</template>

<script>
export default {
  data () {
    return {
      radios: 0,
      value: 'ABC',
      value1: ''
    }
  }
//   methods: {
//     zhuangtai () {
//       this.$axios({
//         url: '/articles',
//         params: {},
//         method: 'put'
//       }).then(res=>{
//           console.log(res)
//       }
//     }
//   },
//   created(){
//       this.zhuangtai()
//   }
}
</script>

<style>

</style>
