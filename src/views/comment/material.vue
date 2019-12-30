<template>
    <el-card>
        <bread-crunmb slot="header">
        <template slot="title">素材管理</template>
        </bread-crunmb>
        <el-tabs type="card" v-model="tabs">
            <el-tab-pane label="全部" name="all">
                <el-row type="flex"  style="flex-wrap:wrap" class="row">
                    <el-card class="card" v-for="item in list" :key="item.id">
                        <img :src="item.url?item.url:tuUrl" alt="">
                        <el-row class="icon" type="flex" align="middle" justify="space-around">
                            <i class="el-icon-star-on" style="font-size:20px"></i>
                            <i class="el-icon-delete-solid"></i>
                        </el-row>
                    </el-card>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="收藏" name="collect">
                <el-row type="flex"  style="flex-wrap:wrap" class="row">
                    <el-card class="card" v-for="item in list" :key="item.id">
                        <img :src="item.url?item.url:tuUrl" alt="">
                    </el-card>
                </el-row>
            </el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      tabs: 'all',
      list: [],
      tuUrl: require('../../assets/404.png')
    }
  },
  methods: {
    getall () {
      this.$axios({
        url: '/user/images'
      }).then(res => {
        console.log(res.data.results)
        this.list = res.data.results
      })
    }
  },
  created () {
    this.getall()
  }
}
</script>

<style lang="less" scoped>
.row{
    .card{
        margin: 20px 50px;
        width: 210px;
        height: 190px;
        padding: 0px;
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }
        .icon{
            position: absolute;
            left: 0px;
            bottom: 0px;
            height: 40px;
            font-size: 17px;
            width: 100%;
            margin: 0px;
            background: #f4f5f6;
        }
    }
}
</style>
