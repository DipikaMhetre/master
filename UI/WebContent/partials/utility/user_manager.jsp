<title>Manage Active Users</title>
<div id="UserManager" data-ng-controller="UserManagerCtrl"
	ng-init=init()>
	<toast></toast>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" title="New Contact Manager"
					class="highlight_purple not_active">Manage Active Users</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a href="#" title="Help"
					class="not_implemented_link not_active">Help</a></li>
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
						<span class="fieldLeft_spacing_lg" ng-click="editable=!editable;$root.editable=!$root.editable" >Editable</span>
					</button>
				</li>
			</ul>
		</nav>
	</Section>
	<div class="containerUserManager">
		<div class="row">
			<h5>
				<span class="submenuBlue_heading"> Active User Details</span>
			</h5>
			<hr class="horizontal_line">
		</div>
		<div class="row fieldsSpacing">
			<div class="col-md-12 ">
				<button ng-disabled="!editable" type="button"
					class="btn btn-default flag_enable editable-btn" tabindex="20">
					<span class="fieldLeft_spacing_lg ">Login Lock</span>
				</button>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div id="grid2" tabindex="-1" class="user_manager_Grid"></div>
			</div>
		</div>
		<div class="row fieldsSpacing fieldsTop_Spacing">
			<div class="col-md-12 textRight">
				<button ng-disabled="!editable" ng-click="getActiveUsers()"
					class="btn btn-primary Force_LoginLogout">Force
					Refresh List</button>
				<button ng-disabled="!editable" ng-click="forceLogin()" class="btn btn-danger Force_LoginLogout"
					>Force Logout Selected User</button>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<h5>
				<span class="submenuBlue_heading">Active User Summery</span>
			</h5>
			<hr class="horizontal_line">
		</div>
		<div class="row fieldsTop_Spacing">
			<div class="col-md-3 textCenter">
				<div class=" thumbnail Users_SummaryThumbnail">
					<span class="Users_ActiveAvalable_Total">{{usersLogged}}</span><br> <span
						class="Users_Text">User</span> <br> <span
						class="Users_ActiveAvalable_Status">ACTIVE</span>
				</div>
			</div>
			<div class="col-md-1 textRight">
				<span class="glyphicon glyphicon-plus User_Active_Glyphicon"
					aria-hidden="true"></span>
			</div>
			<div class="col-md-4 textCenter">
				<div class=" thumbnail Users_SummaryThumbnail"
					style="width: 73%; margin: auto;">
					<span class="Users_ActiveAvalable_Total">{{logsAvailable}}</span><br> <span
						class="Users_Text">User</span> <br> <span
						class="Users_ActiveAvalable_Status"> AVAILABLE</span>
				</div>
			</div>
			<div class="col-md-1">
				<span class="glyphicon glyphicon-arrow-right User_Active_Glyphicon"
					aria-hidden="true"></span>
			</div>
			<div class="col-md-3 textCenter">
				<div class=" thumbnail Users_SummaryThumbnail">
					<span class="Users_ActiveAvalable_Total">{{maxUsers}}</span><br> <span
						class="Users_Text">User</span> <br> <span
						class="Users_ActiveAvalable_Status">LICENCES</span>
				</div>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
	/* $(function() {
		$('#grid2').w2grid({
			name : 'grid2',
			header : 'List of Names',
			show : {
				selectColumn : true
			},
			columns : [{ field: 'recid', caption: 'ID', size: '50px', sortable: true, attr: 'align=center' },
		    	        { field: 'activeUsersUID',caption:'User Name',size: '50%' },
		    	        { field: 'activeUsersName', caption: 'User', size: '50%', sortable: true, resizable: true },
		    	        { field: 'activeUsersIpAddress',caption:'Ip Adress',size: '50%'  },
		    	        { field: 'activeUsersActiveTime',caption:'Active Time',size: '50%' },
		    	      	       
		    	        { field: 'activeUsersLoginActivity',caption:'Last Activity',size: '50%' },
		    	        
		    	        { field: 'activeUsersLoginTime',caption:'Login Time',size: '50%'}],
			records : []
		});
	}); */
</script>

