
<div onload="myrender()" ng-init="init()" id="SM_TransMerge"
	class="grayBG">
	<div class="container stockManagerPopup_TMB">
		<div class="row topblueStrip">
			<h6 class="fieldsTop_Spacing">
				<span class="topblueStripText">Transfer Merge Batch</span>
			</h6>
		</div>
		<div class="row">
			<h5>
				<span class="submenuBlue_heading">Product</span>
			</h5>
			<hr class="horizontal_line">
		</div>
		<div class="row fieldsSpacing">
			<div class=" col-md-2 TMB_row_xs">
				<span class="control-label">Product</span>
			</div>
			<div class="col-md-10 TMB_row_xl">
				<input type="text" class="form-control input-sm" readonly="readonly"
					ng-model="popupRecievedBatch.grProductBatchProductName"
					value="{{popupRecievedBatch.grProductBatchProductName}}">
			</div>
		</div>
		<div class="row">
			<h5>
				<span class="submenuBlue_heading">Batch Details</span>
			</h5>
			<hr class="horizontal_line">
		</div>
		<div class="row fieldsSpacing">
			<div class=" col-md-4 textCenter">
				<span class="control-label highlight_LightGrey">SOURCE</span>
			</div>
			<div class=" col-md-4 textCenter">
				<span class="control-label highlight_gold">BEFORE TRANSFER</span>
			</div>
			<div class=" col-md-4 textCenter">
				<span class="control-label highlight_LightGrey">TARGET</span>
			</div>
		</div>
		<div class="row fieldsBot_Spacing">
			<div class=" col-md-5 smTransferMergeBatchRow1">
				<div class="row fieldsSpacing ">
					<div class="form-group">
						<span class="col-md-4 TMB_row_sm control-label">Batch#</span>
						<div class="col-md-8 TMB_row_lg">
							<input type="text" class="form-control input-sm"
								readonly="readonly" ng-model="sourceBatch.grProductBatchNo"
								value="{{sourceBatch.grProductBatchNo}}">
						</div>
					</div>
				</div>
				<div class="row fieldsSpacing ">
					<div class="form-group">
						<span class="col-md-4 TMB_row_sm control-label">Expiry</span>
						<div class="col-md-8 TMB_row_lg">
							<input type="text" class="form-control input-sm"
								readonly="readonly"
								ng-model="sourceBatch.grProductBatchExpiryDate"
								value="{{sourceBatch.grProductBatchExpiryDate}}">
						</div>
					</div>
				</div>
				<div class="row fieldsSpacing ">
					<div class="form-group">
						<span class="col-md-4 TMB_row_sm control-label">Stock</span>
						<div class="col-md-8 TMB_row_lg">
							<input type="text" class="form-control input-sm"
								readonly="readonly" ng-model="sourceBatch.stock"
								value="{{sourceBatch.stock}}">
						</div>
					</div>
				</div>
				<div class="row fieldsSpacing ">
					<div class="form-group">
						<span class="col-md-4 TMB_row_sm control-label">Free&nbsp;Stock</span>
						<div class="col-md-8 TMB_row_lg">
							<input type="text" class="form-control input-sm"
								readonly="readonly" ng-model="sourceBatch.freeStock"
								value="{{sourceBatch.freeStock}}">
						</div>
					</div>
				</div>
			</div>
			<div
				class="col-md-1 transferMergeBatch_sectionline3 smTransferMergeBatchRow2"></div>
			<div class="col-md-1 smTransferMergeBatchRow2"></div>
			<div class=" col-md-5 smTransferMergeBatchRow1">
				<div class="row fieldsSpacing ">
					<div class="form-group">
						<span class="col-md-4 TMB_row_sm control-label">Batch#</span>
						<div class="col-md-8 TMB_row_lg">
							<input type="text" class="form-control input-sm"
								ng-model="targetBatch.grProductBatchNo"
								value="{{targetBatch.grProductBatchNo}}"
								ng-focus="getTargetBatch()">
						</div>
					</div>
				</div>
				<div class="row fieldsSpacing ">
					<div class="form-group">
						<span class="col-md-4 TMB_row_sm control-label">Expiry</span>
						<div class="col-md-8 TMB_row_lg">
							<input type="text" class="form-control input-sm"
								readonly="readonly"
								ng-model="targetBatch.grProductBatchExpiryDate"
								value="{{targetBatch.grProductBatchExpiryDate}}">
						</div>
					</div>
				</div>
				<div class="row fieldsSpacing ">
					<div class="form-group">
						<span class="col-md-4 TMB_row_sm control-label">Quantity</span>
						<div class="col-md-8 TMB_row_lg">
							<input type="text" class="form-control input-sm"
								readonly="readonly" ng-model="targetBatch.stock"
								value="{{targetBatch.stock}}">
						</div>
					</div>
				</div>
				<div class="row fieldsSpacing ">
					<div class="form-group">
						<span class="col-md-4 TMB_row_sm control-label">Free&nbsp;Stock</span>
						<div class="col-md-8 TMB_row_lg">
							<input type="text" class="form-control input-sm"
								readonly="readonly" ng-model="targetBatch.freeStock"
								value="{{targetBatch.freeStock}}">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsSpacing">
			<div class=" col-md-4"></div>
			<div class=" col-md-4 textCenter">
				<span class="control-label highlight_gold">TRANSFER QUANTITY</span>
			</div>
		</div>
		<div class="row fieldsBot_Spacing">
			<div class=" col-md-5 smTransferMergeBatchRow1">
				<div class="row ">
					<div class="form-group">
						<span class="col-md-4 TMB_row_sm control-label">Remove&nbsp;Stock</span>
						<div class="col-md-4 TMB_row_sm1">
							<input type="text" class="form-control input-sm"
								ng-model="removeStock" value="{{removeStock}}">
						</div>
						<div class="col-md-4 TMB_row_sm1">
							<input type="text" class="form-control input-sm"
								ng-model="removeFreeStock" value="{{removeFreeStock}}">
						</div>
					</div>
				</div>
				<div class="row ">
					<div class="form-group">
						<div class="col-md-4 TMB_row_sm"></div>
						<div class="col-md-4 TMB_row_sm1 textCenter text_inputfieldPos">
							<span class="highlight_LightGrey">Quantity</span>
						</div>
						<div class="col-md-4 TMB_row_sm1 textCenter text_inputfieldPos">
							<span class="highlight_LightGrey">Free&nbsp;Stock</span>
						</div>
					</div>
				</div>
			</div>
			<div
				class="col-md-1 transferMergeBatch_sectionline1 smTransferMergeBatchRow2"></div>
			<div class="col-md-1 smTransferMergeBatchRow2"></div>
			<div class=" col-md-5 smTransferMergeBatchRow1">
				<div class="row ">
					<div class="form-group">
						<span class="col-md-4 TMB_row_sm control-label">Add&nbsp;Stock</span>
						<div class="col-md-4 TMB_row_sm1">
							<input type="text" class="form-control input-sm"
								ng-model="removeStock" value="{{removeStock}}">
						</div>
						<div class="col-md-4 TMB_row_sm1">
							<input type="text" class="form-control input-sm"
								ng-model="removeFreeStock" value="{{removeFreeStock}}">
						</div>
					</div>
				</div>
				<div class="row ">
					<div class="form-group">
						<div class="col-md-4 TMB_row_sm"></div>
						<div class="col-md-4 TMB_row_sm1 textCenter text_inputfieldPos">
							<span class="highlight_LightGrey">Quantity</span>
						</div>
						<div class="col-md-4 TMB_row_sm1 textCenter text_inputfieldPos">
							<span class="highlight_LightGrey">Free&nbsp;Stock</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsSpacing">
			<div class=" col-md-4"></div>
			<div class=" col-md-4 textCenter">
				<span class="control-label highlight_gold">AFTER TRANSFER</span>
			</div>
		</div>
		<div class="row fieldsSpacing">
			<div class=" col-md-5 smTransferMergeBatchRow1">
				<div class="row fieldsSpacing ">
					<div class="form-group">
						<span class="col-md-4 TMB_row_sm control-label">Quantity</span>
						<div class="col-md-8 TMB_row_lg">
							<input type="text" class="form-control input-sm"
								readonly="readonly" ng-model="sourceNewStock"
								value="{{sourceNewStock}}">
						</div>
					</div>
				</div>
				<div class="row fieldsSpacing ">
					<div class="form-group">
						<span class="col-md-4 TMB_row_sm control-label">Free&nbsp;Stock</span>
						<div class="col-md-8 TMB_row_lg">
							<input type="text" class="form-control input-sm"
								readonly="readonly" ng-model="sourceNewFreeStock"
								value="{{sourceNewFreeStock}}">
						</div>
					</div>
				</div>
			</div>
			<div
				class="col-md-1 transferMergeBatch_sectionline2 smTransferMergeBatchRow2"></div>
			<div class="col-md-1 smTransferMergeBatchRow2"></div>
			<div class=" col-md-5 smTransferMergeBatchRow1">
				<div class="row fieldsSpacing ">
					<div class="form-group">
						<span class="col-md-4 TMB_row_sm control-label">Quantity</span>
						<div class="col-md-8 TMB_row_lg">
							<input type="text" class="form-control input-sm"
								readonly="readonly" ng-model="targetNewStock"
								value="{{targetNewStock}}">
						</div>
					</div>
				</div>
				<div class="row fieldsSpacing ">
					<div class="form-group">
						<span class="col-md-4 TMB_row_sm control-label">Free&nbsp;Stock</span>
						<div class="col-md-8 TMB_row_lg">
							<input type="text" class="form-control input-sm"
								readonly="readonly" ng-model="targetNewFreeStock"
								value="{{targetNewFreeStock}}">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsBot_Spacing">
			<div class=" col-md-2 TMB_row_xs">
				<span class="control-label">Remarks</span>
			</div>
			<div class="col-md-10 TMB_row_xl">
				<input type="text" class="form-control input-sm">
			</div>
		</div>
		<div class="row textRight fieldsBot_Spacing">
			<button class="btn okbtnSize btn-modify" ng-click="transfer()">Transfer</button>
			<button class="btn canclebtnSize" ng-click="cancel()">Cancel</button>
		</div>
	</div>
</div>
