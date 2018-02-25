pharmApp.controller('StockManagerCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout', function ($scope,$rootScope,$http, $modal, $log,$timeout) {
	$scope.productGrid=false;
	$scope.toggle=false;
	$scope.companyBatchList=[];
	$scope.companyProductList=[];
	$scope.batchSelected=false;
	$scope.lockedStatus=false;
	$scope.activeStatus=false;
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.editable=$rootScope.editable;
	$scope.$watch('lockedStatus',function() {
		
	    if($scope.lockedStatus){
	    	$scope.lockedFlag='ON';
	    }else{
	    	$scope.lockedFlag='OFF';
	    }
	});
	$scope.$watch('productGrid',function() {
		//$timeout(function() {
			  // anything you want can go here and will safely be run on the next digest.
			//$scope.$apply(productGrid);
			//})
		
	});
	
	$scope.$watch('activeStatus',function() {
	    if($scope.activeStatus){
	    	$scope.activeFlag='ON';
	    }else{
	    	$scope.activeFlag='OFF';
	    }
	});
	
	
	$scope.switchProductGridFlag=function(){
		$scope.productGrid=!$scope.productGrid;
	};
	
	$scope.buttonColorChange=function(id){
		var flag = false;
		var enabled='btn opt_btn_small myButton';
		var disabled='btn opt_btn_small myButton1';
		
		if($scope.productGrid || !$scope.batchSelected){
			flag = true;//disabled true			
			$('#'+id).removeClass(enabled).addClass(disabled);
		}else{
			$('#'+id).removeClass(disabled).addClass(enabled);//enabled
		}
		return flag;
	};
	
	$scope.productButtonColorChange=function(id){
		var flag = false;
		var enabled='btn opt_btn_small myButton';
		var disabled='btn opt_btn_small myButton1';
		
		if(!$scope.productGrid /*|| w2ui.grid4.getSelection().length == 0*/){
			flag = true;//disabled true			
			$('#'+id).removeClass(enabled).addClass(disabled);
		}else{
			$('#'+id).removeClass(disabled).addClass(enabled);//enabled
		}
		return flag;
	};
	
	/*$scope.$watch('w2ui.grid4.getSelection()',function() {
		alert('lool');
	    if(w2ui.grid4.getSelection().length==0){
	    	$scope.productActive=false;
	    }else{
	    	$scope.productActive=true;
	    }
	});*/
	$scope.init = function(){
		/*===========================*/
		/*===========================*/
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
		                 
		                 { field: 'recid', caption: 'recid', hidden:true},
			              { field: 'divisionCode', hidden:true},
			              { field: 'divisionCompanyId', hidden:true},
			              { field: 'divisionCode', hidden:true},
			              { field: 'divisionId', hidden:true},
			              { field: 'divisionName', caption: 'Division Name', size: '100%', resizable: true, sortable: true },
			              { field: 'productList', hidden:true}
		  	        ],
		        records:[],
		        onSelect: function(event) {
		        	event.onComplete = function () {		        		
		        		angular.element(document.getElementById('StockManager')).scope().onDivisionSelection(w2ui.grid.get(event.recid));
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
				loadA(config);
			}else{
				w2ui.grid.destroy();
				w2ui.layout.destroy();
				loadA(config);
				
		}
		/*===========================*/
		/*===========================*/
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
						toolbar : true,
						toolbarDelete: false,
						toolbarAdd : false
					},
					columns: [
					          { field: 'grProductBatchProductId', caption: 'ProductId', size: '7%',style: 'text-align: left',resizable: false,sortable: true},
					          { field: 'grProductBatchProductName', caption: 'Product Name', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
					          { field: 'grProductBatchNo', caption: 'Batch#', size: '7%',style: 'text-align: left',resizable: false,sortable: true},			  	            
					          { field: 'grProductBatchDivisionName', caption: 'Division Name', size: '7%',style: 'text-align: left',resizable: false,sortable: true},
					          { field: 'stock', hidden:true},
					          { field: 'freeStock', hidden:true},
					          { field: 'quantity', caption: 'Quantity', size: '7%',style: 'text-align: left',resizable: false,sortable: true},
					          { field: 'free', caption: 'Free', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
					          { field: 'grProductBatchMRP', caption: 'MRP', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
					          { field: 'grProductBatchPurchaseRate', caption: 'Purchase rate', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
					          { field: 'grProductBatchVAT', caption: 'VAT', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
					          { field: 'grProductBatchSellRate', caption: 'Sell Rate', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
					          { field: 'grProductBatchTaxID', caption: 'TaxCode', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
					          { field: 'isScheme', caption: 'Scheme', size: '7%',style: 'text-align: left',resizable: false,sortable: true },	         
					          { field: 'grProductBatchActiveFlag', caption: 'Active', size: '7%',style: 'text-align: left',resizable: false,sortable: true,editable: { type: 'checkbox' } },
					          { field: 'grProductBatchLockFlag', caption: 'Lock', size: '7%',style: 'text-align: left',resizable: false,sortable: true,editable: { type: 'checkbox' } },
					          { field: 'breakage', caption: 'recid', hidden:true },
					          { field: 'cotransfer', caption: 'recid', hidden:true },
					          { field: 'expiry', caption: 'recid', hidden:true },
					          
					          { field: 'grProductBatchActiveId', caption: 'recid', hidden:true },
					          { field: 'grProductBatchDivisionId', caption: 'recid', hidden:true },
					          { field: 'grProductBatchExpiryDate', caption: 'recid', hidden:true },
					          { field: 'grProductBatchGrId', caption: 'recid', hidden:true },
					          { field: 'grProductBatchPurchaseDate', caption: 'recid', hidden:true },
					          { field: 'grProductBatchRemark', caption: 'recid', hidden:true },
					          { field: 'grProductBatchTrade', caption: 'recid', hidden:true },
					          { field: 'grProductBatchTradeDiscount', caption: 'recid', hidden:true },
					         			    
					          { field: 'recid', caption: 'recid', hidden:true }
					          
					          ],
					          searches: [
							              { field: 'grProductBatchProductName', caption: 'Product Name', type: 'text' },
							              { field: 'grProductBatchNo', caption: 'Batch No', type: 'text' },
							              { field: 'free', caption: 'Free', type: 'int' },
							              { field: 'grProductBatchMRP', caption: 'Mrp', type: 'int' },
							              { field: 'grProductBatchPurchaseRate', caption: 'Purchase Rate', type: 'text' },
							              { field: 'grProductBatchSellRate', caption: 'Sale Rate', type: 'text' },
							              { field: 'grProductBatchActiveFlag', caption: 'Batch Active', type: 'text' },
							              { field: 'grProductBatchLockFlag', caption: 'Batch Lock', type: 'text' }
							          ],
							          
				          onSelect: function(event) {
						        	event.onComplete = function () {
						        		
						        		angular.element(document.getElementById('StockManager')).scope().showRecordSelected=w2ui.grid2.get(event.recid);
						        		angular.element(document.getElementById('StockManager')).scope().batchSelected=true;
						        		angular.element(document.getElementById('StockManager')).scope().$apply();
						        	//scriptSelectCompany(w2ui.grid.get(event.recid));
						        	}
						        } ,	
						        onUnselect: function(event) {
						        	event.onComplete = function () {
						        		
						        		angular.element(document.getElementById('StockManager')).scope().batchSelected=false;
						        		angular.element(document.getElementById('StockManager')).scope().$apply();
						        	//scriptSelectCompany(w2ui.grid.get(event.recid));
						        	}
						        } ,	
						        
					          sortData: [
					                     {field: 'contentName', direction: 'asc' }
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
		
		/*===========================*/
		/*===========================*/
		/*===========================*/
		/*===========================*/
		var config4 = {
				/*layout: {
					name: 'layout4',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%',resizable: true},
					         { type: 'main' }
					          { type: 'left', size: '100%', resizable: true, minSize: '100%' },
					          { type: 'main', minSize: '100%' }
					         ]
				},*/
				grid: { 

					name: 'grid4',
					show: {
						toolbar : false,
						toolbarDelete: false,
						toolbarAdd : false,
						selectColumn: true
					},
					columns: [
					          /*{ field: 'productId', caption: 'ProductId', size: '16%',style: 'text-align: left',resizable: false,sortable: true},
					          { field: 'productName', caption: 'Product Name', size: '20%',style: 'text-align: left',resizable: false,sortable: true },					      			  	            
					          { field: 'productDivisionName', caption: 'Division Name', size: '16%',style: 'text-align: left',resizable: false,sortable: true},
					          { field: 'productBox', caption: 'Box', size: '16%',style: 'text-align: left',resizable: false,sortable: true},
					          { field: 'productActiveFlag', hidden:true },
					          { field: 'productCategory', hidden:true },
					          { field: 'productCompanyId', hidden:true },
					          { field: 'productDPCOFlag', hidden:true },
					          { field: 'productDPCOrate', hidden:true },
					          { field: 'productDiscount', hidden:true },
					          { field: 'productLockFlag', hidden:true },
					          { field: 'productManualDPCOFlag', hidden:true },
					          { field: 'productMrp', caption: 'Division Name', size: '16%',style: 'text-align: left',resizable: false,sortable: true },
					          { field: 'productNarcoticsFlag', hidden:true },
					          { field: 'productOtherInfo', hidden:true },
					          { field: 'productPack',  caption: 'Box', size: '16%',style: 'text-align: left',resizable: false,sortable: true},
					          { field: 'productShelfId', hidden:true },
					          { field: 'productTaxCodeID', hidden:true },
					          { field: 'productTypeId', hidden:true },
					          { field: 'productUPCId', hidden:true },					          
					   		  { field: 'productBatchList', caption: 'recid', hidden:true },
					          { field: 'recid', caption: 'recid', hidden:true }
					          //{ field: 'contentActiveFlag', caption: 'contentActiveFlag', hidden:true }   
					          //======
					          
*/					          
						          { field: 'grProductBatchProductId', caption: 'ProductId', size: '7%',style: 'text-align: left',resizable: false,sortable: true},
						          { field: 'grProductBatchProductName', caption: 'Product Name', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
						          { field: 'grProductBatchNo', caption: 'Batch#', size: '7%',style: 'text-align: left',resizable: false,sortable: true},			  	            
						          { field: 'grProductBatchDivisionName', caption: 'Division Name', size: '7%',style: 'text-align: left',resizable: false,sortable: true},
						          { field: 'quantity', caption: 'Quantity', size: '7%',style: 'text-align: left',resizable: false,sortable: true},
						          { field: 'free', caption: 'Free', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
						          { field: 'freeStock', caption: 'recid', hidden:true },
						          { field: 'stock', caption: 'recid', hidden:true },
						          { field: 'grProductBatchMRP', caption: 'MRP', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
						          { field: 'grProductBatchPurchaseRate', caption: 'Purchase rate', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
						          { field: 'grProductBatchVAT', caption: 'VAT', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
						          { field: 'grProductBatchSellRate', caption: 'Sell Rate', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
						          { field: 'grProductBatchTaxID', caption: 'TaxCode', size: '7%',style: 'text-align: left',resizable: false,sortable: true },
						          { field: 'isScheme', caption: 'Scheme', size: '7%',style: 'text-align: left',resizable: false,sortable: true },	         
						          { field: 'grProductBatchProductActiveFlag', caption: 'Active', size: '7%',style: 'text-align: left',resizable: false,sortable: true,editable: { type: 'checkbox' } },
						          { field: 'grProductBatchProductLockFlag', caption: 'Lock', size: '7%',style: 'text-align: left',resizable: false,sortable: true,editable: { type: 'checkbox' } },
						          { field: 'breakage', caption: 'recid', hidden:true },
						          { field: 'cotransfer', caption: 'recid', hidden:true },
						          { field: 'expiry', caption: 'recid', hidden:true },
						          
						          { field: 'grProductBatchActiveId', caption: 'recid', hidden:true },
						          { field: 'grProductBatchDivisionId', caption: 'recid', hidden:true },
						          { field: 'grProductBatchExpiryDate', caption: 'recid', hidden:true },
						          { field: 'grProductBatchGrId', caption: 'recid', hidden:true },
						          { field: 'grProductBatchPurchaseDate', caption: 'recid', hidden:true },
						          { field: 'grProductBatchRemark', caption: 'recid', hidden:true },
						          { field: 'grProductBatchTrade', caption: 'recid', hidden:true },
						          { field: 'grProductBatchTradeDiscount', caption: 'recid', hidden:true },
						          					    
						          { field: 'recid', caption: 'recid', hidden:true }
					          
					          ],	
					          onSelect: function(event) {
						        	event.onComplete = function () {
						        		angular.element(document.getElementById('StockManager')).scope().showRecordSelected=w2ui.grid2.get(event.recid);
						        	//scriptSelectCompany(w2ui.grid.get(event.recid));
						        	}
						        } ,	          
					          sortData: [
					                     {field: 'contentName', direction: 'asc' }
					                     ],    

					                     records:[],
					                     onSelect: function(event) {
					                    	 event.onComplete = function () {
					                    		 //angular.element(document.getElementById('ProductMaster')).scope().grid2ElementSelected=true;
					                    		 
					                    	 }
					                     }  ,
					                     onUnselect: function(event) {
					                    	 event.onComplete = function () {
					                    		// angular.element(document.getElementById('ProductMaster')).scope().grid2ElementSelected=false;
					                    		 
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

		/*if(!$rootScope.grid4){
			loadGrid4(config4);
		}else{
			w2ui.grid4.destroy();
			w2ui.layout4.destroy();
			loadGrid4(config4);

		}*/
		
		
		/*===========================*/
		/*===========================*/
		var json={entity:3,entityId:0,listType:1,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,companyId:0,grDate:0};
		//HTTP CALL FOR GETTING CompanyList enclosed division 
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiStockManager/getStockManager",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				$scope.showCompanyList=[];
				angular.copy(respData,$scope.showCompanyList);
				//$scope.onCompanySelection($scope.showCompanyList[0]);
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
		$scope.buttonColorChange('BatchScheme');
		$scope.buttonColorChange('ChangeBatchDetails');
		$scope.buttonColorChange('StockAdjustments');
		$scope.buttonColorChange('TMBatch');
		$scope.productButtonColorChange('ReassignProduct');
		
	};
	
	$scope.onCompanySelection=function(companySelected){
		w2ui.grid2.records=[];
		$scope.companyBatchList=[];
		$scope.companyProductList=[];
		w2ui.grid4.records=[];
		w2ui.grid2.refresh();
		w2ui.grid4.refresh();
		$scope.showCompanySelected=companySelected;
		$scope.showDivisionList=[];
		angular.copy(companySelected.companyDivisionsList,$scope.showDivisionList);
		$scope.showDivisionList.unshift({recid:5000,divisionId:0,divisionName:'All'});
		
		angular.copy($scope.showDivisionList,w2ui.grid.records);
		w2ui.grid.refresh();
		
		
		var json={entity:3,entityId:0,listType:2,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,companyId:companySelected.companyId,grDate:0};
		//HTTP CALL FOR GETTING ProductList and BatchList 
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiStockManager/getStockManager",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);			
				angular.copy(respData.batchList,$scope.companyBatchList);
				angular.copy(respData.batchList,w2ui.grid2.records);
				w2ui.grid2.refresh();
				angular.copy(respData.productList,$scope.companyProductList);
				angular.copy(respData.productList,w2ui.grid4.records);
				w2ui.grid4.refresh();
				//$scope.onCompanySelection($scope.showCompanyList[0]);
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
		
		
	};
	
	$scope.onDivisionSelection=function(divisionSelected){
		if(divisionSelected.divisionId==0){
			angular.copy($scope.companyBatchList,w2ui.grid2.records);
			angular.copy($scope.companyProductList,w2ui.grid4.records);
			w2ui.grid2.refresh();
			w2ui.grid4.refresh();
			
		}else{
			$scope.divisionBatchList=[];
			$scope.divisionProductList=[];
			for(i=0;i<$scope.companyBatchList.length;i++){
				if($scope.companyBatchList[i].grProductBatchDivisionId==divisionSelected.divisionId){
					$scope.divisionBatchList.push($scope.companyBatchList[i]);
				}
				
			}
			
			for(i=0;i<$scope.companyProductList.length;i++){
				if($scope.companyProductList[i].grProductBatchDivisionId==divisionSelected.divisionId){
					$scope.divisionProductList.push($scope.companyProductList[i]);
				}
				
			}
			
			angular.copy($scope.divisionBatchList,w2ui.grid2.records);
			angular.copy($scope.divisionProductList,w2ui.grid4.records);
			w2ui.grid2.refresh();
			w2ui.grid4.refresh();
		}
		/*var obj={};
		obj.productBatch={};
		$scope.showDivisionSelected=divisionSelected;		
		//angular.copy(divisionSelected.showDivisionList,w2ui.grid2.records);
		$scope.showProductList=[];
		
		for(i=0;i<divisionSelected.productList.length;i++){
			for(j=0;j<divisionSelected.productList[i].productBatchList.length;j++){
				obj=new Object();
				
				angular.copy(divisionSelected.productList[i],obj);
				obj.productBatch={};
				angular.copy(divisionSelected.productList[i].productBatchList[j],obj.productBatch);
				obj.recid=obj.productBatch.grProductBatchId;
				$scope.showProductList.push(obj);
			}
			
		}
		angular.copy($scope.showProductList,w2ui.grid2.records);
		w2ui.grid2.refresh();
		
	
		$scope.producList=[];
		for(i=0;i<divisionSelected.productList.length;i++){
			var obj=divisionSelected.productList[i];
			obj.recid=obj.productId;
			$scope.producList.push(obj);
		}
		
		angular.copy($scope.producList,w2ui.grid4.records);
		w2ui.grid4.refresh();*/
		
		
		
	};
	
	$scope.switchGrid = function(){
		//alert('SG EXecu');
		$scope.switchProductGridFlag();
		if(typeof w2ui.grid.getSelection()!=="undefined" && w2ui.grid.getSelection()[0]!=5000){
			angular.copy($scope.divisionBatchList,w2ui.grid2.records);
			angular.copy($scope.divisionProductList,w2ui.grid4.records);
			w2ui.grid2.refresh();
			w2ui.grid4.refresh();
		}else{
			angular.copy($scope.companyBatchList,w2ui.grid2.records);
			angular.copy($scope.companyProductList,w2ui.grid4.records);
			w2ui.grid2.refresh();
			w2ui.grid4.refresh();
		}
		//
	};
	
	$scope.showBatchSchemePopup = function(){
		$modal.open({
			template :'<div ng-init="init()" id="SM_BatchScheme" class="grayBG"><div class="container lightBox_manageProductScheme"><div class="row topblueStrip""><h6 class="fieldsTop_Spacing"><span class="topblueStripText">Batch Scheme</span></h6></div><div class="row"><h5><span class="submenuBlue_heading">Scheme Summary</span></h5><hr class="horizontal_line"></div><div class="row fieldsSpacing"><div class="col-md-3 col_3_xs"><div class="row"><div class=" col-md-4"><span class="control-label">Product</span></div><div class="col-md-8"><input type="text" class="form-control input-sm"readonly="readonly"ng-model="popupActiveBatch.grProductBatchProductName"value={{popupActiveBatch.grProductBatchProductName}}></div></div></div><div class="col-md-3 col_3_sm"><div class="row"><div class=" col-md-4"><span class="control-label">Product&nbsp;Name</span></div><div class="col-md-8"><input type="text" class="form-control input-sm"ng-model="popupActiveBatch.grProductBatchProductName"value={{popupActiveBatch.grProductBatchProductName}}readonly="readonly"></div></div></div><div class="col-md-3 col_3_md"><div class="row"><div class="col-md-4"><span class="control-label">Batch#</span></div><div class="col-md-8"><input type="text" class="form-control input-sm "ng-model="popupActiveBatch.grProductBatchNo"value={{popupActiveBatch.grProductBatchNo}} readonly="readonly"></div></div></div><div class="col-md-3 col_3_lg"><div class="row"><div class="col-md-5"><span class="control-label">Pack</span></div><div class="col-md-7"><input type="text" class="form-control input-sm textRight "value="" readonly="readonly"></div></div></div></div><div class="row fieldsSpacing"><div class="col-md-3 col_3_xs"><div class="row"><div class=" col-md-4"><span class="control-label">Stock</span></div><div class="col-md-8"><input type="text" class="form-control input-sm textRight"ng-model="popupActiveBatch.quantity"value={{popupActiveBatch.quantity}} readonly="readonly"></div></div></div><div class="col-md-3 col_3_sm"><div class="row"><div class=" col-md-4"><span class="control-label">Free&nbsp;Stock</span></div><div class="col-md-8"><input type="text" class="form-control input-sm textRight"ng-model="popupActiveBatch.free"value={{popupActiveBatch.freeStock}} readonly="readonly"></div></div></div><div class="col-md-3 col_3_md"><div class="row"><div class=" col-md-4"><span class="control-label">Stock&nbsp;Available</span></div><div class="col-md-8"><input type="text" class="form-control input-sm textRight"ng-model="popupActiveBatch.stock"value={{popupActiveBatch.stock}} readonly="readonly"></div></div></div><div class="col-md-3 col_3_lg"><div class="row"><div class=" col-md-5"><span class="control-label">Free&nbsp;Stock&nbsp;Available</span></div><div class="col-md-7"><input type="text" class="form-control input-sm textRight"ng-model="popupActiveBatch.freeStock"value={{popupActiveBatch.freeStock}} readonly="readonly"></div></div></div></div><div class="row fieldsSpacing"><div class="col-md-3 col_3_xs"><div class="row"><div class=" col-md-4"><span class="control-label">Start&nbsp;Date</span></div><div class="col-md-8"><input type="eu-date1" id="scheme_start_date"name="scheme_start_date" class="form-control input-sm textCenter"tabindex="1" ng-model="showBatchScheme.batchSchemeStartDate"value={{showBatchScheme.batchSchemeStartDate}}></div></div></div><div class="col-md-3 col_3_sm"><div class="row"><div class=" col-md-4"><span class="control-label">End&nbsp;Date</span></div><div class="col-md-8"><input type="eu-date2" id="scheme_end_date" name="scheme_end_date"class="form-control input-sm textCenter"ng-model="showBatchScheme.batchSchemeEndDate"value={{showBatchScheme.batchSchemeEndDate}} tabindex="2"></div></div></div><div class="col-md-3 col_3_md"><div class="row"><div class="col-md-4"><span class="control-label">Min&nbsp;Stock</span></div><div class="col-md-8"><input type="text" id="scheme_min_stock" name="scheme_min_stock"class="form-control input-sm textRight"ng-model="showBatchScheme.batchSchemeMinStock"value={{showBatchScheme.batchSchemeMinStock}} tabindex="3"></div></div></div></div><div class="row fieldsSpacing"><div class=" col-md-1 " style="width: 7%;"><span class="control-label">Remark</span></div><div class="col-md-11 " style="width: 93%;"><input type="text" id="scheme_remark" name="scheme_remark"class="form-control input-sm" tabindex="4"ng-model="showBatchScheme.batchSchemeRemark"value={{showBatchScheme.batchSchemeRemark}}></div></div><div class="row"><h5><span class="submenuBlue_heading">Scheme Details</span></h5><hr class="horizontal_line"></div><div class="row fieldsSpacing"><div class="col-md-3 col_3_xs"><div class="row"><div class=" col-md-4"><span class="control-label">Quantity</span></div><div class="col-md-8"><input type="text"  id="scheme_quantity1"name="scheme_quantity1" class="form-control input-sm textRight"tabindex="5" ng-model="showBatchScheme.Q1"value={{showBatchScheme.Q1}} onclick="Purplevalidator(\'scheme_quantity1\',2,\'SM_BatchScheme\',\' \')"onfocus="Purplevalidator(\'scheme_quantity1\',2,\'SM_BatchScheme\',\'\');"></div></div></div><div class="col-md-3 col_3_sm"><div class="row"><div class=" col-md-4"><span class="control-label">Free</span></div><div class="col-md-8"><input type="text"  id="scheme_free1"name="scheme_free1" class="form-control input-sm textRight"ng-model="showBatchScheme.F1"value={{showBatchScheme.F1}}tabindex="6" onclick="Purplevalidator(\'scheme_free1\',2,\'SM_BatchScheme\',\' \')"onfocus="Purplevalidator(\'scheme_free1\',2,\'SM_BatchScheme\',\'\');"></div></div></div></div><div class="row fieldsSpacing"><div class="col-md-3 col_3_xs"><div class="row"><div class=" col-md-4"><span class="control-label">Quantity</span></div><div class="col-md-8"><input type="text" id="scheme_quantity2" name="scheme_quantity2"class="form-control input-sm textRight" tabindex="7"ng-model="showBatchScheme.Q2" value={{showBatchScheme.Q2}} onclick="Purplevalidator(\'scheme_quantity2\',2,\'SM_BatchScheme\',\' \')"onfocus="Purplevalidator(\'scheme_quantity2\',2,\'SM_BatchScheme\',\'\');"></div></div></div><div class="col-md-3 col_3_sm"><div class="row"><div class=" col-md-4"><span class="control-label">Free</span></div><div class="col-md-8"><input type="text" id="scheme_free2" name="scheme_free2"class="form-control input-sm textRight"ng-model="showBatchScheme.F2"value={{showBatchScheme.F2}}tabindex="8" onclick="Purplevalidator(\'scheme_free2\',2,\'SM_BatchScheme\',\' \')"onfocus="Purplevalidator(\'scheme_free2\',2,\'SM_BatchScheme\',\'\');"></div></div></div></div><div class="row fieldsSpacing"><div class="col-md-3 col_3_xs"><div class="row"><div class=" col-md-4"><span class="control-label">Quantity</span></div><div class="col-md-8"><input type="text" id="scheme_quantity3" name="scheme_quantity3"class="form-control input-sm textRight" tabindex="9"ng-model="showBatchScheme.Q3" value={{showBatchScheme.Q4}} onclick="Purplevalidator(\'scheme_quantity3\',2,\'SM_BatchScheme\',\' \')"onfocus="Purplevalidator(\'scheme_quantity3\',2,\'SM_BatchScheme\',\'\');"></div></div></div><div class="col-md-3 col_3_sm"><div class="row"><div class=" col-md-4"><span class="control-label">Free</span></div><div class="col-md-8"><input type="text" id="scheme_free3" name="scheme_free3"class="form-control input-sm textRight"ng-model="showBatchScheme.F3"value={{showBatchScheme.F3}}tabindex="10" onclick="Purplevalidator(\'scheme_free3\',2,\'SM_BatchScheme\',\' \')"onfocus="Purplevalidator(\'scheme_free3\',2,\'SM_BatchScheme\',\'\');"></div></div></div></div><div class="row"><h5><span class="submenuBlue_heading">Purchase History</span></h5><hr class="horizontal_line"></div><div class="row fieldsSpacing"><!--=============GRID========== --><div id="grid3" tabindex="-1" class="batchSchemeGrid"></div><!--=============GRID========== --></div><div class="row"><h5><span class="submenuBlue_heading">Scheme Settings</span></h5><hr class="horizontal_line"></div><div class="row"><!-- popupActiveBatch --><span class="col-md-2"> <input class="checkBox"type="checkbox"ng-value="{{showBatchScheme.batchSchemePBASchemeLockFlag}}"ng-model="showBatchScheme.batchSchemePBASchemeLockFlag"tabindex="11"> <span>Scheme Lock</span></span></div><div class="row textRight fieldsBot_Spacing"><button class="btn canclebtnSize" ng-click="cancel()">Cancel</button><button class="btn okbtnSize" ng-click="saveScheme()">Save</button></div></div></div><script type="text/javascript"> var month = (new Date()).getMonth() + 1; var year = (new Date()).getFullYear(); // EU Common Format $("input[type=eu-date1]").w2field("date", { format: "d/m/yyyy", end: $("input[type=eu-date2]") }); $("input[type=eu-date2]").w2field("date", { format: "d/m/yyyy", start: $("input[type=eu-date1]") }); $("input[type=eu-time]").w2field("time", { format: "h24" }); $("input[type=eu-timeA]").w2field("time", { format: "h24", start: "8:00 am", end: "4:30 pm" }); </script><script>$(document).ready(function(){$("#scheme_min_stock").allowNumbersOnly();$("#scheme_quantity1").allowNumbersOnly();$("#scheme_free1").allowNumbersOnly();$("#scheme_quantity2").allowNumbersOnly();$("#scheme_free2").allowNumbersOnly();$("#scheme_quantity3").allowNumbersOnly();$("#scheme_free3").allowNumbersOnly()});</script><script type="text/javascript">$(document).ready(function(){ $("#scheme_quantity1").keypress(function(){ $("#scheme_quantity1").css("background-color", "white"); }); $("#scheme_free1").keypress(function(){ $("#scheme_free1").css("background-color", "white"); });$("#scheme_quantity2").keypress(function(){ $("#scheme_quantity2").css("background-color", "white"); }); $("#scheme_free2").keypress(function(){ $("#scheme_free2").css("background-color", "white"); $("#scheme_quantity3").keypress(function(){ $("#scheme_quantity3").css("background-color", "white"); }); $("#scheme_free3").keypress(function(){ $("#scheme_free3").css("background-color", "white"); });}); });</script>',
			controller :'SMBatchSchemeCtrl',
			backdrop: 'static',
			size:'lg',
			//windowClass: 'stockManager_batchSchemePopup_Model',
			/*resolve : {
				noteType : function() {
					return $scope.type;
				}
			}	*/	
		}).result.then(function(result) {
			
			
		});
	};
	
	$scope.showChangeBatchDetailsPopup = function(){
		$modal.open({
			template :'<div ng-init="init()" id="SM_ChangeBatchDetails" class="grayBG"> <div class="container stockManagerPopup_s"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Change Batch Details</span> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Batch Summary</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class=" col-md-2"> <span class="control-label">Product</span> </div> <div class="col-md-10"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="popupRecievedBatch.grProductBatchProductName" value={{popupRecievedBatch.grProductBatchProductName}}> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Batch#</span> </div> <div class="col-md-8"> <input type="text" id="changeBatch_batch_id" required="required" tabindex="1" name="changeBatch_batch_id" class="form-control input-sm" allow-alphanumericwithspace ng-model="popupRecievedBatch.grProductBatchNo" value={{popupRecievedBatch.grProductBatchNo}}> </div> </div> </div> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Expiry</span> </div> <div class="col-md-8"> <input type="eu-date" id="changeBatch_expiry" name="changeBatch_expiry" required="required" tabindex="2" class="form-control input-sm textCenter" ng-model="popupRecievedBatch.grProductBatchExpiryDate" value={{popupRecievedBatch.grProductBatchExpiryDate}}> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Stock/Quantity</span> </div> <div class="col-md-8"> <input type="text" class="form-control input-sm textRight" readonly="readonly" ng-model="popupRecievedBatch.stock" value={{popupRecievedBatch.stock}}> </div> </div> </div> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Free&nbsp;Stock</span> </div> <div class="col-md-8"> <input type="text" class="form-control input-sm textRight" value="" readonly="readonly" ng-model="popupRecievedBatch.freeStock" value={{popupRecievedBatch.freeStock}}> </div> </div> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Batch Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">MRP</span> </div> <div class="col-md-8"> <input type="text" id="changeBatch_mrp" name="changeBatch_mrp" tabindex="3" class="form-control input-sm textRight" ng-model="popupRecievedBatch.grProductBatchMRP" allow-numberswithdot value={{popupRecievedBatch.grProductBatchMRP}} required onclick="Purplevalidator(\'changeBatch_mrp\',2,\'SM_ChangeBatchDetails\',\' \')" onfocus="Purplevalidator(\'changeBatch_mrp\',2,\'SM_ChangeBatchDetails\',\'\');"> </div> </div> </div> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Trade</span> </div> <div class="col-md-8"> <input type="text" id="changeBatch_trade" name="changeBatch_trade" tabindex="4" class="form-control input-sm textRight" allow-numberswithdot ng-model="popupRecievedBatch.grProductBatchTrade" value={{popupRecievedBatch.grProductBatchTrade}} required onclick="Purplevalidator(\'changeBatch_trade\',2,\'SM_ChangeBatchDetails\',\' \')" onfocus="Purplevalidator(\'changeBatch_trade\',2,\'SM_ChangeBatchDetails\',\'\');"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Purchase&nbsp;Rate</span> </div> <div class="col-md-8"> <input type="text" id="changeBatch_purchase_rate" name="changeBatch_purchase_rate" tabindex="5" allow-numberswithdot class="form-control input-sm textRight" ng-model="popupRecievedBatch.grProductBatchPurchaseRate" value={{popupRecievedBatch.grProductBatchPurchaseRate}} required onclick="Purplevalidator(\'changeBatch_purchase_rate\',2,\'SM_ChangeBatchDetails\',\' \')" onfocus="Purplevalidator(\'changeBatch_purchase_rate\',2,\'SM_ChangeBatchDetails\',\'\');"> </div> </div> </div> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Selling&nbsp;Rate</span> </div> <div class="col-md-8"> <input type="text" id="changeBatch_selling_rate" name="changeBatch_selling_rate" allow-numberswithdot tabindex="6" class="form-control input-sm textRight" ng-model="popupRecievedBatch.grProductBatchSellRate" value={{popupRecievedBatch.grProductBatchSellRate}} required onclick="Purplevalidator(\'changeBatch_selling_rate\',2,\'SM_ChangeBatchDetails\',\' \')" onfocus="Purplevalidator(\'changeBatch_selling_rate\',2,\'SM_ChangeBatchDetails\',\'\');"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Margin&nbsp;%</span> </div> <div class="col-md-8"> <input type="text" class="form-control input-sm textRight" value="{{((popupRecievedBatch.grProductBatchSellRate - popupRecievedBatch.grProductBatchPurchaseRate )/popupRecievedBatch.grProductBatchPurchaseRate) * 100}}" readonly="readonly"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-2 "> <span class="control-label">Remark</span> </div> <div class="col-md-10"> <input type="text" id="changeBatch_remark" name="changeBatch_remark" tabindex="7" class="form-control input-sm" tabindex="4" ng-model="popupRecievedBatch.grProductBatchRemark" value={{popupRecievedBatch.grProductBatchRemark}}> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Batch Settings</span> </h5> <hr class="horizontal_line"> </div> <div class="row"> <span class="col-md-2"> <input class="checkBox" type="checkbox" ng-model="popupRecievedBatch.grProductBatchActiveFlag" ng-value={{popupRecievedBatch.grProductBatchActiveFlag}}><span>Active</span></span> <span class="col-md-2"> <input class="checkBox" type="checkbox" ng-model="popupRecievedBatch.grProductBatchLockFlag" tabindex="9" ng-value={{popupRecievedBatch.grProductBatchLockFlag}}><span>Locked</span></span> </div> <div class="row fieldsBot_Spacing"> <div class="col-md-3"> <input class="checkBox" type="checkbox" tabindex="10" ng-model="popupRecievedBatch.grProductBatchIsDeleted" ng-value={{popupRecievedBatch.grProductBatchIsDeleted}}> <spanclass="highlight_red">Delete</span> </div> <div class="col-md-9 textRight"> <button class="btn canclebtnSize" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize " ng-click="saveBatchChanged()">Save</button> </div> </div> </div> </div><script type="text/javascript">$(document).ready(function() {$("#changeBatch_mrp").keypress(function() {$("#changeBatch_mrp").css("background-color", "white");});$("#changeBatch_trade").keypress(function() {$("#changeBatch_trade").css("background-color", "white");});$("#changeBatch_purchase_rate").keypress(function() {$("#email").css("background-color", "white");});$("#changeBatch_purchase_rate").keypress(function(){ $("#changeBatch_purchase_rate").css("background-color", "white"); }); $("#changeBatch_selling_rate").keypress(function(){ $("#changeBatch_selling_rate").css("background-color", "white"); });});</script> ',     
			controller :'SMChangeBatchDetailsCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'stockManager_ChangeBatchDetailsPopup_Model',
			/*resolve : {
				noteType : function() {
					return $scope.type;
				}
			}	*/	
		}).result.then(function(result) {
			
			
		});
	};
	
	$scope.showStockAdjustmentPopup = function(){
		$modal.open({
			template :'<div ng-init="init()" id="SM_StockAdjustment" class="grayBG"> <div class="container stockManagerPopup_s"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Stock Adjustments</span> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Batch Summary</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class=" col-md-2"> <span class="control-label">Product</span> </div> <div class="col-md-10"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="popupRecievedBatch.grProductBatchProductName" value={{popupRecievedBatch.grProductBatchProductName}}> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Batch#</span> </div> <div class="col-md-8"> <input type="text" class="form-control input-sm" readonly ng-model="popupRecievedBatch.grProductBatchNo" value={{popupRecievedBatch.grProductBatchNo}}> </div> </div> </div> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Expiry</span> </div> <div class="col-md-8"> <input type="text" class="form-control input-sm textCenter" readonly ng-model="popupRecievedBatch.grProductBatchExpiryDate" value={{popupRecievedBatch.grProductBatchExpiryDate}}> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Stock/Quantity</span> </div> <div class="col-md-8"> <input type="text" class="form-control input-sm textRight" readonly="readonly" ng-model="popupRecievedBatch.stock" value={{popupRecievedBatch.stock}}> </div> </div> </div> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Free&nbsp;Stock</span> </div> <div class="col-md-8"> <input type="text" class="form-control input-sm textRight" readonly="readonly" ng-model="popupRecievedBatch.freeStock" value={{popupRecievedBatch.freeStock}}> </div> </div> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Batch Stock Adjustments</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsBot_Spacing"> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Adjust</span> </div> <div class="col-md-8"> <select class="form-control input-sm" ng-options="opt.id as opt.name for opt in stockAdjustmentOptionList" ng-model="popupRecievedBatch.stockAdjustmentOption" value={{popupRecievedBatch.stockAdjustmentOption}} tabindex="1"> </select> </div> </div> </div> </div> <div class="row"> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Expiry</span> </div> <div class="col-md-8"> <input type="text" class="form-control input-sm textRight" tabindex="2" ng-model="popupRecievedBatch.expiry" id="stockAdj_expiry" name="stockAdj_expiry" allow-numbers value={{popupRecievedBatch.expiry}}> </div> </div> </div> </div> <div class="row stockAdjORpos"> <div class="col-md-offset-6"> <span>OR</span> </div> </div> <div class="row"> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Breakage</span> </div> <div class="col-md-8"> <input type="text" tabindex="3" id="stockAdj_breakage" name="stockAdj_breakage" class="form-control input-sm textRight" allow-numbers ng-model="popupRecievedBatch.breakage" value={{popupRecievedBatch.breakage}}> </div> </div> </div> </div> <div class="row stockAdjORpos"> <div class="col-md-offset-6"> <span>OR</span> </div> </div> <div class="row fieldsBot_Spacing"> <div class="col-md-6"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Co.&nbsp;Transfer</span> </div> <div class="col-md-8"> <input type="text" tabindex="4" id="stockAdj_company_transfer" name="stockAdj_company_transfer" allow-numbers class="form-control input-sm textRight" ng-model="popupRecievedBatch.cotransfer" value={{popupRecievedBatch.cotransfer}}> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-2 "> <span class="control-label">Remarks</span> </div> <div class="col-md-10"> <input type="text" tabindex="5" id="stockAdj_remark" name="stockAdj_remark" class="form-control input-sm" tabindex="4" ng-model="popupRecievedBatch.grProductBatchRemark" value={{popupRecievedBatch.grProductBatchRemark}}> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Batch Settings</span> </h5> <hr class="horizontal_line"> </div> <div class="row"> <span class="col-md-2"> <input class="checkBox" type="checkbox" tabindex="6" ng-model="popupRecievedBatch.grProductBatchActiveFlag" ng-value="{{popupRecievedBatch.grProductBatchActiveFlag}}"> <span>Active</span> </span> <span class="col-md-2"> <input class="checkBox" tabindex="7" type="checkbox" ng-model="popupRecievedBatch.grProductBatchLockFlag" ng-value="{{popupRecievedBatch.grProductBatchLockFlag}}"> <span>Locked</span> </span> </div> <div class="row textRight fieldsBot_Spacing"> <button class="btn canclebtnSize" tabindex="8" ng-click="cancel()">Cancel</button> <button tabindex="9" class="btn okbtnSize " ng-click="saveStockAdjust()">Save</button> </div> </div> </div> <script type="text/javascript">$(document).ready(function() {$("#stockAdj_breakage").keypress(function() {$("#stockAdj_breakage").css("background-color", "white");});$("#stockAdj_company_transfer").keypress(function() {$("#stockAdj_company_transfer").css("background-color", "white");});});</script> ',  
			controller :'SMStockAdjustCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'stockManager_ChangeBatchDetailsPopup_Model',
			/*resolve : {
				noteType : function() {
					return $scope.type;
				}
			}	*/	
		}).result.then(function(result) {
			
			
		});
	};
	
	$scope.showTransMergeBatchPopup = function(){
		$modal.open({
			template :'<div onload="myrender()" ng-init="init()" id="SM_TransMerge" class="grayBG"> <div class="container stockManagerPopup_TMB"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Transfer Merge Batch</span> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Product</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class=" col-md-2 TMB_row_xs"> <span class="control-label">Product</span> </div> <div class="col-md-10 TMB_row_xl"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="popupRecievedBatch.grProductBatchProductName" value="{{popupRecievedBatch.grProductBatchProductName}}"> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Batch Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class=" col-md-4 textCenter"> <span class="control-label highlight_LightGrey">SOURCE</span> </div> <div class=" col-md-4 textCenter"> <span class="control-label highlight_gold">BEFORE TRANSFER</span> </div> <div class=" col-md-4 textCenter"> <span class="control-label highlight_LightGrey">TARGET</span> </div> </div> <div class="row fieldsBot_Spacing"> <div class=" col-md-5 smTransferMergeBatchRow1"> <div class="row fieldsSpacing "> <div class="form-group"> <span class="col-md-4 TMB_row_sm control-label">Batch#</span> <div class="col-md-8 TMB_row_lg"> <input type="text" tabindex="1" class="form-control input-sm" readonly="readonly" ng-model="sourceBatch.grProductBatchNo" value="{{sourceBatch.grProductBatchNo}}"> </div> </div> </div> <div class="row fieldsSpacing "> <div class="form-group"> <span class="col-md-4 TMB_row_sm control-label">Expiry</span> <div class="col-md-8 TMB_row_lg"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="sourceBatch.grProductBatchExpiryDate" value="{{sourceBatch.grProductBatchExpiryDate}}"> </div> </div> </div> <div class="row fieldsSpacing "> <div class="form-group"> <span class="col-md-4 TMB_row_sm control-label">Stock</span> <div class="col-md-8 TMB_row_lg"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="sourceBatch.stock" value="{{sourceBatch.stock}}"> </div> </div> </div> <div class="row fieldsSpacing "> <div class="form-group"> <span class="col-md-4 TMB_row_sm control-label">Free&nbsp;Stock</span> <div class="col-md-8 TMB_row_lg"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="sourceBatch.freeStock" value="{{sourceBatch.freeStock}}"> </div> </div> </div> </div> <div class="col-md-1 transferMergeBatch_sectionline3 smTransferMergeBatchRow2"></div> <div class="col-md-1 smTransferMergeBatchRow2"></div> <div class=" col-md-5 smTransferMergeBatchRow1"> <div class="row fieldsSpacing "> <div class="form-group"> <span class="col-md-4 TMB_row_sm control-label">Batch#</span> <div class="col-md-8 TMB_row_lg"> <input type="text" class="form-control input-sm" ng-model="targetBatch.grProductBatchNo" value="{{targetBatch.grProductBatchNo}}" ng-focus="getTargetBatch()"> </div> </div> </div> <div class="row fieldsSpacing "> <div class="form-group"> <span class="col-md-4 TMB_row_sm control-label">Expiry</span> <div class="col-md-8 TMB_row_lg"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="targetBatch.grProductBatchExpiryDate" value="{{targetBatch.grProductBatchExpiryDate}}"> </div> </div> </div> <div class="row fieldsSpacing "> <div class="form-group"> <span class="col-md-4 TMB_row_sm control-label">Quantity</span> <div class="col-md-8 TMB_row_lg"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="targetBatch.stock" value="{{targetBatch.stock}}"> </div> </div> </div> <div class="row fieldsSpacing "> <div class="form-group"> <span class="col-md-4 TMB_row_sm control-label">Free&nbsp;Stock</span> <div class="col-md-8 TMB_row_lg"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="targetBatch.freeStock" value="{{targetBatch.freeStock}}"> </div> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-4"></div> <div class=" col-md-4 textCenter"> <span class="control-label highlight_gold">TRANSFER QUANTITY</span> </div> </div> <div class="row fieldsBot_Spacing"> <div class=" col-md-5 smTransferMergeBatchRow1"> <div class="row "> <div class="form-group"> <span class="col-md-4 TMB_row_sm control-label">Remove&nbsp;Stock</span> <div class="col-md-4 TMB_row_sm1"> <input type="text" tabindex="2" id="mergeBatch_quantity1" name="mergeBatch_quantity1" class="form-control input-sm" ng-model="removeStock" value="{{removeStock}}" allow-numbers onclick="Purplevalidator(\'mergeBatch_quantity1\',2,\'SM_TransMerge\',\' \')" onfocus="Purplevalidator(\'mergeBatch_quantity1\',2,\'SM_TransMerge\',\'\');" > </div> <div class="col-md-4 TMB_row_sm1"> <input type="text" tabindex="3" id="mergeBatch_freeStock1" name="mergeBatch_freeStock1" class="form-control input-sm" allow-numbers ng-model="removeFreeStock" value="{{removeFreeStock}}"> </div> </div> </div> <div class="row "> <div class="form-group"> <div class="col-md-4 TMB_row_sm"></div> <div class="col-md-4 TMB_row_sm1 textCenter text_inputfieldPos"> <span class="highlight_LightGrey">Quantity</span> </div> <div class="col-md-4 TMB_row_sm1 textCenter text_inputfieldPos"> <span class="highlight_LightGrey">Free&nbsp;Stock</span> </div> </div> </div> </div> <div class="col-md-1 transferMergeBatch_sectionline1 smTransferMergeBatchRow2"></div> <div class="col-md-1 smTransferMergeBatchRow2"></div> <div class=" col-md-5 smTransferMergeBatchRow1"> <div class="row "> <div class="form-group"> <span class="col-md-4 TMB_row_sm control-label">Add&nbsp;Stock</span> <div class="col-md-4 TMB_row_sm1"> <input type="text" tabindex="4" id="mergeBatch_quantity2" name="mergeBatch_quantity2" class="form-control input-sm" ng-model="removeStock" value="{{removeStock}}" allow-numbers onclick="Purplevalidator(\'mergeBatch_quantity2\',2,\'SM_TransMerge\',\' \')" onfocus="Purplevalidator(\'mergeBatch_quantity2\',2,\'SM_TransMerge\',\'\');"> </div> <div class="col-md-4 TMB_row_sm1"> <input type="text" tabindex="6" id="mergeBatch_freeStock2" name="mergeBatch_freeStock2" class="form-control input-sm" allow-numbers ng-model="removeFreeStock" value="{{removeFreeStock}}"> </div> </div> </div> <div class="row "> <div class="form-group"> <div class="col-md-4 TMB_row_sm"></div> <div class="col-md-4 TMB_row_sm1 textCenter text_inputfieldPos"> <span class="highlight_LightGrey">Quantity</span> </div> <div class="col-md-4 TMB_row_sm1 textCenter text_inputfieldPos"> <span class="highlight_LightGrey">Free&nbsp;Stock</span> </div> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-4"></div> <div class=" col-md-4 textCenter"> <span class="control-label highlight_gold">AFTER TRANSFER</span> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-5 smTransferMergeBatchRow1"> <div class="row fieldsSpacing "> <div class="form-group"> <span class="col-md-4 TMB_row_sm control-label">Quantity</span> <div class="col-md-8 TMB_row_lg"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="sourceNewStock" value="{{sourceNewStock}}"> </div> </div> </div> <div class="row fieldsSpacing "> <div class="form-group"> <span class="col-md-4 TMB_row_sm control-label">Free&nbsp;Stock</span> <div class="col-md-8 TMB_row_lg"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="sourceNewFreeStock" value="{{sourceNewFreeStock}}"> </div> </div> </div> </div> <div class="col-md-1 transferMergeBatch_sectionline2 smTransferMergeBatchRow2"></div> <div class="col-md-1 smTransferMergeBatchRow2"></div> <div class=" col-md-5 smTransferMergeBatchRow1"> <div class="row fieldsSpacing "> <div class="form-group"> <span class="col-md-4 TMB_row_sm control-label">Quantity</span> <div class="col-md-8 TMB_row_lg"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="targetNewStock" value="{{targetNewStock}}"> </div> </div> </div> <div class="row fieldsSpacing "> <div class="form-group"> <span class="col-md-4 TMB_row_sm control-label">Free&nbsp;Stock</span> <div class="col-md-8 TMB_row_lg"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="targetNewFreeStock" value="{{targetNewFreeStock}}"> </div> </div> </div> </div> </div> <div class="row fieldsBot_Spacing"> <div class=" col-md-2 TMB_row_xs"> <span class="control-label">Remarks</span> </div> <div class="col-md-10 TMB_row_xl"> <input type="text" tabindex="7" id="mergeBatch_remarks" name="mergeBatch_remarks" class="form-control input-sm"> </div> </div> <div class="row textRight fieldsBot_Spacing"> <button class="btn canclebtnSize" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize " ng-click="transfer()">Save</button> </div> </div> </div><script type="text/javascript">$(document).ready(function() {$("#mergeBatch_quantity2").keypress(function() {$("#mergeBatch_quantity2").css("background-color", "white");});$("#mergeBatch_quantity1").keypress(function() {$("#mergeBatch_quantity1").css("background-color", "white");});});</script> ', 
			controller :'SMTransMergeCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'stockManager_Medium_Popup_Model',
			/*resolve : {
				noteType : function() {
					return $scope.type;
				}
			}	*/	
		}).result.then(function(result) {
			
			
		});
	};
	
	$scope.showReassignProductPopup = function(){
		$modal.open({
			template :'<div ng-init="init()" id="SM_ReassignProduct" class="grayBG"> <div class="container stockManagerPopup_TMB"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Reassign Product</span> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Product List</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <!-- =============GRID========== --> <div id="grid5" tabindex="-1" style="width: 95%; margin-left: 15px; height: 250px;"></div> <!-- =============GRID========== --> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Target Company</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-6"> <div class="row"> <div class=" col-md-3"> <span class="control-label">Company</span> </div> <div class="col-md-9"> <select type="text" id="sm_companyee" tabindex="1" class="form-control input-sm" ng-options="op as op.companyName for op in showCList" ng-model="showCompanySelected" ng-change="onCompSelection(showCompanySelected)"></select> </div> </div> </div> <div class="col-md-6"> <div class="row"> <div class=" col-md-3"> <span class="control-label">Division</span> </div> <div class="col-md-9"> <select id="sm_div" class="form-control productboxSize input-sm" tabindex="2" ng-options="op as op.divisionName for op in showDList" ng-model="showDivisionSelected"> </select> </div> </div> </div> </div> <div class="row fieldsBot_Spacing"> <div class=" col-md-1"> <span class="control-label">Remarks</span> </div> <div class="col-md-11"> <input type="text" tabindex="3" class="form-control input-sm stockMang_RP_remark"> </div> </div> <div class="row textRight fieldsBot_Spacing"> <button class="btn canclebtnSize" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" ng-click="reassign()">Save</button> </div> </div> </div> <script type="text/javascript">$(document).ready(function(){ $("#sm_div").click(function(){ $("#sm_div").css("background-color", "white"); }); $("#sm_companyee").click(function(){ $("#sm_companyee").css("background-color", "white"); }); });</script> ',   
			controller :'SMProductReassignCtrl',
			backdrop: 'static', 
			size:'lg',
			windowClass: 'stockManager_Medium_Popup_Model',
			/*resolve : {
				noteType : function() {
					return $scope.type;
				}
			}	*/	
		}).result.then(function(result) {
			
			if(result==true){
				$scope.onCompanySelection($scope.showCompanySelected);
			}
		});
	};
	
	$scope.refreshAll = function(){
		location.reload();
	};
	
	$scope.filterActiveAndLock = function(){
		var arrayFilter=[];
		var obj={};
		if($scope.productGrid){
			if($scope.lockedStatus && $scope.activeStatus){
				obj={ field:'grProductBatchProductActiveFlag', value:$scope.activeStatus, operator:'contains'};
				arrayFilter.push(obj);
				obj={ field:'grProductBatchProductLockFlag', value:$scope.lockedStatus, operator:'contains'};
				arrayFilter.push(obj);
				w2ui.grid4.search(arrayFilter);
			}else if($scope.lockedStatus && !$scope.activeStatus){
				obj={ field:'grProductBatchProductLockFlag', value:$scope.lockedStatus, operator:'contains'};
				arrayFilter.push(obj);
				w2ui.grid4.search(arrayFilter);
			}else if(!$scope.lockedStatus && $scope.activeStatus){
				obj={ field:'grProductBatchProductActiveFlag', value:$scope.activeStatus, operator:'contains'};
				arrayFilter.push(obj);
				w2ui.grid4.search(arrayFilter);
				
			}else if(!$scope.lockedStatus && !$scope.activeStatus){
				
				w2ui.grid4.searchReset();
				
			}
		}else{
			if($scope.lockedStatus && $scope.activeStatus){
				obj={ field:'grProductBatchActiveFlag', value:$scope.activeStatus, operator:'contains'};
				arrayFilter.push(obj);
				obj={ field:'grProductBatchLockFlag', value:$scope.lockedStatus, operator:'contains'};
				arrayFilter.push(obj);
				w2ui.grid2.search(arrayFilter);
			}else if($scope.lockedStatus && !$scope.activeStatus){
				obj={ field:'grProductBatchLockFlag', value:$scope.lockedStatus, operator:'contains'};
				arrayFilter.push(obj);
				w2ui.grid2.search(arrayFilter);
			}else if(!$scope.lockedStatus && $scope.activeStatus){
				obj={ field:'grProductBatchActiveFlag', value:$scope.activeStatus, operator:'contains'};
				arrayFilter.push(obj);
				w2ui.grid2.search(arrayFilter);
				
			}else if(!$scope.lockedStatus && !$scope.activeStatus){
				
				w2ui.grid2.searchReset();
				
			}
			
		}
		
		
		
		
		
		/*$scope.lockedStatus;
		$scope.activeStatus;
		obj={ field:'productLockFlag', value:filterObj.lockFlg, operator:'contains'};
		
		if()*/
	};
	
	$scope.saveFlags = function(){
		debugger;
		var a=SMValidate();
		  if(a==false){
		   return false;
		  }
		var saveObj=[];
		var type = '';
		var json={};
		var json1={};
		var url1='';
		var list=[];
		
		if($scope.productGrid){
			type='product';
			list=w2ui.grid4.getChanges();
			for(i=0;i<list.length;i++){
				obj={};
				obj=w2ui.grid4.get(list[i].recid);
				if(typeof list[i].grProductBatchProductActiveFlag !== "undefined"){
					obj.grProductBatchProductActiveFlag=list[i].grProductBatchProductActiveFlag;
				}
				if(typeof list[i].grProductBatchProductLockFlag !== "undefined"){
					obj.grProductBatchProductLockFlag=list[i].grProductBatchProductLockFlag;
				}
				delete obj.changes;
				saveObj.push(obj);
				
			}
			if(saveObj.length==0){
				alert("Nothing to save");
				return false;
			}
			url1="http://localhost:8080/Purple/rest/apiStockManager/setStockManager";
			json1=JSON.stringify(saveObj);
			json={entity:6,entityId:0,listType:2,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token,companyId:0,grDate:0};
		}else{
			type='batch';
			list=w2ui.grid2.getChanges();
			for(i=0;i<list.length;i++){
				obj={};
				obj=w2ui.grid2.get(list[i].recid);
				if(typeof list[i].grProductBatchActiveFlag !== "undefined"){
					obj.grProductBatchActiveFlag=list[i].grProductBatchActiveFlag;
				}
				if(typeof list[i].grProductBatchLockFlag !== "undefined"){
					obj.grProductBatchLockFlag=list[i].grProductBatchLockFlag;
				}
				delete obj.changes;
				if(typeof obj.expanded !=="undefined"){
					delete obj.expanded;
				}
				saveObj.push(obj);
			}
			url1="http://localhost:8080/Purple/rest/apiStockManager/setStockManager";
			if(saveObj.length==0){
				alert("Nothing to save");
				return false;
			}
			json1=JSON.stringify(saveObj);
			json={entity:7,entityId:0,listType:1,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token,companyId:0,grDate:0};
		}
		
		$http({
		    method: 'POST',
		    url: url1,
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				if(type=='product'){
					w2ui.grid4.save();
				}else{
					w2ui.grid2.save();
				}
				
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
				
	};
	
	
}]);

/*//_____________-------Batch Scheme--------------_______________
$( document ).ready(function() {
	  // Handler for .ready() called.
	 	$('#scheme_start_date').allowNumbersOnly();
	  	$('#scheme_end_date').allowNumbersOnly();
	  	$('#scheme_min_stock').allowNumbersOnly();  
	  	$('#scheme_remark').allowTextOnlyWithSpace();
	  	$('#scheme_quantity1').allowTextOnlyWithSpace();	    	  	
		$('#scheme_free1').allowTextOnlyWithSpace();
		$('#scheme_quantity2').allowTextOnlyWithSpace();	    	  	
		$('#scheme_free2').allowTextOnlyWithSpace();
		$('#scheme_quantity3').allowTextOnlyWithSpace();	    	  	
		$('#scheme_free3').allowTextOnlyWithSpace()   				    			    		
	});

//_____________---------change_Batch_Details-----------_______________
$( document ).ready(function() {
	  // Handler for .ready() called.
	 	$('#changeBatch_batch_id').allowNumbersOnly();
	  	$('#changeBatch_expiry').allowNumbersOnly();
	  	$('#changeBatch_mrp').allowNumbersOnly();  	  	
	  	$('#changeBatch_trade').allowTextOnlyWithSpace();
	  	$('#changeBatch_purchase_rate').allowTextOnlyWithSpace();
		$('#changeBatch_selling_rate').allowTextOnlyWithSpace();
		$('#changeBatch_remark').allowTextOnlyWithSpace();	    	  	 				    			    		
	});

//_____________---------Stock Adjustments-----------_______________
$( document ).ready(function() {
	  // Handler for .ready() called.
	 	$('#stockAdj_expiry').allowNumbersOnly();
	  	$('#stockAdj_breakage').allowNumbersOnly();
	  	$('#stockAdj_company_transfer').allowNumbersOnly();  	  	
	  	$('#stockAdj_remark').allowTextOnlyWithSpace();    	  	 				    			    		
	});


//_____________--------- Transfer_merge_Batch----------_______________
$( document ).ready(function() {
	  // Handler for .ready() called.
	 	$('#mergeBatch_quantity1').allowNumbersOnly();
	  	$('#mergeBatch_freeStock1').allowNumbersOnly();
	  	$('#mergeBatch_quantity2').allowNumbersOnly();  	  	
	  	$('#mergeBatch_freeStock2').allowTextOnlyWithSpace();
		$('#mergeBatch_remarks').allowTextOnlyWithSpace();
	});


var month = (new Date()).getMonth() + 1;
var year  = (new Date()).getFullYear();

// EU Common Format
$('input[type=eu-date]').w2field('date',  { format: 'd/m/yyyy' });
$('input[type=eu-dateA]').w2field('date', { format: 'd/m/yyyy', start:  '5.' + month + '.' + year, end: '25.' + month + '.' + year });
$('input[type=eu-dateB]').w2field('date', { format: 'd/m/yyyy', blocked: ['12.' + month + '.' + year, '13.' + month + '.' + year, '14.' + month + '.' + year]});
$('input[type=eu-date1]').w2field('date', { format: 'd/m/yyyy', end: $('input[type=eu-date2]') });
$('input[type=eu-date2]').w2field('date', { format: 'd/m/yyyy', start: $('input[type=eu-date1]') });
$('input[type=eu-time]').w2field('time',  { format: 'h24' });
$('input[type=eu-timeA]').w2field('time', { format: 'h24', start: '8:00 am', end: '4:30 pm' });
*/

function SMValidate(){
	 flag=true;
	 if(typeof angular.element(document.getElementById('StockManager')).scope().showCompanySelected==="undefined"){
	  $("#sm_company").css("background-color", "#fff4eb");
	  flag=false;
	 }
	 
	 return flag;
	}