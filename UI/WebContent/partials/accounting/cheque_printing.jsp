<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>

<div id="ChequePrinting" ng-controller="ChequePrintingCtrl"
	ng-init="init()">
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" title="" class="highlight_purple not_active">Cheque
						Printing</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a onclick="location.reload();" class="">Refresh</a></li>
				<li><a href="#" class="not_implemented_link not_active">Print</a></li>
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
		<div class="col-md-12">
			<nav class="mainnav">
				<ul class="rightFloat" id="list-nav">
					<li><a title="" ng-click="showFilterPopup()">Filter(OFF)</a></li>
					<li><a title="">Show Printed(OFF)</a></li>

				</ul>
			</nav>
		</div>
	</div>
	<div class="row container fieldsBot_Spacing fieldsTop_Spacing">
		<div class="col-md-12">
			<!--=============GRID==========  -->
			<div id="grid" tabindex="-1" class="FullGrid_withUpSecBotSec"></div>
			<!--=============GRID==========  -->
		</div>
	</div>
	<div class="row container">
		<div class="col-md-12 ShowNext_BotSec">
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

<script type="text/javascript">
	$(function() {
		$('#grid').w2grid({
			name : 'grid',
			show : {
				selectColumn : true
			},
			columns : [ {
				field : '',
				caption : 'Date',
				size : '10%',
				style : 'text-align: left'
			},  {
				field : '',
				caption : 'Payee A/C',
				size : '20%',
				style : 'text-align: left'
			},	{
				field : '',
				caption : 'Cheque#',
				size : '10%',
				style : 'text-align: left'
			},	{
				field : '',
				caption : 'Payment',
				size : '10%',
				style : 'text-align: left'
			},	{
				field : '',
				caption : 'Payment Details',
				size : '20%',
				style : 'text-align: left'
			},	{
				field : '',
				caption : 'Narration',
				size : '40%',
				style : 'text-align: left'
			} ],
			records : [

			]
		});
	});
</script>