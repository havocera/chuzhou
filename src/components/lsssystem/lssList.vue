<template>
  <div>
     <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>零售商管理</el-breadcrumb-item>
      <el-breadcrumb-item>零售商交易管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
    <!-- 搜索与添加区域 -->
      <el-row :gutter="10">
        <el-col :span="6">
          <el-input
            clearable
            v-model="queryInfo.query"
            @clear="getDataList"
            placeholder="请输入交易信息"
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
            >新增零售交易数据</el-button
          >
        </el-col>
      </el-row>
      <!-- 数据列表 -->
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="index"
        label="零售订单号"
      >
      </el-table-column>
      <el-table-column
        prop="qymc"
        label="零售商"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="生产企业">
      </el-table-column>
      <el-table-column
        prop="money"
        label="零售产品">
      </el-table-column>
      <el-table-column
        prop="product"
        label="交易数量">
      </el-table-column>
      <el-table-column
        prop="number"
        label="交易金额">
      </el-table-column>
  
      <el-table-column
        prop="number"
        label="购买方">
      </el-table-column>

      <el-table-column
        prop="number"
        label="买家联系方式">
      </el-table-column>

      <el-table-column
        prop="number"
        label="时间">
      </el-table-column>
      <el-table-column
        prop="time"
        label="交易时间">
      </el-table-column>
        <el-table-column label="操作" width="270px">
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
       <!-- 新增物流信息dialog -->
      <el-dialog
        title="新增零售数据"
        :visible.sync="addDialogVisible"
        width="30%"
      >
        <!-- 表单区 -->
        <el-form size="medium"  ref="addFormRef" :inline="true" :model="addFormInfo" label-width="120px">
          <el-form-item label="生产企业名称"  prop="chandi">
            <el-select v-model="addFormInfo.chandi" placeholder="请选择生产企业">
              <el-option :label="item.qymc" v-for="item in selectCompany" :key="item.qydm" :value="item.qymc"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="产品名称"  prop="cpbh">
            <el-select v-model="addFormInfo.cpbh" placeholder="请选择产品">
              <el-option :label="item.cpmc" v-for="item in selectProduct" :key="item.bh" :value="item.bh"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="购买数量"  prop="name">
            <el-input v-model="addFormInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="交易金额"  prop="money">
            <el-input v-model="addFormInfo.money"></el-input>
          </el-form-item>
          <el-form-item label="购买方"  prop="product">
            <el-input v-model="addFormInfo.product"></el-input>
          </el-form-item>
          <el-form-item label="买家联系方式"  prop="number">
            <el-input v-model="addFormInfo.number"></el-input>
          </el-form-item>
 
          <el-form-item label="交易日期"  prop="time">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="addFormInfo.time"
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
       <!-- 编辑物流信息dialog -->
      <el-dialog
        title="编辑物流信息"
        :visible.sync="editDialogVisible"
        width="40%"
      >
       <!-- 表单区 -->
        <el-form size="medium"  ref="editFormRef" :inline="true" :model="editFormInfo" label-width="120px">
          <el-form-item label="零售商名称"  prop="name">
            <el-input v-model="editFormInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="生产企业名称"  prop="money">
            <el-input v-model="editFormInfo.money"></el-input>
          </el-form-item>
          <el-form-item label="交易产品"  prop="product">
            <el-input v-model="editFormInfo.product"></el-input>
          </el-form-item>
          <el-form-item label="交易数量"  prop="number">
            <el-input v-model="editFormInfo.number"></el-input>
          </el-form-item>
          <el-form-item label="总价"  prop="number">
            <el-input v-model="editFormInfo.number"></el-input>
          </el-form-item>
          <el-form-item label="购买方"  prop="number">
            <el-input v-model="editFormInfo.number"></el-input>
          </el-form-item>
          <el-form-item label="买家联系方式"  prop="number">
            <el-input v-model="editFormInfo.number"></el-input>
          </el-form-item>
           <el-form-item  label="交易图片名称" prop="picture">
    <el-input disabled v-model="editFormInfo.picture"></el-input>
  </el-form-item>
  <el-form-item label="交易图片上传">
    <!-- 图片上传组件 -->
  <el-upload
  ref="upload"
  name="image"
  class="upload-demo"
  :action="uploadURL"
  :on-success="successEvent"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png格式的图片，且图片大小不能超过1MB</div>
</el-upload>

  </el-form-item>
          <el-form-item label="交易日期"  prop="time">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="editFormInfo.time"
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
        printCargoDialogVisible:false,
        addFormInfo:{
       
        },
         uploadURL:'',
         carGoUploadURL:'',
        editFormInfo:{
          name:'',
         money:'',
         product:'',
         number:'',
         time:'',
         picture:''
        },
        cpInfoList:[],
        cpmcList:[],
        // 开始
        selectCompany:[],
        selectPch:[],
      }
    },
    created(){
        this.tokenStr = window.sessionStorage.getItem('token');
        this.getDataList();
        this.getCompany();
    },
    methods:{
      async getDataList(){
        this.queryInfo.token =this.tokenStr
      const{data:res} = await this.$http.post('TransactionList',this.queryInfo)
      console.log(res.data.result)
      this.tableData = res.data.result
      this.total = res.data.total
      },
      // 触发新增窗口下拉框
     async getCompany(){
        const {data:res} = await this.$http.post('selectcompany',this.queryInfo)
        console.log(res)
        this.selectCompany = res.data;
      },
      // 点击翻页重新发起数据请求
    handleCurrentChange(newPage){
        this.queryInfo.page = newPage;
        this.getDataList();
    },
   async addFormSubmit(){
        this.addFormInfo.token = this.tokenStr;
        await this.$http.post('AddTransactionInfo',this.addFormInfo)
        this.getDataList();
        this.addDialogVisible =false;
        this.$refs.addFormRef.resetFields();
    },
    // 上传成功将图片名称保存，用于发送给后端
       successEvent(response, file, fileList){
        this.addFormInfo.picture = response.data.saveName;
        this.editFormInfo.picture = response.data.saveName;
        // console.log(response)
    },
         carGoSuccessEvent(response, file, fileList){
        this.addFormInfo.cargo_pic = file.name;
        this.editFormInfo.cargo_pic = file.name;
        console.log(response,file.name)
    },
       // 动态设置图片上传路径
    setUploadURL(){
        this.tokenStr = window.sessionStorage.getItem('token');
        this.uploadURL = 'http://ahteaapi.wtycms.cn/Transactionupload?token=' + this.tokenStr;
        // console.log(this.uploadURL)
    },
   async editInfo(id){
        // console.log(id)
     const{data:res} = await this.$http.post('EditTransactionInfo',{token:this.tokenStr,id:id});
     console.log(res.data)
      this.editFormInfo.id = res.data.id;
     this.editFormInfo.name = res.data.name;
     this.editFormInfo.money = res.data.money;
     this.editFormInfo.product = res.data.product;
     this.editFormInfo.number = res.data.number;
      this.editFormInfo.time = res.data.time;
       this.editFormInfo.picture = res.data.picture;
      this.editDialogVisible = true;
    },
   async editFormSubmit(){
     await this.$http.post('DoEditTransactionInfo',this.editFormInfo)
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
          this.$http.post('DelTransactionInfo',{
            token:this.tokenStr,id:id
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
        getAddPch(){
          // 新增遍历批次号，更新对应产品的批次号数据
              this.pchList = [];
              for(let i=0;i<this.cpInfoList.length;i++){
                  // 获取不到批次号的话。this.editJggcInfo.cpmc要更改
                  if(this.addFormInfo.cpmc == this.cpInfoList[i].cpmc){
                    this.pchList.push(this.cpInfoList[i].pch)
                  }
              }
        },
        getPch(){
          //编辑框 遍历批次号，更新对应产品的批次号数据
              this.pchList = [];
              for(let i=0;i<this.cpInfoList.length;i++){
                  // 获取不到批次号的话。this.editFormInfo.cpmc要更改
                  if(this.editFormInfo.cpmc == this.cpInfoList[i].cpmc){
                    this.pchList.push(this.cpInfoList[i].pch)
                  }
              }
        },
        // 点击打印货物单按钮，生成货物信息单
        printCargoBill(id){
            console.log(id)
            this.printCargoDialogVisible = true;
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

