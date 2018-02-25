pharmApp.controller('PO_RegisterCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast','wareHouse', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast,wareHouse) {
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.maxId=0;	
	$scope.pid=1;
	$scope.listLimit=10;
	$scope.spinner=true;
	$scope.ShowCompanySelected={};
	$scope.filterStatus='OFF';
	$scope.PurchaseregisterList=[];
	$scope.CompanyList=[];
    $scope.SupplierList=[];
    $scope.firstCall=true;
	$scope.MrList=[];
	$scope.createByNameList=[];
	$scope.filter={fromDate:"",fromAmt:0,toAmt:0,poItem:0,companyId:0,supplierId:0,entityId:0,status:0,poflgUrgent:0,poflgVoid:0,createdByFilterId:0,purchaseOrderID:0};
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
						{field : 'companyName',caption : 'Company',size : '100%',style: 'text-align: left'},
						{field:'recid',caption:'Recid',hidden:true}
					],
					           records:[],
					           onSelect: function(event) {
						        	event.onComplete = function () {			      		
						        		
						        		var angscope=angular.element(document.getElementById('PO_Register')).scope();
						        			
						        		angscope.ShowCompanySelected=w2ui.grid.get(event.recid);
						        	 if(angscope.ShowCompanySelected.recid==0){
						        		 angular.copy(angscope.PurchaseregisterList.purchaseOrderList,w2ui.grid2.records);
						        		 w2ui.grid2.refresh();
						        	 }	
						        	 else{
						        		 angscope.maxId=0;
						        		angscope.getFreshPoDetails(angscope.ShowCompanySelected.companyId);
						        		
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
		if(typeof w2ui.grid !== "undefined"){
			w2ui.grid.destroy();
			w2ui.layout.destroy();
		}
			
		loadC(config);

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
					            { field : 'cpoDate', caption : 'Date', size : '6%',style: 'text-align: left'},
					            { field : 'cpoId', caption : 'PO#', size : '5%',style: 'text-align: right'},
					            { field : 'cpoAmount', caption : 'Amount', size : '6%',style: 'text-align: right'},
					            { field : 'cpoItem', caption : 'Items', size : '4%',style: 'text-align: right'},
					            { field : 'cpoSupplierName', caption : 'Supplier', size : '10%',style: 'text-align: left'},
					            { field : 'cpoMrName', caption : 'MR', size : '10%',style: 'text-align: left'},
					            { field : 'cpoStatusDescription', caption : 'Status', size : '7%',style: 'text-align: left'},
					            { field : 'cpoUrgentDescription', caption : 'Urgent', size : '4%',style: 'text-align: left'},
					            { field : 'cpoVoidDescription', caption : 'Void', size : '4%',style: 'text-align: left'},
					            { field : 'cpoCreatedByName', caption : 'Created by', size : '15%',style: 'text-align: left'},
					            { field : 'recid',hidden:true}
					  ],
					  onDblClick:function(event) {
				        	event.onComplete = function () {
				        		//angular.copy({},angular.element(document.getElementById('CustomerMaster')).scope().custLic);
				        		var angscope=angular.element(document.getElementById('PO_Register')).scope();
				        		angscope.goToPurchase(event.recid);
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
					        		  angular.element(document.getElementById('PO_Register')).scope().goToPurchase(recid);	
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

		if(typeof w2ui.grid2 !== "undefined"){
			w2ui.grid2.destroy();
			w2ui.layout2.destroy();
		}
			
		loadContentGrid(config2);

 
		GetClock();	
		
		if(wareHouse.getDataIndex('poRegisterBackUp') != -1)
			var poRegisterBackUp=wareHouse.getData('poRegisterBackUp');
		if(typeof poRegisterBackUp !== "undefined" && typeof $rootScope.poRegisterRefreshNeeded !== "undefined" && !$rootScope.poRegisterRefreshNeeded){
			
			if(typeof poRegisterBackUp.showCompanySelected !== "undefined" ){
				w2ui.grid.select(poRegisterBackUp.showCompanySelected.recid);
			}
			w2ui.grid2.records=poRegisterBackUp.poList;
			$scope.filter=poRegisterBackUp.filter;
			$scope.filterStatus=poRegisterBackUp.filterStatus;
			w2ui.grid.records=poRegisterBackUp.companyList;
			$scope.PurchaseregisterList=poRegisterBackUp.PurchaseregisterList;
			$scope.SupplierList=poRegisterBackUp.SupplierList;
			$scope.MrList=poRegisterBackUp.MrList;
			$scope.createByNameList=poRegisterBackUp.createByNameList;
			$scope.maxId=poRegisterBackUp.maxId;
			w2ui.grid.refresh();
			w2ui.grid2.refresh();
			$scope.firstCall=false;
			if(typeof poRegisterBackUp.recid !== "undefined"){
				w2ui.grid2.select(poRegisterBackUp.recid);
			}		
			
			delete $rootScope.poRegisterRefreshNeeded;
			wareHouse.clearAll();//cleared all warehouse object
			ngToast.create({
				  className: 'success',
				  content: '<span>Data Loaded successfully from backup</span>',
				  timeout: 3000,
				  animation:'fade'
				});
		}else{
			var json={entity:2,listType:5,lastID:0,companyId:0,supplierId:0,entityId:0,listLimit:$scope.listLimit,fromDate:0,poItem:0,fromAmt:0,toAmt:0,status:0,poflgUrgent:0,poflgVoid:0,createdByFilterId:0,userId:$scope.activeUser.userId,token:$scope.activeUser.token,purchaseOrderID:0}
			
			$http({
			    method: 'POST',
			    url: "http://localhost:8080/Purple/rest/apiCompanyPurchaseOrder/getCompanyPurchaseOrder",
			    async:false,
			    data:JSON.stringify(json),
			    headers: {'Content-Type': 'application/json'}
			}).success(function(data, status, headers, config) {
				if(data.responseCode == 200){
					
					var respData=JSON.parse(data.responseData);
					var All={recid:-1,companyActiveFlag:true,companyActiveSupplierId:0,companyAddressLine1:"",companyAddressLine2:"",companyCity:[],companyCode:"",companyContactPerson:"",companyDivisionsList:"",companyEmail:"",companyEmailPOFlag:true,companyFax:0,companyId:-1,companyList:[],companyMrsList:[],companyName:"All",companyOrderLimit:0,companyPaymentDays:0,companyPaymentTerms:0,companyPhone:0,companyRemarks:"",companyStockCalculationMode:0,companySuppliersList:[],edeCode:0,mthClosingStock:0,mthCurrSale:0,mthLastSale:0,openOrders:0,openOrdersAmt:0,productList:[],yrClosingStock:0,yrCurrSale:0,yrLastSale:0,yrLastSale:0};
					respData.companyList.unshift(All);
						angular.copy(respData.companyList,w2ui.grid.records);
						
						angular.copy(respData.PurchaseOrderRegisterList,$scope.PurchaseregisterList);
						angular.copy(respData.PurchaseOrderRegisterList.purchaseOrderList,w2ui.grid2.records);
						angular.copy(respData.companyList,$scope.CompanyList)
						angular.copy(respData.supplierList,$scope.SupplierList);
						angular.copy(respData.mrList,$scope.MrList);
						angular.copy(respData.createdByNameList,$scope.createByNameList);
						$scope.maxId=respData.PurchaseOrderRegisterList.lastId;
					    $scope.spinner=false;
					   
					    w2ui.grid.refresh();
					    w2ui.grid2.refresh();
					    w2ui.grid.select(All.recid);
					    $scope.firstCall=false;
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
		}
		
		if(typeof $rootScope.prevPageFlag !== 'undefined'){
			delete $rootScope.prevPageFlag;
		}
		
		
	};//INIT ENDS
	$scope.cancelFilter = function(){
		$scope.filter={fromDate:"",fromAmt:0,toAmt:0,poItem:0,companyId:0,supplierId:0,entityId:0,status:0,poflgUrgent:0,poflgVoid:0,createdByFilterId:0};
		$scope.filterStatus='OFF';
		$scope.maxId=0;
		$scope.getFreshPoDetails($scope.ShowCompanySelected.companyId);
	};
	$scope.getFreshPoDetails=function(companyId){
		if(typeof $rootScope.prevPageFlag !== "undefined" || $scope.firstCall){//condition used when getting bakup
			return false;
		}
		var json={entity:2,listType:5,lastID:$scope.maxId,listLimit:$scope.listLimit,poflgUrgent:0,userId:$scope.activeUser.userId,token:$scope.activeUser.token}
		//var json={entity:2,listType:5,lastID:$scope.maxId,listLimit:6,poflgUrgent:0,userId:$scope.activeUser.userId,token:$scope.activeUser.token}
		//HTTP CALL FOR GETTING CompanyList enclosed division 
		 if($scope.ShowCompanySelected.companyId==undefined){
			 json.companyId=0;
		 }
		 else{
		$scope.filter.companyId=$scope.ShowCompanySelected.companyId;
		 }
		json=angular.extend(json,$scope.filter);
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiCompanyPurchaseOrder/getCompanyPurchaseOrder",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				 if($scope.maxId==0){
					 angular.copy(respData.PurchaseOrderRegisterList.purchaseOrderList,w2ui.grid2.records);
					 w2ui.grid2.refresh();
					 $scope.maxId=respData.PurchaseOrderRegisterList.lastId
				 }
				 else{
					 if(respData.PurchaseOrderRegisterList.purchaseOrderList.length==0){
						 ngToast.create({
							  className: 'warning',
							  content: '<span>No more data present than this</span>',
							  timeout: 3000,
							  animation:'fade',
							  maxNumber:2
							});
					 }else{
						angular.copy(w2ui.grid2.records.concat(respData.PurchaseOrderRegisterList.purchaseOrderList),w2ui.grid2.records);
						w2ui.grid2.refresh();
						$scope.maxId = respData.PurchaseOrderRegisterList.lastId;
						ngToast.create({
							  className: 'success',
							  content: '<span>Data Updated successfully...</span>',
							  timeout: 3000,
							  animation:'fade',
							  maxNumber:2
							});
					 }
					 
				 }
				 
			
				
				$scope.spinner=false;
				$scope.firstCall=false;
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
			template :'<div class="" ng-controller="PO_RegisterFilterCtrl" id="PO_Registerfilter" ng-init=init()> <div class="container Filter_Small"> <div class="row topblueStrip "> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">FILTERS</span> <img alt="" ng-click="cancel()" class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Po&nbsp;Number</span> </div> <div class=" col-md-8"> <input class="form-control input-sm" type="text" tabindex="5" ng-model="filter.purchaseOrderID"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Company</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options=" opt.companyId as opt.companyName for opt in CompanyList" ng-model="companyselected" ng-change=OnCompanyChange()> <option value=\'\' disabled selected style=""\'display:none;\'>Please select</option> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Supplier</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.supplierId as opt.supplierName for opt in SupplierFileterList" ng-model="supplierselected" ng-click="SupplieListFilter()"> <option value=\'\' disabled selected style=""\'display:none;\'>Please select</option> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">MR</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.mrId as opt.mrName for opt in MrFileterList" ng-click="MrListFilter()" ng-model="Mrselected"> <option value=\'\' disabled selected style=""\'display:none;\'>Please select</option> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label ">From&nbsp;Date</span> </div> <div class=" col-md-8"> <input class="form-control input-sm textCenter" type="eu-date1" ng-model="filter.fromDate" tabindex="5"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label ">To&nbsp;Date</span> </div> <div class=" col-md-8"> <input class="form-control input-sm textCenter" type="eu-date2" ng-model="filter.toDate" tabindex="5"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Amt&nbsp;From</span> </div> <div class=" col-md-8"> <input class="form-control input-sm" type="text" tabindex="5" ng-model="filter.fromAmt"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Amt&nbsp;To</span> </div> <div class=" col-md-8"> <input class="form-control input-sm" type="text" ng-model="filter.toAmt" tabindex="5"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Items</span> </div> <div class=" col-md-8"> <input class="form-control input-sm" type="text" ng-model="filter.poItem" tabindex="5"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Status</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.id as opt.name for opt in StatusList" ng-model="filter.status"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Urgent</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.id as opt.name for opt in UrgentTypeList" ng-model="filter.poflgUrgent"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Void</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.id as opt.name for opt in VoidList" ng-model="filter.poflgVoid"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Created&nbsp;by</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.contactId as opt.contactFullName for opt in createByNameList" ng-model="filter.contactId"> </select> </div> </div> <div class="row fieldsTop_Spacing "> <div class=" col-md-12"> <a class=" clearAllFilterPos" ng-click="clearAllFilters();">CLEAR&nbsp;ALL</a> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class=" col-md-12"> <button ng-click="cancel()" type="button" class="canclebtnSize" tabindex="20">Cancel</button> <button type="button" ng-click="ok(filter)" class="okbtnSize" tabindex="21">OK</button> </div> </div> </div> </div> <script type="text/javascript"> var month = (new Date()).getMonth() + 1; var year = (new Date()).getFullYear(); $(\'input[type=eu-date]\').w2field(\'date\', { format: \'d/m/yyyy\' }); $(\'input[type=eu-date1]\').w2field(\'date\', { format: \'d/m/yyyy\', end: $(\'input[type=eu-date2]\') }); $(\'input[type=eu-date2]\').w2field(\'date\', { format: \'d/m/yyyy\', start: $(\'input[type=eu-date1]\') }); </script> ',                                   
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'Filter_Small_Left-Model'
				
		}).result.then(function(result) {

		});
	};
	
	
	
	$scope.goToPurchase=function(recid){
		var poRegisterBackUp={};
		if(w2ui.grid.getSelection().length >0){
			poRegisterBackUp.showCompanySelected=w2ui.grid.get(w2ui.grid.getSelection()[0]);
		}
		poRegisterBackUp.poList=w2ui.grid2.records;
		poRegisterBackUp.filter=$scope.filter;
		poRegisterBackUp.filterStatus=$scope.filterStatus;
		poRegisterBackUp.companyList=w2ui.grid.records;
		poRegisterBackUp.PurchaseregisterList=$scope.PurchaseregisterList;
		poRegisterBackUp.SupplierList=$scope.SupplierList;
		poRegisterBackUp.MrList=$scope.MrList;
		poRegisterBackUp.createByNameList=$scope.createByNameList;
		poRegisterBackUp.maxId=$scope.maxId;
		if(typeof recid !== "undefined"){
			poRegisterBackUp.recid=recid;
		}		
		wareHouse.setData('poRegisterBackUp',poRegisterBackUp);//in service backup object is saved
		$rootScope.prevPageFlag=true;
		changeView2($scope.activeUser.userId,$scope.activeUser.token,1);
	};
	 
}]);