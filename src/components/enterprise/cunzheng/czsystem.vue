<template>

  <div>
        <!-- 上链状态显示 -->
    <el-steps :active="2" align-center style="margin-top:20px;" finish-status="success">
  <el-step title="存证信息上传" description="上传存证信息"></el-step>
  <el-step title="申请上链" description="申请上链中，等待系统审核"></el-step>
  <el-step title="信息上链成功" description="信息已上链，无法篡改！"></el-step>
</el-steps>
 <!-- 上链状态显示 -->
 <el-container>
    <div class="main">
           <div class="qyForm">
    <el-form label-width="100px" :model="businessInfo">
      <el-form-item label="企业名称">
        <el-input disabled v-model="businessInfo.qymc"></el-input>
      </el-form-item>
      <el-form-item label="企业负责人">
        <el-input disabled v-model="businessInfo.fzr"></el-input>
      </el-form-item>
      <el-form-item label="负责人手机号">
        <el-input disabled v-model="businessInfo.fzrtel"></el-input>
      </el-form-item>
       <el-form-item label="企业信用代码">
        <el-input disabled v-model="businessInfo.xydm"></el-input>
      </el-form-item>
      <el-form-item label="企业地址">
        <el-input disabled v-model="businessInfo.addr"></el-input>
      </el-form-item>
      <!-- <el-form-item label="企业类型">
        <el-input :disabled="true" v-model="businessInfo.qylx"></el-input>
      </el-form-item> -->
      <el-form-item label="主营业务">
        <el-input disabled v-model="businessInfo.zyyw"></el-input>
      </el-form-item>
      <el-form-item label="主营产品">
        <el-input disabled v-model="businessInfo.zycp"></el-input>
      </el-form-item>
      <el-form-item label="经营规模">
        <el-input disabled v-model="businessInfo.jygm"></el-input>
      </el-form-item>
      <el-form-item label="企业简介">
        <el-input  :rows="4" disabled type="textarea" v-model="businessInfo.dwjj"></el-input>
      </el-form-item>
    </el-form>
  </div>
  <div class="qyImg">
    <!-- 营业执照上传 -->
      <div class="grid-content bg-purple" style="text-align:center;padding-top:15px;">
<div class="block">
    <el-image :src="businessInfo.business_license_path"  style="width: 300px; height: 200px">
      <div slot="error" class="image-slot">
        未上传营业执照信息，加载失败<span class="dot">...</span>
        <!-- <el-empty description="描述文字"></el-empty> -->
      </div>
    </el-image>
  </div>
  <el-tag>上链凭证：{{yyzzCode}}</el-tag>
 <el-button type="primary" size="small"  @click="yyzzUpload" style="width:100%;margin-top:10px;">营业执照上传</el-button>
  </div>

  <!-- 荣誉证书上传 -->
       <div class="grid-content bg-purple" style="text-align:center;margin-top:150px;">
<div class="block">
    <el-image :src="honor_picture"  style="width: 300px; height: 200px" >
      <div slot="error" class="image-slot">
        未上传营业执照信息，加载失败<span class="dot">...</span>
        <!-- <el-empty description="描述文字"></el-empty> -->
      </div>
    </el-image>
  </div>
  <el-tag>上链凭证：{{yyzzCode}}</el-tag>
 <el-button type="success" size="small"  @click="ryzsUpload" style="width:100%;margin-top:10px;">荣誉证书上传</el-button>
  </div>
  </div>
  
    </div>
      
 
</el-container>





     <!-- 营业执照信息Dialog弹窗 -->
     <el-dialog
  :title="uploadTittle"
  :visible.sync="UploadDialogVisible"
  width="40%"
  center>
 
<el-form label-position="left" label-width="100px" :model="formLabelAlign">
  <el-form-item :label="uploadLable">
      <el-upload
  name="image"
  :action="uploadURL"
  list-type="picture-card"
  >
  <i class="el-icon-plus"></i>
</el-upload>
  </el-form-item>

</el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="UploadDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitUpload">确 定</el-button>
  </span>
</el-dialog>

<!-- 荣誉证书上传dialog -->
     <el-dialog
  title="荣誉证书上传"
  :visible.sync="ryzsDialogVisible"
  width="40%"
  center>
 
<el-form label-position="left" label-width="100px" :model="formLabelAlign">
   <el-form-item label="荣誉证书名称">
    <el-input v-model="honorForm.name"></el-input>
  </el-form-item>
  <el-form-item label="荣誉证书上传">
      <el-upload
  name="image"
  :action="ryzsuploadURL"
   :on-success="ryzsUploadSuccess"
  list-type="picture-card"
  >
  <i class="el-icon-plus"></i>
</el-upload>
  </el-form-item>

</el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="ryzsDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitRyzsUpload">确 定</el-button>
  </span>
</el-dialog>
  </div>
  
</template>

<script>
export default {
      data(){
        return{
            businessInfo:{
          qymc:'',
          fzr:'',
          fzrtel:'',
          addr:'',
          qylx:'',
          zyyw:'',
          zycp:'',
          jygm:'',
          dwjj:'',
          xydm:'',
        },
          // url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          url:'',
          src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          // src:'',
             srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ],
        yyzzSrc:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        youjiSrc:'',
        greenSrc:'',
        locationSrc:'',
        yyzzCode:'该信息未上链',
        youjiCode:'该信息未上链',
        greenCode:'该信息未上链',
        locationCode:'该信息未上链',
        UploadDialogVisible:false,
        spybDialogVisible:false,
        ryzsDialogVisible:false,
        honorForm:{
          name:'',
          honor_pic:''
        },

        ryzsList:[],
        honor_picture:'',
        formLabelAlign:{

        },
        uploadForm:{
          flag:'',
          license_name:''
        },
          uploadURL:'',
          rrzsuploadURL:'',
          uploadTittle:'',
          uploadLable:''
        }
      },
      created(){
        this.getDataList();
        this.getBusinessInfo();
      },
      methods:{
         // 请求企业信息
    async getBusinessInfo(){
      // 从sessionStorage里取出存的token
     const tokenStr = window.sessionStorage.getItem('token')
     const {data:res} = await this.$http.post('BusinessInfo',{token:tokenStr})
     const {data:ryzsRes} = await this.$http.post('HonorList',{token:tokenStr})
    // console.log(ryzsRes.data)
    console.log(res)
    this.ryzsList = ryzsRes.data.result;
    this.honor_picture = ryzsRes.data.result[0].honor_picture;
    this.businessInfo=res.data;
    },
        submitUpload(){
            this.getDataList();
            this.UploadDialogVisible = false;
        },
        // 图片上传成功，获取图片名称，存入提交表单中
     successEvent(response, file, fileList){

        this.uploadForm.license_name = response.data.saveName;
        // this.editProductForm.picname = file.name;
        console.log(response,file.name)
    },
    // 列表图片请求
    async getDataList(){
          const{data:res} =await this.$http.post('LicenseList');
          this.yyzzSrc = res.data.qy.business_license;
          this.yyzzCode =res.data.qy.qy_code;
          this.youjiSrc = res.data.yj[0].youji_name;
           this.youjiCode = res.data.yj[0].youji_code;
          //  this.greenSrc = res.data.lvse

          console.log(res)
    },
        //  营业执照上传
    yyzzUpload(){
        this.uploadTittle = "营业执照上传";
        this.uploadLable ="营业执照上传";
        this.tokenStr = window.sessionStorage.getItem('token');
        this.uploadURL = 'http://ahteaapi.wtycms.cn/Enterpriseupload?token=' + this.tokenStr;
        // console.log(this.uploadURL)
        this.UploadDialogVisible = true
    },
        // 企业基本证书上传
           jbzsUpload(){
        this.uploadTittle = "企业基本证书上传";
        this.uploadLable ="企业基本证书上传";
        this.tokenStr = window.sessionStorage.getItem('token');
        this.uploadURL = 'http://ahteaapi.wtycms.cn/Enterpriseupload?token=' + this.tokenStr;
        // console.log(this.uploadURL)
        this.UploadDialogVisible = true
    },
    // 三品一标证书上传
    spybUpload(){
         this.tokenStr = window.sessionStorage.getItem('token');
         this.uploadURL = 'http://ahteaapi.wtycms.cn/Spybupload?token=' + this.tokenStr;
        // console.log(this.uploadURL)
         this.spybDialogVisible = true
    },
    submitspyb(){
        this.$http.post('AddLicenseInfo',this.uploadForm)
        this.spybDialogVisible = false;
    },
      // 荣誉证书上传
     ryzsUpload(){
        this.tokenStr = window.sessionStorage.getItem('token');
        this.ryzsuploadURL = 'http://ahteaapi.wtycms.cn/Honorupload?token=' + this.tokenStr;
        // console.log(this.uploadURL)
        this.ryzsDialogVisible = true
    },
    ryzsUploadSuccess(response){
        console.log(response.data.saveName)
        this.honorForm.honor_pic = response.data.saveName;
        
    },
   async submitRyzsUpload(){
      const{data:res} = await this.$http.post('AddHonor',this.honorForm)
       console.log(res);
       if(res.code == 0){
             this.$notify({
          title: '成功',
          message: '荣誉证书上传成功',
          type: 'success'
        });
           this.ryzsDialogVisible = false;
       }
      
    },
      }
}
</script>

<style scoped lang="less">
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #fff;
  }
  // 背景色
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  upload-demo{
    height: 300px;
  }
  image-slot{
     display: inline-block;
            content: "";
            height: 100%;
            vertical-align: middle;
  }
 el-container{
   width: 100%;
 }
  .main{
    margin: 0 auto;
    margin-top:100px;
    width: 800px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
  }
  .qyForm{
    width: 500px;
  }
  .qyImg{
    width: 300px;
    height: 200px;
    // margin-top:150px;
    margin-left:50px;
  }
</style>