window.onload = function()
{
	var navs = document.getElementById('nav').getElementsByTagName('a'),
	   line = document.getElementById('line');

	// 计时器
	var timer = null;

	// 位置初始化
	line.style.left = 0;

	for (var i = 0; i < navs.length; i++) {
		navs[i].onmouseover = function(){
			if (timer) {
				clearTimeout(timer);
			};
			var startPos = parseInt(line.style.left);
			var targetPos = this.offsetLeft;
			move(startPos, targetPos);
		}
		navs[i].onmouseout = function(){
			if (timer) {
				clearTimeout(timer);
			};
			var startPos = parseInt(line.style.left);
			move(startPos, 0);
		}
	}



	function move(start, end) {
		// 缓冲运动的核心
		var step = (end - start) / 10;
		// 根据起点与终点的不同进行取整
		if (step > 0) {
			step = Math.ceil(step);
		} else {
			step = Math.floor(step);
		}
		start = start + step;
		line.style.left = start + 'px';
		
		if (start == end) {
			clearTimeout(timer);
		} else {			
			timer = setTimeout(function() {
				move(start, end);
			}, 16)
		}
	}
}