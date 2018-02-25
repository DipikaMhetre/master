pharmApp.controller('ProductMasterCtrl', ['$scope','$rootScope','$http','$modal','$log','ngToast', function ($scope,$rootScope,$http, $modal, $log,ngToast) {
	$scope.masterCompanyList=[];
	$scope.masterDivisionList=[];
	$scope.showCompanyList=[];
	$scope.showDivisionList=[];
	$scope.showCompanySelected=false;
	$scope.showMasterCompanyProductList=[];
	$scope.productCategoryList=[{id:1,name:'Tablet'},{id:2,name:'Liquid'},{id:3,name:'Injection'}];	
	$scope.productFilter={};
	$scope.masterContentList={};
	$scope.spinner=true;
	$scope.filterStatus='OFF';
	$scope.grid2ElementSelected=false;
	$scope.contentTypeGeneratedList=[];
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.editable=$rootScope.editable;
	/*$scope.$watch('productFilter',function() {
	    if($scope.productFilter=={}){
	    	w2ui.grid.refresh();
	    	return false;
	    }else{
	    	$scope.gridFilter($scope.productFilter);
	    }
	});*/
	
	$scope.gridFilter=function(filterObj){
		debugger;
		var arrayFilter=[];
		var obj={};
		if(typeof filterObj.productId !== "undefined"){
			obj={ field:'productId', value:filterObj.productId, operator:'contains'};
			arrayFilter.push(obj);	
		}
		if(typeof filterObj.activeFlg !== "undefined"){
			obj={ field:'productActiveFlag', value:filterObj.activeFlg, operator:'contains'};
			arrayFilter.push(obj);   	  
		}
		if(typeof filterObj.dpcoFlg !== "undefined"){
			obj={ field:'productDPCOFlag', value:filterObj.dpcoFlg, operator:'contains'};
			arrayFilter.push(obj);	
		}
		if(typeof filterObj.narcoticsFlg !== "undefined"){
			obj={ field:'productNarcoticsFlag', value:filterObj.narcoticsFlg, operator:'contains'};
			arrayFilter.push(obj);	
		}
		if(typeof filterObj.other !== "undefined"){
			obj={ field:'productOtherInfo', value:filterObj.other, operator:'contains'};
			arrayFilter.push(obj);	
		}
		if(typeof filterObj.productName !== "undefined"){
			obj={ field:'productName', value:filterObj.productName, operator:'contains'};
			arrayFilter.push(obj);	
		}
		if(typeof filterObj.upcId !== "undefined"){
			obj={ field:'productUPCId', value:filterObj.upcId, operator:'contains'};
			arrayFilter.push(obj);	
		}/*productLockFlag*/
		if(typeof filterObj.lockFlg !== "undefined"){
			obj={ field:'productLockFlag', value:filterObj.lockFlg, operator:'contains'};
			arrayFilter.push(obj);	
		}
		if(typeof filterObj.Type !== "undefined"){
			obj={ field:'productTypeId', value:filterObj.Type, operator:'is'};
			arrayFilter.push(obj);	
		}
		
		if(arrayFilter.length != 0){
			w2ui.grid.search(arrayFilter);
			$scope.filterStatus='ON';
		}else{
			$scope.filterStatus='OFF';
		}
	};
	
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
			  	            { field: 'productName', caption: 'product Name', size: '100%',style: 'text-align: left',resizable: false,sortable: true},
			  	            { field: 'productActiveFlag', caption: 'productActiveFlag', hidden:true },
			  	            { field: 'productBox', caption: 'productBox', hidden:true },
			  	            { field: 'productCompanyId', caption: 'productCompanyId', hidden:true },
			  	            { field: 'productCompanyName', caption: 'productCompanyName', hidden:true },
			  	            { field: 'productContents', caption: 'productContents', hidden:true },
			  	            { field: 'productDPCOFlag', caption: 'productDPCOFlag', hidden:true },
			  	            { field: 'productDesc', caption: 'productDesc', hidden:true },
			  	            { field: 'productDiscount', caption: 'productDiscount', hidden:true },
			  	            { field: 'productDivisionId', caption: 'productDivisionId', hidden:true },
			  	            { field: 'productDivisionName', caption: 'productDivisionName', hidden:true },
			  	            { field: 'recid', caption: 'recid',hidden:true},
			  	            { field: 'productId', caption: 'productId',hidden:true},
			  	            { field: 'productMrp', caption: 'productMrp', hidden:true },
			  	            { field: 'productNarcoticsFlag', caption: 'productNarcoticsFlag', hidden:true },
			  	            { field: 'productOtherInfo', caption: 'productOtherInfo', hidden:true },
			  	            { field: 'productPack', caption: 'productPack', hidden:true },
			  	            { field: 'productPurchaseRate', caption: 'productPurchaseRate', hidden:true },
			  	            { field: 'productRemark', caption: 'productRemark', hidden:true },
			  	            { field: 'productSaleRate', caption: 'productSaleRate', hidden:true },
			  	            { field: 'productShelfId', caption: 'productShelfId', hidden:true },
			  	            { field: 'productTypeName', caption: 'productTypeName', hidden:true },
			  	            { field: 'productTypeId', caption: 'productTypeId', hidden:true },
			  	            { field: 'productUPCId', caption: 'productUPCId', hidden:true },
			  	            { field: 'productLockFlag', caption: 'productLockFlag', hidden:true }
			  	          
			  	        ],
			  	      multiSearch: true,
			          searches: [
			              { field: 'productId', caption: 'ProductId', type: 'int' },
			              { field: 'productName', caption: 'Product Name', type: 'text' },
			              { field: 'productTypeName', caption: 'Product Type', type: 'text' },
			              { field: 'productUPCId', caption: 'Product UpcId', type: 'text' },
			              { field: 'productActiveFlag', caption: 'Product Active Flag', type: 'text' },
			              { field: 'productDPCOFlag', caption: 'Product DPCO', type: 'text' },
			              { field: 'productNarcoticsFlag', caption: 'Product Narcotics', type: 'text' },
			              { field: 'productLockFlag', caption: 'Product Lock', type: 'text' }
			          ],
			  	      sortData: [
			  	                 {field: 'productName', direction: 'asc' }
			  	                 ],    
			  	    
			        records:[],
			        onSelect: function(event) {
			        	event.onComplete = function () {
			        	angular.element(document.getElementById('ProductMaster')).scope().selectProduct(w2ui.grid.get(event.recid));
			         $("#product_name").css("background-color", "white");
			   		 $("#productpack").css("background-color", "white");
			   		 $("#productbox").css("background-color", "white");
			        	
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
		
		
		if(!$rootScope.grid){
			loadC(config);
		}else{
			w2ui.grid.destroy();
			w2ui.layout.destroy();
			loadC(config);
			
		}
		GetClock();
		debugger;
		
		
		var json={entity:3,entityId:0,listType:2,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		//HTTP CALL FOR GETTING COMPANYLIST AND DIVISIONLIST
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiProduct/getProduct",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var resp = JSON.parse(data.responseData);
				var clist = resp.companyList;
				var dlist = resp.divisionList;
				for(i=0;i<clist.length;i++){
					clist[i].companyDivisionsList=[];
					for(j=0;j<dlist.length;j++){
						
						if(clist[i].companyId==dlist[j].divisionCompanyId){				
							clist[i].companyDivisionsList.push(dlist[j]);
						}
					}
				}
				resp.companyList=clist;	
				/*$scope.newProduct();*/
				//////////////////////////////
				w2ui.grid.selectNone();	
				$scope.showProductSelected={};
				w2ui.grid2
				w2ui.grid2.records=[];
				w2ui.grid2.refresh();
				$scope.showProductSelected.productActiveFlag=true;
				$scope.showProductSelected.productDPCOFlag=false;
				$scope.showProductSelected.productNarcoticsFlag=false;
				$scope.showProductSelected.productLockFlag=false;
				$scope.productCompanyList=$scope.showCompanyList.slice();
				$scope.productCompanySelected=$scope.showCompanySelected;				
				//////////////////////////////
				$scope.masterCompanyList=resp.companyList.slice();
				$scope.showCompanyList=resp.companyList.slice();
				document.getElementById('tb_grid_toolbar_item_w2ui-column-on-off').parentNode.removeChild(document.getElementById('tb_grid_toolbar_item_w2ui-column-on-off'));
			//	document.getElementById('tb_grid_toolbar_item_w2ui-search-advanced').parentNode.removeChild(document.getElementById('tb_grid_toolbar_item_w2ui-search-advanced'));
				document.getElementById('tb_grid_toolbar_item_w2ui-break0').parentNode.removeChild(document.getElementById('tb_grid_toolbar_item_w2ui-break0'))
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
			
        }).error(function(data, status, headers, config) {   
        	//$scope.spinner=true;
        	return false;
        });
		
		//Get ContentList
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
						toolbarAdd : false
			        },
			        columns: [
			  	            { field: 'contentName', caption: 'Content Name', size: '25%',style: 'text-align: left',resizable: false,sortable: true},
			  	            { field: 'contentDesc', caption: 'Content Desc', size: '25%',style: 'text-align: left',resizable: false,sortable: true },
			  	            { field: 'contentTypes', caption: 'Content Type', size: '25%',style: 'text-align: left',resizable: false,sortable: true},			  	            
			  	            { field: 'contentStrength', caption: 'Content Strength', size: '25%',style: 'text-align: left',resizable: false,sortable: true},
			  	            { field: 'contentId', caption: 'contentId', hidden:true },
			  	            { field: 'recid', caption: 'recid', hidden:true },
			  	            { field: 'contentActiveFlag', caption: 'contentActiveFlag', hidden:true }   
			  	        ],		      
			  	      sortData: [
			  	                 {field: 'contentName', direction: 'asc' }
			  	                 ],    
			  	    
			        records:[],
			        onSelect: function(event) {
			        	event.onComplete = function () {
			        		angular.element(document.getElementById('ProductMaster')).scope().grid2ElementSelected=true;
			        		angular.element(document.getElementById('ProductMaster')).scope().$apply();
			        	}
			        }  ,
			        onUnselect: function(event) {
			        	event.onComplete = function () {
			        		angular.element(document.getElementById('ProductMaster')).scope().grid2ElementSelected=false;
			        		angular.element(document.getElementById('ProductMaster')).scope().$apply();
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
		/*============================================================*/
		if(!$rootScope.grid2){
			loadContentGrid(config2);
		}else{
			w2ui.grid2.destroy();
			w2ui.layout2.destroy();
			loadContentGrid(config2);
			
		}
		
		json={entity:3,entityId:0,listType:3,requestData:"",supplierId:0,divisionId:0,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiProduct/getProduct",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {			
			resp=JSON.parse(data.responseData);
			$scope.masterContentList=resp.contentList;
			$scope.masterContentTypeList=resp.contentTypeList;			
			$scope.spinner=false;
        }).error(function(data, status, headers, config) {          
        	return false;
        });
		
	};
	
	$scope.onCompanySelection=function(company){
		$scope.spinner=true;
		if(company.companyId==0){		
			return false;
		}
		
		//Http Call for company product list
		$scope.showDivisionList=company.companyDivisionsList.slice();
		var allObj={divisionId:0,divisionName:'ALL'};
		$scope.showDivisionList.push(allObj);
		
		
		//var reqJSON={userId:"USER1",userPwd:"USERPWD",companyId:company.companyId,divisionId:0};
		var json={entity:3,entityId:0,listType:1,requestData:"",companyId:company.companyId,supplierId:0,divisionId:0,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiProduct/getProduct",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var resp = JSON.parse(data.responseData);
		    	w2ui.grid.records=[];
		    	$scope.showMasterCompanyProductList=resp.slice();
		    	$scope.onDivisionSelection(allObj);
	    		w2ui.grid.refresh();
	    		
	    		w2ui.grid2.refresh();
	    		$scope.spinner=false;
			}else{
				$scope.spinner=false;
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
    		
        }).error(function(data, status, headers, config) {
           
        	return false;
        });
		$scope.newProduct();
	};
	
	
	$scope.onDivisionSelection=function(division){
		if(typeof division === "undefined" ){
			return false;
		}
		else if(division.divisionId==0){
			$scope.showDivisionSelected=division;
			w2ui.grid.records=$scope.showMasterCompanyProductList.slice();
			w2ui.grid.refresh();
			/*if(w2ui.grid.records.length !=0){
				$scope.selectProduct(w2ui.grid.records[0]);
			}*/
		}else{
			debugger;
			//alert('Comapny ID :'+$scope.showCompanySelected.companyId+'\n Comapny Name :'+$scope.showCompanySelected.companyName+'\nDivision ID :'+division.divisionName);
			$scope.showDivisionSelected=division;
			var showList = $.grep($scope.showMasterCompanyProductList, function(e){ return e.productDivisionId==division.divisionId ; });
			w2ui.grid.records=showList;
			w2ui.grid.refresh();
			/*if(w2ui.grid.records.length !=0){
				$scope.selectProduct(w2ui.grid.records[0]);
			}*/
			
		}
		
		
	};
	
	$scope.onProductCompanySelection=function(company){
		$scope.productDivisionList=company.companyDivisionsList.slice();
		if($scope.productDivisionList.length>0){
			$scope.productDivisionSelected=$scope.productDivisionList[0];
		}
		
	}
	
	$scope.selectProduct=function(product){
		debugger;
		$scope.showProductSelected=product;
		var company=$.grep($scope.showCompanyList, function(e){ return e.companyId==product.productCompanyId ; })[0];
		$scope.productDivisionList=company.companyDivisionsList.slice();
		$scope.productDivisionSelected=$.grep(company.companyDivisionsList, function(e){ return e.divisionId==product.productDivisionId ; })[0];
		if(product.productContents == null){
			product.productContents=[];
		}
		w2ui.grid2.records=product.productContents;
		$scope.productCompanyList=$scope.showCompanyList;
		$scope.productCompanySelected=$.grep($scope.productCompanyList, function(e){ return e.companyId==product.productCompanyId ; })[0]
		w2ui.grid2.refresh();
		angular.element(document.getElementById('ProductMaster')).scope().$apply();
	};
	
	
	$scope.saveProduct = function(product) {
		var a=ProductValidate();
		if(a==false)
		 {
		  return false;
		 }
		$scope.spinner=true;
		//w2ui.grid.reset();
		var prevDivSelected=$scope.showDivisionSelected;
		var flag='úpdate'	
		if(typeof product.productId === "undefined"){
			flag='new'
			product.productId=0;
			
			if(typeof product.productContents ==="undefined"){
				product.productContents=[];
			}
			
		}
		product.productDivisionName=$scope.productDivisionSelected.divisionName;
		product.productDivisionId=$scope.productDivisionSelected.divisionId;
		product.productCompanyId=$scope.productCompanySelected.companyId;
		product.productCompanyName=$scope.productCompanySelected.companyName;
		product.productContents=w2ui.grid2.records;		
		delete product.expanded;
		var json=product;
		if(json.productContents.length !=0){
			
			var temp=[];
			if(product.productContents == null){
				product.productContents=[];
			}
			for(i=0;i<product.productContents.length;i++){
				
				if(product.productContents[i].contentTypes == null){
					product.productContents[i].contentTypes="";
				}
				var tempArray=product.productContents[i].contentTypes.split(',');
				temp=temp.concat(tempArray);
			};
			
			var uniqueNames = [];
			
		    for(var i in temp){
		    	temp[i] = temp[i].trim();
		        if(uniqueNames.indexOf(temp[i]) === -1){
		            uniqueNames.push(temp[i]);
		        }
		    }
		    
		    var obj=$.grep($scope.masterContentTypeList,function(e){return e.contentTypeId == product.productTypeId})[0];
		    obj.contentTypeDescription=obj.contentTypeDescription.trim();
		    if(uniqueNames.indexOf( obj.contentTypeDescription)==-1){
		    	ngToast.create({
					  className: 'warning',
					  content: '<span>You must select content types as product content type ...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
		    	return false;
		    }
		    
		}
		json=JSON.stringify(json);
		var json2={entity:1,entityId:0,listType:0,requestData:json,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiProduct/setProduct",
		    async:false,
		    data:JSON.stringify(json2),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				if(flag=='úpdate'){
					debugger;
					data=JSON.parse(data.responseData);
					var masterProductObject = $.grep($scope.showMasterCompanyProductList,function(e){return e.productId==data.productId})[0];
					var index=$scope.showMasterCompanyProductList.indexOf(masterProductObject);
					if(data.productCompanyId==$scope.showCompanySelected.companyId){
						$scope.showMasterCompanyProductList[index]=data;
						if(data.productDivisionId==prevDivSelected.divisionId || prevDivSelected.divisionId==0 ){
							$scope.onDivisionSelection(prevDivSelected);
						}
						alert('Product Saved Successfully !!');
					}else{
						$scope.showMasterCompanyProductList.splice(index,1);
						alert('Product Shift and Save Successfull!!');
					}
					
				}else{
					debugger;
					var retObj=JSON.parse(data.responseData);
					if(retObj.productCompanyId==$scope.showCompanySelected.companyId){
						$scope.showMasterCompanyProductList.push(retObj);
						if(retObj.productDivisionId==$scope.showDivisionSelected.divisionId || $scope.showDivisionSelected.divisionId==0){
							w2ui.grid.records.push(retObj);
							w2ui.grid.refresh();
							w2ui.grid.select(retObj.recid);
							alert('Product Added Successfully !');
						}else{
							alert('Product Added Successfully ! You may select that Division to See added Product!');
						}
					}else{
						$scope.newProduct();
						alert('Product Added Successfully !!');
					}
					
				}
				$scope.spinner=false;
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {
           
        	return false;
        });
		
	};
	
	$scope.removeContent = function() {
		if(!w2ui.grid2.getSelection()[0]){
			return false;
		}
		var recObj=$.grep(w2ui.grid2.records,function(e){return e.recid==w2ui.grid2.getSelection()[0]})[0];
		var index=w2ui.grid2.records.indexOf(recObj);
		w2ui.grid2.records.splice(index,1);
		w2ui.grid2.refresh();
		
	}
	

	$scope.showPopup = function() {
		/*if($scope.filterStatus=='on'){
			$scope.filterStatus='off';
			$scope.productFilter={};
			w2ui.grid.reset();
			return false;
		}*/
		$modal.open({
			templateUrl : 'productFilter.html',
			controller :ProductFilterCtrl,
			backdrop: 'static',
			size:'lg',
			windowClass: 'modal-Filter'
		}).result.then(function(result) {
			debugger;
			$scope.productFilter={};
			
			if(typeof result.productId !=="undefined" && result.productId==''){
				delete result.productId;
			}
			if(typeof result.activeFlg !=="undefined" && result.activeFlg==''){
				delete result.activeFlg;
			}
			if(typeof result.dpcoFlg !=="undefined" && result.dpcoFlg==''){
				delete result.dpcoFlg;
			}
			if(typeof result.narcoticsFlg !=="undefined" && result.narcoticsFlg==''){
				delete result.narcoticsFlg;
			}
			if(typeof result.other !=="undefined" && result.other==''){
				delete result.other;
			}
			if(typeof result.lockFlg !=="undefined" && result.lockFlg==''){
				delete result.lockFlg;
			}
			if(typeof result.Type !=="undefined" && result.Type==''){
				delete result.lockFlg;
			}
			
			$scope.productFilter=result;
			if($scope.productFilter!={}){
				$scope.gridFilter($scope.productFilter);
			}else{
				$scope.filterStatus='off';
				w2ui.grid.reset();
			}
			//var el=w2ui['grid_toolbar']; if (el) el.click('w2ui-search-advanced', event);
		});
	};
	
	$scope.showContentPopup = function(flag) {
		//$scope.filter=filter;
		$modal.open({
			templateUrl : 'contentListPopup.html',
			controller :ContentPopup,
			backdrop: 'static',
			 windowClass: 'addContent-Modal',
			resolve : {
				contentList : function() {
					return $scope.masterContentList;
				},
				flag:function() {
					return flag;
				}
			}
		}).result.then(function(result) {
			debugger;
			if(result){
				if(w2ui.grid2.get(result.recid)){
					
				}else{
					result.contentProductId=$scope.showProductSelected.productId;
					w2ui.grid2.records.push(result);
					if(typeof $scope.showProductSelected.productContents ==="undefined"){
						$scope.showProductSelected.productContents=[];
					}
					$scope.showProductSelected.productContents.push(result);
					w2ui.grid2.refresh();
					/*$http({
					    method: 'POST',
					    url: "http://localhost:8080/Purple/rest/apiCompany/apiSaveProductContent",
					    async:false,
					    data:JSON.stringify(result),
					    headers: {'Content-Type': 'application/json'}
					}).success(function(data, status, headers, config) {
						debugger;
			    		
			        }).error(function(data, status, headers, config) {
			           
			        	return false;
			        });*/
				}
			}
			
			//var el=w2ui['grid_toolbar']; if (el) el.click('w2ui-search-advanced', event);
		});
	};

	$scope.newProduct=function(){
		debugger;
		w2ui.grid.selectNone();	
		$scope.showProductSelected={};
		w2ui.grid2
		w2ui.grid2.records=[];
		w2ui.grid2.refresh();
		$scope.showProductSelected.productActiveFlag=true;
		$scope.showProductSelected.productDPCOFlag=false;
		$scope.showProductSelected.productNarcoticsFlag=false;
		$scope.showProductSelected.productLockFlag=false;
		$scope.productCompanyList=$scope.showCompanyList.slice();
		$scope.productCompanySelected=$scope.showCompanySelected;
		if(typeof $scope.productCompanySelected !=="boolean" ){
			$scope.onProductCompanySelection($scope.productCompanySelected);
		}
		$("#product_name").css("background-color", "white");
		$("#productpack").css("background-color", "white");
		$("#productbox").css("background-color", "white");
		
	};
	
	
	$scope.resetFilter=function(){
		$scope.productFilter={};
		$scope.filterStatus='OFF';
		var obj = w2ui['grid']; 
		obj.searchReset();
	};

	$scope.generateContentTypeList=function(product){
		debugger;
		$scope.contentTypeGeneratedList=[];
		var temp=[];
		if(product.productContents == null){
			product.productContents=[];
		}
		for(i=0;i<product.productContents.length;i++){
			var tempArray=product.productContents[i].contentTypes.split(',');
			temp=temp.concat(tempArray);
		};
		
		var uniqueNames = [];
		
	    for(var i in temp){
	    	temp[i] = temp[i].trim();
	        if(uniqueNames.indexOf(temp[i]) === -1){
	            uniqueNames.push(temp[i]);
	        }
	    }
		
	};

}]);

//Modal Controller
var ProductFilterCtrl = function($scope, $modalInstance, $http) {
	$scope.level="ProductFilterCtrl";
	
	$scope.possibleTimes= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
	//$scope.typeOptionList=[{id:1,name:'NS'},{id:2,name:'SD'},{id:3,name:'H1'}];
	$scope.init=function(){
		$scope.filter = angular.element(document.getElementById('ProductMaster')).scope().productFilter;
		$scope.typeOptionList=angular.element(document.getElementById('ProductMaster')).scope().masterContentTypeList;
		
		
		//code is usefu when we implement type
		//var a=$.grep($scope.typeOptionList, function(e){ return e.name==$scope.filter.Type.name ; })[0];
		//$scope.filter.Type=a;
		
	}
	
	
	
	$scope.ok = function(rec) {	
		$modalInstance.close(rec);	
	};
	$scope.clearAllFilters = function() {
		$scope.filter={};
	};
	
	$scope.cancel = function() {
		/*angular.element(document.getElementById('purch')).scope().popup=false;*/
		$modalInstance.dismiss('cancel');
	};


};
var ContentPopup = function($scope, $modalInstance, $http,$rootScope,contentList,flag) {
	$scope.level="ContentPopup";
	
	$scope.possibleTimes= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
	$scope.typeOptionList=[{id:1,name:'NS'},{id:2,name:'SD'},{id:3,name:'H1'}];
	$scope.init=function(){
		$scope.flag=flag;
		$scope.masterContentList=contentList.slice();
		
		if(flag=='edit'){
			
		}
		
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
			      
			            toolbar : true,
			            toolbarDelete: false,
						toolbarAdd : false
			        },
			       
			        columns: [
			                  { field: 'contentName', caption: 'Content Name', size: '50%',style: 'text-align: left',resizable: false,sortable: true},
				  	            { field: 'contentDesc', caption: 'Content Desc', size: '50%',style: 'text-align: left',resizable: false,sortable: true },				  	            	
				  	            { field: 'contentId', caption: 'contentId', hidden:true },
				  	            { field: 'recid', caption: 'recid', hidden:true },
				  	            { field: 'contentTypes', caption: 'contentTypes', hidden:true },
				  	            { field: 'contentActiveFlag', caption: 'contentActiveFlag', hidden:true } 
			  	        ],
			  	      multiSearch: true,
			          searches: [
			              { field: 'productId', caption: 'ProductId', type: 'int' },
			              { field: 'productName', caption: 'Product Name', type: 'text' },
			              { field: 'productTypeName', caption: 'Product Type', type: 'text' },
			              { field: 'productUPCId', caption: 'Product UpcId', type: 'text' },
			              { field: 'productActiveFlag', caption: 'Product Active Flag', type: 'text' },
			              { field: 'productDPCOFlag', caption: 'Product DPCO', type: 'text' },
			              { field: 'productNarcoticsFlag', caption: 'Product Narcotics', type: 'text' },
			              
			          ],
			  	      sortData: [
			  	                 {field: 'productName', direction: 'asc' }
			  	                 ],    
			  	    
			        records:[],
			        onSelect: function(event) {
			        	event.onComplete = function () {
			        		debugger;
			        		angular.element(document.getElementById('contentListPopup.html')).scope().selectContent(w2ui.grid3.get(event.recid));
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
			                        debugger;
			                        //grid3
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
			                    if(rec){
			                    	angular.element(document.getElementById('grid3')).scope().ok(rec);
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
		
		
		if(!$rootScope.grid3){
			loadContentpopupGrid(config3);
		}else{
			w2ui.grid3.destroy();
			w2ui.layout3.destroy();
			loadContentpopupGrid(config3);
			
		}
		w2ui.grid3.records=$scope.masterContentList;		
		w2ui.grid3.refresh();
		if(flag=='edit'){
			$scope.showContentSelected=w2ui.grid2.get(w2ui.grid2.getSelection());
			$scope.$apply();
		}
		
		
	};
	
	
	$rootScope.selectContent = function(content){
		
		$scope.showContentSelected=content;
		debugger;
		$scope.$apply();
	};
	

	$scope.addContent = function(contentRecord,flag) {	
		debugger;
		if(flag=='new'){
			debugger;
			if(typeof contentRecord === "undefined" || typeof contentRecord.recid === "undefined"  ){
				alert('please Select Content !!!!');
				return false;
			}
			if(!w2ui.grid2.get(contentRecord.recid)){			
				w2ui.grid2.records.push(contentRecord);
				w2ui.grid2.refresh();
			}else{
				alert('Already Present !!!');
			}
		}else{
			if(typeof contentRecord === "undefined" || typeof contentRecord.recid === "undefined"  ){
				alert('please Select Content !!!!');
				return false;
			}
			w2ui.grid2.set(contentRecord.recid,contentRecord,true);
			w2ui.grid2.refresh();
			$modalInstance.dismiss('cancel');
		}
	};
	
	
	$scope.ok = function(rec) {	
		$modalInstance.close(rec);	
	};
	$scope.clearAllFilters = function() {
		$scope.filter={};
	};
	
	$scope.cancel = function() {
		//angular.element(document.getElementById('purch')).scope().popup=false;
		$modalInstance.dismiss('cancel');
	};


};

function ProductValidate()
{
    flag=true;
    if($('#productpack').val().length<=0)
   {
   $("#productpack").css("background-color", "#fff4eb");
        //create error message using tooltip
   flag=false;
   }
if($('#productbox').val().length<=0)
{
   $("#productbox").css("background-color", "#fff4eb");
     //create error message using tooltip
   flag=false;
  }
if($('#product_name').val().length<=0)
{
   $("#product_name").css("background-color", "#fff4eb");
     //create error message using tooltip
   flag=false;
  }
/*if($('#productpack').val().length<=0)
{
   $("#productpack").css("background-color", "#fff4eb");
     //create error message using tooltip
   flag=false;
  }
if($('#productbox').val().length<=0)
{
   $("#productbox").css("background-color", "#fff4eb");
     //create error message using tooltip
   flag=false;
  }
if($('#discount').val().length<=0)
{
   $("#discount").css("background-color", "#fff4eb");
     //create error message using tooltip
   flag=false;
  }
if($('#mrp').val().length<=0)
{
   $("#mrp").css("background-color", "#fff4eb");
     //create error message using tooltip
   flag=false;
  }
if($('#purchaserate').val().length<=0)
{
   $("#purchaserate").css("background-color", "#fff4eb");
     //create error message using tooltip
   flag=false;
  }

if($('#salerate').val().length<=0)
{
   $("#salerate").css("background-color", "#fff4eb");
     //create error message using tooltip
   flag=false;
  }
*/

      return flag;
}
