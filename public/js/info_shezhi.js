window.onload=function(){
	var div2=document.getElementById("div2");
	var div1=document.getElementById("div1");
	div2.onclick=function(){
		div1.className=(div1.className=="close1")?"link-off":"close1";
		div2.className=(div2.className=="close2")?"link-on":"close2";
	}
};


var cache=document.getElementById("caches"),
	count=document.getElementsByClassName("info_text")[0],
	hid=document.getElementsByClassName("hid"),
	cancel=document.getElementsByClassName("btn1"),
	confirm=document.getElementsByClassName("btn2");
cache.onclick=function(){hid[0].style.display="block"},
	cancel[0].onclick=function(){
		hid[0].style.display="none"},
	confirm[0].onclick=function(){
		hid[0].style.display="none", count.innerText=0
	};
var outLogin=document.getElementsByClassName("info_txt4")[0];
outLogin.onclick=function(){hid[1].style.display="block"},
	cancel[1].onclick=function(){hid[1].style.display="none"},
	confirm[1].onclick=function(){hid[1].style.display="none",location.href="info.html"};