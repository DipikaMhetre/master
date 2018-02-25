pharmApp.controller('CreditNoteCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','$location','ngToast','wareHouse', function ($scope,$rootScope,$http, $modal, $log,$timeout,$location,ngToast,wareHouse) {
	$scope.maxId=0;	
	$scope.listLimit=50;
	$scope.creditNoteType=0;
	$scope.editable=$rootScope.editable;
	$scope.filterStatus='OFF';
	$scope.CNTypeList=[{id:-1,name:'All'},{id:1,name:'Goods Return'},{id:2,name:'Direct'},{id:3,name:'Rate Difference'},{id:4,name:'Additional Discount'}];
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.clearFilter={fromDate:'',toDate:'',ledgerFlag:-1,approvedFlag:-1,contactID:-1,status:-1,fromAmt:0,toAmt:0,creditNoteId:0,creditNoteVoidFlag:-1};
	$scope.filter={fromDate:'',toDate:'',ledgerFlag:-1,approvedFlag:-1,contactID:-1,status:-1,fromAmt:0,toAmt:0,creditNoteId:0,creditNoteVoidFlag:-1};
	var angScope=angular.element(document.getElementById('CreditNoteRegister')).scope();
	$scope.firstCall=true;
	
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
					          { field: 'customerId', caption: 'Cust Id', size: '15%', resizable: false,style: 'text-align: right'  },    
					          { field: 'customerName', caption: 'Customer Name', size: '30%', resizable: false,style: 'text-align: left'  },
					          { field: 'customerArea', caption: 'Area', size: '20%', resizable: false,style: 'text-align: left'  }, 
					          { field: 'customerSalesman', caption: 'Salesman', size: '20%', resizable: false,style: 'text-align: left'  },       
					          { field: 'recid', caption: 'recid', hidden:true}
					          ],
					          records:[],
					          
					          onSelect: function(event) {
									event.onComplete = function () {
										var angScope=angular.element(document.getElementById('CreditNoteRegister')).scope();
										angScope.showCustomerSelected={};
										angScope.maxId=0;	
										//angular.copy(w2ui.grid.get(event.recid),angScope.showCustomerSelected);
										angScope.showCustomerSelected=w2ui.grid.get(event.recid);
										//angular.copy(w2ui.grid.get(event.recid),angScope.masterRoleObj); 
										angScope.getCustomerCreditNote();
										angScope.currRecId=event.recid;
										w2ui.grid2.selectNone();
										if(!angScope.$$phase) {
											angScope.$apply();
											}
										

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
						toolbarAdd : false,
						selectColumn: true
					},
					columns: [		
					          { field: 'recid', hidden:true},
					          { field: 'creditNoteID', caption: 'Note#', size: '10%', resizable: false, sortable: false,style: 'text-align: right'  }, 
					          { field: 'creditNoteDate', caption: 'Date', size: '15%', resizable: false, sortable: false ,style: 'text-align: right'},      
					          { field: 'creditNoteCustName', caption: 'Customer', size: '25%', resizable: false, sortable: false,style: 'text-align: left'  },
					          { field: 'creditNoteTypeDescription', caption: 'Type', size: '25%', resizable: false, sortable: false ,style: 'text-align: left' },
					          /*{ field: '', caption: 'Products#', size: '60%', resizable: false, sortable: false },      
					          { field: '', caption: 'Product Amt', size: '77%', resizable: false, sortable: false },*/
					          { field: 'creditNoteAmount', caption: 'C.N. Amount', size: '15%', resizable: false, sortable: false ,style: 'text-align: right'},					         
					          { field: 'creditNoteCreatedByName', caption: 'Created By', size: '20%', resizable: false, sortable: false ,style: 'text-align: left' },					  
					          { field: 'creditNoteStatusDescription', caption: 'Status', size: '15%', resizable: false, sortable: false,style: 'text-align: left'  },
					          { field: 'creditNoteLedgerDescription', caption: 'Ledger', size: '10%', resizable: false, sortable: false,style: 'text-align: left'  },
					          { field: 'creditNoteType',hidden:true},
					         
					          { field: 'creditNoteflgLedger',hidden:true},
					          { field: 'creditNoteReason', hidden:true},
					          { field: 'creditNoteflgLock', hidden:true},
					          { field: 'creditNoteReasonOther', hidden:true},
					          { field: 'creditNoteRemark', hidden:true},
					          { field: 'creditNoteID', hidden:true},
					          { field: 'creditNoteCustID', hidden:true},
					          { field: 'creditNoteVerifiedBy', hidden:true},
					          { field: 'creditNoteVerifiedOn', hidden:true},
					          { field: 'creditNoteLockUserName', hidden:true},
					          { field: 'creditNoteflgLedger', hidden:true},
					          { field: 'creditNoteLedgerDateTime', hidden:true},
					          { field: 'creditNoteflgVoid', hidden:true},
					          { field: 'creditNoteflgUserName', hidden:true},
					          { field: 'creditNoteVoidReason', hidden:true},
					          { field: 'creditNoteTotalCredit', hidden:true},
					          { field: 'creditNoteLessPercentage', hidden:true},
					          { field: 'creditNoteLockDateTime', hidden:true},
					          { field: 'creditNoteLessAmt', hidden:true},
					          { field: 'creditNoteFlgRefundVAT', hidden:true},
					          { field: 'creditNoteLedgerUserName', hidden:true},
					          { field: 'creditNoteVATPercentage', hidden:true},
					          { field: 'creditNoteVATamt', hidden:true},
					          { field: 'creditNoteCreatedOn', hidden:true},
					          { field: 'creditNoteVerifiedFlg', hidden:true},
					          { field: 'creditNoteApprovedBy', hidden:true},
					          { field: 'creditNoteApprovedFlg', hidden:true},
					          { field: 'creditNoteVATrefund', hidden:true},
					          { field: 'creditNoteGrossCredit', hidden:true},
					          { field: 'creditNoteApprovedOn', hidden:true},
					          { field: 'creditNoteNetCredit', hidden:true},
					          { field: 'creditNoteProductList', hidden:true},
					          { field: 'recid', hidden:true},
					          ],

					          records:[],	
					          onSelect:function(event){
					        	  event.onComplete = function () {
					        		  angular.element(document.getElementById('CreditNoteRegister')).scope().creditNoteType=w2ui.grid2.get(event.recid).creditNoteType;
					        		  if(!angular.element(document.getElementById('CreditNoteRegister')).scope().$$phase) {
					        			  angular.element(document.getElementById('CreditNoteRegister')).scope().$apply();
											}
					        		  //angular.element(document.getElementById('CreditNoteRegister')).scope().$apply();
					        	  }
					          },
					          onUnselect:function(event){
					        	  event.onComplete = function () {
					        		  angular.element(document.getElementById('CreditNoteRegister')).scope().creditNoteType=0;
					        		  if(!angular.element(document.getElementById('CreditNoteRegister')).scope().$$phase) {
					        			  angular.element(document.getElementById('CreditNoteRegister')).scope().$apply();
											}
					        		  //angular.element(document.getElementById('CreditNoteRegister')).scope().$apply();
					        	  }
					          },
					          onDblClick:function(event){
								  event.onComplete = function () {
									  			
										  angScope.selectGrid2Action(w2ui.grid2.get(event.recid));
									 
								  }},
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
					        		  angScope.selectGrid2Action(w2ui.grid2.get(recid));
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
		if(wareHouse.getDataIndex('cNRegisterBackUp') != -1)
		var cNRegisterBackUp=wareHouse.getData('cNRegisterBackUp');
		
		//Screen loading fresh or from backup selection
		if(typeof cNRegisterBackUp !== "undefined" && typeof $rootScope.creditNoteRegisterRefreshNeeded !== "undefined" && !$rootScope.creditNoteRegisterRefreshNeeded){
			
			angular.copy(cNRegisterBackUp.customerList,w2ui.grid.records); //CustomerList from backup
			w2ui.grid.records.unshift({recid:-1,customerId:'N/A',customerName:'All'});
			w2ui.grid.refresh();
			if(typeof cNRegisterBackUp.showCustomerSelected !== "undefined"){
				//wareHouse.setData('showCustomerSelected',$scope.showCustomerSelected);
				w2ui.grid.select(cNRegisterBackUp.showCustomerSelected.recid);//customer selected
				
			}
			$scope.CNTypeSelected=cNRegisterBackUp.CNTypeSelected;//dropdown selection			
			angular.copy(cNRegisterBackUp.cNList,w2ui.grid2.records);//grid 2 data		
			if(typeof cNRegisterBackUp.showCNPSelected !== "undefined"){
				w2ui.grid2.select(cNRegisterBackUp.showCNPSelected.recid);
			}
			$scope.maxId=cNRegisterBackUp.maxId;//maxID
			$scope.filterStatus=cNRegisterBackUp.filterStatus;
			$scope.filter=cNRegisterBackUp.filter;
			$scope.listLimit=cNRegisterBackUp.listLimit;
			$scope.reasonList=cNRegisterBackUp.reasonList;
			
			w2ui.grid.refresh();			
			delete $rootScope.creditNoteRegisterRefreshNeeded;
			wareHouse.clearAll();//cleared all warehouse object
			$scope.firstCall=false;
			ngToast.create({
				  className: 'success',
				  content: '<span>Data loaded from backup successfully</span>',
				  timeout: 3000,
				  animation:'fade'
				});
		}else{
			var json={entity:2,entityId:-1,listType:7,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,companyId:0,grDate:0,fromDate:'',toDate:'',ledgerFlag:-1,approvedFlag:-1,contactID:-1,status:-1,fromAmt:0,toAmt:0,creditNoteId:0,creditNoteVoidFlag:-1,listLimit:$scope.listLimit,lastID:$scope.maxId};
			//HTTP CALL FOR GETTING customerlist 
			$http({
				method: 'POST',
				url: "http://localhost:8080/Purple/rest/apiCreditNote/getCreditNote",
				async:false,
				data:JSON.stringify(json),
				headers: {'Content-Type': 'application/json'}
			}).success(function(data, status, headers, config) {
				if(data.responseCode == 200){
					var respData=JSON.parse(data.responseData);
					$scope.allCustomerList=respData.allCustomerList;
					$scope.reasonList=respData.reasonList;
					$scope.maxId=respData.creditNoteList.maxId;
					angular.copy(respData.creditNoteList.creditNoteList,w2ui.grid2.records);
					$scope.contactList=respData.userNameList;
					$scope.allCustomerList.unshift({recid:-1,customerId:'N/A',customerName:'All'});
					angular.copy($scope.allCustomerList,w2ui.grid.records);
					w2ui.grid.refresh();
					w2ui.grid2.refresh();
					w2ui.grid.select(-1);
					$scope.CNTypeSelected=-1;
					$scope.firstCall=false;
					//$scope.onCompanySelection($scope.showCompanyList[0]);
				}else{
					alert('Purpleaid Error Manager \n'+data.responseCode);
				}
			}).error(function(data, status, headers, config) {          
				return false;
			});
		};
		
		if(typeof $rootScope.prevPageFlag !== 'undefined'){
			delete $rootScope.prevPageFlag;
		}
	}

	$scope.showFilterPopup = function(){
		$modal.open({
			//template :'<div ng-controller="CreditNoteRegisterFilterCtrl" class="" ng-init=init()> <div class="container Filter_Large"> <div class="row topblueStrip "> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">FILTERS</span> <img alt="" class="close_popupImage" ng-click="cancel()" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">From&nbsp;Date</span> </div> <div class=" col-md-8"> <input id="from_date" type="eu-date1" tabindex="10" class="form-control input-sm textCenter" ng-model="filter.fromDate"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">To&nbsp;Date</span> </div> <div class=" col-md-8"> <input type="eu-date2" id="to_date" tabindex="11" class="form-control input-sm textCenter" ng-model="filter.toDate" > </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label ">Ledger</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" tabindex="13" ng-options="op.id as op.name for op in yesNoList" ng-model="filter.ledgerFlag"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Approved</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" tabindex="12" ng-options="op.id as op.name for op in approvedList" ng-model="filter.approvedFlag"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Created&nbsp;by</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" tabindex="12" ng-options="op.contactId as op.contactFullName for op in contactList" ng-model="filter.contactID"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label ">Status</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" tabindex="13" ng-options="op.id as op.name for op in statusList" ng-model="filter.status"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-12"> <div class="row"> <div class=" col-md-4"> <span class="control-label">C.N.&nbsp;Amount</span> </div> <div class=" col-md-4"> <input type="text" tabindex="14" id="amount_from" class="form-control input-sm textRight width_Large" ng-model="filter.fromAmt"> </div> <div class=" col-md-4"> <input type="text" tabindex="15" id="amount_to" class="form-control input-sm textRight width_Large_leftspacing" ng-model="filter.toAmt"> </div> </div> <div class="row"> <div class=" col-md-4"></div> <div class=" col-md-4 textCenter"> <span class="control-label">from</span> </div> <div class=" col-md-4 textCenter"> <span class="control-label">to</span> </div> </div> </div> </div> <div class="row fieldsTop_Spacing "> <div class=" col-md-12"> <a ng-click="clearAllFilters();" class=" clearAllFilterPos">CLEAR&nbsp;ALL</a> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class="col-md-12 "> <button class="btn canclebtnSize" ng-click="cancel()" tabindex="11">Cancel</button> <button class="btn okbtnSize" ng-click="ok(filter)" tabindex="12">Ok</button> </div> </div> </div> </div> <script type="text/javascript"> $(document).ready(function() { $("#createdBy").allowAlphaNumericOnlywithspace(); $("#cpmpanyClaim").allowAlphaNumericOnlywithspace(); $("#amount_from").allowNumbersOnly(); $("#amount_to").allowNumbersOnly(); }); </script> <script type="text/javascript"> var month = (new Date()).getMonth() + 1; var year = (new Date()).getFullYear(); $("input[type=eu-date]").w2field("date", { format : "dd/mm/yyyy" }); $("input[type=eu-date1]").w2field("date", { format : "dd/mm/yyyy", end : $("input[type=eu-date2]") }); $("input[type=eu-date2]").w2field("date", { format : "dd/mm/yyyy", start : $("input[type=eu-date1]") }); $("input[type=eu-time]").w2field("time", { format : "h24" }); $("input[type=eu-timeA]").w2field("time", { format : "h24", start : "8:00 am", end : "4:30 pm" }); </script> ', 
			/*new by deepali*/		
			template :'<div ng-controller="CreditNoteRegisterFilterCtrl" class="" ng-init=init()> <div class="container Filter_Large"> <div class="row topblueStrip "> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">FILTERS</span> <img alt="" class="close_popupImage" ng-click="cancel()" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label ">C.N.#</span> </div> <div class=" col-md-8"> <input type="text" id="" tabindex="11"ng-model="filter.creditNoteId" class="form-control input-sm"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">From&nbsp;Date</span> </div> <div class=" col-md-8"> <input id="from_date" type="eu-date1" tabindex="10" class="form-control input-sm textCenter" ng-model="filter.fromDate"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">To&nbsp;Date</span> </div> <div class=" col-md-8"> <input type="eu-date2" id="to_date" tabindex="11" class="form-control input-sm textCenter" ng-model="filter.toDate"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label ">Ledger</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" tabindex="13" ng-options="op.id as op.name for op in yesNoList" ng-model="filter.ledgerFlag"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Approved</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" tabindex="12" ng-options="op.id as op.name for op in approvedList" ng-model="filter.approvedFlag"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Created&nbsp;by</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" tabindex="12" ng-options="op.contactId as op.contactFullName for op in contactList" ng-model="filter.contactID"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label ">Status</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" tabindex="13" ng-options="op.id as op.name for op in statusList" ng-model="filter.status"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label ">Void</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" tabindex="13" ng-options="op.id as op.name for op in yesNoList" ng-model="filter.creditNoteVoidFlag"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-12"> <div class="row"> <div class=" col-md-4"> <span class="control-label">C.N.&nbsp;Amount</span> </div> <div class=" col-md-4"> <input type="text" tabindex="14" id="amount_from" class="form-control input-sm textRight width_Large" ng-model="filter.fromAmt"> </div> <div class=" col-md-4"> <input type="text" tabindex="15" id="amount_to" class="form-control input-sm textRight width_Large_leftspacing" ng-model="filter.toAmt"> </div> </div> <div class="row"> <div class=" col-md-4"></div> <div class=" col-md-4 textCenter"> <span class="control-label">from</span> </div> <div class=" col-md-4 textCenter"> <span class="control-label">to</span> </div> </div> </div> </div> <div class="row fieldsTop_Spacing "> <div class=" col-md-12"> <a ng-click="clearAllFilters();" class=" clearAllFilterPos">CLEAR&nbsp;ALL</a> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class="col-md-12 "> <button class="btn canclebtnSize" ng-click="cancel()" tabindex="11">Cancel</button> <button class="btn okbtnSize" ng-click="ok(filter)" tabindex="12">Ok</button> </div> </div> </div> </div> <script type="text/javascript"> var month = (new Date()).getMonth() + 1; var year = (new Date()).getFullYear(); $("input[type=eu-date]").w2field("date", { format : "dd/mm/yyyy" }); $("input[type=eu-date1]").w2field("date", { format : "dd/mm/yyyy", end : $("input[type=eu-date2]") }); $("input[type=eu-date2]").w2field("date", { format : "dd/mm/yyyy", start : $("input[type=eu-date1]") }); </script> ',  
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'Filter_Large_Left-Model'

		}).result.then(function(result) {


		});
	};


	$scope.showCreditNoteTypeDirectPopup = function(){
		$modal.open({
	//		template :'<div id="CNRDirect" ng-init="init()" ng-controller="CNRDirectCtrl" class="container lightBox_CreditNote_Direct"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">{{opType}} Direct</span> <img alt="" class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Customer Details</span> <button class="btn btn-primary consumptionDetailsBtn">Consumption Details</button> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing "> <div class="col-md-7 sectionvline"> <div class="row visitingCard_view Customer_Premium_Bg"> <div class="col-md-12 visitingCard_innerView"> <span style="font-size: 18px; color: #cc0099;">Shree Medical{{showCustomerSelected.customerName}}</span> <span>(3245454)</span> <span class="Customer_Premium_text">Premium</span> <br> <span>Satyajeet Toradmal</span> <br> <span>Aditya Garden City, Warje-Malwadi, Pune-400551</span> <br> <span>Mobile No. - 9876543210</span> <br> <span>Area&nbsp;-&nbsp;Atul Nagar</span> <span class="fieldLeft_spacing_xl ">Salesman&nbsp;-&nbsp;Smith Patel</span> <img ng-click="showCustomerListPopup()" class="editButton" alt="" src="images/edit.png"> </div> </div> </div> <div class="col-md-5"> <div class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">C.N.&nbsp;Type</span> </div> <div class=" col-md-9"> <input readonly type="text" class="form-control input-sm" value="Direct"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">Date</span> </div> <div class=" col-md-9"> <input type="text" class="form-control input-sm" readonly ng-model="showDirectCN.creditNoteDate"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">Status</span> </div> <div class=" col-md-9"> <select type="text" class="form-control input-sm" disabled ng-options="opt.id as opt.name for opt in statusList" ng-model="showDirectCN.creditNoteStatus"> </select> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">Created&nbsp;By</span> </div> <div class=" col-md-9"> <!-- <textarea rows="2" readonly="readonly" class="textarea_fixSize" ></textarea> --> <input type="text" class="form-control input-sm" readonly ng-model="showDirectCN.creditNoteCreatedByName"> </div> </div> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Credit Note Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-7"> <div class="row"> <div class=" col-md-2"> <span class="control-label">Reason</span> </div> <div class=" col-md-4"> <select class="input-sm form-control masterPage_grid_returnRegister input_rightSpecing" tabindex="1" ng-options="opt.id as opt.name for opt in reasonList" ng-model="showDirectCN.creditNoteReason"> </select> </div> <div class=" col-md-6"> <input type="text" class="form-control input-sm" tabindex="2" ng-modeel="showDirectCN.creditNoteReasonOther"> </div> </div> </div> <div class="col-md-5"> <div class="row"> <div class=" col-md-3"> <span class="control-label">Amount</span> </div> <div class=" col-md-9"> <input type="text" class="form-control input-sm" tabindex="3" ng-model="showDirectCN.creditNoteAmount"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-1"> <span class="control-label">Remark</span> </div> <div class=" col-md-11"> <input type="text" class="form-control input-sm CN_type_DirectRemarkPos" tabindex="4" ng-model="showDirectCN.creditNoteRemark"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-12"> <input class="checkBox" type="checkbox" ng-model="showDirectCN.creditNoteflgLock"> <span>Lock</span> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="5" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="6" ng-click="submit()">Save</button> </div> </div> </div> ',     
			templateUrl:'partials/popup/credit_note_direct_2.jsp',
			controller :'CNRDirectCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'DirectCreditNote-Model',
			resolve:{
				reasonList:function(){
					return $scope.reasonList;
				}
			}
			
		}).result.then(function(result) {


		});
	};


	$scope.showCreditNoteTypeRateDiffPopup = function(recid){
		$modal.open({
			templateUrl:'partials/popup/credit_note_rate_diff.jsp',  
			controller :'CreditNoteRateDiffCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'CN_DN_RateDiff-Model',
			resolve:{
				recid:function(){
					return recid;
				},editable:function(){
					return $scope.editable;
				}
			}

		}).result.then(function(result) {


		});
	};
	$scope.onChangeCNType=function(){
		if(typeof $rootScope.prevPageFlag !== "undefined"){//condition used when getting bakup
			return false;
		}
		$scope.maxId=0;	
		if(w2ui.grid.getSelection().length !=0){
			$scope.getCustomerCreditNote();
		}else{

		}
	};
	$scope.getCustomerCreditNote=function(){
		if(typeof $rootScope.prevPageFlag !== "undefined" || $scope.firstCall){
			return false;
		}
		var json={entity:2,entityId:$scope.showCustomerSelected.recid,listType:3,filterType:$scope.CNTypeSelected,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,listLimit:$scope.listLimit,lastID:$scope.maxId};
		json=angular.extend(json,$scope.filter);
		//HTTP CALL FOR GETTING customerlist 
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiCreditNote/getCreditNote",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				if($scope.maxId == 0){
					angular.copy(respData.creditNoteList,w2ui.grid2.records);
					w2ui.grid2.refresh();
					$scope.maxId=respData.maxId;
					ngToast.create({
						  className: 'success',
						  content: '<span>Data loaded successfully</span>',
						  timeout: 3000,
						  animation:'fade'
						});
				}else{
					if(respData.creditNoteList.length==0){
						ngToast.create({
							  className: 'warning',
							  content: '<span>No more data present</span>',
							  timeout: 3000,
							  animation:'fade'
							});
					}else{
						w2ui.grid2.records=w2ui.grid2.records.concat(respData.creditNoteList);
						w2ui.grid2.refresh();
						$scope.maxId=respData.maxId;
						ngToast.create({
							  className: 'success',
							  content: '<span>Data loaded successfully</span>',
							  timeout: 3000,
							  animation:'fade'
							});
					}
					if($scope.maxId!=respData.maxId){
						
					}
				}
				
				
				//$scope.onCompanySelection($scope.showCompanyList[0]);
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
		}).error(function(data, status, headers, config) {          
			return false;
		});
	};
	
	
	$scope.cancelFilter=function(){
		$scope.filterStatus='OFF';
		$scope.maxId=0;
		angular.copy($scope.clearFilter,$scope.filter);
		$scope.getCustomerCreditNote();
	};
	
	$scope.newCreditNoteType=function(type){
		
		w2ui.grid2.selectNone();
		if(w2ui.grid.getSelection().length >0){
			if(w2ui.grid.getSelection()[0]==-1){
				w2ui.grid.selectNone();
			}
		}
		switch(type){
		case 'Goods Return':$scope.creditNoteType=1;break;
		case 'Additional Discount':$scope.creditNoteType=4;break;
		}
		$scope.selectGrid2Action({recid:0});
		
	}
	$scope.selectGrid2Action=function(record){
		if(typeof record === "undefined"){
			return false;
		}
		var cNRegisterBackUp={};
		if(w2ui.grid.getSelection().length >0){
			if(w2ui.grid.getSelection()[0]>-1){
				cNRegisterBackUp.showCustomerSelected=$scope.showCustomerSelected;
			}
		}
		if(w2ui.grid2.getSelection().length >0){
			//wareHouse.setData('showCNPSelected',w2ui.grid2.get(w2ui.grid2.getSelection()[0]));
			cNRegisterBackUp.showCNPSelected=w2ui.grid2.get(w2ui.grid2.getSelection()[0]);
		}
		//wareHouse.setData('customerList',w2ui.grid.records);
		cNRegisterBackUp.customerList=[];
		angular.copy(w2ui.grid.records,cNRegisterBackUp.customerList);
		cNRegisterBackUp.customerList.splice(0,1);
		cNRegisterBackUp.cNList=w2ui.grid2.records;
		if(record.recid !=0){
			cNRegisterBackUp.CNTypeSelected=record.creditNoteType;
		}
		cNRegisterBackUp.maxId=$scope.maxId;
		cNRegisterBackUp.filterStatus=$scope.filterStatus;
		cNRegisterBackUp.filter=$scope.filter;
		cNRegisterBackUp.listLimit=$scope.listLimit;	
		cNRegisterBackUp.reasonList=$scope.reasonList;
		wareHouse.setData('cNRegisterBackUp',cNRegisterBackUp);//in service backup object is saved
		
		//==========
		switch($scope.creditNoteType){
			case 1:$scope.changeView(127);
			break;
			case 2:$scope.showCreditNoteTypeDirectPopup();
			break;
			case 3:$scope.showCreditNoteTypeRateDiffPopup(record.recid);
			break;
			case 4:$scope.changeView(131);break;
			default:break;
		}
		
	};
	
	$scope.changeView=function(pid){		
		$rootScope.prevPageFlag=true;
		changeView2($scope.activeUser.userId,$scope.activeUser.token,pid);
	};

}]);
