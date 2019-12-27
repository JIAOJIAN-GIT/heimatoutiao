<template>
<el-container>
  <el-aside style="min-height:100vh;background-color:#353b4e;width:230px">
    <leftlist></leftlist>
  </el-aside>
  <el-container>
    <el-header><top></top></el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>

export default {

}
</script>

<style>

</style>
