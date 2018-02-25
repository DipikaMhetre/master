pharmApp.controller('SMBatchSchemeCtrl', ['$scope','$rootScope','$http','$modalInstance','$log', function ($scope,$rootScope,$http, $modalInstance, $log) {
	$scope.popupActiveBatch={};
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.init=function(){
		//Got Batch Data selected in Grid2
		$scope.popupActiveBatch=w2ui.grid2.get(w2ui.grid2.getSelection());
		
		
		var json={entity:3,entityId:$scope.popupActiveBatch.grProductBatchActiveId,listType:3,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,companyId:0,grDate:0,productId:$scope.popupActiveBatch.grProductBatchProductId};
		//HTTP CALL FOR GETTING 
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiStockManager/getStockManager",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				$scope.showBatchScheme=respData.batchSchemeList;
				$scope.showBatchScheme.batchSchemePBAID=$scope.popupActiveBatch.grProductBatchActiveId;
				$scope.showGrHistory=respData.grHistoryList;
				///////////////////////////////
				var tempList=[{batchSchemeDetailsId:0,batchSchemeDetailsBSID:0,batchSchemeDetailsQuantity:null,batchSchemeDetailsFree:null,batchSchemeDetailsIndex:0},
					        {batchSchemeDetailsId:0,batchSchemeDetailsBSID:0,batchSchemeDetailsQuantity:null,batchSchemeDetailsFree:null,batchSchemeDetailsIndex:1},
							{batchSchemeDetailsId:0,batchSchemeDetailsBSID:0,batchSchemeDetailsQuantity:null,batchSchemeDetailsFree:null,batchSchemeDetailsIndex:2}];
				if($scope.showBatchScheme.bsdList==null){
					$scope.showBatchScheme.bsdList=tempList;
				}else{
					for(i=0;i<$scope.showBatchScheme.bsdList.length;i++){
						if($scope.showBatchScheme.bsdList[i].batchSchemeDetailsFree == 0 || $scope.showBatchScheme.bsdList[i].batchSchemeDetailsQuantity == 0){
							$scope.showBatchScheme.bsdList[i].batchSchemeDetailsFree=null;
							$scope.showBatchScheme.bsdList[i].batchSchemeDetailsQuantity=null;
						}
						tempList[$scope.showBatchScheme.bsdList[i].batchSchemeDetailsIndex]=$scope.showBatchScheme.bsdList[i];
					}
					$scope.showBatchScheme.bsdList=tempList;
				}
				
				for(i=0;i<$scope.showBatchScheme.bsdList.length;i++){
					if($scope.showBatchScheme.bsdList[i].batchSchemeDetailsFree == 0 || $scope.showBatchScheme.bsdList[i].batchSchemeDetailsQuantity == 0){
						$scope.showBatchScheme.bsdList[i].batchSchemeDetailsFree=null;
						$scope.showBatchScheme.bsdList[i].batchSchemeDetailsQuantity=null;
					}
				}
				///////////////////////////////////////
				for(i=0;i<3;i++){//3 is takes as considering 3 schemes per batch max
					//==================HARDCODE==============
					
					if(i==0){
						
						$scope.showBatchScheme.Q1=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsQuantity;
						$scope.showBatchScheme.F1=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsFree;
						$scope.showBatchScheme.Q1ID=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsId;
						
					}
					if(i==1){
						$scope.showBatchScheme.Q2=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsQuantity;
						$scope.showBatchScheme.F2=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsFree;
						$scope.showBatchScheme.Q2ID=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsId;
						
					}
					if(i==2){
						$scope.showBatchScheme.Q3=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsQuantity;
						$scope.showBatchScheme.F3=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsFree;
						$scope.showBatchScheme.Q3ID=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsId;
						
					}
				}
				
				w2ui.grid3.records=$scope.showGrHistory;
				w2ui.grid3.refresh();
					
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
		
		
		//=============History grid Load
		
		var config3 = {
				layout: {
					name: 'layout3',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%'},
					         { type: 'main' }
					         ]
				},
				grid: { 

					name: 'grid3',
					show: {
						toolbar : false,
						toolbarDelete: false,
						toolbarAdd : false
					},
					columns: [
					          { field: 'grId', caption: 'Voucher', size: '7%',style: 'text-align: left',resizable: false,sortable: true},
					          { field: 'grDate', caption: 'Voucher Date', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
					          { field: 'pName', caption: 'Product Name', size: '7%',style: 'text-align: left',resizable: false,sortable: true},			  	            
					          { field: 'purchaseRate', caption: 'Purchase Rate', size: '7%',style: 'text-align: left',resizable: false,sortable: true},
					          { field: 'qty', caption: 'Qty', size: '7%',style: 'text-align: left',resizable: false,sortable: true},
					          { field: 'specialDiscountAmt', caption: 'Special Disc', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
					          { field: 'tradeDiscountAmt', caption: 'Trade Disc', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
					          { field: 'poSID', hidden:true},
					          { field: 'poId', hidden:true},
					          { field: 'poDate', caption: 'P.Date', size: '7%',style: 'text-align: left',resizable: false,sortable: true }
					          
					          //{ field: 'recid', caption: 'recid', hidden:true }
					          //{ field: 'contentActiveFlag', caption: 'contentActiveFlag', hidden:true }   
					          //======
					          
					          
					          
					          ],	
					          onSelect: function(event) {
						        	event.onComplete = function () {
						        		//angular.element(document.getElementById('StockManager')).scope().showRecordSelected=w2ui.grid2.get(event.recid);
						        	//scriptSelectCompany(w2ui.grid.get(event.recid));
						        	}
						        } ,	          
					          sortData: [
					                     {field: 'contentName', direction: 'asc' }
					                     ],    

					                     records:[],
					                     onSelect: function(event) {
					                    	 event.onComplete = function () {
					                    		 //angular.element(document.getElementById('ProductMaster')).scope().grid2ElementSelected=true;
					                    		 
					                    	 }
					                     }  ,
					                     onUnselect: function(event) {
					                    	 event.onComplete = function () {
					                    		// angular.element(document.getElementById('ProductMaster')).scope().grid2ElementSelected=false;
					                    		 
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

		}

		if(!$rootScope.grid3){
			loadContentpopupGrid(config3);
		}else{
			w2ui.grid3.destroy();
			w2ui.layout3.destroy();
			loadContentpopupGrid(config3);
			
		}
		
		/*===========================*/
		var month = (new Date()).getMonth() + 1;
		var year  = (new Date()).getFullYear();
		// EU Common Format
		$('input[type=eu-date]').w2field('date',  { format: 'd/m/yyyy' });
		$('input[type=eu-dateA]').w2field('date', { format: 'd/m/yyyy', start:  '5.' + month + '.' + year, end: '25.' + month + '.' + year });
		$('input[type=eu-dateB]').w2field('date', { format: 'd/m/yyyy', blocked: ['12.' + month + '.' + year, '13.' + month + '.' + year, '14.' + month + '.' + year]});
		$('input[type=eu-date1]').w2field('date', { format: 'd/m/yyyy', end: $('input[type=eu-date2]') });
		$('input[type=eu-date2]').w2field('date', { format: 'd/m/yyyy', start: $('input[type=eu-date1]') });
		$('input[type=eu-time]').w2field('time',  { format: 'h24' });
		$('input[type=eu-timeA]').w2field('time', { format: 'h24', start: '8:00 am', end: '4:30 pm' });
		/*===========================*/
		
	};

	$scope.saveScheme=function(){
		var a=SMBatchschemeValidate();
		  if(a==false){
		   return false;
		  }
		$scope.saveBatchShemeObj={};
		angular.copy($scope.showBatchScheme,$scope.saveBatchShemeObj);
		
		//Hardcode data Dependant code
		/*if($scope.saveBatchShemeObj.bsdList.length==0){
			var list=[{batchSchemeDetailsId:0,batchSchemeDetailsBSID:0,batchSchemeDetailsQuantity:0,batchSchemeDetailsFree:0,batchSchemeDetailsIndex:0},
			          {batchSchemeDetailsId:0,batchSchemeDetailsBSID:0,batchSchemeDetailsQuantity:0,batchSchemeDetailsFree:0,batchSchemeDetailsIndex:1},
			{batchSchemeDetailsId:0,batchSchemeDetailsBSID:0,batchSchemeDetailsQuantity:0,batchSchemeDetailsFree:0,batchSchemeDetailsIndex:2}];
		}else{
			
		}*/
		
		
		
		for(i=0;i<3;i++){
			if(i==0){			
				$scope.saveBatchShemeObj.bsdList[i].batchSchemeDetailsFree=$scope.saveBatchShemeObj.F1;
				$scope.saveBatchShemeObj.bsdList[i].batchSchemeDetailsQuantity=$scope.saveBatchShemeObj.Q1;
				$scope.saveBatchShemeObj.bsdList[i].batchSchemeDetailsBSID=$scope.saveBatchShemeObj.batchSchemeId;
				delete $scope.saveBatchShemeObj.F1;
				delete $scope.saveBatchShemeObj.Q1;
				delete $scope.saveBatchShemeObj.Q1ID
			}
			if(i==1){
				$scope.saveBatchShemeObj.bsdList[i].batchSchemeDetailsFree=$scope.saveBatchShemeObj.F2;
				$scope.saveBatchShemeObj.bsdList[i].batchSchemeDetailsQuantity=$scope.saveBatchShemeObj.Q2;
				$scope.saveBatchShemeObj.bsdList[i].batchSchemeDetailsBSID=$scope.saveBatchShemeObj.batchSchemeId;
				delete $scope.saveBatchShemeObj.F2;
				delete $scope.saveBatchShemeObj.Q2;
				delete $scope.saveBatchShemeObj.Q2ID
			}
			if(i==2){
				$scope.saveBatchShemeObj.bsdList[i].batchSchemeDetailsFree=$scope.saveBatchShemeObj.F3;
				$scope.saveBatchShemeObj.bsdList[i].batchSchemeDetailsQuantity=$scope.saveBatchShemeObj.Q3;
				$scope.saveBatchShemeObj.bsdList[i].batchSchemeDetailsBSID=$scope.saveBatchShemeObj.batchSchemeId;
				delete $scope.saveBatchShemeObj.F3;
				delete $scope.saveBatchShemeObj.Q3;
				delete $scope.saveBatchShemeObj.Q3ID
			}
		}
		
		for(i=0;i<$scope.saveBatchShemeObj.bsdList.length;i++){
			if($scope.saveBatchShemeObj.bsdList[i].batchSchemeDetailsFree == null || $scope.saveBatchShemeObj.bsdList[i].batchSchemeDetailsQuantity == null || $scope.saveBatchShemeObj.bsdList[i].batchSchemeDetailsFree == '' || $scope.saveBatchShemeObj.bsdList[i].batchSchemeDetailsQuantity == ''){
				$scope.saveBatchShemeObj.bsdList[i].batchSchemeDetailsFree=0;
				$scope.saveBatchShemeObj.bsdList[i].batchSchemeDetailsQuantity=0;
			}
		}
		
		if(typeof $scope.saveBatchShemeObj.expanded !== "undefined"){
			delete $scope.saveBatchShemeObj.expanded;
		}
		if(typeof $scope.saveBatchShemeObj.changes !== "undefined"){
			delete $scope.saveBatchShemeObj.changes;
		}
		//$scope.saveBatchShemeObj
		json1=JSON.stringify($scope.saveBatchShemeObj);
		var json={entity:5,entityId:0,listType:0,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token,companyId:0,grDate:0};
		//HTTP CALL FOR GETTING 
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiStockManager/setStockManager",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				/*var respData=JSON.parse(data.responseData);
				$scope.showBatchScheme=respData.batchSchemeList;
				$scope.showGrHistory=respData.grHistoryList;*/
				
				$modalInstance.close('');	
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
		
	};
	
	
	$scope.cancel=function(){	
		$modalInstance.close('');		
	};


}]);

//_____________-------Batch Scheme--------------_______________
$( document ).ready(function() {
	  // Handler for .ready() called.
	 	$('#scheme_start_date').allowNumbersOnly();
	  	$('#scheme_end_date').allowNumbersOnly();
	  	$('#scheme_min_stock').allowNumbersOnly();  
	  	$('#scheme_remark').allowTextOnlyWithSpace();
	  	$('#scheme_quantity1').allowTextOnlyWithSpace();	    	  	
		$('#scheme_free1').allowTextOnlyWithSpace();
		$('#scheme_quantity2').allowTextOnlyWithSpace();	    	  	
		$('#scheme_free2').allowTextOnlyWithSpace();
		$('#scheme_quantity3').allowTextOnlyWithSpace();	    	  	
		$('#scheme_free3').allowTextOnlyWithSpace()   				    			    		
	});

function SMBatchschemeValidate()
{
 flag=true;
 if($.trim($('#scheme_quantity1').val()).length!=0 && $.trim($('#scheme_free1').val()).length==0){
  
  $('#scheme_free1').css("background-color", "#fff4eb");

  //create error message using tooltip
  flag=false;
 }
 if($.trim($('#scheme_free1').val()).length!=0 && $.trim($('#scheme_quantity1').val()).length==0){
	  
	  $('#scheme_quantity1').css("background-color", "#fff4eb");
	  //create error message using tooltip
	  flag=false;
	 }
 if($.trim($('#scheme_quantity2').val()).length!=0 && $.trim($('#scheme_free2').val()).length==0){
	  
	  $('#scheme_free2').css("background-color", "#fff4eb");
	  //create error message using tooltip
	  flag=false;
	 }
	 if($.trim($('#scheme_free2').val()).length!=0 && $.trim($('#scheme_quantity2').val()).length==0){
		  
		  $('#scheme_quantity2').css("background-color", "#fff4eb");

		  //create error message using tooltip
		  flag=false;
		 }
	 if($.trim($('#scheme_quantity3').val()).length!=0 && $.trim($('#scheme_free3').val()).length==0){
		  $('#scheme_free3').css("background-color", "#fff4eb");
		  //create error message using tooltip
		  flag=false;
		 }
		 if($.trim($('#scheme_free3').val()).length!=0 && $.trim($('#scheme_quantity3').val()).length==0){
			  
			  $('#scheme_quantity3').css("background-color", "#fff4eb");
			  //create error message using tooltip
			  flag=false;
			 }

 return flag;
 }