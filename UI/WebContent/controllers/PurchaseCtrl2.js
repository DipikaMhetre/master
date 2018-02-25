pharmApp.controller('PurchaseCtrl2', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast','wareHouse', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast,wareHouse) {

	$rootScope.topManu=[{name:'Full Screen'},{name:'Shortcut'},{name:'Calculator'},{name:'Logout'}];
	$scope.masterProductlist=[{}];
	$scope.orderDetails={id:'',date:"",amount:0,remark:"",noOfItems:0,noOfTasks:0};
	$scope.companyList=[];
	$scope.selectedRecid=0;
	$scope.record={};
	$scope.selectedRecord={};
	$scope.showPOSelected={};
	$scope.showPOSelected.cpoCompanyId=0;
	$scope.gridRecordsEdited=[];
	$scope.currGridRecordsAll=[];
	$scope.showSelectedFlag='OFF';
	$scope.showPrevNextBtn=false;//Flag for prev next buttons
	$scope.statusList=[{id:1,name:'New'},{id:2,name:'Raised'}];
	$scope.spinner=true;
	$scope.popup=false;
	/*$scope.showSaveBtn=false;*/
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");

	//====================================
	$scope.showPOSelected={};

	/*===========================Generic==================================*/
	//Generic Render Method

	
	$scope.$watch('showPOSelected.cpoVoidFlag',function(){
		if(!$scope.showPOSelected.goodsReceiptVerifiedFlag){
			$scope.showPOSelected.cpoVoidText='';
			
		}
		
	});

	$scope.init=function(){
		$scope.selectedRecid=0;
		$scope.spinner=true;
		/*============================================================*/
		$scope.orderFlags={email:false,stopOpen:false,scheme:false,urgent:false,voiD:false};
		var config = {
				layout: {
					name: 'layout',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%' },
					         { type: 'main', minSize: 300 }
					         ]
				},
				grid: { 

					name: 'grid',
					show: {
						toolbar : false,
						toolbarDelete: false,
						toolbarAdd : false,
						footer:true
					},
					columns: [
					          { field: 'productId', caption: 'ProductId', size: '6%', style: 'text-align: right'},     
					          { field: 'recid', caption: 'Recid', size: '0%' ,hidden:true },
					          { field: 'type', caption: 'Type', size: '5%' },
					          { field: 'division', caption: 'Division', size: '6%' },
					          { field: 'productName', caption: 'Product Name', size: '10%',style: 'text-align: left'},
					          { field: 'pack', caption: 'Pack', size: '5%', style: 'text-align: right' },
					          { field: 'box', caption: 'Box', size: '5%' , style: 'text-align: right'},
					          { field: 'lastSale', caption: 'Last Sale', size: '10%' , style: 'text-align: right'},
					          { field: 'currSale', caption: 'Curr Sale', size: '10%' , style: 'text-align: right'},
					          { field: 'stock', caption: 'Stock', size: '10%' , style: 'text-align: right'},
					          { field: 'transit', caption: 'Transit', size: '10%' , style: 'text-align: right'},
					          { field: 'lastPurRate', caption: 'Last P.Rate', size: '10%' , style: 'text-align: right'},
					          { field: 'mrp', caption: 'MRP', size: '10%' , style: 'text-align: right'},
					          { field: 'qty', caption: 'Qty', size: '5%' , style: 'text-align: right'},
					          { field: 'scheme', caption: 'Free', size: '5%' , style: 'text-align: right'},		            
					          { field: 'value', caption: 'Value', size: '10%' , style: 'text-align: right'}

					          ],
		          searches:  [
				              { field: 'value', caption: 'value', type: 'int',operator:'between' },
				             ],
					          records:[],
				  onSelect: function(event) {
					  event.onComplete = function () {
						  angular.element(document.getElementById('purch')).scope().selectedRecid=(event.recid);
						  angular.element(document.getElementById('purch')).scope().selectedRecord=w2ui.grid.get(event.recid);
						  if(!angular.element(document.getElementById('purch')).scope().$$phase){
							  angular.element(document.getElementById('purch')).scope().$apply();
						  }
					  }
				  },
				  onUnselect: function(event) {
					  event.onComplete = function () {
						  angular.element(document.getElementById('purch')).scope().selectedRecid=0;
						  angular.element(document.getElementById('purch')).scope().selectedRecord={};
						  if(!angular.element(document.getElementById('purch')).scope().$$phase){
							  angular.element(document.getElementById('purch')).scope().$apply();
						  }
					  }
				  },
		          onDblClick: function(event) {
						event.onComplete = function () {
							angular.element(document.getElementById('purch')).scope().showPopup(w2ui.grid.get(event.recid));
							if(!angular.element(document.getElementById('purch')).scope().$$phase){
								  angular.element(document.getElementById('purch')).scope().$apply();
							  }
						}
					} ,	          
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
					        		  if(angular.element(document.getElementById('purch')).scope().popup){
					        			  angular.element(document.getElementById('purch')).scope().popup=false;
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
					        				  if(!angular.element(document.getElementById('purch')).scope().popup){
					        					  /*angular.element(document.getElementById('purch')).scope().popup=true;
					        					  openMyAngularPopup(grid);*/	
					        				  }else{

					        					 /* var elem = document.getElementById("okButton");
					        					  if (typeof elem.onclick == "function") {
					        						  elem.onclick.apply(elem);
					        					  }*/
					        					  //angular.element(document.getElementById('myModalContent.html')).scope().ok();
					        					  //angular.element(document.getElementById('myModalContent.html')).scope().hi();
					        				  }
					        				  
					        				  angular.element(document.getElementById('purch')).scope().showPopup(w2ui.grid.get(recid))
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
		/*===================Grid loaded=========================================*/
		if(!$rootScope.grid){
			load(config);
		}else{
			w2ui.grid.destroy();
			w2ui.layout.destroy();
			load(config);
		}
		GetClock();
		$rootScope.poRegisterRefreshNeeded=false;
		if(typeof $rootScope.prevPageFlag !== "undefined" && $rootScope.prevPageFlag){
			//page opens using backup
			var poRegisterBackUp=wareHouse.getData('poRegisterBackUp');
			
			
			$scope.companyList=poRegisterBackUp.companyList;
			$scope.supplierList=poRegisterBackUp.SupplierList;
			$scope.mrList=poRegisterBackUp.MrList;
			if(typeof poRegisterBackUp.recid !=="undefined"){
				$scope.poList=poRegisterBackUp.poList;
				$scope.maxId=poRegisterBackUp.maxId;
				$scope.retrievePO(poRegisterBackUp.recid);
				$scope.poIndex=akricksGetObjIndex($scope.poList,{recid:poRegisterBackUp.recid});
				$scope.showPrevNextBtn=true;
			}else{
				$scope.newPO();
			}
			
			
		}else{
			//fresh page opens
			var json={entity:2,entityId:0,listType:1,companyId:0,supplierId:0,divisionId:0,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};
			$http({
				method: 'POST',
				url: "http://localhost:8080/Purple/rest/apiCompanyPurchaseOrder/getCompanyPurchaseOrder",
				async:false,
				data:JSON.stringify(json),
				headers: {'Content-Type': 'application/json'}
			}).success(function(data, status, headers, config) {
				if(data.responseCode == 200){
					data=JSON.parse(data.responseData);
					$scope.companyList=data.companyList;
					$scope.supplierList=data.supplierList;
					$scope.mrList=data.mrList;
					$scope.newPO();
					
				}else{
					alert('Purpleaid Error Manager \n'+data.responseCode);
				}
			}).error(function(data, status, headers, config) {
		
				return false;
			});
		}
		$timeout(function(){
			$scope.spinner=false;
		}, 2000);
		/*angular.element('*[ng-app]').injector().get("configurable").prevPageId=124;
		$rootScope.prevPageFlag=true;*/
	};

	
	$scope.retOrd=function(orderId){
		$scope.spinner=true;
		
		if($scope.activeCpoId == $scope.orderDetails.id || $scope.orderDetails.id=='New#PO' ){
			alert('Purpleaid: No data to retrieve as no change in po#');
			$scope.spinner=false;
			return false;
		}
		var json={entity:1,entityId:$scope.showPOSelected.cpoId,listType:0,companyId:0,supplierId:0,divisionId:0,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token
		};
		var responsePromise = $http.post("http://localhost:8080/Purple/rest/apiCompanyPurchaseOrder/getCompanyPurchaseOrder",json);

		responsePromise.success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				$scope.clearAll();
				var OrderObj=JSON.parse(data.responseData)
				$scope.renderPurchasePage(0,0,0,OrderObj.cpoId,OrderObj.cpoDate,OrderObj.cpoAmount,OrderObj.cpoRemark,OrderObj.cpoEmailFlag,OrderObj.cpoCancelPendingFlag,OrderObj.cpoSchemeFlag,OrderObj.cpoUrgentFlag,OrderObj.cpoVoidFlag,OrderObj.cpoProductList);
				if(OrderObj.cpoVoidFlag){
					$scope.orderVoidText=OrderObj.cpoVoidText;
				}

				$scope.selectCompany(OrderObj.cpoCompanyId);
				$scope.selectSupplier(OrderObj.cpoSupplierId);
				$scope.selectMr(OrderObj.cpoMrId);

			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
				$scope.orderDetails.id='New#PO';
			}    
			$scope.spinner=false;
		});
		responsePromise.error(function(data, status, headers, config) {
			alert("AJAX failed!");
		});
	}
	
	$scope.retrievePO=function(cpoId){
		if(cpoId=='New#PO'){
			return false;
		}
		var json={entity:1,entityId:cpoId,listType:0,companyId:0,supplierId:0,divisionId:0,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiCompanyPurchaseOrder/getCompanyPurchaseOrder",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				$scope.showPOSelected=respData;
				angular.copy($scope.showPOSelected.cpoProductList,w2ui.grid.records);
				w2ui.grid.refresh();
				$scope.showSelectedFlag='OFF';
				$scope.toggleEdited();
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
		}).error(function(data, status, headers, config) {          
			return false;
		}); 
	};
	
	$scope.getProducts=function(CID,SID){
		$scope.spinner=true;
		var reqJSON={entity:2,entityId:0,listType:4,companyId:CID,supplierId:SID,divisionId:0,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
			method: 'POST',
			// url: "http://localhost:8080/Purple/rest/apiCompany/apiGetProductList",
			url: "http://localhost:8080/Purple/rest/apiCompanyPurchaseOrder/getCompanyPurchaseOrder",
			async:false,
			data:JSON.stringify(reqJSON),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				debugger;
				data=JSON.parse(data.responseData);				
				w2ui.grid.records=[];
				for(i=0;i<data.length;i++){
					w2ui.grid.records.push({productId:data[i].productId,recid:data[i].productId,type:data[i].type,division:data[i].division,productName:data[i].productName,pack:data[i].pack,box:data[i].box,lastSale:data[i].lastSale,currSale:data[i].currSale,stock:data[i].stock,transit:data[i].transit,lastPurRate:data[i].lastPurRate,mrp:data[i].mrp,qty:data[i].qty,scheme:data[i].scheme,value:data[i].value});
				}
				w2ui.grid.refresh();
				$scope.spinner=false;
				ngToast.create({
					  className: 'success',
					  content: '<span>Data loaded successfully...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
		}).error(function(data, status, headers, config) {
			$scope.spinner=false;
			return false;
		});
		

	};
	
	$scope.savePO=function(poSelected){
		$scope.spinner=true;
		var optype='modify';
		poSelected.cpoProductList
		if(poSelected.cpoCompanyId==0){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Please select company first...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			$scope.spinner=false;
			return false;
		}
		if(poSelected.cpoId == 'New#PO'){
			poSelected.cpoId=0;
			optype='new';
		}
		poSelected.cpoProductList=[];
		w2ui.grid.reset();
		angular.forEach(w2ui.grid.records, function(value,key){
			if(value.qty != 0 ){
				poSelected.cpoProductList.push(value);
			}else{				  

			}				  
		});
		json=JSON.stringify(poSelected);
		var json2={entity:1,entityId:0,listType:0,companyId:0,supplierId:0,divisionId:0,requestData:json,userId:$scope.activeUser.userId,token:$scope.activeUser.token};

		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiCompanyPurchaseOrder/setCompanyPurchaseOrder",
			async:false,
			data:JSON.stringify(json2),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				debugger;
				data=JSON.parse(data.responseData);	
				$scope.showPOSelected=data;				
				w2ui.grid.refresh();
				$scope.spinner=false;
				ngToast.create({
					className: 'success',
					content: '<span>Purchase order saved successfully!</span>',
					timeout: 3000,
					animation:'fade'
				});
				$rootScope.poRegisterRefreshNeeded=true;
				$scope.showSelectedFlag='OFF';
				$scope.toggleEdited();
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
				$scope.spinner=false;
			}
		}).error(function(data, status, headers, config) {
			$scope.spinner=false;
			return false;
		});
		

	}

	$scope.psplCompanyOrder=function(PID){
		if(typeof $scope.companySelected !== "object"){
			ngToast.create({
				className: 'warning',
				content: '<span>Please select company first...</span>',
				timeout: 3000,
				animation:'fade'
			});
			return false;
		}
		$scope.spinner=true;
		var orderId='';
		debugger;
		/*if($scope.activeCpoId != $scope.orderDetails.id){
			alert('Purpleaid: Save is Disabled as you have changed the po#');
			$scope.spinner=false;
			return false;
		}*/
		$scope.gridRecordsEdited=[];
		angular.forEach($scope.currGridRecordsAll, function(value,key){
			if(value.qty != 0 ){
				$scope.gridRecordsEdited.push(value);
			}else{				  

			}				  
		});

		var orderVoidText='';

		if($scope.orderFlags.voiD){
			orderVoidText=$scope.orderVoidText
		}

		if($scope.orderDetails.id == 'New#PO'){
			orderId = 0;	
		}else{
			orderId = $scope.orderDetails.id;
		}

		var json={
				cpoId:orderId,
				cpoCompanyId:$scope.companySelected.companyId,
				cpoCompanyName:$scope.companySelected.companyName,
				cpoSupplierName:$scope.supplierSelected.supplierName,
				cpoSupplierId:$scope.supplierSelected.supplierId,
				cpoMrName:$scope.mrSelected.mrName,
				cpoMrId:$scope.mrSelected.mrId,

				cpoDate:$scope.orderDetails.date,
				cpoAmount:$scope.orderDetails.amount,
				cpoRemark:$scope.orderDetails.remark,		
				cpoEmailFlag:$scope.orderFlags.email,
				cpoStopOpenFlag:$scope.orderFlags.stopOpen,
				cpoCancelPendingFlag:$scope.orderFlags.stopOpen,//Temp (adjstmnt)Modification of StopOpen and CancelPending 
				cpoSchemeFlag:$scope.orderFlags.scheme,
				cpoUrgentFlag:$scope.orderFlags.urgent,
				cpoVoidFlag:$scope.orderFlags.voiD,
				cpoVoidText:orderVoidText,
				cpoProductList:$scope.gridRecordsEdited			
		};

		debugger;
		json=JSON.stringify(json);
		var json2={entity:1,entityId:0,listType:0,companyId:0,supplierId:0,divisionId:0,requestData:json,userId:$scope.activeUser.userId,token:$scope.activeUser.token};

		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiCompanyPurchaseOrder/setCompanyPurchaseOrder",
			async:false,
			data:JSON.stringify(json2),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				data=JSON.parse(data.responseData);
				$scope.orderDetails.id=data;
				$scope.activeCpoId=data;
				$scope.spinner=false;
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
		}).error(function(data, status, headers, config) {
			$scope.spinner=false;
			return false;
		});


	};
	/*===========================Generic Ends==================================*/
	/*===========================Utility Methods===============================*/
	$scope.changeFlag=function(type){
		if(type=='email'){
			$scope.showPOSelected.cpoEmailFlag =! $scope.showPOSelected.cpoEmailFlag;
		}else if( type == 'cpoCancelPendingFlag'){//renamed stop open
			$scope.showPOSelected.cpoCancelPendingFlag =! $scope.showPOSelected.cpoCancelPendingFlag;
		}else if( type == 'scheme'){
			$scope.showPOSelected.cpoSchemeFlag =! $scope.showPOSelected.cpoSchemeFlag;
		}else if( type == 'urgent'){
			$scope.showPOSelected.cpoUrgentFlag =! $scope.showPOSelected.cpoUrgentFlag;
		}else if( type == 'void'){
			var r = confirm("This action will deactivate your Purchase Order.Do you wish to proceed?");
			if (r == true) {    
				$scope.showPOSelected.cpoVoidFlag =! $scope.showPOSelected.cpoVoidFlag;
			} else {

			}

		}
	};

	
	/*============================Utility Ends================================*/
	$scope.showPopup = function(record) {
		if(typeof record==="undefined" || record ==  null){
			return false;
		}
		w2ui.grid.selectNone();
		$scope.record=record;
		$modal.open({
			templateUrl : 'partials/popup/poProductModify.jsp',
			controller : PopupCtrl,
			/*backdrop: false,*/
			backdrop: 'static',
			windowClass: 'large-Modal',
			resolve : {
				record : function() {
					return $scope.record;
				},
				editable : function() {
					return $scope.editable;
				}
			}
		}).result.then(function(result) {
		});
	};

	//For new Purchase Order
	$scope.newPO=function(){
		$scope.showPOSelected={
				cpoCompanyId:0,
				cpoSupplierId:0,
				cpoId:'New#PO',
				cpoDate:getCurrentDate(),
				cpoAmount:0,
				cpoRemark:'',
				cpoEmailFlag:false,
				cpoStopOpenFlag:false,
				cpoSchemeFlag:false,
				cpoUrgentFlag:false,
				cpoVoidFlag:false,
				cpoStatus:1
		
		};
		w2ui.grid.records=[];
		w2ui.grid.refresh();
	};
	$scope.cancelAllFilters=function(){
		w2ui.grid.reset();
		$scope.showSelectedFlag='OFF';
		if(w2ui.grid.records.length == 0){
			ngToast.create({
				  className: 'warning',
				  content: '<span>No Products to add.Please select company and suppliers when you are creating new purchase order</span>',
				  timeout: 3000,
				  horizontalPosition:'left',
				  animation:'fade'
				});
		}else{
			/*ngToast.create({
				  className: 'success',
				  content: '<span>To add a product quantity </span>',
				  timeout: 3000,
				  animation:'fade'
				});*/
		}
	};
	
	$scope.toggleEdited = function(){

		if($scope.showSelectedFlag=='ON'){			
			w2ui.grid.reset();
			$scope.showSelectedFlag='OFF';
		}else{
			w2ui.grid.search([{ field: 'value', value: [1, 999999999], operator: 'between'}]);
			$scope.showSelectedFlag='ON';
		}		
	};
	
	$scope.prevNext = function(type){
		var poLength=$scope.poList.length;
		if(type=='next'){
			if($scope.poIndex+1==poLength){
				return false;
			}else{
				$scope.poIndex++;
				$scope.retrievePO($scope.poList[$scope.poIndex].cpoId);
			}
		}else{
			if($scope.poIndex==0){
				return false;
			}else{
				$scope.poIndex--;
				$scope.retrievePO($scope.poList[$scope.poIndex].cpoId);
			}
		}
	}


}]);

//Modal Controller
var PopupCtrl = function($scope, $modalInstance, $http, record,editable) {
	$scope.level="PopupCtrl";
	$scope.editable=editable;
	$scope.possibleTimes= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
	$scope.init=function(){
		angular.element(document.getElementById('purch')).scope().popup=true;
	}
	$scope.$watch('record.qty',function() {
		$scope.record.value=$scope.record.mrp*$scope.record.qty;
		$("#quantitypopup").css("background-color", "white");

	});

	$scope.record = record;

	$scope.ok = function(editedRec) {		
		var a=Purchasepopupvaliation();
		if(a==false){
			return false;
		}
		editedRec.qty=document.getElementById('quantitypopup').value;
		editedRec.scheme=document.getElementById('schemepopup').value;
		editedRec.value=document.getElementById('valuepopup').value;
		editedRec.value=editedRec.qty*editedRec.mrp;
		w2ui.grid.set(editedRec.recid,editedRec,false);
		var total=0;
		for(i=0;i<w2ui.grid.records.length;i++){
			total=total+w2ui.grid.records[i].value;
		}
		angular.element(document.getElementById('purch')).scope().showPOSelected.cpoAmount=total;
		w2ui.grid.refresh();
		/*if(angular.element(document.getElementById('purch')).scope().showSelectedFlag=='OFF'){
			angular.element(document.getElementById('purch')).scope().currGridRecordsAll = w2ui.grid.records;
		}else{

		}*/
		angular.element(document.getElementById('purch')).scope().popup=false;
		$modalInstance.close();	


	};
	

	$scope.cancel = function() {
		angular.element(document.getElementById('purch')).scope().popup=false;
		$modalInstance.dismiss('cancel');
	};


};

//Filer for Company Supplier
pharmApp.filter('keywordFilter', function() {
	return function(items, company) {
		if(name == undefined || company.company == undefined || items==null)
			return items;
		else{

			var arrayToReturn = [];
			for (var i = 0; i < items.length; i++) {
				if (items[i].supplierCompanyId == company.company.companyId) {
					arrayToReturn.push(items[i]);
				}
			}
			return arrayToReturn;
		}
	};
});

pharmApp.filter('keywordFilter2', function() {
	return function(items, companyId) {
		if(name == undefined || companyId == undefined || items==null)
			return items;
		else{

			var arrayToReturn = [];
			for (var i = 0; i < items.length; i++) {
				if (items[i].supplierCompanyId == companyId) {
					arrayToReturn.push(items[i]);
				}
			}
			return arrayToReturn;
		}
	};
});

pharmApp.filter('mrDropDownFilter', function() {
	return function(items, companySelected,supplierSelected) {
		if(companySelected == "undefined" || items==null)
			return items;
		else{
			var arrayToReturn = [];
			for (var i = 0; i < items.length; i++) {
				if (items[i].mrCompanyId == companySelected.companySelected.companyId) {
					arrayToReturn.push(items[i]);
				}
			}
			/*  if(supplierSelected.supplierSelected !="undefined"){*/
			if(arrayToReturn.length==1){
				angular.element(document.getElementById('purch')).scope().mrSelected=arrayToReturn[0];
			}
			/* }*/
			return arrayToReturn;
		}
	};
});
/*pharmApp.filter('mrDropDownFilter2', function() {
	return function(items, companySelected,supplierSelected) {
		if(companySelected == "undefined" || items==null)
			return items;
		else{
			var arrayToReturn = [];
			for (var i = 0; i < items.length; i++) {
				if (items[i].mrCompanyId == companySelected.companySelected.companyId) {
					arrayToReturn.push(items[i]);
				}
			}
			  if(supplierSelected.supplierSelected !="undefined"){
			if(arrayToReturn.length==1){
				angular.element(document.getElementById('purch')).scope().mrSelected=arrayToReturn[0];
			}
			 }
			return arrayToReturn;
		}
	};
});*/


function getTodaysDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
		dd='0'+dd
	} 

	if(mm<10) {
		mm='0'+mm
	} 

	today = dd+'/'+mm+'/'+yyyy;
	return today;
}


function Purchasepopupvaliation(){
	flag=true;
	if($.trim($('#quantitypopup').val()).length==0 || $('#quantitypopup').val()==0  ){

		$('#quantitypopup').css("background-color", "#fff4eb");
		//create error message using tooltip
		flag=false;
	}
	return flag;
}

function Purchasewhitespace(){
	$("#quantitypopup").css("background-color", "white");
}
function myFunction(){
	$("#quantitypopup").css("background-color", "white");
}