pharmApp.controller('StockAuditCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	var angScope=angular.element(document.getElementById('StockAudit')).scope();
	$scope.myExp="one";
	$scope.maxId=0;
	$scope.newFlag=false;
	$scope.BatchProductList=[];
	$scope.masterRecord={};
	$scope.recs=0;
	$scope.listLimit=50;
	$scope.showme=true;
	$scope.ShowStcockAudit={};
	$scope.toShow='aField';
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.CompanyDivisionList=[];
	$scope.stockEntry=false;
	/*$scope.auditLevel=[{id:0,name:'Product'},{id:1,name:'Batch'}];*/
	$scope.ProductSnapshotList=[{id:1,name:'Take new Product Snapshot '},{id:2,name:'Use Previous Product Snapshot'}];
	$scope.ResultList=[{id:1,name:'Satisfactory'},{id:2,name:'Non-satisfactory'}];
	$scope.OutcomeList=[{id:1,name:'Match'},{id:2,name:'Mismatch'}];
	$scope.getCompDivList=[];
	$scope.getproductTypeList=[];
	$scope.ProductList=[];
	$scope.AuditProductList=[];
	$scope.ShowList=[];
	$scope.saProductList=[];
	$scope.ProductTypeList=[];
	$scope.StockAuditReportList=[];
	$scope.masterFindProduct=[];
	$scope.filterStatus='OFF';
	// $scope.ProductLength=0
	// $scope.SelectedBatchlength=0;
	// $scope.ShowStcockAudit.physicalStcockEntry=true;
	// $scope.ShowStcockAudit.selectLockDataEntry=true;
	 //$scope.ShowStcockAudit.findProductSelected=false;
	 $scope.ShowStcockAudit.isCriteriaChanged=0;
	$scope.FindProducList=[];
	$scope.TotalbatchLength=0;
	//$scope.stockAuditResults={};
	//$scope.filter={stockAuditId:0,fromDate:'',toDate:'',stockAuditOutcome:0,stockAuditResult:0,stockAuditFlgLockSale:0};
	$scope.filter={stockAuditId:0,auditOutcome:-1,auditResult:-1,auditFlgSaleLock:-1,fromDate:0,toDate:0};
	$scope.StockAuditFlag=false;
    $scope.stockAuditTotalAuditQty=0
	var myflag=true;
	
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
				columns : [ {field : 'stockAuditId',caption : 'ID',size : '10%',style : 'text-align: left'}, 
				            {field : 'stockAuditDate',caption : 'Date',size : '20%',style : 'text-align: left'}, 
				            {field : 'stockAuditProductStock', caption : 'Total Product',size : '30%',style : 'text-align: right'}, 
				            {field : 'stockAuditSaleDescription', caption : 'Sale Lock',	size : '17%',style : 'text-align: left'} ,
				            {field : 'recid', caption : 'Recid',hidden:true} 
				            ],

				            records:[],
				            onSelect:function(event){
				            	// clist='recid' + event.recid+' target : '+event.target+'  index'+event.index;
				            	   types="subgrid";
				            	   type="subgrid";
				            	event.onComplete = function () {
				            		var angScope=angular.element(document.getElementById('StockAudit')).scope();
				            		angScope.Collpaseall();
				            		angScope.recs=w2ui.grid.get(event.recid).recid;
				            		var mainindex=akricksGetObjIndex(w2ui.grid.records,{recid:angScope.recs});
				            		angular.copy(w2ui.grid.records[mainindex],angScope.ShowStcockAudit)
				            		angScope.ShowStcockAudit.stockAuditSnap=$scope.ResultList[1].id
				            		   
				            		var json={entity:2,listType:4,userId:$scope.activeUser.userId,token:$scope.activeUser.token,stockAuditId:angScope.recs}
				            		
				            		$http({
				            			method: 'POST',
				            			url: "http://localhost:8080/Purple/rest/apiStockAudit/getStockAudit",
				            			async:false,
				            			data:JSON.stringify(json),
				            			headers: {'Content-Type': 'application/json'}
				            		}).success(function(data, status, headers, config) {
				            			if(data.responseCode == 200){

				            				var respData=JSON.parse(data.responseData);
				            				angScope.ShowStcockAudit.companyDivisionSelectedList=[];
				            				angScope.ShowStcockAudit.productTypeList=[];
				            				angScope.ShowStcockAudit.saProductList=[];
				            				 if(respData[0].companyDivisionSelectedList!=null){
				            				   for(comp=0;comp<respData[0].companyDivisionSelectedList.length;comp++){
				            					   angScope.ShowStcockAudit.companyDivisionSelectedList.push(respData[0].companyDivisionSelectedList[comp]);
				            				   }
				            				 }
				            				   if(respData[0].productTypeList!=null){
				            				   for(prodtype=0;prodtype<respData[0].productTypeList.length;prodtype++){
				            					   angScope.ShowStcockAudit.productTypeList.push(respData[0].productTypeList[prodtype]);
				            				   }
				            				   }
				            				    if(respData[0].saProductList!=null){
				            				   for(prod=0;prod<respData[0].saProductList.length;prod++){
				            					   //respData[0].saProductList[prod].stockAuditProductBatchList.reverse()
				            					   angScope.ShowStcockAudit.saProductList.push(respData[0].saProductList[prod]);
				            				   }
				            				    }
                                            
                                            
                                      		if(!angular.equals(angScope.masterRecord,angScope.ShowStcockAudit)){
    			            				//confirmfunction
    			            			}
    			            			if(!angular.equals(angScope.ShowStcockAudit,angScope.masterRecord)){
    					        			angular.copy(angScope.ShowStcockAudit,angScope.masterRecord);
    					        		}
    					        		
    					        		if(!angular.equals(angScope.ShowStcockAudit,angScope.ShowStcockAudit)){
    					        			angular.copy(angScope.ShowStcockAudit,angScope.ShowStcockAudit);
    					        		}
    				            		
    				            		/*angScope.getCompDivList=[];
    				            		angScope.FindProducList=[];
    				            		angScope.FindBatchList=[];
    				            		angScope.getproductTypeList=[];
    				            		angScope.getsaProductList=[];*/
    				            		w2ui.grid3.selectNone();
    				            	for(a=0;a<w2ui.grid2.getSelection().length;a++){
    				            			w2ui.grid2.unselect(w2ui.grid2.getSelection()[a]);
    				            		}
    				            		//w2ui.grid2.selectNone();
    				            		w2ui.grid5.selectNone();
    				            		for(a=0;a<w2ui.grid4.getSelection().length;a++){
    				            			w2ui.grid4.unselect(w2ui.grid4.getSelection()[a]);
    				            		}
    				            		for(k=0;k<angScope.CompanyDivisionList.length;k++){
    				            			angScope.CompanyDivisionList[k].companySelected=0;
    				            			 for(l=0;l<angScope.CompanyDivisionList[k].companyDivisionsList.length;l++){
    				            				 angScope.CompanyDivisionList[k].companyDivisionsList[l].divisionSelected=0
    				            			 }
    				            		}
    				   //Test logic      ///////////////////////////////////////////////////////================
    				            		
    				            		/*if(!$scope.newFlag){
    				            			if(!angular.equals(angScope.masterRecord,angScope.ShowStcockAudit)){
    				            				//confirmfunction
    				            			}
    				            			if(!angular.equals(w2ui.grid.get(event.recid),angScope.masterRecord)){
    						        			angular.copy(w2ui.grid.get(event.recid),angScope.masterRecord);
    						        		}
    						        		
    						        		if(!angular.equals(w2ui.grid.get(event.recid),angScope.ShowStcockAudit)){
    						        			angular.copy(w2ui.grid.get(event.recid),angScope.ShowStcockAudit);
    						        		}
    				            		}else{
    				            			$scope.newFlag=false;
    				            		}*/
    				            		
    					        		
    					        		
    					        		///////////////////////////////////////=============================
    				            		angular.copy(angScope.ShowStcockAudit.productTypeList,angScope.getproductTypeList);
    				            		angular.copy(angScope.ShowStcockAudit.saProductList,angScope.BatchProductList);
    				            		angular.copy(angScope.ShowStcockAudit.companyDivisionSelectedList,angScope.getCompDivList);
    				            	      type="subgrid";
                                         for(c=0;c<angScope.getCompDivList.length;c++){
                                        	 w2ui.grid2.select(angScope.getCompDivList[c].recid);
                                        	 var subindex=akricksGetObjIndex(angScope.CompanyDivisionList,{recid:angScope.getCompDivList[c].recid});
                                        	 angScope.CompanyDivisionList[subindex].companySelected=1;
                                        	 angScope.recid=[]
                                        	  for(j=0;j<angScope.getCompDivList[c].companyDivisionsList.length;j++){
                                        		  angScope.recid.push(angScope.getCompDivList[c].companyDivisionsList[j].recid);
                                        	  }
                                        	 for(p=0;p<angScope.recid.length;p++){
                                        		 var subindex1=akricksGetObjIndex(angScope.CompanyDivisionList[subindex].companyDivisionsList,{recid:$scope.recid[0]});
                                        		 angScope.CompanyDivisionList[subindex].companyDivisionsList[subindex1].divisionSelected=1;
                                        	 }
                                         }
                                         
                                       for(d=0;d<angScope.getproductTypeList.length;d++){
                                    	    w2ui.grid3.select(angScope.getproductTypeList[d].recid);   
                                       }
                                       types="subgrid";
                                       angular.copy(angScope.BatchProductList,w2ui.grid4.records);
                                       w2ui.grid4.refresh();
                                         for(c=0;c<angScope.BatchProductList.length;c++){
                                        	   if(angScope.BatchProductList[c].productBatchSelected==true){
                                        	  w2ui.grid4.select(angScope.BatchProductList[c]);
                                        	  angScope.ShowStcockAudit.stockAuditProdectSelected--;
                                        	   }
                                        	 }
                                        
                                   		
                                        angular.copy(akricksFilter(angScope.BatchProductList,{productBatchSelected:true}),angScope.FindProducList);
                           			  for(i=0;i<$scope.FindProducList.length;i++){
                           				angScope.FindBatchList=[];
                           				angular.copy(akricksFilter($scope.FindProducList[i].stockAuditProductBatchList,{productBatchSelected:true}),angScope.FindBatchList)
                           				angScope.FindProducList[i].stockAuditProductBatchList=[];
                           				  for(j=0;j<angScope.FindBatchList.length;j++){
                           					angScope.FindProducList[i].stockAuditProductBatchList.push(angScope.FindBatchList[j]);
                           				  }
                           			  }
                           			for(l=0;l<$scope.FindProducList.length;l++){
                     				   if($scope.FindProducList[l].stockAuditProductAuditQty==0){
                     					   $scope.FindProducList[l].stockAuditProductAuditQty="";
                     				   }
                     				    for(r=0;r<$scope.FindProducList[l].stockAuditProductBatchList.length;r++){
                     				    	if($scope.FindProducList[l].stockAuditProductBatchList[r].stockAuditProductBatchAuditQty==0){
                     				    		$scope.FindProducList[l].stockAuditProductBatchList[r].stockAuditProductBatchAuditQty="";
                     				    		
                     				    	}
                     				    }
                     			 }
                           			angular.copy(angScope.FindProducList,w2ui.grid5.records);
                           			w2ui.grid5.refresh();
                           			//angScope.Expandallgrid();
                           			angular.copy($scope.FindProducList, $scope.StockAuditReportList);
                           			  for(m=0;m<$scope.StockAuditReportList.length;m++){
                           				if($scope.StockAuditReportList[m].stockAuditProductAuditQty==""){
                           					$scope.StockAuditReportList[m].stockAuditProductMismatchQty=""
                           				}
                           			 for(r=0;r<$scope.StockAuditReportList[m].stockAuditProductBatchList.length;r++){
                  				    	if($scope.StockAuditReportList[m].stockAuditProductBatchList[r].stockAuditProductBatchAuditQty==""){
                  				    		$scope.StockAuditReportList[m].stockAuditProductBatchList[r].stockAuditProductBatchMismatchQty="";
                  				    		
                  				    	}
                  				    }
                           			  }
                           			angular.copy($scope.FindProducList,w2ui.grid6.records);
                           			w2ui.grid6.refresh();
                           		
                           		         if(angScope.ShowStcockAudit.findProductSelected==false){
                           			$('#find_product').removeClass().addClass('ArrowBtnPos1');
                           		         }
                           		         else{
                           		      	$('#find_product').removeClass().addClass('ArrowBtnPos')
                           		         }
                           			myflag=true;
                           			angScope.stockauditresult="";
                           			  if(angScope.ShowStcockAudit.stockAuditResult==1){
                           				angScope.stockauditresult=$scope.ResultList[0].name;
                           			  }
                           			  else{
                           				 if(angScope.ShowStcockAudit.stockAuditResult==2){
                                				angScope.stockauditresult=$scope.ResultList[1].name;
                                			  }
                           			  }
                           		 angScope.ShowStcockAudit.stockAuditProdectSelected=0;
			            		   
  			            		 angScope.ShowStcockAudit.stockAuditProdectSelected=angScope.ShowStcockAudit.stockAuditProdectSelected+akricksFilter(angScope.BatchProductList,{productBatchSelected:true}).length
  			            		 angScope.ShowStcockAudit.stockAuditProductStock=angScope.ShowStcockAudit.stockAuditProdectSelected+'/'+ angScope.ShowStcockAudit.stockAuditTotalProduct;
			            		  angScope.ShowStcockAudit.stockAuditBatchSelected=0;
			            		   for(length=0;length<angScope.BatchProductList.length;length++){
			            			  angScope.ShowStcockAudit.stockAuditBatchSelected=angScope.ShowStcockAudit.stockAuditBatchSelected+akricksFilter(angScope.BatchProductList[length].stockAuditProductBatchList,{productBatchSelected:true}).length
			            			   
			            		   }
			            		 
			            		   angScope.ShowStcockAudit.stockAuditBatchStock=	angScope.ShowStcockAudit.stockAuditBatchSelected+'/'+ angScope.ShowStcockAudit.stockauditTotalBatch;
                           			//$scope.Collpaseall();
                           			if(!angScope.$$phase){
    				            		angScope.$apply();
    				            		 
    				            		 }
                           			type="grid";
    			            		 types="grid";
				            				



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
				            		ngToast.create({
				            			className: 'success',
				            			content: '<span>Data Loaded successfully...</span>',
				            			timeout: 3000,
				            			animation:'fade'
				            		});
				          


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
	var type="grid";
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
					toolbarAdd : false,
					selectColumn: true
				},
				columns : [ 
				           {field : 'companyName',caption : 'Company & Division',size : '30%',style : 'text-align:left'},
				           {field:'recid',caption:'recid',hidden:true},

				           ],
				           onChange: function (event) {
				        	    event.preventDefault();
				        	},
				           onSelect:function(event){
				        	   // clist='recid' + event.recid+' target : '+event.target+'  index'+event.index;


				        	   event.onComplete = function () {
				        		   
				        		   $scope.isGridDirty=true;
				        		   if(type=="grid"){
				        			   
				        			   w2ui.grid2.lock('msg',true);
				        			   var angScope=angular.element(document.getElementById('StockAudit')).scope();
				        			   angScope.ShowStcockAudit.findProductSelected=false;
					        		    /* if(angScope.ShowStcockAudit.findProductSelected==false){
					        		    	 $('#find_product').removeClass().addClass('ArrowBtnPos1');
					        		     }*/
					        		     $('#find_product').removeClass().addClass('ArrowBtnPos1');
				        			   var rec=w2ui[''+event.target].get(event.recid);
				        			   if(rec!=null){
				        				   
				        				   var mainGridRowRec=getPurpleObjArray(angScope.CompanyDivisionList,{recid:event.recid})[0]

				        				   var index=getPurpleObjIndex(angScope.CompanyDivisionList,{recid:mainGridRowRec.recid})

				        				   for(i=0;i<angScope.CompanyDivisionList[index].companyDivisionsList.length;i++){
				        					   angScope.CompanyDivisionList[index].companyDivisionsList[i].divisionSelected=1;
				        					   angScope.CompanyDivisionList[index].companySelected=true;
				        				   } 

				        				   if(w2ui.grid2.expand(event.recid)){

				        				   }else{
				        					   w2ui['subgrid-'+event.recid].selectAll(); 
				        					   for(i=0;i<angScope.CompanyDivisionList[index].companyDivisionsList.length;i++){
				        						   angScope.CompanyDivisionList[index].companyDivisionsList[i].divisionSelected=1;
				        						   angScope.CompanyDivisionList[index].companySelected=1;
				        					   }
				        				   }
				        			   }
				        			   else{
				        				   var angScope=angular.element(document.getElementById('StockAudit')).scope();

				        				   for(i=0;i<angScope.CompanyDivisionList.length;i++){
				        					   for(j=0;j<angScope.CompanyDivisionList[i].companyDivisionsList.length;j++){
				        						   angScope.CompanyDivisionList[i].companyDivisionsList[j].divisionSelected=1;
				        						   var rec=event.target;
				        						   var a=angScope.CompanyDivisionList[i].recid;


				        					   }
				        					   if(w2ui.grid2.expand(angScope.CompanyDivisionList[i].recid)){

				        					   }
				        					   else{

				        					   }
				        				   }


				        			   }
				        			   angScope.$apply();
				        		   }
				        	   }
				        	   /* else{
						        		  event.onComplete = function () {
						        		  alert("subgrid Select");
						        		  }
						        	  }*/
				           },
				           onUnselect:function(event){
				        	   // clist='recid' + event.recid+' target : '+event.target+'  index'+event.index;


				        	   event.onComplete = function () {
				        		   
				        		     if(type=="grid"){
				        		    	 var angScope=angular.element(document.getElementById('StockAudit')).scope();
				        		   var rec=w2ui[''+event.target].get(event.recid);
				        		   if(rec!=null){
				        			   angScope.ShowStcockAudit.findProductSelected=false;
					        		     /*if(angScope.ShowStcockAudit.findProductSelected==false){
					        		    	 $('#find_product').removeClass().addClass('ArrowBtnPos1');
					        		     }*/
					        		     $('#find_product').removeClass().addClass('ArrowBtnPos1');
				        			   var mainGridRowRec=getPurpleObjArray(angScope.CompanyDivisionList,{recid:event.recid})[0]

				        			   var index=getPurpleObjIndex(angScope.CompanyDivisionList,{recid:mainGridRowRec.recid})
				        			   for(i=0;i<angScope.CompanyDivisionList[index].companyDivisionsList.length;i++){
				        				   angScope.CompanyDivisionList[index].companyDivisionsList[i].divisionSelected=0;
				        				   angScope.CompanyDivisionList[index].companySelected=0;
				        			   }
				        			   if(w2ui.grid2.expand(event.recid)){

				        			   }else{

				        				     for(i=0;i<w2ui['subgrid-'+event.recid].records.length;i++){
						        					  a=w2ui['subgrid-'+event.recid].records[i].recid
						        					  w2ui['subgrid-'+event.recid].unselect(a)
						        				  }
				        				 //  w2ui['subgrid-'+event.recid].selectNone();
				        			   }
				        		   }
				        		   else{
				        			   var angScope=angular.element(document.getElementById('StockAudit')).scope();

				        			   for(i=0;i<angScope.CompanyDivisionList.length;i++){
				        				   for(j=0;j<angScope.CompanyDivisionList[i].companyDivisionsList.length;j++){
				        					   angScope.CompanyDivisionList[i].companyDivisionsList[j].divisionSelected=0;
				        					   var rec=event.target;
				        					   var a=angScope.CompanyDivisionList[i].recid;


				        				   }
				        				   if(w2ui.grid2.expand(angScope.CompanyDivisionList[i].recid)){

				        				   }
				        				   else{
				        					   for(k=0;k<angScope.CompanyDivisionList.length;k++){
				        						   //var c=w2ui['subgrid-'+angScope.SystemVaribaleList[i].recid].records;
				        						   for(j=0;j<w2ui['subgrid-' +angScope.CompanyDivisionList[k].recid].records.length;j++){
				        							   d= w2ui['subgrid-'+angScope.CompanyDivisionList[k].recid].records[j];
				        							   w2ui['subgrid-'+angScope.CompanyDivisionList[k].recid].unselect(d)
				        						   }
				        					   }
				        				   }
				        			   }

				        		   }



				        	   }
				        	   }



				           },
				           onExpand: function (event) {
				        	   
				        	   var angScope=angular.element(document.getElementById('StockAudit')).scope();
				        	   angScope.ShowStcockAudit.isCriteriaChanged=0;
				        	   var mainGridRowRec=getPurpleObjArray(angScope.CompanyDivisionList,{recid:event.recid})[0]
				        	   var myRecs=[];
				        	   if (w2ui.hasOwnProperty('subgrid-' + event.recid)){ 

				        		   angular.copy(mainGridRowRec.companyDivisionsList,myRecs);
				        		   //myRecs=angScope.SystemVaribaleSubList
				        		   w2ui['subgrid-' + event.recid].destroy();

				        	   }else{

				        		   angular.copy(mainGridRowRec.companyDivisionsList,myRecs);
				        	   }

				        	   $('#'+ event.box_id).css({ margin: '0px', padding: '0px', width: '100%' }).animate({ height: '105px' }, 100);
				        	   setTimeout(function () {
				        		   $('#'+ event.box_id).w2grid({
				        			   name: 'subgrid-' + event.recid, 
				        			   show: { columnHeaders: false, 
				        				   selectColumn: true

				        			   },
				        			   fixedBody: false,
				        			   columns: [                
				        			             { field: 'divisionName', caption: 'Division Name', size: '28.5%', style: 'text-align:left' },
				        			             { field: 'recid', caption: 'recid', size: '8%', hidden:true  }

				        			             ],
				        			             onSelect:function(event){		

				        			            	 event.onComplete = function () {
				        			            		
				        			            		 type="subgrid";
				        			            		 str=event.target;
				        			            		 b=str.split('-')
				        			            		 c= Number(b[1]);
				        			            		 w2ui.grid2.select(c);
				        			            		 type="grid";
				        			            		 myflag=false;
				        			            		/* angScope.ShowStcockAudit.findProductSelected=false;
									        		     if(angScope.ShowStcockAudit.findProductSelected==false){
									        		    	
									        		     }*/
									        		     $('#find_product').removeClass().addClass('ArrowBtnPos1');
				        			            		 //w2ui.grid2.select(c);
				        			            		 mainGridRowRec=getPurpleObjArray(angScope.CompanyDivisionList,{recid:c})[0]
				        			            		 var index=getPurpleObjIndex(angScope.CompanyDivisionList,{recid:mainGridRowRec.recid})
				        			            		 angular.copy(w2ui[event.target].records,angScope.CompanyDivisionList[index].companyDivisionsList);
				        			            		 var rec=w2ui[''+event.target].get(event.recid);
				        			            		// alert(''+rec.divisionName);
				       /////martial 			         
				        			            		 angScope.manageFindProductFlag(rec,true,1);
				        			            		 angScope.CompanyDivisionList[index].companySelected=1;
				        			            		 //var index=w2ui[''+event.target].records.indexOf(rec);
				        			            		 if(rec != null){

				        			            			 rec.divisionSelected=1;

				        			            			 //w2ui[event.target].records[index].systemVariableIsSelected=true;
				        			            			 angular.copy(w2ui[event.target].records,angScope.CompanyDivisionList[index].companyDivisionsList);

				        			            		 }
				        			            		 /*if(w2ui.grid.selectAll()){
			        			            			alert("selectall");
			        			            		}
				        			            		  */
				        			            	 }

				        			             },
				        			             onUnselect:function(event){

				        			            	 event.onComplete = function () {

				        			            		 str=event.target;
				        			            		 b=str.split('-')
				        			            		 c= Number(b[1]);
				        			            		 myflag=false;
				        			            		 angScope.ShowStcockAudit.findProductSelected=false;
									        		     if(angScope.ShowStcockAudit.findProductSelected==false){
									        		    	 $('#find_product').removeClass().addClass('ArrowBtnPos1');
									        		     }
				        			            		 mainGridRowRec=getPurpleObjArray(angScope.CompanyDivisionList,{recid:c})[0]
				        			            		 var index=getPurpleObjIndex(angScope.CompanyDivisionList,{recid:mainGridRowRec.recid})
				        			            		 angular.copy(w2ui[event.target].records,angScope.CompanyDivisionList[index].companyDivisionsList);
				        			            		 var rec=w2ui[''+event.target].get(event.recid);
				        			            		 //var index=w2ui[''+event.target].records.indexOf(rec);
				        			            		 if(rec != null){

				        			            			 rec.divisionSelected=0;

				        			            			 //w2ui[event.target].records[index].systemVariableIsSelected=true;
				        			            			 angular.copy(w2ui[event.target].records,angScope.CompanyDivisionList[index].companyDivisionsList);

				        			            		 }
				        			            		 if(w2ui['subgrid-'+c].getSelection().length==0){
				        			            			 w2ui.grid2.unselect(c);
				        			            			 angScope.CompanyDivisionList[index].companySelected=0;
				        			            		 }
				        			            	 }

				        			             },
				        			             records: myRecs
				        		   });
				        		   /////////After expand subgrid loads Select logic
				        		  
				        			   for(i=0;i<mainGridRowRec.companyDivisionsList.length;i++){
				        				   if(mainGridRowRec.companyDivisionsList[i].divisionSelected == 1){
				        					  /* if(!$('#find_product').attr('Class')=="ArrowBtnPos1"){
				        						   $('#find_product').removeClass().addClass('ArrowBtnPos');
				        					   }*/
				        					   w2ui['subgrid-' + event.recid].select(mainGridRowRec.companyDivisionsList[i].recid)
				        					  

				        				   }
				        				   
				        			   }
				        		   w2ui['subgrid-' + event.recid].resize();

				        	   }, 300);

				           },
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
				        		   angular.element(document.getElementById('ReturnsRegister')).scope().objectPool();
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

	//loading send to ondocReady

	if(!$rootScope.grid2){
		loadContentGrid(config2);
	}else{
		w2ui.grid2.destroy();
		w2ui.layout2.destroy();
		loadContentGrid(config2);

	}

	//GetClock();	
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
					toolbarDelete: false,
					toolbarAdd : false,
					selectColumn : true
				},
				columns : [ 
				           {field : 'productTypeName',caption : 'Product Type',size : '10%',style : 'text-align: left'} 
				           ],
				           onSelect:function(event){		

				        	   event.onComplete = function () {
				        		   $scope.isGridDirty=true;
				        		   var angScope=angular.element(document.getElementById('StockAudit')).scope();
				        		   var index=getPurpleObjIndex(angScope.ProductTypeList,{recid:event.recid})
				        		   //angScope.ShowStcockAudit.isCriteriaChanged=1;
				        		     /*if(angScope.ShowStcockAudit.isCriteriaChanged==1){
				        		    	 $('#find_product').removeClass().addClass('ArrowBtnPos1');
				        		     }*/
				        		    $('#find_product').removeClass().addClass('ArrowBtnPos1');
				        		   if(index==-1){
				        			   for(i=0;i<angScope.ProductTypeList.length;i++)
				        				   angScope.ProductTypeList[i].productTypeSelected=1;
				        		   }
				        		   else{
				        			   angScope.ProductTypeList[index].productTypeSelected=1;
				        		   }
//martial				        	
				        		   
				        		   //angScope.manageFindProductFlag(w2ui.grid3.get(event.recid),true,2)	   	
				        	   }

				           },
				           onUnselect:function(event){		

				        	   event.onComplete = function () {

				        		   var angScope=angular.element(document.getElementById('StockAudit')).scope();
				        		   var index=getPurpleObjIndex(angScope.ProductTypeList,{recid:event.recid})
				        		   if(index==-1){
				        			   for(i=0;i<angScope.ProductTypeList.length;i++)
				        				   angScope.ProductTypeList[i].productTypeSelected=0;
				        		   }
				        		   else{
				        			   angScope.ProductTypeList[index].productTypeSelected=0;
				        		   }

				        	   }

				           },
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
				        		   angular.element(document.getElementById('ReturnsRegister')).scope().objectPool();
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

	//loading send to ondocReady

	if(!$rootScope.grid3){
		loadContentpopupGrid(config3);
	}else{
		w2ui.grid3.destroy();
		w2ui.layout3.destroy();
		loadContentpopupGrid(config3);

	}

	GetClock();	
	var types="grid";
	//var typegrid="grid";
	var config4 = {

			layout: {
				name: 'layout4',
				padding: 0,
				panels: [
				         { type: 'left', size: '100%'},
				         { type: 'main' }
				         ]
			},
			grid: { 

				name: 'grid4',
				show: {
					toolbar : false,
					toolbarDelete: false,
					toolbarAdd : false,
					selectColumn:true
				},
				columns : [ 
				           {field : 'stockAuditProductBatchProductName',caption : 'Product',size : '10%',style : 'text-align: left'}, 
				           {field : 'recid',caption : 'recid',size : '10%',style : 'text-align: left',hidden:true} 
				           ],

				           records:[],		
				           onSelect:function(event){
				        	   // clist='recid' + event.recid+' target : '+event.target+'  index'+event.index;


				        	   event.onComplete = function () {
				        		   var angScope=angular.element(document.getElementById('StockAudit')).scope()
				        		   $scope.isGridDirty=true;
				        		   angScope.ShowStcockAudit.stockAuditTotalProduct=w2ui.grid4.records.length;
				        		   //angScope.ShowStcockAudit.stockAuditProdectSelected++
			        			   //angScope.ShowStcockAudit.stockAuditProductStock=angScope.ShowStcockAudit.stockAuditProdectSelected+'/'+ angScope.ShowStcockAudit.stockAuditTotalProduct;
				        		   if(types=="grid" ){
				        			   w2ui.grid2.lock('msg',true);
                                            
				        			   
				        			   var rec=w2ui[''+event.target].get(event.recid);
				        			   if(rec!=null){

				        				   var mainGridRowRec=getPurpleObjArray(angScope.BatchProductList,{recid:event.recid})[0]

				        				   var index=getPurpleObjIndex(angScope.BatchProductList,{recid:mainGridRowRec.recid})

				        				   for(i=0;i<angScope.BatchProductList[index].stockAuditProductBatchList.length;i++){
				        					   angScope.BatchProductList[index].stockAuditProductBatchList[i].productBatchSelected=true;
				        					   angScope.BatchProductList[index].productBatchSelected=true;
				        				   } 

				        				   if(w2ui.grid4.expand(event.recid)){

				        				   }else{
				        					   //w2ui['subgrid-'+event.recid].selectAll();
				        					   for(length=0;length<w2ui['subgrid-'+event.recid].records.length;length++){
				        						   w2ui['subgrid-'+event.recid].select(w2ui['subgrid-'+event.recid].records[length].recid)
				        					   }
				        					   for(i=0;i<angScope.BatchProductList[index].stockAuditProductBatchList.length;i++){
				        						   angScope.BatchProductList[index].stockAuditProductBatchList[i].productBatchSelected=true;
				        						   angScope.BatchProductList[index].productBatchSelected=true;
				        					   }
				        				   }
				        			   }
				        			   else{
				        				   var angScope=angular.element(document.getElementById('StockAudit')).scope();

				        				   for(i=0;i<angScope.BatchProductList.length;i++){
				        					   for(j=0;j<angScope.BatchProductList[i].stockAuditProductBatchList.length;j++){
				        						   angScope.BatchProductList[i].stockAuditProductBatchList[j].productBatchSelected=true;
				        						   var rec=event.target;
				        						   var a=angScope.BatchProductList[i].recid;
				        						   alert(w2ui.grid4.getSelection.length);


				        					   }
				        					   if(w2ui.grid2.expand(angScope.BatchProductList[i].recid)){

				        					   }
				        					   else{

				        					   }
				        				   }


				        			   }
				        			   angScope.ShowStcockAudit.stockAuditProdectSelected=0;
    			            		   
    			            		 angScope.ShowStcockAudit.stockAuditProdectSelected=angScope.ShowStcockAudit.stockAuditProdectSelected+akricksFilter(angScope.BatchProductList,{productBatchSelected:true}).length
    			            		 angScope.ShowStcockAudit.stockAuditProductStock=angScope.ShowStcockAudit.stockAuditProdectSelected+'/'+ angScope.ShowStcockAudit.stockAuditTotalProduct;
    			            			   
    			            		   
				        			   if(!angScope.$$phase){
   					            		angScope.$apply();
   			            		 }
				        		   }
				        	   }
				        	   /* else{
					        		  event.onComplete = function () {
					        		  alert("subgrid Select");
					        		  }
					        	  }*/
				           },
				           onUnselect:function(event){
				        	   // clist='recid' + event.recid+' target : '+event.target+'  index'+event.index;


				        	   event.onComplete = function () {
				        		   var angScope=angular.element(document.getElementById('StockAudit')).scope()
				        		   var rec=w2ui[''+event.target].get(event.recid);
				        		   angScope.ShowStcockAudit.stockAuditTotalProduct=w2ui.grid4.records.length;
				        		  /* angScope.ShowStcockAudit.stockAuditProdectSelected--;
			        			   angScope.ShowStcockAudit.stockAuditProductStock=angScope.ShowStcockAudit.stockAuditProdectSelected+'/'+ angScope.ShowStcockAudit.stockAuditTotalProduct;*/
				        		   
				        		   if(rec!=null){
				        			   var angScope=angular.element(document.getElementById('StockAudit')).scope();
				        			   var mainGridRowRec=getPurpleObjArray(angScope.BatchProductList,{recid:rec.recid})[0]

				        			   var index=getPurpleObjIndex(angScope.BatchProductList,{recid:mainGridRowRec.recid})
				        			   for(i=0;i<angScope.BatchProductList[index].stockAuditProductBatchList.length;i++){
				        				   angScope.BatchProductList[index].stockAuditProductBatchList[i].productBatchSelected=false;
				        				   angScope.BatchProductList[index].productBatchSelected=false;
				        			   }
				        			   if(w2ui.grid4.expand(event.recid)){

				        			   }else{

				        				     for(i=0;i<w2ui['subgrid-'+event.recid].records.length;i++){
					        					  a=w2ui['subgrid-'+event.recid].records[i].recid
					        					  w2ui['subgrid-'+event.recid].unselect(a)
					        				  }
				        				   //w2ui['subgrid-'+event.recid].selectNone();
				        			   }
				        		   }
				        		   else{
				        			   var angScope=angular.element(document.getElementById('StockAudit')).scope();

				        			   for(i=0;i<angScope.BatchProductList.length;i++){
				        				   for(j=0;j<angScope.BatchProductList[i].stockAuditProductBatchList.length;j++){
				        					   angScope.BatchProductList[i].stockAuditProductBatchList[j].productBatchSelected=false;
				        					   var rec=event.target;
				        					   var a=angScope.BatchProductList[i].recid;


				        				   }
				        				   if(w2ui.grid2.expand(angScope.BatchProductList[i].recid)){

				        				   }
				        				   else{
				        					   for(k=0;k<angScope.BatchProductList.length;k++){
				        						   //var c=w2ui['subgrid-'+angScope.SystemVaribaleList[i].recid].records;
				        						   for(j=0;j<w2ui['subgrid-' +angScope.BatchProductList[k].recid].records.length;j++){
				        							   d= w2ui['subgrid-'+angScope.BatchProductList[k].recid].records[j];
				        							   w2ui['subgrid-'+angScope.BatchProductList[k].recid].unselect(d)
				        						   }
				        					   }
				        				   }
				        			   }

				        		   }
				        		   angScope.ShowStcockAudit.stockAuditProdectSelected=0;
			            		   
  			            		 angScope.ShowStcockAudit.stockAuditProdectSelected=angScope.ShowStcockAudit.stockAuditProdectSelected+akricksFilter(angScope.BatchProductList,{productBatchSelected:true}).length
  			            		 angScope.ShowStcockAudit.stockAuditProductStock=angScope.ShowStcockAudit.stockAuditProdectSelected+'/'+ angScope.ShowStcockAudit.stockAuditTotalProduct;
				        		   if(!angScope.$$phase){
  					            		angScope.$apply();
				        		   }

				        	   }




				           },
				           onExpand: function (event) {

				        	   var mainGridRowRec=getPurpleObjArray(angScope.BatchProductList,{recid:event.recid})[0]
				        	   var myRecs=[];
				        	   if (w2ui.hasOwnProperty('subgrid-' + event.recid)){ 

				        		   angular.copy(mainGridRowRec.stockAuditProductBatchList,myRecs);
				        		   //myRecs=angScope.SystemVaribaleSubList
				        		   w2ui['subgrid-' + event.recid].destroy();

				        	   }else{

				        		   angular.copy(mainGridRowRec.stockAuditProductBatchList,myRecs);
				        	   }

				        	   $('#'+ event.box_id).css({ margin: '0px', padding: '0px', width: '100%' }).animate({ height: '105px' }, 100);
				        	   setTimeout(function () {
				        		   $('#'+ event.box_id).w2grid({
				        			   name: 'subgrid-' + event.recid, 
				        			   show: { columnHeaders: false, 
				        				   selectColumn: true

				        			   },
				        			   fixedBody: false,
				        			   columns: [                
				        			             { field: 'stockAuditProductBatchPBatchName', caption: 'Batch Name', size: '28.5%', style: 'text-align:left' },
				        			             { field: 'recid', caption: 'recid', size: '8%', hidden:true  }

				        			             ],
				        			             onSelect:function(event){		

				        			            	 event.onComplete = function () {
				        			            		 $scope.count++;
			        			            		 types="subgrid";
				        			            		 str=event.target;
				        			            		 b=str.split('-')
				        			            		 c= Number(b[1]);
				        			            		 w2ui.grid4.select(c);
				        			            		 types="grid";
				        			            		/* angScope.ShowStcockAudit.stockAuditBatchSelected++;
				        			            		 angScope.ShowStcockAudit.stockAuditBatchStock=	angScope.ShowStcockAudit.stockAuditBatchSelected+'/'+ angScope.ShowStcockAudit.stockauditTotalBatch;*/
				        			            		// $scope.SelectedBatchlength=$scope.SelectedBatchlength+w2ui['subgrid-'+c].getSelection().length;
                                                         
				        			            		 //w2ui.grid2.select(c);
				        			            		
				        			            		 mainGridRowRec=getPurpleObjArray(angScope.BatchProductList,{recid:c})[0]
				        			            		 var index=getPurpleObjIndex(angScope.BatchProductList,{recid:mainGridRowRec.recid})
				        			            		 angular.copy(w2ui[event.target].records,angScope.BatchProductList[index].stockAuditProductBatchList);
				        			            		 var rec=w2ui[''+event.target].get(event.recid);
				        			            		 angScope.BatchProductList[index].productBatchSelected=true;
				        			            		 //var index=w2ui[''+event.target].records.indexOf(rec);
				        			            		 if(rec != null){

				        			            			 rec.productBatchSelected=true;

				        			            			 //w2ui[event.target].records[index].systemVariableIsSelected=true;
				        			            			 angular.copy(w2ui[event.target].records,angScope.BatchProductList[index].stockAuditProductBatchList);

				        			            		 }
				        			            		 /*if(w2ui.grid.selectAll()){
						        			            			alert("selectall");
						        			            		}
				        			            		  */
				        			            		 angScope.ShowStcockAudit.stockAuditProdectSelected=0;
				      			            		   
				          			            		 angScope.ShowStcockAudit.stockAuditProdectSelected=angScope.ShowStcockAudit.stockAuditProdectSelected+akricksFilter(angScope.BatchProductList,{productBatchSelected:true}).length
				          			            		 angScope.ShowStcockAudit.stockAuditProductStock=angScope.ShowStcockAudit.stockAuditProdectSelected+'/'+ angScope.ShowStcockAudit.stockAuditTotalProduct;
				        			            		  angScope.ShowStcockAudit.stockAuditBatchSelected=0;
				        			            		   for(length=0;length<angScope.BatchProductList.length;length++){
				        			            			  angScope.ShowStcockAudit.stockAuditBatchSelected=angScope.ShowStcockAudit.stockAuditBatchSelected+akricksFilter(angScope.BatchProductList[length].stockAuditProductBatchList,{productBatchSelected:true}).length
				        			            			   
				        			            		   }
				        			            		   angScope.ShowStcockAudit.stockAuditBatchStock=	angScope.ShowStcockAudit.stockAuditBatchSelected+'/'+ angScope.ShowStcockAudit.stockauditTotalBatch;
				        			            		 if(!angScope.$$phase){
				        					            		angScope.$apply();
				        			            		 }
				        			            	 }

				        			             },
				        			             onUnselect:function(event){

				        			            	 event.onComplete = function () {

				        			            		 str=event.target;
				        			            		 b=str.split('-')
				        			            		 c= Number(b[1]);
				        			            		 angScope.ShowStcockAudit.stockAuditBatchSelected--;
				        			            		 angScope.ShowStcockAudit.stockAuditBatchStock=	angScope.ShowStcockAudit.stockAuditBatchSelected+'/'+ angScope.ShowStcockAudit.stockauditTotalBatch;
				        			            		 mainGridRowRec=getPurpleObjArray(angScope.BatchProductList,{recid:c})[0]
				        			            		 var index=getPurpleObjIndex(angScope.BatchProductList,{recid:mainGridRowRec.recid})
				        			            		 angular.copy(w2ui[event.target].records,angScope.BatchProductList[index].stockAuditProductBatchList);
				        			            		 var rec=w2ui[''+event.target].get(event.recid);
				        			            		 //var index=w2ui[''+event.target].records.indexOf(rec);
				        			            		 if(rec != null){

				        			            			 rec.productBatchSelected=false;

				        			            			 //w2ui[event.target].records[index].systemVariableIsSelected=true;
				        			            			 angular.copy(w2ui[event.target].records,angScope.BatchProductList[index].stockAuditProductBatchList);

				        			            		 }
				        			            		 if(w2ui['subgrid-'+c].getSelection().length==0){
				        			            			 w2ui.grid4.unselect(c);
				        			            			 angScope.BatchProductList[index].productBatchSelected=false;
				        			            		 }
				        			            		 if(!angScope.$$phase){
				        					            		angScope.$apply();
				        			            		 }
				        			            	 }

				        			             },
				        			             records: myRecs
				        		   });
				        		   /////////After expand subgrid loads Select logic
				        		 
				        			   for(i=0;i<mainGridRowRec.stockAuditProductBatchList.length;i++){
				        				   if(mainGridRowRec.stockAuditProductBatchList[i].productBatchSelected == true){
				        					  // angScope.ShowStcockAudit.stockAuditBatchSelected--
				        					   w2ui['subgrid-' + event.recid].select(mainGridRowRec.stockAuditProductBatchList[i].recid)

				        				   }
				        			   }
				        		   w2ui['subgrid-' + event.recid].resize();
				        		   w2ui.grid4.resize();
				        	   }, 300);

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

				        			   }
				        		   }
				        		   cancel = true;
				        		   angular.element(document.getElementById('ReturnsRegister')).scope().objectPool();
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

	//loading send to ondocReady

	if(!$rootScope.grid4){
		loadGrid4(config4);
	}else{
		w2ui.grid4.destroy();
		w2ui.layout4.destroy();
		loadGrid4(config4);

	}

	GetClock();	

	var config5 = {

			layout: {
				name: 'layout5',
				padding: 0,
				panels: [
				         { type: 'left', size: '100%'},
				         { type: 'main' }
				         ]
			},
			grid: { 

				name: 'grid5',
				show: {
					toolbar : false,
					toolbarDelete: false,
					toolbarAdd : false
				},
				columns : [ 
				           {field : 'stockAuditProductBatchProductId',caption : 'ID',size : '5%',style : 'text-align: left'},
				           {field : 'stockAuditProductBatchProductName',caption : 'Product Name',size : '20%',style : 'text-align: left'},
				           { field : 'stockAuditProductBatchCompanyName',caption : 'Company',size : '10%',style : 'text-align: left'},
				           {field : 'stockAuditProductBatchDivisionName',caption : 'Division',size : '10%',style : 'text-align: left'},
				           {field : 'stockAuditProductAuditQty', caption : 'Product Qty',size : '10%',style : 'text-align: left' ,editable: { type: 'int' }},
				           {field : 'stockAuditProductBatchAuditByName',caption : 'Audit by', size : '10%',style : 'text-align: left',editable: { type: 'text' }},
				           {field : 'recid',caption : 'recid', size : '20%',style : 'text-align: left',hidden:true}
				           ],

				           records:[],		

				           /*onSelect:function(event){
				        	   // clist='recid' + event.recid+' target : '+event.target+'  index'+event.index;


				        	   event.onComplete = function () {
				        		   var angScope=angular.element(document.getElementById('StockAudit')).scope()
				        		   $scope.isGridDirty=true;
				        		   if(types=="grid"){
				        			   w2ui.grid2.lock('msg',true);


				        			   var rec=w2ui[''+event.target].get(event.recid);
				        			   if(rec!=null){

				        				   var mainGridRowRec=getPurpleObjArray(angScope.FindProducList,{recid:event.recid})[0]

				        				   var index=getPurpleObjIndex(angScope.FindProducList,{recid:mainGridRowRec.recid})

				        				   for(i=0;i<angScope.FindProducList[index].stockAuditProductBatchList.length;i++){
				        					   angScope.FindProducList[index].stockAuditProductBatchList[i].batchIsDeleted=1;
				        					   angScope.FindProducList[index].productIsDeleted=true;
				        				   } 

				        				   if(w2ui.grid4.expand(event.recid)){

				        				   }else{
				        					   w2ui['subgrid-'+event.recid].selectAll(); 
				        					   for(i=0;i<angScope.BatchProductList[index].stockAuditProductBatchList.length;i++){
				        						   angScope.BatchProductList[index].stockAuditProductBatchList[i].batchIsDeleted=1;
				        						   angScope.BatchProductList[index].productIsDeleted=1;
				        					   }
				        				   }
				        			   }
				        			   else{
				        				   var angScope=angular.element(document.getElementById('StockAudit')).scope();

				        				   for(i=0;i<angScope.BatchProductList.length;i++){
				        					   for(j=0;j<angScope.BatchProductList[i].stockAuditProductBatchList.length;j++){
				        						   angScope.BatchProductList[i].stockAuditProductBatchList[j].batchIsDeleted=1;
				        						   var rec=event.target;
				        						   var a=angScope.BatchProductList[i].recid;


				        					   }
				        					   if(w2ui.grid2.expand(angScope.BatchProductList[i].recid)){

				        					   }
				        					   else{

				        					   }
				        				   }


				        			   }
				        			   angScope.$apply();
				        		   }
				        	   }
				        	    else{
								        		  event.onComplete = function () {
								        		  alert("subgrid Select");
								        		  }
								        	  }
				           },
				           onUnselect:function(event){
				        	   // clist='recid' + event.recid+' target : '+event.target+'  index'+event.index;


				        	   event.onComplete = function () {
				        		   var angScope=angular.element(document.getElementById('StockAudit')).scope()
				        		   var rec=w2ui[''+event.target].get(event.recid);
				        		   if(rec!=null){
				        			   var angScope=angular.element(document.getElementById('StockAudit')).scope();
				        			   var mainGridRowRec=getPurpleObjArray(angScope.BatchProductList,{recid:c})[0]

				        			   var index=getPurpleObjIndex(angScope.BatchProductList,{recid:mainGridRowRec.recid})
				        			   for(i=0;i<angScope.BatchProductList[index].stockAuditProductBatchList.length;i++){
				        				   angScope.BatchProductList[index].stockAuditProductBatchList[i].batchIsDeleted=0;
				        				   angScope.BatchProductList[index].productIsDeleted=0;
				        			   }
				        			   if(w2ui.grid4.expand(event.recid)){

				        			   }else{

				        				     for(i=0;i<w2ui['subgrid-'+event.recid].records.length;i++){
								        					  a=w2ui['subgrid-'+event.recid].records[i].recid
								        					  w2ui['subgrid-'+event.recid].unselect(a)
								        				  }
				        				   w2ui['subgrid-'+event.recid].selectNone();
				        			   }
				        		   }
				        		   else{
				        			   var angScope=angular.element(document.getElementById('StockAudit')).scope();

				        			   for(i=0;i<angScope.BatchProductList.length;i++){
				        				   for(j=0;j<angScope.BatchProductList[i].stockAuditProductBatchList.length;j++){
				        					   angScope.BatchProductList[i].stockAuditProductBatchList[j].batchIsDeleted=0;
				        					   var rec=event.target;
				        					   var a=angScope.BatchProductList[i].recid;


				        				   }
				        				   if(w2ui.grid2.expand(angScope.BatchProductList[i].recid)){

				        				   }
				        				   else{
				        					   for(k=0;k<angScope.BatchProductList.length;k++){
				        						   //var c=w2ui['subgrid-'+angScope.SystemVaribaleList[i].recid].records;
				        						   for(j=0;j<w2ui['subgrid-' +angScope.BatchProductList[k].recid].records.length;j++){
				        							   d= w2ui['subgrid-'+angScope.BatchProductList[k].recid].records[j];
				        							   w2ui['subgrid-'+angScope.BatchProductList[k].recid].unselect(d)
				        						   }
				        					   }
				        				   }
				        			   }

				        		   }



				        	   }




				           },*/
				           onExpand: function (event) {

				        	   var mainGridRowRec=getPurpleObjArray(angScope.FindProducList,{recid:event.recid})[0]
				        	   var myRecs=[];
				        	   if (w2ui.hasOwnProperty('subgrid-' + event.recid)){ 

				        		   angular.copy(mainGridRowRec.stockAuditProductBatchList,myRecs);
				        		   //myRecs=angScope.SystemVaribaleSubList
				        		   w2ui['subgrid-' + event.recid].destroy();

				        	   }else{

				        		   angular.copy(mainGridRowRec.stockAuditProductBatchList,myRecs);
				        	   }

				        	   $('#'+ event.box_id).css({ margin: '0px', padding: '0px', width: '100%' }).animate({ height: '105px' }, 100);
				        	   setTimeout(function () {
				        		   $('#'+ event.box_id).w2grid({
				        			   name: 'subgrid-' + event.recid, 
				        			   show: { columnHeaders: true, 
				        				  
				        			   },
				        			   fixedBody: false,
				        			   columns: [     
				        			             { field: 'stockAuditProductBatchProductId', caption: 'Product Id', size: '5%', style: 'text-align:left' },
				        			              { field: 'stockAuditProductBatchPBatchName', caption: 'Batch Id', size: '20%', style: 'text-align:left' },
				        			             { field: 'stockAuditProductBatchCompanyName', caption: 'Company  Name', size: '10%', style: 'text-align:left' },
				        			             { field: 'stockAuditProductBatchDivisionName', caption: 'Division Name', size: '10%', style:'text-align:left' },
				        			             {field : 'stockAuditProductBatchAuditQty', caption : 'Batch Qty',size : '10%',style : 'text-align: left' ,editable: { type: 'int' }},
				      				             {field : 'stockAuditProductBatchAuditByName',caption : 'Audit by', size : '10%',style : 'text-align: left',editable: { type: 'text' }},
				        			             { field: 'recid', caption: 'recid', size: '8%', hidden:true  }

				        			             ],
				        			             
				        			             /*onSelect:function(event){		

				        			            	 event.onComplete = function () {
				        			            		 types="subgrid";
				        			            		 str=event.target;
				        			            		 b=str.split('-')
				        			            		 c= Number(b[1]);
				        			            		 w2ui.grid4.select(c);
				        			            		 types="grid";

				        			            		 //w2ui.grid2.select(c);
				        			            		 mainGridRowRec=getPurpleObjArray(angScope.FindProducList,{recid:c})[0]
				        			            		 var index=getPurpleObjIndex(angScope.FindProducList,{recid:mainGridRowRec.recid})
				        			            		 angular.copy(w2ui[event.target].records,angScope.FindProducList[index].stockAuditProductBatchList);
				        			            		 var rec=w2ui[''+event.target].get(event.recid);
				        			            		 angScope.FindProducList[index].productIsDeleted=1;
				        			            		 //var index=w2ui[''+event.target].records.indexOf(rec);
				        			            		 if(rec != null){

				        			            			 rec.batchIsDeleted=1;

				        			            			 //w2ui[event.target].records[index].systemVariableIsSelected=true;
				        			            			 angular.copy(w2ui[event.target].records,angScope.FindProducList[index].stockAuditProductBatchList);

				        			            		 }
				        			            		 if(w2ui.grid.selectAll()){
									        			            			alert("selectall");
									        			            		}
				        			            		  
				        			            	 }

				        			             },
				        			             onUnselect:function(event){

				        			            	 event.onComplete = function () {

				        			            		 str=event.target;
				        			            		 b=str.split('-')
				        			            		 c= Number(b[1]);

				        			            		 mainGridRowRec=getPurpleObjArray(angScope.BatchProductList,{recid:c})[0]
				        			            		 var index=getPurpleObjIndex(angScope.BatchProductList,{recid:mainGridRowRec.recid})
				        			            		 angular.copy(w2ui[event.target].records,angScope.BatchProductList[index].stockAuditProductBatchList);
				        			            		 var rec=w2ui[''+event.target].get(event.recid);
				        			            		 //var index=w2ui[''+event.target].records.indexOf(rec);
				        			            		 if(rec != null){

				        			            			 rec.batchIsDeleted=0;

				        			            			 //w2ui[event.target].records[index].systemVariableIsSelected=true;
				        			            			 angular.copy(w2ui[event.target].records,angScope.BatchProductList[index].stockAuditProductBatchList);

				        			            		 }
				        			            		 if(w2ui['subgrid-'+c].getSelection().length==0){
				        			            			 w2ui.grid4.unselect(c);
				        			            			 angScope.BatchProductList[index].productIsDeleted=0;
				        			            		 }
				        			            	 }

				        			             },*/
				        			             records: myRecs
				        		   });
				        		   /////////After expand subgrid loads Select logic
				        		   if($scope.vartypes!="expand"){
				        			   for(i=0;i<mainGridRowRec.stockAuditProductBatchList.length;i++){
				        				   if(mainGridRowRec.stockAuditProductBatchList[i].batchIsDeleted == 1){
				        					   w2ui['subgrid-' + event.recid].select(mainGridRowRec.stockAuditProductBatchList[i].recid)

				        				   }
				        			   }
				        		   }
				        		   w2ui['subgrid-' + event.recid].resize();
				        		   w2ui.grid5.resize();
				        	   }, 300);

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

				        			   }
				        		   }
				        		   cancel = true;
				        		   angular.element(document.getElementById('ReturnsRegister')).scope().objectPool();
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

	//loading send to ondocReady

	if(!$rootScope.grid5){
		loadGrid5(config5);
	}else{
		w2ui.grid5.destroy();
		w2ui.layout5.destroy();
		loadGrid5(config5);

	}

	GetClock();	
	

				var config6 = {

						layout: {
							name: 'layout6',
							padding: 0,
							panels: [
							         { type: 'left', size: '100%'},
							         { type: 'main' }
							         ]
						},
						grid: { 

							name: 'grid6',
							show: {
								toolbar : false,
								toolbarDelete: false,
								toolbarAdd : false
							},
							columns : [ {
								field : 'recid',caption : 'ID',size : '8%',style : 'text-align: left',hidden:true,},
								{field : 'stockAuditProductBatchProductId',caption : 'ID',size : '5%',style : 'text-align: left'},
								{field : 'stockAuditProductBatchProductName',caption : 'Product',size : '10%',style : 'text-align: left'},
							{field : 'stockAuditProductBatchCompanyName',caption : 'Company',size : '20%',style : 'text-align: left'},	
							{field : 'stockAuditProductBatchDivisionName',caption : 'Division',size : '20%',style : 'text-align: left'},
							{field : 'stockAuditProductAuditQty',caption : 'Audit Qty',size : '10%',style : 'text-align: left'},
							{field : 'stockAuditProductSystemQty',caption : 'Stock Qty',size : '10%',style : 'text-align: left'},
							{field : 'stockAuditProductMismatchQty',caption : 'Mismatch',size : '10%',style : 'text-align: left'},
							{field : 'stockAuditProductBatchRemark',caption : 'Remark',size : '30%',style : 'text-align: left',editable: { type: 'text' }}
							],

							           records:[],		

							           /*onSelect:function(event){
							        	   // clist='recid' + event.recid+' target : '+event.target+'  index'+event.index;


							        	   event.onComplete = function () {
							        		   var angScope=angular.element(document.getElementById('StockAudit')).scope()
							        		   $scope.isGridDirty=true;
							        		   if(types=="grid"){
							        			   w2ui.grid2.lock('msg',true);


							        			   var rec=w2ui[''+event.target].get(event.recid);
							        			   if(rec!=null){

							        				   var mainGridRowRec=getPurpleObjArray(angScope.FindProducList,{recid:event.recid})[0]

							        				   var index=getPurpleObjIndex(angScope.FindProducList,{recid:mainGridRowRec.recid})

							        				   for(i=0;i<angScope.FindProducList[index].stockAuditProductBatchList.length;i++){
							        					   angScope.FindProducList[index].stockAuditProductBatchList[i].batchIsDeleted=1;
							        					   angScope.FindProducList[index].productIsDeleted=true;
							        				   } 

							        				   if(w2ui.grid4.expand(event.recid)){

							        				   }else{
							        					   w2ui['subgrid-'+event.recid].selectAll(); 
							        					   for(i=0;i<angScope.BatchProductList[index].stockAuditProductBatchList.length;i++){
							        						   angScope.BatchProductList[index].stockAuditProductBatchList[i].batchIsDeleted=1;
							        						   angScope.BatchProductList[index].productIsDeleted=1;
							        					   }
							        				   }
							        			   }
							        			   else{
							        				   var angScope=angular.element(document.getElementById('StockAudit')).scope();

							        				   for(i=0;i<angScope.BatchProductList.length;i++){
							        					   for(j=0;j<angScope.BatchProductList[i].stockAuditProductBatchList.length;j++){
							        						   angScope.BatchProductList[i].stockAuditProductBatchList[j].batchIsDeleted=1;
							        						   var rec=event.target;
							        						   var a=angScope.BatchProductList[i].recid;


							        					   }
							        					   if(w2ui.grid2.expand(angScope.BatchProductList[i].recid)){

							        					   }
							        					   else{

							        					   }
							        				   }


							        			   }
							        			   angScope.$apply();
							        		   }
							        	   }
							        	    else{
											        		  event.onComplete = function () {
											        		  alert("subgrid Select");
											        		  }
											        	  }
							           },
							           onUnselect:function(event){
							        	   // clist='recid' + event.recid+' target : '+event.target+'  index'+event.index;


							        	   event.onComplete = function () {
							        		   var angScope=angular.element(document.getElementById('StockAudit')).scope()
							        		   var rec=w2ui[''+event.target].get(event.recid);
							        		   if(rec!=null){
							        			   var angScope=angular.element(document.getElementById('StockAudit')).scope();
							        			   var mainGridRowRec=getPurpleObjArray(angScope.BatchProductList,{recid:c})[0]

							        			   var index=getPurpleObjIndex(angScope.BatchProductList,{recid:mainGridRowRec.recid})
							        			   for(i=0;i<angScope.BatchProductList[index].stockAuditProductBatchList.length;i++){
							        				   angScope.BatchProductList[index].stockAuditProductBatchList[i].batchIsDeleted=0;
							        				   angScope.BatchProductList[index].productIsDeleted=0;
							        			   }
							        			   if(w2ui.grid4.expand(event.recid)){

							        			   }else{

							        				     for(i=0;i<w2ui['subgrid-'+event.recid].records.length;i++){
											        					  a=w2ui['subgrid-'+event.recid].records[i].recid
											        					  w2ui['subgrid-'+event.recid].unselect(a)
											        				  }
							        				   w2ui['subgrid-'+event.recid].selectNone();
							        			   }
							        		   }
							        		   else{
							        			   var angScope=angular.element(document.getElementById('StockAudit')).scope();

							        			   for(i=0;i<angScope.BatchProductList.length;i++){
							        				   for(j=0;j<angScope.BatchProductList[i].stockAuditProductBatchList.length;j++){
							        					   angScope.BatchProductList[i].stockAuditProductBatchList[j].batchIsDeleted=0;
							        					   var rec=event.target;
							        					   var a=angScope.BatchProductList[i].recid;


							        				   }
							        				   if(w2ui.grid2.expand(angScope.BatchProductList[i].recid)){

							        				   }
							        				   else{
							        					   for(k=0;k<angScope.BatchProductList.length;k++){
							        						   //var c=w2ui['subgrid-'+angScope.SystemVaribaleList[i].recid].records;
							        						   for(j=0;j<w2ui['subgrid-' +angScope.BatchProductList[k].recid].records.length;j++){
							        							   d= w2ui['subgrid-'+angScope.BatchProductList[k].recid].records[j];
							        							   w2ui['subgrid-'+angScope.BatchProductList[k].recid].unselect(d)
							        						   }
							        					   }
							        				   }
							        			   }

							        		   }



							        	   }




							           },*/
							           onExpand: function (event) {

							        	   var mainGridRowRec=getPurpleObjArray(angScope.StockAuditReportList,{recid:event.recid})[0]
							        	   var myRecs=[];
							        	   if (w2ui.hasOwnProperty('subgrid-' + event.recid)){ 

							        		   angular.copy(mainGridRowRec.stockAuditProductBatchList,myRecs);
							        		   //myRecs=angScope.SystemVaribaleSubList
							        		   w2ui['subgrid-' + event.recid].destroy();

							        	   }else{

							        		   angular.copy(mainGridRowRec.stockAuditProductBatchList,myRecs);
							        	   }

							        	   $('#'+ event.box_id).css({ margin: '0px', padding: '0px', width: '100%' }).animate({ height: '105px' }, 100);
							        	   setTimeout(function () {
							        		   $('#'+ event.box_id).w2grid({
							        			   name: 'subgrid-' + event.recid, 
							        			   show: { columnHeaders: true, 
							        				  
							        			   },
							        			   fixedBody: false,
							        			   columns: [        
							        			             { field: 'recid', caption: 'recid', size: '8%', hidden:true },
							        			         	{field : 'stockAuditProductBatchProductId',caption : 'ID',size : '5%',style : 'text-align: left'},
							        			             { field: 'stockAuditProductBatchPBatchName', caption: 'Batch Name', size: '10%', style: 'text-align:left' },
							        			             {field : 'stockAuditProductBatchCompanyName', caption : 'Company Name',size : '20%',style : 'text-align: left' ,},
							      				           {field : 'stockAuditProductBatchDivisionName',caption : 'Division name', size : '20%',style : 'text-align: left',},
							      				         {field : 'stockAuditProductBatchAuditQty',caption : 'Audit by', size : '10%',style : 'text-align: left',},
							      				       {field : 'stockAuditProductBatchSystemQty',caption : 'System by', size : '10%',style : 'text-align: left',},
							      				     {field : 'stockAuditProductBatchMismatchQty',caption : 'Misamatch by', size : '10%',style : 'text-align: left',},
							      				     {field : 'stockAuditProductBatchRemark',caption : ' Remark', size : '30%',style : 'text-align: left',editable: { type: 'text' }},
							        			            

							        			             ],
							        			            
							        			             /*onSelect:function(event){		

							        			            	 event.onComplete = function () {
							        			            		 types="subgrid";
							        			            		 str=event.target;
							        			            		 b=str.split('-')
							        			            		 c= Number(b[1]);
							        			            		 w2ui.grid4.select(c);
							        			            		 types="grid";

							        			            		 //w2ui.grid2.select(c);
							        			            		 mainGridRowRec=getPurpleObjArray(angScope.FindProducList,{recid:c})[0]
							        			            		 var index=getPurpleObjIndex(angScope.FindProducList,{recid:mainGridRowRec.recid})
							        			            		 angular.copy(w2ui[event.target].records,angScope.FindProducList[index].stockAuditProductBatchList);
							        			            		 var rec=w2ui[''+event.target].get(event.recid);
							        			            		 angScope.FindProducList[index].productIsDeleted=1;
							        			            		 //var index=w2ui[''+event.target].records.indexOf(rec);
							        			            		 if(rec != null){

							        			            			 rec.batchIsDeleted=1;

							        			            			 //w2ui[event.target].records[index].systemVariableIsSelected=true;
							        			            			 angular.copy(w2ui[event.target].records,angScope.FindProducList[index].stockAuditProductBatchList);

							        			            		 }
							        			            		 if(w2ui.grid.selectAll()){
												        			            			alert("selectall");
												        			            		}
							        			            		  
							        			            	 }

							        			             },
							        			             onUnselect:function(event){

							        			            	 event.onComplete = function () {

							        			            		 str=event.target;
							        			            		 b=str.split('-')
							        			            		 c= Number(b[1]);

							        			            		 mainGridRowRec=getPurpleObjArray(angScope.BatchProductList,{recid:c})[0]
							        			            		 var index=getPurpleObjIndex(angScope.BatchProductList,{recid:mainGridRowRec.recid})
							        			            		 angular.copy(w2ui[event.target].records,angScope.BatchProductList[index].stockAuditProductBatchList);
							        			            		 var rec=w2ui[''+event.target].get(event.recid);
							        			            		 //var index=w2ui[''+event.target].records.indexOf(rec);
							        			            		 if(rec != null){

							        			            			 rec.batchIsDeleted=0;

							        			            			 //w2ui[event.target].records[index].systemVariableIsSelected=true;
							        			            			 angular.copy(w2ui[event.target].records,angScope.BatchProductList[index].stockAuditProductBatchList);

							        			            		 }
							        			            		 if(w2ui['subgrid-'+c].getSelection().length==0){
							        			            			 w2ui.grid4.unselect(c);
							        			            			 angScope.BatchProductList[index].productIsDeleted=0;
							        			            		 }
							        			            	 }

							        			             },*/
							        			             records: myRecs
							        		   });
							        		   /////////After expand subgrid loads Select logic
							        		  /* if($scope.vartypes!="expand"){
							        			   for(i=0;i<mainGridRowRec.stockAuditProductBatchList.length;i++){
							        				   if(mainGridRowRec.stockAuditProductBatchList[i].batchIsDeleted == 1){
							        					   w2ui['subgrid-' + event.recid].select(mainGridRowRec.stockAuditProductBatchList[i].recid)

							        				   }
							        			   }
							        		   }
							        		   else{
							        			   for(j=0;j<angScope.getCompDivList.length;j++){
							        				   var subrecs=angScope.getCompDivList[j].recid
							        				   for(k=0;k<angScope.getCompDivList[j].companyDivisionsList.length;j++){
							        					   w2ui['subgrid-' + subrecs].select(angScope.getCompDivList[j].companyDivisionsList[k].recid)
							        				   }
							        			   }
							        		   }*/





							        		   w2ui['subgrid-' + event.recid].resize();
							        		   w2ui.grid5.resize();
							        	   }, 300);

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

							        			   }
							        		   }
							        		   cancel = true;
							        		   angular.element(document.getElementById('ReturnsRegister')).scope().objectPool();
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

				//loading send to ondocReady

				if(!$rootScope.grid6){
					loadGrid6(config6);
				}else{
					w2ui.grid6.destroy();
					w2ui.layout6.destroy();
					loadGrid5(config6);

				}

				GetClock();	
	$scope.GetStockAuditDetails();
	$scope.New();


	/*$scope.ShowStcockAudit.stockAuditLevel=$scope.auditLevel[0].id;*/
	//$scope.ShowStcockAudit.stockAuditSnap=$scope.ProductSnapshotList[0].id;
};
$scope.GetStockAuditDetails=function(){
	var json={entity:2,listType:1,userId:$scope.activeUser.userId,token:$scope.activeUser.token,lastID:0,listLimit:50}
	json=angular.extend(json,$scope.filter);
	$http({
		method: 'POST',
		url: "http://localhost:8080/Purple/rest/apiStockAudit/getStockAudit",
		async:false,
		data:JSON.stringify(json),
		headers: {'Content-Type': 'application/json'}
	}).success(function(data, status, headers, config) {
		if(data.responseCode == 200){

			var respData=JSON.parse(data.responseData);

			angular.copy(respData.CompanyDivisionList,$scope.CompanyDivisionList);
			angular.copy(respData.ProductTypeList,$scope.ProductTypeList);
			angular.copy($scope.CompanyDivisionList,w2ui.grid2.records);
			w2ui.grid2.refresh();
			angular.copy($scope.ProductTypeList,w2ui.grid3.records);
			w2ui.grid3.refresh();
			if($scope.maxId==0){
				angular.copy(respData.StockAuditList.AuditList,w2ui.grid.records);
				/* for(flag=0;flag<w2ui.grid.records.length;flag++){
     		    	if(w2ui.grid.records[flag].stockAuditFlgLockSale==false){
     		    		w2ui.grid.records[flag].stockAuditFlgLockSale="No";
     		    	}
     		    	else{
     		    		w2ui.grid.records[flag].stockAuditFlgLockSale="Yes";
     		    	}
     		    }*/
				w2ui.grid.refresh();
				$scope.maxId=respData.StockAuditList.lastId;
			}
			else{
				angular.copy(w2ui.grid.records.concat(respData.StockAuditList.AuditList),w2ui.grid.records);
				w2ui.grid.refresh();
				$scope.maxId=respData.StockAuditList.AuditList.lastId;
			}
			$scope.ShowStcockAudit.stockAuditCreatedByName="Rajesh Mahale"
				$scope.ShowStcockAudit.stockAuditDate=getTodaysDate();


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
	ngToast.create({
		className: 'success',
		content: '<span>Data Loaded successfully...</span>',
		timeout: 3000,
		animation:'fade'
	});
};
$scope.renderGrid=function(){
	$scope.toShow='bField';
	w2ui.grid5.render($('#grid5'));
};
$scope.renderGridss=function(){
	$scope.toShow='aField';
	w2ui.grid4.render($('#grid4'));
};
$scope.renderGrids=function(){
	$scope.toShow='cField';
	w2ui.grid6.render($('#grid6'));
};
$scope.FindProduct=function(){
	
	w2ui.grid4.records=[];
	w2ui.grid5.records=[];
	$scope.BatchProductList=[];
	var operationtype="unselect";
	
	$scope.divisionList=[];
	$scope.companyList=[];
	$scope.productList=[];
	$scope.cList=[];
	$scope.dList=[];
	$scope.pList=[];
	for(i=0;i<$scope.CompanyDivisionList.length;i++){
		for(j=0;j<$scope.CompanyDivisionList[i].companyDivisionsList.length;j++){
			if($scope.CompanyDivisionList[i].companyDivisionsList[j].divisionSelected==1){
				$scope.divisionList.push($scope.CompanyDivisionList[i].companyDivisionsList[j]);
				var operationtype="select";
			}

		}
		if(operationtype=="select"){
			$scope.cList.push($scope.CompanyDivisionList[i].companyId);

		}

		operationtype="unselect";


	}
	for(k=0;k<$scope.ProductTypeList.length;k++){
		if($scope.ProductTypeList[k].productTypeSelected==1){
			$scope.productList.push($scope.ProductTypeList[k]);
		}
	}
	for(a=0;a<$scope.divisionList.length;a++){

		$scope.dList.push($scope.divisionList[a].divisionId);

	}
	for(b=0;b<$scope.productList.length;b++){
		$scope.pList.push($scope.productList[b].productTypeId);

	}
	  
	 
	 //$scope.ShowStcockAudit.isCriteriaChanged=1;
	  $('#find_product').removeClass().addClass('ArrowBtnPos');
	  
	 $scope.ShowStcockAudit.findProductSelected=true;
	$scope.findProductSelecteds={};
	  
	$scope.findProductSelecteds.cList=$scope.cList;
	$scope.findProductSelecteds.pList=$scope.pList;
	$scope.findProductSelecteds.dList=$scope.dList;
	var j=JSON.stringify($scope.cList)+'->'+JSON.stringify($scope.dList)+'->'+JSON.stringify($scope.pList);
	var json1=angular.toJson( $scope.findProductSelected);
	var json1=j;
	var json={entity:2,listType:2,userId:$scope.activeUser.userId,token:$scope.activeUser.token,requestData:json1};
	$http({
		method: 'POST',
		url: "http://localhost:8080/Purple/rest/apiStockAudit/getStockAudit",
		async:false,
		data:JSON.stringify(json),
		headers: {'Content-Type': 'application/json'}
	}).success(function(data, status, headers, config) {
		if(data.responseCode == 200){
            w2ui.grid4.selectNone();
			$scope.BatchProductList=[];
			var returnObj=JSON.parse(data.responseData);
              
			angular.copy(returnObj,	$scope.BatchProductList);
			if(angular.equals($scope.masterFindProduct,$scope.BatchProductList)==false){
				angular.equals($scope.masterFindProduct,$scope.BatchProductList)
				 $scope.ShowStcockAudit.isCriteriaChanged=1;
			};    
			angular.copy($scope.BatchProductList,$scope.masterFindProduct);
		
			angular.copy(	$scope.BatchProductList,w2ui.grid4.records);
			w2ui.grid4.refresh();
	         for(g=0;g<w2ui.grid4.getSelection.length;g++){
	        	 w2ui.grid4.unselect(w2ui.grid4.getSelection.length[g]);
	         }
	        //anguar.copy(angScope.ShowStcockAudit.stockAuditProdectSelected,w2ui.grid4.records.length)
	         $scope.ShowStcockAudit.stockAuditTotalProduct=w2ui.grid4.records.length;
	         $scope.ShowStcockAudit.stockAuditProdectSelected=w2ui.grid4.getSelection().length;
	         $scope.ShowStcockAudit.stockAuditProductStock=$scope.ShowStcockAudit.stockAuditProdectSelected+'/'+ $scope.ShowStcockAudit.stockAuditTotalProduct;
			 batchLength=0;
			  for(i=0;i<$scope.BatchProductList.length;i++){
				 
				  batchLength=batchLength+akricksFilter($scope.BatchProductList[i].stockAuditProductBatchList,{}).length
			  }
			  $scope.ShowStcockAudit.stockauditTotalBatch=batchLength;
			  $scope.ShowStcockAudit.stockAuditBatchStock=	angScope.ShowStcockAudit.stockAuditBatchSelected+'/'+ angScope.ShowStcockAudit.stockauditTotalBatch;
			 // $scope.ShowStcockAudit.stockAuditBatchStock=batchLength;
			  $scope.SelectedBatchlength=0;
				if(w2ui.grid4.getSelection().length==0){
					 $scope.ShowStcockAudit.physicalStcockEntry=true;
				  }
				else{
					 $scope.ShowStcockAudit.physicalStcockEntry=false;
				}
           
			ngToast.create({
				className: 'success',
				content: '<span>Data Loaded successfully...</span>',
				timeout: 3000,
				animation:'fade'
			});


		}else{
			alert('Purpleaid Error Manager \n'+data.responseCode);
			//$scope.spinner=false;
		}
	}).error(function(data, status, headers, config) { 
		//$scope.spinner=false;
		return false;

	});

};
/*$scope.stcokChange=function(){
		$scope.BatchList=[];
		 if($scope.ShowStcockAudit.stockAuditLevel==0){
			 $scope.ShowStcockAudit.stockAuditBatchStock="";
			    if(w2ui.grid4.columns.length!=0){


			    if(w2ui.grid4.columns[0].field=="stockAuditProductBatchProductName"){

			    }
			    else{
			  w2ui['grid4'].addColumn({ field: 'stockAuditProductBatchProductName', caption: 'Product', size: '120px' });
			    }
			    if(w2ui.grid4.columns[0].field=="stockAuditProductBatchPBatchName"){
					  w2ui['grid4'].removeColumn('stockAuditProductBatchPBatchName');
					    	 }
			    }
			    else{
			    	w2ui['grid4'].addColumn({ field: 'stockAuditProductBatchProductName', caption: 'Product', size: '120px' });
			    }
			  angular.copy(	$scope.ProductList,w2ui.grid4.records);
			  w2ui.grid4.refresh();
			  $scope.ShowStcockAudit.stockAuditProductStock=w2ui.grid4.getSelection().length+'/'+w2ui.grid4.records.length;


		  }
		  else{
			  $scope.ShowStcockAudit.stockAuditProductStock="";
			  for(i=0;i<$scope.ProductList.length;i++){
				  for(j=0;j<$scope.ProductList[i].stockAuditProductBatchList.length;j++){
					  $scope.BatchList.push($scope.ProductList[i].stockAuditProductBatchList[j]);
				  }
			  }
			  if(w2ui.grid4.columns.length!=0){

			    if(w2ui.grid4.columns[0].field=="stockAuditProductBatchPBatchName"){

			    }
			    else{
			  w2ui['grid4'].addColumn({ field: 'stockAuditProductBatchPBatchName', caption: 'Batch', size: '120px' });
			    }
			    if(w2ui.grid4.columns[0].field=="stockAuditProductBatchProductName"){
					  w2ui['grid4'].removeColumn('stockAuditProductBatchProductName');
					    	 }
			    }

			    else{
			    	w2ui['grid4'].addColumn({ field: 'stockAuditProductBatchPBatchName', caption: 'Batch', size: '120px' });
			    }

			  angular.copy($scope.BatchList,w2ui.grid4.records);
			  w2ui.grid4.refresh();
			  $scope.ShowStcockAudit.stockAuditBatchStock=w2ui.grid4.getSelection().length+'/'+w2ui.grid4.records.length;
		  }
	};*/
$scope.Save=function(){
	$scope.UnselectProdList=[];
	$scope.selectList=[];
	$scope.compdivisionList=[];
	$scope.NochangeList=[];
	$scope.UnselectList=[];
	$scope.selectComList=[];
	$scope.divList=[];
	$scope.UnselectdivList=[];
	$scope.productTypeList=[];
	$scope.UnselectComList=[];
	$scope.UnselecProdtypeList=[];
	$scope.selecProdtypeList=[];
	$scope.selectProdList=[];
	$scope.FinalCompSelectionList=[];
	$scope.FinalProdSelectionList=[];
	var saveType="Modify";
	var operationType="Unselect"
		if($scope.ShowStcockAudit.stockAuditId==undefined){
			$scope.ShowStcockAudit.stockAuditId=0;
			var saveType="New";
		}
	angular.copy($scope.CompanyDivisionList,$scope.ShowList);
	  if(saveType=="New"){
		  
		  //$scope.ShowStcockAudit.isCriteriaChanged=0;
		  
	for(i=0;i<$scope.ShowList.length;i++){
		$scope.divList=[];
		for(j=0;j<$scope.ShowList[i].companyDivisionsList.length;j++){
			if($scope.ShowList[i].companyDivisionsList[j].divisionSelected==1){

				$scope.ShowList[i].companySelected=1;
				operationType="Select";
				$scope.divList.push($scope.ShowList[i].companyDivisionsList[j]);
			}
		}
		if(operationType=="Select"){
			$scope.ShowList[i].companyDivisionsList=[];
			angular.copy($scope.divList,$scope.ShowList[i].companyDivisionsList);
			$scope.compdivisionList.push($scope.ShowList[i]);
			$scope.FinalCompSelectionList.push($scope.ShowList[i]);
		}
		operationType="UnSelect"
	}
         
	for(m=0;m<$scope.ProductTypeList.length;m++){
		if($scope.ProductTypeList[m].productTypeSelected==1){
			$scope.productTypeList.push($scope.ProductTypeList[m]);
			$scope.FinalProdSelectionList.push($scope.ProductTypeList[m]);
		}

	}
	
	  }
	  else{
		  for(i=0;i<$scope.ShowList.length;i++){
				$scope.divList=[];
				for(j=0;j<$scope.ShowList[i].companyDivisionsList.length;j++){
					if($scope.ShowList[i].companyDivisionsList[j].divisionSelected==1){

						$scope.ShowList[i].companySelected=1;
						operationType="Select";
						$scope.divList.push($scope.ShowList[i].companyDivisionsList[j]);
					}
				}
				if(operationType=="Select"){
					$scope.ShowList[i].companyDivisionsList=[];
					angular.copy($scope.divList,$scope.ShowList[i].companyDivisionsList);
					$scope.compdivisionList.push($scope.ShowList[i]);
					$scope.FinalCompSelectionList.push($scope.ShowList[i]);
				}
				operationType="UnSelect"
			}
		  angular.copy($scope.CompanyDivisionList,$scope.UnselectList);
		   for(m=0;m<$scope.getCompDivList.length;m++){
			   $scope.UnselectdivList=[];
			   $scope.selectdivList=[];
			   var ind3=akricksGetObjIndex($scope.UnselectList,{recid:$scope.getCompDivList[m].recid});
			       
			      for(n=0;n<$scope.getCompDivList[m].companyDivisionsList.length;n++){
			    	  var ind4=akricksGetObjIndex($scope.UnselectList[ind3].companyDivisionsList,{recid:$scope.getCompDivList[m].companyDivisionsList[n].recid});
			    	   if($scope.UnselectList[ind3].companyDivisionsList[ind4].divisionSelected==0){
			    		   $scope.UnselectdivList.push($scope.UnselectList[ind3].companyDivisionsList[ind4]);
			    	   }
			      }
			      $scope.UnselectList[ind3].companyDivisionsList=[];  
			      angular.copy( $scope.UnselectdivList,$scope.UnselectList[ind3].companyDivisionsList);
			         if($scope.UnselectList[ind3].companyDivisionsList.length!=0){
			      $scope.UnselectComList.push($scope.UnselectList[ind3])
			         }
			       
			       
		   }
		   angular.copy($scope.CompanyDivisionList,$scope.selectList);
		   for(m=0;m<$scope.getCompDivList.length;m++){
			   
			   $scope.selectdivList=[];
			   var ind3=akricksGetObjIndex($scope.selectList,{recid:$scope.getCompDivList[m].recid});
			       
			      for(n=0;n<$scope.getCompDivList[m].companyDivisionsList.length;n++){
			    	  var ind4=akricksGetObjIndex($scope.selectList[ind3].companyDivisionsList,{recid:$scope.getCompDivList[m].companyDivisionsList[n].recid});
			    	   if($scope.selectList[ind3].companyDivisionsList[ind4].divisionSelected==1){
			    		   $scope.selectdivList.push($scope.selectList[ind3].companyDivisionsList[ind4]);
			    	   }
			      }
			      $scope.selectList[ind3].companyDivisionsList=[];  
			      angular.copy( $scope.selectdivList,$scope.selectList[ind3].companyDivisionsList);
			        if($scope.selectList[ind3].companyDivisionsList.length!=0){
			      $scope.selectComList.push($scope.selectList[ind3])
			        }
			       
			       
		   }
		   for(a=0;a<$scope.selectComList.length;a++){
			   $scope.alist=[]
			   var ind4=akricksGetObjIndex($scope.compdivisionList,{recid:$scope.selectComList[a].recid});
			     for(i=0;i<$scope.selectComList[a].companyDivisionsList.length;i++){
			    	  var ind5=akricksGetObjIndex($scope.compdivisionList[ind4].companyDivisionsList,{recid:$scope.selectComList[a].companyDivisionsList[i].recid});
			    	  $scope.alist.push(ind5);
			     }
			     $scope.alist.sort().reverse();
			       for(k=0;k<  $scope.alist.length;k++){
			    	   y=$scope.alist[k];
			    	   $scope.compdivisionList[ind4].companyDivisionsList.splice(y,1);
			       }  
			       if($scope.compdivisionList[ind4].companyDivisionsList.length==0){
			    	   $scope.compdivisionList.splice(ind4,1);
			       }
		   }
		     for(b=0;b<$scope.UnselectComList.length;b++){
		    	 var ind6=akricksGetObjIndex($scope.compdivisionList,{recid:$scope.UnselectComList[b].recid});
		    	   if(ind6!=-1){
		    	   for(l=0;l<$scope.UnselectComList[b].companyDivisionsList.length;l++){
		    		   $scope.compdivisionList[ind6].companyDivisionsList.push($scope.UnselectComList[b].companyDivisionsList[l]);
		    	   }
		    	   }
		    	   else{
		    		   $scope.compdivisionList.push($scope.UnselectComList[b]);
		    	   }
		     }
		     for(m=0;m<$scope.ProductTypeList.length;m++){
		 		if($scope.ProductTypeList[m].productTypeSelected==1){
		 			$scope.productTypeList.push($scope.ProductTypeList[m]);
		 			$scope.FinalProdSelectionList.push($scope.ProductTypeList[m]);
		 		}

		 	}
		     angular.copy($scope.ProductTypeList,$scope.UnselectProdList);
		     for(o=0;o<$scope.getproductTypeList.length;o++){
		    	 
		    	 var ind7=akricksGetObjIndex($scope.UnselectProdList,{recid:$scope.getproductTypeList[o].recid});
		    	  if($scope.UnselectProdList[ind7].productTypeSelected==0){
		    		  $scope.UnselecProdtypeList.push($scope.UnselectProdList[ind7]);
		    	  }
		    	 
		     }
		     angular.copy($scope.ProductTypeList,$scope.selectProdList);
		     for(o=0;o<$scope.getproductTypeList.length;o++){
		    
		    	 var ind7=akricksGetObjIndex($scope.selectProdList,{recid:$scope.getproductTypeList[o].recid});
		    	  if($scope.selectProdList[ind7].productTypeSelected==1){
		    		  $scope.selecProdtypeList.push($scope.selectProdList[ind7]);
		    	  }
		    	 
		     }
		      for(r=0;r<$scope.selecProdtypeList.length;r++){
		    	  $scope.indexList=[];
		    	  var ind8=akricksGetObjIndex($scope.productTypeList,{recid:$scope.selecProdtypeList[r].recid});
		    	  $scope.productTypeList.splice(ind8,1);
		      }
		      for(v=0;v<$scope.UnselecProdtypeList.length;v++){
		    	 
		    	  var ind8=akricksGetObjIndex($scope.productTypeList,{recid:$scope.UnselecProdtypeList[v].recid});
		    	  $scope.productTypeList.push($scope.UnselecProdtypeList[v]);
		    	  
		      }
		  
		      for(t=0;t<w2ui.grid5.records.length;t++){
		    	  var ind8=akricksGetObjIndex($scope.BatchProductList,{recid:w2ui.grid5.records[t].recid});
		    	  var recid=w2ui.grid5.records[t].recid;
		    	     if(w2ui.grid5.records[t].changes!=undefined){
		    	    	  if(w2ui.grid5.records[t].changes.stockAuditProductAuditQty!=undefined || w2ui.grid5.records[t].changes.stockAuditProductBatchAuditByName!=undefined){
		    	    		  $scope.BatchProductList[ind8].stockAuditProductAuditQty=w2ui.grid5.records[t].changes.stockAuditProductAuditQty;
		    	    		  $scope.BatchProductList[ind8].stockAuditProductMismatchQty=  $scope.BatchProductList[ind8].stockAuditProductSystemQty-$scope.BatchProductList[ind8].stockAuditProductAuditQty
		    	    		  $scope.ShowStcockAudit.stockAuditTotalAuditQty=   $scope.ShowStcockAudit.stockAuditTotalAuditQty+$scope.BatchProductList[ind8].stockAuditProductAuditQty;
		    	    		  $scope.BatchProductList[ind8].stockAuditProductBatchAuditByName=w2ui.grid5.records[t].changes.stockAuditProductBatchAuditByName;
		    	    		 
		    	    	  }
		    	     }
		    	        if(w2ui['subgrid-'+recid]!=undefined){
		    	       for(w=0;w<w2ui['subgrid-'+recid].records.length;w++){
		    	    	   var ind9=akricksGetObjIndex($scope.BatchProductList[ind8].stockAuditProductBatchList,{recid:w2ui['subgrid-'+recid].records[w].recid});
		    	    	    if(w2ui['subgrid-'+recid].records[w].changes!=undefined){
		    	    	    	if(w2ui['subgrid-'+recid].records[w].changes.stockAuditProductBatchAuditQty!=undefined || w2ui['subgrid-'+recid].records[w].changes.stockAuditProductBatchAuditByName!=undefined){
		    	    	    		$scope.BatchProductList[ind8].stockAuditProductBatchList[ind9].stockAuditProductBatchAuditQty=w2ui['subgrid-'+recid].records[w].changes.stockAuditProductBatchAuditQty;
		    	    	    		$scope.BatchProductList[ind8].stockAuditProductBatchList[ind9].stockAuditProductBatchMismatchQty=$scope.BatchProductList[ind8].stockAuditProductBatchList[ind9].stockAuditProductBatchSystemQty-$scope.BatchProductList[ind8].stockAuditProductBatchList[ind9].stockAuditProductBatchAuditQty;
		    	    	    		  $scope.ShowStcockAudit.stockAuditTotalAuditQty=  $scope.ShowStcockAudit.stockAuditTotalAuditQty+$scope.BatchProductList[ind8].stockAuditProductBatchList[ind9].stockAuditProductBatchAuditQty
		    	    	    		$scope.BatchProductList[ind8].stockAuditProductBatchList[ind9].stockAuditProductBatchAuditByName=w2ui['subgrid-'+recid].records[w].changes.stockAuditProductBatchAuditByName
		    	    	    	}
		    	    	    }
		    	       }
		    	        }
		      }
		      for(t=0;t<w2ui.grid6.records.length;t++){
		    	  var ind8=akricksGetObjIndex($scope.BatchProductList,{recid:w2ui.grid6.records[t].recid});
		    	  var recid=w2ui.grid6.records[t].recid;
		    	     if(w2ui.grid6.records[t].changes!=undefined){
		    	    	  if(w2ui.grid6.records[t].changes.stockAuditProductBatchRemark!=undefined){
		    	    		  $scope.BatchProductList[ind8].stockAuditProductBatchRemark=w2ui.grid6.records[t].changes.stockAuditProductBatchRemark;
		    	    		 
		    	    		  
		    	    	  }
		    	     }
		    	        if(w2ui['subgrid-'+recid]!=undefined){
		    	       for(w=0;w<w2ui['subgrid-'+recid].records.length;w++){
		    	    	   var ind9=akricksGetObjIndex($scope.BatchProductList[ind8].stockAuditProductBatchList,{recid:w2ui['subgrid-'+recid].records[w].recid});
		    	    	    if(w2ui['subgrid-'+recid].records[w].changes!=undefined){
		    	    	    	if(w2ui['subgrid-'+recid].records[w].changes.stockAuditProductBatchRemark!=undefined ){
		    	    	    		$scope.BatchProductList[ind8].stockAuditProductBatchList[ind9].stockAuditProductBatchRemark=w2ui['subgrid-'+recid].records[t].changes.stockAuditProductBatchRemark;
		    	    	    		//$scope.BatchProductList[ind8].stockAuditProductBatchList[ind9].stockAuditProductBatchRemark=w2ui['subgrid-'+recid].records[t].changes.stockAuditProductBatchRemark;
		    	    	    	}
		    	    	    }
		    	       }
		    	        }
		      }
		     
		     
	  }
	   
	 
	  if($('#find_product').attr('class')=="ArrowBtnPos1"){
		   $scope.ShowStcockAudit.findProductSelected=false;
	   }
	  /* if($scope.compdivisionList.length==0 &&  $scope.productTypeList.length==0){
		   $scope.ShowStcockAudit.isCriteriaChanged=0;
	   } else{
		   if($scope.ShowStcockAudit.findProductSelected==true){
			   $scope.ShowStcockAudit.isCriteriaChanged=1;
		   } 
		   else{
		   $scope.ShowStcockAudit.isCriteriaChanged=0;
		   }
		   
	   }*/
	  
	   if(w2ui.grid4.getSelection().length==0){
			 $scope.ShowStcockAudit.physicalStcockEntry=true;
		  }
		else{
			 $scope.ShowStcockAudit.physicalStcockEntry=false;
		}
		 if($scope.ShowStcockAudit.stockAuditFlgLockDataEntry!=undefined){
		 if($scope.ShowStcockAudit.stockAuditFlgLockDataEntry==false){
			 $scope.ShowStcockAudit.selectLockDataEntry=true;
		  }
		 else{
			 $scope.ShowStcockAudit.selectLockDataEntry=false;
			 
		 } 
		 }
	  $scope.ShowStcockAudit.stockAuditTotalProduct=w2ui.grid4.records.length;
	  $scope.ShowStcockAudit.companyDivisionSelectedList=$scope.compdivisionList;
	  $scope.ShowStcockAudit.productTypeList=$scope.productTypeList;
	  $scope.ShowStcockAudit.saProductList= $scope.BatchProductList;
	              
	    
	var json1=angular.toJson($scope.ShowStcockAudit);

	var json={entity:1,userId:$scope.activeUser.userId,token:$scope.activeUser.token,requestData:json1};

	$http({
		method: 'POST',
		url: "http://localhost:8080/Purple/rest/apiStockAudit/setStockAudit",
		async:false,
		data:JSON.stringify(json),
		headers: {'Content-Type': 'application/json'}
	}).success(function(data, status, headers, config) {
		if(data.responseCode == 200){
			 if(saveType=="New"){
			$scope.FindBatchList=[];
			var returnObj=JSON.parse(data.responseData);
			$scope.newFlag=true;
			angular.copy(returnObj,$scope.ShowStcockAudit);
			angular.copy($scope.FinalCompSelectionList,returnObj.companyDivisionSelectedList);
			angular.copy($scope.FinalProdSelectionList,returnObj.productTypeList);
			angular.copy($scope.ShowStcockAudit.companyDivisionSelectedList,$scope.getCompDivList);
			angular.copy($scope.ShowStcockAudit.productTypeList,$scope.getproductTypeList);
			angular.copy($scope.ShowStcockAudit.saProductList,$scope.BatchProductList)
			angular.copy(akricksFilter($scope.BatchProductList,{productBatchSelected:true}),$scope.FindProducList);
			  for(i=0;i<$scope.FindProducList.length;i++){
				angular.copy(akricksFilter($scope.FindProducList[i].stockAuditProductBatchList,{productBatchSelected:true}),$scope.FindBatchList)
				$scope.FindProducList[i].stockAuditProductBatchList=[];
				  for(j=0;j<$scope.FindBatchList.length;j++){
				$scope.FindProducList[i].stockAuditProductBatchList.push($scope.FindBatchList[j]);
				  }
			  }
			  for(l=0;l<$scope.FindProducList.length;l++){
				   if($scope.FindProducList[l].stockAuditProductAuditQty==0){
					   $scope.FindProducList[l].stockAuditProductAuditQty="";
				   }
				    for(r=0;r<$scope.FindProducList[l].stockAuditProductBatchList.length;r++){
				    	if($scope.FindProducList[l].stockAuditProductBatchList[r].stockAuditProductBatchAuditQty==0){
				    		$scope.FindProducList[l].stockAuditProductBatchList[r].stockAuditProductBatchAuditQty="";
				    		
				    	}
				    }
			 }
			angular.copy($scope.FindProducList,w2ui.grid5.records);
			w2ui.grid5.refresh();
			w2ui.grid.records.unshift($scope.ShowStcockAudit);
			w2ui.grid.refresh();
			
			 }
			 else{
				   $scope.FindBatchList=[];
					var returnObj=JSON.parse(data.responseData);
				
					angular.copy($scope.FinalCompSelectionList,returnObj.companyDivisionSelectedList);
					angular.copy($scope.FinalProdSelectionList,returnObj.productTypeList);
					angular.copy(returnObj,$scope.ShowStcockAudit);	   
					angular.copy($scope.ShowStcockAudit.companyDivisionSelectedList,$scope.getCompDivList);
					angular.copy($scope.productTypeList,$scope.getproductTypeList);
					angular.copy($scope.ShowStcockAudit.saProductList,$scope.BatchProductList)
					angular.copy(akricksFilter($scope.BatchProductList,{productBatchSelected:true}),$scope.FindProducList);
					  for(i=0;i<$scope.FindProducList.length;i++){
						angular.copy(akricksFilter($scope.FindProducList[i].stockAuditProductBatchList,{productBatchSelected:true}),$scope.FindBatchList)
						$scope.FindProducList[i].stockAuditProductBatchList=[];
						  for(j=0;j<$scope.FindBatchList.length;j++){
						$scope.FindProducList[i].stockAuditProductBatchList.push($scope.FindBatchList[j]);
						  }
					  }
					 for(l=0;i<$scope.FindProducList.length;l++){
						   if($scope.FindProducList[l].stockAuditProductAuditQty==0){
							   $scope.FindProducList[l].stockAuditProductAuditQty="";
						   }
						    for(r=0;$scope.FindProducList[l].stockAuditProductBatchList.length;r++){
						    	if($scope.FindProducList[l].stockAuditProductBatchList[r].stockAuditProductBatchAuditQty==0){
						    		$scope.FindProducList[l].stockAuditProductBatchList[r].stockAuditProductBatchAuditQty="";
						    		
						    	}
						    }
					 }
					for(m=0;m<$scope.FindProducList.length;m++){
						recsid=$scope.FindProducList[m].recid;
						if(w2ui['subgrid-' +recsid]==undefined){

						}
						else{
							angular.copy($scope.FindProducList[m].stockAuditProductBatchList,w2ui['subgrid-' +recsid].records)
							w2ui['subgrid-' +recsid].save();
						}
					}
					  w2ui.grid5.save();
					
					//  angular.copy(w2ui.grid5.records,$scope.FindProducList);
					  w2ui.grid5.refresh();
					angular.copy($scope.FindProducList,w2ui.grid5.records);
					angular.copy($scope.FindProducList,$scope.StockAuditReportList);
					  angular.copy($scope.StockAuditReportList,w2ui.grid6.records);
					w2ui.grid6.refresh();
					for(m=0;m<$scope.StockAuditReportList.length;m++){
						recsid=$scope.StockAuditReportList[m].recid;
						if(w2ui['subgrid-' +recsid]==undefined){

						}
						else{
							angular.copy($scope.StockAuditReportList[m].stockAuditProductBatchList,w2ui['subgrid-' +recsid].records)
							w2ui['subgrid-' +recsid].save();
						}
					}
					  w2ui.grid6.save();
					 
					var ind=akricksGetObjIndex(w2ui.grid.records,{recid:$scope.ShowStcockAudit.recid});
					angular.copy($scope.ShowStcockAudit,w2ui.grid.records[ind]);
					w2ui.grid.refresh();
					
					
					//$scope.ShowStcockAudit.stockAuditSnap=$scope.ProductSnapshotList[1].id;
					 
			 }
			 if($scope.ShowStcockAudit.stockAuditFlgLockSaleHistory!=undefined){
			 if($scope.ShowStcockAudit.stockAuditFlgLockSaleHistory==true){
				 $scope.ShowStcockAudit.stockAuditFlgLockSaleHistory="Yes";
			 }
			 }
			/* if($scope.ShowStcockAudit.tockAuditFlgLockDataEntry==true){
				 $scope.StockAuditFlag=true;
			 }*/
			/*if(w2ui.grid4.getSelection().length==0){
				 $scope.ShowStcockAudit.physicalStcockEntry=true;
			  }
			else{
				 $scope.ShowStcockAudit.physicalStcockEntry=false;
			}
			
			 if($scope.ShowStcockAudit.stockAuditFlgLockDataEntry==false){
				 $scope.ShowStcockAudit.selectLockDataEntry=true;
			  }
			 else{
				 $scope.ShowStcockAudit.selectLockDataEntry=false;
			 }*/
			  
			 if( $scope.ShowStcockAudit.findProductSelected==true){
				 $scope.ShowStcockAudit.stockAuditSnap=$scope.ProductSnapshotList[1].id
		     }
			if($scope.ShowStcockAudit.stockAuditResult.id==0){
				$scope.stockAuditResults="Satisfactory";
			}else{
				$scope.stockAuditResults="Non-Satisfactory"
			}
			
///test      
			var newrecid= $scope.ShowStcockAudit.recid
			 $scope.ShowStcockAudit={};
			 angular.copy($scope.ShowStcockAudit,$scope.masterRecord);
			 w2ui.grid.unselect(newrecid);
			 w2ui.grid.select(newrecid);
			 $scope.newFlag=false;
			 //w2ui.grid.select()
			/*ngToast.create({
				className: 'success',
				content: '<span>Data Loaded successfully...</span>',
				timeout: 3000,
				animation:'fade'
			});
				*/
				
		}else{
			alert('Purpleaid Error Manager \n'+data.responseCode);
			//$scope.spinner=false;
		}
	}).error(function(data, status, headers, config) { 
		//$scope.spinner=false;
		return false;

	});
};
/*$scope.DisableButton=function(){
	if(w2ui.grid4.getSelection().length==0){
		return true;
	}
	else{
		return false;
	}
	if($scope.isGridDirty==true){
		return true;
	}
	else{
		return false;
	}
};*/
/*$scope.DisableButton2=function(){
	if(w2ui.grid.records.length==0 || $scope.StockAuditFlag==false){
		return true;
	}
	else{
		return false;
	}
	
};*/
/*$scope.DisableProductSnapShot=function(){
	if($scope.ShowStcockAudit.stockAuditId==undefined){
		return true;
	}
	else{
		return false;
	}
	
};*/
$scope.New=function(){
	$scope.ShowStcockAudit={};
	w2ui.grid3.selectNone();
	w2ui.grid4.records=[];
	w2ui.grid4.refresh();
	w2ui.grid5.records=[];
	w2ui.grid6.records=[];
	/*for(a=0;a<w2ui.grid2.getSelection().length;a++){
		w2ui.grid2.unselect(w2ui.grid2.getSelection()[a]);
	}*/
	w2ui.grid2.selectNone();
	for(i=0;i<w2ui.grid2.records.length;i++){
		w2ui.grid2.collapse(w2ui.grid2.records[i].recid);
	}
	//w2ui.grid4.selectNone();
	$scope.ShowStcockAudit.physicalStcockEntry=true;
	$scope.ShowStcockAudit.selectLockDataEntry=true;
	 $('#find_product').removeClass().addClass('ArrowBtnPos');
	 $scope.ShowStcockAudit.stockAuditSnap=$scope.ProductSnapshotList[0].id
	 $scope.ShowStcockAudit.stockAuditBatchSelected=0;
	 $scope.ShowStcockAudit.stockauditTotalBatch=0;
	$scope.ShowStcockAudit.stockAuditProdectSelected=0;
	$scope.ShowStcockAudit.stockAuditTotalProduct=0;
	 $scope.ShowStcockAudit.stockAuditBatchStock=	$scope.ShowStcockAudit.stockAuditBatchSelected+'/'+ $scope.ShowStcockAudit.stockauditTotalBatch;
	 $scope.ShowStcockAudit.stockAuditProductStock=	$scope.ShowStcockAudit.stockAuditProdectSelected+'/'+ $scope.ShowStcockAudit.stockAuditTotalProduct;
	 $scope.ShowStcockAudit.findProductSelected=true;
}
$scope.getRandomProduct=function(){
	$scope.randomList=[];
	for(a=0;a<w2ui.grid4.getSelection().length;a++){
		w2ui.grid4.unselect(w2ui.grid4.getSelection()[a]);
	}
	$scope.SelectBatchList=[];
   //  $scope.Expandall();
	  for(m=0;m<$scope.BatchProductList.length;m++){
		    for(n=0;n<$scope.BatchProductList[m].stockAuditProductBatchList.length;n++){
		    	$scope.SelectBatchList.push($scope.BatchProductList[m].stockAuditProductBatchList[n]);
		    }
	  }
	for(i=0;i<$scope.BatchProductList.length;i++){
		  for(k=0;k<$scope.BatchProductList[i].stockAuditProductBatchList.length;k++){
			  $scope.randomList.push($scope.BatchProductList[i].stockAuditProductBatchList[k].recid);
		  }
		
	}

	sub=purpleRandomArraySelection($scope.randomList,$scope.ShowStcockAudit.randomSelection)
	/*for(j=0;j<b.length;j++){
		w2ui.grid4.select(b[j]);
	}*/
	/*for(i=0;i<w2ui.grid4.records.length;i++){
		for(j=0;j<b.length;j++){
			var ind=akricksGetObjIndex(w2ui.grid4.records[i].stockAuditProductBatchList,{recid:b[j]});
			  if(ind!=-1){
			w2ui['subgrid-'+w2ui.grid4.records[i].recid].select(b[j]);
			  }
		}
	}*/
	      
		 for(j=0;j<sub.length;j++){
			 var ind=akricksGetObjIndex($scope.SelectBatchList,{recid:sub[j]});
			     if(ind!=1){
			    	 var recid=$scope.SelectBatchList[ind].recid;
			    	   var ind2=akricksGetObjIndex($scope.BatchProductList,{recid:$scope.SelectBatchList[ind].stockAuditProductBatchProductId});
			    	  /* typegrid="subgrid";
			    	   types="grid";
			    	   w2ui.grid4.select(w2ui.grid4.records[ind2].recid);
			    	   typegrid="grid";
			    	   types="grid";*/
			    	     if(ind!=-1){
			    	    	 var ind3=akricksGetObjIndex($scope.BatchProductList[ind2].stockAuditProductBatchList,{recid:$scope.SelectBatchList[ind].recid});
			    	    	 if(ind3!=-1){
			    	    		   if(w2ui['subgrid-'+ind2]!=undefined){
			    	    			   w2ui['subgrid-'+ind2].select( w2ui['subgrid-'+ind2].records[ind3].recid);
			    	    		   }
			    	    		   else{
			    	    		 $scope.BatchProductList[ind2].stockAuditProductBatchList[ind3].productBatchSelected=true;
			    	    		 $scope.BatchProductList[ind2].productBatchSelected=true;
			    	    		   }
			    	    		  
			    	    	 }
			    	     }
			     }
			  
	 }
};
$scope.Collpaseall=function(){
	for(i=0;i<w2ui.grid2.records.length;i++){
		w2ui.grid2.collapse(w2ui.grid2.records[i].recid);
		//return flag;
	}		  

};
$scope.Expandall=function(){
	for(i=0;i<w2ui.grid4.records.length;i++){
		w2ui.grid4.expand(w2ui.grid4.records[i].recid);
		//return flag;
	}		  

};
$scope.Expandallgrid=function(){
	for(i=0;i<w2ui.grid5.records.length;i++){
		w2ui.grid5.expand(w2ui.grid5.records[i].recid);
		//return flag;
	}		  

};
$scope.showFilterPopup=function(){
	$modal.open({
		templateUrl:'partials/popup/StockAuditFilter.jsp',
		controller :'StockAuditfilterCtrl',
		backdrop: 'static',
		size:'lg',
		windowClass: 'Filter_Medium_Left-Model'


	}).result.then(function(result) {

		//$scope.getAllTotal();
	});
};

$scope.manageFindProductFlag=function(record,action,callType){
	  /////martial 		
	 	 if(callType==1){
	 	if(action){
	 		/*var index=akricksGetObjIndex(akricksFilter($scope.ShowStcockAudit.companyDivisionSelectedList,{companyId:record.divisionCompanyId})[0],{divisionId:record.recid});
	 		if(index == -1){
	 			$scope.ShowStcockAudit.findProductSelected=
	 		}*/
	 	}	 
	 		 
	 		 
	 	 }else if(callType==2){
	 		if(action){
		 		var index=akricksGetObjIndex($scope.ShowStcockAudit.productTypeList,{recid:record.recid});
		 		if(index == -1){
		 			$scope.ShowStcockAudit.findProductSelected=false;
		 		}
		 	}	 
	 	 }
	 		 
	$scope.ShowStcockAudit.companyDivisionSelectedList
	;
};
$scope.cancelFilter = function(){
	$scope.filter={stockAuditId:0,auditOutcome:0,auditResult:0,auditFlgSaleLock:0,fromDate:"",toDate:""}
	$scope.filterStatus='OFF';
	$scope.maxId=0;
	$scope.GetStockAuditDetails();
};
}]);


function purpleRandomArraySelection(source,elementNo){ 
	if(source.length==0){
		return false;
	}
	source=shuffle(source);
	source=source.splice(0,elementNo); 
	return source; 
};
function shuffle(array) {
	var tmp, current, top = array.length;
	if(top) while(--top) {
		current = Math.floor(Math.random() * (top + 1));
		tmp = array[current];
		array[current] = array[top];
		array[top] = tmp;
	}
	return array;
};