<div id="debitCreditNoteReasons" data-ng-controller="debitCreditNoteReasonsCtrl" ng-init=init()> 
            <Section class="pageheader">
                    <nav class="mainnav">
                        <ul class="leftFloat" id="list-nav">
							<li >
								<a href="#" title="Rajesh Mahale" class="highlight_purple not_active">Debit/Credit Note Reasons</a>
                            </li>
                             <li >
								<span class="glyphicon glyphicon-play newShowGlyphicon"></span>
		                   	</li>
							<li >
								<a href="#" class="not_implemented_link not_active">Start Over</a>
                            </li>											
							<li >
								<a href="#" title="Save">Save</a>
                            </li>
                            <li >
								<a href="#" title="Save">New</a>
                            </li>							
							<li >
								<a href="#" title="Help" class="not_implemented_link not_active">Help</a>
                            </li>
                        </ul>
                        	<ul class="rightFloat_Menu">
				<!-- <li><a href="#" title="Todays Date" class="highlight_purple not_active"><span id='clockbox' ></span></a></li> -->
	        	<li><!-- <a href="#">Editable</a>  -->
	        		<button type="button" class="btn btn-default input-sm_btn btn_small PO_pos goldBG">Editable</button>
	        	</li>
	        	<li>
					<button type="button" class="btn btn_ToBeDone">To be done</button>
				</li>
	        </ul>
                    </nav>
           		 </Section> 
           		 <nav class="navbar navbar_master1">				
				</nav>        
				<div class="row container">
					<div class="col-md-2 sectiondivider">
						<div class="master_leftUpper">
							<div class="row masterPage_gridText">
								<span>Please select a Reason Code to view and update reason code details as required.</span>
							</div>
						</div>						
						<div class="row masterPage_fieldSpacing">					
				    		 <!-- =============GRID============-->
				    		 <div id="grid" tabindex="-1" class="debitCreditNoteReason_LeftGride"></div>
				    		 <!-- =============GRID============-->
						</div>
						<div class="row master_filterPos group-inline">
							<a  ng-click="showPopup()" title="Filter" >Filter(<span ng-if="filterStatus=='on'" id="filterStatusOn" class="purpleText">{{filterStatus}}</span><span ng-if="filterStatus=='off'" id="filterStatusOff" class="purpleText">{{filterStatus}}</span>)
							</a>
							<button type="button" class="btn btn-default"></button>
						</div>					
					</div>
					
					<div class="col-md-10">
						<div class="">
							<div class="row masterTop_GrayStrip">
								<h6><span class="masterTop_StripText">Debit/Credit Note Reason Codes&nbsp;-&nbsp;<span class="masterHeading">New</span></span></h6>
							</div>
							<div class="row fields_headingSpacing fieldsSpacing">								
								<div class="form-group">
			          				<span class="col-md-1 control-label">Code</span>
			                        <div class="col-md-3">
			                            <input type="text"  class="form-control input-sm" >
			          				</div>
		        				</div>				
							</div>
							<div class="row fields_headingSpacing">
								<h5><span class="submenuBlue_heading">Reason Code Details</span></h5>
								<hr class="horizontal_line">
							</div>
							<div class="row fieldsSpacing">								
								<span class="col-md-1 control-label">Description</span>
			                        <div class="col-md-7">
			                            <input type="text"  class="form-control input-sm" >
			          				</div>	
			          				<span class="col-md-1 control-label">Available&nbsp;for</span>
			                        <div class="col-md-3">
			                            <select class="form-control input-sm db_cr_noteResonsCode_avlForPos"> 
			                            	<option>Credit Note</option>
			                            	<option>Debit Note</option>
			                            	<option>Both</option>														
						   	 			</select>
			          				</div>
		        							
							</div>
							<div class="row fieldsSpacing">								
								<div class="form-group">
			          				<span class="col-md-1 control-label">Remark</span>
			                        <div class="col-md-11">
			                             <textarea rows="4" cols="" class="textarea_fixSize"></textarea>
			          				</div>
		        				</div>				
							</div>
							
				       		<div class="row fields_headingSpacing">
								<h5><span class="submenuBlue_heading">Reason Code Settings</span></h5>
								<hr class="horizontal_line">
							</div>
							<div class="row">
				       			<span class="col-md-2">
					       			<input class="checkBox" checked="on" type="checkbox" tabindex="15" >
					       			<span>Active</span>
					       		</span>
				       		</div>
						</div>
					</div>					
			    </div>				 
    	    </div>
    	    <script type="text/ng-template" id="productFilter.html">

<div class="" ng-init=init()>
	<div class="container lightBox_masterPrductFilter">
		<div class="row topblueStrip ">
			<h6>
				<span class="topblueStripText">FILTERS</span>
			</h6>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<span> 
					<input type="checkbox"> 
					<span class="chechBox_lablePos">Credit Note</span>
				</span>
			</div>
		</div>	
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<span> 
					<input type="checkbox"> 
					<span class="chechBox_lablePos">Debit Note</span>
				</span>
			</div>
		</div>	
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<span> 
					<input type="checkbox"> 
					<span class="chechBox_lablePos">Both</span>
				</span>
			</div>
		</div>
        <div class="row fields_headingSpacing">
			<div class=" col-md-3">
				<span> 
					<input type="checkbox"> 
					<span class="chechBox_lablePos">Active</span>
				</span>
			</div>
		</div>	
		<div class="row fieldsTop_Spacing ">
			<div class=" col-md-3">
				<a ng-click="clearAllFilters();" title="Remove Product"
					class=" clearAllFilterPos">CLEAR&nbsp;ALL</a>
			</div>
		</div>															
		<div class="row fieldsTop_Spacing fieldsBot_Spacing">
			<div class=" col-md-3">
				<span>
					<div class=" col-md-5 ContactsManager_FilterBtnPos">
						<button type="button" class="canclebtnSize">Cancel</button>
					</div>
					<div class=" col-md-5 ">
						<button type="button" ng-click="ok(filter)" class="okbtnSize">OK</button>
					</div>					
				</span>
			</div>
		</div>
	</div>

</div>

</script>
    	    
    	    <script type="text/javascript">
$(function () {
    $('#grid').w2grid({ 
        name: 'grid', 
        header: 'List of Names',
        show: {
            toolbar: true
        },
        columns: [                
            { field: 'fname', caption: 'Reason Code', size: '100%' },         
        ],
        records: [
        ]
    });    
});
</script>