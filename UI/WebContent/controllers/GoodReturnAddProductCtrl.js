
pharmApp.controller('GoodReturnAddProductCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.showRRProductSelected={};
	//$scope.productList={};
	$scope.productList=[];
	$scope.grProductBatchList=[];
	$scope.masterRecord={};
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");

	$scope.conditionTypeList=[{id:1,name:'Saleable Returns'},{id:2,name:'Expiry'},{id:3,name:'Near Expiry'},{id:4,name:'Damaged'},{id:5,name:'Damaged'},{id:6,name:'Recall'},{id:7,name:'DPCO'}];
	$scope.returnRegisterType=angular.element(document.getElementById('GoodsReturn')).scope().showRRSelected.returnRegisterType;
	///NEW
	$scope.prevRecord={};
	$scope.currRecord={};
	
	
	$scope.init=function(){
		//alert(''+nearExpiry);
		//angular.copy(angular.element(document.getElementById('GoodsReturn')).scope().productList,$scope.productList);
		if(typeof w2ui.grid.get(w2ui.grid.getSelection()) === "undefined" || typeof w2ui.grid.get(w2ui.grid.getSelection()) !== "undefined" && w2ui.grid.get(w2ui.grid.getSelection()) == null){
			$scope.operation='new';
		}else{
			$scope.operation='modify';
			
			angular.copy(w2ui.grid.get(w2ui.grid.getSelection()),$scope.masterRecord);
			angular.copy(w2ui.grid.get(w2ui.grid.getSelection()),$scope.prevRecord);//record backup taken for compare
			angular.copy($scope.masterRecord,$scope.showRRProductSelected);
			
			
			//============API CALL FOR PRODUCTS BATCH LIST=========
			
			if($scope.returnRegisterType == 1){
			
				var json={entity:3,entityId:0,listType:5,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,productId:$scope.masterRecord.returnRegisterProductPID};			
				$http({
				    method: 'POST',
				    url: "http://localhost:8080/Purple/rest/apiReturn/getReturn",
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
			}else{
				var json={entity:3,entityId:0,listType:9,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,productId:$scope.masterRecord.returnRegisterProductPID};			
				$http({
				    method: 'POST',
				    url: "http://localhost:8080/Purple/rest/apiReturn/getReturn",
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
			
		}
		
		
	};
	
	$scope.selectProductPopup=function(){
		$modal.open({
			template :'<div id="GoodReturnProductListPopup" ng-controller="GoodReturnProductListPopupCtrl" ng-init="init()"> <div class="container goodReturn_productListPopup"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">PRODUCT LIST</span> </h6> </div> <div class="row"> <!--=============GRID========== --> <div id="grid2" tabindex="-1" class="gridSizeGoodsReturn_productList"></div> <!--=============GRID========== --> </div> <div class="row fieldsTop_Spacing fieldsBot_Spacing"> <div class=" col-md-8"> </div> <div class=" col-md-4"> <div class="row"> <div class=" col-md-5"> <button type="button" ng-click="cancel()" class="canclebtnSize">Cancel</button> </div> <div class=" col-md-5"> <button type="button" ng-click="submit()" class="okbtnSize">OK</button> </div> </div> </div> </div> </div> </div> ',
			controller :'GoodReturnProductListPopupCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'listProduct_GoodsReturn-Modal',
			/*resolve : {
				ProductList : function() {
					return $scope.grCompanyPopupProductList;
				}
			}	*/			
		}).result.then(function(result) {
			if(!angular.equals(result,{})){
				$scope.showRRProductSelected.returnRegisterProductPack=result.returnRegisterProductPack;		
				$scope.showRRProductSelected.returnRegisterProductName=result.returnRegisterProductName;	
				$scope.showRRProductSelected.returnRegisterProductPID=result.returnRegisterProductPID;	
				
				//============API CALL FOR PRODUCTS BATCH LIST=========
				if($scope.returnRegisterType == 1){
					var json={entity:3,entityId:0,listType:5,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,productId:result.returnRegisterProductPID};
					
					$http({
					    method: 'POST',
					    url: "http://localhost:8080/Purple/rest/apiReturn/getReturn",
					    async:false,
					    data:JSON.stringify(json),
					    headers: {'Content-Type': 'application/json'}
					}).success(function(data, status, headers, config) {
						if(data.responseCode == 200){
							var respData=JSON.parse(data.responseData);
							$scope.grProductBatchList=respData.slice();										
							$scope.showRRProductSelected.returnRegisterProductMRP="";
							$scope.showRRProductSelected.returnRegisterProductBatchNo="";						
							$scope.showRRProductSelected.returnRegisterProductExpiryDate="";
							$scope.showRRProductSelected.returnRegisterProductPurchaseRate="";
							$scope.showRRProductSelected.returnRegisterProductSellRate="";										
						}else{
							alert('Purpleaid Error Manager \n'+data.responseCode);
						}
			        }).error(function(data, status, headers, config) {          
			        	return false;
			        });
				}else{
					var json={entity:3,entityId:0,listType:9,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,productId:result.returnRegisterProductPID};
					
					$http({
					    method: 'POST',
					    url: "http://localhost:8080/Purple/rest/apiReturn/getReturn",
					    async:false,
					    data:JSON.stringify(json),
					    headers: {'Content-Type': 'application/json'}
					}).success(function(data, status, headers, config) {
						if(data.responseCode == 200){
							var respData=JSON.parse(data.responseData);
							$scope.grProductBatchList=respData.slice();										
							$scope.showRRProductSelected.returnRegisterProductMRP="";
							$scope.showRRProductSelected.returnRegisterProductBatchNo="";						
							$scope.showRRProductSelected.returnRegisterProductExpiryDate="";
							$scope.showRRProductSelected.returnRegisterProductPurchaseRate="";
							$scope.showRRProductSelected.returnRegisterProductSellRate="";										
						}else{
							alert('Purpleaid Error Manager \n'+data.responseCode);
						}
			        }).error(function(data, status, headers, config) {          
			        	return false;
			        });
				}
			}else{
				
			}
			
		});
		
		
	};
		
	$scope.selectBatchPopup=function(){
		$modal.open({
			template :' <div id="GRProductBatchPopup" ng-init="init()"> <div class="container goodReturn_batchListPopup"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">BATCH LIST</span> </h6> </div> <div class="row"> <!--=============GRID========== --> <div id="grid3" tabindex="-1" class="gridSizeGoodsReturn_batchList"></div> <!--=============GRID========== --> </div> <div class="row fieldsTop_Spacing fieldsBot_Spacing"> <div class=" col-md-8"></div> <div class=" col-md-4"> <div class="row"> <div class=" col-md-5"> <button type="button" ng-click="cancel()" class="canclebtnSize">Cancel</button> </div> <div class=" col-md-5"> <button type="button" ng-click="submit()" class="okbtnSize">OK</button> </div> </div> </div> </div> </div> </div> ',
			controller :'GoodsReturnProductBatchPopupCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'listBatch_GoodsReceipt-Modal',
			resolve : {
				batchList : function() {
					return $scope.grProductBatchList;
				}
			}				
		}).result.then(function(result) {
			//$scope.showProductSelected=result;
			$scope.showRRProductSelected.returnRegisterProductBatchNo= result.returnRegisterProductBatchNo;
			$scope.showRRProductSelected.returnRegisterProductMRP= result.returnRegisterProductMRP;
			$scope.showRRProductSelected.returnRegisterProductSellRate= result.returnRegisterProductSellRate;
			$scope.showRRProductSelected.returnRegisterProductPurchaseRate= result.returnRegisterProductPurchaseRate;
			$scope.showRRProductSelected.returnRegisterProductExpiryDate= result.returnRegisterProductExpiryDate;	
			$scope.showRRProductSelected.returnRegisterProductFreeAvailable= result.returnRegisterProductFreeAvailable;	
			$scope.showRRProductSelected.returnRegisterProductQtyAvailable= result.returnRegisterProductQtyAvailable;
			$scope.showRRProductSelected.returnRegisterProductSAID= result.returnRegisterProductSAID;
			//new//$scope.showRRProductSelected.returnRegisterProductCondition= result.returnRegisterProductSAID;
			
			//if($scope.returnRegisterType == 2){
				$scope.showRRProductSelected.returnRegisterProductQtyReturn= result.returnRegisterProductQtyReturn;
				$scope.showRRProductSelected.returnRegisterProductFreeReturn= result.returnRegisterProductFreeReturn;
			//}
			
			//$scope.showRRProductSelected.grProductBatchObj= result.recid;			
		});		
	};
	
	$scope.submit=function(){
		var a=Gre_productvalidate();
		  if(a==false){
			  return false;
		  }
		//validate code  here
		if($scope.operation=='new'){					
			$scope.showRRProductSelected.returnRegisterProductIsDeleted=false;
			$scope.showRRProductSelected.recid=w2ui.grid.records.length+1;
			$scope.showRRProductSelected.returnRegisterProductId=0;
			$scope.showRRProductSelected.returnRegisterProductConditionName=$.grep($scope.conditionTypeList,function(e){return e.id==$scope.showRRProductSelected.returnRegisterProductCondition;})[0].name;
			w2ui.grid.records.push($scope.showRRProductSelected);
			w2ui.grid.refresh();
			angular.element(document.getElementById('GoodsReturn')).scope().calculateTotal();
			$scope.$close();
		}else{
			var index=w2ui.grid.records.indexOf(w2ui.grid.get(w2ui.grid.getSelection()));
			$scope.masterRecord.returnRegisterProductBatchNo=$scope.showRRProductSelected.returnRegisterProductBatchNo;
			$scope.masterRecord.returnRegisterProductExpiryDate=$scope.showRRProductSelected.returnRegisterProductExpiryDate;
			$scope.masterRecord.returnRegisterProductIsDeleted=false;
			$scope.masterRecord.returnRegisterProductMRP=$scope.showRRProductSelected.returnRegisterProductMRP;
			$scope.masterRecord.returnRegisterProductName=$scope.showRRProductSelected.returnRegisterProductName;
			$scope.masterRecord.returnRegisterProductPID=$scope.showRRProductSelected.returnRegisterProductPID;
			$scope.masterRecord.returnRegisterProductPack=Number($scope.showRRProductSelected.returnRegisterProductPack);
			$scope.masterRecord.returnRegisterProductPurchaseRate=$scope.showRRProductSelected.returnRegisterProductPurchaseRate;
			$scope.masterRecord.returnRegisterProductSellRate=$scope.showRRProductSelected.returnRegisterProductSellRate;
			$scope.masterRecord.returnRegisterProductCondition=Number($scope.showRRProductSelected.returnRegisterProductCondition);
			//$scope.masterRecord.returnRegisterProductQuantity=Number($scope.showRRProductSelected.returnRegisterProductQuantity);
			$scope.masterRecord.returnRegisterProductQtyAvailable=Number($scope.showRRProductSelected.returnRegisterProductQtyAvailable);
			$scope.masterRecord.returnRegisterProductFreeAvailable=Number($scope.showRRProductSelected.returnRegisterProductFreeAvailable);
			$scope.masterRecord.returnRegisterProductSAID=Number($scope.showRRProductSelected.returnRegisterProductSAID);
			$scope.masterRecord.returnRegisterProductConditionName=$.grep($scope.conditionTypeList,function(e){return e.id==$scope.masterRecord.returnRegisterProductCondition;})[0].name;
			
			$scope.masterRecord.returnRegisterProductIsModified=$scope.showRRProductSelected.returnRegisterProductIsModified;
			$scope.masterRecord.returnRegisterProductRemark=$scope.showRRProductSelected.returnRegisterProductRemark;
			
			////CONDITION NOT HANDLED FOR EXPIRED & non Self	
			//if($scope.returnRegisterType == 2){
			$scope.masterRecord.returnRegisterProductQtyReturn=Number($scope.showRRProductSelected.returnRegisterProductQtyReturn);
			$scope.masterRecord.returnRegisterProductFreeReturn=Number($scope.showRRProductSelected.returnRegisterProductFreeReturn);
			//}
			angular.copy($scope.masterRecord,$scope.currRecord);
			///////////////////////=======MODIFIED LOGIC==========/////////////////
			if($scope.prevRecord.returnRegisterProductIsModified == false && $scope.prevRecord.returnRegisterProductId != 0 && $scope.returnRegisterType != 1){
				$scope.prevRecord.returnRegisterProductBatchDeleted=true;
				angular.element(document.getElementById('GoodsReturn')).scope().deleteList.push($scope.prevRecord);
			}	
			
			//if($scope.currRecord,$scope.prevRecord)
			/*$scope.masterRecord.returnRegisterProductQtyReturnDelta=$scope.showRRProductSelected.returnRegisterProductQtyReturnDelta;
			$scope.masterRecord.returnRegisterProductFreeReturnDelta=$scope.showRRProductSelected.returnRegisterProductFreeReturnDelta;*/
			//CONDITION FOR PRODUCT CHANGED
			/*if($scope.currRecord.returnRegisterProductName != $scope.prevRecord.returnRegisterProductName){
				
			}*/
			
			//CONDITION FOR PRODUCT/BATCH CHANGED
			if($scope.currRecord.returnRegisterProductName != $scope.prevRecord.returnRegisterProductName || $scope.currRecord.returnRegisterProductSAID != $scope.prevRecord.returnRegisterProductSAID){
				if($scope.prevRecord.returnRegisterProductIsModified == false && $scope.prevRecord.returnRegisterProductId != 0 && $scope.returnRegisterType != 1){
					$scope.prevRecord.returnRegisterProductBatchDeleted=true;
					angular.element(document.getElementById('GoodsReturn')).scope().deleteList.push($scope.prevRecord);
				}	
			}
			
			//CONDITION FOR QTY OR FREE RETURN CHANGED
			else if($scope.currRecord.returnRegisterProductQtyReturn != $scope.prevRecord.returnRegisterProductQtyReturn || $scope.currRecord.returnRegisterProductFreeReturn != $scope.prevRecord.returnRegisterProductFreeReturn  ){
				$scope.masterRecord.returnRegisterProductQtyReturnDelta  =$scope.currRecord.returnRegisterProductQtyReturn-$scope.prevRecord.returnRegisterProductQtyReturn;
				$scope.masterRecord.returnRegisterProductFreeReturnDelta =$scope.currRecord.returnRegisterProductFreeReturn-$scope.prevRecord.returnRegisterProductFreeReturn;
			}
			
			
			
			
			///////////////////////=======MODIFIED LOGIC ENDS==========/////////////////
			$scope.masterRecord.returnRegisterProductIsModified=true;
			w2ui.grid.records[index]=$scope.masterRecord;
			w2ui.grid.refresh();
			angular.element(document.getElementById('GoodsReturn')).scope().calculateTotal();
			$scope.$close();	
		}
		
	};
	
	$scope.cancel=function(){
		$scope.$close();
	};
	
	$scope.calculatePSRate=function(){
		//$scope.showRRProductSelected.returnRegisterProductPurchaseRate=Number($scope.showRRProductSelected.returnRegisterProductMRP)*0.7;
		$scope.showRRProductSelected.returnRegisterProductPurchaseRate=Number(Number($scope.showRRProductSelected.returnRegisterProductMRP)*0.7).toFixed(2);
		$scope.showRRProductSelected.returnRegisterProductSellRate=Number(Number($scope.showRRProductSelected.returnRegisterProductMRP)*0.8).toFixed(2);
		//$scope.showRRProductSelected.returnRegisterProductSellRate=Number($scope.showRRProductSelected.returnRegisterProductMRP)*0.8;	
	};
	

}]);

function Gre_productvalidate(){
	flag=true;
	 if($.trim($('#product').val()).length==0){
		$("#product  ").css("background-color", "#fff4eb");
		flag=false;
	} 
	 /*if($.trim($('#quantity').val()).length==0){
			$("#quantity ").css("background-color", "#fff4eb");
			flag=false;
		} */
		if($.trim($('#mrp').val()).length==0){
			$("#mrp ").css("background-color", "#fff4eb");
			flag=false;
		} 
		if($.trim($('#purchaseRate').val()).length==0){
			$("#purchaseRate ").css("background-color", "#fff4eb");
			flag=false;
		} 
		if($.trim($('#saleingRate').val()).length==0){
			$("#saleingRate  ").css("background-color", "#fff4eb");
			flag=false;
		} 
		if(typeof angular.element(document.getElementById('GoodReturnAddProduct')).scope().showRRProductSelected.returnRegisterProductCondition==="undefined" || typeof angular.element(document.getElementById('GoodReturnAddProduct')).scope().showRRProductSelected.returnRegisterProductCondition!=="undefined" && angular.equals(angular.element(document.getElementById('GoodReturnAddProduct')).scope().showRRProductSelected.returnRegisterProductCondition,{})){
			$("#condition").css("background-color", "#fff4eb");
			flag=false;
		}
		if($.trim($('#batch ').val()).length==0){
			$("#batch ").css("background-color", "#fff4eb");
			flag=false;
		} 
		if($.trim($('#quantityavailable').val()).length==0){
			$("#quantityavailable  ").css("background-color", "#fff4eb");
			flag=false;
		} 
		if($.trim($('#freeavailable').val()).length==0){
			$("#freeavailable  ").css("background-color", "#fff4eb");
			flag=false;
		} 
		//if(angular.element(document.getElementById('GoodReturnAddProduct')).scope().returnRegisterType == 2){
			if($.trim($('#quantityreturn').val()).length==0){
				$("#quantityreturn  ").css("background-color", "#fff4eb");
				flag=false;
			} 
			if($.trim($('#freereturn').val()).length==0){
				$("#freereturn  ").css("background-color", "#fff4eb");
				flag=false;
			} 
		//} HERE free+qty return addition should nt be grater than free+qty Available validation is remaining
			
	  return flag;
}


