var $lis=$(".status");
$lis.on("click",function(){
	$(this).addClass("active"),this.innerHTML="已接单，待反馈"
});
var $cons=$("section .con");
$cons.on("click",function(){
	//location.href="details.html"
});
var $section=$("section");
$section.on("swipeLeft",function(){
	var i=$(this).find(".del"),
		s=$(this).find(".status");
	i.show(),s.hide(),$(this).css("left","-18%")
}),
	$section.on("swipeRight",function(){
		var i=$(this).find(".del"),
			s=$(this).find(".status");
		i.hide(),s.show(),
			$(this).css("left","0")
	});
var $publish=$(".publish"),
	$f3=$(".bottom-columncon"),
	$closepub=$(".bottom");
$f3.on("tap",function(){$publish.show()}),
	$closepub.on("tap",function(){$publish.hide()});