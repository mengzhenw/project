function test(){
	var t=document.getElementById("names").value,
		e=document.getElementById("psd").value,
		c=document.getElementsByClassName("btn_login")[0],
		s=c.getAttribute("class");""==t||""==e?(s=s.replace("active",""),
		c.setAttribute("class",s)):(s=s.concat(" active"),
		c.setAttribute("class","btn_login active"),
		c.onclick=function(){
			location.href="../info/info_dengluhou.html"})
}setInterval(test,1e3);


/*function time(t){
	wait===0?(t.removeAttribute("disabled"),
	t.innerHTML="获取验证码",
	t.style.backgroundColor="#ed692b",
	wait=60):(t.setAttribute("disabled",!0),
	t.innerHTML=wait+"s后重新获取",
	t.style.backgroundColor="#8f8b8b",
	wait--,setTimeout(function(){time(t)},1e3))}
setInterval(test,1e3);
var wait=60;
document.getElementsByClassName("btn_code")[0].onclick=function(){time(this)};*/

var btn=document.getElementsByClassName("btn_code");
function code(){
	var s=60;
	function t(){
		s--;
		if(s<=-1){
			btn[0].innerText="获取验证码";
			btn[0].style.background="#ea5404";
			btn[0].disabled=false;
			clearInterval(time);
		}else{
			btn[0].style.background="#c7c7c7";
			btn[0].disabled=true;
			btn[0].innerText=s+"s后重新获取"
		}
	}
	var time=setInterval(t,1000);
}