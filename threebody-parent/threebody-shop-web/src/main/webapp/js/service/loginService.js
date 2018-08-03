app.service('loginService',function($http){
	//显示用户名
	this.showUsername=function(){
		return $http.get('../login/name.do');
	}
});