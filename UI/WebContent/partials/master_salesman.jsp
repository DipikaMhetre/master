<div id="SalesmanMaster" data-ng-controller="SalesmanMasterCtrl" ng-init=init()>    
        <Section class="pageheader">
        	<nav class="mainnav">           	
                 <ul class="leftFloat" id="list-nav">
					<li >
						<a href="#puchase" class="highlight_purple not_active">Salesman Master</a>
                    </li>
                    <li >
						<span class="glyphicon glyphicon-play newShowGlyphicon"></span>
                   	</li>
					<li >
						<a href="#" class="not_implemented_link not_active">Start Over</a>
                     </li>							
					<li >
						<a href="#" class="not_implemented_link not_active">Export</a>
                    </li>							
					<li >
						<a href="#" title="Print" class="not_implemented_link not_active">Print</a>
                   </li>
					<li >
						<a title="Save" data-ng-click=saveSalesmanMaster(showSalesmanSelected) tabindex="24">Save</a>
                    </li>
                    <li >
						<a title="New"  data-ng-click=newSalesmanMaster()>New</a>
                    </li>							
					<li >
						<a href="#" title="Help" class="not_implemented_link not_active">Help</a>
                     </li>
                  </ul>
             </nav>
      	</Section>         		 
       	<nav class="navbar navbar-default navbar_master">
			<div class="container">
				<ul class="nav navbar-nav master_nav_element_pos">
		        	<li><a href="#masterArea">Area</a></li>		        	
		        	<li><a href="#masterRoute">Route</a></li>
		        	<li class="active"><a href="#masterSalesman">Salesman</a></li>
		        </ul>
			</div>
		</nav>
		<div class="row container">
			<div class="col-md-2 sectiondivider">
				<div class="master_leftUpper">
					<!-- <div class="row">
						<div class="input-group masterPage_grid">
							<input type="text" class="form-control purchase_search" id="mySearch" placeholder="Search" tabindex="1">
							<span class="input-group-addon addonBG input_addon_pad">
								<span><button  class="btn btnPad btn-default glyphicon glyphicon-search " type="button"></button> </span>
							</span>
						</div>
					</div> -->
					<div class="row masterPage_gridText">
							<span>If you select a salesman from the list it show the details of salesman.</span>
						</div>
				</div>						
				<div class="row masterPage_fieldSpacing">
					
				     		 <!-- =============GRID============-->
            <div id="grid" tabindex="-1" class="gridSizeLeft2"></div>
            <!-- =============GRID============-->
			     	
			     	
			     	
				</div>						
			</div>
			<div class="col-md-10">
				<div class="">
					<div class="row masterTop_GrayStrip">
						<h6><span class="masterTop_StripText">Salesman&nbsp;-&nbsp;<span class="masterHeading">{{showSalesmanSelected.salesmanName}}</span><span ng-show="!showSalesmanSelected.salesmanName" class="masterHeading">New</span></span></h6>
					</div>
					<div class="row fields_headingSpacing">									
						<div class="col-md-3">
							<div class="row">
			          			<span class="col-md-4 control-label">Salesman&nbsp;ID</span>
		                        <div class="col-md-8">
		                            <input type="text" readonly="readonly" class="form-control input-sm Master_feildPos" value={{showSalesmanSelected.salesmanID}} data-ng-model=showSalesmanSelected.salesmanID >
		          				</div>
		        			</div>						
						</div>
						<div class="col-md-3">
							<div class="row">
								<div class="col-md-4 ">
			          				<span class="control-label">User&nbsp;ID</span>
			          			</div>
		                        <div class="col-md-8">
		                            <select class="form-control input-sm not_implemented" disabled="disabled" tabindex="1">									        	
									         <option></option>
									         <option></option>
								      </select>		
		          				</div>
		        			</div>								
						</div>
						<div class="col-md-6">
							<div class="row">
								<div class="col-md-3">
			          				<span class="control-label">Salesman&nbsp;Name</span>
			          			</div>
		                        <div class="col-md-6">
		                            <input type="text" required="required" id="salesmanname" class="form-control input-sm" value={{showSalesmanSelected.salesmanName}} data-ng-model=showSalesmanSelected.salesmanName tabindex="2">
		          				</div>
		        			</div>								
						</div>
					</div>
					<div class="row">
						<h5><span class="submenuBlue_heading ">Salesman Contact Details</span></h5>
						<hr class="horizontal_line">
					</div>											
					<div class="row">
					<div class="col-md-6 sectionvline">
	                  <div class="row fieldsSpacing">
	                  		<div class="form-group">
	          				<span class="col-md-3 control-label ">Address&nbsp;Line&nbsp;1</span>
	                        <div class="col-md-9">
	                            <input type="text" required="required" id="salesmanadress" class="form-control input-sm" value={{showSalesmanSelected.addressLine1}} data-ng-model=showSalesmanSelected.addressLine1 tabindex="3">
	          				</div>
	       				</div>
	                  </div>
	                  <div class="row fieldsSpacing">
	                  		<div class="form-group">
	          				<span class="col-md-3 control-label">Address&nbsp;Line&nbsp;2&nbsp;</span>
	                        <div class="col-md-9">
	                            <input type="text" class="form-control input-sm" value={{showSalesmanSelected.addressLine2}} data-ng-model=showSalesmanSelected.addressLine2 tabindex="4">
	          				</div>
	       				</div>
	                  </div>
	                  <div class="row fieldsSpacing">				                   		
	       				<div class="form-group">
	          				<span class="col-md-3 control-label" >City</span>
	                        <div class="col-md-5">	                        
	                            <input type="text" disabled class="form-control input-sm not_implemented" value={{showSalesmanSelected.salesmanCity.cityName}} data-ng-model=showSalesmanSelected.salesmanCity.cityName tabindex="5"> 
	          				</div>	
	          				<div class="col-md-4">	                           
		                            <input type="text" disabled class="form-control input-sm not_implemented" value={{showSalesmanSelected.salesmanCity.cityState.stateName}} data-ng-model=showSalesmanSelected.salesmanCity.cityState.stateName>
		          				</div>
	        				</div>
	                   </div>
	                   <div class="row">				                   		
	       				<div class="form-group">
	          				<span class="col-md-3 control-label" >Pin&nbsp;Code</span>
	                        <div class="col-md-5">	                          
	                            <input type="text" class="form-control input-sm not_implemented numberField" disabled="disabled" tabindex="6">
	          				</div>
	        				</div>
	                   </div>
	                </div>
	                <div class="col-md-6">	
	                 <!-- <div class="row fieldsSpacing">
	                   		<div class="form-group">
		          				<span class="col-md-2 control-label">Contact&nbsp;Person</span>
		                        <div class="col-md-10">
		                            <input type="text" class="form-control input-sm" value={{showSalesmanSelected.salesmanFax}} data-ng-model=showSalesmanSelected.salesmanFax tabindex="10">
		          				</div>
	        				</div>
	                   </div>  -->          
                   		<div class="row fieldsSpacing">
	                   		<div class="form-group">
		          				<span class="col-md-2 control-label">Mobile</span>
		                        <div class="col-md-4">
		                            <input type="text" required="required" id="salesmanmobile" class="form-control input-sm numberField" value={{showSalesmanSelected.salesmanPhone}} data-ng-model=showSalesmanSelected.salesmanPhone tabindex="7">
		          				</div>
		          				<span class="col-md-2 control-label" >Landline</span>
		          				
		          				<div class="col-md-4">
		                            <input type="text" id="salesmanlandline" disabled="disabled" class="form-control input-sm not_implemented numberField" value={{showSalesmanSelected.salesmanLandlineNumber}} data-ng-model=showSalesmanSelected.salesmanLandlineNumber tabindex="8">
		          				</div>
	        				</div>
	                   </div>
	                   
	                    <div class="row fieldsSpacing">
	                   		<div class="form-group">
		          				<span class="col-md-2 control-label">Fax</span>
		                        <div class="col-md-4">
		                            <input type="text" id="salesmanfax" class="form-control input-sm numberField" value={{showSalesmanSelected.salesmanFax}} data-ng-model=showSalesmanSelected.salesmanFax tabindex="9">
		          				</div>
	        				</div>
	                   </div>
	                   <div class="row fieldsSpacing">
	                   		<div class="form-group">
		          				<span class="col-md-2 control-label">Email</span>
		                        <div class="col-md-7">
		                            <input type="text" required="required" id="salesmanemail" class="form-control input-sm" value={{showSalesmanSelected.salesmanEmail}} data-ng-model=showSalesmanSelected.salesmanEmail tabindex="10">
		          				</div>
	        				</div>
	                   </div>
	                  	 
	                	</div>
					</div>
					<div class="row">
						<h5><span class="submenuBlue_heading">Salesman Emergency Contact Details</span></h5>
						<hr class="horizontal_line">
					</div>
					<div class="row">
						<div class="col-md-6 sectionvline">
							<div class="row fieldsSpacing">
		                   		<div class="form-group">
			          				<span class="col-md-3 control-label">Contact&nbsp;Person</span>
			                        <div class="col-md-9">
			                            <input type="text" required="required" id="salesmancontactperson" class="form-control input-sm" value={{showSalesmanSelected.salesmanEmergenyContactPerson}} data-ng-model=showSalesmanSelected.salesmanEmergenyContactPerson tabindex="11">
			          				</div>
		        				</div>
		                   	</div>
		                   <div class="row fieldsSpacing">
		                   		<div class="form-group">
			                   		<div class="col-md-3">
			                   		<span class="control-label ">Address&nbsp;Line&nbsp;1</span>
			                   		</div>			          				
			                        <div class="col-md-9">
			                            <input type="text"  id="salesmanaddessline1" class="form-control input-sm numberField" value={{showSalesmanSelected.salesmanEmergencyAddressLine1}} data-ng-model=showSalesmanSelected.salesmanEmergencyAddressLine1 tabindex="12">
			          				</div>
		        				</div>
		                   </div>
		                   <div class="row fieldsSpacing">
		                   		<div class="form-group">
			                   		<div class="col-md-3">
			                   			<span class=" control-label">Address&nbsp;Line&nbsp;2</span>
			                   		</div>
			                        <div class="col-md-9">
			                            <input type="text" class="form-control input-sm" value={{showSalesmanSelected.salesmanEmergencyAddressLine2}} data-ng-model=showSalesmanSelected.salesmanEmergencyAddressLine2 tabindex="13">
			          				</div>
		        				</div>
		                   </div> 
		                   <div class="row fieldsSpacing">
		                   		<div class="form-group">
	          				<span class="col-md-3 control-label" >City</span>
	                        <div class="col-md-5">	                        
	                            <input type="text" disabled class="form-control input-sm not_implemented" value={{showSalesmanSelected.salesmanCity.cityName}} data-ng-model=showSalesmanSelected.salesmanCity.cityName tabindex="14"> 
	          				</div>	
	          				<div class="col-md-4">	                           
		                            <input type="text" disabled class="form-control input-sm not_implemented" value={{showSalesmanSelected.salesmanCity.cityState.stateName}} data-ng-model=showSalesmanSelected.salesmanCity.cityState.stateName>
		          				</div>
	        				</div>
		                   	</div>
		                   	<div class="row">				                   		
	       				<div class="form-group">
	          				<span class="col-md-3 control-label" >Pin&nbsp;Code</span>
	                        <div class="col-md-5">	                          
	                            <input type="text" class="form-control input-sm not_implemented numberField" disabled="disabled" tabindex="15">
	          				</div>
	        				</div>
	                   </div>      
	                	</div>
	                	<div class="col-md-6">		                	
		                	<div class="row fieldsSpacing">
		                   		<div class="form-group">
			          				<span class="col-md-2 control-label">Mobile</span>
			                        <div class="col-md-4">
			                            <input type="text" required="required" id="salesmanmobile1" class="form-control input-sm numberField" value={{showSalesmanSelected.salesmanEmergencyPhone}} data-ng-model=showSalesmanSelected.salesmanEmergencyPhone tabindex="16">
			          				</div>
			          				<span class="col-md-2 control-label" >Landline</span>
			          				
			          				<div class="col-md-4">
			                            <input type="text" id="salesmanlandline1" disabled="disabled" class="form-control input-sm not_implemented numberField" value={{showSalesmanSelected.salesmanEmergencyLandline}} data-ng-model=showSalesmanSelected.salesmanEmergencyLandline tabindex="17">
			          				</div>
		        				</div>
		                   </div>
		                   <div class="row fieldsSpacing">
		                   		<div class="form-group">
			          				<span class="col-md-2 control-label">Fax</span>
			                        <div class="col-md-4">
			                            <input type="text" id="salesmanfax1" class="form-control input-sm numberField" value={{showSalesmanSelected.salesmanEmergencyFax}} data-ng-model=showSalesmanSelected.salesmanEmergencyFax tabindex="18">
			          				</div>
		        				</div>
		                   </div>  
		                   <div class="row">
		                   		<div class="form-group">
			          				<span class="col-md-2 control-label">Email</span>
			                        <div class="col-md-7">
			                            <input type="text" required="required" id="salesmanemail1" class="form-control input-sm" value={{showSalesmanSelected.salesmanEmergencyEmail}} data-ng-model=showSalesmanSelected.salesmanEmergencyEmail tabindex="19">
			          				</div>
		        				</div>
		                   </div>  
	               		</div>
					</div>	
					<div class="row">
						<h5><span class="submenuBlue_heading ">Salesman Route</span></h5>
						<hr class="horizontal_line">
					</div> 
					 <!-- <div class="row">
                   		<div class="form-group">
	          				<span class="col-md-2 control-label" >Route</span>
	                        <div class="col-md-4">
	                            <select class="form-control input-sm" data-ng-options="opt.routeDescription for opt in showRouteList" ng-model="showRouteSelected" value={{showSalesmanSelected.salesmanRouteID}} tabindex="20">									        	
							         <option></option>
							         <option></option>
					      		</select>	
	          				</div>
        				</div>
                   </div>     -->   
                    <div class="row">
				       <div class="col-md-6">
				       <div class="row fieldsSpacing">
				              <div class="form-group">
				               <span class="col-md-3 control-label" >Route</span>
				                   <div class="col-md-5">
				                     <select class="form-control input-sm" data-ng-options="opt.routeDescription for opt in showRouteList" ng-model="showRouteSelected" value={{showSalesmanSelected.salesmanRouteID}} tabindex="21">                  
				                    	<option value='' disabled selected style='display:none;'>Please select</option>
				                     </select> 
				               </div>
				            </div>
				            </div>
				            </div>
                   </div> 									
					<div class="row">
						<h5><span class="submenuBlue_heading ">Salesman Settings</span></h5>
						<hr class="horizontal_line">
					</div>      
			        <div class="row">						    		
	    			 	<span class="col-md-2">
			       			<input class="checkBox" type="checkbox" tabindex="22" ng-value={{showSalesmanSelected.salesmanActiveFlag}} ng-model=showSalesmanSelected.salesmanActiveFlag>
			       			<span>Active</span>
			       		</span>
			       		<span class="col-md-2">
			       			<input class="checkBox" type="checkbox"   tabindex="23"  ng-value={{showSalesmanSelected.salesmanLockFlag}} ng-model=showSalesmanSelected.salesmanLockFlag>
			       			<span>Lock</span>
			       		</span>
			    	</div>					    										
				</div>
			</div>	
		</div>  		     
 	</div>
 <script type="text/javascript">
     $( document ).ready(function() {
        // Handler for .ready() called.
        $('#salesmanname ').allowTextOnlyWithSpace();
       $('#salesmanmobile ').allowNumbersOnly();
       $('#salesmanlandline ').allowNumbersOnly();
       $('#salesmanfax ').allowNumbersOnly();
       $('#salesmanemail ').allowEmailOnly();
       $('#salesmancontactperson ').allowTextOnlyWithSpace();
       $('#salesmanmobile1  ').allowNumbersOnly();
       $('#salesmanlandline1  ').allowNumbersOnly();
       $('#salesmanfax1').allowNumbersOnly();
       $('#salesmanemail1').allowEmailOnly();       
      });
     
    </script> 
     <script type="text/javascript">
    $(document).ready(function(){
        
          $("#salesmanname").keyup(function(){
             $("#salesmanname").css("background-color", "white");
        });
       $("#salesmanmobile").keyup(function(){
             $("#salesmanmobile").css("background-color", "white");
        });
    
      /*  $("#salesmanlandline").keyup(function(){
          $("#salesmanlandline").css("background-color", "white");
     }); */
   /*  $("#salesmanfax").keyup(function(){
          $("#salesmanfax").css("background-color", "white");
     });   */ 
    $("#salesmanemail").keyup(function(){
        $("#salesmanemail").css("background-color", "white");
  });
    $("#salesmancontactperson").keyup(function(){
       $("#salesmancontactperson").css("background-color", "white");
  });
    $("#salesmanmobile1").keyup(function(){
       $("#salesmanmobile1").css("background-color", "white");
  });
  /*   $("#salesmanlandline1").keyup(function(){
       $("#salesmanlandline1").css("background-color", "white");
  });
          */   
      /*  $("#salesmanfax1").keyup(function(){
    $("#salesmanfax1").css("background-color", "white");
  }); */
       $("#salesmanemail1").keyup(function(){
       $("#salesmanemail1").css("background-color", "whites");
      });
       
    });
    </script>