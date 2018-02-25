pharmApp.controller('ControlPanelMiscellaneousCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.ShowContactTypeList=[];
	$scope.ShowControlpanelMiscList=[];
	$scope.recSelected=true;
	$scope.buttonText="Add";
	$scope.init=function(){
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
			        columns: [
			  	            
			  	            { field: 'controlPanelMiscContactType', caption: 'Contact Type',size: '10%',style: 'text-align: center',resizable: false,sortable: true },
			  	            { field: 'controlPanelMiscDefaultRole', caption: 'Default Role', size: '15%',style: 'text-align: left',resizable: false,sortable: true },
			  	            { field: 'recid', caption: 'recid', hidden:true},
			  	           
			  	        ],
			  	  
			        records:[],
			        onSelect: function(event) {
			        	event.onComplete = function () {
			        	angscope=angular.element(document.getElementById('ControlPanelMiscellaneous')).scope();
			        	//scriptSelectCompany(w2ui.grid.get(event.recid));
			        		//$scope.recSelected=w2ui.grid.get(event.recid);
			        		//$('#modifyLink').removeClass();
			        		//$('#removeLink').removeClass();
			        	angscope.recSelected=w2ui.grid.get(event.recid);
			        	angscope.buttonText="Modify";
			        	angscope.$apply();
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
		
		 var json={entity:2,listType:1,entityId:1,requestData:"",userId:10,tokenId:1};
			clist=[];
			//HTTP CALL FOR GETTING COMPANYLIST AND SUPPLIERLIST
			$http({
			    method: 'POST',
			    url: SERVER_URL+"rest/apiControlPanelMisc/getControlPanelMisc",
			    async:false,
			    data:JSON.stringify(json),
			    headers: {'Content-Type': 'application/json'}
			}).success(function(data, status, headers, config) {
				if(data.responseCode == 200){
					var respData=JSON.parse(data.responseData);
					$scope.ShowContactTypeList=respData;
					$scope.ShowDataSelected=$.grep(respData,function(e){return e.controlPanelMiscContactTypeId=e.controlPanelMiscContactTypeId})[0]
					$scope.ShowControlpanelMiscList=$scope.ShowDataSelected.controlPanelMiscList;
					angular.copy($scope.ShowContactTypeList,w2ui.grid.records)
					w2ui.grid.refresh();
					
					
					
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
	
	};
	/*$scope.showAddModifyContactTypePopup = function(){
	$modal.open({
		template :'<div id="ctrlpanelMisc" ng-controller="CtrlpanelMiscAddcontactype" class="purpleaid"> <div class="grayBG" ng-init=init();> <div class="container ControlPanel_Misc_AddPopup"> <div class="row topblueStrip fieldsBot_Spacing"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Contact Type</span> <img alt="" class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <span>Contact&nbsp;Types</span> </div> <div class="col-md-9"><select class=" input-sm input_rightSpecing full_width" ng-options="opt.id as opt.name for opt in conditionTypeList"> </select> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <span>Contact&nbsp;Type</span> </div> <div class="col-md-9"> <input type="text" class="form-control input-sm"> </div> </div> <div class="row"> <div class="col-md-3"> <span>Default&nbsp;Role</span> </div> <div class="col-md-9"> <dl class="dropdown "> <dt> <a href="#" class="input-sm"> <span class="hida ">Select</span> <p class="multiSel"></p> </a> </dt> <dd> <div class="mutliSelect"> <ul> <li><input type="checkbox" value="ASM" />ASM</li> <li><input type="checkbox" value="Owner" />Owner</li> <li><input type="checkbox" value="Salesman" />Salesman</li> </ul> </div> </dd> </dl> </div> </div> <div class="row fields_headingSpacing textRight fieldsBot_Spacing_lg"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="6" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="7" ng-click="submit()">Save</button> </div> </div> </div> </div> </div> ',  
		controller :'CtrlpanelMiscAddcontactype',
		backdrop: 'static',
		size:'lg',
		windowClass: 'ControlPanel_Misc_AddPopup-Modal'
		
	}).result.then(function(result) {
		


	});
};*/
	
$scope.showAddModifyContactTypePopup = function(){
	$modal.open({
		template :'<div id="ctrlpanelMisc" class="purpleaid"> <div class="grayBG" ng-init=init();> <div class="container ControlPanel_Misc_AddPopup"> <div class="row topblueStrip fieldsBot_Spacing"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Contact Type</span> <img alt="" class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <span>Contact&nbsp;Types</span> </div> <div class="col-md-9"> <!-- <select ng-options="opt.controlPanelMiscContactTypeId as opt.controlPanelMiscContactType for opt in ShowContactTypeList" class=" input-sm input_rightSpecing full_width"> </select> --> <select ng-options="opt.name for opt in myList"></select> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <span>Contact&nbsp;Type</span> </div> <div class="col-md-9"> <input type="text" class="form-control input-sm" ng-model="ShowContactTypeSelected.controlPanelMiscContactType" value={{ShowContactTypeSelected.controlPanelMiscContactType}}> </div> </div> <div class="row"> <div class="col-md-3"> <span>Default&nbsp;Role</span> </div> <!-- <div ng-dropdown-multiselect="" options="example6data" selected-model="example1model" checkboxes="true"></div> --> </div> <div class="row fields_headingSpacing textRight fieldsBot_Spacing_lg"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="6" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="7" ng-click="submit()">Save</button> </div> </div> </div> </div> </div> ',         
		controller :'CtrlpanelMiscAddcontactype',
		backdrop: 'static',
		size:'lg',
		windowClass: 'AddModifyContactTypePopup-Modal'
			
	}).result.then(function(result) {

	});
};


$scope.showAddModifyCreditDebitNoteReasonPopup = function(){
	$modal.open({
		template :'<div id="" class="purpleaid"> <div class="grayBG" ng-init=init();> <div class="container ControlPanel_Misc_AddPopup"> <div class="row topblueStrip fieldsBot_Spacing"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Credit/Debit Note Reason</span> <img alt=""	class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <span>Reasons</span> </div> <div class="col-md-9"> <select class=" input-sm input_rightSpecing full_width"> <option>New</option> <option>Saleable</option> <option>Expiry</option> <option>Damaged</option> <option>Recall</option> <option>DPCO</option> <option>Rate Diff</option> <option>Bank Charges</option> <option>Overdue Interest</option> </select> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <span>Reason</span> </div> <div class="col-md-9"> <input type="text" class="form-control input-sm"> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <span>Applicable&nbsp;for&nbsp;:</span> </div> </div> <div class="row"> <div class="col-md-12"> <input type="checkbox" tabindex="15" > <span>Returns</span> <input class="fieldLeft_spacing_xl" type="checkbox" tabindex="15" > <span>Credit&nbsp;Note</span> <input class="fieldLeft_spacing_xl" type="checkbox" tabindex="15" > <span>Debit Note</span> </div> </div> <div class="row fields_headingSpacing textRight fieldsBot_Spacing_lg"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="6" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="7" ng-click="submit()">Save</button> </div> </div> </div> </div> </div> ',
		controller :'',
		backdrop: 'static',
		size:'lg',
		windowClass: 'AddModifyCreditDebitNoteReason-Model'
			
	}).result.then(function(result) {

	});
};

	
}]);
