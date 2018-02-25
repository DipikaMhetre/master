pharmApp.controller('VoucherNarrationCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
$scope.VoucherTypeList=[{id:1,name:'Isuue'},{id:2,name:'Cash Reciept'},{id:3,name:'Cash Payment'},{id:4,name:'Bank Recipt'},{id:5,name:'Bank Payment'},{id:6,name:'Journal Voucher'},{id:7,name:'Purchase Voucher'},{id:8,name:'Invoice.DM'},{id:9,name:'LR Transport'}];
$scope.ShowNarrationList=[];
$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
$scope.init = function(){
	$scope.reqdata=angular.element(document.getElementById('narrtionmisc')).scope();
	//$scope.ShowNarartionSelected=$scope.reqdata.narrtionSelected.voucherTypeId;
	var json={entity:2,listType:2,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
	clist=[];
	$http({
		method: 'POST',
		url: "http://localhost:8080/Purple/rest/apiVoucherType/getVoucherType",
		async:false,
		data:JSON.stringify(json),
		headers: {'Content-Type': 'application/json'}
	}).success(function(data, status, headers, config) {
		if(data.responseCode == 200){
			var respData=JSON.parse(data.responseData);
			$scope.ListSelected=[];
			
			angular.copy(respData,$scope.ShowNarrationList)
            var obj1={action:0,outputStatus:0,voucherTypeId:1,voucherTypeName:null,voucherTypeNarration:"New",voucherTypeNarrationId:0,recid:0,status:0}
			  $scope.ShowNarrationList.unshift(obj1);
			if($scope.reqdata.buttonvoucherText=="Add"){
				   //$scope.ShowNarartionSelected=$scope.ShowNarrationList[0];
				$scope.ShowNarartionSelected={};
				angular.copy($scope.ShowNarrationList[0],$scope.ShowNarartionSelected)
				  
				   $scope.ShowNaration="";
				   $scope.reqdata.narrtionSelected=undefined;
			   }
			if($scope.reqdata.narrtionSelected==undefined){
				 
			 }
			 else{
			  $scope.recselected=$scope.reqdata.narrtionSelected;
			  $scope.ShowNarartionSelected=$scope.recselected;	
			  $scope.ShowNaration= $scope.ShowNarartionSelected.voucherTypeNarration;
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
$scope.changenaration=function(){
	
	
		for(i=0;i<$scope.reqdata.MainNarrationList.length;i++){
			if($scope.ShowNarartionSelected.voucherTypeNarrationId==$scope.reqdata.MainNarrationList[i].voucherTypeNarrationId){
				
				angular.copy($scope.reqdata.MainNarrationList[i],$scope.ShowNarartionSelected);
				//$scope.ShowNarartionSelected=$scope.reqdata.MainNarrationList[i]
				$scope.ShowNaration=$scope.reqdata.MainNarrationList[i].voucherTypeNarration;
			}
		}

	
};
$scope.ChangedNarrationName=function(){
	if($scope.ShowNarartionSelected.voucherTypeNarrationId==0){
		$scope.ShowNaration="";
		 $scope.ShowNarartionSelected.voucherTypeId=1;
	}
	else{
	$scope.ShowNaration=$scope.ShowNarartionSelected.voucherTypeNarration;
	}
};
$scope.cancel = function() {
	
	$scope.$dismiss('cancel');
};
$scope.submit=function(){
 var a=NarrationValidation();	
  if(a==false){
	  return false;
  }
	
	$scope.ShowNarartionSelected.action=1;
   var operationType="Modify";
	$scope.ShowNarartionSelected.voucherTypeNarration=$scope.ShowNaration;
	  if($scope.ShowNarartionSelected.voucherTypeNarrationId==0){
		  operationType="New";
	  }
	  for(j=0;j<$scope.VoucherTypeList.length;j++){
		  if($scope.VoucherTypeList[j].id==$scope.ShowNarartionSelected.voucherTypeId){
			  $scope.ShowNarartionSelected.voucherTypeName=$scope.VoucherTypeList[j].name;
		  }
	  }
	var json1=angular.toJson($scope.ShowNarartionSelected);
	   
	var json={entity:1,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
	$http({
	    method: 'POST',
	    url: "http://localhost:8080/Purple/rest/apiVoucherType/setVoucherType",
	    async:false,
	    data:JSON.stringify(json),
	    headers: {'Content-Type': 'application/json'}
	}).success(function(data, status, headers, config) {
		if(data.responseCode == 200){
			$scope.savedList=[];
			w2ui.grid3.records=[];
			var returnObj=JSON.parse(data.responseData);
			if( operationType=="New"){
				$scope.reqdata.MainNarrationList.push(returnObj);
				$scope.ShowNarrationList.push(returnObj);
				angular.copy(returnObj,$scope.ShowNarartionSelected);
				$scope.changenaration();
							}
			else{
				for(m=0;m<$scope.reqdata.MainNarrationList.length;m++){
					if($scope.reqdata.MainNarrationList[m].voucherTypeNarrationId==returnObj.voucherTypeNarrationId){
												
						//$scope.ShowNarartionSelected=returnObj;
						angular.copy(returnObj,	$scope.ShowNarartionSelected);
						angular.copy(returnObj,$scope.reqdata.MainNarrationList[m]);
						
						
					}
				}
				for(k=0;k<$scope.ShowNarrationList.length;k++){
					if($scope.ShowNarrationList[k].voucherTypeNarrationId==returnObj.voucherTypeNarrationId){
						angular.copy(returnObj,$scope.ShowNarrationList[k]);
						$scope.changenaration();
					}
				}
			}
			$scope.$apply();

			//angular.copy($scope.$scope.reqdata.MainNarrationList,$scope.reqdata.MainReasonList);
			angular.copy($scope.reqdata.MainNarrationList,w2ui.grid3.records);
			w2ui.grid3.refresh();
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

}]);
function NarrationValidation(){
	flag=true;
	flag=true;
	if($.trim($('#narration').val()).length==0){
		  $("#narration").css("background-color", "#fff4eb");
		  //create error message using tooltip
		  flag=false;
		 }
	return flag;
}
