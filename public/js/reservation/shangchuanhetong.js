var $hids=$(".hid"),
	$cancel=$(".cancel"),
	$upload=$(".upload"),
	$cancelBtns=$hids.eq(0).find(".btn"),
	$uploadConfirm=$hids.eq(1).find(".confirms");
	$cancel.on("tap",function(){
		$hids.eq(0).show()
		console.log(111)
	}),
	$cancelBtns.on("click",function(){
		$hids.eq(0).hide()
	}),
	$upload.on("click",function(){
		$hids.eq(1).show()
	}),
	$uploadConfirm.on("click",function(){
		location.href="xiangqing.html"
	});