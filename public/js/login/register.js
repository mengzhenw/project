var $selectTitle = $('.form-cell-input');
var $selectList = $('.select-list');
$selectTitle.on('tap', function(){
	$(this).siblings('.select-list').toggle();
});
$selectList.find('.select-li').on('tap', function(){
	var $self = $(this);
	var $parent = $self.parent('.select-list');
	var text = $self.text();
	var val = $self.data('val');
	console.log(text, val);
	$parent.siblings('.form-cell-input').text(text).data('val', val);
	$parent.hide();
});


function test(){
	var t=document.getElementById("names").value,
		e=document.getElementById("psd").value,
		c=document.getElementsByClassName("btn_login")[0],
		s=c.getAttribute("class");""==t||""==e?(s=s.replace("active",""),
		c.setAttribute("class",s)):(s=s.concat(" active"),
		c.setAttribute("class","btn_login active"),
		c.onclick=function(){
			location.href="jingjiren.html"})
}setInterval(test,1e3);