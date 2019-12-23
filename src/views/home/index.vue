<template>
<el-container>
  <el-aside style="height:100vh;background-color:#353b4e;width:230px">
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
  created () {
    let token = localStorage.getItem('token')
    if (!token) {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
