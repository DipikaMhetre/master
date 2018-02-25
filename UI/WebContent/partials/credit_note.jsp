<title>Credit
						Note Register</title>
<div id="CreditNoteRegister" data-ng-controller="CreditNoteCtrl" ng-init=init()>
	<toast></toast>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a  title="  " class="highlight_purple not_active">Credit
						Note Register </a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,126);" title="Reload this page"
					class="">Refresh</a></li>
				<li><a ng-class="!editable?'not_implemented_link not_active':''" onclick="w2ui['grid2'].selectNone();" ng-click="showCreditNoteTypeDirectPopup();"
					title="Direct">New C.N.- Direct </a></li>
					<li><a  title="Help" ng-class="!editable?'not_implemented_link not_active':''"
					onclick="w2ui['grid2'].selectNone();" ng-click="newCreditNoteType('Goods Return')">New C.N.- Goods Return </a></li>
				<li><a  ng-class="!editable?'not_implemented_link not_active':''" ng-click="newCreditNoteType('Additional Discount')" title="Credit Note - Additional Discount">New C.N.- Additional
						Discount</a></li>
					 <li><a class="not_implemented_link not_active" title="Help"
					>Help</a></li>
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
	<nav class="navbar navbar-default navbar_master">
		<div class="container">
			<ul class="nav navbar-nav master_nav_element_pos">
				<li class="active"><a >Credit Note
						Register</a></li>
				<li><a >Debit Note Register</a></li>
			</ul>
		</div>
	</nav>
	<div class="row container">
		<div class="col-md-4 sectiondivider">
			<div class="master_leftUpper1">
				<div class="row">
					<div class="col-md-3">
						<span>Credit&nbsp;Note&nbsp;Type</span>
					</div>
					<div class="col-md-9">
						<select class="input-sm CrDbNote_type input_rightSpecing"
							tabindex="1" ng-options="opt.id as opt.name for opt in CNTypeList"
							ng-model="CNTypeSelected" 
							ng-change="onChangeCNType()">
						</select>
					</div>

				</div>
				<!-- <div class="row masterPage_gridText masterPage_fieldSpacing">
				</div> -->
			</div>
			<div class="row ">
				<div class="col-md-12">
					<!--=============GRID==========  -->
					<div id="grid" tabindex="2"
						class="gridSizeLeftReturnRegister fieldsBot_Spacing"></div>
					<!--=============GRID==========  -->
				</div>
			</div>
			<div class="row textCenter">
				<a ng-click="showFilterPopup()" title="Filter">Filter(<span ng-class="filterStatus=='ON'?'highlight_purple':''">{{filterStatus}}</span>) </a> <img
					alt="" class="filterOff_closeImage"
					ng-show="filterStatus=='ON'"
					ng-click="cancelFilter()"
					src="images/contacts_manager/close.png">
			</div>
		</div>
		<div class="col-md-8">
			<div class="">
				<div class="row masterTop_GrayStrip fieldsSpacing">
					<nav class="mainnav">
						<ul class="leftFloat " id="list-nav">
							<li class="returnReg_headingPos"><span
								class="masterTop_StripText">Credit&nbsp;Note</span></li>
						</ul>
						<ul class="rightFloat screensBtnColor" id="list-nav">
							<li onclick="alert('Design in progress!!')"ng-click="showNotLinked()" class="returnReg_CreditNoteONOFF "><a
								title="Show Selected" class="">Update to Ledger</a></li>
						</ul>
					</nav>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-12">
						<!--=============GRID==========  -->
						<div id="grid2" class="returnsRegisterRightGride"></div>
						<!--=============GRID==========  -->
					</div>
				</div>
				<div class=" BottomSection">
					<div class="rightFloat showNextPos ShowNextPad">
						<span class="">Show&nbsp;next</span> <input ng-model="listLimit"
							class=" input-sm textRight" style="width: 60px;" type="text"
							tabindex="5">
						<button ng-click="getCustomerCreditNote()"
							class="Go_btn btn btn-primary" tabindex="6">Go</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>





