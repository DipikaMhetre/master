pharmApp.controller('LockSmithCtrl', ['$scope','$rootScope','$http','$modal','$log', function ($scope,$rootScope,$http, $modal, $log){
	$scope.showActiveFilterStatus='OFF';
	$scope.showLockFilterStatus='OFF';
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.editable=$rootScope.editable;
	$scope.init=function(){
		var config = {
				layout: {
					name: 'layout',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%', resizable: true},
					         { type: 'main' }
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
					          { field: 'recid', caption: 'recid',hidden:true},
					          { field: 'entityName', caption: 'Entity Name', size: '100%',style: 'text-align: left',resizable: false}
					          ],
					          multiSearch: true,
					          searches: [
					                     { field: 'entityName', caption: 'Entity Name', type: 'int' }

					                     ],
					                     sortData: [
					                                {field: 'productName', direction: 'asc' }
					                                ],    

					                                records:[{recid:1,entityName:'Company'},
					                                         {recid:2,entityName:'Supplier'},
					                                         {recid:3,entityName:'Division'},
					                                         /* {recid:4,entityName:'Mr'},*/
					                                         {recid:5,entityName:'Customer'},
					                                         {recid:6,entityName:'Area'},
					                                         {recid:7,entityName:'Route'},
					                                         {recid:8,entityName:'Salesman'},],
					                                         onSelect: function(event) {
					                                        	 event.onComplete = function () {
					                                        		 angular.element(document.getElementById('LockSmith')).scope().loadEntityList(w2ui.grid.get(w2ui.grid.getSelection()).entityName);
					                                        		 angular.element(document.getElementById('LockSmith')).scope().entityName=w2ui.grid.get(w2ui.grid.getSelection()).entityName;


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
		/*============================================================*/


		if(!$rootScope.grid){
			loadC(config);
		}else{
			w2ui.grid.destroy();
			w2ui.layout.destroy();
			loadC(config);

		}
		GetClock();
		debugger;
		/*=================================================================*/
		var config2 = {
				layout: {
					name: 'layout2',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%', resizable: true},
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
					          { field: 'recid', caption: 'recid',hidden:true},
					          { field: 'entityName', caption: 'Entity Name', size: '100%',style: 'text-align: left',resizable: false}
					          ],
					          multiSearch: true,
					          searches: [
					                     { field: 'entityName', caption: 'Entity Name', type: 'int' }

					                     ],
					                     sortData: [
					                                {field: 'productName', direction: 'asc' }
					                                ],    

					                                records:[],
					                                onSelect: function(event) {
					                                	event.onComplete = function () {

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
		/*============================================================*/

		if(!$rootScope.grid2){
			loadContentGrid(config2);
		}else{
			w2ui.grid2.destroy();
			w2ui.layout2.destroy();
			loadContentGrid(config2);

		}




	};

	$scope.loadEntityList=function(entityName){
		if(entityName=='Company'){
			entityName='Company2';
		}
		var adjustEntity=0;
		var adjustListType=0;
		switch(entityName){
		case 'Company2':
			adjustEntity=2;
			adjustListType=1;

			break;

		case 'Supplier':
			adjustEntity=2;
			adjustListType=2;
			break;
		case 'Division':
			adjustEntity=2;
			adjustListType=3;
			break;
		case 'Customer':
			adjustEntity=2;
			adjustListType=7;
			break;

		case 'Area'	   :
			adjustEntity=2;
			adjustListType=4;
			break;
		case 'Route'   :adjustEntity=2;
		adjustListType=5;
		break;

		case 'Salesman':
			adjustEntity=2;
			adjustListType=6;
			break;

		}
		///////////////////////===========
		var url="http://localhost:8080/Purple/rest/apiLockSmith/getLockSmith";
		var json={entity:adjustEntity,entityId:0,listType:adjustListType,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
			method: 'POST',
			url: url,
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {

			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				var entityList=[];
				switch(entityName){
				case 'Company2':entityList=respData;

				w2ui.grid2.columns=[
				                    { field: 'recid', caption: 'ID', size: '25%',style: 'text-align: left'},           
				                    {	field: 'companyCode', caption: 'Company Code', size: '25%',style: 'text-align: left'},
				                    {	field: 'companyName', caption: 'Company Name', size: '25%',style: 'text-align: left'},
				                    {	field: 'companyActiveFlag', caption: 'Active', size: '25%',style: 'text-align: left',editable: { type: 'checkbox' }}, 

				                    { field: 'companyAddressLine1', caption: 'companyAddressLine1', hidden:true },
				                    { field: 'companyAddressLine2', caption: 'companyAddressLine2', hidden:true },
				                    { field: 'companyCity', caption: 'companyCity', hidden:true },

				                    { field: 'companyContactPerson', caption: 'companyContactPerson', hidden:true },
				                    { field: 'companyDivisionList', caption: 'companyDivisionList', hidden:true },
				                    { field: 'companyEmail', caption: 'companyEmail', hidden:true },
				                    { field: 'companyEmailPOFlag', caption: 'companyEmailPOFlag', hidden:true },
				                    { field: 'companyFax', caption: 'companyFax', hidden:true },

				                    { field: 'companyId', caption: 'companyId',hidden:true},
				                    { field: 'companyMrsList', caption: 'companyActiveFlag', hidden:true },
				                    { field: 'companyOrderLimit', caption: 'companyOrderLimit', hidden:true },
				                    { field: 'companyPaymentDays', caption: 'companyPaymentDays', hidden:true },
				                    { field: 'companyPaymentTerms', caption: 'companyPaymentTerms', hidden:true },
				                    { field: 'companyPhone', caption: 'companyPhone', hidden:true },
				                    { field: 'companyRemarks', caption: 'companyRemarks', hidden:true },
				                    { field: 'companyStockCalculationMode', caption: 'companyStockCalculationMode', hidden:true },
				                    { field: 'companySuppliersList', caption: 'companySuppliersList', hidden:true },
				                    { field: 'edeCode', caption: 'edeCode', hidden:true },
				                    { field: 'mthClosingStock', caption: 'companyFax', hidden:true },
				                    { field: 'mthCurrSale', caption: 'mthCurrSale',hidden:true},
				                    { field: 'mthLastSale', caption: 'mthLastSale', hidden:true },
				                    { field: 'openOrders', caption: 'openOrders', hidden:true },
				                    { field: 'openOrdersAmt', caption: 'openOrdersAmt', hidden:true },
				                    { field: 'yrClosingStock', caption: 'yrClosingStock', hidden:true },
				                    { field: 'yrCurrSale', caption: 'yrCurrSale', hidden:true },
				                    { field: 'yrLastSale', caption: 'yrLastSale', hidden:true }

				                    ];
				w2ui.grid2.searches=[{	field: 'companyActiveFlag', caption: 'Active',type: 'text'}];


				break;

				case 'Supplier':entityList=respData;
				w2ui.grid2.columns=[

				                    {	field: 'supplierCompanyName', caption: 'Company Name', size: '25%',style: 'text-align: left'},
				                    { field: 'supplierName', caption: 'Supplier Name',hidden:true},
				                    {	field: 'supplierAccountCode', caption: 'A/c Code', size: '25%',style: 'text-align: left'},
				                    {	field: 'supplierAccountName', caption: 'A/c Name', size: '25%',style: 'text-align: left'},
				                    {	field: 'supplierActiveFlag', caption: 'Active', size: '25%',style: 'text-align: left',editable: { type: 'checkbox' }}, 

				                    { field: 'supplierId', caption: 'supplierId', hidden:true },
				                    /*{ field: 'supplierCompanyId', caption: 'supplierCompanyId', hidden:true },



											  	            { field: 'supplierOtherInfo', caption: 'supplierOtherInfo', hidden:true },
											  	            { field: 'supplierRemark', caption: 'supplierRemark', hidden:true },
											  	            { field: 'supplierTaxID', caption: 'supplierTaxID', hidden:true },
											  	            { field: 'supplierLedgerType', caption: 'supplierLedgerType', hidden:true },
											  	            { field: 'supplierAccountGroup', caption: 'supplierAccountGroup', hidden:true },
											  	            { field: 'supplierOpeningBalance', caption: 'supplierOpeningBalance',hidden:true},
											  	            { field: 'supplierOpeningBalanceType', caption: 'supplierOpeningBalanceType',hidden:true},
											  	            { field: 'supplierCreditPeriod', caption: 'supplierCreditPeriod', hidden:true },
											  	            { field: 'supplierAddressLine1', caption: 'supplierAddressLine1', hidden:true },
											  	            { field: 'supplierAddressLine2', caption: 'supplierAddressLine2', hidden:true },
											  	            { field: 'supplierCity', caption: 'supplierCity', hidden:true },
											  	            { field: 'supplierContactPerson', caption: 'supplierContactPerson', hidden:true },
											  	            { field: 'supplierPhone', caption: 'supplierPhone', hidden:true },
											  	            { field: 'supplierFax', caption: 'supplierFax', hidden:true },
											  	            { field: 'supplierEmail', caption: 'supplierEmail', hidden:true },

											  	            { field: 'supplierOutStatePartyFlag', caption: 'supplierOutStatePartyFlag', hidden:true },
											  	            { field: 'supplierEmailPOFlag', caption: 'supplierEmailPOFlag',hidden:true},
											  	            { field: 'supplierSetAsDefaultFlag', caption: 'supplierSetAsDefaultFlag', hidden:true },
											  	            { field: 'supplierDeliveryTime', caption: 'supplierDeliveryTime', hidden:true },*/
				                    { field: 'recid', caption: 'recid', hidden:true }

				                    ];
				w2ui.grid2.searches=[{	field: 'supplierActiveFlag', caption: 'Active',type: 'text'}];

				break;

				case 'Division':entityList=respData;
				w2ui.grid2.columns=[
				                    { field: 'recid', caption: 'ID', size: '25%',style: 'text-align: left', hidden:true},           

				                    {	field: 'divisionCompanyName', caption: 'Company Name', size: '25%',style: 'text-align: left'},
				                    {	field: 'divisionCode', caption: 'Code', size: '25%',style: 'text-align: left'},
				                    {	field: 'divisionName', caption: 'Name', size: '25%',style: 'text-align: left'},
				                    {	field: 'divisionActiveFlag', caption: 'Active', size: '25%',style: 'text-align: left', editable: { type: 'checkbox' } },

				                    /*{ field: 'divisionCompanyId', caption: 'divisionCompanyId', hidden:true },

											  	            { field: 'divisionId', caption: 'divisionId', hidden:true },
											  	            { field: 'divisionRemark', caption: 'divisionRemark', hidden:true },
											  	            { field: 'divisionContactName', caption: 'divisionContactName', hidden:true },
											  	            { field: 'divisionContactPhone', caption: 'divisionContactPhone', hidden:true },
											  	            { field: 'divisionContactEmail', caption: 'divisionContactEmail', hidden:true },

											  	            { field: 'divisionMrsList', caption: 'divisionMrsList', hidden:true },
				                     */


				                    ];
				w2ui.grid2.searches=[{	field: 'divisionActiveFlag', caption: 'Active',type: 'text'}];
				break;

				case 'Customer':entityList=respData;
				w2ui.grid2.columns=[
				                    { field: 'recid', caption: 'ID',hidden:true}, 
				                    { field: 'customerId', caption: 'ID',hidden:true}, 

				                    {	field: 'customerArea', caption: 'Area', size: '12.5%',style: 'text-align: left'},
				                    {	field: 'customerSalesman', caption: 'Salesman', size: '12.5%',style: 'text-align: left'},
				                    {	field: 'customerAccountCode', caption: 'Code', size: '12.5%',style: 'text-align: left'},
				                    {	field: 'customerAccountName', caption: 'Customer Name', size: '12.5%',style: 'text-align: left'},
				                    {	field: 'customerActiveFlag', caption: 'Active', size: '12.5%',style: 'text-align: left', editable: { type: 'checkbox' } },
				                    {	field: 'customerLockFlag', caption: 'Lock', size: '12.5%',style: 'text-align: left', editable: { type: 'checkbox' } }


				                    ];
				w2ui.grid2.searches=[{	field: 'customerActiveFlag', caption: 'Active',type: 'text'},
				                     {	field: 'customerLockFlag', caption: 'Active',type: 'text'}

				];
				break;

				case 'Area'	   :entityList=respData;
				w2ui.grid2.columns=[
				                    { field: 'recid', caption: 'ID', size: '20%',style: 'text-align: left',hidden:true}, 
				                    { field: 'areaID', caption: 'ID', size: '20%',style: 'text-align: left',hidden:true},          

				                    {	field: 'areaRegionCode', caption: 'Region Code', size: '20%',style: 'text-align: left'},
				                    {	field: 'areaRegionDescription', caption: 'Region Description', size: '25%',style: 'text-align: left'},
				                    {	field: 'areaCode', caption: 'Area Code', size: '20%',style: 'text-align: left'},
				                    {	field: 'areaDescription', caption: 'Area Name', size: '20%',style: 'text-align: left'},
				                    {	field: 'areaActiveFlag', caption: 'Active', size: '20%',style: 'text-align: left', editable: { type: 'checkbox' } },


				                    ];
				w2ui.grid2.searches=[{	field: 'areaActiveFlag', caption: 'Active',type: 'text'}];
				break;

				case 'Route'   :entityList=respData;
				w2ui.grid2.columns=[
				                    { field: 'recid', caption: 'ID', size: '20%',style: 'text-align: left',hidden:true}, 
				                    { field: 'routeID', caption: 'Route Id', size: '33%',style: 'text-align: left'},          
				                    { field: 'idpk', caption: 'idpk',style: 'text-align: left',hidden:true},
				                    {	field: 'routeDescription', caption: 'Route Desc', size: '33%',style: 'text-align: left'},				
				                    {	field: 'routeActiveFlag', caption: 'Active', size: '33%',style: 'text-align: left',editable: { type: 'checkbox' }}
				                    ];
				w2ui.grid2.searches=[{	field: 'routeActiveFlag', caption: 'Active',type: 'text'}];
				break;

				case 'Salesman':entityList=respData;
				w2ui.grid2.columns=[
				                    { field: 'recid', caption: 'ID', size: '20%',style: 'text-align: left',hidden:true}, 
				                    { field: 'salesmanID', caption: 'Salesman ID', size: '20%',style: 'text-align: left'},          
				                    { field: 'salesmanRouteID', caption: 'Route',size: '20%',style: 'text-align: left'},
				                    {	field: 'salesmanName', caption: 'Route Desc', size: '20%',style: 'text-align: left'},				
				                    {	field: 'salesmanActiveFlag', caption: 'Active', size: '20%',style: 'text-align: left',editable: { type: 'checkbox' }},
				                    {	field: 'salesmanLockFlag', caption: 'Lock', size: '20%',style: 'text-align: left',editable: { type: 'checkbox' }}];

				w2ui.grid2.searches=[{	field: 'salesmanActiveFlag', caption: 'Active',type: 'text'},
				                     {	field: 'salesmanLockFlag', caption: 'Active',type: 'text'}

				];
				break;

				}

				$scope.showLockFilterStatus='OFF';
				$scope.showActiveFilterStatus='OFF';
				w2ui.grid2.reset();
				w2ui.grid2.records=entityList;
				w2ui.grid2.refresh();


			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
				/*var msg = 'Purpleaid Error Manager \n'+data.responseCode;
				//w2ui.w2confirm(msg, function (btn) { console.log(btn); });
				w2alert(msg);*/
			}

		}).error(function(data, status, headers, config) {          
			return false;
		});	


	};


	$scope.saveEntityList=function(entityName){
		debugger;
		var changeList=w2ui.grid2.getChanges();
		if(changeList.length == 0){
			alert('No changes to save !!');
			return false;
		}
		if(entityName=='Company'){
			entityName='Company2';
		}
		if(entityName=='Customer'){
			for(i=0;i<changeList.length;i++){
				if(typeof changeList[i].customerActiveFlag === "undefined"){
					changeList[i].customerActiveFlag=w2ui.grid2.get(changeList[i].recid).customerActiveFlag;
				}
				if(typeof changeList[i].customerLockFlag === "undefined"){
					changeList[i].customerLockFlag=w2ui.grid2.get(changeList[i].recid).customerLockFlag;
				}
			}
		}
		if(entityName=='Salesman'){
			for(i=0;i<changeList.length;i++){
				if(typeof changeList[i].salesmanActiveFlag === "undefined"){
					changeList[i].salesmanActiveFlag=w2ui.grid2.get(changeList[i].recid).salesmanActiveFlag;
				}
				if(typeof changeList[i].salesmanLockFlag === "undefined"){
					changeList[i].salesmanLockFlag=w2ui.grid2.get(changeList[i].recid).salesmanLockFlag;
				}
			}
		}
		var adjustEntity=0;
		var adjustListType=0;
		switch(entityName){
		case 'Company2':
			adjustEntity=2;
			adjustListType=1;
			break;

		case 'Supplier':
			adjustEntity=2;
			adjustListType=2;
			break;
		case 'Division':
			adjustEntity=2;
			adjustListType=3;
			break;
		case 'Customer':
			adjustEntity=2;
			adjustListType=7;
			break;

		case 'Area'	   :
			adjustEntity=2;
			adjustListType=4;
			break;
		case 'Route'   :
			adjustEntity=2;
			adjustListType=5;
		break;

		case 'Salesman':
			adjustEntity=2;
			adjustListType=6;
			break;

		}
		///////////////////////===========
		var url="http://localhost:8080/Purple/rest/apiLockSmith/setLockSmith";
		var json={entity:adjustEntity,entityId:0,listType:adjustListType,requestData:JSON.stringify(changeList),userId:$scope.activeUser.userId,token:$scope.activeUser.token};


		$http({
			method: 'POST',
			url: url,
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {

			if(data.responseCode == 200){
				alert('Database Updated Successfully !!!');
				w2ui.grid2.save();
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
		});

	};

	$scope.applyFilter=function(entityName,filterType){
		if(filterType == 'active'){
			if($scope.showActiveFilterStatus=='OFF'){
				switch(entityName){
				case 'Company':w2ui.grid2.search([{ field:'companyActiveFlag', value:'true', operator:'contains'}]);break;

				case 'Supplier':w2ui.grid2.search([{ field:'supplierActiveFlag', value:'true', operator:'contains'}]);break;

				case 'Division':w2ui.grid2.search([{ field:'divisionActiveFlag', value:'true', operator:'contains'}]);break;

				case 'Customer':if($scope.showLockFilterStatus=='OFF'){
					w2ui.grid2.search([{ field:'customerActiveFlag', value:'true', operator:'contains'}]);
				}else{
					w2ui.grid2.search([{ field:'customerActiveFlag', value:'true', operator:'contains'},{ field:'customerLockFlag', value:'true', operator:'contains'}]);	
				}
				break;

				case 'Area':w2ui.grid2.search([{ field:'areaActiveFlag', value:'true', operator:'contains'}]);break;

				case 'Route':w2ui.grid2.search([{ field:'routeActiveFlag', value:'true', operator:'contains'}]);break;

				case 'Salesman':if($scope.showLockFilterStatus=='OFF'){
					w2ui.grid2.search([{ field:'salesmanActiveFlag', value:'true', operator:'contains'}]);
				}else{
					w2ui.grid2.search([{ field:'salesmanActiveFlag', value:'true', operator:'contains'},{ field:'salesmanLockFlag', value:'true', operator:'contains'}]);	
				}
				break;
				}

				$scope.showActiveFilterStatus='ON';
			}else{
				if($scope.showLockFilterStatus=='OFF'){
					w2ui.grid2.reset();
				}else{
					switch(entityName){
					/*case 'Company':w2ui.grid2.search([{ field:'companyActiveFlag', value:'true', operator:'contains'}]);break;

					case 'Supplier':w2ui.grid2.search([{ field:'supplierActiveFlag', value:'true', operator:'contains'}]);break;

					case 'Division':w2ui.grid2.search([{ field:'divisionActiveFlag', value:'true', operator:'contains'}]);break;*/

					case 'Customer':if($scope.showActiveFilterStatus=='OFF'){
						w2ui.grid2.search([{ field:'customerLockFlag', value:'true', operator:'contains'}]);
					}else{
						w2ui.grid2.search([{ field:'customerActiveFlag', value:'true', operator:'contains'},{ field:'customerLockFlag', value:'true', operator:'contains'}]);	
					}
					break;
					/*
					case 'Area':w2ui.grid2.search([{ field:'areaActiveFlag', value:'true', operator:'contains'}]);break;

					case 'Route':w2ui.grid2.search([{ field:'routeActiveFlag', value:'true', operator:'contains'}]);break;*/

					case 'Salesman':if($scope.showLockFilterStatus=='OFF'){
						w2ui.grid2.search([{ field:'salesmanLockFlag', value:'true', operator:'contains'}]);
					}else{
						w2ui.grid2.search([{ field:'salesmanActiveFlag', value:'true', operator:'contains'},{ field:'salesmanLockFlag', value:'true', operator:'contains'}]);	
					}
					break;
					}

				}
				$scope.showActiveFilterStatus='OFF';
			}
		}else{
			if($scope.showLockFilterStatus=='OFF'){
				switch(entityName){
				/*case 'Company':w2ui.grid2.search([{ field:'companyActiveFlag', value:'true', operator:'contains'}]);break;

					case 'Supplier':w2ui.grid2.search([{ field:'supplierActiveFlag', value:'true', operator:'contains'}]);break;

					case 'Division':w2ui.grid2.search([{ field:'divisionActiveFlag', value:'true', operator:'contains'}]);break;*/

				case 'Customer':if($scope.showActiveFilterStatus=='OFF'){
					w2ui.grid2.search([{ field:'customerLockFlag', value:'true', operator:'contains'}]);
				}else{
					w2ui.grid2.search([{ field:'customerActiveFlag', value:'true', operator:'contains'},{ field:'customerLockFlag', value:'true', operator:'contains'}]);	
				}
				break;
				/*
					case 'Area':w2ui.grid2.search([{ field:'areaActiveFlag', value:'true', operator:'contains'}]);break;

					case 'Route':w2ui.grid2.search([{ field:'routeActiveFlag', value:'true', operator:'contains'}]);break;*/

				case 'Salesman':if($scope.showActiveFilterStatus=='OFF'){
					w2ui.grid2.search([{ field:'salesmanLockFlag', value:'true', operator:'contains'}]);
				}else{
					w2ui.grid2.search([{ field:'salesmanActiveFlag', value:'true', operator:'contains'},{ field:'salesmanLockFlag', value:'true', operator:'contains'}]);	
				}
				break;
				}

				$scope.showLockFilterStatus='ON';
			}else{
				if($scope.showActiveFilterStatus=='OFF'){
					w2ui.grid2.reset();
				}else{
					switch(entityName){
					case 'Company':w2ui.grid2.search([{ field:'companyActiveFlag', value:'true', operator:'contains'}]);break;

					case 'Supplier':w2ui.grid2.search([{ field:'supplierActiveFlag', value:'true', operator:'contains'}]);break;

					case 'Division':w2ui.grid2.search([{ field:'divisionActiveFlag', value:'true', operator:'contains'}]);break;

					case 'Customer':if($scope.showLockFilterStatus=='OFF'){
						w2ui.grid2.search([{ field:'customerActiveFlag', value:'true', operator:'contains'}]);
					}else{
						w2ui.grid2.search([{ field:'customerActiveFlag', value:'true', operator:'contains'},{ field:'customerLockFlag', value:'true', operator:'contains'}]);	
					}
					break;

					case 'Area':w2ui.grid2.search([{ field:'areaActiveFlag', value:'true', operator:'contains'}]);break;

					case 'Route':w2ui.grid2.search([{ field:'routeActiveFlag', value:'true', operator:'contains'}]);break;

					case 'Salesman':if($scope.showLockFilterStatus=='OFF'){
						w2ui.grid2.search([{ field:'salesmanActiveFlag', value:'true', operator:'contains'}]);
					}else{
						w2ui.grid2.search([{ field:'salesmanActiveFlag', value:'true', operator:'contains'},{ field:'salesmanLockFlag', value:'true', operator:'contains'}]);	
					}
					break;
					}
				}
				$scope.showLockFilterStatus='OFF';
			}

		}

	}
}]);