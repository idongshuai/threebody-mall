<template>
  <div class="app-container">
    <el-form :inline="true">
      <el-form-item label="描述">
        <el-input v-model="searchMap.po.memberChange" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="po用户ID">
        <el-input v-model="searchMap.po.userid" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="tdocs用户ID">
        <el-input v-model="searchMap.po.tdocUserId" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="变更类型">
        <el-select v-model="searchMap.po.type" placeholder="全部" clearable>
          <el-option label="全部" value=""></el-option>
          <el-option label="新增用户" value="add"></el-option>
          <el-option label="更新用户" value="update"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="变更日期">
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

      <el-form-item label="原是否会员">
        <el-select v-model="searchMap.oldIsVip" placeholder="全部" clearable>
          <el-option label="全部" value=""></el-option>
          <el-option label="是" value="true"></el-option>
          <el-option label="否" value="false"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="新是否会员">
        <el-select v-model="searchMap.newIsVip" placeholder="全部" clearable>
          <el-option label="全部" value=""></el-option>
          <el-option label="是" value="true"></el-option>
          <el-option label="否" value="false"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="原会员等级">
        <el-input v-model="searchMap.oldVipLevel" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="新会员等级">
        <el-input v-model="searchMap.newVipLevel" placeholder="" clearable></el-input>
      </el-form-item>

      <el-form-item label="原会员类型">
        <el-select v-model="searchMap.oldType" placeholder="全部" clearable>
          <el-option label="全部" value=""></el-option>
          <el-option label="正常用户" value="1"></el-option>
          <el-option label="腾讯公司员工" value="2"></el-option>
          <el-option label="其他企业微信用户" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="新会员类型">
        <el-select v-model="searchMap.newType" placeholder="全部" clearable>
          <el-option label="全部" value=""></el-option>
          <el-option label="正常用户" value="1"></el-option>
          <el-option label="腾讯公司员工" value="2"></el-option>
          <el-option label="其他企业微信用户" value="3"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="原是否PO升级">
        <el-select v-model="searchMap.oldIsPoVip" placeholder="全部" clearable>
          <el-option label="全部" value=""></el-option>
          <el-option label="是" value="true"></el-option>
          <el-option label="否" value="false"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="新是否PO升级">
        <el-select v-model="searchMap.newIsPoVip" placeholder="全部" clearable>
          <el-option label="全部" value=""></el-option>
          <el-option label="是" value="true"></el-option>
          <el-option label="否" value="false"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="原是否有无限节点包">
        <el-select v-model="searchMap.oldHasVipExpansion" placeholder="全部" clearable>
          <el-option label="全部" value=""></el-option>
          <el-option label="是" value="true"></el-option>
          <el-option label="否" value="false"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="新是否有无限节点包">
        <el-select v-model="searchMap.newHasVipExpansion" placeholder="全部" clearable>
          <el-option label="全部" value=""></el-option>
          <el-option label="是" value="true"></el-option>
          <el-option label="否" value="false"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="原是否超级会员">
        <el-select v-model="searchMap.oldIsSVIP" placeholder="全部" clearable>
          <el-option label="全部" value=""></el-option>
          <el-option label="是" value="true"></el-option>
          <el-option label="否" value="false"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="新是否超级会员">
        <el-select v-model="searchMap.newIsSVIP" placeholder="全部" clearable>
          <el-option label="全部" value=""></el-option>
          <el-option label="是" value="true"></el-option>
          <el-option label="否" value="false"></el-option>
        </el-select>
      </el-form-item>

      <el-button type="primary" @click="fetchData()">查询</el-button>
      <el-button type="primary" @click="handleExportCsv()">导出</el-button>
    </el-form>

    <el-table
      :data="list"
      border
      :default-sort="{prop: 'changeDate', order: 'descending'}"
      @sort-change="sortChange" v-loading="loading"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <!--<el-table-column type="selection"></el-table-column>-->
      <!--<el-table-column prop="id" label="ID" width="180"></el-table-column>-->
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="tdoc用户ID">
              <span>{{ props.row.tdocUserId }}</span>
            </el-form-item>
            <el-form-item label="原用户昵称">
              <span>{{ props.row.oldNickName }}</span>
            </el-form-item>
            <el-form-item label="新用户昵称">
              <span>{{ props.row.newNickName }}</span>
            </el-form-item>
            <el-form-item label="原头像">
              <span>{{ props.row.oldAvatar }}</span>
            </el-form-item>
            <el-form-item label="新头像">
              <span>{{ props.row.newAvatar }}</span>
            </el-form-item>

            <el-form-item label="原过期时间">
              <span>{{ timeFormatter(props.row.oldExpireTime) }}</span>
            </el-form-item>
            <el-form-item label="新过期时间">
              <span>{{ timeFormatter(props.row.newExpireTime) }}</span>
            </el-form-item>
            <el-form-item label="原PO到期时间">
              <span>{{ timeFormatter(props.row.oldPoExpire) }}</span>
            </el-form-item>
            <el-form-item label="新PO到期时间">
              <span>{{ timeFormatter(props.row.newPoExpire) }}</span>
            </el-form-item>
            <el-form-item label="原无限节点包过期时间">
              <span>{{ timeFormatter(props.row.oldVipExpansionExpire) }}</span>
            </el-form-item>
            <el-form-item label="新无限节点包过期时间">
              <span>{{ timeFormatter(props.row.newVipExpansionExpire) }}</span>
            </el-form-item>

            <el-form-item label="原超级会员过期时间">
              <span>{{ timeFormatter(props.row.oldSVIPExpire) }}</span>
            </el-form-item>
            <el-form-item label="新超级会员过期时间">
              <span>{{ timeFormatter(props.row.newSVIPExpire) }}</span>
            </el-form-item>

          </el-form>
        </template>
      </el-table-column>

      <el-table-column prop="memberChange" label="描述" width="180"></el-table-column>
      <el-table-column prop="userid" label="po用户ID"></el-table-column>
      <el-table-column prop="type" label="变更类型" sortable="custom"></el-table-column>
      <el-table-column prop="changeDate" label="变更时间" sortable="custom"></el-table-column>

      <el-table-column prop="oldIsVip" label="原是否会员" sortable="custom" :formatter="oldIsVipFormatter"></el-table-column>
      <el-table-column prop="newIsVip" label="新是否会员" sortable="custom" :formatter="newIsVipFormatter"></el-table-column>
      <el-table-column prop="oldVipLevel" label="原会员等级" sortable="custom"></el-table-column>
      <el-table-column prop="newVipLevel" label="新会员等级" sortable="custom"></el-table-column>
      <el-table-column prop="oldIsPoVip" label="原是否PO升级" sortable="custom" :formatter="oldIsPoVipFormatter"></el-table-column>
      <el-table-column prop="newIsPoVip" label="新是否PO升级" sortable="custom" :formatter="newIsPoVipFormatter"></el-table-column>
      <el-table-column prop="oldType" label="原会员类型" sortable="custom" :formatter="oldTypeFormatter"></el-table-column>
      <el-table-column prop="newType" label="新会员类型" sortable="custom" :formatter="newTypeFormatter"></el-table-column>
      <el-table-column prop="oldHasVipExpansion" label="原是否有无限节点包" sortable="custom" :formatter="oldHasVipExpansionFormatter"></el-table-column>
      <el-table-column prop="newHasVipExpansion" label="新是否有无限节点包" sortable="custom" :formatter="newHasVipExpansionFormatter"></el-table-column>
      <el-table-column prop="oldIsSVIP" label="原是否超级会员" sortable="custom" :formatter="oldIsSVIPFormatter"></el-table-column>
      <el-table-column prop="newIsSVIP" label="新是否超级会员" sortable="custom" :formatter="newIsSVIPFormatter"></el-table-column>

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
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 160px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }
</style>

<script>
  import vipRecordApi from '@/api/vip_record'
  import json2csv from 'json2csv';

  export default {
    data() {
      return {
        total: 0,
        list: [],
        currPage: 1,
        pageSize: 10,
        searchMap: {po:{}, sortKey: 'changeDate', order: 'desc'}, //查询条件
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
        vipRecordApi.queryByPage(this.searchMap).then(response => {
          this.list = response.data.elements
          this.total = response.data.elementsCount
          this.loading = false
        }).catch(err => {
          this.loading = false
          console.log('fetchData: ' + err)
        })
      },

      //原是否会员
      oldIsVipFormatter(row, column) {
        if (row.oldIsVip) {
          return "是";
        }
        return "否";
      },

      oldIsPoVipFormatter(row, column) {
        if (row.oldIsPoVip) {
          return "是";
        }
        return "否";
      },
      oldTypeFormatter(row, column) {
        if (row.oldType === '1') {
          return "正常用户";
        } else if (row.oldType === '2') {
          return "腾讯公司员工";
        } else if (row.oldType === '3') {
          return "其他企业微信用户";
        }
        return "其他用户";
      },
      oldHasVipExpansionFormatter(row, column) {
        if (row.oldHasVipExpansion) {
          return "是";
        }
        return "否";
      },
      oldIsSVIPFormatter(row, column) {
        if (row.oldIsSVIP) {
          return "是";
        }
        return "否";
      },

      //新是否会员
      newIsVipFormatter(row, column) {
        if (row.newIsVip) {
          return "是";
        }
        return "否";
      },

      newIsPoVipFormatter(row, column) {
        if (row.newIsPoVip) {
          return "是";
        }
        return "否";
      },
      newTypeFormatter(row, column) {
        if (row.newType === '1') {
          return "正常用户";
        } else if (row.newType === '2') {
          return "腾讯公司员工";
        } else if (row.newType === '3') {
          return "其他企业微信用户";
        }
        return "其他用户";
      },
      newHasVipExpansionFormatter(row, column) {
        if (row.newHasVipExpansion) {
          return "是";
        }
        return "否";
      },
      newIsSVIPFormatter(row, column) {
        if (row.newIsSVIP) {
          return "是";
        }
        return "否";
      },

      //时间戳格式化
      timeFormatter(timeMillis) {
        if (timeMillis == null || timeMillis === '' || timeMillis === '0' || timeMillis === 0) {
          return '';
        }
        timeMillis = timeMillis + '';
        return new Date(parseInt(timeMillis)).toLocaleString();
      },

      //导出Csv
      handleExportCsv() {
        try {
          let fields = [{value: 'memberChange', label: '描述'}, {value: 'userid', label: 'po用户ID'}, {value: 'tdocUserId', label: 'tdoc用户ID'},
            {value: 'type', label: '变更类型'}, {value: 'changeDate', label: '变更时间'}, {value: 'oldIsVip', label: '原是否会员'},
            {value: 'newIsVip', label: '新是否会员'}, {value: 'oldExpireTime', label: '原过期时间'}, {value: 'newExpireTime', label: '新过期时间'},
            {value: 'oldVipLevel', label: '原会员等级'}, {value: 'newVipLevel', label: '新会员等级'},
            {value: 'oldIsPoVip', label: '原是否PO升级'}, {value: 'newIsPoVip', label: '新是否PO升级'},
            {value: 'oldPoExpire', label: '原PO到期时间'}, {value: 'newPoExpire', label: '新PO到期时间'},
            {value: 'oldType', label: '原会员类型'}, {value: 'newType', label: '新会员类型'},
            {value: 'oldHasVipExpansion', label: '原是否有无限节点包'}, {value: 'newHasVipExpansion', label: '新是否有无限节点包'},
            {value: 'oldVipExpansionExpire', label: '原无限节点包过期时间'}, {value: 'newVipExpansionExpire', label: '新无限节点包过期时间'},
            {value: 'oldIsSVIP', label: '原是否超级会员'}, {value: 'newIsSVIP', label: '新是否超级会员'},
            {value: 'oldSVIPExpire', label: '原超级会员过期时间'}, {value: 'newSVIPExpire', label: '新超级会员过期时间'},
            {value: 'oldNickName', label: '原用户昵称'}, {value: 'newNickName', label: '新用户昵称'},
            {value: 'oldAvatar', label: '原头像'}, {value: 'newAvatar', label: '新头像'}];

          const result = json2csv.parse(this.list, {
            fields: fields,
            excelStrings: true
          });

          let month = new Date().getMonth() + 1;
          let fileName = '腾讯文档_会员变更记录_' + new Date().getFullYear()+"-"+month+"-"+new Date().getDate()

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
