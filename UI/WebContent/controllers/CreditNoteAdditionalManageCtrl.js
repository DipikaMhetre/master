pharmApp.controller('CreditNoteAdditionalDiscountManageCtrl', ['$scope','$rootScope','$http','$modalInstance','$log','$timeout','ngToast','wareHouse','verifiedFlag','editable', function ($scope,$rootScope,$http, $modalInstance, $log,$timeout,ngToast,wareHouse,verifiedFlag,editable) {
	$scope.verifiedFlag=verifiedFlag;
	$scope.editable=editable;
	
	$scope.showSalesSelected={};
	$scope.salesDiscountTypeList=[{id:1,name:'Invoice'},{id:2,name:'Product'}];
	var angScope=angular.element(document.getElementById('CreditNoteAdditionalDiscountManage')).scope();
	$scope.$watch('showSalesSelected.salesDiscountType',function(){
		
		
	});
	$scope.init=function(){
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
						selectColumn: false
					},
					columns: [		
					         /* { field: 'recid', hidden:true},
					          { field: 'salesID', hidden:true},
					          
					          { field: 'saleDate', caption: 'Sale Date', size: '100%', resizable: true, sortable: true },      
					            { field: 'fname', caption: 'Invoice#', size: '100%', resizable: true, sortable: true },      
					              
					  */
					            {
									field : 'salesProductsProductName',
									caption : ' Product',
									size : '10%'
								}, {
									field : 'salesProductsCompanyName',
									caption : 'Company ',
									size : '8%'
								}, {
									field : 'salesProductsQuantity',
									caption : 'Quantity',
									size : '7%'
								}, {
									field : 'salesProductsFreeQuantity',
									caption : 'Free',
									size : '7%'
								}, {
									field : 'salesProductsPurchaseRate',
									caption : 'P.R. ',
									size : '7%'
								}, {
									field : 'salesProductsSaleRate',
									caption : 'S.R.',
									size : '7%'
								}, {
									field : 'salesProductsMRP',
									caption : 'M.R.P..',
									size : '7%'
								}, {
									field : 'salesProductsDiscount',
									caption : 'PD/CD Discount',
									size : '10%'
								}, {
									field : 'salesProductsAmount',
									caption : 'Amount',
									size : '7%'
								}, {
									field : 'salesProductsVAT',
									caption : 'VAT',
									size : '7%'
								}, {
									field : 'salesProductsAdditionalDiscountPercentage',
									caption : 'Additional Disc%',
									size : '14%',
									render : 'percent:1',
									editable : {
										type : 'percent',
										precision : 1
									}
								}, {
									field : 'salesProductsAdditionalDiscountAmount',
									caption : 'Additional Disc Amt',
									size : '15%',
									editable : {
										type : 'money'
									}
								}, {
									field : 'salesProductsNetAmount',
									caption : 'Net Amount',
									size : '7%'
								}

					            ],

					  records:[],
					  onChange:function(event){
						  event.onComplete = function () {
							  if(angular.element(document.getElementById('CreditNoteAdditionalDiscountManage')).scope().showSalesSelected.salesDiscountType == 1){
								  obj=w2ui.grid2.get(event.recid);
								  delete obj.changes;
								  return false;
							  }
							  var changed=w2ui.grid2.getChanges();
							  w2ui.grid2.save();
							  var obj=w2ui.grid2.get(event.recid);
							  //====================================
							  obj.salesProductIsChanged=true;//flag changed
							  //====================================
							  if(typeof changed[0].salesProductsAdditionalDiscountPercentage !=="undefined"){
								  obj.salesProductsAdditionalDiscountAmount=purpleToDecimal(obj.salesProductsAmount*obj.salesProductsAdditionalDiscountPercentage/100);
								  obj.salesProductsNetAmount=purpleToDecimal(obj.salesProductsAmount-obj.salesProductsAdditionalDiscountAmount);
							  }else{
								  obj.salesProductsAdditionalDiscountPercentage=purpleToDecimal(100*obj.salesProductsAdditionalDiscountAmount/obj.salesProductsAmount);
								  obj.salesProductsNetAmount=purpleToDecimal(obj.salesProductsAmount-obj.salesProductsAdditionalDiscountAmount);							  
							  }
							  
							  /*if(obj.salesProductsAdditionalDiscountAmount !=null){
								  obj.salesProductsAdditionalDiscountPercentage=100*obj.salesProductsAdditionalDiscountAmount/obj.salesProductsAmount;
								  obj.salesProductsNetAmount=obj.salesProductsAmount-obj.salesProductsAdditionalDiscountAmount;
							  }*/
							  angular.element(document.getElementById('CreditNoteAdditionalDiscountManage')).scope().getAdditionalDiscountTotal();
							 /* var index=akricksGetObjIndex(w2ui.grid2.records,{recid:event.recid});
							  angular.copy(obj,w2ui.grid2.records[index]);*/
							  w2ui.grid2.refresh();
						  }
					  }
					         /* keydown:function(event) {
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
				*/}
		}

		if(typeof w2ui.grid2 !=="undefined"){
			w2ui.grid2.destroy();
			w2ui.layout2.destroy();
		}
		
		loadContentGrid(config2);
		//=====================GRID 2 ends
		
		//angular.copy(angular.element(document.getElementById('CreditNoteProduct')).scope().recid,$scope.recid);
		$scope.recid=angular.element(document.getElementById('CreditNoteAdditionalDiscount')).scope().recid;
		$scope.customerId=angular.element(document.getElementById('CreditNoteAdditionalDiscount')).scope().showCNASelected.creditNoteCustID;
		angular.copy(w2ui.grid.get($scope.recid),$scope.showSalesSelected);
		if($scope.showSalesSelected.salesDiscountType==0){
			$scope.showSalesSelected.salesDiscountType=1;
		}
		/////////////////for calculating net amount
		/*if($scope.showSalesSelected.salesDiscountType == 2){
			for(i=0;i<$scope.showSalesSelected.salesProductsList.length;i++){			
				$scope.showSalesSelected.salesProductsList[i].salesProductsNetAmount=$scope.showSalesSelected.salesProductsList[i].salesProductsAmount-$scope.showSalesSelected.salesProductsList[i].salesProductsAdditionalDiscountAmount;
			}
		}else{
			for(i=0;i<$scope.showSalesSelected.salesProductsList.length;i++){
				$scope.showSalesSelected.salesProductsList[i].salesProductsAdditionalDiscountAmount=null;
				$scope.showSalesSelected.salesProductsList[i].salesProductsAdditionalDiscountPercentage=null;
				$scope.showSalesSelected.salesProductsList[i].salesProductsNetAmount=null;
			}
		}*/
		/////////////////=========================
		angular.copy($scope.showSalesSelected.salesProductsList,w2ui.grid2.records);
		$scope.masterObj={};
		angular.copy($scope.showSalesSelected,$scope.masterObj);
		
		
		w2ui.grid2.refresh();
	}
	$scope.submit=function(record){
		///delete list management
		var index=akricksGetObjIndex(angular.element(document.getElementById('CreditNoteAdditionalDiscount')).scope().deleteList,{recid:$scope.recid});
		  if(index == -1){
			  //none
		  }else{
			  angular.element(document.getElementById('CreditNoteAdditionalDiscount')).scope().deleteList.splice(index,1);
		  }
		
		/////////core code
		//w2ui.grid.set($scope.recid,$scope.showProductSelected,false) ;
		  var ind=akricksGetObjIndex(angular.element(document.getElementById('CreditNoteAdditionalDiscount')).scope().showCNASelected.additionalDiscInvoiceList,{recid: $scope.showSalesSelected.recid});
		  if(ind != -1){
			  var rec=angular.element(document.getElementById('CreditNoteAdditionalDiscount')).scope().showCNASelected.additionalDiscInvoiceList[ind];
			  /*if($scope.showSalesSelected.salesDiscountType != rec.salesDiscountType){
				  $scope.showSalesSelected.salesIsAdditionalDiscProductDataDeleted=true;
			  }else{
				  $scope.showSalesSelected.salesIsAdditionalDiscProductDataDeleted=false;
			  } working  but need to change as per backend requirement*/
			  if($scope.showSalesSelected.salesDiscountType == 1 && rec.salesDiscountType == 2){
				  $scope.showSalesSelected.salesIsAdditionalDiscProductDataDeleted=true;
			  }else{
				  $scope.showSalesSelected.salesIsAdditionalDiscProductDataDeleted=false;
			  }
			  
		  }
		  $scope.showSalesSelected.salesProductsList=w2ui.grid2.records;
		  var i=akricksGetObjIndex(w2ui.grid.records,{recid:$scope.recid});
		  angular.copy($scope.showSalesSelected,w2ui.grid.records[i]);
		w2ui.grid.refresh();
		//$scope.$close();
		$modalInstance.close();
		
	};
	
	$scope.cancel=function(){
		//$scope.$close();
		$modalInstance.close();
	};
	
	$scope.getAdditionalDiscountTotal=function(){
		total=0;
		for(i=0;i<w2ui.grid2.records.length;i++){
			total=total+w2ui.grid2.records[i].salesProductsAdditionalDiscountAmount;
		}
		$scope.showSalesSelected.salesAdditionalDiscountAmount=purpleToDecimal(total);
		$scope.showSalesSelected.salesNetInvoiceAmount=purpleToDecimal($scope.showSalesSelected.salesAmount-total);
		if(!$scope.$$phase){
			$scope.$apply();
		}
	};
	
	$scope.onChangeSalesDiscountType=function(){
		if($scope.showSalesSelected.salesDiscountType == 2){
			$scope.showSalesSelected.salesAdditionalDiscountPercentage=0;
			$scope.showSalesSelected.salesAdditionalDiscountAmount=0;
			//$scope.showSalesSelected.salesNetInvoiceAmount=$scope.showSalesSelected.salesAmount;
			//For getting net amount
		
		}else{
			for(i=0;i<w2ui.grid2.records.length;i++){
				w2ui.grid2.records[i].salesProductsAdditionalDiscountAmount=null;
				w2ui.grid2.records[i].salesProductsAdditionalDiscountPercentage=null;
				w2ui.grid2.records[i].salesProductsNetAmount=null;
			}
			w2ui.grid2.refresh();
		}
	}
	$scope.calculateInvoiceMath=function(type){
		if($scope.showSalesSelected.salesDiscountType == 2){
			return false;
		}
		
		if(type=='percentage'){
			$scope.showSalesSelected.salesAdditionalDiscountAmount=purpleToDecimal($scope.showSalesSelected.salesAmount*$scope.showSalesSelected.salesAdditionalDiscountPercentage/100);
			$scope.showSalesSelected.salesNetInvoiceAmount=purpleToDecimal($scope.showSalesSelected.salesAmount-$scope.showSalesSelected.salesAdditionalDiscountAmount);
		}else{
			$scope.showSalesSelected.salesAdditionalDiscountPercentage=purpleToDecimal($scope.showSalesSelected.salesAdditionalDiscountAmount*100/$scope.showSalesSelected.salesAmount);
			$scope.showSalesSelected.salesNetInvoiceAmount=purpleToDecimal($scope.showSalesSelected.salesAmount-$scope.showSalesSelected.salesAdditionalDiscountAmount);
		}
		
	}
	
}]);

	