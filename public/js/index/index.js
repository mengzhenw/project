function autoSwipe(){
	slideTime=setTimeout(function(){
		if(swipeNow<lg-1){
			var e=++swipeNow*wd;
			$sliderCon.css("transform","translateX(-"+e+"px)"),
				$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}
	},3e3)
}
var $slider=$(".slider li"),$sliderCon=$(".slider"),$point=$(".index li"),
	wd=$(window).width(),lg=$slider.length,allWd=wd*lg,hg=.85*wd;$sliderCon.width(allWd),$slider.width(wd).height(hg);
var swipeNow=0,slideTime;$sliderCon.on("swipeLeft",function(){if(clearTimeout(slideTime),swipeNow<lg-1){
	var e=++swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),
		$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()
}}),
	$sliderCon.on("swipeRight",function(){
		if(clearTimeout(slideTime),swipeNow>0){
			var e=--swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),
				$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}}),autoSwipe();
var $last=$("#last");
$last.on("tap",function(){
	var e=$(this);
	e.hasClass("down")?e.removeClass("down").addClass("up"):e.hasClass("up")?e.removeClass("up"):e.addClass("down")
});
var $search=$(".search"),$searchBox=$(".search-box"),$cancel=$(".cancel"),$lis=$(".search-box li"),$search1=$(".search1")[0];
$search.on("tap",function(){$searchBox.show()}),
	$cancel.on("tap",function(){$searchBox.hide(),$search1.value=""}),
	$lis.on("tap",function(){$search1.value=this.innerHTML});
var $city=$(".city"),$citylis=$(".city-box li"),
	$cityBox=$(".city-box"),$close=$(".close"),address=$city[0].innerHTML;
$city.on("tap",function(){$cityBox.show()}),
	$close.on("tap",function(){$cityBox.hide()}),$citylis.on("tap",function(){$cityBox.hide(),$city[0].innerHTML=this.innerHTML});
var $querylis=$(".query li").not("#last"),$queryBox=$(".query-box"),$contents=$(".content div"),$querylis2=$(".query-title li").not("#lasts");
$querylis.on("tap",function(){$queryBox.show();var e=$(this).index();$querylis2.each(function(i){$contents.eq(i).hide(),$contents.eq(e).show(),
	$querylis2.eq(i).removeClass("active"),$querylis2.eq(e).addClass("active")})}),$querylis2.on("tap",function(){var e=$(this).index();
	$contents.each(function(i){$querylis2.eq(i).removeClass("active"),$querylis2.eq(e).addClass("active"),$contents.eq(i).hide(),$contents.eq(e).show()})});
var $rels=$(".region .left").children(),$rerightls=$(".region .right");
$rels.on("tap",function(){var e=$(this).index();$rerightls.each(function(i){$rels.eq(i).removeClass("active"),
	$rels.eq(e).removeClass("active"),$rerightls.eq(i).removeClass("actives"),$rerightls.eq(e).addClass("actives")})});
var $ls=$(".many .left").children(),$rightls=$(".many .right");
$ls.on("tap",function(){
	var e=$(this).index();
	$rightls.each(function(i){$ls.eq(i).removeClass("active"),$ls.eq(e).removeClass("active"),$rightls.eq(i).removeClass("actives"), $rightls.eq(e).addClass("actives")})});
var $rights=$(".content .right li");$rights.on("tap",function(){$queryBox.hide();this.innerHTML});var $arealis=$(".area li").not(".last");
$arealis.on("tap",function(){0!=this.index&&$arealis.eq(0).removeClass("active");this.innerHTML});
var $pricelis=$(".price li").not(".last");$pricelis.on("tap",function(){0!=this.index&&$pricelis.eq(0).removeClass("active");this.innerHTML});
var $confirm=$(".content .confirm");$confirm.on("tap",function(){$queryBox.hide()});
var $icons=$(".list .icon-lo");$icons.on("click",function(){var e=$(this);e.hasClass("active")?e.removeClass("active"):e.addClass("active")});
var $lists=$(".list .icon-back");$lists.on("click",function(){location.href="details.html"});
var $publish=$(".publish"),
	$f3=$(".bottom-columncon"),
	$closepub=$(".bottom");
$f3.on("tap",function(){$publish.show()}),
	$closepub.on("tap",function(){$publish.hide()});

/*
$('.info_pink').on('tap', function(){
	var $self = $(this);
	if($self.hasClass('pink_down')){
		//console.log('up');
		$self.removeClass('pink_down');
	}else{
		//console.log('down');
		$self.addClass('pink_down');
	}
});*/
