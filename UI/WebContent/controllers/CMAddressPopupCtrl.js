
pharmApp.controller('CMAddressPopupCtrl', ['$scope','$modal','popuptype','objIndex', function ($scope, $modal,popuptype,objIndex) {
	$scope.showAddressSelected={};
	$scope.entityList=[];
	$scope.errorCount=0;
	$scope.countryList=[{id:1,countryName:'INDIA'}];
	$scope.init=function(){
		angular.copy(angular.element(document.getElementById('ContactManager')).scope().entityAddressList,$scope.entityList);
		if(popuptype == 'new'){
			$scope.showAddressSelected={};
		}else{
			angular.copy(angular.element(document.getElementById('ContactManager')).scope().showContactSelected.contactAddressList[objIndex],$scope.showAddressSelected);
		}
	};
	
	$scope.submit=function(){
		
		var a=AddressPopvalidate()
		 if(a==false){
			 return false
		 }
		if(popuptype=='new'){
			$scope.showAddressSelected.adreessId=0;
			$scope.showAddressSelected.addressIsDeleted=false;
			$scope.showAddressSelected.entity={"entityDetailsId":14,"entityCompanyList":null,"entityDetailsTypeId":0,"entityDeatilsDescription":"home"}
			$scope.showAddressSelected.addressCountry="INDIA";
			$scope.showAddressSelected.addressSummary=addressFormated($scope.showAddressSelected);
			if(angular.element(document.getElementById('ContactManager')).scope().showContactSelected.contactAddressList == null){
				angular.element(document.getElementById('ContactManager')).scope().showContactSelected.contactAddressList = [];
			}
			angular.element(document.getElementById('ContactManager')).scope().showContactSelected.contactAddressList.push($scope.showAddressSelected);
		}else{
			$scope.showAddressSelected.addressSummary=addressFormated($scope.showAddressSelected);
			angular.copy($scope.showAddressSelected,angular.element(document.getElementById('ContactManager')).scope().showContactSelected.contactAddressList[objIndex]);
		}
		$scope.$close();
	};
	
	$scope.cancel=function(){
		$scope.$close();
		
	};



}]);
function AddressPopvalidate(){
	
	flag=true;
	 if($.trim($('#caddressline1').val()).length==0 ){
	  $('#caddressline1').css("background-color", "#fff4eb");
	   flag=false;
	 }
   if($.trim($('#city').val()).length==0 ){
	  $('#city').css("background-color", "#fff4eb");
	   flag=false;
	 }
  if($.trim($('#pincode').val()).length==0 ){
	  $('#pincode').css("background-color", "#fff4eb");
	   flag=false;
	 }
  if($.trim($('#state').val()).length==0 ){
	  $('#state').css("background-color", "#fff4eb");
	   flag=false;
	 }
 
  return flag;
}