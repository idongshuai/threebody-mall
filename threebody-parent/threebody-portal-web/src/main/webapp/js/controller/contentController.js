app.controller('contentController',function($scope,contentService){
	
	//所有广告的列表
	$scope.contentList=[];
	
	//根据广告分类id查询广告列表
	$scope.findByCategoryId=function(categoryId){
		contentService.findByCategoryId(categoryId).success(function(response){
			$scope.contentList[categoryId] = response;
		});
	}
	
	//搜索 (传递参数)
	$scope.search = function() {
		location.href = "http://localhost:9104/search.html#?keywords=" + $scope.keywords;
	}
});