pharmApp.controller('DebitNoteCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','$location','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,$location,ngToast) {
	$scope.maxId=0;	
	$scope.DNTypeList=[{id:0,name:'Direct'},{id:1,name:'Rate Difference'},{id:2,name:'Discount Rollback'},{id:3,name:'Interest'}];
	
	$scope.onChangeDNType = function(dnType){
		if(typeof $rootScope.reAssignFlag !=="undefined" && $rootScope.reAssignFlag){
			return false;
		}
		if(dnType.id == 0){
			
		}else if(dnType.id == 1){
			
		}else if(dnType.id == 2){
		
		}else if(dnType.id == 3){
			
		}
		
		
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

					          { field: 'customerId', caption: 'Cust Id', size: '13%', resizable: true},    
					          { field: 'customerName', caption: 'Customer Name', size: '30%', resizable: true, sortable: true },
					          { field: 'customerArea', caption: 'Area', size: '25%', resizable: true}, 
					          { field: 'customerSalesman', caption: 'Salesman', size: '30%', resizable: true},       
					          { field: 'recid', caption: 'recid', hidden:true}

					          ],
					          records:[],

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
					         /* { field: '', caption: 'Invoice', size: '70%', resizable: true, sortable: true }, */
					          { field: '', caption: 'Note#', size: '40%', resizable: true, sortable: true }, 
					          { field: '', caption: 'Date', size: '50%', resizable: true, sortable: true },      
					          { field: '', caption: 'Customer', size: '80%', resizable: true, sortable: true },
					          { field: '', caption: 'Type', size: '50%', resizable: true, sortable: true },
					         /* { field: '', caption: 'Products#', size: '70%', resizable: true, sortable: true },      
					          { field: '', caption: 'Product Amt', size: '70%', resizable: true, sortable: true },*/
					          { field: '', caption: 'Debit Note Amt', size: '60%', resizable: true, sortable: true },					  
					          { field: '', caption: 'Created By', size: '100%', resizable: true, sortable: true },					  
					          { field: '', caption: 'Status', size: '50%', resizable: true, sortable: true },					  
					          { field: '', caption: 'Ledger', size: '40%', resizable: true, sortable: true }
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
	};


	$scope.showFilterPopup = function(){
		$modal.open({
			template :' <div class=" Filter_Large" ng-init=init()> <div class="container"> <div class="row topblueStrip "> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">FILTERS</span> <img alt="" class="close_popupImage" ng-click="cancel()" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">D.N.#</span> </div> <div class=" col-md-8"> <input id="from_date" type="text" tabindex="10" class="form-control input-sm"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">From&nbsp;Date</span> </div> <div class=" col-md-8"> <input id="from_date" type="eu-date1" tabindex="10" class="form-control input-sm textCenter"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">To&nbsp;Date</span> </div> <div class=" col-md-8"> <input type="eu-date2" id="to_date" tabindex="11" class="form-control input-sm textCenter"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Ledger</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" tabindex="12"> <option>Yes</option> <option>No</option> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Approved</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" tabindex="12"> <option>Yes</option> <option>No</option> <option>Rejected</option> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Created&nbsp;by</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" tabindex="12"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label ">Status</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" tabindex="13"> <option></option> <option></option> <option></option> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Void</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" tabindex="12"> <option>Yes</option> <option>No</option> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">D.N.&nbsp;Amount</span> </div> <div class=" col-md-4"> <input type="text" tabindex="14" id="amount_from" class="form-control input-sm textRight width_Large"> </div> <div class=" col-md-4"> <input type="text" tabindex="15" id="amount_to" class="form-control input-sm textRight width_Large_leftspacing"> </div> </div> <div class="row"> <div class=" col-md-4"></div> <div class=" col-md-4 textCenter"> <span class="control-label">from</span> </div> <div class=" col-md-4 textCenter"> <span class="control-label">to</span> </div> </div> <div class="row fieldsTop_Spacing "> <div class=" col-md-4"> <a ng-click="clearAllFilters();" tabindex="19" class=" clearAllFilterPos">CLEAR&nbsp;ALL</a> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="5" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="6" ng-click="ok(record)">Ok</button> </div> </div> </div> </div> <script type="text/javascript"> var month = (new Date()).getMonth() + 1; var year = (new Date()).getFullYear(); $("input[type=eu-date]").w2field("date", { format : "dd/mm/yyyy" }); $("input[type=eu-date1]").w2field("date", { format : "dd/mm/yyyy", end : $("input[type=eu-date2]") }); $("input[type=eu-date2]").w2field("date", { format : "dd/mm/yyyy", start : $("input[type=eu-date1]") }); $("input[type=eu-time]").w2field("time", { format : "h24" }); $("input[type=eu-timeA]").w2field("time", { format : "h24", start : "8:00 am", end : "4:30 pm" }); </script> ',
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'Filter_Large_Left-Model'

		}).result.then(function(result) {


		});
	};
	

	$scope.showDebitNoteTypeDirectPopup = function(){
		$modal.open({
			template :'<div class="container lightBox_CreditNote_Direct"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Debit Note - Direct</span> <img alt="" class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Customer Details</span> <button class="btn btn-primary consumptionDetailsBtn">Consumption Details</button> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing "> <div class="col-md-7 sectionvline"> <div class="row visitingCard_view Customer_Premium_Bg"> <div class="col-md-12 visitingCard_innerView"> <span style="font-size: 18px; color: #cc0099;">Shree Medical</span> <span>(3245454)</span> <span class="Customer_Premium_text">Premium</span> <br> <span>Satyajeet Toradmal</span> <br> <span>Aditya Garden City, Warje-Malwadi, Pune-400551</span> <br> <span>Mobile No. - 9876543210</span> <br> <span>Area&nbsp;-&nbsp;Atul Nagar</span> <span class="fieldLeft_spacing_xl ">Salesman&nbsp;-&nbsp;Smith Patel</span> <img class="editButton" alt="" src="images/edit.png"> </div> </div> </div> <div class="col-md-5"> <div class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">D.N.&nbsp;Type</span> </div> <div class=" col-md-9"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">Date</span> </div> <div class=" col-md-9"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">Status</span> </div> <div class=" col-md-9"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">Created&nbsp;By</span> </div> <div class=" col-md-9"> <textarea rows="2" readonly="readonly" class="textarea_fixSize"></textarea> </div> </div> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Debit Note Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-7"> <div class="row"> <div class=" col-md-2"> <span class="control-label">Reason</span> </div> <div class=" col-md-4"> <select class="input-sm form-control masterPage_grid_returnRegister input_rightSpecing" tabindex="1"> <option>Type1</option> <option>Type2</option> <option>Other</option> </select> </div> <div class=" col-md-6"> <input type="text" class="form-control input-sm" tabindex="2" readonly="readonly"> </div> </div> </div> <div class="col-md-5"> <div class="row"> <div class=" col-md-3"> <span class="control-label">Amount</span> </div> <div class=" col-md-9"> <input type="text" class="form-control input-sm" tabindex="3"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-1"> <span class="control-label">Remark</span> </div> <div class=" col-md-11"> <input type="text" class="form-control input-sm CN_type_DirectRemarkPos" tabindex="4"> </div> </div> <div class="row fieldsSpacing MedHighlightSection"> <div class="col-md-3"> <span class="control-label">Debit&nbsp;Note&nbsp;Summary&nbsp;:&nbsp;</span> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Amount</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Total</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-6"> <div class="row"> <div class="col-md-3"> <input class="" type="checkbox" ng-model="showDirectCN.creditNoteflgLock"><span class="fieldLeft_spacing">Lock</span> </div> <div class="col-md-9"> <input type="text" class=" input-sm form-control Direct_lock" readonly="readonly"> </div> </div> </div> <div class="col-md-6"> <div class="row"> <div class="col-md-3"> <input class="" type="checkbox" ng-model="" title=""><span class="fieldLeft_spacing ">Void</span> </div> <div class="col-md-9"> <input type="text" class=" input-sm form-control Direct_void" readonly="readonly"> </div> </div> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="5" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="6" ng-click="ok(record)">Save</button> </div> </div> </div> ', 
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'DirectCreditNote-Model'

		}).result.then(function(result) {


		});
	};
	
	
/*	$scope.showDebitNoteTypeRateDiffPopup = function(){
		$modal.open({
			template :'<div class="container lightBox_CreditNote_ProductModify"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Rate Difference</span> <img alt="" class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Customer Details</span> <button class="btn btn-primary consumptionDetailsBtn">Consumption Details</button> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing "> <div class="col-md-6 sectionvline"> <div class="row visitingCard_view Customer_Premium_Bg"> <div class="col-md-12 visitingCard_innerView"> <span style="font-size: 18px; color: #cc0099;">Shree Medical </span> <span>(3245454)</span> <span class="Customer_Premium_text">Premium</span> <br> <span>Satyajeet Toradmal</span> <br> <span>Aditya Garden City, Warje-Malwadi, Pune-400551</span> <br> <span>Mobile No. - 9876543210</span> <br> <span>Area&nbsp;-&nbsp;Atul Nagar </span> <span class="fieldLeft_spacing_xl ">Salesman&nbsp;-&nbsp;Smith Patel</span> </div> </div> </div> <div class="col-md-6"> <div class="row fieldsSpacing"> <div class=" col-md-2"> <span class="control-label">D.N.&nbsp;Type</span> </div> <div class=" col-md-4"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-2"> <span class="control-label">Date</span> </div> <div class=" col-md-4"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-2"> <span class="control-label">Status</span> </div> <div class=" col-md-4"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-2"> <span class="control-label">Created&nbsp;by</span> </div> <div class=" col-md-10"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Sales Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Product</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Batch</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">MRP</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">P.&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">S.&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Old&nbsp;S.&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Rate&nbsp;Diff</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Rate&nbsp;Diff%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> </div> </div> <div class="row"> <div class="col-md-12"> <!--=============GRID========== --> <div id="grid" tabindex="2" class="Acc_AddReceipt_Lot_grid"></div> <!--=============GRID========== --> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Debit Note Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsBot_Spacing LessHighlightSection"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Rate&nbsp;Diff</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Less%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="32"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Less&nbsp;Amt</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="33"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Return&nbsp;Amt</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="34"> </div> </div> </div> </div> <div class="row fieldsBot_Spacing LessHighlightSection"> <div class="col-md-3"> <input class="checkBox" type="checkbox" tabindex="35"> <span class="fieldLeft_spacing">Refund VAT</span> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT&nbsp;Amt</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT&nbsp;Refund</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="36"> </div> </div> </div> </div> <div class="row fieldsBot_Spacing"> <div class="col-md-1"> <span class="fieldLeft_spacing_md1">Remark</span> </div> <div class="col-md-11"> <input type="text" class="form-control input-sm CN_DN_Remarks" tabindex="36"> </div> </div> <div class="row fieldsSpacing MedHighlightSection"> <div class="col-md-3"> <span class="control-label">Debit&nbsp;Note&nbsp;Summary&nbsp;:&nbsp;</span> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Amount</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Total</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-6"> <input class="fieldLeft_spacing_md1" type="checkbox" tabindex="37"> <select class="input-sm"><option>Approved</option> <option>Rejected</option> </select> <input type="text" class=" input-sm ApprovedInput_rateDiff_CreditNote" readonly="readonly"> </div> <div class="col-md-3"> <input class="" type="checkbox" tabindex="37"><span class="fieldLeft_spacing">Lock</span> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="5" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="6" ng-click="ok(record)">Save</button> </div> </div> </div> ', 
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'CN_DN_RateDiff-Model'

		}).result.then(function(result) {


		});
	};
	

	$scope.showDebitNoteTypeDiscountRollbackPopup = function(){
		$modal.open({
			template :'<div class="container lightBox_DebitNote_DiscRollback"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Discount Rollback</span> <img alt="" class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Invoice Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Invoice#</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="2" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Date</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="3" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Gross&nbsp;Total</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="3" readonly="readonly"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Vat</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="2" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Credit&nbsp;Note</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="3" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Debit&nbsp;Note</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="3" readonly="readonly"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Pack&nbsp;&&nbsp;Forword</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="2" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Other&nbsp;Charges</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="3" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Cash&nbsp;Disc</span> </div> <div class=" col-md-4"> <input type="text" class="form-control input-sm" tabindex="3" readonly="readonly"> </div> <div class=" col-md-4"> <input type="text" class="form-control input-sm Add_disc_viewDetails_cashDiscAmt" tabindex="3" readonly="readonly"> </div> </div> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Product & Discount Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsTop_Spacing"> <div class="col-md-12"> <!--=============GRID========== --> <div id="grid" tabindex="10" class="AddDisc_InvoiceDetails"></div> <!--=============GRID========== --> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Debit Note Discount Rollback Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Payment&nbsp;Due</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="2" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Payment&nbsp;Due&nbsp;Date</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="2"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Payment&nbsp;Deed&nbsp;Date</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="3"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Payment&nbsp;delay</span> </div> <div class=" col-md-7"> <div class="input-group input_groupSize_days"> <input type="text" class="form-control input-sm textRight" readonly="readonly"> <span class="input-group-addon input-sm">days</span> </div> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Disc&nbsp;Rollback&nbsp;Cutoff</span> </div> <div class=" col-md-7"> <div class="input-group input_groupSize_days"> <input type="text" class="form-control input-sm textRight" readonly="readonly"> <span class="input-group-addon input-sm">days</span> </div> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Discount&nbsp;Amt</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="3" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Debit&nbsp;Note&nbsp;Amt</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="3"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-2"> <span class="control-label">Remark</span> </div> <div class=" col-md-10"> <input type="text" class="form-control input-sm DiscRollback_DN_Remark" tabindex="4"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-8"> <input class="checkBox" type="checkbox"> <select class="input-sm input_rightSpecing"><option>Approved</option> <option>Rejected</option> </select> <input type="text" class="input-sm DN_discRollback_Approved" readonly="readonly"> </div> <div class=" col-md-4"> <input class="checkBox" type="checkbox"> <span>Lock</span> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="5" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="6" ng-click="ok(record)">Save</button> </div> </div> </div>', 
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'DN_DiscountRollback-Model'

		}).result.then(function(result) {


		});
	};
	
	$scope.showDebitNoteTypeInterestPopup = function(){
		$modal.open({
			template :'<div class="container lightBox_DebitNote_DiscRollback"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Interest</span> <img alt="" class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Invoice Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Invoice#</span> </div><div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="2" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Date</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="3" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Gross&nbsp;Total</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="3" readonly="readonly"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Vat</span> </div>				 <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="2" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Credit&nbsp;Note</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="3" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Debit&nbsp;Note</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="3" readonly="readonly"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Pack&nbsp;&&nbsp;Forword</span> </div>			 <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="2" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Other&nbsp;Charges</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="3" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Cash&nbsp;Disc</span> </div> <div class=" col-md-4"> <input type="text" class="form-control input-sm" tabindex="3" readonly="readonly"> </div> <div class=" col-md-4"> <input type="text" class="form-control input-sm Add_disc_viewDetails_cashDiscAmt" tabindex="3" readonly="readonly"> </div> </div> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Product & Discount Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsTop_Spacing"> <div class="col-md-12"> <!--=============GRID========== --> <div id="grid" tabindex="10" class="AddDisc_InvoiceDetails"></div> <!--=============GRID========== --> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Debit Note Interest Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Payment&nbsp;Due</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="2" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Payment&nbsp;Due&nbsp;Date</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="2"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Payment&nbsp;Deed&nbsp;Date</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="3"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Payment&nbsp;delay</span> </div> <div class=" col-md-7"> <div class="input-group input_groupSize_days"> <input type="text" class="form-control input-sm textRight" readonly="readonly"> <span class="input-group-addon input-sm">days</span> </div> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Interest&nbsp;Calc&nbsp;Kickoff</span> </div> <div class=" col-md-7"> <div class="input-group input_groupSize_days"> <input type="text" class="form-control input-sm textRight" readonly="readonly"> <span class="input-group-addon input-sm">days</span> </div> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Interest&nbsp;Amt</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="3" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class=" col-md-5"> <span class="control-label">Debit&nbsp;Note&nbsp;Amt</span> </div> <div class=" col-md-7"> <input type="text" class="form-control input-sm" tabindex="3"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-2"> <span class="control-label">Remark</span> </div> <div class=" col-md-10"> <input type="text" class="form-control input-sm DiscRollback_DN_Remark" tabindex="4"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-8"> <input class="checkBox" type="checkbox"> <select class="input-sm input_rightSpecing"><option>Approved</option> <option>Rejected</option> </select> <input type="text" class="input-sm DN_discRollback_Approved" readonly="readonly"> </div> <div class=" col-md-4"> <input class="checkBox" type="checkbox"> <span>Lock</span> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="5" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="6" ng-click="ok(record)">Save</button> </div> </div> </div>', 
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'DN_DiscountRollback-Model'

		}).result.then(function(result) {


		});
	};
	*/
	
}]);
