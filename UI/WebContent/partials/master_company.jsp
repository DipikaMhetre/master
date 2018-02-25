<title>Company
						Master</title>
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="CompanyMaster" data-ng-controller="CompanyMasterCtrl"
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
	            case 17: deletePermission = true;;//delete 
	                    break;
	            case 16: createPermission = true;//create
	            		break;	
	            case 18: modifyPermission = true;
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
				<li><a href="#" class="highlight_purple not_active">Company
						Master</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,15);" class="">Refresh</a></li>
				<li><a href="#" class="not_implemented_link not_active">Export</a>
				</li>
				<li><a href="#" title="Print"
					class="not_implemented_link not_active">Print</a></li>
				<%if(createPermission || modifyPermission){%>
				<li ng-show="showSaveBtn"><a
					data-ng-click=saveCompanyMaster(showCompanySelected) title="Save"
					tabindex="17">Save</a></li>
				<%}%>
				<%if(createPermission){%>
				<li><a data-ng-click=newCompanyMaster()>New</a></li>
				<%}%>
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
						<span class="fieldLeft_spacing_lg" ng-click="editable=!editable;$root.editable=!$root.editable">Editable</span>
					</button>
				</li>
			</ul>

		</nav>
	</Section>
	<nav class="navbar navbar-default navbar_master">
		<div class="container">
			<ul class="nav navbar-nav master_nav_element_pos">
				<li class="active"><a>Company</a></li>
				<li><a ng-click="changeView(activeUser.userId,activeUser.token,20)">Supplier</a></li>
				<li><a ng-click="changeView(activeUser.userId,activeUser.token,24)">Division</a></li>
				<!-- <li><a href="#masterMr">MR</a></li> -->
			</ul>
		</div>
	</nav>
	<div class="row container">
		<div class="col-md-2 sectiondivider">
			<div class="master_leftUpper">
				<div class="row masterPage_gridText">
					<span>Welcome! Company you select here shall be remembered
						on all screens for quick navigation.</span>
				</div>
			</div>
			<div class="row masterPage_fieldSpacing">

				<!-- =============GRID============-->
				<div id="grid" tabindex="-1" class="gridSizeLeft2"></div>
				<!-- =============GRID============-->
			</div>

		</div>
		<div class="col-md-10">
			<div class="">
				<div class="row masterTop_GrayStrip">
					<h6>
						<span class="masterTop_StripText">Company&nbsp;(<span
							class="masterHeading" ng-hide="!showCompanySelected.companyName">{{showCompanySelected.companyName}}</span><span
							ng-show="!showCompanySelected.companyName" class="masterHeading">New</span>)
						</span>
					</h6>
				</div>
				<div class="row fields_headingSpacing fieldsSpacing">
					<div class="col-md-5">
						<div class="row">
							<div class="form-group">
								<span class="col-md-3 control-label">Company&nbsp;Name</span>
								<div class="col-md-9">
									<input ng-disabled="!editable" type="text" id="company_name"
										name="company_name" allow-alphanumericwithspace
										class="form-control input-sm company_master_companyName"
										value={{showCompanySelected.companyName}}
										data-ng-model=showCompanySelected.companyName tabindex="1"
										required
										onfocus="Purplevalidator('company_name',2,'CompanyMaster','')"
										onclick="Purplevalidator('company_name',2,'CompanyMaster','')">
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-7">
						<div class="row">
							<!-- <div class="col-md-4">
							<div class="row">
								<div class="form-group">
			          				<span class="col-md-3 control-label">ID</span>
			                        <div class="col-md-9">
			                            <input type="text" disabled class="form-control input-sm " value={{showCompanySelected.companyId}} data-ng-model=showCompanySelected.companyId >
			          				</div>
		        				</div>
		        			</div>
						</div> -->
							<div class="col-md-4">
								<div class="row">
									<div class="form-group">
										<span class="col-md-3 control-label">EDE#</span>
										<div class="col-md-9">
											<input ng-disabled="!editable" name="ede_id" id="ede_id"
												type="text" allow-alphanumericwithspace maxlength="100"
												class="form-control input-sm"
												value={{showCompanySelected.edeCode}}
												data-ng-model=showCompanySelected.edeCode tabindex="2">
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="row">
									<div class="form-group">
										<span class="col-md-3 control-label">Code</span>
										<div class="col-md-9">
											<input ng-disabled="!editable" type="text" name="code"
												id="code" allow-alphanumericwithspace
												class="form-control input-sm"
												value={{showCompanySelected.companyCode}}
												data-ng-model=showCompanySelected.companyCode tabindex="3">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div class="row">
					<div class="col-md-2">
						<span class="control-label ">Remark</span>
					</div>
					<div class="col-md-10">
						<input ng-disabled="!editable" type="text" name="remark"
							id="remark"
							class="form-control input-sm company_master_remarkPos"
							value={{showCompanySelected.companyRemarks}}
							data-ng-model=showCompanySelected.companyRemarks tabindex="4">
					</div>
				</div>
				<div class="row fields_headingSpacing">
					<div class="col-md-7">
						<h5>
							<span class="submenuBlue_heading">Company Suppliers</span>
						</h5>
					</div>
					<div class="col-md-5 onoffAlign">
						<h5>
							<span class="setDefaultSupplierText">(Click on supplier
								name to set as default supplier)</span>
						</h5>
					</div>
				</div>
				<div class="row">
					<hr class="horizontal_line">
				</div>
				<div class="row">
					<div
						ng-if="showCompanySelected && showCompanySelected.companySuppliersList.length>0">
						<div
							ng-repeat="supplier in showCompanySelected.companySuppliersList">
							<div ng-if="supplier.supplierSetAsDefaultFlag"
								class="col-md-2 textLeft">
								<button ng-disabled="!editable" id="{{supplier.supplierName}}"
									type="button" ng-click="changeDefaultSupplier(supplier)"
									class="btn btn-default flagselected input-sm opt_btn_small flag_enable">
									<span class="fieldLeft_spacing_lg">{{supplier.supplierName}}</span>
								</button>
							</div>
							<div ng-if="!supplier.supplierSetAsDefaultFlag"
								class="col-md-2 textLeft">
								<button ng-disabled="!editable" id="{{supplier.supplierName}}"
									type="button" ng-click="changeDefaultSupplier(supplier)"
									class="btn btn-default input-sm opt_btn_small flag_enable">
									<span class="fieldLeft_spacing_lg">{{supplier.supplierName}}</span>
								</button>
							</div>
						</div>
					</div>
					<div
						ng-if="!showCompanySelected || !showCompanySelected.companySuppliersList.length>0"
						class="col-md-2 textLeft">
						<button type="button" disabled
							class="btn btn-default input-sm opt_btn_small flag_enable">
							<span class="fieldLeft_spacing_lg">N/A</span>
						</button>
					</div>
				</div>
				<div class="row fields_headingSpacing">
					<h5>
						<span class="submenuBlue_heading">Company Contact Details</span>
					</h5>
					<hr class="horizontal_line">
				</div>
				<div class="row">
					<div class="col-md-6 sectionvline">
						<div class="row fieldsSpacing">
							<div class="form-group">
								<span class="col-md-3 control-label">Address&nbsp;Line&nbsp;1</span>
								<div class="col-md-9">
									<input type="text" name="address1" id="address1" allow-address
										class="form-control input-sm"
										value={{showCompanySelected.companyAddressLine1}}
										data-ng-model=showCompanySelected.companyAddressLine1
										ng-disabled="!editable" tabindex="5">
								</div>
							</div>
						</div>
						<div class="row fieldsSpacing">
							<div class="form-group">
								<span class="col-md-3 control-label">Address&nbsp;Line&nbsp;2</span>
								<div class="col-md-9">
									<input type="text" name="address2" id="address2" allow-address
										class="form-control input-sm"
										value={{showCompanySelected.companyAddressLine2}}
										data-ng-model=showCompanySelected.companyAddressLine2
										ng-disabled="!editable" tabindex="6">
								</div>
							</div>
						</div>
						<div class="row fieldsSpacing">
							<div class="form-group">
								<span class="col-md-3 control-label">City</span>
								<div class="col-md-5">
									<!--  <input type="text" class="form-control input-sm not_implemented" value={{showCompanySelected.companyCity.cityName}} data-ng-model=showCompanySelected.companyCity.cityName tabindex="10"> -->
									<input type="text" disabled name="city" id="city"
										ng-disabled="!editable"
										class="form-control input-sm not_implemented">
								</div>

								<div class="col-md-4">
									<!-- <input type="text" class="form-control input-sm not_implemented" value={{showCompanySelected.companyCity.cityState.stateName}} data-ng-model=showCompanySelected.companyCity.cityState.stateName tabindex="11"> -->
									<input type="text" disabled ng-disabled="!editable"
										class="form-control input-sm not_implemented">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="form-group">
								<span class="col-md-3 control-label">Pin&nbsp;Code</span>
								<div class="col-md-5">
									<input ng-disabled="!editable" name="pin_code" id="pin_code"
										disabled="disabled" type="text" maxlength="10"
										class="form-control input-sm not_implemented numberField">
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="row fieldsSpacing">
							<div class="form-group">
								<span class="col-md-3 control-label">Contact&nbsp;Person</span>
								<div class="col-md-9">
									<input name="contact_person" ng-disabled="!editable"
										allow-textwithspace id="contact_person" type="text"
										class="form-control input-sm"
										value={{showCompanySelected.companyContactPerson}}
										data-ng-model=showCompanySelected.companyContactPerson
										tabindex="7">
								</div>
							</div>
						</div>
						<div class="row fieldsSpacing">
							<div class="form-group">
								<span class="col-md-3 control-label">Mobile</span>
								<div class="col-md-4">
									<input ng-disabled="!editable" name="mobile" id="mobile"
										type="text" allow-numbers
										class="form-control input-sm numberField"
										value={{showCompanySelected.companyPhone}}
										data-ng-model=showCompanySelected.companyPhone tabindex="8"
										onblur="Purplevalidator('mobile',1,'CompanyMaster','blur')"
										onclick="Purplevalidator('mobile',1,'CompanyMaster','')"
										onfocus="Purplevalidator('mobile',1,'CompanyMaster','')">
								</div>
								<div class="col-md-1">
									<span ng-disabled="!editable"
										class=" control-label textPosLeft ">Landline</span>
								</div>
								<div class="col-md-4">
									<input ng-disabled="!editable" name="landline" id="landline"
										disabled="disabled" type="text" maxlength="10"
										class="form-control input-sm not_implemented numberField">
								</div>
							</div>
						</div>
						<div class="row fieldsSpacing">
							<div class="form-group">
								<span class="col-md-3 control-label">Fax</span>
								<div class="col-md-4">
									<input ng-disabled="!editable" name="fax" id="fax" type="text"
										allow-numbers class="form-control input-sm numberField"
										value={{showCompanySelected.companyFax}}
										data-ng-model=showCompanySelected.companyFax tabindex="9">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="form-group">
								<span class="col-md-3 control-label">Email</span>
								<div class="col-md-7">
									<input ng-disabled="!editable" type="email"
										class="form-control input-sm" name='email' id="email"
										
										data-ng-model=showCompanySelected.companyEmail tabindex="10"
										onblur="Purplevalidator('email',0,'CompanyMaster','blur')"
										onclick="Purplevalidator('email',0,'CompanyMaster','')"
										onfocus="Purplevalidator('email',0,'CompanyMaster','')">
								</div>
							</div>
						</div>

					</div>
				</div>

				<div class="row fields_headingSpacing">
					<h5>
						<span class="submenuBlue_heading">Company Settings</span>
					</h5>
					<hr class="horizontal_line">
				</div>
				<div class="row">
					<div class="col-md-4">
						<div class="row">
							<div class="form-group">
								<span class="col-md-4 control-label">Stock&nbsp;Calculation</span>
								<div class="col-md-8">
									<select ng-disabled="!editable"
										class="input-sm opt_btn_small Master_feildPos input_rightSpecing"
										data-ng-options="opt.name for opt in stockCalOptionList"
										ng-model="stockCalOptionSelected" tabindex="11">
										<option value='' disabled selected style='display: none;'>please
											select</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="row">
							<div class="form-group">
								<span class="col-md-4 control-label">Order&nbsp;Limit</span>
								<div class="col-md-8">
									<input ng-disabled="!editable" type="text" name="order_limit"
										allow-numbers id="order_limit"
										class="form-control input-sm master_orderLimitPos numberField"
										ng-value={{showCompanySelected.companyOrderLimit}}
										ng-model=showCompanySelected.companyOrderLimit tabindex="12">
								</div>
							</div>
						</div>
					</div>

					<div class="col-md-5">
						<div class="row">
							<div class="form-group">
								<span class="col-md-4 control-label "><span
									class="masterCompanyipPos1">Payment&nbsp;Terms</span></span>
								<div class="col-md-4">
									<select ng-disabled="!editable"
										class="input-sm opt_btn_small masterCompany_paymentTerms input_rightSpecing"
										data-ng-options="opt.name for opt in payTermsOptionList"
										ng-model="payTermsOptionSelected" tabindex="13">
										<option value='' disabled selected style='display: none;'>please
											select</option>
									</select>
								</div>
								<div class="col-md-4">
									<div class="input-group">
										<input ng-disabled="!editable"
											class="input-sm daysInput_CompanyMst numberField" name="days"
											allow-numbers id="days" type="text" maxlength="4"
											ng-value={{showCompanySelected.companyPaymentDays}}
											ng-model=showCompanySelected.companyPaymentDays tabindex="14">
										<span class="control-label fieldLeft_spacing">days</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row fields_headingSpacing">
					<span class="col-md-2"> <input ng-disabled="!editable"
						class="checkBox" type="checkbox"
						ng-value={{showCompanySelected.companyActiveFlag}}
						ng-model=showCompanySelected.companyActiveFlag tabindex="15">
						<span>Active</span>
					</span> <span class="col-md-2"> <input ng-disabled="!editable"
						class="checkBox" type="checkbox"
						ng-value={{showCompanySelected.companyEmailPOFlag}}
						ng-model=showCompanySelected.companyEmailPOFlag tabindex="16">
						<span>Email&nbsp;PO</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</div>
<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
<script type="text/javascript"
	src="http://w2ui.com/src/w2ui-1.4.2.min.js"></script>



<!--  <script>
            var myEvent = window.attachEvent || window.addEventListener;
            var chkevent = window.attachEvent ? 'onbeforeunload' : 'beforeunload'; /// make IE7, IE8 compatable

            myEvent(chkevent, function(e) { // For >=IE7, Chrome, Firefox
                var confirmationMessage = ' ';  // a space
                (e || window.event).returnValue = confirmationMessage;
                return confirmationMessage;
            });
        </script>  -->
<!--

//-->
</script>
<!-- <script type="text/javascript">
	    $( document ).ready(function() {
	    	  // Handler for .ready() called.
	    	 	$('#company_name').allowAlphaNumericOnlywithspace();
	    	  	$('#ede_id').allowAlphaNumericOnlywithspace();
	    	  	$('#code').allowAlphaNumericOnlywithspace();  
	    	  	//$('#remark').allowTextOnlyWithSpace();
	    	  	//$('#address1').allowAlphaNumericOnlywithspace();	    	  	
	    		//$('#address2').allowAlphaNumericOnlywithspace();
	    		//$('#city').allowTextOnly();
	    	  	//$('#pin_code').allowNumbersOnly();
	    		$('#contact_person').allowTextOnlyWithSpace();
	    		$('#mobile').allowNumbersOnly();
	    	  	$('#landline').allowNumbersOnly();
	    	  	$('#fax').allowNumbersOnly();
	    		//$('#email').allowEmailOnly();	    			    		
	    		$('#order_limit').allowNumbersOnly();
	    		$('#days').allowNumbersOnly();
	    		$('#address1').allowAddress();
	    		$('#address2').allowAddress();
	    	});
    	
    </script> -->

<script type="text/javascript">
	$(document).ready(function() {

		$("#company_name").keypress(function() {
			$("#company_name").css("background-color", "white");
		});
		
		$("#mobile").keypress(function() {
			$("#mobile").css("background-color", "white");
		});
		

		$("#email").keypress(function() {
			$("#email").css("background-color", "white");
		});
		
		angular.element('*[ng-app]').injector().get("configurable").createPermission=<%=createPermission %>;
		debugger;
		var pCookie={createPermission:<%=createPermission %>,deletePermission:<%=deletePermission%>,modifyPermission:<%=modifyPermission %>,modifyPurchaseDatePermission:<%=modifyPurchaseDatePermission %>};
		angular.element('*[ng-app]').injector().get('$cookieStore').put("userPermission",pCookie);
		<% if(createPermission && !modifyPermission){%>	    		
			angular.element(document.getElementById('CompanyMaster')).scope().showSaveBtn=false;
		<%}else if(modifyPermission){%>
			angular.element(document.getElementById('CompanyMaster')).scope().showSaveBtn=true;
		<% }%>
		
		
	});
</script>
<!-- <script type="text/javascript">
				$(function () {
				    $('#form').w2form({ 
				        name  : 'form',
				        url   : 'server/post',
				        fields: [
				            { field: 'ede#', type: 'text', required: true },
				            { field: 'address1', type: 'text', required: true },
				            { field: 'address2', type: 'text' },
				            { field: 'company_name', type: 'text', required: true },
				            { field: 'zip', type: 'int'},
				            { field: 'fax', type: 'int'},
				            { field: 'mobile', type: 'int', required: true},
				            { field: 'landline', type: 'int'},
				            
				        ],
				        actions: {				            
				            save: function () {
				                this.save();
				            }
				        }
				    });
				});
				</script>    -->

<!-- <script>

    var userIsEditingSomething; // set this if something crazy happens
        oldOnBeforeUnload = window.onbeforeunload;

    window.onbeforeunload = function () {
        // attempt to handle a previous onbeforeunload
        if ('function' === typeof oldOnBeforeUnload) {
            var message = oldOnBeforeUnload();
            if ('undefined' !== typeof message) {
                if (confirm('string' === typeof message ? message : 'Are you sure you want to leave this page?')) {
                    return; // allow user to exit without further annoying pop-ups
                }
            }
        }
        // handle our own
        if (userIsEditingSomething) {
            return 'Are you sure you want to exit?';
        }
    };

</script> -->