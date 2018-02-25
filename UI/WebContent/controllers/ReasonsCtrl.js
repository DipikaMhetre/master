pharmApp.controller('ReasonsCtrl',['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.ShowReasonList=[];
	$scope.spinner=true;
	$scope.cnf=false;
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	
	$scope.init = function(){
	
		$scope.spliceList=[];
		//$scope.creditdisabled=false;
		//$scope.ShowReasonsSelected.reasonReturnFlag=false;
		//$scope.ShowReasonsSelected.reasonReturnFlag=!$scope.ShowReasonsSelected.reasonCreditNoteFlag;
		$scope.spinner=true;
		$scope.reqdata=angular.element(document.getElementById('Credebitreason')).scope();
		var json={entity:2,listType:2,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiReason/getReason",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				angular.copy(respData,$scope.ShowReasonList);
				var obj1={action: 0,reasonCreditNoteFlag: false,reasonDebitNoteFlag: false,reasonFlagActive:false,reasonID:0,reasonReason:"New",reasonReturnFlag:false,reasonSystemValueFlag:false,recid:0,status:0};	
				$scope.ShowReasonList.unshift(obj1);
			/*  for(i=0;i<$scope.ShowReasonList.length;i++){
					  if($scope.ShowReasonList[i].reasonSystemValueFlag==true){
					      $scope.spliceList.push(i);
					  }
				  }
				  if($scope.spliceList!=undefined){
					  $scope.spliceList.reverse();
						 for(i=0;i<=$scope.spliceList.length;i++){
							 j=$scope.spliceList[i];
							 $scope.ShowReasonList.splice(j,1);
							 
						 }
				  }*/
				   if($scope.reqdata.buttonaddText=="Add"){
					   $scope.ShowReasonstypeSelected=$scope.ShowReasonList[0];
					   $scope.Showreasons="";
				   }
				 if($scope.reqdata.reasonrecSelected==undefined){
					 
				 }
				 else{
					
					$scope.recselected=$scope.reqdata.reasonrecSelected;
					$scope.ShowReasonsSelected=$scope.recselected;	
					   if($scope.ShowReasonsSelected.reasonReturnFlag==true  &&  $scope.ShowReasonsSelected.reasonReturnFlag==true){
						   $scope.creditdisabled=true;
					   }
					
				  for(i=0;i<$scope.ShowReasonList.length;i++){
				    	if($scope.ShowReasonList[i].reasonID==$scope.recselected.reasonID){
				    		$scope.ShowReasonstypeSelected=$scope.ShowReasonList[i];
				    		$scope.Showreasons=$scope.ShowReasonList[i].reasonReason;
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
	};
	$scope.ChangedReasonName=function(){
		if($scope.ShowReasonstypeSelected.reasonReason=="New"){
			$scope.Showreasons="";
			 $scope.ShowReasonsSelected={};
		}
		else{
		$scope.Showreasons=$scope.ShowReasonstypeSelected.reasonReason;
		}
	};
$scope.ChangedReasonvalue=function(){
		if($scope.ShowReasonstypeSelected.reasonReason=="New"){
			$scope.Showreasons="";
			 $scope.ShowReasonsSelected={};
		}
		else{
			 for(i=0;i<$scope.reqdata.MainReasonList.length;i++){
				 if($scope.ShowReasonstypeSelected.reasonReason==$scope.reqdata.MainReasonList[i].reasonReason){
					 $scope.ShowReasonstypeSelected.reasonReason=$scope.reqdata.MainReasonList[i].reasonReason;
					 $scope.ShowReasonsSelected=$scope.reqdata.MainReasonList[i];
					 $scope.Showreasons=$scope.reqdata.MainReasonList[i].reasonReason;
				 }
			 }
			 //$scope.returnFChange();
				
			
		}
		
	
	};
	$scope.cancel = function() {
		
		$scope.$dismiss('cancel');
	};
	$scope.change=function(){
		if($scope.ShowReasonsSelected.reasonReturnFlag==true){
			$scope.ShowReasonsSelected.reasonCreditNoteFlag=true;
		}
		if($scope.ShowReasonsSelected.reasonReturnFlag==false){
			$scope.ShowReasonsSelected.reasonCreditNoteFlag=false;
		}
	};
	$scope.submit=function(){
		$scope.spinner=true;
		a=ReasonValidate();
		 if(a==false){
			 return false;
		 }
		var operationType="Modify";
		  if( $scope.ShowReasonstypeSelected.reasonID==0){
			 operationType="New";
			 if($scope.ShowReasonsSelected.reasonCreditNoteFlag!=undefined ){				  
			$scope.ShowReasonstypeSelected.reasonCreditNoteFlag=$scope.ShowReasonsSelected.reasonCreditNoteFlag;
			 }
			 if($scope.ShowReasonsSelected.reasonReturnFlag!=undefined ){	
			$scope.ShowReasonstypeSelected.reasonReturnFlag=$scope.ShowReasonsSelected.reasonReturnFlag;
			 }
			 if($scope.ShowReasonsSelected.reasonDebitNoteFlag!=undefined ){
			$scope.ShowReasonstypeSelected.reasonDebitNoteFlag=$scope.ShowReasonsSelected.reasonDebitNoteFlag;
			 }
			$scope.ShowReasonsSelected=$scope.ShowReasonstypeSelected;
		  }
		  
		$scope.ShowReasonsSelected.reasonReason=$scope.Showreasons;
		$scope.ShowReasonsSelected.action=1;
		var json1=angular.toJson($scope.ShowReasonsSelected);
		var json={entity:1,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiReason/setReason",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				$scope.savedList=[];
				w2ui.grid2.records=[];
				var returnObj=JSON.parse(data.responseData);
			 if(returnObj.outputStatus=="Reason is in use, cannot be updated.."){
					  alert("Reason is in use, cannot be updated..");
					 return false;
					  w2ui.grid2.refresh();
				  }
				angular.copy($scope.reqdata.MainReasonList,$scope.savedList)
				if( operationType=="New"){
					$scope.savedList.push(returnObj);
					$scope.ShowReasonList.push(returnObj);
					//$scope.ShowReasonsSelected=returnObj;
					angular.copy(returnObj,$scope.ShowReasonsSelected);
					$scope.ChangedReasonvalue();
					angular.copy($scope.savedList,$scope.reqdata.MainReasonList);
					$scope.$apply();
				}
				else{
					for(m=0;m<$scope.savedList.length;m++){
						if($scope.savedList[m].reasonID==returnObj.reasonID){
							//$scope.ShowReasonList.push(returnObj);
							//$scope.ShowReasonsSelected=returnObj;
							angular.copy(returnObj,$scope.ShowReasonsSelected);
							angular.copy(returnObj,$scope.savedList[m]);
							$scope.$apply();
						}
					}
					angular.copy($scope.savedList,$scope.reqdata.MainReasonList);
					for(j=0;j<$scope.ShowReasonList.length;j++){
						if($scope.ShowReasonList[j].reasonID==returnObj.reasonID){
							 angular.copy(returnObj,$scope.ShowReasonList[j]);
							 $scope.ChangedReasonvalue();
								$scope.$apply();
			
		              }
					}
				}
			    angular.copy($scope.reqdata.MainReasonList,w2ui.grid2.records);
				w2ui.grid2.refresh();
				alert("Saved...")
				ngToast.create({
					  className: 'success',
					  content: '<span>Data Saved successfully...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				$scope.spinner=false;
			
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
				//$scope.spinner=false;
			}
        }).error(function(data, status, headers, config) { 
        	//$scope.spinner=false;
        	return false;
        	
        });
		
	};

	$scope.creditNoteFChange=function(){
		
		
		alert('In cd flag change');
	};
	
	$scope.returnFChange=function(){
		if(typeof $scope.ShowReasonsSelected.reasonCreditNoteFlag===undefined){
			$scope.ShowReasonsSelected.reasonCreditNoteFlag=false;
		}
		if(!$scope.ShowReasonsSelected.reasonReturnFlag){
			$scope.ShowReasonsSelected.reasonCreditNoteFlag=false;
			$scope.creditdisabled=false;
		}
		else{
			$scope.ShowReasonsSelected.reasonCreditNoteFlag=true;
			$scope.creditdisabled=true;
		}
		
	};
		

	
}]);
function ReasonValidate(){
	flag=true;
	if($.trim($('#reasonname').val()).length==0){
		  $("#reasonname").css("background-color", "#fff4eb");
		  //create error message using tooltip
		  flag=false;
		 }
	return flag;
}
