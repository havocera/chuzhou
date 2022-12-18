<template>
        <div>
         <el-card>
    <el-backtop >
       <div>返回顶部</div>
  </el-backtop>
   
    <div slot="header" class="clearfix">
<el-page-header @back="goback" content="溯源码详情页面">
</el-page-header>
    </div>
    <!-- 产品列表 -->

      <!-- 卡片视图区 -->
    <el-card class="box-card">
      <!-- 搜索与添加区域 -->
      <!-- <el-row :gutter="10">
        <el-col :span="6">
          <el-input @clear="getproductList"  clearable placeholder="请输入内容" class="input-with-select" v-model="queryInfo.query">
            <el-button slot="append" icon="el-icon-search" @click="queryMsg"></el-button>
          </el-input>
        </el-col>
      </el-row> -->
      <!-- 产品列表区域 -->
      <el-table
       :data="productList" style="width: 100%">
        <el-table-column label="编号" type="index"></el-table-column>
        <el-table-column prop="cpmc" label="产品名称" width="180">
        </el-table-column>
        <el-table-column prop="chandi" label="产地信息" width="180">
        </el-table-column>
        <el-table-column prop="pch" label="批次号" width="140">
        </el-table-column>
           <el-table-column prop="date" label="生成日期" width="140">
        </el-table-column>
           <el-table-column prop="sym" label="溯源码" >
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

</el-card>
        </div>
</template>

<script>
export default {
    data(){
        return{
            qydm:'',
              // 获取产品列表的参数对象
      queryInfo: {
        query: "",
        // 每页显示多少条
        pageSize:7,
        // 当所处页数
        current_page: 1
      },
      total:0,
      productList:[],
        }
    },
    created(){
            this.getproductlist();
    },
    methods:{
        async getproductlist(){
             this.qydm = this.$route.query.qydm;
            const{data:res} = await this.$http.post('getSymByQydm',{qydm:this.qydm,page:this.queryInfo.current_page});
            console.log(res)
            this.productList = res.data.result;
            this.total = res.data.total;
        },
          goback(){
            this.$router.back(-1)
        },
        handleCurrentChange(page){
            this.queryInfo.current_page = page;
            this.getproductlist();
        }
    }
}
</script>

<style>

</style>