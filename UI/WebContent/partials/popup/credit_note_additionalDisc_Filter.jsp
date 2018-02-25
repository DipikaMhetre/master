<div class="container Filter_sm" ng-init="init()">
	<div class="row topblueStrip">
		<h6 class="fieldsTop_Spacing">
			<span class="topblueStripText">FILTER</span>
		</h6>
	</div>
	<div class="row fieldsSpacing fieldsTop_Spacing">
		<div class=" col-md-4">
			<span class="control-label">From&nbsp;Date</span>
		</div>
		<div class=" col-md-8">
			<input id="from_date" type="eu-date1" tabindex="10"
				class="form-control input-sm textCenter CompanyCreditNoteFilterInputField" ng-model="filter.fromDate">
		</div>
	</div>
	<div class="row fieldsSpacing">
		<div class=" col-md-4">
			<span class="control-label">To&nbsp;Date</span>
		</div>
		<div class=" col-md-8">
			<input id="from_date" type="eu-date2" tabindex="10"  ng-model="filter.toDate"
				class="form-control input-sm textCenter CompanyCreditNoteFilterInputField">
		</div>
	</div>
	<div class="row fieldsSpacing">
		<div class=" col-md-4">
			<span class="control-label">Invoice#</span>
		</div>
		<div class=" col-md-8">
			<input tabindex="10"  ng-model="filter.invoiceId"
				class="form-control input-sm CompanyCreditNoteFilterInputField">
		</div>
	</div>
	<div class="row fieldsSpacing">
		<div class=" col-md-4">
			<span class="control-label">Company</span>
		</div>
		<div class=" col-md-8">
			<input tabindex="10" ng-model="filter.companyId"
				class="form-control input-sm CompanyCreditNoteFilterInputField">
		</div>
	</div>
	<div class="row fieldsSpacing">
		<div class=" col-md-4">
			<span class="control-label">Product</span>
		</div>
		<div class=" col-md-8">
			<input tabindex="10"  ng-model="filter.productId"
				class="form-control input-sm CompanyCreditNoteFilterInputField">
		</div>
	</div>
	<div class="row fieldsTop_Spacing ">
		<div class=" col-md-12">
			<a ng-click="clearAllFilters();" title="Remove Product" tabindex="19"
				class=" clearAllFilterPos">CLEAR&nbsp;ALL</a>
		</div>
	</div>
	<div class="row Ok_Cancle_BtnPos_Popup">
		<div class=" col-md-12">
			<button ng-click="cancel()" type="button" class="canclebtnSize"
				tabindex="20">Cancel</button>
			<button type="button" ng-click="submit(filter)" class="okbtnSize"
				tabindex="21">OK</button>
		</div>
	</div>
</div>
<script type="text/javascript">
	var month = (new Date()).getMonth() + 1;
	var year = (new Date()).getFullYear();
	$("input[type=eu-date]").w2field("date", {
		format : "dd/mm/yyyy"
	});
	$("input[type=eu-date1]").w2field("date", {
		format : "dd/mm/yyyy",
		end : $("input[type=eu-date2]")
	});
	$("input[type=eu-date2]").w2field("date", {
		format : "dd/mm/yyyy",
		start : $("input[type=eu-date1]")
	});
	$("input[type=eu-time]").w2field("time", {
		format : "h24"
	});
	$("input[type=eu-timeA]").w2field("time", {
		format : "h24",
		start : "8:00 am",
		end : "4:30 pm"
	});
</script>

