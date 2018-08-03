//购物车控制层
app.controller('cartController', function($scope, cartService, addressService){
	
	//查询购物车列表
	$scope.findCartList = function() {
		cartService.findCartList().success(
			function(response){
				$scope.cartList = response;
				$scope.totalValue = cartService.sum($scope.cartList);
			}
		);
	}
	
	//数量加减
	$scope.addGoodsToCartList = function(itemId, num) {
		cartService.addGoodsToCartList(itemId, num).success(
			function(response){
				if (response.success) {
					//如果成功, 刷新列表
					$scope.findCartList();
				} else {
					alert(response.message);
				}
			}
		);
	}
	
	//获取当前登录用户的地址列表
	$scope.findAddressList = function() {
		cartService.findAddressList().success(
			function(response) {
				$scope.addressList = response;
				for (var i = 0; i < $scope.addressList.length; i++) {
					if ($scope.addressList[i].isDefault == '1') {
						$scope.address = $scope.addressList[i];
						break;
					}
				}
			}
		);
	}
	
	//选择地址
	$scope.selectAddress = function(address) {
		$scope.address = address;
	}
	//判断某地址对象是不是当前选择的地址
	$scope.isSelectedAddress = function(address) {
		if (address == $scope.address) {
			return true;
		} else {
			return false;
		}
	}
	
	// 鼠标移入移出时的flag
	$scope.showEditDel = false;
	
	//根据收货地址id获取收货地址的详细信息
	$scope.getAddressById = function(id) {
		addressService.findOne(id).success(
			function(response) {
				$scope.editAddress = response;
			}
		);
	}
	
	//保存 地址
	$scope.save=function(){		
		
		$scope.editAddress.userId = $scope.address.userId;
		
		var serviceObject;//服务层对象  				
		if($scope.editAddress.id!=null){//如果有ID
			serviceObject=addressService.update( $scope.editAddress ); //修改  
		}else{
			serviceObject=addressService.add( $scope.editAddress  );//增加 
		}				
		serviceObject.success(
			function(response){
				if(response.success){
					//查新加载
					location.reload();
				}else{
					alert(response.message);
				}
			}		
		);				
	}
	
	
	//删除 地址
	$scope.deleAddress=function(id){			
		if (confirm('确认删除该地址吗?')) {
			//获取选中的复选框			
			addressService.dele(id).success(
				function(response){
					if(response.success){
						//查新加载
						location.reload();
					}						
				}		
			);		
		}		
	}
	
	//订单对象
	$scope.order = {paymentType:'1'};
	
	//选择支付类型
	$scope.selectPayType = function(type) {
		$scope.order.paymentType = type;
	}
	
	//保存订单
	$scope.submitOrder = function() {
		
		$scope.order.receiverAreaName = $scope.address.address;
		$scope.order.receiverMobile = $scope.address.mobile;
		$scope.order.receiver = $scope.address.contact;
		
		
		cartService.submitOrder($scope.order).success(
			function(response) {
				if (response.success) {
					//如果是微信支付, 跳转到支付页面
					if ($scope.order.paymentType == '1') {
						location.href = 'pay.html';
					} else {
						//如果是货到付款, 跳转到提示页面
						location.href = 'paysuccess.html';
					}
				} else {
					//弹框提示, 也可以跳转到提示页面
					alert(response.message);
				}
			}
		);
	}
	
});