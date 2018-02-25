pharmApp.controller('CustomerMasterCtrl', ['$scope','$rootScope','$http','$modal','$log', function ($scope,$rootScope,$http, $modal, $log) {
	
	$scope.showCustomerSelected={};
	$scope.showCustomerList={};		
	$scope.masterCustomerList={};
	$scope.showAreaList={};
	$scope.showSalesmanList={};		
	$scope.errorCount=0;
	$scope.custLic={};
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");

	
	$scope.customerTypeList=[{id:0,name:'Gold'},{id:1,name:'Silver'},{id:2,name:'Regular'},{id:3,name:'Default'}];
	
	//$scope.customerAreaList=[{id:0,name:'Pune'},{id:1,name:'Jalgaon'}];
	
	//$scope.customerSalesmanList=[{id:0,name:'Mr. Salvi'},{id:1,name:'Mr. Koparikar'}];
	
	$scope.customerLedgerTypeList=[{id:0,name:'Creditors'},{id:1,name:'Debitors'}];
	
	$scope.customerCreditTypeList=[{id:0,name:'CASH'},{id:1,name:'CREDIT'}];
	
	$scope.customerOpeningBalanceTypeList=[{id:0,name:'Cr'},{id:1,name:'Dr'}];
	
	$scope.customerLicenceTypeList=[{id:0,name:'Drug-Regular'},{id:1,name:'FDS'},{id:2,name:'Schedule X'}];
	
	//$scope.customerTypeSelected=$scope.customerTypeList[0];
	//$scope.customerAreaSelected=$scope.customerAreaList[0];
	//$scope.customerSalesmanSelected=$scope.customerSalesmanList[0];
	//$scope.customerLedgerTypeSelected=$scope.customerLedgerTypeList[0];
	//$scope.customerOpeningBalanceTypeSelected=$scope.customerOpeningBalanceTypeList[0];
	//$scope.customerLicenceTypeSelected=$scope.customerLicenceTypeList[0];
	$scope.editable=$rootScope.editable;
	
	$scope.init=function(){
		
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
			            toolbar : true,
			            toolbarDelete: false,
						toolbarAdd : false
			        },
			        columns: [
			  	            { field: 'customerName', caption: 'Customer Name',size: '30%',style: 'text-align: left',resizable: false,sortable: true},
			  	            { field: 'recid', caption: 'recid', hidden:true },

			  	            { field: 'customerAccountCode', caption: 'customerAccountCode', hidden:true },
			  	            { field: 'customerAccountName', caption: 'customerAccountName', hidden:true },
			  	            { field: 'customerOtherInfo', caption: 'customerOtherInfo', hidden:true },
			  	            { field: 'customerType', caption: 'customerType', hidden:true },
			  	            { field: 'customerArea', caption: 'customerArea', hidden:true },
			  	            { field: 'customerSalesman', caption: 'customerSalesman', hidden:true },
			  	            { field: 'customerRemark', caption: 'customerRemark', hidden:true },
			  	            { field: 'customerTaxId', caption: 'customerTaxId', hidden:true },
			  	            { field: 'customerLedgerType', caption: 'customerLedgerType', hidden:true },
			  	            { field: 'customerAccountGroup', caption: 'customerAccountGroup', hidden:true },
			  	            { field: 'customerOpeningBalance', caption: 'customerOpeningBalance', hidden:true },
			  	            { field: 'customerOpeningBalanceType', caption: 'customerOpeningBalanceType', hidden:true },
			  	            { field: 'customerOpeningBalanceUnit', caption: 'customerOpeningBalanceUnit', hidden:true },
			  	            { field: 'customerCreditType', caption: 'customerCreditType',hidden:true},
			  	            { field: 'customerCreditPeriod', caption: 'customerCreditPeriod', hidden:true },
			  	            { field: 'customerLicenceType', caption: 'customerLicenceType', hidden:true },
			  	            { field: 'customerLicenceID', caption: 'customerLicenceID', hidden:true },
			  	            { field: 'customerLicenceStartDate', caption: 'customerLicenceStartDate', hidden:true },
			  	            { field: 'customerLicenceEndDate', caption: 'customerLicenceEndDate', hidden:true },
			  	            { field: 'customerContents', caption: 'customerContents', hidden:true },
			  	            { field: 'customerAddressLine1', caption: 'customerAddressLine1', hidden:true },
			  	            { field: 'customerAddressLine2', caption: 'customerAddressLine2',hidden:true},
			  	            { field: 'customerCity', caption: 'customerCity', hidden:true },
			  	            { field: 'customerContactPerson', caption: 'customerContactPerson', hidden:true },
			  	            { field: 'customerPhone', caption: 'customerPhone', hidden:true },
			  	            { field: 'customerFax', caption: 'customerFax', hidden:true },
			  	            { field: 'customerEmail', caption: 'customerEmail', hidden:true },
			  	            { field: 'customerActiveFlag', caption: 'customerActiveFlag', hidden:true },
			  	            { field: 'customerAutoEmailFlag', caption: 'customerAutoEmailFlag',hidden:true},
			  	            { field: 'customerLockFlag', caption: 'customerLockFlag', hidden:true },
			  	            { field: 'customerSubStockitsFlag', caption: 'customerSubStockitsFlag',hidden:true},
				  	      
				  	      
			  	        ],
			  	        
			  	      multiSearch: true,
			          searches: [
			              { field: 'recid', caption: 'recid', type: 'int' },
			              { field: 'customerName', caption: 'Customer Name', type: 'text' }
			              
			          ],
			          sortData: [
			  	                 {field: 'customerName', direction: 'asc' }
			  	                 ],  
			        records:[],
			        onSelect: function(event) {
			        	event.onComplete = function () {
			        	angular.element(document.getElementById('CustomerMaster')).scope().selectCustomer(w2ui.grid.get(event.recid));
			        	//scriptSelectCompany(w2ui.grid.get(event.recid));
			        	
			    			$("#customeraccode").css("background-color", "white");
			    			$("#customeracname").css("background-color", "white");
			    			$("#cust_ledgertype").css("background-color", "white");
			    			$("#customemobile").css("background-color", "white");
			    			$("#customeremail").css("background-color", "white");
			    			$("#customer_credit").css("background-color", "white");
			    			$("#customerdays").css("background-color", "white");
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
		//loadC(config);
		
		if(!$rootScope.grid){
			   loadCustomer(config);
			  }else{
			   w2ui.grid.destroy();
			   w2ui.layout.destroy();
			   loadCustomer(config);
			   
			  }
			  GetClock();
		
		
		
		var config1 = {
			    layout: {
			        name: 'layout1',
			        padding: 0,
			        panels: [
			            { type: 'left', size: '100%'},
			            { type: 'main', minSize: 300 }
			        ]
			    },
			    grid: { 
					
			        name: 'gridL',
			        show: {
			            toolbar : false,
			            toolbarDelete: true,
						toolbarAdd : true
			        },
			        columns: [
			                { field: 'customerLicenceIndex', hidden:true },
			  	            { field: 'recid', caption: 'recid', hidden:true },
			  	            { field: 'customerLicenceID', caption: ' customerLicenceID', hidden:true },
			  	            { field: 'customerLicenceType', caption: ' Licence Type', size: '30%' },
			  	            { field: 'customerLicenceNumber', caption: ' Licence Number', size: '30%' },
			  	            { field: 'customerLicenceStartDate', caption: ' Licence Start Date', size: '30%' },
			  	            { field: 'customerLicenceEndDate', caption: ' Licence End Date', size: '30%' },
			  	          
				  	      
			  	        ],
			        records:[],
			        onUnselect:function(event) {
			        	event.onComplete = function () {
			        		//angular.copy({},angular.element(document.getElementById('CustomerMaster')).scope().custLic);
			        		angular.element(document.getElementById('CustomerMaster')).scope().custLic={};
			        		angular.element(document.getElementById('CustomerMaster')).scope().showAdd=true;
			        		angular.element(document.getElementById('CustomerMaster')).scope().showModify=false;
			        		angular.element(document.getElementById('CustomerMaster')).scope().$apply();
			        		
			        	}},
			        onSelect: function(event) {
			        	event.onComplete = function () {			      		
			        	//angular.element(document.getElementById('CustomerMaster')).scope().saveCustomerMaster(w2ui.gridL.get(event.recid));customerLicenceTypeSelected
			        	var objSelected=w2ui.gridL.get(event.recid);
			        	angular.copy(objSelected,angular.element(document.getElementById('CustomerMaster')).scope().custLic);
			        	//angular.element(document.getElementById('CustomerMaster')).scope().customerLicenceTypeSelected = $.grep(angular.element(document.getElementById('CustomerMaster')).scope().customerLicenceTypeList, function(e){ return e.id== objSelected.customerLicenceID; })[0];
			        	
			        //	angular.element(document.getElementById('CustomerMaster')).scope().customerLicenceTypeSelected=[{id:objSelected.customerLicenceID,name:objSelected.customerLicenceType}];
			                                                                                         
			        	/*angular.element(document.getElementById('CustomerMaster')).scope().showCustomerSelected.customerLicenceNumber=objSelected.customerLicenceNumber;
			        	angular.element(document.getElementById('CustomerMaster')).scope().showCustomerSelected.customerLicenceStartDate=objSelected.customerLicenceStartDate;
			        	angular.element(document.getElementById('CustomerMaster')).scope().showCustomerSelected.customerLicenceEndDate=objSelected.customerLicenceEndDate;*/
			        		
			        	
			        	
			        	angular.element(document.getElementById('CustomerMaster')).scope().showAdd=false;
			        	angular.element(document.getElementById('CustomerMaster')).scope().showModify=true;
			        	angular.element(document.getElementById('CustomerMaster')).scope().$apply();
			        	
			        	
			         //  	angular.element(document.getElementById('CustomerMaster')).scope().customerLicenceTypeSelected='';
                       /* angular.element(document.getElementById('CustomerMaster')).scope().showCustomerSelected.customerLicenceNumber='';
			           	angular.element(document.getElementById('CustomerMaster')).scope().showCustomerSelected.customerLicenceStartDate='';
			           	angular.element(document.getElementById('CustomerMaster')).scope().showCustomerSelected.customerLicenceEndDate='';*/

			        //	angular.element(document.getElementById('CustomerMaster')).scope();
			        	
			     		
			        	//angular.element(document.getElementById('CustomerMaster')).scope().customerLicenceTypeSelected = w2ui.gridL.get(w2ui.gridL.getSelection());
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
			            var records = $('#gridL_'+ obj.name +'_records');
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
			            var recEL  = $('#gridL_'+ obj.name +'_rec_'+ (ind !== null ? w2utils.escapeId(obj.records[ind].recid) : 'none'));
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
			                    $('#gridL_'+ obj.name + '_search_all').focus();
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
			                    var parent = $('#gridL_'+ this.name +'_rec_'+ w2utils.escapeId(obj.records[ind].recid)).parents('tr');
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
			                            var subgrid = $('#gridL_'+ obj.name +'_rec_'+ w2utils.escapeId(obj.records[prev].recid) +'_expanded_row').find('.w2ui-grid');
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
			                        var parent = $('#gridL_'+ obj.name +'_rec_'+ w2utils.escapeId(obj.records[ind].recid)).parents('tr');
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
			                        var subgrid = $('#gridL_'+ this.name +'_rec_'+ w2utils.escapeId(obj.records[ind2].recid) +'_expanded_row').find('.w2ui-grid');
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
			                        var parent = $('#gridL_'+ this.name +'_rec_'+ w2utils.escapeId(obj.records[ind2].recid)).parents('tr');
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
		
		
		if(!$rootScope.gridL){
			loadL(config1);
		}else{
			w2ui.gridL.destroy();
			w2ui.layout1.destroy();
			loadL(config1);
			
		}
		
		$scope.showAdd=true;
		w2ui.gridL.records=[];
		
		var json={entity:2,entityId:0,listType:2,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiCustomer/getCustomer",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			
			if(data.responseCode == 200){
				
				var respData=JSON.parse(data.responseData);
				var customerlist = respData.customerList;
				var areaList = respData.areaList;
				var salesmanList = respData.salesmanList;
				
				$scope.showCustomerList=customerlist;
				$scope.showAreaList = areaList;
				$scope.showSalesmanList = salesmanList; 
				
				w2ui.grid.records=customerlist;
				document.getElementById('tb_grid_toolbar_item_w2ui-search-advanced').remove()
				w2ui.grid.refresh();
				document.getElementById('tb_grid_toolbar_item_w2ui-column-on-off').parentNode.removeChild(document.getElementById('tb_grid_toolbar_item_w2ui-column-on-off'));
				document.getElementById('tb_grid_toolbar_item_w2ui-reload').parentNode.removeChild(document.getElementById('tb_grid_toolbar_item_w2ui-reload'));
				//document.getElementById('tb_grid_toolbar_item_w2ui-search-advanced').parentNode.removeChild(document.getElementById('tb_grid_toolbar_item_w2ui-search-advanced'));
			
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
	
	$scope.newCustomerMaster=function(){
		
		w2ui.gridL.records=[];
		w2ui.gridL.refresh();
		$scope.showCustomerSelected={};
		$scope.showCustomerSelected.customerActiveFlag=true;
		$scope.showAreaSelected={};
		$scope.showSalesmanSelected={};
		$scope.custLic={};
		//$scope.showCustomerTypeSelected={};
		$("#customeraccode").css("background-color", "white");
		$("#customeracname").css("background-color", "white");
		$("#cust_ledgertype").css("background-color", "white");
		$("#customemobile").css("background-color", "white");
		$("#customeremail").css("background-color", "white");
		$("#customer_credit").css("background-color", "white");
		$("#customerdays").css("background-color", "white");
	};
	
	$scope.saveCustomerMaster=function(selectedCustomer){
		debugger;
		var a=CustomerValidate();
		if(a==false)
		 {
		  return false;
		 }
		if(typeof selectedCustomer === "undefined"){ 
			return false;
		};

		var flag='update';
		debugger;
		if(typeof selectedCustomer.customerId === "undefined"){
			flag='new';
			$scope.showCustomerSelected.customerId=0;
			
		}
		selectedCustomer.customerName=selectedCustomer.customerAccountName;
		debugger;

		if(typeof $scope.showAreaSelected !=="undefined"){
			selectedCustomer.customerArea=$scope.showAreaSelected.areaID;
		}
		
		if(typeof $scope.showSalesmanSelected !=="undefined"){
			selectedCustomer.customerSalesman=$scope.showSalesmanSelected.salesmanID;
		}
		
		if(typeof $scope.customerTypeSelected !=="undefined"){
			selectedCustomer.customerType=$scope.customerTypeSelected.id;
		}
		
		//selectedCustomer.customerArea=$scope.customerAreaSelected.id;
		//selectedCustomer.customerSalesman=$scope.customerSalesmanSelected.id;
		if(typeof $scope.customerLedgerTypeSelected !=="undefined"){
			selectedCustomer.customerLedgerType=$scope.customerLedgerTypeSelected.id;
		}	
		
		if(typeof $scope.customerCreditTypeSelected !=="undefined"){
			selectedCustomer.customerCreditType=$scope.customerCreditTypeSelected.id;
		}
		
		if(typeof $scope.customerOpeningBalanceTypeSelected !=="undefined"){
			selectedCustomer.customerOpeningBalanceType=$scope.customerOpeningBalanceTypeSelected.id;
		}
		
		
		
		var json2=selectedCustomer;
		//Hard Coded City Object
		json2.customerCity={
				cityName:"Pune",
				cityId:10,
				cityState:{
					stateName:"Maharashtra",
					stateId:1
				}
		}
		json2.customerLicenceList=w2ui.gridL.records;
		delete json2.$$hashKey;
		json2=JSON.stringify(json2);
		var json={entity:1,entityId:0,listType:0,requestData:json2,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiCustomer/setCustomer",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var returnObj=JSON.parse(data.responseData);
				
				
				var gridObj=returnObj;
				gridObj.recid=returnObj.customerId;
				/*====================for new====================================*/
				if(flag=='new'){
					
					var gridObj=returnObj;
					gridObj.recid=returnObj.customerId;
					w2ui.grid.records.push(gridObj);
					
					//$scope.showCustomerList.push(returnObj);
					
					$scope.selectCustomer(returnObj);
					w2ui.grid.selectNone();
					
					w2ui.grid.refresh();
					alert("New customer saved successfully..!!");
				//$scope.masterCustomerList.push(returnObj);
			
					
				}else{
					
					var keepGoing = true;
					var index=null;
					angular.forEach($scope.showCustomerList, function(value,key) {
						if(keepGoing) {
							
							if(value.customerId == returnObj.customerId){
								index = key;
								keepGoing = false;
							}
							}
						}
						
					);
					$scope.showCustomerList[index]=returnObj;
					$scope.masterCustomerList[index]=returnObj;
					$scope.selectCustomer(returnObj);
					
					w2ui.grid.set(returnObj.recid,returnObj,0);
					
					w2ui.grid.selectNone();
					
					w2ui.grid.refresh();
					w2ui.grid.select(returnObj.customerId);
					
					
					alert(" customer Updated successfully..!!");
				}
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
		
		}).error(function(data, status, headers, config) {
			alert("AJAX failed in master!");
			return false;
		});



	};
	
	
	$scope.selectCustomer=function(customer){
		
		$scope.showCustomerSelected=customer;
		$rootScope.customerMasterSelected=customer;
		w2ui.gridL.selectNone();
		
		var area=$.grep($scope.showAreaList, function(e){ return e.areaID == customer.customerArea ; })[0];
		var index= $scope.showAreaList.indexOf(area);
		$scope.showAreaSelected = $scope.showAreaList[index];
		
		var salesman=$.grep($scope.showSalesmanList, function(e){ return e.salesmanID == customer.customerSalesman ; })[0];
		var index= $scope.showSalesmanList.indexOf(salesman);
		$scope.showSalesmanSelected = $scope.showSalesmanList[index];
		
		
		$scope.customerTypeSelected=$scope.customerTypeList[$scope.showCustomerSelected.customerType];
	
		$scope.customerLedgerTypeSelected=$scope.customerLedgerTypeList[$scope.showCustomerSelected.customerLedgerType];
		
		$scope.customerCreditTypeSelected = $scope.customerCreditTypeList[$scope.showCustomerSelected.customerCreditType];
		$scope.customerOpeningBalanceTypeSelected=$scope.customerOpeningBalanceTypeList[$scope.showCustomerSelected.customerOpeningBalanceType];
		$scope.customerLicenceTypeSelected=$scope.customerLicenceTypeList[$scope.showCustomerSelected.customerLicenceType];
		
		//$scope.customerLicenceTypeSelected=$scope.customerLicenceTypeList[0];
		
		w2ui.gridL.records= $scope.showCustomerSelected.customerLicenceList;
		w2ui.gridL.refresh();
		$scope.$apply();
		
	};

	
	$scope.addRecord = function()  {
	//	selectedCustomer.customerLicenceType=$scope.customerLicenceTypeSelected.id;

		/*var ljson = {recid : 1 ,customerLicenceID : $scope.customerLicenceTypeSelected.id, customerLicenceType : $scope.customerLicenceTypeSelected.name,customerLicenceNumber:$scope.showCustomerSelected.customerLicenceNumber,customerLicenceStartDate: $scope.showCustomerSelected.customerLicenceStartDate,customerLicenceEndDate:$scope.showCustomerSelected.customerLicenceEndDate};
		
		w2ui.gridL.records.push(ljson);
		w2ui.gridL.refresh();
		
		$scope.showCustomerSelected.customerLicenceNumber = '';
		$scope.showCustomerSelected.customerLicenceStartDate = '';
		$scope.showCustomerSelected.customerLicenceEndDate = '';*/
		
		/////////////////////
		if(typeof $scope.custLic.customerLicenceNumber ==="undefined" || typeof $scope.custLic.customerLicenceNumber !=="undefined" && $scope.custLic.customerLicenceNumber ==""){
			alert('Please fill valid LicenceNumber!');
			return false;
		}
		if(typeof $scope.custLic.customerLicenceStartDate ==="undefined" || typeof $scope.custLic.customerLicenceStartDate !=="undefined" && $scope.custLic.customerLicenceStartDate ==""){
			alert('Please fill valid Start Date!');
			return false;
		}
		if(typeof $scope.custLic.customerLicenceEndDate ==="undefined" || typeof $scope.custLic.customerLicenceEndDate !=="undefined" && $scope.custLic.customerLicenceEndDate ==""){
			alert('Please fill valid End Date!');
			return false;
		}
		if(typeof $scope.custLic.customerLicenceID ==="undefined" ){
			alert('Please select licence type!');
			return false;
		}
		for(i=0;i<w2ui.gridL.records.length;i++){
			if(w2ui.gridL.records[i].customerLicenceNumber==$scope.custLic.customerLicenceNumber){
				if(w2ui.gridL.records[i].customerLicenceID==$scope.custLic.customerLicenceID){
					//if(w2ui.gridL.records[i].customerLicenceStartDate==$scope.custLic.customerLicenceStartDate){
						alert('Record already present!!');
						return false;
					//}
				}
			}
		}
		$scope.custLic.customerLicenceType=$.grep($scope.customerLicenceTypeList,function(e){ return e.id == $scope.custLic.customerLicenceID;})[0].name;
		$scope.custLic.recid=w2ui.gridL.records.length+1;
		$scope.custLic.customerLicenceIndex=w2ui.gridL.records.length+1;
		w2ui.gridL.records.push($scope.custLic);
		w2ui.gridL.refresh();
		$scope.custLic={};
		//angular.copy({},$scope.custLic);
		
	}
	
	
	$scope.modifyRecord = function()
	{
		var objSelected=w2ui.gridL.get(w2ui.gridL.getSelection());
		//var ljson = {recid : objSelected.recid ,customerLicenceType : $scope.customerLicenceTypeSelected.name,customerLicenceNumber:$scope.showCustomerSelected.customerLicenceNumber,customerLicenceStartDate: $scope.showCustomerSelected.customerLicenceStartDate,customerLicenceEndDate:$scope.showCustomerSelected.customerLicenceEndDate};
		///////////////////////////////
		if(typeof $scope.custLic.customerLicenceNumber ==="undefined" || typeof $scope.custLic.customerLicenceNumber !=="undefined" && $scope.custLic.customerLicenceNumber ==""){
			alert('Please fill valid LicenceNumber!');
			return false;
		}
		if(typeof $scope.custLic.customerLicenceStartDate ==="undefined" || typeof $scope.custLic.customerLicenceStartDate !=="undefined" && $scope.custLic.customerLicenceStartDate ==""){
			alert('Please fill valid Start Date!');
			return false;
		}
		if(typeof $scope.custLic.customerLicenceEndDate ==="undefined" || typeof $scope.custLic.customerLicenceEndDate !=="undefined" && $scope.custLic.customerLicenceEndDate ==""){
			alert('Please fill valid End Date!');
			return false;
		}
		if(typeof $scope.custLic.customerLicenceID ==="undefined" ){
			alert('Please select licence type!');
			return false;
		}
		$scope.custLic.customerLicenceType=$.grep($scope.customerLicenceTypeList,function(e){ return e.id == $scope.custLic.customerLicenceID;})[0].name;
		
		for(i=0;i<w2ui.gridL.records.length;i++){
			if(w2ui.gridL.records[i].customerLicenceNumber==$scope.custLic.customerLicenceNumber){
				if(w2ui.gridL.records[i].customerLicenceID==$scope.custLic.customerLicenceID && w2ui.gridL.records[i].recid !=$scope.custLic.recid){
					//if(w2ui.gridL.records[i].customerLicenceStartDate==$scope.custLic.customerLicenceStartDate){
						alert('Record already present!!');
						return false;
					//}
				}
			}
		}
		/////////////////////////////
		w2ui.gridL.set(objSelected.recid,$scope.custLic,true);
		w2ui.gridL.refresh();
		//angular.copy({},$scope.custLic);
		
	}

	$scope.removeRecord = function()  {

		var recObj=$.grep(w2ui.gridL.records,function(e){return e.recid==w2ui.gridL.getSelection()[0]})[0];
		var index=w2ui.gridL.records.indexOf(recObj);
		w2ui.gridL.records.splice(index,1);
		for(i=0;i<w2ui.gridL.records.length;i++){
			w2ui.gridL.records.recid=i+1;
		}
		
		w2ui.gridL.refresh();
		if(w2ui.gridL.records.length == 0){
			$scope.showAdd=true;
			$scope.showModify=false;
			$scope.custLic={};
		}
		//angular.copy({},$scope.custLic);
	}


	
}]);

function CustomerValidate(){
	 flag=true;
	 if($.trim($('#customeraccode').val()).length==0){
	  $("#customeraccode").css("background-color", "#fff4eb");
	  flag=false;
	 }
	 if($.trim($('#customeracname').val()).length==0){
	  $("#customeracname").css("background-color", "#fff4eb");
	  //create error message using tooltip
	  flag=false;
	 }
	 if(typeof angular.element(document.getElementById('CustomerMaster')).scope().customerLedgerTypeSelected==="undefined"){
	  $("#cust_ledgertype").css("background-color", "#fff4eb");
	  flag=false;
	 }
	 if(typeof angular.element(document.getElementById('CustomerMaster')).scope().customerCreditTypeSelected==="undefined"){
	  $("#customer_credit").css("background-color", "#fff4eb");
	  flag=false;
	 }
	 if($.trim($('#customerdays').val()).length==0){
	  $("#customerdays").css("background-color", "#fff4eb");
	  //create error message using tooltip
	  flag=false;
	 }
	 if(angular.element(document.getElementById('CustomerMaster')).scope().errorCount==0){

	 }else{

	  flag=false;
	 }
	 return flag;
	}