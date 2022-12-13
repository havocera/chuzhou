<template>
  <div id="top-header">
    <!-- <dv-decoration-8 class="header-left-decoration" /> -->
    <dv-decoration-5 class="header-center-decoration" />
    <!-- <dv-decoration-8 class="header-right-decoration" :reverse="true" /> -->
    <div class="center-title">物联网+区块链食品安全追溯系统</div>
      <el-row  :gutter="20" class="menu" >
  
  <el-col :span="10">
    <!-- <dv-decoration-11 class="button" @click.native="togov()">进入系统</dv-decoration-11> -->
  </el-col>
  <el-col :span="10">
    <dv-decoration-11 class="button" @click.native="toout()" >退出</dv-decoration-11>
    </el-col>
 
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  methods:{
    togov(){
      console.log("打开监管系统")
      this.$router.push('cunzhenggov')
    },
    toout(){
      this.$router.push('index')
    }
  }
}
</script>

<style lang="less">
#top-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

  .header-center-decoration {
    width: 40%;
    height: 60px;
    margin: 0 auto;
    margin-top:  30px;
  }

  .header-left-decoration, .header-right-decoration {
    width: 25%;
    height: 60px;
  }

  .center-title {
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
  }
  .menu{
  
    position:absolute;
    width: 29vw;
    right: 1vw;
    text-align:center;
    top: 1vw;
    z-index: 10000;
  }
  .button{
    // position: absolute;
    // right: 24%;
    width: 10vw;
    height: 3vw;
    background: none;
    color: #fff;
   
    

  }
  .button a{
    color: #fff;
  }
}
</style>
