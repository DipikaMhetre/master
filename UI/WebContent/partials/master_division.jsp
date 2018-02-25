<title>Division Master</title>
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="divisionMaster" data-ng-controller="DivisionMasterCtrl" ng-init=init()>
	<toast></toast>
		<% List<PurpleaidACL> xyz= new ArrayList();
		xyz=(ArrayList<PurpleaidACL>) request.getSession().getAttribute("permissionList"); 
		Boolean createPermission = false;
		Boolean modifyPermission = false;
		Boolean deletePermission = false;
		Boolean modifyPurchaseDatePermission = false;//extra
		String x=xyz.get(0).toString();
		for(int i=0;i<xyz.size();i++){
			Double d = new Double(xyz.get(i).getPurpleaidACLpermissionID());
			int n=d.intValue();
			 switch (n) {
	            case 26: deletePermission = true;;//delete 
	                    break;
	            case 25: createPermission = true;//create
	            		break;	
	            case 27: modifyPermission = true;
                		break;     			
	            case 5: modifyPurchaseDatePermission=true;
       					break;
       			default:break;		
			} 		
		}
		
		%> 
	<Section class="pageheader">
		<nav class="mainnav">
	    	<ul class="leftFloat_Menu" id="list-nav">
				<li> <a href="#"  class="highlight_purple not_active">Division Master</a> </li>
                <li> <span class="glyphicon glyphicon-play newShowGlyphicon"></span> </li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,24);" class="">Refresh</a></li>							
				<li> <a href="#" title="Export" class="not_implemented_link not_active">Export</a> </li>							
				<li> <a href="#" title="Print" class="not_implemented_link not_active">Print</a> </li>
				<%if(createPermission || modifyPermission){%>
				<li ng-show="showSaveBtn"> <a ng-click=saveDivisionMaster(showDivisionSelected) title="Save" tabindex="10">Save</a> </li>
				<%}%>
				<%if(createPermission){%>
				<li> <a  ng-click=newDivisionMaster()>New</a> </li>		
				<%}%>					
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
						ng-class="editable ? 'flagselected' : ''"
						tabindex="20">
						<span class="fieldLeft_spacing_lg" ng-click="editable=!editable;$root.editable=!$root.editable">Editable</span>
					</button>
				</li>
			</ul>
		</nav>
	</Section>           		 
    <nav class="navbar navbar-default navbar_master">
		<div class="container">
			<ul class="nav navbar-nav master_nav_element_pos">
	        	<li role="presentation"><a ng-click="changeView(activeUser.userId,activeUser.token,15)">Company</a></li>
	        	<li><a ng-click="changeView(activeUser.userId,activeUser.token,20)">Supplier</a></li>
	        	<li class="active"><a>Division</a></li>		        	
	        <!-- 	<li><a href="#masterMr">MR</a></li> -->
	        </ul>			        
		</div>
	</nav>
	<div class="row container">
		<div class="col-md-2 sectiondivider">
			<div class="master_leftUpper">
				<div class="row">
					<select ng-disabled="!editable" class="input-sm masterPage_grid input_rightSpecing" data-ng-options="opt.companyName for opt in showCompanyList" ng-model="showCompanySelected" ng-change="onCompanySelection(showCompanySelected)" tabindex="1">					
						<option value='' disabled selected style='display:none;'>Please select a Company</option>
					</select>
				</div>
				<div class="row masterPage_gridText">
					<span>Following are the divisions to selected company.</span>
				</div>						
			</div>
			<div class="row masterPage_fieldSpacing">
		
	     		  <!-- =============GRID============-->
	     		 <div id="grid" tabindex="-1"  class="gridSizeLeft2"></div>
	     		 <!-- =============GRID============-->
			</div>
		</div>
		<div class="col-md-10">
			<div class="">
				<div class="row masterTop_GrayStrip">
					<h6><span class="masterTop_StripText">Division&nbsp;(<span ng-hide="!showDivisionSelected.divisionName" class="masterHeading">{{showDivisionSelected.divisionName}}</span><span ng-show="!showDivisionSelected.divisionName" class="masterHeading">New</span>)</span></h6>
				</div>
				<div class="row fields_headingSpacing">
					<div class="col-md-4">
						<div class="row">
							<div class=" col-md-3">
		          				<span class="control-label">Company</span>
		       				</div>
		                    <div class=" col-md-9">
						      <input type="text" disabled class="form-control input-sm master_division_fieldPos_smScreen" value={{showDivisionSelected.divisionCompanyName}} ng-model="showDivisionSelected.divisionCompanyName">
						   </div>
	        			</div>
					</div>
				</div>
				<div class="row fields_headingSpacing">
					<h5><span class="submenuBlue_heading">Division&nbsp;Details</span></h5>
					<hr class="horizontal_line">
				</div>
				<div class="row fieldsSpacing">
				<div class="col-md-4">
	        			<div class="row">
	          				<span class="col-md-3 control-label ">Division&nbsp;Name</span>
	                        <div class="col-md-9">
	                           <input ng-disabled="!editable" type="text" id="divisionname" name="divisionname" allow-alphanumericwithspace required="required" class="form-control input-sm master_division_fieldPos_smScreen" value={{showDivisionSelected.divisionName}} ng-model="showDivisionSelected.divisionName" tabindex="2"onclick="Purplevalidator('divisionname',2,'divisionMaster','')" onfocus="Purplevalidator('divisionname',2,'divisionMaster','')" >
	          				</div>
	        			</div>
	        		</div>
					<div class="col-md-4">
	        			<div class="row">
	          				<span class="col-md-3 control-label ">Division&nbsp;Code</span>
	                        <div class="col-md-9">
	                            <input ng-disabled="!editable" type="text" id="divisioncode"  name="divisioncode" allow-alphanumericwithspace required="required"  class="form-control input-sm master_division_fieldPos_smScreen" value={{showDivisionSelected.divisionCode}} ng-model="showDivisionSelected.divisionCode" tabindex="3" onclick="Purplevalidator('divisioncode',2,'divisionMaster','')" onfocus="Purplevalidator('divisioncode',2,'divisionMaster','')">
	          				</div>
	        			</div>
	        		</div>
	        		
	       		</div>
	       		<div class="row">
					<div class="col-md-1">
						<span class="control-label">Remark</span>
					</div>
					<div class="col-md-7">
						<input ng-disabled="!editable" type="text" class="form-control input-sm division_master_remarkPos master_division_fieldPos_smScreen1" value={{showDivisionSelected.divisionRemark}} ng-model="showDivisionSelected.divisionRemark" tabindex="4">
					</div>
				</div>	
				<div class="row fields_headingSpacing">
					<h5><span class="submenuBlue_heading ">Division Contact Details</span></h5>
					<hr class="horizontal_line">
				</div>
				<div class="row">
					<div class="col-md-4">
	                	 <div class="row fieldsSpacing">
	                   		<div class="form-group">
		          				<span class="col-md-3 control-label">Contact&nbsp;Person</span>
		                        <div class="col-md-9">
		                            <input ng-disabled="!editable" name="contact_person"  id="divisioncontactperson" name="divisioncontactperson" allow-text type="text" class="form-control input-sm master_division_fieldPos_smScreen"  value={{showDivisionSelected.divisionContactName}} ng-model="showDivisionSelected.divisionContactName" tabindex="5">
		          				</div>
	        				</div>
	                   	</div>
	                   	<div class="row fieldsSpacing">
	                   		<div class="form-group">
		          				<span class="col-md-3 control-label" >Mobile</span>
		                        <div class="col-md-7">
		                            <input ng-disabled="!editable" name="contact_person"  id="divisionmobile" name="divisionmobile" allow-numbers type="text" class="form-control input-sm textRight master_division_fieldPos_smScreen2"  value={{showDivisionSelected.divisionContactPhone}} ng-model="showDivisionSelected.divisionContactPhone"  tabindex="6" onclick="Purplevalidator('divisionmobile',1,'divisionMaster','')" onfocus="Purplevalidator('divisionmobile',1,'divisionMaster','')" onblur="Purplevalidator('divisionmobile',1,'divisionMaster','blur')">
		          				</div>
	        				</div>
	                   	</div>
	                   	<div class="row fieldsSpacing">
	                   		<div class="form-group">
		          				<span class="col-md-3 control-label" >Landline</span>
		                        <div class="col-md-7">
		                            <input ng-disabled="!editable" name="contact_person" disabled="disabled"  id="contact_person" type="text" class="form-control input-sm textRight not_implemented master_division_fieldPos_smScreen2"  tabindex="7">
		          				</div>
	        				</div>
	                   	</div>
	       	               
	                   <div class="row">
	                   		<div class="form-group">
		          				<span class="col-md-3 control-label">Email</span>
		                        <div class="col-md-9">
		                            <input type="email"  ng-disabled="!editable" class="form-control input-sm master_division_fieldPos_smScreen" id="divisionemail"  value={{showDivisionSelected.divisionContactEmail}} ng-model="showDivisionSelected.divisionContactEmail" tabindex="8" onclick="Purplevalidator('divisionemail',0,'divisionMaster','')" onfocus="Purplevalidator('divisionemail',0,'divisionMaster','')" onblur="Purplevalidator('divisionemail',0,'divisionMaster','blur')">
		          				</div>
	        				</div>
	                   </div>
	                  
	                </div>
				</div>
				<div class="row fields_headingSpacing">
					<h5><span class="submenuBlue_heading ">Division Settings</span></h5>
					<hr class="horizontal_line">
				</div>
       			 <div class="row">	
		    		<div class="col-md-9">
		    			 <div class="row">
		    			 	<span class="col-md-2">
				       			<input ng-disabled="!editable" class="checkBox" type="checkbox" ng-value={{showDivisionSelected.divisionActiveFlag}} ng-model=showDivisionSelected.divisionActiveFlag tabindex="9">
				       			<span>Active</span>
				       		</span>
		    			 </div>
		    		</div>
		       	</div>			
	       	</div>
		</div>
	</div>  
</div>
<!--  <script type="text/javascript">
	    $( document ).ready(function() {  
	    	  // Handler for .ready() called.
	    	  $('#divisionname').allowAlphaNumericOnlywithspace(); 
	    		$('#divisioncode').allowAlphaNumericOnlywithspace();
	    		$('#divisioncontactperson').allowTextOnlyWithSpace();
	    		
	    		$('#divisionmobile').allowNumbersOnly();
	    		
	    			    		
	    	});
    	
    </script>  -->
    
     <script type="text/javascript">
    $(document).ready(function(){
        
         $("#divisionname").keypress(function(){
            $("#divisionname").css("background-color", "white");
        });
      $("#divisioncode").keypress(function(){
            $("#divisioncode").css("background-color", "white");
        });
      $("#divisionmobile").keypress(function(){
          $("#divisionmobile").css("background-color", "white");
      });
  
      $("#divisionemail").keypress(function(){
          $("#divisionemail").css("background-color", "white");
      });
      
      angular.element('*[ng-app]').injector().get("configurable").createPermission=<%=createPermission %>;
		debugger;
		var pCookie={createPermission:<%=createPermission %>,deletePermission:<%=deletePermission%>,modifyPermission:<%=modifyPermission %>,modifyPurchaseDatePermission:<%=modifyPurchaseDatePermission %>};
		angular.element('*[ng-app]').injector().get('$cookieStore').put("userPermission",pCookie);
		<% if(createPermission && !modifyPermission){%>	    		
			angular.element(document.getElementById('divisionMaster')).scope().showSaveBtn=false;
		<%}else if(modifyPermission){%>
			angular.element(document.getElementById('divisionMaster')).scope().showSaveBtn=true;
		<% }%>
    
  
  });
           
    </script>