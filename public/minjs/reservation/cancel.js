var $phone=$("article .icon-back"),$hids=$(".hid"),$btns=$(".hid .btn");$phone.on("click",function(){$hids.eq(0).show()}),$btns.on("click",function(){$hids.eq(0).hide()});var $status=$(".status i"),$hidli=$(".status li:last-child");$status.on("click",function(){var i=$(this),s=i[0].parentNode.className;i.hasClass("active")?(i.removeClass("active"),"other"==s&&$hidli.hide()):(i.addClass("active"),"other"==s&&$hidli.show())});var $confirms=$("footer .confirms"),$confirm=$(".hid .confirm");$confirms.on("click",function(){$hids.eq(1).show()}),$confirm.on("click",function(){location.href="index.html"});