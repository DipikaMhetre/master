<div id="ContactManager" data-ng-controller="ContactManagerCtrl"
	ng-init=init()>
	<toast></toast>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat" id="list-nav">
				<li><a href="#" title="New Contact Manager"
					class="highlight_purple not_active">People Manager</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a href="#" title="Start Over"
					class="not_implemented_link not_active">Start Over</a></li>
				<li><a href="#" title="Export"
					class="not_implemented_link not_active">Export </a></li>
				
				<li><a tabindex="22">Print</a></li>
				<li><a ng-click="newContact()">New</a></li>
				<li><a ng-click="saveContact()" title="Print" class="">Save</a></li>
				<li><a ng-click="updateGridData()" title="Help"
					class="">Help</a></li>
			</ul>
			<ul class="rightFloat">
				<li>
					<div id="date"></div>
					<div id="time"></div>
					<div id="hour"></div>
				</li>

			</ul>
		</nav>
	</Section>
	<nav class="navbar navbar_master1"></nav>
	<div class="row container">
		<div class="col-md-2 sectiondivider">
			<div class="master_leftUpper1">
				<div class="row">
					<select id="entityTypeSelect" ng-options="opt.entityDeatilsDescription for opt in mixContactTypeList" ng-model="mixTypeSelected" ng-change="onMixTypeSelection(mixTypeSelected)" class="input-sm masterPage_grid" tabindex="1"></select>
				</div>
			</div>
			<div class="row masterPage_fieldSpacing">
				<!--=============GRID==========  -->
				<div id="grid" tabindex="-1" class="contactsManager_leftGride"></div>
				<!--=============GRID==========  -->
			</div>
			<div class="row master_filterPos group-inline">
				<a ng-click="showFilterPopup()" title="Filter">Filter(<span class="highlight_purple" ng-show="filterStatus=='ON'">{{filterStatus}}</span><span ng-show="filterStatus=='OFF'">{{filterStatus}}</span>) </a>
				<button ng-click="cancelFilter()" ng-show="filterStatus=='ON'" type="button" class="btn btn-default"></button>
			</div>
		</div>
		<div class="col-md-10">
			<div class="">
				<div class="row masterTop_GrayStrip">
					<h6>
						<span class="masterTop_StripText">Contacts
							Manager&nbsp;-&nbsp; <span ng-show="isNew"class="masterHeading">New</span>
							<span ng-hide="isNew" class="masterHeading">{{showContactSelected.contactFirstName}} {{showContactSelected.contactLastName}}</span>
						</span>
					</h6>
				</div>
				<div class="row fields_headingSpacing ">
					<div class="col-md-1 images">
						<img alt="" src="images/contacts_manager/450-450.jpg"
							style="width: 80px; margin-top: -16px; margin-left: -11px;">
					</div>
					<div class="focus">
						<div class="container"></div>
						<div class="controls">
							<button class="btn canclebtnSize">Cancel</button>
							<button class="btn okbtnSize" id="file">Change</button>
						</div>
					</div>
					<div class="col-md-11">
						<div class="row fieldsSpacing">
							<div class=" col-md-1">
								<span class="control-label">Name</span>
							</div>
							<div class="col-md-1">
								<select
									class="form-control productboxSize input-sm input_rightSpecing"
									
									 data-ng-options="opt.id as opt.name for opt in contactNameTitles" ng-model="showContactSelected.contactNameTitle">
								</select>
							</div>
							<div class="col-md-2">
								<input type="text" id="first_name" name="first_name"
									class="form-control input-sm" tabindex="8" name="firstName"
									required placeholder="First Name" ng-model="showContactSelected.contactFirstName" value="{{showContactSelected.contactFirstName}}">
							</div>
							<div class="col-md-2">
								<input type="text" id="middle_name" name="middle_name"
									class="form-control input-sm" tabindex="8" name="middleName"
									required placeholder="Middle Name" ng-model="showContactSelected.contactMiddleName" value="{{showContactSelected.contactMiddleName}}">
							</div>
							<div class="col-md-2">
								<input type="text" id="last_name" name=""
									class="form-control input-sm" tabindex="8" name="lastName"
									required placeholder="Last name" ng-model="showContactSelected.contactLastName" value="{{showContactSelected.contactLastName}}">
							</div>
							<div class=" col-md-1">
								<span class="control-label">Nickname</span>
							</div>
							<div class="col-md-3">
								<input type="text" id="nick_name" name="nick_name"
									class="form-control input-sm" tabindex="8" ng-model="showContactSelected.contactNickName" value="{{showContactSelected.contactNickName}}">
							</div>
						</div>
						<div class="row fieldsSpacing">
							<div class=" col-md-1">
								<span class="control-label">Job&nbsp;Title</span>
							</div>
							<div class="col-md-3">
								<input type="text" id="job_title" name="job_title"
									class="form-control input-sm" tabindex="8" ng-model="showContactSelected.contactjobTitle" value="{{showContactSelected.contactjobTitle}}">
							</div>
							<div class=" col-md-1">
								<span class="control-label">Company</span>
							</div>
							<div class="col-md-3">
								<input type="text" id="company" name="company"
									class="form-control input-sm" tabindex="8" ng-model="showContactSelected.contactCompanyName" value="{{showContactSelected.contactCompanyName}}">
							</div>
							<div class=" col-md-1">
								<span class="control-label">Label</span>
							</div>
							<div class="col-md-3">
								<input type="text" id="label" name="label"
									class="form-control input-sm" tabindex="8" ng-model="showContactSelected.contactLabel" value="{{showContactSelected.contactLabel}}">
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<h5 class="col-md-10">
						<span class="submenuBlue_heading" style="margin-left: 5px;">Contact
							Details</span>
					</h5>
					<div class="col-md-2" style="text-align: right;">
						<span><img class="contactsManagerImages"
							style="opacity: 0.2; cursor: pointer;" alt=""
							src="images/contacts_manager/3.jpg"></span> <span> <img
							class="contactsManagerImages" style="cursor: pointer;" alt=""
							src="images/contacts_manager/2.png"></span> <span> <img
							class="contactsManagerImages"
							style="opacity: 0.2; cursor: pointer;" alt=""
							src="images/contacts_manager/1.jpg"></span>
					</div>
				</div>
				<div class="row">
					<hr class="horizontal_line">
				</div>

				<div class="row fieldsSpacing">
					<div class="col-md-1">
						<span class="control-label">Contact&nbsp;Type</span>
					</div>
					<div class="col-md-3">
						<select id="entityTypeSelect" ng-options="opt.entityDetailsId as opt.entityDeatilsDescription for opt in entityContactTypeList" ng-model="showContactSelected.contactTypeId"  class="input-sm masterPage_grid" tabindex="1"></select>
				
					</div>
					<!-- <div class="col-md-1">
						<span class="control-label">Association</span>
					</div> -->
					<div class="col-md-5">
						<div class="row fieldsSpacing">
								<span class="col-md-1" style="width: 1%;"> <img
									id="address_add" alt=""
									ng-hide="editModeOn"
									src="images/contacts_manager/1433516856_circle-add.png"
									class="btn_addField" ng-click="addArrayElement('association')">				
								</span> <span class="col-md-10"> <b>Association</b>
								</span>
							</div>
							<div >
								<div class="row" data-ng-repeat="choice in showContactSelected.contactAssociationList">
									<div style="position: absolute;">
										<img id="" alt=""
											src="images/contacts_manager/1433515251_circle-cross.png"								
											ng-click="removeArrayElement('association',$index)"
											class="btn_addField"
											ng-show="editModeOn">
									</div>
									<div class="contacts_manager_detailsBtn">
										
										<select  ng-options="opt.entityDeatilsDescription for opt in entityAssociationList track by opt.entityDeatilsDescription" ng-model="choice.entity"  ng-change="choice.associationName = ''"class="input-sm contact_manager_input_textbox1 input_rightSpecing" tabindex="1">
										</select>  
										<input  class="input-sm contact_manager_input_textbox"
											type="text" readonly ng-model="choice.associationName"  placeholder="">
										
									</div>
									<div style="position: absolute;">
										<img id="" alt=""
											src="images/contacts_manager/1433515251_circle-cross.png"								
											ng-click="showAssociationPopup(choice.entity.entityDeatilsDescription,$index)"
											class="btn_addField"
											ng-hide="editModeOn">
									</div>								
								</div>
							</div>

					</div>

				</div>

				<div class="row">
					<h5 class="col-md-5">
						<span class="submenuBlue_heading" style="margin-left: 5px;">Miscellaneous
							Information</span>
					</h5>
					<div class="col-md-7" style="text-align: right;">
						<a><button type="button" class="btn btn_Remove" id='bt1'
							value='Show Layer'
							ng-click="editModeOn = !editModeOn"
							onclick="setVisibility('related_name_add','related_name_remove','address_add','address_remove','phone_add','phone_remove','important_dates_add','important_dates_remove','email_add','email_remove','url_add','url_remove');";>Edit</button>
						</a>
					</div>
				</div>

				<div class="row">
					<hr class="horizontal_line">
				</div>
				<div class="ContactsManagerScroll_section">
					<div class="row">
						<div class="col-md-4 sectionvline">
							<div class="row fieldsSpacing">

								<span class="col-md-1" style="width: 1%;"> <img alt=""
									id="related_name_add"
									ng-hide="editModeOn"
									src="images/contacts_manager/1433516856_circle-add.png"
									class="btn_addField" ng-click="addArrayElement('related')">

								</span> <span class="col-md-10"> <b>Related Names</b>
								</span>
							</div>
							<div>
							
								<div data-ng-repeat="choice in showContactSelected.contactRelatedNamesList">
									<div style="position: absolute;">
										<img id="" alt=""
											src="images/contacts_manager/1433515251_circle-cross.png"								
											ng-click="removeArrayElement('related',$index)"
											class="btn_addField"
											ng-show="editModeOn">
									</div>
									<div class="contacts_manager_detailsBtn">
										
										<select  ng-options="opt.entityDeatilsDescription for opt in entityRelatedNamesList track by opt.entityDeatilsDescription" ng-model="choice.entity"  class="input-sm contact_manager_input_textbox1 input_rightSpecing" tabindex="1">
										</select><!-- | relatedDropdownFilter:choice.entity.entityDetailsId -->
										<select  ng-options="opt.contactId as opt.contactFirstName+ '  '+opt.contactLastName for opt in allContactList "  class="input-sm contact_manager_input_textbox1 input_rightSpecing" ng-model="choice.relatedNamesId" tabindex="1">
										</select>  	
									</div>
									
								</div>
							</div>
						</div>
						<div class="col-md-4 sectionvline">
							<div class="row fieldsSpacing">
								<span class="col-md-1" style="width: 1%;"> <img
									id="address_add" alt=""
									ng-hide="editModeOn"
									src="images/contacts_manager/1433516856_circle-add.png"
									class="btn_addField" ng-click="showAddressPopup('new',0)">				
								</span> <span class="col-md-10"> <b>Address</b>
								</span>
							</div>
							<div >
								<div data-ng-repeat="choice in showContactSelected.contactAddressList">
									<div style="position: absolute;">
										<img  alt=""
											src="images/contacts_manager/1433515251_circle-cross.png"								
											ng-click="removeArrayElement('address',$index)"
											class="btn_addField"
											ng-show="editModeOn">
											
									</div>
									<div class="contacts_manager_detailsBtn">
										<select  ng-options="opt.entityDeatilsDescription for opt in entityAddressList track by opt.entityDeatilsDescription" ng-model="choice.entity"  class="input-sm contact_manager_input_textbox1 input_rightSpecing" tabindex="1">
										</select>  
										<input  class="input-sm contact_manager_input_textbox"
											type="text" readonly ng-model="choice.addressSummary"  placeholder="">
										<img  alt=""
											src="images/contacts_manager/1433515251_circle-cross.png"								
											ng-click="showAddressPopup('modify',$index)"
											class="btn_addField"
											ng-hide="editModeOn">
									</div>									
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="row fieldsSpacing">

								<span class="col-md-1" style="width: 1%;"> <img
									id="phone_add" alt=""
									ng-hide="editModeOn"
									src="images/contacts_manager/1433516856_circle-add.png"
									class="btn_addField" ng-click="addArrayElement('phone')">
								</span> <span class="col-md-10"> <b>Phone</b>
								</span>
							</div>
							<div >
								<div data-ng-repeat="choice in showContactSelected.contctPhoneList">
									<div style="position: absolute;">
										<img id="" alt=""
											src="images/contacts_manager/1433515251_circle-cross.png"
											ng-click="removeArrayElement('phone',$index)"
											class="btn_addField"
											ng-show="editModeOn">
									</div>
									<div class="contacts_manager_detailsBtn">
										<select ng-options="opt.entityDeatilsDescription for opt in entityPhoneList track by opt.entityDeatilsDescription"  ng-model="choice.entity" class="input-sm contact_manager_input_textbox1 input_rightSpecing" tabindex="1">										
										</select>
										<input class="input-sm contact_manager_input_textbox textRight" type="text"  ng-model="choice.phone">
									</div>
									
								</div>
							</div>
						</div>
					</div>
					<div class="row fields_headingSpacing">
						<div class="col-md-4 sectionvline">
							<div class="row fieldsSpacing">
								<span class="col-md-1" style="width: 1%;"> <img
									id="important_dates_add" alt=""
									ng-hide="editModeOn"
									src="images/contacts_manager/1433516856_circle-add.png"
									class="btn_addField" ng-click="addArrayElement('dates')">

								</span> <span class="col-md-10"> <b>Important Dates</b>
								</span>
							</div>
							<div>
								<div data-ng-repeat="choice in showContactSelected.contctImportantDatesList">
									<div style="position: absolute;">
										<img id="" alt=""
											src="images/contacts_manager/1433515251_circle-cross.png"
											ng-click="removeArrayElement('dates',$index)"
											class="btn_addField"
											ng-show="editModeOn">
									</div>
									<div class="contacts_manager_detailsBtn">
										<select ng-options="opt.entityDeatilsDescription for opt in entityDateList track by opt.entityDeatilsDescription"  ng-model="choice.entity" class="input-sm contact_manager_input_textbox1 input_rightSpecing" tabindex="1">										
										</select> 
										<input class="input-sm contact_manager_input_textbox textCenter"
											type="eu-date" ng-model="choice.importantDates">
									</div>
									
								</div>
							</div>
						</div>
						<div class="col-md-4 sectionvline">
							<div class="row fieldsSpacing">
								<span class="col-md-1" style="width: 1%;"> <img
									id="email_add" alt=""
									ng-hide="editModeOn"
									src="images/contacts_manager/1433516856_circle-add.png"
									class="btn_addField" ng-click="addArrayElement('email')">
								</span> <span class="col-md-10"> <b>Email</b>
								</span>
							</div>
							<div >
								<div data-ng-repeat="choice in showContactSelected.contactEmailList">
									<div style="position: absolute;">
										<img id="" alt=""
											src="images/contacts_manager/1433515251_circle-cross.png"
											ng-click="removeArrayElement('email',$index)"
											class="btn_addField"
											ng-show="editModeOn">
									</div>
									<div class="contacts_manager_detailsBtn">
										<select ng-options="opt.entityDeatilsDescription for opt in entityEmailList track by opt.entityDeatilsDescription"  ng-model="choice.entity" class="input-sm contact_manager_input_textbox1 input_rightSpecing" tabindex="1">										
										</select> 
										<input class="input-sm contact_manager_input_textbox textCenter"
											 ng-model="choice.email">
									</div>
									
								</div>
								
							</div>
						</div>
						<div class="col-md-4">
							<div class="row fieldsSpacing">
								<span class="col-md-1" style="width: 1%;"> <img
									id="url_add" alt=""
									ng-hide="editModeOn"
									src="images/contacts_manager/1433516856_circle-add.png"
									class="btn_addField" ng-click="addArrayElement('url')">
								</span> <span class="col-md-10"> <b>URL</b>
								</span>
							</div>
							<div>
								<div data-ng-repeat="choice in showContactSelected.contactUrlList">
									<div style="position: absolute;">
										<img id="" alt=""
											src="images/contacts_manager/1433515251_circle-cross.png"
											ng-click="removeArrayElement('url',$index)"
											class="btn_addField"
											ng-show="editModeOn">
									</div>
									<div class="contacts_manager_detailsBtn">
										<select ng-options="opt.entityDeatilsDescription for opt in entityUrlList track by opt.entityDeatilsDescription"  ng-model="choice.entity" class="input-sm contact_manager_input_textbox1 input_rightSpecing" tabindex="1">										
										</select> 
										<input class="input-sm contact_manager_input_textbox textCenter"
											 ng-model="choice.url">
									</div>
									
								</div>
							</div>
						</div>
					</div>
					<div class="">
						<div class="row">
							<h5>
								<span class="submenuBlue_heading">Contact Additional
									Details</span>
							</h5>
							<hr class="horizontal_line">
						</div>
						<div class="row ">
							<div class="col-md-9">
								<div class="row fieldsSpacing">
									<div class="col-md-1">
										<span class="control-label">HQ</span>
									</div>
									<div class="col-md-3">
										<input type="text" class="form-control input-sm" tabindex="8" ng-model="showContactSelected.contactHQ" value={{showContactSelected.contactHQ}}>
									</div>
									<div class="col-md-1">
										<span class="control-label">Area</span>
									</div>
									<div class="col-md-3">
										<!-- <select  ng-model="showContactSelected.contactArea" ng-options="opt.areaID as opt.areaDescription for opt in entityAreaList"  class="input-sm contact_manager_input_textbox1 input_rightSpecing" tabindex="1">										
										</select> -->
										<select ng-model="showContactSelected.contactArea" ng-options="opt.areaID as opt.areaDescription for opt in entityAreaList"   class="input-sm contact_manager_input_textbox1 input_rightSpecing" tabindex="1">										
										</select> 
									</div>
									<div class="col-md-1">
										<span class="control-label">Routes</span>
									</div>
									<div class="col-md-3"><!-- track by opt.routeID -->
										<select ng-model="showContactSelected.contactRoute" ng-options="opt.routeID as opt.routeDescription for opt in entityRouteList"   class="input-sm contact_manager_input_textbox1 input_rightSpecing" tabindex="1">										
										</select>
									</div>
								</div>
								<div class="row ">
									<div class="col-md-1">
										<span class="control-label">Notes</span>
									</div>
									<div class="col-md-11">
										<textarea rows="2" cols="11"
											class="textarea_fixSize linked_contact ContactManager_Notes" value="{{showContactSelected.contactNotes}}" ng-model="showContactSelected.contactNotes"></textarea>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="row fieldsSpacing">
									<div class="col-md-12">
										<span class="control-label">Linked Contacts</span>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<select size=2 class="form-control linked_contact ContactManager_Notes ">
											<option>MR&nbsp;&nbsp;&nbsp;&nbsp;Rajesh Mahale</option>
											<option>ZSM&nbsp;&nbsp;&nbsp;Ketan Sakapal</option>
										</select>
									</div>

								</div>

								<!-- <textarea rows="3" cols="11" style="width: 100%; max-width: 100%;  max-height: 70px;">MR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rajesh Mahale ZSM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ketan Sakapal</textarea> -->
							</div>
						</div>
						<div class="row">
							<h5>
								<span class="submenuBlue_heading">Contact Settings</span>
							</h5>
							<hr class="horizontal_line">
						</div>
						<div class="row ContactManager_systemUser_Strip fieldsSpacing">
							<div class="col-md-1">
								<span class="control-label">User&nbsp;Id</span>
							</div>
							<div class="col-md-2">
								<input type="text" readonly="readonly" class="form-control input-sm contactManager_systemUser_field" tabindex="8" value={{showContactSelected.contactUserName}}>
							</div>
							<div class="col-md-9 ContactManager_systemUser_settings">
								<nav class="mainnav">
									<ul class="leftFloat" id="list-nav">
										<li><a ng-click="showUserSettingsPopup()">User Settings</a></li>
										<li><a class=" ">Advance Settings</a></li>							
									</ul>
									
								</nav>
							</div>

							<!-- <img alt="" src="images/contacts_manager/delete_ac.png" title="delete A/C"> 
					<img src="images/contacts_manager/lock.png" id="image1"	onclick=diffImage(this) /> 
					<img alt="" src="images/contacts_manager/setting1.png" title="A/C settings"> -->
						</div>
						<div class="row">
							<span class="col-md-2"> <input class="checkBox"
								type="checkbox" tabindex="31" ng-value="{{showContactSelected.contactMyFavouriteFlag}}" ng-model="showContactSelected.contactMyFavouriteFlag"> <span>My&nbsp;Favorites</span>
							</span> <span class="col-md-2" style="width: 20%;"> <input
								class="checkBox" type="checkbox" tabindex="32" ng-value="{{showContactSelected.contactOnlyMyContactFlag}}" ng-model="showContactSelected.contactOnlyMyContactFlag"> <span>My&nbsp;contacts&nbsp;only</span>
							</span> <span class="col-md-2"> <input class="checkBox"
								type="checkbox"  ng-value="{{showContactSelected.contactNotificationFlag}}" ng-model="showContactSelected.contactNotificationFlag"tabindex="32"> <span>Notifications</span>
							</span> <span class="col-md-2"> <input class="checkBox" ng-value="{{showContactSelected.contactSendGreetingFlag}}" ng-model="showContactSelected.contactSendGreetingFlag"
								type="checkbox" tabindex="32"> <span>Send&nbsp;Greetings</span>
							</span>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
var month = (new Date()).getMonth() + 1;
var year  = (new Date()).getFullYear();
// EU Common Format
$('input[type=eu-date]').w2field('date',  { format: 'd/m/yyyy' });
$('input[type=eu-time]').w2field('time',  { format: 'h24' });
$('input[type=eu-timeA]').w2field('time', { format: 'h24', start: '8:00 am', end: '4:30 pm' });
</script>
<script type="text/javascript">
    $( document ).ready(function() {
    	  // Handler for .ready() called.
    	    $('#first_name').allowTextOnly();
    		$('#middle_name').allowTextOnly();
    		$('#last_name').allowTextOnly();
    		$('#nick_name').allowTextOnly();
    		$('#job_title').allowAlphaNumericOnly();
    		$('#company').allowAlphaNumericOnly();
    		$('#label').allowAlphaNumericOnly();
    		$('#hq').allowTextOnly();

    	});
   	
   </script>

<!-- <script type="text/javascript">
$(function () {
    $('#grid').w2grid({ 
        name: 'grid', 
        header: 'List of Names',
        show: {
            toolbar: true
        },
        columns: [                
            { field: 'fname', caption: '', size: '100%'},   
        ],
        records: [
        ]
    });    
});
</script>

################## Image Container code ########################
<script>
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

<script>
		//confirmPassword must match password 
var errorBox=document.getElementById("error");
var errorText=document.getElementById("error2");
var pass2=document.getElementById("password2");
var pass1=document.getElementById("password1");

pass2.onchange = function() {
	if (pass2.value !== pass1.value) {
		pass2.style.border="2px solid red";
        errorText.innerHTML="Passwords do not match!";
        errorText.style.color="red";
        //errorBox.style.height="40px";
        //errorBox.style.visibility="visible";
        //errorBox.innerHTML="<p>Passwords do not match!</p>";
		return false;
	}
    else {        
        pass2.style.border="2px solid #B5DCF7";
        errorText.style.color="green";
        errorText.innerHTML="Passwords match!";
        return true; 
    }
};
 
	
	</script>
 -->