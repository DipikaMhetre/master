<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="ReturnsRegister" data-ng-controller="ReturnsRegisterCtrl" ng-init=init()>
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
	            /* case 4: deletePermission = true;;//delete 
	                    break;
	            case 2: createPermission = true;//create
	            		break;	
	            case 3: modifyPermission = true;
                		break;     			
	            case 5: modifyPurchaseDatePermission=true;
       					break; */
       			default:break;		
			} 		
		}
		
		%>
		<title>Return Register</title>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a  class="highlight_purple not_active">Returns
						Register</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a  ng-click="$parent.changeView(activeUser.userId,activeUser.token,52);" title="Start Over"
					class="">Refresh</a></li>
				<!-- <li><a href="#" title="Export"
					class="not_implemented_link not_active">Export</a></li>
				<li><a href="#" title=""
					class="not_implemented_link not_active">Email</a></li>
				<li><a href="#" title=""
					class="not_implemented_link not_active">Print</a></li> -->
				<!-- <li><a href="#">New</a></li> -->
				<li><a href="#" title="Help"
					class="not_implemented_link not_active">Help</a></li>
					<!-- <li ng-show="showGoodReturn"><a ng-click="objectPool()"  tabindex="9" style="color: hotpink">Goods
										Return</a></li> -->
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
				<li class="active"><a >Returns Register</a></li>
				<!-- <li><a href="#goodsreturn">Goods Return</a></li> -->
				<li><a ng-click="changeView(activeUser.userId,activeUser.token,57)">Company Claim</a></li>
			</ul>
		</div>
	</nav>
	<div class="row container">
		<div class="col-md-4 sectiondivider">
			<div class="master_leftUpper1">
				<div class="row">
					<div class="col-md-3">
						<span>Return&nbsp;Type</span>
					</div>
					<div class="col-md-9">
						<select class="input-sm masterPage_grid_returnRegister input_rightSpecing"
							 ng-options="opt.name for opt in custTypeList" ng-model="custTypeSelected" value="{{custTypeSelected}}" ng-change="onChangeCustType(custTypeSelected)" tabindex="1">
							
						</select>
					</div>
					
				</div>
				<!-- <div class="row masterPage_gridText masterPage_fieldSpacing">
				</div> -->
			</div>
			<div class="row ">
				<!-- <div id="msgSelfReturn" class="gridSizeLeftReturnRegister">
     				<div>Customer list not display for return type Self</div>
    			</div> -->
    			<div class="col-md-12">
				<!--=============GRID==========  -->
				<div id="grid" tabindex="2" class="gridSizeLeftReturnRegister fieldsBot_Spacing"></div>
				<!--=============GRID==========  -->
				</div>
			</div>
			<div class="row textCenter">
				<!-- class="not_implemented_link not_active" -->
				<a ng-click="showFilterPopup()" tabindex="3" title="Filter">Filter(<span class="highlight_purple" ng-show="filterStatus == 'ON'">ON</span><span ng-show="filterStatus == 'OFF'">OFF</span>) </a>
				<img ng-show="filterStatus == 'ON'" ng-click="cancelFilter()" alt="" class="filterOff_closeImage" tabindex="4"  src="images/contacts_manager/close.png"></div>
			
		</div>
		<div class="col-md-8">
			<div class="">
				<div class="row masterTop_GrayStrip fieldsSpacing">
					<!-- <h6>
						<span class="masterTop_StripText">Returns Register</span>
						<a id="list-nav" title="Show Selected" tabindex="7" class="rightFloat">Show Returns with no linked Credit Note (OFF)</a>
						
					</h6> -->
					<nav class="mainnav">
							<ul class="leftFloat" id="list-nav">
								<li class="returnReg_headingPos"><span class="masterTop_StripText">Returns&nbsp;Register</span></li>
							</ul>
							<ul class="rightFloat" id="list-nav">
								<li ng-click="showNotLinked()" class="returnReg_CreditNoteONOFF "><a title="Show Selected" tabindex="7" class="">Show Returns with no linked Credit Note (<span ng-show="filterStatus2 == 'OFF'">OFF</span><span ng-show="filterStatus2 == 'ON'">ON</span>)</a></li>
							</ul>
						</nav>
				</div>
				<div class="row fieldsSpacing">
				<div class="col-md-12">
					<!--=============GRID==========  -->
					<div id="grid2" tabindex="8" class="returnsRegisterRightGride"></div>
					<!--=============GRID==========  -->
				</div>
				</div>
				<div class="row container filterBottomSec_ReturnRegister">
					<div class="col-md-8"></div>
					<div class="col-md-1 limitSection_pos">
						<span class="">Show&nbsp;next</span>
					</div>
					<div class="col-md-2 limitSection_pos">
						<input class="form-control input-sm textRight" ng-model="listLimit" value="{{listLimit}}" id="shownext_limit" type="text" tabindex="5">
					</div>
					<div class="col-md-1 Go_colPos">
						<button ng-click="getUpdatedCustomerDetails()" class=" btn_Go_ReturnRegister btn btn-primary" tabindex="6">Go</button>
					</div>
				</div>
				<!-- <div class="row returnRegister_FROM_TO_date_text">
					<span class="highlight_grey">Showing returns for (from date) to (to date). Use filter to change date range as required.</span>
				</div> -->
			</div>
		</div>
	</div>
</div>

<!--########## ________________-------------- Validation Script -------------______________########## -->
<script type="text/javascript">
	$(document).ready(function() {
			// Handler for .ready() called.
			$('#shownext_limit').allowNumbersOnly();
		});
</script>

<script type="text/ng-template" id="productFilter.html">

<div class="" ng-init=init()>
	<div class="container lightBox_masterPrductFilter">
		<div class="row topblueStrip ">
			<h6>
				<span class="topblueStripText">FILTERS</span>
			</h6>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">From&nbsp;Date</span>
					</div>
					<div class=" col-md-7">
						<input id="from_date" type="eu-date1" tabindex="1"
							class="form-control productFilterIP_size input-sm textCenter">
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">To&nbsp;Date</span>
					</div>
					<div class=" col-md-7">
						<input type="eu-date2" id="to_date" tabindex="2"
							class="form-control productFilterIP_size  input-sm textCenter">
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Created by</span>
					</div>
					<div class=" col-md-7">
					<input type="eu-date2" id="createdBy" tabindex="3"
							class="form-control productFilterIP_size  input-sm textCenter">
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Credit&nbsp;Note</span>
					</div>
					<div class=" col-md-7">
						<select class="form-control productboxSize input-sm productFilterIP_size input_rightSpecing" tabindex="4">
							<option>Yes</option>
							<option>No</option>
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label ">Company&nbsp;Claim</span>
					</div>
					<div class=" col-md-7">
						<select class="form-control productboxSize input-sm productFilterIP_size input_rightSpecing" tabindex="5">
							<option>Yes</option>
							<option>No</option>
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label ">Amount</span>
					</div>
					<div class=" col-md-4">
						<input type="text" tabindex="6" id="amount_from"
							class="form-control input-sm textRight">
					</div>
					<div class=" col-md-4">
						<input type="text" tabindex="7" id="amount_to"
							class="form-control input-sm textRight" style="margin-left: -28px;">
					</div>
				</div>
				<div class="row">
					<div class=" col-md-4">
						
					</div>
					<div class=" col-md-4 textCenter">
						<span class="control-label">from</span>
					</div>
					<div class=" col-md-4 textCenter">
						<span class="control-label" style="margin-left: -51px;">to</span>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<!-- <div class="row">
					<div class=" col-md-6">
						<span> <input type="checkbox" ng-model="filter.activeFlg"
							ng-value={{filter.activeFlg}}> <span
							class="chechBox_lablePos">Show&nbsp;Active</span>
						</span>
					</div>
					<div class=" col-md-6">
						<span class="ProductFilterLockpos"> <input type="checkbox">
							<span class="chechBox_lablePos">Show&nbsp;Lock</span>
						</span>
					</div>
				</div> -->
			</div>
		</div>
		<div class="row fieldsTop_Spacing ">
			<div class=" col-md-3">
				<a ng-click="clearAllFilters();" title="Remove Product" tabindex="8"
					class=" clearAllFilterPos">CLEAR&nbsp;ALL</a>
			</div>
		</div>
		<div class="row fieldsTop_Spacing fieldsBot_Spacing">
			<div class=" col-md-3">
				<span>
					<div class=" col-md-5">
							<button type="button" class="canclebtnSize" tabindex="9">Cancle</button>
					</div>
					<div class=" col-md-5">
					
<button type="button" ng-click="ok(filter)" class="okbtnSize" tabindex="10">OK</button>
					</div>
				</span>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
$(document).ready(function() {
		// Handler for .ready() called.
		//$('#fromDate').allowNumbersOnly();
		$('#toDate').allowNumbersOnly();
		$('#createdBy').allowAlphaNumericOnlywithspace();
		$('#cpmpanyClaim').allowAlphaNumericOnlywithspace();
		$('#ammount_from').allowNumbersOnly();
		$('#ammount_to').allowNumbersOnly();		
	});
</script>


<script type="text/javascript">
var month = (new Date()).getMonth() + 1;
var year  = (new Date()).getFullYear();

// EU Common Format
$('input[type=eu-date]').w2field('date',  { format: 'd/m/yyyy' });
$('input[type=eu-date1]').w2field('date', { format: 'd/m/yyyy', end: $('input[type=eu-date2]') });
$('input[type=eu-date2]').w2field('date', { format: 'd/m/yyyy', start: $('input[type=eu-date1]') });
$('input[type=eu-time]').w2field('time',  { format: 'h24' });
$('input[type=eu-timeA]').w2field('time', { format: 'h24', start: '8:00 am', end: '4:30 pm' });
</script>







