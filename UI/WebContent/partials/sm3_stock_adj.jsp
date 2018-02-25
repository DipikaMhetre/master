<div ng-init="init()" id="SM_StockAdjustment" class="grayBG">
	<div class="container stockManagerPopup_s">
		<div class="row topblueStrip">
			<h6 class="fieldsTop_Spacing">
				<span class="topblueStripText">Stock Adjustments</span>
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
						<input type="text" class="form-control input-sm" readonly
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
						<input type="text" class="form-control input-sm" readonly
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
						<input type="text" class="form-control input-sm"
							readonly="readonly" ng-model="popupRecievedBatch.freeStock"
							value={{popupRecievedBatch.freeStock}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<h5>
				<span class="submenuBlue_heading">Batch Stock Adjustments</span>
			</h5>
			<hr class="horizontal_line">
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Expiry</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							ng-model="popupRecievedBatch.expiry"
							value={{popupRecievedBatch.expiry}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row stockAdjORpos">
			<div class="col-md-offset-6">
				<span>OR</span>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Breakage</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							ng-model="popupRecievedBatch.breakage"
							value={{popupRecievedBatch.breakage}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row stockAdjORpos">
			<div class="col-md-offset-6">
				<span>OR</span>
			</div>
		</div>
		<div class="row fieldsBot_Spacing">
			<div class="col-md-6">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Co.&nbsp;Transfer</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							ng-model="popupRecievedBatch.cotransfer"
							value={{popupRecievedBatch.cotransfer}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsSpacing">
			<div class=" col-md-2 ">
				<span class="control-label">Remarks</span>
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
				type="checkbox" checked="on"> <span>Active</span>
			</span> <span class="col-md-2"> <input class="checkBox"
				type="checkbox"> <span>Locked</span>
			</span>
		</div>
		<div class="row textRight fieldsBot_Spacing">
			<button class="btn okbtnSize btn-modify" ng-click="saveStockAdjust()">Adjust
				Stock</button>
			<button class="btn canclebtnSize" ng-click="cancel()">Cancel</button>
		</div>
	</div>
</div>
