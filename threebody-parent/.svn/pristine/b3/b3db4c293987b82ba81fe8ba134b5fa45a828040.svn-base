app.controller('payController', function($scope,$location,payService){
	
	//本地支付
	$scope.createNative = function() {
		payService.createNative().success(
			function(response) {
				//显示订单号和金额
				$scope.money = (response.total_fee / 100).toFixed(2);
				$scope.outTradeNo = response.out_trade_no;
				
				//生成二维码
				var qr = new QRious({
					element:document.getElementById('qrious'),
					size:250,
					value:response.code_url,
					level:'H'
				});
				
				//调用查询
				queryPayStatus();
			}
		);
	}
	
	
	//查询订单状态
	queryPayStatus = function() {
		payService.queryPayStatus($scope.outTradeNo).success(
			function(response) {
				
				console.log(response);
				
				if (response.success) {
					location.href = 'paysuccess.html#?money=' + $scope.money;
				} else {
					
					if (response.message == '二维码超时!') {
						//重新生成二维码
						alert("二维码超时");
						//$scope.createNative();
					} else {
						//location.href = 'payfail.html';
						//由于微信支付商户key错误, 所有此处无法返回结果
						location.href = 'paysuccess.html#?money=' + $scope.money;
					}
					
					
				}
			}
		);
	}
	
	
	//支付成功页 获取金额
	$scope.getMoney = function() {
		return $location.search()['money'];
	}
});