 <%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="narrtionmisc" data-ng-controller="NarrationMiscCtrl" ng-init=init() class=" textCenter thumbnail thumbnail_controlPanelMisc">
 	<% String asd=(String)request.getAttribute("errorStatus");
 if(asd == null){
List <PurpleaidACL> xyz= new ArrayList(); xyz=(ArrayList<PurpleaidACL>)
		request.getSession().getAttribute("permissionList"); Boolean
		createPermission = false; Boolean modifyPermission = false; Boolean
		deletePermission = false; Boolean modifyPurchaseDatePermission =false;//extra 
		String x=xyz.get(0).toString(); for(int i=0;i<xyz.size();i++){
			Double d=new
			Double(xyz.get(i).getPurpleaidACLpermissionID());
			int
			n=d.intValue(); switch (n) {
	            case 104:
			deletePermission=true;;//delete break;
	            case 106:
			createPermission=true;//create break;	
	            case 105:
			modifyPermission=true; break;     			
	            case 107:
			
       			default:break;		
			}		
		}%>
		 <div class="row controlPanelMisc_Thumbnailheading fieldsSpacing">
					<span> Voucher Narration Entries </span>
				</div> 
				
		    		<div  onload=GetClock();>
			<div class="">
			
				<div class="row fieldsSpacing">
					<nav class="mainnav">
						<ul class="leftFloat_Menu" id="list-nav">
							<li><a ng-click="RefreshNarration();" class="highlight_blue">Refresh</a></li>
						</ul>
						<ul class="rightFloat_Menu screensBtnColor" id="list-nav">
						<%if(createPermission || modifyPermission ){%>
							<li><a title="" class=""
								ng-click="showAddModifyVoucherNarrationEntriesPopup()">{{buttonvoucherText}}</a></li>
									<%}%>
						<%if(deletePermission){%>
								
							<li><a id="removeNaration"
								class="not_implemented_link not_active"
								ng-click="removeNaration()">Remove</a></li>
								<%}%>
						</ul>
					</nav>
				</div>
				<div class="row fieldsSpacing">
					<!--=============GRID==========  -->
					<div id="grid3" tabindex="-1"
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
    </div>> 
  


	<%}%>
			</div>