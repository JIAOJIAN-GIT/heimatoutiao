<template>
    <el-row class="top">
        <el-col :span="12">
            <i class="el-icon-s-fold"></i>
            <span>江苏黑马xxxxxxx</span>
        </el-col>
        <el-col class="you" :span="12">
            <el-row  type="flex" justify="end">
                <img src="../../assets/bgtu.jpg" alt="">
                <el-dropdown>
                    <span>大仙娱乐</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item>GIT信息</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
export default {

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
