'
<div ng-init="init()" id="SM_BatchScheme" class="grayBG">
	<div class="container lightBox_manageProductScheme">
		<div class="row topblueStrip"">
			<h6>
				<span class="topblueStripText">Batch Scheme</span>
			</h6>
		</div>
		<div class="row">
			<h5>
				<span class="submenuBlue_heading">Scheme Summary</span>
			</h5>
			<hr class="horizontal_line">
		</div>
		<div class="row fieldsSpacing">
			<div class="col-md-3 col_3_xs">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Product</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							readonly="readonly"
							ng-model="popupActiveBatch.grProductBatchProductName"
							value={{popupActiveBatch.grProductBatchProductName}}>
					</div>
				</div>
			</div>
			<div class="col-md-3 col_3_sm">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Product&nbsp;Name</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							ng-model="popupActiveBatch.grProductBatchProductName"
							value={{popupActiveBatch.grProductBatchProductName}}readonly="readonly">
					</div>
				</div>
			</div>
			<div class="col-md-3 col_3_md">
				<div class="row">
					<div class="col-md-4">
						<span class="control-label">Batch#</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm "
							ng-model="popupActiveBatch.grProductBatchNo"
							value={{popupActiveBatch.grProductBatchNo}} readonly="readonly">
					</div>
				</div>
			</div>
			<div class="col-md-3 col_3_lg">
				<div class="row">
					<div class="col-md-5">
						<span class="control-label">Pack</span>
					</div>
					<div class="col-md-7">
						<input type="text" class="form-control input-sm " value=""
							readonly="readonly">
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsSpacing">
			<div class="col-md-3 col_3_xs">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Stock</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							ng-model="popupActiveBatch.quantity"
							value={{popupActiveBatch.quantity}} readonly="readonly">
					</div>
				</div>
			</div>
			<div class="col-md-3 col_3_sm">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Free&nbsp;Stock</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							ng-model="popupActiveBatch.free"
							value={{popupActiveBatch.freeStock}} readonly="readonly">
					</div>
				</div>
			</div>
			<div class="col-md-3 col_3_md">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Stock&nbsp;Available</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							ng-model="popupActiveBatch.stock"
							value={{popupActiveBatch.stock}} readonly="readonly">
					</div>
				</div>
			</div>
			<div class="col-md-3 col_3_lg">
				<div class="row">
					<div class=" col-md-5">
						<span class="control-label">Free&nbsp;Stock&nbsp;Available</span>
					</div>
					<div class="col-md-7">
						<input type="text" class="form-control input-sm"
							ng-model="popupActiveBatch.freeStock"
							value={{popupActiveBatch.freeStock}} readonly="readonly">
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsSpacing">
			<div class="col-md-3 col_3_xs">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Start&nbsp;Date</span>
					</div>
					<div class="col-md-8">
						<input type="text" id="start_date" name="start_date"
							class="form-control input-sm" tabindex="1"
							ng-model="showBatchScheme.batchSchemeStartDate"
							value={{showBatchScheme.batchSchemeStartDate}}>
					</div>
				</div>
			</div>
			<div class="col-md-3 col_3_sm">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">End&nbsp;Date</span>
					</div>
					<div class="col-md-8">
						<input type="text" id="end_date" name="end_date"
							class="form-control input-sm"
							ng-model="showBatchScheme.batchSchemeEndDate"
							value={{showBatchScheme.batchSchemeEndDate}} tabindex="2">
					</div>
				</div>
			</div>
			<div class="col-md-3 col_3_md">
				<div class="row">
					<div class="col-md-4">
						<span class="control-label">Min&nbsp;Stock</span>
					</div>
					<div class="col-md-8">
						<input type="text" id="min_stock" name="min_stock"
							class="form-control input-sm "
							ng-model="showBatchScheme.batchSchemeMinStock"
							value={{showBatchScheme.batchSchemeMinStock}} tabindex="3">
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsSpacing">
			<div class=" col-md-1 " style="width: 7%;">
				<span class="control-label">Remark</span>
			</div>
			<div class="col-md-11 " style="width: 93%;">
				<input type="text" class="form-control input-sm" tabindex="4"
					ng-model="showBatchScheme.batchSchemeRemark"
					value={{showBatchScheme.batchSchemeRemark}}>
			</div>
		</div>
		<div class="row">
			<h5>
				<span class="submenuBlue_heading">Scheme Details</span>
			</h5>
			<hr class="horizontal_line">
		</div>
		<div class="row fieldsSpacing">
			<div class="col-md-3 col_3_xs">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Quantity</span>
					</div>
					<div class="col-md-8">
						<input type="text" id="quantity1" name="quantity1"
							class="form-control input-sm" tabindex="5"
							ng-model="showBatchScheme.Q1" value={{showBatchScheme.Q1}}>
					</div>
				</div>
			</div>
			<div class="col-md-3 col_3_sm">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Free</span>
					</div>
					<div class="col-md-8">
						<input type="text" id="free1" name="free1"
							class="form-control input-sm" ng-model="showBatchScheme.F1"
							value={{showBatchScheme.F1}}tabindex="6">
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsSpacing">
			<div class="col-md-3 col_3_xs">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Quantity</span>
					</div>
					<div class="col-md-8">
						<input type="text" id="quantity3" name="quantity3"
							class="form-control input-sm" tabindex="7"
							ng-model="showBatchScheme.Q2" value={{showBatchScheme.Q2}}>
					</div>
				</div>
			</div>
			<div class="col-md-3 col_3_sm">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Free</span>
					</div>
					<div class="col-md-8">
						<input type="text" id="free2" name="free2"
							class="form-control input-sm" ng-model="showBatchScheme.F2"
							value={{showBatchScheme.F2}}tabindex="8">
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsSpacing">
			<div class="col-md-3 col_3_xs">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Quantity</span>
					</div>
					<div class="col-md-8">
						<input type="text" id="quantity3" name="quantity3"
							class="form-control input-sm" tabindex="9"
							ng-model="showBatchScheme.Q3" value={{showBatchScheme.Q4}}>
					</div>
				</div>
			</div>
			<div class="col-md-3 col_3_sm">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Free</span>
					</div>
					<div class="col-md-8">
						<input type="text" id="free3" name="free3"
							class="form-control input-sm" ng-model="showBatchScheme.F3"
							value={{showBatchScheme.F3}}tabindex="10">
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<h5>
				<span class="submenuBlue_heading">Purchase History</span>
			</h5>
			<hr class="horizontal_line">
		</div>
		<div class="row fieldsSpacing">
			<!--=============GRID========== -->
			<div id="grid3" tabindex="-1" class="batchSchemeGrid"></div>
			<!--=============GRID========== -->
		</div>
		<div class="row">
			<h5>
				<span class="submenuBlue_heading">Scheme Settings</span>
			</h5>
			<hr class="horizontal_line">
		</div>
		<div class="row">
			<!-- popupActiveBatch -->
			<span class="col-md-2"> <input class="checkBox"
				type="checkbox" ng-model="showBatchScheme.batchSchemeLockFlag"> <span>Scheme Lock</span></span> 
		</div>
		<div class="row textRight fieldsBot_Spacing">
			<button class="btn okbtnSize" ng-click="saveScheme()">Save</button>
			<button class="btn canclebtnSize" ng-click="cancel()">Cancel</button>
		</div>
	</div>
</div>
',
