
pharmApp.controller('ReturnsRegisterCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','$location','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,$location,ngToast) {
	$scope.maxId=0;	
	$scope.showCustomerSelected={};
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.filter={fromDate:"",toDate:"",createdByFilterId:0,creditNoteId:0,status:0,fromAmt:0,toAmt:0};
	$scope.custTypeList=[{id:0,name:'ALL'},{id:1,name:'Customer Return'},{id:2,name:'Self Return'}];
	$scope.filterStatus='OFF';
	$scope.filterStatus2 = 'OFF';
	$scope.editable=$rootScope.editable;
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

					          { field: 'customerId', caption: 'Customer Id', size: '20%', resizable: true},    
					          { field: 'customerName', caption: 'Customer Name', size: '30%', resizable: true, sortable: true },
					          { field: 'customerArea', caption: 'Area', size: '30%', resizable: true}, 
					          { field: 'customerSalesman', caption: 'Salesman', size: '30%', resizable: true},       
					          { field: 'recid', caption: 'recid', hidden:true}

					          ],
					          records:[],
					          onSelect: function(event) {
					        	  event.onComplete = function () {
					        		  var angScope=angular.element(document.getElementById('ReturnsRegister')).scope();
					        		  
					        		  angScope.showCustomerSelected=w2ui.grid.get(event.recid);
					        		  angScope.getFreshCustomerDetails(angScope.showCustomerSelected.customerId);
					        		  //angScope.$apply();

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
						toolbar : false,
						toolbarDelete: false,
						toolbarAdd : false
					},
					columns: [
					          					           
					          { field: 'recid',hidden:true }, 
					          { field: 'returnRegisterCustId',hidden:true },					     
					          { field: 'returnRegisterType',hidden:true }, 
					          { field: 'returnRegisterRemark',hidden:true }, 
					          { field: 'returnRegisterStatus',hidden:true }, 
					          { field: 'returnRegisterLockReason',hidden:true }, 
					          { field: 'returnRegisterLockFlag',hidden:true }, 
					          { field: 'returnRegisterVoidFlag',hidden:true },
					          { field: 'returnRegisterVerifiedByID',hidden:true },
					          { field: 'returnRegisterVerifiedOn',hidden:true },
					          { field: 'returnRegisterVerifiedByName',hidden:true },
					          { field: 'returnRegisterProductList',hidden:true },
					          { field: 'returnRegisterId', caption: 'RR#', size: '100%', resizable: true, sortable: true }, 
					          { field: 'returnRegisterDate', caption: 'Date', size: '70%', resizable: true, sortable: true },      
					          { field: 'returnRegisterCustName', caption: 'Customer', size: '100%', resizable: true, sortable: true },      
					          { field: 'returnRegisterTotalProducts', caption: 'Products#', size: '100%', resizable: true, sortable: true },      
					          { field: 'returnRegisterTotal', caption: 'Amount', size: '100%', resizable: true, sortable: true },
					          { field: 'returnRegisterCreditNoteId', caption: 'Credit Note', size: '100%', resizable: true, sortable: true },      					          
					          { field: 'returnRegisterStatusDescription', caption: 'Status', size: '100%', resizable: true, sortable: true },
					          /*{ field: 'returnRegisterProductCCID', caption: 'Company Claim', size: '100%', resizable: true, sortable: true },*/      
					          { field: 'returnRegisterCreatedByName', caption: 'Created By', size: '100%', resizable: true, sortable: true }],
					          onSelect: function(event) {
					        	  event.onComplete = function () {					        		  
					        		  var angScope=angular.element(document.getElementById('ReturnsRegister')).scope();
					        		  angScope.showRecordSelected={};
					        		  angular.copy(w2ui.grid2.get(event.recid),angScope.showRecordSelected);					    
					        		  angular.element(document.getElementById('ReturnsRegister')).scope().$root.returnRecordSelected={};
					        		  angular.copy(w2ui.grid2.get(event.recid), angular.element(document.getElementById('ReturnsRegister')).scope().$root.returnRecordSelected);
					        		  angScope.showGoodReturn=true;
					        		  angScope.$apply();

					        	  }
					          } ,
					          onUnselect: function(event) {
					        	  event.onComplete = function () {
					        		  
					        		  var angScope=angular.element(document.getElementById('ReturnsRegister')).scope();
					        		  angScope.showRecordSelected={};
					        		  //angular.copy(w2ui.grid2.get(event.recid),angScope.showRecordSelected);
					        		  angular.element(document.getElementById('ReturnsRegister')).scope().$root.returnRecordSelected={};
					        		  //angular.copy(w2ui.grid2.get(event.recid), angular.element(document.getElementById('ReturnsRegister')).scope().$root.returnRecordSelected);
					        		  angScope.showGoodReturn=false;					        
					        		  angScope.$apply();

					        	  }
					          },
					          onDblClick:function(event){
					        	  event.onComplete = function () {
					        		  var angScope=angular.element(document.getElementById('ReturnsRegister')).scope();
					        		  angScope.showRecordSelected={};
					        		  angular.copy(w2ui.grid2.get(event.recid),angScope.showRecordSelected);					    
					        		  angular.element(document.getElementById('ReturnsRegister')).scope().$root.returnRecordSelected={};
					        		  angular.copy(w2ui.grid2.get(event.recid), angular.element(document.getElementById('ReturnsRegister')).scope().$root.returnRecordSelected);
					        		  angScope.showGoodReturn=true;
					        		  angScope.$apply();
					        		  angScope.objectPool();
					        		  
					        	  }
					          },
					          searches: [
							              { field: 'returnRegisterCreditNoteId', caption: 'Credit Note',type: 'text' /*type: 'int'*/ }
							      
							          ],
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
					        		  angular.element(document.getElementById('ReturnsRegister')).scope().objectPool();
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
		
		if(typeof $rootScope.reAssignFlag !=="undefined" && $rootScope.reAssignFlag){
			angular.copy($rootScope.rrList,w2ui.grid2.records);
			$scope.customerList=[];
			angular.copy($rootScope.customerGridList,w2ui.grid.records);			
			angular.copy($rootScope.customerList,$scope.customerList);
			angular.copy($rootScope.filter,$scope.filter);
			//angular.copy($rootScope.filterStatus,$scope.filterStatus);
			$scope.filterStatus=$rootScope.filterStatus
			$rootScope.filter=$scope.filter;
			$rootScope.filterStatus=$scope.filterStatus;
			$scope.createdByNameList=$rootScope.createdByNameList;
			$scope.maxId=$rootScope.maxId;
			var obj=$.grep($scope.customerList,function(e){return e.recid == 0;})[0];
			$scope.selfRec=obj;
			w2ui.grid2.select($rootScope.returnRecordSelected.recid);
			w2ui.grid2.refresh();
			w2ui.grid.select($rootScope.returnRecordSelected.returnRegisterCustId);
			w2ui.grid.refresh();
			//$scope.custTypeSelected=$rootScope.custTypeSelected;
			//$scope.onChangeCustType($rootScope.custTypeSelected);
			$scope.custTypeSelected=$.grep($scope.custTypeList,function(e){return e.id==$rootScope.custTypeSelected.id;})[0];
			delete $rootScope.custTypeSelected;
			delete $rootScope.rrList;
			delete $rootScope.customerGridList;
			delete $rootScope.maxId;
			delete $rootScope.reAssignFlag;
			delete $rootScope.filter;
			delete $rootScope.filterStatus;
			//copy filter when implement
		}else{
			var json={"entity":3,"entityId":0,"listType":3,"requestData":"","userId":$scope.activeUser.userId,"token":$scope.activeUser.token};
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
					$scope.customerList=respData.customerList;
					$scope.createdByNameList=respData.createdByNameList;
					//$scope.customerList.push();
					//$rootScope.createdByNameList=$scope.createdByNameList;
					$rootScope.customerList=[];
					angular.copy($scope.customerList,$rootScope.customerList);	
					//var obj=$.grep($scope.customerList,function(e){return e.recid == 0;})[0];
					//var index=$scope.customerList.indexOf(obj);
					//$scope.customerList.splice(index,1);
					$scope.selfRec={recid:-1,customerId:0,customerName:'Self',customerArea:'N/A',customerSalesman:'N/A'};
					//$rootScope.productList={};
					//$rootScope.productList=respData.productList;
					w2ui.grid.refresh();
					//$scope.onCompanySelection($scope.showCompanyList[0]);
					$scope.spinner=false;
					$scope.custTypeSelected=$scope.custTypeList[0];
					$scope.onChangeCustType($scope.custTypeSelected);
					
				}else{
					$scope.spinner=false;
					alert('Purpleaid Error Manager \n'+data.responseCode);
	
				}
			}).error(function(data, status, headers, config) {  
				$scope.spinner=false;
				return false;
			});
	
		}
	};
	
	
	$scope.getFreshCustomerDetails=function(customerId){
		if(typeof $rootScope.reAssignFlag !=="undefined" && $rootScope.reAssignFlag){
			return false;
		}
		$scope.spinner=true;
		if(typeof $scope.listLimit === "undefined"){
			$scope.listLimit=100;
		}
		$scope.maxId=0;
		var json={"entity":3,"listType":1,"requestData":"","userId":$scope.activeUser.userId,"token":$scope.activeUser.token,"entityId": customerId , "lastID":$scope.maxId , "listLimit" : $scope.listLimit};
		//HTTP CALL FOR GETTING CompanyList enclosed division 
		json=angular.extend(json,$scope.filter);
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiReturn/getReturn",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);									
				angular.copy(respData.rrList,w2ui.grid2.records);
				w2ui.grid2.refresh();
				$scope.maxId = respData.maxId;////NEEDS to be checked after implementation
				//$scope.onCompanySelection($scope.showCompanyList[0]);
				ngToast.create({
					  className: 'success',
					  content: '<span>Data Updated successfully...</span>',
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
	
	
	$scope.getUpdatedCustomerDetails=function(){
		$scope.spinner=true;
		if(w2ui.grid.getSelection().length == 0){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Customer not selected...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			return false;
		}
		if(typeof $scope.listLimit === "undefined"){
			$scope.listLimit=100;
		}
		var json={"entity":3,"entityId":w2ui.grid.getSelection()[0],"listType":1,"requestData":"","userId":$scope.activeUser.userId,"token":$scope.activeUser.token,"lastID":$scope.maxId,listLimit:$scope.listLimit};
		//HTTP CALL FOR GETTING CompanyList enclosed division 
		json=angular.extend(json,$scope.filter);
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
					$scope.maxId = respData.maxId;
					w2ui.grid2.records=w2ui.grid2.records.concat(respData.rrList);
					w2ui.grid2.refresh();
				}
				
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
		}).error(function(data, status, headers, config) {  
			$scope.spinner=false;
			return false;
		});
		
	};
	
	$scope.showFilterPopup = function(){
		if(w2ui.grid.getSelection().length == 0){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Please select customer before applying filter...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			return false;
			
		}
		$modal.open({
			template :'<div id="ReturnRegisterFilter" class="" ng-controller="ReturnRegisterFilterCtrl" ng-init=init()> <div class="container lightBox_masterPrductFilter"> <div class="row topblueStrip "> <h6> <span class="topblueStripText">Return Register FILTERS</span> </h6> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <div class="row"> <div class=" col-md-3"> <span class="control-label">From&nbsp;Date</span> </div> <div class=" col-md-8"> <input id="from_date" type="eu-date1" tabindex="1" class="form-control productFilterIP_size input-sm textCenter" ng-model="filter.fromDate"> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <div class="row"> <div class=" col-md-3"> <span class="control-label">To&nbsp;Date</span> </div> <div class=" col-md-8"> <input type="eu-date2" id="to_date" tabindex="2" class="form-control productFilterIP_size input-sm textCenter" ng-model="filter.toDate"> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <div class="row"> <div class=" col-md-3"> <span class="control-label">Created&nbsp;by</span> </div> <div class=" col-md-8"> <select class="form-control productboxSize input-sm productFilterIP_size input_rightSpecing" tabindex="5" ng-options="opt.contactId as opt.contactFullName for opt in createdByNameList" ng-model="filter.createdByFilterId"> </select> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <div class="row"> <div class=" col-md-3"> <span class="control-label">Credit&nbsp;Note</span> </div> <div class=" col-md-8"> <select class="form-control productboxSize input-sm productFilterIP_size input_rightSpecing" tabindex="4" ng-model="filter.creditNoteId" ng-options="opt.id as opt.name for opt in yesNoList"> </select> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <div class="row"> <div class=" col-md-3"> <span class="control-label ">Status</span> </div> <div class=" col-md-8"> <select class="form-control productboxSize input-sm productFilterIP_size input_rightSpecing" tabindex="5" ng-options="opt.id as opt.name for opt in statusTypeList" ng-model="filter.status"> </select> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <div class="row"> <div class=" col-md-3"> <span class="control-label ">Amount</span> </div> <div class=" col-md-4"> <input type="text" tabindex="6" id="amount_from" class="form-control input-sm textRight" ng-model="filter.fromAmt"> </div> <div class=" col-md-4"> <input type="text" tabindex="7" id="amount_to" class="form-control input-sm textRight" style="margin-left: -12px;" ng-model="filter.toAmt"> </div> </div> <div class="row"> <div class=" col-md-3"></div> <div class=" col-md-4 textCenter"> <span class="control-label">from</span> </div> <div class=" col-md-4 textCenter"> <span class="control-label" style="margin-left: -12px;">to</span> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <!-- <div class="row"> <div class=" col-md-6"> <span> <input type="checkbox" ng-model="filter.activeFlg" ng-value={{filter.activeFlg}}> <span class="chechBox_lablePos">Show&nbsp;Active</span> </span> </div> <div class=" col-md-6"> <span class="ProductFilterLockpos"> <input type="checkbox"> <span class="chechBox_lablePos">Show&nbsp;Lock</span> </span> </div> </div> --> </div> </div> <div class="row fieldsTop_Spacing "> <div class=" col-md-4"> <a ng-click="clearAllFilters();" title="Remove Product" tabindex="8" class=" clearAllFilterPos">CLEAR&nbsp;ALL</a> </div> </div> <div class="row fieldsTop_Spacing fieldsBot_Spacing"> <div class=" col-md-4"> <div class="row"> <div class=" col-md-2"></div> <div class=" col-md-4" style="margin-left: 10px;"> <button ng-click="cancel()" type="button" class="canclebtnSize" tabindex="9">Cancel</button> </div> <div class=" col-md-4"> <button type="button" ng-click="ok(filter)" class="okbtnSize" tabindex="10">OK</button> </div> </div> </div> </div> </div> </div> <script type="text/javascript"> $(document).ready(function() { $("#createdBy").allowAlphaNumericOnlywithspace(); $("#cpmpanyClaim").allowAlphaNumericOnlywithspace(); $("#amount_from").allowNumbersOnly(); $("#amount_to").allowNumbersOnly(); }); </script> <script type="text/javascript"> var month = (new Date()).getMonth() + 1; var year = (new Date()).getFullYear(); $("input[type=eu-date]").w2field("date", { format: "dd/mm/yyyy" }); $("input[type=eu-date1]").w2field("date", { format: "dd/mm/yyyy", end: $("input[type=eu-date2]") }); $("input[type=eu-date2]").w2field("date", { format: "dd/mm/yyyy", start: $("input[type=eu-date1]") }); $("input[type=eu-time]").w2field("time", { format: "h24" }); $("input[type=eu-timeA]").w2field("time", { format: "h24", start: "8:00 am", end: "4:30 pm" }); </script> ',  
			controller :'ReturnRegisterFilterCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'returnRegister-Filter'
			
		}).result.then(function(result) {
			
			
		});
	};
	
	$scope.onChangeCustType = function(custType){
		if(typeof $rootScope.reAssignFlag !=="undefined" && $rootScope.reAssignFlag){
			//delete $rootScope.reAssignFlag;
			//$scope.custTypeSelected=$rootScope.custTypeSelected;
			return false;
		}
		if(custType.id == 0){
			w2ui.grid.unlock();
			angular.copy($scope.customerList,w2ui.grid.records);
			w2ui.grid.records.push($scope.selfRec);
			w2ui.grid.refresh();
		}else if(custType.id == 1){
			w2ui.grid.unlock();
			angular.copy($scope.customerList,w2ui.grid.records);
			w2ui.grid.refresh();
		}else if(custType.id == 2){
			//disable grid
			/*w2ui.grid.lock('You Have selected your own record', true);*/
			w2ui.grid.records=[];
			w2ui.grid.records.push($scope.selfRec);
			w2ui.grid.refresh();
			//$scope.getFreshCustomerDetails(0);
		}
		
		
	};
	
	$scope.objectPool=function(){
		if(!$scope.showGoodReturn){
			return false;
		}
		$rootScope.prevPageFlag=true;
		$rootScope.rrList=w2ui.grid2.records;
		$rootScope.currPage='goodsreturn';
		$rootScope.prevPage='returnregister';
		$rootScope.maxId=$scope.maxId;
		$rootScope.customerGridList=w2ui.grid.records;
		$rootScope.custTypeSelected=$scope.custTypeSelected;
		$rootScope.filter=$scope.filter;
		$rootScope.filterStatus=$scope.filterStatus;
		$rootScope.createdByNameList=$scope.createdByNameList;
		////new 
		$rootScope.returnRecordSelected=w2ui.grid2.get(w2ui.grid2.getSelection()[0]);
		changeView($scope.activeUser.userId,$scope.activeUser.token,53)
		//copy filter when implemented    href="#goodsreturn"
		
	};
	
	
	$scope.cancelFilter=function(){
		$scope.filterStatus='OFF';
		$scope.filter={fromDate:"",toDate:"",createdByFilterId:0,creditNoteId:0,status:0,fromAmt:0,toAmt:0};
		$scope.getFreshCustomerDetails($scope.showCustomerSelected.customerId);
	
	};
	
	$scope.refresh=function(){
		//$location.path('returnregister');
		//$location.path('goodsreturn');//
		$location.path('returnregister');
		
	};
	
	
	$scope.showNotLinked=function(){
		if($scope.filterStatus2 == 'OFF'){
			$scope.filterStatus2 = 'ON';
			w2ui.grid2.search('returnRegisterCreditNoteId','0');
			//document.getElementByID('grid_grid2_searchClear');
			//var temp=.getAttribute('onclick')
			
		}else{
			$scope.filterStatus2 = 'OFF';
			w2ui.grid2.reset()
		}
	};
	
	
}]);
