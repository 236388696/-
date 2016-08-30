function checkARC(arc1, arc2) {
	//设置临界条件
	var disR = arc1.r + arc2.r;
	//取2个圆心距离的大小
	var chaX = Math.abs(arc1.x - arc2.x);
	var chaY = Math.abs(arc1.y - arc2.y);
	if(chaX * chaX + chaY * chaY <= disR * disR) {
		console.log("撞上了");
	}
}

function checkBoom(obj1, obj2) {
	//先算临界值
	//横向临界值
	var disX = obj1.w / 2 + (obj2.w / 2);
	//纵向临界值
	var disY = obj1.h / 2 + (obj2.h / 2);
	//计算2个矩形对象中心的距离
	var centerX = Math.abs((obj1.x + obj1.w / 2) - (obj2.x + (obj2.w / 2)));
	var centerY = Math.abs((obj1.y + obj1.h / 2) - (obj2.y + (obj2.h / 2)));

	//判断
	if(centerX < disX && centerY < disY) {
		return true;
	} else {
		return false;
	}
}