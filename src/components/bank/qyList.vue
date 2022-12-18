<template>
<div>

     <el-container>
      <el-header class="el-h">
      <el-row type="flex" class="header"  justify="space-between">
  <el-col :span="8">
    <div class="logo">
        <!-- <img src="@/assets/logo.png" width="60px" height="60px" /> -->
        <span style="font-size:20px;color: #fff;">食品安全追溯系统--监管系统</span>
      </div>
    </el-col>
  <el-col :span="12">

    </el-col>
  <el-col :span="6">

      <el-button @click="loginOut" icon="el-icon-switch-button" class="btnLoginOut">退出系统</el-button>
  </el-col>
</el-row>
      
    </el-header>
  <el-main class="main_sym">
      <div class="title">企业信息查询</div>
      <div class="input"> 
          <input type="text" v-model="query" placeholder="请输入企业名称" class="textfi"><button @click="queryQy" class="btn">查询</button>
      </div>
  </el-main>

</el-container>

 <!-- 数据列表 -->
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="index"
        label="编号"
      >
      </el-table-column>
      <el-table-column
        prop="qymc"
        label="企业名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="fzr"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="fzrtel"
        label="联系电话">
      </el-table-column>
      <el-table-column
        prop="addr"
        label="企业地址">
      </el-table-column>
     
        <!-- <el-table-column label="操作" width="180px">
         
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="编辑" placement="top-start">
              <el-button
                @click="editInfo(scope.row)"
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
        </el-table-column> -->
        <!-- <el-table-column label="数据分析" width="180px">
        
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="数据分析" placement="top-start">
              <a href="javascript:viod();"  @click="opendata(scope.row.qydm);return false;">数据分析<i class="el-icon-arrow-right"></i></a>
            </el-tooltip>
            
          </template>
        </el-table-column> -->

               <el-table-column label="查看详情" width="180px">
          <!-- 插槽自定义样式 -->
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="查看详情" placement="top-start">
              <!-- <el-button
                @click="editInfo(scope.row)"
                type="primary"
                icon="el-icon-edit"
              ></el-button> -->
              <a href="javascript:viod();"  @click="opendetail(scope.row.qydm);return false;">查看详情<i class="el-icon-arrow-right"></i></a>
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
</div>
 
</template>

<script>
  export default {
    data() {
      return {
          tokenStr:'',
        queryInfo:{
          token:'',
          query:'',
          page:1,
          pageSize:5
        },
        query:'',
        total:0,
        tableData:[],
      }
    },
    created(){
          this.getDataList();
    },
    methods:{
      loginOut() {
      window.sessionStorage.clear()
      this.$router.push('/index')
    },
          async getDataList(){
        this.queryInfo.token =this.tokenStr
      const {data:res} = await this.$http.post('SelectBusiness',{query:this.query});
      console.log(res)
      this.tableData = res.data;
      this.total = res.data.length;
      },
      queryQy(){
          this.getDataList()
      },
      opendetail(qydm){
            console.log(qydm)
          // 通过query来传参
            this.$router.push({
              path:'bankqyinfo',
              query:{
                  qydm:qydm
              }
            })
      },
           opendata(qydm){
            console.log(qydm)
          // 通过query来传参
            this.$router.push({
              path:'bankqyanalysis',
              query:{
                  qydm:qydm
              }
            })
      }
    }
  }
</script>

<style lang="less" scoped>
.el-h{
  background-color: #1890ff;
  height: 60px;

  align-items: center;
  color: #fff;
  .logo{
  font-size: 1.2vw;
}
.header{
  height: 60px;
  line-height: 60px;
  font-size: 20px;
}
.el-submenu {
  text-align: left;
}
.btnLoginOut {
  color: #fff;
  background-color: #1890ff;
  border: none;
}
.btnLoginOut:hover{
  background: hsla(0,0%,100%,.3);
}
.el-menu {
  border-right: none;
}
.el-header {
  

}
}
.header{
    font-weight: 700;
    font-size: 2.0vw;
    line-height: 4rem;
    font-family: Microsoft YaHei;
    color: #2c3e50;
    min-height: 5vw;
}
.main_sym{
    background-image: url("../../assets/images/selectsym2.png");
    background-size: cover;
    min-height: 10vw;
    margin-bottom: 1vw;
}
.title{
    color: snow !important;
    text-align: center;
    font-size: 1.5vw !important;
}
.input{
    text-align: center;
    margin-top: 3vw;

}
.textfi{
    background:rgba(255, 255, 255, 0.75);
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 25vw;
    height: 2.7vw;
    padding-left: 5px;
}
.btn{
    box-sizing: border-box;
    /* padding: 14px 34px; */
    font-size: 1vw;
    color: #fff;
   
    width: 6vw;
    height: 3vw;
    background: #44d981;
    border-radius: 8px;
    cursor: pointer;
}

</style>