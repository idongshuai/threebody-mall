<template>
  <div class="app-container">
    <el-form :inline="true">
      <el-form-item label="描述">
        <el-input v-model="searchMap.po.execDesc" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="searchMap.po.userName" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="创建日期">
        <el-date-picker
          v-model="searchMap.timeStart"
          type="date"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
          placeholder="start">
        </el-date-picker> -
        <el-date-picker
          v-model="searchMap.timeEnd"
          type="date"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
          placeholder="end">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="请求URI">
        <el-input v-model="searchMap.po.reqUri" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="执行方法">
        <el-input v-model="searchMap.po.execMethod" placeholder="" clearable></el-input>
      </el-form-item>
      <!--<el-form-item label="请求参数">
        <el-input v-model="searchMap.po.args" placeholder="" clearable></el-input>
      </el-form-item>-->
      <el-form-item label="响应result">
        <el-input v-model="searchMap.po.responseResult" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="响应msg">
        <el-input v-model="searchMap.po.responseMsg" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="响应code">
        <el-input v-model="searchMap.po.responseCode" placeholder="" clearable></el-input>
      </el-form-item>
      <el-button type="primary" @click="fetchData()">查询</el-button>
    </el-form>

    <el-table
      :data="list"
      border
      :default-sort="{prop: 'createTime', order: 'descending'}"
      @sort-change="sortChange" v-loading="loading"
      style="width: 100%">
      <!--<el-table-column prop="id" label="ID" width="180"></el-table-column>-->
      <el-table-column prop="execDesc" label="描述"></el-table-column>
      <el-table-column prop="userName" label="用户名"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column prop="ip" label="IP"></el-table-column>
      <el-table-column prop="reqUri" label="请求URI"></el-table-column>
      <el-table-column prop="reqMethod" label="请求方法"></el-table-column>
      <el-table-column prop="execMethod" label="执行方法"></el-table-column>
      <el-table-column prop="execTime" label="执行时间"></el-table-column>
      <!--<el-table-column prop="args" label="请求参数" show-overflow-tooltip></el-table-column>-->
      <el-table-column prop="responseStatus" label="响应状态"></el-table-column>
      <el-table-column prop="responseResult" label="响应result"></el-table-column>
      <el-table-column prop="responseMsg" label="响应msg"></el-table-column>
      <el-table-column prop="responseCode" label="响应code"></el-table-column>
      <el-table-column prop="viewName" label="ViewName"></el-table-column>
      <el-table-column prop="logTakeTime" label="日志耗时"></el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currPage"
      :page-sizes="[10, 20, 30, 40, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

  </div>
</template>

<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

<script>
  import logApi from '@/api/log'

  export default {
    data() {
      return {
        total: 0,
        list: [],
        currPage: 1,
        pageSize: 10,
        searchMap: {po:{}, sortKey: 'createTime', order: 'desc'}, //查询条件
        pojo: {}, // 编辑表单绑定的实体
        id: '', // 当前用户修改的ID
        loading: true,
        inputVisible: false,
        inputValue: '',
        categories: {} //所有分类

      }
    },
    created() {
      this.loading = true
      this.fetchData()
    },
    methods: {
      handleSizeChange(val) {
        console.log("size change...")
        this.pageSize = val
        this.fetchData()
      },
      handleCurrentChange(val) {
        console.log("current change...")
        this.currPage = val
        this.fetchData()
      },
      sortChange(column) {
        console.log("sort change...")
        //获取字段名称和排序类型
        let sortKey = column.prop
        let order = column.order
        if (sortKey != null) {
          this.searchMap.sortKey = sortKey
        }
        if (order != null) {
          this.searchMap.order = order == 'descending' ? 'desc' : 'asc'
        }
        this.fetchData()
      },

      //分页加载数据
      fetchData() {
        this.loading = true
        this.searchMap.page = this.currPage
        this.searchMap.rows = this.pageSize
        /*if (this.searchMap.publishTime !== undefined && this.searchMap.publishTime !== 'undefined' && this.searchMap.publishTime != null && this.searchMap.publishTime !== '') {
          this.searchMap.publishTimeStr = this.searchMap.publishTime[0] + ',' + this.searchMap.publishTime[1]
        }*/
        logApi.queryByPage(this.searchMap).then(response => {
          this.list = response.data.elements
          this.total = response.data.elementsCount
          this.loading = false
        })
      }


    }
  }
</script>
