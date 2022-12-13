<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>检测信息上传</el-breadcrumb-item>
      <el-breadcrumb-item>检测信息自动上传</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区 -->
    <el-card class="box-card">
      <!-- 搜索与添加区域 -->
      <el-row :gutter="10">
        <el-col :span="6">
          <!-- 时间选择器 -->
          <!-- <el-date-picker
      format="yyyy-MM-dd"
       value-format="yyyy-MM-dd"
      v-model="selectTime"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker> -->
     <el-date-picker
      v-model="selectTime"
      value-format="yyyy-MM-dd HH:mm:ss"
      type="datetimerange"
      align="right"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['00:00:00', '23:59:59']">
    </el-date-picker>
        </el-col>
      <el-col :span="3">
          <el-button type="primary" @click="submitQueryTime" icon="el-icon-search"> 搜索</el-button>
      </el-col>
      </el-row>
      <!-- 数据列表 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="编号" type="index"> </el-table-column>
        <el-table-column prop="qymc" label="企业名称" width="180">
        </el-table-column>
        <el-table-column prop="pch" label="批次号"> </el-table-column>
        <el-table-column prop="jcnr" label="检测内容"> </el-table-column>
        <el-table-column prop="jcz" label="检测值"> </el-table-column>
        <el-table-column prop="szdw" label="数值单位"> </el-table-column>
        <el-table-column prop="jcjg" label="检测结果"> </el-table-column>
        <el-table-column prop="ybmc" label="检测样本名称"> </el-table-column>
        <el-table-column prop="jcdd" label="检测地点"> </el-table-column>
        <el-table-column prop="yjbz" label="依据标准"> </el-table-column>
        <el-table-column prop="xlz" label="限量值"> </el-table-column>
        <el-table-column prop="szdw" label="数值单位"> </el-table-column>
        <el-table-column prop="rq" label="检测日期"> </el-table-column>
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
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tokenStr: "",
      queryInfo: {
        token: "",
        query: "",
        startTime:'',
        endTime:'',
        page: 1,
        pageSize: 5
      },
      total: 0,
      tableData: [],
      selectTime:[]
    };
  },
  created() {
    this.getTokenStr();
    this.getDataList();
  },
  methods: {
    getTokenStr() {
      this.tokenStr = window.sessionStorage.getItem("token");
    },
    async getDataList() {
      this.queryInfo.token = this.tokenStr;
      const { data: res } = await this.$http.post(
        "AutoDetectionInfo",
        this.queryInfo
      );
      console.log(res);
      this.total = res.data.total;
      this.tableData = res.data.result;
    },
    handleCurrentChange(newPage) {
      this.queryInfo.page = newPage;
      this.getDataList();
    },
 async submitQueryTime(){
      console.log(this.selectTime)
      this.queryInfo.token = this.tokenStr;
      this.queryInfo.startTime=this.selectTime[0];
      this.queryInfo.endTime = this.selectTime[1];
 await this.$http.post('AutoDetectionInfo',this.queryInfo)
    this.getDataList();
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
</style>
