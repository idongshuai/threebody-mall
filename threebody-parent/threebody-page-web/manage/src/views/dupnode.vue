<template>
  <div class="app-container">
    <el-form :inline="true">
      <el-form-item label="URL">
        <el-input v-model="pojo.po" placeholder="" clearable></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="processDupNode()">处理重复节点</el-button>

  </div>
</template>

<style>
  .el-input {
    width: 900px;
  }
</style>

<script>
  import logApi from '@/api/log'
  import { Loading } from 'element-ui';

  export default {
    data() {
      return {
        pojo: {po:''}
      }
    },
    created() {
    },
    methods: {
      processDupNode() {
        let loadingInstance = Loading.service({ fullscreen: true, background: "rgba(0, 0, 0, 0.0)" });

        logApi.mindDuplicateNode(this.pojo).then(response => {
          loadingInstance.close();
          let flag = response.result === 'success';
          this.$message({
            message: response.msg,
            type: (flag ? 'success' : 'error')
          });
          if (flag) {
            let pos = response.data.pos;
            //下载POS
            let filename = '脑图修复_'+pos.length+'.pos';
            let a = document.createElement('a');
            let blob = new Blob([pos]);
            a.download = filename;
            a.href = URL.createObjectURL(blob);
            a.click();
            URL.revokeObjectURL(blob);
          }
        }).catch(err => {
          loadingInstance.close();
          console.log(err)
        })
      }


    }
  }
</script>
