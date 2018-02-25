pharmApp.controller('CompanyMasterCtrl', ['$scope','$rootScope','$http','$modal','$log', function ($scope,$rootScope,$http, $modal, $log) {
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.showCompanySelected={};
	$scope.showCompanyList={};		
	$scope.masterCompanyList={};
	$scope.errorCount=0;
	
	$scope.companyActiveSupplierId=0;
	$scope.stockCalOptionList=[{id:0,name:'Purchase'},{id:1,name:'Trade'},{id:2,name:'Selling'}]
	
	$scope.payTermsOptionList=[{id:0,name:'CASH'},{id:1,name:'CREDIT'}]
	
	$scope.payTermsOptionSelected=$scope.payTermsOptionList[0];
	$scope.stockCalOptionSelected=$scope.stockCalOptionList[0];
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
			            toolbar : false,
			            toolbarDelete: true,
						toolbarAdd : true
			        },
			        columns: [
			  	            { field: 'companyName', caption: 'Company Name', size: '100%',style: 'text-align: left',resizable: false,sortable: true},
			  	            { field: 'companyActiveFlag', caption: 'companyActiveFlag', hidden:true },
			  	            { field: 'companyAddressLine1', caption: 'companyAddressLine1', hidden:true },
			  	            { field: 'companyAddressLine2', caption: 'companyAddressLine2', hidden:true },
			  	            { field: 'companyCity', caption: 'companyCity', hidden:true },
			  	            { field: 'companyCode', caption: 'companyCode', hidden:true },
			  	            { field: 'companyContactPerson', caption: 'companyContactPerson', hidden:true },
			  	            { field: 'companyDivisionList', caption: 'companyDivisionList', hidden:true },
			  	            { field: 'companyEmail', caption: 'companyEmail', hidden:true },
			  	            { field: 'companyEmailPOFlag', caption: 'companyEmailPOFlag', hidden:true },
			  	            { field: 'companyFax', caption: 'companyFax', hidden:true },
			  	            { field: 'recid', caption: 'companyId',hidden:true},
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
			  	            { field: 'yrLastSale', caption: 'yrLastSale', hidden:true },
			  	        ],
			  	      sortData: [
			  	                 {field: 'companyName', direction: 'asc' }
			  	                 ],    
			  	    
			        records:[],
			        onSelect: function(event) {
			        	event.onComplete = function () {
			        	angular.element(document.getElementById('CompanyMaster')).scope().selectCompany(w2ui.grid.get(event.recid));
			        	//scriptSelectCompany(w2ui.grid.get(event.recid));
			        	$("#company_name").css("background-color", "white");
			        	$("#mobile").css("background-color", "white");
			        	$("#email").css("background-color", "white");
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
		/*============================================================*/
		
		
		
		if(typeof w2ui.grid !=="undefined"){
			w2ui.grid.destroy();
			w2ui.layout.destroy();
		}
		loadC(config);


		
		GetClock();
		/*=================================================================*/
		/*if (typeof angular.element(document.getElementById('AllMainCtrl')).scope().$parent.showCompanySelected === "undefined") {
		    alert("something is undefined");
		}else{
			$scope.showCompanySelected=angular.element(document.getElementById('AllMainCtrl')).scope().$parent.companyMasterSelected;
		}*/
		
			
		var json={entity:2,entityId:0,listType:2,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiCompany2/getCompany2",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			
			if(data.responseCode == 200){
					var respData=JSON.parse(data.responseData);
					var clist = respData.companyList;
					var slist = respData.supplierList;
					for(i=0;i<clist.length;i++){
						clist[i].companySuppliersList=[];
						for(j=0;j<slist.length;j++){
							
							if(clist[i].companyId==slist[j].supplierCompanyId){				
								clist[i].companySuppliersList.push(slist[j]);
							}
						}
					}
					$scope.showCompanyList=clist;				
					$scope.masterCompanyList=clist;//Backup for compare edited
					var records=[];
					for(i=0;i<$scope.showCompanyList.length;i++){
						records[i]=$scope.showCompanyList[i];
						records[i].recid=$scope.showCompanyList[i].companyId;
						
					}
					w2ui.grid.records=records;
					w2ui.grid.refresh();
					if (typeof $rootScope.companyMasterSelected === "undefined") {
						
					}else{
						var company = $.grep($scope.masterCompanyList, function(e){ return e.companyId == $rootScope.companyMasterSelected.companyId; })[0];
						
						w2ui.grid.select(company.companyId);
					}
					
					$scope.newCompanyMaster();
			}else{
				//alert('Purpleaid Error Manager \n'+data.responseCode);
				var msg = 'Purpleaid Error Manager \n'+data.responseCode;
				//w2ui.w2confirm(msg, function (btn) { console.log(btn); });
				w2alert(msg);
			}
		
        }).error(function(data, status, headers, config) {          
        	return false;
        });	
		
	};
	
	$scope.newCompanyMaster=function(){
		$scope.showCompanySelected={};
		$scope.showCompanySelected.companyActiveFlag=true;
		$("#company_name").css("background-color", "white");
		$("#mobile").css("background-color", "white");
		$("#email").css("background-color", "white");
				
	};
	
	$scope.saveCompanyMaster=function(selectedCompany){
		debugger;
		var a=CompanyValidate();
		if(a==false)
			 {
			  return false;
		}
		$scope.spinner=true;
		if(typeof selectedCompany === "undefined"){ 
			$scope.spinner=false;
			return false;
		};

		var flag='update';
		debugger;
		if(typeof selectedCompany.companyId === "undefined"){
			flag='new';
			$scope.showCompanySelected.companyId=0;
		}
		debugger;

		
		selectedCompany.companyPaymentTerms=$scope.payTermsOptionSelected.id;
		selectedCompany.companyStockCalculationMode=$scope.stockCalOptionSelected.id;
		var json2=selectedCompany;
		var bakupSuppList=selectedCompany.companySuppliersList;
		//Hard Coded City Object
		json2.companyCity={
				cityName:"Pune",
				cityId:10,
				cityState:{
					stateName:"Maharashtra",
					stateId:1
				}
		}
		delete json2.$$hashKey;
		delete json2.companySuppliersList;
		json2.companyActiveSupplierId=$scope.companyActiveSupplierId;
		json2=JSON.stringify(json2)
		var jsonReq={entity:1,entityId:0,listType:0,requestData:json2,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiCompany2/setCompany2",
			async:false,
			data:JSON.stringify(jsonReq),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var returnObj=JSON.parse(data.responseData);
				returnObj.companySuppliersList=bakupSuppList;
				var gridObj=returnObj;
				gridObj.recid=returnObj.companyId;
				/*====================for new====================================*/
				if(flag=='new'){
					$scope.showCompanyList.push(returnObj);
					var gridObj=returnObj;
					gridObj.recid=returnObj.companyId;
					w2ui.grid.records.push(gridObj);
					
					//$scope.showDivisionList.push(returnObj);
					$scope.selectCompany(returnObj);
					
					$scope.masterCompanyList.push(returnObj);
					w2ui.grid.selectNone();
					
					w2ui.grid.refresh();
					w2ui.grid.select(returnObj.companyId);
				}else{
					
					var keepGoing = true;
					var index=null;
					angular.forEach($scope.showCompanyList, function(value,key) {
						if(keepGoing) {
							if(value.companyId == returnObj.companyId){
								index = key;
								keepGoing = false;
							}
						}
						
					});
					
					$scope.showCompanyList[index]=returnObj;
					$scope.masterCompanyList[index]=returnObj;
					$scope.selectCompany(returnObj);
					w2ui.grid.set(returnObj.recid,returnObj,0);
					w2ui.grid.selectNone();
					
					w2ui.grid.refresh();
					w2ui.grid.select(returnObj.companyId);
					$scope.spinner=false;
				}
			
			}else{
				$scope.selectCompany($scope.masterObj);
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}

		}).error(function(data, status, headers, config) {
			alert("AJAX failed in master!");
			$scope.spinner=false;
			return false;
		});



	};
	
	
	$scope.selectCompany=function(company){
		
		$scope.showCompanySelected=company;
		$rootScope.companyMasterSelected=company;
		if(typeof company.companySuppliersList !== "undefined" && company.companySuppliersList.length>0){
			var suppIndex = company.companySuppliersList.indexOf($.grep(company.companySuppliersList, function(e){ return e.supplierSetAsDefaultFlag == true; })[0]);
			$scope.companyActiveSupplierId=company.companySuppliersList[suppIndex].supplierId;
		}else{
			$scope.companyActiveSupplierId=0;
		}
		$scope.stockCalOptionSelected=$scope.stockCalOptionList[$scope.showCompanySelected.companyStockCalculationMode];
		$scope.payTermsOptionSelected=$scope.payTermsOptionList[$scope.showCompanySelected.companyPaymentTerms];
		$scope.masterObj= angular.copy(company);
		if(!$scope.$$phase) {
			$scope.$apply();
		}
		
	};

	$scope.changeDefaultSupplier=function(supplier){
		
		debugger;
		if(supplier.supplierSetAsDefaultFlag){
			return false;
		}
		
		var suppIndex=$scope.showCompanySelected.companySuppliersList.indexOf(supplier);
		for(i=0;i<$scope.showCompanySelected.companySuppliersList.length;i++){
			$scope.showCompanySelected.companySuppliersList[i].supplierSetAsDefaultFlag=false;
			document.getElementById($scope.showCompanySelected.companySuppliersList[i].supplierName).className='btn btn-default input-sm opt_btn_small ng-binding';
		}
		$scope.showCompanySelected.companySuppliersList[suppIndex].supplierSetAsDefaultFlag=true;
		document.getElementById(supplier.supplierName).className='btn btn-default input-sm opt_btn_small flagselected ng-binding';
		$scope.companyActiveSupplierId=supplier.supplierId;
		/*for(i=0;i<$scope.showCompanyList[i].companySuppliersList.length){
			
		}
		var i=$scope.showCompanyList.indexOf($scope.showCompanySelected);
		var j=$scope.showCompanyList[i].companySuppliersList.indexOf(supplier);
		$scope.showCompanyList[i].companySuppliersList[j].supplierSetAsDefaultFlag=true;
		USEFUL CODE
		*/
		
		
	}



	
}]);

function CompanyValidate(){
	flag=true;
	 if($.trim($('#company_name').val()).length==0){
		$("#company_name").css("background-color", "#fff4eb");
		flag=false;
	} 
	if(angular.element(document.getElementById('CompanyMaster')).scope().errorCount==0){
	}else{
		flag=false;
	}
	return flag;

}

function hi(){
	alert('hi');
}