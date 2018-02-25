<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="StockAuditFilter" class="container Filter_Medium">
	<div class="row topblueStrip">
		<h6 class="fieldsTop_Spacing">
			<span class="topblueStripText">FILTER</span>
		</h6>
	</div>
	<div class="row fieldsSpacing fieldsTop_Spacing">
		<div class=" col-md-4">
			<span class="control-label">Run&nbsp;ID</span>
		</div>
		<div class=" col-md-8">
			<input type="text"  class="form-control input-sm"
			ng-model="filter.stockAuditId" >
		</div>
	</div>
	<div class="row fieldsSpacing fieldsTop_Spacing">
		<div class=" col-md-4">
			<span class="control-label">From&nbsp;Date</span>
		</div>
		<div class=" col-md-8">
			<input type="eu-date1" class="form-control input-sm textCenter"
			ng-model="filter.fromDate">
		</div>
	</div>
	<div class="row fieldsSpacing fieldsTop_Spacing">
		<div class=" col-md-4">
			<span class="control-label">To&nbsp;Date</span>
		</div>
		<div class=" col-md-8">
			<input type="eu-date2" class="form-control input-sm "
			ng-model="filter.fromDate">
		</div>
	</div>
	<!-- <div class="row fieldsSpacing fieldsTop_Spacing">
		<div class=" col-md-4">
			<span class="control-label">Label</span>
		</div>
		<div class=" col-md-8">
			<input type="text" class="form-control input-sm "
			ng-model="filter.fromDate.stockAuditLabel">
		</div>
	</div> -->
	<div class="row fieldsSpacing">
		<div class=" col-md-4">
			<span class="control-label">Outcome</span>
		</div>
		<div class=" col-md-8">
			<select class="form-control input-sm input_rightSpecing"
			ng-options="opt.id as opt.name for opt in OutcomeList"
			ng-model="filter.auditOutcome">
				
			</select>
		</div>
	</div>
	<div class="row fieldsSpacing">
		<div class=" col-md-4">
			<span class="control-label">Lock&nbsp;Sales</span>
		</div>
		<div class=" col-md-8">
			<select class="form-control input-sm input_rightSpecing"
			ng-options="opt.id as opt.name for opt in LockSale"
			ng-model="filter.auditFlgSaleLock">
				
			</select>
		</div>
	</div>
	<div class="row fieldsSpacing">
		<div class=" col-md-4">
			<span class="control-label">Result</span>
		</div>
		<div class=" col-md-8">
			<select class="form-control input-sm input_rightSpecing"
			ng-options="opt.id as opt.name for opt in ResultList"
			ng-model="filter.auditResult">
				
			</select>
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
			<button type="button" ng-click="ok(filter)" class="okbtnSize"
				tabindex="21">OK</button>
		</div>
	</div>
</div>
<script type="text/javascript">
var month = (new Date()).getMonth() + 1;
var year  = (new Date()).getFullYear();
$('input[type=eu-date]').w2field('date',  { format: 'd/m/yyyy' });
$('input[type=eu-date1]').w2field('date', { format: 'd/m/yyyy', end: $('input[type=eu-date2]') });
$('input[type=eu-date2]').w2field('date', { format: 'd/m/yyyy', start: $('input[type=eu-date1]') });
</script>

