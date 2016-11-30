$(document).on("scroll", function(){
	if ($(document).scrollTop() <= 200) {
		$("#toTop").css({"opacity" : 0})
	}else if ($(document).scrollTop() > 200) {
		$("#toTop").css({"opacity" : 1})
	}
	if ($(document).scrollTop() < 733) {
		$(".head").animate({"background-color": "rgb(51,73,96)"},80)
		
		$(".cover_div1").css({"height": "70px"})
		$(".cover_div2").css({"height": "0px"})
		$(".cover_div3").css({"height": "0px"})
		$(".cover_div4").css({"height": "0px"})
		$(".cover_div5").css({"height": "0px"})
		$(".cover_div6").css({"height": "0px"})
	}else if ($(document).scrollTop() >= 733 && $(document).scrollTop() <= 1855) {
		$(".head").animate({"background-color": "#f17c72"},80)
		
		$(".cover_div1").css({"height": "0px"})
		$(".cover_div2").css({"height": "70px"})
		$(".cover_div3").css({"height": "0px"})
		$(".cover_div4").css({"height": "0px"})
		$(".cover_div5").css({"height": "0px"})
		$(".cover_div6").css({"height": "0px"})
	}else if ($(document).scrollTop() >= 1856 && $(document).scrollTop() <= 2943) {
		$(".head").animate({"background-color": "#32ac97"},80)
		
		$(".cover_div1").css({"height": "0px"})
		$(".cover_div2").css({"height": "0px"})
		$(".cover_div3").css({"height": "70px"})
		$(".cover_div4").css({"height": "0px"})
		$(".cover_div5").css({"height": "0px"})
		$(".cover_div6").css({"height": "0px"})
	}else if ($(document).scrollTop() >= 2944 && $(document).scrollTop() <= 3779) {
		$(".head").animate({"background-color": "#7f4c76"},80)
		
		$(".cover_div1").css({"height": "0px"})
		$(".cover_div2").css({"height": "0px"})
		$(".cover_div3").css({"height": "0px"})
		$(".cover_div4").css({"height": "70px"})
		$(".cover_div5").css({"height": "0px"})
		$(".cover_div6").css({"height": "0px"})
	}else if ($(document).scrollTop() >= 3780 && $(document).scrollTop() <= 4851) {
		$(".head").animate({"background-color": "#F18A52"},80)
		
		$(".cover_div1").css({"height": "0px"})
		$(".cover_div2").css({"height": "0px"})
		$(".cover_div3").css({"height": "0px"})
		$(".cover_div4").css({"height": "0px"})
		$(".cover_div5").css({"height": "70px"})
		$(".cover_div6").css({"height": "0px"})
	}else if ($(document).scrollTop() >= 4852){
		$(".head").animate({"background-color": "#3f9fc9"},80)
		
		$(".cover_div1").css({"height": "0px"})
		$(".cover_div2").css({"height": "0px"})
		$(".cover_div3").css({"height": "0px"})
		$(".cover_div4").css({"height": "0px"})
		$(".cover_div5").css({"height": "0px"})
		$(".cover_div6").css({"height": "70px"})
	}
})
$(function(){
 	$("#toTop").click(function(){
		$('html,body').animate({scrollTop:0},500);
    return false;
    });
});
function contentScroll(scrollDis) {
	$('html,body').animate({scrollTop: scrollDis}, 500);
	return false;
}
$("#page_box_text1").on("mousemove", function(){
	$("#page_box_text1").animate({"color": "rgb(51,73,96)"},100)
})
$("#page_box_text1").on("mouseleave", function(){
	$("#page_box_text1").animate({"color": "rgb(236,237,239)"},10)
})

$("#page_box_text2").on("mousemove", function(){
	$("#page_box_text2").animate({"color": "rgb(51,73,96)"},100)
})
$("#page_box_text2").on("mouseleave", function(){
	$("#page_box_text2").animate({"color": "rgb(236,237,239)"},10)
})

$("#page_box_text3").on("mousemove", function(){
	$("#page_box_text3").animate({"color": "rgb(51,73,96)"},100)
})
$("#page_box_text3").on("mouseleave", function(){
	$("#page_box_text3").animate({"color": "rgb(236,237,239)"},10)
})

$("#hoverA1").on("mousemove", function(){
	$("#hoverA1").animate({"color": "rgb(51,73,96)"},100)
})
$("#hoverA1").on("mouseleave", function(){
	$("#hoverA1").animate({"color": "rgb(236,237,239)"},10)
})

$("#hoverA2").on("mousemove", function(){
	$("#hoverA2").animate({"color": "rgb(51,73,96)"},100)
})
$("#hoverA2").on("mouseleave", function(){
	$("#hoverA2").animate({"color": "rgb(236,237,239)"},10)
})

$("#hoverA3").on("mousemove", function(){
	$("#hoverA3").animate({"color": "rgb(51,73,96)"},100)
})
$("#hoverA3").on("mouseleave", function(){
	$("#hoverA3").animate({"color": "rgb(236,237,239)"},10)
})

$("#hoverA4").on("mousemove", function(){
	$("#hoverA4").animate({"color": "rgb(51,73,96)"},100)
})
$("#hoverA4").on("mouseleave", function(){
	$("#hoverA4").animate({"color": "rgb(236,237,239)"},10)
})
function coverAppear(Objcover){
	$(Objcover).css({"height":"70px"})
}
function coverDisappear(Objcover){
 	$(Objcover).css({"height":"0"})
}
$("#toTop").on("mousemove",function(){
	$("#toTop").css({"opacity" : 0.3})
})
$("#toTop").on("mouseleave",function(){
	$("#toTop").css({"opacity" : 1})
})
