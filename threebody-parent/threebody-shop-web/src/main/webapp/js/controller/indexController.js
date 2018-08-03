app.controller('indexController',function($scope,loginService){

	//显示用户名
	$scope.showUsername=function(){
		loginService.showUsername().success(
				function(response){
					$scope.loginName=response.loginName;
				}
		);
	}
});