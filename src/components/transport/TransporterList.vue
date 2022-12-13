<template>
  <div>
    <el-container class="indexContainer">
    <el-header>
      <el-row type="flex" class="header"  justify="space-between">
  <el-col :span="8">
    <div class="logo">
        <!-- <img src="@/assets/logo.png" width="60px" height="60px" /> -->
        <span style="font-size:20px;color: #fff;">食品安全追溯系统--物流信息查询管理系统</span>
      </div>
    </el-col>
  <el-col :span="12">
    <!-- <el-menu background-color="#1890ff" active-text-color="#ffd04b" text-color="#fff" :router="true" :unique-opened="true" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item :index="item.path" v-for="item in enterpriseMenuList" :key="item.id" > <i  :class="item.icon"></i>{{item.authName}}</el-menu-item>
</el-menu> -->
    </el-col>
  <el-col :span="6">
<!-- <el-button @click="toDaohang" icon="el-icon-back" class="btnLoginOut">返回导航页面</el-button> -->
      <el-button @click="loginOut" icon="el-icon-switch-button" class="btnLoginOut">退出系统</el-button>
  </el-col>
</el-row>
      
    </el-header>
    <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-shopping-bag-1 grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{Num.business}}</div>
                                    <div>企业数量</div>
                                </div>
                                <div class="grid-button">
                                    <!-- <el-button type="text" @click="toproduct">查看详情</el-button> -->
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-s-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{Num.client}}</div>
                                    <div>客户数量</div>
                                </div>
                                   <div class="grid-button">
                                    <!-- <el-button @click="toTrade" type="text">查看详情</el-button> -->
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                       <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-4">
                                <i class="el-icon-truck grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{Num.transport}}</div>
                                    <div>物流信息</div>
                                </div>
                                   <div class="grid-button">
                                    <!-- <el-button @click="totransport" type="text">查看详情</el-button> -->
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
   
    <el-card class="box-card">
    <!-- 搜索与添加区域 -->
      <el-row :gutter="10">
        <el-col :span="6">
          <el-input
            clearable
            v-model="queryInfo.query"
            @clear="getDataList"
            placeholder="请输入企业名称"
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
            >查询企业物流信息</el-button
          >
        </el-col>
      </el-row>
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
        prop="client_firm"
        label="购买方"
        width="180">
      </el-table-column>
      <el-table-column
        prop="client_name"
        label="客户姓名">
      </el-table-column>
      <el-table-column
        prop="client_phone"
        label="客户电话">
      </el-table-column>
      <el-table-column
        prop="client_source"
        label="客户来源">
      </el-table-column>
      <el-table-column
        prop="client_address"
        label="客户地址">
      </el-table-column>
      <el-table-column
        prop="courier_number"
        label="物流单号">
      </el-table-column>
      <el-table-column
        prop="license"
        label="运输车辆">
      </el-table-column>
      <el-table-column
        prop="number"
        label="数量">
      </el-table-column>
      <el-table-column
        prop="order_number"
        label="订单编号">
      </el-table-column>
      <el-table-column
        prop="destination"
        label="目的地">
      </el-table-column>
      <el-table-column
        prop="shiper_phone"
        label="发货地">
      </el-table-column>
        <el-table-column label="操作" width="180px">
          <!-- 插槽自定义样式 -->
          <template slot-scope="scope">
            <el-tooltip effect="dark" content="查看" placement="top-start">
              <el-button
                @click="editInfo(scope.row.id)"
                type="primary"
                icon="el-icon-view"
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
    </el-container>
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
        Num:{

        },
      }
    },
    created(){
        this.tokenStr = window.sessionStorage.getItem('token');
        this.getDataList();
        this.getNumData();
    },
    methods:{
      loginOut() {
      window.sessionStorage.clear()
      this.$router.push('/index')
    },
      async getDataList(){
        this.queryInfo.token =this.tokenStr
      const{data:res} = await this.$http.post('SelectTransportList',this.queryInfo)
      console.log(res.data.result)
      this.tableData = res.data.result
      this.total = res.data.total
      },
     async getNumData(){
        const{data:res} = await this.$http.post('getCountforregulator');
        console.log(res);
        this.Num = res.data;

      },
      // 点击翻页重新发起数据请求
    handleCurrentChange(newPage){
        this.queryInfo.page = newPage;
        this.getDataList();
    },
   async addFormSubmit(){
        await this.$http.post('AddClientInfo',this.addClientInfo)
        this.getDataList();
        this.addDialogVisible =false;
        this.$refs.addFormRef.resetFields();
    },
   async editInfo(id){
        // console.log(id)
     const{data:res} = await this.$http.post('EditClientInfo',{id:id});
     console.log(res.data)
     this.editClientInfo = res.data;
     this.editDialogVisible =true;
    },
   async editFormSubmit(){
     await this.$http.post('DoEditClientInfo',this.editClientInfo)
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
          this.$http.post('DelClientInfo',{
            id:id
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
      
    }

    }
}
</script>

<style scoped lang="less" >
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
  background-color: #1890ff;
  height: 60px;

  align-items: center;
  color: #fff;

}
.indexContainer {
  height: 100%;
}
.el-breadcrumb {
  height: 30px;
}
.el-pagination {
  margin-top: 10px;
}
.el-form .label{
  font-size:15px!important;
}
.mgb20{
  margin-top: 20px;
}
.mgb20 {
    margin-bottom: 20px;
}
.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}
.grid-button{
    width: 80px;
}
.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(45, 140, 240);
}
.grid-con-4 .grid-con-icon {
    background: rgb(85, 67, 242);
}

.grid-con-4 .grid-num {
    color: rgb(45, 140, 240);
}
</style>

