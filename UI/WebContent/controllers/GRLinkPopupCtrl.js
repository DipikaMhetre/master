pharmApp.controller('GRLinkPopupCtrl', ['$scope','$rootScope','$http','$modalInstance','$log', function ($scope,$rootScope,$http, $modalInstance, $log) {
	$scope.counter=0;
	$scope.counterMax=0;
	
	$scope.init=function(){
		var config3 = {
			    layout: {
			        name: 'layout3',
			        padding: 0,
			        panels: [
			            { type: 'left', size: '100%', resizable: false},
			            { type: 'main' }
			        ]
			    },
			    grid: { 
					
			        name: 'grid3',
			        show: {
			        	selectColumn: true,
			            toolbar : false,
			            toolbarDelete: false,
						toolbarAdd : false
			        },
			        columns: [
			                { field: 'recid', caption: 'recid', hidden:true },
			                
			                { field: 'cpoId', caption: 'PO#', size: '15%',style: 'text-align: left',resizable: false},
			                { field: 'cpoDate', caption: 'PO Date',size: '15%',style: 'text-align: left',resizable: false}, 
			                { field: 'cpoAmount', caption: 'PO Amount',size: '15%',style: 'text-align: left',resizable: false},
			                { field: 'cpoqtyandfree', caption: 'PO QTY+FREE', size: '20%',style: 'text-align: left',resizable: false},
			                { field: 'qtyReceivedOther', caption: 'QTY Received', size: '15%',style: 'text-align: left',resizable: false},
			  	            { field: 'grQuantity',caption: 'GR QTY',size: '15%', style: 'background-color: #ffcccc' ,style: 'text-align: left',resizable: false,editable: { type: 'input' }},
			  	           { field: 'grDifference', caption: 'Diff', size: '10%',style: 'text-align: left',resizable: false
			  	            	/*render: function (record, index, column_index) {
			  	            		record.grDifference=(Number(record.cpoqtyandfree)-(Number(record.grQuantity)+Number(record.qtyReceivedOther)))
			  	            		
			  	                    var html = '<div>'+record.grDifference+ '</div>';
			  	                  //angular.element(document.getElementById('GRLinkPOPopup')).scope()
			  	                    return html;
			  	                } */},
			  	            
			  	            
			  	            { field: 'cpoqty', caption: '', hidden:true },
			  	            { field: 'cpofree', caption: '', hidden:true },
			  	          
			  	            
			  	         

			  	            /*{ field: 'stock', caption: 'Stock', size: '25%',style: 'text-align: left',
			                	render: function (record, index, column_index) {
			                    var html = '<div>'+ (record.goodsReceiptProductFreeAvailableTotal+record.goodsReceiptProductQtyAvailableTotal)+'</div>';
			                    return html;
			                } ,resizable: false,sortable: true},*/			         
			  	            
      
			  	        ],		      
			  	         
			  	    
			        records:[],
			        onSelect: function(event) {
			        	event.onComplete = function () {
			        		
			        	}
			        }  ,
			        onUnselect: function(event) {
			        	event.onComplete = function () {
			        		
			        		//angular.element(document.getElementById('ProductMaster')).scope().$apply();
			        	}
			        }  ,
			        onDblClick: function(event) {
			        	event.onComplete = function () {
			        		
			        		//angular.element(document.getElementById('GRProductBatchPopup')).scope().submit(w2ui.grid3.get(event.recid));
			        	}
			        },
			        onChange: function(event) {
			        	event.onComplete = function () {
			        		angular.element(document.getElementById('GRLinkPOPopup')).scope().updateGrid();		
			        	}
			        } ,
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
		if(!$rootScope.grid3){
			loadContentpopupGrid(config3);
		}else{
			w2ui.grid3.destroy();
			w2ui.layout3.destroy();
			loadContentpopupGrid(config3);	
		}
		$scope.cpoList=angular.element(document.getElementById('goodReciept')).scope().showGrSelected.grCpoList;
		angular.copy($scope.cpoList,w2ui.grid3.records);
		w2ui.grid3.refresh();
		
		
		$scope.productList=[];
		angular.copy(w2ui.grid.records,$scope.productList);
		$scope.counterMax=$scope.productList.length;
		$scope.onProductSelection($scope.productList[0]);
	};

	$scope.onProductSelection=function(product){
		$scope.subList=[];
		$scope.productSelected=product;
		$scope.productSelected.goodsReceiptProductQty=Number($scope.productSelected.goodsReceiptProductQty);
		$scope.productSelected.goodsReceiptProductFree=Number($scope.productSelected.goodsReceiptProductFree);
		$scope.productSelected.total=$scope.productSelected.goodsReceiptProductQty+$scope.productSelected.goodsReceiptProductFree;
		for(i=0;i<$scope.cpoList.length;i++){
			
			for(j=0;j<$scope.cpoList[i].cpoProductList.length;j++){
				//log.console("j=");
				if($scope.cpoList[i].cpoProductList[j].productId == product.goodsReceiptProductId && $scope.cpoList[i].cpoProductList[j].siid == product.goodsReceiptProductStockInwardId){
					//console.log('IM IN FOR i=='+i+' and J=='+j)
					//alert('IM IN FOR i=='+i+' and J=='+j);
					$scope.cpoList[i].cpoqty=$scope.cpoList[i].cpoProductList[j].qty;
					$scope.cpoList[i].cpofree=$scope.cpoList[i].cpoProductList[j].scheme;
					$scope.cpoList[i].cpoqtyandfree=$scope.cpoList[i].cpoqty+$scope.cpoList[i].cpofree;
					$scope.cpoList[i].grQuantity=$scope.cpoList[i].cpoProductList[j].grQuantity;
					$scope.cpoList[i].qtyReceivedOther=$scope.cpoList[i].cpoProductList[j].qtyReceivedOther;
					$scope.cpoList[i].grDifference=($scope.cpoList[i].grQuantity+$scope.cpoList[i].qtyReceivedOther)-($scope.cpoList[i].cpoqty+$scope.cpoList[i].cpofree);
					
					$scope.subList.push($scope.cpoList[i]);
					/*double grQuantity;
					
					double grScheme;
					
					double grDifference;
					
					double SIID;*/
				}
			}
			
		};
		
		angular.copy($scope.subList,w2ui.grid3.records);
		w2ui.grid3.refresh();
		
	};
	
	
	$scope.next=function(){
		
		$scope.linkChanges=[];
		$scope.linkChanges=w2ui.grid3.getChanges();
		if($scope.linkChanges.length == 0){
			
		}else{
			for(i=0;i<$scope.linkChanges.length;i++){
				$scope.linkChanges[i].productId=$scope.productSelected.goodsReceiptProductId;
				$scope.linkChanges[i].siid=$scope.productSelected.goodsReceiptProductStockInwardId;
			}
			
			/// you can set http call here to save or call from outside
			
			for(j=0;j<$scope.cpoList.length;j++){
				for(k=0;k<$scope.linkChanges.length;k++){
					if($scope.linkChanges[k].recid==$scope.cpoList[j].cpoId){
						for(m=0;m<$scope.cpoList[j].cpoProductList.length;m++){
							if($scope.linkChanges[k].productId == $scope.cpoList[j].cpoProductList[m].productId && $scope.linkChanges[k].siid == $scope.cpoList[j].cpoProductList[m].siid){
								$scope.cpoList[j].cpoProductList[m].grQuantity=$scope.linkChanges[k].grQuantity;
							}
						}
					}
				}
				
			}
		}
		
		///here goes main list update code
		
		if($scope.counter == $scope.counterMax-1){
			
		}else{
			$scope.counter++;
			$scope.onProductSelection($scope.productList[$scope.counter]);
		}
	};
	
	$scope.prev=function(){
		if($scope.counter == 0){
			
		}else{
			$scope.counter--;
			$scope.onProductSelection($scope.productList[$scope.counter]);
		}
		
	};
	
	$scope.linkAll=function(){
		var index = 0;
		if(w2ui.grid3.getSelection().length!=1){
			alert('Please Select Single PO');
			return false;
		}else{
			$scope.poSelected=w2ui.grid3.get(w2ui.grid3.getSelection()[0]);
			for(i=0;i<$scope.poSelected.cpoProductList.length;i++){
				for(j=0;j<$scope.productList.length;j++){
					if($scope.productList[j].goodsReceiptProductId == $scope.poSelected.cpoProductList[i].productId && $scope.productList[j].goodsReceiptProductStockInwardId == $scope.poSelected.cpoProductList[i].siid){
						$scope.poSelected.cpoProductList[i].grQuantity=($scope.productList[j].goodsReceiptProductQty+$scope.productList[j].goodsReceiptProductFree);
					}
				}
				
				//$scope.poSelected.cpoProductList[i].grQuantity=($scope.poSelected.cpoProductList[i].scheme+$scope.poSelected.cpoProductList[i].qty);
				for(k=0;k<$scope.cpoList.length;k++){
					if($scope.cpoList.cpoId != $scope.poSelected.cpoId){
						for(m=0;m<$scope.cpoList[k].cpoProductList.length;m++){
							if($scope.cpoList[k].cpoProductList[m].productId==$scope.poSelected.cpoProductList[i].productId && $scope.cpoList[k].cpoProductList[m].siid==$scope.poSelected.cpoProductList[i].siid){
								$scope.cpoList[k].cpoProductList[m].grQuantity=0;
							}
						}
					}else{
						
					}
					
				}
				
				
			}
			obj=$.grep($scope.cpoList,function(e){return e.cpoId==$scope.poSelected.cpoId;})[0];
			index=$scope.cpoList.indexOf(obj);
			angular.copy($scope.poSelected,$scope.cpoList[index]);
			$scope.onProductSelection($scope.productSelected);
		}
		
		
		
	};
	
	$scope.save=function(){
		
		$scope.linkChanges=[];
		$scope.linkChanges=w2ui.grid3.getChanges();
		if($scope.linkChanges.length == 0){
			
		}else{
			for(i=0;i<$scope.linkChanges.length;i++){
				$scope.linkChanges[i].productId=$scope.productSelected.goodsReceiptProductId;
				$scope.linkChanges[i].siid=$scope.productSelected.goodsReceiptProductStockInwardId;
			}
			
			/// you can set http call here to save or call from outside
			
			for(j=0;j<$scope.cpoList.length;j++){
				for(k=0;k<$scope.linkChanges.length;k++){
					if($scope.linkChanges[k].recid==$scope.cpoList[j].cpoId){
						for(m=0;m<$scope.cpoList[j].cpoProductList.length;m++){
							if($scope.linkChanges[k].productId == $scope.cpoList[j].cpoProductList[m].productId && $scope.linkChanges[k].siid == $scope.cpoList[j].cpoProductList[m].siid){
								$scope.cpoList[j].cpoProductList[m].grQuantity=$scope.linkChanges[k].grQuantity;
							}
						}
					}
				}
				
			}
		}
		
		$scope.onProductSelection($scope.productSelected);
		
	};
	
	$scope.cancel=function(){
		$scope.$close();
		
	};
	
	$scope.updateGrid=function(){
		var total=0;
		var diff=0;
		$scope.records=[];
		$scope.editedFields=w2ui.grid3.getChanges();
		angular.copy(w2ui.grid3.records,$scope.records);
		
		/*for(i=0;i<$scope.records.length;i++){
			for(j=0;j<$scope.editedFields.length;j++){
				if($scope.records[i].recid==$scope.editedFields[j].recid){
					$scope.records[i].grDifference=$scope.records[i].cpoqtyandfree-$scope.editedFields[j].grQuantity;
					$scope.records[i].grQuantity=$scope.editedFields[j].grQuantity;
					//w2ui['grid3'].refreshCell(w2ui.grid3.records[i].recid, 'grDifference');
					
				}else{
					
				}
				
			}
			
						
		}	*/
		var obj={};
		for(i=0;i<$scope.records.length;i++){
			for(j=0;j<$scope.editedFields.length;j++){
				if($scope.records[i].recid==$scope.editedFields[j].recid){
					$scope.records[i].grDifference=$scope.records[i].cpoqtyandfree-$scope.editedFields[j].grQuantity;
					$scope.records[i].grQuantity=$scope.editedFields[j].grQuantity;
					//w2ui['grid3'].refreshCell(w2ui.grid3.records[i].recid, 'grDifference');

				}
			}

		}
		
		for(i=0;i<w2ui.grid3.records.length;i++){
			
			w2ui.grid3.records[i].grDifference=$scope.records[i].grDifference;
			w2ui['grid3'].refreshCell(w2ui.grid3.records[i].recid, 'grDifference');
			total=Number(total)+Number($scope.records[i].grQuantity);
			diff=Number(diff)+Number($scope.records[i].grDifference);
			
						
		}	
		alert('total='+total+' diff='+diff);
	};
	
	
	$scope.ok=function(){
		$scope.save();
		angular.element(document.getElementById('goodReciept')).scope().showGrSelected.grCpoList=$scope.cpoList;
		angular.element(document.getElementById('goodReciept')).scope().cpoListUpdatedFlag=true;
		$scope.$close();
	};
	
	

}]);
