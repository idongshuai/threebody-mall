var sys = require('system');
//文件名
var htmlName = sys.args[1];

var page = require('webpage').create();
page.viewportSize = {width: 20000, height: 20000 }; //设置视图范围为20000，应该够用
//打开html文件
try{
	page.open(htmlName, function() { 
		var imgProps = page.evaluate(function() {
			return imgProps;
		});
		//裁剪图形区域
		page.clipRect = {top: 0, left: 0, width: imgProps.width, height: imgProps.height};
		
		//将图片属性输出，交给java后台处理
		console.log("props:" + JSON.stringify(imgProps));
		var base64 = page.renderBase64("PNG"); //获取base64
		console.log("base64:" + base64); //输出，交给java后台处理
		phantom.exit();
	});
}catch(e){
	phantom.exit();
}
setTimeout(function(){
	phantom.exit();
}, 20000);