
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="ControlPanelMiscellaneous"
	data-ng-controller="ControlPanelMiscellaneousCtrl" ng-init="init()"
	onload=GetClock();>
	<!-- <div ng-show="spinner"
	style="z-index: 999999; position: absolute; background-color: black; height: 100%; width: 100%; opacity: 0.3;">
	<img
		style="position: absolute; width: 480px; /*image width */ height: 320px; /*image height */ left: 50%; top: 50%; margin-left: -240px; /*image width/2 */ margin-top: -160px;"
		src="images/loading.gif"> </img>
</div>  -->

	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" title="" class="highlight_purple not_active">Control
						Panel</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>



				<li><a href="#" title="Help"
					class="not_implemented_link not_active">Help</a></li>
			</ul>
			<ul class="rightFloat_Menu">
				<li><a href="#" title="Todays Date"
					class="highlight_purple not_active"><span id='clockbox'></span></a>
				</li>
				<li><a href="#" title="Todays Date"
					class="highlight_purple not_active"><span id='clockbox'></span></a></li>
				<li class="editable_btnPos">
					<button type="button"
						class="btn btn-default flag_enable input-sm editable-btn"
						tabindex="20">
						<span class="fieldLeft_spacing_lg"
							ng-click="editable=!editable;$root.editable=!$root.editable">Editable</span>
					</button>
				</li>
			</ul>
		</nav>
	</Section>
	<nav class="navbar navbar-default navbar_master">
		<div class="container">
			<ul class="nav navbar-nav master_nav_element_pos">
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,159);">System Parameters</a></li>
				<li class="active"><a >Miscellaneous</a></li>
			</ul>
		</div>
	</nav>

	<div class="row fieldsBot_Spacing_lg container">
		<div class="col-md-4">

			<div class="row emptyMiscControlPanel_div textCenter"
				ng-hide="showAct">
				<button ng-hide="showAct"
					ng-click="showAct=!showAct;activateContactType(96,'partials/utility/contactyType.jsp','templateGoesHere');"
					type="button" class="btn MiscbtnSize" tabindex="7">Show
					Contact Type</button>
			</div>
			<div id="templateGoesHere" class="col-md-12 textCenter"></div>

		</div>
		<div id="reasons" class="col-md-4 textCenter">

			<div class="row emptyMiscControlPanel_div textCenter"
				ng-hide="showReason">
				<button ng-hide="showReason"
					ng-click="showReason=!showReason;activateContactType(100,'partials/utility/credebitReason.jsp','creditdebitreason');"
					class="btn MiscbtnSize" tabindex="8">Show CreditDebit
					Reasons</button>
			</div>

			<div id="creditdebitreason" class="col-md-12 textCenter"></div>
		</div>
		<div class="col-md-4 textCenter">

			<div class="row emptyMiscControlPanel_div textCenter"
				ng-hide="showNarration">
				<button ng-hide="showNarration"
					ng-click="showNarration=!showNarration;activateContactType(104,'partials/utility/narrtionmisc.jsp','narrt');"
					class="btn MiscbtnSize" tabindex="9">Show Narration
					Entries</button>
			</div>
			<div id="narrt" class="col-md-12 textCenter"></div>
		</div>
	</div>
	<div class="row fieldsBot_Spacing_lg container">
		<div class="col-md-4">

			<div class="row emptyMiscControlPanel_div textCenter"
				ng-hide="showYear">
				<button ng-hide="showYear"
		ng-click="showYear=!showYear;activateContactType(108,'partials/utility/ManageFinacialYear.jsp','financeyear');"
					type="button" class="btn MiscbtnSize" tabindex="7">Manage Financial Year </button>
			</div>
			<div id="financeyear" class="col-md-12 textCenter"></div>

		</div>
		<div class="col-md-4">

			<div class="row emptyMiscControlPanel_div textCenter"
				ng-hide="showReciept">
				<button ng-hide="showReciept"
		ng-click="showReciept=!showReciept;activateContactType(111,'partials/utility/SalesmanReciept.jsp','salemanrecitpt');"
					type="button" class="btn MiscbtnSize" tabindex="7">Show Saleman Reciept </button>
			</div>
			<div id="salemanrecitpt" class="col-md-12 textCenter"></div>

		</div>
	</div>
</div>

<!-- <div class="row fieldsBot_Spacing_lg container">
	<div class="col-md-4 ">
	<button ng-hide="showYear"
		ng-click="showYear=!showYear;activateContactType(108,'partials/utility/ManageFinacialYear.jsp','financeyear');" type="button"
		class="btn okbtnSize" tabindex="7">Activate</button>
		<div id="financeyear" class="col-md-12 textCenter" ></div>
	</div>
	<div class="col-md-4 textCenter">
		<div class="row emptyMiscControlPanel_div textCenter" ng-hide="showReciept">
		<button ng-hide="showReciept" ng-click="showReciept=!showReciept;activateContactType(111,'partials/utility/SalesmanReciept.jsp','salemanrecitpt');"
		  class="btn okbtnSize" tabindex="10">Acivate</button>
		  </div>
		<div id="salemanrecitpt" class="col-md-12 textCenter"></div>
		<div class="col-md-4 textCenter">
			<div class=" thumbnail thumbnail_controlPanelMisc"
				style="background-color: #fbfbfb;"></div>
		</div>
	</div>


</div> -->
<!-- <div>
	class=" textCenter thumbnail thumbnail_controlPanelMisc No_accessBG">
	<div class="row ActivateBtn_div">
		<button type="button" disabled="{{isDisabled}}"
			class="btn ActivateBtn canclebtnSize" tabindex="7">No Access</button>
	</div>
</div> -->


<!-- <div
	class=" textCenter thumbnail thumbnail_controlPanelMisc No_accessBG">
	<div class="row ActivateBtn_div">
		<button type="button" disabled="{{isDisabled}}"
			class="btn ActivateBtn canclebtnSize" tabindex="7">No Access</button>
	</div>
</div> -->