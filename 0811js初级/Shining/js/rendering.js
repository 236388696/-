$(function(){
	var timer=null;
	var autoTimer=null;
	var index=0;
	function roll(){
		$(".rollImgBtn a").css({
			"background-color":"#8291A0"
		});
		$(".rollImgBtn a").eq(index).css({
			"background-color":"#cfdb00"
		});
		$(".rollImgWrap img").css({
			"opacity":"0"
		});
		$(".rollImgWrap img").eq(index).css({
			"opacity":"1"
		});
	}
	function nextRoll(){
		index++;
		if(index>$(".rollImgWrap img").length-1){
			index=0;
		}
		roll();
	}
	function autoRoll(){
		clearInterval(autoTimer);
		autoTimer=setInterval(function(){
			nextRoll();
		},3000);
	}
	autoRoll();
	$(".rollImgBtn a").click(function(){
		index=$(this).index();
		roll();
		autoRoll();
	});
	function randHeight(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
//	var fallImg=["img/rendering/1-150Z1101PH18.jpg","img/rendering/1-150Z1102423343.jpg","img/rendering/1-150Z11026024A.jpg","img/rendering/1-150Z1102T4604.jpg","img/rendering/1-150Z110313N04.jpg","img/rendering/1-150Z110325E34.jpg","img/rendering/1-150Z110334W94.jpg","img/rendering/1-150Z1103519419.jpg","img/rendering/1-150Z1103639156.jpg","img/rendering/1-150Z1103U3K8.jpg","img/rendering/1-150Z110405VP.jpg","img/rendering/1-150Z113392O33.jpg","img/rendering/1-150Z1133KGa.jpg","img/rendering/1-150Z113401J48.jpg","img/rendering/1-150Z1134115M3.jpg","img/rendering/1-150Z113422V07.jpg","img/rendering/1-150Z113440VO.jpg","img/rendering/1-150Z1134910156.jpg","img/rendering/1-150Z1135111K4.jpg","img/rendering/1-150Z113520YX.jpg"];
//	var fallImgBig=["img/rendering/1-150Z1101T5U8.jpg","img/rendering/1-150Z1102440O6.jpg","img/rendering/1-150Z1102621105.jpg","img/rendering/1-150Z1102Z4209.jpg","img/rendering/1-150Z1103204a4.jpg","img/rendering/1-150Z1103315305.jpg","img/rendering/1-150Z110342W02.jpg","img/rendering/1-150Z1103546234.jpg","img/rendering/1-150Z1103G2403.jpg","img/rendering/1-150Z1103942428.jpg","img/rendering/1-150Z110411A47.jpg","img/rendering/1-150Z1133944394.jpg","img/rendering/1-150Z1133Q94S.jpg","img/rendering/1-150Z113403C95.jpg","img/rendering/1-150Z11341353I.jpg","img/rendering/1-150Z1134304C6.jpg","img/rendering/1-150Z1134JM27.jpg","img/rendering/1-150Z113493G23.jpg","img/rendering/1-150Z113513L10.jpg","img/rendering/1-150Z1135225557.jpg"];
	var fallImg=["img/rendering/SHINING (5).jpg","img/rendering/SHINING (8).jpg","img/rendering/SHINING (13).jpg","img/rendering/SHINING (14).jpg","img/rendering/SHINING (15).jpg","img/rendering/SHINING (16).jpg","img/rendering/SHINING (17).jpg","img/rendering/SHINING (18).jpg","img/rendering/SHINING (20).jpg","img/rendering/SHINING (21).jpg","img/rendering/SHINING (35).jpg","img/rendering/SHINING (42).jpg","img/rendering/SHINING (44).jpg","img/rendering/SHINING (46).jpg","img/rendering/SHINING (53).jpg","img/rendering/SHINING (54).jpg"];
	function addImgFall(){
		for(var i=0;i<fallImg.length;i++){
			var newImg=$("<img />");
			newImg.attr({
				"src":fallImg[i],
				"class":"fallContImg"
			});
			var coverDiv=$("<div></div>");
			var fangda=$("<img />");
			fangda.attr({
				"src":"img/rendering/fangda.png",
				"class":"fangda"
			});
			coverDiv.attr({
				"class":"coverDiv"
			});
			fangda.appendTo(coverDiv);
			var newLi=$("<li></li>");
			var minIndex=0;
			var minHeight=$(".imgFall>ul")[0].offsetHeight;
			for(var j=0;j<$(".imgFall>ul").length;j++){
				if(minHeight>$(".imgFall>ul")[j].offsetHeight){
					minIndex=j;
					minHeight=$(".imgFall>ul")[j].offsetHeight;
				}
			}
			newImg.appendTo(newLi);
			coverDiv.appendTo(newLi);
			newLi.appendTo($(".imgFall>ul").eq(minIndex));
		}
	}
	addImgFall();
	addImgFall();
	addImgFall();
	
	$(".imgFall ul li").on("mouseover",function(){
		$(".coverDiv").eq($(".imgFall ul li").index($(this))).css({
			"opacity":"0.6"
		});
	});
	$(".imgFall ul li").on("mouseout",function(){
		$(".coverDiv").eq($(".imgFall ul li").index($(this))).css({
			"opacity":"0"
		});
	});
	var imgSrc="";
	$(".imgFall ul li").click(function(){
		imgSrc=$(".fallContImg").eq($(".imgFall ul li").index($(this))).attr("src");
		$(".maskDiv").css({
			"display":"block"
		});
		$(".showImg").css({
			"display":"block"
		});
		$(".showImg").attr({
			"src":imgSrc
		});
	});
	$(".maskDiv").click(function(){
		$(".maskDiv").css({
			"display":"none"
		});
		$(".showImg").css({
			"display":"none"
		});
	});
	$(".showImg").click(function(){
		$(".maskDiv").css({
			"display":"none"
		});
		$(".showImg").css({
			"display":"none"
		});
	});
});
