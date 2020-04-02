$(".people").mouseenter(
 function(){
   $(this).css("animation","ani2 2s infinite");
 }
);
$(".people").mouseleave(
 function(){
   $(this).css("animation","ani 2s infinite");
 }
);
$(".button3").mouseenter(
 function(){
   $(this).css("border-bottom","solid 7px #00f2ff")
 }
);
$(".button3").mouseleave(
 function(){
   $(this).css("border-bottom","solid 7px transparent")
 }
);
$(".button1").click(
 function(){
   $(".say2").css("visibility","visible");
   $(".vedio").css("visibility","visible");
   $(".centered").css("visibility","visible");
   $(".back").css("visibility","visible");
   $(this).css("visibility","hidden");
   $(".button2").css("visibility","hidden");
 }
);
$(".close").click(
 function(){
   $(".black_box").css("visibility","hidden");
   $(".centered1").css("visibility","hidden");
   $(".page1").removeClass("page_show");
   $(".page1").css("transition","all 0.00000001s ease");
   // $(".page2").removeClass("page_show");
   $(".page2").css("transition","all 0.00000001s ease");
   // $(".page3").removeClass("page_show");
   $(".page3").css("transition","all 0.00000001s ease");
   // $(".page4").removeClass("page_show");
   $(".page4").css("transition","all 0.00000001s ease");
   // $(".page5").removeClass("page_show");
   $(".page5").css("transition","all 0.00000001s ease");
   // $(".book-cover1").removeClass("page_show");
   $(".book-cover1").css("transition","all 0.00000001s ease");
   // $(".book-bg1").removeClass("page_show");
   $(".book-bg1").css("transition","all 0.00000001s ease");
   $(".vi").css("visibility","hidden")
   $(".page1").css("visibility","hidden")
   $(".page2").css("visibility","hidden")
   $(".page3").css("visibility","hidden")
   $(".page4").css("visibility","hidden")
   $(".page5").css("visibility","hidden")
   $(".book-bg1").css("visibility","hidden")
   $(".book-cover1").css("visibility","hidden")
 }
);
$(".centered").click(
 function(){
   $(".black_box").css("visibility","visible");
   $(".centered1").css("visibility","visible");
   // $(".page1").addClass("page_show");
   // $(".page2").addClass("page_show");
   // $(".page3").addClass("page_show");
   // $(".page4").addClass("page_show");
   // $(".page5").addClass("page_show");
   // $(".book-cover1").addClass("page_show");
   // $(".book-bg1").addClass("page_show");
   // $(".book-cover1").addClass("page_show");
   $(".book-cover1").css("transition","all 0.000000001s ease");
   $(".black_box").css("width","1200px");
   // $(".book-cover1").css("visibility"."visible");
 }
);
$(".vedio").click(
 function(){
   $(".black_box").css("visibility","visible");
   $(".vi").css("visibility","visible");
 }
);
$(".book-cover1").click(
 function(){
  $(this).css("transform", "rotateY(-180deg)");
  $(this).css("visibility", "hidden");
  $(".page1").css("transform", "rotateY(-180deg)");
  $(".page1").css("visibility", "visible");
  }
);
$(".page1").click(
 function(){
  $(this).css("transform", "rotateY(0deg)");
  $(this).css("visibility", "hidden");
  $("page2").css("visibility", "hidden");
  $(".book-cover1").css("transform", "rotateY(0deg)");
  $(".book-cover1").css("visibility", "visible");
  $(".book-cover1").css("transition-delay","0.33s");
  }
);
$(".page2").click(
 function(){
  $(this).css("transform", "rotateY(-180deg)");
  $(this).css("visibility", "hidden");
  $(".page3").css("transform", "rotateY(-180deg)");
  $(".page3").css("visibility", "visible");
  $(".page1").css("visibility", "hidden");
  $(".book-cover1").css("visibility", "hidden");
  }
);
$(".page3").click(
 function(){
  $(this).css("transform", "rotateY(0deg)");
  $(this).css("visibility", "hidden");
  $(".page2").css("transform", "rotateY(0deg)");
  $(".page2").css("visibility", "visible");
  $(".page1").css("visibility", "visible");
  }
);
$(".page4").click(
 function(){
  $(this).css("transform", "rotateY(-180deg)");
  $(this).css("visibility", "hidden");
  $(".page5").css("transform", "rotateY(-180deg)");
  $(".page5").css("visibility", "visible");
  $(".book-bg1").css("visibility", "visible");
  $(".page3").css("visibility", "hidden");
  }
);
$(".page5").click(
 function(){
  $(this).css("transform", "rotateY(0deg)");
  $(this).css("visibility", "hidden");
  $(".page4").css("transform", "rotateY(0deg)");
  $(".page4").css("visibility", "visible");
  $(".book-bg1").css("visibility", "hidden");
  $(".book-bg1").css("transition-delay", "0.5s");
  $(".page3").css("visibility", "visible");
  }
);
$(".back").click(
 function(){
   $(this).css("visibility","hidden");
   $(".say2").css("visibility","hidden");
   $(".vedio").css("visibility","hidden");
   $(".centered").css("visibility","hidden");
   $(".book-cover").css("transition","all 0.0000001s ease");
   $(".button1").css("visibility","visible");
 }
);