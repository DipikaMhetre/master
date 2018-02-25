
pharmApp.controller('CompanyClaimCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.maxId=0;	
	$scope.showCustomerSelected={};
	$scope.companyClaimTypeList=[{id:1,name:'ALL'},{id:2,name:'All Excluding Saleable Returns'},{id:3,name:'Saleable Returns'},{id:4,name:'Expiry'},{id:5,name:'Damaged'},{id:6,name:'Recall'},{id:7,name:'DPCO'}];
	$scope.rateOCList=[{id:1,name:'Selling Rate'},{id:2,name:'Purchase Rate'},{id:3,name:'MRP'}];
	$scope.yesNoList=[{id:1,name:'Yes'},{id:2,name:'No'}];
	$scope.claimStatusList=[{id:1,name:'New'},{id:2,name:'Raised'}];
	$scope.supplierList=[];
	$scope.supplierName="";
	$scope.filterStatus='OFF';
	$scope.filterStatus2='OFF';
	$scope.deleteList=[];
	$scope.user={name:"Satyajit Toradmal" ,id:10};
	var activeUser=angular.element('*[ng-app]').injector().get("configurable");
	//=======================
	///////////
	$scope.filter={fromDate:"",toDate:"",createdByFilterId:0,status:0,fromAmt:0,toAmt:0};

	$scope.editable=$rootScope.editable;

	/*$scope.$watch('showClaimSelected.companyClaimSID',function() {

	});*/
	$scope.changeSupplierName=function(){
		if($scope.showClaimSelected.companyClaimSID == 0){
			$scope.supplierName="";
			return false;
		}
		var supplier=$.grep($scope.supplierList,function(e){return e.supplierId==$scope.showClaimSelected.companyClaimSID})[0];
		$scope.supplierName=supplier.supplierName;
	};
	$scope.init=function(){
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
					          { field: 'companyClaimCID', caption: 'recid', hidden:true},
					          { field: 'companyClaimCreatedByName', caption: 'recid', hidden:true},
					          { field: 'companyClaimDate', caption: 'Date',size: '50%'},
					          { field: 'companyClaimGrossTotal', caption: 'recid', hidden:true},
					          { field: 'companyClaimId', caption: 'Claim#',size: '50%'},
					          { field: 'companyClaimNetAmount', caption: 'recid', hidden:true},
					          { field: 'companyClaimRateOfCalculation', caption: 'recid', hidden:true},
					          { field: 'companyClaimRemark', caption: 'recid', hidden:true},
					          { field: 'companyClaimSID', caption: 'recid', hidden:true},
					          { field: 'companyClaimStatus', caption: 'recid', hidden:true},
					          { field: 'companyClaimTotalItem', caption: 'recid', hidden:true},
					          { field: 'companyClaimType', caption: 'recid', hidden:true},
					          { field: 'companyClaimVAT', caption: 'recid', hidden:true},
					          { field: 'companyClaimcalculateVAT', caption: 'recid', hidden:true},			          
					          { field: 'companyClaimedProductList', caption: 'recid', hidden:true},
					          { field: 'companyClaimCreatedById', caption: 'recid', hidden:true},
					          { field: 'recid', caption: 'recid', hidden:true}

					          ],
					          records:[],
					          onSelect: function(event) {
					        	  event.onComplete = function () {
					        		  var angScope=angular.element(document.getElementById('CompanyClaim')).scope();
					        		  angScope.showClaimSelected={};
					        		  angScope.deleteList=[];
					        		  angular.copy(w2ui.grid.get(w2ui.grid.getSelection()),angScope.showClaimSelected);
					        		  ///////////NEW
					        		  angScope.showClaimSelected=angScope.calculateAmountRate(angScope.showClaimSelected);
					        		  angular.copy(angScope.showClaimSelected.companyClaimedProductList,w2ui.grid2.records);
					        		  w2ui.grid2.refresh();
					        		  if(angScope.showClaimSelected.companyClaimId != 0){
					        			  if(angScope.filterStatus2=='OFF'){
					        				  w2ui.grid2.records=w2ui.grid2.records.concat(w2ui.grid.records[0].companyClaimedProductList);
					        			  }else{
					        				  
					        			  }
					        			  w2ui.grid2.refresh();
						        		  w2ui.grid2.selectNone();
						        		  for(i=0;i<angScope.showClaimSelected.companyClaimedProductList.length;i++){
						        			  w2ui.grid2.select(angScope.showClaimSelected.companyClaimedProductList[i].recid);
						        		  }
					        		  }else{
					        			  w2ui.grid2.selectNone();
					        		  }
					        		  
					        		  angScope.changeSupplierName();

					        		  //angScope.showCustomerSelected=w2ui.grid.get(event.recid);
					        		  angScope.$apply();

					        	  }
					          } ,
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
			//$('#grid').contents()[0].attr('id','my');


		}else{
			w2ui.grid.destroy();
			w2ui.layout.destroy();
			loadA(config);
		}

		//////////////Config and Grid1 load ends
		var config2 = {
				layout: {
					name: 'layout2',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%'},
					         { type: 'main' }
					         ]
				},
				grid: { 

					name: 'grid2',
					show: {
						selectColumn: true,
						toolbar : true,
						toolbarDelete: false, 
						toolbarAdd : false
						//selectColumn: true
					},

					columns: [

					          { field: 'recid',hidden:true },
					          /*{ field: 'returnRegisterSelected', caption: '',size: '2%',editable: { type: 'checkbox'  }},*/
					          { field: 'returnRegisterSource',caption:'Source',size: '10%', sortable: true},
					          { field: 'returnRegisterProductName',caption:'Product',size: '15%', sortable: true},					     
					          { field: 'returnRegisterProductId',hidden:true}, 
					          { field: 'returnRegisterProductPack',caption:'Pack',size: '10%'}, 
					          { field: 'returnRegisterProductBatchNo',caption:'#Batch',size: '10%'}, 
					          { field: 'returnRegisterProductExpiryDate',caption:'Expiry',size: '10%'}, 
					          { field: 'returnRegisterProductQuantity',caption:'Qty',size: '10%'}, 
					          { field: 'returnRegisterProductMRP',caption:'MRP',size: '10%' },
					          { field: 'returnRegisterProductRate',caption:'Rate' ,size: '10%'},
					          { field: 'returnRegisterProductAmount',caption:'Amount',size: '10%' },
					          { field: 'returnRegisterProductCCID',hidden:true },
					          { field: 'returnRegisterProductComapnyName',hidden:true },
					          { field: 'returnRegisterProductCondition',hidden:true }, 
					          { field: 'returnRegisterProductIsDeleted',hidden:true }, 
					          { field: 'returnRegisterProductPID',hidden:true }, 
					          { field: 'returnRegisterProductPurchaseRate',hidden:true }, 
					          { field: 'returnRegisterProductSellRate',hidden:true },
					          { field: 'returnRegisterProductRRID',hidden:true }, 
					          { field: 'returnRegisterProductRemark',hidden:true },
					          { field: 'returnRegisterProductSAID',hidden:true },
					          { field: 'returnRegisterProductVATpercentage',hidden:true },
					          { field: 'returnRegisterProductVATAmount',hidden:true },
					          { field: 'returnRegisterProductClaimDeleted',hidden:true },
					          //  java.math.BigDecimal ;

					          //	java.math.BigDecimal returnRegisterProductVATAmount;
					          { field: 'recid',hidden:true }

					          ],
					          onSelect: function(event) {
					        	  event.onComplete = function () {

					        		  var angScope=angular.element(document.getElementById('CompanyClaim')).scope();
					        		  if(typeof angScope.showClaimSelected !== "undefined" && angScope.showClaimSelected.companyClaimId == 0){
					        			  $scope.calculateProbableValues();
					        			  //alert('lol selected ='+w2ui.grid2.getSelection());
					        		  }

					        		  angScope.$apply();

					        	  }
					          } ,
					          onUnselect: function(event) {
					        	  event.onComplete = function () {
					        		  var angScope=angular.element(document.getElementById('CompanyClaim')).scope();
					        		  if(typeof angScope.showClaimSelected !== "undefined" && angScope.showClaimSelected.companyClaimId == 0){
					        			  $scope.calculateProbableValues();
					        			  //alert('lol selected ='+w2ui.grid2.getSelection());
					        		  }

					        		  angScope.$apply();

					        	  }
					          },
					          records:[],					                   
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

		}

		if(!$rootScope.grid2){
			loadContentGrid(config2);
		}else{
			w2ui.grid2.destroy();
			w2ui.layout2.destroy();
			loadContentGrid(config2);

		}
		///////////////////Grid 2 Load Ends0
		
		var json={"entity":3,"entityId":0,"listType":7,"requestData":"","userId":activeUser.userId,"token":activeUser.token};
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
				$scope.showCompanyList=respData.companyListEmbeddedSupplierList;
				$scope.createdByNameList=respData.createdByNameList;				
			}else{
				$scope.spinner=false;
				alert('Purpleaid Error Manager \n'+data.responseCode);

			}
		}).error(function(data, status, headers, config) {  
			$scope.spinner=false;
			return false;
		});

	};


	$scope.getCompanyClaims=function(companyId){
		w2ui.grid2.records=[];
		w2ui.grid2.refresh();
		$scope.spinner=true;
		if(typeof $scope.listLimit === "undefined"){
			$scope.listLimit=10;
		}
		
		var json={"entity":3,"listType":2,"requestData":"","userId":activeUser.userId,"token":activeUser.token ,"companyId": companyId , "lastID":0 , "listLimit" : $scope.listLimit};
		json=angular.extend(json,$scope.filter);
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
				if(respData.ccList.length==0){
					w2ui.grid.records=[];
					w2ui.grid.refresh();				
					return false;
				}
				angular.copy(respData.ccList,w2ui.grid.records);
				var objAv={};
				angular.copy(w2ui.grid.records[w2ui.grid.records.length-1],objAv);
				w2ui.grid.records.splice(w2ui.grid.records.length-1,1);
				objAv.companyClaimDate="Available"
					objAv.recid=-1;
				objAv.companyClaimcalculateVAT=1;
				objAv.companyClaimRateOfCalculation=1;
				objAv.companyClaimCreatedByName=$scope.user.name;
				objAv.companyClaimCreatedById=$scope.user.id;
				////////MANUALLY SETTING GRID AMOUNT AND RATE
				var temp={};
				for(i=0;i<objAv.companyClaimedProductList.length;i++){
					obj=objAv.companyClaimedProductList[i];
					obj.returnRegisterProductAmount=obj.returnRegisterProductSellRate*obj.returnRegisterProductQuantity;		  			
					obj.returnRegisterProductRate=obj.returnRegisterProductSellRate;
					temp=obj;
					objAv.companyClaimedProductList[i]=temp;
				}
				//////
				w2ui.grid.records.unshift(objAv);
				
				w2ui.grid.refresh();
				$scope.maxId = respData.maxId;////NEEDS to be checked after implementation
				//$scope.onCompanySelection($scope.showCompanyList[0]);
				ngToast.create({
					className: 'success',
					content: '<span>Data loaded successfully...</span>',
					timeout: 3000,
					animation:'fade'
				});
				$scope.spinner=false;
				var company=$.grep($scope.showCompanyList,function(e){return e.companyId == companyId;})[0];
				$scope.supplierList=company.companySuppliersList;
			}else{
				$scope.spinner=false;
				alert('Purpleaid Error Manager \n'+data.responseCode);

			}
		}).error(function(data, status, headers, config) {  
			$scope.spinner=false;
			return false;
		});

	};

	$scope.getUpdatedCompanyClaims=function(){
		if(typeof $scope.showCompanySelectedId ==="undefined"){
			return false;
		}
		$scope.spinner=true;
		if(typeof $scope.listLimit === "undefined"){
			$scope.listLimit=10;
		}
		var json={"entity":3,"listType":2,"requestData":"","userId":activeUser.userId,"token":activeUser.token ,"companyId": $scope.showCompanySelectedId , "lastID":$scope.maxId , "listLimit" : $scope.listLimit};
		json=angular.extend(json,$scope.filter);

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
				angular.copy(respData.ccList,w2ui.grid.records);
				if(respData.ccList.length!=0){
					w2ui.grid2.records=w2ui.grid2.records.concat(respData.ccList);
					w2ui.grid2.refresh();
				}
				w2ui.grid.refresh();
				$scope.maxId = respData.maxId;////NEEDS to be checked after implementation
				//$scope.onCompanySelection($scope.showCompanyList[0]);
				ngToast.create({
					className: 'success',
					content: '<span>Data loaded successfully...</span>',
					timeout: 3000,
					animation:'fade'
				});
				$scope.spinner=false;
			}else{
				$scope.spinner=false;
				alert('Purpleaid Error Manager \n'+data.responseCode);

			}
		}).error(function(data, status, headers, config) {  
			$scope.spinner=false;
			return false;
		});

	};

	$scope.showFilterPopup = function(){
		$modal.open({
			template :' <div ng-controller="CompanyClaimFilterCtrl" class="" ng-init=init()> <div class="container lightBox_masterPrductFilter"> <div class="row topblueStrip "> <h6> <span class="topblueStripText">FILTERS</span> </h6> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">From&nbsp;Date</span> </div> <div class=" col-md-7"> <input id="fromDate" type="eu-date" class="form-control productFilterIP_size input-sm textCenter" ng-model="filter.fromDate"> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">To&nbsp;Date</span> </div> <div class=" col-md-7"> <input type="eu-date2" id="toDate" class="form-control productFilterIP_size input-sm textCenter" ng-model="filter.toDate"> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Created&nbsp;by</span> </div> <div class=" col-md-7"> <select class="form-control productboxSize input-sm productFilterIP_size input_rightSpecing" tabindex="5" ng-options="opt.contactId as opt.contactFullName for opt in createdByNameList" ng-model="filter.createdByFilterId"> </select> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label ">Status</span> </div> <div class=" col-md-7"> <select class="form-control productboxSize input-sm productFilterIP_size input_rightSpecing" tabindex="5" ng-options="opt.id as opt.name for opt in statusTypeList" ng-model="filter.status"> </select> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Amount&nbsp;from</span> </div> <div class=" col-md-7"> <input type="text" id="ammount_from" class="form-control input-sm productFilterIP_size textRight" ng-model="filter.fromAmt"> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Amount&nbsp;to</span> </div> <div class=" col-md-7"> <input type="text" id="ammount_to" class="form-control input-sm productFilterIP_size textRight" ng-model="filter.toAmt"> </div> </div> </div> </div> <div class="row fieldsTop_Spacing "> <div class=" col-md-3"> <a ng-click="clearAllFilters();" title="Remove Product" class=" clearAllFilterPos">CLEAR&nbsp;ALL</a> </div> </div> <div class="row fieldsTop_Spacing fieldsBot_Spacing"> <div class=" col-md-3"> <span> <div class=" col-md-5"> <button type="button" ng-click="cancel()" class="canclebtnSize">Cancel</button> </div> <div class=" col-md-5"> <button type="button" ng-click="ok(filter)" class="okbtnSize">OK</button> </div> </span> </div> </div> </div> </div> <script type="text/javascript"> $(document).ready(function() { $("#ammount_from").allowNumbersOnly(); $("#ammount_to").allowNumbersOnly(); }); </script> <script type="text/javascript"> var month = (new Date()).getMonth() + 1; var year = (new Date()).getFullYear(); $("input[type=eu-date]").w2field("date", { format : "dd/mm/yyyy" }); $("input[type=eu-date1]").w2field("date", { format : "dd/mm/yyyy", end : $("input[type=eu-date2]") }); $("input[type=eu-date2]").w2field("date", { format : "dd/mm/yyyy", start : $("input[type=eu-date1]") }); $("input[type=eu-time]").w2field("time", { format : "h24" }); $("input[type=eu-timeA]").w2field("time", { format : "h24", start : "8:00 am", end : "4:30 pm" }); </script> ',   			
			controller :'CompanyClaimFilterCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'companyClaim-Filter '

		}).result.then(function(result) {


		});
	};

	$scope.saveCC = function(status){
		var a=CompanyClaimValidate(); 
		 if(a==false){
			return false; 
		 }
		var json1={};
		var opType = '';
		if($scope.showClaimSelected.companyClaimId == 0){//new save when NA SELCTED
			opType='new';
			angular.copy($scope.showClaimSelected,json1);
			json1.companyClaimedProductList=[];
			var changedArray=w2ui.grid2.getSelection();
			/*OLD CODE
			 * var changedArray=w2ui.grid2.getChanges();
			 * */
			for(i=0;i<changedArray.length;i++){
				json1.companyClaimedProductList.push(w2ui.grid2.get(changedArray[i]));
				w2ui.grid2.remove(changedArray[i]);
				//w2ui.grid2.delete(false);
			}
			if(status == 'new'){
				json1.companyClaimStatus=1;
				json1.companyClaimId=0;
			}else{
				json1.companyClaimStatus=2;
				json1.companyClaimId=0;
			}
			/*for(i=0;i<json1.companyClaimedProductList.length;i++){
				json1.companyClaimedProductList[i].returnRegisterProductVATpercentage
				json1.companyClaimedProductList[i].returnRegisterProductAmount=json1.companyClaimedProductList[i].returnRegisterProductPurchaseRate*json1.companyClaimedProductList[i].returnRegisterProductQuantity;+++
			}*/



		}else{
			opType='modify';
			json1=$scope.showClaimSelected;
			json1.companyClaimedProductList=[];
			////////////////////////////////////////////////
			//json1.companyClaimedProductList=w2ui.grid2.records; NEW
			json1.companyClaimedProductList=[];
			for(i=0;i<w2ui.grid2.getSelection().length;i++){
				json1.companyClaimedProductList.push(w2ui.grid2.get(w2ui.grid2.getSelection()[i]));
			}
			var flgPresent=false;
			var objSelected=w2ui.grid.get(w2ui.grid.getSelection()[0]);
			for(i=0;i<objSelected.companyClaimedProductList.length;i++){
				flgPresent=false;
				for(j=0;j<json1.companyClaimedProductList.length;j++){
					if(json1.companyClaimedProductList[j].recid == objSelected.companyClaimedProductList[i].recid){
						flgPresent=true;
					}
				}
				if(!flgPresent){
					var obj=objSelected.companyClaimedProductList[i];
					obj.returnRegisterProductCCID=0;
					obj.returnRegisterProductClaimDeleted=true;
					$scope.deleteList.push(obj);
				}
				
			};
			json1.companyClaimedProductList=json1.companyClaimedProductList.concat($scope.deleteList);
			//////////////////////////
			if(status == 'new'){
				if(json1.companyClaimStatus!=2){
					json1.companyClaimStatus=1;
				}

			}else{
				json1.companyClaimStatus=2;			
			}
		}
		
		json1.companyClaimCID=$scope.showCompanySelectedId;
		if(json1.companyClaimStatus==2){
			if(json1.companyClaimedProductList.length == 0){
				ngToast.create({
					className: 'warning',
					content: '<span>For raing claim you need atleast 1 product...</span>',
					timeout: 3000,
					animation:'fade'
				});
				return false;
			}
		}
		var json={"entity":1,"listType":0,"requestData":JSON.stringify(json1),"userId":activeUser.userId,"token":activeUser.token};
		//json=angular.extend(json,$scope.filter);
		//HTTP CALL FOR Raise or save claim 
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiReturn/setReturn",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);									
				//angular.copy(respData.ccList,w2ui.grid.records);
				if(opType == 'modify'){
					var obj=$.grep(w2ui.grid.records,function(e){return e.recid == respData.recid;})[0];
					var index=w2ui.grid.records.indexOf(obj);
					angular.copy(respData,w2ui.grid.records[index]);
					/////new code after change in design
					if($scope.deleteList.length>0){
						w2ui.grid.records[0].companyClaimedProductList=w2ui.grid.records[0].companyClaimedProductList.concat($scope.deleteList);
					}
					$scope.deleteList=[];
					////////////Removing readded element 
					for(i=0;i<w2ui.grid.records[0].companyClaimedProductList.length;i++){
						for(j=0;j<w2ui.grid.records[index].companyClaimedProductList.length;j++){
							if(w2ui.grid.records[0].companyClaimedProductList[i].returnRegisterProductId==w2ui.grid.records[index].companyClaimedProductList[j].returnRegisterProductId){
								$scope.deleteList.push(i);
							}
						}
					}
					$scope.deleteList.sort();
					for(i=$scope.deleteList.length;i--;i>0 || i==0){ 
						w2ui.grid.records[0].companyClaimedProductList.splice($scope.deleteList[i],1);
					}
					$scope.deleteList=[];
					///////////////////////
					
					w2ui.grid.refresh();
				}else{
					var firstObj={};
					angular.copy(w2ui.grid.records[0],firstObj);
					w2ui.grid.records.splice(0,1);
					w2ui.grid.records.unshift(respData);
					
					for(i=0;i<changedArray.length;i++){
						var firstObjSize= firstObj.companyClaimedProductList.length;
						for(j=firstObjSize-1;j>-1;j--){
							if(changedArray[i] == firstObj.companyClaimedProductList[j].recid){
								firstObj.companyClaimedProductList.splice(j,1);
							}
						}
					}

					w2ui.grid.records.unshift(firstObj);
					w2ui.grid.refresh();
					w2ui.grid.selectNone();
					w2ui.grid.select(respData.recid);

				}

				ngToast.create({
					className: 'success',
					content: '<span>Data saved successfully...</span>',
					timeout: 3000,
					animation:'fade'
				});
				$scope.spinner=false;
			}else{
				$scope.spinner=false;
				alert('Purpleaid Error Manager \n'+data.responseCode);

			}
		}).error(function(data, status, headers, config) {  
			$scope.spinner=false;
			return false;
		});

	};

	$scope.showSelectedFilter=function(){
		if(typeof $scope.showClaimSelected ==="undefined" || typeof $scope.showClaimSelected !=="undefined"  && $scope.showClaimSelected.companyClaimId == 0){
			return false;
		}
		if($scope.filterStatus2=='OFF'){
			$scope.filterStatus2='ON';			
			angular.copy($scope.showClaimSelected.companyClaimedProductList,w2ui.grid2.records);
			w2ui.grid2.refresh();
		
		}else{
			$scope.filterStatus2='OFF';
			w2ui.grid2.records=w2ui.grid2.records.concat(w2ui.grid.records[0].companyClaimedProductList);
			w2ui.grid2.refresh();			
		}
	}

	$scope.dropClaim=function(){

		var json={"entity":3,"entityId":$scope.showClaimSelected.companyClaimId,"listType":7,"requestData":"","userId":activeUser.userId,"token":activeUser.token};
		//HTTP CALL FOR 
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiReturn/setReturn",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				$scope.showClaimSelected.companyClaimStatus=1;
				var obj=$.grep(w2ui.grid.records,function(e){return e.companyClaimId==$scope.showClaimSelected.companyClaimId;})[0];
				var index=w2ui.grid.records.indexOf(obj);
				angular.copy($scope.showClaimSelected,w2ui.grid.records[index]);
				ngToast.create({
					className: 'success',
					content: '<span>Claim dropped successfully...</span>',
					timeout: 3000,
					animation:'fade'
				});

			}else{
				$scope.spinner=false;
				alert('Purpleaid Error Manager \n'+data.responseCode);

			}
		}).error(function(data, status, headers, config) {  
			$scope.spinner=false;
			return false;
		});
	};

	$scope.confirmFunction=function() {	
		if(typeof $scope.showClaimSelected.companyClaimId !== "undefined" && $scope.showClaimSelected.companyClaimId != 0){
			var r = confirm("You are attempting drop record from database !! \nAre you sure? ");
			if (r == true) {    
				$scope.dropClaim();
			} else {

			}
		}else{

		}
	};

	$scope.cancelFilter = function(){
		$scope.filter={fromDate:"",toDate:"",createdByFilterId:0,status:0,fromAmt:0,toAmt:0};
		$scope.filterStatus='OFF';		
		$scope.getCompanyClaims($scope.showCompanySelectedId);
	};

	$scope.calculateProbableValues=function(){	
		if(typeof $scope.showClaimSelected === "undefined" || typeof $scope.showClaimSelected !== "undefined" && typeof $scope.showClaimSelected.companyClaimRateOfCalculation === "undefined"){
			return false;
		}
		
		var obj={};
		$scope.showClaimSelected.companyClaimTotalItem=w2ui.grid2.getSelection().length;
		$scope.showClaimSelected.companyClaimGrossTotal=0;
		$scope.showClaimSelected.companyClaimNetAmount=0;
		$scope.showClaimSelected.companyClaimVAT=0;
		var arraySelected=[];
		if($scope.showClaimSelected.companyClaimId == 0){
			arraySelected=w2ui.grid2.getSelection();
		}else{
			for(i=0;i<w2ui.grid2.records.length;i++){
				arraySelected.push(w2ui.grid2.records[i].recid);
			}
			
		}
		
		var n = $scope.showClaimSelected.companyClaimRateOfCalculation;
		switch(n) {
		case 2:
			for(i=0;i<arraySelected.length;i++){
				obj=w2ui.grid2.get(arraySelected[i]);
				//obj.returnRegisterProductAmount=obj.returnRegisterProductPurchaseRate*obj.returnRegisterProductQuantity;
				$scope.showClaimSelected.companyClaimVAT=$scope.showClaimSelected.companyClaimVAT+(obj.returnRegisterProductVATpercentage*obj.returnRegisterProductAmount/100)
				$scope.showClaimSelected.companyClaimNetAmount=$scope.showClaimSelected.companyClaimNetAmount+obj.returnRegisterProductAmount;
				//obj.returnRegisterProductRate=obj.returnRegisterProductPurchaseRate;
				//w2ui.grid2.set(obj.recid,obj,true);
			}
			break;
		case 1:
			for(i=0;i<arraySelected.length;i++){
				obj=w2ui.grid2.get(arraySelected[i]);
				//obj.returnRegisterProductAmount=obj.returnRegisterProductSellRate*obj.returnRegisterProductQuantity;
				$scope.showClaimSelected.companyClaimVAT=$scope.showClaimSelected.companyClaimVAT+(obj.returnRegisterProductVATpercentage*obj.returnRegisterProductAmount/100)
				$scope.showClaimSelected.companyClaimNetAmount=$scope.showClaimSelected.companyClaimNetAmount+obj.returnRegisterProductAmount;
				//obj.returnRegisterProductRate=obj.returnRegisterProductSellRate;
				//w2ui.grid2.set(obj.recid,obj,true);
			}
			break;
		case 3:
			for(i=0;i<arraySelected.length;i++){
				obj=w2ui.grid2.get(arraySelected[i]);
				//obj.returnRegisterProductAmount=obj.returnRegisterProductMRP*obj.returnRegisterProductQuantity;
				$scope.showClaimSelected.companyClaimVAT=$scope.showClaimSelected.companyClaimVAT+(obj.returnRegisterProductVATpercentage*obj.returnRegisterProductAmount/100)
				$scope.showClaimSelected.companyClaimNetAmount=$scope.showClaimSelected.companyClaimNetAmount+obj.returnRegisterProductAmount;
				//obj.returnRegisterProductRate=obj.returnRegisterProductMRP;
				//w2ui.grid2.set(obj.recid,obj,true);
			}
		default:
			break;//==
		}

		$scope.showClaimSelected.companyClaimNetAmount=Number($scope.showClaimSelected.companyClaimNetAmount).toFixed(2);
		$scope.showClaimSelected.companyClaimVAT=Number($scope.showClaimSelected.companyClaimVAT).toFixed(2);
		$scope.showClaimSelected.companyClaimGrossTotal=Number($scope.showClaimSelected.companyClaimVAT)+Number($scope.showClaimSelected.companyClaimNetAmount)
		$scope.showClaimSelected.companyClaimGrossTotal=Number($scope.showClaimSelected.companyClaimGrossTotal).toFixed(2);
		if(typeof $scope.showClaimSelected.companyClaimcalculateVAT !== 'undefined' && $scope.showClaimSelected.companyClaimcalculateVAT == 2){
			//angular.copy($scope.showClaimSelected.companyClaimNetAmount,$scope.showClaimSelected.companyClaimGrossTotal)
			$scope.showClaimSelected.companyClaimGrossTotal=$scope.showClaimSelected.companyClaimNetAmount;
			$scope.showClaimSelected.companyClaimVAT=0;
		}
		w2ui.grid2.refresh();

	};


	$scope.calculateAmountRateGrid=function(){
		/*if(typeof $scope.showClaimSelected.companyClaimRateOfCalculation === "undefined" || typeof angScope.showClaimSelected === "undefined" || $scope.showClaimSelected.companyClaimId != 0){
			return false;
		}*/
		if(typeof $scope.showClaimSelected === "undefined" || typeof $scope.showClaimSelected !== "undefined" &&  typeof $scope.showClaimSelected.companyClaimRateOfCalculation === "undefined"){
			return false;
		}
		var obj={};
		var temp={}; 
		var n = $scope.showClaimSelected.companyClaimRateOfCalculation;
		switch(n) {
		case 2:
			for(i=0;i<w2ui.grid2.records.length;i++){
				obj=w2ui.grid2.records[i];
				obj.returnRegisterProductAmount=obj.returnRegisterProductPurchaseRate*obj.returnRegisterProductQuantity;	  			
				obj.returnRegisterProductRate=obj.returnRegisterProductPurchaseRate;
				temp=obj;
				w2ui.grid2.records[i]=temp;
			}
			break;
		case 1:
			for(i=0;i<w2ui.grid2.records.length;i++){
				obj=w2ui.grid2.records[i];
				obj.returnRegisterProductAmount=obj.returnRegisterProductSellRate*obj.returnRegisterProductQuantity;	  			
				obj.returnRegisterProductRate=obj.returnRegisterProductSellRate;
				temp=obj;
				w2ui.grid2.records[i]=temp;
			}
			break;
		case 3:
			for(i=0;i<w2ui.grid2.records.length;i++){
				obj=w2ui.grid2.records[i];
				obj.returnRegisterProductAmount=obj.returnRegisterProductMRP*obj.returnRegisterProductQuantity;	  			
				obj.returnRegisterProductRate=obj.returnRegisterProductMRP;
				temp=obj;
				w2ui.grid2.records[i]=temp;
			}
			break;
		default:
			break;//==
		}
		w2ui.grid2.refresh();

	};

	$scope.calculateAmountRate=function(claimObj){
		if(typeof claimObj === "undefined" && typeof claimObj.companyClaimRateOfCalculation === "undefined" && $scope.showClaimSelected.companyClaimId != 0){
			return false;
		}
		var obj={};
		var temp={}; 
		var n = $scope.showClaimSelected.companyClaimRateOfCalculation;
		switch(n) {

		case 1:
			for(i=0;i<claimObj.companyClaimedProductList.length;i++){
				obj=claimObj.companyClaimedProductList[i];
				obj.returnRegisterProductAmount=obj.returnRegisterProductSellRate*obj.returnRegisterProductQuantity;		  			
				obj.returnRegisterProductRate=obj.returnRegisterProductSellRate;
				temp=obj;
				claimObj.companyClaimedProductList[i]=temp;
			}
			break;
		case 2:
			for(i=0;i<claimObj.companyClaimedProductList.length;i++){
				obj=claimObj.companyClaimedProductList[i];
				obj.returnRegisterProductAmount=obj.returnRegisterProductPurchaseRate*obj.returnRegisterProductQuantity;		  			
				obj.returnRegisterProductRate=obj.returnRegisterProductPurchaseRate;
				temp=obj;
				claimObj.companyClaimedProductList[i]=temp;
			}
			break;
		case 3:
			for(i=0;i<claimObj.companyClaimedProductList.length;i++){
				obj=claimObj.companyClaimedProductList[i];
				obj.returnRegisterProductAmount=obj.returnRegisterProductMRP*obj.returnRegisterProductQuantity;		  			
				obj.returnRegisterProductRate=obj.returnRegisterProductMRP;
				temp=obj;
				claimObj.companyClaimedProductList[i]=temp;
			}
			break;
		default:
			break;//==
		}

		return claimObj;
	};

	$scope.setAmountRate=function(obj){
		obj=$scope.calculateAmountRate();
	}
}]);

function CompanyClaimValidate() {
	flag = true;
	if (typeof angular.element(document.getElementById('CompanyClaim'))
			.scope().showClaimSelected.companyClaimSID === "undefined" || typeof angular.element(document.getElementById('CompanyClaim'))
			.scope().showClaimSelected.companyClaimSID !== "undefined" && angular.element(document.getElementById('CompanyClaim'))
			.scope().showClaimSelected.companyClaimSID == 0) {
		$("#supplier_select").css("background-color", "#fff4eb");
		flag = false;
	}
	if (typeof angular.element(document.getElementById('CompanyClaim'))
			.scope().showClaimSelected.companyClaimType === "undefined") {
		$("#type_select").css("background-color", "#fff4eb");
		flag = false;
	}
	if (typeof angular.element(document.getElementById('CompanyClaim'))
			.scope().showClaimSelected.companyClaimRateOfCalculation === "undefined") {
		$("#rateOfCal_select").css("background-color", "#fff4eb");
		flag = false;
	}
	if (typeof angular.element(document.getElementById('CompanyClaim'))
			.scope().showClaimSelected.companyClaimcalculateVAT === "undefined") {
		$("#calculateVat_select").css("background-color", "#fff4eb");
		flag = false;
	}
	var regex=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
	if (typeof angular.element(document.getElementById('CompanyClaim')).scope().showClaimSelected.companyClaimDate === "undefined" || typeof angular.element(document.getElementById('CompanyClaim')).scope().showClaimSelected.companyClaimDate !== "undefined" && !regex.test(angular.element(document.getElementById('CompanyClaim')).scope().showClaimSelected.companyClaimDate)) {
		$("#date").css("background-color", "#fff4eb");
		flag = false;
	}
	/*if (angular.element(document.getElementById('CompanyClaim')).scope().errorCount == 0) {

	} else {

		flag = false;
	}*/
	return flag;
}