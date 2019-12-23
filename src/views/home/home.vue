<template>
<el-carousel height="500px" :interval="5000" arrow="always">
    <el-carousel-item v-for="item in list" :key="item">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'http://img5.imgtn.bdimg.com/it/u=3927308382,2343375015&fm=11&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=925910236,3107839527&fm=11&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=2902568265,745615788&fm=11&gp=0.jpg'
      ]
    }
  }
}
</script>

<style>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img{
    width: 100%;
  }
</style>
