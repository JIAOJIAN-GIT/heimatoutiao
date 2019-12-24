<template>
    <el-row class="top">
        <el-col :span="12">
            <i class="el-icon-s-fold"></i>
            <span>江苏黑马xxxxxxx</span>
        </el-col>
        <el-col class="you" :span="12">
            <el-row  type="flex" justify="end">
                <img :src="userInfo.photo?userInfo.photo:imgsrc" alt="">
                <el-dropdown @command="commands">
                    <span>{{userInfo.name}}</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="pim" index='aa'>个人信息</el-dropdown-item>
                        <el-dropdown-item command="git" index='aa'>GIT信息</el-dropdown-item>
                        <el-dropdown-item command="quit" index='aa'>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      imgsrc: require('../../assets/bgtu.jpg')
    }
  },
  methods: {
    diaoyong () {
      this.$axios({
        url: '/user/profile'
      }).then(res => {
        console.log(res)
        this.userInfo = res.data.data
      })
    },
    commands (command) {
      if (command === 'pim') {
      } else if (command === 'git') {
        window.location.href = 'https://github.com/JIAOJIAN-GIT/heimatoutiao.git'
      } else if (command === 'quit') {
        window.localStorage.removeItem('token')
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.diaoyong()
  }
}
</script>

<style lang="less" scopet>
.top{
height: 50px;
line-height: 50px;
i{
    margin-right: 5px;
}
.you{
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 5px;
    }
}
}
</style>
