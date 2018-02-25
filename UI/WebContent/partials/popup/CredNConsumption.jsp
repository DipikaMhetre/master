<div id="Consumption"  class="purpleaid" ng-init="init()">
	<div class="container ConsumptionDetails">
		<div class="row topblueStrip">
			<h6 class="fieldsTop_Spacing">
				<span class="topblueStripText">Consumption Details</span> <img alt=""
					ng-click="cancel()"class="close_popupImage" tabindex="2" src="images/close_popup.png">
			</h6>
		</div>
		<div class="row fieldsSpacing fieldsTop_Spacing">	
		<div class="col-md-7"></div>		
			<div class="col-md-5">
				<div class="row">
					<div class="col-md-5">
						<span class="control-label ">Consumption&nbsp;Status</span>
					</div>
					<div class="col-md-7">
						<input type="text" class="form-control input-sm" readonly="readonly" ng-model="consumptionStatus">
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsBot_Spacing fieldsTop_Spacing">
			<div class="col-md-12">
				<!--=============GRID==========  -->
				<div id="grid5" tabindex="-1" class=goodsreceiptCreditDebitNoteGrid></div>
				<!--=============GRID==========  -->
			</div>
		</div>
		<div class="row Ok_Cancle_BtnPos_Popup">
			<div class="col-md-12">			
				<button class="btn canclebtnSize" tabindex="39" ng-click="cancel()">Cancel</button>	
				<button class="btn okbtnSize" tabindex="39" ng-click="cancel()">Ok</button>
			</div>
		</div>
	</div>
	<script type="text/javascript">
	if(typeof w2ui.grid5 !=="undefined"){
		w2ui.grid5.destroy();
	}
	$(function() {
		$('#grid5').w2grid({
			name : 'grid5',
			show : {
				
			},
			columns : [ 
			            { field : 'consumptionDetailsSaleDate', caption : 'Sale Date', size : '15%'},
			            { field: 'consumptionDetailsSaleId', caption: 'Sale Invoice', size: '15%'},
			            { field: 'consumptionDetailsProductCount', caption: 'Sale Product Count', size: '15%'},
			            { field: 'consumptionDetailsCNconsumptionAmt', caption: 'CN Consumption Amount', size: '20%'},
			            { field: 'consumptionDetailsCNremainingAmt', caption: 'CN Remaining Amount', size: '15%'},
			            { field: 'consumptionDetailsSaleUser', caption: 'Sale by User', size: '20%'},
			            { field: 'recid',hidden:true},
			            { field: 'consumptionDetailsStatus',hidden:true},
			            
			            
			          ],			
			records :  [		            	                   		            
						]								
		});
	});
</script>
	

</div>