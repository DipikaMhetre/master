<title>Stock Manager</title>
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div>
	<div id="StockManager" data-ng-controller="StockManagerCtrl"
		ng-init=init()>
		<toast></toast>
		<%
			List<PurpleaidACL> xyz= new ArrayList();
				xyz=(ArrayList<PurpleaidACL>) request.getSession().getAttribute("permissionList"); 
				Boolean createPermission = false;
				Boolean modifyPermission = false;
				Boolean deletePermission = false;
				Boolean modifyPurchaseDatePermission = false;//extra
				String x=xyz.get(0).toString();
				for(int i=0;i<xyz.size();i++){
			Double d = new Double(xyz.get(i).getPurpleaidACLpermissionID());
			int n=d.intValue();
			 switch (n) {
			            case 50: deletePermission = true;;//delete 
			                    break;
			            case 49: createPermission = true;//create
			            		break;	
			            case 51: modifyPermission = true;
		                		break;     			
		       			default:break;		
			} 		
				}
		%>
		<Section class="pageheader">
			<nav class="mainnav">
				<ul class="leftFloat" id="list-nav">
					<li><a href="#" title="" class="highlight_purple not_active">Stock
							Manager</a></li>
					<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
					<li><a
						ng-click="$parent.changeView(activeUser.userId,activeUser.token,48);"
						title="Start Over" class="">Refresh</a></li>
					<li><a href="#" title="Export"
						class="not_implemented_link not_active">Export</a></li>
					<li><a href="#" title="Print"
						class="not_implemented_link not_active">Email</a></li>
					<li><a href="#" title="Print"
						class="not_implemented_link not_active">Print</a></li>
					<%
						if(createPermission || modifyPermission){
					%>
					<li ng-show="showSaveBtn"><a ng-click="saveFlags()"
						title="Save" class="">Save</a></li>
					<%
						}
					%>
				</ul>
				<ul class="rightFloat_Menu">
					<li><a class=" not_active marginZero textCenter">Satyajeet
							Toradmal</a> <a href="#" title="Todays Date"
						class=" not_active marginZero textCenter"> <span
							style="font-size: 12px;" id="date_time"></span> <script
								type="text/javascript">
								window.onload = date_time('date_time');
							</script></a></li>
					<li class="editable_btnPos">
						<button type="button" ng-class="editable ? 'flagselected' : ''"
							class="btn btn-default flag_enable input-sm editable-btn"
							tabindex="20">
							<span class="fieldLeft_spacing_lg"
								ng-click="editable=!editable;$root.editable=!$root.editable">Editable</span>
						</button>
					</li>
				</ul>
			</nav>
		</Section>
		<nav class="navbar navbar_master1"></nav>
		<div class="row container">
			<div class="col-md-2 sectiondivider">
				<div class="master_leftUpper1">
					<div class="row">
						<select id="sm_company" class="input-sm masterPage_grid"
							data-ng-options="opt.companyName for opt in showCompanyList"
							ng-model="showCompanySelected"
							ng-change="onCompanySelection(showCompanySelected)"
							ng-disabled="!editable" placeholder="Please select company"
							tabindex="1">
							<option value='' disabled selected style='display: none;'>Please
								select a Company</option>
						</select>

					</div>
					<div class="row masterPage_gridText masterPage_fieldSpacing">
						<span>Following are the divisions to selected company.</span>
					</div>
				</div>
				<div class="row masterPage_fieldSpacing">
					<!--=============GRID==========  -->
					<div id="grid" tabindex="-1" class="stockManager_LeftGride"></div>
					<!--=============GRID==========  -->
				</div>
				<!-- <div class="row master_filterPos">
				class="not_implemented_link not_active"
				<a ng-click="showPopup()" class="not_implemented_link not_active" title="Filter">Filter(<span
					ng-if="filterStatus=='on'" id="filterStatusOn" class="purpleText">{{filterStatus}}</span><span
					ng-if="filterStatus=='off'" id="filterStatusOff" class="purpleText">{{filterStatus}}</span>)
				</a>
			</div> -->
			</div>
			<div class="col-md-10">
				<div class="">
					<div class="row masterTop_GrayStrip">
						<h6>
							<span class="masterTop_StripText">Stock
								Manager&nbsp;-&nbsp; <span ng-show="productGrid"
								class="masterHeading">Product Grid</span> <span
								ng-hide="productGrid" class="masterHeading">Batch Grid</span>
							</span>
						</h6>
					</div>
					<div class=" row fieldsSpacing">
						<div class="col-md-6">
							<nav class="mainnav">
								<div class="switch-wrapper">
									<input id="slider" type="checkbox" checked>
								</div>
							</nav>
						</div>
						<div class="col-md-6">
							<nav class="mainnav">
								<ul class="rightFloat">
									<li><a
										ng-click="lockedStatus=!lockedStatus;filterActiveAndLock();"
										title="Show Selected" class="">Show Locked<span
											ng-show="lockedFlag == 'ON'" class="highlight_purple">({{lockedFlag}})</span><span
											ng-show="lockedFlag == 'OFF'" class="">({{lockedFlag}})</span></a>
									</li>
									<li><a
										ng-click="activeStatus=!activeStatus;filterActiveAndLock();"
										title="Show Selected" class="">Show Active<span
											ng-show="activeFlag == 'ON'" class="highlight_purple">({{activeFlag}})</span><span
											ng-show="activeFlag == 'OFF'" class="">({{activeFlag}})</span></a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<div ng-show="productGrid" class="row fieldsSpacing">
						<!--=============GRID==========  -->
						<div id="grid4" tabindex="-1" class="stockManagerRightGride"></div>
						<!--=============GRID==========  -->
					</div>
					<div ng-hide="productGrid" class="row fieldsSpacing">
						<!--=============GRID==========  -->
						<div id="grid2" tabindex="-1" class="stockManagerRightGride"></div>
						<!--=============GRID==========  -->
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-9">
							<div class="row" ng-show="productGrid">
								<!-- <span class="col-md-6"> <input class="checkBox" type="checkbox" tabindex="15" onclick="if (this.checked) w2ui['grid4'].selectAll();                      else w2ui['grid4'].selectNone();                      if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;">
								 <span>Select All/Deselect All</span>
							</span> -->
							</div>
						</div>
					</div>
					<div class="row fieldsSpacing stockManagerBtnRow">
						<div class="col-md-2">
							<div class="row">
								<button id="BatchScheme" class="btn btnBatchScheme myButton"
									ng-disabled="buttonColorChange('BatchScheme')||!editable"
									ng-click="showBatchSchemePopup()">Batch Scheme</button>
							</div>
						</div>
						<div class="col-md-5">
							<div class="row">
								<div class="col-md-6">
									<button id="ChangeBatchDetails"
										class="btn opt_btn_small myButton"
										ng-disabled="buttonColorChange('ChangeBatchDetails')||!editable"
										ng-click="showChangeBatchDetailsPopup()">Change Batch
										Details</button>
								</div>
								<div class="col-md-6">
									<button id="StockAdjustments"
										class="btn opt_btn_small myButton"
										ng-disabled="buttonColorChange('StockAdjustments')||!editable"
										ng-click="showStockAdjustmentPopup()">Stock
										Adjustments</button>
								</div>
							</div>
						</div>
						<div class="col-md-5">
							<div class="row">
								<div class="col-md-6">
									<button id="TMBatch" class="btn opt_btn_small myButton"
										ng-disabled="buttonColorChange('TMBatch')||!editable"
										ng-click="showTransMergeBatchPopup()">Transfer/Merge
										Batch</button>
								</div>
								<div class="col-md-6">
									<button id="ReassignProduct"
										class="btn  opt_btn_small myButton1"
										ng-disabled="productButtonColorChange('ReassignProduct')||!editable"
										ng-click="showReassignProductPopup()">Reassign
										Product(s)</button>
								</div>
							</div>
						</div>
					</div>
					<div class="row stockManagerBtn_infoText1">
						<div class="col-md-2">
							<span class="stockManager_BatchSchemeBtn_belowText">Select&nbsp;a&nbsp;single&nbsp;batch&nbsp;for&nbsp;this
							</span>
						</div>
						<div class="col-md-5">
							<div class="row">
								<div class="col-md-6 stockManagerBtn_infoText">
									<span>Select&nbsp;a&nbsp;single&nbsp;batch&nbsp;for&nbsp;this
									</span>
								</div>
								<div class="col-md-6 stockManagerBtn_infoText">
									<span>Select&nbsp;a&nbsp;single&nbsp;batch&nbsp;for&nbsp;this
									</span>
								</div>
							</div>
						</div>
						<div class="col-md-5">
							<div class="row">
								<div class="col-md-6 stockManagerBtn_infoText">
									<span>Select&nbsp;a&nbsp;single&nbsp;batch&nbsp;for&nbsp;this</span>
								</div>
								<div class="col-md-6 stockManagerBtn_infoText">
									<span>Select&nbsp;Product(s)&nbsp;for&nbsp;this</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- <script src="components/jquery/jquery.switchButton.js"></script> -->
	<script type="text/javascript">
		$(function() {
			var pstyle = 'background-color: #F5F6F7; border: 1px solid #dfdfdf; padding: 5px;';
			$('#grid4').w2layout({
				name : 'layout4',
				panels : [ {
					type : 'top',
					size : 50,
					resizable : true,
					style : pstyle,
					content : 'top'
				}, {
					type : 'left',
					size : 200,
					resizable : true,
					style : pstyle,
					content : 'left'
				}, {
					type : 'main',
					style : pstyle,
					content : 'main'
				}, {
					type : 'preview',
					size : '50%',
					resizable : true,
					style : pstyle,
					content : 'preview'
				}, {
					type : 'right',
					size : 200,
					resizable : true,
					style : pstyle,
					content : 'right'
				}, {
					type : 'bottom',
					size : 50,
					resizable : true,
					style : pstyle,
					content : 'bottom'
				} ]
			});
			$('#grid4')
					.w2grid(
							{

								name : 'grid4',
								show : {
									toolbar : true,
									toolbarDelete : false,
									toolbarAdd : false,
									selectColumn : true
								},
								columns : [
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
								{
									field : 'grProductBatchProductId',
									caption : 'ProductId',
									size : '7%',
									style : 'text-align: left',
									resizable : false,
									sortable : true
								}, {
									field : 'grProductBatchProductName',
									caption : 'Product Name',
									size : '7%',
									style : 'text-align: left',
									resizable : false,
									sortable : true
								}, {
									field : 'grProductBatchNo',
									caption : 'Batch#',
									size : '7%',
									style : 'text-align: left',
									resizable : false,
									sortable : true
								}, {
									field : 'grProductBatchDivisionName',
									caption : 'Division Name',
									size : '7%',
									style : 'text-align: left',
									resizable : false,
									sortable : true
								}, {
									field : 'quantity',
									caption : 'Quantity',
									size : '7%',
									style : 'text-align: left',
									resizable : false,
									sortable : true
								}, {
									field : 'free',
									caption : 'Free',
									size : '7%',
									style : 'text-align: left',
									resizable : false,
									sortable : true
								}, {
									field : 'freeStock',
									caption : 'recid',
									hidden : true
								}, {
									field : 'stock',
									caption : 'recid',
									hidden : true
								}, {
									field : 'grProductBatchMRP',
									caption : 'MRP',
									size : '7%',
									style : 'text-align: left',
									resizable : false,
									sortable : true
								}, {
									field : 'grProductBatchPurchaseRate',
									caption : 'Purchase rate',
									size : '7%',
									style : 'text-align: left',
									resizable : false,
									sortable : true
								}, {
									field : 'grProductBatchVAT',
									caption : 'VAT',
									size : '7%',
									style : 'text-align: left',
									resizable : false,
									sortable : true
								}, {
									field : 'grProductBatchSellRate',
									caption : 'Sell Rate',
									size : '7%',
									style : 'text-align: left',
									resizable : false,
									sortable : true
								}, {
									field : 'grProductBatchTaxID',
									caption : 'TaxCode',
									size : '7%',
									style : 'text-align: left',
									resizable : false,
									sortable : true
								}, {
									field : 'isScheme',
									caption : 'Scheme',
									size : '7%',
									style : 'text-align: left',
									resizable : false,
									sortable : true
								}, {
									field : 'grProductBatchProductActiveFlag',
									caption : 'Active',
									size : '7%',
									style : 'text-align: left',
									resizable : false,
									sortable : true,
									editable : {
										type : 'checkbox'
									}
								}, {
									field : 'grProductBatchProductLockFlag',
									caption : 'Lock',
									size : '7%',
									style : 'text-align: left',
									resizable : false,
									sortable : true,
									editable : {
										type : 'checkbox'
									}
								}, {
									field : 'breakage',
									caption : 'recid',
									hidden : true
								}, {
									field : 'cotransfer',
									caption : 'recid',
									hidden : true
								}, {
									field : 'expiry',
									caption : 'recid',
									hidden : true
								},

								{
									field : 'grProductBatchActiveId',
									caption : 'recid',
									hidden : true
								}, {
									field : 'grProductBatchDivisionId',
									caption : 'recid',
									hidden : true
								}, {
									field : 'grProductBatchExpiryDate',
									caption : 'recid',
									hidden : true
								}, {
									field : 'grProductBatchGrId',
									caption : 'recid',
									hidden : true
								}, {
									field : 'grProductBatchPurchaseDate',
									caption : 'recid',
									hidden : true
								}, {
									field : 'grProductBatchRemark',
									caption : 'recid',
									hidden : true
								}, {
									field : 'grProductBatchTrade',
									caption : 'recid',
									hidden : true
								}, {
									field : 'grProductBatchTradeDiscount',
									caption : 'recid',
									hidden : true
								},

								{
									field : 'recid',
									caption : 'recid',
									hidden : true
								}

								],
								onSelect : function(event) {
									event.onComplete = function() {
										//angular.element(document.getElementById('StockManager')).scope().showRecordSelected=w2ui.grid4.get(event.recid);
										//scriptSelectCompany(w2ui.grid.get(event.recid));
									}
								},

								onUnselect : function(event) {
									event.onComplete = function() {
										/* if(w2ui.grid4.getSelection().length==0){
											angular.element(document.getElementById('StockManager')).scope().showRecordSelected=false;
											angular.element(document.getElementById('StockManager')).scope().$apply();
										} */
										//scriptSelectCompany(w2ui.grid.get(event.recid));
									}
								},
								sortData : [ {
									field : 'contentName',
									direction : 'asc'
								} ],

								records : [],

								keydown : function(event) {
									// this method is called from w2utils
									var obj = this;
									if (event.keyCode == 75) {
										w2ui.grid.keyboard = false;
										alert('keyboard OFF');
										w2ui.grid.selectNone();
									}
									;
									if (event.keyCode == 76) {
										w2ui.grid.keyboard = true;
										alert('keyboard ON');
									}
									;
									if (obj.keyboard !== true)
										return;
									// trigger event
									var eventData = obj.trigger({
										phase : 'before',
										type : 'keydown',
										target : obj.name,
										originalEvent : event
									});
									if (eventData.isCancelled === true)
										return;
									// default behavior
									var empty = false;
									var records = $('#grid_' + obj.name
											+ '_records');
									var sel = obj.getSelection();
									if (sel.length == 0)
										empty = true;
									var recid = sel[0] || null;
									var columns = [];
									var recid2 = sel[sel.length - 1];
									if (typeof recid == 'object'
											&& recid != null) {
										recid = sel[0].recid;
										columns = [];
										var ii = 0;
										while (true) {
											if (!sel[ii]
													|| sel[ii].recid != recid)
												break;
											columns.push(sel[ii].column);
											ii++;
										}
										recid2 = sel[sel.length - 1].recid;
									}
									var ind = obj.get(recid, true);
									var ind2 = obj.get(recid2, true);
									var rec = obj.get(recid);
									var recEL = $('#grid_'
											+ obj.name
											+ '_rec_'
											+ (ind !== null ? w2utils
													.escapeId(obj.records[ind].recid)
													: 'none'));
									var cancel = false;
									var key = event.keyCode;
									var shiftKey = event.shiftKey;
									if (key == 9) { // tab key
										if (event.shiftKey)
											key = 37;
										else
											key = 39; // replace with arrows
										shiftKey = false;
										cancel = true;
									}
									switch (key) {
									case 8: // backspace
									case 46: // delete
										if (recid != -1) {
											if (this.show.toolbarDelete)
												obj["delete"]();
											cancel = true;
											event.stopPropagation();
										}
										break;

									case 27: // escape
										obj.selectNone();
										if (sel.length > 0
												&& typeof sel[0] == 'object') {
											obj.select({
												recid : sel[0].recid,
												column : sel[0].column
											});
										}
										cancel = true;
										break;

									case 65: // cmd + A
										if (!event.metaKey && !event.ctrlKey)
											break;
										obj.selectAll();
										cancel = true;
										break;

									case 70: // cmd + F
										if (!event.metaKey && !event.ctrlKey)
											break;
										$('#grid_' + obj.name + '_search_all')
												.focus();
										cancel = true;
										break;

									case 13: // enter
										// if expandable columns - expand it
										if (this.selectType == 'row'
												&& obj.show.expandColumn === true) {
											if (recEL.length <= 0)
												break;
											obj.toggle(recid, event);
											cancel = true;
										} else { // or enter edit
											for ( var c in this.columns) {
												if (this.columns[c].editable) {
													columns.push(parseInt(c));
													break;
												}
											}
											// edit last column that was edited
											if (this.selectType == 'row'
													&& this.last.edit_col)
												columns = [ this.last.edit_col ];
											if (columns.length > 0) {
												obj
														.editField(recid,
																columns[0],
																null, event);
												cancel = true;
											} else {
												var grid = this;

											}
										}
										cancel = true;
										break;

									case 37: // left
										if (empty)
											break;
										// check if this is subgrid
										var parent = $(
												'#grid_'
														+ this.name
														+ '_rec_'
														+ w2utils
																.escapeId(obj.records[ind].recid))
												.parents('tr');
										if (parent.length > 0
												&& String(parent.attr('id'))
														.indexOf('expanded_row') != -1) {
											var recid = parent.prev().attr(
													'recid');
											var grid = parent.parents(
													'.w2ui-grid').attr('name');
											obj.selectNone();
											w2utils.keyboard.active(grid);
											w2ui[grid].set(recid, {
												expanded : false
											});
											w2ui[grid].collapse(recid);
											w2ui[grid].click(recid);
											cancel = true;
											break;
										}
										if (this.selectType == 'row') {
											if (recEL.length <= 0
													|| rec.expanded !== true)
												break;
											obj.set(recid, {
												expanded : false
											}, true);
											obj.collapse(recid, event);
										} else {
											var prev = obj.prevCell(columns[0]);
											if (prev != null) {
												if (shiftKey && obj.multiSelect) {
													if (tmpUnselect())
														return;
													var tmp = [];
													var newSel = [];
													var unSel = [];
													if (columns
															.indexOf(this.last.sel_col) == 0
															&& columns.length > 1) {
														for ( var i in sel) {
															if (tmp
																	.indexOf(sel[i].recid) == -1)
																tmp
																		.push(sel[i].recid);
															unSel
																	.push({
																		recid : sel[i].recid,
																		column : columns[columns.length - 1]
																	});
														}
													} else {
														for ( var i in sel) {
															if (tmp
																	.indexOf(sel[i].recid) == -1)
																tmp
																		.push(sel[i].recid);
															newSel
																	.push({
																		recid : sel[i].recid,
																		column : prev
																	});
														}
													}
													obj.unselect.apply(obj,
															unSel);
													obj.select.apply(obj,
															newSel);
												} else {
													event.shiftKey = false;
													obj.click({
														recid : recid,
														column : prev
													}, event);
												}
											} else {
												// if selected more then one, then select first
												if (!shiftKey) {
													for (var s = 1; s < sel.length; s++)
														obj.unselect(sel[s]);
												}
											}
										}
										cancel = true;
										break;

									case 39: // right
										if (empty)
											break;
										if (this.selectType == 'row') {
											if (recEL.length <= 0
													|| rec.expanded === true
													|| obj.show.expandColumn !== true)
												break;
											obj.expand(recid, event);
										} else {
											var next = obj
													.nextCell(columns[columns.length - 1]);
											if (next !== null) {
												if (shiftKey && key == 39
														&& obj.multiSelect) {
													if (tmpUnselect())
														return;
													var tmp = [];
													var newSel = [];
													var unSel = [];
													if (columns
															.indexOf(this.last.sel_col) == columns.length - 1
															&& columns.length > 1) {
														for ( var i in sel) {
															if (tmp
																	.indexOf(sel[i].recid) == -1)
																tmp
																		.push(sel[i].recid);
															unSel
																	.push({
																		recid : sel[i].recid,
																		column : columns[0]
																	});
														}
													} else {
														for ( var i in sel) {
															if (tmp
																	.indexOf(sel[i].recid) == -1)
																tmp
																		.push(sel[i].recid);
															newSel
																	.push({
																		recid : sel[i].recid,
																		column : next
																	});
														}
													}
													obj.unselect.apply(obj,
															unSel);
													obj.select.apply(obj,
															newSel);
												} else {
													obj.click({
														recid : recid,
														column : next
													}, event);
												}
											} else {
												// if selected more then one, then select first
												if (!shiftKey) {
													for (var s = 0; s < sel.length - 1; s++)
														obj.unselect(sel[s]);
												}
											}
										}
										cancel = true;
										break;

									case 38: // up
										if (empty)
											selectTopRecord();
										if (recEL.length <= 0)
											break;
										// move to the previous record
										var prev = obj.prevRow(ind);
										if (prev != null) {
											// jump into subgrid
											if (obj.records[prev].expanded) {
												var subgrid = $(
														'#grid_'
																+ obj.name
																+ '_rec_'
																+ w2utils
																		.escapeId(obj.records[prev].recid)
																+ '_expanded_row')
														.find('.w2ui-grid');
												if (subgrid.length > 0
														&& w2ui[subgrid
																.attr('name')]) {
													obj.selectNone();
													var grid = subgrid
															.attr('name');
													var recs = w2ui[grid].records;
													w2utils.keyboard
															.active(grid);
													w2ui[grid]
															.click(recs[recs.length - 1].recid);
													cancel = true;
													break;
												}
											}
											if (shiftKey && obj.multiSelect) { // expand selection
												if (tmpUnselect())
													return;
												if (obj.selectType == 'row') {
													if (obj.last.sel_ind > prev
															&& obj.last.sel_ind != ind2) {
														obj
																.unselect(obj.records[ind2].recid);
													} else {
														obj
																.select(obj.records[prev].recid);
													}
												} else {
													if (obj.last.sel_ind > prev
															&& obj.last.sel_ind != ind2) {
														prev = ind2;
														var tmp = [];
														for ( var c in columns)
															tmp
																	.push({
																		recid : obj.records[prev].recid,
																		column : columns[c]
																	});
														obj.unselect.apply(obj,
																tmp);
													} else {
														var tmp = [];
														for ( var c in columns)
															tmp
																	.push({
																		recid : obj.records[prev].recid,
																		column : columns[c]
																	});
														obj.select.apply(obj,
																tmp);
													}
												}
											} else { // move selected record
												obj.selectNone();
												obj
														.click(
																{
																	recid : obj.records[prev].recid,
																	column : columns[0]
																}, event);
											}
											obj.scrollIntoView(prev);
											if (event.preventDefault)
												event.preventDefault();
										} else {
											// if selected more then one, then select first
											if (!shiftKey) {
												for (var s = 1; s < sel.length; s++)
													obj.unselect(sel[s]);
											}
											// jump out of subgird (if first record)
											var parent = $(
													'#grid_'
															+ obj.name
															+ '_rec_'
															+ w2utils
																	.escapeId(obj.records[ind].recid))
													.parents('tr');
											if (parent.length > 0
													&& String(parent.attr('id'))
															.indexOf(
																	'expanded_row') != -1) {
												var recid = parent.prev().attr(
														'recid');
												var grid = parent.parents(
														'.w2ui-grid').attr(
														'name');
												obj.selectNone();
												w2utils.keyboard.active(grid);
												w2ui[grid].click(recid);
												cancel = true;
												break;
											}
										}
										break;

									case 40: // down
										if (empty)
											selectTopRecord();
										if (recEL.length <= 0)
											break;
										// jump into subgrid
										if (obj.records[ind2].expanded) {
											var subgrid = $(
													'#grid_'
															+ this.name
															+ '_rec_'
															+ w2utils
																	.escapeId(obj.records[ind2].recid)
															+ '_expanded_row')
													.find('.w2ui-grid');
											if (subgrid.length > 0
													&& w2ui[subgrid
															.attr('name')]) {
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
												if (tmpUnselect())
													return;
												if (obj.selectType == 'row') {
													if (this.last.sel_ind < next
															&& this.last.sel_ind != ind) {
														obj
																.unselect(obj.records[ind].recid);
													} else {
														obj
																.select(obj.records[next].recid);
													}
												} else {
													if (this.last.sel_ind < next
															&& this.last.sel_ind != ind) {
														next = ind;
														var tmp = [];
														for ( var c in columns)
															tmp
																	.push({
																		recid : obj.records[next].recid,
																		column : columns[c]
																	});
														obj.unselect.apply(obj,
																tmp);
													} else {
														var tmp = [];
														for ( var c in columns)
															tmp
																	.push({
																		recid : obj.records[next].recid,
																		column : columns[c]
																	});
														obj.select.apply(obj,
																tmp);
													}
												}
											} else { // move selected record
												obj.selectNone();
												obj
														.click(
																{
																	recid : obj.records[next].recid,
																	column : columns[0]
																}, event);
											}
											obj.scrollIntoView(next);
											cancel = true;
										} else {
											// if selected more then one, then select first
											if (!shiftKey) {
												for (var s = 0; s < sel.length - 1; s++)
													obj.unselect(sel[s]);
											}
											// jump out of subgrid (if last record in subgrid)
											var parent = $(
													'#grid_'
															+ this.name
															+ '_rec_'
															+ w2utils
																	.escapeId(obj.records[ind2].recid))
													.parents('tr');
											if (parent.length > 0
													&& String(parent.attr('id'))
															.indexOf(
																	'expanded_row') != -1) {
												var recid = parent.next().attr(
														'recid');
												var grid = parent.parents(
														'.w2ui-grid').attr(
														'name');
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
										if (empty)
											break;
										var text = obj.copy();
										$('body')
												.append(
														'<textarea id="_tmp_copy_data" '
																+ '   onpaste="var obj = this; setTimeout(function () { w2ui[\''
																+ obj.name
																+ '\'].paste(obj.value); }, 1);" '
																+ '   onkeydown="w2ui[\''
																+ obj.name
																+ '\'].keydown(event)"'
																+ '   style="position: absolute; top: -100px; height: 1px; width: 1px">'
																+ text
																+ '</textarea>');
										$('#_tmp_copy_data').focus().select();
										// remove _tmp_copy_data textarea
										$(document).on('keyup', tmp_key_down);
										function tmp_key_down() {
											$('#_tmp_copy_data').remove();
											$(document).off('keyup',
													tmp_key_down);
										}
										break;

									case 88: // x - cut
										if (empty)
											break;
										if (event.ctrlKey || event.metaKey) {
											setTimeout(function() {
												obj["delete"](true);
											}, 100);
										}
										break;

									default:
										return; // exit this handler for other keys
									}
									var tmp = [ 187, 189, 32 ]; // =-spacebar
									for (var i = 48; i <= 90; i++)
										tmp.push(i); // 0-9,a-z,A-Z
									if (tmp.indexOf(key) != -1
											&& !event.ctrlKey && !event.metaKey
											&& !cancel) {
										if (columns.length == 0)
											columns.push(0);
										var tmp = String.fromCharCode(key);
										if (key == 187)
											tmp = '=';
										if (key == 189)
											tmp = '-';
										if (!shiftKey)
											tmp = tmp.toLowerCase();
										obj.editField(recid, columns[0], tmp,
												event);
										cancel = true;
									}
									if (cancel) { // cancel default behaviour
										if (event.preventDefault)
											event.preventDefault();
									}
									// event after
									obj.trigger($.extend(eventData, {
										phase : 'after'
									}));

									function selectTopRecord() {
										var ind = Math
												.floor((records[0].scrollTop + (records
														.height() / 2.1))
														/ obj.recordHeight);
										if (!obj.records[ind])
											ind = 0;
										obj.select({
											recid : obj.records[ind].recid,
											column : 0
										});
									}
									function tmpUnselect() {
										if (obj.last.sel_type != 'click')
											return false;
										if (obj.selectType != 'row') {
											obj.last.sel_type = 'key';
											if (sel.length > 1) {
												for ( var s in sel) {
													if (sel[s].recid == obj.last.sel_recid
															&& sel[s].column == obj.last.sel_col) {
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
												sel
														.splice(
																sel
																		.indexOf(obj.records[obj.last.sel_ind].recid),
																1);
												obj.unselect.apply(obj, sel);
												return true;
											}
											return false;
										}
									}

								}

							});
		});
	</script>
	<script>
		$(document)
				.ready(
						function() {
							$("input#slider")
									.switchButton({
										on_label : 'Product',
										off_label : 'Batch',
										checked : false,
										width : 45,
										height : 16,
										button_width : 20
									})
									.change(
											function() {

												angular
														.element(
																document
																		.getElementById('StockManager'))
														.scope().switchGrid();/* =!angular.element(document.getElementById('StockManager')).scope().productGrid; */
												angular
														.element(
																document
																		.getElementById('StockManager'))
														.scope().$apply();
											});

						});
	</script>
	<script type="text/javascript">
		$(document)
				.ready(
						function() {
							angular.element('*[ng-app]').injector().get(
									"configurable").createPermission =
	<%=createPermission%>
		;
							debugger;
							var pCookie = {
								createPermission :
	<%=createPermission%>
		,
								deletePermission :
	<%=deletePermission%>
		,
								modifyPermission :
	<%=modifyPermission%>
		,
								modifyPurchaseDatePermission :
	<%=modifyPurchaseDatePermission%>
		};
							angular.element('*[ng-app]').injector().get(
									'$cookieStore').put("userPermission",
									pCookie);
	<%if(modifyPermission || createPermission){%>
		angular.element(
									document.getElementById('StockManager'))
									.scope().showSaveBtn = true;
	<% }%>
          $("#sm_company").click(function(){
             $("#sm_company").css("background-color", "white");
             
        });
     
    
    });
    </script>
</div>
