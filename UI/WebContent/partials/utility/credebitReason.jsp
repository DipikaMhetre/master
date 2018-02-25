<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%> 
<div id="Credebitreason" data-ng-controller="CredebitReasonCtrl" ng-init=init() class=" textCenter thumbnail thumbnail_controlPanelMisc">
<% String asd=(String)request.getAttribute("errorStatus");
 if(asd == null){
List <PurpleaidACL> xyz= new ArrayList(); xyz=(ArrayList<PurpleaidACL>)
		request.getSession().getAttribute("permissionList"); 
  Boolean createPermission = false; 
  Boolean modifyPermission = false; 
  Boolean deletePermission = false;
  Boolean modifyPurchaseDatePermission =false;//extra 
		String x=xyz.get(0).toString(); 
  for(int i=0;i<xyz.size();i++){
			Double d=new Double(xyz.get(i).getPurpleaidACLpermissionID());
			int n=d.intValue(); switch (n) {
	           case 102:deletePermission=true;
	           break;//delete break;
	            case 101:createPermission=true;
	            break;//create break;	
	            case 103:modifyPermission=true; 
	            break;     			
	          
			
       			default:break;		
			}		
		}%>
<!--  <div class="row controlPanelMisc_Thumbnailheading fieldsSpacing">
					<span> Credit/Debit Note Reason </span>
				</div>
		<div class="row emptyMiscControlPanel_div textCenter" ng-hide="showReason">
				 <button ng-hide="showReason" ng-click="showReason=!showReason;activateReasonWidget();"
		  class="btn okbtnSize" tabindex="8">Activate</button>
		  </div> -->
		  <div class="row controlPanelMisc_Thumbnailheading fieldsSpacing">
					<span> Credit/Debit Note Reason </span>
				</div>
		<div  onload=GetClock();>
		<div class=" ">
				
				<div class="row fieldsSpacing">
					<nav class="mainnav ">
						<ul class="leftFloat_Menu" id="list-nav">
							<li><a ng-click="Refresh()" title="" class="highlight_blue">Refresh</a></li>

						</ul>
						<ul class="rightFloat_Menu screensBtnColor" id="list-nav">
							<li ng-show="Msg=='ON'" class="highlight_orange"><span>Cannot
									be remove inbuilt value</span></li>
									<%if(createPermission || modifyPermission ){%>
							<li><a title="" class=""
								ng-click="showAddModifyCreditDebitNoteReasonPopup()"
								ng-hide="hide">{{buttonaddText}}</a></li>
									<%}%>
						<%if(deletePermission){%>
							<li><a id="removeLinkReason" ng-click="removereason()"
								class="not_implemented_link not_active" ng-hide="hide">Remove</a></li>
									<%}%>
						</ul>
					</nav>
				</div>
				<div class="row fieldsSpacing">
					<!--=============GRID==========  -->
					<div id="grid2" tabindex="-1"
						class="controlPanelMisc_ContactTypeGride"></div>
					<!--=============GRID==========  -->
				</div>
			</div>
		
		</div> 
		<%}else{%>
		<div class=" textCenter thumbnail thumbnail_controlPanelMisc No_accessBG">   
    <div class="row ActivateBtn_div">
     <button type="button" disabled="{{isDisabled}}" class="btn ActivateBtn canclebtnSize" tabindex="7">No Access</button>
    </div>  
    </div>
			<%}%>
		</div>