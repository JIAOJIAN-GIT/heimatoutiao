<template>
<el-card>
    <bread-crunmb slot="header">
        <template slot="title">发布文章</template>
    </bread-crunmb>
    <el-form>
        <el-form-item label="标题">
            <el-input placeholder="文章名称" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="内容">
            <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="封面">
            <el-radio-group v-model="formData.radio">
                <el-radio :label="0">单图</el-radio>
                <el-radio :label="1">三图</el-radio>
                <el-radio :label="2">无图</el-radio>
                <el-radio :label="3">自动</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="频道">
            <el-select>
                <el-option></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">发表</el-button>
            <el-button>存入草稿</el-button>
        </el-form-item>
    </el-form>
</el-card>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        radio: 0
      }
    }
  }
}
</script>

<style>

</style>
