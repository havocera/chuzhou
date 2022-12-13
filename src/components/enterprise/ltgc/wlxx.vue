<template>
  <div>
     <!-- 面包屑导航 -->
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>流通过程管理</el-breadcrumb-item>
      <el-breadcrumb-item>物流信息管理</el-breadcrumb-item>
    </el-breadcrumb> -->
    <el-row>
       <el-col :span="12">
         <!-- <el-card>
          <div id="mapDiv" :style="conheight" class="mapDiv" ref="mapDiv"></div>
         </el-card> -->
    <el-card class="box-card table">
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
          <el-button type="primary" @click="clickAdd"
            >新增物流信息</el-button
          >
        </el-col>
      </el-row>
      
 
    <!-- 数据列表 -->
        <el-table
      :data="tableData"
      style="width: 100%"
      :fit="true"

      border
      >
      <el-table-column
        type="index"
        label="编号"
      >
      </el-table-column>
      
      <el-table-column
        prop="ship_address"
        label="发货地址">
      </el-table-column>
      <el-table-column
        prop="destination"
        label="目的地">
      </el-table-column>
      <el-table-column
        prop="accepter"
        label="收件人">
      </el-table-column>
     
      <el-table-column
      width="140"
        prop="carrier_phone"
        label="运输联系方式">
      </el-table-column>
     
      
      <!-- <el-table-column
        prop="courier_number"
        label="快递单号">
      </el-table-column> -->
        
      <el-table-column
        prop="delivery_time"
        label="发货时间">
      </el-table-column>
        <el-table-column label="操作" >
          <!-- 插槽自定义样式 -->
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="编辑" placement="top-start">
              <el-button
                @click="editInfo(scope.row.id)"
                type="primary"
                icon="el-icon-edit"
              ></el-button>
            </el-tooltip>
            <!-- <el-tooltip effect="dark" content="删除" placement="top-end">
              <el-button
                type="warning"
                @click="delInfo(scope.row.id)"
                icon="el-icon-delete"
              ></el-button>
            </el-tooltip> -->
             
          </template>
        </el-table-column>
         <el-table-column label="查看" >
          <!-- 插槽自定义样式 -->
          <template slot-scope="scope">
           
              <el-tooltip effect="dark" content="物流详情单查看" placement="top-end">
              <el-button
                type="success"
                @click="printCargoBill(scope.row.id)"
                icon="el-icon-printer"
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
        width="40%"
      >
        <!-- 表单区 -->
        <el-form size="medium"  ref="addFormRef" :inline="true" :model="addFormInfo" label-width="120px">
          <el-form-item label="产品名称">
    <el-select @change="getAddPch" class="select-width" v-model="addFormInfo.cpmc" placeholder="请选择产品名称">
      <el-option :label="item" v-for="item in cpmcList" :value="item" :key="item.index"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="批次号">
    <el-select class="select-width" v-model="addFormInfo.pch" placeholder="请选择产品批次号">
      <el-option v-for="item in pchList" :value="item" :label="item" :key="item.index"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="发货人"  prop="shiper_name">
            <el-input v-model="addFormInfo.shiper_name"></el-input>
          </el-form-item>
          <el-form-item label="发货人联系方式"  prop="shiper_phone">
            <el-input v-model="addFormInfo.shiper_phone"></el-input>
          </el-form-item>
          <el-form-item label="发货地址"  prop="ship_address">
            <el-input v-model="addFormInfo.ship_address"></el-input>
          </el-form-item>
          <el-form-item label="目的地"  prop="destination">
            <el-input v-model="addFormInfo.destination"></el-input>
          </el-form-item>
    <el-form-item label="收件人">
    <el-select  @change="setClientId" class="select-width" v-model="addFormInfo.client_id" placeholder="请选择收件人信息">
      <el-option :label="item.client_name" v-for="item in clientInfoList" :value="item.id" :key="item.id"></el-option>
    </el-select>
  </el-form-item>
          <el-form-item label="运送人"  prop="carrier">
            <el-input v-model="addFormInfo.carrier"></el-input>
          </el-form-item>
          <el-form-item label="运输联系方式"  prop="carrier_phone">
            <el-input v-model="addFormInfo.carrier_phone"></el-input>
          </el-form-item>
          <el-form-item label="运输数量" prop="number">
            <el-input placeholder="单位：kg" v-model="addFormInfo.number"></el-input>
          </el-form-item>
          <el-form-item label="车牌号"  prop="license">
            <el-input v-model="addFormInfo.license"></el-input>
          </el-form-item>
          <el-form-item label="快递单号"  prop="courier_number">
            <el-input v-model="addFormInfo.courier_number"></el-input>
          </el-form-item>
           <el-form-item  label="货运单图片名称" prop="waybill_pic">
    <el-input disabled v-model="addFormInfo.waybill_pic"></el-input>
  </el-form-item>
  <el-form-item label="货运单图片上传">
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
    <el-form-item  label="现场图片名称" prop="cargo_pic">
    <el-input disabled v-model="addFormInfo.cargo_pic"></el-input>
  </el-form-item>
  <el-form-item label="现场图片上传">
    <!-- 图片上传组件 -->
  <el-upload
  ref="upload"
  name="image"
  class="upload-demo"
  :action="carGoUploadURL"
  :on-success="carGoSuccessEvent"
  
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png格式的图片，且图片大小不能超过1MB</div>
</el-upload>
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
      <editdialog :editdialog="editDialogVisible" ref="editdialog" />
       <!-- 编辑物流信息dialog -->
      
      <!-- 货物单打印弹窗 -->
      <!-- <el-dialog
  title=""
  :visible.sync="printCargoDialogVisible"
  width="50%"
  center> -->
  
    </el-card>
    </el-col>
    <el-col :span="1"><el-divider direction="vertical"></el-divider> </el-col>
    <el-col :span="10">
     
      <el-card>
<printer class="printer" ref="printer"  />
      </el-card>
    
    </el-col>
</el-row>
<div></div>
  </div>
</template>

<script>
import printer from './model/printer.vue'
import editdialog from './model/editwlxx.vue'
import tiandi from "../../../assets/js/maptiandi"
export default {
  components:{
    printer,editdialog
  },
    data(){
      return{
        conheight:{
                height:'600px'
            },
        printid:'',
        size:'',
        tokenStr:'',
        queryInfo:{
          token:'',
          query:'',
          page:1,
          pageSize:8
        },
        total:0,
        tableData:[],
        addDialogVisible:false,
        editDialogVisible:false,
        printCargoDialogVisible:false,
        addFormInfo:{
        client_id:'',
         cpmc:'',
         pch:'',
        destination:'',
        ship_address:'',
        carrier:'',
        accepter:'',
        carrier_phone:'',
        number:'',
        license:'',
        courier_number:'',
        waybill_pic:'',
        cargo_pic:'',
        delivery_time:'',
        shiper_phone:'',
        shiper_name:''
        },
         uploadURL:'',
         carGoUploadURL:'',
        editFormInfo:{
          id:'',
          cpmc:'',
         pch:'',
        destination:'',
        ship_address:'',
        carrier:'',
        accepter:'',
        carrier_phone:'',
        number:'',
        license:'',
        courier_number:'',
        waybill_pic:'',
        cargo_pic:'',
        delivery_time:'',
        shiper_name:'',
        shiper_phone:''
        },
        cpInfoList:[],
        cpmcList:[],
        printData:{},
        clientInfoList:[],
        pchList:[],
      }
    },
    created(){
        this.tokenStr = window.sessionStorage.getItem('token');
        this.getDataList();
        this.getPrintData();
        this.setUploadURL();
     
        
    },
    
    methods:{
      async roadMap() {
    //  const {data:res}= await this.$http.post("smtz");
    // this.data=res.data
      tiandi.init().then(
        T => {
          this.T = T;
          const imageURL = "http://t0.tianditu.gov.cn/img_c/wmts?tk=b02dec10c18d1827f87ef79acf6cd3c0";
          const lay = new T.TileLayer(imageURL, { minZoom: 1, maxZoom: 18 });
          const config = { layers: [lay], name: 'TMAP_SATELLITE_MAP',setStyle:'black' };
          this.map = new T.Map('mapDiv');
          
          
          const ctrl = new T.Control.MapType();
          this.map.addControl(ctrl);
          this.map.centerAndZoom(new T.LngLat(116.40969, 37.43997405227057), 5);
          this.map.setStyle('indigo');
          // var arrayObj = new Array();
          // for(var i=0;i<this.data.length;i++){
          //   var marker = new T.Marker(new T.LngLat(this.data[i].lng,this.data[i].lat),{title: i});
            
          //   arrayObj.push(marker)
          // }
          // console.log(marker)
          // var markers = new T.MarkerClusterer(this.map, {markers: arrayObj});
        }).catch()
        
    },
      printCargoBill(id){
          this.printid =id
          this.$refs.printer.printCargoBill(id)
      },
      async getDataList(){
        this.queryInfo.token =this.tokenStr
      const{data:res} = await this.$http.post('TransportList',this.queryInfo)
      console.log(res.data.result)
      this.tableData = res.data.result
      this.total = res.data.total
      this.printCargoBill(this.tableData[0].id)
      },
      // 点击翻页重新发起数据请求
    handleCurrentChange(newPage){
        this.queryInfo.page = newPage;
        this.getDataList();
    },
   async addFormSubmit(){
        this.addFormInfo.token = this.tokenStr;
        await this.$http.post('AddTransportInfo',this.addFormInfo)
        this.getDataList();
        this.addDialogVisible =false;
        this.$refs.addFormRef.resetFields();
    },
    // 上传成功将图片名称保存，用于发送给后端
       successEvent(response, file, fileList){
        this.addFormInfo.waybill_pic = file.name;
        this.editFormInfo.waybill_pic = file.name;
        console.log(response,file.name)
    },
         carGoSuccessEvent(response, file, fileList){
        this.addFormInfo.cargo_pic = file.name;
        this.editFormInfo.cargo_pic = file.name;
        console.log(response,file.name)
    },
       // 动态设置图片上传路径
    setUploadURL(){
        this.tokenStr = window.sessionStorage.getItem('token');
        this.uploadURL = 'http://ahteaapi.wtycms.cn/TransportWaybillupload?token=' + this.tokenStr;
        this.carGoUploadURL = 'http://ahteaapi.wtycms.cn/TransportCargoupload?token=' + this.tokenStr;
        // console.log(this.uploadURL)
    },
   async editInfo(id){
     this.getClientInfo();
     this.editDialogVisible=true
     this.$refs.editdialog.editInfo(id)

     

    },
   async editFormSubmit(){
     await this.$http.post('DoEditTransportInfo',this.editFormInfo)
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
    // 点击新增按钮
    clickAdd(){
      this.addDialogVisible = true;
      this.getClientInfo()

    },
    setClientId(id){
          console.log(id)
          this.addFormInfo.client_id = id
    },
    async getClientInfo(){
           const{data:res} = await this.$http.post('SelectClientName')
          console.log(res)
          this.clientInfoList = res.data;
          
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
.margin-top{
  margin-top: 10px;
}
.printer{
  border: 1px solid #ccc;
}

</style>

