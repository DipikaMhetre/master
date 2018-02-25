
pharmApp.controller('GoodsReturnCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.maxId=0;	
	$scope.showCustomerSelected={};
	$scope.custTypeList=[{id:1,name:'Customer Return'},{id:2,name:'Self Return'}];
	$scope.grStatusList=[{id:1,name:'New'},{id:2,name:'Partially Claimed'},{id:3,name:'Claimed'}];
	$scope.showRRSelected={};
	$scope.totalTypeList=[{id:1,name:"Sale Rate"},{id:2,name:"Purchase Rate"},{id:3,name:"MRP"}];
	$scope.removeClass='not_implemented_link not_active';
	$scope.deleteList=[];
	$scope.showPrevNextBtn=false;
	$scope.disableGRType=false;
	$scope.varifiedFlag=false;
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");

	$scope.user={name:"Satyajit",id:10};///HARD CODED USER
	
	$scope.editable=$rootScope.editable;
	$scope.$watch('showRRSelected.returnRegisterVerifiedFlag',function() {
		if(typeof $scope.showRRSelected.returnRegisterVerifiedFlag !=="undefined" && $scope.showRRSelected.returnRegisterVerifiedFlag){
			$scope.varifiedFlag=true;
			//alert('true');
		}else{
			$scope.varifiedFlag=false;
			//alert('false');
		}
		
		//$scope.disableGRType=true;
	});
	$scope.$watch('showRRSelected.returnRegisterId',function() {
		if(typeof $scope.showRRSelected.returnRegisterId !=="undefined"){
			$scope.disableGRType=true;
		}else{
			$scope.disableGRType=false;
		}
		
		//$scope.disableGRType=true;
	});
	$scope.$watch('showRRSelected.returnRegisterType',function() {
		if(typeof $scope.showRRSelected.returnRegisterType !=="undefined" && $scope.showRRSelected.returnRegisterType == 2){
			$scope.showRRSelected.returnRegisterCustId=0;
			$scope.showRRSelected.returnRegisterCustName="";
		}/*else if($scope.showRRSelected.returnRegisterType !=="undefined" && $scope.showRRSelected.returnRegisterType == 1){
			
		}*/
		
		
	});
	
	
	$scope.$watch('showRRSelected.returnRegisterLockFlag',function() {
	    if($scope.showRRSelected.returnRegisterLockFlag){
	    	document.getElementById("lockBtn").classList.remove('flag_enable');
	    	document.getElementById("lockBtn").classList.add('flagselected');
	    }else{
	    	document.getElementById("lockBtn").classList.remove('flagselected');
	    	document.getElementById("lockBtn").classList.add('flag_enable');
	    }
	});
	$scope.$watch('showRRSelected.returnRegisterVoidFlag',function() {
	    if($scope.showRRSelected.returnRegisterVoidFlag){
	    	document.getElementById("voidBtn").classList.remove('flag_enable');
	    	document.getElementById("voidBtn").classList.add('flagselected');
	    }else{
	    	document.getElementById("voidBtn").classList.remove('flagselected');
	    	document.getElementById("voidBtn").classList.add('flag_enable');
	    }
	});
	$scope.$watch('showRRSelected.returnRegisterVerifiedFlag',function() {
	    if($scope.showRRSelected.returnRegisterVerifiedFlag){
	    	document.getElementById("verifiedBtn").classList.remove('flag_enable');
	    	document.getElementById("verifiedBtn").classList.add('flagselected');
	    }else{
	    	document.getElementById("verifiedBtn").classList.remove('flagselected');
	    	document.getElementById("verifiedBtn").classList.add('flag_enable');
	    }
	});
	
	$scope.$watch('modify',function() {
	    if($scope.modify){
	    	$scope.removeClass=''
	    }else{
	    	$scope.removeClass='not_implemented_link not_active';
	    }
	});
	$scope.init= function(){
		var config = {
				layout: {
					name: 'layout',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%'},
					         { type: 'main', minSize: 300 }
					         ]
				},
				grid: { 

					name: 'grid',
					show: {
						toolbar : false,
						toolbarDelete: false,
						toolbarAdd : false
					},
					columns: [
					          { field: 'returnRegisterProductAmount', hidden:true},
					          { field: 'returnRegisterProductCCID', hidden:true},
					          { field: 'returnRegisterProductId', hidden:true},
					          { field: 'returnRegisterProductPID',  hidden:true},
					          { field: 'returnRegisterProductRRID', hidden:true},
					          { field: 'returnRegisterProductSAID', hidden:true},
					          { field: 'returnRegisterProductName', caption: 'Product ', size: '14%' }, 
					          { field: 'returnRegisterProductPack', caption: 'Pack', size: '10%' },		           
					          { field: 'returnRegisterProductBatchNo', caption: 'Batch#', size: '10%' },
					          { field: 'returnRegisterProductExpiryDate', caption: 'Expiry', size: '10%'},
					          /*{ field: 'returnRegisterProductQuantity', caption: 'Quantity', size: '10%' },	*/
					          { field: 'returnRegisterProductFreeAvailable', caption: 'Free Available', size: '15%' },
					          { field: 'returnRegisterProductFreeReturn', caption: 'Free Return', size: '15%' },
					          { field: 'returnRegisterProductQtyAvailable', caption: 'Qty Available', size: '15%' },
					          { field: 'returnRegisterProductQtyReturn', caption: 'Qty Return', size: '15%' },
					          { field: 'returnRegisterProductMRP', caption: 'MRP', size: '10%' },
					          { field: 'returnRegisterProductPurchaseRate', caption: 'Purchase Rate', size: '15%' },
					          { field: 'returnRegisterProductSellRate', caption: 'Sale Rate', size: '10%' },
					          //{ field: 'returnRegisterProductCondition', caption: 'Condition', size: '10%' },
					          { field: 'returnRegisterProductConditionName', caption: 'Condition', size: '10%' },
					          
					          { field: 'returnRegisterProductDaysToExpiryStatus', caption: 'Days To Expire', size: '15%' },
					          /*{ field: '', caption: 'Company Claim', size: '15%' },	*/ 
					          { field: 'returnRegisterProductRemark', caption: 'Remark', size: '20%' },       
					          { field: 'recid', caption: 'recid', hidden:true},
					          { field: 'returnRegisterProductIsModified', hidden:true},
					          { field: 'returnRegisterProductBatchDeleted', hidden:true},
					          { field: 'returnRegisterProductQtyReturnDelta', hidden:true},
					          { field: 'returnRegisterProductFreeReturnDelta', hidden:true}
					          	
					          ],
					          records:[],
					          onSelect: function(event) {
					        	  event.onComplete = function () {
					        		  var angScope=angular.element(document.getElementById('GoodsReturn')).scope();
					        		  angScope.modify=true;
					        		  angScope.$apply();

					        	  }
					          } ,
					          onUnselect: function(event) {
					        	  event.onComplete = function () {
					        		  var angScope=angular.element(document.getElementById('GoodsReturn')).scope();
					        		  angScope.modify=false;
					        		  angScope.$apply();

					        	  }
					          } ,
					          onRefresh: function(event) {
					        	  event.onComplete = function () {
					        		  var angScope=angular.element(document.getElementById('GoodsReturn')).scope();
					        		  angScope.showRRSelected.returnRegisterTotalProducts=w2ui.grid.records.length;
					        		  if(angScope.showRRSelected.returnRegisterTotalProducts == -1){
					        			  angScope.showRRSelected.returnRegisterTotalProducts = 0;
					        		  }
					        		  //angScope.$apply();

					        	  }
					          },
					          sortData: [
					                     {field: 'customerName', direction: 'asc' }
					                     ],  
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
			loadA(config);
			
		}else{
			
			w2ui.grid.destroy();
			w2ui.layout.destroy();
			loadA(config);
		}
		
		if(typeof $rootScope.returnRecordSelected !== "undefined" && !angular.equals($rootScope.returnRecordSelected,{})){
			angular.copy($rootScope.returnRecordSelected,$scope.showRRSelected);
			angular.copy($rootScope.returnRecordSelected.returnRegisterProductList,w2ui.grid.records);
			w2ui.grid.refresh();
			if(!$scope.showRRSelected.returnRegisterLockFlag){
				$scope.showRRSelected.returnRegisterLockReason="";
			}
		}else{
			
			///////NEEWW=======HARD CODED======================
			$scope.newRR();
			
			///////NEEWW=============================
			/*var json={"entity":3,"entityId":0,"listType":6,"requestData":"","userId":10,"tokenId":1};
			//HTTP CALL FOR GETTING CompanyList enclosed division 
			$http({
				method: 'POST',
				url: "http://localhost:8080/Purple/rest/apiReturn/getReturn",
				async:false,
				data:JSON.stringify(json),
				headers: {'Content-Type': 'application/json'}
			}).success(function(data, status, headers, config) {
				if(data.responseCode == 200){
					var respData=JSON.parse(data.responseData);					
					$scope.productList=respData.productList;
					
				}else{
					$scope.spinner=false;
					alert('Purpleaid Error Manager \n'+data.responseCode);

				}
			}).error(function(data, status, headers, config) {  
				$scope.spinner=false;
				return false;
			});*/
		}
		
		
		if(typeof $rootScope.rrList !=="undefined" && $rootScope.rrList != null){
			$scope.rrListSize=$rootScope.rrList.length;
			var obj=$.grep($rootScope.rrList,function(e){ return e.recid==$rootScope.returnRecordSelected.recid;})[0]
			$scope.recordIndexInRrList=$rootScope.rrList.indexOf(obj);
			$scope.showPrevNextBtn=true;
		}
		
		var json={"entity":3,"entityId":0,"listType":6,"requestData":"","userId":$scope.activeUser.userId,"token":$scope.activeUser.token};
		//HTTP CALL FOR GETTING CustomerList and ProductList
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiReturn/getReturn",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);					
				$scope.customerList=respData.customerList;
				$scope.productList=respData.productList;
				$scope.selfProductList=respData.selfProductList;
				$scope.nearExpiryProductList=respData.nearExpiryProductList;
				$scope.selfProductBatchList=respData.selfProductBatchList;
			}else{
				$scope.spinner=false;
				alert('Purpleaid Error Manager \n'+data.responseCode);

			}
		}).error(function(data, status, headers, config) {  
			$scope.spinner=false;
			return false;
		});
		
		
	};
	
	$scope.manageFlag=function(type){///////=========INCOMPLETE DUE TO DATA NOT COMPLETE
		if(type == 'locked'){
			$scope.showRRSelected.returnRegisterLockFlag = !$scope.showRRSelected.returnRegisterLockFlag;			
			if(!$scope.showRRSelected.returnRegisterLockFlag){
				$scope.showRRSelected.returnRegisterLockReason="";
			}
		}else if(type == 'verified'){
			
			$scope.showRRSelected.returnRegisterVerifiedFlag = !$scope.showRRSelected.returnRegisterVerifiedFlag;
			if($scope.showRRSelected.returnRegisterVerifiedFlag){
				var textReq='';
				//var name='['+$scope.user.name+']';
				var currDate=new Date();
				textReq=textReq+''
				/*+currDate.getDate()
				+'/'+(currDate.getMonth()+1)
				+'/'+currDate.getFullYear()+
				' '+currDate.getHours()+
				':'+currDate.getMinutes()+':'
				+currDate.getSeconds();*/
				var yyyy = currDate.getFullYear().toString();
				var mm = (currDate.getMonth()+1).toString(); 
				var dd = currDate.getDate().toString();
				var hh = currDate.getHours().toString();
				var min = currDate.getMinutes().toString();
				var sec = currDate.getSeconds().toString();
				textReq='';
				textReq=yyyy +'/' +(mm[1]?mm:"0"+mm[0]) +'/' + (dd[1]?dd:"0"+dd[0]) + ' '+ (hh[1]?hh:"0"+hh[0]) +':' + (min[1]?min:"0"+min[0]) +':' +(sec[1]?sec:"0"+sec[0]);
				//var temp='  ['+$scope.user.name +']';
				$scope.showRRSelected.returnRegisterVerifiedOn=textReq;
				$scope.showRRSelected.returnRegisterVerifiedByName=$scope.user.name;
				$scope.showRRSelected.returnRegisterVerifiedByID=$scope.user.id;
				
				//////////////////////==>HARDCODE<==///////////////////
				
				
			}else{
				$scope.showRRSelected.returnRegisterVerifiedByName="";
				$scope.showRRSelected.returnRegisterVerifiedByID=0;
				$scope.showRRSelected.returnRegisterVerifiedOn="";
			}
			
		}else if(type == 'void'){
			
			if(!$scope.showRRSelected.returnRegisterVoidFlag){			
				var r = confirm("You are attempting void record  !! \nAre you sure? ");
				if (r == true) {    
					$scope.showRRSelected.returnRegisterVoidFlag=true;
				} else {

				}
			}else{				
				$scope.showRRSelected.returnRegisterVoidFlag=false;
				$scope.showRRSelected.returnRegisterVoidReason="";
			}
			
		}else if(type == 'creditNote'){
			
		}
	
	
	
	};
	
	
	$scope.showProductPopup=function(nearExpiry1){
		$scope.expiryFlag=false;
		if(typeof $scope.showRRSelected.returnRegisterType === "undefined"){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Please select Type ...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			return false;
		}
		if(typeof nearExpiry1 ==="undefined"){
			
		}else{
			$scope.expiryFlag=true;
		}
		$modal.open({
			
			template :' <div id="GoodReturnAddProduct" ng-controller="GoodReturnAddProductCtrl" ng-init="init()" class="container lightBox_addProduct_GoodReturns"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText"><span ng-show="operation == \'new\'">ADD</span><span ng-show="operation == \'modify\'">MODIFY</span> PRODUCT</span> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Product Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row"> <div class="col-md-4"> <div class="row fieldsSpacing"> <div class=" col-md-4"> <span class="control-label">Product</span> </div> <div class=" col-md-6"> <input type="text" id="product" class="form-control input-sm goodsReturn_batch-productPos" ng-model="showRRProductSelected.returnRegisterProductName" value={{showRRProductSelected.returnRegisterProductName}} tabindex="21"> </div> <div class="col-md-2"> <a><img class="add_details_image" tabindex="22" src="images/openPopup.png" ng-click="selectProductPopup()"></a> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class="col-md-4"> <span class="control-label">Pack</span> </div> <div class="col-md-8"> <input type="text" class="form-control input-sm textRight" readonly="readonly" ng-model="showRRProductSelected.returnRegisterProductPack" value={{showRRProductSelected.returnRegisterProductPack}}> </div> </div> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Batch Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row"> <div class="col-md-4"> <div class="row fieldsSpacing"> <div class=" col-md-4"> <span class="control-label">Batch</span> </div> <div class=" col-md-6"> <input type="text" id="batch" class="form-control input-sm goodsReturn_batch-productPos" tabindex="23" ng-model="showRRProductSelected.returnRegisterProductBatchNo" value={{showRRProductSelected.returnRegisterProductBatchNo}}> </div> <div class="col-md-2"> <a><img class="add_details_image" tabindex="24" src="images/openPopup.png" ng-click="selectBatchPopup()"></a> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class="col-md-4"> <span class="control-label">Expiry</span> </div> <div class="col-md-8"> <input type="eu-date" id="expiry" class="form-control input-sm textCenter" tabindex="25" ng-model="showRRProductSelected.returnRegisterProductExpiryDate" value={{showRRProductSelected.returnRegisterProductExpiryDate}} ng-disabled="returnRegisterType == 2"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-4"> <div class="row"> <div class=" col-md-4"> <span class="control-label">MRP</span> </div> <div class=" col-md-8"> <input type="text" id="mrp" class="form-control input-sm textRight" ng-model="showRRProductSelected.returnRegisterProductMRP" value={{showRRProductSelected.returnRegisterProductMRP}} ng-change="calculatePSRate()" tabindex="26" ng-disabled="returnRegisterType == 2"> </div> </div> </div> <div class=" col-md-4"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Purchase&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" id="purchaseRate" class="form-control input-sm textRight" tabindex="27" ng-model="showRRProductSelected.returnRegisterProductPurchaseRate" value={{showRRProductSelected.returnRegisterProductPurchaseRate}} ng-disabled="returnRegisterType == 2"> </div> </div> </div> <div class=" col-md-4"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Sale&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" id="saleingRate" class="form-control input-sm textRight" ng-model="showRRProductSelected.returnRegisterProductSellRate" value={{showRRProductSelected.returnRegisterProductSellRate}} tabindex="28" ng-disabled="returnRegisterType == 2"> </div> </div> </div> </div> <div class="row"> <div class=" col-md-4"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Qty&nbsp;Available</span> </div> <div class=" col-md-8"> <input type="text" id="quantityavailable" name="quantityavailable" allow-numbers class="form-control input-sm textRight" tabindex="29" ng-model="showRRProductSelected.returnRegisterProductQtyAvailable" value={{showRRProductSelected.returnRegisterProductQtyAvailable}} disabled> </div> </div> </div> <div class=" col-md-4"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Free&nbsp;Available</span> </div> <div class=" col-md-8"> <input type="text" id="freeavailable" name="freeavailable" allow-numbers class="form-control input-sm textRight" tabindex="30" ng-model="showRRProductSelected.returnRegisterProductFreeAvailable" value={{showRRProductSelected.returnRegisterProductFreeAvailable}} disabled> </div> </div> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Return Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row"> <div class="col-md-4"> <div class="row fieldsSpacing"> <div class=" col-md-4"> <span class="control-label ">Condition</span> </div> <div class=" col-md-8"> <select class=" full_width input-sm input_rightSpecing" tabindex="31" id="condition" ng-model="showRRProductSelected.returnRegisterProductCondition" ng-options="opt.id as opt.name for opt in conditionTypeList"> </select> <!-- <input type="text" id="condition" name="condition" class="form-control input-sm" ng-model="showRRProductSelected.returnRegisterProductCondition" value={{showRRProductSelected.returnRegisterProductCondition}} tabindex="9"> --> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class="col-md-4"> <span class="control-label">Qty&nbsp;Return</span> </div> <div class="col-md-8"> <input type="text" id="quantityreturn" name="quantityreturn" class="form-control input-sm textRight" allow-numbers ng-model="showRRProductSelected.returnRegisterProductQtyReturn" value={{showRRProductSelected.returnRegisterProductQtyReturn}} tabindex="32"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class="col-md-4"> <span class="control-label">Free&nbsp;Return</span> </div> <div class="col-md-8"> <input type="text" id="freereturn" name="freereturn" allow-numbers class="form-control input-sm textRight" ng-model="showRRProductSelected.returnRegisterProductFreeReturn" value={{showRRProductSelected.returnRegisterProductFreeReturn}} tabindex="33"> </div> </div> </div> </div> <div class="row"> <div class="col-md-12"> <div class="row fieldsSpacing"> <div class=" col-md-1"> <span class="control-label ">Remark</span> </div> <div class=" col-md-11"> <input type="text" class="form-control input-sm goodsReturn_addProductRemark" tabindex="34" ng-model="showRRProductSelected.returnRegisterProductRemark" value={{showRRProductSelected.returnRegisterProductRemark}}> </div> </div> </div> </div> <div class="row fields_headingSpacing fieldsBot_Spacing_lg"> <div class="col-md-12 textRight"> <button class="btn canclebtnSize" ng-click="cancel()" tabindex="35">Cancel</button> <button class="btn okbtnSize" ng-click="submit()" tabindex="36"> <span ng-show="operation == \'new\'">ADD</span><span ng-show="operation == \'modify\'">Modify</span> </button> </div> </div> </div> <script type="text/javascript"> $(document).ready(function() { $("#product").allowAlphaNumericOnlywithspace(); $("#batch").allowAlphaNumericOnlywithspace(); $("#mrp").allowNumbersOnly(); $("#purchaseRate").allowNumbersOnly(); $("#saleingRate").allowNumbersOnly(); $("#condition").allowAlphaNumericOnlywithspace(); $("#quantity").allowNumbersOnly(); }); </script> <script type="text/javascript"> $(document).ready(function() { $("#product").click(function() { $("#product").css("background-color", "white"); }); $("#quantity").keypress(function() { $("#quantity").css("background-color", "white"); }); $("#mrp").keypress(function() { $("#mrp").css("background-color", "white"); }); $("#purchaseRate").keypress(function() { $("#purchaseRate").css("background-color", "white"); }); $("#saleingRate").keypress(function() { $("#saleingRate").css("background-color", "white"); }); $("#condition").keypress(function() { $("#condition").css("background-color", "white"); }); $("#batch").click(function() { $("#batch").css("background-color", "white"); }); $("#quantityavailable").click(function() { $("#quantityavailable").css("background-color", "white"); }); $("#freeavailable").click(function() { $("#freeavailable").css("background-color", "white"); }); $("#quantityreturn").click(function() { $("#quantityreturn").css("background-color", "white"); }); $("#freereturn").click(function() { $("#freereturn").css("background-color", "white"); }); $("#condition").click(function() { $("#condition").css("background-color", "white"); }); }); </script> <script type="text/javascript"> var month = (new Date()).getMonth() + 1; var year = (new Date()).getFullYear(); $("input[type=eu-date]").w2field("date", { format : "d/m/yyyy" }); $("input[type=eu-time]").w2field("time", { format : "h24" }); $("input[type=eu-timeA]").w2field("time", { format : "h24", start : "8:00 am", end : "4:30 pm" }); </script> ',            
			controller :'GoodReturnAddProductCtrl',
			backdrop:'static',
			size:'lg',
			windowClass: 'good_return_addProductPopup-Modal',
			/*resolve:{
				nearExpiry:function() {
					return expiryFlag;
				}
			}*/
		
			
		}).result.then(function(result) {
			
			
		});
		
		
	};
	
	$scope.showCustomerPopup=function(){
		if(typeof $scope.showRRSelected.returnRegisterType === "undefined" || typeof $scope.showRRSelected.returnRegisterType !== "undefined" && $scope.showRRSelected.returnRegisterType == 2){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Not allowed for self record ...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			return false;
		}
		$modal.open({
			template :'<div id="GoodReturnCustomerListPopup" ng-controller="GoodReturnCustomerListPopupCtrl" ng-init="init()"> <div class="container goodReceipt_productListPopup"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">CUSTOMER LIST</span> </h6> </div> <div class="row"> <!--=============GRID========== --> <div id="grid2" tabindex="-1" class="gridSizeGoodsReceipt_productList"></div> <!--=============GRID========== --> </div> <div class="row fieldsTop_Spacing fieldsBot_Spacing"> <div class=" col-md-6"> </div> <div class=" col-md-6"> <div class="row"> <div class=" col-md-5"> <button type="button" ng-click="cancel()" class="canclebtnSize">Cancel</button> </div> <div class=" col-md-5"> <button type="button" ng-click="submit()" class="okbtnSize">OK</button> </div> </div> </div> </div> </div> </div> ', 
			controller :'GoodReturnCustomerListPopupCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'listProduct_GoodsReceipt-Modal',
			/*resolve : {
				ProductList : function() {
					return $scope.grCompanyPopupProductList;
				}
			}	*/			
		}).result.then(function(result) {
			if(!angular.equals(result,{})){
				$scope.showRRSelected.returnRegisterCustId=result.customerId;
				$scope.showRRSelected.returnRegisterCustName=result.customerName;
			/*	$scope.showRRProductSelected.returnRegisterProductPack=result.returnRegisterProductPack;		
				$scope.showRRProductSelected.returnRegisterProductName=result.returnRegisterProductName;	
				$scope.showRRProductSelected.returnRegisterProductPID=result.returnRegisterProductPID;	
				
				//============API CALL FOR PRODUCTS BATCH LIST=========
				var json={entity:3,entityId:0,listType:5,requestData:"",userId:10,tokenId:1,productId:result.returnRegisterProductPID};
				
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
		        });*/
			}else{
				
			}
			
		});
		
		
	};
	
	$scope.removeProduct=function(){
		var obj=w2ui.grid.get(w2ui.grid.getSelection());
		obj.returnRegisterProductIsDeleted=true;
		if(obj.returnRegisterProductId != 0){
			$scope.deleteList.push(obj);
		}	
		var index=w2ui.grid.records.indexOf(obj);
		w2ui.grid.records.splice(index,1);		
		for(i=0;i<w2ui.grid.records.length;i++){
			w2ui.grid.records[i].recid=i+1;
		}	
		w2ui.grid.refresh();
		$scope.calculateTotal();
		if(w2ui.grid.records.length == 0){
			$scope.modify=false;
		}
	};
	
	$scope.saveGoodsReturn=function(){
		var a=GoodsReturnValidate();
		if(a==false){
			return false;
		}
		var reqType='modify';
		if(typeof $scope.showRRSelected.returnRegisterId === "undefined"){
			$scope.showRRSelected.returnRegisterId=0;
			reqType='new';			
		}else{
			if($('#rr_id').val() == ''){
				$scope.showRRSelected.returnRegisterId=0;
			}
		}
		//push deletelist in productlist
		var json1 = $scope.showRRSelected;
		json1.returnRegisterProductList=w2ui.grid.records;
		json1.returnRegisterProductList=json1.returnRegisterProductList.concat($scope.deleteList);
		var json={entity:2,entityId:0,listType:5,requestData:JSON.stringify(json1),userId:$scope.activeUser.userId,token:$scope.activeUser.token};		
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiReturn/setReturn",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				$scope.showRRSelected=respData;
				if(typeof $rootScope.prevPageFlag !=="undefined" && $rootScope.prevPageFlag){
					var obj=$.grep($rootScope.rrList,function(e){return e.returnRegisterId == $scope.showRRSelected.returnRegisterId; })[0];
					if(typeof obj !=="undefined"){
						var index=$rootScope.rrList.indexOf(obj);
						angular.copy($scope.showRRSelected,$rootScope.rrList[index]);
					}
				}
				$scope.deleteList=[];
				ngToast.create({
							  className: 'success',
							  content: '<span>Data Saved successfully...</span>',
							  timeout: 3000,
							  animation:'fade'
							});
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
	};
	
	$scope.showPrevious=function(){
		//$scope.recordIndexInRrList=$rootScope.rrList.indexOf(obj);
		if($scope.recordIndexInRrList>0){
			$scope.recordIndexInRrList--;
			angular.copy($rootScope.rrList[$scope.recordIndexInRrList],$scope.showRRSelected);
			angular.copy($rootScope.rrList[$scope.recordIndexInRrList].returnRegisterProductList,w2ui.grid.records);
			w2ui.grid.refresh();
			$scope.deleteList=[];
			$scope.calculateTotal();
			
		}else{
			//
		}
		$scope.modify=false;
		
		
	};
	
	$scope.showNext=function(){
		if(($scope.recordIndexInRrList+1) == $scope.rrListSize){
			///////========CODE NOT TESTED=========///////
			var json={"entity":3,"entityId":$scope.showRRSelected.returnRegisterCustId,"listType":1,"requestData":"","userId":$scope.activeUser.userId,"token":$scope.activeUser.token,"lastID":$rootScope.maxId,listLimit:100};
			//HTTP CALL FOR 
			json=angular.extend(json,$rootScope.filter);
			$http({
				method: 'POST',
				url: "http://localhost:8080/Purple/rest/apiReturn/getReturn",
				async:false,
				data:JSON.stringify(json),
				headers: {'Content-Type': 'application/json'}
			}).success(function(data, status, headers, config) {
				if(data.responseCode == 200){
					var respData=JSON.parse(data.responseData);
					if(respData.rrList.length!=0){
						$scope.deleteList=[];
						$rootScope.rrList=$rootScope.rrList.concat(respData.rrList);
						$scope.rrListSize=$rootScope.rrList.length;
						////////////////////////////
						$scope.recordIndexInRrList++;
						angular.copy($rootScope.rrList[$scope.recordIndexInRrList],$scope.showRRSelected);
						angular.copy($rootScope.rrList[$scope.recordIndexInRrList].returnRegisterProductList,w2ui.grid.records);
						w2ui.grid.refresh();
						$scope.calculateTotal();
					}
					/////////////////
					
					///////////////
					ngToast.create({
						  className: 'success',
						  content: '<span>Data Updated successfully...</span>',
						  timeout: 3000,
						  animation:'fade'
						});
					//$scope.onCompanySelection($scope.showCompanyList[0]);
					$scope.spinner=false;
				}else{
					$scope.spinner=false;
					alert('Purpleaid Error Manager \n'+data.responseCode);

				}
				$scope.modify=false;
			}).error(function(data, status, headers, config) {  
				$scope.spinner=false;
				return false;
			});
			////////======================//////
			
		}else{
			$scope.recordIndexInRrList++;
			angular.copy($rootScope.rrList[$scope.recordIndexInRrList],$scope.showRRSelected);
			angular.copy($rootScope.rrList[$scope.recordIndexInRrList].returnRegisterProductList,w2ui.grid.records);
			w2ui.grid.refresh();
			$scope.deleteList=[];
			$scope.calculateTotal();
			$scope.modify=false;
		}
	};
	
	$scope.retrieve=function(){
		var json={"entity":1,"entityId":$scope.showRRSelected.returnRegisterId,"listType":1,"requestData":"","userId":$scope.activeUser.userId,"token":$scope.activeUser.token};
		//HTTP CALL FOR 
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiReturn/getReturn",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				angular.copy(respData,$scope.showRRSelected);
				angular.copy($scope.showRRSelected.returnRegisterProductList,w2ui.grid.records);
				w2ui.grid.refresh();
				ngToast.create({
					  className: 'success',
					  content: '<span>Data retrieved successfully...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				//$scope.onCompanySelection($scope.showCompanyList[0]);
				$scope.deleteList=[];
				$scope.spinner=false;
				$scope.calculateTotal();
				$scope.modify=false;
			}else{
				$scope.spinner=false;
				alert('Purpleaid Error Manager \n'+data.responseCode);

			}
		}).error(function(data, status, headers, config) {  
			$scope.spinner=false;
			return false;
		});
	};
	
	$scope.newRR=function(){
		//$scope.showRRSelected={};
		var currDate=new Date();
		var textReq='';
		textReq=textReq+''+currDate.getDate()+'/'+(currDate.getMonth()+1)+
		'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
		$scope.showRRSelected={returnRegisterCreatedByID:$scope.user.id,returnRegisterCreatedByName:$scope.user.name,returnRegisterCreatedOn:textReq}
		w2ui.grid.records=[];
		w2ui.grid.refresh();
		$scope.disableGRType=false;
		$scope.modify=false;
		
		
		$("#customer").css("background-color", "white");
		/*$("#rr_id").css("background-color", "white");*/
		$("#rr_date").css("background-color", "white");
		$("#type_select").css("background-color", "white")

	};	
	
	$scope.calculateTotal=function(){
		if(w2ui.grid.records.length == 0){
			return false;
		}
		
		if(typeof $scope.showRRSelected.returnRegisterTotalType !== "undefined"){
			var total=0;
			if($scope.showRRSelected.returnRegisterTotalType == 1){
				
				for(i=0;i<w2ui.grid.records.length;i++){
					total=total+(w2ui.grid.records[i].returnRegisterProductSellRate*Number(w2ui.grid.records[i].returnRegisterProductQtyReturn));
				}
			}else if($scope.showRRSelected.returnRegisterTotalType == 2){
				for(i=0;i<w2ui.grid.records.length;i++){
					total=total+(w2ui.grid.records[i].returnRegisterProductPurchaseRate*Number(w2ui.grid.records[i].returnRegisterProductQtyReturn));
				}
				
			}else if($scope.showRRSelected.returnRegisterTotalType == 3){
				for(i=0;i<w2ui.grid.records.length;i++){
					total=total+(w2ui.grid.records[i].returnRegisterProductMRP*Number(w2ui.grid.records[i].returnRegisterProductQtyReturn));
				}
			}
			$scope.showRRSelected.returnRegisterTotal=total;
		}
	};
	
	$scope.showNearExpiryProductBatchPopup=function(){
		$modal.open({
			template :'<div id="GoodReturnNEProductBatchListPopup" ng-init="init()"> <div class="container GoodsReturn_addNearExp_productListPopup"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">PRODUCT LIST</span> </h6> </div> <div class=" row"> <div class="col-md-6"></div> <div class="col-md-6 textRight"></div> </div> <div class="row"> <!--=============GRID========== --> <div id="grid4" tabindex="-1" class="gridSizeGoodsReceipt_addNearExp_productList"></div> <!--=============GRID========== --> </div> <div class="row fieldsTop_Spacing fieldsBot_Spacing"> <div class=" col-md-9"></div> <div class=" col-md-3"> <span> <div class=" col-md-5"> <button type="button" ng-click="cancel()" class="canclebtnSize">Cancel</button> </div> <div class=" col-md-5"> <button type="button" ng-click="submit()" class="okbtnSize">OK</button> </div> </span> </div> </div> </div> </div> ', 
			controller :'GoodReturnAddNearExpiryCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'listProduct_addNearExp_GoodsReceipt-Modal',
			/*resolve : {
				ProductList : function() {
					return $scope.grCompanyPopupProductList;
				}
			}	*/			
		}).result.then(function(result) {
			
		
		});
	};
	
	
}]);

function GoodsReturnValidate(){
	flag=true;
	if(typeof angular.element(document.getElementById('GoodsReturn')).scope().showRRSelected==="undefined" || typeof angular.element(document.getElementById('GoodsReturn')).scope().showRRSelected!=="undefined" && angular.equals(angular.element(document.getElementById('GoodsReturn')).scope().showRRSelected,{})){
		$("#type_select").css("background-color", "#fff4eb");
		flag=false;
	}
	if(angular.element(document.getElementById('GoodsReturn')).scope().showRRSelected.returnRegisterType == 1){
		if($('#customer').val().length<=0){
			$("#customer").css("background-color", "#fff4eb");
			//create error message using tooltip
			flag=false;
		}
	}
	
	/*if($('#rr_id').val().length<=0){
		$("#rr_id").css("background-color", "#fff4eb");
		//create error message using tooltip
		flag=false;
	}*/
	if($('#rr_date').val().length<=0){
		$("#rr_date").css("background-color", "#fff4eb");
		//create error message using tooltip
		flag=false;
	}
	

		
	return flag;
}


	
	
	

