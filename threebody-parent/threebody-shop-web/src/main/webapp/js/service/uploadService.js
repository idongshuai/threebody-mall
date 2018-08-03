app.service('uploadService',function($http){
	
	//上传文件
	/*this.uploadFile=function(){
		var formdata=new FormData();
		// file.files[0] : file,代表文件上传框的name
		formdata.append('file',file.files[0]);
		return $http({
			url:'../upload.do',
			method:'post',
			data:formdata,
			headers:{'Content-Type':undefined},
			transformRequest: angular.identity
		});
	}*/
	
	this.uploadFile=function(){
		var formData=new FormData();
		
		
	    formData.append("file",file.files[0]);   
	    
		//console.log(formData.get('file'));
		
		return $http({
            method:'POST',
            url:"../upload.do",
            data: formData,
            headers: {'Content-Type':undefined},
            transformRequest: angular.identity
        });		
	}	

});