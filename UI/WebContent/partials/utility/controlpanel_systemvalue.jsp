<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="ControlPanelSystemValue" ng-controller="ControlPanelCtrl" ng-init="init()"
	onload=GetClock();>
	<toast></toast>
	<% List<PurpleaidACL> xyz= new ArrayList();
		xyz=(ArrayList<PurpleaidACL>) request.getSession().getAttribute("permissionList"); 
		Boolean modifyPermission = false;
		
		String x=xyz.get(0).toString();
		for(int i=0;i<xyz.size();i++){
			Double d = new Double(xyz.get(i).getPurpleaidACLpermissionID());
			int n=d.intValue();
			 switch (n) {
	            	
	            	 case 159: modifyPermission = true;
             		break;     	
	            	
	             default:break;		
			} 		
		}
		
		%>
	
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" title="" class="highlight_purple not_active">Control Panel</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,159);">Refresh</a></li>
			  	<%if(modifyPermission ){%>				
				<li><a ng-click="save()"tabindex="19">Save</a></li>
				<%}%>
				<li><a href="#" title="Help" class="not_implemented_link not_active">Help</a></li>
			</ul>
			<ul class="rightFloat_Menu">
				<li>
					<button type="button" class="btn btn-default input-sm_btn editable_btn">Editable</button>
				</li>
			</ul>
		</nav>
	</Section>
	<nav class="navbar navbar-default navbar_master">
		<div class="container ">
			<ul class="nav navbar-nav master_nav_element_pos">
	        	<li class="active"><a >System Parameters</a></li>		        	
	        	<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,95);">Miscellaneous</a></li>
	        </ul>
		</div>
	</nav>
	<div class="row container">
		<h5>
			<span class="submenuBlue_heading">Control Panel Summary</span>
		</h5>
		<hr class="horizontal_line">
	</div>	
	<div class="container fieldsTop_Spacing">
		<!--=============GRID==========  -->
		<div id="grid" tabindex="17" class="control_panelGrid"></div>
		<!--=============GRID==========  -->
	</div>
	<div class="row">
		<nav class="mainnav screensBtnColor">
			<ul class="footerRowPos" id="list-nav">
				<li><a ng-click="Collpaseall();">Collapse All</a></li>
				<li><a ng-click="Expandall();">Expand All</a></li>
				<li><a ng-click="Setdefault()" >Set Default</a></li>
				 <li class="system_tooltip"><a class="not_active" style="color: gray !important;">Double click on "value" field support inline editing </a></li>
			</ul>
		</nav>
	</div>
</div>
<!-- <script type="text/javascript">
$(function () {
    $('#grid').w2grid({ 
        name: 'grid', 
        show: {           
            toolbar     : true,
            selectColumn: true
        },        
        columns: [                
            { field: 'description', caption: 'Description', size: '30%', style: 'text-align:left' },
            { field: 'value', caption: 'Value', size: '8%', editable: { type: 'int'} },
            { field: 'unit', caption: 'Unit', size: '8%' },
            { field: 'min_value', caption: 'Min Value', size: '8%' },
            { field: 'max_value', caption: 'Max Value', size: '8%' },
            { field: 'value_set', caption: 'Value Set', size: '8%' },
        ],
        records: [
            { recid: 1, description: 'Purchase', value: '', unit: '', min_value: '', max_value: '', value_set:'' },
            { recid: 2, description: 'Accounting', value: '', unit: '', min_value: '', max_value: '', value_set:'' },
            { recid: 3, description: '', value: '', unit: '', min_value: '', max_value: '', value_set:'' },
            { recid: 4, description: '', value: '', unit: '', min_value: '', max_value: '', value_set:'' },
            { recid: 5, description: '', value: '', unit: '', min_value: '', max_value: '', value_set:'' }           
        ],
        onExpand: function (event) {
            if (w2ui.hasOwnProperty('subgrid-' + event.recid)) w2ui['subgrid-' + event.recid].destroy();
            $('#'+ event.box_id).css({ margin: '0px', padding: '0px', width: '100%' }).animate({ height: '105px' }, 100);
            setTimeout(function () {
                $('#'+ event.box_id).w2grid({
                    name: 'subgrid-' + event.recid, 
                    show: { columnHeaders: false,
                    	    selectColumn: true
                    	},
                    fixedBody: true,
                    columns: [                
                              { field: 'description', caption: 'Description', size: '29%', style: 'text-align:left' },
                              { field: 'value', caption: 'Value', size: '8%', editable: { type: 'int'} },
                              { field: 'unit', caption: 'Unit', size: '8%' },
                              { field: 'min_value', caption: 'Min Value', size: '8%' },
                              { field: 'max_value', caption: 'Max Value', size: '8%' },
                              { field: 'value_set', caption: 'Value Set', size: '8%' },
                    ],
                    records: [
                              { recid: 6, description: 'power', value: '', unit: '', min_value: '', max_value: '', value_set:'' },
                              { recid: 7, description: 'xyz', value: '', unit: '', min_value: '', max_value: '', value_set:'' },
                              { recid: 8, description: 'xyz', value: '', unit: '', min_value: '', max_value: '', value_set:'' },
                              { recid: 9, description: 'xyz', value: '', unit: '', min_value: '', max_value: '', value_set:'' }                                                                                                                          
                    ]
                });
                w2ui['subgrid-' + event.recid].resize();
            }, 300);
        }
    });    
});
</script>
 -->