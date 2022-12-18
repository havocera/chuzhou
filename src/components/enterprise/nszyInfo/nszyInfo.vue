<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>农事作业信息</el-breadcrumb-item>
      <el-breadcrumb-item>上传农事作业信息</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区 -->
    <el-card class="box-card">
      <!-- echarts图表盒子 -->
      <div class="nszyChart" ref="nszyChart"></div>
      <!-- 搜索与添加区域 -->
      <el-row :gutter="10">
        <el-col :span="6">
          <el-input
            clearable
            v-model="queryInfo.query"
            @clear="getDataList"
            placeholder="请输入农事作业名称"
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
            >新增农事作业</el-button
          >
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="Refresh"
            >刷新</el-button
          >
        </el-col>
      </el-row>
      <!-- 农事作业列表区域 -->
      <el-table :data="dataInfoList" style="width: 100%">
        <el-table-column label="编号" type="index"></el-table-column>
        <el-table-column label="生产企业名称" prop="qymc"></el-table-column>
        <el-table-column label="产地名称" prop="chandi"></el-table-column>
        <el-table-column label="农事作业" prop="nszy"></el-table-column>
        <el-table-column label="投入品名称" prop="trpmc"></el-table-column>
        <el-table-column label="作业人" prop="zyr"></el-table-column>
        <el-table-column label="作业量" prop="newZyl"></el-table-column>
        <el-table-column label="日期" prop="rq"></el-table-column>
        <el-table-column label="操作" width="150">
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
      <!-- 新增农事作业dialog -->
      <el-dialog
        title="新增农事作业"
        :visible.sync="addDialogVisible"
        width="30%"
      >
        <!-- 表单区 -->
        <el-form ref="addFormRef" :model="addFormInfo" label-width="80px">
          <el-form-item label="产地名称" label-width="100px" prop="chandi">
            <el-select v-model="addFormInfo.cdbh" placeholder="请选择作业地块">
              <el-option :label="item.chandi" v-for="item in selectchandi" :key="item.cdbh" :value="item.cdbh"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="农事作业" label-width="100px" prop="nszy">
            <el-input v-model="addFormInfo.nszy"></el-input>
          </el-form-item>
          <el-form-item label="作业人" label-width="100px" prop="zyr">
            <el-input v-model="addFormInfo.zyr"></el-input>
          </el-form-item>
          <el-form-item label="投入品名称" label-width="100px" prop="trpmc" >
            <el-input v-model="addFormInfo.trpmc"></el-input>
          </el-form-item>
          <el-form-item label="作业量" label-width="100px" prop="zyl">
            <el-input v-model="addFormInfo.zyl"></el-input>
          </el-form-item>
          <el-form-item label="单位" label-width="100px" prop="zyldw">
            <el-input v-model="addFormInfo.zyldw"></el-input>
          </el-form-item>
          <el-form-item label="作业日期" label-width="100px" prop="rq">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="addFormInfo.rq"
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
      <!-- 修改农事作业dialog -->
      <el-dialog
        title="修改农事作业"
        :visible.sync="editDialogVisible"
        width="30%"
      >
        <!-- 表单区 -->
        <el-form ref="editFormRef" :model="editFormInfo" label-width="80px">
          <el-form-item label="产地名称" label-width="100px" prop="chandi">
            <el-select v-model="editFormInfo.cdbh" placeholder="请选择作业地块">
              <el-option :label="item.chandi" v-for="item in selectchandi" :key="item.cdbh" :value="item.cdbh"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="农事作业" label-width="100px" prop="nszy">
            <el-input v-model="editFormInfo.nszy"></el-input>
          </el-form-item>
          <el-form-item label="作业人" label-width="100px" prop="zyr">
            <el-input v-model="editFormInfo.zyr"></el-input>
          </el-form-item>
          <el-form-item label="投入品名称" label-width="100px" prop="trpmc" >
            <el-input v-model="editFormInfo.trpmc"></el-input>
          </el-form-item>
          <el-form-item label="作业量" label-width="100px" prop="zyl">
            <el-input v-model="editFormInfo.zyl"></el-input>
          </el-form-item>
          <el-form-item label="单位" label-width="100px" prop="zyldw">
            <el-input v-model="addFormInfo.zyldw"></el-input>
          </el-form-item>
          <el-form-item label="作业日期" label-width="100px" prop="rq">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="editFormInfo.rq"
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
  data() {
    return {
      option: {
        title: {
          text: "农事作业详情",
          textAlign: "auto",
          left: "center"
        },
        legend: {
          show: false,
          data: ["农事作业记录"]
        },
        tooltip: {
          show: true
        },
        xAxis: {
          type: "category",
          data: [],
          name: "作业人",
          triggerEvent: true
        },
        yAxis: {
          type: "value",
          name: "作业量（条）",
          triggerEvent: true
        },
        series: [
          {
            name: "农事作业记录",
            data: [],
            type: "bar",
            barWidth: "50"
          }
        ]
      },
      tokenStr: "",
      queryInfo: {
        token: "",
        query: "",
        page: 1,
        pageSize:5,
        zyr: ""
      },
      total: 0,
      dataInfoList: [],
      addDialogVisible: false,
      editDialogVisible:false,
      addFormInfo: {
        token:'',
        chandi:'',
        cdbh:'',
        nszy:'',
        zyr:'',
        trpmc:'',
        zyl:'',
        zyldw:'',
        rq:''
      },
      editFormInfo:{

      },
      selectchandi:[]
    };
  },
  created() {
    this.getTokenStr();
    this.getEchatData();
    this.getDataList();
  },
  mounted() {
    this.myChart = this.$echarts.init(this.$refs.nszyChart);
    this.myChart.setOption(this.option);
    this.myChart.on("click", param => {
      // console.log(param.name,this)
      this.queryInfo.zyr = param.name;
      this.getDataList();
    });
  },
  methods: {
    getTokenStr() {
      this.tokenStr = window.sessionStorage.getItem("token");
    },
    // 获取echarts图表的显示数据
    async getEchatData() {
      const { data: res } = await this.$http.post("Countfarmoperation", {
        token: this.tokenStr
      });
      //  console.log(res.data,res.data.map(item=>({value:item.name})))

      this.option.xAxis.data = res.data.map(item => ({ value: item.name }));
      this.option.series[0].data = res.data.map(item => ({
        value: item.value
      }));
      this.myChart.setOption(this.option);
    },
    // 获取农事作业列表显示数据
    async getDataList() {
      this.queryInfo.token = this.tokenStr;
      const { data: res } = await this.$http.post(
        "FarmingoperationsInfo",
        this.queryInfo
      );
      this.dataInfoList = res.data.result;
      this.total = res.data.total;
      console.log(this.dataInfoList)
      //  拼接作业量和单位
      // 这里如果数据删除完 dataInfoList为undifine程序会报错
      if(this.dataInfoList != undefined){
         for(let i=0;i<this.dataInfoList.length;i++){
         this.dataInfoList[i].newZyl = this.dataInfoList[i].zyl + this.dataInfoList[i].zyldw
       }
      }
      //  新增产地，下拉框数据
    const {data:selectRes} =await this.$http.post('SelectPlace',{token:this.tokenStr})
    this.selectchandi = selectRes.data;
      // console.log(res.data,this.selectchandi);
    },
    // 点击翻页重新发起数据请求
    handleCurrentChange(newPage){
        this.queryInfo.page = newPage;
        this.getDataList();
    },
   async addFormSubmit(){
        this.addFormInfo.token = this.tokenStr;
       await this.$http.post("AddFarmingoperationsInfo",this.addFormInfo)
        this.getDataList();
        this.getEchatData();
        this.addDialogVisible = false;
        this.$refs.addFormRef.resetFields();
    },
   async editInfo(id){
     const {data:res} = await this.$http.post("EditFarmingoperationsInfo",{token:this.tokenStr,bh:id})
    //  console.log(res)
      this.editFormInfo = res.data
      this.editDialogVisible = true;
    },
    editFormSubmit(){
      this.editFormInfo.token =this.tokenStr;
    this.$http.post('DoEditFarmingoperationsInfo',this.editFormInfo)
    this.getDataList();
    this.editDialogVisible =false;
    },
   async delInfo(id){
        const confirmRes =await this.$confirm('此操作将永久删除该条农事作业信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(err=>err)
        if(confirmRes !='confirm'){
          return this.$message.info('取消删除')
        }
        const res = await this.$http.post('DelFarmingoperationsInfo',{
            token:this.tokenStr,bh:id
          })
        if(res.status !== 200){
          return this.$message.error('删除农事作业信息失败')
        }
        this.$message.success('删除农事作业信息成功')
        this.getDataList();
        console.log(res)
    },
    // 点击Echart图后需要点击刷新按钮界面重新加载数据
    Refresh(){
      this.queryInfo.zyr =''
      this.getDataList()
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
.nszyChart {
  width: 100%;
  height: 300px;
  // background-color: #ccc;
}
</style>
