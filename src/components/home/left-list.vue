<template>
<div class="rong">
    <div class="tu">
        <img src="../../assets/logo_admin.png" alt="">
    </div>
    <el-menu router background-color=" #353b4e" text-color="#adafb5" active-text-color=" #ffd04b">
        <el-menu-item index='/home'>首页</el-menu-item>
        <el-submenu index='a2'>
        <span slot="title">内容管理</span>
        <el-menu-item index='/home/publish'>发布文章</el-menu-item>
        <el-menu-item index='/home/articles'>内容列表</el-menu-item>
        <el-menu-item index='/home/comment'>评论管理</el-menu-item>
        <el-menu-item index='/home/material'>素材管理</el-menu-item>
        </el-submenu>
        <el-submenu index='a3'>
        <span slot="title">粉丝管理</span>
        <el-menu-item index='/home/tuwen'>图文数据</el-menu-item>
        <el-menu-item index='/home/fansgai'>粉丝概况</el-menu-item>
        <el-menu-item index='/home/fanshua'>粉丝画像</el-menu-item>
        <el-menu-item index='/home/fanslist'>粉丝列表</el-menu-item>
        </el-submenu>
        <el-menu-item>账户信息</el-menu-item>
    </el-menu>

</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scopet>
.rong{
    width: 230px;
    min-height: 100vh;
    .el-menu{
        border-right: none;
    }
    .tu{
        text-align: center;
        padding: 10px 0px;
        background-color: #2e2f32;
        img{
            height: 35px;
        }
    }
}

</style>
