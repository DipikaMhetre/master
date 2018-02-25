<title>Area Master</title>
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="AreaMaster" data-ng-controller="AreaMasterCtrl" ng-init=init()> 
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
	            case 38: deletePermission = true;;//delete 
	                    break;
	            case 37: createPermission = true;//create
	            		break;	
	            case 39: modifyPermission = true;
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
					<li >
						<a href="#puchase" class="highlight_purple not_active">Area Master</a>
                    </li>
                    <li >
						<span class="glyphicon glyphicon-play newShowGlyphicon"></span>
                   	</li>
					<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,36);" class="">Refresh</a></li>							
					<li >
						<a href="#" class="not_implemented_link not_active">Export</a>
                    </li>							
					<li >
						<a href="#" title="Print" class="not_implemented_link not_active">Print</a>
                   </li>
					<%if(createPermission || modifyPermission){%>
					<li ng-show="showSaveBtn">
						<a title="Save"    ng-click=saveAreaMaster(showAreaSelected)       tabindex="6">Save</a>
                    </li>
                    <%}%>
					<%if(createPermission){%>
                    <li >
						<a    ng-click=newAreaMaster() title="New">New</a>
                    </li>	
                    <%}%>						
					<li >
						<a href="#" title="Help" class="not_implemented_link not_active">Help</a>
                     </li>
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
						<span class="fieldLeft_spacing_lg"ng-click="editable=!editable;$root.editable=!$root.editable">Editable</span>
					</button>
				</li>
			</ul>
             </nav>
      	</Section>         		 
           	<nav class="navbar navbar-default navbar_master">
				<div class="container">
					<ul class="nav navbar-nav master_nav_element_pos">
			        	<li class="active"><a >Area</a></li>		        	
			        	<li><a ng-click="changeView(activeUser.userId,activeUser.token,40)">Route</a></li>
			        	<!-- <li ><a href="#masterSalesman">Salesman</a></li> -->
			        </ul>
				</div>
			</nav>
			<div class="row container">
				<div class="col-md-2 sectiondivider">
					<div class="master_leftUpper">
						<div class="row">
							<select ng-disabled="!editable" class="input-sm masterPage_grid input_rightSpecing" data-ng-options="opt.regionDescription for opt in showRegionList" ng-model="showRegionSelected" ng-change="onRegionSelection(showRegionSelected)"  tabindex="1">																				
								<option value='' disabled selected style='display:none;'>please select a Region</option>
							</select>
						</div>
						<div class="row masterPage_gridText masterPage_fieldSpacing">
							<span>Following are the areas to selected region.</span>
						</div>	
							
					</div>						
					<div class="row masterPage_fieldSpacing">								     					     			     		 
					 <!-- =============GRID============-->
		            <div id="grid" tabindex="-1" class="master_area_Grid"></div>
		            <!-- =============GRID============--> 
					</div>						
				</div>
				<div class="col-md-10">
					<div class="">
						<div class="row masterTop_GrayStrip">
						
						
							<h6><span class="masterTop_StripText">Area&nbsp;(<span ng-show="showAreaSelected.areaID"class="masterHeading">{{showAreaSelected.areaDescription}}</span><span ng-show="!showAreaSelected.areaID" class="masterHeading">New</span>)</span></h6>
						</div>
						<div class="row fields_headingSpacing">							
																
							<div class="col-md-3">
								<div class="row">
				          			<span class="col-md-4 control-label">Region&nbsp;Code</span>
			                        <div class="col-md-8">
			                            <input ng-disabled="!editable" type="text" class="form-control input-sm areaIP_pos" readonly="readonly" value={{showAreaSelected.areaRegionCode}} data-ng-model=showAreaSelected.areaRegionCode>
			          				</div>
			        			</div>						
							</div>
							<div class="col-md-4">
								<div class="row">
				          			<span class="col-md-5 control-label">Region&nbsp;Description</span>
			                        <div class="col-md-7">
			                            <input ng-disabled="!editable" type="text" class="form-control input-sm" readonly="readonly"  value={{showAreaSelected.areaRegionDescription}} data-ng-model=showAreaSelected.areaRegionDescription>
			          				</div>
			        			</div>								
							</div>
							<!-- <a ng-click=showPopup()><img src="images/new.png" class="plusimgSize"></a> -->
						</div>
						<div class="row fields_headingSpacing">
							<h5><span class="submenuBlue_heading ">Area Details</span></h5>
							<hr class="horizontal_line">
						</div>
						<div class="row fieldsSpacing">
						<!-- <div class="col-md-3">
								<div class="row">
				          			<span class="col-md-4 control-label">Area&nbsp;ID</span>
			                        <div class="col-md-8">
			                            <input type="text" class="form-control input-sm areaIP_pos" disabled value={{showAreaSelected.areaID}} data-ng-model=showAreaSelected.areaID >
			          				</div>
			        			</div>						
							</div>	 -->		
							<div class="col-md-3">	
								<div class="row">
				          			<span class="col-md-4 control-label">Area&nbsp;Code</span>
			                        <div class="col-md-8">
			                            <input ng-disabled="!editable" type="text" required="required" name="areacode" allow-alphanumericwithspace id="areacode" class="form-control input-sm arrow_down_row"   value={{showAreaSelected.areaCode}} data-ng-model=showAreaSelected.areaCode  tabindex="2"   onclick="Purplevalidator('areacode',2,'AreaMaster','')" onfocus="Purplevalidator('areacode',2,'AreaMaster','')">
			          					</div>
			        			</div>						
							</div>
							<div class="col-md-3">
								<div class="row">
				          			<span class="col-md-4 control-label">Description</span>
			                        <div class="col-md-8">
			                            <input ng-disabled="!editable" type="text" class="form-control input-sm" required="required" id="area_desc" name="area_desc" allow-alphanumericwithspace  value={{showAreaSelected.areaDescription}} data-ng-model=showAreaSelected.areaDescription     tabindex="3" onclick="Purplevalidator('area_desc',2,'AreaMaster','')" onfocus="Purplevalidator('area_desc',2,'AreaMaster','')">
			          			</div>
			        			</div>				 			
							</div>
						</div>
						<div class="row">		
							<div class="col-md-3">
								<div class="row">								
		        				<span class="col-md-4 control-label">Pin&nbsp;Code</span>
		                        <div class="col-md-8">
		                           <input ng-disabled="!editable" type="text"  id="pincode" name="pincode" allow-numbers class="form-control input-sm areaIP_pos numberField"  value={{showAreaSelected.pincode}} data-ng-model=showAreaSelected.pincode   tabindex="4">
		          				</div>				          						                       
		        			</div>			
							</div>
							<div class="col-md-3">
								<input ng-disabled="!editable" type="text" class="form-control input-sm master_areaPin  not_implemented" readonly="readonly" >
							</div>			
						</div>			        									
							<div class="row fields_headingSpacing">
								<h5><span class="submenuBlue_heading">Area Settings</span></h5>
								<hr class="horizontal_line">
							</div>
							
					        <div class="row">						    		
			    			 	<span class="col-md-2">
					       			<input ng-disabled="!editable" class="checkBox" type="checkbox" tabindex="5"  ng-value={{showAreaSelected.areaActiveFlag}} ng-model=showAreaSelected.areaActiveFlag>
					       			<span>Active</span>
					       		</span>
					    	</div>					    										
						</div>
					</div>	
				   <script type="text/ng-template" id="area_popup.html">
      			 		<section style="width: 250px; height: 120px; margin: 129px;">
			<div class=" blueBG">		
            	<h4 class=" topblueStripText">Region</h4>
       		</div>
       		<div class="row fieldsSpacing">
				<div class="form-group">
					<span class="col-md-5">
						<input name="action" type="radio" id="modify" value="modify" ng-model="modify" >        			
   						<span>Modify</span>					
					</span>
	           		<span class="col-md-5">
						<input name="action" id="New" type="radio" value="New" ng-model="modify">        			
   						<span>New</span>					
					</span>
				</div>
			</div>      		      		       		
			 <div class="row fieldsSpacing">
				<div class="form-group">
					<span class="col-md-4 lable_position control-label">Region&nbsp;Code</span>
	           		<div class="col-md-8">
	               		<input type="text" id ="rcode" class="form-control input-sm" value={{record.regionCode}} ng-model=record.regionCode>
					</div>
				</div>
			</div>
			 <div class="row">
				<div class="form-group">
					<span class="col-md-4 lable_position control-label">Description</span>
	           		<div class="col-md-8">
	               		<input type="text" class="form-control input-sm"  value={{record.regionDescription}} ng-model=record.regionDescription>
					</div>
				</div>
			</div>
			<div class="row masterPage_fieldSpacing"> 
				<!-- <div class="col-md-5"></div>                     
				<div class="col-md-2">
					<button type="button" class="btn input-sm_btn btn_small canclebtnSize">CANCLE</button>							
				</div>
				<div class="col-md-2">
					<button type="button" class="btn input-sm_btn btn_small okbtnSize" ng-click="ok(record)">OK</button>							
				</div> -->
				<button class="btn okbtnSize masterPage_fieldSpacing" ng-click="saveRegionMaster(showRegionSelected)">OK</button>   
	       		    <button class="btn canclebtnSize masterPage_fieldSpacing" ng-click="cancel()">Cancel</button>
       		</div>
		</section>
    </script>
				
				
				</div>  		     
   			 </div>
   			 
   			 
    		 
   <!--   <script type="text/javascript">
     $( document ).ready(function() {
        // Handler for .ready() called.
      $('#areacode').allowAlphaNumericOnlywithspace();
        
      $('#area_desc').allowAlphaNumericOnlywithspace();
      });
     
    </script> -->
	 <script type="text/javascript">
    $(document).ready(function(){
        
          $("#areacode").keypress(function(){
             $("#areacode").css("background-color", "white");
        });
       $("#area_desc").keypress(function(){
             $("#area_desc").css("background-color", "white");
        });
       angular.element('*[ng-app]').injector().get("configurable").createPermission=<%=createPermission %>;
 		debugger;
 		var pCookie={createPermission:<%=createPermission %>,deletePermission:<%=deletePermission%>,modifyPermission:<%=modifyPermission %>,modifyPurchaseDatePermission:<%=modifyPurchaseDatePermission %>};
 		angular.element('*[ng-app]').injector().get('$cookieStore').put("userPermission",pCookie);
 		<% if(createPermission && !modifyPermission){%>	    		
 			angular.element(document.getElementById('AreaMaster')).scope().showSaveBtn=false;
 		<%}else if(modifyPermission){%>
 			angular.element(document.getElementById('AreaMaster')).scope().showSaveBtn=true;
 		<% }%>
       
    
    });
    </script>
    
    