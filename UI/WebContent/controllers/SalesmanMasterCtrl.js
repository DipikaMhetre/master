pharmApp.controller('SalesmanMasterCtrl', ['$scope','$rootScope','$http','$modal','$log', function ($scope,$rootScope,$http, $modal, $log) {
	
	$scope.showSalesmanSelected={};
	$scope.showSalesmanList={};		
	$scope.masterSalesmanList={};
	
		
	$scope.init=function(){
		
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
			            toolbar : true,
			            toolbarDelete: false,
						toolbarAdd : false
			        },
			        columns: [
			  	            { field: 'salesmanName', caption: 'Salesman', size: '30%',style: 'text-align: left',resizable: false,sortable: true},
			  	            { field: 'recid', caption: 'recid', hidden:true },

			  	             
				  	      
			  	        ],
			  	      multiSearch: true,
			          searches: [
			              { field: 'recid', caption: 'recid', type: 'int' },
			              { field: 'salesmanName', caption: 'Salesman', type: 'text' }
			              
			          ],
			          sortData: [
			  	                 {field: 'salesmanName', direction: 'asc' }
			  	                 ],  
			        records:[],
			        onSelect: function(event) {
			        	event.onComplete = function () {
			        	angular.element(document.getElementById('SalesmanMaster')).scope().selectSalesman(w2ui.grid.get(event.recid));
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
			loadSalesman(config);
		}else{
			w2ui.grid.destroy();
			w2ui.layout.destroy();
			loadSalesman(config);
			
		}

		var json={entity:2,entityId:0,listType:2,requestData:"",userId:10,tokenId:1};
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiSalesman/getSalesman",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				var salesmanlist = respData.salesmanList;
				$scope.showSalesmanList=salesmanlist;
				
				
				var routelist = respData.routeList;
				$scope.showRouteList=routelist;
				$scope.salesmanRouteSelected =routelist;
				w2ui.grid.records=salesmanlist;
				
				w2ui.grid.refresh();
				document.getElementById('tb_grid_toolbar_item_w2ui-search-advanced').remove()
				w2ui.grid.refresh();
				document.getElementById('tb_grid_toolbar_item_w2ui-column-on-off').parentNode.removeChild(document.getElementById('tb_grid_toolbar_item_w2ui-column-on-off'));
				document.getElementById('tb_grid_toolbar_item_w2ui-reload').parentNode.removeChild(document.getElementById('tb_grid_toolbar_item_w2ui-reload'));
				//document.getElementById('tb_grid_toolbar_item_w2ui-search-advanced').parentNode.removeChild(document.getElementById('tb_grid_toolbar_item_w2ui-search-advanced'));
				;
				document.getElementById('tb_grid_toolbar_item_w2ui-break0').parentNode.removeChild(document.getElementById('tb_grid_toolbar_item_w2ui-break0'))
			
		
			}else{
				//alert('Purpleaid Error Manager \n'+data.responseCode);
				var msg = 'Purpleaid Error Manager \n'+data.responseCode;
				//w2ui.w2confirm(msg, function (btn) { console.log(btn); });
				w2alert(msg);
			}

			debugger;
		
        }).error(function(data, status, headers, config) {          
        	return false;
        });
		
		
	};
		$scope.selectRoute=function(route){
		
		$scope.showRouteSelected=route;
		$rootScope.RouteMasterSelected=route;
	
		
		
	};
	$scope.newSalesmanMaster=function(){
		
		$scope.showSalesmanSelected={};
		$scope.showRouteSelected={};
		$scope.showSalesmanSelected.salesmanActiveFlag=true;
		w2ui.grid.selectNone();
	};
	
	$scope.saveSalesmanMaster=function(selectedSalesman){
		var a=SalesmanValidate();
		if(a==false)
		 {
		  return false;
		 }
		if(typeof selectedSalesman === "undefined"){ 
			return false;
		};

		var flag='update';
		debugger;
		if(typeof selectedSalesman.salesmanID === "undefined"){
			flag='new';
			$scope.showSalesmanSelected.salesmanID= 0;
		}
	
		debugger;

		
		selectedSalesman.salesmanRouteID=$scope.showRouteSelected.routeID;
		
		var json2=selectedSalesman;
		//Hard Coded City Object
		json2.salesmanCity={
				cityName:"Pune",
				cityId:10,
				cityState:{
					stateName:"Maharashtra",
					stateId:1
				}
		}
	
		delete json2.$$hashKey;
		json=JSON.stringify(json2);
		var jsonReq={entity:1,entityId:0,listType:0,requestData:json,userId:10,tokenId:1};
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiSalesman/setSalesman",
			async:false,
			data:JSON.stringify(jsonReq),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			
			if(data.responseCode == 200){
				var returnObj=JSON.parse(data.responseData);
				
				
				var gridObj=returnObj;
				gridObj.recid=returnObj.salesmanID;
				/*====================for new====================================*/
				if(flag=='new'){
					$scope.showSalesmanList.push(returnObj);
					var gridObj=returnObj;
					gridObj.recid=returnObj.salesmanID;
					w2ui.grid.records=$scope.showSalesmanList.slice();
					
					//$scope.showDivisionList.push(returnObj);
					$scope.selectSalesman(returnObj);
					w2ui.grid.selectNone();
					
					w2ui.grid.refresh();
					w2ui.grid.select(returnObj.salesmanID);
					alert("Salesman saved successfully");
				
				}else{
					
					var keepGoing = true;
					var index=null;
					angular.forEach($scope.showSalesmanList, function(value,key) {
						if(keepGoing) {
							if(value.salesmanID == returnObj.salesmanID){
								index = key;
								keepGoing = false;
							}
							}
						}
						
					);
					$scope.showSalesmanList[index]=returnObj;
					$scope.masterSalesmanList[index]=returnObj;
					$scope.selectSalesman(returnObj);
					
					w2ui.grid.set(returnObj.recid,returnObj,0);
					
					w2ui.grid.selectNone();
					
					w2ui.grid.refresh();
					w2ui.grid.select(returnObj.salesmanID);
					
					alert("salesman updated successfully");
				}
			
			}
			else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}

		}).error(function(data, status, headers, config) {
			alert("AJAX failed in master!");
			return false;
		});



	};
	
	
	$scope.selectSalesman=function(salesman){
		
		$scope.showSalesmanSelected=salesman;
		$rootScope.salesmanMasterSelected=salesman;
		
		var route=$.grep($scope.showRouteList, function(e){ return e.routeID == salesman.salesmanRouteID ; })[0];
		var index= $scope.showRouteList.indexOf(route);
		
		$scope.showRouteSelected = $scope.showRouteList[index];
		
	
	//	$scope.salesmanRouteSelected=$scope.routelist[$scope.showSalesmanSelected.salesmanRouteID];
		/*$scope.customerAreaSelected=$scope.customerAreaList[$scope.showCustomerSelected.customerArea];
		$scope.customerSalesmanSelected=$scope.customerSalesmanList[$scope.showCustomerSelected.customerSalesman];
		$scope.customerLedgerTypeSelected=$scope.customerLedgerTypeList[$scope.showCustomerSelected.customerLedgerType];
		$scope.customerOpeningBalanceTypeSelected=$scope.customerOpeningBalanceTypeList[$scope.showCustomerSelected.customerOpeningBalanceType];
		$scope.customerLicenceTypeSelected=$scope.customerLicenceTypeList[$scope.showCustomerSelected.customerLicenceType];
		w2ui.gridL.records= $scope.showCustomerSelected.customerLicenceList;
		w2ui.gridL.refresh();*/
		$scope.$apply();
		
	};

	
	$scope.addRecord = function()  {
	//	selectedCustomer.customerLicenceType=$scope.customerLicenceTypeSelected.id;

		var ljson = {recid : 1 ,customerLicenceID : $scope.customerLicenceTypeSelected.id, customerLicenceType : $scope.customerLicenceTypeSelected.name,customerLicenceNumber:$scope.showCustomerSelected.customerLicenceNumber,customerLicenceStartDate: $scope.showCustomerSelected.customerLicenceStartDate,customerLicenceEndDate:$scope.showCustomerSelected.customerLicenceEndDate};
		
		w2ui.gridL.records.push(ljson);
		w2ui.gridL.refresh();
		
		$scope.showCustomerSelected.customerLicenceNumber = '';
		$scope.showCustomerSelected.customerLicenceStartDate = '';
		$scope.showCustomerSelected.customerLicenceEndDate = '';
				//w2ui.gridL.records=[];
	}
	
	
	$scope.modifyRecord = function()
	{
		var objSelected=w2ui.gridL.get(w2ui.gridL.getSelection());
		var ljson = {recid : objSelected.recid ,customerLicenceType : $scope.customerLicenceTypeSelected.name,customerLicenceNumber:$scope.showCustomerSelected.customerLicenceNumber,customerLicenceStartDate: $scope.showCustomerSelected.customerLicenceStartDate,customerLicenceEndDate:$scope.showCustomerSelected.customerLicenceEndDate};
		w2ui.gridL.set(objSelected.recid,ljson,true);
		w2ui.gridL.refresh();
	}

	$scope.removeRecord = function()  {
	//	var ljson = {recid : 1 ,customerLicenceType :$scope.customerLicenceTypeSelected.name,customerLicenceNumber:$scope.showCustomerSelected.customerLicenceID,customerLicenceStartDate: $scope.showCustomerSelected.customerLicenceStartDate,customerLicenceEndDate:$scope.showCustomerSelected.customerLicenceEndDate};
		///w2ui.gridL.delete();
		w2ui.gridL.records=[];
		w2ui.gridL.refresh();
	
	}


	
}]);

function SalesmanValidate()
{
    flag=true;
      if($('#salesmanname ').val().length<=0)
       {
       $("#salesmanname").css("background-color", "#fff4eb");
            //create error message using tooltip
       flag=false;
         }
      if($('#salesmanadress ').val().length<=0)
   {
       $("#salesmanadress").css("background-color", "#fff4eb");
        //create error message using tooltip
       flag=false;
     }
      if($('#salesmanmobile ').val().length<=0)
   {
       $("#salesmanmobile").css("background-color", "#fff4eb");
        //create error message using tooltip
       flag=false;
     }
    /*  if($('#salesmanlandline ').val().length<=0)
   {
       $("#salesmanlandline").css("background-color", "#fff4eb");
        //create error message using tooltip
       flag=false;
     }*/
     /* if($('#salesmanfax ').val().length<=0)
   {
       $("#salesmanfax").css("background-color", "#fff4eb");
        //create error message using tooltip
       flag=false;
     }*/
      if($('#salesmanemail').val().length<=0)
   {
       $("#salesmanemail").css("background-color", "#fff4eb");
        //create error message using tooltip
       flag=false;
     }
      if($('#salesmancontactperson').val().length<=0)
   {
       $("#salesmancontactperson").css("background-color", "#fff4eb");
        //create error message using tooltip
       flag=false;
     }
      
      if($('#salesmanmobile1 ').val().length<=0)
   {
       $("#salesmanmobile1").css("background-color", "#fff4eb");
        //create error message using tooltip
       flag=false;
     }
     
     /* if($('#salesmanlandline1 ').val().length<=0)
   {
       $("#salesmanlandline1").css("background-color", "#fff4eb");
        //create error message using tooltip
       flag=false; 
     }*/
     /* if($('#salesmanfax1').val().length<=0)
   {
       $("#salesmanfax1").css("background-color", "#fff4eb");
        //create error message using tooltip
       flag=false;
   }*/
      if($('#salesmanemail1').val().length<=0)
   {
       $("#salesmanemail1").css("background-color", "#fff4eb");
        //create error message using tooltip
       flag=false;
   }
      return flag;
}