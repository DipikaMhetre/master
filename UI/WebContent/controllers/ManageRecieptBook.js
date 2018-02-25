pharmApp.controller('ManageRecieptBook', ['$scope','$rootScope','$http','$modal','$log','$timeout','$filter','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,$filter,ngToast) {
 	$scope.SalesmanList=[];
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.init=function(){
		$scope.operationType="Modify"
		 $scope.ModifiedDate = $filter("date")(Date.now(), 'yyyy-MM-dd');
		$scope.reqdata=angular.element(document.getElementById('salesmanreceipt')).scope();
		//$scope.SalesmanList=$scope.reqdata.MainSalesmanList
	          angular.copy($scope.reqdata.MainSalesmanList,	$scope.SalesmanList);
				 if($scope.reqdata.ButtonReceipt=="Add"){
					 $scope.operationType="New";
					/* $scope.RecieptSelected.receiptId=0;
						$scope.RecieptSelected.action=1;*/
				 }
			 if($scope.reqdata.RecieptSelected==undefined){
					 
				 }
				 else{
					
					 $scope.RecieptSelected=$scope.reqdata.RecieptSelected;
						
				   
				    	
					
				 }
		
			
        

		
	};
	/*$scope.setSalesManName=function(){
		alert("changed");
	}*/
/*$scope.ChangedRecieptvalue=function(){
			 for(i=0;i<$scope.SalesmanList.length;i++){
				 if($scope.SalemanSelected.receiptSalesmanId==$scope.SalesmanList.receiptSalesmanId){
					 //$scope.SalemanSelected.receiptSalesmanId=$scope.reqdata.ReceiptList[i].receiptSalesmanId;
					 angular.copy($scope.SalesmanList[i], $scope.SalemanSelected);
					// $scope.SalemanSelected=$scope.reqdata.ReceiptList[i];
				 }
			 else{
					 $scope.SalemanSelected={};
				 }
			 }
			
			
		
	
	
	};*/
	$scope.cancel = function() {
		
		$scope.$dismiss('cancel');
	};
	$scope.submit=function(){
		a=Managereciptvalidation();
		 if(a==false){
			 return false;
		 }
		 /* for(i=0;i<$scope.SalesmanList.length;i++){
			  if($scope.SalemanSelected.receiptSalesmanId==$scope.SalesmanList[i].receiptSalesmanId){
				  angular.copy($scope.SalesmanList[i],$scope.SalemanSelected);
			  }
		  }*/
	    if($scope.operationType=="New"){
	    	$scope.RecieptSelected.receiptId=0;
			$scope.RecieptSelected.action=1
	    }
	    $scope.RecieptSelected.action=1;
	    
		$scope.RecieptSelected.receiptDate=$scope.ModifiedDate;
		var json1=angular.toJson($scope.RecieptSelected);
		var json={entity:1,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
	
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiReceipt/setReceipt",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var returnobj=JSON.parse(data.responseData);
			      if($scope.operationType=="New"){
				$scope.reqdata.ReceiptList.push(returnobj);
			      }
			      else{
			    	  for(i=0;i<$scope.reqdata.ReceiptList.length;i++){
			    		  if($scope.reqdata.ReceiptList[i].receiptId==returnobj.receiptId){
			    			  angular.copy(returnobj,$scope.reqdata.ReceiptList[i]);
			    		  }
			    	  }
			      }
				
			    angular.copy($scope.reqdata.ReceiptList,w2ui.grid4.records);
			    w2ui.grid4.refresh();
			    alert("Saved succesfully");
			    $scope.cancel();
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
	}
}]);
function Managereciptvalidation(){
	flag=true;
	if($.trim($('#receiptto').val()).length==0){
		  $("#receiptto").css("background-color", "#fff4eb");
		  //create error message using tooltip
		  flag=false;
		 }
	if($.trim($('#receiptfrom').val()).length==0){
		  $("#receiptfrom").css("background-color", "#fff4eb");
		  //create error message using tooltip
		  flag=false;
		 }
	if($.trim($('#receiptremark').val()).length==0){
		  $("#receiptremark").css("background-color", "#fff4eb");
		  //create error message using tooltip
		  flag=false;
		 }

  if($.trim($('#receiptto').val()).length==0){
	  $("#receiptto").css("background-color", "#fff4eb");
	  //create error message using tooltip
	  flag=false;
	 }
if( typeof angular.element(document.getElementById('managereciptbook')).scope().RecieptSelected.receiptSalesmanId==undefined ){
	  $("#salesman_selected").css("background-color", "#fff4eb");
	  flag=false;
	 }
	return flag;
}

