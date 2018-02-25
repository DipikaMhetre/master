<title>HS Pharma</title>
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="BusinessDetails" ng-controller="BusinessDetailsCtrl" ng-init="init()">
<toast></toast>
	<% List<PurpleaidACL> xyz= new ArrayList();
		xyz=(ArrayList<PurpleaidACL>) request.getSession().getAttribute("permissionList"); 
		Boolean createPermission = false;
		
		String x=xyz.get(0).toString();
		for(int i=0;i<xyz.size();i++){
			Double d = new Double(xyz.get(i).getPurpleaidACLpermissionID());
			int n=d.intValue();
			 switch (n) {
	            	 case 123: createPermission = true;//create
	            		break;	
	             default:break;		
			} 		
		}
		
		%>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" title="" class="highlight_purple not_active">HS Pharma</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,122);"class="">Refresh</a></li>
				<li><a href="#" class="not_implemented_link not_active">Email</a></li>
				<li><a href="#" class="not_implemented_link not_active">Print</a></li>
					<%if(createPermission){%>
				<li><a ng-click="saveBuisnessDetails()" tabindex="19">Save</a></li>
					<%}%>
				<li><a href="#" title="Help"
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
	<div class="row container">
		<h5 class="col-md-12">
			<span class="submenuBlue_heading" style="margin-left: 5px;">Business
				Details</span> <span class="rightFloat"><input type="checkbox">
				<span class="Settings_flagDist">Hide&nbsp;Owner&nbsp;information&nbsp;in&nbsp;Email&nbsp;and&nbsp;Print</span>
				<input type="checkbox"> <span class="Settings_flagDist">Hide&nbsp;Licence&nbsp;&&nbsp;Tax&nbsp;Details&nbsp;in&nbsp;Email&nbsp;and&nbsp;Print</span></span>

		</h5>
	</div>
	<div class="row container">
		<hr class="horizontal_line">
	</div>
	<div class="row container fieldsSpacing">
		<div class="col-md-6">
			<div class="row">
				<span class="col-md-2 control-label">Business&nbsp;Name</span>
				<div class="col-md-5">
					<input ng-disabled="!editable" type="text" id="businessname" name="businessname" ng-model="ShowBusinessSelected.businessName"
					value="{{ShowBusinessSelected.businessName}}" 
						class="form-control input-sm businessDetailsInputBox2"
						allow-alphanumericwithspace>
				</div>
				<span class="col-md-1 control-label">EDE#</span>
				<div class="col-md-4">
					<input  ng-disabled="!editable" type="text" id="businessede" name="businessede" class="form-control input-sm"
					ng-model="ShowBusinessSelected.businessEdeCode" 
					value="{{ShowBusinessSelected.businessEdeCode}}"
					allow-alphanumericwithspace>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="row">
				<span class="col-md-2 control-label">Code</span>
				<div class="col-md-4">
					<input ng-disabled="!editable" type="text" id="businesscode" name="businesscode" class="form-control input-sm businessDetailsInputBox5"
					ng-model="ShowBusinessSelected.businessCode"
					value="{{ShowBusinessSelected.businessCode}}"
					allow-alphanumericwithspace>
				</div>
			</div>
		</div>
	</div>
	<div class="row container fieldsSpacing">
		<div class="col-md-1">
			<span>Business&nbsp;Description</span>
		</div>
		<div class="col-md-5">
			<textarea ng-disabled="!editable" rows="2" cols="11" id="businessdesc" name="businessdesc" class="textarea_fixSize businessDetailsInputBox1 TextAreaBusinessDescription" tabindex="31"
			ng-model="ShowBusinessSelected.businessDescription"
			value="{{ShowBusinessSelected.businessDescription}}"
			allow-alphanumericwithspace></textarea>
		</div>
	</div>
	<div class="row container">
		<h5 class="col-md-12">
			<span class="submenuBlue_heading" style="margin-left: 5px;">Business
				Contact Details</span>

		</h5>
	</div>
	<div class="row container">
		<hr class="horizontal_line">
	</div>
	<div class="row container">
		<div class="col-md-6 sectionvline">
			<div class="row fieldsSpacing">
				<div class="form-group">
					<span class="col-md-2 control-label">Address&nbsp;Line&nbsp;1</span>
					<div class="col-md-10">
						<input ng-disabled="!editable" type="text" id="businessadd1" name="businessadd1" class="form-control input-sm businessDetailsInputBox1"
						ng-model="ShowBusinessSelected.businessAddressLine1"
						value="{{ShowBusinessSelected.businessAddressLine1}}"
						allow-address>
					</div>
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class="form-group">
					<span class="col-md-2 control-label">Address&nbsp;Line&nbsp;2</span>
					<div class="col-md-10">
						<input ng-disabled="!editable" type="text" id="businessadd2" name="businessadd2" class="form-control input-sm businessDetailsInputBox1"
						ng-model="ShowBusinessSelected.businessAddressline2" 
						value="{{ShowBusinessSelected.businessAddressline2}}"
						allow-address>
					</div>
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class="form-group">
					<span class="col-md-2 control-label">City</span>
					<div class="col-md-5">
						<input ng-disabled="!editable" type="text" id="businesscity" name="businesscity" class="form-control input-sm businessDetailsInputBox2"
						ng-model="ShowBusinessSelected.businessCity"
						value="{{ShowBusinessSelected.businessCity}}"allow-text>
					</div>
					<div class="col-md-5">
						<input type="text" disabled class="form-control input-sm">
					</div>
				</div>
			</div>
			<div class="row">
				<div class="form-group">
					<span class="col-md-2 control-label">Pin&nbsp;Code</span>
					<div class="col-md-5">
						<input ng-disabled="!editable" type="text" id="businesspincode" name="businesspincode" class="form-control input-sm businessDetailsInputBox2"
						ng-model="ShowBusinessSelected.businessPincode"
						value="{{ShowBusinessSelected.businessPincode}}"
						allow-numbers>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="row fieldsSpacing">
				<div class="form-group">
					<span class="col-md-2 control-label">Contact&nbsp;Person</span>
					<div class="col-md-10">
						<input ng-disabled="!editable" type="text" id="businesscontactperson" name="businesscontactperson" class="form-control input-sm businessDetailsInputBox3"
						ng-model="ShowBusinessSelected.businessContactperson"
						value="{{ShowBusinessSelected.businessContactperson}}"
						allow-textwithspace>
					</div>
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class="form-group">
					<span class="col-md-2 control-label">Mobile</span>
					<div class="col-md-4">
						<input ng-disabled="!editable" type="text" id="businessmobile" name="businessmobile" class="form-control input-sm businessDetailsInputBox5"
						ng-model="ShowBusinessSelected.businessMobile"
						value="{{ShowBusinessSelected.businessMobile}}"
						allow-numbers
						onblur="Purplevalidator('businessmobile',1,'BusinessDetails','blur')"
						onclick="Purplevalidator('businessmobile',1,'BusinessDetails','')"
						onfocus="Purplevalidator('businessmobile',1,'BusinessDetails','')">
					</div>
					<div class="col-md-1"></div>
					<div class="col-md-1">
						<span class=" control-label textPosLeft ">Landline</span>
					</div>
					<div class="col-md-4">
						<input ng-disabled="!editable" name="landline" id="landline" name="landline" type="text" maxlength="10" class="form-control input-sm"
						ng-model="ShowBusinessSelected.businessLandline"
						value="{{ShowBusinessSelected.businessLandline}}"
						>
					</div>
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class="form-group">
					<span class="col-md-2 control-label">Fax</span>
					<div class="col-md-4">
						<input ng-disabled="!editable" id="businessfax" name="businessfax" class="form-control input-sm numberField businessDetailsInputBox5"
						ng-model="ShowBusinessSelected.businessFax"
						value="{{ShowBusinessSelected.businessFax}}"
						allow-numbers>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="form-group">
					<span class="col-md-2 control-label">Email</span>
					<div class="col-md-7">
						<input ng-disabled="!editable" type="email" id="businessemail" name="businessemail" class="form-control input-sm businessDetailsInputBox4"
						ng-model="ShowBusinessSelected.businessEmail"
						value="{{ShowBusinessSelected.businessEmail}}"
						onblur="Purplevalidator('businessemail',0,'BusinessDetails','blur')"
					   onclick="Purplevalidator('businessemail',0,'BusinessDetails','')"
					 onfocus="Purplevalidator('businessemail',0,'BusinessDetails','')">
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row container">
		<h5 class="col-md-12">
			<span class="submenuBlue_heading" style="margin-left: 5px;">Business
				License & Tax Details</span>
		</h5>
	</div>
	<div class="row container">
		<hr class="horizontal_line">
	</div>
	<div class=" row container fieldsBot_Spacing">
		<div class="col-md-6">
			<div class="row">
				<div class="col-md-2">
					<span class="control-label">Licence&nbsp;Type</span>
				</div>
				<div class="col-md-3">
					<select ng-disabled="!editable"  id="businesslicentype" name="businesslicentype"
						class="form-control  input-sm   input_rightSpecing businessDetailsInputBox6"
						data-ng-options="opt.businessLicenceType as opt.businessLicenceTypeName for opt in LicenceList"
						ng-model="custLic.businessLicenceType"
									value="{{custLic.businessLicenceType}}">
						<option value='' disabled selected style='display: none;'>Please
							select</option>
						
					</select>
				</div>
				<div class="col-md-2">
					<input ng-disabled="!editable" type="text" id="businessLicennumber" name="businessLicennumber" placeholder="Licence No" class="form-control input-sm businessDetailsInputBox7"
					ng-model="custLic.businessLicenceNumber" 
					value="{{custLic.businessLicenceNumber}}"
					allow-numbers>
				</div>
				<span class="col-md-2 control-label">Start&nbsp;Date</span>
				<div class="col-md-3">
					<input ng-disabled="!editable" type="eu-date1" id="businessstartdate" name="businessstartdate" class="form-control input-sm businessDetailsInputBox9"
					ng-model="custLic.businessLicenceStartdate"
					value="{{custLic.businessLicenceStartdate}}">
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="row">
				<span class="col-md-2 control-label">End&nbsp;Date</span>
				<div class="col-md-4">
					<input ng-disabled="!editable" type="eu-date2" id="businessenddate" name="businessenddate" class="form-control input-sm businessDetailsInputBox5"
					ng-model="custLic.businessLicenceEndDate"
					value="{{custLic.businessLicenceEndDate}}">
				</div>
				<div class="col-md-1">
					<button ng-disabled="!editable" type="button" 	class="btn btn-primary input-sm_btn btn_small customerAddBtnPos" tabindex="20"
					ng-show="showAdd" ng-click="addRecord()">ADD</button>
					<button ng-disabled="!editable" type="button" id="modify" ng-show="showModify" ng-click="modifyRecord();"
						class="btn btn-modify input-sm_btn btn_small customerAddBtnPos">MODIFY</button>
				</div>
				 <!-- <div class="col-md-1" ng-show="showModify">
					<button type="button" id="modify" ng-click="modifyRecord();"
						class="btn btn-modify input-sm_btn btn_small customerAddBtnPos">MODIFY</button>
				</div>  -->
				<div class="col-md-5">
					<nav class="mainnav">
						<ul class="rightFloat" ng-hide="!editable">
							<li><a  title="Remove Product" ng-click="removeRecord();"
								class="master_removePos highlight_red" tabindex="21">Remove</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
	<div class="row container">
		<div class="col-md-12">
			<!-- =============GRID============-->
			<div id="grid" tabindex="-1" class="BusinessLicenceDetailsGrid"></div>
			<!-- =============GRID============-->
		</div>
	</div>
	<div class="row container">
		<h5 class="col-md-12">
			<span class="submenuBlue_heading" style="margin-left: 5px;">Owner
				Contact Details</span>
		</h5>
	</div>
	<div class="row container">
		<hr class="horizontal_line">
	</div>
	<div class="row container">
		<div class="col-md-6">
			<div class="row fieldsSpacing">
				<div class="form-group">
					<span class="col-md-2 control-label">Contact&nbsp;Person</span>
					<div class="col-md-10">
						<input ng-disabled="!editable" type="text" id="businesscontactperson" name="businesscontactperson" class="form-control input-sm businessDetailsInputBox1"
						ng-model="ShowBusinessSelected.businessOwnerContactPerson"
						value="{{ShowBusinessSelected.businessOwnerContactPerson}}"
						allow-textwithspace>
					</div>
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class="form-group">
					<span class="col-md-2 control-label">Landline</span>
					<div class="col-md-4">
						<input ng-disabled="!editable" type="text" id="businesslandline" name="businesslandline" class="form-control input-sm businessDetailsInputBox8"
						ng-model="ShowBusinessSelected.businessOwnerLandline"
						value="{{ShowBusinessSelected.businessOwnerLandline}}">
					</div>
					<span class="col-md-1"></span> <span class="col-md-1 control-label">Mobile</span>
					<div class="col-md-4">
						<input ng-disabled="!editable" type="text" id="businessmobile1" name="businessmobile1" class="form-control input-sm"
						ng-model="ShowBusinessSelected.businessOwnerMobile"
						value="{{ShowBusinessSelected.businessOwnerMobile}}"
						allow-numbers
							onblur="Purplevalidator('businessmobile1',1,'BusinessDetails','blur')"
						onclick="Purplevalidator('businessmobile1',1,'BusinessDetails','')"
						onfocus="Purplevalidator('businessmobile1',1,'BusinessDetails','')">
					</div>
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class="form-group">
					<span class="col-md-2 control-label">Fax</span>
					<div class="col-md-4">
						<input ng-disabled="!editable" type="text" id="businessfax" name="businessfax" class="form-control input-sm businessDetailsInputBox8"
						ng-model="ShowBusinessSelected.businessOwnerFax"
						value="{{ShowBusinessSelected.businessOwnerFax}}"
						allow-numbers>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="form-group">
					<span class="col-md-2 control-label">Email</span>
					<div class="col-md-7">
						<input ng-disabled="!editable" type="email" id="businessemail1" name="businessemail1" class="form-control input-sm businessDetailsInputBox10"
						ng-model="ShowBusinessSelected.businessOwnerEmail"
						value="ShowBusinessSelected.businessOwnerEmail"
						onblur="Purplevalidator('businessemail1',0,'BusinessDetails','blur')"
					   onclick="Purplevalidator('businessemail1',0,'BusinessDetails','')"
					 onfocus="Purplevalidator('businessemail1',0,'BusinessDetails','')">
					</div>
					
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
var month = (new Date()).getMonth() + 1;
var year  = (new Date()).getFullYear();
$('input[type=eu-date]').w2field('date',  { format: 'd/m/yyyy' });
$('input[type=eu-date1]').w2field('date', { format: 'd/m/yyyy', end: $('input[type=eu-date2]') });
$('input[type=eu-date2]').w2field('date', { format: 'd/m/yyyy', start: $('input[type=eu-date1]') });
</script>
<script type="text/javascript">
	$(document).ready(function() {

		$("#businessemail").keypress(function() {
			$("#businessemail").css("background-color", "white");
		});
		
		$("#businessmobile").keypress(function() {
			$("#businessmobile").css("background-color", "white");
		});
		

		$("#businessmobile1").keypress(function() {
			$("#businessmobile1").css("background-color", "white");
		});
		$("#businessemail1").keypress(function() {
			$("#businessemail1").css("background-color", "white");
		});

		$("#businesslicentype").click(function() {
			$("#businesslicentype").css("background-color", "white");
		});
		
		$("#businessLicennumber").keypress(function() {
			$("#businessLicennumber").css("background-color", "white");
		});
		

		$("#businessstartdate").click(function() {
			$("#businessstartdate").css("background-color", "white");
		});
		$("#businessenddate").click(function() {
			$("#businessenddate").css("background-color", "white");
		});
	
		
		
		
	});
</script>