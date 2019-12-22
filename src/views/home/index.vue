<template>
<el-container>
  <el-aside style="height:100vh;background-color:#353b4e;width:230px">
    <leftlist></leftlist>
  </el-aside>
  <el-container>
    <el-header><top></top></el-header>
    <el-min>content</el-min>
  </el-container>
</el-container>
</template>

<script>
import leftlist from '../../components/home/left-list.vue'
import top from '../../components/home/top.vue'
export default {
  components: {
    'leftlist': leftlist,
    'top': top
  }
}
</script>

<style>

</style>
