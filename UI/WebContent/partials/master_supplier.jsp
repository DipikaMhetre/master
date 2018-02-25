<title>Supplier Master</title>
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="SupplierMaster" data-ng-controller="SupplierMasterCtrl" ng-init=init()> 
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
	            case 22: deletePermission = true;;//delete 
	                    break;
	            case 21: createPermission = true;//create
	            		break;	
	            case 23: modifyPermission = true;
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
				<li ><a href="#" title="Rajesh Mahale" class="highlight_purple not_active">Supplier Master</a></li>
                <li ><span class="glyphicon glyphicon-play newShowGlyphicon"></span> </li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,20);" class="">Refresh</a></li>							
				<li ><a href="#" class="not_implemented_link not_active">Export</a> </li>							
				<li ><a href="#" title="Print" class="not_implemented_link not_active">Print</a>  </li>
			   <%if(createPermission || modifyPermission){%>
				<li ng-show="showSaveBtn"><a ng-click=saveSupplierMaster(showSupplierSelected) title="Save" tabindex="23">Save</a>  </li>
				<%}%>
				<%if(createPermission){%>
				 <li ><a ng-click=newSupplierMaster() title="Save">New</a> </li>
				 <%}%>							
				<li ><a href="#" title="Help" class="not_implemented_link not_active">Help</a>  </li>
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
						<span class="fieldLeft_spacing_lg" ng-click="editable=!editable;$root.editable=!$root.editable" >Editable</span>
					</button>
				</li>
			</ul>
		</nav>
	</Section>          		 
	<nav class="navbar navbar-default navbar_master">
		<div class="container">
			<ul class="nav navbar-nav master_nav_element_pos">
	        	<li role="presentation"><a ng-click="changeView(activeUser.userId,activeUser.token,15)">Company</a></li>			        	
	        	<li class="active"><a >Supplier</a></li>
	        	<li><a ng-click="changeView(activeUser.userId,activeUser.token,24)">Division</a></li>
	        	<!-- <li><a href="#masterMr">MR</a></li> -->
	        </ul>			        
		</div>
	</nav>
	<div class="row container">
		<div class="col-md-2 sectiondivider">
			<div class="master_leftUpper">
				<div class="row">
					<select ng-disabled="!editable" class="input-sm masterPage_grid input_rightSpecing" data-ng-options="opt.companyName for opt in showCompanyList" ng-model="showCompanySelected" ng-change="onCompanySelection(showCompanySelected)"  tabindex="1">						
						<option value='' disabled selected style='display:none;'>Please select a Company</option>
					</select>
				</div>	
				<div class="row masterPage_gridText">
					<span>Following are the suppliers to selected company.</span>
				</div>				
			</div>
			<div class="row  masterPage_fieldSpacing ">
		
	     		 <!-- =============GRID============-->
	     		 <div id="grid" tabindex="-1"  class="gridSizeLeft2"></div>
	     		 <!-- =============GRID============-->
			</div>
		</div>
		<div class="col-md-10">
			<div class="">
				<div class="row masterTop_GrayStrip">
					<h6><span class="masterTop_StripText">Supplier&nbsp;(<span ng-hide="!showSupplierSelected.supplierName" class="masterHeading">{{showSupplierSelected.supplierName}}</span><span ng-show="!showSupplierSelected.supplierName" class="masterHeading">New</span>)</span></h6>
				</div>
				<div class="row fields_headingSpacing">
					<div class="col-md-6">
						<div class="row">
							<div class=" col-md-2">
		          				<span class="control-label">Company</span>
		       				</div>
		                    <div class=" col-md-9">
						      <input type="text" disabled class="form-control input-medium input-sm" value={{showSupplierSelected.supplierCompanyName}} ng-model="showSupplierSelected.supplierCompanyName" >						        
						   </div>
	        			</div>	        			
					</div>
				</div>
				<div class="row">
					<h5><span class="submenuBlue_heading">Supplier Details</span></h5>
					<hr class="horizontal_line">
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-3">
		          				<span class="control-label textMargin">A/C&nbsp;Code</span>
		       				</div>
		                    <div class="col-md-9">
								<input ng-disabled="!editable" type="text" id="supplieraccode" name="supplieraccode" allow-alphanumericwithspace class="form-control input-sm" required="required" value={{showSupplierSelected.supplierAccountCode}} ng-model="showSupplierSelected.supplierAccountCode" tabindex="2" onclick="Purplevalidator('supplieraccode',2,'SupplierMaster','')" onfocus="Purplevalidator('supplieraccode',2,'SupplierMaster','')" >
							</div>
		        		</div>
					</div>
					<div class="col-md-4">
						<div class="row">
	                        <div class=" col-md-3">
								<span class="control-label">A/C&nbsp;Name</span>
							</div>
							<div class="col-md-9">
								<input ng-disabled="!editable" type="text" id="supplieracname" name="supplieracname" allow-alphanumericwithspace class="form-control input-sm" required="required" value={{showSupplierSelected.supplierAccountName}} ng-model="showSupplierSelected.supplierAccountName" tabindex="3" onclick="Purplevalidator('supplieracname',2,'SupplierMaster','')" onfocus="Purplevalidator('supplieracname',2,'SupplierMaster','')">
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class="col-md-3">
								<span class="control-label ">Other</span>
							</div>
							<div class="col-md-9">
								<input ng-disabled="!editable" type="text" class="form-control input-sm " value={{showSupplierSelected.supplierOtherInfo}} ng-model="showSupplierSelected.supplierOtherInfo" tabindex="4">
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-1">
						<span class="control-label productDetail_saleText">Remark</span>
					</div>
					<div class="col-md-11">
						<input ng-disabled="!editable" type="text" class="form-control input-sm supplierRemark" value={{showSupplierSelected.supplierRemark}} ng-model="showSupplierSelected.supplierRemark" tabindex="5">
					</div>
				</div>
				<div class="row">
					<h5><span class="submenuBlue_heading">Supplier Ledger Details</span></h5>
					<hr class="horizontal_line">
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-3">
		          				<span class="control-label">Tax&nbsp;ID</span>
		       				</div>
		                    <div class="col-md-9">
								<input ng-disabled="!editable" type="text" id="suppliertaxid" name="suppliertaxid" allow-numbers class="form-control input-sm iptextRight Master_feildPos inputMasterSize1" value={{showSupplierSelected.supplierTaxID}} ng-model="showSupplierSelected.supplierTaxID" tabindex="6">
							</div>
		        		</div>
					</div>
					<div class="col-md-4">
						<div class="row">
	                        <div class=" col-md-3">
								<span class="control-label">Ladger&nbsp;Type</span>
							</div>
							<div class="col-md-9">
								<select ng-disabled="!editable" class="form-control productboxSize input_rightSpecing input-sm inputMasterPos inputMasterSize1" data-ng-options="opt.name for opt in ledgerTypeOptionList" ng-model="ledgerTypeOptionSelected" tabindex="7">
						        	<option value='' disabled selected style='display:none;'>please select</option>
						      	</select>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class="  col-md-3">
								<span class="control-label ">A/c&nbsp;Group</span>
							</div>
							<div class="col-md-3">
								<select ng-disabled="!editable" class="form-control not_implemented input_rightSpecing productboxSize inputMasterSize2 input-sm" disabled="disabled" ng-options="" tabindex="8">
						        	<!-- <option value='' disabled selected style='display:none;'>please select</option> -->
						      	</select>
							</div>
							<div class="col-md-6">
								<input ng-disabled="!editable" type="text" class="form-control input-sm" readonly >
							</div>
						</div>
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-3">
		          				<span class="control-label">Opening&nbsp;Bal</span>
		       				</div>
		                    <div class="col-md-5">
								<input ng-disabled="!editable"type="text" id="supplieropeningbal" name="supplieropeningbal" allow-numbers class="form-control input-sm supplierOpeningBal numberField" value={{showSupplierSelected.supplierOpeningBalance}} ng-model="showSupplierSelected.supplierOpeningBalance" tabindex="9" onclick="Purplevalidator('supplieropeningbal',2,'SupplierMaster','')" onfocus="Purplevalidator('supplieropeningbal',2,'SupplierMaster','')">
							</div>
							<div class="col-md-4">
								<select ng-disabled="!editable" class="form-control input-sm" data-ng-options="opt.name for opt in OpeningBalanceTypeOptionList" ng-model="OpeningBalanceTypeOptionSelected" tabindex="10">
						        	<!-- <option value='' disabled selected style='display:none;'>please select</option> -->
						      	</select>
							</div>
		        		</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class="col-md-3">
								<span class="control-label ">Credit&nbsp;Period</span>
							</div>
							<div class="col-md-5">
		           				<input ng-disabled="!editable" class="input-sm daysInput_CompanyMst inputMasterPos numberField" type="text" id="crediperiod" name="crediperiod" allow-numbers value={{showSupplierSelected.supplierCreditPeriod}} ng-model="showSupplierSelected.supplierCreditPeriod" tabindex="11" onclick="Purplevalidator('crediperiod',2,'SupplierMaster','')" onfocus="Purplevalidator('crediperiod',2,'SupplierMaster','')">
		           				<span class="control-label">days</span>
			           		</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-2">
						<span class="control-label">Total&nbsp;Op&nbsp;Balance:</span>
					</div>
					<div class="col-md-6">
						<div class="row supplierMaster_OpBalance">									
		          				<div class=" col-md-4">
								<div class="input-group">										
									<input ng-disabled="!editable" type="text" class="form-control input-sm" readonly>
									<span class="input-group-addon input-sm">Debit</span>
								</div>
		       				</div>					                   					        	
							<div class=" col-md-4">
		          				<div class="input-group">										
									<input ng-disabled="!editable" type="text" class="form-control input-sm" readonly  >
									<span class="input-group-addon input-sm">Credit</span>
								</div>
		       				</div>				        		
							<div class=" col-md-4">
		          				<div class="input-group">										
									<input ng-disabled="!editable" type="text" class="form-control input-sm" readonly  >
									<span class="input-group-addon input-sm">Net</span>
								</div>
		       				</div>									
					</div>
				</div>
				</div>							
				<div class="row">
					<h5><span class="submenuBlue_heading">Supplier Contact Details</span></h5>
					<hr class="horizontal_line">
				</div>
				<div class="row">
					<div class="col-md-6 sectionvline">
	                   <div class="row fieldsSpacing">
	                   		<div class="form-group">
		          				<span class="col-md-3 control-label ">Address&nbsp;Line&nbsp;1</span>
		                        <div class="col-md-9">
		                            <input ng-disabled="!editable" type="text" id="supplieradress" name="supplieradress" allow-address class="form-control input-sm"  value={{showSupplierSelected.supplierAddressLine1}} ng-model="showSupplierSelected.supplierAddressLine1" tabindex="12" onclick="Purplevalidator('supplieradress',2,'SupplierMaster','')" onfocus="Purplevalidator('supplieradress',2,'SupplierMaster','')" >
		          				</div>
	        				</div>
	                   </div>
	                   <div class="row fieldsSpacing">
	                   		<div class="form-group">
		          				<span class="col-md-3 control-label textMargin">Address&nbsp;Line&nbsp;2</span>
		                        <div class="col-md-9">
		                            <input ng-disabled="!editable" type="text" id="supplieradress2" name="supplieradress2" allow-address class="form-control input-sm" value={{showSupplierSelected.supplierAddressLine2}} ng-model="showSupplierSelected.supplierAddressLine2" tabindex="13">
		          				</div>
	        				</div>
	                   </div>
	                   <div class="row fieldsSpacing">
	                   		<div class="form-group">
		          				<span class="col-md-3 control-label" >City</span>
		                        <div class="col-md-5">
		                            <input ng-disabled="!editable" type="text" disabled class="form-control input-sm not_implemented" ><!-- {{showSupplierSelected.supplierCity.cityName}}showSupplierSelected.supplierCity.cityName -->
		          				</div>
		          		
		          				<div class="col-md-4">
		                            <input ng-disabled="!editable" type="text" disabled="disabled" class="form-control input-sm not_implemented"><!-- {{showSupplierSelected.supplierCity.cityState.stateName}}showSupplierSelected.supplierCity.cityState -->
		          				</div>
	        				</div>
	                   </div>
	                   <div class="row">
	                   		<div class="form-group">
		          				<span class="col-md-3 control-label" >Pin&nbsp;Code</span>
		                        <div class="col-md-5">
		                            <input ng-disabled="!editable" type="text" disabled class="form-control input-sm not_implemented numberField" ><!-- {{showSupplierSelected.supplierCity.cityName}}showSupplierSelected.supplierCity.cityName -->
		          				</div>
	        				</div>
	                   </div>
	                </div>
	                <div class="col-md-6">
	                	 <div class="row fieldsSpacing">
	                   		<div class="form-group">
		          				<span class="col-md-3 control-label">Contact&nbsp;Person</span>
		                        <div class="col-md-9">
		                            <input ng-disabled="!editable" type="text" id="suppliercontactperson" name="suppliercontactperson" allow-textwithspace class="form-control input-sm"  value={{showSupplierSelected.supplierContactPerson}} ng-model="showSupplierSelected.supplierContactPerson" tabindex="14" onclick="Purplevalidator('suppliercontactperson',2,'SupplierMaster','')" onfocus="Purplevalidator('suppliercontactperson',2,'SupplierMaster','')">
		          				</div>
	        				</div>
	                   	</div>
	                	<div class="row fieldsSpacing">
	                   		<div class="form-group">
		          				<span class="col-md-3 control-label textMargin" >Mobile</span>
		                        <div class="col-md-4">
		                            <input ng-disabled="!editable" type="text" id="supplierphone" name="supplierphone" allow-numbers class="form-control input-sm numberField"  value={{showSupplierSelected.supplierPhone}} ng-model="showSupplierSelected.supplierPhone" tabindex="15" onblur="Purplevalidator('supplierphone',1,'SupplierMaster','blur')" onclick="Purplevalidator('supplierphone',1,'SupplierMaster','')" onfocus="Purplevalidator('supplierphone',1,'SupplierMaster','')">
		          				</div>
		          				<div class="col-md-1">
		          					<span class=" control-label textPosLeft">Landline</span>
		          				</div>
		          				<div class="col-md-4">
		                            <input ng-disabled="!editable" type="text" class="form-control input-sm not_implemented numberField" disabled="disabled">
		          				</div>
	        				</div>
	                   </div>
	                    <div class="row fieldsSpacing">
	                   		<div class="form-group">
		          				<span class="col-md-3 control-label">Fax</span>
		                        <div class="col-md-4">
		                            <input ng-disabled="!editable" type="text" id="supplierfax" allow-numbers name="supplierfax" class="form-control input-sm numberField" value={{showSupplierSelected.supplierFax}} ng-model="showSupplierSelected.supplierFax" tabindex="16">
		          				</div>
	        				</div>
	                   </div>
	                   <div class="row">
	                   		<div class="form-group">
		          				<span class="col-md-3 control-label ">Email</span>
		                        <div class="col-md-7">
		                            <input ng-disabled="!editable" type="email" id="supplieremail" class="form-control input-sm" ng-model="showSupplierSelected.supplierEmail" tabindex="17" onblur="Purplevalidator('supplieremail',0,'SupplierMaster','blur')" onclick="Purplevalidator('supplieremail',0,'SupplierMaster','')" onfocus="Purplevalidator('supplieremail',0,'SupplierMaster','')">
		          				</div>
	        				</div>
	                   </div>  
	                </div>
				</div>
				<div class="row">
					<h5><span class="submenuBlue_heading">Supplier Settings</span></h5>
					<hr class="horizontal_line">
				</div>
				 <div class="row">	
    			 	<span class="col-md-2">
		       			<input ng-disabled="!editable" class="checkBox" type="checkbox" ng-value={{showSupplierSelected.supplierActiveFlag}} ng-model=showSupplierSelected.supplierActiveFlag  tabindex="18">
		       			<span>Active</span>
		       		</span>
		       		<span class="col-md-3">
		       			<input ng-disabled="!editable" class="checkBox" type="checkbox" ng-value={{showSupplierSelected.supplierOutStatePartyFlag}} ng-model=showSupplierSelected.supplierOutStatePartyFlag  tabindex="19">
		       			<span>Out State Party(CST)</span>
		       		</span>
		       		<span class="col-md-2">
		       			<input ng-disabled="!editable" class="checkBox" type="checkbox" ng-value={{showSupplierSelected.supplierEmailPOFlag}} ng-model=showSupplierSelected.supplierEmailPOFlag  tabindex="20">
		       			<span>Email&nbsp;PO</span>
		       		</span>
		       		<span class="col-md-2">
		       			<input ng-disabled="!editable" class="checkBox" type="checkbox" ng-value={{showSupplierSelected.supplierSetAsDefaultFlag}} ng-model=showSupplierSelected.supplierSetAsDefaultFlag tabindex="21">
		       			<span>Set as Default</span>
		       		</span>
		       		<div class="col-md-3">
						<div class="input-group">
				       		<span class="control-label textMargin ">Delivery&nbsp;Time</span>
				       		<input ng-disabled="!editable" class="input-sm dayInput_SupplierMst numberField" type="text" id="supplierdeliverytime" name="supplierdeliverytime" allow-numbers value={{showSupplierSelected.supplierDeliveryTime}} ng-model="showSupplierSelected.supplierDeliveryTime" tabindex="22">
			           		<span class="control-label fieldLeft_spacing">days</span>										
						</div>	
					</div>
		       	</div>			
			</div>
		</div>
	</div>    		 
 </div>

<!-- <script type="text/javascript">
	$(document).ready(function() {
		// Handler for .ready() called.
		$('#supplieraccode').allowAlphaNumericOnlywithspace();
		$('#supplieracname').allowAlphaNumericOnlywithspace();
		$('#suppliertaxid').allowNumbersOnly();
		$('#supplieropeningbal').allowNumbersOnly();
		$('#crediperiod').allowNumbersOnly();
		$('#suppliercontactperson').allowTextOnlyWithSpace();
		$('#supplierfax').allowNumbersOnly();
		$('#supplierdeliverytime').allowNumbersOnly();
		$('#supplieradress').allowAddress();
		$('#supplieradress2').allowAddress();
		
		$('#supplierphone').allowNumbersOnly();
	});
</script> -->

<script type="text/javascript">
	$(document).ready(function() {

		$("#supplieraccode").keypress(function() {
			$("#supplieraccode").css("background-color", "white");
		});
		$("#supplieracname").keypress(function() {
			$("#supplieracname").css("background-color", "white");
		});
		$("#supplierphone").keypress(function() {
			$("#supplierphone").css("background-color", "white");
		});
		$("#supplieremail").keypress(function() {
			$("#supplieremail").css("background-color", "white");
		});
		angular.element('*[ng-app]').injector().get("configurable").createPermission=<%=createPermission %>;
		debugger;
		var pCookie={createPermission:<%=createPermission %>,deletePermission:<%=deletePermission%>,modifyPermission:<%=modifyPermission %>,modifyPurchaseDatePermission:<%=modifyPurchaseDatePermission %>};
		angular.element('*[ng-app]').injector().get('$cookieStore').put("userPermission",pCookie);
		<% if(createPermission && !modifyPermission){%>	    		
			angular.element(document.getElementById('SupplierMaster')).scope().showSaveBtn=false;
		<%}else if(modifyPermission){%>
			angular.element(document.getElementById('SupplierMaster')).scope().showSaveBtn=true;
		<% }%>
	
	});
</script>