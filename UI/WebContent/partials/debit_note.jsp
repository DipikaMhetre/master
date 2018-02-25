<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>

<div id="DebitNote" data-ng-controller="DebitNoteCtrl" ng-init=init()>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" title="  " class="highlight_purple not_active">Debit
						Note Register</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a onclick="location.reload();" title="Reload this page"
					class="">Refresh</a></li>
				<li><a ng-click="showDebitNoteTypeDirectPopup()" title="Direct">New Debit Note - Direct
						</a></li>
				<li><a href="#" title="Help"
					class="not_implemented_link not_active">Help</a></li>
				<li><a ng-click="showDebitNoteTypeRateDiffPopup()"
					style="color: red;" title="Direct">Debit Note Type : Rate Diff</a></li>
				<li><a ng-click="showDebitNoteTypeDiscountRollbackPopup()"
					style="color: red;" title="Direct">Debit Note Type : Discount
						Rollback</a></li>
				<li><a ng-click="showDebitNoteTypeInterestPopup()"
					style="color: red;" title="Direct">Debit Note Type : Interest </a></li>
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
						<span class="fieldLeft_spacing_lg" ng-click="editable=!editable">Editable</span>
					</button>
				</li>
			</ul>
		</nav>
	</Section>
	<nav class="navbar navbar-default navbar_master">
		<div class="container">
			<ul class="nav navbar-nav master_nav_element_pos">
				<li><a href="#CreditNote">Credit Note Register</a></li>
				<li class="active"><a href="#DebitNote">Debit Note Register</a></li>
			</ul>
		</div>
	</nav>
	<div class="row container">
		<div class="col-md-4 sectiondivider">
			<div class="master_leftUpper1">
				<div class="row">
					<div class="col-md-3">
						<span>Debit&nbsp;Note&nbsp;Type</span>
					</div>
					<div class="col-md-9">
						<select class="input-sm CrDbNote_type input_rightSpecing"
							tabindex="1" ng-options="opt.name for opt in DNTypeList"
							ng-model="DNTypeSelected" value="{{DNTypeSelected}}"
							ng-change="onChangeDNType(DNTypeSelected)">
						</select>
					</div>
				</div>
			</div>
			<div class="row ">
				<div class="col-md-12">
					<!--=============GRID==========  -->
					<div id="grid" tabindex="2"
						class="gridSizeLeftReturnRegister fieldsBot_Spacing "></div>
					<!--=============GRID==========  -->
				</div>
			</div>
			<div class="row textCenter">
				<a ng-click="showFilterPopup()" tabindex="3" title="Filter">Filter(<span
					class="highlight_purple" ng-show="filterStatus == 'ON'">ON</span><span
					ng-show="filterStatus == 'OFF'">OFF</span>)
				</a> <img ng-show="filterStatus == 'ON'" ng-click="cancelFilter()"
					alt="" class="filterOff_closeImage" tabindex="4"
					src="images/contacts_manager/close.png">
			</div>
		</div>
		<div class="col-md-8">
			<div class="">
				<div class="row masterTop_GrayStrip fieldsSpacing">
					<nav class="mainnav">
						<ul class="leftFloat" id="list-nav">
							<li class="returnReg_headingPos"><span
								class="masterTop_StripText">Debit&nbsp;Note</span></li>
						</ul>
						<ul class="rightFloat screensBtnColor" id="list-nav">
							<li class="returnReg_CreditNoteONOFF "><a
								title="Update to Ledger" tabindex="7">Update to Ledger</a></li>
						</ul>
					</nav>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-12">
						<!--=============GRID==========  -->
						<div id="grid2" tabindex="8" class="returnsRegisterRightGride"></div>
						<!--=============GRID==========  -->
					</div>
				</div>
				<div class=" BottomSection">
					<div class="rightFloat showNextPos ShowNextPad">
						<span class="">Show&nbsp;next</span> <input
							class=" input-sm textRight" style="width: 60px;" type="text"
							tabindex="5">
						<button ng-click="getUpdatedCustomerDetails()"
							class="Go_btn btn btn-primary" tabindex="6">Go</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>





