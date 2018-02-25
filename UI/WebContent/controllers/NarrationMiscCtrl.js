pharmApp.controller('NarrationMiscCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.ShowControlpanelMiscList=[];
	$scope.MainNarrationList=[];
	$scope.recSelected=true;
	$scope.buttonText="Add";
	$scope.buttonaddText="Add";
	$scope.spinner=true;
	$scope.grid1Selected=false;
	$scope.grid2Selected=false;
	$scope.hide=false;
	$scope.Msg='OFF';
	$scope.buttonvoucherText="Add";
	$scope.FinacialYearList=[];
	FinacialYearSelected={};
	$scope.filterStatus="OFF";
	$scope.ButtonReceipt="Add";
	$scope.showNarration=false;
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.msg1="You can not Modify/Remove This Reasons";
	$scope.init=function(){
	
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
				  	            { field: 'voucherTypeId', caption: 'voucherTypeId', hidden:true },
				  	            { field: 'voucherTypeName', caption: 'Voucher Type', size: '100%',style: 'text-align: left',resizable: false,sortable: true  },
				  	            { field: 'voucherTypeNarration', caption: 'Narration',size: '100%',style: 'text-align: left',resizable: false,sortable: true},
				  	            { field: 'voucherTypeNarrationId', caption: 'voucherTypeNarrationId',hidden:true},
				  	          
				  	            
				  	             	      
				  	        ],
				  	   
				        records:[],
				        onSelect: function(event) {
				        	event.onComplete = function () {
				        		angscope=angular.element(document.getElementById('narrtionmisc')).scope();
				        		angscope.narrtionSelected=w2ui.grid3.get(event.recid);
						        $('#removeNaration').removeClass();
						        	angscope.buttonvoucherText="Modify";
						        	//$('#removeLink').removeClass();		
						        	//angscope.grid1Selected=true;
						        	angscope.$apply();
						        	}
						        }  ,
						        onUnselect: function(event) {
						        	event.onComplete = function () {
						        	angscope=angular.element(document.getElementById('narrtionmisc')).scope();
						        	//scriptSelectCompany(w2ui.grid.get(event.recid));
						        		//$scope.recSelected=w2ui.grid.get(event.recid);
						        	angscope.narrtionSelected={};
						        		
				
						        	angscope.buttonvoucherText="Add";
						            $('#removeNaration').removeClass().addClass('not_implemented_link not_active');	
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
			 
			}
		
		
		
		if(!$rootScope.grid3){
			loadContentpopupGrid(config3);
		}else{
			w2ui.grid3.destroy();
			w2ui.layout.destroy();
			loadContentpopupGrid(config3);
			
		}
		GetClock();
		var json3={entity:2,listType:1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiVoucherType/getVoucherType",
		    async:false,
		    data:JSON.stringify(json3),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				angular.copy(respData,$scope.MainNarrationList);
				
				angular.copy(respData,w2ui.grid3.records);
				w2ui.grid3.refresh();
				
				
				
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
	$scope.removeNaration=function(){
		$scope.deleteList={};
		for(i=0;i<$scope.MainNarrationList.length;i++){
			if($scope.narrtionSelected.voucherTypeNarrationId==$scope.MainNarrationList[i].voucherTypeNarrationId){
				$scope.deleteList=$scope.narrtionSelected;
				
			}
		}
		var json1=angular.toJson($scope.deleteList);
		
		var json={entity:1,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiVoucherType/setVoucherType",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var returnObj=JSON.parse(data.responseData);
				  
					  for(i=0;i<$scope.MainNarrationList.length;i++){
						  if($scope.MainNarrationList[i].voucherTypeNarrationId==$scope.deleteList.voucherTypeNarrationId){
							  $scope.MainNarrationList.splice(i,1);
							
							  
				   }
			 }
					 angular.copy($scope.MainNarrationList,w2ui.grid3.records);
					  w2ui.grid3.refresh();
					  alert("Successfully Removed");
						$scope.buttonvoucherText="Add";
				    
				 
			}
				
				//$scope.spinner=false;
			else{
				
				alert('Purpleaid Error Manager \n'+data.responseCode);
				//$scope.spinner=false;
			}
        }).error(function(data, status, headers, config) { 
        	//$scope.spinner=false;
        	alert(returnObj.outputStatus);
        	return false;
        	
        });
	};
$scope.RefreshNarration=function(){
	var json3={entity:2,listType:1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
	$http({
	    method: 'POST',
	    url: "http://localhost:8080/Purple/rest/apiVoucherType/getVoucherType",
	    async:false,
	    data:JSON.stringify(json3),
	    headers: {'Content-Type': 'application/json'}
	}).success(function(data, status, headers, config) {
		if(data.responseCode == 200){
			var respData=JSON.parse(data.responseData);
			angular.copy(respData,$scope.MainNarrationList);
			
			angular.copy(respData,w2ui.grid3.records);
			w2ui.grid3.refresh();
			
			
			
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
	$scope.showAddModifyVoucherNarrationEntriesPopup = function(){
		  $modal.open({
		   template :'<div id="voucherentrynarration" class="purpleaid"> <div class="grayBG" ng-init=init();> <div class="container ControlPanel_Misc_AddPopup"> <div class="row topblueStrip fieldsBot_Spacing"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Voucher Narration Entries</span> <img alt="" class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <span>Narrations</span> </div> <div class="col-md-9"> <select class=" input-sm input_rightSpecing full_width" ng-model="ShowNarartionSelected.voucherTypeNarrationId" ng-options="opt.voucherTypeNarrationId as opt.voucherTypeNarration for opt in ShowNarrationList" ng-change=changenaration();ChangedNarrationName();> </select> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <span>Narration</span> </div> <div class="col-md-9"> <input id="narration" name="narration" type="text" ng-model="ShowNaration" value=={{ShowNaration}} allow-textwithspace onclick="Purplevalidator(\'narration\',2,\'voucherentrynarration\',\' \')" onfocus="Purplevalidator(\'narration\',2,\'voucherentrynarration\',\'\');" class="form-control input-sm"> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <span>Voucher&nbsp;Type</span> </div> <div class="col-md-9"> <select class=" input-sm input_rightSpecing full_width" ng-options="opt.id as opt.name for opt in VoucherTypeList" ng-model="ShowNarartionSelected.voucherTypeId"> </select> </div> </div> <div class="row fields_headingSpacing textRight fieldsBot_Spacing_lg"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="6" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="7" ng-click="submit()">Save</button> </div> </div> </div> </div> </div> <script type="text/javascript"> $(document).ready(function() { $("#narration").keypress(function() { $("#narration").css("background-color", "white"); }); }); </script> ',            
		   controller :'VoucherNarrationCtrl',
		   backdrop: 'static',
		   size:'lg',
		   windowClass: 'AddModifyVoucherNarrationEntries-Model'
		    
		  }).result.then(function(result) {

		  });
		 };
	
}]);