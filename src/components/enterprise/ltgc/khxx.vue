<template>
  <div>
     <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>流通过程管理</el-breadcrumb-item>
      <el-breadcrumb-item>客户信息表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
    <!-- 搜索与添加区域 -->
      <el-row :gutter="10">
        <el-col :span="6">
          <el-input
            clearable
            v-model="queryInfo.query"
            @clear="getDataList"
            placeholder="请输入投入品名称"
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
            >新增客户信息</el-button
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
        prop="client_firm"
        label="客户企业名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="client_name"
        label="客户姓名">
      </el-table-column>
      <el-table-column
        prop="client_phone"
        label="客户电话">
      </el-table-column>
      <el-table-column
        prop="client_source"
        label="客户来源">
      </el-table-column>
      <el-table-column
        prop="client_address"
        label="客户地址">
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
       <!-- 新增投入品台账dialog -->
      <el-dialog
        title="新增客户信息"
        :visible.sync="addDialogVisible"
        width="40%"
      >
        <!-- 表单区 -->
        <el-form size="medium"  ref="addFormRef" :inline="true" :model="addClientInfo" label-width="120px">
          <el-form-item label="客户公司名称"  prop="trpmc">
            <el-input v-model="addClientInfo.client_firm"></el-input>
          </el-form-item>
          <el-form-item label="客户名称"  prop="nyscz">
            <el-input v-model="addClientInfo.client_name"></el-input>
          </el-form-item>
          <el-form-item label="客户电话"  prop="nydjzh">
            <el-input v-model="addClientInfo.client_phone"></el-input>
          </el-form-item>
          <el-form-item label="客户地址"  prop="nyscdz">
            <el-input v-model="addClientInfo.client_address"></el-input>
          </el-form-item>
          <el-form-item label="客户来源"  prop="nyzj">
            <el-input v-model="addClientInfo.client_source"></el-input>
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
          <el-form-item label="客户公司名称"  prop="trpmc">
            <el-input v-model="editClientInfo.client_firm"></el-input>
          </el-form-item>
          <el-form-item label="客户名称"  prop="nyscz">
            <el-input v-model="editClientInfo.client_name"></el-input>
          </el-form-item>
          <el-form-item label="客户电话"  prop="nydjzh">
            <el-input v-model="editClientInfo.client_phone"></el-input>
          </el-form-item>
          <el-form-item label="客户地址"  prop="nyscdz">
            <el-input v-model="editClientInfo.client_address"></el-input>
          </el-form-item>
          <el-form-item label="客户来源"  prop="nyzj">
            <el-input v-model="editClientInfo.client_source"></el-input>
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
          token:'',
          query:'',
          page:1,
          pageSize:5
        },
        total:0,
        tableData:[],
        addDialogVisible:false,
        editDialogVisible:false,
       addClientInfo:{
         client_firm:'',
         client_name:'',
        client_phone:'',
        client_address:'',
        client_source:''
        },
        editClientInfo:{

        },
      }
    },
    created(){
        this.tokenStr = window.sessionStorage.getItem('token');
        this.getDataList();
    },
    methods:{
      async getDataList(){
        this.queryInfo.token =this.tokenStr
      const{data:res} = await this.$http.post('ClientList',this.queryInfo)
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
        await this.$http.post('AddClientInfo',this.addClientInfo)
        this.getDataList();
        this.addDialogVisible =false;
        this.$refs.addFormRef.resetFields();
    },
   async editInfo(id){
        // console.log(id)
     const{data:res} = await this.$http.post('EditClientInfo',{id:id});
     console.log(res.data)
     this.editClientInfo = res.data;
     this.editDialogVisible =true;
    },
   async editFormSubmit(){
     await this.$http.post('DoEditClientInfo',this.editClientInfo)
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
          this.$http.post('DelClientInfo',{
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

