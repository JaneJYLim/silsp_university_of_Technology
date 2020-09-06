//서브메뉴 구현
$("#mainMenu, #lnb").mouseover(function(){
    $("#lnb").stop().slideDown();
});

$("#mainMenu, #lnb").mouseout(function(){
    $("#lnb").stop().slideUp();
});

//슬라이드이미지
function fnSlide() {
    $("#slideShuttleFrame a:first").animate({"margin-left" : "-1200px"}, 1000, function(){
        $("#slideShuttleFrame a:first").css({"margin-left" : "0"});
        $("#slideShuttleFrame a:first").insertAfter("#slideShuttleFrame a:last");
    });
}

setInterval(fnSlide, 3000);

//모달팝업레이어 구현
$("#bbsNotice tr:first").click(function(){
    $("#modalLayerPopupBg").css({"display" : "block"});
});

$("#layerPopup button").click(function(){
    $("#modalLayerPopupBg").css({"display" : "none"});
});