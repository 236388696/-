$.extend({
	"glass":function(minDiv,mask,maxDiv,bigImg){
			$(minDiv).mouseover(function() {
					$(mask).show();
					$(maxDiv).show();
				});
				$(minDiv).mouseout(function() {
					$(mask).hide();
					$(maxDiv).hide();
				});
				$(minDiv).mousemove(function(ev) {
					var sliderX = ev.clientX - $(mask).width() / 2;
					var sliderY = ev.clientY - $(mask).height() / 2;
					var maxX = $(minDiv).innerWidth() - $(mask).outerWidth();
					var minX = 0;
					var maxY = $(minDiv).innerHeight() - $(mask).outerHeight();
					var minY = 0;
					if(sliderX > maxX) {
						sliderX = maxX;
					} else if(sliderX < minX) {
						sliderX = minX;
					}
					if(sliderY > maxY) {
						sliderY = maxY;
					} else if(sliderY < minY) {
						sliderY = minY;
					}
					$(mask).css({
						left: sliderX,
						top: sliderY
					});
					var biliX = sliderX / maxX;
					var biliY = sliderY / maxY;

					$(bigImg).css({
						left: -($(bigImg).innerWidth() - $(maxDiv).outerWidth()) * biliX,
						top: -($(bigImg).innerHeight() - $(maxDiv).outerHeight()) * biliY,
					})
				});
	}
});