<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>

<div id="ChequeBounceEntry" data-ng-controller="ChequeBounceEntryCtrl"
	ng-init=init()>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" class="highlight_purple not_active">Cheque
						Bounce Return Entry</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a href="#">Refresh</a></li>
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
						class="btn btn-default flag_enable input-sm editable-btn"
						tabindex="20">
						<span class="fieldLeft_spacing_lg" ng-click="editable=!editable">Editable</span>
					</button>
				</li>
			</ul>
		</nav>
	</Section>
	<div class="row container">
		<div class="col-md-3 sectiondivider">
			<div class="master_leftUpper1 fieldsSpacing">
				<div class="row">
					<div class="col-md-4">
						<span>Payee&nbsp;Accounts</span>
					</div>
					<div class="col-md-8">
						<select class="input-sm CrDbNote_type input_rightSpecing">
							<option>Customer</option>
							<option>Company</option>
							<option>Other</option>
							<option>All</option>
						</select>
					</div>

				</div>
			</div>
			<div class="row ">
				<div class="col-md-12">
					<!--=============GRID==========  -->
					<div id="grid" tabindex="2"
						class="ChequeBounceEntryLeftGrid fieldsBot_Spacing"></div>
					<!--=============GRID==========  -->
				</div>
			</div>
			<div class="row textCenter">
				<a ng-click="showFilterPopup()" title="Filter">Filter(ON) </a> <img
					alt="" class="filterOff_closeImage"
					src="images/contacts_manager/close.png">
			</div>
		</div>
		<div class="col-md-9">
			<div class="">
				<div class="row masterTop_GrayStrip fieldsSpacing">
					<nav class="mainnav">
						<ul class="leftFloat " id="list-nav">
							<li class="returnReg_headingPos"><span
								class="masterTop_StripText">Bank&nbsp;Receipt&nbsp;Details</span></li>
						</ul>
					</nav>
				</div>
				<div class="row ">
					<div class="col-md-12">
						<nav class="mainnav">
							<ul class="rightFloat" id="list-nav">
								<li><a  tabindex="13">Show Returned(OFF)</a></li>
								<li><a ng-click="showReturnDetailsPopup()" tabindex="13">Return Details</a></li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="row fieldsSpacing fieldsTop_Spacing">
					<div class="col-md-12">
						<!--=============GRID==========  -->
						<div id="grid1" tabindex="14" class="ChequeBounceEntryRightGrid"></div>
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

<script type="text/javascript">
	$(function() {
		$('#grid').w2grid({
			name : 'grid',
			show : {

			},
			columns : [ {
				field : '',
				caption : 'A/C Code',
				size : '30%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'A/C Name',
				size : '70%',
				style : 'text-align: left'
			} ],
			records : []
		});
	});
</script>

<script type="text/javascript">
	$(function() {
		$('#grid1').w2grid({
			name : 'grid1',
			show : {

			},
			columns : [ {
				field : '',
				caption : 'Date',
				size : '10%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Cheque#',
				size : '10%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Bank',
				size : '16%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Amount',
				size : '10%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Voucher#',
				size : '10%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Voucher Date',
				size : '13%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Payee A/C Name',
				size : '20%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Return Date',
				size : '13%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Return Reason',
				size : '30%',
				style : 'text-align: left'
			} ],
			records : []
		});
	});
</script>