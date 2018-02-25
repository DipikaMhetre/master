pharmApp.controller('CreditNoteAdditionalDiscountCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast','wareHouse', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast,wareHouse) {
	$scope.maxId=0;	
	$scope.showCNASelected={};
	$scope.showCustomerSelected={};
	$scope.enableModifyBtn=false;
	$scope.editable=$rootScope.editable;
	$scope.deleteList=[];
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.gridfilterArray=[];
	$scope.clearfilter={fromDate:'',toDate:'',invoiceId:'',companyId:0,productId:0};
	$scope.filter={fromDate:'',toDate:'',invoiceId:'',companyId:0,productId:0};
	$scope.filterStatus='OFF';
	$scope.showSelectedFlag='OFF';
	$scope.verifiedText='';
	$scope.ledgerText='';
	var angScope=angular.element(document.getElementById('CreditNoteAdditionalDiscount')).scope();
	$scope.$watch('showCNASelected.creditNoteVerifiedFlg',function(){
		if($scope.showCNASelected.creditNoteVerifiedFlg){
			$scope.verifiedText='['+$scope.showCNASelected.creditNoteVerifiedBy+'] '+$scope.showCNASelected.creditNoteVerifiedOn;
			$scope.filter={fromDate:'',toDate:'',rrId:''};
			$scope.showSelectedFlag = 'OFF';
			$scope.changeFlag();
		}else{
			$scope.verifiedText='';
		}
		
	});
	$scope.$watch('showCNASelected.creditNoteflgLedger',function(){
		if($scope.showCNASelected.creditNoteflgLedger){
			$scope.ledgerText='['+$scope.showCNASelected.creditNoteLedgerUserName+'] '+$scope.showCNASelected.creditNoteLedgerDateTime;
		}else{
			$scope.ledgerText='';
		}
		
	});
	$scope.$watch('showCNASelected.creditNoteflgLock',function(){
		if($scope.showCNASelected.creditNoteflgLock){
			$scope.lockText='['+$scope.showCNASelected.creditNoteLockUserName+'] '+$scope.showCNASelected.creditNoteLockDateTime;
		}else{
			$scope.lockText='';
		}
		
	});
	
	$scope.init=function(){
		var config = {
				layout: {
					name: 'layout',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%'},
					         { type: 'main' }
					         ]
				},
				grid: { 

					name: 'grid',
					show: {
						toolbar : false,
						toolbarDelete: false,
						toolbarAdd : false,
						selectColumn: false
					},
					columns: [		
					          { field: 'recid', hidden:true},					          
					          { field: 'salesIsAdditionalDiscInvoice', caption: '', size: '2%',editable: { type: 'checkbox'  }},
					          { field: 'salesDate', caption: 'Invoice Date', size: '11%',style: 'text-align: left' },
							  { field: 'salesId', caption: 'Invoice#', size: '11%',style: 'text-align: right' },	
							  { field: 'salesProductCount',caption: 'Product#', size: '11%',style: 'text-align: right' },
							  { field: 'salesProductAmount',caption: 'Product Amount', size: '11%',style: 'text-align: right'},
							  { field: 'salesVAT',caption: 'VAT', size: '11%',style: 'text-align: right'},
							  { field: 'salesAmount', caption: 'Invoice Amount', size: '11%',style: 'text-align: right'},
							  { field: 'salesAdditionalDiscountPercentage', caption: 'Additional Disc%', size: '11%',style: 'text-align: right'},
							  { field: 'salesAdditionalDiscountAmount',caption: 'Additional Disc Amt', size: '11%',style: 'text-align: right'},
							  { field: 'salesNetInvoiceAmount',caption:'Net Invoice Amt', size: '11%',style: 'text-align: right'},
							  { field: 'cnadid', hidden:true},
							  { field: 'salesAdditionalDiscountAmount', hidden:true},							
							  { field: 'salesDiscountType', hidden:true},
							  { field: 'salesFreeQty', hidden:true},
							  { field: 'salesIsAdditionalDiscInvoice', hidden:true},
							  { field: 'salesIsAdditionalDiscProductDataDeleted', hidden:true},
							  { field: 'salesIsDeleted', hidden:true},					          
					          { field: 'salesProductsList', hidden:true},
					          { field: 'salesQty', hidden:true},
					          { field: 'salesVATamount', hidden:true},
         
					  ],
					  
					  records:[],
					  searches:[
					            	{field:'salesId',caption: 'Ivnoice#', type: 'text'},
					            	{field:'salesDate',caption: 'Date', type: 'text'},
					            	{field:'salesIsAdditionalDiscInvoice',caption: 'Selected', type: 'text'},
					            	{field:'returnRegisterProductRRID',caption: 'Id', type: 'int'}
					            	
					            ],
					  onDblClick:function(event){
							  event.onComplete = function () {
								  if(angScope.enableModifyBtn){
									  angScope.showModifyCreditNotePopup(event.recid);
								  }
							  }},
					  onSelect:function(event){
						  event.onComplete = function () {
							  
							  if(w2ui.grid.get(event.recid).salesIsAdditionalDiscInvoice){
								  angScope.enableModifyBtn=true;
							  }else{
								  angScope.enableModifyBtn=false;
							  }
							  angScope.$apply();
						  }},
					  onUnselect:function(event){
							  event.onComplete = function () {
								 
								  angScope.enableModifyBtn=false;
								  angScope.$apply();
							  }},
					  onChange:function(event){
						  event.onComplete = function () {
							 
							  w2ui.grid.save();
							  if(w2ui.grid.get(event.recid).salesIsAdditionalDiscInvoice){
								  
								  var index=akricksGetObjIndex(angScope.deleteList,{recid:event.recid});
								  
								  if(index == -1){
									  
								  }else{
									  angScope.deleteList.splice(index,1);
								  }
								  angScope.showModifyCreditNotePopup(event.recid);
							  }else{
								 if(akricksFilter($scope.showCNASelected.additionalDiscInvoiceList,{salesId:event.recid})[0].salesIsAdditionalDiscInvoice==w2ui.grid.get(event.recid).salesIsAdditionalDiscInvoice){
									 
								 }else{
									 var index=akricksGetObjIndex(angScope.deleteList,{recid:event.recid});
									  if(index == -1){
										  var obj={};
										  angular.copy(w2ui.grid.get(event.recid),obj);
										  //obj.creditNoteProductIsDeleted=true;
										  angScope.deleteList.push(obj);
									  }
									 
								 }
								 /* var index=akricksGetObjIndex(angular.element(document.getElementById('CreditNoteProduct')).scope().deleteList,{recid:event.recid});
								  if(index == -1){
									  var obj={};
									  angular.copy(w2ui.grid.get(event.recid),obj);
									  //obj.creditNoteProductIsDeleted=true;
									  angular.element(document.getElementById('CreditNoteProduct')).scope().deleteList.push(obj);
								  }else{
									  angular.element(document.getElementById('CreditNoteProduct')).scope().deleteList.splice(index,1);
								  }*/
								  //w2ui.grid.get(event.recid).creditNoteAmount=0;
								  w2ui.grid.refresh();
							  }	
							  angular.element(document.getElementById('CreditNoteProduct')).scope().getAllTotal(); 
							  angScope.$apply();
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

					        			  }
					        		  }
					        		  cancel = true;
					        		  if(angScope.enableModifyBtn){
					        			  angScope.showModifyCreditNotePopup(event.recid);
									  }
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

		if(!$rootScope.grid){
			loadA(config);
			//$('#grid').contents()[0].attr('id','my');


		}else{
			w2ui.grid.destroy();
			w2ui.layout.destroy();
			loadA(config);
		}
		//=====================GRID 1 ends
		//Screen loading fresh or from backup selection
		$rootScope.creditNoteRegisterRefreshNeeded=false;
		if(typeof $rootScope.prevPageFlag !== "undefined" && $rootScope.prevPageFlag){
			//Screen loading 
			var cNRegisterBackUp=wareHouse.getData('cNRegisterBackUp');
			$scope.customerList=cNRegisterBackUp.customerList;
			if(typeof cNRegisterBackUp.showCNPSelected !== "undefined"){
				$scope.showCNASelected=cNRegisterBackUp.showCNPSelected;
				$scope.retrieve($scope.showCNASelected.creditNoteID);
			}else{
				if(typeof cNRegisterBackUp.showCustomerSelected !== "undefined"){
					$scope.showCNASelected={};
					$scope.showCustomerSelected=cNRegisterBackUp.showCustomerSelected;
					$scope.showCNASelected.creditNoteCustID=$scope.showCustomerSelected.customerId;
					$scope.showCNASelected.creditNoteCustName=$scope.showCustomerSelected.customerName;
				}
				$scope.newCN();
			}
		}else{
			//Fresh call
			var json={entity:2,creditNoteId:0,listType:5,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};
			//json=angular.extend(json,$scope.filter);
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
					$scope.customerList=[];
					angular.copy(respData,$scope.customerList)
					ngToast.create({
						  className: 'success',
						  content: '<span>Customer List loaded successfully...</span>',
						  timeout: 3000,
						  animation:'fade'
						});
					w2ui.grid.refresh();
					$scope.newCN();
					//$scope.onCompanySelection($scope.showCompanyList[0]);
				}else{
					alert('Purpleaid Error Manager \n'+data.responseCode);
				}
			}).error(function(data, status, headers, config) {          
				return false;
			});
		}
		angular.element('*[ng-app]').injector().get("configurable").prevPageId=126;
		$rootScope.prevPageFlag=true;
		
	};//INIT ENDS
	$scope.showFilterPopup = function(){
		$modal.open({
			templateUrl :'partials/popup/credit_note_additionalDisc_Filter.jsp',	
			controller :'CreditNoteAdditionalDiscFilterCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'AddDiscCreditNote-Filter',
			resolve:{
				companyList:function(){
					return [];//change after getting company List
				},productList:function(){
					return [];
				}
				
			}

		}).result.then(function(result) {
			
		});
	};
	
	$scope.sortAndFilter = function(){
		//Parked element
		$scope.gridfilterArray=[];
		w2ui.grid.reset();
		/*if($scope.filter.fromDate !='' || $scope.filter.toDate !=''){
			$scope.gridfilterArray.push({ field: 'salesDate', value: [$scope.filter.fromDate, $scope.filter.toDate], operator: 'between'});
		}
		if($scope.filter.invoiceId !=''){
			$scope.gridfilterArray.push({ field: 'salesId', value:$scope.filter.invoiceId, operator: 'is'});
		}*/
		if($scope.showSelectedFlag == 'ON'){
			$scope.gridfilterArray.push({ field: 'salesIsAdditionalDiscInvoice', value:true , operator: 'is'})
		}
		w2ui.grid.search($scope.gridfilterArray);
		
	};
	
	$scope.showAddDiscViewDetailsCreditNotePopup = function(){
		$modal.open({
			template :' ',
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'AddDiscCreditNote_ViewDetails-Model'

		}).result.then(function(result) {


		});
	};
	
	$scope.showModifyCreditNotePopup = function(recid){
		//w2ui.grid.records[5].creditNoteQty=2;//hardcode;
		//w2ui.grid.records[5].creditNoteVATAmount=20;//hardcode;
		if(typeof recid === "undefined"){
			
			recid=w2ui.grid.getSelection()[0];
		}
		if(!w2ui.grid.get(recid).salesIsAdditionalDiscInvoice){
			return false;
		}
		$scope.recid=recid;
		$modal.open({
			//template :'<div ng-controller="CrNPModifyProductCtrl" ng-init="init()" class="container lightBox_CreditNote_ProductModify"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">{{opType}} PRODUCT</span> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Product and Batch Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-6"> <div class="row"> <div class=" col-md-2"> <span class="control-label">Product</span> </div> <div class=" col-md-10"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductName"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Pack</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductPack"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Batch</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductBatchNo"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Product&nbsp;Disc%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductPack"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Cash&nbsp;Disc%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductPack"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Expiry</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductExpiryDate"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">MRP</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductMRP"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">P.&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductPurchaseRate"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">S.&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductSellRate"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteVATchargedOnLabel"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Condition</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductConditionName"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Quantity</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteQty"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Free&nbsp;Qty</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteQtyFree"> </div> </div> </div> <div class="col-md-3"> <input readonly class="checkBox" ng-model="showProductSelected.creditNoteVATonFree" type="checkbox" tabindex="35"> <span class="fieldLeft_spacing">VAT&nbsp;on&nbsp;Free</span> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Sale&nbsp;History </span> </div> </div> </div> </div> <div class="row"> <div class="col-md-12"> <!--=============GRID========== --> <div id="grid2" tabindex="-1" class="CN_saleHistory_ModifyProductType_GridSize"></div> <!--=============GRID========== --> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Credit Note Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsBot_Spacing LessHighlightSection"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Use&nbsp;Rate</span> </div> <div class=" col-md-8"> <select class="input-sm form-control input_rightSpecing" tabindex="31" ng-options="opt.id as opt.name for opt in useRateList" ng-model="showProductSelected.creditNoteUseRate" ng-change="valueMath(\'main\')"> </select> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Less%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="32" ng-model="showProductSelected.creditNoteLessPercentage" ng-change="valueMath(\'percentage\')"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Less&nbsp;Amt</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="33" ng-model="showProductSelected.creditNoteLessAmt" ng-change="valueMath(\'amount\')"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Return&nbsp;Amt</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="34" ng-model="showProductSelected.creditNotereturnAmount" ng-change="valueMath(\'finalAmt\')"> </div> </div> </div> </div> <div class="row fieldsBot_Spacing LessHighlightSection"> <div class="col-md-3"> <input class="checkBox" type="checkbox" tabindex="35" ng-model="showProductSelected.creditNoteflgRefundVAT"> <span class="fieldLeft_spacing">Refund VAT</span> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteVATpercentage"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT&nbsp;Amt</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteVATAmount"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT&nbsp;Refund</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="36" ng-model="showProductSelected.creditNoteVATrefund"> </div> </div> </div> </div> <div class="row fieldsBot_Spacing"> <div class="col-md-1"> <span class="fieldLeft_spacing_md1">Remark</span> </div> <div class="col-md-11"> <input type="text" class="form-control input-sm CN_DN_Remarks" tabindex="36" ng-model="showProductSelected.creditNoteRemark"> </div> </div> <div class="row fieldsSpacing MedHighlightSection"> <div class="col-md-3"> <span class="control-label">Credit&nbsp;Note&nbsp;Summary&nbsp;:&nbsp;</span> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Amount</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly" ng-model="showProductSelected.creditNotereturnAmount"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly" ng-model="showProductSelected.creditNoteProductTotalVATamt"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Total</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly" ng-model="showProductSelected.creditNoteAmount"> </div> </div> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="37" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="38" ng-click="submit(showProductSelected)">Modify</button> </div> </div> </div> ',    
			templateUrl :'partials/popup/credit_not_additional_manageDisc.jsp',
			controller :'CreditNoteAdditionalDiscountManageCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'CreditNote_AddDisc_ViewDetails-Model ',
			resolve :{
				verifiedFlag:function(){
					return $scope.showCNASelected.creditNoteVerifiedFlg;
				},
				editable:function(){
					return $scope.editable;
				}
			}		
		}).result.then(function(result) {

			$scope.getAllTotal();
		});
	};
	
	$scope.showCustomerListPopup = function(){
		if(typeof $scope.showCNASelected.creditNoteID !== 'undefined'&& $scope.showCNASelected.creditNoteID != 0){
			ngToast.create({
				  className: 'warning',
				  content: '<span>You cannot change the customer as creditnote customer already selected ...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			
			return false;
		}
		$modal.open({
			//template :'<div id="CNRDirectCustomerListPopup" ng-controller="CNRDirectCustomerListCtrl" ng-init="init()"> <div class="container goodReceipt_productListPopup"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">CUSTOMER LIST</span> </h6> </div> <div class="row"> <!--=============GRID========== --> <div id="grid3" tabindex="-1" class="gridSizeGoodsReceipt_productList"></div> <!--=============GRID========== --> </div> <div class="row fieldsTop_Spacing fieldsBot_Spacing"> <div class=" col-md-6"> </div> <div class=" col-md-6"> <div class="row"> <div class=" col-md-5"> <button type="button" ng-click="cancel()" class="canclebtnSize">Cancel</button> </div> <div class=" col-md-5"> <button type="button" ng-click="submit()" class="okbtnSize">OK</button> </div> </div> </div> </div> </div> </div> ', 
			templateUrl:'partials/popup/credit_note_customerList_2.jsp',
			controller :'CreditNoteCustomerListPopupCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'listProduct_GoodsReceipt-Modal',
			resolve:{
				customerList:function(){
					
					return $scope.customerList;
				}
			}

		}).result.then(function(result) {
			if(typeof result !== "undefined"){
				$scope.showCustomerSelected=result;
				$scope.showCNASelected.creditNoteCustID=$scope.showCustomerSelected.customerId;
				$scope.showCNASelected.creditNoteCustName=$scope.showCustomerSelected.customerName;	
				///////
				$scope.getCustomerProducts(result.recid);
				$scope.getAllTotal();
			}

		});
	};
	
	$scope.showConsumptionPopup=function(){
		if($scope.showCNASelected.creditNoteID == 0){
			return false;
		}
		$modal.open({
			//template :'<div ng-controller="CrNPModifyProductCtrl" ng-init="init()" class="container lightBox_CreditNote_ProductModify"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">{{opType}} PRODUCT</span> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Product and Batch Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-6"> <div class="row"> <div class=" col-md-2"> <span class="control-label">Product</span> </div> <div class=" col-md-10"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductName"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Pack</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductPack"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Batch</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductBatchNo"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Product&nbsp;Disc%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductPack"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Cash&nbsp;Disc%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductPack"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Expiry</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductExpiryDate"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">MRP</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductMRP"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">P.&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductPurchaseRate"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">S.&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductSellRate"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteVATchargedOnLabel"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Condition</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductConditionName"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Quantity</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteQty"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Free&nbsp;Qty</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteQtyFree"> </div> </div> </div> <div class="col-md-3"> <input readonly class="checkBox" ng-model="showProductSelected.creditNoteVATonFree" type="checkbox" tabindex="35"> <span class="fieldLeft_spacing">VAT&nbsp;on&nbsp;Free</span> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Sale&nbsp;History </span> </div> </div> </div> </div> <div class="row"> <div class="col-md-12"> <!--=============GRID========== --> <div id="grid2" tabindex="-1" class="CN_saleHistory_ModifyProductType_GridSize"></div> <!--=============GRID========== --> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Credit Note Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsBot_Spacing LessHighlightSection"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Use&nbsp;Rate</span> </div> <div class=" col-md-8"> <select class="input-sm form-control input_rightSpecing" tabindex="31" ng-options="opt.id as opt.name for opt in useRateList" ng-model="showProductSelected.creditNoteUseRate" ng-change="valueMath(\'main\')"> </select> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Less%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="32" ng-model="showProductSelected.creditNoteLessPercentage" ng-change="valueMath(\'percentage\')"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Less&nbsp;Amt</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="33" ng-model="showProductSelected.creditNoteLessAmt" ng-change="valueMath(\'amount\')"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Return&nbsp;Amt</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="34" ng-model="showProductSelected.creditNotereturnAmount" ng-change="valueMath(\'finalAmt\')"> </div> </div> </div> </div> <div class="row fieldsBot_Spacing LessHighlightSection"> <div class="col-md-3"> <input class="checkBox" type="checkbox" tabindex="35" ng-model="showProductSelected.creditNoteflgRefundVAT"> <span class="fieldLeft_spacing">Refund VAT</span> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteVATpercentage"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT&nbsp;Amt</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteVATAmount"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT&nbsp;Refund</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="36" ng-model="showProductSelected.creditNoteVATrefund"> </div> </div> </div> </div> <div class="row fieldsBot_Spacing"> <div class="col-md-1"> <span class="fieldLeft_spacing_md1">Remark</span> </div> <div class="col-md-11"> <input type="text" class="form-control input-sm CN_DN_Remarks" tabindex="36" ng-model="showProductSelected.creditNoteRemark"> </div> </div> <div class="row fieldsSpacing MedHighlightSection"> <div class="col-md-3"> <span class="control-label">Credit&nbsp;Note&nbsp;Summary&nbsp;:&nbsp;</span> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Amount</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly" ng-model="showProductSelected.creditNotereturnAmount"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly" ng-model="showProductSelected.creditNoteProductTotalVATamt"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Total</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly" ng-model="showProductSelected.creditNoteAmount"> </div> </div> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="37" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="38" ng-click="submit(showProductSelected)">Modify</button> </div> </div> </div> ',    
			templateUrl :'partials/popup/CredNConsumption.jsp',
			controller :'ConsumptionCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'ConsumptionDetails-Model',
			resolve:{
				CreditNoteId:function(){
					return $scope.showCNASelected.creditNoteID;
				}
			}
		
				
		}).result.then(function(result) {

			
		});
		
	};
	
	
	$scope.newCN=function(){
		
		$scope.showCNASelected={creditNoteType:4,creditNoteID:0,creditNoteCustID:0,creditNoteStatus:1,creditNoteStatusDescription:'Available',creditNoteVerifiedFlg: false,creditNoteflgVoid: false,creditNoteCreatedByName:angular.element(document.getElementById('AllMainCtrl')).scope().user.userName,creditNoteCreatedOn:getCurrentDate(),creditNoteTypeDescription:'Additional Discount',additionalDiscInvoiceList:[]};
		w2ui.grid.records=[];
		w2ui.grid.refresh();
		$scope.deleteList=[];
		$scope.clearfilter={fromDate:'',toDate:'',rrId:''};
		$scope.filter={fromDate:'',toDate:'',rrId:''};
		$scope.filterStatus='OFF';
		$scope.showSelectedFlag='OFF';
		var currDate=new Date();
		$scope.showCNASelected.creditNoteCreatedByName='Rajesh Mahale'//hardcode
		$scope.showCNASelected.creditNoteDate=currDate.getDate()+'/'+(currDate.getMonth()+1)+
		'/'+currDate.getFullYear();
		$scope.showCNASelected.creditNoteCreatedOn=currDate.getDate()+'/'+(currDate.getMonth()+1)+
		'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
		
		

		
	};
	
	$scope.changeStatusFlag=function(type){
		if(type=='verified'){
			$scope.showCNASelected.creditNoteVerifiedFlg=!$scope.showCNASelected.creditNoteVerifiedFlg;
			if($scope.showCNASelected.creditNoteVerifiedFlg){
				$scope.showCNASelected.creditNoteVerifiedBy='Rajesh Mahale';//Hardcode
				$scope.showCNASelected.creditNoteVerifiedByID=$scope.activeUser.userId;
				var currDate=new Date();
				$scope.showCNASelected.creditNoteVerifiedOn=currDate.getDate()+'/'+(currDate.getMonth()+1)+
				'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
				
		
				
				//$scope.verifiedText='['+$scope.showCNASelected.creditNoteVerifiedBy+'] '+$scope.showCNASelected.creditNoteVerifiedOn;
			}
		}else if(type=='void'){
			
			if(!$scope.showCNASelected.creditNoteflgVoid){
				var r = confirm("This action will void credit note and no longer available.Are you sure?");
				if (r == true) {    
					$scope.showCNASelected.creditNoteflgVoid=!$scope.showCNASelected.creditNoteflgVoid;
				} else {
					
				}
			}else{
				$scope.showCNASelected.creditNoteflgVoid=!$scope.showCNASelected.creditNoteflgVoid;
				$scope.showCNASelected.creditNoteVoidReason=null;
			}
			
		}else if(type=='ledger'){
			$scope.showCNASelected.creditNoteflgLedger=!$scope.showCNASelected.creditNoteflgLedger;
			if($scope.showCNASelected.creditNoteflgLedger){
				$scope.showCNASelected.creditNoteLedgerUserName='Rajesh Mahale';//Hardcode				
				$scope.showCNASelected.creditNoteLedgerByID=$scope.activeUser.userId;
				var currDate=new Date();
				$scope.showCNASelected.creditNoteLedgerDateTime=currDate.getDate()+'/'+(currDate.getMonth()+1)+
				'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
				
			}else{			
				$scope.ledgerText=null;
			}
		}else if(type=='lock'){

			if($scope.showCNASelected.creditNoteflgLock){
				
				
				$scope.showCNASelected.creditNoteLockUserName='Rajesh Mahale';//Hardcode				
				$scope.showCNASelected.creditNoteLockByID=$scope.activeUser.userId;
				var currDate=new Date();
				$scope.showCNASelected.creditNoteLockDateTime=currDate.getDate()+'/'+(currDate.getMonth()+1)+
				'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
				
			}else{
				$scope.showCNASelected.creditNoteLockDateTime=null;
					$scope.showCNASelected.creditNoteLockUserName=null;
					$scope.showCNASelected.creditNoteLockByID=0;
			}
			//$scope.showCNASelected.creditNoteflgLedger=!$scope.showCNASelected.creditNoteflgLedger;
		}
	};
	
	$scope.changeFlag=function(){
		
		if($scope.showSelectedFlag == 'ON'){
			$scope.showSelectedFlag = 'OFF';
		}else{
			$scope.showSelectedFlag = 'ON'					
		}
		$scope.sortAndFilter();
	};
	
	$scope.clearRRFilters=function(){
		$scope.filterStatus='OFF';
		$scope.filter={fromDate:'',toDate:'',invoiceId:'',companyId:0,productId:0};
		$scope.sortAndFilter();
	};
	$scope.getAllTotal=function(){
		var arrayOfSelected=[];
		var vatTotal=0;
		var returnTotal=0;
		var grandTotal=0;
		arrayOfSelected=akricksFilter(w2ui.grid.records,{salesIsAdditionalDiscInvoice:true});
		for(i=0;i<arrayOfSelected.length;i++){
			returnTotal=returnTotal+purpleToDecimal(arrayOfSelected[i].salesAdditionalDiscountAmount);
			//vatTotal=vatTotal+arrayOfSelected[i].creditNoteVATrefund;
			//grandTotal=grandTotal+arrayOfSelected[i].creditNoteAmount;
		
		};
		
		
		//$scope.showCNPSelected.creditNoteProductTotalVATamt=vatTotal;
		$scope.showCNASelected.creditNoteProductTotalVATamt=0
		$scope.showCNASelected.creditNoteProductReturnAmountTotal=returnTotal;
		$scope.showCNASelected.creditNoteAmount=returnTotal;
		//w2ui.grid.refresh();
	};
	//Utility method for calcualting amount returning invoice list
	$scope.calculateAmount=function(targetList){
		var index=-1;
		var selectedElements=akricksFilter(targetList,{salesIsAdditionalDiscInvoice:true});
		for(j=0;j<selectedElements.length;j++){
			
				if(selectedElements[j].salesDiscountType == 2){
					//selectedElements[j].salesNetInvoiceAmount=0;//new
					for(i=0;i<selectedElements[j].salesProductsList.length;i++){			
						selectedElements[j].salesProductsList[i].salesProductsNetAmount=purpleToDecimal(selectedElements[j].salesProductsList[i].salesProductsAmount-selectedElements[j].salesProductsList[i].salesProductsAdditionalDiscountAmount);
						//calculation for main netamount
						selectedElements[j].salesNetInvoiceAmount=purpleToDecimal(selectedElements[j].salesNetInvoiceAmount-selectedElements[j].salesProductsList[i].salesProductsAdditionalDiscountAmount);//new
					}
				}else{
					for(i=0;i<selectedElements[j].salesProductsList.length;i++){
						selectedElements[j].salesProductsList[i].salesProductsAdditionalDiscountAmount=null;
						selectedElements[j].salesProductsList[i].salesProductsAdditionalDiscountPercentage=null;
						selectedElements[j].salesProductsList[i].salesProductsNetAmount=null;
					}
				}
				index=akricksGetObjIndex(targetList,{salesId:selectedElements[j].salesId});
				targetList[index]=selectedElements[j];
		}
		
		return targetList;
		
	};
	
	$scope.getCustomerProducts=function(customerId){
		var json={entity:2,entityId:customerId,listType:6,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};

		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiCreditNote/getCreditNote",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				angular.copy(respData,w2ui.grid.records);
				ngToast.create({
					  className: 'success',
					  content: '<span>Data loaded successfully...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				$scope.deleteList=[];
				w2ui.grid.refresh();
				//$scope.onCompanySelection($scope.showCompanyList[0]);
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
		}).error(function(data, status, headers, config) {          
			return false;
		});
		
	};
	
	$scope.retrieve=function(CreditNoteId){
		if(typeof CreditNoteId ==="undefined"){
			return false;
		}
		if(CreditNoteId.length == 0){
			return false;
		}
		var json={entity:2,creditNoteId:CreditNoteId,listType:6,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		//json=angular.extend(json,$scope.filter);
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
				$scope.showCNASelected=respData[0];
				$scope.showCNASelected.creditNoteVerifiedFlg=respData.creditNoteVerifiedFlg;
				/////////////
				
				//This is done for calculating amount
				$scope.showCNASelected.additionalDiscInvoiceList=$scope.calculateAmount($scope.showCNASelected.additionalDiscInvoiceList);
				/////////////
				
				////////////
				angular.copy($scope.showCNASelected.additionalDiscInvoiceList,w2ui.grid.records)
				ngToast.create({
					  className: 'success',
					  content: '<span>Data loaded successfully...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				$scope.deleteList=[];
				$scope.getAllTotal();     
				w2ui.grid.refresh();
				$scope.showSelectedFlag = 'OFF';
				$scope.changeFlag(); 
				
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
		}).error(function(data, status, headers, config) {          
			return false;
		});
		
		
	};
	
	$scope.save=function(creditNote){
		//Validations
		if(creditNote.creditNoteCustID == 0){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Please select customer...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			return false;
		}
		var opType='modify';
		if(typeof creditNote.creditNoteID === "undefined" || creditNote.creditNoteID == 0){
			creditNote.creditNoteID=0;
			opType='new';
			creditNote.additionalDiscInvoiceList=akricksFilter(w2ui.grid.records,{salesIsAdditionalDiscInvoice:true});
		}
		
		
		if(opType=='modify'){
			//////////////
			//$scope.backupCN={};
			//angular.copy($scope.backupCN,creditNote);
			var selectedList=akricksFilter(w2ui.grid.records,{salesIsAdditionalDiscInvoice:true});
			var changedList=[];
			for(i=0;i<selectedList.length;i++){
				var j=akricksGetObjIndex($scope.showCNASelected.additionalDiscInvoiceList,{salesId:selectedList[i].salesId,salesIsAdditionalDiscInvoice:true});
				if(j==-1){
					selectedList[i].salesIsAdditionalDiscProductDataDeleted=false;//manupulations for value false for data deleted  for new aded
					changedList.push(selectedList[i]);
				}else{
					if(!angular.equals($scope.showCNASelected.additionalDiscInvoiceList[j],selectedList[i])){
						changedList.push(selectedList[i]);
					}
				}
				
			}
			creditNote.additionalDiscInvoiceList=changedList;
			
			//////////
			creditNote.additionalDiscInvoiceList=creditNote.additionalDiscInvoiceList.concat($scope.deleteList)
		}
		for(i=0;i<creditNote.additionalDiscInvoiceList.length;i++){
			delete creditNote.additionalDiscInvoiceList[i].expanded;
		}
		var json1=JSON.stringify(creditNote);
		var json={entity:3,listType:0,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiCreditNote/setCreditNote",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				angular.copy(respData,$scope.showCNASelected);
				if(opType=='modify'){
					for(i=0;i<$scope.showCNASelected.additionalDiscInvoiceList.length;i++){
						if($scope.showCNASelected.additionalDiscInvoiceList[i].salesIsAdditionalDiscInvoice){
							var index=akricksGetObjIndex(w2ui.grid.records,{salesId:$scope.showCNASelected.additionalDiscInvoiceList[i].salesId});
							angular.copy($scope.showCNASelected.additionalDiscInvoiceList[i],w2ui.grid.records[index]);
						}
					
					}
					$scope.showCNASelected.additionalDiscInvoiceList=akricksFilter(w2ui.grid.records,{salesIsAdditionalDiscInvoice:true});
				}
				
				
				ngToast.create({
					  className: 'success',
					  content: '<span>Credit note saved successfully...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				$scope.deleteList=[];
				$scope.getAllTotal();
				w2ui.grid.refresh();
				
				$rootScope.creditNoteRegisterRefreshNeeded=true;
				//$scope.onCompanySelection($scope.showCompanyList[0]);
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
		}).error(function(data, status, headers, config) {          
			return false;
		});
		
	};
	
}]);