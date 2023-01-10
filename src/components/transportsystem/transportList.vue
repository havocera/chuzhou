<template>
  <div>
     <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>物流商管理</el-breadcrumb-item>
      <el-breadcrumb-item>物流信息管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
    <!-- 搜索与添加区域 -->
      <el-row :gutter="10">
        <el-col :span="6">
          <el-input
            clearable
            v-model="queryInfo.query"
            @clear="getDataList"
            placeholder="请输入物流信息"
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
            >新增物流数据</el-button
          >
        </el-col>
      </el-row>
      <!-- 数据列表 -->
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="courier_number"
        label="物流单号"
      >
      </el-table-column>
      <el-table-column
        prop="qymc"
        label="物流商">
      </el-table-column>
      <el-table-column
        prop="cpmc"
        label="运输产品">
      </el-table-column>
      <el-table-column
        prop="ship_address"
        label="发货地">
      </el-table-column>
      <el-table-column
        prop="shiper_name"
        label="发货人">
      </el-table-column>
      <el-table-column
        prop="shiper_phone"
        label="发货人联系方式">
      </el-table-column>
      <el-table-column
        prop="accepter"
        label="收件人">
      </el-table-column>
      <el-table-column
        prop="destination"
        label="目的地">
      </el-table-column>
      <el-table-column
        prop="pch"
        label="批次号">
      </el-table-column>
      <el-table-column
        prop="license"
        label="运输车辆">
      </el-table-column>
      <el-table-column
        prop="delivery_time"
        label="创建时间">
      </el-table-column>
        <el-table-column label="操作" width="270px">
          <!-- 插槽自定义样式 -->
          <template slot-scope="scope">
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
        title="新增物流信息"
        :visible.sync="addDialogVisible"
        width="30%"
      >
        <!-- 表单区 -->
        <el-form size="medium"  ref="addFormRef" :inline="true" :model="addFormInfo" label-width="120px">
          <el-form-item label="企业名称"  prop="chandi">
            <el-select v-model="addFormInfo.scsqydm" @change="getCppc" placeholder="请选择企业">
              <el-option :label="item.qymc" v-for="item in selectCompany" :key="item.qydm" :value="item.qydm"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="产品名称"  prop="addFormInfo.pch">
            <el-select v-model="addFormInfo.pch" @change="getSym"  placeholder="请选择产品">
              <el-option :label="item.cpmc" v-for="item in selectPch" :key="item.pch" :value="item.pch"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="溯源码"  prop="addFormInfo.sym">
            <el-select v-model="addFormInfo.sym"  placeholder="请选择溯源码">
              <el-option :label="item.sym" v-for="item in selectSym" :key="item.sym" :value="item.sym"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="物流单号"  prop="courier_number">
            <el-input v-model="addFormInfo.courier_number"></el-input>
          </el-form-item>
          <el-form-item label="运输车辆车牌号"  prop="license">
            <el-input v-model="addFormInfo.license"></el-input>
          </el-form-item>
          <el-form-item label="发货地址"  prop="ship_address">
            <el-input v-model="addFormInfo.ship_address"></el-input>
          </el-form-item>
          <el-form-item label="发货人"  prop="shiper_name">
            <el-input v-model="addFormInfo.shiper_name"></el-input>
          </el-form-item>
          <el-form-item label="发货人联系方式"  prop="shiper_phone">
            <el-input v-model="addFormInfo.shiper_phone"></el-input>
          </el-form-item>
          <el-form-item label="目的地址"  prop="destination">
            <el-input v-model="addFormInfo.destination"></el-input>
          </el-form-item>
          <el-form-item label="运输数量" prop="number">
            <el-input placeholder="单位：kg" v-model="addFormInfo.number"></el-input>
          </el-form-item>
          <el-form-item label="接收人"  prop="accepter">
            <el-input v-model="addFormInfo.accepter"></el-input>
          </el-form-item>
          <el-form-item label="发货日期"  prop="delivery_time">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="addFormInfo.delivery_time"
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
          <el-form-item label="批发商名称"  prop="name">
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
        selectSym:[],
        qydm:'',
        editQymc:''
      }
    },
    created(){
        this.tokenStr = window.sessionStorage.getItem('token');
        this.getDataList();
        this.getCompany();
    },
    methods:{
      async getDataList(){
        // this.queryInfo.token =this.tokenStr
      const{data:res} = await this.$http.post('TransportList',this.queryInfo)
      console.log(res.data)
      this.tableData = res.data.result;
      this.total = res.data.total;
      },
      // 触发新增窗口下拉框
     async getCompany(){
        const {data:res} = await this.$http.post('selectcompany',this.queryInfo)
        this.selectCompany = res.data;
          console.log(res.data)
      },
      // 拿到qydm后，再请求后台数据获取批次号
   async getCppc(val){
              //  console.log(val);
       const {data:res} = await this.$http.post('selectbypch',{qydm:val})
      console.log(res);
      this.selectPch = res.data;

    },
        // 拿到pch后请求后台获取溯源码
  async getSym(val){
        console.log(val);
        const {data:res} = await this.$http.post('selectbysym',{qydm:this.addFormInfo.scsqydm,pch:val})
      console.log(res);
      this.selectSym = res.data;
    },
      // 点击翻页重新发起数据请求
    handleCurrentChange(newPage){
        this.queryInfo.page = newPage;
        this.getDataList();
    },
   async addFormSubmit(){
        // this.addFormInfo.token = this.tokenStr;
        // console.log(this.addFormInfo)
       const res =  await this.$http.post('AddTransportInfo',this.addFormInfo);
       console.log(res)
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
          this.$http.post('DelTransportInfo',{
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

