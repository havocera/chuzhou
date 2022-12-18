<template>
        <div>
         <el-card>
    <el-backtop >
       <div>返回顶部</div>
  </el-backtop>
   
    <div slot="header" class="clearfix">
<el-page-header @back="goback" content="产品证书详情页面">
</el-page-header>
    </div>
    <!-- 产品列表 -->

      <!-- 卡片视图区 -->
    <el-card class="box-card">
                   <el-row :gutter="20">
  <el-col  v-for="item in zhengshuList" :key="item.id" :span="8"> 
      <el-image 
    style="width:100%;"
    :src="item.pic_name" 
    :preview-src-list="qySrcList">
  </el-image>
  <div class="grid-content bg-purple">
   <el-tag type="success">上链凭证：{{item.hash_code}}</el-tag>
      </div></el-col>
  <!-- <el-col :span="6">
        <el-image 
    style="width:100%;"
    :src="qySrcList[1]" 
    :preview-src-list="qySrcList">
  </el-image>
      <div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col> -->
</el-row>
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
       url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ],
        qySrcList:[],
        zhengshuList:[]
     }
    },
    created(){
            this.getproductlist();
    },
    methods:{
        async getproductlist(){
             this.qydm = this.$route.query.qydm;
            const{data:res} = await this.$http.post('getLicenseByQydm',{qydm:this.qydm,page:this.queryInfo.current_page});
            console.log(res)
            // this.qySrcList.push(res.data[0].license_name);
            // 遍历数组，把图片重新插入新数组
            res.data.forEach(item => {
                   this.qySrcList.push(item.pic_name);
            });
            this.zhengshuList = res.data;
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