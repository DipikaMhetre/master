<div id="CreditNoteProduct" ng-controller="CreditNoteProductCtrl" ng-init="init()" onload=GetClock();>
	<toast></toast>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" title="" class="highlight_purple not_active">Credit
						Note (Goods Return)</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a onclick="location.reload();" class="">Refresh</a></li>
				<li><a href="#" class="not_implemented_link not_active">Email</a></li>
				<li><a href="#" class="not_implemented_link not_active">Print</a></li>
				<li><a ng-class="(!editable || showCNPSelected.creditNoteVerifiedFlg)?'not_active not_implemented_link':''"ng-click="save(showCNPSelected)" tabindex="19">Save</a></li>
				<li><a ng-class="editable?'':'not_active not_implemented_link'" ng-click="newCN()">New</a></li>
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
			<span class="submenuBlue_heading">Credit Note (Goods Return)
				Summary</span>
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
								readonly="readonly" ng-model="showCNPSelected.creditNoteType">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-2 textLeft">
							<span>Customer</span>
						</div>
						<div class="col-md-8">
							<input type="text" id="customer" required="required"
								class="form-control input-sm goodreturn_customer goodsReturn_customerInput"
								disabled tabindex="2" ng-model="showCNPSelected.creditNoteCustName">
						</div>
						<div class="col-md-2 textRight">
							<a><img class="goodreturn_customerPopup_img "
								src="images/openPopup.png" ng-click="showCustomerListPopup()"
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
								tabindex="1" ng-model="showCNPSelected.creditNoteID" ng-blur="retrieve(showCNPSelected.creditNoteID)">
						</div>
						<div class="col-md-2 textLeft">
							<span class="CreditNoteProduct_dateLabel">C.N.&nbsp;Date</span>
						</div>
						<div class="col-md-4">
							<input type="eu-date"
								class="form-control input-sm textCenter goodsReturn_RR_dateInput"
								tabindex="2" ng-disabled="!editable || showCNPSelected.creditNoteVerifiedFlg || showCNPSelected.creditNoteflgLock" ng-model="showCNPSelected.creditNoteDate">
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
								readonly="readonly" ng-model="showCNPSelected.creditNoteStatus">
						</div>
					</div>

					<div class="row fieldsSpacing">
						<div class="col-md-2 textLeft">
							<span>Created&nbsp;by</span>
						</div>
						<div class="col-md-10">
							<input type="text"
								class="form-control input-sm goodReturn_lgInput"
								readonly="readonly" ng-model="showCNPSelected.creditNoteCreatedByName">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-2 textLeft">
							<span>Remark</span>
						</div>
						<div class="col-md-10">
							<input type="text"
								ng-disabled="!editable || showCNPSelected.creditNoteVerifiedFlg || showCNPSelected.creditNoteflgLock" class="form-control input-sm goodReturn_lgInput" tabindex="3" ng-model="showCNPSelected.creditNoteRemark">
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="block3">
					<div class="row fieldsSpacing fields_headingSpacing">
						<div class="col-md-3">
							<button type="button" ng-disabled="!editable || showCNPSelected.creditNoteVerifiedFlg || showCNPSelected.creditNoteflgLock" ng-class="showCNPSelected.creditNoteVerifiedFlg ? 'flagselected' : ''"
								class="btn btn-default full_width input-sm goods_order_flag flag_enable"
								tabindex="4">
								<span class="fieldLeft_spacing_lg" ng-model="showCNPSelected.creditNoteVerifiedFlg" ng-click="changeStatusFlag('verified')">Verified</span>
							</button>
						</div>
						<div class="col-md-9">
							<input type="text" class="form-control input-sm" tabindex="5" readonly="readonly" ng-model="verifiedText"> 
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-3">
							<button type="button" ng-disabled="!editable || showCNPSelected.creditNoteVerifiedFlg || showCNPSelected.creditNoteflgLock"able" ng-class="showCNPSelected.creditNoteflgVoid? 'flagselected' : ''"
								class="btn btn-default full_width input-sm goods_order_flag flag_enable"
								tabindex="6">
								<span class="fieldLeft_spacing_lg"  ng-click="changeStatusFlag('void')">Void</span>
							</button>
						</div>
						<div class="col-md-9">
							<input name="credit_note" type="text" tabindex="7"
								class="form-control input-sm " ng-disabled="!editable || !showCNPSelected.creditNoteflgVoid || showCNPSelected.creditNoteVerifiedFlg || showCNPSelected.creditNoteflgLock" ng-model="showCNPSelected.creditNoteVoidReason">

						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="col-md-3">
							<button type="button" ng-disabled="!editable || showCNPSelected.creditNoteVerifiedFlg || showCNPSelected.creditNoteflgLock || newFlag" ng-class="showCNPSelected.creditNoteflgLedger? 'flagselected' : ''"
								class="btn btn-default full_width input-sm goods_order_flag flag_enable"
								tabindex="8" >
								<span class="fieldLeft_spacing_lg" ng-click="changeStatusFlag('ledger')">Ledger</span>
							</button>
						</div>
						<div class="col-md-9">
							<input name="credit_note" type="text" tabindex="9"
								class="form-control input-sm" readonly="readonly" ng-model="ledgerText">
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div class="row container">
		<h5>
			<span class="submenuBlue_heading">Credit Note (Goods Return)
				Details</span>
		</h5>
	
		<hr class="horizontal_line">
	</div>
	<article class="goodsReturnDetaisPos ">
		<div class="row container">
			<!-- <div class="col-md-8">
				<div class="row filterOnCreditNoteProduct">
					<div class="col-md-1">
						<span>Filter</span>
					</div>
					<div class="col-md-11">
						<select class="input-sm input_rightSpecing inputOrSelect_width_md">
							<option>R.R. Date</option>
							<option>R.R.#</option>
							<option>All</option>
						</select> <select
							class="input-sm  input_rightSpecing inputOrSelect_width_md">
						</select>
						<button class=" btn_Go_CrDbNote btn btn-primary">Go</button>
					</div>
				</div>
			</div> -->
			<div class="col-md-12">
				<nav class="mainnav">
					<ul class="rightFloat" id="list-nav">
						<li><a ng-click="changeFlag()">Show Selected(<span ng-class="showSelectedFlag == 'ON'?'highlight_purple':''">{{showSelectedFlag}}</span>)</a></li>
						<li><a title="" ng-click="showFilterPopup()">Filter(<span ng-class="filterStatus == 'ON'?'highlight_purple':''">{{filterStatus}}</span>)</a></li>
						<li><a ng-class="enableModifyBtn?'':'not_active not_implemented_link'" ng-click="showModifyCreditNotePopup()">Save
								Product</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</article>
	<div class="row container fieldsTop_Spacing">
		<div class="col-md-12">
			<!--=============GRID==========  -->
			<div id="grid" tabindex="10" class="product_CreditNoteGrid"></div>
			<!--=============GRID==========  -->
		</div>
	</div>
	<div class="row container fieldsSpacing fieldsTop_Spacing">
		<div class="col-md-4">
			<input class="" type="checkbox" tabindex="37" ng-model="showCNPSelected.creditNoteflgLock" ng-change="changeStatusFlag('lock')" > <span class="">Lock</span><input
				type="text"
				class=" input-sm ApprovedInput_rateDiff_CreditNote fieldLeft_spacing"
				readonly="readonly" ng-model="lockText">
		</div>
	</div>
	<!-- <div class=" Bottom_total_sec">
		<div class="row container"
			style="margin-bottom: 1px; margin-top: -4px;">
			<div class="col-md-2">
				<span><strong>Total : </strong></span>
			</div>
			<div class="col-md-10">
				<div class="input-group CreditNote_FooterTotalSec">
					<input type="text"
						class="form-control input-sm CreditNote_Footerwidth_class orangeBG"
						readonly="readonly"> <input type="text"
						class="form-control input-sm CreditNote_Footerwidth_class orangeBG"
						readonly="readonly"> <input type="text"
						class="form-control input-sm CreditNote_Footerwidth_class orangeBG"
						readonly="readonly"> <input type="text"
						class="form-control input-sm CreditNote_Footerwidth_class orangeBG"
						readonly="readonly"> <input type="text"
						class="form-control input-sm CreditNote_Footerwidth_class orangeBG"
						readonly="readonly"> <input type="text"
						class="form-control input-sm CreditNote_Footerwidth_class1 orangeBG"
						readonly="readonly"> <input type="text"
						class="form-control input-sm CreditNote_Footerwidth_class2 orangeBG"
						readonly="readonly"> <input type="text"
						class="form-control input-sm CreditNote_Footerwidth_class orangeBG"
						readonly="readonly">
				</div>
			</div>
		</div>
	</div> -->
</div>
<!-- <script type="text/javascript">
$(function () {
    $('#grid').w2grid({ 
        name: 'grid', 
        header: 'List of Names', 
        show : {
			 selectColumn: true
		},
        columns: [
				  { field: '', caption: 'R.R. Date ', size: '10%' }, 
				  { field: '', caption: 'R.R.#', size: '8%' },	
		          { field: '', caption: 'Product ', size: '17%' }, 
		          { field: '', caption: 'Pack', size: '8%' },		           
		          { field: '', caption: 'Batch#', size: '9%' },
		          { field: '', caption: 'Expiry', size: '10%'},		         
		          { field: 'quantity', caption: 'Qty', size: '9%' },
		          { field: 'free_quantity', caption: 'Free Qty', size: '11%' },
		          { field: 'mrp', caption: 'MRP', size: '11%' },
		          { field: 'purchase_rate', caption: 'PR', size: '11%' },
		          { field: 'sale_rate', caption: 'SR', size: '11%' },	
		          { field: '', caption: 'VAT%', size: '8%' },	
		          { field: 'vat', caption: 'VAT', size: '11%' },	
		          { field: '', caption: 'Condition', size: '11%' },		          
		          { field: 'cn_amount', caption: 'C.N. Amount', size: '14%' },
		          { field: 'cn_vat', caption: 'C.N. VAT', size: '11%' },
		          { field: '', caption: 'Remark', size: '30%' },       		         	          
		        ],
		        records: [
						  { summary: true, 
							    recid: 'S-1', quantity: 'T', free_quantity: 'T', 
							    vat: 'T', cn_amount: 'T', cn_vat:'T'
							  }
		                  ]
    });    
});
</script> -->

<script type="text/javascript">
var month = (new Date()).getMonth() + 1;
var year  = (new Date()).getFullYear();
// EU Common Format
$('input[type=eu-date]').w2field('date',  { format: 'dd/mm/yyyy' });
</script>