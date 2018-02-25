<title>Product Master</title>
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="ProductMaster" data-ng-controller="ProductMasterCtrl"
	ng-init=init()>
	<!-- <div  ng-show="spinner" style="z-index: 999999; position:absolute;background-color: black;height: 100%;width: 98%;opacity:0.3;">
	<img style=" position:absolute;
	    width:480px; /*image width */
	    height:320px; /*image height */
	    left:50%; 
	    top:50%;
	    margin-left:-240px; /*image width/2 */
	    margin-top:-160px; /*image height/2 */
	    "src="images/loading.gif" >
	</img>
	</div> -->
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
		            case 30: deletePermission = true;;//delete 
		                    break;
		            case 29: createPermission = true;//create
		            		break;	
		            case 31: modifyPermission = true;
	                		break;     			
		            case 3434: modifyPurchaseDatePermission=true;
	       					break;
	       			default:break;		
		} 		
			}
	%>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" title="New Product Master"
					class="highlight_purple not_active">Product Master</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,28);" class="">Refresh</a></li>
				<li><a href="#" title="Export"
					class="not_implemented_link not_active">Export</a></li>
				<li><a href="#" title="Print"
					class="not_implemented_link not_active">Print</a></li>
				<%
					if(createPermission || modifyPermission){
				%>
				<li ng-show="showSaveBtn"><a
					ng-click="saveProduct(showProductSelected)" tabindex="26">Save</a></li>
				<%
					}
				%>
				<%
					if(createPermission){
				%>
				<li><a ng-click="newProduct()" title="New">New</a></li>
				<%
					}
				%>
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
					<button type="button"
						class="btn btn-default flag_enable input-sm editable-btn"
						ng-class="editable ? 'flagselected' : ''"
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
				<li class="active"><a>Product</a></li>
				<li><a ng-click="changeView(activeUser.userId,activeUser.token,32)" class="">Content Master</a></li>
			</ul>
		</div>
	</nav>
	<div class="row container">
		<div class="col-md-2 sectiondivider">
			<div class="master_leftUpper1">
				<div class="row">
					<select ng-disabled="!editable"
						class="input-sm masterPage_grid input_rightSpecing"
						data-ng-options="opt.companyName for opt in showCompanyList"
						ng-model="showCompanySelected"
						ng-change="onCompanySelection(showCompanySelected)"
						placeholder="Please select company" tabindex="1">
						<option value='' disabled selected style='display: none;'>Please
							select a Company</option>
					</select>

				</div>
				<div class="row">
					<select
						class="input-sm masterPage_grid masterPage_fieldSpacing input_rightSpecing"
						ng-disabled="!showCompanySelected || !editable"
						data-ng-options="opt.divisionName for opt in showDivisionList"
						ng-model="showDivisionSelected"
						ng-change="onDivisionSelection(showDivisionSelected)" tabindex="2">
						<option value='' disabled selected style='display: none;'>Please
							select a Division</option>
					</select>
				</div>

			</div>
			<div class="row masterPage_fieldSpacing">

				<!--=============GRID==========  -->
				<div id="grid" tabindex="-1" class="gridSizeLeft1"></div>
				<!--=============GRID==========  -->
			</div>
			<div class="row master_filterPos group-inline">
				<a ng-click="showPopup()" title="Filter">Filter </a> (<span
					ng-if="filterStatus=='ON'" id="filterStatusOn" class="purpleText">{{filterStatus}}</span><span
					ng-if="filterStatus=='OFF'" id="filterStatusOff" class="purpleText">{{filterStatus}}</span>)
				<img ng-click="resetFilter()" ng-show="filterStatus=='ON'" alt=""
					class="filterOff_closeImage" tabindex="4"
					src="images/contacts_manager/close.png">
			</div>
		</div>
		<div class="col-md-10">
			<div class="">
				<div class="row masterTop_GrayStrip">
					<h6>
						<span class="masterTop_StripText">Product&nbsp;( <span
							ng-show="!showProductSelected.productId" class="masterHeading">New</span></span>
						<span ng-show="showProductSelected.productId"
							class="masterHeading">{{showProductSelected.productName}}</span>)</span>
					</h6>
				</div>
				<div class="row fieldsSpacing fields_headingSpacing">

					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-4">
								<span class="control-label">Product&nbsp;name</span>
							</div>
							<div class="col-md-8">
								<input ng-disabled="!editable" type="text" id="product_name"
									name="product_name" allow-alphanumericwithspace
									required="required" class="form-control input-sm" tabindex="3"
									ng-model="showProductSelected.productName"
									value={{showProductSelected.productName}}
									onfocus="Purplevalidator('product_name',2,'ProductMasterCtrl','')"
									onclick="Purplevalidator('product_name',2,'ProductMasterCtrl','')">
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class="col-md-3">
								<span class="control-label ">Description</span>
							</div>
							<div class="col-md-9">
								<input ng-disabled="!editable" type="text"
									class="form-control input-sm " tabindex="4"
									ng-model="showProductSelected.productDesc"
									value={{showProductSelected.productDesc}}>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-3">
								<span class="control-label">Shelf&nbsp;ID</span>
							</div>
							<div class="col-md-9">
								<input ng-disabled="!editable" type="text" id="shelfid"
									class="form-control input-sm" tabindex="5"
									ng-model="showProductSelected.productShelfId"
									value={{showProductSelected.productShelfId}}>
							</div>
						</div>
					</div>
				</div>
				<div class="row  fieldsSpacing">
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-4">
								<span class="control-label">Product&nbsp;ID</span>
							</div>
							<div class="col-md-8">
								<input ng-disabled="!editable" type="text" readonly
									class="form-control input-sm "
									ng-model="showProductSelected.productId"
									value={{showProductSelected.productId}}>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-3">
								<span class="control-label">UPC&nbsp;ID</span>
							</div>
							<div class="col-md-9">
								<input ng-disabled="!editable" type="text" id="produpcid"
									name="produpcid" allow-alphanumericwithspace
									class="form-control input-sm" tabindex="6"
									ng-model="showProductSelected.productUPCId"
									value={{showProductSelected.productUPCId}}>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class="col-md-3">
								<span class="control-label ">Other</span>
							</div>
							<div class="col-md-9">
								<input ng-disabled="!editable" type="text"
									class="form-control input-sm " value="" tabindex="7"
									ng-model="showProductSelected.productOtherInfo"
									value={{showProductSelected.productOtherInfo}}>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-md-1">
						<span class="control-label productDetail_saleText">Remark</span>
					</div>
					<div class="col-md-11">
						<input ng-disabled="!editable" type="text"
							class="form-control input-sm product_remarkPos" tabindex="8"
							ng-model="showProductSelected.productRemark"
							value={{showProductSelected.productRemark}}>
					</div>
				</div>
				<div class="row">
					<h5>
						<span class="submenuBlue_heading">Product Details</span>
					</h5>
					<hr class="horizontal_line">
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-4">
								<span class="control-label ">Category</span>
							</div>
							<div class="col-md-8">
								<select ng-disabled="!editable"
									class="form-control productboxSize input-sm input_rightSpecing"
									tabindex="9" id="category" required
									ng-options="opt.id as opt.name for opt in productCategoryList"
									ng-model="showProductSelected.productCategory"
									value={{showProductSelected.productCategory}}>

								</select>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-4">
								<span class="control-label ">Company</span>
							</div>
							<div class="col-md-8">
								<select ng-disabled="!editable"
									class="form-control productboxSize input-sm input_rightSpecing"
									tabindex="10"
									ng-options="opt.companyName for opt in productCompanyList"
									ng-model="productCompanySelected"
									ng-change="onProductCompanySelection(productCompanySelected)"
									id="prod_company"
									onclick="Purplevalidator('prod_company',2,'ProductMaster','')"
									onfocus="Purplevalidator('prod_company',2,'ProductMaster','')"
									required>
									<option value='' disabled selected style='display: none;'>Please
										select</option>
								</select>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class="col-md-3">
								<span class="control-label ">Division</span>
							</div>
							<div class="col-md-9">
								<select ng-disabled="!editable"
									class="form-control productboxSize input-sm input_rightSpecing"
									ng-options="opt.divisionName for opt in productDivisionList"
									ng-model="productDivisionSelected" tabindex="11"
									id="prod_division"
									onclick="Purplevalidator('prod_division',2,'ProductMaster','')"
									onfocus="Purplevalidator('prod_division',2,'ProductMaster','')"
									required>
									<option value='' disabled selected style='display: none;'>Please
										select</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-4">
								<span class="control-label">Pack</span>
							</div>
							<div class="col-md-8">
								<input ng-disabled="!editable" type="text" id="productpack"
									name="productpack" allow-numbers required="required"
									class="form-control input-sm numberField" tabindex="12"
									ng-model="showProductSelected.productPack"
									value={{showProductSelected.productPack}}
									onfocus="Purplevalidator('productpack',2,'ProductMasterCtrl','')"
									onclick="Purplevalidator('productpack',2,'ProductMasterCtrl','')">
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-4">
								<span class="control-label">Box</span>
							</div>
							<div class="col-md-8">
								<input ng-disabled="!editable" type="text" id="productbox"
									name="productbox" allow-numbers required="required"
									class="form-control input-sm numberField" tabindex="13"
									ng-model="showProductSelected.productBox"
									value={{showProductSelected.productBox}}
									onfocus="Purplevalidator('productbox',2,'ProductMasterCtrl','')"
									onclick="Purplevalidator('productbox',2,'ProductMasterCtrl','')">
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-3">
								<span class="control-label">Discount</span>
							</div>
							<div class="col-md-9">
								<input ng-disabled="!editable" type="text" id="discount"
									name="discount" allow-numbers
									class="form-control input-sm numberField" tabindex="14"
									ng-model="showProductSelected.productDiscount"
									value={{showProductSelected.productDiscount}}>
							</div>
						</div>
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-4">
								<span class="control-label">MRP</span>
							</div>
							<div class="col-md-8">
								<input ng-disabled="!editable" type="text" id="mrp" name="mrp"
									allow-numberswithdot class="form-control input-sm numberField"
									tabindex="15" ng-model="showProductSelected.productMrp"
									value={{showProductSelected.productMrp}}>
							</div>
						</div>
					</div>

					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-4">
								<span class="control-label">Purchase&nbsp;Rate</span>
							</div>
							<div class="col-md-8">
								<input ng-disabled="!editable" type="text" id="purchaserate"
									name="purchaserate" allow-numberswithdot
									class="form-control input-sm numberField" tabindex="16"
									ng-model="showProductSelected.productPurchaseRate"
									value={{showProductSelected.productPurchaseRate}}>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-3">
								<span class="control-label">Sale&nbsp;Rate</span>
							</div>
							<div class="col-md-9">
								<input ng-disabled="!editable" type="text" id="salerate"
									name="salerate" allow-numberswithdot
									class="form-control input-sm numberField" tabindex="17"
									ng-model="showProductSelected.productSaleRate"
									value={{showProductSelected.productSaleRate}}>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<h5>
						<span class="submenuBlue_heading">Product Contents</span>
					</h5>
					<hr class="horizontal_line">
				</div>
				<div class="row ">
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-4">
								<span class="control-label">Product&nbsp;Type</span>
							</div>
							<div class="col-md-8">
								<select ng-disabled="!editable"
									class="form-control input-sm input_rightSpecing"
									ng-options="opt.contentTypeId as opt.contentTypeDescription for opt in masterContentTypeList"
									ng-model="showProductSelected.productTypeId"
									value={{showProductSelected.productTypeId}} tabindex="18">

								</select>
							</div>
						</div>
					</div>
					<div class="col-md-8">
						<nav class="mainnav">
							<ul class="rightFloat" id="list-nav">
								<li><a ng-show="grid2ElementSelected"
									ng-click="showContentPopup('edit')" title="Show Selected"
									class="highlight_blue">Modify Content</a></li>
								<li><a ng-show="!grid2ElementSelected"
									ng-click="showContentPopup('new')" title="Show Selected"
									class="highlight_blue">Add Content</a></li>
								<li><a ng-click="removeContent()" title="Group Selected"
									class="highlight_red">Remove Content</a></li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="row">

					<!--=============GRID==========  -->
					<div id="grid2" tabindex="-1" class="productRightGride"></div>
					<!--=============GRID==========  -->
				</div>
				<div class="row">
					<h5>
						<span class="submenuBlue_heading">Product Settings</span>
					</h5>
					<hr class="horizontal_line">
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="row">
							<span class="col-md-2" style="width: 14%;"> <input
								ng-disabled="!editable" class="checkBox" type="checkbox"
								ng-model="showProductSelected.productActiveFlag"
								ng-value="{{showProductSelected.productActiveFlag}}"
								tabindex="19"> <span>Active</span>
							</span> <span class="col-md-2" style="width: 14%;"> <input
								ng-disabled="!editable" class="checkBox" type="checkbox"
								ng-model="showProductSelected.productDPCOFlag"
								ng-value="{{showProductSelected.productDPCOFlag}}" tabindex="20">
								<span>DPCO</span>
							</span> <span class="col-md-2"> <input ng-disabled="!editable"
								class="checkBox" type="checkbox" tabindex="21"> <span>Content
									DPCO</span>
							</span> <span class="col-md-2" style="width: 22%;"> <input
								ng-disabled="!editable" class="checkBox" type="checkbox"
								tabindex="22"> <span>Manual DPCO override</span>
							</span> <span class="col-md-2"> <input ng-disabled="!editable"
								class="checkBox" type="checkbox"
								ng-model="showProductSelected.productNarcoticsFlag"
								ng-value="{{showProductSelected.productNarcoticsFlag}}"
								tabindex="23"> <span>Narcotics</span>
							</span> <span class="col-md-2"> <input ng-disabled="!editable"
								class="checkBox" type="checkbox"
								ng-model="showProductSelected.productLockFlag"
								ng-value="{{showProductSelected.productLockFlag}}" tabindex="24">
								<span>Lock</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/ng-template" id="productFilter.html">

<div class="" ng-init=init()>
	<div class="container lightBox_masterPrductFilter">
		<div class="row topblueStrip ">
			<h6 class="blueStripTextPos">
				<span class="topblueStripText">FILTERS</span>
			</h6>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Product&nbsp;ID</span>
					</div>
					<div class=" col-md-7">
						<input id="prodId" type="text" name="prodId" allow-alphaNumericOnlywithspace
							class="form-control productFilterIP_size input-sm" 
							value={{filter.productId}} ng-model=filter.productId>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">UPC&nbsp;ID</span>
					</div>
					<div class=" col-md-7">
						<input type="text" id="produpcid" allow-alphaNumericOnlywithspace
							class="form-control productFilterIP_size  input-sm"
							ng-model="filter.upcId" value={{filter.upcId}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Other&nbsp;ID</span>
					</div>
					<div class=" col-md-7">
						<input type="text" id="prodotherid" name="prodotherid" allow-alphaNumericOnlywithspace
							class="form-control input-sm productFilterIP_size"
							ng-model="filter.other" value={{filter.other}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Product&nbsp;Name</span>
					</div>
					<div class=" col-md-7">
						<input type="text" id="prodname" name="prodname" allow-alphaNumericOnlywithspace
							class="form-control input-sm productFilterIP_size"
							ng-model="filter.productName" value={{filter.productName}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label ">Content</span>
					</div>
					<div class=" col-md-7">
						<input type="text" id="prodcontent" name="prodcontent" allow-alphaNumericOnlywithspace
							class="form-control input-sm productFilterIP_size not_implemented" disabled
							ng-model="filter.content" value={{filter.content}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label ">Type</span>
					</div>
					<div class=" col-md-7">
						<select
							class="form-control productboxSize input-sm productFilterIP_size input_rightSpecing"
							tabindex="1" ng-options="opt.contentTypeId as opt.contentTypeDescription for opt in typeOptionList"
							ng-model=filter.Type>

						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-6">
						<span> <input type="checkbox" ng-model="filter.activeFlg"
							ng-value={{filter.activeFlg}}> <span
							class="chechBox_lablePos">Show&nbsp;Active</span>
						</span>
					</div>
					<div class=" col-md-6">
						<span class="ProductFilterLockpos"> <input type="checkbox"  ng-model="filter.lockFlg"
							ng-value={{filter.lockFlg}}>
							<span class="chechBox_lablePos">Show&nbsp;Lock</span>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing ">
			<div class=" col-md-3">
				<a ng-click="clearAllFilters();" title="Remove Product"
					class=" clearAllFilterPos">CLEAR&nbsp;ALL</a>
			</div>
		</div>
		<div class="row fieldsTop_Spacing fieldsBot_Spacing">
			<div class=" col-md-3" style="margin-left: -29px;">
				<span>
					<div class=" col-md-5 productFilterBtnPos">
						<button type="button" ng-click="cancel()" class="canclebtnSize">Cancel</button>
					</div>
					<div class=" col-md-5 ">
						<button type="button" ng-click="ok(filter)" class="okbtnSize">OK</button>
					</div>
					
				</span>
			</div>
		</div>
	</div>
	</div>
 
</script>
</script>


<script type="text/ng-template" id="contentListPopup.html">
<div class=" row" ng-init=init() >
	<div class="container" >
		<div class="row topblueStrip " style="margin-left:0px;">
			<h6 class="blueStripTextPos">
				<span class="topblueStripText" >Add Content</span>
			</h6>
		</div>
		<div class="container">
		<!-- <div class="row">
			<h5><span class="submenuBlue_heading">Content Details</span></h5>
			<hr class="horizontal_line">
		</div> -->
		<div id="grid3" class="fieldsSpacing fields_headingSpacing" tabindex="-1" style="width: 74%; height: 250px; margin-left: 1px;">
		</div>
		<div class="row">
			<h5><span class="submenuBlue_heading">Content Details</span></h5>
			<hr class="horizontal_line">
		</div>
		<div ng-hide class=" row fieldsSpacing">
			<div class="col-md-4">
				<div class="row">
					<div class="col-md-3">
						<span>Name</span>
					</div>
					<div class="col-md-9">
						<input type="text" readonly class="form-control input-sm" tabindex="4" ng-model="showContentSelected.contentName" value={{showContentSelected.contentName}}>
					</div>
				</div>
			</div>	
			<div class="col-md-5">
				<div class="row">
					<div class="col-md-3">
						<span>Description</span>
					</div>
					<div class="col-md-9">
						<input type="text" readonly class="form-control input-sm" tabindex="4" ng-model="showContentSelected.contentDesc" value={{showContentSelected.contentDesc}}>
					</div>
				</div>
			</div>
		</div>
		<div ng-hide class=" row fieldsBot_Spacing">
			<div class="col-md-4">
				<div class="row">
					<div class="col-md-3">
						<span>Quantity</span>
					</div>
					<div class="col-md-9">
						<input type="text" id="contentquantity" name="contentquantity" allow-numbers class="form-control input-sm"  tabindex="4" ng-model="showContentSelected.contentStrength" value={{showContentSelected.contentStrength}}>
					</div>
				</div>
			</div>	
			<div class="col-md-5">
				<div class="row">
					<div class="col-md-3">
						<span>Unit</span>
					</div>
					<div class="col-md-9">
						<input type="text" readonly class="form-control input-sm " tabindex="4">
					</div>
				</div>
			</div>
		</div>
		<div class=" row fieldsBot_Spacing">
			<div class="col-md-6"></div>
			<div class="col-md-1" style="margin-left: 28px;">
				<button class="btn canclebtnSize" ng-click="cancel()">Cancel</button>
			</div>	
			<div class="col-md-1"style="margin-left: 15px;">
				<button class="btn okbtnSize" ng-click="addContent(showContentSelected,flag)"><span ng-show="flag =='new'">Add</span><span ng-show="flag =='edit'">Edit</span></button>
			</div>			
		</div>
		</div>
	</div>
</div>


 
</script>

</script>


<!-- <script type="text/javascript">
     $( document ).ready(function() {
  
        // Handler for .ready() called.
      //  $('#prodId  ').allowNumbersOnly();
       $('#produpcid  ').allowAlphaNumericOnlywithspace();
      // $('#prodotherid  ').allowTextOnly();
       $('#product_name  ').allowAlphaNumericOnlywithspace();
       $('#productpack ').allowNumbersOnly();
       $('#discount ').allowNumbersOnly();
       $('#mrp ').allowNumbersOnly();
       $('#purchaserate').allowNumbersOnly();
       $('#salerate').allowNumbersOnly();
       $('#productbox').allowNumbersOnly();
       $('#shelfid').allowNumbersOnly();
              
      });
     
    </script>  -->

<script type="text/javascript">
	$(document)
			.ready(
					function() {

						$("#produpcid").keypress(function() {
							$("#produpcid").css("background-color", "white");
						});

						$("#shelfid").keypress(function() {
							$("#shelfid").css("background-color", "white");
						});
						$("#product_name").keypress(
								function() {
									$("#product_name").css("background-color",
											"white");
								});

						$("#prod_company").keypress(
								function() {
									$("#prod_company").css("background-color",
											"white");
								});
						$("#category").change(function() {
							$("#category").css("background-color", "white");
						});
						$("#prod_division").click(
								function() {
									$("#prod_division").css("background-color",
											"white");
								});
						$("#prod_company").click(
								function() {
									$("#prod_company").css("background-color",
											"white");
								});
						$("#productpack").keypress(function() {
							$("#productpack").css("background-color", "white");
						});
						$("#productbox").keypress(function() {
							$("#productbox").css("background-color", "white");
						});
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
<%=modifyPurchaseDatePermission%>};
		angular.element('*[ng-app]').injector().get('$cookieStore').put("userPermission",pCookie);
		<% if(createPermission && !modifyPermission){%>	    		
			angular.element(document.getElementById('ProductMaster')).scope().showSaveBtn=false;
		<%}else if(modifyPermission){%>
			angular.element(document.getElementById('ProductMaster')).scope().showSaveBtn=true;
		<% }%>
    /* $("#discount").keyup(function(){
       $("#discount").css("background-color", "white");
  });
    $("#mrp").keyup(function(){
       $("#mrp").css("background-color", "white");
  });
    $("#purchaserate").keyup(function(){
       $("#purchaserate").css("background-color", "white");
  });
            
       $("#salerate").keyup(function(){
    $("#salerate").css("background-color", "white");
  }); */ 
       
       
  
    });
    </script>