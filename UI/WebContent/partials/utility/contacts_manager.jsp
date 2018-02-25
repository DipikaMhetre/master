<title>People Manager</title>
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="ContactManager" data-ng-controller="ContactManagerCtrl" ng-init=init()>
<div ng-show="spinner"
	style="z-index: 999999; position: absolute; background-color: black; height: 100%; width: 100%; opacity: 0.3;">
	<img
		style="position: absolute; width: 480px; /*image width */ height: 320px; /*image height */ left: 50%; top: 50%; margin-left: -240px; /*image width/2 */ margin-top: -160px;"
		src="images/loading.gif"> </img>
</div>
<div>
	<toast></toast>
	<% List<PurpleaidACL> xyz= new ArrayList();
		xyz=(ArrayList<PurpleaidACL>) request.getSession().getAttribute("permissionList"); 
		Boolean createPermission = false;
		Boolean modifyPermission = false;
		Boolean deletePermission = false;
		Boolean viewAdvanceSettingAndUid = false;
		Boolean modifyAdvanceSettingAndUid = false;
		Boolean modifyPurchaseDatePermission = false;//extra
		String x=xyz.get(0).toString();
		for(int i=0;i<xyz.size();i++){
			Double d = new Double(xyz.get(i).getPurpleaidACLpermissionID());
			int n=d.intValue();
			 switch (n) {
	            case 63: deletePermission = true;;//delete 
	                    break;
	            case 62: createPermission = true;//create
	            		break;	
	            case 64: modifyPermission = true;
                		break;
	            case 149: viewAdvanceSettingAndUid = true;
        				break;
	            case 150: modifyAdvanceSettingAndUid = true;
        				break;
       			default:break;		
			} 		
		}
		
		%>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat" id="list-nav">
				<li><a href="#" title="New Contact Manager"
					class="highlight_purple not_active">People Manager</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,61);" class="">Refresh</a></li>
				<li><a href="#" title="Export"
					class="not_implemented_link not_active">Export </a></li>
				<li><a class="not_implemented_link not_active">Print</a></li>

				<%if(createPermission || modifyPermission){%>
					<li ng-show="showSaveBtn"><a ng-click="saveContact()" title="Print" class=""
					tabindex="38">Save</a></li>
					<%}%>
				<%if(createPermission){%>
				<li><a ng-click="newContact()">New</a></li>
				<%}%>
				<li><a ng-click="deleteContact()">Delete</a></li>
				<li><a title="Help"
					class="not_implemented_link not_active">Help</a></li>
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
				<div class="row">
					<select  id="entityTypeSelect" ng-options="opt.entityDeatilsDescription for opt in mixContactTypeList" ng-model="mixTypeSelected" ng-change="onMixTypeSelection(mixTypeSelected)" class="input-sm masterPage_grid input_rightSpecing" tabindex="1"></select>
				</div>
			</div>
			<div class="row masterPage_fieldSpacing">
				<!--=============GRID==========  -->
				<div id="grid" tabindex="-1" class="contactsManager_leftGride"></div>
				<!--=============GRID==========  -->
			</div>
			<div class="row master_filterPos group-inline">
				<a ng-click="showFilterPopup()" title="Filter">Filter(<span class="highlight_purple" ng-show="filterStatus=='ON'">{{filterStatus}}</span><span ng-show="filterStatus=='OFF'">{{filterStatus}}</span>) </a>
				<!-- <button ng-click="cancelFilter()" ng-show="filterStatus=='ON'" type="button" class="btn btn-default"></button>
				 --><img alt="" class="filterOff_closeImage"  ng-click="cancelFilter()" ng-show="filterStatus=='ON'" src="images/contacts_manager/close.png">
		
			</div>
				<div class="row container filterBottomSec">
					<div class="col-md-2 limitSection_pos">
						<span class="showNext_pos">Show&nbsp;next</span>
					</div>
					<div class="col-md-6 limitSection_pos">
						<input ng-disabled="!editable" class="form-control input-sm contactType_limit textRight"
							
							id="contactType_limit" type="text" ng-model="listLimit"
							value="{{listLimit}}">
					</div>
					<div class="col-md-3 Go_colPos">
						<button ng-disabled="!editable" ng-click="updateGridData()"
							class=" btn_Go btn btn-primary">Go</button>
					</div>
				</div>
			</div>
		<div class="col-md-10">
			
				<div class="row masterTop_GrayStrip">
					<h6>
						<span class="masterTop_StripText">People
							Manager&nbsp;-&nbsp; <span ng-show="isNew"class="masterHeading">New</span>
							<span ng-hide="isNew" class="masterHeading">{{showContactSelected.contactFirstName}} {{showContactSelected.contactLastName}}</span>
						</span>
					</h6>
				</div>
				<div class="row fields_headingSpacing ">
					<div class="col-md-1 images">
						<img id="myimg" ng-click="showUploadImgPopup()" alt="" src="images/contacts_manager/450-450.jpg">
					</div>
					<!-- <div class="focus">
						<div class="container"></div>
						<div class="controls">
							<button class="btn canclebtnSize">Cancel</button>
							<button class="btn okbtnSize" id="file">Change</button>
						</div>
					</div>
 -->					<div class="col-md-11">
						<div class="row fieldsSpacing">
							<div class=" col-md-1">
								<span class="control-label">Name</span>
							</div>
							<div class="col-md-1">
								<select ng-disabled="!editable"
									class="form-control productboxSize input_rightSpecing input-sm input_rightSpecing contactManager_nameTitleInput_sm" style="width: 61px;" data-ng-options="opt.id as opt.name for opt in contactNameTitles" ng-model="showContactSelected.contactNameTitle"
									id="contact_name_title"									
									tabindex="2">
								</select>
							</div>
							<div class="col-md-7">
								<div class="row fieldsSpacing">
									<div class="col-md-4">
										<input ng-disabled="!editable" type="text" id="first_name" name="first_name" allow-textwithspace
											class="form-control input-sm contactManager_nameInput_sm"
											tabindex="3" name="firstName" required
											placeholder="First Name"
											ng-model="showContactSelected.contactFirstName" value="{{showContactSelected.contactFirstName}}" onclick="Purplevalidator('first_name',2,'ContactManager','')" onfocus="Purplevalidator('first_name',2,'ContactManager','')">
							
									</div>
									<div class="col-md-4">
										<input ng-disabled="!editable" type="text" id="middle_name" name="middle_name" allow-textwithspace
											class="form-control input-sm contactManager_nameInput_sm"
											tabindex="4" name="middleName" placeholder="Middle Name"
											 ng-model="showContactSelected.contactMiddleName" value="{{showContactSelected.contactMiddleName}}">
									</div>
									<div class="col-md-4">
										<input ng-disabled="!editable" type="text" id="last_name" name="last_name" allow-textwithspace
											class="form-control input-sm contactManager_nameInput_sm"
											tabindex="5" name="lastName" required placeholder="Last name"
										ng-model="showContactSelected.contactLastName" value="{{showContactSelected.contactLastName}}" onclick="Purplevalidator('last_name',2,'ContactManager','')" onfocus="Purplevalidator('last_name',2,'ContactManager','')">
									</div>
								</div>
							</div>
							<div class=" col-md-1">
								<span class="control-label">Nickname</span>
							</div>
							<div class="col-md-2">
								<input ng-disabled="!editable" type="text" id="nick_name" name="nick_name" allow-textwithspace
									class="form-control input-sm" tabindex="6"
									ng-model="showContactSelected.contactNickName" value="{{showContactSelected.contactNickName}}">					
							</div>
						</div>
						<div class="row fieldsSpacing">
							<div class="col-md-1">
								<span class="control-label">Contact&nbsp;Type</span>
							</div>
							<div class="col-md-2">
								<select ng-disabled="!editable"
									class="input-sm full_width  input_rightSpecing contactManager_contactTypeInput_sm" id="contact_type"
									tabindex="7"  ng-options="opt.entityDetailsId as opt.entityDeatilsDescription for opt in entityContactTypeList" ng-model="showContactSelected.contactTypeId" >
								</select>
							</div>
							<div class=" col-md-1">
								<span class="control-label contactManager_jobTitleLabel_sm">Job&nbsp;Title</span>
							</div>
							<div class="col-md-2">
								<input ng-disabled="!editable" type="text" id="job_title" name="job_title" allow-textwithspace
									class="form-control input-sm contactManager_jobTitleInput_sm"
									tabindex="8" ng-model="showContactSelected.contactjobTitle" value="{{showContactSelected.contactjobTitle}}">
							
							</div>
							<div class=" col-md-1">
								<span class="control-label">Organization</span>
							</div>
							<div class="col-md-2">
								<input ng-disabled="!editable" type="text" id="company" name="company" allow-textwithspace
									class="form-control input-sm contactManager_organizationInput contactManager_orgnizationInput_sm"
									tabindex="9" ng-model="showContactSelected.contactOrganization" value="{{showContactSelected.contactOrganization}}">
							
							</div>
							<div class=" col-md-1">
								<span class="control-label">Label</span>
							</div>
							<div class="col-md-2">
								<input ng-disabled="!editable" type="text" id="label" name="label" allow-textwithspace
									class="form-control input-sm" tabindex="10"
									 ng-model="showContactSelected.contactLabel" value="{{showContactSelected.contactLabel}}">							
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<h5 class="col-md-2">
						<span class="submenuBlue_heading" style="margin-left: 5px;">Miscellaneous&nbsp;Information</span>
					</h5>
					<div class="col-md-8 peopleManagerCol-md-8">
					<nav class="mainnav miscInformationBtn">
						<ul class="rightFloat" id="list-nav">												
							<li><a ng-class="!editable?'not_implemented_link not_active':''" ng-click="editModeOn = !editModeOn;" class=" ">Remove Misc Information(<span ng-show="editModeOn"class="highlight_purple">ON</span><span ng-hide="editModeOn">OFF</span>)</a></li>
						</ul>					
					</nav>
					<!-- <a><button type="button" class="btn btn_RemoveWhite" id='bt1' tabindex="11"
								value='Show Layer' ng-click="editModeOn = !editModeOn">Delete</button>
						</a> -->
					</div>
					<div class="col-md-2 socialNetwork_linkImages peopleManagerCol-md-2">
						<span>
							<img ng-class="getSocialClass('twitter')" ng-click="socialMediaPopup()" class="contactsManagerImages"
								 alt=""
								src="images/contacts_manager/3.jpg">
						</span> 
						<span> 
							<img ng-class="getSocialClass('linkedin')" ng-click="socialMediaPopup()" class="contactsManagerImages" style="cursor: pointer;" alt=""
								src="images/contacts_manager/2.png">
						</span>
						<span> 
							<img ng-class="getSocialClass('facebook')"
								ng-click="socialMediaPopup()" class="contactsManagerImages"
								 alt=""
								src="images/contacts_manager/1.jpg">
						</span>
					</div>
				</div>
				<div class="row">
					<hr class="horizontal_line">
				</div>
				
				<div class="ContactsManagerScroll_section menu_scrollbar"
					id="peopleManager_scrollstyle">					
					<div class="row">
						<div class="col-md-4 sectionvline">
							<div class="row fieldsSpacing">
								<span class="col-md-1" style="width: 1%;"> <img alt=""
									id="related_name_add" ng-hide="editModeOn"
									src="images/contacts_manager/1433516856_circle-add.png"
									ng-class="!editable?'not_implemented_link not_active':''"
									class="btn_addField" ng-click="addArrayElement('related')">

								</span> <span class="col-md-10"> <b>Related People</b>
								</span>
							</div>
							<div>
								<div
									data-ng-repeat="choice in showContactSelected.contactRelatedNamesList">
									<div style="position: absolute;">
										<img id="" alt=""
											ng-class="!editable?'not_implemented_link not_active':''"										
											src="images/contacts_manager/1433515251_circle-cross.png"
											ng-click="removeArrayElement('related',$index)"
											class="btn_addField" ng-show="editModeOn">
									</div>
									<div class="contacts_manager_detailsBtn fieldsSpacing_sm" >

										<select ng-disabled="!editable"
											ng-options="opt.entityDeatilsDescription for opt in entityContactTypeList track by opt.entityDeatilsDescription" ng-model="choice.entity" 
											class="input-sm contact_manager_input_textbox1 input_rightSpecing"
											tabindex="12">
										</select> <!-- <input class="input-sm contact_manager_input_textbox"
											type="text" ng-model="choice.relatedNames" placeholder=""
											tabindex="14"> -->
											<select	ng-disabled="!editable" class="input-sm contact_manager_input_textbox" ng-options="opt.contactId as opt.contactFirstName+ '  '+opt.contactLastName for opt in allContactList | relatedDropdownFilter:choice.entity.entityDetailsId | orderBy:'contactFirstName'" ng-model="choice.relatedNamesId"  tabindex="13">	</select>
											<!-- | relatedDropdownFilter:choice.entity.entityDetailsId    entityDetailsTypeId-->  
									</div>
									
								</div>
							</div>
						</div>
						<div class="col-md-4 sectionvline">
							<div class="row fieldsSpacing">
								<span class="col-md-1" style="width: 1%;"> <img
									ng-class="!editable?'not_implemented_link not_active':''"
									id="address_add" alt="" ng-hide="editModeOn"
									src="images/contacts_manager/1433516856_circle-add.png"
									class="btn_addField" ng-click="addArrayElement('address')">
								</span> <span class="col-md-10"> <b>Address</b>
								</span>
							</div>
							<div>
								<div
									data-ng-repeat="choice in showContactSelected.contactAddressList">
									<div style="position: absolute;">
										<img alt=""
											ng-class="!editable?'not_implemented_link not_active':''"
											src="images/contacts_manager/1433515251_circle-cross.png"
											ng-click="removeArrayElement('address',$index)"
											class="btn_addField" ng-show="editModeOn">
									</div>
									<div class="contacts_manager_detailsBtn fieldsSpacing_sm">
										<select
											ng-disabled="!editable"
											ng-options="opt.entityDeatilsDescription for opt in entityAddressList track by opt.entityDeatilsDescription"
											ng-model="choice.entity"
											class="input-sm contact_manager_input_textbox1 input_rightSpecing"
											tabindex="14">
										</select> <input ng-disabled="!editable" readonly class="input-sm contact_manager_input_textbox_Address"
											type="text" ng-model="choice.addressSummary" placeholder=""
											tabindex="15">
											<img  
											ng-class="!editable?'not_implemented_link not_active':''"
											src="images/contacts_manager/openPopup.png"								
											ng-click="showAddressPopup('modify',$index)"
											 tabindex="16"
											ng-hide="editModeOn">
									</div>							
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="row fieldsSpacing">

								<span class="col-md-1" style="width:1%;"> 
								<img ng-class="!editable?'not_implemented_link not_active':''"
									id="phone_add" alt="" ng-hide="editModeOn"
									src="images/contacts_manager/1433516856_circle-add.png"
									class="btn_addField" ng-click="addArrayElement('phone')">
								</span> <span class="col-md-10"> <b>Phone</b>
								</span>
							</div>
							<div>
								<div
									data-ng-repeat="choice in showContactSelected.contctPhoneList">
									<div style="position:absolute;">
										<img id="" alt=""
											ng-class="!editable?'not_implemented_link not_active':''"
											src="images/contacts_manager/1433515251_circle-cross.png"
											ng-click="removeArrayElement('phone',$index)"
											class="btn_addField" ng-show="editModeOn">
									</div>
									<div class="contacts_manager_detailsBtn fieldsSpacing_sm">
										<select  ng-disabled="!editable" ng-options="opt.entityDeatilsDescription for opt in entityPhoneList track by opt.entityDeatilsDescription"  ng-model="choice.entity"		
											class="input-sm contact_manager_input_textbox1 input_rightSpecing"
											tabindex="17">
										</select> <input  ng-disabled="!editable"
											class="input-sm contact_manager_input_textbox textRight"  id="{{'phone_'+$index}}" name=mobile" id="mobile" allow-numbers type="text" ng-model="choice.phone" tabindex="18" onblur="Purplevalidator('{{'phone_'+$index}}',1,'ContactManager','blur')" onclick="Purplevalidator('{{'phone_'+$index}}',1,'ContactManager','')" onfocus="Purplevalidator('{{'phone_'+$index}}',1,'ContactManager','')">

											<!-- <script type="text/javascript">$('#'+"{{'phone_'+$index}}").allowNumbersOnly();</script> -->
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row MiscellaneousInformationSpac">
						<div class="col-md-4 sectionvline">
							<div class="row fieldsSpacing">
								<span class="col-md-1" style="width: 1%;"> <img
									ng-class="!editable?'not_implemented_link not_active':''"
									id="important_dates_add" alt="" ng-hide="editModeOn"
									src="images/contacts_manager/1433516856_circle-add.png"
									class="btn_addField" ng-click="addArrayElement('dates')">
								</span> <span class="col-md-10"> <b>Important Dates</b>
								</span>
							</div>
							<div>
								<div
									data-ng-repeat="choice in showContactSelected.contctImportantDatesList">
									<div style="position: absolute;">
										<img id="" alt=""
											ng-class="!editable?'not_implemented_link not_active':''"
											src="images/contacts_manager/1433515251_circle-cross.png"
											ng-click="removeArrayElement('dates',$index)"
											class="btn_addField" ng-show="editModeOn">
									</div>
									<div class="contacts_manager_detailsBtn fieldsSpacing_sm">
										<select
											ng-disabled="!editable"
											 ng-options="opt.entityDeatilsDescription for opt in entityDateList track by opt.entityDeatilsDescription"  ng-model="choice.entity" 
											class="input-sm contact_manager_input_textbox1 input_rightSpecing"
											tabindex="19">
										</select> <input ng-disabled="!editable"
											class="input-sm contact_manager_input_textbox textCenter"
											type="eu-date" ng-model="choice.importantDates" tabindex="20">
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4 sectionvline">
							<div class="row fieldsSpacing">
								<span class="col-md-1" style="width: 1%;"> <img
									ng-class="!editable?'not_implemented_link not_active':''"
									id="email_add" alt="" ng-hide="editModeOn"
									src="images/contacts_manager/1433516856_circle-add.png"
									class="btn_addField" ng-click="addArrayElement('email')" >
								</span> <span class="col-md-10"> <b>Email</b>
								</span>
							</div>
							<div>
								<div
									data-ng-repeat="choice in showContactSelected.contactEmailList">
									<div style="position: absolute;">
										<img id="" alt=""
											ng-class="!editable?'not_implemented_link not_active':''"
											src="images/contacts_manager/1433515251_circle-cross.png"
											ng-click="removeArrayElement('email',$index)"
											class="btn_addField" ng-show="editModeOn">
									</div>
									<div class="contacts_manager_detailsBtn fieldsSpacing_sm">
										<select ng-disabled="!editable" ng-options="opt.entityDeatilsDescription for opt in entityEmailList track by opt.entityDeatilsDescription"  ng-model="choice.entity"
											
											class="input-sm contact_manager_input_textbox1 input_rightSpecing"
											tabindex="21">
										</select> <input ng-disabled="!editable"
											class="input-sm contact_manager_input_textbox" id="emails"
											ng-model="choice.email" tabindex="22" >

									</div>
									
								</div>

							</div>
						</div>
						<div class="col-md-4">
							<div class="row fieldsSpacing">
								<span class="col-md-1" style="width: 1%;"> <img
									ng-class="!editable?'not_implemented_link not_active':''"
									id="url_add" alt="" ng-hide="editModeOn"
									src="images/contacts_manager/1433516856_circle-add.png"
									class="btn_addField" ng-click="addArrayElement('url')" >
								</span> <span class="col-md-10"> <b>URL</b>
								</span>
							</div>
							<div>
								<div
									data-ng-repeat="choice in showContactSelected.contactUrlList">
									<div style="position: absolute;">
										<img id="" alt=""
											ng-class="!editable?'not_implemented_link not_active':''"
											src="images/contacts_manager/1433515251_circle-cross.png"
											ng-click="removeArrayElement('url',$index)"
											class="btn_addField" ng-show="editModeOn">
									</div>
									<div class="contacts_manager_detailsBtn fieldsSpacing_sm">
										<select
											ng-disabled="!editable"
											ng-options="opt.entityDeatilsDescription for opt in entityUrlList track by opt.entityDeatilsDescription"
											ng-model="choice.entity"
											class="input-sm contact_manager_input_textbox1 input_rightSpecing"
											tabindex="23">
										</select> <input ng-disabled="!editable"
											class="input-sm contact_manager_input_textbox"
											ng-model="choice.url" tabindex="24">
									</div>
									
								</div>
							</div>
						</div>
					</div>				
					<div class="row fieldsSpacing MiscellaneousInformationSpac">
						<div class="col-md-4 sectionvline">
							<div class="row fieldsSpacing">
								<span class="col-md-1" style="width: 1%;"> <img
									ng-class="!editable?'not_implemented_link not_active':''"
									id="important_dates_add" alt="" ng-hide="editModeOn"
									src="images/contacts_manager/1433516856_circle-add.png"
									class="btn_addField" ng-click="addArrayElement('association')">

								</span> <span class="col-md-10"> <b>Association</b>
								</span>
							</div>
							<div>
								<div
									data-ng-repeat="choice in showContactSelected.contactAssociationList">
									<div style="position: absolute;">
										<img id="" alt=""
											ng-class="!editable?'not_implemented_link not_active':''"
											src="images/contacts_manager/1433515251_circle-cross.png"
											ng-click="removeArrayElement('association',$index)"
											class="btn_addField"
											ng-show="editModeOn">
									</div>
									<div class="contacts_manager_detailsBtn fieldsSpacing_sm">
										<select ng-disabled="!editable"
											ng-options="opt.entityDeatilsDescription for opt in entityAssociationList track by opt.entityDeatilsDescription" 
											ng-model="choice.entity"
											ng-change="choice.associationName = ''"
											class="input-sm contact_manager_input_textbox1 input_rightSpecing"
											tabindex="25">
										</select> <input ng-disabled="!editable"
											class="input-sm contact_manager_input_textbox_Address textCenter" type="text"
											readonly ng-model="choice.associationName" tabindex="26">
											<img id="" alt=""
											ng-class="!editable?'not_implemented_link not_active':''"
											src="images/contacts_manager/openPopup.png"								
											ng-click="showAssociationPopup(choice.entity.entityDeatilsDescription,$index)"
											class="" tabindex="27"
											ng-hide="editModeOn">
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
				
				
				<div class="row">
					<h5>
						<span class="submenuBlue_heading">Additional Details</span>
					</h5>
					<hr class="horizontal_line">
				</div>
				<div class="row ">
					<div class="col-md-12">
						<div class="row fieldsSpacing">
							<div class="col-md-1">
								<span class="control-label">HQ</span>
							</div>
							<div class="col-md-3">
								<input ng-disabled="!editable" type="text" id="hq" class="form-control input-sm" tabindex="28"
									 ng-model="showContactSelected.contactHQ" value={{showContactSelected.contactHQ}}>
							</div>
							<div class="col-md-1">
								<span class="control-label">Area</span>
							</div>
							<div class="col-md-3">
								<select ng-disabled="!editable" ng-model="showContactSelected.contactArea" ng-options="opt.areaID as opt.areaDescription for opt in entityAreaList" 
									class="input-sm full_width  input_rightSpecing" tabindex="29">
								</select>
							</div>
							<div class="col-md-1">
								<span class="control-label">Routes</span>
							</div>
							<div class="col-md-3">
								<select ng-disabled="!editable" ng-model="showContactSelected.contactRoute" ng-options="opt.routeID as opt.routeDescription for opt in entityRouteList" 
									class="input-sm full_width input_rightSpecing" tabindex="30">
								</select>
							</div>
						</div>
						<div class="row ">
							<div class="col-md-1">
								<span class="control-label">Notes</span>
							</div>
							<div class="col-md-11">
								<textarea  ng-disabled="!editable" rows="2" cols="11"
									class="textarea_fixSize linked_contact ContactManager_Notes "
									 value="{{showContactSelected.contactNotes}}" ng-model="showContactSelected.contactNotes" tabindex="31"></textarea>
							</div>
						</div>
					</div>
					<!-- <div class="col-md-2">
						<div class="row fieldsSpacing">
							<div class="col-md-12">
								<span class="control-label contactManager_linkedContactLabel_sm">Linked
									Contacts</span>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<select size=2
									class="form-control linked_contact ContactManager_Notes contactManager_linkedContactInput_sm">
									<option>MR&nbsp;&nbsp;&nbsp;&nbsp;Rajesh Mahale</option>
									<option>ZSM&nbsp;&nbsp;&nbsp;Ketan Sakapal</option>
								</select>
							</div>
						</div>
					</div> -->
				</div>
				<div class="row">
					<h5>
						<span class="submenuBlue_heading">People Settings</span>
					</h5>
					<hr class="horizontal_line">
				</div>
				<div class="row">
					<div class="col-md-6">
						<span class="setting_flagSize"> <input ng-disabled="!editable" class="checkBox"
							type="checkbox" tabindex="32"
							ng-value="{{showContactSelected.contactMyFavouriteFlag}}" ng-model="showContactSelected.contactMyFavouriteFlag"> <span>Favorite</span>
						</span>
						 <span class="setting_flagSize"> <input ng-disabled="!editable" class="checkBox"
							type="checkbox" tabindex="33"
						ng-value="{{showContactSelected.contactOnlyMyContactFlag}}" ng-model="showContactSelected.contactOnlyMyContactFlag">
							<span>My&nbsp;contact</span>
						</span> 
						<span class="setting_flagSize"> <input  ng-disabled="!editable" class="checkBox"
							type="checkbox"
							ng-value="{{showContactSelected.contactNotificationFlag}}"
							ng-model="showContactSelected.contactNotificationFlag"
							tabindex="34"> <span>Notifications</span>
						</span>
						 <span class=""> <input ng-disabled="!editable"  class="checkBox"
							ng-value="{{showContactSelected.contactSendGreetingFlag}}"
							ng-model="showContactSelected.contactSendGreetingFlag"
							type="checkbox" tabindex="35"> <span>Greetings</span>
						</span>
					</div>
					<%if(viewAdvanceSettingAndUid){ %>
					<div class="col-md-6 ContactManager_systemUser_Strip">
						<div class="row  fieldsSpacing">
							<div class="col-md-1">
								<span class="control-label">User&nbsp;Id</span>
							</div>
							<div class="col-md-2">
								<input type="text" ng-disabled="!editable" readonly="readonly"
									class="form-control input-sm contactManager_systemUser_field" value={{showContactSelected.contactUserName}}>
							</div>
							<div class="col-md-9 ContactManager_systemUser_settings">
								<nav class="mainnav contactManager_userSettingNavbar">
									<ul class="leftFloat" id="list-navColorBg">
										<li><a ng-class="(<%=modifyAdvanceSettingAndUid%> )?'':'not_implemented_link not_active'"ng-click="showUserSettingsPopup()" tabindex="36"> Settings</a></li>
										<li><a ng-class="(<%=modifyAdvanceSettingAndUid%> )?'':'not_implemented_link not_active'" ng-click="showAdvancedSettingsPopup()" tabindex="37">Advance
												Settings</a></li>
									</ul>
									<ul class="rightFloat contactManager_Lock" id="list-nav">
										<li ng-show="showContactSelected.contactUserLock"><img id="url_add" alt=""
											src="images/contacts_manager/lock-rounded.png"
											class="lock_unlockImagebtn_icon"></li>
										<li ng-hide="showContactSelected.contactUserLock"><img id="url_add" alt=""
											src="images/contacts_manager/lock-open1.png"
											class="lock_unlockImagebtn_icon">
										</li>
									</ul>
								</nav>
							</div>
						</div>
				</div>
				<%}%>
				</div>			
		</div>
	</div>
</div>



<script type="text/javascript">
	var month = (new Date()).getMonth() + 1;
	var year = (new Date()).getFullYear();
	// EU Common Format
	$('input[type=eu-date]').w2field('date', {
		format : 'd/m/yyyy'
	});
	$('input[type=eu-time]').w2field('time', {
		format : 'h24'
	});
	$('input[type=eu-timeA]').w2field('time', {
		format : 'h24',
		start : '8:00 am',
		end : '4:30 pm'
	});
</script>
<script type="text/javascript">
	$(document).ready(function() {

		$("#first_name").keypress(function() {
			$("#first_name").css("background-color", "white");
		});

		$("#last_name").keypress(function() {
			$("#last_name").css("background-color", "white");
		});
		$("#contact_type").click(function() {
			$("#contact_type").css("background-color", "white");
		});
		 $("#mobile").keyup(function(){
             $("#mobile").css("background-color", "white");
        });   
		 angular.element('*[ng-app]').injector().get("configurable").createPermission=<%=createPermission %>;
 		debugger;
 		var pCookie={createPermission:<%=createPermission %>,deletePermission:<%=deletePermission%>,modifyPermission:<%=modifyPermission %>,modifyPurchaseDatePermission:<%=modifyPurchaseDatePermission %>};
 		angular.element('*[ng-app]').injector().get('$cookieStore').put("userPermission",pCookie);
 		<% if(createPermission && !modifyPermission){%>	    		
 			angular.element(document.getElementById('ContactManager')).scope().showSaveBtn=false;
 		<%}else if(modifyPermission){%>
 			angular.element(document.getElementById('ContactManager')).scope().showSaveBtn=true;
 		<% }%>
      
      $("#emails").keypress(function(){
        $("#emails").css("background-color", "white");
  });

	});

</script>
<!-- validation controller script

function ProductValidate(){
	flag=true;
	
	if($('#first_name').val().length<=0){
		$("#first_name").css("background-color", "#fff4eb");
		//create error message using tooltip
		flag=false;
	}
	
	if($('#last_name').val().length<=0){
		$("#last_name").css("background-color", "#fff4eb");
		//create error message using tooltip
		flag=false;
	}
		
	if(typeof angular.element(document.getElementById('ContactManager')).scope().productCompanySelected==="undefined"){
		  $("#contactTypeSelect").css("background-color", "#fff4eb");
		  flag=false;
		 }	 
	if(angular.element(document.getElementById('ContactManager')).scope().errorCount==0){

	}else{

		flag=false;
	}
	return flag;
}
  -->

<!-- ################## Image Container code ######################## -->
<!-- <script>
$(function() {
	  var images = $('.images');
	  var image = $('.images>img');
	  var current = -1;
	  var focus = $('.focus');
	  var container = $('.focus .container');
	  var close = $('.close');
	  var next = $('.next');
	  var prev = $('.prev');
	  
	  image.on('click', function() {
	    current = $('img').index($(this));
	    container.empty();
	    container.append('<img src=\"' + image.eq(current).attr('src') + '\" />');
	    focus.fadeIn().addClass('enabled');
	    images.addClass('darken');
	    images.append('<div class="overlay"></div>');
	    $('html, body').animate({
	      scrollTop: focus.offset().top - 50
	    }, 500);
	  });
	  
	  close.on('click', function() {
	    focus.css('display', 'none').removeClass('enabled');
	    images.removeClass('darken');
	    $('.overlay').remove();
	  });
	  
	  prev.on('click', function() {
	    current = (current - 1 < 0) ? image.length - 1 : current - 1;
	    container.empty();
	    container.append('<img src=\"' + image.eq(current).attr('src') + '\" />');
	  });
	  
	  next.on('click', function() {
	    current = (current + 1 > image.length - 1) ? 0 : current + 1;
	    container.empty();
	    container.append('<img src=\"' + image.eq(current).attr('src') + '\" />');
	  });
	});
</script>
 -->

</div>
