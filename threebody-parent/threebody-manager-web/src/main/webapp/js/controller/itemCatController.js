 //控制层 
app.controller('itemCatController' ,function($scope,$controller   ,itemCatService,typeTemplateService){	
	
	$controller('baseController',{$scope:$scope});//继承
	
    //读取列表数据绑定到表单中  
	$scope.findAll=function(){
		itemCatService.findAll().success(
			function(response){
				$scope.list=response;
			}			
		);
	}    
	
	//分页
	$scope.findPage=function(page,rows){			
		itemCatService.findPage(page,rows).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}
	
	//查询实体 
	$scope.findOne=function(id){				
		itemCatService.findOne(id).success(
			function(response){
				$scope.entity= response;					
			}
		);				
	}
	
	//保存 
	$scope.save=function(){				
		var serviceObject;//服务层对象  				
		if($scope.entity.id!=null){//如果有ID
			serviceObject=itemCatService.update( $scope.entity ); //修改  
		}else{
			$scope.entity.parentId=$scope.parentId;//赋值上级id
			serviceObject=itemCatService.add( $scope.entity  );//增加 
		}				
		serviceObject.success(
			function(response){
				if(response.success){
					//重新查询 
		        	$scope.findByParentId($scope.parentId);
				}else{
					alert(response.message);
				}
			}		
		);				
	}
	
	 
	//批量删除 
	$scope.dele=function(){			
		if(confirm("确认删除吗?")){
			//获取选中的复选框			
			itemCatService.dele( $scope.selectIds ).success(
				function(response){
					if(response.success){
						$scope.findByParentId($scope.parentId);//刷新列表
						//清空复选框选中的id数组
						$scope.selectIds=[];
					}else{
						alert(response.message);
					}						
				}		
			);
		}				
	}
	
	$scope.searchEntity={};//定义搜索对象 
	
	//搜索
	$scope.search=function(page,rows){			
		itemCatService.search(page,rows,$scope.searchEntity).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}
	
	
	//上级id
	$scope.parentId=0;
	
	//根据上级id查询商品分类列表
	$scope.findByParentId=function(parentId){
		$scope.parentId=parentId; //记住上级id
		itemCatService.findByParentId(parentId).success(
				function(response){
					$scope.list=response;
				}
		);
	}
    
	
	//当前级别
	$scope.level=1;
	//设置级别
	$scope.setLevel=function(value){
		$scope.level=value;
	}
	
	$scope.selectList=function(p_entity){
		
		//清空复选框选中的id数组
		$scope.selectIds=[];
		
		if($scope.level==1){
			$scope.entity_1=null;
			$scope.entity_2=null;
		}
		if($scope.level==2){
			$scope.entity_1=p_entity;
			$scope.entity_2=null;
		}
		if($scope.level==3){
			$scope.entity_2=p_entity;
		}
		$scope.findByParentId(p_entity.id);
	}
	
	//商品类型模板列表
	$scope.typeTemplateList={data:[]};
	//读取商品类型模板列表
	$scope.findTypeTemplateList=function(){
		typeTemplateService.selectTypeTemplateList().success(
				function(response){
					$scope.typeTemplateList={data:response};
				}
		);
	}
	
	
	
	
	
});	
