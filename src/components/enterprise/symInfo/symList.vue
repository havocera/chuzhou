<template>
  <div style="width:100%;height:100%;position:relative;">

<!-- table -->
 <el-table
    :data="tableData"
    height="550"
    border
    style="width:100%;margin-top:50px;">
     <el-table-column
      prop="cpmc"
      label="产品名称">
    </el-table-column>
    <el-table-column
      prop="chandi"
      label="产地"
      width="180">
    </el-table-column>
    <el-table-column
      prop="pch"
      label="批次号">
    </el-table-column>
       <el-table-column
      prop="sym"
      label="溯源码">
    </el-table-column>
       <el-table-column
      prop="smcs"
      label="扫码次数">
    </el-table-column>
      <el-table-column
      prop="date"
      label="溯源码生成时间"
      width="180">
    </el-table-column>
  </el-table>

<el-pagination
        style="text-align:center;margin-top:10px;"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.page"
        background
        layout="prev, pager, next, total"
        :total="total"
        :page-size="queryInfo.pageSize"
      >
      </el-pagination>

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
        total:0
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
    margin: 0 auto;
    width:500px;
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
    font-size:20px;
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

