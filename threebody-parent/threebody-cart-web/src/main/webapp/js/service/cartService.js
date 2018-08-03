//购物车服务层
app.service('cartService', function($http){
	
	//购物车列表
	this.findCartList = function() {
		return $http.get('cart/findCartList.do');
	}
	
	//添加商品到购物车
	this.addGoodsToCartList = function(itemId, num) {
		return $http.get('cart/addGoodsToCartList.do?itemId=' + itemId + "&num=" + num);
	}
	
	//求合计金额
	this.sum = function(cartList) {
		
		var totalValue = {totalNum:0, totalMoney:0};
		
		//总数量
		//$scope.totalNum = 0;
		//总金额
		//$scope.totalMoney = 0;
		
		for (var i = 0; i < cartList.length; i++) {
			//购物车对象
			var cart = cartList[i];
			for (var j = 0; j < cart.orderItemList.length; j++) {
				//购物车明细
				var orderItem = cart.orderItemList[j];
				//累加数量
				totalValue.totalNum += orderItem.num;
				//累加金额
				totalValue.totalMoney += orderItem.totalFee;
			}
		}
		
		return totalValue;
	}
	
	//获取当前登录用户的收货地址
	this.findAddressList = function(){
		return $http.get('address/findAddressListByLoginUser.do');
	}
	
	//提交订单
	this.submitOrder = function(order) {
		return $http.post('order/add.do', order);
	}
});