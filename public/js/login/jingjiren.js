function test(){
	var t=document.getElementById("names").value,
		e=document.getElementById("psd").value,
		c=document.getElementsByClassName("content_foot")[0],
		s=c.getAttribute("class");""==t||""==e?(s=s.replace("active",""),
		c.setAttribute("class",s)):(s=s.concat(" active"),
		c.setAttribute("class","content_foot active"),
		c.onclick=function(){
			location.href="../info/info_detail.html"})
}setInterval(test,1e3);