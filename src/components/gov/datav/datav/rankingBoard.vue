<template>
  <div id="ranking-board">
    <div class="ranking-board-title">产品销售数量排行榜</div>
    <dv-scroll-ranking-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'RankingBoard',
  data () {
    return {
      config: {
        data: [
          {
            name: '六安瓜片',
            value: 55
          },
          {
            name: '金寨翠梅',
            value: 120
          },
          {
            name: '黄山毛峰',
            value: 78
          },
          {
            name: '太平猴魁',
            value: 66
          },
          {
            name: '祁门红茶',
            value: 80
          },
          {
            name: '霍山黄牙',
            value: 45
          },
          {
            name: '岳西翠兰',
            value: 29
          },
          {
            name: '桐城小花',
            value: 29
          },
          {
            name: '泾县特尖',
            value: 29
          }
        ],
        rowNum: 9
      }
    }
  }
}
</script>

<style lang="less">
#ranking-board {
  width: 20%;
  box-shadow: 0 0 3px blue;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  box-sizing: border-box;
  padding: 0px 30px;

  .ranking-board-title {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .dv-scroll-ranking-board {
    flex: 1;
  }
}
</style>
