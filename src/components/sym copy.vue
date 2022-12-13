<template>
    <div>
          <van-nav-bar title="物联网+区块链食品安全追溯系统" /> 
          <van-notice-bar
  left-icon="volume-o"
  background="#ecf9ff"
  color="#1989fa"
  :text="'欢迎使用物联网+区块链食品安全追溯系统，该产品是由“'+ showInfo.Qy_basic.qymc+'”生产，一物一码真实溯源。'"
/>
          <van-image width="100%" height="200" :src="showInfo.picname" />
          <div class="title">企业档案</div>
          
            <div class="des">
                 <van-divider>企业简介</van-divider>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {{this.showInfo.Qy_basic.dwjj}}
              </p>
                <div style="text-align:center;">
               <van-divider>营业执照</van-divider>
         </div>
          </div>
       
           <van-image 
            width="100%"
            height="25rem"
            fit="contain" 
            :src="showInfo.Qy_basic.qy_pic" />
          <div class="title">产品档案</div>
          <div class="des">
              <van-cell-group>
  <van-cell title="产品名称" :value="showInfo.cpmc" />
  <van-cell title="生产企业" :value="showInfo.Qy_basic.qymc" />
  <van-cell title="产地名称" :value="showInfo.chandi.chandi" />
   <van-cell title="产地地址" :value="showInfo.chandi.detailAddress" />
  <van-cell title="保质期" :value="showInfo.bzq+'天'" />
  <van-cell title="生产日期" :value="showInfo.rq" />
  <van-cell title="包装规格" :value="showInfo.cpgg" />
  <van-cell title="企业电话" :value="showInfo.Qy_basic.fzrtel" />
</van-cell-group>
 <van-divider>产品简介</van-divider>
          </div>
            <!-- <div class="title">产品简介</div> -->
            
            <div class="des">
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {{this.showInfo.ms}}
              </p>
          </div>
            <div class="title">农事作业查询</div>
            <div class="des">
             <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white"  >
                    <van-swipe-item v-for="item in showInfo.nszy" :key="item.index">
                            <van-cell-group >
                                 <van-cell title="农事作业" :value="item.nszy" />
                                  <van-cell title="作业时间" :value="item.rq" />
                                   <van-cell title="投入品名称" :value="item.trpmc" />
                                    <van-cell title="作业量" :value="item.zyl + item.zyldw" />
                                    <van-cell title="作业人" :value="item.zyr" />
                            </van-cell-group>
                    </van-swipe-item>
            </van-swipe>
          </div>
              <div class="title">产地档案</div>
          <div class="des">
              <van-cell-group>
  <van-cell title="产地名称" :value="showInfo.chandi.chandi" />
  <van-cell title="详细地址" :value="showInfo.chandi.detailAddress" />
  <van-cell title="经度" :value="showInfo.chandi.lng" />
  <van-cell title="纬度" :value="showInfo.chandi.lat" />
</van-cell-group>
          </div>
           <div class="title">认证信息</div>
 <div class="des">
               <van-collapse v-model="activeNames">
  <van-collapse-item title="有机认证" name="1">
     
暂未上传认证信息
  </van-collapse-item>
  <van-collapse-item title="绿色认证" name="2">暂未上传认证信息</van-collapse-item>
  <van-collapse-item title="荣誉证书" name="3">
            <van-image 
            width="100%"
            height="200"
            fit="contain" 
            :src="showInfo.honor[0].honor_picture" />
    <!-- <p>上链凭证：{{showInfo.honor[0].honor_hash}}</p> -->
    <van-cell-group>
  <van-cell title="上链凭证：" :value="showInfo.honor[0].honor_hash" />

</van-cell-group>

  </van-collapse-item>
</van-collapse>
 </div>
          <div class="footer"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                sym:'',
                showInfo:{
                },
                 activeNames: ['1'],
            }
        },
        created(){
            // const getRequest =this
                this.getRequest()
        },
        methods:{
            async getRequest(){
             const url = window.location.href
              const  split_url = url.split('/')
            //   console.log(split_url)
              const symNum = split_url[5]
                this.sym = symNum
                const {data:res} =  await this.$http.post(
                    'ShowInformation',
                    {sym:this.sym}
                )
                // console.log(res)
                console.log(res.code)
                if (res.code === -1){
                        this.$router.push('/symReset')
                }else if(res.code === 0){
                    this.showInfo = res.data
                    console.log(this.showInfo)
                }
                
            },
        }
    }
</script>

<style lang="less" scoped>
    .title{
        text-align: center;
        background-color: #259b1f;
        width: 60%;
        height: 40px;
        margin: 0 auto;
        border-radius: 40px;
        line-height: 40px;
        color: #ffffff;
    }
    .des{
        width: 80%;
        margin: 5px auto;
    }
</style>