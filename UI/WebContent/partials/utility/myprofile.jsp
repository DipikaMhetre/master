<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<title>My Profile</title>
<div id="MyProfileManager" data-ng-controller="MyProfileManagerCtrl" ng-init=init()>
<div ng-show="spinner"
	style="z-index: 999999; position: absolute; background-color: black; height: 100%; width: 100%; opacity: 0.3;">
	<img
		style="position: absolute; width: 480px; /*image width */ height: 320px; /*image height */ left: 50%; top: 50%; margin-left: -240px; /*image width/2 */ margin-top: -160px;"
		src="images/loading.gif"> </img>
</div>
	<Section class="pageheader BottomZero">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a  title="New Contact Manager"
					class="highlight_purple not_active">My Profile</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,115);" title="Reload this page">Refresh</a></li>
				<li><a  title="Help"
					class="not_implemented_link not_active">Help</a></li>
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
	<!-- <div class="row container fields_headingSpacing fieldsBot_Spacing_lg">
		<div class="col-md-12 MyProfileVisitingCard">
		
		</div>
	</div>	
		 -->
	<div
		class="row container fieldsBot_Spacing_lg MyProfileVisitingCardView">
		<div class="MyProfileVisitingCard">
			<img ng-click="showMyDetailsPopup()"
				class=" MyProfileVisitingCard_EditBtn" alt="" src="images/edit.png">
			<span style="font-size: 20px; color: #cc0099; line-height: 1.9;  margin-left: 3%;" ng-model="showname">{{showname}}</span><br>
			<span style="font-size: 17px; line-height: 1.9;  margin-left: 3%;" ng-model="ShowContactSelected.contactjobTitle">{{ShowContactSelected.contactjobTitle}}</span> <br> <span
				style="font-size: 17px; line-height: 1.9;  margin-left: 3%;" ng-model="ShowContactSelected.contactOrganization">{{ShowContactSelected.contactOrganization}}</span>
			<div class=" MyProfileVisitingCard_BottomSection fieldsSpacing">
				<span class="" style="font-size: 17px; margin-left: 3%;"ng-model="ShowContactSelected.contactTypeDescription">{{ShowContactSelected.contactTypeDescription}}</span>
			</div>
		</div>
	</div>
	<div class="row container fields_headingSpacing">
		<div class="col-md-1"></div>
		<div class="col-md-5 sectionvline">
			<div class="row">
				<div class="col-md-11">
					<div class="row">
						<h5>
							<span class="submenuBlue_heading">Login History</span>
						</h5>
						<hr class="horizontal_line">
					</div>
					<div class="row fieldsSpacing fieldsTop_Spacing">
						<div class="col-md-12">
							<!--=============GRID==========  -->
							<div id="grid" tabindex="14" class="MyProfile_LoginHistory_Grid"></div>
							<!--=============GRID==========  -->
						</div>
					</div>
					<div class=" BottomSection">
						<div class="ShowNextPad rightFloat">
							<div class=" showNextPos">
								<span class="">Show&nbsp;next</span> <input
									class=" input-sm textRight" style="width: 60px;" type="text" tabindex="5" ng-model="listLimit" value="{{listLimit}}">
								<button ng-click="updateGridData()"
									class="Go_btn btn btn-primary" tabindex="6">Go</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-5">
			<div class="row">
				<div class="col-md-1"></div>
				<div class="col-md-11">
					<div class="row">
						<h5>
							<span class="submenuBlue_heading">Login Profile</span>
						</h5>
						<hr class="horizontal_line">
					</div>
					<div class="row">
						<div class="form-group">
							<span class="col-md-2 control-label">User&nbsp;ID</span>
							<div class="col-md-10">
								<input type="text" 
									class="form-control input-sm company_master_companyName"
									readonly="readonly" ng-model="ShowUserId.contactUserName" value="{{ShowUserId.contactUserName}}">
							</div>
						</div>
					</div>
					<div class="row fieldsBot_Spacing">
						<div class="col-md-12">
							<a ng-click="showResetPasswordPopup()"
								class="rightFloat screensBtnColor" title="">Reset Password</a>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<span class="col-md-2 control-label">Roles</span>
						<div class="col-md-10">
							<!--=============GRID==========  -->
							<div id="grid2" tabindex="14" class="MyProfile_Role_Grid"></div>
							<!--=============GRID==========  -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-1"></div>
	</div>
</div>
