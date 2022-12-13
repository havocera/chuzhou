<template>
  <div style="width:100%;height:100%;position:relative;display: flex;
justify-content: center;
align-items: center;">
        <el-form label-width="150px" class="printForm" ref="form" :model="form" >
           <p class="tit">溯源码打印管理</p>
  <el-form-item label="样式选择" >
    <el-select class="select-width" v-model="printStyle" placeholder="选择打印方式" >
      <el-option label="普通标签二维码" value="normal"></el-option>
      <!-- <el-option label="制码打印" value="custom"></el-option>
      <el-option label="合格证打印" value="Certificate"></el-option> -->
    </el-select>
  </el-form-item>
  <el-form-item label="产品名称">
    <el-select @change="getPch" class="select-width" v-model="printCpmc" placeholder="请选择产品名称">
      <el-option :label="item" v-for="item in cpmcList" :value="item" :key="item.index"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="批次号">
    <el-select class="select-width" v-model="printPch" placeholder="请选择产品批次号">
      <el-option v-for="item in pchList" :value="item" :label="item" :key="item.index"></el-option>
    </el-select>
  </el-form-item>
  <!-- <el-form-item label="是否添加产品信息">
    <el-switch  v-model="isAddInfo"></el-switch>
  </el-form-item> -->
  <el-form-item label="打印份数">
    <el-input-number class="large" v-model="printNum" :min="1" :max="10" ></el-input-number>
  </el-form-item>
  <el-form-item>
    <el-button class="large" @click="createCode" type="primary" >立即创建二维码</el-button>
  </el-form-item>
</el-form>


<!-- 普通标签二维码dialog -->
<el-dialog
  title="二维码打印界面"
  :visible.sync="printDialogVisible"
  width="30%"
  :destroy-on-close = true
  center>
  <div class="symContainer" id="printArea">
      <div class="sym-tit">
         物联网+区块链食品安全追溯系统
      </div>
      <ul class="symInfo">
        <li>产品名称：{{symMsg.cpmc}}</li>
        <li>生产日期：{{symMsg.data}}</li>
        <li>企业电话：{{symMsg.fzrtel}}</li>
        <li>溯源码：{{symMsg.sym}}</li>
      </ul>
      <div class="sym" id="qrcode" ref="qrcode"></div>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary"  v-print="'#printArea'">打 印</el-button>
  </span>
</el-dialog>

<!-- 不添加产品信息二维码 -->
<!-- <el-dialog
  title="二维码打印界面"
  :visible.sync="print2DialogVisible"
  width="30%"
  :destroy-on-close = true
  center>
  <div class="symContainer2" id="printArea2">
      <div class="sym-tit">
        萧县永堌镇窦庄葡萄溯源平台
      </div>
      <div class="sym" id="qrcode" ref="qrcode"></div>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary"  v-print="'#printArea2'">打 印</el-button>
  </span>
</el-dialog> -->

  </div>
</template>

<script>
import QRCode from "qrcodejs2";
export default {
    data(){
      return{
         tableData: [],
        printStyle:'',
        printCpmc:'',
        printPch:'',
        cpInfoList:[],
        cpmcList:[],
        pchList:[],
        postMsg: {
        token: "",
        pch:'',
        cpmc:''
          },
        queryInfo: {
          query:'',
           page: 1,
          },
          symMsg:{
            cpmc:'',
            data:'',
            fzrtel:'',
            sym:''
          },
        tokenStr:'',
        isAddInfo:true,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        printNum:1,
        printDialogVisible:false,
        print2DialogVisible:false,
        downloadButton: false,
      configs: {
        value: "",
        imagePath: "/static/1560242161(1).png",
        filter: "color"
        },
        total:0,
        baseUrl:'http://spsy.jiaotu.cc'
      }
    },
    created(){
        this.tokenStr = window.sessionStorage.getItem("token")
        this.postMsg.token = window.sessionStorage.getItem("token")
        this.getPrintData();
        this.getTableData();
    },
    methods:{
     async getTableData(){
            const {data:res} = await this.$http.post('TraceabilityList',this.queryInfo)
            console.log(res)
            this.tableData = res.data.result;
            this.total =res.data.total;
      },
       async getPrintData(){
          this.queryInfo.token = this.tokenStr;
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
        },
        getPch(){
          // 遍历批次号，更新对应产品的批次号数据
              this.pchList = [];
              for(let i=0;i<this.cpInfoList.length;i++){
                  if(this.printCpmc == this.cpInfoList[i].cpmc){
                    this.pchList.push(this.cpInfoList[i].pch)
                  }
              }
        },
        // 分页功能--监听当前页码值 改变事件
    handleCurrentChange(newPage) {
      // console.log("当前页是" + newPage);
      this.queryInfo.page = newPage
      this.getTableData();
    },
        async createCode(isAddInfo){
          if(this.printCpmc =='' || this.printPch ==''){
              this.$message.error('请完善打印信息')
              return;
          }
          this.postMsg.pch = this.printPch
          this.postMsg.cpmc = this.printCpmc
         const {data:res} = await this.$http.post(
            'TraceabilityPrint',
            this.postMsg
          )
          console.log(res)
          this.symMsg.cpmc = res.data.cpmc
          this.symMsg.data = res.data.date
          this.symMsg.fzrtel = res.data.fzrtel
          this.symMsg.sym = res.data.sym
          this.codeUrl = this.baseUrl +'/#/sym/'+this.symMsg.sym
          this.printDialogVisible = true
          this.$nextTick(function() {
                this.qrcode();
                });
          // if(this.isAddInfo){
          //       this.printDialogVisible = true
          //   this.$nextTick(function() {
          //       this.qrcode();
          //   });
          // }else{
          //   this.$nextTick(function(){
          //       this.qrcode();
          //   });
          //  this.print2DialogVisible = true   
          // }
        },
        qrcode() {//这里是调用的方法
      let qrcode = new QRCode("qrcode", {
        width: 135, // 设置宽度
        height: 135, // 设置高度
        text: this.codeUrl
      });
        },
    },
    watch:{
      'isAddInfo':function(){
        console.log(this.isAddInfo)
      }
    }
}
</script>

<style scoped lang="less">
  .printForm{
    // margin: 0 auto;
    // width:500px;
    
  }
  .select-width{
    width: 400px;
  }
  .tit{
    height: 50px;
    line-height: 50px;
    color:#0b73cc;
    text-align: center;
  }
  .large{
    width: 100%;
  }
  .symContainer{
    width: 320px;
    height: 210px;
    border:3px solid #000;
    margin:0 auto;
    position: relative;
  }
  .symContainer2{
     width: 210px;
    height: 210px;
    border:3px solid #000;
    margin:0 auto;
    position: relative;
  }
  .symContainer2 .sym{
    position: absolute;
    top:55px;
    right:37px;
  }
  .sym-tit{
    text-align: center;
    // font-size:20px;
     font-size:17px;
    color:#000;
  }
  .sym{
    position: absolute;
    top:46px;
    right:5px;
  }
  .symInfo{
    font-size:13px;
    width: 180px;
  }
 .symContainer ul li{
    height: 35px;
    padding:10px 0 0 5px;
   }
</style>

