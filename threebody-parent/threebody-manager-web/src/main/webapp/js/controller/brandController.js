app.controller('brandController',function($scope,$controller,brandService){
	
	//继承
	$controller('baseController',{$scope:$scope});
	
        	//查询品牌列表
        	$scope.findAll=function(){
        		brandService.findAll.success(
        				  function(response){
        					  $scope.list=response;
        				  }		
        		);
        	}
        	
        	
        	
        	//分页
        	$scope.findPage=function(page,size){
        		brandService.findPage(page,size).success(
        				  function(response){
        					  $scope.list=response.rows;//显示当前页数据
        					  $scope.paginationConf.totalItems=response.total;//更新总记录数
        				  }		
        		);
        	}
        	
        	//添加品牌
        	$scope.save=function(){
        		var object=null;
        		
        		if($scope.entity.id != null){
        			object=brandService.update($scope.entity);
        		}else{
                    object=brandService.add($scope.entity);
        		}

        		
        		object.success(
        				  function(response){
        					  if(response.success == true){
        						  $scope.reloadList();//刷新
        					  }else{
        						  alert(response.message);
        					  }
        				  }		
        		);
        	}
        	
        	//根据id查询品牌
        	$scope.findOne=function(id){
        		brandService.findOne(id).success(
        				  function(response){
        					  $scope.entity=response;
        				  }		
        		);
        	}
        	
        	
        	
        	//批量删除品牌
        	$scope.dele=function(){
        		if(confirm("确认删除?")) {
        			brandService.dele($scope.selectIds).success(
                            function(response){
                                if(response.success == true){
                                    $scope.reloadList();
                                }else{
                                    alert(response.message);
                                }
                            }     
                  );
        		}
        	}
        	
        	$scope.searchEntity={};
        	
        	//条件查询
        	$scope.search=function(page,size){
        		
        		brandService.search(page,size,$scope.searchEntity).success(
                        function(response){
                            $scope.list=response.rows;//显示当前页数据
                            $scope.paginationConf.totalItems=response.total;//更新总记录数
                        }     
              );
        	}
        });