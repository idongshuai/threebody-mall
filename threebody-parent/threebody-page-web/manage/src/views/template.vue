<template>
  <div class="app-container">
    <el-form :inline="true">
      <el-form-item label="模板ID">
        <el-input v-model="searchMap.po.id" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="searchMap.po.title" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-input v-model="searchMap.tagStr" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="发布日期">
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

      <!--<el-form-item label="发布日期">
        <el-date-picker
          v-model="searchMap.publishTimeArr"
          type="daterange"
          value-format="yyyy-MM-dd"
          align="right"
          unlink-panels
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-form-item>-->
      <el-form-item label="付费状态">
          <el-select v-model="searchMap.paymentTypeStr" placeholder="全部">
            <el-option label="全部" value=""></el-option>
            <el-option label="免费" value="0"></el-option>
            <el-option label="付费" value="1"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="价格">
        <div style="width: 100px; display: inline-block;">
          <el-input type="number" v-model="searchMap.tdocsPriceStart" clearable></el-input>
        </div> -
        <div style="width: 100px; display: inline-block;">
          <el-input type="number" v-model="searchMap.tdocsPriceEnd" clearable></el-input>
        </div>
      </el-form-item>
      <el-form-item label="图形分类">
          <el-select v-model="searchMap.fileType" placeholder="全部" @change="fileTypeChange">
            <el-option label="全部" value=""></el-option>
            <el-option label="流程图" value="flow"></el-option>
            <el-option label="思维导图" value="mind"></el-option>
          </el-select>
        <el-select v-model="searchMap.po.category" placeholder="全部" @change="categoryChange">
          <el-option label="全部" value=""></el-option>
          <el-option v-for="(val, key) in categories" :key="key" :value="key" :label="val"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="同步状态">
          <el-select v-model="searchMap.tdocsSyncStr" placeholder="全部">
            <el-option label="全部" value=""></el-option>
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="审核状态">
        <el-select v-model="searchMap.tdocsAuditStr" placeholder="全部">
          <el-option label="全部" value=""></el-option>
          <el-option label="是" value="true"></el-option>
          <el-option label="否" value="false"></el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="fetchData()">查询</el-button>
      <el-button type="primary" @click="handleSyncTemplate()">同步</el-button>
    </el-form>

    <el-table
      :data="list"
      border
      :default-sort="{prop: 'publishTime', order: 'descending'}"
      @sort-change="sortChange" v-loading="loading"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection">
      </el-table-column>
      <!--<el-table-column prop="id" label="ID" width="180"></el-table-column>-->
      <el-table-column prop="title" label="标题" width="260"></el-table-column>
      <el-table-column prop="tags" label="标签" width="180" :formatter="tagFormatter"></el-table-column>
      <el-table-column prop="category" label="图形分类"></el-table-column>
      <!--<el-table-column prop="owner" label="作者"></el-table-column>-->
      <!--<el-table-column prop="owner" label="作者" :formatter="channelFormatter"></el-table-column>-->
      <el-table-column prop="tdocsCloneCount" label="使用量" sortable="custom"></el-table-column>
      <el-table-column prop="tdocsViewCount" label="浏览量" sortable="custom"></el-table-column>
      <el-table-column prop="tdocsPrice" label="价格" sortable="custom"></el-table-column>
      <el-table-column prop="publishTime" label="发布时间" width="155" sortable="custom"></el-table-column>
      <el-table-column prop="lastUseTime" label="最后使用时间" width="155" sortable="custom"></el-table-column>
      <el-table-column prop="tdocsSyncTime" label="同步时间" width="155" sortable="custom"></el-table-column>
      <el-table-column prop="tdocsSync" label="是否同步" :formatter="tdocsSyncFormatter"></el-table-column>
      <el-table-column prop="tdocsAudit" label="审核状态" :formatter="tdocsAuditFormatter"></el-table-column>
      <!--<el-table-column prop="tdocsAuditMsg" label="审核信息" sortable="custom"></el-table-column>-->

      <el-table-column fixed="right" label="操作" width="170">
        <template slot-scope="scope">
          <el-button @click="handleDesc(scope.row)" type="text" size="small">详情</el-button>
          <el-button @click="handleEdit(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="handleEditTemplate(scope.row.id, scope.row.category)" type="text" size="small">编辑</el-button>
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

    <!--详情弹框-->
    <el-dialog title="详情" :visible.sync="dialogDescVisible" top="5vh">
      <el-form label-width="130px">
        <el-form-item label="标题">
          <el-input v-model="formTemplate.title" style="background-color: white;"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="formTemplate.owner == null ? '' : formTemplate.owner.fullName" :formatter="tagFormatter"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" :rows="2" v-model="formTemplate.description"></el-input>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-input v-model="formTemplate.createTime"></el-input>
        </el-form-item>
        <el-form-item label="用户发布状态标识">
          <el-input v-model="formTemplate.status"></el-input>
        </el-form-item>
        <el-form-item label="付费类型">
          <el-input v-model="formTemplate.paymentType"></el-input>
        </el-form-item>
        <el-form-item label="推荐置顶">
          <el-input v-model="formTemplate.order"></el-input>
        </el-form-item>

        <el-form-item label="PC封面图">
          <el-popover placement="right" trigger="hover">
            <el-image :src="formTemplate.tdocsPcCoverImg" :fit="fits[0]"></el-image>
            <el-button type="text" slot="reference" @click="handleHref('pc')">查看</el-button>
          </el-popover>
        </el-form-item>

        <el-form-item label="移动封面图">
          <el-popover placement="right" trigger="hover">
            <el-image :src="formTemplate.tdocsMobileCoverImg" :fit="fits[0]"></el-image>
            <el-button type="text" slot="reference" @click="handleHref('mobile')">查看</el-button>
          </el-popover>
        </el-form-item>

        <el-form-item label="预览图">
          <el-popover placement="right" trigger="hover">
            <el-image :src="formTemplate.tdocsPreviewImg" :fit="fits[0]"></el-image>
            <el-button type="text" slot="reference" @click="handleHref('preview')">查看</el-button>
          </el-popover>
        </el-form-item>

        <el-form-item label="tdocs审核信息">
          <el-input type="textarea" :rows="2" v-model="formTemplate.tdocsAuditMsg"></el-input>
        </el-form-item>
        <el-form-item label="tdocs模板标签">
          <el-input type="textarea" :rows="2" v-model="formTemplate.tdocsClassTag"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogDescVisible=false">关闭</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!--编辑弹框-->
    <el-dialog title="编辑" :visible.sync="dialogFormVisible" top="5vh">
      <el-form label-width="100px">
        <el-form-item label="标题">
          <el-input v-model="formTemplate.title" placeholder=""></el-input>
        </el-form-item>

        <el-form-item label="标签">
          <el-tag
            :key="tag"
            v-for="tag in formTemplate.tags"
            closable
            :disable-transitions="false"
            @close="handleDelTag(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleAddTagInputConfirm"
            @blur="handleAddTagInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="handleAddTagShowInput">+ 添加</el-button>
        </el-form-item>

        <el-form-item label="描述">
          <el-input type="textarea" :rows="2" v-model="formTemplate.description"></el-input>
        </el-form-item>
        <el-form-item label="付费类型">
          <el-select v-model="formTemplate.paymentType">
            <el-option label="免费" :value="0"></el-option>
            <el-option label="付费" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="formTemplate.category">
            <el-option v-for="(val, key) in categories" :key="key" :value="key" :label="val"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="推荐置顶">
          <el-input type="number" v-model="formTemplate.order" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input type="number" v-model="formTemplate.tdocsPrice" placeholder=""></el-input>
        </el-form-item>

        <el-form-item label="PC封面图">
          <el-popover placement="right" trigger="hover">
            <el-image :src="formTemplate.tdocsPcCoverImg" :fit="fits[0]"></el-image>
            <el-button type="text" slot="reference" @click="handleHref('pc')">查看</el-button>
          </el-popover>
          <el-button type="text" @click="handleRegenerate(formTemplate.id, 'pc')" :loading="pcRegenerateLoading">重新生成</el-button>
        </el-form-item>

        <el-form-item label="移动封面图">
          <el-popover placement="right" trigger="hover">
            <el-image :src="formTemplate.tdocsMobileCoverImg" :fit="fits[0]"></el-image>
            <el-button type="text" slot="reference" @click="handleHref('mobile')">查看</el-button>
          </el-popover>
          <el-button type="text" @click="handleRegenerate(formTemplate.id, 'mobile')" :loading="mobileRegenerateLoading">重新生成</el-button>
        </el-form-item>

        <el-form-item label="预览图">
          <el-popover placement="right" trigger="hover">
            <el-image :src="formTemplate.tdocsPreviewImg" :fit="fits[0]"></el-image>
            <el-button type="text" slot="reference" @click="handleHref('preview')">查看</el-button>
          </el-popover>
          <el-button type="text" @click="handleRegenerate(formTemplate.id, 'preview')" :loading="previewRegenerateLoading">重新生成</el-button>
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
  .el-popover {
    max-width: 800px;
  }
</style>

<script>
  import templateApi from '@/api/template'
  import { Loading } from 'element-ui';

  export default {
    data() {
      return {
        total: 0,
        list: [],
        currPage: 1,
        pageSize: 10,
        searchMap: {po:{}, sortKey: 'publishTime', order: 'desc'}, //查询条件
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
        categories: {}, //所有分类
        multipleSelection: [] //表格选中项

      }
    },
    created() {
      this.loading = true
      this.fetchData()
      this.handleGetAllCategories()
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

      //编辑框点击保存
      handleSave() {
        /*const editLoading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.0)'
        });*/

        let loadingInstance = Loading.service({ fullscreen: true, background: "rgba(0, 0, 0, 0.0)" });

        /*setTimeout(() => {
          loading.close();
        }, 2000);*/

        let tempEdit = {};
        tempEdit.id = this.formTemplate.id;
        tempEdit.category = this.formTemplate.category;
        tempEdit.order = this.formTemplate.order === '' ? 0 : this.formTemplate.order;
        tempEdit.paymentType = this.formTemplate.paymentType;
        tempEdit.tags = this.formTemplate.tags;
        tempEdit.tdocsPrice = this.formTemplate.tdocsPrice === '' ? 0 : this.formTemplate.tdocsPrice;
        tempEdit.title = this.formTemplate.title;
        tempEdit.description = this.formTemplate.description;
        templateApi.update(this.id, tempEdit).then(response => {
          loadingInstance.close();

          let flag = response.result === 'success';
          this.$message({
            message: response.msg,
            type: (flag ? 'success' : 'error')
          });
          /*this.$notify({
            title: (flag ? '成功' : '错误'),
            message: response.msg,
            type: (flag ? 'success' : 'error')
          })*/
          if (flag) {//如果成功
            this.fetchData()//刷新
            /*let timerOne = setTimeout(() => {
              this.fetchData()
            }, 1000)*/
          }
        }).catch(err => {
          loadingInstance.close();
          console.log('handleSave: ' + err)
        })

        this.dialogFormVisible = false
      },

      //弹出详情框
      handleDesc(row) {
        this.formTemplate = row
        this.dialogDescVisible = true

        //获取腾讯文档模板分类标签
        templateApi.getClassTag(row.id).then(response => {
          let flag = response.result === 'success';
          if (flag) {
            this.formTemplate.tdocsClassTag = response.data.tdocsClassTag;
          }

        }).catch(err => {
          console.log('getClassTag: ' + err)
        })

      },

      //弹出编辑框
      handleEdit(row) {
        this.id = row.id
        this.formTemplate = row
        this.dialogFormVisible = true
        /*if (id != '') {
          templateApi.findById(id).then(response => {
            let flag = response.result == 'success' ? true : false;
            if (flag) {
              this.pojo = response.data
            }

          })
        } else {
          this.pojo = {}
        }*/
      },

      //前往编辑模板
      handleEditTemplate(id, category) {
        var page = 'manage_designer.html';
        if (category.indexOf('mind') !== -1) {
          page = 'manage_designer_mind.html';
        }
        window.open(process.env.BASE_API + '/manage/'+page+'?id=' + id, 'target', '');
      },
      //搜索栏：图形大分类select改变
      fileTypeChange() {
        //存在bug
        // this.searchMap.po.category = ''
      },
      //搜索栏：图形分类select改变
      categoryChange() {
        // this.searchMap.fileType = ''
      },

      //点击删除
      handleDelete(id) {

        this.$confirm('确定删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          templateApi.deleteById(id).then(response => {
            let flag = response.result === 'success';
            this.$message({
              message: response.msg,
              type: (flag ? 'success' : 'error')
            });
            /*this.$notify({
              title: (flag ? '成功' : '错误'),
              message: response.msg,
              type: (flag ? 'success' : 'error')
            })*/
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

      //点击同步
      handleSyncTemplate() {
        if (this.multipleSelection.length < 1) {
          this.$message({
            type: 'info',
            message: '未选择模板'
          });
          return
        }

        let idsObj = {ids: []}
        this.multipleSelection.filter((item,i) =>{
          idsObj.ids.push(item.id)
        })

        this.$confirm('确定同步吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.loading = true;
          templateApi.syncTemplate(idsObj).then(response => {
            this.loading = false;
            let flag = response.result === 'success' && response.data.successCount > 0;
            if (response.data.successCount > 0) {
              this.$message({
                message: '同步成功：' + response.data.successCount,
                type: 'success'
              });
            }

            let timerOne = setTimeout(() => {
              if (response.data.failCount > 0) {
                this.$message({
                  message: '同步失败：' + response.data.failCount,
                  type: 'error'
                });
              }
            }, 500)

            /*this.$notify({
              title: (flag ? '成功' : '错误'),
              message: response.msg,
              type: (flag ? 'success' : 'error')
            })*/
            if (flag) {
              this.fetchData()
              /*let timerOne = setTimeout(() => {
                this.fetchData()
              }, 200)*/
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消同步'
          });
        });

      },

      //新窗口打开图片链接
      handleHref(type) {
        if ('pc' === type) {
          window.open(this.formTemplate.tdocsPcCoverImg, 'target', '');
        } else if ('mobile' === type) {
          window.open(this.formTemplate.tdocsMobileCoverImg, 'target', '');
        } else if ('preview' === type) {
          window.open(this.formTemplate.tdocsPreviewImg, 'target', '');
        }
      },

      //重新生成图片链接
      handleRegenerate(id, type) {
        let loadingInstance = Loading.service({ fullscreen: true, background: "rgba(0, 0, 0, 0.0)" });
        // this.pcRegenerateLoading = true;

        templateApi.regenerateImage(id, type).then(response => {
          /*this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close();
          });*/
          // this.pcRegenerateLoading = false;

          loadingInstance.close();

          let flag = response.result === 'success';
          this.$message({
            message: response.msg,
            type: (flag ? 'success' : 'error')
          });
          if (flag) {
            this.formTemplate = response.data;
          }

        }).catch(err => {
          loadingInstance.close();
          console.log('handleRegenerate: ' + err)
        })


      },

      //删除标签
      handleDelTag(tag) {
        console.log(tag)
        this.formTemplate.tags.splice(this.formTemplate.tags.indexOf(tag), 1);
        console.log(this.formTemplate.tags)

      },

      //显示添加标签input框
      handleAddTagShowInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      //添加标签确认
      handleAddTagInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          if (this.formTemplate.tags == null) {
            this.formTemplate.tags = [];
          }
          this.formTemplate.tags.push(inputValue);
          console.log(this.formTemplate.tags)
        }
        this.inputVisible = false;
        this.inputValue = '';
      },

      //获取所有分类
      handleGetAllCategories() {
        templateApi.getAllCategories().then(response => {
          let flag = response.result === 'success';
          if (flag) {
            this.categories = response.data
          }

        })
      },

      //标签格式化
      tagFormatter(row, column) {
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
      //腾讯文档同步模板状态格式化
      tdocsSyncFormatter(row, column) {
        if (row.tdocsSync) {
          return "是"
        } else {
          return "否"
        }
      },
      //腾讯文档模板审核状态格式化
      tdocsAuditFormatter(row, column) {
        if (row.tdocsAudit) {
          return "是"
        } else {
          return "否"
        }
      }


    }
  }
</script>
