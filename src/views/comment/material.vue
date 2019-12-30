<template>
    <el-card>
        <bread-crunmb slot="header">
        <template slot="title">素材管理</template>
        </bread-crunmb>
        <el-tabs type="card" v-model="tabs">
            <el-tab-pane label="全部" name="all">全部</el-tab-pane>
            <el-tab-pane label="收藏" name="collect">收藏</el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      tabs: 'all'
    }
  }
}
</script>

<style>

</style>
