<template>
  <div class="app-container">
    <el-form :inline="true">
      <el-form-item label="PO订单ID">
        <el-input v-model="searchMap.po.orderId" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="tdocs订单ID">
        <el-input v-model="searchMap.po.tradeNo" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="用户ID">
        <el-input v-model="searchMap.po.user.userId" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="订单状态">
        <el-select v-model="searchMap.paySuccessStr" placeholder="全部">
          <el-option label="全部" value=""></el-option>
          <el-option label="成功" value="true"></el-option>
          <el-option label="非成功" value="false"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单类型">
        <el-select v-model="searchMap.po.orderType" placeholder="全部">
          <el-option label="全部" value=""></el-option>
          <el-option label="普通会员" value="1"></el-option>
          <el-option label="节点包" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单金额">
        <div style="width: 100px; display: inline-block;">
          <el-input type="number" v-model="searchMap.payMoneyStart" clearable></el-input>
        </div> -
        <div style="width: 100px; display: inline-block;">
          <el-input type="number" v-model="searchMap.payMoneyEnd" clearable></el-input>
        </div>
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
      <!--<el-form-item label="会员等级">
        <el-select v-model="searchMap.vipLevel" placeholder="全部">
          <el-option label="全部" value=""></el-option>
          <el-option label="成功" value="true"></el-option>
          <el-option label="非成功" value="false"></el-option>
        </el-select>
      </el-form-item>-->
      <el-form-item label="是否续费">
        <el-select v-model="searchMap.isRenewStr" placeholder="全部">
          <el-option label="全部" value=""></el-option>
          <el-option label="是" value="true"></el-option>
          <el-option label="否" value="false"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文件ID">
        <el-input v-model="searchMap.po.fileId" placeholder="" clearable></el-input>
      </el-form-item>
      <el-button type="primary" @click="fetchData()">查询</el-button>
      <el-button type="primary" @click="handleExportCsv()">导出</el-button>
    </el-form>

    <el-table
      :data="list"
      border
      :default-sort="{prop: 'createDate', order: 'descending'}"
      @sort-change="sortChange" v-loading="loading"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <!--<el-table-column type="selection"></el-table-column>-->
      <!--<el-table-column prop="id" label="ID" width="180"></el-table-column>-->
      <el-table-column prop="orderId" label="PO订单ID" width="180"></el-table-column>
      <el-table-column prop="tradeNo" label="tdocs订单ID"></el-table-column>
      <el-table-column prop="user" label="用户ID" width="260" :formatter="userFormatter"></el-table-column>
      <el-table-column prop="paySuccess" label="订单状态" sortable="custom" :formatter="statusFormatter"></el-table-column>
      <el-table-column prop="orderType" label="订单类型" sortable="custom"></el-table-column>
      <el-table-column prop="payMoney" label="订单金额" sortable="custom"></el-table-column>
      <el-table-column prop="duration" label="开通会员时长" sortable="custom"></el-table-column>
      <el-table-column prop="vip_level" label="会员等级" sortable="custom"></el-table-column>
      <el-table-column prop="is_renew" label="是否续费" sortable="custom" :formatter="isRenewFormatter"></el-table-column>
      <el-table-column prop="createDate" label="创建日期" sortable="custom"></el-table-column>
      <el-table-column prop="payDate" label="交易成功日期" sortable="custom"></el-table-column>

      <el-table-column prop="fileType" label="文件类型" sortable="custom"></el-table-column>
      <el-table-column prop="source" label="来源" sortable="custom"></el-table-column>

      <!--<el-table-column fixed="right" label="操作" width="170">
        <template slot-scope="scope">
          <el-button @click="handleDesc(scope.row)" type="text" size="small">详情</el-button>
          <el-button @click="handleEdit(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="handleEditTemplate(scope.row.id, scope.row.category)" type="text" size="small">编辑</el-button>
          &lt;!&ndash;<el-button @click="handleDelete(scope.row.id)" type="text" size="small">删除</el-button>&ndash;&gt;
        </template>
      </el-table-column>-->
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currPage"
      :page-sizes="[10, 20, 50, 1000]"
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
  .el-popover {
    max-width: 800px;
  }
</style>

<script>
  import templateApi from '@/api/order'
  import { Loading } from 'element-ui';
  import json2csv from 'json2csv';

  export default {
    data() {
      return {
        total: 0,
        list: [],
        currPage: 1,
        pageSize: 10,
        searchMap: {po:{user: {}}, sortKey: 'createDate', order: 'desc'}, //查询条件
        dialogDescVisible: false, // 详情窗口是否可见
        dialogFormVisible: false, // 编辑窗口是否可见
        pojo: {}, // 编辑表单绑定的实体
        formTemplate: {}, // 编辑表单绑定的模板实体
        id: '', // 当前用户修改的ID
        loading: true,
        fullscreenLoading: false,
        pcRegenerateLoading: false,
        mobileRegenerateLoading: false,
        previewRegenerateLoading: false,
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        inputVisible: false,
        inputValue: '',
        categories: {}, //所有分类
        multipleSelection: [] //表格选中项

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
          this.searchMap.order = order === 'descending' ? 'desc' : 'asc'
        }
        this.fetchData()
      },
      //选中一行
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },

      //分页加载数据
      fetchData() {
        this.loading = true
        this.searchMap.page = this.currPage
        this.searchMap.rows = this.pageSize
        /*if (this.searchMap.publishTime !== undefined && this.searchMap.publishTime !== 'undefined' && this.searchMap.publishTime != null && this.searchMap.publishTime !== '') {
          this.searchMap.publishTimeStr = this.searchMap.publishTime[0] + ',' + this.searchMap.publishTime[1]
        }*/
        templateApi.queryByPage(this.searchMap).then(response => {
          this.list = response.data.elements
          this.total = response.data.elementsCount
          this.loading = false
        }).catch(err => {
          this.loading = false
          console.log('fetchData: ' + err)
        })
      },


      //用户格式化
      ownerFormatter(row, column) {
        let tagStr = '';
        if (row.tags != null && row.tags.length > 0) {
          row.tags.filter( (item,i) =>{
            if (i === row.tags.length - 1) {
              tagStr = tagStr + item;
            } else {
              tagStr = tagStr + item + ',';
            }
          })
        }
        return tagStr;
      },


      //用户格式化
      userFormatter(row, column) {
        if (row.user != null) {
          return row.user.userId;
        }
        return "";
      },



      //订单状态格式化
      statusFormatter(row, column) {
        if (row.paySuccess) {
          return "成功";
        }
        return "";
      },



      //是否续费格式化
      isRenewFormatter(row, column) {
        if (row.is_renew) {
          return "是";
        }
        return "";
      },

      //导出Csv
      handleExportCsv() {
        try {
          let fields = [{value: 'orderId', label: 'PO订单ID'}, {value: 'tradeNo', label: 'tdocs订单ID'}, {value: 'user.userId', label: '用户ID'},
            {value: 'paySuccess', label: '订单状态'}, {value: 'orderType', label: '订单类型'}, {value: 'payMoney', label: '订单金额'},
            {value: 'duration', label: '开通会员时长'}, {value: 'vip_level', label: '会员等级'}, {value: 'is_renew', label: '是否续费'},
            {value: 'createDate', label: '创建日期'}, {value: 'payDate', label: '交易成功日期'}, {value: 'fileType', label: '文件类型'},
            {value: 'source', label: '来源'}];

          const result = json2csv.parse(this.list, {
            fields: fields,
            excelStrings: true
          });

          let month = new Date().getMonth() + 1;
          let fileName = '腾讯文档订单_' + new Date().getFullYear()+"-"+month+"-"+new Date().getDate()

          if (this.MyBrowserIsIE()) {
            // IE10以及Edge浏览器
            var BOM = "\uFEFF";
            // 文件转Blob格式
            var csvData = new Blob([BOM + result], { type: "text/csv" });
            navigator.msSaveBlob(csvData, `${fileName}.csv`);
          } else {
            let csvContent = "data:text/csv;charset=utf-8,\uFEFF" + result;
            // 非ie 浏览器
            this.createDownLoadClick(csvContent, `${fileName}.csv`);
          }
        } catch (err) {
          alert(err);
        }
      },


      //创建a标签下载
      createDownLoadClick(content, fileName) {
        const link = document.createElement("a");
        link.href = encodeURI(content);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },

      // 判断是否IE浏览器
      MyBrowserIsIE() {
        let isIE = false;
        if (
          navigator.userAgent.indexOf("compatible") > -1 &&
          navigator.userAgent.indexOf("MSIE") > -1
        ) {
          // ie浏览器
          isIE = true;
        }
        if (navigator.userAgent.indexOf("Trident") > -1) {
          // edge 浏览器
          isIE = true;
        }
        return isIE;
      }

    }
  }
</script>
