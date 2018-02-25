pharmApp.controller('BusinessDetailsCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.LicenceList=[];
	$scope.custLic={};
	$scope.errorCount=0;
	$scope.deltaList=[];
	$scope.init=function(){
		$scope.showAdd=true;
		var config = {
				layout: {
					name: 'layout',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%', resizable: false},
					         { type: 'main'}
					         ]
				},
				grid: { 

					name: 'grid',
					show: {
						toolbar : false,
						toolbarDelete: true,
						toolbarAdd : true
					},
					columns : [
						 {field : 'businessLicenceTypeName',caption : 'Licence Type',size : '25%',}, 
						{field : 'businessLicenceNumber',caption : 'Licence No',size : '25%'}, 
						{field : 'businessLicenceStartdate',caption : 'Start Date',size : '25%'}, 
						{field : 'businessLicenceEndDate',caption : 'End Date',size : '25%'} 
						],
					           records:[],
					           onSelect: function(event) {
						        	event.onComplete = function () {			      		
						        	
						        	var objSelected=w2ui.grid.get(event.recid);
						        	angular.copy(objSelected,angular.element(document.getElementById('BusinessDetails')).scope().custLic);
						        	angular.element(document.getElementById('BusinessDetails')).scope().showAdd=false;
						        	angular.element(document.getElementById('BusinessDetails')).scope().showModify=true;
						        	angular.element(document.getElementById('BusinessDetails')).scope().$apply();
						        	}
						        }  ,
						        onUnselect:function(event) {
						        	event.onComplete = function () {
						        		//angular.copy({},angular.element(document.getElementById('CustomerMaster')).scope().custLic);
						        		angular.element(document.getElementById('BusinessDetails')).scope().custLic={};
						        		angular.element(document.getElementById('BusinessDetails')).scope().showAdd=true;
						        		angular.element(document.getElementById('BusinessDetails')).scope().showModify=false;
						        		angular.element(document.getElementById('BusinessDetails')).scope().$apply();
						        		
						        	}
						        	},
					           keydown:function(event) {
					        	   // this method is called from w2utils
					        	   var obj = this;
					        	   if(event.keyCode==75){ w2ui.grid.keyboard=false;alert('keyboard OFF'); w2ui.grid.selectNone();};
					        	   if(event.keyCode==76){ w2ui.grid.keyboard=true;alert('keyboard ON');};
					        	   if (obj.keyboard !== true) return;
					        	   // trigger event
					        	   var eventData = obj.trigger({ phase: 'before', type: 'keydown', target: obj.name, originalEvent: event });
					        	   if (eventData.isCancelled === true) return;
					        	   // default behavior
					        	   var empty   = false;
					        	   var records = $('#grid_'+ obj.name +'_records');
					        	   var sel     = obj.getSelection();
					        	   if (sel.length == 0) empty = true;
					        	   var recid   = sel[0] || null;
					        	   var columns = [];
					        	   var recid2  = sel[sel.length-1];
					        	   if (typeof recid == 'object' && recid != null) {
					        		   recid   = sel[0].recid;
					        		   columns = [];
					        		   var ii  = 0;
					        		   while (true) {
					        			   if (!sel[ii] || sel[ii].recid != recid) break;
					        			   columns.push(sel[ii].column);
					        			   ii++;
					        		   }
					        		   recid2  = sel[sel.length-1].recid;
					        	   }
					        	   var ind    = obj.get(recid, true);
					        	   var ind2   = obj.get(recid2, true);
					        	   var rec    = obj.get(recid);
					        	   var recEL  = $('#grid_'+ obj.name +'_rec_'+ (ind !== null ? w2utils.escapeId(obj.records[ind].recid) : 'none'));
					        	   var cancel = false;
					        	   var key    = event.keyCode;
					        	   var shiftKey= event.shiftKey;
					        	   if (key == 9) { // tab key
					        		   if (event.shiftKey) key = 37; else key = 39; // replace with arrows
					        		   shiftKey = false;
					        		   cancel   = true;
					        	   }
					        	   switch (key) {
					        	   case 8:  // backspace
					        	   case 46: // delete
					        		   if(recid !=-1){
					        			   if (this.show.toolbarDelete) obj["delete"]();
					        			   cancel = true;
					        			   event.stopPropagation();
					        		   }
					        		   break;

					        	   case 27: // escape
					        		   obj.selectNone();
					        		   if (sel.length > 0 && typeof sel[0] == 'object') {
					        			   obj.select({ recid: sel[0].recid, column: sel[0].column });
					        		   }
					        		   cancel = true;
					        		   break;

					        	   case 65: // cmd + A
					        		   if (!event.metaKey && !event.ctrlKey) break;
					        		   obj.selectAll();
					        		   cancel = true;
					        		   break;

					        	   case 70: // cmd + F
					        		   if (!event.metaKey && !event.ctrlKey) break;
					        		   $('#grid_'+ obj.name + '_search_all').focus();
					        		   cancel = true;
					        		   break;

					        	   case 13: // enter
					        		   // if expandable columns - expand it
					        		   if (this.selectType == 'row' && obj.show.expandColumn === true) {
					        			   if (recEL.length <= 0) break;
					        			   obj.toggle(recid, event);
					        			   cancel = true;
					        		   } else { // or enter edit
					        			   for (var c in this.columns) {
					        				   if (this.columns[c].editable) {
					        					   columns.push(parseInt(c));
					        					   break;
					        				   }
					        			   }
					        			   // edit last column that was edited
					        			   if (this.selectType == 'row' && this.last.edit_col) columns = [this.last.edit_col];
					        			   if (columns.length > 0) {
					        				   obj.editField(recid, columns[0], null, event);
					        				   cancel = true;
					        			   }else{										
					        				   var grid = this;										
					        				   openMyAngularPopup(grid);	
					        			   }
					        		   }
					        		   cancel = true;
					        		   break;

					        	   case 37: // left
					        		   if (empty) break;
					        		   // check if this is subgrid
					        		   var parent = $('#grid_'+ this.name +'_rec_'+ w2utils.escapeId(obj.records[ind].recid)).parents('tr');
					        		   if (parent.length > 0 && String(parent.attr('id')).indexOf('expanded_row') != -1) {
					        			   var recid = parent.prev().attr('recid');
					        			   var grid  = parent.parents('.w2ui-grid').attr('name');
					        			   obj.selectNone();
					        			   w2utils.keyboard.active(grid);
					        			   w2ui[grid].set(recid, { expanded: false });
					        			   w2ui[grid].collapse(recid);
					        			   w2ui[grid].click(recid);
					        			   cancel = true;
					        			   break;
					        		   }
					        		   if (this.selectType == 'row') {
					        			   if (recEL.length <= 0 || rec.expanded !== true ) break;
					        			   obj.set(recid, { expanded: false }, true);
					        			   obj.collapse(recid, event);
					        		   } else {
					        			   var prev = obj.prevCell(columns[0]);
					        			   if (prev != null) {
					        				   if (shiftKey && obj.multiSelect) {
					        					   if (tmpUnselect()) return;
					        					   var tmp    = [];
					        					   var newSel = [];
					        					   var unSel  = [];
					        					   if (columns.indexOf(this.last.sel_col) == 0 && columns.length > 1) {
					        						   for (var i in sel) {
					        							   if (tmp.indexOf(sel[i].recid) == -1) tmp.push(sel[i].recid);
					        							   unSel.push({ recid: sel[i].recid, column: columns[columns.length-1] });
					        						   }
					        					   } else {
					        						   for (var i in sel) {
					        							   if (tmp.indexOf(sel[i].recid) == -1) tmp.push(sel[i].recid);
					        							   newSel.push({ recid: sel[i].recid, column: prev });
					        						   }
					        					   }
					        					   obj.unselect.apply(obj, unSel);
					        					   obj.select.apply(obj, newSel);
					        				   } else {
					        					   event.shiftKey = false;
					        					   obj.click({ recid: recid, column: prev }, event);
					        				   }
					        			   } else {
					        				   // if selected more then one, then select first
					        				   if (!shiftKey) {
					        					   for (var s=1; s<sel.length; s++) obj.unselect(sel[s]);
					        				   }
					        			   }
					        		   }
					        		   cancel = true;
					        		   break;

					        	   case 39: // right
					        		   if (empty) break;
					        		   if (this.selectType == 'row') {
					        			   if (recEL.length <= 0 || rec.expanded === true || obj.show.expandColumn !== true) break;
					        			   obj.expand(recid, event);
					        		   } else {
					        			   var next = obj.nextCell(columns[columns.length-1]);
					        			   if (next !== null) {
					        				   if (shiftKey && key == 39 && obj.multiSelect) {
					        					   if (tmpUnselect()) return;
					        					   var tmp    = [];
					        					   var newSel = [];
					        					   var unSel  = [];
					        					   if (columns.indexOf(this.last.sel_col) == columns.length-1 && columns.length > 1) {
					        						   for (var i in sel) {
					        							   if (tmp.indexOf(sel[i].recid) == -1) tmp.push(sel[i].recid);
					        							   unSel.push({ recid: sel[i].recid, column: columns[0] });
					        						   }
					        					   } else {
					        						   for (var i in sel) {
					        							   if (tmp.indexOf(sel[i].recid) == -1) tmp.push(sel[i].recid);
					        							   newSel.push({ recid: sel[i].recid, column: next });
					        						   }
					        					   }
					        					   obj.unselect.apply(obj, unSel);
					        					   obj.select.apply(obj, newSel);
					        				   } else {
					        					   obj.click({ recid: recid, column: next }, event);
					        				   }
					        			   } else {
					        				   // if selected more then one, then select first
					        				   if (!shiftKey) {
					        					   for (var s=0; s<sel.length-1; s++) obj.unselect(sel[s]);
					        				   }
					        			   }
					        		   }
					        		   cancel = true;
					        		   break;

					        	   case 38: // up
					        		   if (empty) selectTopRecord();
					        		   if (recEL.length <= 0) break;
					        		   // move to the previous record
					        		   var prev = obj.prevRow(ind);
					        		   if (prev != null) {
					        			   // jump into subgrid
					        			   if (obj.records[prev].expanded) {
					        				   var subgrid = $('#grid_'+ obj.name +'_rec_'+ w2utils.escapeId(obj.records[prev].recid) +'_expanded_row').find('.w2ui-grid');
					        				   if (subgrid.length > 0 && w2ui[subgrid.attr('name')]) {
					        					   obj.selectNone();
					        					   var grid = subgrid.attr('name');
					        					   var recs = w2ui[grid].records;
					        					   w2utils.keyboard.active(grid);
					        					   w2ui[grid].click(recs[recs.length-1].recid);
					        					   cancel = true;
					        					   break;
					        				   }
					        			   }
					        			   if (shiftKey && obj.multiSelect) { // expand selection
					        				   if (tmpUnselect()) return;
					        				   if (obj.selectType == 'row') {
					        					   if (obj.last.sel_ind > prev && obj.last.sel_ind != ind2) {
					        						   obj.unselect(obj.records[ind2].recid);
					        					   } else {
					        						   obj.select(obj.records[prev].recid);
					        					   }
					        				   } else {
					        					   if (obj.last.sel_ind > prev && obj.last.sel_ind != ind2) {
					        						   prev = ind2;
					        						   var tmp = [];
					        						   for (var c in columns) tmp.push({ recid: obj.records[prev].recid, column: columns[c] });
					        						   obj.unselect.apply(obj, tmp);
					        					   } else {
					        						   var tmp = [];
					        						   for (var c in columns) tmp.push({ recid: obj.records[prev].recid, column: columns[c] });
					        						   obj.select.apply(obj, tmp);
					        					   }
					        				   }
					        			   } else { // move selected record
					        				   obj.selectNone();
					        				   obj.click({ recid: obj.records[prev].recid, column: columns[0] }, event);
					        			   }
					        			   obj.scrollIntoView(prev);
					        			   if (event.preventDefault) event.preventDefault();
					        		   } else {
					        			   // if selected more then one, then select first
					        			   if (!shiftKey) {
					        				   for (var s=1; s<sel.length; s++) obj.unselect(sel[s]);
					        			   }
					        			   // jump out of subgird (if first record)
					        			   var parent = $('#grid_'+ obj.name +'_rec_'+ w2utils.escapeId(obj.records[ind].recid)).parents('tr');
					        			   if (parent.length > 0 && String(parent.attr('id')).indexOf('expanded_row') != -1) {
					        				   var recid = parent.prev().attr('recid');
					        				   var grid  = parent.parents('.w2ui-grid').attr('name');
					        				   obj.selectNone();
					        				   w2utils.keyboard.active(grid);
					        				   w2ui[grid].click(recid);
					        				   cancel = true;
					        				   break;
					        			   }
					        		   }
					        		   break;

					        	   case 40: // down
					        		   if (empty) selectTopRecord();
					        		   if (recEL.length <= 0) break;
					        		   // jump into subgrid
					        		   if (obj.records[ind2].expanded) {
					        			   var subgrid = $('#grid_'+ this.name +'_rec_'+ w2utils.escapeId(obj.records[ind2].recid) +'_expanded_row').find('.w2ui-grid');
					        			   if (subgrid.length > 0 && w2ui[subgrid.attr('name')]) {
					        				   obj.selectNone();
					        				   var grid = subgrid.attr('name');
					        				   var recs = w2ui[grid].records;
					        				   w2utils.keyboard.active(grid);
					        				   w2ui[grid].click(recs[0].recid);
					        				   cancel = true;
					        				   break;
					        			   }
					        		   }
					        		   // move to the next record
					        		   var next = obj.nextRow(ind2);
					        		   if (next != null) {
					        			   if (shiftKey && obj.multiSelect) { // expand selection
					        				   if (tmpUnselect()) return;
					        				   if (obj.selectType == 'row') {
					        					   if (this.last.sel_ind < next && this.last.sel_ind != ind) {
					        						   obj.unselect(obj.records[ind].recid);
					        					   } else {
					        						   obj.select(obj.records[next].recid);
					        					   }
					        				   } else {
					        					   if (this.last.sel_ind < next && this.last.sel_ind != ind) {
					        						   next = ind;
					        						   var tmp = [];
					        						   for (var c in columns) tmp.push({ recid: obj.records[next].recid, column: columns[c] });
					        						   obj.unselect.apply(obj, tmp);
					        					   } else {
					        						   var tmp = [];
					        						   for (var c in columns) tmp.push({ recid: obj.records[next].recid, column: columns[c] });
					        						   obj.select.apply(obj, tmp);
					        					   }
					        				   }
					        			   } else { // move selected record
					        				   obj.selectNone();
					        				   obj.click({ recid: obj.records[next].recid, column: columns[0] }, event);
					        			   }
					        			   obj.scrollIntoView(next);
					        			   cancel = true;
					        		   } else {
					        			   // if selected more then one, then select first
					        			   if (!shiftKey) {
					        				   for (var s=0; s<sel.length-1; s++) obj.unselect(sel[s]);
					        			   }
					        			   // jump out of subgrid (if last record in subgrid)
					        			   var parent = $('#grid_'+ this.name +'_rec_'+ w2utils.escapeId(obj.records[ind2].recid)).parents('tr');
					        			   if (parent.length > 0 && String(parent.attr('id')).indexOf('expanded_row') != -1) {
					        				   var recid = parent.next().attr('recid');
					        				   var grid  = parent.parents('.w2ui-grid').attr('name');
					        				   obj.selectNone();
					        				   w2utils.keyboard.active(grid);
					        				   w2ui[grid].click(recid);
					        				   cancel = true;
					        				   break;
					        			   }
					        		   }
					        		   break;

					        		   // copy & paste

					        	   case 17: // ctrl key
					        	   case 91: // cmd key
					        		   if (empty) break;
					        		   var text = obj.copy();
					        		   $('body').append('<textarea id="_tmp_copy_data" '+
					        				   '   onpaste="var obj = this; setTimeout(function () { w2ui[\''+ obj.name + '\'].paste(obj.value); }, 1);" '+
					        				   '   onkeydown="w2ui[\''+ obj.name +'\'].keydown(event)"'+
					        				   '   style="position: absolute; top: -100px; height: 1px; width: 1px">'+ text +'</textarea>');
					        		   $('#_tmp_copy_data').focus().select();
					        		   // remove _tmp_copy_data textarea
					        		   $(document).on('keyup', tmp_key_down);
					        		   function tmp_key_down() { 
					        			   $('#_tmp_copy_data').remove(); 
					        			   $(document).off('keyup', tmp_key_down); 
					        		   }
					        		   break;

					        	   case 88: // x - cut
					        		   if (empty) break;
					        		   if (event.ctrlKey || event.metaKey) {
					        			   setTimeout(function () { obj["delete"](true); }, 100);
					        		   }
					        		   break;

					        	   default: return; // exit this handler for other keys
					        	   }
					        	   var tmp = [187, 189, 32]; // =-spacebar
					        	   for (var i=48; i<=90; i++) tmp.push(i); // 0-9,a-z,A-Z
					        	   if (tmp.indexOf(key) != -1 && !event.ctrlKey && !event.metaKey && !cancel) {
					        		   if (columns.length == 0) columns.push(0);
					        		   var tmp = String.fromCharCode(key);
					        		   if (key == 187) tmp = '=';
					        		   if (key == 189) tmp = '-';
					        		   if (!shiftKey)  tmp = tmp.toLowerCase();
					        		   obj.editField(recid, columns[0], tmp, event);
					        		   cancel = true;
					        	   }
					        	   if (cancel) { // cancel default behaviour
					        		   if (event.preventDefault) event.preventDefault();
					        	   }
					        	   // event after
					        	   obj.trigger($.extend(eventData, { phase: 'after' }));

					        	   function selectTopRecord() {
					        		   var ind = Math.floor((records[0].scrollTop + (records.height() / 2.1)) / obj.recordHeight);
					        		   if (!obj.records[ind]) ind = 0;
					        		   obj.select({ recid: obj.records[ind].recid, column: 0});
					        	   }				
					        	   function tmpUnselect () {
					        		   if (obj.last.sel_type != 'click') return false;
					        		   if (obj.selectType != 'row') {
					        			   obj.last.sel_type = 'key';
					        			   if (sel.length > 1) {
					        				   for (var s in sel) {
					        					   if (sel[s].recid == obj.last.sel_recid && sel[s].column == obj.last.sel_col) {
					        						   sel.splice(s, 1);
					        						   break;
					        					   }
					        				   }
					        				   obj.unselect.apply(obj, sel);
					        				   return true;
					        			   }
					        			   return false;
					        		   } else {
					        			   obj.last.sel_type = 'key';
					        			   if (sel.length > 1) {
					        				   sel.splice(sel.indexOf(obj.records[obj.last.sel_ind].recid), 1);
					        				   obj.unselect.apply(obj, sel);
					        				   return true;
					        			   }
					        			   return false;
					        		   }
					        	   }


					           }

				}

		};
		if(!$rootScope.grid){
			loadC(config);
		}else{
			w2ui.grid.destroy();
			w2ui.layout.destroy();
			loadC(config);

		}
		GetClock();
		 var json={entity:1,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};
			
			$http({
			    method: 'POST',
			    url: "http://localhost:8080/Purple/rest/apiBusiness/getBusiness",
			    async:false,
			    data:JSON.stringify(json),
			    headers: {'Content-Type': 'application/json'}
			}).success(function(data, status, headers, config) {
				if(data.responseCode == 200){
					var respData=JSON.parse(data.responseData);
					
					angular.copy(respData.BusinessLicenceList,$scope.LicenceList)
					$scope.ShowBusinessSelected=respData.BusinessDetails[0];	
					angular.copy(respData.BusinessDetails[0].businessLicenceList,w2ui.grid.records);
					 for(i=0;i<w2ui.grid.records.length;i++){
						 w2ui.grid.records[i].recid=i;
					 }
					w2ui.grid.refresh();
					ngToast.create({
						  className: 'success',
						  content: '<span>Data Loaded successfully...</span>',
						  timeout: 3000,
						  animation:'fade'
						});
					
					
								
					
					
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
	$scope.addRecord = function()  {
		 a=LicenceValidation()
		  if(a==false){
			  return false;
		  }
			for(i=0;i<w2ui.grid.records.length;i++){
				if(w2ui.grid.records[i].businessLicenceNumber==$scope.custLic.businessLicenceNumber){  
			
					alert('Record already present!!');
					return false;


				
		}
			}
		
			$scope.custLic.businessLicenceTypeName=getPurpleObjArray($scope.LicenceList,{businessLicenceType:$scope.custLic.businessLicenceType})[0].businessLicenceTypeName;
			
			$scope.custLic.recid=w2ui.grid.records.length+1;
			$scope.custLic.businessLicenceAction=1;
			//$scope.custLic.customerLicenceIndex=w2ui.grid.records.length+1;
			w2ui.grid.records.push($scope.custLic);
			  
			$scope.deltaList.push($scope.custLic);
			w2ui.grid.refresh();
			$scope.custLic={};
			
			
		};
		$scope.modifyRecord = function(){
			var objSelected=w2ui.grid.get(w2ui.grid.getSelection());
			//var ljson = {recid : objSelected.recid ,customerLicenceType : $scope.customerLicenceTypeSelected.name,customerLicenceNumber:$scope.showCustomerSelected.customerLicenceNumber,customerLicenceStartDate: $scope.showCustomerSelected.customerLicenceStartDate,customerLicenceEndDate:$scope.showCustomerSelected.customerLicenceEndDate};
			///////////////////////////////
		     if($scope.custLic.businessLicenceAction==1){
	        	  var index=getPurpleObjIndex($scope.deltaList,{recid:$scope.custLic.recid})
	        	  $scope.deltaList.splice(index,1);
	        	  var index1=getPurpleObjIndex(w2ui.grid.records,{recid:$scope.custLic.recid})
                  w2ui.grid.records.splice(index1,1);
	        	  a=LicenceValidation();
				   if(a==false){
					   return false;
				   }
	  			for(i=0;i<w2ui.grid.records.length;i++){
	  				if(w2ui.grid.records[i].businessLicenceNumber==$scope.custLic.businessLicenceNumber){
	  				  
	  					
	  					return false;
	  					

	  				
	  		}
	  			}
	  		
	  			//$scope.custLic.businessLicenceTypeName=getPurpleObjArray($scope.LicenceList,{businessLicenceType:$scope.custLic.businessLicenceType})[0].businessLicenceTypeName;
	  			
	  			$scope.custLic.recid=w2ui.grid.records.length+1;
	  			$scope.custLic.businessLicenceAction=1;
	  			//$scope.custLic.customerLicenceIndex=w2ui.grid.records.length+1;
	  			w2ui.grid.records.push($scope.custLic);
	  			  
	  			$scope.deltaList.push($scope.custLic);
	  			w2ui.grid.refresh();
	  			$scope.custLic={};
	          }
		     else{
			 a=LicenceValidation();
			   if(a==false){
				   return false;
			   }
			
			
			for(i=0;i<w2ui.grid.records.length;i++){
				if(w2ui.grid.records[i].businessLicenceNumber==$scope.custLic.businessLicenceNumber){
					alert('Record already present!!');
					return false;


				}
			}
	     
	      
			$scope.custLic.businessLicenceAction=2;
			w2ui.grid.set(objSelected.recid,$scope.custLic,true);
			
			$scope.deltaList.push($scope.custLic);
		
	          }
	          w2ui.grid.refresh();
			$scope.custLic={};
			$scope.showAdd=true;
			$scope.showModify=false;
		};
		$scope.removeRecord = function()  {

			 if($scope.custLic.businessLicenceAction==1){
				 var index=getPurpleObjIndex($scope.ShowBusinessSelected.businessLicenceList,{recid:$scope.custLic.recid})
	        	  $scope.deltaList.splice(index,1);
                 w2ui.grid.records.splice(index,1);
			 }
			 else{
				
			$scope.custLic.businessLicenceAction=3;
			$scope.deltaList.push($scope.custLic);
			var index=getPurpleObjIndex(w2ui.grid.records,{recid:w2ui.grid.getSelection()})
			w2ui.grid.records.splice(index,1);
			for(i=0;i<w2ui.grid.records.length;i++){
				w2ui.grid.records[i].recid=i;
			}
		
			 }
			 w2ui.grid.refresh();
				if(w2ui.grid.records.length == 0){
					$scope.showAdd=true;
					$scope.showModify=false;
					$scope.custLic={};
				}
				$scope.showAdd=true;
				$scope.showModify=false;
				$scope.custLic={};
		};
		$scope.saveBuisnessDetails=function(){
			 a= BusinessVallidation();
			 if(a==false){
				 return false;
			 }
			 for(i=0;i<w2ui.grid.records.length;i++){
				 if(w2ui.grid.records[i].businessLicenceAction==0){
					 $scope.deltaList.push(w2ui.grid.records[i]);
				 }
			 }  
			 $scope.ShowBusinessSelected.businessLicenceList=[];
			 angular.copy($scope.deltaList,$scope.ShowBusinessSelected.businessLicenceList);
			   
			var json1=angular.toJson($scope.ShowBusinessSelected);
			  var json={entity:1,userId:$scope.activeUser.userId,token:$scope.activeUser.token,requestData:json1};
			  $http({
				    method: 'POST',
				    url: "http://localhost:8080/Purple/rest/apiBusiness/setBusiness",
				    async:false,
				    data:JSON.stringify(json),
				    headers: {'Content-Type': 'application/json'}
				}).success(function(data, status, headers, config) {
					if(data.responseCode == 200){
						var returnObj=JSON.parse(data.responseData);
						
						angular.copy(returnObj,$scope.ShowBusinessSelected);
						angular.copy(returnObj.businessLicenceList,w2ui.grid.records);
						 for(i=0;i<w2ui.grid.records.length;i++){
							 w2ui.grid.records[i].recid=i;
						 }
						w2ui.grid.refresh();
						ngToast.create({
							  className: 'success',
							  content: '<span>Data Loaded successfully...</span>',
							  timeout: 3000,
							  animation:'fade'
							});
					
					
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
function BusinessVallidation(){
	flag=true;
	if(angular.element(document.getElementById('BusinessDetails')).scope().errorCount==0){
	}else{
		flag=false;
	}
	return flag
}

function LicenceValidation(){
	flag=true;
	if(typeof angular.element(document.getElementById('BusinessDetails')).scope().custLic.businessLicenceType ==="undefined" ){	
		 $("#businesslicentype").css("background-color", "#fff4eb");
		flag=false;
	}
	if($.trim($('#businessLicennumber').val()).length==0){
		 $("#businessLicennumber").css("background-color", "#fff4eb");
		falg=false;
	}
	if($.trim($('#businessstartdate ').val()).length==0){
		 $("#businessstartdate").css("background-color", "#fff4eb");
		 flag=false;
	}
	if($.trim($('#businessenddate ').val()).length==0 ){
		 $("#businessenddate").css("background-color", "#fff4eb");
		 flag=false;
	}
	return flag;
}


