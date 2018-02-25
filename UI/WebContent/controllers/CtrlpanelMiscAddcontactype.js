pharmApp.controller('CtrlpanelMiscAddcontactype', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.contactypeList=[];
	$scope.ShowDefaultList=[];
	$scope.example6data=[];
	$scope.ShowMainList=[];
	$scope.ShowContactTypeList=[];
	$scope.ShowContactSelected=[];
	$scope.conditionTypeList=[];
	$scope.example1model=[];
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	var keepgoing=true;
	
	$scope.$watch('example1model.length',function() {
		         if($scope.example1model.length!=0){
	    	var obj=$.grep($scope.ShowDefaultList,function(e){return e.controlPanelMiscRoleId==$scope.example1model[$scope.example1model.length-1].controlPanelMiscRoleId})[0];
		         }
		           
		           
		            
	    	if(obj!=undefined){
	    	//$scope.ShowContactypeSelected= $scope.ShowContactTypeList[1];
	    		
	    		 if($scope.reqdata.recSelected!=true && $scope.reqdata.buttonText!="Add"){
	    			 for(i=0;i<$scope.ShowContactTypeList.length;i++){
	    		    		if($scope.ShowContactTypeList[i].controlPanelMiscContactTypeId==$scope.recSelected.controlPanelMiscContactTypeId){
	    		    			$scope.ShowContactypeSelected=$scope.ShowContactTypeList[i];
	    		    			 if($scope.ContactTypeName==undefined || $scope.ContactTypeName==$scope.ShowContactTypeList[i].controlPanelMiscContactType){
	    		    			$scope.ContactTypeName=$scope.ShowContactTypeList[i].controlPanelMiscContactType;
	    		    			 }
	    		    		
	    		    		}
	    		    	} 
	    		 }
	    		 else{
	    			
	    		 }
	    	obj.controlPanelMiscContactTypeId=$scope.ShowContactypeSelected;
	    	obj.controlPanelMiscContactType=$scope.ContactTypeName;
	    	$scope.example1model[$scope.example1model.length-1]=obj; 
	    	}
	    	/*else{
	    	if($scope.reqdata.recSelected==true){
				$scope.ContactTypeName="";
				
			}*/
	    	/*else{
	    		if($scope.ShowContactypeSelected.controlPanelMiscContactType=="New" && $scope.ShowContactypeSelected!=undefined && $scope.ShowContactypeSelected.controlPanelMiscContactType==undefined){
	    			$scope.ContactTypeName="";
	    		}
	    	}*/
	    	//}
	    	/*if($scope.reqdata.buttonText=="Add"){
	    		$scope.example1model=[];
	    	}*/
	    	
	});
	
	$scope.init = function(){
		
		$scope.reqdata=angular.element(document.getElementById('Contacttype')).scope();
		//$scope.ShowContactSelected= $scope.reqdata.recSelected.controlPanelMiscContactType;
		$scope.ContactMiscList=$scope.reqdata.ShowContactTypeList;
		$scope.example1model=[];
	    $scope.ShowContactypeSelected= $scope.reqdata.recSelected.controlPanelMiscContactTypeId;
		var json={entity:2,listType:2,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		clist=[];
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiControlPanelMisc/getControlPanelMisc",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				$scope.ListSelected=[];
				
				angular.copy(respData.contactTypeList,$scope.ShowContactTypeList)
                var obj1={contactTypeRoleMapId:0,controlPanelMiscActiveFlag:0,controlPanelMiscContactType:"New",controlPanelMiscContactTypeId:0,controlPanelMiscDefaultRole:null,controlPanelMiscList:null,controlPanelMiscRole:null,controlPanelMiscRoleId:0,recid:0,status:0}
				$scope.ShowDefaultList=respData.defaultRoleList;
                $scope.ShowContactTypeList.unshift(obj1);
				angular.copy(respData.defaultRoleList,$scope.example6data);
				  if($scope.reqdata.buttonText=="Add"){
				$scope.ShowContactypeSelected=$scope.ShowContactTypeList[0];
				$scope.ContactTypeName="";
				  }
				if($scope.reqdata.recSelected==true){
					
				}
				else{

					$scope.recSelected=$scope.reqdata.recSelected;
					for(i=0;i<$scope.recSelected.controlPanelMiscList.length;i++){
						$scope.ListSelected.push($scope.recSelected.controlPanelMiscList[i]);
						for(j=0;j<$scope.ListSelected.length;j++){
							angular.copy($scope.ListSelected,$scope.example1model);
						}
					}
				}
				
                  
			}
			else{
				//alert('Purpleaid Error Manager \n'+data.responseCode);
				var msg = 'Purpleaid Error Manager \n'+data.responseCode;
				//w2ui.w2confirm(msg, function (btn) { console.log(btn); });
				w2alert(msg);
			}
        

		}).error(function(data, status, headers, config) {          
			return false;
		});
		$scope.ChangedValue=function(){
			
			$scope.example1model=[];
			$scope.ShowMainList=[];
			$scope.recSelected=false;
			if($scope.ShowContactypeSelected.controlPanelMiscContactType=="New"){
				$scope.ContactTypeName="";
			}
			for(i=0;i<$scope.reqdata.ShowContactTypeList.length;i++){
	          	  if($scope.ShowContactypeSelected.controlPanelMiscContactTypeId==$scope.reqdata.ShowContactTypeList[i].controlPanelMiscContactTypeId){
	          		  for(k=0;k<$scope.reqdata.ShowContactTypeList[i].controlPanelMiscList.length;k++){
	          			 $scope.ShowMainList.push($scope.reqdata.ShowContactTypeList[i].controlPanelMiscList[k]); 
	          		  }
	          	  }
	            }	
			   angular.copy($scope.ShowMainList,$scope.example1model);
			
			   
			      
  		     
		};
		$scope.ChangedContactName=function(){
			$scope.ContactTypeName=$scope.ShowContactypeSelected.controlPanelMiscContactType;
		};
		$scope.refreshAll = function(){
			location.reload();
		};
		$scope.cancel = function() {
			
			$scope.$dismiss('cancel');
		};
		$scope.submit = function(){
			$scope.checkList=[];
			$scope.finalList=[];
			  $scope.mainList=[]
			a=ContactrolpanelMiscValidation();
			 if(a==false){
				
				 return false;
				
			 }
			 /*var name=$scope.ContactTypeName;
			 for(i=0;i<$scope.ShowContactTypeList.length;i++){
				
				   if(name==$scope.ShowContactTypeList[i].controlPanelMiscContactType){
					   alert("Contact Name Already Exist");
					   return false;
				   }
				    
			 }*/
			var operationType="modify";
			alist=[];
			blist=[];
			if($scope.ShowContactypeSelected.controlPanelMiscContactType!=undefined){
				for(i=0;i<$scope.example1model.length;i++){
					$scope.example1model[i].controlPanelMiscContactType=$scope.ShowContactypeSelected.controlPanelMiscContactType;
					$scope.example1model[i].controlPanelMiscContactTypeId=$scope.ShowContactypeSelected.controlPanelMiscContactTypeId;
				}
			}
			for(i=0;i<$scope.example1model.length;i++){
				$scope.example1model[i].controlPanelMiscContactType=$scope.ContactTypeName;
			}
			angular.copy($scope.example1model,$scope.checkList);
			for(i=0;i<$scope.reqdata.ShowContactTypeList.length;i++){
				if($scope.reqdata.ShowContactTypeList[i].controlPanelMiscContactTypeId==$scope.example1model[0].controlPanelMiscContactTypeId){
					$scope.SelectedList=$scope.reqdata.ShowContactTypeList[i].controlPanelMiscList;
					  
				}
				
			}
			          if($scope.SelectedList!=undefined){
				 for(j=0;j<$scope.checkList.length;j++){
				     for(k=0;k<$scope.SelectedList.length;k++){
				    	 	if($scope.checkList[j].controlPanelMiscRoleId==$scope.SelectedList[k].controlPanelMiscRoleId){
				    	 		alist.push(j);
				    	 		blist.push(k);
				    	 	}
				    	 	
				     }
			   }
			          }
			          if(alist!=undefined){
				 alist.sort().reverse();
				 for(i=0;i<alist.length;i++){
					 j=alist[i];
					 $scope.checkList[j].checked=2;
				 }
				  }
			          for(i=0;i<$scope.checkList.length;i++){
			        	  if( $scope.checkList[i].checked!=2){
			        		  $scope.checkList[i].checked=1;
			        	  }
			          }
			          if(blist!=undefined){
				 blist.sort().reverse();
				 for(i=0;i<blist.length;i++){
					 j=blist[i];
					 $scope.SelectedList.splice(j,1);
				 }
			          }
			          if($scope.SelectedList!=undefined){
				 for(n=0;n<$scope.SelectedList.length;n++){
					 $scope.SelectedList[n].checked=0;
					 $scope.SelectedList[n].action=1;
				 }
			          }
			         
				 for(n=0;n<$scope.checkList.length;n++){
					 
					 $scope.checkList[n].action=1;
				 }
				  if($scope.SelectedList!=undefined){
				 $scope.ChangedList=$scope.SelectedList.concat($scope.checkList);
				  }
				  else{
					  $scope.ChangedList=angular.copy( $scope.checkList,$scope.ChangedList)
				  }
				  angular.copy($scope.reqdata.ShowContactTypeList,$scope.finalList)
				  for(i=0;i<$scope.finalList.length;i++){
					  if($scope.finalList[i].controlPanelMiscContactTypeId==$scope.ChangedList[0].controlPanelMiscContactTypeId){
						 $scope.finalList[i].controlPanelMiscList=$scope.ChangedList;
						  $scope.finalList[i].controlPanelMiscContactType=$scope.ChangedList[0].controlPanelMiscContactType;
						  $scope.finalList[i].controlPanelMiscDefaultRole=null;
						  $scope.finalList[i].action=1;
						 delete($scope.finalList[i].checked);
						  $scope.mainList.push($scope.finalList[i])
					  }
					
				  }
				 if($scope.ChangedList[0].controlPanelMiscContactTypeId==0){
					 operationType="new";
					 $scope.finalList[0].controlPanelMiscList= $scope.ChangedList;
					  $scope.finalList[0].controlPanelMiscContactType=$scope.ChangedList[0].controlPanelMiscContactType;
					  $scope.finalList[0].controlPanelMiscDefaultRole=null;
					  $scope.finalList[0].action=1;
					  $scope.finalList[0].checked=null;
					  $scope.finalList[0].controlPanelMiscContactTypeId=$scope.ChangedList[0].controlPanelMiscContactTypeId;
					  $scope.finalList[0].recid=null
					  $scope.mainList.push($scope.finalList[0]);
				 }
			var json1=angular.toJson($scope.mainList);
			var json={entity:2,listType:1,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
			$http({
			    method: 'POST',
			    url: "http://localhost:8080/Purple/rest/apiControlPanelMisc/setControlPanelMisc",
			    async:false,
			    data:JSON.stringify(json),
			    headers: {'Content-Type': 'application/json'}
			}).success(function(data, status, headers, config) {
				if(data.responseCode == 200){
					var returnObj=JSON.parse(data.responseData);
					if(operationType=="new"){
						$scope.reqdata.ShowContactTypeList.push(returnObj[0]);
						$scope.ShowContactTypeList.push(returnObj[0]);
						$scope.ShowContactypeSelected=returnObj[0];
						$scope.ChangedContactName();
						$scope.$apply();
					}else{
					   for(i=0;i<$scope.reqdata.ShowContactTypeList.length;i++){
						   if($scope.reqdata.ShowContactTypeList[i].controlPanelMiscContactTypeId==returnObj[0].controlPanelMiscContactTypeId){
							   $scope.ShowContactTypeList.push(returnObj[0]);
								$scope.ShowContactypeSelected=returnObj[0];
								$scope.ChangedContactName();
							   angular.copy(returnObj[0],$scope.reqdata.ShowContactTypeList[i])
							   $scope.$apply();
						   }
					   }
					} 
					  angular.copy($scope.reqdata.ShowContactTypeList,w2ui.grid.records);
					  w2ui.grid.refresh();
					  $scope.ShowMainList=[];
					  for(i=0;i<$scope.reqdata.ShowContactTypeList.length;i++){
			          	  if($scope.ShowContactypeSelected.controlPanelMiscContactTypeId==$scope.reqdata.ShowContactTypeList[i].controlPanelMiscContactTypeId){
			          		  for(k=0;k<$scope.reqdata.ShowContactTypeList[i].controlPanelMiscList.length;k++){
			          			 $scope.ShowMainList.push($scope.reqdata.ShowContactTypeList[i].controlPanelMiscList[k]); 
			          		  }
			          	  }
			            }		  
					   angular.copy($scope.ShowMainList,$scope.example1model);
					   alert("Save Succsufully");
						/*ngToast.create({
							  className: 'success',
							  content: '<span>Delete successfull...!</span>',
							  timeout: 3000,
							  animation:'fade'
							});*/
					
					
					
					//$scope.spinner=false;
				}else{
					alert('Purpleaid Error Manager \n'+data.responseCode);
					//$scope.spinner=false;
				}
	        }).error(function(data, status, headers, config) { 
	        	//$scope.spinner=false;
	        	return false;
	        	
	        });
			
		};

	};
	

}]);
function ContactrolpanelMiscValidation(){
	flag=true;
	 if($.trim($('#contactname').val()).length==0){
		  $("#contactname").css("background-color", "#fff4eb");
		  //create error message using tooltip
		  flag=false;
		 }
	 if(angular.element(document.getElementById('ctrlpanelMisc')).scope().example1model.length==0){
		 $("#defaultrole").css("background-color", "#fff4eb");
		 flag=false;
	 }
	 return flag;
}

