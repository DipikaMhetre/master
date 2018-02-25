
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="Contacttype" data-ng-controller="ContacttypeCtrl"
	ng-init=init();
	class=" textCenter thumbnail thumbnail_controlPanelMisc">
	
	<% String asd=(String)request.getAttribute("errorStatus");

List <PurpleaidACL> xyz= new ArrayList(); 
xyz=(ArrayList<PurpleaidACL>)request.getSession().getAttribute("permissionList"); 
Boolean	createPermission = false; 
Boolean modifyPermission = false;
Boolean	deletePermission = false; //extra 
Boolean modifyPurchaseDatePermission =false;
  String x=xyz.get(0).toString(); for(int i=0;i<xyz.size();i++){
			Double d=new
			Double(xyz.get(i).getPurpleaidACLpermissionID());
			int n=d.intValue(); 
			switch (n) {
	            case 98:deletePermission=true;
	            break;//delete break;
	            case 97:createPermission=true;
	            break;//create break;	
	            case 99:modifyPermission=true; 
	            break;     			
       			default:break;		
			}		
		}%>
		
	<!-- 	<div class="row controlPanelMisc_Thumbnailheading fieldsSpacing">
		<span> Contact Type </span>
	</div>
<div class="row emptyMiscControlPanel_div textCenter" ng-hide="showAct">
	<button ng-hide="showAct"
		ng-click="showAct=!showAct;activateContactype();" type="button"
		class="btn okbtnSize" tabindex="7">Activate</button>
		</div> -->
		 
	<!-- <div class="row emptyMiscControlPanel_div textCenter">
		<button ng-hide="showAct" ng-click="showAct=!showAct" type="button"
			class="btn okbtnSize" tabindex="7">Activate</button>
	</div>  -->
	<div class="row controlPanelMisc_Thumbnailheading fieldsSpacing">
					<span> Contact Type </span>
				</div>
	<div  onload=GetClock();>
  <div class="">
			<!-- <div class="row controlPanelMisc_Thumbnailheading fieldsSpacing">
					<span> Contact Type </span>
				</div> -->
			<div class="row fieldsSpacing">
				<nav class="mainnav ">
					<ul class="leftFloat_Menu" id="list-nav">
						<li><a ng-click="refresh()" title="" class="highlight_blue">Refresh</a></li>
					</ul>
					<ul class="rightFloat_Menu screensBtnColor" id="list-nav">
						<%if(createPermission || modifyPermission ){%>
						<li><a title="" class=""
							ng-click="showAddModifyContactTypePopup()">{{buttonText}}</a></li>
						<%}%>
						<%if(deletePermission){%>
						<li><a id="removeLink" ng-click="remove();" title=""
							class="not_implemented_link not_active">Remove</a></li>
						<%}%>
					</ul>
				</nav>
			</div>
			<div class="row fieldsSpacing">
				<!--=============GRID==========  -->
				<div id="grid" tabindex="-1"
					class="controlPanelMisc_ContactTypeGride"></div>
				<!--=============GRID==========  -->
			</div>
		</div>
		<toast></toast>

		<!-- <div ng-show="spinner"
			style="z-index: 999999; position: absolute; background-color: black; height: 50%; width: 50%; opacity: 0.3;">
			<img
				style="position: absolute; width: 480px; /*image width */ height: 320px; /*image height */ left: 50%; top: 50%; margin-left: -240px; /*image width/2 */ margin-top: -160px;"
				src="images/loading.gif"> </img>
		</div> -->
		

	</div>

	
	
<!-- 
 <div class=" textCenter thumbnail thumbnail_controlPanelMisc No_accessBG">   
    <div class="row ActivateBtn_div">
     <button type="button" disabled="{{isDisabled}}" class="btn ActivateBtn canclebtnSize" tabindex="7">No Access</button>
    </div>  
    </div> -->
  


</div>