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
                  <div class="symtitle">产地档案</div>
          <div class="des">
              <van-cell-group>
  <van-cell title="产地名称" :value="showInfo.chandi.chandi" />
  <van-cell title="产地地址" :value="showInfo.chandi.detailAddress" />
  <van-cell title="经度" :value="showInfo.chandi.lng" />
  <van-cell title="纬度" :value="showInfo.chandi.lat" />
  <van-cell title="土壤温度" value="14.8℃" />
  <van-cell title="土壤湿度" value="16.3%" />
  <van-cell title="PH值" value="5.9" />
    <van-collapse v-model="activeNames">
  <van-collapse-item title="产地图" name="99">
            <van-image 
            width="100%"
            height="200"
            fit="contain" 
            :src="showInfo.Qy_basic.qy_pic" />
    <!-- <p>上链凭证：{{showInfo.honor[0].honor_hash}}</p> -->
    <van-cell-group>

</van-cell-group>

  </van-collapse-item>
</van-collapse>
  
</van-cell-group>
          </div>

           <div class="symtitle">产品档案</div>
                 <div class="des">
              <p style="font-family:楷体;">&nbsp;&nbsp;&nbsp;
                  {{this.showInfo.ms}}
              </p>
          </div>
          <div class="des">
              <van-cell-group>
  <van-cell title="产品名称" :value="showInfo.cpmc" />
  <van-cell title="生产企业" title-style="width:50px;!important" value-class="rightcell" :value="showInfo.Qy_basic.qymc" />
  <van-cell title="生产日期" :value="showInfo.rq" />
   <van-cell title="包装规格" :value="showInfo.cpgg" />
     <van-cell title="保质期" :value="showInfo.bzq+'月'" />
  <van-cell title="企业电话" :value="showInfo.Qy_basic.fzrtel" />
   <van-cell title="非遗传承人" value="省级" />
   <van-collapse v-model="activeNames">
       <van-cell title="产品检验" value="合格" />
  <van-collapse-item title="检验报告" name="2">
<van-image  width="100%"
  height="200" :src="jianceImg">
  <template v-slot:error>暂未上传检验报告</template>
</van-image>
  </van-collapse-item>
</van-collapse>
 
</van-cell-group>

    <div class="symtitle">企业认证</div>
 <div class="des" style="width:100%;">
               <van-collapse v-model="activeNames">
  <van-collapse-item title="有机认证" name="3">
 <van-image 
            width="100%"
            height="200"
            fit="contain" 
            :src="youjiImg" />
  </van-collapse-item>
  
  <!-- <van-collapse-item title="三品一标" name="4">暂未上传认证信息</van-collapse-item> -->

  <van-collapse-item title="绿色食品" name="6">  
    暂未上传认证信息
    <!-- <van-image 
            width="100%"
            height="200"
            fit="contain" 
            :src="lvseImg" /> -->
    </van-collapse-item>
      <van-collapse-item title="无公害农产品" name="5">暂未上传认证信息</van-collapse-item>
  <!-- <van-collapse-item title="有机食品" name="7"> </van-collapse-item> -->
  <van-collapse-item title="农产品地理标志" name="8">
     <!-- <van-image 
            width="100%"
            height="200"
            fit="contain" 
            :src="dlbzImg" /> -->
            暂未上传认证信息
  </van-collapse-item>
  
  <van-collapse-item title="生态原产地保护产品（PEOP）" name="9">
      <van-image 
            width="100%"
            height="200"
            fit="contain" 
            :src="dlbzImg" />
  </van-collapse-item>

</van-collapse>
 </div>

          </div>
 <div class="symtitle">销售地图</div>
<div id="main" style="width:100%;height:300px;" ref="myChart">

</div>
    </div>
</template>

<script>
// import * as echarts from 'echarts';
// import echarts from "echarts";
import "../assets/js/china.js"
    export default {
        data(){
            return{
                sym:'',
                showInfo:{
                },
                 activeNames: ['1'],
                 youjiImg:'',
                 lvseImg:'',
                 dlbzImg:'',
                 wghImg:'',
                 jianceImg:''
            }
        },
        created(){
            // const getRequest =this
                this.getRequest()
                // this.drawMap();      
        },
        mounted(){
              // this.setTimeout(this.drawLine(),3000);
              setTimeout(()=>{
                this.drawLine();
              },1000)
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
                    this.showInfo = res.data;
                    
                    console.log(this.showInfo)
                    if(res.data.jcxx!= null ){
                      this.jianceImg = res.data.jcxx.picture;
                    };
                     if(res.data.dlbz!= null ){
                      this.dlbzImg =res.data.dlbz.license_pic;
                    };
                        if(res.data.youji!= null ){
                     this.youjiImg =res.data.youji.license_pic;
                    };
                    if(res.data.lvse!= null ){
                    this.lvseImg =res.data.lvse.license_pic;
                    };
                     if(res.data.wgh!= null ){
                     this.wghImg =res.data.wgh.license_pic;
                    };
                      
                     
                      
                }
            },
             drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(this.$refs.myChart)
        // 绘制图表
   let option = {
        tooltip: {
          show: false
        },
        geo: {
          map: "china",
          roam: false,// 一定要关闭拖拽
          zoom: 1.23,
          center: [105, 36], // 调整地图位置
          label: {
            normal: {
              show: false, //关闭省份名展示
              fontSize: "10",
              color: "rgba(0,0,0,0.7)"
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: "#0d0059",
              borderColor: "#389dff",
              borderWidth: 1, //设置外层边框
              shadowBlur: 5,
              shadowOffsetY: 8,
              shadowOffsetX: 0,
              shadowColor: "#01012a"
            },
            emphasis: {
              areaColor: "#184cff",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 5,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        },
        series: [
          {
            type: "map",
            map: "china",
            roam: false,
            zoom: 1.23,
            center: [105, 36],
            // geoIndex: 1,
            // aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              }
            },
            itemStyle: {
              normal: {
                areaColor: "#0d0059",
                borderColor: "#389dff",
                borderWidth: 0.5
              },
              emphasis: {
                areaColor: "#17008d",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 5,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
   myChart.setOption(option);

  //  打点
     var dataValue = this.dealWithData();
      var data1 = dataValue.splice(0, 6);
      var option2 = {
        series: [
          {
            type: "map",
            map: "china",
            roam: false,
            zoom: 1.23,
            center: [105, 36],
            // geoIndex: 1,
            // aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                areaColor: "#0d0059",
                borderColor: "#389dff",
                borderWidth: 0.5
              },
              emphasis: {
                areaColor: "#17008d",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 5,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          },
          {
            name: "",
            type: "scatter",
            coordinateSystem: "geo",
            data: dataValue,
            //   symbolSize: function(val) {
            //     return val[2] / 10;
            //   },
            symbol: "circle",
            symbolSize: 8,
            hoverSymbolSize: 10,
            tooltip: {
              formatter(value) {
                return value.data.name + "<br/>" + "设备数：" + "22";
              },
              show: true
            },
            encode: {
              value: 2
            },
            label: {
              formatter: "{b}",
              position: "right",
              show: false
            },
            itemStyle: {
              color: "#0efacc"
            },
            emphasis: {
              label: {
                show: false
              }
            }
          },
          {
            name: "Top 5",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: data1,
            symbolSize: 15,
            tooltip: {
              show: false
            },
            encode: {
              value: 2
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
              color: "#0efacc",
              period: 9,
              scale: 5
            },
            hoverAnimation: true,
            label: {
              formatter: "{b}",
              position: "right",
              show: true
            },
            itemStyle: {
              color: "#0efacc",
              shadowBlur: 2,
              shadowColor: "#333"
            },
            zlevel: 1
          }
        ]
      };
      myChart.setOption(option2);
             },
            // 打点数据
 dealWithData() {
      var geoCoordMap = {
        福建: [119.3, 26.08],
        北京: [116.46, 39.92],
        合肥: [117.27, 31.86],
        杭州: [120.19,30.26],
       
      };
      var data = [];
      for (var key in geoCoordMap) {
        data.push({ name: key, value: geoCoordMap[key] });
      }
      return data;
    }
        }
    }
</script>

<style lang="less" scoped>
    .symtitle{
        text-align: center;
        // background-color: #259b1f;
        font-size: 20px;
        width: 60%;
        height: 40px;
        margin: 0 auto;
        // border-radius: 40px;
        line-height: 40px;
        // color: #ffffff;
        color: #000 !important;
        font-weight: bold;
    }
    .des{
        width: 80%;
        margin: 5px auto;
    }
    .rightcell{
      width:150px;
    }
    .van-cell-font-size{
          font-size: 10px;
    }
</style>