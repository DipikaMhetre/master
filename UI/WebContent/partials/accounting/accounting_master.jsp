<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>

<div id="AccountingMaster" data-ng-controller="AccountingMasterCtrl"
	ng-init=init()>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" class="highlight_purple not_active">Accounting
						Master</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a href="#">Refresh</a></li>
				<li><a href="#" title="Print"
					class="not_implemented_link not_active">Print</a></li>
				<li><a data-ng-click=saveCompanyMaster(showCompanySelected)
					title="Save" tabindex="17">Save</a></li>
				<li><a data-ng-click=newCompanyMaster()>New</a></li>
				<li><a href="#" title="Help"
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
						class="btn btn-default flag_enable editable-btn" tabindex="20">
						<span class="fieldLeft_spacing_lg" ng-click="editable=!editable">Editable</span>
					</button>
				</li>
			</ul>
		</nav>
	</Section>
	<nav class="navbar navbar-default navbar_master">
		<div class="container">
			<ul class="nav navbar-nav master_nav_element_pos">
				<li class="active"><a href="#AccountingMaster">Accounting
						Master</a></li>
				<li><a href="#AccountingGroup">Accounting Group</a></li>
			</ul>
		</div>
	</nav>
	<div class="row container">
		<div class="col-md-3 sectiondivider SectionLeft_Medium">
			<div class="row ">
				<div class="col-md-3">
					<span>A/C&nbsp;Group</span>
				</div>
				<div class="col-md-9">
					<select class="input-sm form-control input_rightSpecing"
						tabindex="1">
					</select>
				</div>
			</div>
			<div class="row fieldsSpacing_Top">
				<div class="col-md-12">
					<!--=============GRID==========  -->
					<div id="grid" tabindex="2"
						class="MediumGrid_withUpSecBotSec fieldsBot_Spacing"></div>
					<!--=============GRID==========  -->
				</div>
			</div>
			<div class="row Medium_Filter">
				<div class="col-md-12 textCenter ">
					<a ng-click="showFilterPopup()" tabindex="3" title="Filter">Filter(<span
						class="highlight_purple" ng-show="filterStatus == 'ON'">ON</span><span
						ng-show="filterStatus == 'OFF'">OFF</span>)
					</a> <img ng-show="filterStatus == 'ON'" ng-click="cancelFilter()"
						alt="" class="filterOff_closeImage" tabindex="4"
						src="images/contacts_manager/close.png">
				</div>
			</div>
		</div>
		<div class="col-md-9 Medium_RightSec">
			<div class="row masterTop_GrayStrip fieldsSpacing">
				<nav class="mainnav">
					<ul class="leftFloat " id="list-nav">
						<li class=" GrayStrip_headingPos"><span
							class="masterTop_StripText">Account&nbsp;(<span
								class="masterHeading">New</span>)
						</span></li>
					</ul>
				</nav>
			</div>
			<div class="row fieldsSpacing fields_headingSpacing">
				<div class="col-md-4">
					<div class="row">
						<div class=" col-md-3">
							<span class="control-label">Account&nbsp;Code</span>
						</div>
						<div class="col-md-9">
							<input type="text"
								class="form-control input-sm AccountingMasterInput1"
								readonly="readonly">
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="row">
						<div class=" col-md-3">
							<span class="control-label">Description</span>
						</div>
						<div class="col-md-9">
							<input type="text"
								class="form-control input-sm AccountingMasterInput1">
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="  col-md-1">
							<span class="control-label ">Remark</span>
						</div>
						<div class="col-md-11">
							<textarea rows="2" cols=""
								class="textarea_fixSize AccountingMasterInput"></textarea>
						</div>
					</div>
				</div>
			</div>
			<div class="row fields_headingSpacing1">
				<h5>
					<span class="submenuBlue_heading">Account Details</span>
				</h5>
				<hr class="horizontal_line">
			</div>
			<div class="row fieldsSpacing">
				<div class="col-md-4">
					<div class="row">
						<div class="  col-md-3">
							<span class="control-label ">A/c&nbsp;Group</span>
						</div>
						<div class="col-md-9">
							<select
								class="form-control input-sm input_rightSpecing AccountingMasterInput1">
								<option>Assets</option>
								<option>Income</option>
								<option>Expense</option>
								<option>Liability</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="row">
						<div class=" col-md-3">
							<span class="control-label">Ladger&nbsp;Type</span>
						</div>
						<div class="col-md-9">
							<select
								class="form-control input-sm  input_rightSpecing AccountingMasterInput1">
								<option value='' disabled selected style='display: none;'>Please
									select</option>
								<option>Debtors</option>
								<option>Creditors</option>
								<option>Expenditure</option>
								<option>Income</option>
								<option>Liability</option>
								<option>Assets</option>
								<option>Cash</option>
								<option>Bank</option>

							</select>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="row">
						<div class=" col-md-3">
							<span class="control-label">A/C&nbsp;No.</span>
						</div>
						<div class="col-md-9">
							<input type="text"
								class="form-control input-sm AccountingMasterInput1">
						</div>
					</div>
				</div>

			</div>
			<div class="row fieldsSpacing">
				<div class="col-md-4">
					<div class="row">
						<div class=" col-md-3">
							<span class="control-label">Master#</span>
						</div>
						<div class="col-md-9">
							<input type="text"
								class="form-control input-sm AccountingMasterInput1">
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="row">
						<div class=" col-md-3">
							<span class="control-label">Tax&nbsp;ID#</span>
						</div>
						<div class="col-md-9">
							<input type="text"
								class="form-control input-sm AccountingMasterInput1">
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="row">
						<div class=" col-md-3">
							<span class="control-label">Opening&nbsp;Bal</span>
						</div>
						<div class="col-md-5">
							<div class="input-group inputGroupWidth AccountingMasterInput2">
								<input type="text" class="form-control input-sm textRight AccountingMasterInput4"
									tabindex="27"><span class="input-group-addon input-sm">Rs.</span>
							</div>
						</div>
						<div class="col-md-4">
							<select class="form-control input-sm input_rightSpecing AccountingMasterInput3">
								<option>Credit</option>
								<option>Debit</option>
							</select>
						</div>
					</div>
				</div>

			</div>
			<div class="row fields_headingSpacing1">
				<h5>
					<span class="submenuBlue_heading">Address Details</span>
				</h5>
				<hr class="horizontal_line">
			</div>
			<div class="row">
				<div class="col-md-6 sectionvline">
					<div class="row fieldsSpacing">
						<div class="form-group">
							<span class="col-md-3 control-label">Address&nbsp;Line&nbsp;1</span>
							<div class="col-md-9">
								<input type="text" class="form-control input-sm AddressInput1">
							</div>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="form-group">
							<span class="col-md-3 control-label">Address&nbsp;Line&nbsp;2</span>
							<div class="col-md-9">
								<input type="text" class="form-control input-sm AddressInput1">
							</div>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="form-group">
							<span class="col-md-3 control-label">City</span>
							<div class="col-md-5">
								<input type="text" class="form-control input-sm AddressInput2 ">
							</div>

							<div class="col-md-4">
								<input type="text" disabled class="form-control input-sm AddressInput5">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="form-group">
							<span class="col-md-3 control-label">Pin&nbsp;Code</span>
							<div class="col-md-5">
								<input class="form-control input-sm numberField AddressInput2">
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="row fieldsSpacing">
						<div class="form-group">
							<span class="col-md-3 control-label">Contact&nbsp;Person</span>
							<div class="col-md-9">
								<input type="text" class="form-control input-sm AddressInput1">
							</div>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="form-group">
							<span class="col-md-3 control-label">Mobile</span>
							<div class="col-md-4">
								<input type="text" class="form-control input-sm numberField AddressInput3">
							</div>
							<div class="col-md-1">
								<span class=" control-label textPosLeft ">Landline</span>
							</div>
							<div class="col-md-4">
								<input name="landline" id="landline" type="text" maxlength="10"
									class="form-control input-sm numberField">
							</div>
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class="form-group">
							<span class="col-md-3 control-label">Fax</span>
							<div class="col-md-4">
								<input name="fax" id="fax" type="text"
									class="form-control input-sm numberField AddressInput3">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="form-group">
							<span class="col-md-3 control-label">Email</span>
							<div class="col-md-7">
								<input type="email" class="form-control input-sm AddressInput4">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row fields_headingSpacing1">
				<h5>
					<span class="submenuBlue_heading">Account Status Details</span>
				</h5>
				<hr class="horizontal_line">
			</div>
			<div class="row fieldsSpacing">
				<div class="col-md-4">
					<div class="row">
						<div class=" col-md-3">
							<span class="control-label textMargin">Total&nbsp;Credit</span>
						</div>
						<div class="col-md-9">
							<div class="input-group AccountingMasterInput1">
								<input type="text" class="form-control input-sm textRight"
									readonly="readonly" tabindex="27"><span
									class="input-group-addon input-sm">Rs.</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="row">
						<div class=" col-md-3">
							<span class="control-label textMargin">Total&nbsp;Debit</span>
						</div>
						<div class="col-md-9">
							<div class="input-group AccountingMasterInput1">
								<input type="text" class="form-control input-sm textRight "
									readonly="readonly" tabindex="27"><span
									class="input-group-addon input-sm">Rs.</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="row">
						<div class="  col-md-3">
							<span class="control-label textMargin ">Net&nbsp;Balance</span>
						</div>
						<div class="col-md-9">
							<div class="input-group AccountingMasterInput1">
								<input type="text" class="form-control input-sm textRight "
									readonly="readonly" tabindex="27"><span
									class="input-group-addon input-sm">Rs.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<h5>
					<span class="submenuBlue_heading">Account Settings</span>
				</h5>
				<hr class="horizontal_line">
			</div>

			<div class="row">
				<span class="col-md-12"> <input class="checkBox"
					type="checkbox"> <span class="Settings_flagDist">Active</span>
					<input class="checkBox" type="checkbox"> <span
					class="Settings_flagDist">Lock</span> <span CLASS="rightFloat">Created
						by Satyajeet Toradmal- 27/09/2015 2:33</span>
				</span>
			</div>

		</div>


	</div>


</div>
<script type="text/javascript">
	$(function() {
		$('#grid').w2grid({
			name : 'grid',
			show : {

			},
			columns : [ {
				field : '',
				caption : 'Code',
				size : '60px',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Description',
				size : '100%',
				style : 'text-align: left'
			} ],
			records : [

			]
		});
	});
</script>