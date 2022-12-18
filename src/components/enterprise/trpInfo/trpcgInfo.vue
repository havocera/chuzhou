<template>
  <div>
     <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>投入品信息</el-breadcrumb-item>
      <el-breadcrumb-item>投入品采购信息</el-breadcrumb-item>
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
            >新增投入品</el-button
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
        prop="qymc"
        label="生产企业名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="trpmc"
        label="投入品名称">
      </el-table-column>
        <el-table-column
        prop="nydjzh"
        label="投入品登记证号">
      </el-table-column>
      <el-table-column
        prop="nyscz"
        label="生产商">
      </el-table-column>
      <el-table-column
        prop="nyzw"
        label="作物范围">
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="nyfz"
        label="防治对象">
      </el-table-column>
      <el-table-column
        prop="nysyfa"
        label="使用方法"
         :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column
        prop="trpgg"
        label="规格">
      </el-table-column>
            <el-table-column
        prop="cgsl"
        label="采购数量">
      </el-table-column>
      <el-table-column
        prop="jsr"
        label="经手人">
      </el-table-column>
      <el-table-column
        prop="ly"
        label="采购来源">
      </el-table-column>
      <el-table-column
        prop="rq"
        label="采购日期">
      </el-table-column>
        <el-table-column label="操作" width="180px">
          <!-- 插槽自定义样式 -->
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="编辑" placement="top-start">
              <el-button
                @click="editInfo(scope.row.bh)"
                type="primary"
                icon="el-icon-edit"
              ></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="删除" placement="top-end">
              <el-button
                type="warning"
                @click="delInfo(scope.row.bh)"
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
        title="新增投入品台账"
        :visible.sync="addDialogVisible"
        width="40%"
      >
        <!-- 表单区 -->
        <el-form size="medium"  ref="addFormRef" :inline="true" :model="addFormInfo" label-width="120px">
           <el-form-item label="登记证证号"  prop="PDno">
            <el-input placeholder="例：PD20111153" v-model="queryTryInfo.PDno"></el-input>
          </el-form-item>
             <el-form-item label="查询投入品信息" >
            <el-button type="primary" @click="getTrpInfo">点击查询</el-button>
          </el-form-item>
          <el-form-item label="投入品名称"  prop="trpmc">
            <el-input v-model="addFormInfo.trpmc"></el-input>
          </el-form-item>
          <el-form-item label="生产商"  prop="nyscz">
            <el-input v-model="addFormInfo.nyscz"></el-input>
          </el-form-item>
          <el-form-item label="使用对象" prop="nyzw">
            <el-input v-model="addFormInfo.nyzw"></el-input>
          </el-form-item>
          <el-form-item label="防治对象"  prop="nyfz">
            <el-input v-model="addFormInfo.nyfz"></el-input>
          </el-form-item>
          <el-form-item label="使用方法"  prop="nysyfa">
            <el-input v-model="addFormInfo.nysyfa"></el-input>
          </el-form-item>
          <!-- 新增的 -->
           <el-form-item label="规格"  prop="trpgg">
            <el-input v-model="addFormInfo.trpgg"></el-input>
          </el-form-item>
          <el-form-item label="采购来源"  prop="ly">
            <el-input v-model="addFormInfo.ly"></el-input>
          </el-form-item>
          <el-form-item label="规格"  prop="trpgg">
            <el-input v-model="addFormInfo.trpgg"></el-input>
          </el-form-item>
          <el-form-item label="采购数量"  prop="cgsl">
            <el-input v-model="addFormInfo.cgsl"></el-input>
          </el-form-item>
          <el-form-item label="采购人" prop="jsr">
            <el-input v-model="addFormInfo.jsr"></el-input>
          </el-form-item>
           <el-form-item label="备注"  prop="bz">
            <el-input v-model="addFormInfo.bz"></el-input>
          </el-form-item>
          <el-form-item label="采购日期"  prop="rq">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="addFormInfo.rq"
              type="date"
              placeholder="选择日期"
              
            >
            </el-date-picker>
          </el-form-item>
         
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addFormSubmit">确 定</el-button>
        </span>
      </el-dialog>
       <!-- 编辑投入品台账dialog -->
      <el-dialog
        title="编辑投入品台账"
        :visible.sync="editDialogVisible"
        width="40%"
      >
        <!-- 表单区 -->
        <el-form size="medium"  ref="editFormRef" :inline="true" :model="editFormInfo" label-width="120px">
                <el-form-item label="登记证证号"  prop="PDno">
            <el-input placeholder="例：PD20111153" v-model="queryTryInfo.PDno"></el-input>
          </el-form-item>
               <el-form-item label="查询投入品信息" >
            <el-button type="primary" @click="getTrpInfo">点击查询</el-button>
          </el-form-item>
          <el-form-item label="投入品名称"  prop="trpmc">
            <el-input v-model="editFormInfo.trpmc"></el-input>
          </el-form-item>
          <el-form-item label="生产商"  prop="nyscz">
            <el-input v-model="editFormInfo.nyscz"></el-input>
          </el-form-item>
          <el-form-item label="使用对象（或使用范围）" prop="nyzw">
            <el-input v-model="editFormInfo.nyzw"></el-input>
          </el-form-item>
          <el-form-item label="防治对象"  prop="nyfz">
            <el-input v-model="editFormInfo.nyfz"></el-input>
          </el-form-item>
          <el-form-item label="使用方法"  prop="nysyfa">
            <el-input v-model="editFormInfo.nysyfa"></el-input>
          </el-form-item>
          <el-form-item label="采购来源"  prop="ly">
            <el-input v-model="editFormInfo.ly"></el-input>
          </el-form-item>
          <el-form-item label="规格"  prop="trpgg">
            <el-input v-model="editFormInfo.trpgg"></el-input>
          </el-form-item>
           <el-form-item label="采购数量"  prop="cgsl">
            <el-input v-model="editFormInfo.cgsl"></el-input>
          </el-form-item>
          <el-form-item label="采购人" prop="jsr">
            <el-input v-model="editFormInfo.jsr"></el-input>
          </el-form-item>
           <el-form-item label="备注"  prop="bz">
            <el-input v-model="editFormInfo.bz"></el-input>
          </el-form-item>
          <el-form-item label="采购日期"  prop="rq">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="editFormInfo.rq"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
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
          queryTryInfo:{
          //  PDno:'PD20111153',
          PDno:'',
           sercetKey:'661130ab'
        },
        addFormInfo:{
          trpmc:'',
          nyscz:'',
          nydjzh:'',
          nyscdz:'',
          nyzj:'',
          nyzw:'',
          nyfz:'',
          nysyfa:'',
          nydh:'',
          ly:'',
          trpgg:'',
          jsr:'',
          rq:'',
          cgsl:''
        },
        editFormInfo:{

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
      const{data:res} = await this.$http.post('InputspurchaseInfo',this.queryInfo)
      console.log(res.data.result)
      this.tableData = res.data.result
      this.total = res.data.total
      },
      // 点击翻页重新发起数据请求
    handleCurrentChange(newPage){
        this.queryInfo.page = newPage;
        this.getDataList();
    },
     // 输入投入品编号,自动获取农药信息
     async getTrpInfo(){
          const {data:res} = await this.$http.post('https://pdno.0cccc.cc/getPD',this.queryTryInfo);
          // console.log(res)
          this.addFormInfo.trpmc = res.data.name;
          this.addFormInfo.nyscz = res.data.company;
          this.addFormInfo.nyfz = res.data.PDuse;
          this.addFormInfo.nysyfa = res.data.PDCanUse;
          this.addFormInfo.trpgg = res.data.PDcontent;
           // 编辑框
            this.editFormInfo.trpmc = res.data.name;
          this.editFormInfo.nyscz = res.data.company;
          this.editFormInfo.nyfz = res.data.PDuse;
          this.editFormInfo.nysyfa = res.data.PDCanUse;
          this.editFormInfo.trpgg = res.data.PDcontent;
          this.editFormInfo.PDClass = res.data.PDClass;

      },
   async addFormSubmit(){
        this.addFormInfo.nydjzh = this.queryTryInfo.PDno;
        await this.$http.post('AddInputspurchaseInfo',this.addFormInfo)
        this.getDataList();
        this.addDialogVisible =false;
        this.$refs.addFormRef.resetFields();
    },
   async editInfo(id){
        // console.log(id)
     const{data:res} = await this.$http.post('EditInputspurchaseInfo',{token:this.tokenStr,bh:id});
     console.log(res.data)
     this.editFormInfo = res.data;
     this.editDialogVisible =true;
    },
   async editFormSubmit(){
      this.editFormInfo.token = this.tokenStr;
     await this.$http.post('DoEditInputspurchaseInfo',this.editFormInfo)
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
          this.$http.post('DelInputspurchaseInfo',{
            token:this.tokenStr,bh:id
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
        this.getDataList();
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

