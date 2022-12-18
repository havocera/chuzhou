<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>区块链存证系统</el-breadcrumb-item>
      <el-breadcrumb-item>产品存证系统</el-breadcrumb-item>
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
          <el-button type="primary" @click="addProductZS">添加产品证书</el-button>
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
        <el-table-column prop="youji_name" label="证书图片" width="140">
          <template slot-scope="scope">
            <img :src="scope.row.pic_name" alt="暂无图片" width="100px" height="100px" />
          </template>
        </el-table-column>
        <el-table-column prop="flag" label="证书类型" width="80"> </el-table-column>
        <el-table-column prop="end_time" label="证书到期时间" width="180"> </el-table-column>
         <el-table-column
      label="是否上链"
      width="80"
      >
      <template slot-scope="scope">
            <el-tag
          :type="scope.row.status === '0' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.status === '0' ? '未上链' : '已上链'}}
          </el-tag>
      </template>
    </el-table-column>
        <el-table-column prop="hash_code" label="上链凭证" > 
              <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.status === '0' ? '等待上链，暂无凭证' : scope.row.hash_code}}</el-tag>
          </div>
      </template>
        </el-table-column>
        <el-table-column label="操作" width="270">
          <!-- 插槽自定义样式 -->
          <template slot-scope="scope">
            <!-- <el-tooltip
              class="item"
              effect="dark"
              content="编辑"
              placement="top-start"
              
            >
              <el-button type="primary" @click="showEditDialog(scope.row.bh)" icon="el-icon-edit"></el-button>
            </el-tooltip> -->
            <el-tooltip
              v-if= "(scope.row.status == 0)? true :false"
              class="item"
              effect="dark"
              content="删除"
              placement="top-end"
            >
              <el-button type="danger" icon="el-icon-delete" @click="removeById(scope.row.id,scope.row.flag)"></el-button>
            </el-tooltip>
             <el-tooltip
              class="item"
              effect="dark"
              content="信息上链"
              placement="top-end"
            >
              <el-button type="success" icon="el-icon-link" @click="upChain(scope.row.id,scope.row.flag)"></el-button>
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
  title="添加产品证书信息"
  :visible.sync="addDialogVisible"
  width="40%"
  @close="addFormClosed"
 >
  
<el-form label-position="left" label-width="140px" :model="addFormInfo">
     <el-form-item label="产品名称"  prop="cpbh">
            <el-select v-model="addFormInfo.cpbh" placeholder="请选择产品">
              <el-option :label="item.cpmc" v-for="item in selectProduct" :key="item.bh" :value="item.bh"></el-option>
            </el-select>
      </el-form-item>
  <el-form-item label="产品认证类型">
     <el-select v-model="addFormInfo.flag" placeholder="请选择上传的存证类型">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>

  <el-form-item label="三品一标证书上传">
      <el-upload
  name="image"
  :action="uploadURL"
  list-type="picture-card"
  :on-success="successEvent">
  <i class="el-icon-plus"></i>
</el-upload>
  </el-form-item>
  <el-form-item label="颁证日期"  prop="start_time">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="addFormInfo.start_time"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
    <el-form-item label="证书失效日期"  prop="end_time">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="addFormInfo.end_time"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
   </el-form-item>        
 
</el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="addDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitspyb">确 定</el-button>
  </span>
</el-dialog>
 <!-- 产品dialog弹窗结束 -->
  </div>
</template>

<script>
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
      addFormInfo:{
          cpbh:'',
          flag:'',
          pic_name:'',
          end_time:'',
          start_time:''
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
      },
       spybDialogVisible:false,
          options: [{
          value: '1',
          label: '有机证书'
        }, {
          value: '2',
          label: '绿色证书'
        }, {
          value: '3',
          label: '地理标识证书'
        }],
        uploadForm:{
          flag:'',
          license_name:''
        },
        selectProduct:[]
    };
  },
  created() {
    this.getproductList();
  },
  methods: {
    async getproductList() {
      const{data:res} =await this.$http.post('LicenseList');
      // if (res.code !== 0) return this.$message.error("获取产品列表数据失败！");
      this.productList = res.data;
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
    },
    async addProductZS(){
        this.tokenStr = window.sessionStorage.getItem('token');
         this.uploadURL = 'http://ahteaapi.wtycms.cn/Spybupload?token=' + this.tokenStr;
        // console.log(this.uploadURL)
        //  产品名称，下拉框数据
    const {data: selectProductRes} =await this.$http.post('SelectProduction',{token:this.tokenStr})
    this.selectProduct =  selectProductRes.data;
    console.log(selectProductRes.data)
    this.addDialogVisible = true;
    },
    submitspyb(){
        this.$http.post('AddLicenseInfo',this.addFormInfo)
        this.addDialogVisible= false;
    },
     // 图片上传成功，获取图片名称，存入提交表单中
     successEvent(response, file, fileList){
        this.addFormInfo.license_name = response.data.saveName;
        // this.editProductForm.picname = file.name;
        console.log(response,file.name)
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
      this.getproductList();
      if(res.code == 1){
         this.$message.success('产品信息编辑成功')
      this.getproductList();
    }else{ 
      this.$message.error('产品信息编辑失败')
    }
     
     
      // console.log(res)
    },
    // 通过id删除产品信息
      async removeById(id,flag){
      // console.log(id)
      const res = await this.$confirm('此操作将删除该条证书, 是否继续?', '提示', {
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
     const {data:removeRes} =await this.$http.post('DelLicenseInfo',{id:id,flag:flag});
      console.log(removeRes);
      if(removeRes.code == 0){
        this.$message.success('删除成功')
        this.getproductList();
      }else{
        this.$message.error('删除失败')
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
    // 点击上链按钮，实现数据上链
     upChain(id,flag){
         this.$confirm('此操作将信息上链，上链后数据无法更改, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('Setstatus',{id:id,flag:flag})
          this.$message({
            type: 'success',
            message: '信息上链成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      // console.log(id,flag)
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
