function autoSwipe(){slideTime=setTimeout(function(){if(swipeNow<lg-1){var e=++swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}},2e3)}var $slider=$(".slider_block"),$sliderCon=$(".slider_container"),$point=$(".point_block"),wd=$(window).width(),lg=$slider.length,allWd=wd*lg,hg=.85*wd;$sliderCon.width(allWd),$slider.width(wd).height(hg);var swipeNow=0,slideTime;$sliderCon.on("swipeLeft",function(){if(clearTimeout(slideTime),swipeNow<lg-1){var e=++swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}}),$sliderCon.on("swipeRight",function(){if(clearTimeout(slideTime),swipeNow>0){var e=--swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}}),autoSwipe();var $queryBlock=$(".query_block");$queryBlock.on("tap",function(){var e=$(this),i=e.index();console.log(i),e.hasClass("active")?(e.removeClass("active"),$(".down-box").eq(i).hide()):($queryBlock.removeClass("active"),e.addClass("active"),$(".down-box").hide().eq(i).show())}),$(".query_price").on("tap",function(){var e=$(this);e.hasClass("active-down")?e.removeClass("active-down").addClass("active-up"):e.hasClass("active-up")?e.removeClass("active-up"):e.addClass("active-down")}),$(".info_pink").on("tap",function(){var e=$(this);e.hasClass("pink_down")?e.removeClass("pink_down"):e.addClass("pink_down")});