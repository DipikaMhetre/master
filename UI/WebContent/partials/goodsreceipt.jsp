<title>Goods Receipt</title>
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="goodReciept" ng-controller="GoodsRecieptCtrl" ng-init=init()
	onload=GetClock();>
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
			            case 46: deletePermission = true;;//delete 
			                    break;
			            case 45: createPermission = true;//create
			            		break;	
			            case 47: modifyPermission = true;
		                		break;     			
		       			default:break;		
			} 		
		}
	%>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" title="" class="highlight_purple not_active">Goods
						Receipt</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a
					ng-click="$parent.changeView(activeUser.userId,activeUser.token,44);"
					class="">Refresh</a></li>
				<li><a href="#" class="not_implemented_link not_active">Preview</a></li>
				<li><a ng-click="callPOLinker()"
					class="not_implemented_link not_active">Export</a></li>
				<li><a ng-click="showPOLinkPopup()" class="">Link PO</a></li>
				<li><a href="#" class="not_implemented_link not_active">Print</a></li>
				<%
					if(createPermission || modifyPermission){
				%>
				<li ng-show="showSaveBtn"><a ng-click="save()" tabindex="31">Save</a></li>
				<%
					}
				%>
				<%
					if(createPermission){
				%>
				<li><a ng-click="newGr()">New</a></li>
				<%
					}
				%>
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
						<span class="fieldLeft_spacing_lg"
							ng-click="editable=!editable;$root.editable=!$root.editable">Editable</span>
					</button>
				</li>
			</ul>
		</nav>
	</Section>
	<div class="row container">
		<h5>
			<span class="submenuBlue_heading">Goods Reciept Summary</span> <span
				class="goodReturnPreviousNext">
				<button ng-click="prevNext('prev')" ng-show="showPrevNextBtn"
					type="button" class="btn goodReturnPreviousNext_btn input-sm_btn">
					Previous</button>
				<button ng-show="showPrevNextBtn" ng-click="prevNext('next')"
					type="button" class="btn goodReturnPreviousNext_btn input-sm_btn">
					Next
					<!--  <span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span> -->
				</button>
			</span>
		</h5>

		<hr class="horizontal_line">
	</div>
	<section class="container">
		<div class="row grid">
			<div class="col-md-4 sectionvline ">
				<div class="block3">
					<span class="head1">GR SUMMERY</span>
					<div class="row fieldsSpacing fields_headingSpacing">
						<div class="col-md-3 textLeft">
							<span>Company</span>
						</div>
						<div class="col-md-9">
							<select id="companySelect"
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								class="select-wrapper full_width input-sm inputtext company_field"
								tabindex="1"
								data-ng-options="opt.companyName for opt in showCompanyList"
								ng-model="showCompanySelected"
								ng-change="onCompanySelection(showCompanySelected)">
								<option value='' disabled selected style='display: none;'>Please
									select</option>
							</select>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-3 textLeft">
							<span>Supplier</span>
						</div>
						<div class="col-md-9">
							<select id="companySelect"
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								class="select-wrapper full_width input-sm inputtext supplier_field"
								tabindex="2"
								data-ng-options="opt.supplierName for opt in showSupplierList"
								ng-model="showSupplierSelected">
								<option value='' disabled selected style='display: none;'>Please
									select</option>
							</select>
						</div>
					</div>
					<div class="row ">
						<div class="col-md-3 textLeft">
							<span class="idtext">Voucher#</span>
						</div>
						<div class="col-md-3">
							<input type="text"
								class="form-control input-sm idfield numberField voucher_field"
								tabindex="3" ng-blur="retrieve(showGrSelected.goodsReceiptId)"
								ng-model="showGrSelected.goodsReceiptId"
								value={{showGrSelected.goodsReceiptId}}>
						</div>
						<div class="col-md-3 ">
							<span class="voucherDate">Voucher&nbsp;Date</span>
						</div>
						<div class="col-md-3">
							<input
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								type="eu-date"
								class="form-control input-sm voucherDate_field textCenter"
								tabindex="4" ng-model="showGrSelected.goodsReceiptDate"
								value={{showGrSelected.goodsReceiptDate}}
								ng-change="getPOList(showCompanySelected.companyId,showGrSelected.goodsReceiptDate)">
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4 sectionvline">

				<div class="block3 goodsReceiptBlock3">
					<span class="head1">GR DETAILS<!-- {{showSaveBtn}} --></span>
					<div class="row">
						<div class="col-md-4">
							<input
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								type="text" id="gr_bill" name="gr_bill" allow-numberswithdot
								class="form-control input-sm GR_orderDetailsInput_sm numberField"
								tabindex="5" ng-model="showGrSelected.goodsReceiptBillNo"
								value={{showGrSelected.goodsReceiptBillNo}}>
						</div>
						<div class="col-md-4">
							<input
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								type="eu-date"
								class="form-control input-sm GR_orderDetailsInput_sm textCenter"
								tabindex="6" ng-model="showGrSelected.goodsReceiptBillDate"
								value={{showGrSelected.goodsReceiptBillDate}}>
						</div>
						<div class="col-md-4">
							<input
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								type="text" id="gr_amt" name="gr_amt" allow-numberswithdot
								class="form-control input-sm GR_orderDetailsInput_sm numberField"
								tabindex="7" ng-model="showGrSelected.goodsReceiptBillAmount"
								value={{showGrSelected.goodsReceiptBillAmount}}>
						</div>
					</div>
					<div class="row">
						<div class="col-md-4 GR_orderDetailsText_fieldspacing">
							<span class="GR_orderDetailsFont">Bill#</span>
						</div>
						<div class="col-md-4 GR_orderDetailsText_fieldspacing">
							<span class="GR_orderDetailsFont">Bill&nbsp;Date</span>
						</div>
						<div class="col-md-4 GR_orderDetailsText_fieldspacing">
							<span class="GR_orderDetailsFont">Bill&nbsp;Amt</span>
						</div>
					</div>
					<div class="row fields_headingSpacing">
						<div class="col-md-4 GR_orderDetailsInput_fieldspacing">
							<input
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								type="text" id="gr_lr" name="gr_lr" allow-numberswithdot
								class="form-control input-sm GR_orderDetailsInput_sm numberField"
								tabindex="8" ng-model="showGrSelected.goodsReceiptLRNo"
								value={{showGrSelected.goodsReceiptLRNo}}>
						</div>
						<div class="col-md-4 GR_orderDetailsInput_fieldspacing">
							<input
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								type="eu-date"
								class="form-control input-sm GR_orderDetailsInput_sm textCenter"
								tabindex="9" ng-model="showGrSelected.goodsReceiptLRDate"
								value={{showGrSelected.goodsReceiptLRDate}}>
						</div>
						<div class="col-md-4 GR_orderDetailsInput_fieldspacing">
							<input
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								type="eu-date"
								class="form-control input-sm GR_orderDetailsInput_sm textCenter"
								tabindex="10" ng-model="showGrSelected.goodsReceiptLRDueDate"
								value={{showGrSelected.goodsReceiptLRDueDate}}>
						</div>
					</div>
					<div class="row">
						<div class="col-md-4 GR_orderDetailsText_fieldspacing">
							<span class="GR_orderDetailsFont">L.&nbsp;R.#</span>
						</div>
						<div class="col-md-4 GR_orderDetailsText_fieldspacing">
							<span class="GR_orderDetailsFont">L.&nbsp;R.&nbsp;Date</span>
						</div>
						<div class="col-md-4 GR_orderDetailsText_fieldspacing">
							<span class="GR_orderDetailsFont">Due&nbsp;Date</span>
						</div>
					</div>
					<div class="row ">
						<div class="col-md-2 textLeft">
							<span>Remark</span>
						</div>
						<div class="col-md-10">
							<input
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								type="text"
								class="form-control input-sm GR_orderDetailsInput_sm"
								tabindex="11" ng-model="showGrSelected.goodsReceiptRemark"
								value={{showGrSelected.goodsReceiptRemark}}>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="block3">
					<span class="head1">GR FLAGS</span>
					<div class="row fieldsSpacing fields_headingSpacing">
						<div class="col-md-3 textLeft">
							<span>Payment</span>
						</div>
						<div class="col-md-3">
							<select
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								class="form-control input-sm goods_order_flag" tabindex="12"
								ng-options="op.id as op.name for op in paymentTypeList"
								ng-model="showGrSelected.goodsReceiptPayment">
							</select>
						</div>
						<div class="col-md-3 textLeft">
							<span>Bill&nbsp;Discount</span>
						</div>
						<div class="col-md-3">
							<input
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								type="text" id="gr_billdiscount" name="gr_billdiscount"
								allow-numberswithdot class="form-control input-sm numberField"
								tabindex="13" ng-model="showGrSelected.goodsReceiptBillDiscount"
								value={{showGrSelected.goodsReceiptBillDiscount}}>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-3 textLeft">
							<span>Transporter</span>
						</div>
						<div class="col-md-3">
							<select
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								class="form-control input-sm goods_order_flag" tabindex="14"
								ng-options="op.transporterId as op.transporterName for op in showTransporterList"
								ng-model="showGrSelected.goodsReceiptTransporter">

							</select>
						</div>
						<div class="col-md-3 textLeft">
							<span>Cases</span>
						</div>
						<div class="col-md-3">
							<input
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								type="text" class="form-control input-sm numberField"
								tabindex="15" ng-model="showGrSelected.goodsReceiptCases"
								value={{showGrSelected.goodsReceiptCases}}>
						</div>
					</div>
					<div class="row">
						<div class="col-md-3">
							<button ng-disabled="!editable" type="button"
								ng-click="changeStatusFlag('verified')" ng-class="showGrSelected.goodsReceiptVerifiedFlag ? 'flagselected' : ''"
							class="btn btn-default flag_enable full_width input-sm goods_order_flag"
							tabindex="19">
							<span class="fieldLeft_spacing_lg" >Verified</span>
						</button>
							<!-- <button ng-disabled="!editable" type="button"
								ng-click="switchVerified()"
								class="btn btn-default full_width input-sm goods_order_flag"
								tabindex="16">Verified</button> -->
						</div>
						<div class="col-md-9">
							<input type="text" class="form-control input-sm" disabled
								ng-model="verifiedText">
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<article class="containerPos">
		<div class="row container">
			<div class="col-md-2 fieldsTop_Spacing"></div>
			<div class="col-md-5">
				<!-- <nav class="mainnav">
					<ul class="rightFloat" id="list-nav">
						<li><a href="#" class="not_active">Purchase Orders</a></li>
						<li>
							<select class="form-control input-sm GR_PO_pos" style="width: 90px;" tabindex="16" ng-options="op.cpoId for op in showPOList" ng-model="showPOSelected">
								
							</select>
						</li>
						<li><a href="#" title="" class="not_implemented_link not_active">View PO</a></li>
						<li><a href="#" title="" class="not_implemented_link not_active">PO Filter</a></li>

					</ul>
				</nav> -->
			</div>
			<div class="col-md-5">
				<nav class="mainnav">
					<ul class="rightFloat" id="list-nav">
						<!-- ng-class="showGrSelected.goodsReceiptVerifiedFlag?'not_implemented_link not_active':''" -->
						<li><a ng-click="showGRProductPopup('NULL');"
							title="Add Product">Add Product</a></li>
						<li><a id="modifyLink"
							class="not_implemented_link not_active"
							ng-click="showGRProductPopup(recSelected);"
							title="Enter Quantity">Modify Product</a></li>
						<li><a id="removeLink"
							ng-click="removeGrProduct(recSelected)"
							class="not_implemented_link not_active" title="Remove Product">Remove
								Product</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</article>

	<div class="container fieldsTop_Spacing">
		<!--=============GRID==========  -->
		<div id="grid" tabindex="-1" class=" goodsreceiptGrid"></div>
		<!--=============GRID==========  -->
	</div>
	<div class="footerPos_GoodRec">
		<div class="row container">
			<div class="col-md-8 sectionvline" style="width: 70%;">
				<div class="row">
					<div class="col-md-12">
						<span class="boldFont">Addition</span>
					</div>
				</div>
				<div class="row container add_deductnWidth">
					<div class="col-md-2">
						<div class="input-group">
							<input type="text" id="gr_vat" name="gr_vat" allow-numberswithdot
								class="form-control input-sm textRight" tabindex="17"
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								ng-model="showGrSelected.goodsReceiptVAT"
								value={{showGrSelected.goodsReceiptVAT}}> <span
								class="input-group-addon input-sm">Rs.</span>
						</div>
					</div>
					<div class="col-md-2">
						<div class="input-group">
							<input type="text" id="gr_excise" name="gr_excise"
								allow-numberswithdot class="form-control input-sm textRight"
								tabindex="18"
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								ng-model="showGrSelected.goodsReceiptAdditionExcise"
								value={{showGrSelected.goodsReceiptAdditionExcise}}> <span
								class="input-group-addon input-sm">Rs.</span>
						</div>
					</div>
					<div class="col-md-2">
						<div class="input-group">
							<input type="text" id="gr_educess" name="gr_educess"
								allow-numberswithdot class="form-control input-sm textRight"
								tabindex="19"
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								ng-model="showGrSelected.goodsReceiptAdditionEducationCess"
								value={{showGrSelected.goodsReceiptAdditionEducationCess}}>
							<span class="input-group-addon input-sm">Rs.</span>
						</div>
					</div>
					<div class="col-md-2">
						<div class="input-group">
							<input type="text" disabled="disabled"
								class="form-control input-sm textRight not_implemented"
								tabindex="20"
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								ng-focus="showDebitCreditNotePopup('credit')"
								ng-model="grCreditNote" value={{grCreditNote}}> <span
								class="input-group-addon input-sm">Rs.</span>
						</div>
					</div>
					<div class="col-md-2">
						<div class="input-group">
							<input type="text" id="gr_cst" name="gr_cst" allow-numberswithdot
								class="form-control input-sm textRight" tabindex="21"
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								ng-model="showGrSelected.goodsReceiptAdditionCST"
								value={{showGrSelected.goodsReceiptAdditionCST}}> <span
								class="input-group-addon input-sm">Rs.</span>
						</div>
					</div>
					<div class="col-md-2">
						<div class="input-group">
							<input type="text" id="gr_other" name="gr_other"
								allow-numberswithdot class="form-control input-sm textRight"
								tabindex="22"
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								ng-model="showGrSelected.goodsReceiptAdditionOther"
								value="{{showGrSelected.goodsReceiptAdditionOther}}"> <span
								class="input-group-addon input-sm">Rs.</span>
						</div>
					</div>
				</div>
				<div class="row container add_deductnWidth">
					<div class="col-md-2 textCenter text_inputfieldPos">
						<span class="footerText_center2">VAT</span>
					</div>
					<div class="col-md-2 textCenter text_inputfieldPos">
						<span class="footerText_center1">Excise</span>
					</div>
					<div class="col-md-2 textCenter text_inputfieldPos">
						<span class="footerText_center2">Education&nbsp;Cess</span>
					</div>
					<div class="col-md-2 textCenter text_inputfieldPos">
						<span class="footerText_center1">Debit&nbsp;Note</span>
					</div>
					<div class="col-md-2 textCenter text_inputfieldPos">
						<span class="footerText_center2">CST</span>
					</div>
					<div class="col-md-2 textCenter text_inputfieldPos">
						<span class="footerText_center1">Other</span>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<span class="boldFont">Deduction</span>
					</div>
				</div>
				<div class="row container add_deductnWidth">
					<div class="col-md-2">
						<div class="input-group">
							<input type="text" id="gr_tradedis" name="gr_tradedis"
								allow-numberswithdot class="form-control input-sm textRight"
								tabindex="24"
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								ng-model="showGrSelected.goodsReceiptDeductionTradeDiscount"
								value={{showGrSelected.goodsReceiptDeductionTradeDiscount}}>
							<span class="input-group-addon input-sm">Rs.</span>
						</div>
					</div>
					<div class="col-md-2">
						<div class="input-group">
							<input type="text" id="gr_spldisc" name="gr_spldisc"
								allow-numberswithdot class="form-control input-sm textRight"
								tabindex="25"
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								ng-model="showGrSelected.goodsReceiptDeductionSpecialDiscount"
								value={{showGrSelected.goodsReceiptDeductionSpecialDiscount}}>
							<span class="input-group-addon input-sm">Rs.</span>
						</div>
					</div>
					<div class="col-md-2">
						<div class="input-group">
							<input type="text" id="gr_octroireimb"
								name="allow-numberswithdot" allow-numberswithdot
								class="form-control input-sm textRight" tabindex="26"
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								ng-model="showGrSelected.goodsReceiptDeductionOctroiReimb"
								value={{showGrSelected.goodsReceiptDeductionOctroiReimb}}>
							<span class="input-group-addon input-sm">Rs.</span>
						</div>
					</div>
					<div class="col-md-2">
						<div class="input-group">
							<input type="text" disabled="disabled"
								class="form-control input-sm textRight not_implemented"
								tabindex="27" ng-focus="showDebitCreditNotePopup('debit')"
								ng-model="grDebitNote" value={{grDebitNote}}> <span
								class="input-group-addon input-sm">Rs.</span>
						</div>
					</div>
					<div class="col-md-2">
						<div class="input-group">
							<input type="text" id="gr_billdisc" name="gr_billdisc"
								allow-numberswithdot class="form-control input-sm textRight"
								tabindex="28"
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								ng-model="showGrSelected.goodsReceiptDeductionBillDiscount"
								value={{showGrSelected.goodsReceiptDeductionBillDiscount}}>
							<span class="input-group-addon input-sm">Rs.</span>
						</div>
					</div>
					<div class="col-md-2">
						<div class="input-group">
							<input type="text" id="gr_other1" name="gr_other1"
								allow-numberswithdot class="form-control input-sm textRight"
								tabindex="29"
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								ng-model="showGrSelected.goodsReceiptDeductionOther"
								value={{showGrSelected.goodsReceiptDeductionOther}}> <span
								class="input-group-addon input-sm">Rs.</span>
						</div>
					</div>
				</div>
				<div class="row container add_deductnWidth">
					<div class="col-md-2 textCenter text_inputfieldPos">
						<span class="footerText_center2">Trade&nbsp;Discount</span>
					</div>
					<div class="col-md-2 textCenter text_inputfieldPos">
						<span class="footerText_center2">Special&nbsp;Discount</span>
					</div>
					<div class="col-md-2 textCenter text_inputfieldPos">
						<span class="footerText_center2">Octroi&nbsp;Reimb</span>
					</div>
					<div class="col-md-2 textCenter text_inputfieldPos">
						<span class="footerText_center2">Credit&nbsp;Note</span>
					</div>
					<div class="col-md-2 textCenter text_inputfieldPos">
						<span class="footerText_center2">Bill&nbsp;Discount</span>
					</div>
					<div class="col-md-2 textCenter text_inputfieldPos">
						<span class="footerText_center1">Other</span>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="row">
					<div class="col-md-12">
						<span class="highlight_lightgray">A</span>
					</div>

				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="input-group">
							<input type="text" class="form-control input-sm textRight"
								disabled ng-model="showGrSelected.goodsReceiptTotalItems"
								value="{{showGrSelected.goodsReceiptTotalItems}}"> <span
								class="input-group-addon input-sm "><span
								class="highlight_lightgray">Rs.</span></span>
						</div>
					</div>
					<div class="col-md-6">
						<div class="input-group">
							<input type="text" id="gr_roundoff" allow-numbers
								class="form-control input-sm textRight" tabindex="23"
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								ng-model="showGrSelected.goodsReceiptRoundOff"
								value="{{showGrSelected.goodsReceiptRoundOff}}"> <span
								class="input-group-addon input-sm">Rs.</span>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 textCenter text_inputfieldPos">
						<span class="footerText_center1">Total&nbsp;Items</span>
					</div>
					<div class="col-md-6 textCenter text_inputfieldPos">
						<span class="footerText_center2">Round&nbsp;off</span>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<span class="highlight_lightgray">D</span>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="input-group">
							<input type="text" id="gr_freevat" name="gr_freevat"
								allow-numberswithdot class="form-control input-sm textRight"
								tabindex="30"
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								ng-model="showGrSelected.goodsReceiptFreeVAT"
								value="{{showGrSelected.goodsReceiptFreeVAT}}"> <span
								class="input-group-addon input-sm">Rs.</span>
						</div>
					</div>
					<div class="col-md-6">
						<div class="input-group">
							<input type="text" class="form-control input-sm textRight"
								disabled
								ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag"
								ng-model="showGrSelected.goodsReceiptNetAmount"
								value="{{showGrSelected.goodsReceiptNetAmount}}"> <span
								class="input-group-addon input-sm">Rs.</span>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 textCenter text_inputfieldPos">
						<span class="footerText_center1">Free&nbsp;VAT</span>
					</div>
					<div class="col-md-6 textCenter text_inputfieldPos">
						<span class="footerText_center2">Net&nbsp;Amount</span>
					</div>
				</div>
			</div>
			<div class="col-md-1 GR_bottomFlag">
				<div class="row">
					<div class="col-md-12">
						<button type="button" ng-class="showGrSelected.goodsReceiptStockFlag? 'flagselected' : ''"
							class="btn btn-default flag_enable full_width input-sm goods_order_flag"
							tabindex="19">
							<span class="fieldLeft_spacing_lg" ng-click="changeStatusFlag('stock')">Stock</span>
						</button>
					</div>
				</div>
				<div class="row fieldsSpacing_Top">
					<div class="col-md-12">
						<button type="button" ng-class="showGrSelected.goodsReceiptLedgerFlag? 'flagselected' : ''"
							class="btn btn-default flag_enable full_width input-sm goods_order_flag"
							tabindex="19">
							<span class="fieldLeft_spacing_lg" ng-click="changeStatusFlag('ledger')">Ledger</span>
						</button>
					</div>
				</div>
			</div>
			<!-- <div class="col-md-1 row_width_updateAcc grayBG">
				<span id="acButtonSpan">
					<button ng-disabled="!editable || showGrSelected.goodsReceiptVerifiedFlag" ng-click="showGrSelected.goodsReceiptUpdateToACFlag = !showGrSelected.goodsReceiptUpdateToACFlag" id="grUpdateToAC" type="button" class="btn btn-default AC_updateBtn">
						Update<br> to A/C
					</button>
				</span>

			</div> -->
		</div>
	</div>

</div>
<script type="text/ng-template" id="grAddModifyProduct.html">
<div class="grayBG" ng-init=init();>
		
		<div class="container lightBox_addProduct_GoodsReceipt">
			<div class="row topblueStrip">
				<h6 class="fieldsTop_Spacing"><span class="topblueStripText">ADD PRODUCT</span></h6>
			</div>
			<div class="row">
				<h5><span class="submenuBlue_heading">Product Details</span></h5>
				<hr class="horizontal_line">
			</div>
			<div class="row">
				<div class="col-md-6 col_GR1_addProduct">
					<div class="row fieldsSpacing">
						<div class=" col-md-3">
	          				<span class="control-label">Product</span>
	       				</div>
	                    <div class=" col-md-4">
					      <input type="text" id="product" required class="form-control input-sm" ng-focus="showNextPopup();" ng-model="showProductSelected.goodsReceiptProductProductName" value={{showProductSelected.goodsReceiptProductProductName}}>
					   </div>
					   <div class=" col-md-5">
					      <input type="text" class="form-control input-sm GRaddPrduct" readonly="readonly" ng-model="showProductSelected.goodsReceiptProductPack" value={{showProductSelected.goodsReceiptProductPack}}>
					   </div>					   					   
        			</div>
				</div>
				<div class="col-md-3 col_GR2_addProduct">
					<div class="row">
						<div class="col-md-4">
							<span class="control-label">Type</span>
						</div>
						<div class="col-md-8">
						<input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.goodsReceiptProductType" value={{showProductSelected.goodsReceiptProductType}}>
						</div>
					</div>
				</div>
				<div class="col-md-3 col_GR2_addProduct">
					<div class="row">
						<div class="col-md-4">
							<span class="control-label">Contents</span>
						</div>
						<div class="col-md-8">
						<input type="text" class="form-control input-sm" tabindex="2" readonly="readonly" ng-model="showProductSelected.goodsReceiptProductContents" value={{showProductSelected.goodsReceiptProductContents}}>
						</div>						
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col_GR1_addProduct">
					<div class="row">
						<div class="col-md-3">
							<span class="control-label">Receipt&nbsp;Type</span>
						</div>
						<div class="col-md-9">
							<select class="form-control input-sm" tabindex="16" ng-model="showProductSelected.productRecieptTypeSelected" ng-options="op.name for op in productRecieptTypeList">
								
							</select>
						</div>
					</div>
				</div>
				<div class="col-md-3 col_GR2_addProduct">
					<div class="row">
						<div class="col-md-4">
							<span class="control-label">Vat&nbsp;Charged</span>
						</div>
						<div class="col-md-8">
						<input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.goodsReceiptProductVatChargedOn" value={{showProductSelected.goodsReceiptProductVatChargedOn}}>
						</div>
					</div>
				</div>
				<div class="col-md-3 col_GR2_addProduct">
					<div class="row">
						<div class="col-md-4">
							<span class="control-label">Godown/Shelf</span>
						</div>
						<div class="col-md-8">
						<select class="form-control input-sm" tabindex="16" ng-model="showProductSelected.productStorageTypeSelected" ng-options="op.name for op in productStorageTypeList">
								
							</select>
						</div>						
					</div>
				</div>
			</div>
			<div class="row">
				<h5><span class="submenuBlue_heading">Batch Details</span></h5>
				<hr class="horizontal_line">				
			</div>
			<div class="row">			
				<div class="col-md-4 sectionvline" style="width: 31%;">
					<div class="row fieldsSpacing">
      					<div class="col-md-4">
       						<span class="control-label">Batch#</span>
     					</div>
      					<div class="col-md-6">
       						<input type="text" id="gr_batch" required class="form-control input-sm grBatchID" ng-blur="showBatchPopup('id')" ng-model="showProductSelected.grProductBatchObj.grProductBatchNo" value={{showProductSelected.grProductBatchObj.grProductBatchNo}}>
      					</div>
      					<div class="col-md-2">
       						<a ng-click="showBatchPopup()"><img  src="images/openPopup.png"></a>
      					</div>
     				</div>				
					<div class="row fieldsSpacing">
						<div class="col-md-4">
							<span class="control-label">Expiry&nbsp;Date</span>
						</div>
						<div class="col-md-8">
							<input type="eu-date" required id="gr_expirydate" class="form-control input-sm textCenter"  ng-model="showProductSelected.grProductBatchObj.grProductBatchExpiryDate" value={{showProductSelected.grProductBatchObj.grProductBatchExpiryDate}}>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-4">
							<span class="control-label">MRP</span>
						</div>
						<div class="col-md-8">
							<input type="text" id="gr_mrp"  required class="form-control input-sm numberField" ng-model="showProductSelected.grProductBatchObj.grProductBatchMRP" value={{showProductSelected.grProductBatchObj.grProductBatchMRP}}>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-4">
							<span class="control-label">Trade</span>
						</div>
						<div class="col-md-8">
							<input type="text" id="gr_trade" required class="form-control input-sm numberField" ng-model="showProductSelected.grProductBatchObj.grProductBatchTrade" value={{showProductSelected.grProductBatchObj.grProductBatchTrade}}>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-4">
							<span class="control-label">Quantity</span>
						</div>
						<div class="col-md-8">
							<input type="text" id="gr_quantity" required class="form-control input-sm numberField" ng-model="showProductSelected.goodsReceiptProductQty" value={{showProductSelected.goodsReceiptProductQty}}>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-4">
							<span class="control-label">Free</span>
						</div>
						<div class="col-md-8">
							<input type="text" id="gr_free" class="form-control input-sm numberField"  ng-model="showProductSelected.goodsReceiptProductFree" value={{showProductSelected.goodsReceiptProductFree}}>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-4">
							<span class="control-label">Stock</span>
						</div>
						<div class="col-md-8">
							<input type="text" class="form-control input-sm numberField" readonly="readonly" value={{showProductSelected.goodsReceiptProductFreeAvailable+showProductSelected.goodsReceiptProductQtyAvailable}}>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-4">
							<span class="control-label">Pending&nbsp;Order</span>
						</div>
						<div class="col-md-8">
							<input type="text" class="form-control input-sm numberField" readonly="readonly" value={{showProductSelected.goodsReceiptProductPurchaseQtyAvl+showProductSelected.goodsReceiptProductPurchaseFreeAvl}}>
						</div>
					</div>										
				</div>
				<div class="col-md-4 sectionvline" style="width: 31%;">
					<div class="row fieldsSpacing">
						<div class="col-md-4">
							<span class="control-label">Purchase&nbsp;Rate</span>
						</div>
						<div class="col-md-8">
							<input type="text" id="gr_purchaserate" required class="form-control input-sm numberField"  ng-model="showProductSelected.grProductBatchObj.grProductBatchPurchaseRate" value="{{showProductSelected.grProductBatchObj.grProductBatchPurchaseRate}}">{{showProductSelected.grProductBatchObj.GrProductBatchPurchaseRate}}
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-4">
							<span class="control-label">Value</span>
						</div>
						<div class="col-md-8">
							<input type="text" class="form-control input-sm numberField" readonly="readonly" ng-model="showProductSelected.goodsReceiptProductValue" value="{{showProductSelected.goodsReceiptProductValue}}">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-4">
							<span class="control-label">C.S.T.%</span>
						</div>
						<div class="col-md-8">
							<input type="text" class="form-control input-sm numberField" readonly="readonly" ng-model="showProductSelected.goodsReceiptProductCST" value="{{showProductSelected.goodsReceiptProductCST}}">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-4">
							<span class="control-label">L.T.%</span>
						</div>
						<div class="col-md-8">
							<input type="text" class="form-control input-sm numberField" readonly="readonly" ng-model="showProductSelected.goodsReceiptProductLT" value="{{showProductSelected.goodsReceiptProductLT}}">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-4">
							<span class="control-label">Selling&nbsp;Rate</span>
						</div>
						<div class="col-md-8">
							<input type="text" id="gr_sellingrate" required class="form-control input-sm numberField" ng-model="showProductSelected.grProductBatchObj.grProductBatchSellRate" value="{{showProductSelected.grProductBatchObj.grProductBatchSellRate}}">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-4">
							<span class="control-label">R.M.%</span>
						</div>
						<div class="col-md-8">
							<input type="text" class="form-control input-sm numberField" readonly="readonly" ng-model="showProductSelected.goodsReceiptProductRM" value="{{showProductSelected.goodsReceiptProductRM}}">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-4">
							<span class="control-label">W.M.%</span>
						</div>
						<div class="col-md-8">
							<input type="text" class="form-control input-sm numberField" readonly="readonly" ng-model="showProductSelected.goodsReceiptProductWM" value="{{showProductSelected.goodsReceiptProductWM}}">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-4">
							<span class="control-label">Vat%</span>
						</div>
						<div class="col-md-8">
							<input type="text" class="form-control input-sm numberField" readonly="readonly" ng-model="showProductSelected.goodsReceiptProductVAT" value="{{showProductSelected.goodsReceiptProductVAT}}">
						</div>
					</div>
					
					
				</div>
				<div class="col-md-4" style="width: 38%;">
					<div class="row fieldsSpacing">
						<div class="col-md-5">
							<span class="control-label">Trade&nbsp;Discount&nbsp;%</span>
						</div>
						<div class="col-md-7">
							<input type="text" id="gr_tradediscount" class="form-control input-sm numberField" ng-model="showProductSelected.grProductBatchObj.grProductBatchTradeDiscount" value="{{showProductSelected.grProductBatchObj.grProductBatchTradeDiscount}}">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-5">
							<span class="control-label">Trade&nbsp;Discount&nbsp;Amount</span>
						</div>
						<div class="col-md-7">
							<input type="text"  class="form-control input-sm numberField" readonly="readonly" value={{showProductSelected.grProductBatchObj.grProductBatchTradeDiscount*showProductSelected.goodsReceiptProductValue}}>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-5">
							<span class="control-label">Special&nbsp;Discount&nbsp;%</span>
						</div>
						<div class="col-md-7">
							<input type="text" id="gr_specialdisc" class="form-control input-sm numberField">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-5">
							<span class="control-label">Special&nbsp;Discount&nbsp;Amount</span>
						</div>
						<div class="col-md-7">
							<input type="text" id="gr_specialdisc" class="form-control input-sm numberField">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-5">
							<span class="control-label">Batch&nbsp;Remark</span>
						</div>
						<div class="col-md-7">
							<textarea rows="4" cols="26" style="  max-width: 182px; max-height: 90px;" ng-model="showProductSelected.grProductBatchObj.grProductBatchRemark" value={{showProductSelected.grProductBatchObj.grProductBatchRemark}}></textarea>
						</div>
					</div>	
				</div>
			</div>
			<div class="row fields_headingSpacing ">
				<div class="col-md-6">
				<button class="btn btn-default fieldLeft_spacing resetbtnSize" ng-click="clear()">Clear</button> 
				</div>
				<div class="col-md-6 textRight">
				<button class="btn canclebtnSize" ng-click="cancel()">Cancel</button>
				<button  class="btn okbtnSize" ng-click="submit(showProductSelected)"><span ng-show="statusflag == 'new'">ADD</span><span ng-show="statusflag == 'update'">Modify</span></button>
				</div>
				
				
			      
       		</div>
		</div>

	</div>
<script type="text/javascript">
var month = (new Date()).getMonth() + 1;
var year  = (new Date()).getFullYear();
// EU Common Format
$('input[type=eu-date]').w2field('date',  { format: 'd/m/yyyy' });
$('input[type=eu-time]').w2field('time',  { format: 'h24' });
$('input[type=eu-timeA]').w2field('time', { format: 'h24', start: '8:00 am', end: '4:30 pm' });
</script>
<script type="text/javascript">
    $(document).ready(function(){
    	 angular.element('*[ng-app]').injector().get("configurable").createPermission=<%=createPermission%>;
 		debugger;
 		var pCookie={createPermission:<%=createPermission%>,deletePermission:<%=deletePermission%>,modifyPermission:<%=modifyPermission%>,modifyPurchaseDatePermission:<%=modifyPurchaseDatePermission%>};
 		angular.element('*[ng-app]').injector().get('$cookieStore').put("userPermission",pCookie);
 		<%if (createPermission && !modifyPermission) {%>	    		
		angular.element(document.getElementById('goodReciept')).scope().showSaveBtn=false;
	<%}else if(modifyPermission || createPermission){%>
		angular.element(document.getElementById('goodReciept')).scope().showSaveBtn=true;
	<%}%>
	
          $("#companySelect").click(function(){
             $("#companySelect").css("background-color", "white");
            
        });
        
    });
    </script>



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



