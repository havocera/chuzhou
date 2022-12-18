<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>加工过程管理</el-breadcrumb-item>
      <el-breadcrumb-item>加工过程</el-breadcrumb-item>
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
          <el-button type="primary" @click="clickAdd()">添加加工信息</el-button>
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
        <el-table-column prop="pch" label="加工批次号" width="140">
        </el-table-column>
        <el-table-column prop="picture" label="加工图片" width="140">
          <template slot-scope="scope">
            <img :src="scope.row.picture" alt="暂无图片" width="100px" height="100px" />
          </template>
        </el-table-column>
        <el-table-column prop="process_name" label="加工过程" width="180"> </el-table-column>
        <el-table-column prop="process_way" label="加工方式" width="120"> </el-table-column>
        <el-table-column prop="process_time" label="加工时间" width="120"> </el-table-column>
        <el-table-column prop="fzr" label="操作人" width="180"> </el-table-column>
        <el-table-column label="操作" width="180">
          <!-- 插槽自定义样式 -->
          <template slot-scope="scope">
            <el-tooltip
              class="item"
              effect="dark"
              content="编辑"
              placement="top-start"
            >
              <el-button type="primary" @click="showEditDialog(scope.row.id)" icon="el-icon-edit"></el-button>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="删除"
              placement="top-end"
            >
              <el-button type="warning" icon="el-icon-delete" @click="removeById(scope.row.id)"></el-button>
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
  title="添加加工过程信息"
  :visible.sync="addDialogVisible"
  width="40%"
  @close="addFormClosed"
 >
  <!-- 表单内容区 -->
  <el-form :rules="FormRules" enctype="multipart/form-data" ref="addJggcInfo" :model="addJggcInfo" label-width="80px">

 <el-form-item label="产品名称" prop="cpmc">
    <el-select @change="getAddPch" class="select-width" v-model="addJggcInfo.cpmc" placeholder="请选择产品名称">
      <el-option :label="item" v-for="item in cpmcList" :value="item" :key="item.index"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="加工批次" prop="pch">
    <el-select class="select-width" v-model="addJggcInfo.pch" placeholder="请选择产品批次号">
      <el-option v-for="item in pchList" :value="item" :label="item" :key="item.index"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="加工过程" prop="process_name">
      <el-autocomplete
      class="inline-input"
      v-model="addJggcInfo.process_name"
      :fetch-suggestions="querySearch"
      placeholder="请输入加工过程"
      @select="handleSelect"
    ></el-autocomplete>
  </el-form-item>
  <el-form-item  label="图片名称" prop="process_pic">
    <el-input disabled v-model="addJggcInfo.process_pic"></el-input>
  </el-form-item>
  <el-form-item label="加工过程图片上传">
    <!-- 图片上传组件 -->
  <el-upload
  ref="addUpload"
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
  
 <el-form-item label="加工方式" prop="process_way">
     <el-select v-model="addJggcInfo.process_way" placeholder="请选择">
     <el-option
      v-for="item in jgfsOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
     <el-form-item label="作业日期"  prop="process_time">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="addJggcInfo.process_time"
              type="date"
              placeholder="选择日期"
              
            >
            </el-date-picker>
          </el-form-item>
  <el-form-item label="负责人" prop="fzr">
    <el-input  v-model="addJggcInfo.fzr"></el-input>
  </el-form-item>
  </el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="addDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addSubmit">确 定</el-button>
  </span>
</el-dialog>
 <!-- 产品dialog弹窗结束 -->
 <!-- 新编辑产品 -->
  <el-dialog
  title="编辑加工过程信息"
  :visible.sync="editDialogVisible"
  width="40%"
  @close="addFormClosed"
 >
  <!-- 表单内容区 -->
  <el-form :rules="FormRules" enctype="multipart/form-data" ref="editFormRef" :model="editJggcInfo" label-width="80px">

 <el-form-item label="产品名称">
   <!-- 后端不给传cpmc字段，这里用editCpmc过渡一下，且不影响批次号选择 -->
    <el-select @change="getPch" class="select-width" v-model="editCpmc" placeholder="请选择产品名称">
      <el-option :label="item" v-for="item in cpmcList" :value="item" :key="item.index"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="加工批次">
    <el-select class="select-width" v-model="editJggcInfo.pch" placeholder="请选择产品批次号">
      <el-option v-for="item in pchList" :value="item" :label="item" :key="item.index"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="加工过程" prop="cpmc">
      <el-autocomplete
      class="inline-input"
      v-model="editJggcInfo.process_name"
      :fetch-suggestions="querySearch"
      placeholder="请输入加工过程"
      @select="handleSelect"
    ></el-autocomplete>
  </el-form-item>
  <el-form-item  label="图片名称" prop="picname">
    <el-input disabled v-model="editJggcInfo.process_pic"></el-input>
  </el-form-item>
  <el-form-item label="加工过程图片上传">
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
  <el-form-item label="加工方式" prop="cpgg">
     <el-select v-model="editJggcInfo.process_way" placeholder="请选择">
     <el-option
      v-for="item in jgfsOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
     <el-form-item label="作业日期"  prop="rq">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="editJggcInfo.process_time"
              type="date"
              placeholder="选择日期"
              
            >
            </el-date-picker>
          </el-form-item>
  <el-form-item label="负责人" prop="bzq">
    <el-input  v-model="editJggcInfo.fzr"></el-input>
  </el-form-item>
  </el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="editSubmit">确 定</el-button>
  </span>
</el-dialog>
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
        current_page: 1,
        page:1
      },
      total:0,
      productList:[],
      addDialogVisible:false,
      addJggcInfo:{
          cpmc:'',
          pch:'',
          process_name:'',
          process_way:'',
          fzr:'',
          process_time:'',
          process_pic:''
      },
      jgfsOptions:[
          {
          value: '手动',
          label: '手动'
        }, {
          value: '机械',
          label: '机械'
        }
      ],
      cpInfoList:[],
      cpmcList:[],
      pchList:[],
      printCpmc:'',
      processName:[
         { "value": "杀青", "address": "长宁区新渔路144号" },
          { "value": "揉捻", "address": "上海市长宁区淞虹路661号" },
          { "value": "干燥", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "制型", "address": "天山西路438号" },
      ],
        value: '',
      editJggcInfo:{
          id:'',
          pch:'',
          process_name:'',
          process_way:'',
          fzr:'',
          process_time:'',
          process_pic:''
      },
      editCpmc:'',
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
        editCpmc:[
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
      } = await this.$http.post('ProcessList', 
       {page:this.queryInfo.current_page,query:this.queryInfo.query}
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
    clickAdd(){
          console.log(123)
          this.addDialogVisible=true
          this.getPrintData()
    },
    // 点击新增，弹出框中获取产品名称和批次号
    async getPrintData(){
           const {data:res} = await this.$http.post(
              "ProductionInfo",
              this.queryInfo
              );
              console.log(res)
              this.cpInfoList = res.data.result
              // 对产品名称进行去重操作
              for(let i=0;i<this.cpInfoList.length;i++){
                  if(this.cpmcList.indexOf(this.cpInfoList[i].cpmc) == -1){
                    this.cpmcList.push(this.cpInfoList[i].cpmc)
                  }
              }
              console.log(this.cpInfoList)
        },
        getPch(){
          // 遍历批次号，更新对应产品的批次号数据
              this.pchList = [];
              for(let i=0;i<this.cpInfoList.length;i++){
                  // 获取不到批次号的话。this.editJggcInfo.cpmc要更改
                  if(this.editCpmc == this.cpInfoList[i].cpmc){
                    this.pchList.push(this.cpInfoList[i].pch)
                  }
              }
        },
          getAddPch(){
          // 遍历批次号，更新对应产品的批次号数据
              this.pchList = [];
              for(let i=0;i<this.cpInfoList.length;i++){
                  // 获取不到批次号的话。this.editJggcInfo.cpmc要更改
                  if(this.addJggcInfo.cpmc == this.cpInfoList[i].cpmc){
                    this.pchList.push(this.cpInfoList[i].pch)
                  }
              }
        },
    // 关闭dialog弹窗的回调函数
    addFormClosed(){
      // 在关闭dialog时重置表单
      console.log(this.$refs)
      this.$refs.addFormRef.resetFields();
      this.$refs.upload.clearFiles();
    },
    // 编辑按钮点击事件
    async showEditDialog(id){
      console.log(id)
     const {data:res} = await this.$http.post('EditProcessInfo',{
        id:id
      })
      console.log(res.data);
      this.editJggcInfo.id = id;
      this.editJggcInfo.pch = res.data.pch;
      this.editJggcInfo.process_name = res.data.process_name;
      this.editJggcInfo.process_way = res.data.process_way;
      this.editJggcInfo.process_time =res.data.process_time;
      this.editJggcInfo.fzr = res.data.fzr;
      this.editDialogVisible = true;
       this.getPrintData()
    },
    // 提交编辑弹框修改
    async editSubmit(){
      this.editDialogVisible = false;
       const{data:res} = await this.$http.post('DoEditProcessInfo',this.editJggcInfo)
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
      async removeById(id){
      // console.log(id)
      const res = await this.$confirm('此操作将永久删除该条信息, 是否继续?', '提示', {
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
     const {data:removeRes} =await this.$http.post('DelProcessInfo',{id:id});
      //console.log(removeRes);
      if(removeRes.code == 0 ){
        this.$message.success('删除成功')
        this.getproductList();
      }else{
        this.$message.error('删除失败')
      }
      
    },
    // 新增产品提交事件        
   async addSubmit(){
       const {data:res} =await this.$http.post('AddProcessInfo',this.addJggcInfo)
        console.log(res)
        if(res.code !==0){return this.$message.error('添加产品失败')}
        this.$refs.addJggcInfo.resetFields();
        this.$refs.addUpload.clearFiles();
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
        this.addJggcInfo.process_pic = response.data.saveName;
        this.editJggcInfo.process_pic = response.data.saveName;
        // console.log(response,file.name)
    },
    // 动态设置图片上传路径
    setUploadURL(){
        this.tokenStr = window.sessionStorage.getItem('token');
        this.uploadURL = 'http://ahteaapi.wtycms.cn/Processupload?token=' + this.tokenStr;
        console.log(this.uploadURL)
    },
  // 带输入建议的输入框
     querySearch(queryString, cb) {
        var processName = this.processName;
        var results = queryString ? processName.filter(this.createFilter(queryString)) : processName;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (processName) => {
          return (processName.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
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
