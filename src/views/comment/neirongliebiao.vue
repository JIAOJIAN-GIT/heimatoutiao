<template>
<el-card>
    <bread-crunmb slot="header">
        <template slot="title">内容列表</template>
    </bread-crunmb>
    <el-form style="padding-left:10px">
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

    <!-- 主题 -->
    <div class="title">
        <span>共找到62221条符合条件的内容</span>
    </div>
    <div class="list">
        <div class="left">
            <img src="../../assets/404.png" alt="">
            <div>
                <span>asdasdasd</span>
                <el-tag>标签</el-tag>
                <span>assdassdadad</span>
            </div>
        </div>
        <div class="right">
            <div>
                <i class="el-icon-edit"></i>
                <span>修改</span>
            </div>
            <div>
                <i class="el-icon-delete"></i>
                <span>删除</span>
            </div>
        </div>
    </div>
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
</style>
