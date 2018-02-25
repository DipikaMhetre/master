<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="GoodsReturn" ng-controller="GoodsReturnCtrl" ng-init="init()"
	onload=GetClock();>
	<toast></toast>
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
	            case 55: deletePermission = true;;//delete 
	                    break;
	            case 54: createPermission = true;//create
	            		break;	
	            case 56: modifyPermission = true;
                		break;     			
	            case 5: modifyPurchaseDatePermission=true;
       					break;
       			default:break;		
			} 		
		}
		
		%>
		<title>Goods Return</title>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" title="" class="highlight_purple not_active">Goods
						Return</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,53);" class="">Refresh</a></li>
				<li><a href="#" class="not_implemented_link not_active">Export</a></li>
				<li><a href="#" class="not_implemented_link not_active">Email</a></li>
				<li><a href="#" class="not_implemented_link not_active">Print</a></li>
				<%if(createPermission || modifyPermission){%>
				<li><a  ng-show="showSaveBtn" ng-click="saveGoodsReturn()" tabindex="19">Save</a></li>
				<%}%>
				<%if(createPermission){%>
				<li><a ng-click="newRR()">New</a></li>	
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
	<!-- 	<nav class="navbar navbar-default navbar_master fieldsSpacing">
		<div class="container">
			<ul class="nav navbar-nav master_nav_element_pos">
				<li><a href="#returnregister">Returns Register</a></li>
				<li class="active"><a href="#goodsreturn">Goods Return</a></li>
				<li><a href="#companyreturn" class=" ">Company Claim</a></li>
			</ul>
		</div>
	</nav> -->
	<div class="row container">
		<h5>
			<span class="submenuBlue_heading">Return Request Summary</span> <span
				class="goodReturnPreviousNext">
				<button ng-click="showPrevious()" ng-show="showPrevNextBtn"
					type="button" class="btn goodReturnPreviousNext_btn input-sm_btn  ">
					<!-- <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> -->
					Previous
				</button>
				<button ng-click="showNext()" ng-show="showPrevNextBtn"
					type="button" class="btn goodReturnPreviousNext_btn input-sm_btn">
					Next
					<!--  <span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span> -->
				</button>
			</span>
		</h5>

		<hr class="horizontal_line">
	</div>
	<section class="container fieldsBot_Spacing">
		<div class="row grid">
			<div class="col-md-4 sectionvline ">
				<div class="block3">
					<div class="row fieldsSpacing_goodReturn fields_headingSpacing">
						<div class="col-md-2 textLeft">
							<span>Type</span>
						</div>
						<div class="col-md-10">
							<select id="type_select" required="required"
								ng-disabled="!editable"
								onfocus="Purplevalidator('type_select',2,'Ctrl','')"
								onclick="Purplevalidator('type_select',2,'Ctrl','')"
								class="select-wrapper full_width input-sm inputtext input_rightSpecing goodsReturn_typeInput"
								ng-options="opt.id as opt.name for opt in custTypeList"
								ng-model="showRRSelected.returnRegisterType"
								value={{showRRSelected.returnRegisterType}} ng-disabled="disableGRType" tabindex="1">

							</select>
						</div>
					</div>
					<div class="row fieldsSpacing_goodReturn">
						<div class="col-md-2 textLeft">
							<span>Customer</span>
						</div>
						<div class="col-md-8">
							<input type="text" id="customer" required="required"
								ng-disabled="!editable"
								onfocus="Purplevalidator('customer',2,'Ctrl','')"
								onclick="Purplevalidator('customer',2,'Ctrl','')"
								class="form-control input-sm goodreturn_customer goodsReturn_customerInput"
								ng-model="showRRSelected.returnRegisterCustName"
								value={{showRRSelected.returnRegisterCustName}} 
								disabled tabindex="2">
						</div>
						<div class="col-md-2 textRight">
							<a ng-disabled="!editable"><img class="goodreturn_customerPopup_img "
								ng-disabled="!editable"
								src="images/openPopup.png" ng-click="showCustomerPopup()"
								tabindex="3"></a>
						</div>
					</div>
					<div class="row ">
						<div class="col-md-2 textLeft">
							<span class="idtext">RR#</span>
						</div>
						<div class="col-md-4">
							<input name="rr_id" id="rr_id" type="text" 
								class="form-control input-sm idfield textRight goodsReturn_RR_idInput"
								ng-model="showRRSelected.returnRegisterId"
								value={{showRRSelected.returnRegisterId}} ng-blur="retrieve()">
						</div>
						<div class="col-md-2 textLeft">
							<span class="goodsReturn_RR_dateLabel">RR&nbsp;Date</span>
						</div>
						<div class="col-md-4">
							<input ng-disabled="!editable" type="eu-date" id="rr_date" required="required"
								class="form-control input-sm textCenter goodsReturn_RR_dateInput"
								ng-model="showRRSelected.returnRegisterDate"
								value={{showRRSelected.returnRegisterDate}} tabindex="5">
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4 sectionvline">
				<div class="block3">
					<div class="row fieldsSpacing fields_headingSpacing">
						<div class="col-md-2 textLeft">
							<span>Product#</span>
						</div>
						<div class="col-md-4 ">
							<input type="text"
								class="form-control input-sm textRight  goodreturn_product_input"
								readonly="readonly"
								ng-model="showRRSelected.returnRegisterTotalProducts"
								value={{showRRSelected.returnRegisterTotalProducts}}>
						</div>
						<div class="col-md-2 textLeft">
							<span>Status</span>
						</div>
						<div class="col-md-4">
							<!-- <input type="text"
							
								class="form-control input-sm textRight status_input_goodReturn"
								readonly="readonly"
								ng-model="showRRSelected.returnRegisterStatus"
								value={{showRRSelected.returnRegisterStatus}}> -->
								<select class="form-control input-sm textRight status_input_goodReturn" disabled ng-options="opt.id as opt.name for opt in grStatusList" ng-model="showRRSelected.returnRegisterStatus"></select>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-2 textLeft">
							<span>Total</span>
						</div>
						<div class="col-md-5 ">
							<select id="total_select"
								ng-disabled="!editable"
								class="select-wrapper input-sm input_rightSpecing goodreturn_product_input total_selectInput_sm"
								ng-options="opt.id as opt.name for opt in totalTypeList"
								ng-model="showRRSelected.returnRegisterTotalType"
								value={{showRRSelected.returnRegisterTotalType}} 
								ng-change="calculateTotal()" tabindex="6">
							</select>
						</div>
						<div class="col-md-5">
							<input type="text"
								ng-disabled="!editable"
								class="form-control input-sm textRight total_selectInput_goodsReturns"
								readonly="readonly"
								ng-model="showRRSelected.returnRegisterTotal"
								value={{showRRSelected.returnRegisterTotal}}>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-2 textLeft">
							<span>Created&nbsp;by</span>
						</div>
						<div class="col-md-10">
							<input type="text"
								ng-disabled="!editable"
								class="form-control input-sm goodReturn_lgInput"
								readonly="readonly"
								value="{{showRRSelected.returnRegisterCreatedByName}}&nbsp;&nbsp;&nbsp;{{showRRSelected.returnRegisterCreatedOn}}&nbsp;&nbsp;&nbsp;">
						</div>
					</div>
					<div class="row ">
						<div class="col-md-2 textLeft">
							<span>Remark</span>
						</div>
						<div class="col-md-10">
							<input type="text"
								ng-disabled="!editable"
								class="form-control input-sm goodReturn_lgInput" tabindex="7"
								ng-model="showRRSelected.returnRegisterRemark"
								value={{showRRSelected.returnRegisterRemark}}>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="block3">
					<div class="row fieldsSpacing fields_headingSpacing">
						<div class="col-md-3">
							<button type="button"
								ng-disabled="!editable"
								id="lockBtn"
								class="btn btn-default full_width input-sm goods_order_flag"
								ng-click="manageFlag('locked')" tabindex="8"><span class="fieldLeft_spacing_lg">Locked</span></button>
						</div>
						<div class="col-md-9">
							<input type="text" class="form-control input-sm" tabindex="9"
								ng-disabled="!showRRSelected.returnRegisterLockFlag || !editable"
								ng-model="showRRSelected.returnRegisterLockReason"
								>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-3">
							<button type="button"
								ng-disabled="!editable"
								id="verifiedBtn"
								class="btn btn-default full_width input-sm goods_order_flag"
								ng-click="manageFlag('verified')" tabindex="10"><span class="fieldLeft_spacing_lg">Verified</span></button>
						</div>
						<div class="col-md-9">
							
								<input ng-show="varifiedFlag" type="text" class="form-control input-sm"
									readonly="readonly"	
									ng-disabled="!editable"														
									value="[{{showRRSelected.returnRegisterVerifiedByName}}] {{showRRSelected.returnRegisterVerifiedOn}} ">
																					
								<input ng-show="!varifiedFlag" type="text" class="form-control input-sm"
									readonly="readonly"
									ng-disabled="!editable"
									
									>
									
							
						</div>
						
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-3">
							<button type="button"
								class="btn btn-default full_width input-sm goods_order_flag"
								ng-disabled="!editable"
								onclick="popupCreditNote()" tabindex="11"><span class="fieldLeft_spacing_lg">Credit&nbsp;Note</span></button>
						</div>
						<div class="col-md-9">
							<input name="credit_note" id="credit_note" type="text"
								class="form-control input-sm textRight" readonly="readonly"
								ng-disabled="!editable"
								ng-model="showRRSelected.returnRegisterCreditNoteId"
								value={{showRRSelected.returnRegisterCreditNoteId}}>
						</div>
						<!-- <div class="col-md-3">
							<span class="goodsReturnCompanyClaim">Company&nbsp;Claim#</span>
						</div>
						<div class="col-md-3">
							<input name="company_claim" id="company_claim" type="text"
								class="form-control input-sm textRight" readonly="readonly">
						</div> -->
					</div>
					<div class="row">
						<div class="col-md-3">
							<button type="button"
								ng-disabled="!editable"
								id="voidBtn"
								class="btn btn-default full_width input-sm goods_order_flag"
								
								ng-click="manageFlag('void')" tabindex="12"><span class="fieldLeft_spacing_lg">Void</span></button>
						</div>
						<div class="col-md-9">
							<input name="credit_note" type="text" tabindex="13"
								class="form-control input-sm " 
								ng-disabled="!showRRSelected.returnRegisterVoidFlag || <%=deletePermission  %> || !editable"
								ng-model="showRRSelected.returnRegisterVoidReason"
								value={{showRRSelected.returnRegisterVoidReason}}>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div class="row container">
		<h5>
			<span class="submenuBlue_heading">Return Request Details</span>
		</h5>
		<hr class="horizontal_line">
	</div>
	<article class="goodsReturnDetaisPos ">
		<div class="row container">
			<div class="col-md-offset-5">
				<nav class="mainnav">
					<ul class="rightFloat" id="list-nav">
						<!-- <li ng-show="modify"><a ng-show="showRRSelected.returnRegisterType == 2"
							title="visible only for self return"  ng-click="showNearExpiryProductBatchPopup()" tabindex="14">Modify Near
								Expiry</a></li> -->
						<li ng-hide="modify" ><a ng-show="showRRSelected.returnRegisterType == 2"
							title="visible only for self return"  ng-click="showNearExpiryProductBatchPopup()" tabindex="14">Add Near
								Expiry</a></li>
						<li><a ng-hide="modify" ng-click="showProductPopup()"
							title="Add Product" tabindex="15">Add Product</a></li>
						<li><a ng-show="modify" ng-click="showProductPopup()"
							title="Add Product" tabindex="15">Modify Product</a></li>
						<li><a id="removeProductBtn" ng-click="removeProduct()"
							title="Remove Product" ng-class="removeClass" tabindex="16">Remove
								Product</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</article>

	<div class="container fieldsTop_Spacing">
		
		<!--=============GRID==========  -->
		<div id="grid" tabindex="17" class="goods_returnGrid"></div>
		<!--=============GRID==========  -->
	</div>
	<nav class="mainnav">
		<ul class="rightFloat_Menu">
			<!-- <li><a href="#returnregister"><button type="button" class="" tabindex="18">Back</button></a>

			</li> -->

		</ul>
	</nav>
</div>
<script type="text/javascript">
function popupCreditNote() {
    w2popup.open({
    	 	 title     : 'Credit Note',
       		 body      : '<div><span>Design in Progress.....!</span></div>',
        	 width     : 516,
             height    : 360,            
             color     : '#333',
             speed     : '0.3',
             opacity   : '0.8',
             modal     : true     
    });
}
</script>

<script type="text/javascript">
	function popupCustomer() {
		w2popup.open({
			title : 'Customer Details',
			body : '<div><span> Show in grid<br> <br> Cust. Id <br> Name<br> Owner <br> Salesman <br> Area</span></div> ',
			width : 400,
			height : 300,
			color : '#333',
			speed : '0.3',
			opacity : '0.8',
			modal : true
		});
	}
</script>


<!--########## ________________-------------- Validation Script -------------______________########## -->
<script type="text/javascript">
	$(document).ready(function() {
			// Handler for .ready() called.
			$('#customer').allowAlphaNumericOnlywithspace();
			$('#rr_id').allowNumbersOnly();
			$('#product_id').allowAlphaNumericOnlywithspace();
			$('#total_amount').allowNumbersOnly();
			//$('#rr_date').allowNumbersOnly();
			angular.element('*[ng-app]').injector().get("configurable").createPermission=<%=createPermission %>;
    		debugger;
    		var pCookie={createPermission:<%=createPermission %>,deletePermission:<%=deletePermission%>,modifyPermission:<%=modifyPermission %>,modifyPurchaseDatePermission:<%=modifyPurchaseDatePermission %>};
    		angular.element('*[ng-app]').injector().get('$cookieStore').put("userPermission",pCookie);
    		<% if(createPermission && !modifyPermission){%>	    		
    			angular.element(document.getElementById('GoodsReturn')).scope().showSaveBtn=false;
    		<%}else if(modifyPermission){%>
    			angular.element(document.getElementById('GoodsReturn')).scope().showSaveBtn=true;
    		<% }%>
		});
</script>
<script type="text/javascript">
    $(document).ready(function(){                
       $("#customer").keypress(function(){
             $("#customer").css("background-color", "white");
        }); 
       /* $("#rr_id").keypress(function(){
           $("#rr_id").css("background-color", "white");
      });  */
       $("#type_select").click(function(){
           $("#type_select").css("background-color", "white");
      }); 
       $("#rr_date").click(function(){
           $("#rr_date").css("background-color", "white");
      }); 
       
    });
</script>

<!--########## ________________-------------- Validation controller Script -------------______________########## -->

<script type="text/javascript">
var month = (new Date()).getMonth() + 1;
var year  = (new Date()).getFullYear();
// EU Common Format
$('input[type=eu-date]').w2field('date',  { format: 'd/m/yyyy' });
</script>
