 <%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%> 
<div id="salesmanreceipt" data-ng-controller="SalesmanRecieptCtrl" ng-init=init(); 	class=" textCenter thumbnail thumbnail_controlPanelMisc" class=" textCenter thumbnail thumbnail_controlPanelMisc">
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
	            case 111:
			deletePermission=true;;//delete break;
	            case 113:
			createPermission=true;//create break;	
	            case 112:
			modifyPermission=true; break;     			
	            case 114:
			
       			default:break;		
			}		
		}%>
		<div class="row controlPanelMisc_Thumbnailheading fieldsSpacing">
		<span>Manage Receipt Books</span><div>
		<!-- <div class="row emptyMiscControlPanel_div textCenter" ng-hide="showReciept">
		<button ng-hide="showReciept" ng-click="showReciept=!showReciept;acivateReceiptWidget();"
		  class="btn okbtnSize" tabindex="10">Acivate</button>
		  </div> -->
	</div>
		<div  onload=GetClock();>
			<div class="">
				<div class="row fieldsSpacing">
					<nav class="mainnav">
						<ul class="leftFloat_Menu" id="list-nav">
							<li><a  class="highlight_blue" ng-click="refresh()">Refresh</a></li>
						</ul>
						<ul class="rightFloat_Menu screensBtnColor" id="list-nav">
							<li><a class="" ng-click="showFilterManageReceiptBooks()">Filter(<span ng-class="filterStatus=='ON'?'highlight_purple':''" >{{filterStatus}}</span>)</a></li>
							<li><img alt="" class="filterOff_closeImage"  ng-click="cancelFilter()" ng-show="filterStatus=='ON'" src="images/contacts_manager/close.png"></li>	
						
							<%if(createPermission || modifyPermission){%>
							<li><a title="" class=""
								ng-click="showAddModifyManageReceiptBooksPopup()">{{ButtonReceipt}}</a></li>
								<%}%>
									<%if(deletePermission){%>
							<li><a class="" ng-click="removeRecieptBook()">Remove</a></li>
										<%}%>
						</ul>
					</nav>
				</div>
				<div class="row fieldsSpacing">
					<!--=============GRID==========  -->
					<div id="grid4" tabindex="-1" class="controlPanelMisc1_Grid"></div>
					<!--=============GRID==========  -->
				</div>
				<div class="container">
					<div class="row fieldsSpacing">
						<div class="col-md-12">
							<div class=" BottomSection BottomSection_ControlPanelMisc">
								<div class="ShowNextPad rightFloat">
									<div class="rightFloat">
										<span class="">Show&nbsp;next</span> <input
											class=" input-sm textRight ControlPanelMisc_ShowNextInput"
											type="text" tabindex="5">
										<button ng-click="acivateReceiptWidget()"
											class="Go_btn btn btn-primary" tabindex="6">Go</button>
									</div>
								</div>
							</div>
						</div>
					</div>
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