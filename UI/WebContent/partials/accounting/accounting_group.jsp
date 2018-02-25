<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>

<div id="AccountingGroup" data-ng-controller="AccountingGroupCtrl"
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
				<li><a href="#AccountingMaster">Accounting Master</a></li>
				<li class="active"><a href="#AccountingGroup">Accounting
						Group</a></li>
			</ul>
		</div>
	</nav>
	<div class="row container">
		<div class="col-md-3 sectiondivider SectionLeft_Medium">
			<div class="row ">
				<div class="col-md-3">
					<span>Group&nbsp;Type</span>
				</div>
				<div class="col-md-9">
					<select class="input-sm form-control input_rightSpecing AccountingGroupInput"
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
						class="highlight_purple">ON</span><span>OFF</span>)
					</a> <img ng-show="filterStatus == 'ON'" ng-click="cancelFilter()"
						alt="" class="filterOff_closeImage" tabindex="4"
						src="images/contacts_manager/close.png">
				</div>
			</div>
		</div>
		<div class="col-md-9 Medium_RightSec">
			<div class="row masterTop_GrayStrip fieldsSpacing">
				<nav class="mainnav">
					<ul class="leftFloat" id="list-nav">
						<li class="GrayStrip_headingPos"><span
							class="masterTop_StripText">Account&nbsp;Group&nbsp;(<span
								class="masterHeading">New</span>)
						</span></li>
					</ul>
				</nav>
			</div>
			<div class="row fieldsSpacing fields_headingSpacing">
				<div class="col-md-4">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">A/C&nbsp;Group&nbsp;Code</span>
						</div>
						<div class="col-md-8">
							<input type="text" class="form-control input-sm"
								readonly="readonly">
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Description</span>
						</div>
						<div class="col-md-8">
							<input type="text" class="form-control input-sm">
						</div>
					</div>
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class="col-md-12">
					<div class="row">
						<div class=" col-md-1">
							<span class="control-label">Remark</span>
						</div>
						<div class="col-md-11">
							<textarea rows="2"
								class="textarea_fixSize linked_contact AccGroupRemark"></textarea>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<h5>
					<span class="submenuBlue_heading">Account Group Details</span>
				</h5>
				<hr class="horizontal_line">
			</div>
			<div class="row fieldsSpacing">
				<div class="col-md-4">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Group&nbsp;Type</span>
						</div>
						<div class="col-md-8">
							<select class="form-control input-sm input_rightSpecing">
								<option value='' disabled selected style='display: none;'>Please
									select</option>
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
						<div class=" col-md-4">
							<span class="control-label">Effect&nbsp;On</span>
						</div>
						<div class="col-md-8">
							<select class="form-control input-sm input_rightSpecing">
								<option value='' disabled selected style='display: none;'>Please
									select</option>
								<option>Trading A/C</option>
								<option>Profit & Loss A/C</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="row">
						<div class=" col-md-6">
							<span class="control-label">Group&nbsp;Code(-&nbsp;ve&nbsp;Value)</span>
						</div>
						<div class="col-md-6">
							<select class="form-control input-sm input_rightSpecing">
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<h5>
					<span class="submenuBlue_heading">Account Group Settings</span>
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
				caption : 'Type',
				size : '80%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Group',
				size : '100%',
				style : 'text-align: left'
			} ],
			records : [

			]
		});
	});
</script>