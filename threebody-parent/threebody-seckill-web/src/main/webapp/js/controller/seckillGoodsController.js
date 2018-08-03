app.controller('seckillGoodsController', function($scope, $location, $interval, seckillGoodsService) {
	
	//正在参与秒杀的商品列表
	$scope.findList = function() {
		seckillGoodsService.findList().success(
			function(response) {
				console.log(response);
				$scope.list = response;
			}
		);
	}
	
	
	//根据id查询秒杀商品
	$scope.findOne = function() {
		//接收参数
		var id = $location.search()['id'];
		seckillGoodsService.findOne(id).success(
			function(response) {
				$scope.entity = response;
				
				//倒计时开始
				//获取从结束时间到当前时间的秒数
				allSecond = Math.floor((new Date($scope.entity.endTime).getTime() - new Date().getTime()) / 1000);
				
				time = $interval(function() {
					allSecond = allSecond - 1;
					$scope.timeString = convertTimeString(allSecond);
					
					if (allSecond <= 0) {
						$interval.cancel(time);
					}
				}, 1000);
			}
		);
	}
	
	//转换秒为 天 小时 分钟 秒 格式  : xx天10:22:30
	convertTimeString = function(allSecond) {
		//天数
		var days = Math.floor(allSecond / (60 * 60 * 24));
		//小时数
		var hours = Math.floor((allSecond - days * 24 * 60 * 60) / (60 * 60));
		//分钟数
		var minutes = Math.floor((allSecond - days * 24 * 3600 - hours * 3600) / 60);
		//秒数
		var seconds = allSecond - days * 24 * 3600 - hours * 3600 - minutes * 60;
		
		var timeString = '';
		if (days > 0) {
			timeString += days + '天';
		}
		return timeString + hours + ':' + minutes + ':' + seconds;
	}
	
	
	//秒杀下单
	$scope.submitOrder = function() {
		seckillGoodsService.submitOrder($scope.entity.id).success(
			function(response) {
				if (response.success) {
					//如果下单成功, 跳转到支付页面
					alert("抢购成功, 请在5分钟之内完成支付!");
					location.href = 'pay.html';
				} else {
					alert(response.message);
				}
			}
		);
	}
	
	
});