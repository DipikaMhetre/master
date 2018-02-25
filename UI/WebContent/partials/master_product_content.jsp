<title>Content Master</title>
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="ProductContentMaster" data-ng-controller="ContentMasterCtrl" ng-init=init()>
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
	            case 34: deletePermission = true;;//delete 
	                    break;
	            case 33: createPermission = true;//create
	            		break;	
	            case 35: modifyPermission = true;
                		break;     			
	            case 5: modifyPurchaseDatePermission=true;
       					break;
       			default:break;		
			} 		
		}
		
		%>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat" id="list-nav">
				<li><a href="#" title="New Product Content Master" class="highlight_purple not_active">Content Master</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,32);"
 					class="">Refresh</a></li>
				<li><a href="#" title="Export" class="not_implemented_link not_active">Export</a></li>
				<li><a href="#" title="Print"class="not_implemented_link not_active">Print</a></li>
				<%if(createPermission || modifyPermission){%>
				<li ng-show="showSaveBtn"><a ng-click="saveContent(showContentSelected)" title="Save" tabindex="10">Save</a></li>
				 <%}%>
					<%if(createPermission){%>
				<li><a data-ng-click=newContentMaster() title="New">New</a></li>
				<%}%>
				<li><a href="#" title="Help" class="not_implemented_link not_active">Help</a></li>
			</ul>
			<ul class="rightFloat_Menu">
				<li><a class=" not_active marginZero textCenter">Satyajit
						Toradmal</a> <a href="#" title="Todays Date"
					class=" not_active marginZero textCenter"> <span
						style="font-size: 12px;" id="date_time"></span> <script
							type="text/javascript">
							window.onload = date_time('date_time');
						</script></a></li>
				<li class="editable_btnPos">
					<button type="button" ng-class="editable ? 'flagselected' : ''"
						class="btn btn-default flag_enable input-sm editable-btn"
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
	        	<li ><a ng-click="changeView(activeUser.userId,activeUser.token,28)">Product</a></li>		        	
	        	<li class="active"><a >Content Master</a></li>
	        </ul>
		</div>
	</nav>
	<div class="row container">
		<div class="col-md-2 sectiondivider">		
			<div class="row">	    		
	    		 <!-- =============GRID============-->
	    		 <div id="grid" tabindex="-1" class="masterContent_leftGride" ></div>
	    		 <!-- =============GRID============-->
			</div>		
			
			<div  class="row master_filterPos">
				<a ng-hide href="#" title="Filter" class="not_implemented_link not_active">Filter(<span class="purpleText">ON</span>)</a>
			</div>
		</div>
		<div class="col-md-10">
			<div class="">
				<div class="row masterTop_GrayStrip">
					<h6><span class="masterTop_StripText">Content&nbsp;(<span class="masterHeading">{{showContentSelected.contentName}}</span><span ng-show="!showContentSelected.contentName" class="masterHeading">New</span>)</span></h6>
				</div>
				<div class="row fieldsSpacing fields_headingSpacing">
					<div class="col-md-3">
						<div class="row">
							<div class=" col-md-4">
		          				<span class="control-label">Content&nbsp;Name</span>
		       				</div>
		                    <div class="col-md-8">
								<input ng-disabled="!editable" type="text" id="contentname" name="contentname" allow-alphanumericwithspace required="required" class="form-control input-sm master_content_smScreen" tabindex="1" value={{showContentSelected.contentName}} data-ng-model=showContentSelected.contentName onfocus="Purplevalidator('contentname',2,'ProductContentMaster','')" onclick="Purplevalidator('contentname',2,'ProductContentMaster','')">
							</div>
		        		</div>
					</div>
					<div class="col-md-5">
						<div class="row">
	                        <div class=" col-md-3">
								<span class="control-label master_content_smScreen1">Content&nbsp;Description</span>
							</div>
							<div class="col-md-9">
								<input ng-disabled="!editable" type="text" required="required"  id="content_description" name="content_description" allow-alphanumericwithspace class="form-control input-sm master_content_smScreen2" tabindex="2" value={{showContentSelected.contentDesc}} data-ng-model=showContentSelected.contentDesc onfocus="Purplevalidator('content_description',2,'ProductContentMaster','')" onclick="Purplevalidator('content_description',2,'ProductContentMaster','')">
							</div>
						</div>
					</div>
				</div>						
				<div class="row fields_productMasterSpacing">
					<h5><span class="submenuBlue_heading">Content Details</span></h5>
					<hr class="horizontal_line">
				</div>
				<div class="row">
					<div class="col-md-3 contentMaster_col-md-3 contentMaster_sectionvline">												
						<span class="control-label">Content Type</span>																	   
						<div class=" masterPage_fieldSpacing ">	    		
				    		 <!-- =============GRID============-->
				    		 <div id="grid2" tabindex="-1" class="gridProductContent" ></div>
				    		 <!-- =============GRID============-->
						</div>								
					</div>	
					<!-- <div class="col-md-1 contentMaster_sectionvline contentMasterRow1">
					</div>
					<div class="col-md-1 contentMasterRow1">
					</div>	 -->							
					<div class="col-md-6 contentMaster_col-md-6">
					<span class="control-label">DPCO Settings</span>							
						<div class="row fieldsTop_Spacing_lg ">
							<div class="form-group">
	          				<span class="col-md-2  control-label">Tablet</span>
	                        <div class="col-md-4 ">
	                            <input ng-disabled="!editable" type="text" id="tabletrate" name="tabletrate" allow-numbers tabindex="3" class="form-control input-sm numberField" ng-value={{showContentSelected.contentDPCOTabletRate}} ng-model=showContentSelected.contentDPCOTabletRate onfocus="Purplevalidator('tabletrate',2,'ProductContentMaster','')" onclick="Purplevalidator('tabletrate',2,'ProductContentMaster','')">
	          				</div>
	          				<div class="col-md-4 ">
	                            <input ng-disabled="!editable" type="text" id="tabletmg" name="tabletmg" allow-numbers tabindex="4" class="form-control input-sm numberField" ng-value={{showContentSelected.contentDPCOTabletUnit}} ng-model=showContentSelected.contentDPCOTabletUnit onfocus="Purplevalidator('tabletmg',2,'ProductContentMaster','')" onclick="Purplevalidator('tabletmg',2,'ProductContentMaster','')">
	          				</div>
	          				<span class="col-md-1 contentMaster_unitPos  control-label">mg</span>
        				</div>
						</div>
						<div class="row ">
	                   		<div class="form-group">
		          				<div class="col-md-2">	          
		          				</div>
		                        <div class="col-md-4 textCenter text_inputfieldPos" >
		                            <span class="highlight_LightGrey">Rate</span>
		          				</div>
		          				<div class="col-md-4 textCenter text_inputfieldPos">
		                            <span class="highlight_LightGrey">Unit</span>
		          				</div>
		          				
	        				</div>
	                   </div>
	                   <div class="row fieldsTop_Spacing_lg ">
							<div class="form-group">
	          				<span class="col-md-2  control-label">Liquid</span>
	                        <div class="col-md-4 ">
	                            <input ng-disabled="!editable" type="text" id="liquidrate" name="liquidrate" allow-numbers tabindex="5" class="form-control input-sm numberField" ng-value={{showContentSelected.contentDPCOLiquidRate}} ng-model=showContentSelected.contentDPCOLiquidRate onfocus="Purplevalidator('liquidrate',2,'ProductContentMaster','')" onclick="Purplevalidator('liquidrate',2,'ProductContentMaster','')">
	          				</div>
	          				<div class="col-md-4 ">
	                            <input ng-disabled="!editable" type="text" id="liquidunit" allow-numbers name="liquidunit" tabindex="6" class="form-control input-sm numberField" ng-value={{showContentSelected.contentDPCOLiquidUnit}} ng-model=showContentSelected.contentDPCOLiquidUnit onfocus="Purplevalidator('liquidunit',2,'ProductContentMaster','')" onclick="Purplevalidator('liquidunit',2,'ProductContentMaster','')">
	          				</div>
	          				<span class="col-md-1 contentMaster_unitPos  control-label">ml</span>
        				</div>
						</div>
						<div class="row ">
	                   		<div class="form-group">
		          				<div class="col-md-2">	          
		          				</div>
		                        <div class="col-md-4 textCenter text_inputfieldPos">
		                            <span class="highlight_LightGrey">Rate</span>
		          				</div>
		          				<div class="col-md-4 textCenter text_inputfieldPos">
		                            <span class="highlight_LightGrey">Unit</span>
		          				</div>
	        				</div>
	                   </div>
	                   <div class="row fieldsTop_Spacing_lg ">
							<div class="form-group">
	          				<span class="col-md-2 control-label">Injection</span>
	                        <div class="col-md-4">
	                            <input ng-disabled="!editable" type="text" id="injectionrate" name="injectionrate" allow-numbers tabindex="7" class="form-control input-sm numberField" ng-value={{showContentSelected.contentDPCOInjectionRate}} ng-model=showContentSelected.contentDPCOInjectionRate onfocus="Purplevalidator('injectionrate',2,'ProductContentMaster','')" onclick="Purplevalidator('injectionrate',2,'ProductContentMaster','')">
	          				</div>
	          				<div class="col-md-4">
	                            <input ng-disabled="!editable" type="text" id="injectionunit" name="injectionunit" allow-numbers tabindex="8" class="form-control input-sm numberField" ng-value={{showContentSelected.contentDPCOInjectionUnit}} ng-model=showContentSelected.contentDPCOInjectionUnit onfocus="Purplevalidator('injectionunit',2,'ProductContentMaster','')" onclick="Purplevalidator('injectionunit',2,'ProductContentMaster','')">
	          				</div>
	          				<span class="col-md-1 contentMaster_unitPos control-label">ml</span>
        				</div>
						</div>
						<div class="row ">
	                   		<div class="form-group">
		          				<div class="col-md-2">	          
		          				</div>
		                        <div class="col-md-4 textCenter text_inputfieldPos">
		                            <span class="highlight_LightGrey">Rate</span>
		          				</div>
		          				<div class="col-md-4 textCenter text_inputfieldPos">
		                            <span class="highlight_LightGrey">Unit</span>
		          				</div>
	        				</div>
	                   </div>
	                    <div class="row fieldsTop_Spacing_lg container" style="margin-left: -15px;">
	                   		<p class="highlight_grey">This section captures DPCO details only when you have selected DPCO<br> as a one of the "Content Type".</p>
	                   </div> 
					</div>
				</div>
												    		
	       								    		  														
				<div class="row fields_productMasterSpacing">
					<h5><span class="submenuBlue_heading">Content Settings</span></h5>
					<hr class="horizontal_line">
				</div>				
	        	<div class="row">						    		
    			 	<span class="col-md-2">
		       			<input ng-disabled="!editable" class="checkBox" type="checkbox" ng-model="showContentSelected.contentActiveFlag" value={{showContentSelected.contentActiveFlag}} tabindex="9">
		       			<span>Active</span>
		       		</span>							    
		       	</div>	
			</div>
		</div>
	</div>  		 
</div>
 <script type="text/javascript" src="http://w2ui.com/src/w2ui-1.4.2.min.js"></script> 
    <!--  <script type="text/javascript">
	    $( document ).ready(function() {
	    	  // Handler for .ready() called.
	    	  $('#contentname').allowAlphaNumericOnly();
	    	  $('#content_description').allowAlphaNumericOnly();
	    	  $('#tabletrate ').allowNumbersOnly();
	    	  $('#tabletmg ').allowNumbersOnly();
	    	  $('#liquidrate ').allowNumbersOnly();
	    	  $('#liquidunit ').allowNumbersOnly();
	    	  $('#injectionrate ').allowNumbersOnly();
	    	  $('#injectionunit').allowNumbersOnly();
	    });
    	
	    </script>  -->
	     <script type="text/javascript">
    $(document).ready(function(){
        
          $("#contentname").keypress(function(){
             $("#contentname").css("background-color", "white");
        	});
          $("#content_description").keypress(function(){
              $("#content_description").css("background-color", "white");
         });
          $("#tabletmg").keypress(function(){
              $("#tabletmg").css("background-color", "white");
         });
          $("#tabletrate").keypress(function(){
              $("#tabletrate").css("background-color", "white");
         });
          $("#liquidrate").keypress(function(){
              $("#liquidrate").css("background-color", "white");
         });
          $("#liquidunit").keypress(function(){
              $("#liquidunit").css("background-color", "white");
         });
          $("#injectionunit").keypress(function(){
              $("#injectionunit").css("background-color", "white");
         });
          $("#injectionrate").keypress(function(){
              $("#injectionrate").css("background-color", "white");
         });
        angular.element('*[ng-app]').injector().get("configurable").createPermission=<%=createPermission %>;
 		debugger;
 		var pCookie={createPermission:<%=createPermission %>,deletePermission:<%=deletePermission%>,modifyPermission:<%=modifyPermission %>,modifyPurchaseDatePermission:<%=modifyPurchaseDatePermission %>};
 		angular.element('*[ng-app]').injector().get('$cookieStore').put("userPermission",pCookie);
 		<% if(createPermission && !modifyPermission){%>	    		
 			angular.element(document.getElementById('ProductContentMaster')).scope().showSaveBtn=false;
 		<%}else if(modifyPermission){%>
 			angular.element(document.getElementById('ProductContentMaster')).scope().showSaveBtn=true;
 		<% }%>
    
    });
    </script>