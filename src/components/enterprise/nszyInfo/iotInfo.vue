<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>种植过程管理</el-breadcrumb-item>
      <el-breadcrumb-item>生产环境数据</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区 -->
    <el-card class="box-card">

       <!-- 数据列表区域 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="编号" type="index"></el-table-column>
        <el-table-column label="生产企业名称" prop="qymc"></el-table-column>
        <el-table-column label="产地名称" prop="chandi"></el-table-column>
        <el-table-column label="PH值" prop="ph"></el-table-column>
        <el-table-column label="土壤温度" prop="wd"></el-table-column>
        <el-table-column label="土壤湿度" prop="sd"></el-table-column>
        <el-table-column label="更新日期" prop="create_date"></el-table-column>
        

      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        background
        layout="prev, pager, next,total"
        :total="total"
        :page-size="queryInfo.pageSize"
        @current-change ="handleCurrentChange"
      >
      </el-pagination>
       <!-- 新增产品生产dialog -->
      <el-dialog
        title="新增产品生产信息"
        :visible.sync="addDialogVisible"
        width="40%"
      >
        <!-- 表单区 -->
        <el-form size="medium" :rules="rules"  ref="addFormRef" :model="addFormInfo" label-width="120px">
         
          <!-- 下拉框 -->
           <el-form-item label="产地名称"  prop="chandi">
            <el-select v-model="addFormInfo.chandi" placeholder="请选择作业地块">
              <el-option :label="item.chandi" v-for="item in selectchandi" :key="item.cdbh" :value="item.chandi"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="产品名称"  prop="cpbh">
            <el-select v-model="addFormInfo.cpbh" placeholder="请选择产品">
              <el-option :label="item.cpmc" v-for="item in selectProduct" :key="item.bh" :value="item.bh"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="生产负责人"  prop="scz">
            <el-input v-model="addFormInfo.scz"></el-input>
          </el-form-item>

          <el-form-item label="生产日期"  prop="rq">
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
    </el-card>
  </div>
</template>

<script>
export default {
    data(){
      return{
        tokenStr: "",
      queryInfo: {
        token: "",
        query: "",
        page: 1,
        pageSize: 5
      },
      total: 0,
      // 列表渲染数据
      tableData: [],
      addDialogVisible: false,
      addFormInfo:{
          token:'',
          chandi:'',
          cpbh:'',
          cpmc:'',
          scz:'',
          rq:''
        },
      selectchandi:[],
      selectProduct:[]
      }
    },
    created(){
         this.tokenStr = window.sessionStorage.getItem("token");
         this.getDataList();
    },
    methods:{
        async getDataList() {
      this.queryInfo.token = this.tokenStr;
      const { data: res } = await this.$http.post(
        "IotList",
        this.queryInfo
      );
      this.tableData = res.data.result;
      this.total = res.data.total;
      console.log( res.data);
      //  新增产地，下拉框数据
    const {data:selectRes} =await this.$http.post('SelectPlace',{token:this.tokenStr})
    this.selectchandi = selectRes.data;
     //  产品名称，下拉框数据
    const {data: selectProductRes} =await this.$http.post('SelectProduction',{token:this.tokenStr})
    this. selectProduct =  selectProductRes.data;
    // console.log(selectProductRes)
    },
     // 分页功能--监听当前页码值 改变事件
    handleCurrentChange(newPage) {
      // console.log("当前页是" + newPage);
      this.queryInfo.page = newPage
      this.getDataList();
    },
   async addFormSubmit(){
      this.addFormInfo.token = this.tokenStr;
      const {data:res} = await this.$http.post('AddProductionInfo',this.addFormInfo);
      console.log(res);
      if(res.code == 0){
         this.$message({
          message: '添加产品生产信息成功！',
          type: 'success'
        });
         this.getDataList();
         this.addDialogVisible= false;
      }else{
         this.$message({
          message: '添加产品生产信息失败！',
          type: 'error'
        });
      }
     
    },
      async delInfo(id){
        const confirmRes =await this.$confirm('此操作将永久删除该条信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(err=>err)
        if(confirmRes !='confirm'){
          return this.$message.info('取消删除')
        }
        const res = await this.$http.post('DelProductionInfo',{
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

