<template>
  <div>
     <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>仓储管理</el-breadcrumb-item>
      <el-breadcrumb-item>出库管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
    <!-- 搜索与添加区域 -->
      <el-row :gutter="10">
        <el-col :span="6">
          <el-input
            clearable
            v-model="queryInfo.query"
            @clear="getDataList"
            placeholder="请输入查询信息"
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
            >新增出库信息</el-button
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
        prop="supply_name"
        label="供应商"
        width="180">
      </el-table-column>
      <el-table-column
        prop="cpmc"
        label="出库货物">
      </el-table-column>
      <el-table-column
        prop="name"
        label="出库仓库">
      </el-table-column>
      <el-table-column
        prop="out_number"
        label="出库数量">
      </el-table-column>
       <el-table-column
        prop="add_date"
        label="出库时间">
      </el-table-column>
      <el-table-column
        prop="comment"
        label="备注">
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
        title="新增出库信息"
        :visible.sync="addDialogVisible"
        width="40%"
      >
        <!-- 表单区 -->
        <el-form size="medium"  ref="addFormRef" :inline="true" :model="addClientInfo" label-width="120px">
          <el-form-item label="供应商名称"  prop="supply_name">
            <el-input v-model="addClientInfo.supply_name"></el-input>
          </el-form-item>
          <el-form-item label="出库货物"  prop="cpmc">
            <el-input v-model="addClientInfo.cpmc"></el-input>
          </el-form-item>
           <el-form-item label="出库仓库"  prop="storage_id">
            <el-select v-model="addClientInfo.storage_id" placeholder="请选择">
    <el-option
      v-for="item in selectStorageOption"
      :key="item.id"
      :label="item.name"
      :value="item.id">
    </el-option>
  </el-select>
          </el-form-item>
          
          <el-form-item label="出库数量"  prop="out_number">
            <el-input v-model="addClientInfo.out_number"></el-input>
          </el-form-item>
              <el-form-item label="出库日期"  prop="add_date">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="addClientInfo.add_date"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
           <el-form-item label="备注"  prop="comment">
            <el-input v-model="addClientInfo.comment"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addFormSubmit(addFormRef)">确 定</el-button>
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
          <el-form-item label="供应商名称"  prop="supply_name">
            <el-input v-model="editClientInfo.supply_name"></el-input>
          </el-form-item>
          <el-form-item label="出库货物"  prop="cpmc">
            <el-input v-model="editClientInfo.cpmc"></el-input>
          </el-form-item>
           <el-form-item label="出库仓库"  prop="storage_id">
            <el-select v-model="editClientInfo.storage_id" placeholder="请选择">
    <el-option
      v-for="item in selectStorageOption"
      :key="item.id"
      :label="item.name"
      :value="item.id">
    </el-option>
  </el-select>
          </el-form-item>
          
          <el-form-item label="出库数量"  prop="out_number">
            <el-input v-model="editClientInfo.out_number"></el-input>
          </el-form-item>
              <el-form-item label="出库日期"  prop="add_date">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="editClientInfo.add_date"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
           <el-form-item label="备注"  prop="comment">
            <el-input v-model="editClientInfo.comment"></el-input>
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
         storage_id:'',
         supply_name:'',
         cpmc:'',
         out_number:'',
         add_date:'',
         comment:''
        },
        selectStorageOption:[],
        editClientInfo:{
          id:'',
          storage_id:'',
         supply_name:'',
         cpmc:'',
         out_number:'',
         add_date:'',
         comment:''
        },
      }
    },
    created(){
        this.tokenStr = window.sessionStorage.getItem('token');
        this.getDataList();
        this.selectStorage();
    },
    methods:{
      async getDataList(){
        this.queryInfo.token =this.tokenStr
      const{data:res} = await this.$http.post('OutStorageList',this.queryInfo)
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
        await this.$http.post('AddOutStorageInfo',this.addClientInfo)
        this.getDataList();
        this.addDialogVisible =false;
        console.log(this.$refs)
        this.$refs['addFormRef'].resetFields();
    },
   async editInfo(id){
        console.log(id)
     const{data:res} = await this.$http.post('EditOutStorageInfo',{id:id});
     console.log(res.data)
     this.editClientInfo.id = id;
     this.editClientInfo.storage_id = res.data.storage_id;
     this.editClientInfo.supply_name = res.data.supply_name;
     this.editClientInfo.cpmc = res.data.cpmc;
     this.editClientInfo.out_number = res.data.out_number;
     this.editClientInfo.add_date = res.data.add_date;
     this.editClientInfo.comment= res.data.comment;
     this.editDialogVisible =true;
    },
    // 新增弹窗，获取仓库的下拉框数据
    async selectStorage(){
      const{data:res} = await this.$http.post('SelectZdStorageInfo');
      console.log(res)
      this.selectStorageOption = res.data;
    },
   async editFormSubmit(){
     await this.$http.post('DoEditOutStorageInfo',this.editClientInfo)
      this.editDialogVisible =false;
      this.$message.success('编辑成功')
       this.$refs['addFormRef'].resetFields();
      this.getDataList();
    },
    delInfo(id){
            this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('DelOutStorageInfo',{
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

