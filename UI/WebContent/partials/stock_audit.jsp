
<title>Stock
						Audit</title>
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>

<div id="StockAudit" data-ng-controller="StockAuditCtrl" ng-init=init()>
<toast></toast>
	
		<% List<PurpleaidACL> xyz= new ArrayList();
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
	            case 152: createPermission = true;//create
	            	break;	
	            case 153: modifyPermission = true;
                	break;     			
       			default:break;		
			} 		
		}
		
		%>

	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" class="highlight_purple not_active">Stock
						Audit</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a title="Reload this page" ng-click="$parent.changeView(activeUser.userId,activeUser.token,151);">Refresh</a></li>
				<li><a href="#" title="Print"
					class="not_implemented_link not_active">Print</a></li>
						<%if(createPermission || modifyPermission){%>
				<li><a title="Save" tabindex="17" ng-click="Save();">Save</a></li>
					<%}%>
					<%if(createPermission){%>
				<li><a  ng-click="New();">New</a></li>
				<%}%>
				<li><a>Clear All Sale Locks</a></li>
				<li><a href="#" title="Help"
					class="not_implemented_link not_active">Help</a></li>
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
						<span class="fieldLeft_spacing_lg" ng-click="editable=!editable">Editable</span>
					</button>
				</li>
			</ul>
		</nav>
	</Section>
	<div class="row container">
		<div class="col-md-3 sectiondivider">
			<div class="row ">
				<div class="col-md-12">
					<!--=============GRID==========  -->
					<div id="grid" tabindex="2"
						class="StckAudit_LeftGrid fieldsBot_Spacing"></div>
					<!--=============GRID==========  -->
				</div>
			</div>
			<div class="row textCenter">
				<a ng-click="showFilterPopup()" tabindex="3" title="Filter">Filter(<span
					class="highlight_purple" ng-show="filterStatus == 'ON'">ON</span><span
					ng-show="filterStatus == 'OFF'">OFF</span>)
				</a> <img ng-show="filterStatus == 'ON'" ng-click="cancelFilter()"
					alt="" class="filterOff_closeImage" tabindex="4"
					src="images/contacts_manager/close.png">
			</div>
			<div class="row  fieldsTop_Spacing">
				<div class="col-md-12 ">
					<div class=" BottomSection">
						<div class="ShowNextPad">
							<div class="rightFloat">
								<span class="">Show&nbsp;Next</span> <input
									class=" input-sm textRight" style="width: 60px;" type="text"
									tabindex="5"
									ng-model="listLimit" value="{{listLimit}}">
								<button ng-click="GetStockAuditDetails();"
									class="Go_btn btn btn-primary" tabindex="6">Go</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-9">
			<div class="row masterTop_GrayStrip fieldsSpacing">
				<nav class="mainnav">
					<ul class="leftFloat " id="list-nav">
						<li class="returnReg_headingPos"><span
							class="masterTop_StripText">Stock&nbsp;Audit&nbsp;(<span
								class="masterHeading">New</span>){{select}}
						</span></li>
					</ul>
					
				</nav>
			</div>
			<div class="row fieldsSpacing">
				<div class="col-md-9">
					<div class="row fieldsTop_Spacing">
						<div class="col-md-4">
							<div class="row">
								<div class=" col-md-4">
									<span class="control-label">Run&nbsp;ID</span>
								</div>
								<div class="col-md-8">
									<input type="text"
										class="form-control input-sm stockAudit_Input1"
										readonly="readonly" ng-model="ShowStcockAudit.stockAuditId"
										value="{{ShowStcockAudit.stockAuditId}}">
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="row">
								<div class=" col-md-4">
									<span class="control-label">Date</span>
								</div>
								<div class="col-md-8">
									<input type="text"
										class="form-control input-sm stockAudit_Input2"
										readonly="readonly" ng-model="ShowStcockAudit.stockAuditDate"
										value="{{ShowStcockAudit.stockAuditDate}}">
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="row">
								<div class=" col-md-4">
									<span class="control-label">User</span>
								</div>
								<div class="col-md-8">
									<input type="text"
										class="form-control input-sm stockAudit_Input2"
										readonly="readonly"
										ng-model="ShowStcockAudit.stockAuditCreatedByName"
										value="{{ShowStcockAudit.stockAuditCreatedByName}}">
								</div>
							</div>
						</div>
					</div>
					<div class="row fieldsSpacing_Top">
						<div class="col-md-4">
							<div class="row">
								<div class=" col-md-4">
									<span class="control-label">Total&nbsp;Product</span>
								</div>
								<div class="col-md-8">
									<input type="text"
										class="form-control input-sm stockAudit_Input1"
										readonly="readonly" ng-model="ShowStcockAudit.stockAuditProductStock"
										ng-value="{{ShowStcockAudit.stockAuditProductStock}}">
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="row">
								<div class=" col-md-4">
									<span class="control-label">Total&nbsp;Batch</span>
								</div>
								<div class="col-md-8">
									<input type="text"
										class="form-control input-sm stockAudit_Input2"
										readonly="readonly"
										ng-model="ShowStcockAudit.stockAuditBatchStock"
										>
								</div>
							</div>
						</div>
						<!-- <div class="col-md-4">
							<div class="row">
								<div class=" col-md-4">
									<span class="control-label">Audit&nbsp;Level</span>
								</div>
								<div class="col-md-8">
									<input type="text"
										class="form-control input-sm stockAudit_Input2"
										readonly="readonly">
								</div>
							</div>
						</div> -->
					</div>
					<div class="row fieldsSpacing_Top">
						<div class=" col-md-1">
							<span class="control-label">Label</span>
						</div>
						<div class="col-md-11">
							<input type="text" class="form-control input-sm StockAudit_inputLabel"
							ng-model="ShowStcockAudit.stockAuditLabel"
							ng-disabled="!editable">
						</div>
					</div>
				</div>
				<div class="col-md-3 ">
					<div class="MedHighlightSection fieldLeft_spacingNeg">
						<div class="row fieldsSpacing stockAuditDetails">
							<div class=" col-md-4">
								<span class="control-label">Lock&nbsp;Sales</span>
							</div>
							<div class="col-md-8">
								<input type="text" class="form-control input-sm"
									readonly="readonly"  ng-model="ShowStcockAudit.stockAuditSaleHistoryDescription">
							</div>
						</div>
						<div class="row fieldsSpacing stockAuditDetails">
							<div class=" col-md-4">
								<span class="control-label">Outcome</span>
							</div>
							<div class="col-md-8">
								<input type="text" class="form-control input-sm"
									readonly="readonly">
							</div>
						</div>
						<div class="row fieldsSpacing stockAuditDetails">
							<div class=" col-md-4">
								<span class="control-label">Result</span>
							</div>
							<div class="col-md-8">
								<input type="text" class="form-control input-sm"
									readonly="readonly" ng-model="stockauditresult">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="panel panel-default" ng-app="">
						<div class="panel-body">
							<div class="my-switch-animation" ng-show="toShow=='aField'">
								<div class="row ">
									<h5>
										<span class="submenuBlue_heading">Audit Criteria</span>
									</h5>
									<hr class="horizontal_line">
								</div>
								<div class="row ">
									<div class="col-md-12">
										<input class="" type="checkbox" tabindex="37"
										ng-model="ShowStcockAudit.stockAuditLock" ng-disabled="!editable" > 
										<span class="">Lock Stock Audit</span> 
										<input	class="fieldLeft_spacing_md1 " type="checkbox" tabindex="37"
											ng-model="ShowStcockAudit.stockAuditFlgLockSale" ng-disabled="!editable">
										<span class="">Lock Sales</span> 
											<!-- <span class="control-label fieldLeft_spacing_md1">Audit&nbsp;Level</span>
										<select
											class=" input-sm input_rightSpecing" style="width: 95px;"
											ng-options="opt.id as opt.name for opt in auditLevel"
											ng-model="ShowStcockAudit.stockAuditLevel" ng-change="stcokChange()">
										</select> -->
									<span class=" rightFloat">
										<!-- <span class="">Product Snapshort</span> --> <select
											class=" input-sm input_rightSpecing"
											ng-options="opt.id as opt.name for opt in ProductSnapshotList"
											ng-model="ShowStcockAudit.stockAuditSnap" ng-disabled="ShowStcockAudit.isCriteriaChanged==1 || !editable">
											</select> 
										<span>{{ShowStcockAudit.stockAuditSnapCreatedOn}} </span>
									</span>
									</div>

									

								</div>
								<div class="row fieldsBot_Spacing fieldsSpacing_Top ">
									<div class="col-md-3">
										<!--=============GRID==========  -->
										<div id="grid2" tabindex="-1" class="StockAudit_1stGrid"></div>
										<!--=============GRID==========  -->
									</div>
									<div class="col-md-1 textRight">
										<img alt="" src="images/1444040684_MB__plus.png"
											style="margin-top: 110px; width: 24px;">
									</div>
									<div class="col-md-3">
										<!-- 	=============GRID==========  -->
										<div id="grid3" tabindex="-1" class="StockAudit_2ndGrid"></div>
										<!-- =============GRID==========  -->
									</div>
									<div class="col-md-1 ArrowBtnDiv">
										<div class="ArrowBtn ">
											<a class="ArrowBtnPos" id="find_product"><button ng-click="FindProduct()" ng-disabled="!editable">FindProduct</button></a>
										</div>
									</div>
									<div class="col-md-4">
										<!-- =============GRID==========  -->
										<div id="grid4" tabindex="-1" class="StockAudit_3rdGrid"></div>
										<!-- 	=============GRID==========  -->
										<div class="row  fieldsTop_Spacing">
											<div class="col-md-12 ">
												<div class=" BottomSection">
													<div class="" style="padding: 4px 3px;">
														<div class="rightFloat">
															<span class="">Random&nbsp;Selection</span> <input
																class="input-sm textRight" style="width: 50px;"
																type="text" ng-model="ShowStcockAudit.randomSelection" tabindex="5" value="{{ShowStcockAudit.randomSelection}}" ng-disabled="!editable">
															<button ng-click="getRandomProduct()"
																	class="Go_btn btn btn-primary"" tabindex="6" ng-disabled="!editable">Go</button>
																	<!--   -->
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="my-switch-animation" ng-show="toShow=='bField'" >
								<div class="row">
									<h5>
										<span class="submenuBlue_heading">Physical Stock Entry</span>
									</h5>
									<hr class="horizontal_line">
								</div>
								<div class="row ">
									<div class="col-md-12">
										<input class="" type="checkbox" tabindex="37"
										ng-model="ShowStcockAudit.stockAuditFlgLockDataEntry" ng-disabled="!editable"> <span
											class="">Lock Data Entry</span>
									</div>
								</div>
								<div class="row fieldsBot_Spacing fieldsSpacing_Top">
									<div class="col-md-12">
										<!--=============GRID==========  -->
										<div id="grid5" tabindex="-1" class="StockAudit_4thGrid"></div>
										<!--=============GRID==========  -->
									</div>
								</div>
								<div class="row fieldsBot_Spacing">
									<div class=" col-md-1">
										<span class="control-label">Remark</span>
									</div>
									<div class="col-md-6">
										<input type="text" class="form-control input-sm"
										ng-model="ShowStcockAudit.stockAuditRemark" ng-disabled="!editable">
									</div>
									<div class=" col-md-1">
										<span class="control-label">Entry&nbsp;by</span>
									</div>
									<div class="col-md-4">
										<input type="text" class="form-control input-sm"
											
											ng-model="ShowStcockAudit.stockAuditEnteredByName" ng-disabled="!editable">
									</div>
								</div>
							</div>
							<div class="my-switch-animation" ng-show="toShow=='cField'">
								<div class="row ">
									<h5>
										<span class="submenuBlue_heading">Stock Audit Report</span>
									</h5>
									<hr class="horizontal_line">
								</div>
								<div class="row ">
									<div class=" col-md-1">
										<span class="control-label">Total&nbsp;Qty</span>
									</div>
									<div class="col-md-2">
										<input type="text" class="form-control input-sm"
											readonly="readonly"
											ng-model="ShowStcockAudit.stockAuditTotalAuditQty" >
									</div>
									<div class=" col-md-1">
										<span class="control-label">Created&nbsp;by</span>
									</div>
									<div class="col-md-4">
										<input type="text" class="form-control input-sm"
											readonly="readonly"
											ng-model="ShowStcockAudit.stockAuditCreatedByName">
									</div>
									<div class=" col-md-1">
										<span class="control-label">Entry&nbsp;by</span>
									</div>
									<div class="col-md-3">
										<input type="text" class="form-control input-sm"
											
											ng-model="ShowStcockAudit.stockAuditEnteredByName" ng-disabled="!editable">
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<nav class="mainnav">
											<ul class="rightFloat" id="list-nav">
												<li><a title="" ng-disabled="!editable">Show Only Mismatch(OFF)</a></li>

											</ul>
										</nav>
									</div>
								</div>
								<div class="row fieldsBot_Spacing fieldsSpacing_Top">
									<div class="col-md-12">
									<!-- 	=============GRID========== -->
										<div id="grid6" tabindex="-1" class="StockAudit_5thGrid"></div>
										<!-- =============GRID========== -->
									</div>
								</div>
								<div class="row fieldsBot_Spacing">
									<div class=" col-md-1">
										<span class="control-label">Remark</span>
									</div>
									<div class="col-md-8">
										<input type="text" class="form-control input-sm"
										ng-model="ShowStcockAudit.stockAuditRemark" ng-disabled="!editable">
									</div>
									<div class=" col-md-1">
										<span class="control-label">Result</span>
									</div>
									<div class="col-md-2">
										<select class="form-control input-sm input_rightSpecing"
										ng-options="opt.id as opt.name for opt in ResultList"
										ng-model="ShowStcockAudit.stockAuditResult" ng-disabled="!editable">
											
										</select>
									</div>
								</div>
							</div>
						</div>
						<div class="panel-heading">
							<button class="btn Audit_switch" ng-click="renderGridss()" >Audit
								Criteria</button>
							<button class="btn Audit_switch" ng-click="renderGrid()" ng-disabled="ShowStcockAudit.physicalStcockEntry==true">Physical
								Stock Entry</button>
							<button class="btn Audit_switch" ng-click="renderGrids()" ng-disabled="ShowStcockAudit.selectLockDataEntry==true">Stock
								Audit Report</button>
						
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- <script type="text/javascript">
	$(function() {
		$('#grid').w2grid({
			name : 'grid',
			show : {

			},
			columns : [ {
				field : '',
				caption : 'ID',
				size : '10%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Date',
				size : '20%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Product',
				size : '30%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Sale Lock',
				size : '17%',
				style : 'text-align: left'
			} ],
			records : [

			]
		});
	});
</script> 
  <script type="text/javascript">
	$(function() {
		$('#grid1').w2grid({
			name : 'grid1',
			show : {
				toolbar : false,
				selectColumn : true
			},
			columns : [ {
				field : 'user_permission',
				caption : 'Company & Division',
				size : '30%',
				style : 'text-align:left'
			}, ],
			records : [ {
				recid : 1,
				user_permission : 'Unichem'
			}, {
				recid : 2,
				user_permission : 'Cipla'
			}, {
				recid : 3,
				user_permission : ''
			}, {
				recid : 4,
				user_permission : ''
			} ],
			onExpand : function(event) {
				if (w2ui.hasOwnProperty('subgrid-' + event.recid))
					w2ui['subgrid-' + event.recid].destroy();
				$('#' + event.box_id).css({
					margin : '0px',
					padding : '0px',
					width : '100%'
				}).animate({
					height : '105px'
				}, 100);
				setTimeout(function() {
					$('#' + event.box_id).w2grid({
						name : 'subgrid-' + event.recid,
						show : {
							columnHeaders : false,
							selectColumn : true
						},
						fixedBody : true,
						columns : [ {
							field : 'user_permission',
							caption : 'Company & Division',
							size : '29%',
							style : 'text-align:left'
						}, ],
						records : [ {
							recid : 5,
							user_permission : 'Div1'
						}, {
							recid : 6,
							user_permission : 'Div2'
						}, {
							recid : 7,
							user_permission : ''
						}, {
							recid : 8,
							user_permission : ''
						} ]
					});
					w2ui['subgrid-' + event.recid].resize();
				}, 300);
			}
		});
	});
</script>  <script type="text/javascript">
	$(function() {
		$('#grid4').w2grid({
			name : 'grid4',
			show : {

			},
			columns : [ {
				field : '',
				caption : 'Company & Division',
				size : '10%',
				style : 'text-align: left'
			} ],
			records : [

			]
		});
	});
</script>   <script type="text/javascript">
	$(function() {
		$('#grid2').w2grid({
			name : 'grid2',
			show : {
				selectColumn : true
			},
			columns : [ {
				field : 'product_type',
				caption : 'Product Type',
				size : '10%',
				style : 'text-align: left'
			} ],
			records : [ {
				recid : 1,
				product_type : 'Type1'
			} ]
		});
	});
</script>  -->
<!--  <script type="text/javascript">
/*  $(document).ready(function() {
	 if(!angular.element(document.getElementById('GoodsReciept_Register')).scope().$rootScope.grid2){
	 			loadContentGrid(config2);
	 		}else{
	 			w2ui.grid2.destroy();
	 			w2ui.layout2.destroy();
	 			loadContentGrid(config2);

	 		}
	}); */ 
/* 	$(function() {
		$('#grid3').w2grid({
			name : 'grid3',
			show : {
				selectColumn : true
			},
			columns : [ {
				field : '',
				caption : 'Product',
				size : '10%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Batch',
				size : '10%',
				style : 'text-align: left'
			} ],
			records : [

			]
		});
	}); */
</script>  -->
<!-- <script>
$(document).ready(function() {
	w2ui.grid2.render($('#grid2'));
	
});

</script> -->