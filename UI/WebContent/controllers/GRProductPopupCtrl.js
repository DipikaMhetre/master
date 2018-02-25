pharmApp.controller('GRProductPopupCtrl', ['$scope','$rootScope','$http','$modal','$log','reqData'/*'statusflag','grCompanyPopupProductList'*/, function ($scope,$rootScope,$http, $modal, $log,$modalInstance,reqData/*,grCompanyPopupProductList,statusflag*/) {
	$scope.productRecieptTypeList=[{id:1,name:'Company Reciept'},{id:2,name:'Company Replace'},{id:3,name:'Branch Reciept'}];
	$scope.productStorageTypeList=[{id:1,name:'Godown'},{id:2,name:'Shelf'}];
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.grProductBatchList=[];
	/*$scope.$watch('showProductSelected.goodsReceiptProductBatchPurchaseRate',function() {
		$scope.showProductSelected.goodsReceiptProductValue=$scope.showProductSelected.goodsReceiptProductBatchPurchaseRate*$scope.showProductSelected.goodsReceiptProductQty;
		$scope.showProductSelected.goodsReceiptProductWM=(($scope.showProductSelected.goodsReceiptProductBatchSellRate-$scope.showProductSelected.goodsReceiptProductBatchPurchaseRate)/$scope.showProductSelected.goodsReceiptProductBatchPurchaseRate)*100;
	});
	
	$scope.$watch('showProductSelected.goodsReceiptProductQty',function() {
		$scope.showProductSelected.goodsReceiptProductValue=$scope.showProductSelected.goodsReceiptProductBatchPurchaseRate*$scope.showProductSelected.goodsReceiptProductQty;
	});
	
	$scope.$watch('showProductSelected.goodsReceiptProductBatchSellRate',function() {
		$scope.showProductSelected.goodsReceiptProductRM=(($scope.showProductSelected.goodsReceiptProductBatchMRP-$scope.showProductSelected.goodsReceiptProductBatchSellRate)/$scope.showProductSelected.goodsReceiptProductBatchSellRate)*100;
		$scope.showProductSelected.goodsReceiptProductWM=(($scope.showProductSelected.goodsReceiptProductBatchSellRate-$scope.showProductSelected.goodsReceiptProductBatchPurchaseRate)/$scope.showProductSelected.goodsReceiptProductBatchPurchaseRate)*100;
		
	});
	
	$scope.$watch('showProductSelected.goodsReceiptProductBatchMRP',function() {
		$scope.showProductSelected.goodsReceiptProductRM=(($scope.showProductSelected.goodsReceiptProductBatchMRP-$scope.showProductSelected.goodsReceiptProductBatchSellRate)/$scope.showProductSelected.goodsReceiptProductBatchSellRate)*100;
	});
	
	*/
	$scope.$watch('showProductSelected.grProductBatchObj',function() {
		
		
		$scope.$watch('showProductSelected.grProductBatchObj.grProductBatchMRP',function() {
			if(typeof $scope.showProductSelected.grProductBatchObj !== "undefined" && typeof $scope.showProductSelected.grProductBatchObj.grProductBatchMRP !== "undefined"){
				var number=(($scope.showProductSelected.grProductBatchObj.grProductBatchMRP-$scope.showProductSelected.grProductBatchObj.grProductBatchSellRate)/$scope.showProductSelected.grProductBatchObj.grProductBatchSellRate)*100;
				$scope.showProductSelected.goodsReceiptProductRM = number.toFixed(2);
			}
		});
		
		$scope.$watch('showProductSelected.grProductBatchObj.grProductBatchSellRate',function() {
			if(typeof $scope.showProductSelected.grProductBatchObj !== "undefined" && typeof $scope.showProductSelected.grProductBatchObj.grProductBatchSellRate !== "undefined"){			
				var number=(($scope.showProductSelected.grProductBatchObj.grProductBatchMRP-$scope.showProductSelected.grProductBatchObj.grProductBatchSellRate)/$scope.showProductSelected.grProductBatchObj.grProductBatchSellRate)*100;
				$scope.showProductSelected.goodsReceiptProductRM = number.toFixed(2);
				number=(($scope.showProductSelected.grProductBatchObj.grProductBatchSellRate-$scope.showProductSelected.grProductBatchObj.grProductBatchPurchaseRate)/$scope.showProductSelected.grProductBatchObj.grProductBatchPurchaseRate)*100;
				$scope.showProductSelected.goodsReceiptProductWM=number.toFixed(2);
			}
		});
		$scope.$watch('showProductSelected.grProductBatchObj.grProductBatchPurchaseRate',function() {
			if(typeof $scope.showProductSelected.grProductBatchObj !== "undefined" && typeof $scope.showProductSelected.grProductBatchObj.grProductBatchPurchaseRate !== "undefined"){
				$scope.showProductSelected.goodsReceiptProductValue=$scope.showProductSelected.grProductBatchObj.grProductBatchPurchaseRate*$scope.showProductSelected.goodsReceiptProductQty;
				var number=(($scope.showProductSelected.grProductBatchObj.grProductBatchSellRate-$scope.showProductSelected.grProductBatchObj.grProductBatchPurchaseRate)/$scope.showProductSelected.grProductBatchObj.grProductBatchPurchaseRate)*100;
				$scope.showProductSelected.goodsReceiptProductWM=number.toFixed(2);
			}
		});
	});
	
	$scope.$watch('showProductSelected.goodsReceiptProductQty',function() {
		if(typeof $scope.showProductSelected.grProductBatchObj !== "undefined" && typeof $scope.showProductSelected.grProductBatchObj.grProductBatchPurchaseRate !== "undefined" )
			$scope.showProductSelected.goodsReceiptProductValue=$scope.showProductSelected.grProductBatchObj.grProductBatchPurchaseRate*$scope.showProductSelected.goodsReceiptProductQty;
		//$scope.showProductSelected.goodsReceiptProductWM=(($scope.showProductSelected.goodsReceiptProductBatchSellRate-$scope.showProductSelected.goodsReceiptProductBatchPurchaseRate)/$scope.showProductSelected.goodsReceiptProductBatchPurchaseRate)*100;
	});
	
	/*========================*/
	
	/*========================*/
	$scope.init = function(){
		$scope.reqData=angular.element(document.getElementById('goodReciept')).scope().data;
		$scope.grCompanyPopupProductList=$scope.reqData.productList.slice();
		$scope.statusflag=$scope.reqData.flag;
		$scope.recordSelected=new Object($scope.reqData.records);
		if($scope.statusflag == 'new'){
			$scope.showProductSelected={};
		}else{
			$scope.showProductSelected={};
			angular.copy($scope.recordSelected,$scope.showProductSelected);
			$scope.showProductSelected.productStorageTypeSelected=$.grep($scope.productStorageTypeList,function(e){return e.id==$scope.showProductSelected.goodsReceiptProductStorageId;})[0];
			$scope.showProductSelected.productRecieptTypeSelected=$.grep($scope.productRecieptTypeList,function(e){return e.id==$scope.showProductSelected.goodsReceiptProductReceiptTypeId;})[0];
			
			// API CALL FOR BATCHLIST OF PRODUCT TRIED TO MODIFIED
			var json={entity:1,entityId:0,listType:0,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,productId:$scope.showProductSelected.goodsReceiptProductId};
			
			$http({
			    method: 'POST',
			    url: "http://localhost:8080/Purple/rest/apiBatch/getBatch",
			    async:false,
			    data:JSON.stringify(json),
			    headers: {'Content-Type': 'application/json'}
			}).success(function(data, status, headers, config) {
				if(data.responseCode == 200){
					var respData=JSON.parse(data.responseData);
					$scope.grProductBatchList=respData.slice();
					
				}else{
					alert('Purpleaid Error Manager \n'+data.responseCode);
				}
	        }).error(function(data, status, headers, config) {          
	        	return false;
	        });
		}
	};
	
	$scope.showNextPopup = function(){
		/*ng-controller="GRProductListPopupCtrl"*/
		$modal.open({
			template :'<div  id="GRProductListPopup" ng-init="init()"> <div class="container goodReceipt_productListPopup"><div class="row topblueStrip"><h6 class="fieldsTop_Spacing"><span class="topblueStripText">PRODUCT LIST</span></h6></div><div class=" row"><div class="col-md-6"></div><div class="col-md-6 textRight"></div></div><div class="row"><!--=============GRID==========  --><div id="grid2" tabindex="-1" class="gridSizeGoodsReceipt_productList"></div><!--=============GRID==========  --></div></div></div>',
			controller :'GRProductListPopupCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'listProduct_GoodsReceipt-Modal',
			/*resolve : {
				ProductList : function() {
					return $scope.grCompanyPopupProductList;
				}
			}	*/			
		}).result.then(function(result) {
			$scope.showProductSelected={};
			$scope.showProductSelected=result;
			
			
			$scope.showProductSelected.productRecieptTypeSelected=$.grep($scope.productRecieptTypeList, function(e){ return e.id == result.goodsReceiptProductReceiptTypeId ; })[0];
			$scope.showProductSelected.productStorageTypeSelected=$.grep($scope.productStorageTypeList, function(e){ return e.id == result.goodsReceiptProductStorageId ; })[0];
			/*============API CALL FOR PRODUCTS BATCH LIST=========*/
			var json={entity:1,entityId:0,listType:0,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,productId:result.goodsReceiptProductId};
			
			$http({
			    method: 'POST',
			    url: "http://localhost:8080/Purple/rest/apiBatch/getBatch",
			    async:false,
			    data:JSON.stringify(json),
			    headers: {'Content-Type': 'application/json'}
			}).success(function(data, status, headers, config) {
				if(data.responseCode == 200){
					var respData=JSON.parse(data.responseData);
					$scope.grProductBatchList=respData.slice();
					
				}else{
					alert('Purpleaid Error Manager \n'+data.responseCode);
				}
	        }).error(function(data, status, headers, config) {          
	        	return false;
	        });
			
		});
	};
	
	$scope.showBatchPopup = function(id){
		if(typeof id !=="undefined"){
			if(typeof $scope.showProductSelected !=="undefined" && typeof $scope.showProductSelected.grProductBatchObj !=="undefined" && typeof $scope.showProductSelected.grProductBatchObj.grProductBatchNo !== "undefined" && $scope.showProductSelected.grProductBatchObj.grProductBatchNo.length != 0){
				return false;
			}
		}
		if($scope.grProductBatchList.length == 0){
			var json={entity:1,entityId:0,listType:0,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,productId:$scope.showProductSelected.goodsReceiptProductId};
			
			$http({
			    method: 'POST',
			    url: "http://localhost:8080/Purple/rest/apiBatch/getBatch",
			    async:true,
			    data:JSON.stringify(json),
			    headers: {'Content-Type': 'application/json'}
			}).success(function(data, status, headers, config) {
				if(data.responseCode == 200){
					var respData=JSON.parse(data.responseData);
					$scope.grProductBatchList=respData.slice();
					
				}else{
					alert('Purpleaid Error Manager \n'+data.responseCode);
				}
	        }).error(function(data, status, headers, config) {          
	        	return false;
	        });
			
		}
		$scope.grProductBatchListCopy=[];
		angular.copy($scope.grProductBatchList,$scope.grProductBatchListCopy);
		$modal.open({
			template :'<div  id="GRProductBatchPopup" ng-init="init()"> <div class="container goodReceipt_batchListPopup"><div class="row topblueStrip"><h6 class="fieldsTop_Spacing"><span class="topblueStripText">BATCH LIST</span></h6></div<div class=" row "><div class="col-md-9 textRight"><span style="coursor:pointer;">Frequent Items (OFF)</span></div></div><div class="row fieldsBot_Spacing"><!--=============GRID==========  --><div id="grid3" tabindex="-1" class="gridSizeGoodsReceipt_batchList"></div><!--=============GRID==========  --></div></div></div>',controller :'GRProductBatchPopupCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'listBatch_GoodsReceipt-Modal',
			resolve : {
				batchList : function() {
					return $scope.grProductBatchListCopy;
				}
			}				
		}).result.then(function(result) {
			//$scope.showProductSelected=result;
			$scope.showProductSelected.grProductBatchObj= new Object(result);
			$scope.showProductSelected.goodsReceiptProductBatchId=$scope.showProductSelected.grProductBatchObj.grProductBatchId;
		});
	};
	
	$scope.submit=function(record){
		a=Gr_productvalidate();
		if(a==false){
			return false;
		}
		if(typeof record.productRecieptTypeSelected !=="undefined"){
			record.goodsReceiptProductReceiptTypeId=record.productRecieptTypeSelected.id;
			delete record.productRecieptTypeSelected;
		}else{
			record.goodsReceiptProductReceiptTypeId=0;
		}
		if(typeof record.productStorageTypeSelected !=="undefined"){
			record.goodsReceiptProductStorageId=record.productStorageTypeSelected.id;
			delete record.productStorageTypeSelected;
		}else{
			record.goodsReceiptProductStorageId=0;
		}
		
		
		delete record.goodsReceiptPendingOrder;
		
		
		
		delete record.goodsReceiptProductRM;
		delete record.goodsReceiptProductWM;
		/*=======*/
		var flagBatchNew=true;
		var flagPresent=false;
		
		for(i=0;i<$scope.grProductBatchList.length;i++){
			if($scope.grProductBatchList[i].grProductBatchId==record.grProductBatchObj.grProductBatchId){
				flagPresent=true;
				if($scope.grProductBatchList[i].grProductBatchNo==record.grProductBatchObj.grProductBatchNo &&
				   $scope.grProductBatchList[i].grProductBatchMRP==record.grProductBatchObj.grProductBatchMRP &&
				   $scope.grProductBatchList[i].grProductBatchPurchaseRate==record.grProductBatchObj.grProductBatchPurchaseRate &&
				   $scope.grProductBatchList[i].grProductBatchSellRate==record.grProductBatchObj.grProductBatchSellRate &&
				   $scope.grProductBatchList[i].grProductBatchTradeDiscount==record.grProductBatchObj.grProductBatchTradeDiscount){
					flagBatchNew=false;
				}else{
					
					flagBatchNew=true;
				}
				
			}
		}
		if(flagPresent==true && flagBatchNew==true || !flagPresent){
			record.goodsReceiptProductBatchId=0;
			record.grProductBatchObj.grProductBatchActiveFlag=true;			
			
		}else{
			record.goodsReceiptProductBatchId=record.grProductBatchObj.grProductBatchId;
			record.grProductBatchObj.grProductBatchActiveFlag=true;
		}
		/*====index as recid===*/
		if($scope.statusflag == 'new'){
			var index=w2ui.grid.records.length+1;
			record.recid=index;
			/*=======*/
			//w2ui.grid.records.push(record);
			w2ui.grid.add(record);			
			angular.element(document.getElementById('goodReciept')).scope().isGridDirty=true;			
			w2ui.grid.refresh();
			$scope.showProductSelected={};
		}else{
			record.recid=$scope.recordSelected.recid;
			w2ui.grid.set(record.recid,record,false);
			angular.element(document.getElementById('goodReciept')).scope().isGridDirty=true;
			w2ui.grid.refresh();
			$scope.showProductSelected={};
			$scope.cancel('Close');
		}
		
		
		
		
	};
	
	$scope.cancel = function() {
		//angular.element(document.getElementById('purch')).scope().popup=false;
		$scope.$dismiss('cancel');
	};
	
	$scope.clear = function() {
		//angular.element(document.getElementById('purch')).scope().popup=false;
		$scope.showProductSelected={};
		$("#gr_trade").css("background-color", "white"); 
		$("#gr_quantity").css("background-color", "white");  
		$("#gr_mrp").css("background-color", "white");
		$("#gr_free").css("background-color", "white");
		$("#gr_purchaserate").css("background-color", "white");
		$("#gr_sellingrate").css("background-color", "white");
		$("#gr_specialdisc").css("background-color", "white");
		$("#product").css("background-color", "white");
		$("#gr_batch").css("background-color", "white");
		$("#gr_expirydate").css("background-color", "white");
	};
	

}]);
function Gr_productvalidate(){
	flag=true;
	 if($.trim($('#product').val()).length==0){
		$("#product  ").css("background-color", "#fff4eb");
		flag=false;
	} 
	 if($.trim($('#gr_quantity ').val()).length==0){
			$("#gr_quantity ").css("background-color", "#fff4eb");
			flag=false;
		} if($.trim($('#gr_trade ').val()).length==0){
			$("#gr_trade ").css("background-color", "#fff4eb");
			flag=false;
		} 
		if($.trim($('#gr_mrp ').val()).length==0){
			$("#gr_mrp ").css("background-color", "#fff4eb");
			flag=false;
		} 
		if($.trim($('#gr_expirydate ').val()).length==0){
			$("#gr_expirydate ").css("background-color", "#fff4eb");
			flag=false;
		} 
		if($.trim($('#gr_sellingrate  ').val()).length==0){
			$("#gr_sellingrate  ").css("background-color", "#fff4eb");
			flag=false;
		} 
		if($.trim($('#gr_purchaserate ').val()).length==0){
			$("#gr_purchaserate ").css("background-color", "#fff4eb");
			flag=false;
		} 
		if($.trim($('#gr_batch ').val()).length==0){
			$("#gr_batch ").css("background-color", "#fff4eb");
			flag=false;batch
		} 
	  return flag;
}


