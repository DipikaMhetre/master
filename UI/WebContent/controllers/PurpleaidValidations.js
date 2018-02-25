
$.fn.allowNumbersOnly = function(restrictPattern){
	var targets = $(this);    
	var pattern = restrictPattern || /[^0-9]*/g; // some default pattern

	var restrictHandler = function(){
		
		var val = $(this).val();
		var newVal = val.replace(pattern, '');

		/*=====*/

		/*=====*/
		if (val !== newVal) { // To prevent selection and keyboard navigation issues
			$(this).val(newVal);
			targets.w2overlay({ html: '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
				'Only Numbers allowed !!'+
			'</div>'});
			setTimeout(function () { targets.w2overlay({ html: ''}); }, 3000);
			/* setTimeout(function () { targets.w2overlay({ html: ''}); }, 3000);
            targets.w2tag('Need Number here!!');*/
			/*   setTimeout(function () { targets.w2tag(''); }, 3000);*/

		}else{

		}
	};

	targets.on('keyup', restrictHandler);
	targets.on('paste', restrictHandler);
	targets.on('change', restrictHandler);

};

$.fn.allowTextOnly = function(restrictPattern){
	var targets = $(this);
	var pattern = restrictPattern || /[^a-zA-Z]*/g; // some default pattern

	var restrictHandler = function(){
		var val = $(this).val();
		var newVal = val.replace(pattern, '');

		if (val !== newVal) { // To prevent selection and keyboard navigation issues
			$(this).val(newVal);
			targets.w2overlay({ html: '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
				'Only Text allowed !!'+
			'</div>'});
			setTimeout(function () { targets.w2overlay({ html: ''}); }, 3000);
			/* setTimeout(function () { targets.w2overlay({ html: ''}); }, 3000);
            targets.w2tag('Need Number here!!');*/
			/*   setTimeout(function () { targets.w2tag(''); }, 3000);*/
		}
	};

	targets.on('keyup', restrictHandler);
	targets.on('paste', restrictHandler);
	targets.on('change', restrictHandler);
};

$.fn.allowTextOnlyWithSpace = function(restrictPattern){
	var targets = $(this);
	var pattern = restrictPattern || /[^a-zA-Z \\]*/g; // some default pattern

	var restrictHandler = function(){
		var val = $(this).val();
		var newVal = val.replace(pattern, '');

		if (val !== newVal) { // To prevent selection and keyboard navigation issues
			$(this).val(newVal);
			targets.w2overlay({ html: '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
				'Only Text allowed !!'+
			'</div>'});
			setTimeout(function () { targets.w2overlay({ html: ''}); }, 3000);

			$(this).val(newVal);
		}
	};

	targets.on('keyup', restrictHandler);
	targets.on('paste', restrictHandler);
	targets.on('change', restrictHandler);
};

$.fn.allowEmailOnly = function(restrictPattern){
	var targets = $(this);
	var pattern = restrictPattern || /[^0-9a-zA-Z@]*/g; // some default pattern
	// var pattern = restrictPattern || /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; // some default pattern

	var restrictHandler = function(){
		var val = $(this).val();
		var newVal = val.replace(pattern, '');
		/* targets.w2overlay({ html: '<div style="padding: 10px; line-height: 150%">'+
            'Only Email allowed !!'+
            '</div>'});
        setTimeout(function () { targets.w2overlay({ html: ''}); }, 3000);*/
		if (val !== newVal) { // To prevent selection and keyboard navigation issues
			$(this).val(newVal);
		}
	};

	targets.on('keyup', restrictHandler);
	targets.on('paste', restrictHandler);
	targets.on('change', restrictHandler);
};

$.fn.allowAlphaNumericOnly = function(restrictPattern){
	var targets = $(this);

	var pattern = restrictPattern || /[^0-9a-zA-Z]*/g; // some default pattern
	var restrictHandler = function(){
		var val = $(this).val();
		var newVal = val.replace(pattern, '');
		if (val !== newVal) { // To prevent selection and keyboard navigation issues
			targets.w2overlay({ html:  '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
				'Only Numbers or characters allowed !!'+
			'</div>'});
			setTimeout(function () { targets.w2overlay({ }); }, 3000);

			$(this).val(newVal);
		}
	};

	targets.on('keyup', restrictHandler);
	targets.on('paste', restrictHandler);
	targets.on('change', restrictHandler);
};


$.fn.allowAlphaNumericOnlywithspace = function(restrictPattern){
	var targets = $(this);

	var pattern = restrictPattern || /[^0-9a-zA-Z !\\]*/g; // some default pattern   /[^a-zA-Z !\\"]*/g;
	var restrictHandler = function(){
		var val = $(this).val();
		var newVal = val.replace(pattern, '');
		if (val !== newVal) { // To prevent selection and keyboard navigation issues
			targets.w2overlay({ html:  '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
				'Only Numbers or characters allowed !!'+
			'</div>'});
			setTimeout(function () { targets.w2overlay({ }); }, 3000);

			$(this).val(newVal);
		}
	};

	targets.on('keyup', restrictHandler);
	targets.on('paste', restrictHandler);
	targets.on('change', restrictHandler);
};
$.fn.allowAddress = function(restrictPattern){
	var targets = $(this);

	var pattern = restrictPattern || /[^0-9a-zA-Z ,-\.]*/g; // some default pattern
	var restrictHandler = function(){
		var val = $(this).val();
		var newVal = val.replace(pattern, '');
		if (val !== newVal) { // To prevent selection and keyboard navigation issues
			targets.w2overlay({ html:  '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
				'Letters numbers space and comma only !!'+
			'</div>'});
			setTimeout(function () { targets.w2overlay({ }); }, 3000);

			$(this).val(newVal);
		}
	};

	targets.on('keyup', restrictHandler);
	targets.on('paste', restrictHandler);
	targets.on('change', restrictHandler);
};


function Purplevalidator(ID,type,moduleid,method){
	switch (type) {
	case 0:
		// Email Validation

		var myclass=$('#'+ID).attr('class'); 
		var regex=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

		if(regex.test($('#'+ID).val())==false  && $('#'+ID).val()!="") {


			if(method=='blur'){
				$('#'+ID).css("background-color", "#fff4eb");
			}
			else{
				$('#'+ID).w2overlay({ html: '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
					'Please Enter Valid Email ID !!'+
				'</div>'});
				setTimeout(function () { $('#'+ID).w2overlay({ html: ''}); }, 3000);

			}

			if(myclass.search('addone')!=-1){

			}

			else{
				//var myclass=$('#'+ID).attr('class'); 

				var myclass2='addone';
				var myclass=$('#'+ID).addClass(myclass2);
				angular.element(document.getElementById('' + moduleid)).scope().errorCount++;


				//$('#'+ID).addClass(myclass).removeClass(myclass2);
			}

		}else{

			var myclass2=myclass;
			//var a=$('#'+ID).attr('class'); 

			if(myclass2.search('addone')!=-1) {
				angular.element(document.getElementById('' + moduleid)).scope().errorCount--;
				myclass=$('#'+ID).removeClass('addone');

				$('#'+ID).addClass(myclass);

			}
			else{
				//
			}

		}
		if($.trim($('#'+ID).val()).length==0){

			$('#'+ID).css("background-color", "white");
		}
		break;





	case 1:
		//Mobile Validation
		var myclass=$('#'+ID).attr('class'); 
		//var regex = /^(\+91-|\+91|0)?\d{10}$/;
		if($('#'+ID).val().length<6 && $('#'+ID).val()!="") {

			if(method=='blur' ){
				$('#'+ID).css("background-color", "#fff4eb");
			}
			else{
				$('#'+ID).w2overlay({ html: '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
					'Please Enter Valid Number !!'+
				'</div>'});
				setTimeout(function () { $('#'+ID).w2overlay({ html: ''}); }, 3000);
			}

			if(myclass.search('addone')!=-1){

			}

			else{
				//var myclass=$('#'+ID).attr('class'); 

				var myclass2='addone';
				var myclass=$('#'+ID).addClass(myclass2);
				angular.element(document.getElementById('' + moduleid)).scope().errorCount++;


				//$('#'+ID).addClass(myclass).removeClass(myclass2);
			}

		}else{

			var myclass2=myclass;
			var a=$('#'+ID).attr('class'); 

			if(myclass2.search('addone')!=-1) {
				angular.element(document.getElementById('' + moduleid)).scope().errorCount--;
				myclass=$('#'+ID).removeClass('addone');
				$('#'+ID).addClass(myclass);

			}
			else{

			}

		}
		/*if($('#'+ID).val()=="" && $('#'+ID).css('background-color') === 'rgb(255, 244, 235)' && method==''){

			$('#'+ID).w2overlay({ html: '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
				'Required Field !!'+
			'</div>'});
			setTimeout(function () { $('#'+ID).w2overlay({ html: ''}); }, 3000);
		}*/
		if($.trim($('#'+ID).val()).length==0){

			$('#'+ID).css("background-color", "white");
		}

		break;




	case 2:
		if($.trim($('#'+ID).val()).length==0 && $('#'+ID).css('background-color') === 'rgb(255, 244, 235)'){

			$('#'+ID).w2overlay({ html: '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
				'Required Field !!'+
			'</div>'});
			setTimeout(function () { $('#'+ID).w2overlay({ html: ''}); }, 3000);
		}
		break;
	case 3:
		if($.trim($('#'+ID).val()).length!=0 && $('#'+ID).css('background-color') === 'rgb(255, 244, 235)' &&  $('#'+ID).val()==0){

			$('#'+ID).w2overlay({ html: '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
				'Required Field !!'+
			'</div>'});
			setTimeout(function () { $('#'+ID).w2overlay({ html: ''}); }, 3000);
		}
		break;
	



	}



}

// Restrict Pattern Code In angular JS

pharmApp.directive('allowAddress', [function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
        
            var pattern = /[^0-9a-zA-Z ,-\.]*/g;
            function fromUser(text,element) {
                if (!text)
                    return text;

                var transformedInput = text.replace(pattern, '');
                if (transformedInput !== text) {
                 
                 ngModelCtrl.$setViewValue(text);
                    ngModelCtrl.$render();
                  
           $(this).val(text);
           $('#'+document.getElementsByName(ngModelCtrl.$name)[0].id).w2overlay({ html:  '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
            'Only Numbers or characters allowed !!'+
           '</div>'})
           setTimeout(function () { 
            $('#'+document.getElementsByName(ngModelCtrl.$name)[0].id).w2overlay({ html:  ''
               }); 
            
           ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                   

           $(this).val(newVal); }, 500);
                    
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
}]);
pharmApp.directive('allowNumbers', [function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
        
            var pattern =/[^0-9 ]*/g;
            function fromUser(text,element) {
            	
                if (!text)
                    return text;

                var transformedInput = text.replace(pattern, '');
                if (transformedInput !== text) {
                 
                 ngModelCtrl.$setViewValue(text);
                    ngModelCtrl.$render();
                  
           $(this).val(text);
           $('#'+document.getElementsByName(ngModelCtrl.$name)[0].id).w2overlay({ html:  '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
            'Only Numbers allowed !!'+
           '</div>'})
           setTimeout(function () { 
            $('#'+document.getElementsByName(ngModelCtrl.$name)[0].id).w2overlay({ html:  ''
               }); 
            
           ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                   

           $(this).val(newVal); }, 500);
                    
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
}]);
pharmApp.directive('allowNumberss', [function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
        
            var pattern =/[^1-9.]*/g;
            function fromUser(text,element) {
            	
                if (!text)
                    return text;

                var transformedInput = text.replace(pattern, '');
                if (transformedInput !== text) {
                 
                 ngModelCtrl.$setViewValue(text);
                    ngModelCtrl.$render();
                  
           $(this).val(text);
           $('#'+document.getElementsByName(ngModelCtrl.$name)[0].id).w2overlay({ html:  '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
            'Only Numbers allowed !!'+
           '</div>'})
           setTimeout(function () { 
            $('#'+document.getElementsByName(ngModelCtrl.$name)[0].id).w2overlay({ html:  ''
               }); 
            
           ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                   

           $(this).val(newVal); }, 500);
                    
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
}]);
pharmApp.directive('allowNumberswithdot', [function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
        	
            var pattern = /[^0-9.]*/g;
        	//var pattern=/[^0-9^-?\d+(?:\.\d+)?$]/;
            function fromUser(text,element) {
            	
                if (!text)
                    return text;

                var transformedInput = text.replace(pattern, '');
                if (transformedInput !== text) {
                 
                 ngModelCtrl.$setViewValue(text);
                    ngModelCtrl.$render();
                  
           $(this).val(text);
           $('#'+document.getElementsByName(ngModelCtrl.$name)[0].id).w2overlay({ html:  '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
            'Only Numbers allowed !!'+
           '</div>'})
           setTimeout(function () { 
            $('#'+document.getElementsByName(ngModelCtrl.$name)[0].id).w2overlay({ html:  ''
               }); 
            
           ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                   

           $(this).val(newVal); }, 500);
                    
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
}]);
pharmApp.directive('allowText', [function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
        
            var pattern = /[^a-zA-Z]*/g;
            function fromUser(text,element) {
                if (!text)
                    return text;

                var transformedInput = text.replace(pattern, '');
                if (transformedInput !== text) {
                 
                 ngModelCtrl.$setViewValue(text);
                    ngModelCtrl.$render();
                  
           $(this).val(text);
           $('#'+document.getElementsByName(ngModelCtrl.$name)[0].id).w2overlay({ html:  '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
            'Only Text allowed  !!'+
           '</div>'})
           setTimeout(function () { 
            $('#'+document.getElementsByName(ngModelCtrl.$name)[0].id).w2overlay({ html:  ''
               }); 
            
           ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                   

           $(this).val(newVal); }, 500);
                    
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
}]);
pharmApp.directive('allowTextwithspace', [function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
        
            var pattern = /[^a-zA-Z \\]*/g;
            function fromUser(text,element) {
            
                if (!text)
                    return text;

                var transformedInput = text.replace(pattern, '');
                if (transformedInput !== text) {
                 
                 ngModelCtrl.$setViewValue(text);
                    ngModelCtrl.$render();
                  
           $(this).val(text);
           $('#'+document.getElementsByName(ngModelCtrl.$name)[0].id).w2overlay({ html:  '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
            'Only Text allowed !!'+
           '</div>'})
           setTimeout(function () { 
            $('#'+document.getElementsByName(ngModelCtrl.$name)[0].id).w2overlay({ html:  ''
               }); 
            
           ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                   

           $(this).val(newVal); }, 500);
                    
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
}]);
pharmApp.directive('allowAlphanumeric', [function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
        
            var pattern = /[^0-9a-zA-Z]*/g;
            function fromUser(text,element) {
                if (!text)
                    return text;

                var transformedInput = text.replace(pattern, '');
                if (transformedInput !== text) {
                 
                 ngModelCtrl.$setViewValue(text);
                    ngModelCtrl.$render();
                  
           $(this).val(text);
           $('#'+document.getElementsByName(ngModelCtrl.$name)[0].id).w2overlay({ html:  '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
            'Only Numbers or characters allowed !!'+
           '</div>'})
           setTimeout(function () { 
            $('#'+document.getElementsByName(ngModelCtrl.$name)[0].id).w2overlay({ html:  ''
               }); 
            
           ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                   

           $(this).val(newVal); }, 500);
                    
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
}]);

pharmApp.directive('allowAlphanumericwithspace', [function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            
            var pattern = /[^0-9a-zA-Z. ]*/g;
            function fromUser(text,element) {
            	
                if (!text)
                    return text;

                var transformedInput = text.replace(pattern, '');
                if (transformedInput !== text) {
                 
                 ngModelCtrl.$setViewValue(text);
                    ngModelCtrl.$render();
                  
           $(this).val(text);
           $('#'+document.getElementsByName(ngModelCtrl.$name)[0].id).w2overlay({ html:  '<div style="padding: 8px; line-height: 28%; background-color: rgba(60,60,60,.82); color:#fff;">'+
            'Only Numbers or characters allowed !!'+
           '</div>'})
           setTimeout(function () { 
            $('#'+document.getElementsByName(ngModelCtrl.$name)[0].id).w2overlay({ html:  '' }); 
            
            
           ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                   

           $(this).val(newVal); }, 500);
                    
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
}]);







