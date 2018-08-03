 //控制层 
app.controller('indexController' ,function($scope,$controller,loginService){	
	
	//显示用户名
	$scope.showName = function() {
		loginService.showName().success(function(response){
			
			$scope.loginName = response.loginName;
		});
	}
});	
