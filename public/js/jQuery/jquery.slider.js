(function($){
	var w=800;

	$.fn.slider=function(obj){
		var _default={
			slidertime:800,
			intervaltime:2000
		}
		var _param= $.extend(true,{},_default,obj);
		var _this=$(this);
		//自动轮播
		var timer=setInterval(next,_param.intervaltime);
		_this.find(".next" ).click(next);
		_this.find(".prev" ).click(prev);

		var i=0;

		//鼠标移动到轮播图上，停止自动轮播
		_this.hover(
			function(){
				console.log("hover");
				clearInterval(timer)
			},
			function(){
				timer = setInterval(next,_param.intervaltime)
			}
		)

		//向左滑动
		function next(){
			_this.find(".slider" ).animate({
				"margin-left":-w
			})
		}
	}
})(jQuery)