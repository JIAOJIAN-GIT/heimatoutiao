<template>
<div class="box">
<el-card class="form">
    <div class="tu"><img src="../../assets/logo_index.png" alt=""></div>
    <el-form ref="myform" :model="shuxing" :rules="guize">
        <el-form-item prop="mobile">
            <el-input v-model="shuxing.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
            <el-input v-model="shuxing.code" style="width:65%" placeholder="请输入验证码"></el-input>
            <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="checkbox">
            <el-checkbox v-model="shuxing.checkbox">你必须同意做他女朋友</el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button @click="yan" style="width:100%" type="primary">登录</el-button>
        </el-form-item>
    </el-form>

</el-card>
</div>
</template>

<script>
export default {
  data () {
    return {
      shuxing: {
        mobile: '',
        code: '',
        checkbox: false

      },
      guize: {
        mobile: [{ required: true, message: '请输入手机号' },
          { pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/, message: '手机号输入错误' }],
        code: [{ required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码输入错误' }],
        checkbox: [{ validator: function (rule, value, callback) {
          if (value) {
            callback()
          } else {
            callback(new Error('请同意条款'))
          }
        } }]
      }
    }
  },
  methods: {
    yan () {
      this.$refs.myform.validate(isOk => {
        if (isOk) {
        //   console.log('验证通过，正在连接接口')
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.shuxing
          }).then(res => {
            window.localStorage.setItem('token', `${res.data.token}`)
            // console.log(res.data.data)
            this.$router.push('/home')
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
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
