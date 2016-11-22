$(function(){
	var footerImg=["img/facebook.jpg","img/youtube.jpg","img/linkedln.jpg","img/twitter.jpg"];
	var footerImg_h=["img/facebook_h.jpg","img/youtube_h.jpg","img/linkedln_h.jpg","img/twitter_h.jpg"];
	$(".footer1 img").on("mouseover",function(){
		$(".footer1 img")[0].src="img/mail_h.jpg";
	});
	$(".footer1 img").on("mouseout",function(){
		$(".footer1 img")[0].src="img/mail.jpg";
	});
	$(".footer2 img").on("mouseover",function(){
		$(this)[0].src=footerImg_h[$(this).index()];
	});
	$(".footer2 img").on("mouseover",function(){
		$(this)[0].src=footerImg_h[$(this).index()];
	});
	$(".footer2 img").on("mouseout",function(){
		$(this)[0].src=footerImg[$(this).index()];
	});
});