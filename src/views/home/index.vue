<template>
<div class="box">
<el-card class="form">
    <div class="tu"><img src="../../assets/logo_index.png" alt=""></div>
    <el-form>
        <el-form-item>
            <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input style="width:65%" placeholder="请输入验证码"></el-input>
            <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
            <el-checkbox>你必须同意做他女朋友</el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button style="width:100%" type="primary">登录</el-button>
        </el-form-item>
    </el-form>

</el-card>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.box{
    /* width: 100%; */
    background: url("../../assets/bgtu2.jpg");
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .form{
        width: 460px;
        height: 350px;
        .tu{
            text-align:center;
            margin-bottom: 20px;
            img{
                height: 46px;
            }
        }
    }
}

</style>
