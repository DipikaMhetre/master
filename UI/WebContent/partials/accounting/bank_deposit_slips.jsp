<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="BankDepositSlip" ng-controller="BankDepositSlipCtrl"
	ng-init="init()">
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" title="" class="highlight_purple not_active">Bank
						Deposit Slips</a></li>
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
		<div class="col-md-2 sectiondivider">

			<div class="row">
				<div class="col-md-12">
					<select class="input-sm form-control input_rightSpecing"
						tabindex="1">
					</select>
				</div>
			</div>


			<div class="row fieldsBot_Spacing fieldsSpacing_Top">
				<div class="col-md-12">
					<!--=============GRID==========  -->
					<div id="grid" tabindex="2" class="Acc_BankDepositSlips_Leftgrid"></div>
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
		<div class="col-md-10">
			<div class="row masterTop_GrayStrip fieldsSpacing">
				<nav class="mainnav">
					<ul class="leftFloat " id="list-nav">
						<li class="returnReg_headingPos"><span
							class="masterTop_StripText">Bank&nbsp;Slip</span></li>
					</ul>
				</nav>
			</div>
			<div class="row fieldsSpacing fields_headingSpacing">
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Bank&nbsp;Slip#</span>
						</div>
						<div class="col-md-8">
							<input type="text" class="form-control input-sm textRight">
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Date</span>
						</div>
						<div class="col-md-8">
							<input type="text" class="form-control input-sm textRight"
								readonly="readonly">
						</div>
					</div>
				</div>
				
			</div>
			<div class="row fieldsSpacing">
			<div class="col-md-6">
					<div class="row">
						<div class=" col-md-2">
							<span class="control-label">Account</span>
						</div>
						<div class="col-md-10">
							<input type="text" class="form-control input-sm textRight"
								readonly="readonly">
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Deposit&nbsp;Date</span>
						</div>
						<div class="col-md-8">
							<input type="text" class="form-control input-sm textRight">
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Deposit&nbsp;by</span>
						</div>
						<div class="col-md-8">
							<select class="form-control input-sm input_rightSpecing">
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-1">
					<span class="control-label">Remark</span>
				</div>
				<div class="col-md-11">
					<input type="text" class="form-control input-sm textRight">
				</div>
			</div>
			<!-- <div class="row fieldsSpacing">
				<div class="col-md-7">
					<div class="row">
						<div class=" col-md-3">
							<span class="control-label">Remark</span>
						</div>
						<div class="col-md-9">
							<textarea rows="2" class="textarea_fixSize linked_contact"
								style="margin-left: -7px; width: 102%;">						
						</textarea>
						</div>
					</div>
				</div>
			</div> -->
			<div class="row">
				<h5>
					<span class="submenuBlue_heading">Cheque Details</span>
				</h5>
				<hr class="horizontal_line">
			</div>

			<div class="row">
				<div class="col-md-9 fieldsTop_Spacing">
					<span>Cheque#</span> <input type="text"
						class="input-sm  inputOrSelect_width_md"> <span
						class="fieldLeft_spacing_md1">From&nbsp;Date</span><input
						type="text" class="input-sm  inputOrSelect_width_md"> <span
						class="fieldLeft_spacing_md1">To&nbsp;Date</span> <input
						type="text" class="input-sm  inputOrSelect_width_md">
					<button
						class=" btn_Go_CrDbNote btn btn-primary fieldLeft_spacing_md1">Go</button>
				</div>
				<div class="col-md-3">
					<nav class="mainnav">
						<ul class="rightFloat" id="list-nav">
							<li><a tabindex="13">Show selected(OFF)</a></li>
						</ul>
					</nav>
				</div>
			</div>
			<div class="row fieldsBot_Spacing fieldsSpacing_Top">
				<div class="col-md-12">
					<!--=============GRID==========  -->
					<div id="grid1" tabindex="-1" class="Acc_BankDepositSlips_grid"></div>
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
				selectColumn : false
			},
			columns : [ {
				field : '',
				caption : 'Slip#',
				size : '30%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Total Amt',
				size : '40%',
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
				selectColumn : true
			},
			columns : [ {
				field : '',
				caption : 'Cheque Date',
				size : '12%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Cheque#',
				size : '12%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Bank',
				size : '22%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Payee Account',
				size : '40%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Narration',
				size : '40%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Amount',
				size : '12%',
				style : 'text-align: left'
			} ],
			records : [

			]
		});
	});
</script>