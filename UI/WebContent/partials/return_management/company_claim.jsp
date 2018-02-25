<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="CompanyClaim" data-ng-controller="CompanyClaimCtrl" ng-init=init()>
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
	            case 59: deletePermission = true;;//delete 
	                    break;
	            case 58: createPermission = true;//create
	            		break;	
	            case 60: modifyPermission = true;
                		break;     			
	            /* case 5: modifyPurchaseDatePermission=true;
       					break; */
       			default:break;		
			} 		
		}
		
		%>
		<title>Company Claim</title>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a  title="  " class="highlight_purple not_active">Company
						Claim</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,57);" class="">Refresh</a></li>
				<li><a  title="Export"
					class="not_implemented_link not_active">Export</a></li>
				<li><a  title=""
					class="not_implemented_link not_active">Email</a></li>
				<li><a  title=""
					class="not_implemented_link not_active">Print</a></li>
				<%if(createPermission){%>
				<li><a ng-click="saveCC('raised')" ng-show="showClaimSelected.companyClaimStatus == 1 || showClaimSelected.companyClaimId == 0">Raise Claim</a></li> 
				<%}if(deletePermission){%>
				<li ng-click="confirmFunction()"ng-show="showClaimSelected.companyClaimStatus == 2"><a>Drop Claim</a></li>
				<%}if(createPermission || modifyPermission){%>
				<li ng-show="showSaveBtn" ><a ng-click="saveCC('new')" ng-show="showClaimSelected.companyClaimStatus == 1 || showClaimSelected.companyClaimId == 0" tabindex="16">Save</a></li>
				<%}%>
				<li><a href="#" title="Help"
					class="not_implemented_link not_active">Help</a></li>
			</ul>
			<ul class="rightFloat_Menu">
				<li><a class=" not_active marginZero textCenter">Satyajit
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
						<span class="fieldLeft_spacing_lg" ng-click="editable=!editable;$root.editable=!$root.editable">Editable</span>
					</button>
				</li>
			</ul>
		</nav>
	</Section>
	<nav class="navbar navbar-default navbar_master">
		<div class="container">
			<ul class="nav navbar-nav master_nav_element_pos">
				<li><a ng-click="changeView(activeUser.userId,activeUser.token,52)">Returns Register</a></li>
				<!-- 	<li><a href="#goodsreturn">Goods Return</a></li> -->
				<li class="active"><a >Company
						Claim</a></li>
			</ul>
		</div>
	</nav>
	<div class="row container">
		<div class="col-md-2 sectiondivider">
			<div class="master_leftUpper1 fieldsBot_Spacing">
				<div class="row">
					<select ng-disabled="!editable" class="input-sm masterPage_grid input_rightSpecing"
						ng-options="opt.companyId as opt.companyName for opt in showCompanyList" ng-model="showCompanySelectedId" ng-change="getCompanyClaims(showCompanySelectedId);" tabindex="1">					
					</select>
				</div>

			</div>
			<div class="row masterPage_fieldSpacing">
				<!--=============GRID==========  -->
				<div id="grid" tabindex="2" class="companyReturn_leftGride"></div>
				<!--=============GRID==========  -->
			</div>
			<div class="row master_filterPos" style="cursor: pointer;">
				<!-- class="not_implemented_link not_active" -->
				<a ng-click="showFilterPopup()" tabindex="3" title="Filter">Filter(<span class="highlight_purple" ng-show="filterStatus == 'ON'">ON</span><span ng-show="filterStatus == 'OFF'">OFF</span>) </a>
				<img ng-show="filterStatus == 'ON'" ng-click="cancelFilter()" alt="" class="filterOff_closeImage" tabindex="4"  src="images/contacts_manager/close.png">
			</div>
			<div class="row container filterBottomSec">
				<div class="col-md-2 limitSection_pos">
					<span class="showNext_pos">Show&nbsp;next</span>
				</div>
				<div class="col-md-6 limitSection_pos">
					<input class="form-control input-sm contactType_limit textRight"
						id="shownext_limit" type="text" tabindex="5" ng-model="listLimit" value={{listLimit}}>
				</div>
				<div class="col-md-3 Go_colPos">
					<button class=" btn_Go btn btn-primary" ng-click="getUpdatedCompanyClaims()" tabindex="6">Go</button>
				</div>
			</div>
		</div>
		<div class="col-md-10">
			<div class="">
				<div class="row masterTop_GrayStrip">
					<h6>
						<span class="masterTop_StripText">Company Claim</span>
					</h6>
				</div>
				<div class="row fieldsSpacing fields_headingSpacing">
					<div class="col-md-3" style="width: 23%;">
						<div class="row">
							<div class=" col-md-5">
								<span class="control-label idtext">Company&nbsp;Claim#</span>
							</div>
							<div class="col-md-7">
								<input type="text"
									ng-disabled="!editable"
									class="form-control input-sm idfield textRight company_claim_inputPos1"
									ng-model="showClaimSelected.companyClaimId" value="{{showClaimSelected.companyClaimId}}"readonly="readonly">
							</div>
						</div>
					</div>
					<div class="col-md-4" style="width: 38%;">
						<div class="row">
							<div class=" col-md-2">
								<span class="control-label company_claim_labelPos1">Supplier</span>
							</div>
							<div ng-hide=true class="col-md-5">
								<input type="text"
									ng-disabled="!editable"
									class="form-control input-sm company_claim_inputPos"
									readonly="readonly"  ng-model="supplierName" value={{supplierName}}>
							</div>
							<div class="col-md-10">
								<select id="supplier_select"
									ng-disabled="!editable"
									class="form-control  input-sm input_rightSpecing company_claim_inputPos2"
									tabindex="7" required="required" ng-options="opt.supplierId as opt.supplierName for opt in supplierList" ng-model="showClaimSelected.companyClaimSID" ng-change=changeSupplierName()>
									
								</select>
							</div>
						</div>
					</div>
					<div class="col-md-5" style="width: 39%;">
						<div class="row">
							<div class=" col-md-1">
								<span class="control-label">Type</span>
							</div>
							<div class="col-md-5">
								<select id="type_select"
									ng-disabled="!editable"
									class="form-control input-sm input_rightSpecing  companyclaim_TypeSelectPos"
									tabindex="8" ng-options="opt.id as opt.name for opt in companyClaimTypeList" ng-model="showClaimSelected.companyClaimType" required="required">
									
								</select>
							</div>
							<div class=" col-md-2">
								<span class="control-label companyclaim_StatuslabelPos">Status</span>
							</div>
							<div class="col-md-4">
								<!-- <input type="text"
									class="form-control input-sm company_claim_statusInput"
									readonly="readonly" ng-model="showClaimSelected.companyClaimStatus" value="{{showClaimSelected.companyClaimStatus}}"> -->
								<select ng-disabled="!editable" disabled class="form-control input-sm input_rightSpecing" ng-options="opt.id as opt.name for opt in claimStatusList" ng-model="showClaimSelected.companyClaimStatus" tabindex="4" >
						    	</select>
							</div>
						</div>
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-3" style="width: 23%;">
						<div class="row">
							<div class=" col-md-5">
								<span class="control-label">Rate&nbsp;of&nbsp;Calculation</span>
							</div>
							<div class="col-md-7">
								<select id="rateOfCal_select"
									ng-disabled="!editable"
									class="form-control input_rightSpecing input-sm company_claim_inputPos1" id="rateofcalculation"
									tabindex="9" ng-options="opt.id as opt.name for opt in rateOCList" ng-model="showClaimSelected.companyClaimRateOfCalculation" ng-change="calculateAmountRateGrid();calculateProbableValues();"required="required">
									
								</select>
							</div>
						</div>
					</div>
					<div class="col-md-4" style="width: 38%;">
						<div class="row">
							<div class="col-md-2">
								<span class="control-label company_claim_labelPos1">Calculate&nbsp;VAT</span>
							</div>
							<div class="col-md-5">
								<select id="calculateVat_select"
									ng-disabled="!editable"
									class="form-control input_rightSpecing input-sm companyclaim_calVatSelectPos"
									ng-options="opt.id as opt.name for opt in yesNoList" ng-model="showClaimSelected.companyClaimcalculateVAT" ng-change="calculateProbableValues()"
									tabindex="10" required="required">
								</select>
							</div>
						</div>
					</div>
					<div class="col-md-5" style="width: 39%;">
						<div class="row" style="margin-left: -39%;">
							<div class=" col-md-1">
								<span class="control-label companyclaim_dateLabelPos">Date</span>
							</div>
							<div class="col-md-3">
								<input type="eu-date" tabindex="11" id="date"
									ng-disabled="!editable"
									class="form-control input-sm companyclaim_dateInputPos textCenter" ng-model="showClaimSelected.companyClaimDate" value={{showClaimSelected.companyClaimDate}}>
							</div>
							<div class=" col-md-1">
								<span class="control-label companyclaim_CreatedByLabelPos">Created&nbsp;by</span>
							</div>
							<div class="col-md-7">
								<input type="text" tabindex="12"
									ng-disabled="!editable"
									class="form-control input-sm companyclaim_CreatedByInputPos" readonly  ng-model="showClaimSelected.companyClaimCreatedByName" value={{showClaimSelected.companyClaimCreatedByName}}>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<h5>
						<span class="submenuBlue_heading">Company Claim Details</span>
					</h5>
					<hr class="horizontal_line">
				</div>
				<div class="row ">
					<div class="col-md-12" style="margin-top: -18px;">
						<nav class="mainnav">
							<ul class="rightFloat" id="list-nav">
								<li><a ng-click="showSelectedFilter()" title="Show Selected" tabindex="13">Show
										Selected(<span ng-show="filterStatus2 == 'OFF'">{{filterStatus2}}</span><span ng-show="filterStatus2 == 'ON'">{{filterStatus2}}</span>)</a></li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="row fieldsSpacing fieldsTop_Spacing">
					<!--=============GRID==========  -->
					<div id="grid2" tabindex="14" class="companyReturn_RightGride"></div>
					<!--=============GRID==========  -->
				</div>
				<div class="row">
					<h5>
						<span class="submenuBlue_heading">Company Claim Summery</span>
					</h5>
					<hr class="horizontal_line">
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-3">
						<div class="row">
							<div class="col-md-4">
								<span class="control-label ">Total&nbsp;Items</span>
							</div>
							<div class="col-md-8">
								<input type="text" id="total_items" name="total_items"
									ng-disabled="!editable"
									class="form-control input-sm textRight" readonly="readonly" ng-model="showClaimSelected.companyClaimTotalItem" value={{showClaimSelected.companyClaimTotalItem}}>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="row">
							<div class=" col-md-4">
								<span class="control-label">Gross&nbsp;Total</span>
							</div>
							<div class="col-md-8">
								<input id="gross_total" name="gross_total" type="text"
									ng-disabled="!editable"
									class="form-control input-sm textRight" readonly="readonly" ng-model="showClaimSelected.companyClaimGrossTotal" value={{showClaimSelected.companyClaimGrossTotal}}>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="row">
							<div class=" col-md-4">
								<span class="control-label">VAT</span>
							</div>
							<div class="col-md-8">
								<input id="vat" name="vat" type="text"
									ng-disabled="!editable"
									class="form-control input-sm textRight" readonly="readonly" ng-model="showClaimSelected.companyClaimVAT" value={{showClaimSelected.companyClaimVAT}}>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="row">
							<div class="col-md-4">
								<span class="control-label company_claim_Net_amount">Net&nbsp;Amount</span>
							</div>
							<div class="col-md-8">
								<input id="net_amount" name="net_amount" type="text"
									ng-disabled="!editable"
									class="form-control input-sm textRight" readonly="readonly" ng-model="showClaimSelected.companyClaimNetAmount" value={{showClaimSelected.companyClaimNetAmount}}>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-1">
						<span class="control-label ">Remark</span>
					</div>
					<div class="col-md-11">
						<input type="text" class="form-control input-sm " tabindex="15" ng-model="showClaimSelected.companyClaimRemark" value={{showClaimSelected.companyClaimRemark}}>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
	var month = (new Date()).getMonth() + 1;
	var year = (new Date()).getFullYear();
	// EU Common Format
	$('input[type=eu-date]').w2field('date', {
		format : 'dd/mm/yyyy'
	});
	$('input[type=eu-time]').w2field('time', {
		format : 'h24'
	});
	$('input[type=eu-timeA]').w2field('time', {
		format : 'h24',
		start : '8:00 am',
		end : '4:30 pm'
	});
</script>

<script type="text/javascript">
	$(document).ready(function() {
		// Handler for .ready() called.		
		//$('#date').allowNumbersOnly();
		$('#shownext_limit').allowNumbersOnly();
		angular.element('*[ng-app]').injector().get("configurable").createPermission=<%=createPermission %>;
		debugger;
		var pCookie={createPermission:<%=createPermission %>,deletePermission:<%=deletePermission%>,modifyPermission:<%=modifyPermission %>,modifyPurchaseDatePermission:<%=modifyPurchaseDatePermission %>};
		angular.element('*[ng-app]').injector().get('$cookieStore').put("userPermission",pCookie);
		<% if(createPermission && !modifyPermission){%>	    		
			angular.element(document.getElementById('CompanyClaim')).scope().showSaveBtn=false;
		<%}else if(createPermission || modifyPermission){%>
			angular.element(document.getElementById('CompanyClaim')).scope().showSaveBtn=true;
		<% }%>
	});
</script>

<script type="text/javascript">
	$(document).ready(function() {
		$("#supplier_select").click(function() {
			$("#supplier_select").css("background-color", "white");
		});
		$("#type_select").click(function() {
			$("#type_select").css("background-color", "white");
		});
		$("#rateOfCal_select").click(function() {
			$("#rateOfCal_select").css("background-color", "white");
		});
		$("#calculateVat_select").click(function() {
			$("#calculateVat_select").css("background-color", "white");
		});
		$("#date").click(function() {
			$("#date").css("background-color", "white");
		});
	});
</script>

<!--########## ________________-------------- Validation controller Script -------------______________########## -->



