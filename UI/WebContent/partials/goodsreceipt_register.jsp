<title>Goods
						Receipt Register</title>
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="GoodsReciept_Register"
	data-ng-controller="GoodsReciept_RegisterCtrl" ng-init=init()>
	<toast></toast>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" title="  " class="highlight_purple not_active">Goods
						Receipt Register</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,157);" title="Start Over" class="">Refresh</a></li>
				<li><a href="#" title="Export"
					class="not_implemented_link not_active">Export</a></li>
				<li><a href="#" title=""
					class="not_implemented_link not_active">Email</a></li>
				<li><a href="#" title=""
					class="not_implemented_link not_active">Print</a></li>
				<li><a href="#goodsReciept" class="">New</a></li>
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
		<div class="col-md-2 sectiondivider">
			<div class="row ">
				<div class="col-md-12">
					<!--=============GRID==========  -->
					<div id="grid" tabindex="2"
						class="gridSizeLeftPORegister fieldsBot_Spacing"></div>
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
		<div class="col-md-10">
			<div class="row masterTop_GrayStrip fieldsSpacing">
				<nav class="mainnav">
					<ul class="leftFloat" id="list-nav">
						<li class="returnReg_headingPos"><span
							class="masterTop_StripText">Goods&nbsp;Receipt</span></li>
					</ul>
					<ul class="rightFloat screensBtnColor" id="list-nav">
						<li ng-click="showNotLinked()" class="returnReg_CreditNoteONOFF "><a
							title="Show Selected" class="">Update to Ledger</a></li>
					</ul>
				</nav>
			</div>
			<div class="row fieldsSpacing">
				<div class="col-md-12">
					<!--=============GRID==========  -->
					<div id="grid2" tabindex="8" class="gridSizeRightPORegister"></div>
					<!--=============GRID==========  -->
				</div>
			</div>
			<div class=" BottomSection">
				<div class="ShowNextPad rightFloat">
					<div class=" showNextPos">
						<span class="">Show&nbsp;next</span> <input
							class=" input-sm textRight" style="width: 60px;" type="text"
							tabindex="5"
								ng-model="listLimit" value="{{listLimit}}">
						<button ng-click="getFreshGrDetails()"
							class="Go_btn btn btn-primary" tabindex="6">Go</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- <script type="text/javascript">
	$(function() {
		$('#grid').w2grid({
			name : 'grid',
			show : {
				/* toolbar : true,
				selectColumn : true */
			},
			columns : [ {
				field : '',
				caption : 'Company',
				size : '100%'
			} ]
		});
	});
</script> -->
<!-- <script type="text/javascript">
	$(function() {
		$('#grid1').w2grid({
			name : 'grid1',
			show : {
				/* toolbar : true,
				selectColumn : true */
			},
			columns : [ 
			            { field : '', caption : 'Date', size : '6%'},
			            { field : '', caption : 'Voucher#', size : '5%'},
			            { field : '', caption : 'Amount', size : '6%'},
			            { field : '', caption : 'L.R. Date', size : '6%'},
			            { field : '', caption : 'Due Date', size : '6%'},
			            { field : '', caption : 'Items', size : '5%'},
			            { field : '', caption : 'Supplier', size : '12%'},
			            { field : '', caption : 'Transporter', size : '7%'},
			            { field : '', caption : 'Status', size : '7%'},
			            { field : '', caption : 'Created by', size : '15%'},
			            { field : '', caption : 'Verified by', size : '15%'},
			            { field : '', caption : 'Ledger', size : '7%'}
			]
		});
	});
</script> -->