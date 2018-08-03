 //控制层 
app.controller('userController' ,function($scope,$controller   ,userService){	
	
	
	
	//注册用户
	$scope.reg = function() {
		
		//比较两次输入的密码是否一致
		if ($scope.repeatPassword != $scope.entity.password) {
			alert("两次输入密码不一致");
			$scope.entity.password = "";
			$scope.repeatPassword = "";
			return;
		}
		
		//新增
		userService.add($scope.entity, $scope.smsCode).success(function(response){
			alert(response.message);
		});
	}
	
	//发送验证码
	$scope.sendCode = function() {
		
		if ($scope.entity.phone == null || $scope.entity.phone == "") {
			alert("请填写手机号");
			return;
		}
		
		userService.sendCode($scope.entity.phone).success(function(response){
			alert(response.message);
		});
	}
});	
