$(function() {
    $(".flexslider").flexslider({
		slideshowSpeed: 5000, //展示时间间隔ms
		animationSpeed: 500, //滚动时间ms
		touch: true //是否支持触屏滑动
	});
});	
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $(".nav").addClass("f-nav");
        $(".button1").css("color","#575757");
    } else {
        $(".nav").removeClass("f-nav");
        $(".button1").css("color","white");
    }
});
var s = skrollr.init();
$(".button1").mouseleave(
  function(){
    $(this).css("border-bottom","solid 7px transparent");
  }
);
$(".button1").mouseenter(
  function(){
    $(this).css("border-bottom","solid 7px #c9753d");
  }
);
$(".pic2").click(
  function(){
   $(".flex2").css("opacity","1");
   $(".flex3").css("opacity","0");
   $(".flex").css("opacity","0");
   $(".flex4").css("opacity","0");
   $("h1").html("製麴工廠");
   $("h3").html("麴是釀酒發酵過程中非常重要的元素喔!<br>為讓高粱酒好好發酵產生香氣，<br>麴的製作過程可以說是相當複雜的，<br>要將小麥壓碎、加水、壓塊、培麴等等，<br>不僅要控管溫度還有時間，<br>還要隨時注意培麴的程度，<br>想要一探究竟小麥的變聲過程嗎?<br>那你絕對不能錯過這裡!");
  $("p").css("top","52%")
  $("p").html("導覽服務:<br>＊定時導覽：每日上午10:00、11:00下午14:00、15:00<br>於觀光工廠服務台開始導覽。<br>＊團體導覽：團體到訪一律導覽，可能與定時導覽合併。<br>＊預約導覽：如需參觀高粱酒製程，團體可預約。<br>地址：嘉義縣民雄鄉福樂村中山路4號<br>開放時間：每日上午8：30～下午17：00 星期日、例假日均開放")
 }
);
$(".pic3").click(
  function(){
   $(".flex").css("opacity","1");
   $(".flex2").css("opacity","0");
   $(".flex3").css("opacity","0");
   $(".flex4").css("opacity","0");
   $("h1").html("玉山高粱酒文化園區");
   $("h3").html("來到嘉義酒廠除了可以帶走酒類的知識，<br>也可以帶一些伴手禮回去喔，<br>文化園區內展示歷年來得獎、<br>或是具有歷史意義的酒瓶，<br>在牆上也是滿滿的故事讓你滿是收穫，<br>裡面也有販賣食品的部門，<br>都是利用在地食材製作的，美味且富有創意，<br>歡迎大家一同尋寶去!");
  $("p").css("top","52%")
  $("p").html("導覽服務:<br>＊定時導覽：每日上午10:00、11:00下午14:00、15:00<br>於觀光工廠服務台開始導覽。<br>＊團體導覽：團體到訪一律導覽，可能與定時導覽合併。<br>＊預約導覽：如需參觀高粱酒製程，團體可預約。<br>地址：嘉義縣民雄鄉福樂村中山路4號<br>開放時間：每日上午8：30～下午17：00 星期日、例假日均開放")
 }
);
$(".pic1").click(
  function(){
   $(".flex").css("opacity","0");
   $(".flex2").css("opacity","0");
   $(".flex3").css("opacity","0");
   $(".flex4").css("opacity","1");
   $("h1").html("高粱酒工廠");
   $("h3").html("你或許知道酒的濃度很高、顏色是透明的<br>但是你絕對不知道的是<br>一瓶瓶高粱酒是由一群辛苦的師傅親手製作而成的，<br>不僅僅需要人工攪拌、清洗，<br>還有很多艱難的步驟是機器無法取代的，<br>因為有這些師傅的付出，<br>才使得嘉義酒具有濃濃得人情味，<br>就讓我們一同前往拜訪這些偉大的師傅吧!");
  $("p").css("top","52%")
  $("p").html("導覽服務:<br>＊定時導覽：每日上午10:00、11:00下午14:00、15:00<br>於觀光工廠服務台開始導覽。<br>＊團體導覽：團體到訪一律導覽，可能與定時導覽合併。<br>＊預約導覽：如需參觀高粱酒製程，團體可預約。<br>地址：嘉義縣民雄鄉福樂村中山路4號<br>開放時間：每日上午8：30～下午17：00 星期日、例假日均開放")
 }
);