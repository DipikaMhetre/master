<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="LockSmith" data-ng-controller="LockSmithCtrl" ng-init=init()>
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
	            case 46: deletePermission = true;;//delete 
	                    break;
	            case 45: createPermission = true;//create
	            		break;	
	            case 66: modifyPermission = true;
                		break;     			
       			default:break;		
			} 		
		}
		
		%>
		<title>Locksmith</title>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat" id="list-nav">
				<li><a href="#" title="New Product Master" class="highlight_purple not_active">Locksmith</a></li>
				<li> <span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,65);" class="">Refresh</a></li>
				<li><a href="#" title="Start Over" class="not_implemented_link not_active">Email</a></li>
				<li><a href="#" title="Start Over" class="not_implemented_link not_active">Print</a></li>			
				<%if(createPermission || modifyPermission){%>
					<li ng-show="showSaveBtn"><a ng-click="saveEntityList(entityName)" title="Save">Save</a></li>
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
	<nav class="navbar navbar_master1"></nav>
	<div class="row container">
		<div class="col-md-2 sectiondivider">
			<div class="master_leftUpper1">
				<div class="row masterPage_gridText">
					<span>Please select an entity to view or update entity's active/lock status	</span>
				</div>
			</div>
			<div class="row masterPage_fieldSpacing">
				<!--=============GRID==========  -->
           		<div id="grid" tabindex="-1" class="utility_locksmith_leftGrid"></div>
           		<!--=============GRID==========  -->
			</div>
		</div>
		<div class="col-md-10">
			<div class="">
				<div class="row masterTop_GrayStrip">
					<h6>
						<span class="masterTop_StripText">Lock Smith&nbsp;-&nbsp;<span class="masterHeading">{{entityName}}</span></span>
					</h6>
				</div>														
				<div class=" row fieldsSpacing">
					
					<div class="col-md-12">
						<nav class="mainnav">
							<ul class="rightFloat">
								<li >
								<a ng-show="entityName=='Customer'||entityName=='Salesman'"ng-click="applyFilter(entityName,'lock')" title="">Show only LOCKed entities({{showLockFilterStatus}})</a>
                            </li>
							<li >
								<a ng-click="applyFilter(entityName,'active')"title="">Show only ACTIVE entities({{showActiveFilterStatus}})</a>
                            </li>
							</ul>
						</nav>
					</div>
				</div>
				
				<div class="row ">
					<!--=============GRID==========  -->
           			<div id="grid2" tabindex="-1" class="utility_locksmith_rightGrid"></div>
           			<!--=============GRID==========  -->
				</div>
				
				<div class="row fieldsSpacing">
					<div class="col-md-9">
						<div class="row">
							
						</div>
					</div>
				</div>								
			</div>
		</div>
	</div>
</div>
   <script type="text/javascript">
    $(document).ready(function(){
       
             angular.element('*[ng-app]').injector().get("configurable").createPermission=<%=createPermission %>;
	    		debugger;
	    		var pCookie={createPermission:<%=createPermission %>,deletePermission:<%=deletePermission%>,modifyPermission:<%=modifyPermission %>,modifyPurchaseDatePermission:<%=modifyPurchaseDatePermission %>};
	    		angular.element('*[ng-app]').injector().get('$cookieStore').put("userPermission",pCookie);
	    		<% if(modifyPermission){%>
	    			angular.element(document.getElementById('LockSmith')).scope().showSaveBtn=true;
	    		<% }%>
        });
        
 
    </script>