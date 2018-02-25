pharmApp.controller('ReportMasterCtrl', ['$scope','$rootScope','$http','$modal','$log', function ($scope,$rootScope,$http, $modal, $log) {
	$scope.showCategoryList=[];
	$scope.showSubCategaryList=[];
	$scope.masterSubcategorylist=[];
	$scope.showNotificationList=[]
	$scope.showSubReportList=[];
	$scope.hideGrid3=false;
	
$scope.init=function(){
	debugger;
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
		            toolbarDelete: true,
					toolbarAdd : true
		        },
		        columns: [
			  	            { field: 'notificationId;', caption: 'Notification Id;'},
			  	            { field: 'recid;', caption: 'recid;', hidden:true },
			  	            { field: 'reportId', caption: 'reportId', hidden:true },
			  	            { field: 'notificationDate;', caption: 'notificationDate;', hidden:true },
			  	            { field: 'notificationPriority;', caption: 'notificationPriority;', hidden:true },
			  	            { field: 'notificationDescription;', caption: 'Notification Description;', hidden:true,size: '100%',style: 'text-align: left',resizable: false,sortable: true }
			  	            	      
			  	        ],
			  	    sortData: [
			  	               {field: 'notificationId', direction: 'asc' }
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
		 
		}
	
	
	
	if(!$rootScope.grid){
		loadA(config);			
	}else{
		w2ui.grid.destroy();
		w2ui.layout.destroy();
		loadA(config);				
	};

	
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
		            toolbarDelete: true,
					toolbarAdd : true
		        },
		        columns: [
			  	            { field: 'recid', caption: 'Recid',hidden:true },
			  	            { field: 'reportId', caption: 'ReportId;', hidden:true },
			  	            { field: 'reportName', caption: 'Report Name',size: '100%',style: 'text-align: left',resizable: false,sortable: true },
			  	            { field: 'reportUiUrl', caption: 'reportCategoryPosition', hidden:true },
			  	            { field: 'reportUrl;', caption: 'reportId;',hidden:true},
			  	            { field: 'subReportFlg', caption: 'recid;', hidden:true },
			  	            { field: 'reportSubCategoryName', hidden:true,caption: 'Report SubCategoryName' ,size: '100%',style: 'text-align: left',resizable: false,sortable: true  },
			  	            { field: 'reportDescription', caption: 'reportDescription;', hidden:true },
			  	            { field: 'reportUrl', caption: 'reportUrl;', hidden:true },
			  	            { field: 'reportUiUrl', caption: 'reportUiUrl;', hidden:true },
			  	            { field: 'subReportFlg', caption: 'subReportFlg;',hidden:true}
			  	             	      
			  	        ],
			  	    sortData: [
			  	               {field: 'reportName', direction: 'asc' }
		  	        ], 
			        records:[],
			        onSelect: function(event) {
			        	event.onComplete = function () {
			        		
			        		var angScope=angular.element(document.getElementById('ReportManager')).scope();
			        		angScope.showReportSelected=w2ui.grid2.get(event.recid);
			        		angScope.getSubReportList();
			 			        		
							
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
		 
		}

	
	
	if(!$rootScope.grid2){
		loadContentGrid(config2);
	}else{
		w2ui.grid2.destroy();
		w2ui.layout2.destroy();
		loadContentGrid(config2);
		
	}
	GetClock();
	
	
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
		            toolbarDelete: true,
					toolbarAdd : true
		        },
		        columns: [
			  	            { field: 'recid;', caption: 'ReportCategoryName',hidden:true },
			  	            { field: 'reportDescription', caption: 'reportCategoryId;', hidden:true },
			  	            { field: 'reportName', caption: 'ReportName;', size: '100%',style: 'text-align: left',resizable: false,sortable: true  },
			  	            { field: 'reportUiUrl;', caption: 'reportCategoryImageUrl;', hidden:true },
			  	            { field: 'reportUrl', caption: 'reportCategoryPosition', hidden:true },
			  	            
			  	             	      
			  	        ],
			  	    sortData: [
			  	               {field: 'reportName', direction: 'asc' }
		  	        ], 
			        records:[],
			        onSelect: function(event) {
			        	event.onComplete = function () {
			        		
			        		var angScope=angular.element(document.getElementById('ReportManager')).scope();
			        		angScope.showReportDescSelected=w2ui.grid3.get(event.recid);
			        		angScope.getReportDesc();
			 			        		
							
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
		 
		}
	
	
	
	if(!$rootScope.grid3){
		loadContentpopupGrid(config3);
	}else{
		w2ui.grid3.destroy();
		w2ui.layout.destroy();
		loadContentpopupGrid(config3);
		
	}
	GetClock();
		debugger;
		var json={entity:2,listType:1,requestData:"",userId:10,tokenId:0};
		var clist=[];
		/*obj1={ reportCategoryId:1,reportId:1,reportCategoryName:'Sales',reportCategoryPosition:10}
		obj={ reportCategoryId:2,reportId:2,reportCategoryName:'Accounting',reportCategoryPosition:2}
		
		clist.push(obj1);
		clist.push(obj);
		$scope.showCategoryList=clist;*/
		  //check position id also
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiReport/getCategoryList",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config){
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				
				/*for(i=0;i<respData.length;i++){
					if(respData.categoryReportList == null){
						respData.categoryReportList=[];
					}
					for(j=0;j<respData.categoryReportList.length;j++){
						respData.categoryReportList[j].recid=j+1;
					}
				}*/
				//$scope.showCategoryList=respData.reportCategoryName;
				$scope.showCategoryList=respData;
				//$scope.showSubCategaryList=resData.categoryReportList;				
				//w2ui.grid2.records=respData.reportList;
				//w2ui.grid2.refresh();
				
			}
			else{
				
			}
		}).error(function(data, status, headers, config) {          
        	return false;
        });
	      
		/*var json2={entity:2,listType:3,requestData:"",userId:10,tokenId:0};
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiReport/getCategoryList",
		    async:false,
		    data:JSON.stringify(json2),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config){
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				//$scope.showCategoryList=respData.reportCategoryName;
				$scope.showNotificationList=respData;
				w2ui.grid.records=respData;
				w2ui.grid.refresh();
				
				
			}
			else{
				
			}
		}).error(function(data, status, headers, config) {          
        	return false;
        });*/

		$scope.getReportList=function(reportCategoryId){
			//var json={entity:2,listType:1,requestData:"",userId:10,tokenId:0};
			  //  var respData=JSON.parse(data.responseData);
					$scope.categorySelected=$.grep($scope.showCategoryList,function(e){return e.reportCategoryId == reportCategoryId})[0]
					$scope.showSubCategoryList=$scope.categorySelected.categoryReportList;
					
					var clist=[];
					var slist =[];
					
					 for(i=0;i<$scope.showSubCategoryList.length;i++){	
						 //clist[i]=$.grep($scope.showSubCategoryList,function(e){return e.reportName})[i].reportName;
						 clist[i]=$scope.showSubCategoryList[i].reportName;
						// $scope.showSubCategoryList=clist[i];
						 //slist[i]=$scope.showSubCategoryList[i].reportSubCategoryName;
						 if(clist[i]==null && $scope.showSubCategoryList[i].reportSubCategoryName!=null){
							 clist[i]=$scope.showSubCategoryList[i].reportSubCategoryName;
							 $scope.showSubCategoryList[i].reportName=clist[i];
							 
						 }
					 }
					angular.copy($scope.showSubCategoryList,w2ui.grid2.records);
					for(i=0;i<w2ui.grid2.records.length;i++){
						w2ui.grid2.records[i].recid=i+1;
					}
					w2ui.grid2.refresh();			  
		};
		
		$scope.getSubReportList=function(){
		//	$scope.showSubReportList=$scope.showSubCategoryList;
			/*$scope.subcategorySelected=$.grep($scope.showSubCategoryList,function(e){return e.reportId==e.reportId})[0]
			$scope.showSubReportList=$scope.subcategorySelected.subreportList;
			 if($scope.showSubReportList==null){
				 $scope.ReportDesc=$scope.subcategorySelected;
				 //w2ui['grid'].hideColumn('reportName');
			 }
			 else{
				 angular.copy($scope.showSubReportList,w2ui.grid3.records);
			 }*/
			if($scope.showReportSelected.subreportList == null){
				w2ui.grid3.records=[];
				$scope.ReportDesc=$scope.showReportSelected.reportDescription;
				$scope.hideGrid3=true;
				
			}else{
				$scope.hideGrid3=false;
				w2ui.grid3.records=$scope.showReportSelected.subreportList;
			}
			
			
			w2ui.grid3.refresh();	
		};
		$scope.getReportDesc=function(){
			$scope.ReportDesc=$scope.showReportDescSelected.reportDescription;
		}
		
	};
	/*b=$scope.showSubCategoryList;
	d=$.grep(b,function(e){return e.reportId==e.reportId})[0]
	f=d.subreportList;*/
		
}]);




