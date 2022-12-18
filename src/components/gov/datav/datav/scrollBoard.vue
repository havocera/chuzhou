<template>
  <div id="scroll-board">
    <dv-scroll-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'ScrollBoard',
  data () {
    return {
      config: {
        header: ['时间', '产品信息', '交易数量', '交易金额'],
        data: [
          ['2019-07-01 19:25:00', '六安瓜片', '5', '5023元'],
          ['2019-07-02 17:25:00', '霍山黄牙', '13', '8950元'],
          ['2019-07-03 16:25:00', '岳西翠兰', '6', '3341元'],
          ['2019-07-04 15:25:00', '太平猴魁', '2', '2342元'],
          ['2019-07-05 14:25:00', '黄山毛峰', '1', '298元'],
          ['2019-07-06 13:25:00', '祁门红茶', '3', '3452元'],
          ['2019-07-07 12:25:00', '金寨翠梅', '4', '3453元'],
          ['2019-07-08 11:25:00', '桐城小花', '2', '980元'],
          ['2019-07-09 10:25:00', '泾县特尖', '5', '4560元'],
          ['2019-07-10 09:25:00', ' 涌溪火青', '3', '1243元']
        ],
        index: true,
        columnWidth: [50, 170, 300],
        align: ['center'],
        rowNum: 7,
        headerBGC: '#1981f6',
        headerHeight: 45,
        oddRowBGC: 'rgba(0, 44, 81, 0.8)',
        evenRowBGC: 'rgba(10, 29, 50, 0.8)'
      }
    }
  }
}
</script>

<style lang="less">
#scroll-board {
  width: 50%;
  box-sizing: border-box;
  margin-left: 20px;
  height: 100%;
  overflow: hidden;
}
</style>
