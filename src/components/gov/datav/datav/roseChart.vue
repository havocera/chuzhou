<template>
  <div id="rose-chart">
     <!-- <div class="rose-chart-title">累计计量资金分布</div> -->
     <div id="hb_map" class="dv-charts-container map"></div>
    <!-- <ve-map :data="chartData" :settings="chartSettings" style="padding-left:10%"  width="90%" height="100%"></ve-map> -->
  </div>
</template>

<script>
import * as echarts from 'echarts';
import '../../../../assets/js/anhui';
export default {
  name: 'RoseChart',
  data () {
    this.chartSettings = {
        position: '安徽',
         itemStyle: {
          normal: {
            borderColor: '#26ce89',
            areaColor:'#030c4d'
          },
          emphasis: {
              areaColor: '#006bfa',
              color:'#26ce89'
            },
        },
        label: {

      show: true,

      fontSize: 14,

        color: "#26ce89",
        emphasis: {
              show: false,
            },

},
      }
    return {
      chartData:{},
      
    }
  },
  // created(){
  //   this.initEcharthbMap
  // },
  methods: {
    async createData () {
      // const {data:res} =await this.$http.post('getLngLat')
      // var geoCoordMap = new Array();
      //       var convertData2 = new Array();
      //       let data =res.data
            
      //       for (var i = 0; i < data.length; i++) {
                
      //           geoCoordMap[i] = [data[i]['lng'], data[i]['lat']];//name:value临泉县:Array[2]
         
      //           var convertData1 = {};
      //           convertData1['gfc_name'] = data[i]['qyname'];
      //           convertData2[i] = convertData1
      //       }
           
          //  this.dt1(geoCoordMap, convertData2);
          this.dt1()
    },
    initEcharthbMap() {
				let hbDiv = document.getElementById('hb_map');
				let hbChart = echarts.init(hbDiv);
				hbChart.setOption(this.hboptions);
			},
      dt1(){
        let myChart = echarts.init(document.getElementById('hb_map'));
    var convertData = function (data) {
        var res = [];
        for (var i = 1; i <geoCoordMap.length; i++) {
            var geoCoord = geoCoordMap[i];
           // alert(geoCoord.concat(data[1]));
           //  console.log(geoCoord);
            if (geoCoord) {
                res.push({
                    name: data[i].gfc_name,
                    value: geoCoord.concat(data[i])
                });
            }
            // console.log(res)
        }
        console.log(res)
        return res;
    };

     let option = {
        color:['#F46827'],//244,104,39
        legend: {
            orient: 'horizontal',
            right: '0',
            top:'60',
            data: ['溯源注册企业'],
            textStyle:{
                color:'#ffffff',
                fontSize: 26
            },
            icon:'circle',
        },
        geo: {
            show: true,
            map: '安徽',
            zoom:1.2,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true,
                }
            },
            roam: false,//地图设置不可拖拽，固定的
            itemStyle: {
                normal: {
                    areaColor: 'rgb(77,153,252)',//#031525
                    shadowColor: '#1541c1',
                    borderWidth:0,
                    shadowBlur: 10
                },
            },
        },
        series: [
            {
                type: 'map3D',
                map: '安徽',
                zoom:1.2,
                geoIndex: 1,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: true,
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: 'rgb(77,153,252)',//#030c4d
                        borderColor: '#1541c1',
                        borderWidth: 1
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
            },
           /* {
                name: '溯源平台注册企业',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(convertData2),
                symbolSize: 5,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                }
            },*/
            // {
            //     name: '散点',
            //     type: 'scatter',
            //     coordinateSystem: 'geo',
            //     data: convertData(convertData2),
            //     symbolSize:  7,//点的大小
            //     label: {
            //         normal: {
            //             formatter: '{b}',
            //             position: 'right',
            //             show: false
            //         },
            //         emphasis: {
            //             show: true
            //         }
            //     },
            //     itemStyle: {
            //         normal: {
            //             /*color: '#ddb926'*/
            //             show: false
            //         }
            //     },
            //     tooltip: {
            //         trigger: 'item',
            //         formatter: function(params) {
            //             return params.name + ' : ' + params.value[2];
            //         }
            //     },
            // }

        ],
    };
myChart.setOption(option,true);
    // window.addEventListener("resize",function(){
    //     myChart.resize();
    // });
}
   
  },
  mounted () {
    const { createData } = this

    createData()
  this.dt1()
    setInterval(createData, 30000)
  }
}
</script>

<style lang="less">
#rose-chart {
  width: 60%;
  height: 100%;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  box-sizing: border-box;

  .rose-chart-title {
    height: 50px;
    font-weight: bold;
    text-indent: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }

.map{
  width: 100%;
  height: 100%;
}
  .dv-charts-container {
    height: calc(~"100% - 50px");
  }
}
</style>
