<template>
  <div class="main">
    <iframe style="width:100%;height:100%;" src="static/data.html" id="bdIframe" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
mounted(){
    /**
     * iframe-宽高自适应显示   
     */
    function changeMobsfIframe(){

    
    const oIframe = document.getElementById('bdIframe');
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = (Number(deviceWidth)) + 'px'; //数字是页面布局宽度差值
    oIframe.style.height = (Number(deviceHeight)-4) + 'px'; //数字是页面布局高度差
    }
     changeMobsfIframe()
    window.onresize = function(){
        changeMobsfIframe()
    }
},
onLoad(){

}
}
</script>

<style>
.main{
  overflow: hidden;
}
</style>