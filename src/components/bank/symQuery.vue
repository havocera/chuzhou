<template>
<div>

     <el-container>
      <div style="min-height:5vw;"></div>
  <el-main class="main_sym">
      <div class="title">溯源码信息查询</div>
      <div class="input"> 
          <input type="text" v-model="query" placeholder="请输入溯源码" class="textfi"><button @click="queryQy" class="btn">查询</button>
      </div>
  </el-main>
  <div class="header2"></div>
  <el-footer class="footer" >
    版权所有：滁州学院<br/>
    技术支持：安徽椒图信息科技有限公司
  </el-footer>
</el-container>

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
          // this.getDataList();
    },
    methods:{
          async getDataList(){
        this.queryInfo.token =this.tokenStr
      const {data:res} = await this.$http.post('SelectBusiness',{query:this.query});
      console.log(res)
      this.tableData = res.data;
      this.total = res.data.length;
      },
      queryQy(){
        this.$router.push({
          path:`/sym/${this.query}`
        })
          // this.getDataList()
        //    this.$notify({
        //   title: '警告',
        //   message: '溯源码信息尚未接入！',
        //   type: 'warning'
        // });
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
      }
    }
  }
</script>

<style>
.header2{
  min-height: 11.6vw;
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
    min-height: 27vw;
    
    margin-bottom: 1vw;
}
.title{
    color: snow !important;
    text-align: center;
    font-size: 2.0vw !important;
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
.footer{
    background-image: url("../../assets/images/footer.png");
    background-size: cover;
    min-height: 80px!important;
    color: seashell;
    padding-top: 30px;
    text-align: center;
}
</style>