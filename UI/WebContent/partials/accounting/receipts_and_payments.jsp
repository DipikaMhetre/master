<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>

<div id="ReceiptsAndPayments"
	data-ng-controller="ReceiptsAndPaymentsCtrl" ng-init=init()>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" title=" " class="highlight_purple not_active">Receipts
						and Payments</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a onclick="location.reload();" title="" class="">Refresh</a></li>
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
						class="btn btn-default flag_enable editable-btn"
						tabindex="20">
						<span class="fieldLeft_spacing_lg" ng-click="editable=!editable">Editable</span>
					</button>
				</li>
			</ul>
		</nav>
	</Section>
	<div class="row  container">
		<div class="col-md-6 fieldsTop_Spacing">
			<span>Show</span> <select
				class="input-sm input_rightSpecing inputOrSelect_width_md">
				<option>Receipts</option>
				<option>Payments</option>
				<option>All</option>
			</select> <span class="fieldLeft_spacing_md1">Type</span> <select
				class="input-sm  input_rightSpecing inputOrSelect_width_md ">
				<option>Cash</option>
				<option>Cheque</option>
				<option>All</option>
			</select>
			<button
				class=" btn_Go_CrDbNote btn btn-primary fieldLeft_spacing_md1">Go</button>
		</div>
		<div class="col-md-6">
			<nav class="mainnav">
				<ul class="rightFloat" id="list-nav">
					<li><a ng-click="showFilterPopup()" tabindex="13">Filter(OFF)</a></li>
					<!-- <li><a class="disabledBtnLink"
						ng-click="showBankDepositSlipPopup()" tabindex="13">Bank
							Deposit Slips</a></li> -->
					<li><a class="" ng-click="showAddReceiptPopup()" tabindex="13">Add
							Receipt</a></li>
					<li><a class="disabledBtnLink"
						ng-click="showAddPaymentPopup()" tabindex="13">Add Payment</a></li>
				</ul>
			</nav>
		</div>
	</div>
	<div class="row container fieldsSpacing fieldsTop_Spacing">
		<div class="col-md-12">
			<!--=============GRID==========  -->
			<div id="grid" tabindex="14" class="FullGrid_withUpSec"></div>
			<!--=============GRID==========  -->
		</div>
	</div>
</div>
<script type="text/javascript">
	$(function() {
		$('#grid')
				.w2grid(
						{
							name : 'grid',
							header : 'List of Names',
							show : {
								selectColumn : false
							},
							columns : [ {
								field : 'date',
								caption : 'Date',
								size : '4%'
							}, {
								field : 'lot',
								caption : 'Lot#',
								size : '3%'
							}, {
								field : 'voucher',
								caption : 'Voucher#',
								size : '4%'
							}, {
								field : 'ac_code',
								caption : 'A/C Code',
								size : '6%'
							}, {
								field : 'ac_description',
								caption : 'A/C Description',
								size : '10%'
							}, {
								field : 'credit',
								caption : 'Credit',
								size : '5%'
							}, {
								field : 'debit',
								caption : 'Debit',
								size : '5%'
							}, {
								field : 'narration',
								caption : 'Narration',
								size : '10%'
							}, {
								field : 'user',
								caption : 'User',
								size : '5%'
							}, ],
							records : [ {
								summary : true,
								recid : 'S-1',
								date : '<span style="font:bold ;">TOTAL</span>',
								ac_code : '<span style="float: right;">Opening Balance</span>',
								ac_description : '<span style="float: left;">T</span>',
								credit : 'T',
								debit : 'T',
								narration : '<span style="float: right;">Closing Balance</span>',
								user : '<span style="float: left;">T</span>'
							} ]
						});
	});
</script>
