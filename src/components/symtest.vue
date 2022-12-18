<template>
    <div>
          <van-nav-bar title="物联网+区块链食品安全追溯系统" /> 
          <van-image width="100%" height="200" :src="showInfo.picname" />
          <van-grid :column-num="3">
  <van-grid-item icon="new-arrival" text="产品档案" />
  <van-grid-item icon="wap-home" text="基地档案" />
  <van-grid-item icon="friends" text="企业档案" />
  <van-grid-item icon="cluster" text="溯源信息" />
    <van-grid-item icon="thumb-circle" text="品质认证" />
  <van-grid-item icon="phone-circle" text="联系方式" />
</van-grid>
          <div class="title">企业档案</div>
             <div class="des">
              <van-cell-group>
  <van-cell title="企业名称" :value="showInfo.qymc" />
  <van-cell title="企业类型" :value="showInfo.qylx" />
  <van-cell title="企业性质" :value="showInfo.qyxz" />
  <van-cell title="信用代码" :value="showInfo.xydm" />
</van-cell-group>
 <van-image width="100%" height="200" :src="showInfo.qypic" />
 <van-divider>{{showInfo.qyjj}}</van-divider>
          </div>
            <div class="des">
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {{this.showInfo.dwjj}}
              </p>
          </div>
          <div class="title">产品档案</div>
          <div class="des">
              <van-cell-group>
  <van-cell title="产品名称" :value="showInfo.cpmc" />
  <van-cell title="生产企业" :value="showInfo.qymc" />
  <van-cell title="产地名称" :value="showInfo.chandi" />
  <van-cell title="保质期" :value="showInfo.bzq+'天'" />
  <van-cell title="生产日期" :value="showInfo.rq" />
  <van-cell title="包装规格" :value="showInfo.cpgg" />
  <van-cell title="企业电话" :value="showInfo.fzrtel" />
</van-cell-group>
          </div>
            <div class="title">产品简介</div>
            <div class="des">
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {{this.showInfo.ms}}
              </p>
          </div>
            <div class="title">农事作业查询</div>
            <div class="des">
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  暂无信息
              </p>
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
                    picname:'https://vtracer-prod.oss-cn-hangzhou.aliyuncs.com/vtrace-513/82c9cf743642418a9f8a31a83c2dc92b.png?Expires=4785470734&OSSAccessKeyId=LTAI4Fw7gbJ1VDAmTUM2AYzn&Signature=wi8ohCNcJsWPB1DUvtqc5eNc%2FkU%3D',
                    cpmc:'「月财」有机金果梨',
                    qymc:'安徽惠农科技农业发展有限公司',
                    chandi:'农翠园金果梨种植基地',
                    bzq:'30',
                    rq:'2021-11-16',
                    cpgg:'10kg/箱',
                    fzrtel:'19823459876',
                    qylx:'种植业',
                    xydm:'91310116MA1JA23M51',
                    qyxz:'私营企业',
                    qypic:'https://vtracer-prod.oss-cn-hangzhou.aliyuncs.com/vtrace-admin/7315cff0a7cd4a51a18c0e4a3f1db8f4.png?Expires=4777602350&OSSAccessKeyId=LTAI4Fw7gbJ1VDAmTUM2AYzn&Signature=lLar026IxBdmIqnIrL0lHZ67n38%3D',
                    qyjj:"月财生态集团是一家专注于有机健康生活私人定制、有机肥生物科技、大数据区块链智慧农业的科技创新型企业。"
                }
            }
        },
        created(){
          
        },
        methods:{
        
        }
    }
</script>

<style lang="less" scoped>
    .title{
        text-align: center;
        background-color: #67a5c2;
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