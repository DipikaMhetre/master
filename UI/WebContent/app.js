var pharmApp=angular.module('pharmApp',['ngRoute','ui.bootstrap','ngToast','ngFileUpload','ngCookies']);
pharmApp.provider('configurableService', function () {
	var name = 'Satyajit';
	this.setName = function (newName) {
		name = newName;
	};
	this.$get = function () {
		return name;
	};
});
pharmApp.config(['$routeProvider'/*,'configurableProvider'*/, function ($routeProvider/*,configurable*/) {
	
	
	/*debugger
	var basket= $injector.get("basket");
	basket.addItem(a);*/
	/*$routeProvider.when('/purchase', {templateUrl: 'partials/purchase.html', controller: 'PurchaseCtrl'})*/
	$routeProvider.when('/view1', {templateUrl: function(configurable){
		
		if(angular.equals({},angular.element('*[ng-app]').injector().get("configurable"))){
			angular.copy(angular.element('*[ng-app]').injector().get('$cookieStore').get('userInfoCookie2'),angular.element('*[ng-app]').injector().get("configurable"));
		}
		
		var obj=angular.element('*[ng-app]').injector().get("configurable");
		return 'ViewSwitcher?pageId='+obj.pageId+'&userId='+obj.userId+'&token='+obj.token;
		}, controller: '' });
	$routeProvider.when('/view2', {templateUrl: function(configurable){
		
		if(angular.equals({},angular.element('*[ng-app]').injector().get("configurable"))){
			angular.copy(angular.element('*[ng-app]').injector().get('$cookieStore').get('userInfoCookie2'),angular.element('*[ng-app]').injector().get("configurable"));
		}
		var obj=angular.element('*[ng-app]').injector().get("configurable");
		
		return 'ViewSwitcher?pageId='+obj.pageId+'&userId='+obj.userId+'&token='+obj.token;
		}, controller: '' });
	$routeProvider.when('/stockMangaer', {templateUrl: 'partials/stock_manager.jsp', controller: 'StockManagerCtrl'});
	
	

	/*$routeProvider.when('/Sales', {templateUrl: 'partials/sales.html', controller: 'SalesCtrl'});
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: ''});
    $routeProvider.when('/masterCompany', {templateUrl: 'partials/master_company.html', controller: 'CompanyMasterCtrl'});
    $routeProvider.when('/grid', {templateUrl: 'partials/grid.html', controller: ''});
    $routeProvider.when('/masterSupplier', {templateUrl: 'partials/master_supplier.html', controller: 'SupplierMasterCtrl'});
    $routeProvider.when('/masterMr', {templateUrl: 'partials/master_mr.html', controller: 'MrMasterCtrl'});
    $routeProvider.when('/masterDivision', {templateUrl: 'partials/master_division.html', controller: 'DivisionMasterCtrl'});
    $routeProvider.when('/masterProduct', {templateUrl: 'partials/master_product.html', controller: 'ProductMasterCtrl'});
    $routeProvider.when('/masterProduct2', {templateUrl: 'partials/master_product_2.html', controller: 'ProductMasterCtrl'});
    $routeProvider.when('/masterCustomer', {templateUrl: 'partials/master_customer.html', controller: 'CustomerMasterCtrl'});
    $routeProvider.when('/masterSalesman', {templateUrl: 'partials/master_salesman.html', controller: 'SalesmanMasterCtrl'});
    $routeProvider.when('/masterContent', {templateUrl: 'partials/master_product_content.html', controller: 'ContentMasterCtrl'});
    $routeProvider.when('/masterArea', {templateUrl: 'partials/master_area.html', controller: 'AreaMasterCtrl'});
    $routeProvider.when('/masterRoute', {templateUrl: 'partials/master_route.html', controller: 'RouteMasterCtrl'});
    $routeProvider.when('/utilityLocksmith', {templateUrl: 'partials/utility/utility_locksmith.html', controller: 'LockSmithCtrl'});
    $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: ''});
    $routeProvider.when('/masterTaxCode', {templateUrl: 'partials/master_taxcode.html', controller: 'TaxCodeMasterCtrl'});

    $routeProvider.when('/goodsReciept', {templateUrl: 'partials/goodsreceipt.html', controller: 'GoodsRecieptCtrl'});
    $routeProvider.when('/stockMangaer', {templateUrl: 'partials/stock_manager.html', controller: 'StockManagerCtrl'});
    $routeProvider.when('/ContactManager', {templateUrl: 'partials/utility/contacts_manager.html', controller: 'ContactManagerCtrl'});
    $routeProvider.when('/myLogin', {templateUrl: 'partials/myLogin.html', controller: 'LoginCtrl'});
    $routeProvider.when('/MyProfileManager', {templateUrl: 'partials/utility/my_profile.html', controller: 'MyProfileManagerCtrl'});
    $routeProvider.when('/returnregister', {templateUrl: 'partials/return_management/return_register.html', controller: 'ReturnsRegisterCtrl'});
    //$routeProvider.when('/goodsreturn', {templateUrl: 'partials/return_management/goods_return.html', controller: 'GoodsReturnCtrl'});
    $routeProvider.when('/companyreturn', {templateUrl: 'partials/return_management/company_claim.html', controller: 'CompanyClaimCtrl'});
    $routeProvider.when('/debitCreditNoteReasons', {templateUrl: 'partials/debit_credit_note_reasons.html', controller: ''});
    $routeProvider.when('/ReportManager', {templateUrl: 'partials/reporting_centar/report_manager.html', controller: 'ReportManagerCtrl'});
    $routeProvider.when('/AboutUs', {templateUrl: 'partials/about_us/about_us.html', controller: ''});  
    $routeProvider.when('/ContactUs', {templateUrl: 'partials/about_us/contact_us.html', controller: ''});
    $routeProvider.when('/SiteMap', {templateUrl: 'partials/about_us/site_map.html', controller: ''});
    $routeProvider.when('/ReleaseNote', {templateUrl: 'partials/about_us/release_notes.html', controller: ''});
    $routeProvider.when('/FAQs', {templateUrl: 'partials/about_us/faqs.html', controller: ''});
    $routeProvider.when('/KnownIssues', {templateUrl: 'partials/about_us/known_issues.html', controller: ''});*/
	$routeProvider.when('/userDashboard', {templateUrl: 'partials/userdashboard.jsp', controller: ''});
	$routeProvider.otherwise({redirectTo: '/userDashboard'});
	//$routeProvider.when('/goodsreturn', {template:, controller: 'GoodsReturnCtrl'})
}]).run(function($rootScope, $templateCache) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        /*if (typeof(current) !== 'undefined'){
            $templateCache.remove(current.templateUrl);
        }*/
    	
    	//$templateCache.removeAll();
    });
});



/*pharmApp.service('userService', function() {
    var items = [];
    var userData = {};

    this.addItem = function(item) {
        items.push(item);
    };
    this.removeItem = function(item) {
        var index = items.indexOf(item);
        items.splice(index, 1);
    };
    this.items = function() {
        return items;
    };
    this.getItem = function(index) {
    	//var index = items.indexOf(item);
        return items[index];
    };
    this.alert =function(){
    	alert('HI From service');
    };


});*/
var CalculatorService = pharmApp.service('Calculator', function () {
	this.square = function (a) { 
		alert('Doing square')
		return a*a};

});

pharmApp.service('basket', function() {
	var items = [];
	var myBasketService = {};

	myBasketService.addItem = function() {
		items.push(item);
		alert('lol-------');
	};
	myBasketService.removeItem = function(item) {
		var index = items.indexOf(item);
		items.splice(index, 1);
	};
	myBasketService.items = function() {
		return items;
	};


	return myBasketService;
});

pharmApp.service('userService', function () {
	var userData={};
	this.setData = function (userId,pageId,token) {
		userData.userId=userId;
		userData.pageId=pageId;
		userData.token=token;

		//TO DO:
	};

	this.getData = function () {
		alert('Data Given {'+userData.userId+','+userData.pageId+','+userData.token);
		return userData;
		//TO DO:
	};
});


pharmApp.provider('configurable', function () {
	var userData={};
	this.setData = function (userId,pageId,token) {
		userData.userId=userId;
		userData.pageId=pageId;
		userData.token=token;

		//TO DO:
	};
	this.$get = function () {
		return userData;
	};
});



pharmApp.service('wareHouse', function () {
	var myItems=[];
	this.setData = function (name,obj) {
		var ob={};
		ob.key=name;
		ob.val=obj;
		var index=akricksGetObjIndex(myItems,{key:''+name});
		if(index==-1){
			myItems.push(ob);
		}else{
			angular.copy(ob,myItems[index])
		}
		

		//TO DO:
	};

	this.getData = function (name) {		
		return akricksFilter(myItems,{key:''+name})[0].val;
		//TO DO:
	};
	this.getDataIndex = function (name) {		
		return akricksGetObjIndex(myItems,{key:''+name});
		//TO DO:
	};
	this.clearAll = function () {
		myItems=[];
	};
});

function getCurrentDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 
	
	today = dd+'/'+mm+'/'+yyyy;
	return today;
	
}








