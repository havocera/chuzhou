<template>
  <div>
     <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>仓储管理</el-breadcrumb-item>
      <el-breadcrumb-item>仓库管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
    <!-- 搜索与添加区域 -->
      <el-row :gutter="10">
        <el-col :span="6">
          <el-input
            clearable
            v-model="queryInfo.query"
            @clear="getDataList"
            placeholder="请输入查询条件"
            class="input-with-select"
          >
            <el-button
              @click="getDataList"
              slot="append"
              icon="el-icon-search"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="addDialogVisible = true"
            >新增仓库信息</el-button
          >
        </el-col>
      </el-row>
      <!-- 数据列表 -->
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="index"
        label="编号"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="仓库名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="capacity"
        label="仓库容量">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="仓库负责人电话">
      </el-table-column>
      <el-table-column
        prop="address"
        label="仓库地址">
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="创建时间">
      </el-table-column>
        <el-table-column label="操作" width="180px">
          <!-- 插槽自定义样式 -->
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="编辑" placement="top-start">
              <el-button
                @click="editInfo(scope.row.id)"
                type="primary"
                icon="el-icon-edit"
              ></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="删除" placement="top-end">
              <el-button
                type="warning"
                @click="delInfo(scope.row.id)"
                icon="el-icon-delete"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
    </el-table>
       <!-- 分页区域 -->
      <el-pagination
        background
        layout="prev, pager, next,total"
        :total="total"
        :page-size="queryInfo.pageSize"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
       <!-- 新增仓库信息dialog -->
      <el-dialog
        title="新增仓库信息"
        :visible.sync="addDialogVisible"
        width="40%"
      >
        <!-- 表单区 -->
        <el-form size="medium"  ref="addFormRef" :inline="true" :model="addClientInfo" label-width="120px">
          <el-form-item label="仓库名称"  prop="name">
            <el-input v-model="addClientInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="仓库负责人"  prop="fzr">
            <el-input v-model="addClientInfo.fzr"></el-input>
          </el-form-item>
          <el-form-item label="仓库容量"  prop="capacity">
            <el-input v-model="addClientInfo.capacity"></el-input>
          </el-form-item>
          <el-form-item label="仓库地址"  prop="address">
            <el-input v-model="addClientInfo.address"></el-input>
          </el-form-item>
          <el-form-item label="仓库联系人电话"  prop="phone">
            <el-input v-model="addClientInfo.phone"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addFormSubmit">确 定</el-button>
        </span>
      </el-dialog>
       <!-- 编辑投入品台账dialog -->
       <el-dialog
        title="新增客户信息"
        :visible.sync="editDialogVisible"
        width="40%"
      >
        <!-- 表单区 -->
        <el-form size="medium"  ref="editFormRef" :inline="true" :model="editClientInfo" label-width="120px">
          <el-form-item label="仓库名称"  prop="name">
            <el-input v-model="editClientInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="仓库负责人"  prop="fzr">
            <el-input v-model="editClientInfo.fzr"></el-input>
          </el-form-item>
          <el-form-item label="仓库容量"  prop="capacity">
            <el-input v-model="editClientInfo.capacity"></el-input>
          </el-form-item>
          <el-form-item label="仓库地址"  prop="address">
            <el-input v-model="editClientInfo.address"></el-input>
          </el-form-item>
          <el-form-item label="仓库联系人电话"  prop="phone">
            <el-input v-model="editClientInfo.phone"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editFormSubmit">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
    data(){
      return{
        tokenStr:'',
        queryInfo:{
          query:'',
          page:1,
          pageSize:5
        },
        total:0,
        tableData:[],
        addDialogVisible:false,
        editDialogVisible:false,
       addClientInfo:{
         name:'',
         fzr:'',
         capacity:'',
         address:'',
         phone:'',
        },
        editClientInfo:{
          name:'',
         fzr:'',
         capacity:'',
         address:'',
         phone:'',
        },
      }
    },
    created(){
        this.tokenStr = window.sessionStorage.getItem('token');
        this.getDataList();
    },
    methods:{
      async getDataList(){
      const{data:res} = await this.$http.post('ZdStorageList',this.queryInfo)
      console.log(res.data.result)
      this.tableData = res.data.result
      this.total = res.data.total
      },
      // 点击翻页重新发起数据请求
    handleCurrentChange(newPage){
        this.queryInfo.page = newPage;
        this.getDataList();
    },
   async addFormSubmit(){
        await this.$http.post('AddZdStorageInfo',this.addClientInfo)
        this.getDataList();
        this.addDialogVisible =false;
        this.$refs.addFormRef.resetFields();
    },
   async editInfo(id){
        // console.log(id)
     const{data:res} = await this.$http.post('EditZdStorageInfo',{id:id});
     console.log(res.data)
     this.editClientInfo = res.data;
     this.editDialogVisible =true;
    },
   async editFormSubmit(){
     await this.$http.post('DoEditZdStorageInfo',this.editClientInfo)
      this.editDialogVisible =false;
      this.$message.success('编辑成功')
      this.getDataList();
    },
    delInfo(id){
            this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('DelZdStorageInfo',{
            id:id
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getDataList();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      
    }

    }
}
</script>

<style scoped lang="less">
.el-breadcrumb {
  height: 30px;
}
.el-pagination {
  margin-top: 10px;
}
.el-form .label{
  font-size:15px!important;
}
</style>

