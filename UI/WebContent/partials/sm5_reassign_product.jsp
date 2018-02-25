<div ng-init="init()" id="SM_ReassignProduct" class="grayBG">
	<div class="container stockManagerPopup_TMB">
		<div class="row topblueStrip">
			<h6 class="fieldsTop_Spacing">
				<span class="topblueStripText">Reassign Product</span>
			</h6>
		</div>
		<div class="row">
			<h5>
				<span class="submenuBlue_heading">Product List</span>
			</h5>
			<hr class="horizontal_line">
		</div>
		<div class="row fieldsSpacing">
			<!-- =============GRID========== -->
			<div id="grid5" tabindex="-1"
				style="width: 95%; margin-left: 15px; height: 250px;"></div>
			<!-- =============GRID========== -->
		</div>
		<div class="row">
			<h5>
				<span class="submenuBlue_heading">Target Company</span>
			</h5>
			<hr class="horizontal_line">
		</div>
		<div class="row fieldsSpacing">
			<div class="col-md-6">
				<div class="row">
					<div class=" col-md-3">
						<span class="control-label">Company</span>
					</div>
					<div class="col-md-9">
						<select type="text" id="sm_companyee" tabindex="1"
							class="form-control input-sm"
							ng-options="op as op.companyName for op in showCList"
							ng-model="showCompanySelected"
							ng-change="onCompSelection(showCompanySelected)"></select>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="row">
					<div class=" col-md-3">
						<span class="control-label">Division</span>
					</div>
					<div class="col-md-9">
						<select id="sm_div" class="form-control productboxSize input-sm"
							tabindex="2" ng-options="op as op.divisionName for op in showDList"
							ng-model="showDivisionSelected">
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsBot_Spacing">
			<div class=" col-md-1">
				<span class="control-label">Remarks</span>
			</div>
			<div class="col-md-11">
				<input type="text" tabindex="3"
					class="form-control input-sm stockMang_RP_remark">
			</div>
		</div>
		<div class="row textRight fieldsBot_Spacing">
			<button class="btn canclebtnSize" ng-click="cancel()">Cancel</button>
			<button class="btn okbtnSize" ng-click="reassign()">Save</button>
		</div>
	</div>
</div>
<script type="text/javascript">$(document).ready(function(){ $("#sm_div").click(function(){ $("#sm_div").css("background-color", "white"); }); $("#sm_companyee").click(function(){ $("#sm_companyee").css("background-color", "white"); }); });</script>
',
