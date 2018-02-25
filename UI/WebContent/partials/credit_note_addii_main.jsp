<div id="AdditionalDiscountCreditNote"
	ng-controller="CreditNoteAdditionalDiscountCtrl" ng-init="init()"
	onload=GetClock();>
	<toast></toast>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" title="" class="highlight_purple not_active">Credit
						Note - Additional Discount</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a onclick="location.reload();" class="">Refresh</a></li>
				<li><a href="#" class="not_implemented_link not_active">Email</a></li>
				<li><a href="#" class="not_implemented_link not_active">Print</a></li>
				<li><a ng-click="saveGoodsReturn()" tabindex="19">Save</a></li>
				<li><a ng-click="newRR()">New</a></li>
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
		<h5>
			<span class="submenuBlue_heading"> Credit Note - Additional
				Discount Summary</span>
			<button class="btn btn-primary consumptionDetailsBtn">Consumption
				Details</button>
		</h5>
		<hr class="horizontal_line">
	</div>
	<section class="container fieldsBot_Spacing">
		<div class="row grid">
			<div class="col-md-4 sectionvline ">
				<div class="block3">
					<div class="row fields_headingSpacing fieldsSpacing">
						<div class="col-md-2 textLeft">
							<span>Type</span>
						</div>
						<div class="col-md-10">
							<input type="text"
								class="form-control input-sm CreditNoteProduct_TypeCustInput_sm"
								readonly="readonly" ng-model="showCNASelected.creditNoteTypeDescription">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-2 textLeft">
							<span>Customer</span>
						</div>
						<div class="col-md-8">
							<input type="text" id="customer" required="required"
								class="form-control input-sm goodreturn_customer goodsReturn_customerInput"
								disabled tabindex="2" ng-model="showCNASelected.creditNoteCustName ">
						</div>
						<div class="col-md-2 textRight">
							<a><img class="goodreturn_customerPopup_img "
								src="images/openPopup.png" ng-click="showCustomerPopup()"
								tabindex="3"></a>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-2 textLeft">
							<span class="idtext">Cr.&nbsp;Note#</span>
						</div>
						<div class="col-md-4">
							<input type="text"
								class="form-control input-sm idfield textRight goodsReturn_RR_idInput"
								tabindex="1" ng-model="showCNASelected.creditNoteID " ng-blur="retrieve(showCNASelected.creditNoteID)">
						</div>
						<div class="col-md-2 textLeft">
							<span class="CreditNoteProduct_dateLabel">C.N.&nbsp;Date</span>
						</div>
						<div class="col-md-4">
							<input type="eu-date"
								class="form-control input-sm textCenter goodsReturn_RR_dateInput"
								ng-disabled="!editable || showCNASelected.creditNoteVerifiedFlg || showCNASelected.creditNoteflgLock  ||showCNASelected.creditNoteType==2"
								tabindex="2" ng-model="showCNASelected.creditNoteDate">
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4 sectionvline">
				<div class="block3">
					<div class="row fieldsSpacing fields_headingSpacing">
						<div class="col-md-2 textLeft">
							<span>Status</span>
						</div>
						<div class="col-md-10">
							<input type="text"
								class="form-control input-sm goodReturn_lgInput"
								readonly="readonly" ng-model="showCNASelected.creditNoteStatusDescription">
						</div>
					</div>

					<div class="row fieldsSpacing">
						<div class="col-md-2 textLeft">
							<span>Created&nbsp;by</span>
						</div>
						<div class="col-md-10">
							<input type="text"
								class="form-control input-sm goodReturn_lgInput"
								readonly="readonly" value="[{{showCNASelected.creditNoteCreatedByName}}] {{showCNASelected.creditNoteCreatedOn}}">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-2 textLeft">
							<span>Remark</span>
						</div>
						<div class="col-md-10">
							<input type="text"
							ng-disabled="!editable || showCNASelected.creditNoteVerifiedFlg || showCNASelected.creditNoteflgLock ||showCNASelected.creditNoteType==2"
								
								class="form-control input-sm goodReturn_lgInput" tabindex="3" ng-model="showCNASelected.creditNoteRemark ">
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="block3">
					<div class="row fieldsSpacing fields_headingSpacing">
						<div class="col-md-3">
							<button type="button"
								ng-disabled="!editable||showCNASelected.creditNoteType==2 || showCNASelected.creditNoteflgLock"
								ng-class="showCNASelected.creditNoteVerifiedFlg ? 'flagselected' : ''"
								class="btn btn-default full_width input-sm goods_order_flag flag_enable"
								tabindex="4">
								<span class="fieldLeft_spacing_lg"
									ng-model="showCNASelected.creditNoteVerifiedFlg"
									ng-click="changeStatusFlag('verified')">Verified</span>
							</button>
						</div>
						<div class="col-md-9">
							<input type="text" class="form-control input-sm" tabindex="5"
								readonly="readonly" ng-model="verifiedText">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-3">
							<button type="button"
								ng-disabled="!editable || showCNASelected.creditNoteVerifiedFlg || showCNASelected.creditNoteflgLock ||showCNASelected.creditNoteType==2"
								able" ng-class="showCNASelected.creditNoteflgVoid? 'flagselected' : ''"
								class="btn btn-default full_width input-sm goods_order_flag flag_enable"
								tabindex="6">
								<span class="fieldLeft_spacing_lg"
									ng-click="changeStatusFlag('void')">Void</span>
							</button>
						</div>
						<div class="col-md-9">
							<input name="credit_note" type="text" tabindex="7"
								class="form-control input-sm "
								ng-disabled="!editable || !showCNASelected.creditNoteflgVoid || showCNASelected.creditNoteVerifiedFlg || showCNASelected.creditNoteflgLock ||showCNASelected.creditNoteType==2"
								ng-model="showCNASelected.creditNoteVoidReason">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-3">
							<button type="button"
								ng-disabled="!editable || showCNASelected.creditNoteVerifiedFlg || showCNASelected.creditNoteflgLock || newFlag || showCNASelected.creditNoteType==2"
								ng-class="showCNASelected.creditNoteflgLedger? 'flagselected' : ''"
								class="btn btn-default full_width input-sm goods_order_flag flag_enable"
								tabindex="8">
								<span class="fieldLeft_spacing_lg"
									ng-click="changeStatusFlag('ledger')">Ledger</span>
							</button>
						</div>
						<div class="col-md-9">
							<input name="credit_note" type="text" tabindex="9"
								class="form-control input-sm" readonly="readonly"
								ng-model="ledgerText">
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div class="row container">
		<h5>
			<span class="submenuBlue_heading"> Credit Note - Additional
				Discount Details</span>
		</h5>
		<hr class="horizontal_line">
	</div>
	<article class="goodsReturnDetaisPos ">
		<div class="row container">
			<div class="col-md-12">
				<nav class="mainnav">
					<ul class="rightFloat" id="list-nav">
						<li ng-hide="showCNASelected.creditNoteVerifiedFlg"><a
							ng-click="changeFlag()">Show Selected(<span
								ng-class="showSelectedFlag == 'ON'?'highlight_purple':''">{{showSelectedFlag}}</span>)
						</a></li>
						<li ng-hide="showCNASelected.creditNoteVerifiedFlg"><a
							title="" ng-click="showFilterPopup()">Filter(<span
								ng-class="filterStatus == 'ON'?'highlight_purple':''">{{filterStatus}}</span>)
						</a></li>
						<li><img alt="" class="filterOff_closeImage filter_closeBtn_inList" 
							ng-show="filterStatus=='ON'" ng-click="clearRRFilters()"
							src="images/contacts_manager/close.png"></li>
						<li><a
							ng-class="enableModifyBtn?'':'not_active not_implemented_link'"
							ng-click="showModifyCreditNotePopup()">Manage Discount</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</article>
	<div class="row container fieldsTop_Spacing">
		<div class="col-md-12">
			<!--=============GRID==========  -->
			<div id="grid" tabindex="10" class="AddDisc_CN_Grid"></div>
			<!--=============GRID==========  -->
		</div>
	</div>
	<div class="row container fieldsTop_Spacing">
		<div class="col-md-3 fieldsTop_Spacing">
			<input class="" type="checkbox" tabindex="37"
				ng-model="showCNASelected.creditNoteflgLock"
				ng-change="changeStatusFlag('lock')"> <span class="">Lock</span><input
				type="text" ng-disabled="showCNASelected.creditNoteType==2"
				class=" input-sm CN_fullScreen_lock fieldLeft_spacing"
				readonly="readonly" ng-model="lockText">
		</div>
		<div class="col-md-6 CN_addDiscFooter_col6" >
			<div class="row fieldsSpacing MedHighlightSection">
				<div class="col-md-3">
					<span class="control-label">Credit&nbsp;Note&nbsp;Summary&nbsp;:&nbsp;</span>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Amount</span>
						</div>
						<div class=" col-md-8">
							<div class="input-group inputGroupWidth">
								<input type="text" class="form-control input-sm textRight orangeBG WhiteText"
								readonly="readonly"
								ng-model="showCNASelected.creditNoteProductReturnAmountTotal">
							<span class="input-group-addon input-sm">Rs.</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">VAT</span>
						</div>
						<div class=" col-md-8">
							<div class="input-group inputGroupWidth">
								<input type="text" class="form-control input-sm textRight orangeBG WhiteText"
								readonly="readonly"
								ng-model="showCNASelected.creditNoteProductTotalVATamt">
							<span class="input-group-addon input-sm">Rs.</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Total</span>
						</div>
						<div class=" col-md-8">
							<div class="input-group inputGroupWidth">
								<input type="text" class="form-control input-sm textRight orangeBG WhiteText"
								readonly="readonly" ng-model="showCNASelected.creditNoteAmount">
							<span class="input-group-addon input-sm">Rs.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-3 CN_addDiscFooter_col3">
			<div class="row fieldsSpacing showNextSection">
				<div class="col-md-12 textRight">
					<span class="">Show&nbsp;next</span> <input
						ng-model="showCNASelected. " class=" input-sm textRight" style="width: 60px;" type="text"
						tabindex="5">
					<button ng-click="getUpdatedCustomerDetails()"
						class="Go_btn btn btn-primary" tabindex="6">Go</button>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
$(function () {
    $('#grid').w2grid({ 
        name: 'grid', 
        header: 'List of Names', 
        show : {
			 selectColumn: true
		},
        columns: [
				  { field: '', caption: 'Invoice Date ', size: '7%' }, 
				  { field: '', caption: 'Invoice#', size: '7%' },	
		          { field: '', caption: 'Products# ', size: '7%' }, 	           		          	         
		          { field: 'quantity', caption: 'Product Amt', size: '7%' },
		         /*  { field: 'free_quantity', caption: 'Free Quantity', size: '10%' },
		          { field: 'total_amount', caption: 'Total Amount', size: '10%' }, */
		          { field: 'total_vat', caption: 'VAT', size: '7%' },
		          /* { field: 'credit_note', caption: 'C.N.', size: '7%' },	
		          { field: 'debit_note', caption: 'D.N.', size: '7%' },	 */
		          { field: 'invoice_amt', caption: 'Invoice Amount', size: '7%' },
		         /*  { field: 'product_disc', caption: 'Product Discount', size: '12%' }, */
		          { field: 'additional_discP', caption: 'Additional Disc%', size: '7%',render: 'percent:1'},		          
		          { field: 'additional_discAmt', caption: 'Additional Disc Amt', size: '7%'},
		          /* { field: 'total_disc', caption: 'Total Discount', size: '11%' }, */
		          { field: 'net_invoice_amt', caption: 'Net Invoice Amt', size: '7%' } 
		          
		        ],
        records: [
				  { summary: true, 
					    recid: 'S-1', total_vat: 'T', 
					    invoice_amt: 'T',  additional_discAmt:'T',  net_invoice_amt:'T'
					  }
                  ]
    });    
});
</script>

<script type="text/javascript">
var month = (new Date()).getMonth() + 1;
var year  = (new Date()).getFullYear();
// EU Common Format
$('input[type=eu-date]').w2field('date',  { format: 'dd/mm/yyyy' });
</script>