<div ng-init="init">
      			 <div class="modal-header topblueStrip">		
            		<h4 class="modal-title topblueStripText">Enter Quantity</h4>
       			 </div>
        		 <div class="modal-body">
           			<div class="">
					<!---<div class="container lightBox_quantity">--->			
					<div class="row">
						<h5><span class="submenuBlue_heading">General</span></h5>
						<hr class="horizontal_line">
						<div class="col-md-6 fieldsSpacing">
				 			<div class="form-group">
          						<span class="col-md-2 control-label">Product</span>
                        		<div class="col-md-10">
                            		<input type="text" class="form-control input-sm" readonly="readonly" value='{{record.productName}}' ng-modal=record.productName >
          				        </div>
        					</div>
       			 		</div>
        				<div class="col-md-6 fieldsSpacing">
        					<div class="form-group">
          						<span class="col-md-2 control-label">Remark</span>
                        		<div class="col-md-10">
                            		<input type="text" class="form-control input-sm" readonly="readonly" value=''>
          						</div>
        					</div>
        				</div>
					</div>
					<div class="row">
						<div class="col-md-3">
							<div class="form-group">
          						<span class="col-md-4 lable_position control-label">Type</span>
                        		<div class="col-md-8">
                            		<input type="text" class="form-control input-sm fieldLeft_spacing" readonly="readonly" value='{{record.type}}' ng-model=record.type >
          						</div>
        					</div>
						</div>
				<div class="col-md-3">
					<div class="form-group">
          				<span class="col-md-4 lable_position control-label">Division</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm" readonly="readonly" value='{{record.division}}' ng-model=record.division >
          				</div>
        			</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
          				<span class="col-md-4 lable_position control-label">Pack</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm fieldLeft_spacing" readonly="readonly" value='{{record.pack}}'>
          				</div>
        			</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
          				<span class="col-md-4 lable_position control-label">Box</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm textRight" readonly="readonly" value='{{record.box}}'>
          				</div>
        			</div>
				</div>
			</div>
			<div class="row fieldsTop_Spacing">
				<h5><span class="submenuBlue_heading">Stock&nbsp;&&nbsp;Purchase&nbsp;History</span></h5>
				<hr class="horizontal_line">
			</div>
			<div class="row fieldsSpacing">
				<div class="col-md-3">
        			<div class="form-group">
          				<span class="col-md-4 lable_position control-label">Last&nbsp;sale</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm fieldLeft_spacing textRight not_implemented" readonly="readonly" value='{{record.lastSale}}'>
          				</div>
        			</div>
        		</div>
        		<div class="col-md-3">
        			<div class="form-group">
          				<span class="col-md-4 lable_position left control-label">Current&nbsp;Sale</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm textRight not_implemented" readonly="readonly" value='{{record.currSale}}'>
          				</div>
        			</div>
        		</div>
        		<div class="col-md-3">
        			<div class="form-group">
          				<span class="col-md-4  lable_position control-label">Stock</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm fieldLeft_spacing textRight not_implemented" readonly="readonly" value='{{record.stock}}'>
          				</div>
        			</div>
        		</div>
        		<div class="col-md-3">
        			<div class="form-group">
          				<span class="col-md-4 lable_position control-label">Transit</span>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm numberField not_implemented" readonly="readonly" value='{{record.transit}}'>
          				</div>
        			</div>
        		</div>
       		</div>
        		<div class="row">
        			<div class="col-md-3">
	        			<div class="form-group">
	          				<span class="col-md-4 control-label">Last&nbsp;Purchase</span>
	                        <div class="col-md-8">
								<div class="input-group">
	                            <input type="text" class="form-control input-sm numberField fieldLeft_spacing quantity_textBoxRs not_implemented" readonly="readonly" value='{{record.lastPurRate}}'>
	          					<span class="input-group-addon input-sm">Rs.</span>
								</div>
							</div>
	        			</div>
	        		</div>
	        		<div class="col-md-3">
	        			<div class="form-group">
	          				<span class="col-md-4 control-label">MRP</span>
	                        <div class="col-md-8">
	                            <div class="input-group">
								  	<input type="text" class="form-control input-sm numberField quantity_textBoxRs" readonly ng-model="record.mrp" value={{record.mrp}}   >
								  	<span class="input-group-addon input-sm">Rs.</span>
								</div>	
	          				</div>
	        			</div>
	        		</div>	
       		 	</div>
       		 	<div class="row">
	          		<span class=" col-md-2 control-label saleHistory">Sale&nbsp;History</span>
        		</div>
        		<div class="row container">
	          		 <table class="table table-bordered tablePos not_implemented">
				        <thead>
				          <tr>
				            <th>JUL</th>
				            <th>AUG</th>
				            <th>SEP</th>
				            <th>OCT</th>
				            <th>NOV</th>
				            <th>DEC</th>
				            <th>JAN</th>
				            <th>FEB</th>
				            <th>MAR</th>
				            <th>APR</th>
				            <th>MAY</th>
				            <th>JUN</th>
				          </tr>
				        </thead>
				        <tbody>
				          <tr class="tr_pos">
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				          </tr>
				        </tbody>
				      </table>
        		</div>
        		<div class="row">
				<h5><span class="submenuBlue_heading">Enter Quantity</span></h5>
				<hr class="horizontal_line">
			</div>
			<div class="row">
				<div class="col-md-3">
        			<div class="form-group">
          				<span class="col-md-4 control-label">Quantity</span>
                        <div class="col-md-8">
                            <input ng-disabled="!editable" id= "quantitypopup"  type="text" class="form-control input-sm textRight fieldLeft_spacingt"  tabindex="1" value={{record.qty}} ng-model=record.qty onfocus="Purplevalidator('quantitypopup',3,'CompanyMaster','')" onclick="Purplevalidator('quantitypopup',3,'CompanyMaster','')" onchange="Purchasewhitespace()" onkeypress="myFunction()">
          				</div>
        			</div>
        		</div>
        		<div class="col-md-3">
        			<div class="form-group">
          				<span class="col-md-4 control-label">Free</span>
                        <div class="col-md-8">
                            <input ng-disabled="!editable" id="schemepopup"  type="text" class="form-control input-sm textRight"  tabindex="2" value={{record.scheme}} >
          				</div>
        			</div>
        		</div>
        		<div class="col-md-3">
        			<div class="form-group">
          				<span class="col-md-4 control-label">Value</span>
                        <div class="col-md-8">
							<div class="input-group">
                            <input id="valuepopup" required type="text" class="form-control orangeBG input-sm textRight fieldLeft_spacing quantity_textBoxRs" readonly="readonly" value={{record.value}}>
          					<span class="input-group-addon input-sm">Rs.</span>
							</div> 
						</div>
        			</div>
        		</div>
       		</div>      		
		<!---</div>-->
		
		</div>
        </div>
        <div class="modal-footer">            
            <button class="btn canclebtnSize" ng-click="cancel()">Cancel</button>
            <button ng-show="!editable" class="btn okbtnSize" ng-click="cancel()">OK</button>
			<button ng-show="editable" id="okButton" class="btn okbtnSize" ng-enter="ok(record)" ng-click="ok(record)">Save</button>
        </div>
<script type="text/javascript">
$( document ).ready(function() {
	    	  // Handler for .ready() called.
	    		$('#quantitypopup').allowNumbersOnly();
	    		$('#schemepopup').allowNumbersOnly();
	    		$('#valuepopup').allowNumbersOnly();
});
</script>
</div>