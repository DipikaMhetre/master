pharmApp.controller('CreditNoteProductCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast','wareHouse', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast,wareHouse) {
	$scope.maxId=0;	
	$scope.showCNPSelected={};
	$scope.showCustomerSelected={};
	$scope.enableModifyBtn=false;
	$scope.editable=$rootScope.editable;
	$scope.deleteList=[];
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.gridfilterArray=[];
	$scope.clearfilter={fromDate:'',toDate:'',rrId:''};
	$scope.filter={fromDate:'',toDate:'',rrId:''};
	$scope.filterStatus='OFF';
	$scope.showSelectedFlag='OFF';
	$scope.verifiedText='';
	$scope.ledgerText='';
	var angScope=angular.element(document.getElementById('CreditNoteProduct')).scope();
	$scope.$watch('showCNPSelected.creditNoteVerifiedFlg',function(){
		if($scope.showCNPSelected.creditNoteVerifiedFlg){
			$scope.verifiedText='['+$scope.showCNPSelected.creditNoteVerifiedBy+'] '+$scope.showCNPSelected.creditNoteVerifiedOn;
			$scope.filter={fromDate:'',toDate:'',rrId:''};
			$scope.showSelectedFlag = 'OFF';
			$scope.changeFlag();
		}else{
			$scope.verifiedText='';
		}
		
	});
	$scope.$watch('showCNPSelected.creditNoteflgLedger',function(){
		if($scope.showCNPSelected.creditNoteflgLedger){
			$scope.ledgerText='['+$scope.showCNPSelected.creditNoteLedgerUserName+'] '+$scope.showCNPSelected.creditNoteLedgerDateTime;
		}else{
			$scope.ledgerText='';
		}
		
	});
	$scope.$watch('showCNPSelected.creditNoteflgLock',function(){
		if($scope.showCNPSelected.creditNoteflgLock){
			$scope.lockText='['+$scope.showCNPSelected.creditNoteLockUserName+'] '+$scope.showCNPSelected.creditNoteLockDateTime;
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
					          
					          { field: 'creditNoteIsProductFlag', caption: '', size: '5%',editable: { type: 'checkbox'  }},
					          { field: 'creditNoteRRdate', caption: 'R.R. Date ', size: '10%',style: 'text-align: left' },
							  { field: 'returnRegisterProductRRID', caption: 'R.R.#', size: '8%',style: 'text-align: right' },	
					          { field: 'returnRegisterProductName', caption: 'Product ', size: '17%',style: 'text-align: left' }, 
					          { field: 'returnRegisterProductPack', hidden:true },		           
					          { field: 'returnRegisterProductBatchNo', caption: 'Batch#', size: '15%',style: 'text-align: left' },
					          { field: 'returnRegisterProductExpiryDate', caption: 'Expiry', size: '10%',style: 'text-align: left'},		         
					          { field: 'creditNoteQty', caption: 'Qty', size: '8%' ,style: 'text-align: right'},
					          { field: 'creditNoteQtyFree', caption: 'Free Qty', size: '8%',style: 'text-align: right' },
					          { field: 'returnRegisterProductMRP', caption: 'MRP', size: '8%' ,style: 'text-align: right'},
					          { field: 'returnRegisterProductPurchaseRate', hidden:true},
					          { field: 'returnRegisterProductSellRate', hidden:true },	
					          { field: 'creditNoteVATpercentage', caption: 'VAT%', size: '8%',style: 'text-align: right' },	
					          { field: 'creditNoteVAT', hidden:true},	
					          { field: 'returnRegisterProductCondition', hidden:true },		          
					          
					          { field: 'creditNoteVATrefund',  caption: 'C.N. VAT', size: '8%',style: 'text-align: right'},
					          { field: 'creditNoteRemark', hidden:true },
					         // creditNotereturnAmount
					          //creditNoteVATAmount
					          { field: 'creditNotereturnAmount', caption: 'Return amt', size: '8%',style: 'text-align: right' },
					          /*{ field: 'creditNoteVATAmount', caption: 'Vat amt', size: '30%' },*/
					          { field: 'creditNoteAmount', caption: 'C.N. Amount', size: '8%',style: 'text-align: right' },
					          { field: 'creditNoteProductIsDeleted', hidden:true},
					          { field: 'returnRegisterProductRRID', hidden:true},
					          { field: 'returnRegisterProductId', hidden:true},
					          
					          
					  ],
					  
					  records:[],
					  searches:[
					            	{field:'creditNoteRRdate',caption: 'GroupId', type: 'text'},
					            	{field:'returnRegisterProductId',caption: 'Id', type: 'int'},
					            	{field:'creditNoteIsProductFlag',caption: 'Id', type: 'text'},
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
							  
							  if(w2ui.grid.get(event.recid).creditNoteIsProductFlag){
								  angScope.enableModifyBtn=true;
							  }else{
								  angScope.enableModifyBtn=false;
							  }
							  angScope.$apply();
						  }},
					  onUnselect:function(event){
							  event.onComplete = function () {
								  var angScope=angular.element(document.getElementById('CreditNoteProduct')).scope();
								  angScope.enableModifyBtn=false;
								  angScope.$apply();
							  }},
					  onChange:function(event){
						  event.onComplete = function () {
							  var angScope=angular.element(document.getElementById('CreditNoteProduct')).scope();
							  w2ui.grid.save();
							  if(w2ui.grid.get(event.recid).creditNoteIsProductFlag){
								  
								  var index=akricksGetObjIndex(angScope.deleteList,{recid:event.recid});
								  
								  if(index == -1){
									  
								  }else{
									  angScope.deleteList.splice(index,1);
								  }
								  angular.element(document.getElementById('CreditNoteProduct')).scope().showModifyCreditNotePopup(event.recid);
							  }else{
								 if(akricksFilter($scope.showCNPSelected.creditNoteProductList,{returnRegisterProductId:event.recid})[0].creditNoteIsProductFlag==w2ui.grid.get(event.recid).creditNoteIsProductFlag){
									 
								 }else{
									 var index=akricksGetObjIndex(angular.element(document.getElementById('CreditNoteProduct')).scope().deleteList,{recid:event.recid});
									  if(index == -1){
										  var obj={};
										  angular.copy(w2ui.grid.get(event.recid),obj);
										  //obj.creditNoteProductIsDeleted=true;
										  angular.element(document.getElementById('CreditNoteProduct')).scope().deleteList.push(obj);
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
							  angular.element(document.getElementById('CreditNoteProduct')).scope().$apply();
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
				$scope.showCNPSelected=cNRegisterBackUp.showCNPSelected;
				$scope.retrieve($scope.showCNPSelected.creditNoteID);
			}else{
				if(typeof cNRegisterBackUp.showCustomerSelected !== "undefined"){
					$scope.showCNPSelected={};
					$scope.showCustomerSelected=cNRegisterBackUp.showCustomerSelected;
					$scope.showCNPSelected.creditNoteCustID=$scope.showCustomerSelected.customerId;
					$scope.showCNPSelected.creditNoteCustName=$scope.showCustomerSelected.customerName;
				}
				$scope.newCN();//auto new when customer selected 
			}
		}else{
			//Fresh call
			var json={entity:2,creditNoteId:$scope.showCNPSelected.recid,listType:5,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};
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
		/////////////////////////////////////
		/*var j=wareHouse.getDataIndex('showCNPSelected');
		if(j>-1){
			$scope.showCNPSelected=wareHouse.getData('showCNPSelected');
			
		}
		var k=wareHouse.getDataIndex('customerList');
		if(k>-1){
			$scope.customerList=wareHouse.getData('customerList');
			
		}else{
////////////////try===================
			var json={entity:2,creditNoteId:$scope.showCNPSelected.recid,listType:5,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};
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
					//$scope.onCompanySelection($scope.showCompanyList[0]);
				}else{
					alert('Purpleaid Error Manager \n'+data.responseCode);
				}
			}).error(function(data, status, headers, config) {          
				return false;
			});
		}
		
		var i=wareHouse.getDataIndex('showCustomerSelected');
		if(i>-1){
			$scope.showCustomerSelected=wareHouse.getData('showCustomerSelected');
			$scope.showCNPSelected.creditNoteCustID=$scope.showCustomerSelected.customerId;
			$scope.showCNPSelected.creditNoteCustName=$scope.showCustomerSelected.customerName;
			
			
		}
		
		
		if(!angular.equals($scope.showCNPSelected,{})){
			if(typeof $scope.showCNPSelected.creditNoteID ==='undefined'){
				if(!angular.equals($scope.showCustomerSelected,{})){
					$scope.getCustomerProducts($scope.showCustomerSelected.customerId);
				}
			}else{
				$scope.retrieve($scope.showCNPSelected.creditNoteID);
			}
		}*/	
		angular.element('*[ng-app]').injector().get("configurable").prevPageId=126;
		$rootScope.prevPageFlag=true;
		
		//====here back button functionality implemented
	};//INIT ENDS
	
	/*$scope.showCustomerListPopup = function(){
		if(typeof $scope.showCNPSelected.creditNoteID !== 'undefined'&& $scope.showCNPSelected.creditNoteID != 0){
			ngToast.create({
				  className: 'warning',
				  content: '<span>You cannot change the customer as creditnote customer already selected ...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			
			return false;
		}
		$modal.open({
			template :'<div id="CreditNoteCustomerListPopup" ng-controller="CreditNoteCustomerListPopupCtrl" ng-init="init()"> <div class="container goodReceipt_productListPopup"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">CUSTOMER LIST</span> </h6> </div> <div class="row"> <!--=============GRID========== --> <div id="grid2" tabindex="-1" class="gridSizeGoodsReceipt_productList"></div> <!--=============GRID========== --> </div> <div class="row fieldsTop_Spacing fieldsBot_Spacing"> <div class=" col-md-6"> </div> <div class=" col-md-6"> <div class="row"> <div class=" col-md-5"> <button type="button" ng-click="cancel()" class="canclebtnSize">Cancel</button> </div> <div class=" col-md-5"> <button type="button" ng-click="submit()" class="okbtnSize">OK</button> </div> </div> </div> </div> </div> </div> ', 	
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'Filter_Medium_Right-Model',
			
		}).result.then(function(result) {
			if(typeof result !== 'undefined'){
				angular.copy(w2ui.grid2.get(w2ui.grid2.getSelection()[0]),$scope.showCustomerSelected);	
				$scope.showCNPSelected.creditNoteCustID=$scope.showCustomerSelected.customerId;
				$scope.showCNPSelected.creditNoteCustName=$scope.showCustomerSelected.customerName;	
				///////
				$scope.getCustomerProducts(result.recid);
				$scope.getAllTotal();
			}	
		});
	};
	*/
	
	$scope.showCustomerListPopup = function(){
		if(typeof $scope.showCNPSelected.creditNoteID !== 'undefined'&& $scope.showCNPSelected.creditNoteID != 0){
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
				$scope.showCNPSelected.creditNoteCustID=$scope.showCustomerSelected.customerId;
				$scope.showCNPSelected.creditNoteCustName=$scope.showCustomerSelected.customerName;	
				///////
				$scope.getCustomerProducts(result.recid);
				$scope.getAllTotal();
			}

		});
	};
	$scope.showFilterPopup = function(){
		
		$modal.open({
			template :'<div ng-controller="CreditNoteProductFilterCtrl" ng-init="init()" class="container Filter_Medium"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">FILTER</span> </h6> </div> <div class="row fieldsSpacing fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">From&nbsp;R.R.&nbsp;Date</span> </div> <div class=" col-md-8"> <input class="form-control input-sm textCenter" type="eu-date1" ng-model="filter.fromDate"> </div> </div> <div class="row fieldsSpacing fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">To&nbsp;R.R.&nbsp;Date</span> </div> <div class=" col-md-8"> <input class="form-control input-sm textCenter" type="eu-date2" ng-model="filter.toDate"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-4"> <span class="control-label">R.R.&nbsp;ID</span> </div> <div class=" col-md-8"> <input class="form-control input-sm input_rightSpecing" ng-model="filter.rrId"> </div> </div> <div class="row fieldsTop_Spacing "> <div class=" col-md-12"> <a ng-click="clearAllFilters();" title="Remove Product" tabindex="19" class=" clearAllFilterPos">CLEAR&nbsp;ALL</a> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class=" col-md-12"> <button ng-click="cancel()" type="button" class="canclebtnSize" tabindex="20">Cancel</button> <button type="button" ng-click="submit(filter)" class="okbtnSize" tabindex="21">OK</button> </div> </div> </div> <script type="text/javascript"> var month = (new Date()).getMonth() + 1; var year = (new Date()).getFullYear(); $("input[type=eu-date]").w2field("date", { format : "dd/mm/yyyy" }); $("input[type=eu-date1]").w2field("date", { format : "dd/mm/yyyy", end : $("input[type=eu-date2]") }); $("input[type=eu-date2]").w2field("date", { format : "dd/mm/yyyy", start : $("input[type=eu-date1]") }); </script> ', 	
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'Filter_Medium_Right-Model',
			
		}).result.then(function(result) {
			
		});
	};
	
	$scope.sortAndFilter = function(){
		$scope.gridfilterArray=[];
		w2ui.grid.reset();
		if($scope.filter.fromDate !='' || $scope.filter.toDate !=''){
			$scope.gridfilterArray.push({ field: 'creditNoteRRdate', value: [$scope.filter.fromDate, $scope.filter.toDate], operator: 'between'});
		}
		if($scope.filter.rrId !=''){
			$scope.gridfilterArray.push({ field: 'returnRegisterProductRRID', value:$scope.filter.rrId, operator: 'is'});
		}
		if($scope.showSelectedFlag == 'ON'){
			$scope.gridfilterArray.push({ field: 'creditNoteIsProductFlag', value:true , operator: 'is'})
		}
		w2ui.grid.search($scope.gridfilterArray);
		
	};
	$scope.changeStatusFlag=function(type){
		if(type=='verified'){
			$scope.showCNPSelected.creditNoteVerifiedFlg=!$scope.showCNPSelected.creditNoteVerifiedFlg;
			if($scope.showCNPSelected.creditNoteVerifiedFlg){
				$scope.showCNPSelected.creditNoteVerifiedBy='Rajesh Mahale';//Hardcode
				$scope.showCNPSelected.creditNoteVerifiedByID=$scope.activeUser.userId;
				var currDate=new Date();
				$scope.showCNPSelected.creditNoteVerifiedOn=currDate.getDate()+'/'+(currDate.getMonth()+1)+
				'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
				
		
				
				//$scope.verifiedText='['+$scope.showCNPSelected.creditNoteVerifiedBy+'] '+$scope.showCNPSelected.creditNoteVerifiedOn;
			}
		}else if(type=='void'){
			
			if(!$scope.showCNPSelected.creditNoteflgVoid){
				var r = confirm("You want to delete  record from database.Are you sure?");
				if (r == true) {    
					$scope.showCNPSelected.creditNoteflgVoid=!$scope.showCNPSelected.creditNoteflgVoid;
				} else {
					
				}
			}else{
				$scope.showCNPSelected.creditNoteflgVoid=!$scope.showCNPSelected.creditNoteflgVoid;
				$scope.showCNPSelected.creditNoteVoidReason=null;
			}
			
		}else if(type=='ledger'){
			$scope.showCNPSelected.creditNoteflgLedger=!$scope.showCNPSelected.creditNoteflgLedger;
			if($scope.showCNPSelected.creditNoteflgLedger){
				$scope.showCNPSelected.creditNoteLedgerUserName='Rajesh Mahale';//Hardcode				
				$scope.showCNPSelected.creditNoteLedgerByID=$scope.activeUser.userId;
				var currDate=new Date();
				$scope.showCNPSelected.creditNoteLedgerDateTime=currDate.getDate()+'/'+(currDate.getMonth()+1)+
				'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
				
			}else{			
				$scope.ledgerText=null;
			}
		}else if(type=='lock'){

			if($scope.showCNPSelected.creditNoteflgLock){
				
				
				$scope.showCNPSelected.creditNoteLockUserName='Rajesh Mahale';//Hardcode				
				$scope.showCNPSelected.creditNoteLockByID=$scope.activeUser.userId;
				var currDate=new Date();
				$scope.showCNPSelected.creditNoteLockDateTime=currDate.getDate()+'/'+(currDate.getMonth()+1)+
				'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
				
			}else{
				$scope.showCNPSelected.creditNoteLockDateTime=null;
					$scope.showCNPSelected.creditNoteLockUserName=null;
					$scope.showCNPSelected.creditNoteLockByID=0;
			}
			//$scope.showCNPSelected.creditNoteflgLedger=!$scope.showCNPSelected.creditNoteflgLedger;
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
		$scope.filter={fromDate:'',toDate:'',rrId:''};
		$scope.sortAndFilter();
	};
	
	$scope.retrieve=function(CreditNoteId){
		if(typeof CreditNoteId ==="undefined"){
			return false;
		}
		if(CreditNoteId.length == 0){
			return false;
		}
		var json={entity:2,creditNoteId:CreditNoteId,listType:4,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};
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
				$scope.showCNPSelected=respData;
				$scope.showCNPSelected.creditNoteVerifiedFlg=respData.creditNoteVerifiedFlg;
				angular.copy($scope.showCNPSelected.creditNoteProductList,w2ui.grid.records)
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
				//$scope.onCompanySelection($scope.showCompanyList[0]);
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
		}).error(function(data, status, headers, config) {          
			return false;
		});
		
		
	}
	
	$scope.showConsumptionPopup=function(){
		if($scope.showCNPSelected.creditNoteID == 0){
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
					return $scope.showCNPSelected.creditNoteID;
				}
			}
		
				
		}).result.then(function(result) {

			
		});
		
	};
	
	$scope.showModifyCreditNotePopup = function(recid){
		//w2ui.grid.records[5].creditNoteQty=2;//hardcode;
		//w2ui.grid.records[5].creditNoteVATAmount=20;//hardcode;
		if(typeof recid === "undefined"){
			
			recid=w2ui.grid.getSelection()[0];
		}
		if(!w2ui.grid.get(recid).creditNoteIsProductFlag){
			return false;
		}
		$scope.recid=recid;
		$modal.open({
			//template :'<div ng-controller="CrNPModifyProductCtrl" ng-init="init()" class="container lightBox_CreditNote_ProductModify"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">{{opType}} PRODUCT</span> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Product and Batch Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-6"> <div class="row"> <div class=" col-md-2"> <span class="control-label">Product</span> </div> <div class=" col-md-10"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductName"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Pack</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductPack"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Batch</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductBatchNo"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Product&nbsp;Disc%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductPack"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Cash&nbsp;Disc%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductPack"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Expiry</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductExpiryDate"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">MRP</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductMRP"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">P.&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductPurchaseRate"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">S.&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductSellRate"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteVATchargedOnLabel"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Condition</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductConditionName"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Quantity</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteQty"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Free&nbsp;Qty</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteQtyFree"> </div> </div> </div> <div class="col-md-3"> <input readonly class="checkBox" ng-model="showProductSelected.creditNoteVATonFree" type="checkbox" tabindex="35"> <span class="fieldLeft_spacing">VAT&nbsp;on&nbsp;Free</span> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Sale&nbsp;History </span> </div> </div> </div> </div> <div class="row"> <div class="col-md-12"> <!--=============GRID========== --> <div id="grid2" tabindex="-1" class="CN_saleHistory_ModifyProductType_GridSize"></div> <!--=============GRID========== --> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Credit Note Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsBot_Spacing LessHighlightSection"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Use&nbsp;Rate</span> </div> <div class=" col-md-8"> <select class="input-sm form-control input_rightSpecing" tabindex="31" ng-options="opt.id as opt.name for opt in useRateList" ng-model="showProductSelected.creditNoteUseRate" ng-change="valueMath(\'main\')"> </select> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Less%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="32" ng-model="showProductSelected.creditNoteLessPercentage" ng-change="valueMath(\'percentage\')"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Less&nbsp;Amt</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="33" ng-model="showProductSelected.creditNoteLessAmt" ng-change="valueMath(\'amount\')"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Return&nbsp;Amt</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="34" ng-model="showProductSelected.creditNotereturnAmount" ng-change="valueMath(\'finalAmt\')"> </div> </div> </div> </div> <div class="row fieldsBot_Spacing LessHighlightSection"> <div class="col-md-3"> <input class="checkBox" type="checkbox" tabindex="35" ng-model="showProductSelected.creditNoteflgRefundVAT"> <span class="fieldLeft_spacing">Refund VAT</span> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteVATpercentage"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT&nbsp;Amt</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteVATAmount"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT&nbsp;Refund</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="36" ng-model="showProductSelected.creditNoteVATrefund"> </div> </div> </div> </div> <div class="row fieldsBot_Spacing"> <div class="col-md-1"> <span class="fieldLeft_spacing_md1">Remark</span> </div> <div class="col-md-11"> <input type="text" class="form-control input-sm CN_DN_Remarks" tabindex="36" ng-model="showProductSelected.creditNoteRemark"> </div> </div> <div class="row fieldsSpacing MedHighlightSection"> <div class="col-md-3"> <span class="control-label">Credit&nbsp;Note&nbsp;Summary&nbsp;:&nbsp;</span> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Amount</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly" ng-model="showProductSelected.creditNotereturnAmount"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly" ng-model="showProductSelected.creditNoteProductTotalVATamt"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Total</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly" ng-model="showProductSelected.creditNoteAmount"> </div> </div> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="37" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="38" ng-click="submit(showProductSelected)">Modify</button> </div> </div> </div> ',    
			templateUrl :'partials/popup/CreditNoteProductModifyPopup.jsp',
			controller :'CrNPModifyProductCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'ProductCreditNote_Modify-Model',
			resolve :{
				verifiedFlag:function(){
					return $scope.showCNPSelected.creditNoteVerifiedFlg;
				},editable:function(){
					return $scope.editable;
				}
			}		
		}).result.then(function(result) {

			$scope.getAllTotal();
		});
	};
	$scope.newCN=function(){
		
		$scope.showCNPSelected={creditNoteType:1,creditNoteID:0,creditNoteCustID:0,creditNoteStatus:1,creditNoteStatusDescription:'Available',creditNoteVerifiedFlg: false,creditNoteflgVoid: false,creditNoteCreatedByName:angular.element(document.getElementById('AllMainCtrl')).scope().user.userName,creditNoteCreatedOn:getCurrentDate(),creditNoteTypeDescription:'Goods Return'};
		w2ui.grid.records=[];
		w2ui.grid.refresh();
		$scope.deleteList=[];
		$scope.clearfilter={fromDate:'',toDate:'',rrId:''};
		$scope.filter={fromDate:'',toDate:'',rrId:''};
		$scope.filterStatus='OFF';
		$scope.showSelectedFlag='OFF';
		var currDate=new Date();
		$scope.showCNPSelected.creditNoteCreatedByName='Rajesh Mahale'//hardcode
		$scope.showCNPSelected.creditNoteDate=currDate.getDate()+'/'+(currDate.getMonth()+1)+
		'/'+currDate.getFullYear();
		$scope.showCNPSelected.creditNoteCreatedOn=currDate.getDate()+'/'+(currDate.getMonth()+1)+
		'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
		
		

		
	};
	
	$scope.getAllTotal=function(){
		var arrayOfSelected=[];
		var vatTotal=0;
		var returnTotal=0;
		var grandTotal=0;
		arrayOfSelected=akricksFilter(w2ui.grid.records,{creditNoteIsProductFlag:true});
		for(i=0;i<arrayOfSelected.length;i++){
			returnTotal=returnTotal+arrayOfSelected[i].creditNotereturnAmount;
			vatTotal=vatTotal+arrayOfSelected[i].creditNoteVATrefund;
			grandTotal=grandTotal+arrayOfSelected[i].creditNoteAmount;
		
		};
		/*w2ui.grid.summary[0]={ summary: true, 
	            recid: '-1',returnRegisterProductCondition:'Totals',creditNotereturnAmount:returnTotal,creditNoteVATrefund:vatTotal,creditNoteAmount:grandTotal,
	            
        };*/
		
		
		$scope.showCNPSelected.creditNoteProductTotalVATamt=vatTotal;
		$scope.showCNPSelected.creditNoteProductReturnAmountTotal=returnTotal;
		$scope.showCNPSelected.creditNoteAmount=grandTotal;
		//w2ui.grid.refresh();
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
		}
		creditNote.creditNoteProductList=akricksFilter(w2ui.grid.records,{creditNoteIsProductFlag:true});
		if(opType=='modify'){
			creditNote.creditNoteProductList=creditNote.creditNoteProductList.concat($scope.deleteList)
		}
		for(i=0;i<creditNote.creditNoteProductList.length;i++){
			delete creditNote.creditNoteProductList[i].expanded;
		}
		var json1=JSON.stringify(creditNote);
		var json={entity:2,listType:0,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		//json=angular.extend(json,$scope.filter);
		//HTTP CALL FOR GETTING customerlist 
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiCreditNote/setCreditNote",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				angular.copy(respData,$scope.showCNPSelected);
				for(i=0;i<$scope.showCNPSelected.creditNoteProductList.length;i++){
					var index=akricksGetObjIndex(w2ui.grid.records,{returnRegisterProductId:$scope.showCNPSelected.creditNoteProductList[i].returnRegisterProductId});
					angular.copy($scope.showCNPSelected.creditNoteProductList[i],w2ui.grid.records[index]);
				
				}
				////new
				angular.copy(akricksFilter(w2ui.grid.records,{creditNoteIsProductFlag:true}),$scope.showCNPSelected.creditNoteProductList);
				//////
				ngToast.create({
					  className: 'success',
					  content: '<span>Credit note saved successfully...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				$scope.deleteList=[];
				$scope.getAllTotal();
				w2ui.grid.refresh();
				$rootScope.creditNoteRegisterRefreshNeeded=true;//for register purpose
				//$scope.onCompanySelection($scope.showCompanyList[0]);
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
		}).error(function(data, status, headers, config) {          
			return false;
		});
		
	};
	
	$scope.getCustomerProducts=function(customerId){
		var json={entity:2,entityId:customerId,listType:4,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};

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
	
	
	
}]);