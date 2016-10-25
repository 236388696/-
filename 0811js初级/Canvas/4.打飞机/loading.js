function loading(obj, progress, fun) {
	//计算有多少张图片
	var imgCount = 0;
	for(var prop in obj) {
		imgCount++;
	}
	//表示当前加载完成的图片个数
	var count = 0;
	//imgsObj用来保存加载完成的图片，属性名是图片的名字，属性的值是对应的Image对象, 获取Image对象通过imgsObj1.bg1这种方式
	var imgsObj = {}
		//遍历obj中的所有的属性，每一条属性都是一个图片的src，都可以生成一个image对象
	for(var prop in obj) {
		//	var img=new Image()*3次;
		var img = new Image();
		img.src = obj[prop];
		//img*3.onload事件 ，因为onload函数不会立刻执行，在图片加载完成之后才会执行，所以在onload函数内部只能取到for循环的最后一个值，想要取到for循环每次的prop值，通过函数可以保存下来，a(prop)在函数a的内部就可以取到正确的prop的值
		img.onload = (function(b) {
			return function() {
				//每加载完一张图片，count+1,所有可以用count表示加载的进度
				count++;
//				console.log((count / imgCount).toFixed(2) * 100 + "%");
//				progress((count / imgCount).toFixed(2) * 100 + "%");
//				console.log(b);
				//b是通过闭包传进来的当前加载完成的那张图片的名字，this是当前加载完成的Image对象
				imgsObj[b] = this;
				//如果当前加载完成的个数等于图片总个数，说明全部加载完成
				if(count == imgCount) {
					fun(imgsObj);
				}
			}
		})(prop)
	}
}
//调用，传入图片对象参数 

//			loading({
//				"bg1": "img/bg1.png",
//				"bullet1": "img/bullet1.png",
//				"bullet2": "img/bullet2.png"
//			},function(a){
//				console.log(a[bg1]);
//			})

//			loading(obj, function(a) {
//				console.log(a["bg1"]);
//			});