<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>收购信息</el-breadcrumb-item>
      <el-breadcrumb-item>上传原料收购信息</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区 -->
    <el-card class="box-card">
      <!-- 搜索与添加区域 -->
      <el-row :gutter="10">
        <el-col :span="6">
          <el-input
            clearable
            v-model="queryInfo.query"
            @clear="getDataList"
            placeholder="请输入原料名称"
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
            >新增收购信息</el-button
          >
        </el-col>
      </el-row>
      <!-- 产品列表区域 -->
      <el-table :data="dataInfoList" style="width: 100%">
        <el-table-column label="编号" type="index"></el-table-column>
        <el-table-column label="生产企业名称" prop="qymc"></el-table-column>
        <el-table-column label="原料产地" prop="chandi"></el-table-column>
        <el-table-column label="原料名称" prop="ylmc"></el-table-column>
        <el-table-column label="经手人" prop="jsr"></el-table-column>
        <el-table-column label="收购日期" prop="sgrq"></el-table-column>
        <el-table-column label="操作">
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
        @current-change ="handleCurrentChange"
      >
      </el-pagination>
      <!-- 新增原料收购dialog -->
      <el-dialog
        title="新增收购信息"
        :visible.sync="addDialogVisible"
        width="30%"
      >
        <!-- 表单区 -->
        <el-form ref="addFormRef" :model="addFormInfo" label-width="80px">
          <el-form-item label="原料名称" prop="ylmc">
            <el-input v-model="addFormInfo.ylmc"></el-input>
          </el-form-item>
          <el-form-item label="原料产地" prop="chandi">
            <el-input v-model="addFormInfo.chandi"></el-input>
          </el-form-item>
          <el-form-item label="经手人" prop="jsr">
            <el-input v-model="addFormInfo.jsr"></el-input>
          </el-form-item>
          <el-form-item label="备注信息" prop="bz">
            <el-input v-model="addFormInfo.bz"></el-input>
          </el-form-item>
          <el-form-item label="收购日期" prop="sgrq">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="addFormInfo.sgrq"
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
      <!-- 编辑原料收购dialog -->
      <el-dialog
        title="编辑收购信息"
        :visible.sync="editDialogVisible"
        width="30%"
      >
        <!-- 表单区 -->
        <el-form ref="editFormRef" :model="editFormInfo" label-width="80px">
          <el-form-item label="原料名称">
            <el-input v-model="editFormInfo.ylmc"></el-input>
          </el-form-item>
          <el-form-item label="原料产地">
            <el-input v-model="editFormInfo.chandi"></el-input>
          </el-form-item>
          <el-form-item label="经手人">
            <el-input v-model="editFormInfo.jsr"></el-input>
          </el-form-item>
          <el-form-item label="备注信息">
            <el-input v-model="editFormInfo.bz"></el-input>
          </el-form-item>
          <el-form-item label="收购日期">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="editFormInfo.sgrq"
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
  data() {
    return {
      tokenStr: "",
      queryInfo: {
        token: "",
        query: "",
        page: 1,
        pageSize: 5
      },
      total: 0,
      // 列表渲染数据
      dataInfoList: [],
      addDialogVisible: false,
      addFormInfo: {
        token:'',
        ylmc: "",
        chandi: "",
        jsr: "",
        sgrq:'',
        bz: ""
      },
      editFormInfo:{

      },
      editDialogVisible:false,
    };
  },
  created() {
    this.getTokenStr();
    this.getDataList();
  },
  methods: {
    getTokenStr() {
      this.tokenStr = window.sessionStorage.getItem("token");
    },
    async getDataList() {
      this.queryInfo.token = this.tokenStr;
      const { data: res } = await this.$http.post(
        "MaterialpurchaseInfo",
        this.queryInfo
      );
      this.dataInfoList = res.data.result;
      this.total = res.data.total;
      console.log(res);
      console.log(this.dataInfoList);
    },
   async addFormSubmit() {
      this.addFormInfo.token = this.tokenStr;
      await this.$http.post('AddMaterialpurchaseInfo',this.addFormInfo)
      this.addDialogVisible = false;
      this.$refs.addFormRef.resetFields();
      this.getDataList();
    },
    async editInfo(id){
        const {data:res} = await this.$http.post('EditMaterialpurchaseInfo',{
          token:this.tokenStr,bh:id
        })
        this.editFormInfo = res.data;
        this.editDialogVisible = true
        console.log(res)
    },
    editFormSubmit(){
        this.editFormInfo.token = this.tokenStr;
      this.$http.post('DoEditMaterialpurchaseInfo',
          this.editFormInfo
        );
        this.editDialogVisible = false;
        this.getDataList();

    },
    // 分页功能--监听当前页码值 改变事件
    handleCurrentChange(newPage) {
      // console.log("当前页是" + newPage);
      this.queryInfo.page = newPage
      this.getDataList();
    },
    async delInfo(id){
        const confirmRes =await this.$confirm('此操作将永久删除该产地信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(err=>err)
        if(confirmRes !='confirm'){
          return this.$message.info('取消删除')
        }
        const res = await this.$http.post('DelMaterialpurchaseInfo',{
            token:this.tokenStr,bh:id
          })
        if(res.status !== 200){
          return this.$message.error('删除原料收购信息失败')
        }
        this.$message.success('删除原料收购信息成功')
        this.getDataList();
        console.log(res)
        // .then(() => {
        //   this.$http.post('DelMaterialpurchaseInfo',{
        //     token:this.tokenStr,bh:id
        //   })
        //   this.getDataList();
        //   this.$message({
        //     type: 'success',
        //     message: '删除成功!'
        //   });
          
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '已取消删除'
        //   });          
        // });
    }
  }
};
</script>

<style scoped lang="less">
.el-breadcrumb {
  height: 30px;
}
.el-pagination {
  margin-top: 10px;
}
</style>
