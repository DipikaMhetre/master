<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>

<div id="JournalVoucher" data-ng-controller="JournalVoucherCtrl"
	ng-init=init()>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" class="highlight_purple not_active">Journal
						Voucher</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a href="#">Refresh</a></li>
				<li><a ng-click=showJournalVoucherPopup()>New</a></li>
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
			<div class="row ">
				<div class="col-md-12">
					<!--=============GRID==========  -->
					<div id="grid" tabindex="2"
						class="JournalVoucher_LeftGrid fieldsBot_Spacing"></div>
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
		<div class="col-md-9">
			<div class="row masterTop_GrayStrip fieldsSpacing">
				<nav class="mainnav">
					<ul class="leftFloat " id="list-nav">
						<li class="returnReg_headingPos"><span
							class="masterTop_StripText">Journal&nbsp;Voucher</span></li>
					</ul>
				</nav>
			</div>
			<div class="row ">
				<div class="col-md-12">
					<!--=============GRID==========  -->
					<div id="grid1" tabindex="2"
						class="JournalVoucher_RightGrid fieldsBot_Spacing"></div>
					<!--=============GRID==========  -->
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 ">
					<div class=" BottomSection">
						<div class="ShowNextPad">
							<div class="rightFloat">
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
				caption : 'Accounts',
				size : '100%',
				style : 'text-align: left'
			} ],
			records : [

			]
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
				caption : 'Voucher Date',
				size : '10%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Voucher#',
				size : '10%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Amount Adjusted',
				size : '10%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Label',
				size : '40%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'User',
				size : '20%',
				style : 'text-align: left'
			} ],
			records : [

			]
		});
	});
</script>