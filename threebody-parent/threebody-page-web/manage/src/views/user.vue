<template>
  <div class="app-container">
    <!--<el-form :inline="true">
      <el-form-item label="ID">
        <el-input v-model="searchMap.po.id" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="searchMap.po.title" placeholder="" clearable></el-input>
      </el-form-item>
      <el-button type="primary" @click="fetchData()">查询</el-button>
      <el-button type="primary" @click="handleEdit('')">新增</el-button>
    </el-form>-->

    <el-table
      :data="list"
      border
      :default-sort="{prop: 'createTime', order: 'descending'}"
      @sort-change="sortChange" v-loading="loading"
      style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="auth" label="权限"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column prop="lastLoginTime" label="最后登录"></el-table-column>

      <el-table-column fixed="right" label="操作" width="170">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text" size="small">修改</el-button>
          <!--<el-button @click="handleDelete(scope.row.id)" type="text" size="small">删除</el-button>-->
        </template>
      </el-table-column>
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

    <!--编辑弹框-->
    <el-dialog title="修改" :visible.sync="dialogFormVisible" top="5vh">
      <el-form label-width="100px">

        <el-form-item label="新密码">
          <el-input v-model="pojo.password" placeholder="" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="pojo.repeatPassword" placeholder="" show-password></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleSave()">保存</el-button>
          <el-button @click="dialogFormVisible=false">关闭</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
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
  import userApi from '@/api/user'

  export default {
    data() {
      return {
        total: 0,
        list: [],
        currPage: 1,
        pageSize: 10,
        searchMap: {po:{}, sortKey: 'createTime', order: 'desc'}, //查询条件
        dialogDescVisible: false, // 详情窗口是否可见
        dialogFormVisible: false, // 编辑窗口是否可见
        pojo: {}, // 编辑表单绑定的实体
        formTemplate: {}, // 编辑表单绑定的模板实体
        id: '', // 当前用户修改的ID
        loading: true,
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        inputVisible: false,
        inputValue: '',
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
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
        userApi.queryByPage(this.searchMap).then(response => {
          this.list = response.data.elements
          this.total = response.data.elementsCount
          this.loading = false
        })
      },

      //编辑框点击保存
      handleSave() {

        if (this.pojo.password === null || this.pojo.password === '') {
          this.$message({
            message: "密码为空",
            type: 'error'
          });
          return
        }
        if (this.pojo.repeatPassword === null || this.pojo.repeatPassword === '') {
          this.$message({
            message: "确认密码为空",
            type: 'error'
          });
          return
        }
        if (this.pojo.password !== this.pojo.repeatPassword) {
          this.$message({
            message: "输入密码不一致",
            type: 'error'
          });
          return
        }

        let manageUser = {};
        manageUser.id = this.pojo.id;
        manageUser.password = this.pojo.password;

        userApi.edit(this.id, manageUser).then(response => {
          let flag = response.result === 'success';
          this.$message({
            message: response.msg,
            type: (flag ? 'success' : 'error')
          });
          if (flag) {//如果成功
            this.fetchData()//刷新
          }
        })
        this.dialogFormVisible = false
      },


      //弹出编辑框
      handleEdit(row) {
        this.id = row.id
        this.pojo = row
        this.dialogFormVisible = true
      },

      //点击删除
      handleDelete(id) {

        this.$confirm('确定删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          userApi.deleteById(id).then(response => {
            let flag = response.result == 'success' ? true : false;
            this.$notify({
              title: (flag ? '成功' : '错误'),
              message: response.msg,
              type: (flag ? 'success' : 'error')
            })
            if (flag) {
              this.fetchData()
              let timerOne = setTimeout(() => {
                this.fetchData()
              }, 1000)
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

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
      }

    }
  }
</script>
