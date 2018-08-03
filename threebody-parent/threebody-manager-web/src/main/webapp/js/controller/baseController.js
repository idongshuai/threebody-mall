app.controller('baseController',function($scope){
	//分页控件配置
	$scope.paginationConf = {
	         currentPage: 1,
	         totalItems: 10,
	         itemsPerPage: 10,
	         perPageOptions: [10, 20, 30, 40, 50],
	         onChange: function(){
	                     $scope.reloadList();//重新加载
	         }
	}; 

	
	//刷新列表
	$scope.reloadList=function(){
		$scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
	}
	
	//用户勾选的id集合
	$scope.selectIds=[];
	
	//用户勾选复选框
	$scope.updateSelection=function($event,id){
		if($event.target.checked){
    		$scope.selectIds.push(id);
		}else{
			//查找值的位置
    		var index = $scope.selectIds.indexOf(id);
			//参数1:移除索引, 参数2:移除个数
    		$scope.selectIds.splice(index,1);
		}
	}
	
	//提取json字符串数据中某个属性，返回拼接字符串 逗号分隔
	$scope.jsonToString=function(jsonString,key){
		var json=JSON.parse(jsonString);
		var value="";
		for(var i=0;i<json.length;i++){
			if(i>0){
				value+=",";
			}
			value+=json[i][key];
		}

		return value;
	}
	
	//在list集合中根据某key的值查询对象
	$scope.searchObjectByKey=function(list,key,keyValue){
		//alert(list + "---" + key + "---" + keyValue);
		for(var i=0;i<list.length;i++){
			if(list[i][key] == keyValue){
				return list[i];
			}
		}
		
		return null;
	}
	
});