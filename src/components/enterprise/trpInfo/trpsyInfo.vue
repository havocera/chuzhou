<template>
  <div>
     <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>投入品信息</el-breadcrumb-item>
      <el-breadcrumb-item>投入品使用信息</el-breadcrumb-item>
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
          <el-button type="primary" @click="openAddDialog"
            >新增</el-button
          >
        </el-col>
      </el-row>
      <!-- 数据列表 -->
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="编号"
        type="index"
      >
      </el-table-column>
      <el-table-column
        prop="qymc"
        label="生产企业名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="trpm"
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
        prop="cgr"
        label="经手人">
      </el-table-column>
      <el-table-column
        prop="cdbh"
        label="使用去向">
      </el-table-column>
      <el-table-column
        prop="cpbh"
        label="使用对象">
      </el-table-column>
      <el-table-column
        prop="trpgg"
        label="规格">
      </el-table-column>
       <el-table-column
        prop="sysl"
        label="使用数量">
      </el-table-column>
        <el-table-column
        prop="nysyfa"
        label="使用方法"
        :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column
        prop="cgrq"
        label="使用日期">
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
        title="新增投入品使用台账"
        :visible.sync="addDialogVisible"
        width="30%"
      >
        <!-- 表单区 -->
        <el-form size="medium" :rules="rules"  ref="addFormInfo" :inline="true" :model="addFormInfo" label-width="120px">
            <el-form-item label="登记证证号"  prop="PDno">
            <el-input placeholder="例：PD20111153" v-model="queryTryInfo.PDno"></el-input>
          </el-form-item>
            <el-form-item label="查询投入品信息" >
            <el-button type="primary" @click="getTrpInfo">点击查询</el-button>
          </el-form-item>
          <el-form-item label="投入品名称"  prop="trpm">
            <el-input v-model="addFormInfo.trpm"></el-input>
          </el-form-item>
          <el-form-item label="生产商"  prop="nyscz">
            <el-input v-model="addFormInfo.nyscz"></el-input>
          </el-form-item>
          <el-form-item label="防治信息"  prop="nyfz">
            <el-input  autosize  type="textarea"  v-model="addFormInfo.nyfz"></el-input>
          </el-form-item>
          <el-form-item label="使用方法"  prop="nysyfa">
            <el-input  type="textarea" autosize  v-model="addFormInfo.nysyfa"></el-input>
          </el-form-item>
          <el-form-item label="规格"  prop="trpgg">
            <el-input v-model="addFormInfo.trpgg"></el-input>
          </el-form-item>
           <el-form-item label="农药制剂"  prop="PDClass">
            <el-input v-model="addFormInfo.PDClass"></el-input>
          </el-form-item>
          <!-- 下拉框 -->
           <el-form-item label="作用地块"  prop="cdbh">
            <el-select v-model="addFormInfo.cdbh" placeholder="请选择作业地块">
              <el-option :label="item.chandi" v-for="item in selectchandi" :key="item.cdbh" :value="item.chandi"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="作用产品"  prop="cpbh">
            <el-select v-model="addFormInfo.cpbh" placeholder="请选择产品">
              <el-option :label="item.cpmc" v-for="item in selectProduct" :key="item.cpbh" :value="item.cpmc"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="经手人" prop="cgr">
            <el-input v-model="addFormInfo.cgr"></el-input>
          </el-form-item>
            <el-form-item label="使用数量" prop="sysl">
            <el-input v-model="addFormInfo.sysl"></el-input>
          </el-form-item>
           <el-form-item label="备注"  prop="bz">
            <el-input v-model="addFormInfo.bz"></el-input>
          </el-form-item>
          <el-form-item label="使用日期"  prop="cgrq">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="addFormInfo.cgrq"
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
       <!-- 修改信息dialog -->
      <el-dialog
        title="编辑投入品使用台账"
        :visible.sync="editDialogVisible"
        width="40%"
      >
     <!-- 表单区 -->
        <el-form size="medium" :rules="rules"  ref="editFormInfo" :inline="true" :model="editFormInfo" label-width="120px">
            <el-form-item label="登记证证号"  prop="PDno">
            <el-input placeholder="例：PD20111153" v-model="queryTryInfo.PDno"></el-input>
          </el-form-item>
            <el-form-item label="查询投入品信息" >
            <el-button type="primary" @click="getTrpInfo">点击查询</el-button>
          </el-form-item>
          <el-form-item label="投入品名称"  prop="trpm">
            <el-input v-model="editFormInfo.trpm"></el-input>
          </el-form-item>
          <el-form-item label="生产商"  prop="nyscz">
            <el-input v-model="editFormInfo.nyscz"></el-input>
          </el-form-item>
          <el-form-item label="防治信息"  prop="nyfz">
            <el-input  autosize  type="textarea"  v-model="editFormInfo.nyfz"></el-input>
          </el-form-item>
          <el-form-item label="使用方法"  prop="nysyfa">
            <el-input  type="textarea" autosize  v-model="editFormInfo.nysyfa"></el-input>
          </el-form-item>
          <el-form-item label="规格"  prop="trpgg">
            <el-input v-model="editFormInfo.trpgg"></el-input>
          </el-form-item>
           <el-form-item label="农药制剂"  prop="PDClass">
            <el-input v-model="editFormInfo.PDClass"></el-input>
          </el-form-item>
          <!-- 下拉框 -->
           <el-form-item label="作用地块"  prop="cdbh">
            <el-select v-model="editFormInfo.cdbh" placeholder="请选择作业地块">
              <el-option :label="item.chandi" v-for="item in selectchandi" :key="item.cdbh" :value="item.chandi"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="作用产品"  prop="cpbh">
            <el-select v-model="editFormInfo.cpbh" placeholder="请选择产品">
              <el-option :label="item.cpmc" v-for="item in selectProduct" :key="item.cpbh" :value="item.cpmc"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="经手人" prop="cgr">
            <el-input v-model="editFormInfo.cgr"></el-input>
          </el-form-item>
            <el-form-item label="使用数量" prop="sysl">
            <el-input v-model="editFormInfo.sysl"></el-input>
          </el-form-item>
           <el-form-item label="备注"  prop="bz">
            <el-input v-model="editFormInfo.bz"></el-input>
          </el-form-item>
          <el-form-item label="使用日期"  prop="cgrq">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="editFormInfo.cgrq"
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
        addFormInfo:{
          token:'',
          trpm:'',
          nyscz:'',
          nydjzh:'',
          nyscdz:'',
          nyzw:'',
          nyfz:'',
          nysyfa:'',
          nydh:'',
          chandi:'',
          cdbh:'',
          cpbh:'',
          trpgg:'',
          cgr:'',
          bz:'',
          cgrq:'',
          PDClass:''
        },
        queryTryInfo:{
           PDno:'PD20111153',
           sercetKey:'661130ab'
        },
        editFormInfo:{

        },
        selectchandi:[],
        selectProduct:[],
        // 表单验证规则
        rules:{
            trpm:[
               { required: true, message: '请输入活动名称', trigger: 'blur' }
            ]
        }
      }
    },
    created(){
        this.tokenStr = window.sessionStorage.getItem('token');
        this.getDataList();
    },
    methods:{
      async getDataList(){
        this.queryInfo.token =this.tokenStr
      const{data:res} = await this.$http.post('InputsuseInfo',this.queryInfo)
      console.log(res.data.result)
      this.tableData = res.data.result
      this.total = res.data.total;
       //  新增产地，下拉框数据
    const {data:selectRes} =await this.$http.post('SelectPlace',{token:this.tokenStr})
    this.selectchandi = selectRes.data;
      // console.log(res.data,this.selectchandi);
        //  产品名称，下拉框数据
    const {data: selectProductRes} =await this.$http.post('SelectProduction',{token:this.tokenStr})
    this. selectProduct =  selectProductRes.data;
    // console.log(selectProductRes)
    
      },
      // 输入投入品编号,自动获取农药信息
     async getTrpInfo(){
          const {data:res} = await this.$http.post('https://pdno.0cccc.cc/getPD',this.queryTryInfo);
          // console.log(res)
          this.addFormInfo.trpm = res.data.name;
          this.addFormInfo.nyscz = res.data.company;
          this.addFormInfo.nyfz = res.data.PDuse;
          this.addFormInfo.nysyfa = res.data.PDCanUse;
          this.addFormInfo.trpgg = res.data.PDcontent;
          this.addFormInfo.PDClass = res.data.PDClass;
          // 编辑框
            this.editFormInfo.trpm = res.data.name;
          this.editFormInfo.nyscz = res.data.company;
          this.editFormInfo.nyfz = res.data.PDuse;
          this.editFormInfo.nysyfa = res.data.PDCanUse;
          this.editFormInfo.trpgg = res.data.PDcontent;
          this.editFormInfo.PDClass = res.data.PDClass;
          
      },
      // 点击翻页重新发起数据请求
    handleCurrentChange(newPage){
        this.queryInfo.page = newPage;
        this.getDataList();
    },
    openAddDialog(){
        // this.$refs.addFormInfo.resetFields(); 
        // this.$refs['addFormRef'].resetFields();
        this.addDialogVisible = true;
    },
   async addFormSubmit(){
      this.addFormInfo.nydjzh = this.queryTryInfo.PDno;
      const{data:res} = await this.$http.post('AddInputsuseInfo',this.addFormInfo)
       this.$message({
          message: '添加成功！',
          type: 'success'
        });
      this.addDialogVisible = false;
      this.$refs.addFormInfo.resetFields();
      this.getDataList();
    },
   async editInfo(id){
      const{data:res} = await this.$http.post('EditInputsuseInfo',{token:this.tokenStr,bh:id})
      console.log(res)
      this.editFormInfo =res.data;
      this.editDialogVisible = true;
    },
    editFormSubmit(){
     this.editFormInfo.nydjzh = this.queryTryInfo.PDno;
      this.$http.post('DoEditInputsuseInfo',this.editFormInfo)
       this.$message({
          message: '修改成功！',
          type: 'success'
        });
      this.editDialogVisible =false;
      this.getDataList();
    },
      async delInfo(id){
        const confirmRes =await this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(err=>err)
        if(confirmRes !='confirm'){
          return this.$message.info('取消删除')
        }
        const res = await this.$http.post('DelInputsuseInfo',{
            token:this.tokenStr,bh:id
          })
        if(res.status !== 200){
          return this.$message.error('删除失败')
        }
        this.$message.success('删除成功')
        this.getDataList();
        console.log(res)
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
</style>

