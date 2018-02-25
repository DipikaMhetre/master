
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<%-- <%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %> --%>
<div id="purch" data-ng-controller="PurchaseCtrl" data-ng-init=init()>
	<!-- <div id="spinnerDiv" ng-show="displayLoadingIndicator" class="LoadingIndicator">
HI
</div> -->
	<div ng-show="spinner"
		style="z-index: 999999; position: absolute; background-color: black; height: 100%; width: 98%; opacity: 0.3;">
		<img
			style="position: absolute; width: 480px; /*image width */ height: 320px; /*image height */ left: 50%; top: 50%; margin-left: -240px; /*image width/2 */ margin-top: -160px;"
			src="images/loading.gif"> </img>
	</div>
	<!-- ng-show="!spinner" -->
	<div>
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
	            case 3: deletePermission = true;;//delete 
	                    break;
	            case 2: createPermission = true;//create
	            		break;	
	            case 4: modifyPermission = true;
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

					<li><a href="#" title="" class="highlight_purple not_active">Purchase</a></li>


					<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span>
					</li>
					<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,1);"
 							class="">Refresh</a></li>
					<li><a href="#" title="Email"
						class="not_implemented_link not_active">Email</a></li>
					<li><a ng-click=selectCompany(orderDetails.remark)
						title="Print" class="not_implemented_link not_active">Print</a></li>

					<%if(createPermission || modifyPermission){%>
					<li ng-show="showSaveBtn"><a
						ng-click=psplCompanyOrder(orderDetails.id) title="Save">Save</a></li>
					<%}%>
					<%if(createPermission){%>
					<li><a ng-click=clearAll() title="Logout" class="">New</a></li>
					<%}%>

					<!-- <li><a href="#" title="Raise PO"
						class="not_implemented_link not_active">Raise Invoice</a></li>
					<li><a href="#" title="New PO"
						class="not_implemented_link not_active">New Invoice</a></li> -->
					<li><a ng-click="test()" title="Help"
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
		<section class="container">
			<div class="row grid">
				<div class="col-md-4 sectionvline">
					<div class="block3">
						<span class="head1">ORDER SUMMERY</span>
						<div class="row fieldsSpacing fields_headingSpacing">
							<div class="col-md-8">
								<select id="companySelect"
									class="select-wrapper input_rightSpecing full_width input-sm inputtext"
									data-ng-change="clearProductList()"
									data-ng-model="companySelected"
									data-ng-options="opt.companyName for opt in companyList | orderBy:'companyName'"
									ng-disabled="!editable" tabindex="1">
									<option value='' disabled selected style='display: none;'>Please
										select a Company</option>
								</select>
							</div>
							<div class="col-md-4 textLeft">
								<a href="#" title="View Details"
									class=" purchaseViewDetails not_active not_implemented_link">View
									Details</a>
							</div>

						</div>
						<div class="row fieldsSpacing">
							<div class="col-md-8">
								<select
									class="select-wrapper input_rightSpecing full_width input-sm inputtext"
									data-ng-change="psplProducts(companySelected.companyId,supplierSelected.supplierId,orderDetails.id)"
									data-ng-model="supplierSelected"
									data-ng-disabled="!companySelected || !editable"
									data-ng-options="opt.supplierName for opt in supplierList | keywordFilter:{company:companySelected}"
									tabindex="2">
									<option value='' disabled selected style='display: none;'>Please
										select a Supplier</option>
								</select>
							</div>
							<div class="col-md-4 textLeft">
								<a href="#" title="View Details"
									class=" purchaseViewDetails not_active not_implemented_link">View
									Details</a>
							</div>
						</div>
						<div class="row fieldsSpacing">
							<div class="col-md-8">
								<select
									class="select-wrapper input_rightSpecing full_width input-sm inputtext"
									data-ng-model="mrSelected" data-ng-change=""
									data-ng-disabled="!companySelected || !editable"
									data-ng-options="opt as opt.mrName for opt in mrList | mrDropDownFilter:{companySelected:companySelected,supplierSelected:supplierSelected}"
									tabindex="3">
									<option value='' disabled selected style='display: none;'>Please
										select a MR</option>
								</select>
							</div>
							<div class="col-md-4 textLeft">
								<a href="#" title="View Details"
									class=" purchaseViewDetails not_active not_implemented_link">View
									Details</a> <img src="images/new.png" class="plusimgSize">
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 sectionvline">
					<div class="block3 ">
						<span class="head1">ORDER DETAILS</span>
						<div class="clearfix">
							<div class="row divsize3 fieldsSpacing fields_headingSpacing">
								<div class="col-md-4">
									<input type="text" id="new_PO"
										class="form-control input-sm idfield purchase_orderDetails_col1 numberField"
										ng-blur="retOrd(orderDetails.id)" value={{orderDetails.id}}
										data-ng-model=orderDetails.id tabindex="4">
								</div>
								<div class="col-md-4">
									<input type="eu-date" id="date"
										class="form-control input-sm textCenter purchase_orderDetails_col2"
										value={{orderDetails.date}}
										<%if(modifyPurchaseDatePermission){%>
										data-ng-disabled=!companySelected <%}else{ %> disabled <%} %>
										data-ng-model=orderDetails.date ng-readonly="!editable"
										tabindex="5">

								</div>
								<div class="col-md-4">
									<div class="input-group purchase_orderDetails_col3">
										<input type="text"
											class="form-control input-sm purpleBG highlight_white numberField"
											disabled value={{orderDetails.amount}}
											data-ng-model=orderDetails.amount> <span
											class="input-group-addon input-sm">Rs.</span>
									</div>
								</div>
							</div>
							<div class="row fieldsSpacing">
								<div class="col-md-12">
									<input type="text" class="form-control input-sm"
										placeholder="enter remark here" value={{orderDetails.remark}}
										data-ng-model=orderDetails.remark ng-readonly="!editable"
										tabindex="6">
								</div>
							</div>
							<div class="row fieldsSpacing">
								<div class="col-md-4 ">
									<div class="input-group purchase_orderDetails_col1">
										<span class="input-group-addon input-sm">Status</span> <input
											type="text"
											class="form-control PO_details_inputSize input-sm not_implemented"
											readonly value=NEW>

									</div>
								</div>
								<div class="col-md-4">
									<div class="input-group purchase_orderDetails_col2">
										<span class="input-group-addon input-sm">Tasks</span> <input
											type="text"
											class="form-control input-sm PO_details_inputSize numberField not_implemented"
											readonly value={{orderDetails.noOfItems}}
											data-ng-model=orderDetails.noOfItems>

									</div>
								</div>
								<div class="col-md-4">
									<div class="input-group purchase_orderDetails_col3">
										<span class="input-group-addon input-sm">Items</span> <input
											type="text"
											class="form-control input-sm PO_details_inputSize numberField not_implemented"
											readonly value={{orderDetails.noOfTasks}}
											data-ng-model=orderDetails.noOfTasks>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="block3">
						<span class="head1">ORDER FLAGS</span>
						<div class="row fieldsSpacing fields_headingSpacing">
							<div class="col-md-3">
								<button id="orderFlagEmail" ng-model="orderFlags.email"
									type="button" ng-value="orderFlags.email"
									ng-click="orderFlags.email = !orderFlags.email"
									ng-disabled="!editable"
									class="btn flag_enable btn_small input-sm" tabindex="7">
									<span class="fieldLeft_spacing_lg">Email</span>
								</button>
							</div>
							<div class="col-md-9">
								<div class="row">
									<div class="col-md-6 flagLeftSpacing">
										<button id="orderFlagStopOpen" type="button"
											ng-model="orderFlags.stopOpen"
											ng-click="orderFlags.stopOpen = !orderFlags.stopOpen"
											class="btn flag_enable  btn_small input-sm" tabindex="8"
											style="width: 100% !important;" ng-disabled="!editable">
											<span class="fieldLeft_spacing_lg">Stop Open</span>
										</button>
									</div>
									<div class="col-md-6 flagRightSpacing">
										<button type="button" id="orderFlagScheme"
											ng-model="orderFlags.scheme"
											ng-click="orderFlags.scheme = !orderFlags.scheme"
											ng-disabled="!editable"
											class="btn flag_enable  btn_small input-sm" tabindex="9"
											style="width: 100% !important;">
											<span class="fieldLeft_spacing_lg">Scheme</span>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="row fieldsSpacing rowSpacing">
							<div class="col-md-3">
								<button type="button" id="orderFlagUrgent"
									ng-model="orderFlags.urgent" ng-value="orderFlags.urgent"
									ng-disabled="!editable"
									ng-click="orderFlags.urgent = !orderFlags.urgent"
									class="btn flag_enable  btn_small input-sm" tabindex="10">
									<span class="fieldLeft_spacing_lg">Urgent</span>
								</button>
							</div>
							<div class="col-md-9">
								<div class="row">
									<div class="col-md-6">
										<div class="input-group displayRow">
											<img src="images/eta.png" class="plusimgSize"> <input
												type="text"
												class="form-control input-sm textCenter not_implemented "
												value="ETA" disabled="disabled">
										</div>
									</div>
									<div class="col-md-6">
										<div class="input-group displayRow">
											<img src="images/reminder.png" class="plusimgSize"> <select
												class="select-wrapper input_rightSpecing input-sm inputtext opt_btn_small not_implemented"
												disabled="disabled">
												<option>Credit Note</option>
											</select>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row fieldsSpacing">
							<div class="col-md-3">
								<button id="orderFlagVoid" confirmed-click="sayHi()"
									ng-confirm-click="This action will deactivate your Purchase Order.Do you wish to proceed?"
									type="button" ng-model="orderFlags.voiD"
									ng-click="orderFlags.voiD = !orderFlags.voiD"
									ng-value="orderFlags.voiD"
									ng-disabled="!editable || <%=deletePermission %>"
									class="btn flag_enable  btn_small input-sm" tabindex="11">Void</button>
							</div>
							<div class="col-md-9 ">
								<input type="text" ng-disabled=!orderFlags.voiD
									class="form-control input-sm" disabled="disabled"
									ng-model=orderVoidText tabindex="12">
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<article class="containerPos fieldsSpacing ">
			<div class="row container">
				<div class="col-md-3">
					<!-- <div class="input-group">
							<input type="text" class="form-control purchase_search not_implemented" id="mySearch" placeholder="Search" disabled="disabled">
							<span class="input-group-addon addonBG input_addon_pad">
								<span><button  class="btn btnPad btn-default glyphicon glyphicon-search " type="button"></button> </span>
							</span>
						</div>	 -->
				</div>
				<div class="col-md-9 col-sm-9 textRight">
					<nav class="mainnav">
						<ul class="rightFloat" id="list-nav">
							<li><a href="#" class="not_active not_implemented_link"
								title="Add Product">Add Product</a></li>
							<li><a href="#" class="not_active not_implemented_link"
								title="Enter Quantity">Enter Quantity</a></li>
							<li><a href="#" title="Filter"
								class="not_active not_implemented_link">Filter(ON)</a></li>
							<li><a ng-click="toggleEdited()" title="Show Selected">Show
									Selected({{showSelectedFlag}})</a></li>
							<li><a href="#" title="Group Selected"
								class="not_active not_implemented_link">Group Selected(OFF)</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</article>
		<!--=============GRID==========  -->
		<div class=" purchaseGrid" id="main" tabindex="-1"></div>
		<!--=============GRID==========  -->
		<div class="footerPos ">
			<div class="row container">
				<div class="col-md-3">
					<div class="row">
						<div class="col-md-10">
							<select
								class="select-wrapper input_rightSpecing input-sm monthlySale  not_implemented"
								disabled="disabled">
								<option>Monthly sales statistics</option>
							</select>
						</div>
						<div class="col-md-2">
							<span class="glyphicon glyphicon-play monthlySaleGlyphicon"></span>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="row">
						<div class="col-md-4 ">
							<div class="input-group">
								<input type="text" class="form-control input-sm numberField"
									readonly="readonly" value="3,08,119.66"> <span
									class="input-group-addon input-sm">Rs.</span>
							</div>
						</div>
						<div class="col-md-4">
							<div class="input-group">
								<input type="text" class="form-control input-sm numberField"
									readonly="readonly" value="1,57,726.29"> <span
									class="input-group-addon input-sm">Rs.</span>
							</div>
						</div>
						<div class="col-md-4">
							<div class="input-group">
								<input type="text" class="form-control input-sm numberField"
									readonly="readonly" value="2,55,266.10 "> <span
									class="input-group-addon input-sm">Rs.</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 textCenter">
					<div class="input-group">
						<input type="text" class="form-control input-sm numberField"
							readonly="readonly" value="2,55,266.10 "> <span
							class="input-group-addon input-sm">Rs.</span>
					</div>
				</div>
			</div>
			<div class="row container">
				<div class="col-md-3"></div>
				<div class="col-md-6">
					<div class="row">
						<div class="col-md-4 textCenter footerRowPos">
							<span class="footerText_center">Last Sale</span>
						</div>
						<div class="col-md-4 textCenter footerRowPos">
							<span class="footerText_center">Current Sale</span>
						</div>
						<div class="col-md-4 textCenter footerRowPos">
							<span class="footerText_center"> Closing Stock</span>
						</div>
					</div>
				</div>
				<div class="col-md-3 textCenter footerRowPos">
					<span class="footerText_center">Pending Orders</span>
				</div>
			</div>
		</div>
		<script type="text/ng-template" id="myModalContent.html">
      			 <div class="modal-header topblueStrip">		
            		<h4 class="modal-title topblueStripText">Enter Quantity</h4>
       			 </div>
        		 <div class="modal-body">
           			<div class="">
					<!---<div class="container lightBox_quantity">--->			
					<div class="row">
						<h5><span class="submenuBlue_heading">General</span></h5>
						<hr class="horizontal_line">
						<div class="col-md-6 fieldsSpacing">
				 			<div class="form-group">
          						<span class="col-md-2 control-label">Product</span>
                        		<div class="col-md-10">
                            		<input type="text" class="form-control input-sm" readonly="readonly" value='{{record.productName}}' ng-modal=record.productName >
          				        </div>
        					</div>
       			 		</div>
        				<div class="col-md-6 fieldsSpacing">
        					<div class="form-group">
          						<span class="col-md-2 control-label">Remark</span>
                        		<div class="col-md-10">
                            		<input type="text" class="form-control input-sm" readonly="readonly" value=''>
          						</div>
        					</div>
        				</div>
					</div>
					<div class="row">
						<div class="col-md-3">
							<div class="form-group">
          						<span class="col-md-4 lable_position control-label">Type</span>
                        		<div class="col-md-8">
                            		<input type="text" class="form-control input-sm fieldLeft_spacing" readonly="readonly" value='{{record.type}}' ng-model=record.type >
          						</div>
        					</div>
						</div>
				<div class="col-md-3">
					<div class="form-group">
          				<span class="col-md-4 lable_position control-label">Division</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm" readonly="readonly" value='{{record.division}}' ng-model=record.division >
          				</div>
        			</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
          				<span class="col-md-4 lable_position control-label">Pack</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm fieldLeft_spacing" readonly="readonly" value='{{record.pack}}'>
          				</div>
        			</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
          				<span class="col-md-4 lable_position control-label">Box</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm textRight" readonly="readonly" value='{{record.box}}'>
          				</div>
        			</div>
				</div>
			</div>
			<div class="row fieldsTop_Spacing">
				<h5><span class="submenuBlue_heading">Stock&nbsp;&&nbsp;Purchase&nbsp;History</span></h5>
				<hr class="horizontal_line">
			</div>
			<div class="row fieldsSpacing">
				<div class="col-md-3">
        			<div class="form-group">
          				<span class="col-md-4 lable_position control-label">Last&nbsp;sale</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm fieldLeft_spacing textRight not_implemented" readonly="readonly" value='{{record.lastSale}}'>
          				</div>
        			</div>
        		</div>
        		<div class="col-md-3">
        			<div class="form-group">
          				<span class="col-md-4 lable_position left control-label">Current&nbsp;Sale</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm textRight not_implemented" readonly="readonly" value='{{record.currSale}}'>
          				</div>
        			</div>
        		</div>
        		<div class="col-md-3">
        			<div class="form-group">
          				<span class="col-md-4  lable_position control-label">Stock</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm fieldLeft_spacing textRight not_implemented" readonly="readonly" value='{{record.stock}}'>
          				</div>
        			</div>
        		</div>
        		<div class="col-md-3">
        			<div class="form-group">
          				<span class="col-md-4 lable_position control-label">Transit</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm numberField not_implemented" readonly="readonly" value='{{record.transit}}'>
          				</div>
        			</div>
        		</div>
       		</div>
        		<div class="row">
        			<div class="col-md-3">
	        			<div class="form-group">
	          				<span class="col-md-4 control-label">Last&nbsp;Purchase</span>
	                        <div class="col-md-8">
								<div class="input-group">
	                            <input type="text" class="form-control input-sm numberField fieldLeft_spacing quantity_textBoxRs not_implemented" readonly="readonly" value='{{record.lastPurRate}}'>
	          					<span class="input-group-addon input-sm">Rs.</span>
								</div>
							</div>
	        			</div>
	        		</div>
	        		<div class="col-md-3">
	        			<div class="form-group">
	          				<span class="col-md-4 control-label">MRP</span>
	                        <div class="col-md-8">
	                            <div class="input-group">
								  	<input type="text" class="form-control input-sm numberField quantity_textBoxRs" readonly ng-model="record.mrp" value={{record.mrp}}   >
								  	<span class="input-group-addon input-sm">Rs.</span>
								</div>	
	          				</div>
	        			</div>
	        		</div>	
       		 	</div>
       		 	<div class="row">
	          		<span class=" col-md-2 control-label saleHistory">Sale&nbsp;History</span>
        		</div>
        		<div class="row container">
	          		 <table class="table table-bordered tablePos not_implemented">
				        <thead>
				          <tr>
				            <th>JUL</th>
				            <th>AUG</th>
				            <th>SEP</th>
				            <th>OCT</th>
				            <th>NOV</th>
				            <th>DEC</th>
				            <th>JAN</th>
				            <th>FEB</th>
				            <th>MAR</th>
				            <th>APR</th>
				            <th>MAY</th>
				            <th>JUN</th>
				          </tr>
				        </thead>
				        <tbody>
				          <tr class="tr_pos">
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				          </tr>
				        </tbody>
				      </table>
        		</div>
        		<div class="row">
				<h5><span class="submenuBlue_heading">Enter Quantity</span></h5>
				<hr class="horizontal_line">
			</div>
			<div class="row">
				<div class="col-md-3">
        			<div class="form-group">
          				<span class="col-md-4 control-label">Quantity</span>
                        <div class="col-md-8">
                            <input id= "quantitypopup"  type="text" class="form-control input-sm textRight fieldLeft_spacingt"  tabindex="1" value={{record.qty}} ng-model=record.qty onfocus="Purplevalidator('quantitypopup',3,'CompanyMaster','')" onclick="Purplevalidator('quantitypopup',3,'CompanyMaster','')" onchange="Purchasewhitespace()" onkeypress="myFunction()">
          				</div>
        			</div>
        		</div>
        		<div class="col-md-3">
        			<div class="form-group">
          				<span class="col-md-4 control-label">Free</span>
                        <div class="col-md-8">
                            <input id="schemepopup"  type="text" class="form-control input-sm textRight"  tabindex="2" value={{record.scheme}} >
          				</div>
        			</div>
        		</div>
        		<div class="col-md-3">
        			<div class="form-group">
          				<span class="col-md-4 control-label">Value</span>
                        <div class="col-md-8">
							<div class="input-group">
                            <input id="valuepopup" required type="text" class="form-control orangeBG input-sm textRight fieldLeft_spacing quantity_textBoxRs" readonly="readonly" value={{record.value}}>
          					<span class="input-group-addon input-sm">Rs.</span>
							</div> 
						</div>
        			</div>
        		</div>
       		</div>      		
		<!---</div>-->
		
		</div>
        </div>
        <div class="modal-footer">            
            <button class="btn canclebtnSize" ng-click="cancel()">Cancel</button>
			<button id="okButton" class="btn okbtnSize" ng-enter="ok(record)" ng-click="ok(record)">OK</button>
        </div>
<script type="text/javascript"t>
$( document ).ready(function() {
	    	  // Handler for .ready() called.
	    		$('#quantitypopup').allowNumbersOnly();
	    		$('#schemepopup').allowNumbersOnly();
	    		$('#valuepopup').allowNumbersOnly();
});
</script>
		</script>


	</div>
</div>

<script type="text/javascript">
	    $( document ).ready(function() {
	    	  // Handler for .ready() called.
	    	 // $('#new_PO').allowTextOnly();
	    		$('#date').allowNumbersOnly();
	    		$('#').allowNumbersOnly();
	    		//$('#remark').allowAlphaNumericOnly();
	    		$('#status').allowTextOnly();
	    		$('#task').allowNumbersOnly();
	    		$('#items').allowNumbersOnly();
	    		//$('#void_Desc').allowAlphaNumericOnly();
	    		//$('#').allowNumbersOnly();
	    		$('#last_sale').allowNumbersOnly();
	    		$('#current_sale').allowNumbersOnly();
	    		$('#closing_stock').allowNumbersOnly();
	    		$('#pending_order').allowNumbersOnly();
	    		//$('#quantity').allowNumbersOnly();
	    		//$('#free').allowNumbersOnly();
	    		//$('#value').allowNumbersOnly();
	    		/////////////////========
	    		angular.element('*[ng-app]').injector().get("configurable").createPermission=<%=createPermission %>;
	    		var pCookie={createPermission:<%=createPermission %>,deletePermission:<%=deletePermission%>,modifyPermission:<%=modifyPermission %>,modifyPurchaseDatePermission:<%=modifyPurchaseDatePermission %>};
	    		angular.element('*[ng-app]').injector().get('$cookieStore').put("userPermission",pCookie);
	    		<% if(createPermission && !modifyPermission){%>	  	    		
	    			angular.element(document.getElementById('purch')).scope().showSaveBtn=false;
	    		<%}else if(modifyPermission || createPermission){%>
	    			angular.element(document.getElementById('purch')).scope().showSaveBtn=true;
	    		<% }%>
	    		////////////////=========
	    	});
    	
    </script>

<script type="text/javascript">
var month = (new Date()).getMonth() + 1;
var year  = (new Date()).getFullYear();

// US Format
$('input[type=us-date]').w2field('date');
$('input[type=us-dateA]').w2field('date', { format: 'm/d/yyyy', start:  month + '/5/' + year, end: month + '/25/' + year });
$('input[type=us-dateB]').w2field('date', { format: 'm/d/yyyy', blocked: [ month+'/12/2014',month+'/13/2014',month+'/14/' + year,]});
$('input[type=us-date1]').w2field('date', { format: 'm/d/yyyy', end: $('input[type=us-date2]') });
$('input[type=us-date2]').w2field('date', { format: 'm/d/yyyy', start: $('input[type=us-date1]') });
$('input[type=us-time]').w2field('time',  { format: 'h12' });
$('input[type=us-timeA]').w2field('time', { format: 'h12', start: '8:00 am', end: '4:30 pm' });

// EU Common Format
$('input[type=eu-date]').w2field('date',  { format: 'd/m/yyyy' });
$('input[type=eu-dateA]').w2field('date', { format: 'd/m/yyyy', start:  '5.' + month + '.' + year, end: '25.' + month + '.' + year });
$('input[type=eu-dateB]').w2field('date', { format: 'd/m/yyyy', blocked: ['12.' + month + '.' + year, '13.' + month + '.' + year, '14.' + month + '.' + year]});
$('input[type=eu-date1]').w2field('date', { format: 'd/m/yyyy', end: $('input[type=eu-date2]') });
$('input[type=eu-date2]').w2field('date', { format: 'd/m/yyyy', start: $('input[type=eu-date1]') });
$('input[type=eu-time]').w2field('time',  { format: 'h24' });
$('input[type=eu-timeA]').w2field('time', { format: 'h24', start: '8:00 am', end: '4:30 pm' });
</script>
