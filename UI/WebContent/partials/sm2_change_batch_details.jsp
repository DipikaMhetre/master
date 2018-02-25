'
<div ng-init="init()" id="SM_ChangeBatchDetails" class="grayBG">
	<div class="container stockManagerPopup_s">
		<div class="row topblueStrip">
			<h6 class="fieldsTop_Spacing">
				<span class="topblueStripText">Change Batch Details</span>
			</h6>
		</div>
		<div class="row">
			<h5>
				<span class="submenuBlue_heading">Batch Summary</span>
			</h5>
			<hr class="horizontal_line">
		</div>
		<div class="row fieldsSpacing">
			<div class=" col-md-2">
				<span class="control-label">Product</span>
			</div>
			<div class="col-md-10">
				<input type="text" class="form-control input-sm" readonly="readonly"
					ng-model="popupRecievedBatch.grProductBatchProductName"
					value={{popupRecievedBatch.grProductBatchProductName}}>
			</div>
		</div>
		<div class="row fieldsSpacing">
			<div class="col-md-6">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Batch#</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							ng-model="popupRecievedBatch.grProductBatchNo"
							value={{popupRecievedBatch.grProductBatchNo}}>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Expiry</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							ng-model="popupRecievedBatch.grProductBatchExpiryDate"
							value={{popupRecievedBatch.grProductBatchExpiryDate}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsSpacing">
			<div class="col-md-6">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Stock/Quantity</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							readonly="readonly" ng-model="popupRecievedBatch.stock"
							value={{popupRecievedBatch.stock}}>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Free&nbsp;Stock</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm" value=""
							readonly="readonly" ng-model="popupRecievedBatch.freeStock"
							value={{popupRecievedBatch.freeStock}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<h5>
				<span class="submenuBlue_heading">Batch Details</span>
			</h5>
			<hr class="horizontal_line">
		</div>
		<div class="row fieldsSpacing">
			<div class="col-md-6">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">MRP</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							ng-model="popupRecievedBatch.grProductBatchMRP"
							value={{popupRecievedBatch.grProductBatchMRP}}>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Trade</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							ng-model="popupRecievedBatch.grProductBatchTrade"
							value={{popupRecievedBatch.grProductBatchTrade}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsSpacing">
			<div class="col-md-6">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Purchase&nbsp;Rate</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							ng-model="popupRecievedBatch.grProductBatchPurchaseRate"
							value={{popupRecievedBatch.grProductBatchPurchaseRate}}>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Selling&nbsp;Rate</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							ng-model="popupRecievedBatch.grProductBatchSellRate"
							value={{popupRecievedBatch.grProductBatchSellRate}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsSpacing">
			<div class="col-md-6">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Margin&nbsp;%</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							value="{{((popupRecievedBatch.grProductBatchSellRate - popupRecievedBatch.grProductBatchPurchaseRate )/popupRecievedBatch.grProductBatchPurchaseRate) * 100}}"
							readonly="readonly">
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsSpacing">
			<div class=" col-md-2 ">
				<span class="control-label">Remark</span>
			</div>
			<div class="col-md-10">
				<input type="text" class="form-control input-sm" tabindex="4"
					ng-model="popupRecievedBatch.grProductBatchRemark"
					value={{popupRecievedBatch.grProductBatchRemark}}>
			</div>
		</div>
		<div class="row">
			<h5>
				<span class="submenuBlue_heading">Batch Settings</span>
			</h5>
			<hr class="horizontal_line">
		</div>
		<div class="row">
			<span class="col-md-2"> <input class="checkBox"
				type="checkbox"
				ng-model="popupRecievedBatch.grProductBatchActiveFlag"
				ng-value={{popupRecievedBatch.grProductBatchActiveFlag}}> <span>Active</span>
			</span> <span class="col-md-2"> <input class="checkBox"
				type="checkbox"
				ng-model="popupRecievedBatch.grProductBatchProductLockFlag"
				ng-value={{popupRecievedBatch.grProductBatchProductLockFlag}}>
				<span>Locked</span>
			</span>
		</div>
		<div class="row textRight fieldsBot_Spacing">
			<button class="btn okbtnSize btn-modify"
				ng-click="saveBatchChanged()">Modify</button>
			<button class="btn canclebtnSize" ng-click="cancel()">Cancel</button>
		</div>
	</div>
</div>
',
