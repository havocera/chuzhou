<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>产品信息</el-breadcrumb-item>
      <el-breadcrumb-item>上传产品信息</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区 -->
    <el-card class="box-card">
      <!-- 搜索与添加区域 -->
      <el-row :gutter="10">
        <el-col :span="6">
          <el-input @clear="getproductList"  clearable placeholder="请输入内容" class="input-with-select" v-model="queryInfo.query">
            <el-button slot="append" icon="el-icon-search" @click="queryMsg"></el-button>
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="addDialogVisible=true">添加产品</el-button>
        </el-col>
      </el-row>
      <!-- 产品列表区域 -->
      <el-table
       :data="productList" style="width: 100%">
        <el-table-column label="编号" type="index"></el-table-column>
        <el-table-column prop="qymc" label="生产企业名称" width="180">
        </el-table-column>
        <el-table-column prop="cpmc" label="产品名称" width="140">
        </el-table-column>
        <el-table-column prop="picname" label="产品图片" width="140">
          <template slot-scope="scope">
            <img :src="scope.row.picname" alt="暂无图片" width="100px" height="100px" />
          </template>
        </el-table-column>
        <el-table-column prop="cpgg" label="产品规格" width="180"> </el-table-column>
        <el-table-column prop="bzq" label="保质期（单位：月）" width="180"> </el-table-column>
        <el-table-column  :show-overflow-tooltip="true" prop="ms" label="产品介绍"> </el-table-column>
        <el-table-column label="操作" width="180">
          <!-- 插槽自定义样式 -->
          <template slot-scope="scope">
            <el-tooltip
              class="item"
              effect="dark"
              content="编辑"
              placement="top-start"
              
            >
              <el-button type="primary" @click="showEditDialog(scope.row.bh)" icon="el-icon-edit"></el-button>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="删除"
              placement="top-end"
            >
              <el-button type="warning" icon="el-icon-delete" @click="removeById(scope.row.bh)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="queryInfo.current_page"
        background
        layout="prev, pager, next, total"
        :total="total"
        :page-size="queryInfo.pageSize"
      >
      </el-pagination>
    </el-card>
    <!-- 新增产品dialog弹窗开始 -->
    <el-dialog
  title="添加产品信息"
  :visible.sync="addDialogVisible"
  width="40%"
  @close="addFormClosed"
 >
  <!-- 表单内容区 -->
  <el-form :rules="FormRules" enctype="multipart/form-data" ref="addFormRef" :model="addProductForm" label-width="80px">
  <el-form-item label="产品名称" prop="cpmc">
    <el-input v-model="addProductForm.cpmc" ></el-input>
  </el-form-item>
  <el-form-item  label="图片名称" prop="picname">
    <el-input disabled v-model="addProductForm.picname"></el-input>
  </el-form-item>
  <el-form-item label="图片上传">
    <!-- 图片上传组件 -->
  <el-upload
  ref="upload"
  name="image"
  class="upload-demo"
  :action="uploadURL"
  :on-success="successEvent"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png格式的图片，且图片大小不能超过1MB</div>
</el-upload>
  </el-form-item>
  
  <el-form-item label="产品规格" prop="cpgg">
    <el-input v-model="addProductForm.cpgg"></el-input>
  </el-form-item>
  <el-form-item label="保质期" prop="bzq">
    <el-input placeholder="单位：月" v-model="addProductForm.bzq"></el-input>
  </el-form-item>
  <el-form-item label="产品介绍" prop="ms">
    <el-input rows="8"  type="textarea" v-model="addProductForm.ms"></el-input>
  </el-form-item>
  </el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="addDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addProductSubmit">确 定</el-button>
  </span>
</el-dialog>
 <!-- 产品dialog弹窗结束 -->
  <!-- 编辑产品dialog弹窗开始 -->
    <el-dialog
  title="编辑产品信息"
  :visible.sync="editDialogVisible"
  width="40%"
 >
  <!-- 表单内容区 -->
  <el-form ref="editFormRef" :model="editProductForm" label-width="80px">
  <el-form-item label="企业名称">
    <el-input disabled v-model="editProductForm.qymc" ></el-input>
  </el-form-item>
  <el-form-item label="产品名称">
    <el-input v-model="editProductForm.cpmc" ></el-input>
  </el-form-item>
  <el-form-item label="图片路径">
    <el-input disabled v-model="editProductForm.picname"></el-input>
  </el-form-item>
  <el-form-item label="图片修改">
    <!-- 图片上传组件 -->
  <el-upload
  ref="editUploadRef"
  name="image"
  class="upload-demo"
  :action="uploadURL"
  :on-success="successEvent"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png格式的图片，且图片大小不能超过1MB</div>
</el-upload>
  </el-form-item>
  <el-form-item label="产品规格">
    <el-input v-model="editProductForm.cpgg"></el-input>
  </el-form-item>
  <el-form-item label="保质期">
    <el-input placeholder="单位：月" v-model="editProductForm.bzq"></el-input>
  </el-form-item>
  <el-form-item label="产品介绍">
    <el-input  type="textarea" rows="8" v-model="editProductForm.ms"></el-input>
  </el-form-item>
  </el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="editProductSubmit">提交修改</el-button>
  </span>
</el-dialog>
 <!-- 编辑产品dialog弹窗结束 -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // 获取产品列表的参数对象
      queryInfo: {
        query: "",
        // 每页显示多少条
        pageSize:5,
        // 当所处页数
        current_page: 1
      },
      total:0,
      productList:[],
      addDialogVisible:false,
      // dialog新增产品表单数据对象
      addProductForm:{
          token:'',
          cpmc:'',
          picname:'',
          cpgg:'',
          bzq:'',
          ms:''
      },
      editProductForm:{},
      editProductFormPicname:'',
      editDialogVisible:false,
      tokenStr:window.sessionStorage.getItem('token'),
      uploadURL:'',
      headerObj:{
        token:window.sessionStorage.getItem('token')
      },
      // 表单验证规则
      FormRules:{
        cpmc:[
          { required: true, message: '请输入产品名称', trigger: 'blur' }
        ],
        // bzq:[
        //   { required: true, message: '请输入产品保质期,单位天', trigger: 'blur' },
        //   {type:'number',message: '请填写数字', trigger: 'blur'}
        // ]
      }
        
    };
  },
  created() {
    this.getproductList();
    this.setUploadURL();
  },
  methods: {
    async getproductList() {
      const tokenStr = window.sessionStorage.getItem("token");
      // console.log(tokenStr)
      const {
        data: res
      } = await this.$http.post('/productInfo', 
       {token:tokenStr,page:this.queryInfo.current_page,query:this.queryInfo.query}
      );
      if (res.code !== 0) return this.$message.error("获取产品列表数据失败！");
      this.productList = res.data.result;  
      this.total = res.data.total; 
      // console.log(this.productList);
      console.log(res)
    },
    // 分页功能--监听当前页码值 改变事件
    handleCurrentChange(newPage) {
      // console.log("当前页是" + newPage);
      this.queryInfo.current_page = newPage
      this.getproductList();
    },
    // 查询按钮事件
    queryMsg(){
        this.getproductList();
    },
    // 关闭dialog弹窗的回调函数
    addFormClosed(){
      // 在关闭dialog时重置表单
      console.log(this.$refs)
      this.$refs.addFormRef.resetFields();
      this.$refs.upload.clearFiles();
      // this.$nextTick(()=>{
      //     if(this.$refs.addFormRef){
      //       this.$refs.addFormRef.resetFields();
      //     }
      //   }
      //   )
    },
    // 编辑按钮点击事件
    async showEditDialog(id){
      console.log(id)
     const {data:res} = await this.$http.post('EditProductInfo',{
        token:this.tokenStr,
        bh:id
      })
      console.log(res.data);
      this.editProductForm = res.data;
      this.editDialogVisible = true;
    },
    // 提交编辑弹框修改
    async editProductSubmit(){
      this.editDialogVisible = false;
       const{data:res} = await this.$http.post('DoEditProductInfo',{
        token:this.tokenStr,
        bh:this.editProductForm.bh,
        picname:this.editProductForm.picname,
        qymc:this.editProductForm.qymc,
        cpmc:this.editProductForm.cpmc,
        cpgg:this.editProductForm.cpgg,
        bzq:this.editProductForm.bzq,
        ms:this.editProductForm.ms
      })
      // console.log(res)
      this.getproductList();
      if(res.code == 0){
         this.$message.success('产品信息编辑成功')
      this.getproductList();
    }else{ 
      this.$message.error('产品信息编辑失败')
    }
     
     
      // console.log(res)
    },
    // 通过id删除产品信息
      async removeById(id){
      // console.log(id)
      const res = await this.$confirm('此操作将永久删除该产品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(
          err=>err
        );

      if(res != 'confirm'){
        return this.$message.info('取消了删除操作')
      }
      // console.log(tokenStr)
     const {data:removeRes} =await this.$http.post('DelProductInfo',{token:this.tokenStr,bh:id});
      //console.log(removeRes);
      if(removeRes.code == 1){
        this.$message.success('删除产品成功')
        this.getproductList();
      }else{
        this.$message.error('删除产品失败')
      }
      
    },
    // 新增产品提交事件
   async addProductSubmit(){
        this.addProductForm.token = this.tokenStr;
       const {data:res} =await this.$http.post('AddProductInfo',this.addProductForm)
        console.log(res)
        if(res.code !==0){return this.$message.error('添加产品失败')}
        this.addDialogVisible=false;
        this.$message.success('产品添加成功')
        this.getproductList();
    },
    // 产品添加图片预览
    handlePreview(){

    },
    // 产品添加移除图片
    handleRemove(){

    },
    successEvent(response, file, fileList){
        this.addProductForm.picname = file.name;
        this.editProductForm.picname = file.name;
        console.log(response,file.name)
    },
    // 动态设置图片上传路径
    setUploadURL(){
        this.tokenStr = window.sessionStorage.getItem('token');
        this.uploadURL = 'http://czapi.wtycms.cn/Productupload?token=' + this.tokenStr;
        console.log(this.uploadURL)
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
.el-upload-dragger{
  margin-left: 200px;
}
</style>
