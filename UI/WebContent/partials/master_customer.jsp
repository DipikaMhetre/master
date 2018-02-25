<title>Customer Master</title>
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="CustomerMaster" data-ng-controller="CustomerMasterCtrl"
	ng-init=init()>
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
	            case 13: deletePermission = true;;//delete 
	                    break;
	            case 12: createPermission = true;//create
	            		break;	
	            case 14: modifyPermission = true;
                		break;     			
	            case 5: modifyPurchaseDatePermission=true;
       					break;
       			default:break;		
			} 		
		}
		
		%>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" title="Rajesh Mahale"
					class="highlight_purple not_active">Customer Master</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span>
				</li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,11);"
				 class="not_implemented_link not_active"
					title="Shortcuts">Start Over</a></li>
				<li><a href="#" title="Logout"
					class="not_implemented_link not_active">Export</a></li>
				<li><a href="#" title="Print"
					class="not_implemented_link not_active">Print</a></li>
				<%if(createPermission || modifyPermission){%>
				<li ng-show="showSaveBtn"><a
					data-ng-click=saveCustomerMaster(showCustomerSelected)
					tabindex="34" title="Save">Save</a></li>
				<%}%>
				<%if(createPermission){%>
				<li><a data-ng-click=newCustomerMaster() title="Save">New</a>
				</li>
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
	<nav class="navbar navbar_master1"></nav>
	<div class="row container">
		<div class="col-md-2 sectiondivider">
			<div class="master_leftUpper">
				<div class="row masterPage_gridText">
					<span>If you select a customer from the list it show the
						details of customer.</span>
				</div>
			</div>

			<div class="row masterPage_fieldSpacing">
				<!-- =============GRID============-->
				<div id="grid" tabindex="-1" class="customer_master_RightGrid"></div>
				<!-- =============GRID============-->
			</div>
			<div class="row master_filterPos ">
				<a href="#" class="not_implemented_link not_active" title="Filter">Filter(<span
					class="purpleText not_implemented_link">ON</span>)
				</a>
			</div>
		</div>
		<div class="col-md-10">
			<div class=" ">
				<div class="row masterTop_GrayStrip">
					<h6>
						<span class="masterTop_StripText">Customer&nbsp;(<span
							class="masterHeading">{{showCustomerSelected.customerName}}</span><span
							ng-show="!showCustomerSelected.customerName"
							class="masterHeading">New</span>)
						</span>
					</h6>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-3">
								<span class="control-label">A/C&nbsp;Name</span>
							</div>
							<div class="col-md-9">
								<input type="text" id="customeracname" name="customeracname"
									allow-alphanumericwithspace required="required"
									class="form-control input-sm " tabindex="1"
									value={{showCustomerSelected.customerAccountName}}
									data-ng-model=showCustomerSelected.customerAccountName
									onfocus="Purplevalidator('customeracname',2,'CustomerMaster','')"
									onclick="Purplevalidator('customeracname',2,'CustomerMaster','')">
							</div>
						</div>
					</div>
					<div class="col-md-4 ">
						<div class="row">
							<div class=" col-md-3">
								<span class="control-label">A/C&nbsp;Code</span>
							</div>
							<div class="col-md-9">
								<input type="text" required="required" id="customeraccode"
									name="customeraccode" allow-alphanumericwithspace
									class="form-control input-sm " tabindex="2"
									value={{showCustomerSelected.customerAccountCode}}
									data-ng-model=showCustomerSelected.customerAccountCode
									onfocus="Purplevalidator('customeraccode',2,'CustomerMaster','')"
									onclick="Purplevalidator('customeraccode',2,'CustomerMaster','')">
							</div>
						</div>
					</div>

					<div class="col-md-4">
						<div class="row">
							<div class="col-md-3">
								<span class="control-label ">Other</span>
							</div>
							<div class="col-md-9">
								<input type="text" class="form-control input-sm " tabindex="3"
									value={{showCustomerSelected.customerOtherInfo}}
									data-ng-model=showCustomerSelected.customerOtherInfo>
							</div>
						</div>
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<div class="row">

							<div class=" col-md-3">
								<span class="control-label ">Type</span>
							</div>

							<div class="col-md-9">

								<select
									class="form-control productboxSize input-sm input_rightSpecing"
									data-ng-options="opt.name for opt in customerTypeList"
									ng-model="customerTypeSelected" tabindex="4">
									<option value='' disabled selected style='display: none;'>Please
										select</option>
								</select>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-3">
								<span class="control-label">Area</span>
							</div>
							<div class="col-md-9">
								<select
									class="form-control productboxSize input-sm input_rightSpecing"
									tabindex="5"
									data-ng-options="opt.areaDescription for opt in showAreaList"
									ng-model="showAreaSelected">
									<option value='' disabled selected style='display: none;'>Please
										select</option>
								</select>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class="col-md-3">
								<span class="control-label ">Salesman</span>
							</div>
							<div class="col-md-9">
								<select
									class="form-control productboxSize input-sm input_rightSpecing"
									data-ng-options="opt.salesmanName for opt in showSalesmanList"
									ng-model="showSalesmanSelected" tabindex="6">
									<option value='' disabled selected style='display: none;'>Please
										select</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-1">
						<span class="control-label productDetail_saleText ">Remark</span>
					</div>
					<div class="col-md-11">
						<input type="text" class="form-control input-sm"
							value={{showCustomerSelected.customerRemark}}
							data-ng-model=showCustomerSelected.customerRemark tabindex="7">
					</div>
				</div>
				<div class="row fields_headingSpacing1">
					<h5>
						<span class="submenuBlue_heading">Customer Ledger Details</span>
					</h5>
					<hr class="horizontal_line">
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-3">
								<span class="control-label textMargin">Tax&nbsp;ID</span>
							</div>
							<div class="col-md-9">
								<input type="text" id="customertaxid" name="customertaxid"
									allow-numbers
									class="form-control input-sm numberField inputMasterPos inputMasterSize1"
									value={{showCustomerSelected.customerTaxId}}
									data-ng-model=showCustomerSelected.customerTaxId tabindex="8">
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-3">
								<span class="control-label textMargin">Ledger&nbsp;Type</span>
							</div>
							<div class="col-md-9">
								<select
									class="form-control productboxSize input-sm inputMasterPos inputMasterSize1 input_rightSpecing"
									data-ng-options="opt.name for opt in customerLedgerTypeList"
									ng-model="customerLedgerTypeSelected" tabindex="9"
									id="cust_ledgertype"
									onfocus="Purplevalidator('cust_ledgertype',2,'CustomerMaster','')"
									onclick="Purplevalidator('cust_ledgertype',2,'CustomerMaster','')">
									<option value='' disabled selected style='display: none;'>Please
										select</option>
								</select>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class="  col-md-3">
								<span class="control-label textMargin ">A/c&nbsp;Group</span>
							</div>
							<div class="col-md-3">
								<select
									class="form-control productboxSize input-sm inputMasterSize2 not_implemented input_rightSpecing"
									tabindex="10" disabled="disabled">

								</select>
							</div>
							<div class="col-md-6">
								<input type="text"
									class="form-control input-sm iptextRight not_implemented"
									readonly disabled="disabled">
							</div>
						</div>
					</div>


				</div>
				<div class="row">
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-3">
								<span class="control-label textMargin">Opening&nbsp;Bal</span>
							</div>
							<div class="col-md-5">
								<input type="text" id="customeropeningbal"
									name="customeropeningbal" allow-numbers
									class="form-control numberField input-sm inputMasterPos inputMasterSize"
									value={{showCustomerSelected.customerOpeningBalance}}
									data-ng-model=showCustomerSelected.customerOpeningBalance
									tabindex="11">
							</div>
							<div class="col-md-4">
								<select
									class="form-control productboxSize input-sm input_rightSpecing"
									tabindex="12"
									data-ng-options="opt.name for opt in customerOpeningBalanceTypeList"
									ng-model="customerOpeningBalanceTypeSelected">
									<option value='' disabled selected style='display: none;'>Please
										select</option>
								</select>
							</div>
						</div>
					</div>

					<div class="col-md-4">
						<div class="row">
							<div class="col-md-3">
								<span class="control-label textMargin ">Credit</span>
							</div>
							<div class="col-md-4">
								<select
									class="form-control productboxSize input-sm inputMasterPos inputMasterSize3 input_rightSpecing"
									data-ng-options="opt.name for opt in customerCreditTypeList"
									ng-model="customerCreditTypeSelected" tabindex="13"
									id="customer_credit"
									onfocus="Purplevalidator('customer_credit',2,'CustomerMaster','')"
									onclick="Purplevalidator('customer_credit',2,'CustomerMaster','')">
									<option value='' disabled selected style='display: none;'>Please
										select</option>
								</select>
							</div>
							<div class="col-md-5 customerDayIP">
								<input
									class="input-sm daysInput_CompanyMst inputMasterPos numberField"
									id="customerdays" name="customerdays" allow-numbers
									required="required" type="text"
									value={{showCustomerSelected.customerCreditPeriod}}
									data-ng-model=showCustomerSelected.customerCreditPeriod
									tabindex="14"
									onfocus="Purplevalidator('customerdays',2,'CustomerMaster','')"
									onclick="Purplevalidator('customerdays',2,'CustomerMaster','')">
								<span class="control-label">days</span>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<h5>
						<span class="submenuBlue_heading">Customer Licence Detail</span>
					</h5>
					<hr class="horizontal_line">
				</div>
				<div class=" row">
					<div class="col-md-4">
						<div class="row">
							<div class="col-md-3">
								<span class="control-label">Licence&nbsp;Type</span>
							</div>
							<div class="col-md-5">
								<select
									class="form-control productboxSize input-sm inputMasterPos inputMasterSize input_rightSpecing"
									data-ng-options="opt.id as opt.name for opt in customerLicenceTypeList"
									ng-model="custLic.customerLicenceID"
									value={{custLic.customerLicenceID}} tabindex="15">
									<option value='' disabled selected style='display: none;'>Please
										select</option>
								</select>
							</div>
							<div class="col-md-4">
								<input type="text" placeholder="Licence No"
									class="form-control input-sm  numberField"
									value={{custLic.customerLicenceNumber}}
									data-ng-model=custLic.customerLicenceNumber tabindex="16">
							</div>
						</div>
						<!-- <div class="row">{{custLic}}</div> -->
					</div>
					<div class="col-md-5">
						<div class="row">
							<div class="col-md-6">
								<div class="input-group">
									<span class="input-group-addon input-sm">Start&nbsp;Date</span>
									<input type="eu-date1"
										class="form-control input-sm textCenter customer_startEnd_date"
										value={{custLic.customerLicenceStartDate}}
										data-ng-model=custLic.customerLicenceStartDate tabindex="18">
								</div>
							</div>
							<div class="col-md-6">
								<div class="input-group">
									<span class="input-group-addon input-sm">End&nbsp;Date</span> <input
										type="eu-date2"
										class="form-control input-sm textCenter customer_startEnd_date"
										value={{custLic.customerLicenceEndDate}}
										data-ng-model=custLic.customerLicenceEndDate tabindex="19">
								</div>
							</div>
						</div>
					</div>


					<div class="col-md-1" ng-show="showAdd">
						<button type="button" id="add" ng-click="addRecord();"
							class="btn btn-primary input-sm_btn btn_small customerAddBtnPos"
							tabindex="20">ADD</button>
					</div>
					<div class="col-md-1" ng-show="showModify">
						<button type="button" id="modify" ng-click="modifyRecord();"
							class="btn btn-modify input-sm_btn btn_small customerAddBtnPos">MODIFY</button>
					</div>
					<div class="col-md-2">
						<nav class="mainnav">
							<ul class="rightFloat">
								<li><a title="Remove Product" ng-click="removeRecord();"
									class="master_removePos highlight_red" tabindex="21">Remove</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="row">
					<!-- =============GRID============-->
					<div id="gridL" tabindex="-1" class="Master_customerLeftGrid"></div>
					<!-- =============GRID============-->
				</div>
				<div class="row fields_headingSpacing1">
					<h5>
						<span class="submenuBlue_heading">Customer Contact Details</span>
					</h5>
					<hr class="horizontal_line">
				</div>
				<div class="row">
					<div class="col-md-6 sectionvline">
						<div class="row fieldsSpacing ">
							<div class="form-group">
								<span class="col-md-3 control-label textMargin">Address&nbsp;Line&nbsp;1</span>
								<div class="col-md-9">
									<input type="text" id="customeradress"
										class="form-control input-sm"
										value={{showCustomerSelected.customerAddressLine1}}
										data-ng-model=showCustomerSelected.customerAddressLine1
										tabindex="22">
								</div>
							</div>
						</div>
						<div class="row fieldsSpacing ">
							<div class="form-group">
								<span class="col-md-3 control-label textMargin">Address&nbsp;Line&nbsp;2</span>
								<div class="col-md-9">
									<input type="text" class="form-control input-sm"
										value={{showCustomerSelected.customerAddressLine2}}
										data-ng-model=showCustomerSelected.customerAddressLine2
										tabindex="23">
								</div>
							</div>
						</div>
						<div class="row fieldsSpacing">
							<div class="form-group">
								<span class="col-md-3 control-label">City</span>
								<div class="col-md-5">
									<input type="text"
										class="form-control input-sm not_implemented"
										disabled="disabled"
										value={{showCustomerSelected.customerCity.cityName}}
										data-ng-model=showCustomerSelected.customerCity.cityName
										tabindex="24">
								</div>
								<div class="col-md-4">
									<input type="text"
										class="form-control input-sm not_implemented"
										disabled="disabled"
										value={{showCustomerSelected.customerCity.cityState.stateName}}
										data-ng-model=showCustomerSelected.customerCity.cityState.stateName
										tabindex="25">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="form-group">
								<span class="col-md-3 control-label">Pin&nbsp;Code</span>
								<div class="col-md-5">
									<input type="text"
										class="form-control input-sm not_implemented numberField"
										disabled="disabled">
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="row fieldsSpacing ">
							<div class="form-group">
								<span class="col-md-3 control-label textMargin">Contact&nbsp;Person</span>
								<div class="col-md-9">
									<input type="text" id="customercontactperson"
										name="customercontactperson" allow-textwithspace
										class="form-control input-sm"
										value={{showCustomerSelected.customerContactPerson}}
										data-ng-model=showCustomerSelected.customerContactPerson
										tabindex="26">
								</div>
							</div>
						</div>
						<div class="row fieldsSpacing ">
							<div class="form-group">
								<span class="col-md-3 control-label">Mobile</span>
								<div class="col-md-4">
									<input type="text" id="customemobile" name="customemobile"
										allow-numbers class="form-control input-sm numberField"
										value={{showCustomerSelected.customerPhone}}
										data-ng-model=showCustomerSelected.customerPhone tabindex="27"
										onblur="Purplevalidator('customemobile',1,'CustomerMaster','blur')"
										onclick="Purplevalidator('customemobile',1,'CustomerMaster','')"
										onfocus="Purplevalidator('customemobile',1,'CustomerMaster','')">
								</div>
								<div class="col-md-1">
									<span class=" control-label textPosLeft ">Landline</span>
								</div>
								<div class="col-md-4">
									<input type="text" id="customerlandlinee"
										class="form-control input-sm not_implemented numberField"
										disabled="disabled">
								</div>
							</div>
						</div>
						<div class="row fieldsSpacing">
							<div class="form-group">
								<span class="col-md-3 control-label">Fax</span>
								<div class="col-md-4">
									<input type="text" id="customerfax" name="customerfax"
										allow-numbers class="form-control input-sm numberField"
										value={{showCustomerSelected.customerFax}}
										data-ng-model=showCustomerSelected.customerFax tabindex="28">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="form-group">
								<span class="col-md-3 control-label textMargin">Email</span>
								<div class="col-md-7">
									<input type="text" id="customeremail"
										class="form-control input-sm"
										value={{showCustomerSelected.customerEmail}}
										data-ng-model=showCustomerSelected.customerEmail tabindex="29"
										onblur="Purplevalidator('customeremail',0,'CustomerMaster','blur')"
										onclick="Purplevalidator('customeremail',0,'CustomerMaster','')"
										onfocus="Purplevalidator('customeremail',0,'CustomerMaster','')">
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<h5>
						<span class="submenuBlue_heading">Customer Settings</span>
					</h5>
					<hr class="horizontal_line">
				</div>

				<div class="row">
					<span class="col-md-2"> <input class="checkBox"
						type="checkbox"
						ng-value={{showCustomerSelected.customerActiveFlag}}
						ng-model=showCustomerSelected.customerActiveFlag tabindex="30">
						<span>Active</span>
					</span> <span class="col-md-2"> <input class="checkBox"
						type="checkbox"
						ng-value={{showCustomerSelected.customerAutoEmailFlag}}
						ng-model=showCustomerSelected.customerAutoEmailFlag tabindex="31">
						<span>Auto Email</span>
					</span> <span class="col-md-2"> <input class="checkBox"
						type="checkbox"
						ng-value={{showCustomerSelected.customerSubStockitsFlag}}
						ng-model=showCustomerSelected.customerSubStockitsFlag
						tabindex="32"> <span>Sub Stockist</span>
					</span> <span class="col-md-2"> <input class="checkBox"
						type="checkbox" ng-value={{showCustomerSelected.customerLockFlag}}
						ng-model=showCustomerSelected.customerLockFlag tabindex="33">
						<span>Lock</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
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
</script>


<!--  <script type="text/javascript">
	    $( document ).ready(function() {
	    
	    	  // Handler for .ready() called.
	    	  $('#customeraccode ').allowAlphaNumericOnlywithspace();
	    	$('#customeracname ').allowAlphaNumericOnlywithspace();
	    		$('#customertaxid ').allowNumbersOnly();
	    		$('#customeropeningbal ').allowNumbersOnly();
	    		$('#customerdays ').allowNumbersOnly();
	    		$('#customercontactperson ').allowTextOnlyWithSpace();
	    		$('#customemobile ').allowNumbersOnly();
	    //	$('#customerlandlinee ').allowNumbersOnly(;
	    		$('#customerfax ').allowNumbersOnly();
	    		//$('#customeremail ').allowEmailOnly();
	    			    		
	    	});
    	
    </script>
 -->
<script type="text/javascript">
	$(document).ready(function() {

		$("#customeraccode").keypress(function() {
			$("#customeraccode").css("background-color", "white");
		});
		$("#customeracname").keypress(function() {
			$("#customeracname").css("background-color", "white");
		});

		$("#cust_ledgertype").click(function() {
			$("#cust_ledgertype").css("background-color", "white");
		});
		$("#customemobile").keypress(function() {
			$("#customemobile").css("background-color", "white");
		});

		$("#customeremail").keypress(function() {
			$("#customeremail").css("background-color", "white");
		});

		$("#customer_credit").click(function() {
			$("#customer_credit").css("background-color", "white");
		});
		$("#customerdays").keypress(function() {
			$("#customerdays").css("background-color", "white");
		});
		angular.element('*[ng-app]').injector().get("configurable").createPermission=<%=createPermission %>;
		debugger;
		var pCookie={createPermission:<%=createPermission %>,deletePermission:<%=deletePermission%>,modifyPermission:<%=modifyPermission %>,modifyPurchaseDatePermission:<%=modifyPurchaseDatePermission %>};
		angular.element('*[ng-app]').injector().get('$cookieStore').put("userPermission",pCookie);
		<% if(createPermission && !modifyPermission){%>	    		
			angular.element(document.getElementById('CustomerMaster')).scope().showSaveBtn=false;
		<%}else if(modifyPermission || createPermission){%>
			angular.element(document.getElementById('CustomerMaster')).scope().showSaveBtn=true;
		<% }%>

	});
</script>