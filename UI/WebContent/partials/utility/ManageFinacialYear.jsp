<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%> 
<div id="managefinacialyear" data-ng-controller="ManageFinacialYearCtrl" ng-init=init() class=" textCenter thumbnail thumbnail_controlPanelMisc">
		<% String asd=(String)request.getAttribute("errorStatus");

List <PurpleaidACL> xyz= new ArrayList(); xyz=(ArrayList<PurpleaidACL>)
		request.getSession().getAttribute("permissionList"); Boolean
		createPermission = false; Boolean modifyPermission = false; Boolean
		deletePermission = false; Boolean modifyPurchaseDatePermission =false;//extra 
		String x=xyz.get(0).toString(); for(int i=0;i<xyz.size();i++){
			Double d=new
			Double(xyz.get(i).getPurpleaidACLpermissionID());
			int
			n=d.intValue(); switch (n) {
	            case 108:
			createPermission=true;//create break;	
	            case 109:
			modifyPermission=true; break;     			
	            case 110:
			
       			default:break;		
			}		
		}%>
    	<div class="row controlPanelMisc_Thumbnailheading fieldsSpacing">
					<span>Manage Financial Year</span>
				</div>
				
			<div  onload=GetClock();>
			<div class=" ">
				<div class="row fieldsBot_Spacing">
					<nav class="mainnav">
						<ul class="leftFloat_Menu" id="list-nav">
							<li><a title="" class="highlight_blue">Refresh</a></li>
							<%if(createPermission || modifyPermission){%>
							<li><a title="" class="highlight_blue" ng-click="SaveYear()">Save</a></li>
							<%}%>
						</ul>
					</nav>
				</div>
				<div class="container textLeft">
					<div class="row">
						<hr class="horizontal_line">
					</div>
					<div class="row fieldsBot_Spacing ">
						<div class=" col-md-4">
							<span class="">Financial&nbsp;Year</span>
						</div>
						<div class=" col-md-6">
							<select class="form-control input-sm input_rightSpecing FinancialYearSelect" tabindex="1"
								ng-options="opt.financialYearId as opt.financialYearToYear for opt in FinacialYearList" ng-model="FinacialYearSelected.financialYearId"
								ng-change=ChangeYear();>
								 <option value='' disabled selected style='display:none;'>&nbsp;&nbsp;Please select</option> 
							</select>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class=" col-md-4">
							<input type="checkbox" ng-model="FinacialYearSelected.financialYearFlgLock" ng-value="{{FinacialYearSelected.financialYearFlgLock}}" ng-disabled="FinacialYearSelected.financialYearFlgActive==true">&nbsp;Lock
						</div>
						<div class=" col-md-8">
							<input class="form-control input-sm FinancialYearInput1" type="text" 
								readonly="readonly" ng-model="FinacialYearSelected.financialYearCreatedByUserName">
						</div>
					</div>
					<div class="row fieldsBot_Spacing_lg">
						<div class=" col-md-4">
							<span>Remark</span>
						</div>
						<div class=" col-md-8">
							<textarea rows="1" cols="" class="textarea_fixSize FinancialYearInput1" ng-model="FinacialYearSelected.financialYearLockRemark" ng-value="{{FinacialYearSelected.financialYearLockRemark}}"></textarea>
						</div>
					</div>
					<!-- <div class="row">
						<hr class="horizontal_line">
					</div> -->
					<div class="row fieldsSpacing">
						<div class=" col-md-4">
							<input type="checkbox" ng-model="FinacialYearSelected.financialYearFlgActive" ng-value="{{FinacialYearSelected.financialYearFlgActive}}" ng-disabled="FinacialYearSelected.financialYearFlgLock==true"> <span>Freeze</span>
						</div>
						<div class=" col-md-8">
							<input class="form-control input-sm FinancialYearInput1" type="text"
								readonly="readonly" ng-model="FinacialYearSelected.financialYearFreezeCreatedByUserName" >
						</div>
					</div>
					<div class="row fieldsBot_Spacing_lg">
						<div class=" col-md-4">
							<span>Remark</span>
						</div>
						<div class=" col-md-8">
							<textarea rows="1" cols="" class="textarea_fixSize FinancialYearInput1" ng-model="FinacialYearSelected.financialYearActiveRemark" ng-value="{{FinacialYearSelected.financialYearActiveRemark}}"></textarea>
						</div>
					</div>
				</div>
			</div>
			</div>
		
	

<!--  <div class=" textCenter thumbnail thumbnail_controlPanelMisc No_accessBG">   
    <div class="row ActivateBtn_div">
     <button type="button" disabled="{{isDisabled}}" class="btn ActivateBtn canclebtnSize" tabindex="7">No Access</button>
    </div>  
    </div>  -->
  


	
		</div>
