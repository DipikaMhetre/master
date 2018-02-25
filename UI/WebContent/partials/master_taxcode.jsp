
<div id="TaxCodeMaster" data-ng-controller="TaxCodeMasterCtrl" ng-init=init()>    
	<Section class="pageheader">
	    <nav class="mainnav">
	        <ul class="leftFloat_Menu" id="list-nav">
				<li> <a href="#" class="highlight_purple not_active">Tax Code</a></li>
				<li> <span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li> <a href="#" class="not_implemented_link not_active">Start Over</a> </li>
				<li> <a href="#" class="not_implemented_link not_active">Preview</a> </li>							
				<li> <a href="#" class="not_implemented_link not_active">Export</a> </li>
				<li> <a href="#" class="not_implemented_link not_active">Email</a> </li>							
				<li> <a href="#" title="Print" class="not_implemented_link not_active">Print</a> </li>
				<li> <a  name="save" tabindex="20">Save</a> </li>
				<li> <a >New</a> </li>		 					
				<li> <a href="#" title="Help" class="not_implemented_link not_active">Help</a> </li>
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
					<button type="button"
						class="btn btn-default flag_enable input-sm editable-btn"
						tabindex="20">
						<span class="fieldLeft_spacing_lg" ng-click="editable=!editable">Editable</span>
					</button>
				</li>
			</ul>
		</nav>
   	</Section>          		 
	 <nav class="navbar navbar_master1"></nav> 
	<div class="row container">
		<div class="col-md-2 sectiondivider">
		<div class="master_leftUpper">
			<div class="row masterPage_gridText">
				<span>Please select a Tax Code to view and update tax code details as required.</span>
			</div>
		</div>						
			<div class="row masterPage_fieldSpacing">
	    		
	    		 <!-- =============GRID============-->
	    		 <div id="grid" tabindex="-1" class="master_taxCode_Grid" ></div>
	    		 <!-- =============GRID============-->
			</div>		
		</div>
		<div class="col-md-10">
			<div class="">
				<div class="row masterTop_GrayStrip">
					<h6><span class="masterTop_StripText">Tax Code</span></h6>
				</div>
				<div class="row fieldsSpacing fields_headingSpacing" >
					<div class="col-md-5">
						<div class="row" >
							<div class=" col-md-2">
		          				<span class="control-label">Tax&nbsp;Code</span>
		       				</div>
		                    <div class="col-md-4">
								<input type="text" id="taxcode" class="form-control input-sm" tabindex="1" ng-model="showTaxCodeSelected.taxCode" value={{showTaxCodeSelected.taxCode}}>
							</div>
							 <div class=" col-md-2">
								<span class="control-label">Description</span>
							</div>
							<div class="col-md-4">
								<input type="text" class="form-control taxCode_desc input-sm" tabindex="2" ng-model="showTaxCodeSelected.taxDescription" value={{showTaxCodeSelected.taxDescription}}>
							</div>
		        		</div>
					</div>
				</div>		
				<div class="row fieldsSpacing">					
					<div class="col-md-5">
						<div class="row">
							<div class=" col-md-2">
		          				<span class="control-label">Vat&nbsp;Tax&nbsp;%</span>
		       				</div>
		                    <div class="col-md-4">
								<input type="text" id="vattax" name="field_int" class="form-control input-sm" tabindex="3" ng-model="showTaxCodeSelected.vatTax" value={{showTaxCodeSelected.vatTax}} >
							</div>
							<div class="col-md-2">
								<span class="control-label">LBT&nbsp;%</span>
							</div>
							<div class="col-md-4">
								<input type="text" id="lbt" name="field_int"  class="form-control input-sm taxCode_LBT" tabindex="4" ng-model="showTaxCodeSelected.vatTax" value={{showTaxCodeSelected.vatTax}}>
							</div>
		        		</div>
					</div>
					<div class="col-md-7">
						<div class="row">
	                        <div class=" col-md-3">
								<span class="control-label">Central&nbsp;Sales&nbsp;Tax&nbsp;%</span>
							</div>
							<div class="col-md-3">
								<input type="text" id="centralsaletax" name="field_int" class="form-control input-sm tacsCode_ipBoxSize2" tabindex="5" ng-model="showTaxCodeSelected.centralSalesTax" value={{showTaxCodeSelected.centralSalesTax}}>
							</div>
							<div class="col-md-3">
								<span class="control-label">General&nbsp;Sales&nbsp;Tax%</span>
							</div>
							<div class="col-md-3">
								<input type="text" id="generalsaletax" "field_int"  class="form-control not_implemented input-sm tacsCode_ipBoxSize3" value="" tabindex="6" disabled="disabled">
							</div>
						</div>
					</div>
					
				</div>
				<div class="row fields_headingSpacing">
					<h5><span class="submenuBlue_heading">Tax Code - Sales</span></h5>
					<hr class="horizontal_line">
				</div>	
				<div class="row fieldsSpacing">
					<div class="col-md-4 row_width1">
						<div class="row">
							<div class=" col-md-4">
		          				<span class="control-label">Separate&nbsp;Vat</span>
		       				</div>
		                    <div class="col-md-8">
								<select class="form-control input-sm tacsCode_ipBoxSize1" tabindex="7" ng-options="op.name for op in yesNoOptionList" ng-model="separateSalesVatOptSelected">									       
							         
						       </select>		
							</div>
		        		</div>
					</div>
					<div class="col-md-4 row_width2">
						<div class="row">
	                        <div class=" col-md-5">
								<span class="control-label">VAT&nbsp;on&nbsp;free</span>
							</div>
							<div class="col-md-7">
								<select class="form-control input-sm tacsCode_ipBoxSize2" tabindex="8" ng-options="op.name for op in yesNoOptionList" ng-model="salesVatOnFeeOptSelected">									       
							    
						       </select>	
							</div>
						</div>
					</div>
					<div class="col-md-4 row_width3">
						<div class="row">
							<div class="col-md-6">
								<span class="control-label ">VAT&nbsp;Charged&nbsp;on</span>
							</div>
							<div class="col-md-6">
								<select class="form-control input-sm tacsCode_ipBoxSize3" tabindex="9">									       
							         <option ></option>
							          <option ></option>
						       </select>	
							</div>
						</div>
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4 row_width1">
						<div class="row">
							<div class=" col-md-4">
		          				<span class="control-label">Sale&nbsp;A/C</span>
		       				</div>
		                    <div class="col-md-8">
								<input type="text" id="saleac" onclick="popup()" class="form-control input-sm tacsCode_ipBoxSize1" tabindex="10" ng-click="">
							</div>
		        		</div>
					</div>
					<div class="col-md-4 row_width2">
						<div class="row">
	                        <div class=" col-md-5">
								<span class="control-label">Sale&nbsp;VAT&nbsp;A/C</span>
							</div>
							<div class="col-md-7">
								<input type="text" id="salevatac" id=onclick="popup()" class="form-control input-sm tacsCode_ipBoxSize2" tabindex="11">
							</div>
						</div>
					</div>
					<div class="col-md-4 row_width3">
						<div class="row">
							<div class="col-md-6">
								<span class="control-label">Sale&nbsp;Return&nbsp;VAT&nbsp;A/C</span>
							</div>
							<div class="col-md-6">
								<input type="text" id="salereturnvat" onclick="popup()" class="form-control input-sm tacsCode_ipBoxSize3" tabindex="12">
							</div>
						</div>
					</div>
				</div>
				
				<div class="row fields_headingSpacing">
					<h5><span class="submenuBlue_heading">Tax Code - Purchase</span></h5>
					<hr class="horizontal_line">
				</div>	
				<div class="row fieldsSpacing">
					<div class="col-md-4 row_width1">
						<div class="row">
							<div class=" col-md-4">
		          				<span class="control-label">Separate&nbsp;Vat</span>
		       				</div>
		                    <div class="col-md-8">
								<select class="form-control input-sm tacsCode_ipBoxSize1" tabindex="13" ng-options="op.name for op in yesNoOptionList" ng-model="separatePurchaseVatOptSelected">									       
						       </select>	
							</div>
		        		</div>
					</div>
					<div class="col-md-4 row_width2">
						<div class="row">
	                        <div class=" col-md-5">
								<span class="control-label">VAT&nbsp;on&nbsp;free</span>
							</div>
							<div class="col-md-7">
								<select class="form-control input-sm tacsCode_ipBoxSize2" tabindex="14" ng-options="op.name for op in yesNoOptionList" ng-model="purchaseVatOnFeeOptSelected">									       
						       </select>	
							</div>
						</div>
					</div>
					<div class="col-md-4 row_width3">
						<div class="row">
							<div class="col-md-6">
								<span class="control-label">VAT&nbsp;Charged&nbsp;on</span>
							</div>
							<div class="col-md-6">
								<select class="form-control input-sm tacsCode_ipBoxSize3" tabindex="15">									       
							         
						       </select>
							</div>
						</div>
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4 row_width1">
						<div class="row">
							<div class=" col-md-4">
		          				<span class="control-label">Purchase&nbsp;A/C</span>
		       				</div>
		                    <div class="col-md-8">
								<input type="text" id="purchaseac" onclick="popup()" class="form-control input-sm tacsCode_ipBoxSize1" tabindex="16">
							</div>
		        		</div>
					</div>
					<div class="col-md-4 row_width2">
						<div class="row">
	                        <div class=" col-md-5">
								<span class="control-label">Purchase&nbsp;VAT&nbsp;A/C</span>
							</div>
							<div class="col-md-7">
								<input type="text" id="purchasevatac" onclick="popup()" class="form-control input-sm tacsCode_ipBoxSize2" tabindex="17">
							</div>
						</div>
					</div>
					<div class="col-md-4 row_width3">
						<div class="row">
							<div class="col-md-6">
								<span class="control-label">Purchase&nbsp;Return&nbsp;VAT&nbsp;A/C</span>
							</div>
							<div class="col-md-6">
								<input type="text" id="purchasereturnvat" onclick="popup()" class="form-control input-sm tacsCode_ipBoxSize3" tabindex="18">
							</div>
						</div>
					</div>
				</div>
				
				<div class="row fields_headingSpacing">
					<h5><span class="submenuBlue_heading">Tax Code - Settings</span></h5>
					<hr class="horizontal_line">
				</div>
				<div class="row">	
    			 	<span class="col-md-2">
		       			<input class="checkBox" type="checkbox" checked="on" tabindex="19">
		       			<span>Active</span>
		       		</span>
		   			       		
		       	</div>			       					  
			</div>
			 
		</div>
	</div>
	  		     
</div>  
<script  type="text/ng-template" id="accountPopup.html">
<div class="grayBG" ng-init=init() >
<div id="grid3" tabindex="-1" style="width: 100%; height: 200px;"></div>
</div>
</script>
 




	   