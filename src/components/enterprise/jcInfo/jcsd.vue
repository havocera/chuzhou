<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>检测信息上传</el-breadcrumb-item>
      <el-breadcrumb-item>检测信息手动上传</el-breadcrumb-item>
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
            placeholder="请输入样本名称"
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
            >新增</el-button
          >
        </el-col>
      </el-row>
      <!-- 数据列表 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="编号" type="index"> </el-table-column>
        <el-table-column prop="qymc" label="企业名称" width="180">
        </el-table-column>
        <el-table-column prop="pch" label="批次号"> </el-table-column>
        <el-table-column prop="ybmc" label="样本名称"> </el-table-column>
        <el-table-column prop="jcnr" label="检测内容"> </el-table-column>
        <el-table-column prop="jcz" label="检测值"> </el-table-column>
        <el-table-column prop="jcjg" label="检测结果"> </el-table-column>
        <el-table-column prop="jcdd" label="检测地点"> </el-table-column>
        <el-table-column prop="jcr" label="检测人"> </el-table-column>
        <el-table-column prop="rq" label="检测日期"> </el-table-column>
        <el-table-column label="检测报告">
          <template slot-scope="scope">
            <img
              :src="scope.row.pic"
              alt="暂无图片"
              width="100px"
              height="100px"
            />
          </template>
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
      <!-- 新增dialog弹窗开始 -->
      <el-dialog
        title="添加信息"
        :visible.sync="addDialogVisible"
        width="40%"
        @close="addFormClosed"
      >
        <!-- 表单内容区 -->
        <el-form
          :rules="FormRules"
          ref="addFormRef"
          :model="addFormInfo"
          label-width="80px"
          :inline="true" 
        >
          <!-- 下拉框 -->
          <el-form-item label="样本名称" prop="ybmc">
            <el-select @change="selectProductChange" v-model="addFormInfo.cpbh" placeholder="请选择样本名称">
              <el-option
                :label="item.cpmc"
                v-for="item in selectProduct"
                :key="item.bh"
                :value="item.bh"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 批次号下拉框 -->
          <el-form-item label="批次号" prop="pch">
            <el-select v-model="addFormInfo.pch" placeholder="请选择样本名称">
              <el-option
                :label="item.pch"
                v-for="item in selectPch"
                :key="item.pch"
                :value="item.pch"
              ></el-option>
            </el-select>
          </el-form-item>
           <el-form-item label="检测内容" prop="jcnr">
            <el-input v-model="addFormInfo.jcnr"></el-input>
          </el-form-item>
          <el-form-item label="检测值" prop="jcz">
            <el-input v-model="addFormInfo.jcz"></el-input>
          </el-form-item>
          <el-form-item label="检测结果" prop="jcjg">
            <el-input v-model="addFormInfo.jcjg"></el-input>
          </el-form-item>
          <el-form-item label="检测地点" prop="jcdd">
            <el-input v-model="addFormInfo.jcdd"></el-input>
          </el-form-item>
          <el-form-item label="检测人" prop="jcr">
            <el-input v-model="addFormInfo.jcr"></el-input>
          </el-form-item>
           <el-form-item label="检测日期"  prop="rq">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="addFormInfo.rq"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="图片名称" prop="pic">
            <el-input disabled v-model="addFormInfo.pic"></el-input>
          </el-form-item>
          <el-form-item label="检测报告上传">
            <!-- 图片上传组件 -->
            <el-upload
              ref="upload"
              name="image"
              :action="uploadURL"
              :on-success="successEvent"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png格式的图片，且图片大小不能超过1MB
              </div>
            </el-upload>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addFormSubmit">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 新增dialog弹窗结束 -->
       <!-- 编辑dialog弹窗开始 -->
      <el-dialog
        title="编辑信息"
        :visible.sync="editDialogVisible"
        width="40%"
        @close="addFormClosed"
      >
        <!-- 表单内容区 -->
        <el-form
          ref="editFormRef"
          :model="editFormInfo"
          label-width="80px"
          :inline="true" 
        >
          <!-- 下拉框 -->
          <el-form-item label="样本名称" prop="ybmc">
            <el-select @change="selectProductChange" v-model="editFormInfo.cpbh" placeholder="请选择样本名称">
              <el-option
                :label="item.cpmc"
                v-for="item in selectProduct"
                :key="item.bh"
                :value="item.bh"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 批次号下拉框 -->
          <el-form-item label="批次号" prop="pch">
            <el-select v-model="editFormInfo.pch" placeholder="请选择样本名称">
              <el-option
                :label="item.pch"
                v-for="item in selectPch"
                :key="item.pch"
                :value="item.pch"
              ></el-option>
            </el-select>
          </el-form-item>
           <el-form-item label="检测内容" prop="jcnr">
            <el-input v-model="editFormInfo.jcnr"></el-input>
          </el-form-item>
          <el-form-item label="检测值" prop="jcz">
            <el-input v-model="editFormInfo.jcz"></el-input>
          </el-form-item>
          <el-form-item label="检测结果" prop="jcjg">
            <el-input v-model="editFormInfo.jcjg"></el-input>
          </el-form-item>
          <el-form-item label="检测地点" prop="jcdd">
            <el-input v-model="editFormInfo.jcdd"></el-input>
          </el-form-item>
          <el-form-item label="检测人" prop="jcr">
            <el-input v-model="editFormInfo.jcr"></el-input>
          </el-form-item>
           <el-form-item label="检测日期"  prop="rq">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="editFormInfo.rq"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="图片名称" prop="pic">
            <el-input disabled v-model="editFormInfo.pic"></el-input>
          </el-form-item>
          <el-form-item label="检测报告上传">
            <!-- 图片上传组件 -->
            <el-upload
              ref="upload"
              name="image"
              :action="uploadURL"
              :on-success="successEvent"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png格式的图片，且图片大小不能超过1MB
              </div>
            </el-upload>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editFormSubmit">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 编辑dialog弹窗结束 -->
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
      tableData: [],
      addDialogVisible: false,
      editDialogVisible:false,
      addFormInfo: {
          token:'',
          ybmc:'',
          cpbh:'',
          pch:'',
          jcnr:'',
          jcjg:'',
          jcdd:'',
          jcr:'',
          rq:'',
          pic:''
      },
      editFormInfo: {},
      selectProduct: [],
      selectPch:[],
      // 表单验证规则
      FormRules:{

      },
      uploadURL:''
     
    };
  },
  created() {
    this.tokenStr = window.sessionStorage.getItem("token");
    this.getDataList();
    this.setUploadURL();
  },
  methods: {
    async getDataList() {
      this.queryInfo.token = this.tokenStr;
      const { data: res } = await this.$http.post(
        "DetectionInfo",
        this.queryInfo
      );
      console.log(res);
      this.total = res.data.total;
      this.tableData = res.data.result;
      //  产品名称，下拉框数据
      const {
        data: selectProductRes
      } = await this.$http.post("SelectProduction", { token: this.tokenStr });
      this.selectProduct = selectProductRes.data;
      console.log(this.selectProduct)
    },
    handleCurrentChange(newPage) {
      this.queryInfo.page = newPage;
      this.getDataList();
    },
    // 产品选择后，触发批次号获取
  async selectProductChange(cpbh){
      // 数据重组
        this.selectProduct.map(
          item=>{
            if(item.cpbh == cpbh){
              this.addFormInfo.ybmc =item.cpmc
              console.log(this.addFormInfo.ybmc)
            }
          }
        )
        // 批次号请求
        // console.log(cpbh)
    const {data:res} =await this.$http.post('SelectPch',{token:this.tokenStr,cpbh:cpbh})
    // console.log(res.data)
    this.selectPch = res.data;
    },
    // 新增dialog关闭，清除表单数据
    addFormClosed(){

    },
    // 图片上传成功后的回调函数
     successEvent(response, file, fileList){
        this.addFormInfo.pic = file.name;
        this.editFormInfo.pic = file.name;
        console.log(response,file.name)
    },
    // 动态设置图片上传路径
    setUploadURL(){
        this.uploadURL = 'http://ahteaapi.wtycms.cn/Detectionpictureupload?token=' + this.tokenStr;
        console.log(this.uploadURL)
    },
   async addFormSubmit(){
      this.addFormInfo.token = this.tokenStr;
      const {data:res} = await this.$http.post('AddDetectionInfo',this.addFormInfo);
          if(res.code == 0){
         this.$message({
          message: '添加检测信息成功！',
          type: 'success'
        });
      this.addDialogVisible = false;
      this.getDataList();
      }else{
         this.$message({
          message: '添加检测信息失败！',
          type: 'error'
        });
      }
     
    
    },
   async editInfo(id){
     const {data:res} = await this.$http.post('EditDetectionInfo',{token:this.tokenStr,bh:id})
      this.editFormInfo =res.data;
      console.log(res.data)
      this.editDialogVisible = true;
    },
  editFormSubmit(){
      this.editFormInfo.token = this.tokenStr;
     this.$http.post('DoEditDetectionInfo',this.editFormInfo);
      this.editDialogVisible = false;
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
        const res = await this.$http.post('DelDetectionInfo',{
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
