
var path=require('path');
var express=require('express');


var app=express();

var viewsPath=path.join(__dirname,'views');

app.use('/',express.static(viewsPath));

var publicPath=path.join(__dirname,'public');
app.use('/public',express.static(publicPath));

var proxy = require('http-proxy-middleware');
var nodegrass = require("nodegrass");


app.use('/api',proxy({
	target:'http://guanjp.com:9805',
	changeOrigin:true,
	ws:true,
	cookieRewrite:true,
	pathRewrite:{
		'^/api':'/'
	}
}));




var sha1 = require("sha1");
app.use('/weixin', function(req, res){
	var obj = req.query;
	var arr = ["testwmz", obj.timestamp, obj.nonce];
	arr.sort();
	var str = sha1(arr.join(""));
	if( obj.signature === str){
		res.send(obj.echostr).end();
	}else{
		res.send("验证失败").end();
	}
});


app.listen(16927,function(){
	console.log('server run at port 16927')
});
module.exports=app;