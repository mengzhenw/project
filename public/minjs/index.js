var startX,startY,moveX,moveY,dom=document.getElementsByClassName("md")[0];dom.addEventListener("touchstart",function(t){console.log("touchstart");var e=t.touches[0];startX=e.clientX,startY=e.clientY}),dom.addEventListener("touchmove",function(t){console.log("touchmove");var e=t.touches[0];moveX=e.clientX,moveY=e.clientY}),dom.addEventListener("touchend",function(t){console.log("touchend"),console.log(startX,startY,moveX,moveY),moveY-startY>=100?dom.style.color="red":startY-moveY>=100&&(dom.style.color="pink");var e=parseInt(window.getComputedStyle(document.getElementsByClassName("md")[0]).fontSize);moveX-startX>=100?(e+=2,document.getElementsByClassName("md")[0].style.fontSize=e+"px"):startX-moveX>=100&&e>=14&&(e-=2,document.getElementsByClassName("md")[0].style.fontSize=e+"px")});