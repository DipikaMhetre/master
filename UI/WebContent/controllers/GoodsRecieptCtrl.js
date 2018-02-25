pharmApp.controller('GoodsRecieptCtrl', ['$scope','$rootScope','$http','$modal','$log','ngToast','wareHouse', function ($scope,$rootScope,$http, $modal, $log,ngToast,wareHouse){
	$scope.paymentTypeList=[{id:1,name:'Credit'},{id:2,name:'Debit'}];
	$scope.isGridDirty=false;
	$scope.GrMaxId=0;
	$scope.cpoListUpdatedFlag=false;
	$scope.recSelected=false;
	$scope.ShowSupplierLists=[];
	$scope.verifiedText='';
	$scope.deleteList=[];
	$scope.ledgerText='';
	$scope.showCompanyList=[];
	$scope.RequestList=[];
	$scope.showGrSelected={goodsReceiptVerifiedFlag:false};
	$scope.showPrevNextBtn=false;
	$scope.verifiedText='';
	$scope.stockText='';
	/*$scope.showSaveBtn=false;*/
	$scope.user={id:10,name:'Satyajit Torad'};
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	
	$scope.$watch('showGrSelected.goodsReceiptVerifiedFlag',function(){
		if($scope.showGrSelected.goodsReceiptVerifiedFlag){
			$scope.verifiedText='['+$scope.showGrSelected.goodsReceiptVerifiedByName+'] '+$scope.showGrSelected.goodsReceiptVerifiedOn;
			
		}else{
			$scope.verifiedText='';
		}
		
	});
	$scope.$watch('showGrSelected.goodsReceiptLedgerFlag',function(){
		if($scope.showGrSelected.goodsReceiptLedgerFlag){
			$scope.ledgerText='['+$scope.showGrSelected.goodsReceiptLedgerUserName+'] '+$scope.showGrSelected.goodsReceiptLedgerOn;
		}else{
			$scope.ledgerText='';
		}
		
	});
	
		
	$scope.$watch('showGrSelected.goodsReceiptStockFlag',function(){
		if($scope.showGrSelected.goodsReceiptStockFlag){
			$scope.stockText='['+$scope.showGrSelected.goodsReceiptStockUserName+'] '+$scope.showGrSelected.goodsReceiptStockOn;
		}else{
			$scope.stockText='';
		}
		
	});
	$scope.init = function(){
		ngToast.create({
			  className: 'success',
			  content: '<span>Data loaded sucessfully...</span>',
			  timeout: 3000,
			  animation:'fade'
			});
		$scope.grPaymentMode=0;
		$scope.$watch('updateToAcFlag',function() {		
			  if($scope.updateToAcFlag){
			   
			   document.getElementById('acButtonSpan').className="AC_updateBtn";
			  }else{
			   document.getElementById('acButtonSpan').className="";
			  }
			 });
		
		var config = {
				
			    layout: {
			        name: 'layout',
			        padding: 0,
			        panels: [
			            { type: 'left', size: '100%', resizable: false},
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
			                   	/*{ field: 'recid', caption: 'recid', hidden:true },
			                    { field: 'goodsReceiptProductCID',hidden:true },           
			                    { field: 'goodsReceiptProductQtyAvailableTotal',hidden:true },
			                    { field: 'goodsReceiptProductFreeAvailableTotal',hidden:true },
			                    { field: 'goodsReceiptProductPurchaseQtyAvlTotal',hidden:true },
			                    { field: 'goodsReceiptProductPurchaseFreeAvlTotal',hidden:true },
			                    { field: 'goodsReceiptProductBatchGrId',hidden:true },
			                    { field: 'goodsReceiptProductBatchExpiryDate',hidden:true },
			                    { field: 'goodsReceiptProductBatchSellRate',hidden:true },			         
			                    { field: 'goodsReceiptProductBatchTradeDiscount',hidden:true },
			                    { field: 'goodsReceiptProductBatchPurchaseDate',hidden:true },
			                    { field: 'goodsReceiptProductBatchActiveFlag',hidden:true },
			                    { field: 'goodsReceiptProductBatchLockFlag',hidden:true },
			                    { field: 'goodsReceiptProductPack',hidden:true },
			                    { field: 'goodsReceiptProductQty',hidden:true },
			                    { field: 'goodsReceiptProductMRP',hidden:true },
			                    { field: 'goodsReceiptProductTrade',hidden:true },
			                    { field: 'goodsReceiptProductRate',hidden:true },
			                    { field: 'goodsReceiptProductCST',hidden:true },
			                    { field: 'goodsReceiptProductLT',hidden:true },       
					            { field: 'goodsReceiptProductProductName', caption: 'Product Name', size: '10%' }, 
					            { field: 'goodsReceiptProductPack', caption: 'Pack', size: '5%' },
					            { field: 'goodsReceiptProductCompanyName', caption: 'Company', size: '7%'},
					            { field: 'goodsReceiptProductBatchNo', caption: 'Batch#', size: '5%' },
					            { field: 'goodsReceiptProductQty', caption: 'Quantity', size: '6%' },
					            { field: 'goodsReceiptProductFree', caption: 'Free', size: '5%'},
					            { field: 'goodsReceiptProductBatchMRP', caption: 'MRP', size: '10%' },
					            { field: 'goodsReceiptProductBatchTrade', caption: 'Trade', size: '10%' },
					            { field: 'goodsReceiptProductVAT', caption: 'VAT%', size: '10%' },
					            { field: 'goodsReceiptProductBatchPurchaseRate', caption: 'Rate', size: '10%' },		          		            
								{ field: 'goodsReceiptProductValue', caption: 'Value', size: '10%' },
					            { field: 'goodsReceiptProductPOId', caption: 'PO#', size: '8%' },
					            { field: 'goodsReceiptProductDifference', caption: 'Diff', size: '5%' },*/
			                   	{ field: 'recid', caption: 'recid', hidden:true },           
			                   	{ field: 'goodsReceiptProductQtyAvailable',hidden:true },
			                   	{ field: 'goodsReceiptProductFreeAvailable',hidden:true },
			                   	{ field: 'goodsReceiptProductPurchaseQtyAvl',hidden:true },
			                   	{ field: 'goodsReceiptProductPurchaseFreeAvl',hidden:true },
			                   	{ field: 'grProductBatchObj.grProductBatchExpiryDate',hidden:true },
			                   	{ field: 'grProductBatchObj.grProductBatchActiveFlag',hidden:true },
			                   	{ field: 'goodsReceiptProductPack',hidden:true },
			                   	{ field: 'goodsReceiptProductId',hidden:true },
			                   	{ field: 'goodsReceiptProductRate',hidden:true },
			                   	{ field: 'goodsReceiptProductCST',hidden:true },
			                   	{ field: 'goodsReceiptProductLT',hidden:true },       
			                   	{ field: 'goodsReceiptProductProductName', caption: 'Product Name', size: '13%'}, 
			                   	{ field: 'goodsReceiptProductPack', caption: 'Pack', size: '5%' },
			                   	{ field: 'goodsReceiptProductCompanyName', caption: 'Company', size: '12%'},
			                   	{ field: 'grProductBatchObj.grProductBatchNo', caption: 'Batch#', size: '5%' },
			                   	{ field: 'goodsReceiptProductQty', caption: 'Quantity', size: '6%' },
			                   	{ field: 'goodsReceiptProductFree', caption: 'Free', size: '5%'},
			                   	{ field: 'grProductBatchObj.grProductBatchMRP', caption: 'MRP', size: '10%' },
			                   	{ field: 'grProductBatchObj.grProductBatchTrade', caption: 'Trade', size: '10%' },
			                   	{ field: 'goodsReceiptProductVAT', caption: 'VAT%', size: '10%' },
			                   	{ field: 'grProductBatchObj.grProductBatchPurchaseRate', caption: 'Rate', size: '10%' },		          		            
			                   	{ field: 'goodsReceiptProductValue', caption: 'Value', size: '10%' },
			                   	{ field: 'goodsReceiptProductPOId', caption: 'PO#', size: '8%' },
			                   	{ field: 'goodsReceiptProductDifference', caption: 'Diff', size: '5%' },
			                   	{ field: 'goodsReceiptProductBatchId',hidden:true }, 
			                   	{ field: 'goodsReceiptProductReceiptTypeId',hidden:true }, 
			                   	{ field: 'goodsReceiptProductStorageId',hidden:true }, 
			                   	{ field: 'goodsReceiptProductType',hidden:true }, 
			                   	{ field: 'goodsReceiptProductVatChargedOn',hidden:true },
			                   	{ field: 'grProductBatchObj',hidden:true },
			                	{ field: '', caption: 'Sale', size: '10%' },

					        ],
			  	      sortData: [
			  	                 /*{field: 'companyName', direction: 'asc' }*/
			  	                 ],    
			  	    
			        records:[],
			        onSelect: function(event) {
			        	event.onComplete = function () {
			        	//angular.element(document.getElementById('CompanyMaster')).scope().selectCompany(w2ui.grid.get(event.recid));
			        	//scriptSelectCompany(w2ui.grid.get(event.recid));
			        		$scope.recSelected=w2ui.grid.get(event.recid);
			        		$('#modifyLink').removeClass();
			        		$('#removeLink').removeClass();			        			        		
			        	}
			        }  ,
			        onUnselect: function(event) {
			        	event.onComplete = function () {
			        		$scope.recSelected=false;
			        		$('#modifyLink').removeClass().addClass('not_implemented_link not_active');
			        		$('#removeLink').removeClass().addClass('not_implemented_link not_active');	
			        		
			        	}
			        }  ,
			        onDblClick: function(event) {
			        	event.onComplete = function () {
			        		
			        		angular.element(document.getElementById('goodReciept')).scope().showGRProductPopup(w2ui.grid.get(event.recid));
			        	}
			        },
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
			                        	angular.element(document.getElementById('goodReciept')).scope().showGRProductPopup(w2ui.grid.get(w2ui.grid.getSelection()[0]));	
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
/////////////////////////////////////////////Satyajit code  fix///////////////////		
		$rootScope.grRegisterRefreshNeeded=false;
		if(typeof $rootScope.prevPageFlag !== "undefined" && $rootScope.prevPageFlag){
			var grRegisterBackUp=wareHouse.getData('grRegisterBackUp');
			$scope.grList=grRegisterBackUp.grList;		
			$scope.filterStatus=grRegisterBackUp.filterStatus;
			$scope.showCompanyList=grRegisterBackUp.CompanyList;//need companyList containing supplierList
			$scope.SupplierList=grRegisterBackUp.SupplierList;
			$scope.createByNameList=grRegisterBackUp.createByNameList;
			$scope.showTransporterList=grRegisterBackUp.TrasporterList;
			$scope.GrRegisterList=grRegisterBackUp.GrRegisterList;		
			$scope.grIndex=-1;
			$scope.showPrevNextBtn=true;
			if(typeof grRegisterBackUp.recid ==="undefined"){
				$scope.newGr();
			}else{
				$scope.retrieve(grRegisterBackUp.recid);
				$scope.grIndex=akricksGetObjIndex($scope.grList,{recid:grRegisterBackUp.recid});
				$scope.maxId=grRegisterBackUp.maxId;	
				$scope.listLimit=grRegisterBackUp.listLimit;
			}
			ngToast.create({
				  className: 'success',
				  content: '<span>Data loaded successfully from backup</span>',
				  timeout: 3000,
				  animation:'fade'
				});
		}else{
//////////////////////////////////////////Satyajit code fix ends////////////////////////////////
////////////////////////////////////////////////Sagar Modified code//////////////////////////////////////////////////////////		
		var json={entity:2,entityId:0,listType:1,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		//HTTP CALL FOR GETTING COMPANYLIST AND SUPPLIERLIST
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiGoodsReceipt/getGoodsReceipt",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				var clist = respData.companyList;
				var slist = respData.supplierList;
				angular.copy(respData.supplierList,$scope.ShowSupplierLists)
				for(i=0;i<clist.length;i++){
					clist[i].companySuppliersList=[];
					for(j=0;j<slist.length;j++){
						
						if(clist[i].companyId==slist[j].supplierCompanyId){				
							clist[i].companySuppliersList.push(slist[j]);
						}
					}
				}
				respData.companyList=clist;
				angular.copy(respData.companyList,$scope.showCompanyList)
				/* var i=wareHouse.getDataIndex('showGrselected');
				if(i>-1){
					$scope.showGrSelected=wareHouse.getData('showGrselected');
					$scope.showCompanySelected=akricksFilter($scope.showCompanyList,{companyId:$scope.showGrSelected.goodsReceiptCID})[0];
					$scope.showSupplierList=$scope.showCompanySelected.companySuppliersList.slice();
					$scope.showSupplierSelected=akricksFilter($scope.showSupplierList,{supplierId:$scope.showGrSelected.goodsReceiptSID})[0];
					angular.copy($scope.showGrSelected.grProductList,w2ui.grid.records);
					w2ui.grid.refresh();
			        
					}
				var j=wareHouse.getDataIndex('showdataSeleted');
				if(j>-1){
					angular.copy(wareHouse.getData('showdataSeleted'),$scope.RequestList);
					$scope.RequestListSize=$scope.RequestList.length;
					$scope.Grindex=getPurpleObjIndex($scope.RequestList,{recid:$scope.showGrSelected.recid});
					$scope.showPrevNextBtn=true;
				} SAGARS CODE*/
				//$scope.GrMaxId=wareHouse.getData("GrMaxid");
				
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
		
		
		/*==========Transporter List API CALL==============*/
		$scope.getTransporterList();
///////////////////////////////////////////Sagar modified Ends///////////////////////////////////////////////////////////////////		
		}
		
		
	};//INIT ENDS
	
	$scope.showPrevious=function(){
		//$scope.recordIndexInRrList=$rootScope.rrList.indexOf(obj);
		if($scope.Grindex>0){
			$scope.Grindex--;
			angular.copy($scope.RequestList[$scope.Grindex],$scope.showGrSelected);
			$scope.showCompanySelected=akricksFilter($scope.showCompanyList,{companyId:$scope.showGrSelected.goodsReceiptCID})[0];
			$scope.showSupplierList=$scope.showCompanySelected.companySuppliersList.slice();
			$scope.showSupplierSelected=akricksFilter($scope.showSupplierList,{supplierId:$scope.showGrSelected.goodsReceiptSID})[0];
			angular.copy($scope.showGrSelected.grProductList,w2ui.grid.records);
			w2ui.grid.refresh();
			
		}else{
			//
		}
		$scope.modify=false;
		
		
	};
	
	
	$scope.showNext=function(){
		if(($scope.Grindex+1) == $scope.RequestListSize){
			///////========CODE NOT TESTED=========///////
			var json={entity:2,listType:6,userId:$scope.activeUser.userId,token:$scope.activeUser.token,lastID:$scope.GrMaxId,listLimit:100,companyId:0,supplierId:0,transporterId:0,fromDate:0,lRDate:0,dueDate:0,ledger:0,poItem:0,fromAmt:0,toAmt:0,grID:0,verifiedByFilterId:0,createdByFilterId:0}
			//HTTP CALL FOR 
			
			$http({
				method: 'POST',
				url: "http://localhost:8080/Purple/rest/apiGoodsReceipt/getGoodsReceipt",
				async:false,
				data:JSON.stringify(json),
				headers: {'Content-Type': 'application/json'}
			}).success(function(data, status, headers, config) {
				if(data.responseCode == 200){
					var respData=JSON.parse(data.responseData);
					if(respData.GoodReceiptRegisterList.length!=0){
						
						$scope.RequestList=$scope.RequestList.concat(respData.GoodReceiptRegisterList.GrProductlist);
						$scope.RequestListSize=respData.GoodReceiptRegisterList;
						////////////////////////////
						$scope.Grindex++;
						angular.copy($scope.RequestList[$scope.Grindex],$scope.showGrSelected);
						$scope.showCompanySelected=akricksFilter($scope.showCompanyList,{companyId:$scope.showGrSelected.goodsReceiptCID})[0];
						$scope.showSupplierList=$scope.showCompanySelected.companySuppliersList.slice();
						$scope.showSupplierSelected=akricksFilter($scope.showSupplierList,{supplierId:$scope.showGrSelected.goodsReceiptSID})[0];
						angular.copy($scope.showGrSelected.grProductList,w2ui.grid.records);
						w2ui.grid.refresh();
					}
					/////////////////
					
					///////////////
					ngToast.create({
						  className: 'success',
						  content: '<span>Data loaded successfully...</span>',
						  timeout: 3000,
						  animation:'fade'
						});
					//$scope.onCompanySelection($scope.showCompanyList[0]);
					$scope.spinner=false;
				}else{
					$scope.spinner=false;
					alert('Purpleaid Error Manager \n'+data.responseCode);

				}
				$scope.modify=false;
			}).error(function(data, status, headers, config) {  
				$scope.spinner=false;
				return false;
			});
		
			
		}else{
			$scope.Grindex++;
			angular.copy($scope.RequestList[$scope.Grindex],$scope.showGrSelected);
			$scope.showCompanySelected=akricksFilter($scope.showCompanyList,{companyId:$scope.showGrSelected.goodsReceiptCID})[0];
			$scope.showSupplierList=$scope.showCompanySelected.companySuppliersList.slice();
			$scope.showSupplierSelected=akricksFilter($scope.showSupplierList,{supplierId:$scope.showGrSelected.goodsReceiptSID})[0];
			angular.copy($scope.showGrSelected.grProductList,w2ui.grid.records);
			w2ui.grid.refresh();
			$scope.modify=false;
		}
	};
	$scope.getPOList=function(companyId,grdate){
		var json={entity:2,entityId:0,listType:2,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,companyId:companyId,grDate:grdate};
		//HTTP CALL FOR GETTING COMPANYLIST AND SUPPLIERLIST
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiGoodsReceipt/getGoodsReceipt",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				$scope.showPOList=respData.companyPurchaseOrderList.slice();
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
	};
	
	$scope.getTransporterList=function(){
		var json={entity:2,entityId:0,listType:4,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,companyId:0,grDate:0};
		//HTTP CALL FOR GETTING TRANSPORTERLIST 
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiGoodsReceipt/getGoodsReceipt",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				$scope.showTransporterList=respData.slice();
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
	};
	
	$scope.onCompanySelection = function(company){
		$scope.showSupplierList=company.companySuppliersList.slice();
		
		var json={entity:2,entityId:0,listType:2,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,companyId:company.companyId};
		
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiGoodsReceipt/getGoodsReceipt",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				
				$scope.grCompanyPopupProductList=respData.goodsReceiptAllProductList.slice();
				$rootScope.grCompanyPopupProductListGLOBAL=respData.goodsReceiptAllProductList.slice();
				//new code on 29/10/2015
				
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
	};
	
	$scope.showGRProductPopup=function(record){
		if($scope.showGrSelected.goodsReceiptVerifiedFlag){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Good Recipt is verified as verified flag is on!So,You cant add/modify product</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			return false;
		}
		$scope.data={};
		if(record == 'NULL'){
			$scope.flag='new';
		}else{
			$scope.flag='update';
		}
		$scope.data.flag=$scope.flag;
		$scope.data.productList=[];
		angular.copy($scope.grCompanyPopupProductList,$scope.data.productList);
		$scope.data.records=record;
		$modal.open({
			templateUrl :'partials/popup/GoodReceiptProduct.jsp', 
			controller :'GRProductPopupCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'addProduct_GoodsReceipt-Modal',
			resolve : {
				/*statusflag : function() {
					return $scope.flag;
				},
				grCompanyPopupProductList : function() {
					return $scope.grCompanyPopupProductList;
				}*/
				reqData : function(){
					return $scope.data;
				}
				
			}		
		}).result.then(function(result) {
			$scope.element={};
			
			if($scope.flag=='new'){
				w2ui.grid.records.push(result);
				
			}else{
				w2ui.grid.set(result.recid,result,false);
			}
			w2ui.grid.refresh();
		});
	};
	
	
	$scope.showDebitCreditNotePopup=function(type){
		$scope.type=type;
		$modal.open({
			template : '<div id="grCreditDebitPopup" ng-init="init()" class="grayBG"><div class="container lightBox_GR_creditDebitNote"><div class="row topblueStrip"><h6 class="fieldsTop_Spacing"><span class="topblueStripText">Credit & Debit Note</span></h6></div><div class="row fields_headingSpacing"><div class="col-md-7"> <h5><span class="submenuBlue_heading">Credit Note(CN)</span></h5></div><div class="col-md-5"> <h5><span class="rightFloat">{{total}}</span></h5></div></div><div class="row"><hr class="horizontal_line"></div><div class="row"><!--=============GRID========== --><div id="grid" tabindex="-1" class=" "></div><!--=============GRID========== --></div><div class="row fields_headingSpacing"><div class="col-md-7"> <h5><span class="submenuBlue_heading">Debit Note(DN)</span></h5></div><div class="col-md-5"> <h5><span class="rightFloat">{{total}}</span></h5></div></div><div class="row"><hr class="horizontal_line"></div><div class="row"><!--=============GRID========== --><div id="grid2" tabindex="-1" class=" "></div><!--=============GRID========== --></div><div class="row fields_headingSpacing"><button class="btn okbtnSize" ng-click="ok(record)">ADD</button> <button class="btn canclebtnSize" ng-click="cancel()">Cancel</button> </div></div></div>',
			controller :'GRCreditDebitPopupCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'addProduct_GoodsReceipt-Modal',
			resolve : {
				noteType : function() {
					return $scope.type;
				}
			}		
		}).result.then(function(result) {
			
			
		});
	};
	
	$scope.showPOLinkPopup=function(){
		if($scope.isGridDirty==true){
			alert('You Cant link PO untill Gr Save..Please Save GoodRecipt First');
			return false;
		}
		$modal.open({
			template :' <div id="GRLinkPOPopup" class="grayBG" ng-init=init();> <div class="container lightBox_linkPO_GoodsReceipt"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Link PO</span> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">PO Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row"> <div class="col-md-3 grLinkPO_row1"> <div class="row"> <div class="col-md-4"> <span class="control-label">Product&nbsp;Name</span> </div> <div class="col-md-8"> <select ng-options="product.goodsReceiptProductProductName for product in productList" ng-model="productSelected" ng-change="onProductSelection(productSelected)" class="form-control input-sm"></select> </div> </div> </div> <div class="col-md-3 grLinkPO_row2"> <div class="row"> <div class="col-md-4"> <span class="control-label">Quantity</span> </div> <div class="col-md-8"> <input type="text" disabled class="form-control input-sm" ng-model="productSelected.goodsReceiptProductQty" value={{productSelected.goodsReceiptProductQty}}> </div> </div> </div> <div class="col-md-3 grLinkPO_row3"> <div class="row"> <div class="col-md-3"> <span class="control-label">Free</span> </div> <div class="col-md-9"> <input type="text" disabled class="form-control input-sm" tabindex="2" ng-model="productSelected.goodsReceiptProductFree" value={{productSelected.goodsReceiptProductFree}}> </div> </div> </div> <div class="col-md-3 grLinkPO_row4"> <div class="row"> <div class="col-md-3"> <span class="control-label">Total</span> </div> <div class="col-md-9"> <input type="text" disabled class="form-control input-sm" tabindex="2" ng-model="productSelected.total" value={{productSelected.total}}> </div> </div> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">PO List</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-12"> <button ng-click="linkAll()" class="btn btn-primary" style="padding: 0px 10px;">Link all products to the selected PO</button> </div> </div> <!--=============GRID========== --> <div id="grid3" class="linkPO_Grid fieldsSpacing" tabindex="-1"></div> <!--=============GRID========== --><!--<div class="row"> <div class="col-md-6"> <span>Total&nbsp;:</span> </div> <div class="col-md-2"><input type="text" class="form-control input-sm" tabindex="2" style="margin-left: 56px;"></div> <div class="col-md-2"> <input type="text" class="form-control input-sm" tabindex="2" style="margin-left: 28px;"></div> <div class="col-md-2"> <input type="text" class="form-control input-sm" tabindex="2"> </div> </div> <div class="row"><div class="col-md-7"></div> <div class="col-md-2 textCenter text_inputfieldPos"> <span style="margin-left: 5px;">PO&nbsp;Qty</span> </div> <div class="col-md-1 textCenter text_inputfieldPos"> <span style="margin-left: -5px;">GR&nbsp;Qty</span> </div> <div class="col-md-2 textCenter text_inputfieldPos"> <span>Diff</span> </div> </div>--><div class="row fields_headingSpacing fieldsBot_Spacing_lg"><div class="col-md-6"><button ng-click="prev()" class="btn btn-default resetbtnSize">Previous</button><button ng-click="next()" class="btn btn-default resetbtnSize">Next</button> </div><div class="col-md-6 textRight "><button class="btn canclebtnSize" ng-click="cancel()">Cancel</button><button class="btn okbtnSize" ng-click="ok()">OK</button>  </div></div> </div> </div> ',controller :'GRLinkPopupCtrl', backdrop: 'static',
			size:'lg',
			windowClass: 'addProduct_linkPO-Modal'
		}).result.then(function(result) {
			
			
		});
	};
	
	$scope.callPOLinker=function(){
		/*if($scope.isGridDirty==false &&
				w2ui.grid.records.length>0 && 
				typeof $scope.showGrSelected.goodsReceiptDate !== "undefined" && 
				$scope.showGrSelected.goodsReceiptDate != '' &&
				typeof $scope.showGrSelected.goodsReceiptId !== "undefined" && 
				$scope.showGrSelected.goodsReceiptId != 0){
			//call modal
		}else{
			alert('Either Reciept Date missing or Records not saved !!!You cant proceed !!!');
		}*/
		$scope.test();
		
	};
	$scope.save=function(){
		a=GoodrecieptValidate()
		 if(a==false){
			 return false;
		 }
		if(typeof $scope.showGrSelected ==="undefined"){
			$scope.showGrSelected={};
		}
		var json1 = $scope.showGrSelected;
		if(typeof json1.goodsReceiptId ==="undefined"){
			json1.goodsReceiptId=0;
		}
		json1.grProductList=w2ui.grid.records;
		for(i=0;i<$scope.deleteList.length;i++){
			json1.grProductList.push($scope.deleteList[i]);
		}
		
		/*if(json1.goodsReceiptId == 0 && json1.grProductList.length == 0){
			alert('Cannot save empty goodreciept. Please add some products.');
			return false;
		}*/
		
		
		//json1.goodsReceiptTransporter=json1.goodsReceiptTransporterSelected.transporterId;
		//json1.goodsReceiptPayment=json1.goodsReceiptPaymentSelected.id;
		delete json1.goodsReceiptTransporterSelected;
		delete json1.goodsReceiptPaymentSelected;
		json1.goodsReceiptCID=$scope.showCompanySelected.companyId;
		if(typeof $scope.showSupplierSelected !== "undefined"){
			json1.goodsReceiptSID=$scope.showSupplierSelected.supplierId;
		}
		
		if(!$scope.cpoListUpdatedFlag){
			json1.grCpoList=[];
		}else{
			for(i=0;i<json1.grCpoList.length;i++){
				delete json1.grCpoList[i].cpofree;
				delete json1.grCpoList[i].cpoqty;
				delete json1.grCpoList[i].cpoqtyandfree;
				delete json1.grCpoList[i].grDifference;
				delete json1.grCpoList[i].grQuantity;
				delete json1.grCpoList[i].qtyReceivedOther;
			}
			
		}
		
		json1=JSON.stringify(json1);
		
		
		var json={entity:1,entityId:0,listType:0,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		//HTTP CALL FOR GETTING COMPANYLIST AND SUPPLIERLIST
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiGoodsReceipt/setGoodsReceipt",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				$scope.showGrSelected.goodsReceiptPayment=0;
				$scope.showGrSelected.goodsReceiptPayment=0;
				
				angular.copy(respData,$scope.showGrSelected);
				/*$scope.showGrSelected.goodsReceiptId=respData.goodsReceiptId;
				$scope.showGrSelected.grCpoList=respData.grCpoList.slice();*/
			//	$scope.showGrSelected.goodsReceiptTransporterSelected = $.grep($scope.showTransporterList,function(e){return e.transporterId==$scope.showGrSelected.goodsReceiptTransporter;})[0];
			//	$scope.showGrSelected.goodsReceiptPaymentSelected = $.grep($scope.paymentTypeList,function(e){return e.id==$scope.showGrSelected.goodsReceiptPayment;})[0];
				$scope.isGridDirty=false;
				
				$scope.cpoListUpdatedFlag=false;
				ngToast.create({
					  className: 'success',
					  content: '<span>Data loaded sucessfully...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				$rootScope.grRegisterRefreshNeeded=true;
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
	}
	
	$scope.retrieve=function(grId){
		if($scope.showGrSelected.grId !== "undefined"&& $scope.showGrSelected.grId==0 || $scope.showGrSelected.grId === "undefined"){
			return false;
		}
		var json={entity:1,entityId:grId,listType:0,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		//HTTP CALL FOR RETRIEVING GoodReciept
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiGoodsReceipt/getGoodsReceipt",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				$scope.showGrSelected=respData;
				//$scope.showGrSelected.goodsReceiptTransporterSelected = $.grep($scope.showTransporterList,function(e){return e.transporterId==$scope.showGrSelected.goodsReceiptTransporter;})[0];
				//$scope.showGrSelected.goodsReceiptPaymentSelected = $.grep($scope.paymentTypeList,function(e){return e.id==$scope.showGrSelected.goodsReceiptPayment;})[0];
				$scope.showCompanySelected = $.grep($scope.showCompanyList,function(e){return e.companyId==$scope.showGrSelected.goodsReceiptCID;})[0];
				var indexArray=[];
				for(i=0;i<$scope.showCompanyList.length;i++){
					if(typeof $scope.showCompanyList[i].status !== "undefined" ){
						indexArray.push(i);
					}
				}
				for(i=0;i<indexArray.length;i++){
					$scope.showCompanyList.splice(indexArray[i],1);
				}
				
				if(typeof $scope.showCompanySelected === "undefined" || $scope.showCompanySelected.status !== "undefined"){
					var supp={supplierId:$scope.showGrSelected.goodsReceiptSID,supplierName:$scope.showGrSelected.goodsReceiptSupplierName};
					var obj={companyId:$scope.showGrSelected.goodsReceiptCID,companyName:$scope.showGrSelected.goodsReceiptCompanyName,status:'INACTIVE',companySuppliersList:[]};
					obj.companySuppliersList.push(supp);
					$scope.showCompanySelected=obj;
					$scope.showCompanyList.push(obj);
				}
				$scope.onCompanySelection($scope.showCompanySelected);
				angular.copy($scope.showGrSelected.grProductList,w2ui.grid.records); 
				$scope.showSupplierSelected=$.grep($scope.showSupplierList,function(e){return e.supplierId==$scope.showGrSelected.goodsReceiptSID;})[0];
				w2ui.grid.refresh();				
				$scope.isGridDirty=false;
				$scope.deleteList=[];
				if($scope.showGrSelected.goodsReceiptVerifiedFlag){
					$scope.verifiedText=''+$scope.showGrSelected.goodsReceiptVerifiedOn+'  ['+$scope.showGrSelected.goodsReceiptVerifiedByName +']'
				}else{
					$scope.verifiedText=''
				}
				
				ngToast.create({
					  className: 'success',
					  content: '<span>Data loaded sucessfully...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
		
	};
	
	$scope.test=function(){
		
		var json={entity:2,entityId:0,listType:5,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,grDate:'2015/05/20',grID:17};
		
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiGoodsReceipt/getGoodsReceipt",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				$scope.showGrSelected=respData;
				$scope.isGridDirty=false;
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
		
	};
	
	$scope.removeGrProduct=function(product){
		if(typeof $scope.showGrSelected !== "undefined" || typeof $scope.showGrSelected !== "undefined"&& typeof $scope.showGrSelected.grProductList ==="undefined" ){
			var obj=$.grep($scope.showGrSelected.grProductList,function(e){return e.goodsReceiptProductId == product.goodsReceiptProductId && e.goodsReceiptProductStockInwardId == product.goodsReceiptProductStockInwardId; })[0];
			var prodIndex=$scope.showGrSelected.grProductList.indexOf(obj);
			$scope.showGrSelected.grProductList.splice(prodIndex,1);
			obj.goodsReceiptProductIsDeleted=true;
			$scope.deleteList.push(obj);
		}
		/*for(i=0;i<$scope.showGrSelected.grCpoList.length;i++){
			for(j=0;j<$scope.showGrSelected.grCpoList[i].cpoProductList.length;j++){
				if($scope.showGrSelected.grCpoList[i].cpoProductList[j].productId == product.goodsReceiptProductId && $scope.showGrSelected.grCpoList[i].cpoProductList[j].siid == product.goodsReceiptProductStockInwardId ){
					$scope.showGrSelected.grCpoList[i].cpoProductList[j].grQuantity=0;
					//$scope.showGrSelected.grCpoList[i].cpoProductList[j].;
				}
			}
		}*/
		var index=Number(product.recid)-1;
		w2ui.grid.records.splice(index,1);
		for(i=index;i<w2ui.grid.records.length;i++){
			w2ui.grid.records[i].recid=Number(w2ui.grid.records[i].recid)-1;
		}
		w2ui.grid.refresh();
		$scope.isGridDirty=true;
		$scope.cpoListUpdatedFlag=true;
		$scope.cpoListUpdatedFlag=false;
		ngToast.create({
			  className: 'success',
			  content: '<span>Product removed sucessfully..</span>',
			  timeout: 3000,
			  animation:'fade'
			});
		
		
	};
	
	$scope.newGr=function(){
		$scope.showGrSelected={};
		var indexArray=[];
		w2ui.grid.records=[];
		w2ui.grid.refresh();
		$scope.showCompanySelected={};
		$scope.showSupplierSelected={};
		for(i=0;i<$scope.showCompanyList.length;i++){
			if(typeof $scope.showCompanyList[i].status !== "undefined" ){
				indexArray.push(i);
			}
		}
		for(i=0;i<indexArray.length;i++){
			$scope.showCompanyList.splice(i,1);
		}
		  $("#companySelect").css("background-color", "white");
		
	}
	
	$scope.switchVerified=function(){
		$scope.showGrSelected.goodsReceiptVerifiedFlag=!$scope.showGrSelected.goodsReceiptVerifiedFlag
		var textReq='';
		var currDate=new Date();
		textReq=textReq+''+currDate.getDate()+'/'+(currDate.getMonth()+1)+
		'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
		if($scope.showGrSelected.goodsReceiptVerifiedFlag){
			$scope.verifiedText=''+textReq +'  ['+$scope.user.name +']';
			$scope.showGrSelected.goodsReceiptVerifiedOn=currDate.getFullYear()+'/'+(currDate.getMonth()+1)+
			'/'+currDate.getDate()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
			$scope.showGrSelected.goodsReceiptVerifiedByName=$scope.user.name;
			$scope.showGrSelected.goodsReceiptVerifiedByID=$scope.user.id;
		}else{
			$scope.verifiedText=''
		}
		
		
	};
	////////////////Satyajit Modified/////////////
	$scope.prevNext = function(type){
		var grLength=$scope.grList.length;
		if(type=='next'){
			if($scope.grIndex+1==grLength){
				return false;
			}else{
				$scope.grIndex++;
				$scope.retrieve($scope.grList[$scope.grIndex].goodsReceiptId);
			}
		}else{
			if($scope.grIndex==0){
				return false;
			}else{
				$scope.grIndex--;
				$scope.retrieve($scope.grList[$scope.grIndex].goodsReceiptId);
			}
		}
	}
	
	$scope.changeStatusFlag=function(type){
		if(type=='verified'){
			$scope.showGrSelected.goodsReceiptVerifiedFlag=!$scope.showGrSelected.goodsReceiptVerifiedFlag;
			if($scope.showGrSelected.goodsReceiptVerifiedFlag){
				$scope.showGrSelected.goodsReceiptVerifiedByName='Rajesh Mahale';//Hardcode
				$scope.showGrSelected.goodsReceiptVerifiedByID=$scope.activeUser.userId;
				
				var currDate=new Date();
				$scope.showGrSelected.goodsReceiptVerifiedOn=currDate.getDate()+'/'+(currDate.getMonth()+1)+
				'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
				
		
				
				//$scope.verifiedText='['+$scope.showCNASelected.creditNoteVerifiedBy+'] '+$scope.showCNASelected.creditNoteVerifiedOn;
			}
		}else if(type=='void'){
			
			if(!$scope.showGrSelected.creditNoteflgVoid){
				var r = confirm("This action will void Goods Receipt and no longer available.Are you sure?");
				if (r == true) {    
					$scope.showGrSelected.creditNoteflgVoid=!$scope.showGrSelected.creditNoteflgVoid;
				} else {
					
				}
			}else{
				$scope.showGrSelected.creditNoteflgVoid=!$scope.showGrSelected.creditNoteflgVoid;
				$scope.showGrSelected.creditNoteVoidReason=null;
			}
			
		}else if(type=='ledger'){
			$scope.showGrSelected.goodsReceiptLedgerFlag=!$scope.showGrSelected.goodsReceiptLedgerFlag;
			if($scope.showGrSelected.creditNoteflgLedger){
				$scope.showGrSelected.goodsReceiptLedgerUserName='Rajesh Mahale';//Hardcode				
				$scope.showGrSelected.goodsReceiptLedgerById=$scope.activeUser.userId;
				var currDate=new Date();
				$scope.showGrSelected.goodsReceiptLedgerOn=currDate.getDate()+'/'+(currDate.getMonth()+1)+
				'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
				
			}else{			
				$scope.ledgerText='';
			}
		}else if(type=='lock'){

			if($scope.showCNASelected.creditNoteflgLock){
				
				
				$scope.showCNASelected.creditNoteLockUserName='Rajesh Mahale';//Hardcode				
				$scope.showCNASelected.creditNoteLockByID=$scope.activeUser.userId;
				var currDate=new Date();
				$scope.showCNASelected.creditNoteLockDateTime=currDate.getDate()+'/'+(currDate.getMonth()+1)+
				'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
				
			}else{
				$scope.showCNASelected.creditNoteLockDateTime=null;
					$scope.showCNASelected.creditNoteLockUserName=null;
					$scope.showCNASelected.creditNoteLockByID=0;
			}
			//$scope.showCNASelected.creditNoteflgLedger=!$scope.showCNASelected.creditNoteflgLedger;
		}else if(type=='stock'){
			
			 $scope.showGrSelected.goodsReceiptStockFlag=!$scope.showGrSelected.goodsReceiptStockFlag;
			if($scope.showGrSelected.goodsReceiptStockFlag){
				
				
				$scope.showGrSelected.goodsReceiptStockUserName='Rajesh Mahale';//Hardcode				
				$scope.showGrSelected.goodsReceiptStockById=$scope.activeUser.userId;
				var currDate=new Date();
				$scope.showGrSelected.goodsReceiptStockOn=currDate.getDate()+'/'+(currDate.getMonth()+1)+
				'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
				
			}else{
					
			}
			
		}
	};
////////////////Satyajit Modified ednds/////////////

}]);
//http://plnkr.co/edit/kuBHIhqKgL0hbcUQTv4t?p=preview

function GoodrecieptValidate(){
	flag=true;
	if(typeof angular.element(document.getElementById('goodReciept')).scope().showCompanySelected==="undefined" || typeof angular.element(document.getElementById('goodReciept')).scope().showCompanySelected!=="undefined" && angular.equals(angular.element(document.getElementById('goodReciept')).scope().showCompanySelected,{})){
		$("#companySelect").css("background-color", "#fff4eb");
		flag=false;
	}
	
	return flag;
}

