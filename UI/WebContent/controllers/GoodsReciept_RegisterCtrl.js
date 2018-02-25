pharmApp.controller('GoodsReciept_RegisterCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast','wareHouse',function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast,wareHouse) {

	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.maxId=0;	
	$scope.ShowCompanySelected={};
	$scope.pid=44;
	$scope.listLimit=10;
	$scope.spinner=true;
	$scope.firstCall=true;
	$scope.filterStatus='OFF';
	$scope.CompanyList=[];
    $scope.SupplierList=[];
	$scope.createByNameList=[];
	$scope.TrasporterList=[];
	$scope.GrRegisterList=[];
	$scope.paymentTypeList=[{id:1,name:'Credit'},{id:2,name:'Debit'}];
	$scope.filter={companyId:0,supplierId:0,transporterId:0,fromDate:"",lRDate:0,dueDate:0,ledger:0,poItem:0,fromAmt:0,toAmt:0,grID:0,verifiedByFilterId:0,createdByFilterId:0}
	$scope.init=function(){
		$scope.spinner=false;
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
						{field : 'companyName',caption : 'Company',size : '100%'},
						{field:'recid',caption:'Recid',hidden:true}
					],
					           records:[],
					           onSelect: function(event) {
						        	event.onComplete = function () {			      		
						        		
						        		var angscope=angular.element(document.getElementById('GoodsReciept_Register')).scope();
						        			
						        		angscope.ShowCompanySelected=w2ui.grid.get(event.recid);
						        	 if(angscope.ShowCompanySelected.recid==0){
						        		 angular.copy($scope.GrRegisterList.GrProductlist,w2ui.grid2.records);
						        		 w2ui.grid2.refresh();
						        	 }	
						        	 else{
						        		 angscope.maxId=0;
						        		angscope.getFreshGrDetails(angscope.ShowCompanySelected.companyId);
						        		
						        	 }
						        		
						        	}
						        }  ,
						      
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
					columns : [ 
					            { field : 'goodsReceiptDate', caption : 'GoodreceiptDate', size : '6%'},
					            { field : 'goodsReceiptId', caption : 'Voucher#', size : '5%'},
					            { field : 'goodsReceiptBillAmount', caption : 'Amount', size : '6%'},
					            { field : 'goodsReceiptTotalItems', caption : 'Items', size : '4%'},
					            { field : 'goodsReceiptLRDate', caption : 'LRdate', size : '10%'},
					            { field : 'goodsReceiptLRDueDate', caption : 'LRDueDate', size : '10%'},
					            { field : 'goodsReceiptSupplierName', caption : 'Supplier', size : '7%'},
					            { field : 'goodReceiptTransporterName', caption : 'Transporter', size : '15%'},
					            { field : 'goodsReceiptTransporter', caption : 'Trasporter', size : '4%',hidden:true},
					            { field : 'goodsReceiptCreatedByName', caption : 'Created By Name', size : '4%'},
					            { field : 'goodsReceiptVerifiedByName', caption : 'Verfied By Name', size : '15%'},
					           
					            
					            {field:'recid',caption:'Recid',hidden:true}
					  ],
					  onDblClick:function(event) {
				        	event.onComplete = function () {
				        		//angular.copy({},angular.element(document.getElementById('CustomerMaster')).scope().custLic);
				        		var angscope=angular.element(document.getElementById('GoodsReciept_Register')).scope();
				        		angscope.goToGoodsRecieved(event.recid);
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
					        		  angular.element(document.getElementById('GoodsReciept_Register')).scope().goToGoodsRecieved(recid);
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
 
		GetClock();	
///////////////////////////////Satyajit Modified code///////////////////////////////////////
		if(wareHouse.getDataIndex('grRegisterBackUp') != -1)
			var grRegisterBackUp=wareHouse.getData('grRegisterBackUp');
		if(typeof grRegisterBackUp !== "undefined" && typeof $rootScope.grRegisterRefreshNeeded !== "undefined" && !$rootScope.grRegisterRefreshNeeded){
			
			w2ui.grid.records=grRegisterBackUp.CompanyList;
			w2ui.grid2.records=grRegisterBackUp.grList;
			w2ui.grid.refresh();
			w2ui.grid2.refresh();
			$scope.maxId=grRegisterBackUp.maxId;	
			$scope.listLimit=grRegisterBackUp.listLimit;
			$scope.filterStatus=grRegisterBackUp.filterStatus;
			$scope.CompanyList=grRegisterBackUp.CompanyList;//need companyList containing supplierList
			$scope.SupplierList=grRegisterBackUp.SupplierList;
			$scope.createByNameList=grRegisterBackUp.createByNameList;
			$scope.TrasporterList=grRegisterBackUp.TrasporterList;
			$scope.GrRegisterList=grRegisterBackUp.GrRegisterList;		
			$scope.filter=grRegisterBackUp.filter;
			if(typeof grRegisterBackUp.recid !=="undefined"){
				w2ui.grid2.select(grRegisterBackUp.recid);
			}
			if(typeof grRegisterBackUp.ShowCompanySelected !== "undefined"){
				w2ui.grid.select(grRegisterBackUp.ShowCompanySelected.recid);
			}
			delete $rootScope.grRegisterRefreshNeeded;
			wareHouse.clearAll();//cleared all warehouse object
			$scope.firstCall=false;
			ngToast.create({
				  className: 'success',
				  content: '<span>Data Loaded successfully from backup</span>',
				  timeout: 3000,
				  animation:'fade'
				});
		}else{
///////////////////////////////Satyajit Modified code ends///////////////////////////			
			var json={entity:2,listType:6,userId:$scope.activeUser.userId,token:$scope.activeUser.token,lastID:0,listLimit:$scope.listLimit,companyId:0,supplierId:0,transporterId:0,fromDate:0,lRDate:0,dueDate:0,ledger:0,poItem:0,fromAmt:0,toAmt:0,grID:0,verifiedByFilterId:0,createdByFilterId:0}

			$http({
				method: 'POST',
				url: "http://localhost:8080/Purple/rest/apiGoodsReceipt/getGoodsReceipt",
				async:false,
				data:JSON.stringify(json),
				headers: {'Content-Type': 'application/json'}
			}).success(function(data, status, headers, config) {
				if(data.responseCode == 200){

					var respData=JSON.parse(data.responseData);
					var All={companyActiveFlag:true,companyActiveSupplierId:0,companyAddressLine1:"",companyAddressLine2:"",companyCity:[],companyCode:"",companyContactPerson:"",companyDivisionsList:"",companyEmail:"",companyEmailPOFlag:true,companyFax:0,companyId:-1,companyList:[],companyMrsList:[],companyName:"All",companyOrderLimit:0,companyPaymentDays:0,companyPaymentTerms:0,companyPhone:0,companyRemarks:"",companyStockCalculationMode:0,companySuppliersList:[],edeCode:0,mthClosingStock:0,mthCurrSale:0,mthLastSale:0,openOrders:0,openOrdersAmt:0,productList:[],recid:-1,yrClosingStock:0,yrCurrSale:0,yrLastSale:0,yrLastSale:0};
					respData.companyList.unshift(All);
					
					
					angular.copy(respData.companyList,w2ui.grid.records);
					angular.copy(respData.GoodReceiptRegisterList,$scope.GrRegisterList);
					angular.copy(respData.GoodReceiptRegisterList.GrProductlist,w2ui.grid2.records);
					angular.copy(respData.companyList,$scope.CompanyList);
					angular.copy(respData.CreatedByNameList,$scope.createByNameList);
					angular.copy(respData.SupplierList,$scope.SupplierList);
					angular.copy(respData.TransporterList,$scope.TrasporterList);
					$scope.maxId=respData.GoodReceiptRegisterList.lastId;
				
					$scope.spinner=false;
					w2ui.grid.refresh();
					w2ui.grid.select(-1);
					w2ui.grid2.refresh();
					$scope.firstCall=false;


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
			ngToast.create({
				className: 'success',
				content: '<span>Data Loaded successfully...</span>',
				timeout: 3000,
				animation:'fade'
			});
		}
		if(typeof $rootScope.prevPageFlag !== 'undefined'){
			delete $rootScope.prevPageFlag;
		}
	};//INIT ENDS
	$scope.getFreshGrDetails=function(companyId){
		if($scope.firstCall){
			return false;
		}
		var json={entity:2,listType:6,userId:$scope.activeUser.userId,token:$scope.activeUser.token,lastID:$scope.maxId,listLimit:$scope.listLimit}
		$scope.filter.companyId=$scope.ShowCompanySelected.companyId;
		json=angular.extend(json,$scope.filter);
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiGoodsReceipt/getGoodsReceipt",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				 if($scope.maxId==0){
					 angular.copy(respData.GoodReceiptRegisterList.GrProductlist,w2ui.grid2.records);
				w2ui.grid2.refresh();
				$scope.maxId=respData.GoodReceiptRegisterList.lastId
				 }
				 else{
					
					 angular.copy(w2ui.grid2.records.concat(respData.GoodReceiptRegisterList.GrProductlist),w2ui.grid2.records);
					 w2ui.grid2.refresh();
						$scope.maxId = respData.GoodReceiptRegisterList.lastId;
				 }
				 
			
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
	$scope.cancelFilter = function(){
		$scope.filter=$scope.filter={fromDate:"",fromAmt:0,toAmt:0,poItem:0,companyId:0,supplierId:0,entityId:0,status:0,poflgUrgent:0,poflgVoid:0,createdByFilterId:0,purchaseOrderID:0};
		$scope.filterStatus='OFF';
		$scope.maxId=0;
		$scope.getFreshGrDetails($scope.ShowCompanySelected.companyId);
	};
	$scope.showFilterPopup = function(){
		$modal.open({
			template :'<div class="" ng-controller="GoodsRecipt_RegisterFilterCtrl" id="GoodsRecipt_RegisterFilter" ng-init=init()> <div class="container Filter_Small"> <div class="row topblueStrip "> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">FILTERS</span> <img alt="" class="close_popupImage" ng-click="cancel()" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">GR&nbsp;No</span> </div> <div class=" col-md-8"> <input class="form-control input-sm" type="text" tabindex="5" ng-model="filter.grID"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label ">Date</span> </div> <div class=" col-md-8"> <input class="form-control input-sm textCenter" type="eu-date" tabindex="5" ng-model="filter.fromDate"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Amt&nbsp;From</span> </div> <div class=" col-md-8"> <input class="form-control input-sm" type="text" tabindex="5" ng-model="filter.fromAmt"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Amt&nbsp;To</span> </div> <div class=" col-md-8"> <input class="form-control input-sm" type="text" tabindex="5" ng-model="filter.toAmt"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label ">L.R.&nbsp;Date</span> </div> <div class=" col-md-8"> <input class="form-control input-sm textCenter" type="eu-date" tabindex="5" ng-model="filter.lRDate"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label ">Due&nbsp;Date</span> </div> <div class=" col-md-8"> <input class="form-control input-sm textCenter" type="eu-date" tabindex="5" ng-model="filter.dueDate"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Items</span> </div> <div class=" col-md-8"> <input class="form-control input-sm" type="text" tabindex="5" ng-model="filter.poItem"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Ledger</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.id as opt.name for opt in LedgerList" ng-model="filter.ledger"> <option value=\'\' disabled selected style=""\'display:none;\'>Please select</option> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Company</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options=" opt.companyId as opt.companyName for opt in CompanyList" ng-model="companyselected" ng-change=OnCompanyChange()> <option value=\'\' disabled selected style=""\'display:none;\'>Please select</option> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Supplier</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.supplierId as opt.supplierName for opt in SupplierFileterList" ng-model="supplierselected" ng-click="SupplieListFilter()"> <option value=\'\' disabled selected style=""\'display:none;\'>Please select</option> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Transporter</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.transporterId as opt.transporterName for opt in TrasporterList" ng-model="filter.transporterId"> <option value=\'\' disabled selected style=""\'display:none;\'>Please select</option> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Created&nbsp;by</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.contactId as opt.contactFullName for opt in createByNameList" ng-model="filter.createdByFilterId"> <option value=\'\' disabled selected style=""\'display:none;\'>Please select</option> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Verified&nbsp;by</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.contactId as opt.contactFullName for opt in createByNameList" ng-model="filter.verifiedByFilterId"> <option value=\'\' disabled selected style=""\'display:none;\'>Please select</option> </select> </div> </div> <div class="row fieldsTop_Spacing "> <div class=" col-md-12"> <a class=" clearAllFilterPos">CLEAR&nbsp;ALL</a> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class=" col-md-12"> <button ng-click="cancel()" type="button" class="canclebtnSize" tabindex="20">Cancel</button> <button type="button" ng-click="ok(filter)" class="okbtnSize" tabindex="21">OK</button> </div> </div> </div> </div> <script type="text/javascript"> var month = (new Date()).getMonth() + 1; var year = (new Date()).getFullYear(); $("input[type=eu-date]").w2field("date", { format : "dd/mm/yyyy" }); </script> ',     
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'Filter_Small_Left-Model'
				
		}).result.then(function(result) {

		});
	};
	/*$scope.changeView=function(pid){
		if(w2ui.grid2.getSelection().length >0){
			wareHouse.setData('showGrselected',w2ui.grid2.get(w2ui.grid2.getSelection()[0]));
		}
		if(w2ui.grid2.records.length>0){
			wareHouse.setData('showdataSeleted',w2ui.grid2.records);
		}
	   
		   wareHouse.setData("GrMaxid",$scope.maxId)
	   
		changeView($scope.activeUser.userId,$scope.activeUser.token,pid);
	};*/
	
	$scope.goToGoodsRecieved=function(recid){
		var grRegisterBackUp={};
		if(w2ui.grid.getSelection().length >0){
			grRegisterBackUp.ShowCompanySelected=w2ui.grid.get(w2ui.grid.getSelection()[0]);
		}
		grRegisterBackUp.grList=w2ui.grid2.records;
		
		grRegisterBackUp.maxId=$scope.maxId;	
		grRegisterBackUp.listLimit=$scope.listLimit;
		grRegisterBackUp.filterStatus=$scope.filterStatus;
		grRegisterBackUp.CompanyList=$scope.CompanyList;//need companyList containing supplierList
		grRegisterBackUp.SupplierList=$scope.SupplierList;
		grRegisterBackUp.createByNameList=$scope.createByNameList;
		grRegisterBackUp.TrasporterList=$scope.TrasporterList;
		grRegisterBackUp.GrRegisterList=$scope.GrRegisterList;		
		grRegisterBackUp.filter=$scope.filter;
		if(typeof recid !=="undefined"){
			grRegisterBackUp.recid=recid;
		}
		$rootScope.prevPageFlag=true;
		wareHouse.setData('grRegisterBackUp',grRegisterBackUp);//Backup is set in service
		changeView2($scope.activeUser.userId,$scope.activeUser.token,44);
	}
	
}]);