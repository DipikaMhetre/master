pharmApp.controller('MrMasterCtrl', ['$scope','$rootScope','$http','$modal','$log', function ($scope,$rootScope,$http, $modal, $log) {
	
	$scope.masterCompanyList=[];
	$scope.masterDivisionList=[];
	$scope.masterMrList=[];
	$scope.showCompanyList=[];
	$scope.showMrList=[];
	$scope.showDivisionList=[];
	
	/*$scope.$watch('showMrList',function() {
		w2ui.grid.records=$scope.showMrList;
		w2ui.grid.refresh();
		
	});*/
	$scope.init=function(){
		/*if (typeof angular.element(document.getElementById('AllMainCtrl')).scope().$parent.companyMasterSelected === "undefined") {
		    alert("something is undefined");
		}else{
			$scope.companyMasterSelected=angular.element(document.getElementById('AllMainCtrl')).scope().$parent.companyMasterSelected;
		}*/
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
			  	            { field: 'mrName', caption: 'MR Name', size: '100%',style: 'text-align: left',resizable: false},
			  	            { field: 'mrId', caption: 'mrId', hidden:true },
			  	            { field: 'mrDivisionName', caption: 'mrDivisionName', hidden:true },
			  	            { field: 'mrDivisionId', caption: 'mrDivisionId', hidden:true },
			  	            { field: 'mrCompanyId', caption: 'mrCompanyId', hidden:true },
			  	            { field: 'mrCompanyName', caption: 'mrCompanyName', hidden:true },
			  	            { field: 'mrRemark', caption: 'mrRemark', hidden:true },
			  	            { field: 'mrTelephone', caption: 'mrTelephone', hidden:true },
			  	            { field: 'mrEmail', caption: 'mrEmail', hidden:true },
			  	            { field: 'mrManagerName', caption: 'mrManagerName', hidden:true },
			  	            { field: 'mrManagerTelephone', caption: 'mrManagerTelephone', hidden:true },
			  	            { field: 'mrManagerEmail', caption: 'mrManagerEmail', hidden:true },
			  	            { field: 'mrActiveFlag', caption: 'mrActiveFlag', hidden:true },
			  	            { field: 'mrEmailreportFlag', caption: 'mrEmailreportFlag', hidden:true },
			  	            { field: 'recid', caption: 'recid',hidden:true}
				  	      
			  	        ],
			        records:[],
			        onSelect: function(event) {
			        	event.onComplete = function () {
			        	angular.element(document.getElementById('mrMaster')).scope().selectMr(w2ui.grid.get(event.recid));
			        	//scriptSelectCompany(w2ui.grid.get(event.recid));
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
		var json={entity:2,entityId:0,listType:1,requestData:"",userId:10,tokenId:1};
		
		//HTTP CALL FOR GETTING COMPANYLIST AND SUPPLIERLIST
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiMR/getMR",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);	
				var clist = respData.companyList;
				var mlist = respData.mrList;
				var dlist = respData.divisionList;
				var dlist2 = respData.divisionList;
				for(i=0;i<clist.length;i++){
					clist[i].companyDivisionsList=[];
					for(j=0;j<dlist.length;j++){					
						if(clist[i].companyId==dlist[j].divisionCompanyId){				
							clist[i].companyDivisionsList.push(dlist[j]);
							/*==========*/
							for(k=0;k<clist[i].companyDivisionsList.length;k++){
								clist[i].companyDivisionsList[k].divisionMrsList=[];
								for(x=0;x<mlist.length;x++){
									if(clist[i].companyDivisionsList[k].divisionId==mlist[x].mrDivisionId){
										clist[i].companyDivisionsList[k].divisionMrsList.push(mlist[x]);
									}
									
								}
							}
							/*==========*/
						}
						
						
					}	
				}			
				data.companyList=clist;	
				$scope.masterCompanyList=respData.companyList;
				$scope.masterMrList=respData.mrList;
				for(i=0;i<$scope.masterCompanyList.length;i++){
					for(j=0;j<$scope.masterCompanyList[i].companyDivisionsList.length;j++){
						$scope.masterDivisionList.push($scope.masterCompanyList[i].companyDivisionsList[j]);
					}	
					
				}
				$scope.showDivisionList=$scope.masterDivisionList;
				$scope.showCompanyList=respData.companyList;
				var allObj={companyId:0,companyName:'ALL'};
				$scope.showCompanyList.push(allObj);
				if (typeof $rootScope.companyMasterSelected === "undefined") {
					$scope.onCompanySelection(allObj);
				}else{
					var company = $.grep($scope.masterCompanyList, function(e){ return e.companyId == $rootScope.companyMasterSelected.companyId; })[0];
					
					$scope.onCompanySelection(company);
				}
		
			}
			
		
        }).error(function(data, status, headers, config) {          
        	return false;
        });
				
	};
	
	$scope.onCompanySelection=function(companySelected){
		var divObj={divisionId:0,divisionName:'ALL'};
		$scope.showMrList=[];
		$scope.showDivisionList=[];
		$scope.showCompanySelected=companySelected;
		if(companySelected.companyId==0){
			
			var flag=[];
			var flag=$.grep($scope.masterDivisionList, function(e){ return e.divisionId == 0; });
			if(flag.length==0){
				$scope.showDivisionList=$scope.masterDivisionList;	
				$scope.showDivisionList.push(divObj);
			}else{
				$scope.showDivisionList=$scope.masterDivisionList;	
			}
			
			/*if(typeof $scope.showDivisionSelected=="undefined" || $scope.showDivisionSelected.divisionId==0){
				$scope.showMrList=$scope.masterMrList;
				return false;
			}else{
				$scope.showMrList=$scope.showDivisionSelected.divisionMrsList;
			}*/
			$scope.onDivisionSelection(divObj);
			
		}else{
			var flag=[];
			var flag=$.grep(companySelected.companyDivisionsList, function(e){ return e.divisionId == 0; });
			if(flag.length==0){
				$scope.showDivisionList=companySelected.companyDivisionsList;
				$scope.showDivisionList.push(divObj);
			}else{
				$scope.showDivisionList=companySelected.companyDivisionsList;	
			}
			$scope.onDivisionSelection(divObj);
			/*if(typeof $scope.showDivisionSelected=="undefined" || $scope.showDivisionSelected.divisionId==0){
				for(i=0;i<companySelected.companyDivisionsList.length;i++){
					$scope.showMrList.push(companySelected.companyDivisionsList[i].divisionMrsList);
				}
			}else{
				$scope.showMrList=$scope.showDivisionSelected.divisionMrsList;
			}*/
		}
		
	}
	
	$scope.onDivisionSelection=function(divisionSelected){
		$scope.showMrList=[];
		$scope.showDivisionSelected=divisionSelected;
		if(typeof $scope.showCompanySelected=="undefined" || $scope.showCompanySelected.companyId==0){
			if(divisionSelected.divisionId==0){
				$scope.showMrList=$scope.masterMrList;
				w2ui.grid.records=$scope.masterMrList;
				w2ui.grid.refresh();
			}else{
				$scope.showMrList=divisionSelected.divisionMrsList;
				w2ui.grid.records=$scope.showMrList;
				w2ui.grid.refresh();
			}
			
		}else{
			if(divisionSelected.divisionId==0){
				for(i=0;i<$scope.showCompanySelected.companyDivisionsList.length;i++){
					if($scope.showCompanySelected.companyDivisionsList[i].divisionId !=0){
						for(j=0;j<$scope.showCompanySelected.companyDivisionsList[i].divisionMrsList.length;j++)
						$scope.showMrList.push($scope.showCompanySelected.companyDivisionsList[i].divisionMrsList[j]);
					}
				}
				
			}else{
				$scope.showMrList=divisionSelected.divisionMrsList;
				
			}
			w2ui.grid.records=$scope.showMrList;
			w2ui.grid.refresh();
			
		}
		
	}
	
	$scope.selectMr=function(selectMr){
		$scope.showMrSelected=selectMr;
		for(i=0;i<$scope.showCompanyList.length;i++){
			if($scope.showCompanyList[i].companyId==selectMr.mrCompanyId){
				$scope.showMrDivisions=[];
				for(j=0;j<$scope.showCompanyList[i].companyDivisionsList.length;j++){
					$scope.showMrDivisions.push($scope.showCompanyList[i].companyDivisionsList[j])
					if(selectMr.mrDivisionId==$scope.showCompanyList[i].companyDivisionsList[j].divisionId){
						index=j;
					}
					
				}

			}
		}
		$scope.showMrDivisionSelected=$scope.showMrDivisions[index];
		$scope.$apply();
	};
	$scope.createNew=function(){
		$scope.showMrSelected={};
		if($scope.showCompanySelected.companyId=="undefined" || $scope.showCompanySelected.companyId == 0){
			alert('Please Select a Company First Then Click New for add New Mr!!');
		}else{
			$scope.showMrDivisions=[];
			for(i=0;i<$scope.showCompanySelected.companyDivisionsList.length;i++){
				if($scope.showCompanySelected.companyDivisionsList[i].divisionId!=0){
					$scope.showMrDivisions.push($scope.showCompanySelected.companyDivisionsList[i]);
				}
			}
			$scope.showMrDivisionSelected=$scope.showMrDivisions[0];
			$scope.showMrSelected.mrCompanyName=$scope.showCompanySelected.companyName;
		}
	};
	
	$scope.saveMrMaster=function(showMrSelected){ 
		debugger;
		if(typeof showMrSelected==="undefined"){
			return false;
		}
		var currCompany=$scope.showCompanySelected;
		var currDivision=0;
		if(typeof $scope.showDivisionSelected==="undefined"){
			currDivision={divisionId:0,divisionName:'ALL'};
		}else{
			currDivision=$scope.showDivisionSelected;
		}
		
		var flag='update';
		if(typeof showMrSelected.mrId==="undefined"){
			showMrSelected.mrId=0;
			var flag='new';
			if(typeof $scope.showCompanySelected ==="undefined" || $scope.showCompanySelected.companyId==0 ){
				alert('Please Select Company!!');
				return false;
			}else{
				showMrSelected.mrDivisionName=$scope.showMrDivisionSelected.divisionName;
				showMrSelected.mrCompanyId=$scope.showCompanySelected.companyId;
				showMrSelected.mrDivisionId=$scope.showMrDivisionSelected.divisionId;
			}
			
		}
		var json=showMrSelected;
		
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiMasters/apiSaveMrMaster",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			var divUpdated = '';
			var retObj=JSON.parse(data.data);
			if(flag=='new'){
				debugger;
				//Show CompanySelected Update
				
				//Master Mr list updated here
				$scope.masterMrList.push(retObj);
				for(i=0;i<$scope.showCompanySelected.companyDivisionsList.length;i++){
					if($scope.showCompanySelected.companyDivisionsList[i].divisionId==retObj.mrDivisionId){
						$scope.showCompanySelected.companyDivisionsList[i].divisionMrsList.push(retObj);
						divUpdated=$scope.showCompanySelected.companyDivisionsList[i];
						//$scope.ShowCompanySelected updated
					}
					
				}
			}else{
				var indexforEdit=0;
				var compSelect='';
				if(typeof $scope.showCompanySelected==="undefined" || $scope.showCompanySelected.companyId==0 ){
					
					$scope.showCompanySelected = $.grep($scope.masterCompanyList, function(e){ return e.companyId == retObj.mrCompanyId; })[0];
					debugger;
				}else{
					
				}
				for(i=0;i<$scope.showCompanySelected.companyDivisionsList.length;i++){
					if($scope.showCompanySelected.companyDivisionsList[i].divisionId==retObj.mrDivisionId){
						for(j=0;j<$scope.showCompanySelected.companyDivisionsList[i].divisionMrsList.length;j++){
							if($scope.showCompanySelected.companyDivisionsList[i].divisionMrsList[j].mrId==retObj.mrId){
								indexforEdit=j;
							}
						}
						$scope.showCompanySelected.companyDivisionsList[i].divisionMrsList[indexforEdit]=retObj;
						divUpdated=$scope.showCompanySelected.companyDivisionsList[i];
						//$scope.ShowCompanySelected updated
					}
					
				}
				
				
			}
			
			//Here Updating o
			debugger;
			companyIndex=0;
			divisionIndex=0;
			for(i=0;i<$scope.showCompanyList.length;i++){
				if(retObj.mrCompanyId==$scope.showCompanyList[i].companyId){
					for(j=0;j<$scope.showCompanyList[i].companyDivisionsList.length;j++){
						if($scope.showCompanyList[i].companyDivisionsList[j].divisionId==retObj.mrDivisionId){
							companyIndex=i;
							divisionIndex=j;
						}
					}
				}
				
			}
			debugger;
			//show CompanyList updated
			$scope.showCompanyList[companyIndex].companyDivisionsList[divisionIndex]=divUpdated;
			//master CompanyList updated
			$scope.masterCompanyList[companyIndex].companyDivisionsList[divisionIndex]=divUpdated;
			$scope.onCompanySelection($scope.showCompanyList[companyIndex]);
			$scope.onDivisionSelection($scope.showCompanyList[companyIndex].companyDivisionsList[divisionIndex]);
			debugger;
			//master DivisionList Update
			var dIndex=0;
			for(i=0;i<$scope.masterDivisionList.length;i++){
				if($scope.masterDivisionList[i].divisionId==retObj.mrDivisionId){
					dIndex=i;
				}
			}
			$scope.masterDivisionList[dIndex]=divUpdated;
			/*===================TRY CODE===========================*/
			//var myCompany = $.grep(myArray, function(e){ return e.id == id; });
			$scope.onCompanySelection(currCompany);
			$scope.onDivisionSelection(currDivision);
			
			
		}).error(function(data, status, headers, config) {
			alert("AJAX failed in master!");
			return false;
		});
		
	};
}]);
