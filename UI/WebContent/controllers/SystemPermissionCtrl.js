
pharmApp.controller('SystemPermissionCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.pGroupList=[];
	$scope.labelList=[];
	$scope.permissionGroupList=[];
	$scope.userNameList=[];
	$scope.contactTypeList=[];
	$scope.userIDList=[];
	$scope.userList=[];
	$scope.prevRecId=0;
	$scope.changedStorage=[];
	$scope.clearFilter={userName:'All',contactLabel:'All',contactUserName:'All',contactType:'All',staff:'All',organisation:'',roleType:'All'};
	$scope.mainFilter={userName:'All',contactLabel:'All',contactUserName:'All',contactType:'All',staff:'All',organisation:'',roleType:'All'};
	$scope.mainFilterStatus='OFF';
	$scope.filterArray=[];
	$scope.selectAllFlag='OFF';
	$scope.groupFlag='OFF';
	$scope.firstCall=true;
	$scope.editable=$rootScope.editable;
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.init = function(){
		var config = {
				layout: {
					name: 'layout',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%'},
					         { type: 'main', minSize: 300 }
					         ]
				},
				grid: { 

					name: 'grid',
					show: {
						footer:true,
						toolbar : false,
						toolbarDelete: false,
						toolbarAdd : false
					},
					columns:[ 
					  { field: 'recid',hidden:true }, 
					  { field: 'index',hidden:true },
			          { field : 'purpleaidACLpermissionDescription',caption : 'Permission Group',size : '50%',style : 'text-align: left'},					     
			          { field : 'purpleaidACLpermission',caption : 'Permission',size : '50%',style : 'text-align: left'},
			          { field: 'manual',hidden:true },
			          { field: 'permissionList',hidden:true },
			          { field: 'permissionRoleList',hidden:true },
			          { field: 'purpleaidACLFlgExclusive',hidden:true },
			          { field: 'purpleaidACLIsPermission',hidden:true },
			          { field: 'purpleaidACLIsPermissionDeleted',hidden:true },
			          { field: 'purpleaidACLManualFlag',hidden:true },
			          { field: 'purpleaidACLMenu',hidden:true },
			          { field: 'purpleaidACLMenuID',hidden:true },
			          { field: 'purpleaidACLMenuUrl',hidden:true },
			          { field: 'purpleaidACLParentMenuID',hidden:true },
			          { field: 'purpleaidACLactiveUserId',hidden:true },
			          { field: 'purpleaidACLactiveUserToken',hidden:true },
			          /*{ field: 'purpleaidACLpermission',hidden:true },*/
			          /*{ field: 'purpleaidACLpermissionDescription',hidden:true },*/
			          { field: 'purpleaidACLpermissionGroupID',hidden:true },
			          { field: 'purpleaidACLpermissionID',hidden:true },
			          { field: 'purpleaidACLpermissionType',hidden:true },
			          { field: 'purpleaidACLrole',hidden:true },
			          { field: 'purpleaidACLroleID',hidden:true },
			          { field: 'purpleaidACLrolePermissionID',hidden:true },
			          { field: 'purpleaidACLupid',hidden:true },
			          { field: 'purpleaidACLuserID',hidden:true },
			          { field: 'role',hidden:true },
			          { field: 'rolePermissionList',hidden:true },
			          { field: 'status',hidden:true },
			          { field: 'userList',hidden:true },
			          
			          ],
					records:[],
					onSelect: function(event) {
						event.onComplete = function () {
							var angScope=angular.element(document.getElementById('SystemPermission')).scope();
							//angScope.showPermissionSelected=w2ui.grid.get(event.recid); coverd in chnge method
							angScope.onPerissionSelection(w2ui.grid.get(event.recid));
							angScope.currRecId=event.recid;
							angScope.sortAndFilter();
							angScope.$apply();

						}
					} ,
					onUnselect: function(event) {
			        	  event.onComplete = function () {
			        		  
			        		  var angScope=angular.element(document.getElementById('SystemPermission')).scope();					        		 
			        		  angScope.onPerissionSelectionRemoved(w2ui.grid.get(angScope.currRecId))
			        		  angular.copy(angular.element(angScope.userList,w2ui.grid2.records));
			        		  w2ui.grid2.refresh();					     				        
			        		  angScope.$apply();

			        	  }
			          },
			          searches: [
					              { field: 'purpleaidACLpermissionGroupID', caption: 'GroupId', type: 'int' },
					             ],
					 
					           keydown:function(event) {
					        	   // this method is called from w2utils
					        	   var obj = this;
					        	   if(event.keyCode==75){ w2ui.grid.keyboard=false;alert('keyboard OFF'); w2ui.grid.selectNone();};
					        	   if(event.keyCode==76){ w2ui.grid.keyboard=true;alert('keyboard ON');};
					        	   if (obj.keyboard !== true) return;
					        	   // trigger event
					        	   var eventData = obj.trigger({ phase: 'before', type: 'keydown', target: obj.name, originalEvent: event });
					        	   if (eventData.isCancelled === true) return;
					        	   // default behavior
					        	   var empty   = false;
					        	   var records = $('#grid_'+ obj.name +'_records');
					        	   var sel     = obj.getSelection();
					        	   if (sel.length == 0) empty = true;
					        	   var recid   = sel[0] || null;
					        	   var columns = [];
					        	   var recid2  = sel[sel.length-1];
					        	   if (typeof recid == 'object' && recid != null) {
					        		   recid   = sel[0].recid;
					        		   columns = [];
					        		   var ii  = 0;
					        		   while (true) {
					        			   if (!sel[ii] || sel[ii].recid != recid) break;
					        			   columns.push(sel[ii].column);
					        			   ii++;
					        		   }
					        		   recid2  = sel[sel.length-1].recid;
					        	   }
					        	   var ind    = obj.get(recid, true);
					        	   var ind2   = obj.get(recid2, true);
					        	   var rec    = obj.get(recid);
					        	   var recEL  = $('#grid_'+ obj.name +'_rec_'+ (ind !== null ? w2utils.escapeId(obj.records[ind].recid) : 'none'));
					        	   var cancel = false;
					        	   var key    = event.keyCode;
					        	   var shiftKey= event.shiftKey;
					        	   if (key == 9) { // tab key
					        		   if (event.shiftKey) key = 37; else key = 39; // replace with arrows
					        		   shiftKey = false;
					        		   cancel   = true;
					        	   }
					        	   switch (key) {
					        	   case 8:  // backspace
					        	   case 46: // delete
					        		   if(recid !=-1){
					        			   if (this.show.toolbarDelete) obj["delete"]();
					        			   cancel = true;
					        			   event.stopPropagation();
					        		   }
					        		   break;

					        	   case 27: // escape
					        		   obj.selectNone();
					        		   if (sel.length > 0 && typeof sel[0] == 'object') {
					        			   obj.select({ recid: sel[0].recid, column: sel[0].column });
					        		   }
					        		   cancel = true;
					        		   break;

					        	   case 65: // cmd + A
					        		   if (!event.metaKey && !event.ctrlKey) break;
					        		   obj.selectAll();
					        		   cancel = true;
					        		   break;

					        	   case 70: // cmd + F
					        		   if (!event.metaKey && !event.ctrlKey) break;
					        		   $('#grid_'+ obj.name + '_search_all').focus();
					        		   cancel = true;
					        		   break;

					        	   case 13: // enter
					        		   // if expandable columns - expand it
					        		   if (this.selectType == 'row' && obj.show.expandColumn === true) {
					        			   if (recEL.length <= 0) break;
					        			   obj.toggle(recid, event);
					        			   cancel = true;
					        		   } else { // or enter edit
					        			   for (var c in this.columns) {
					        				   if (this.columns[c].editable) {
					        					   columns.push(parseInt(c));
					        					   break;
					        				   }
					        			   }
					        			   // edit last column that was edited
					        			   if (this.selectType == 'row' && this.last.edit_col) columns = [this.last.edit_col];
					        			   if (columns.length > 0) {
					        				   obj.editField(recid, columns[0], null, event);
					        				   cancel = true;
					        			   }else{										
					        				   var grid = this;										
					        				   openMyAngularPopup(grid);	
					        			   }
					        		   }
					        		   cancel = true;
					        		   break;

					        	   case 37: // left
					        		   if (empty) break;
					        		   // check if this is subgrid
					        		   var parent = $('#grid_'+ this.name +'_rec_'+ w2utils.escapeId(obj.records[ind].recid)).parents('tr');
					        		   if (parent.length > 0 && String(parent.attr('id')).indexOf('expanded_row') != -1) {
					        			   var recid = parent.prev().attr('recid');
					        			   var grid  = parent.parents('.w2ui-grid').attr('name');
					        			   obj.selectNone();
					        			   w2utils.keyboard.active(grid);
					        			   w2ui[grid].set(recid, { expanded: false });
					        			   w2ui[grid].collapse(recid);
					        			   w2ui[grid].click(recid);
					        			   cancel = true;
					        			   break;
					        		   }
					        		   if (this.selectType == 'row') {
					        			   if (recEL.length <= 0 || rec.expanded !== true ) break;
					        			   obj.set(recid, { expanded: false }, true);
					        			   obj.collapse(recid, event);
					        		   } else {
					        			   var prev = obj.prevCell(columns[0]);
					        			   if (prev != null) {
					        				   if (shiftKey && obj.multiSelect) {
					        					   if (tmpUnselect()) return;
					        					   var tmp    = [];
					        					   var newSel = [];
					        					   var unSel  = [];
					        					   if (columns.indexOf(this.last.sel_col) == 0 && columns.length > 1) {
					        						   for (var i in sel) {
					        							   if (tmp.indexOf(sel[i].recid) == -1) tmp.push(sel[i].recid);
					        							   unSel.push({ recid: sel[i].recid, column: columns[columns.length-1] });
					        						   }
					        					   } else {
					        						   for (var i in sel) {
					        							   if (tmp.indexOf(sel[i].recid) == -1) tmp.push(sel[i].recid);
					        							   newSel.push({ recid: sel[i].recid, column: prev });
					        						   }
					        					   }
					        					   obj.unselect.apply(obj, unSel);
					        					   obj.select.apply(obj, newSel);
					        				   } else {
					        					   event.shiftKey = false;
					        					   obj.click({ recid: recid, column: prev }, event);
					        				   }
					        			   } else {
					        				   // if selected more then one, then select first
					        				   if (!shiftKey) {
					        					   for (var s=1; s<sel.length; s++) obj.unselect(sel[s]);
					        				   }
					        			   }
					        		   }
					        		   cancel = true;
					        		   break;

					        	   case 39: // right
					        		   if (empty) break;
					        		   if (this.selectType == 'row') {
					        			   if (recEL.length <= 0 || rec.expanded === true || obj.show.expandColumn !== true) break;
					        			   obj.expand(recid, event);
					        		   } else {
					        			   var next = obj.nextCell(columns[columns.length-1]);
					        			   if (next !== null) {
					        				   if (shiftKey && key == 39 && obj.multiSelect) {
					        					   if (tmpUnselect()) return;
					        					   var tmp    = [];
					        					   var newSel = [];
					        					   var unSel  = [];
					        					   if (columns.indexOf(this.last.sel_col) == columns.length-1 && columns.length > 1) {
					        						   for (var i in sel) {
					        							   if (tmp.indexOf(sel[i].recid) == -1) tmp.push(sel[i].recid);
					        							   unSel.push({ recid: sel[i].recid, column: columns[0] });
					        						   }
					        					   } else {
					        						   for (var i in sel) {
					        							   if (tmp.indexOf(sel[i].recid) == -1) tmp.push(sel[i].recid);
					        							   newSel.push({ recid: sel[i].recid, column: next });
					        						   }
					        					   }
					        					   obj.unselect.apply(obj, unSel);
					        					   obj.select.apply(obj, newSel);
					        				   } else {
					        					   obj.click({ recid: recid, column: next }, event);
					        				   }
					        			   } else {
					        				   // if selected more then one, then select first
					        				   if (!shiftKey) {
					        					   for (var s=0; s<sel.length-1; s++) obj.unselect(sel[s]);
					        				   }
					        			   }
					        		   }
					        		   cancel = true;
					        		   break;

					        	   case 38: // up
					        		   if (empty) selectTopRecord();
					        		   if (recEL.length <= 0) break;
					        		   // move to the previous record
					        		   var prev = obj.prevRow(ind);
					        		   if (prev != null) {
					        			   // jump into subgrid
					        			   if (obj.records[prev].expanded) {
					        				   var subgrid = $('#grid_'+ obj.name +'_rec_'+ w2utils.escapeId(obj.records[prev].recid) +'_expanded_row').find('.w2ui-grid');
					        				   if (subgrid.length > 0 && w2ui[subgrid.attr('name')]) {
					        					   obj.selectNone();
					        					   var grid = subgrid.attr('name');
					        					   var recs = w2ui[grid].records;
					        					   w2utils.keyboard.active(grid);
					        					   w2ui[grid].click(recs[recs.length-1].recid);
					        					   cancel = true;
					        					   break;
					        				   }
					        			   }
					        			   if (shiftKey && obj.multiSelect) { // expand selection
					        				   if (tmpUnselect()) return;
					        				   if (obj.selectType == 'row') {
					        					   if (obj.last.sel_ind > prev && obj.last.sel_ind != ind2) {
					        						   obj.unselect(obj.records[ind2].recid);
					        					   } else {
					        						   obj.select(obj.records[prev].recid);
					        					   }
					        				   } else {
					        					   if (obj.last.sel_ind > prev && obj.last.sel_ind != ind2) {
					        						   prev = ind2;
					        						   var tmp = [];
					        						   for (var c in columns) tmp.push({ recid: obj.records[prev].recid, column: columns[c] });
					        						   obj.unselect.apply(obj, tmp);
					        					   } else {
					        						   var tmp = [];
					        						   for (var c in columns) tmp.push({ recid: obj.records[prev].recid, column: columns[c] });
					        						   obj.select.apply(obj, tmp);
					        					   }
					        				   }
					        			   } else { // move selected record
					        				   obj.selectNone();
					        				   obj.click({ recid: obj.records[prev].recid, column: columns[0] }, event);
					        			   }
					        			   obj.scrollIntoView(prev);
					        			   if (event.preventDefault) event.preventDefault();
					        		   } else {
					        			   // if selected more then one, then select first
					        			   if (!shiftKey) {
					        				   for (var s=1; s<sel.length; s++) obj.unselect(sel[s]);
					        			   }
					        			   // jump out of subgird (if first record)
					        			   var parent = $('#grid_'+ obj.name +'_rec_'+ w2utils.escapeId(obj.records[ind].recid)).parents('tr');
					        			   if (parent.length > 0 && String(parent.attr('id')).indexOf('expanded_row') != -1) {
					        				   var recid = parent.prev().attr('recid');
					        				   var grid  = parent.parents('.w2ui-grid').attr('name');
					        				   obj.selectNone();
					        				   w2utils.keyboard.active(grid);
					        				   w2ui[grid].click(recid);
					        				   cancel = true;
					        				   break;
					        			   }
					        		   }
					        		   break;

					        	   case 40: // down
					        		   if (empty) selectTopRecord();
					        		   if (recEL.length <= 0) break;
					        		   // jump into subgrid
					        		   if (obj.records[ind2].expanded) {
					        			   var subgrid = $('#grid_'+ this.name +'_rec_'+ w2utils.escapeId(obj.records[ind2].recid) +'_expanded_row').find('.w2ui-grid');
					        			   if (subgrid.length > 0 && w2ui[subgrid.attr('name')]) {
					        				   obj.selectNone();
					        				   var grid = subgrid.attr('name');
					        				   var recs = w2ui[grid].records;
					        				   w2utils.keyboard.active(grid);
					        				   w2ui[grid].click(recs[0].recid);
					        				   cancel = true;
					        				   break;
					        			   }
					        		   }
					        		   // move to the next record
					        		   var next = obj.nextRow(ind2);
					        		   if (next != null) {
					        			   if (shiftKey && obj.multiSelect) { // expand selection
					        				   if (tmpUnselect()) return;
					        				   if (obj.selectType == 'row') {
					        					   if (this.last.sel_ind < next && this.last.sel_ind != ind) {
					        						   obj.unselect(obj.records[ind].recid);
					        					   } else {
					        						   obj.select(obj.records[next].recid);
					        					   }
					        				   } else {
					        					   if (this.last.sel_ind < next && this.last.sel_ind != ind) {
					        						   next = ind;
					        						   var tmp = [];
					        						   for (var c in columns) tmp.push({ recid: obj.records[next].recid, column: columns[c] });
					        						   obj.unselect.apply(obj, tmp);
					        					   } else {
					        						   var tmp = [];
					        						   for (var c in columns) tmp.push({ recid: obj.records[next].recid, column: columns[c] });
					        						   obj.select.apply(obj, tmp);
					        					   }
					        				   }
					        			   } else { // move selected record
					        				   obj.selectNone();
					        				   obj.click({ recid: obj.records[next].recid, column: columns[0] }, event);
					        			   }
					        			   obj.scrollIntoView(next);
					        			   cancel = true;
					        		   } else {
					        			   // if selected more then one, then select first
					        			   if (!shiftKey) {
					        				   for (var s=0; s<sel.length-1; s++) obj.unselect(sel[s]);
					        			   }
					        			   // jump out of subgrid (if last record in subgrid)
					        			   var parent = $('#grid_'+ this.name +'_rec_'+ w2utils.escapeId(obj.records[ind2].recid)).parents('tr');
					        			   if (parent.length > 0 && String(parent.attr('id')).indexOf('expanded_row') != -1) {
					        				   var recid = parent.next().attr('recid');
					        				   var grid  = parent.parents('.w2ui-grid').attr('name');
					        				   obj.selectNone();
					        				   w2utils.keyboard.active(grid);
					        				   w2ui[grid].click(recid);
					        				   cancel = true;
					        				   break;
					        			   }
					        		   }
					        		   break;

					        		   // copy & paste

					        	   case 17: // ctrl key
					        	   case 91: // cmd key
					        		   if (empty) break;
					        		   var text = obj.copy();
					        		   $('body').append('<textarea id="_tmp_copy_data" '+
					        				   '   onpaste="var obj = this; setTimeout(function () { w2ui[\''+ obj.name + '\'].paste(obj.value); }, 1);" '+
					        				   '   onkeydown="w2ui[\''+ obj.name +'\'].keydown(event)"'+
					        				   '   style="position: absolute; top: -100px; height: 1px; width: 1px">'+ text +'</textarea>');
					        		   $('#_tmp_copy_data').focus().select();
					        		   // remove _tmp_copy_data textarea
					        		   $(document).on('keyup', tmp_key_down);
					        		   function tmp_key_down() { 
					        			   $('#_tmp_copy_data').remove(); 
					        			   $(document).off('keyup', tmp_key_down); 
					        		   }
					        		   break;

					        	   case 88: // x - cut
					        		   if (empty) break;
					        		   if (event.ctrlKey || event.metaKey) {
					        			   setTimeout(function () { obj["delete"](true); }, 100);
					        		   }
					        		   break;

					        	   default: return; // exit this handler for other keys
					        	   }
					        	   var tmp = [187, 189, 32]; // =-spacebar
					        	   for (var i=48; i<=90; i++) tmp.push(i); // 0-9,a-z,A-Z
					        	   if (tmp.indexOf(key) != -1 && !event.ctrlKey && !event.metaKey && !cancel) {
					        		   if (columns.length == 0) columns.push(0);
					        		   var tmp = String.fromCharCode(key);
					        		   if (key == 187) tmp = '=';
					        		   if (key == 189) tmp = '-';
					        		   if (!shiftKey)  tmp = tmp.toLowerCase();
					        		   obj.editField(recid, columns[0], tmp, event);
					        		   cancel = true;
					        	   }
					        	   if (cancel) { // cancel default behaviour
					        		   if (event.preventDefault) event.preventDefault();
					        	   }
					        	   // event after
					        	   obj.trigger($.extend(eventData, { phase: 'after' }));

					        	   function selectTopRecord() {
					        		   var ind = Math.floor((records[0].scrollTop + (records.height() / 2.1)) / obj.recordHeight);
					        		   if (!obj.records[ind]) ind = 0;
					        		   obj.select({ recid: obj.records[ind].recid, column: 0});
					        	   }				
					        	   function tmpUnselect () {
					        		   if (obj.last.sel_type != 'click') return false;
					        		   if (obj.selectType != 'row') {
					        			   obj.last.sel_type = 'key';
					        			   if (sel.length > 1) {
					        				   for (var s in sel) {
					        					   if (sel[s].recid == obj.last.sel_recid && sel[s].column == obj.last.sel_col) {
					        						   sel.splice(s, 1);
					        						   break;
					        					   }
					        				   }
					        				   obj.unselect.apply(obj, sel);
					        				   return true;
					        			   }
					        			   return false;
					        		   } else {
					        			   obj.last.sel_type = 'key';
					        			   if (sel.length > 1) {
					        				   sel.splice(sel.indexOf(obj.records[obj.last.sel_ind].recid), 1);
					        				   obj.unselect.apply(obj, sel);
					        				   return true;
					        			   }
					        			   return false;
					        		   }
					        	   }


					           }

				}

		};

		if(!$rootScope.grid){
			loadA(config);
			//$('#grid').contents()[0].attr('id','my');


		}else{
			w2ui.grid.destroy();
			w2ui.layout.destroy();
			loadA(config);
		}

		//////////////Config and Grid1 load ends
		var config2 = {
				layout: {
					name: 'layout2',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%'},
					         { type: 'main' }
					         ]
				},
				grid: { 

					name: 'grid2',
					show: {
						toolbar : true,
						toolbarDelete: false,
						toolbarAdd : false
					},
					columns: [
					          { field : 'flagSelected',caption : '',size : '50%',sortable:true,editable: { type: 'checkbox'  }}
					          /*{ field: 'flagSelected', caption: 'Full Name', size: '200px',
                render: function (record, index, column_index) {
                    //var html = '<div><input id="check_'+record.recid+'" type="checkbox" onclick="angular.element(document.getElementById(\'SystemPermission\')).scope().updateChanges('+ record.recid+')" ></input></div>';
                	var html = '<div><input id="check_'+record.recid+'" type="checkbox" ng-click="updateChanges('+ record.recid+')" ></input></div>';
                	return html;
                } 
            }*/,
					          { field: 'recid',hidden:true }, 
					          { field : 'contactFullName',caption : 'User Name',size : '50%',style : 'text-align: left',sortable:true},					     
					          { field : 'contactLabel',caption : 'Label',size : '50%',style : 'text-align: left'},
					          { field : 'contactUserName',caption : 'User ID',size : '50%',style : 'text-align: left'}, 
					          { field : 'contactTypeDescription',caption : 'Contact Type',size : '50%',style : 'text-align: left'},
					          { field : 'contactIsStaffDescription',caption : 'Staff',size : '50%',style : 'text-align: left'}, 
					          { field : 'contactOrganization',caption : 'Organization',size : '50%',style : 'text-align: left'}, 
					          { field : 'role',caption : 'Role',size : '50%',style : 'text-align: left'},
					          { field : 'manual',caption : 'Manual',size : '50%',style : 'text-align: left'},
					          /*{ field : '',caption : 'User Since',size : '50%',style : 'text-align: left'},*/
					          { field: 'contactActiveFlag',hidden:true },
					          { field: 'contactAddressList',hidden:true },
					          { field: 'contactArea',hidden:true },
					          { field: 'contactAssociationList',hidden:true },
					          { field: 'contactCompanyId',hidden:true },
					          { field: 'contactCompanyName',hidden:true },
					          { field: 'contactEmailList',hidden:true },
					          { field: 'contactEntityDetailsList',hidden:true },
					          { field: 'contactFirstName',hidden:true },
					          { field: 'contactFullName',hidden:true },
					          { field: 'contactHQ',hidden:true },
					          { field: 'contactId',hidden:true },
					          { field: 'contactIsDeleted',hidden:true },
					          { field: 'contactIsStaff',hidden:true },
					          { field: 'contactIsStaffDescription',hidden:true },
					          { field: 'contactLabel',hidden:true },
					          { field: 'contactLastName',hidden:true },
					          { field: 'contactLockFlag',hidden:true },
					          { field: 'contactMiddleName',hidden:true },
					          { field: 'contactMyContactId',hidden:true },
					          { field: 'contactMyFavouriteFlag',hidden:true },
					          { field: 'contactNameTitle',hidden:true },	          
					          { field: 'contactNickName',hidden:true },
					          { field: 'contactNotes',hidden:true },
					          { field: 'contactNickName',hidden:true },
					          { field: 'contactNotes',hidden:true },
					          { field: 'contactNotificationFlag',hidden:true },
					          { field: 'contactOnlyMyContactFlag',hidden:true },
					          { field: 'contactRelatedNamesList',hidden:true },
					          { field: 'contactRoute',hidden:true },
					          { field: 'contactSendGreetingFlag',hidden:true },
					          { field: 'contactType',hidden:true },
					          { field: 'contactTypeEntityId',hidden:true },
					          { field: 'contactTypeId',hidden:true },
					          { field: 'contactUrlList',hidden:true },
					          { field: 'contactUserLock',hidden:true },
					          { field: 'contactUserPassward',hidden:true },
					          { field: 'contactjobTitle',hidden:true },
					          { field: 'contactsince',hidden:true },
					          { field: 'contctImportantDatesList',hidden:true },
					          { field: 'contctPhoneList',hidden:true },
					          { field: 'permissionList',hidden:true }
					          
         
					          ],
					          searches: [
							              { field: 'flagSelected', caption: 'xyz', type: 'text' },
							              { field: 'contactFullName', caption: 'Full Name', type: 'text' },
							              { field: 'contactLabel', caption: 'Contact Label', type: 'text' },
							              { field: 'contactUserName', caption: 'User Id', type: 'text' },
							              { field: 'contactTypeDescription', caption: 'Contact Type', type: 'text' },
							              { field: 'contactIsStaffDescription', caption: 'Staff', type: 'text' },
							              { field: 'contactOrganization', caption: 'Organisation', type: 'text' }
							             /* ,{ field: 'role', caption: 'Organisation', type: 'text' }*/],
					          onSelect: function(event) {
					        	  event.onComplete = function () {					        		  
					        		 // var angScope=angular.element(document.getElementById('ReturnsRegister')).scope();
					        		 
					        		  //angScope.$apply();

					        	  }
					          } ,
					          onUnselect: function(event) {
					        	  event.onComplete = function () {
					        		  
					        		 // var angScope=angular.element(document.getElementById('SystemPermission')).scope();					        		 
					        		 // angScope.showPermissionSelected={};
					        		  //angular.copy(angular.element(angScope.userList,w2ui.grid2.records));
					        		 // w2ui.grid2.refresh();					     				        
					        		  //angScope.$apply();

					        	  }
					          },
					          onChange: function(event) {
					        	  event.onComplete = function () {     		 
					        		 var angScope=angular.element(document.getElementById('SystemPermission')).scope();					        		 
					        		 w2ui.grid2.save();
					        		 angScope.updateChanges(w2ui.grid2.get(event.recid));
					        		 
					        		  angScope.$apply();
					        	  }
					          },
					          
					        /*  onRestore: function(event) {
					        	  event.onComplete = function () {
					        		 // alert('restored '+event.recid);
					        		  angular.element(document.getElementById('SystemPermission')).scope().x=w2ui.grid2.get(event.recid);
					        		 // var angScope=angular.element(document.getElementById('SystemPermission')).scope();					        		 
					        		 // angScope.showPermissionSelected={};
					        		  //angular.copy(angular.element(angScope.userList,w2ui.grid2.records));
					        		 // w2ui.grid2.refresh();					     				        
					        		  //angScope.$apply();

					        	  }
					          },*/
					          onDblClick:function(event){
					        	  event.onComplete = function () {
					        		  /*var angScope=angular.element(document.getElementById('ReturnsRegister')).scope();
					        		  angScope.showRecordSelected={};
					        		  angular.copy(w2ui.grid2.get(event.recid),angScope.showRecordSelected);					    
					        		  angular.element(document.getElementById('ReturnsRegister')).scope().$root.returnRecordSelected={};
					        		  angular.copy(w2ui.grid2.get(event.recid), angular.element(document.getElementById('ReturnsRegister')).scope().$root.returnRecordSelected);
					        		  angScope.showGoodReturn=true;
					        		  angScope.$apply();
					        		  angScope.objectPool();*/

					        	  }
					          },
					          sortData: [
								           {field: 'flagSelected', direction: 'desc' }
								           ],
					                     records:[],					                   
					                     keydown:function(event) {
					                    	 // this method is called from w2utils
					                    	 var obj = this;
					                    	 if(event.keyCode==75){ w2ui.grid.keyboard=false;alert('keyboard OFF'); w2ui.grid.selectNone();};
					                    	 if(event.keyCode==76){ w2ui.grid.keyboard=true;alert('keyboard ON');};
					                    	 if (obj.keyboard !== true) return;
					                    	 // trigger event
					                    	 var eventData = obj.trigger({ phase: 'before', type: 'keydown', target: obj.name, originalEvent: event });
					                    	 if (eventData.isCancelled === true) return;
					                    	 // default behavior
					                    	 var empty   = false;
					                    	 var records = $('#grid_'+ obj.name +'_records');
					                    	 var sel     = obj.getSelection();
					                    	 if (sel.length == 0) empty = true;
					                    	 var recid   = sel[0] || null;
					                    	 var columns = [];
					                    	 var recid2  = sel[sel.length-1];
					                    	 if (typeof recid == 'object' && recid != null) {
					                    		 recid   = sel[0].recid;
					                    		 columns = [];
					                    		 var ii  = 0;
					                    		 while (true) {
					                    			 if (!sel[ii] || sel[ii].recid != recid) break;
					                    			 columns.push(sel[ii].column);
					                    			 ii++;
					                    		 }
					                    		 recid2  = sel[sel.length-1].recid;
					                    	 }
					                    	 var ind    = obj.get(recid, true);
					                    	 var ind2   = obj.get(recid2, true);
					                    	 var rec    = obj.get(recid);
					                    	 var recEL  = $('#grid_'+ obj.name +'_rec_'+ (ind !== null ? w2utils.escapeId(obj.records[ind].recid) : 'none'));
					                    	 var cancel = false;
					                    	 var key    = event.keyCode;
					                    	 var shiftKey= event.shiftKey;
					                    	 if (key == 9) { // tab key
					                    		 if (event.shiftKey) key = 37; else key = 39; // replace with arrows
					                    		 shiftKey = false;
					                    		 cancel   = true;
					                    	 }
					                    	 switch (key) {
					                    	 case 8:  // backspace
					                    	 case 46: // delete
					                    		 if(recid !=-1){
					                    			 if (this.show.toolbarDelete) obj["delete"]();
					                    			 cancel = true;
					                    			 event.stopPropagation();
					                    		 }
					                    		 break;

					                    	 case 27: // escape
					                    		 obj.selectNone();
					                    		 if (sel.length > 0 && typeof sel[0] == 'object') {
					                    			 obj.select({ recid: sel[0].recid, column: sel[0].column });
					                    		 }
					                    		 cancel = true;
					                    		 break;

					                    	 case 65: // cmd + A
					                    		 if (!event.metaKey && !event.ctrlKey) break;
					                    		 obj.selectAll();
					                    		 cancel = true;
					                    		 break;

					                    	 case 70: // cmd + F
					                    		 if (!event.metaKey && !event.ctrlKey) break;
					                    		 $('#grid_'+ obj.name + '_search_all').focus();
					                    		 cancel = true;
					                    		 break;

					                    	 case 13: // enter
					                    		 // if expandable columns - expand it
					                    		 if (this.selectType == 'row' && obj.show.expandColumn === true) {
					                    			 if (recEL.length <= 0) break;
					                    			 obj.toggle(recid, event);
					                    			 cancel = true;
					                    		 } else { // or enter edit
					                    			 for (var c in this.columns) {
					                    				 if (this.columns[c].editable) {
					                    					 columns.push(parseInt(c));
					                    					 break;
					                    				 }
					                    			 }
					                    			 // edit last column that was edited
					                    			 if (this.selectType == 'row' && this.last.edit_col) columns = [this.last.edit_col];
					                    			 if (columns.length > 0) {
					                    				 obj.editField(recid, columns[0], null, event);
					                    				 cancel = true;
					                    			 }else{										
					                    				 var grid = this;										

					                    			 }
					                    		 }
					                    		 cancel = true;
					                    		 angular.element(document.getElementById('ReturnsRegister')).scope().objectPool();
					                    		 break;

					                    	 case 37: // left
					                    		 if (empty) break;
					                    		 // check if this is subgrid
					                    		 var parent = $('#grid_'+ this.name +'_rec_'+ w2utils.escapeId(obj.records[ind].recid)).parents('tr');
					                    		 if (parent.length > 0 && String(parent.attr('id')).indexOf('expanded_row') != -1) {
					                    			 var recid = parent.prev().attr('recid');
					                    			 var grid  = parent.parents('.w2ui-grid').attr('name');
					                    			 obj.selectNone();
					                    			 w2utils.keyboard.active(grid);
					                    			 w2ui[grid].set(recid, { expanded: false });
					                    			 w2ui[grid].collapse(recid);
					                    			 w2ui[grid].click(recid);
					                    			 cancel = true;
					                    			 break;
					                    		 }
					                    		 if (this.selectType == 'row') {
					                    			 if (recEL.length <= 0 || rec.expanded !== true ) break;
					                    			 obj.set(recid, { expanded: false }, true);
					                    			 obj.collapse(recid, event);
					                    		 } else {
					                    			 var prev = obj.prevCell(columns[0]);
					                    			 if (prev != null) {
					                    				 if (shiftKey && obj.multiSelect) {
					                    					 if (tmpUnselect()) return;
					                    					 var tmp    = [];
					                    					 var newSel = [];
					                    					 var unSel  = [];
					                    					 if (columns.indexOf(this.last.sel_col) == 0 && columns.length > 1) {
					                    						 for (var i in sel) {
					                    							 if (tmp.indexOf(sel[i].recid) == -1) tmp.push(sel[i].recid);
					                    							 unSel.push({ recid: sel[i].recid, column: columns[columns.length-1] });
					                    						 }
					                    					 } else {
					                    						 for (var i in sel) {
					                    							 if (tmp.indexOf(sel[i].recid) == -1) tmp.push(sel[i].recid);
					                    							 newSel.push({ recid: sel[i].recid, column: prev });
					                    						 }
					                    					 }
					                    					 obj.unselect.apply(obj, unSel);
					                    					 obj.select.apply(obj, newSel);
					                    				 } else {
					                    					 event.shiftKey = false;
					                    					 obj.click({ recid: recid, column: prev }, event);
					                    				 }
					                    			 } else {
					                    				 // if selected more then one, then select first
					                    				 if (!shiftKey) {
					                    					 for (var s=1; s<sel.length; s++) obj.unselect(sel[s]);
					                    				 }
					                    			 }
					                    		 }
					                    		 cancel = true;
					                    		 break;

					                    	 case 39: // right
					                    		 if (empty) break;
					                    		 if (this.selectType == 'row') {
					                    			 if (recEL.length <= 0 || rec.expanded === true || obj.show.expandColumn !== true) break;
					                    			 obj.expand(recid, event);
					                    		 } else {
					                    			 var next = obj.nextCell(columns[columns.length-1]);
					                    			 if (next !== null) {
					                    				 if (shiftKey && key == 39 && obj.multiSelect) {
					                    					 if (tmpUnselect()) return;
					                    					 var tmp    = [];
					                    					 var newSel = [];
					                    					 var unSel  = [];
					                    					 if (columns.indexOf(this.last.sel_col) == columns.length-1 && columns.length > 1) {
					                    						 for (var i in sel) {
					                    							 if (tmp.indexOf(sel[i].recid) == -1) tmp.push(sel[i].recid);
					                    							 unSel.push({ recid: sel[i].recid, column: columns[0] });
					                    						 }
					                    					 } else {
					                    						 for (var i in sel) {
					                    							 if (tmp.indexOf(sel[i].recid) == -1) tmp.push(sel[i].recid);
					                    							 newSel.push({ recid: sel[i].recid, column: next });
					                    						 }
					                    					 }
					                    					 obj.unselect.apply(obj, unSel);
					                    					 obj.select.apply(obj, newSel);
					                    				 } else {
					                    					 obj.click({ recid: recid, column: next }, event);
					                    				 }
					                    			 } else {
					                    				 // if selected more then one, then select first
					                    				 if (!shiftKey) {
					                    					 for (var s=0; s<sel.length-1; s++) obj.unselect(sel[s]);
					                    				 }
					                    			 }
					                    		 }
					                    		 cancel = true;
					                    		 break;

					                    	 case 38: // up
					                    		 if (empty) selectTopRecord();
					                    		 if (recEL.length <= 0) break;
					                    		 // move to the previous record
					                    		 var prev = obj.prevRow(ind);
					                    		 if (prev != null) {
					                    			 // jump into subgrid
					                    			 if (obj.records[prev].expanded) {
					                    				 var subgrid = $('#grid_'+ obj.name +'_rec_'+ w2utils.escapeId(obj.records[prev].recid) +'_expanded_row').find('.w2ui-grid');
					                    				 if (subgrid.length > 0 && w2ui[subgrid.attr('name')]) {
					                    					 obj.selectNone();
					                    					 var grid = subgrid.attr('name');
					                    					 var recs = w2ui[grid].records;
					                    					 w2utils.keyboard.active(grid);
					                    					 w2ui[grid].click(recs[recs.length-1].recid);
					                    					 cancel = true;
					                    					 break;
					                    				 }
					                    			 }
					                    			 if (shiftKey && obj.multiSelect) { // expand selection
					                    				 if (tmpUnselect()) return;
					                    				 if (obj.selectType == 'row') {
					                    					 if (obj.last.sel_ind > prev && obj.last.sel_ind != ind2) {
					                    						 obj.unselect(obj.records[ind2].recid);
					                    					 } else {
					                    						 obj.select(obj.records[prev].recid);
					                    					 }
					                    				 } else {
					                    					 if (obj.last.sel_ind > prev && obj.last.sel_ind != ind2) {
					                    						 prev = ind2;
					                    						 var tmp = [];
					                    						 for (var c in columns) tmp.push({ recid: obj.records[prev].recid, column: columns[c] });
					                    						 obj.unselect.apply(obj, tmp);
					                    					 } else {
					                    						 var tmp = [];
					                    						 for (var c in columns) tmp.push({ recid: obj.records[prev].recid, column: columns[c] });
					                    						 obj.select.apply(obj, tmp);
					                    					 }
					                    				 }
					                    			 } else { // move selected record
					                    				 obj.selectNone();
					                    				 obj.click({ recid: obj.records[prev].recid, column: columns[0] }, event);
					                    			 }
					                    			 obj.scrollIntoView(prev);
					                    			 if (event.preventDefault) event.preventDefault();
					                    		 } else {
					                    			 // if selected more then one, then select first
					                    			 if (!shiftKey) {
					                    				 for (var s=1; s<sel.length; s++) obj.unselect(sel[s]);
					                    			 }
					                    			 // jump out of subgird (if first record)
					                    			 var parent = $('#grid_'+ obj.name +'_rec_'+ w2utils.escapeId(obj.records[ind].recid)).parents('tr');
					                    			 if (parent.length > 0 && String(parent.attr('id')).indexOf('expanded_row') != -1) {
					                    				 var recid = parent.prev().attr('recid');
					                    				 var grid  = parent.parents('.w2ui-grid').attr('name');
					                    				 obj.selectNone();
					                    				 w2utils.keyboard.active(grid);
					                    				 w2ui[grid].click(recid);
					                    				 cancel = true;
					                    				 break;
					                    			 }
					                    		 }
					                    		 break;

					                    	 case 40: // down
					                    		 if (empty) selectTopRecord();
					                    		 if (recEL.length <= 0) break;
					                    		 // jump into subgrid
					                    		 if (obj.records[ind2].expanded) {
					                    			 var subgrid = $('#grid_'+ this.name +'_rec_'+ w2utils.escapeId(obj.records[ind2].recid) +'_expanded_row').find('.w2ui-grid');
					                    			 if (subgrid.length > 0 && w2ui[subgrid.attr('name')]) {
					                    				 obj.selectNone();
					                    				 var grid = subgrid.attr('name');
					                    				 var recs = w2ui[grid].records;
					                    				 w2utils.keyboard.active(grid);
					                    				 w2ui[grid].click(recs[0].recid);
					                    				 cancel = true;
					                    				 break;
					                    			 }
					                    		 }
					                    		 // move to the next record
					                    		 var next = obj.nextRow(ind2);
					                    		 if (next != null) {
					                    			 if (shiftKey && obj.multiSelect) { // expand selection
					                    				 if (tmpUnselect()) return;
					                    				 if (obj.selectType == 'row') {
					                    					 if (this.last.sel_ind < next && this.last.sel_ind != ind) {
					                    						 obj.unselect(obj.records[ind].recid);
					                    					 } else {
					                    						 obj.select(obj.records[next].recid);
					                    					 }
					                    				 } else {
					                    					 if (this.last.sel_ind < next && this.last.sel_ind != ind) {
					                    						 next = ind;
					                    						 var tmp = [];
					                    						 for (var c in columns) tmp.push({ recid: obj.records[next].recid, column: columns[c] });
					                    						 obj.unselect.apply(obj, tmp);
					                    					 } else {
					                    						 var tmp = [];
					                    						 for (var c in columns) tmp.push({ recid: obj.records[next].recid, column: columns[c] });
					                    						 obj.select.apply(obj, tmp);
					                    					 }
					                    				 }
					                    			 } else { // move selected record
					                    				 obj.selectNone();
					                    				 obj.click({ recid: obj.records[next].recid, column: columns[0] }, event);
					                    			 }
					                    			 obj.scrollIntoView(next);
					                    			 cancel = true;
					                    		 } else {
					                    			 // if selected more then one, then select first
					                    			 if (!shiftKey) {
					                    				 for (var s=0; s<sel.length-1; s++) obj.unselect(sel[s]);
					                    			 }
					                    			 // jump out of subgrid (if last record in subgrid)
					                    			 var parent = $('#grid_'+ this.name +'_rec_'+ w2utils.escapeId(obj.records[ind2].recid)).parents('tr');
					                    			 if (parent.length > 0 && String(parent.attr('id')).indexOf('expanded_row') != -1) {
					                    				 var recid = parent.next().attr('recid');
					                    				 var grid  = parent.parents('.w2ui-grid').attr('name');
					                    				 obj.selectNone();
					                    				 w2utils.keyboard.active(grid);
					                    				 w2ui[grid].click(recid);
					                    				 cancel = true;
					                    				 break;
					                    			 }
					                    		 }
					                    		 break;

					                    		 // copy & paste

					                    	 case 17: // ctrl key
					                    	 case 91: // cmd key
					                    		 if (empty) break;
					                    		 var text = obj.copy();
					                    		 $('body').append('<textarea id="_tmp_copy_data" '+
					                    				 '   onpaste="var obj = this; setTimeout(function () { w2ui[\''+ obj.name + '\'].paste(obj.value); }, 1);" '+
					                    				 '   onkeydown="w2ui[\''+ obj.name +'\'].keydown(event)"'+
					                    				 '   style="position: absolute; top: -100px; height: 1px; width: 1px">'+ text +'</textarea>');
					                    		 $('#_tmp_copy_data').focus().select();
					                    		 // remove _tmp_copy_data textarea
					                    		 $(document).on('keyup', tmp_key_down);
					                    		 function tmp_key_down() { 
					                    			 $('#_tmp_copy_data').remove(); 
					                    			 $(document).off('keyup', tmp_key_down); 
					                    		 }
					                    		 break;

					                    	 case 88: // x - cut
					                    		 if (empty) break;
					                    		 if (event.ctrlKey || event.metaKey) {
					                    			 setTimeout(function () { obj["delete"](true); }, 100);
					                    		 }
					                    		 break;

					                    	 default: return; // exit this handler for other keys
					                    	 }
					                    	 var tmp = [187, 189, 32]; // =-spacebar
					                    	 for (var i=48; i<=90; i++) tmp.push(i); // 0-9,a-z,A-Z
					                    	 if (tmp.indexOf(key) != -1 && !event.ctrlKey && !event.metaKey && !cancel) {
					                    		 if (columns.length == 0) columns.push(0);
					                    		 var tmp = String.fromCharCode(key);
					                    		 if (key == 187) tmp = '=';
					                    		 if (key == 189) tmp = '-';
					                    		 if (!shiftKey)  tmp = tmp.toLowerCase();
					                    		 obj.editField(recid, columns[0], tmp, event);
					                    		 cancel = true;
					                    	 }
					                    	 if (cancel) { // cancel default behaviour
					                    		 if (event.preventDefault) event.preventDefault();
					                    	 }
					                    	 // event after
					                    	 obj.trigger($.extend(eventData, { phase: 'after' }));

					                    	 function selectTopRecord() {
					                    		 var ind = Math.floor((records[0].scrollTop + (records.height() / 2.1)) / obj.recordHeight);
					                    		 if (!obj.records[ind]) ind = 0;
					                    		 obj.select({ recid: obj.records[ind].recid, column: 0});
					                    	 }				
					                    	 function tmpUnselect () {
					                    		 if (obj.last.sel_type != 'click') return false;
					                    		 if (obj.selectType != 'row') {
					                    			 obj.last.sel_type = 'key';
					                    			 if (sel.length > 1) {
					                    				 for (var s in sel) {
					                    					 if (sel[s].recid == obj.last.sel_recid && sel[s].column == obj.last.sel_col) {
					                    						 sel.splice(s, 1);
					                    						 break;
					                    					 }
					                    				 }
					                    				 obj.unselect.apply(obj, sel);
					                    				 return true;
					                    			 }
					                    			 return false;
					                    		 } else {
					                    			 obj.last.sel_type = 'key';
					                    			 if (sel.length > 1) {
					                    				 sel.splice(sel.indexOf(obj.records[obj.last.sel_ind].recid), 1);
					                    				 obj.unselect.apply(obj, sel);
					                    				 return true;
					                    			 }
					                    			 return false;
					                    		 }
					                    	 }


					                     }

				}

		}

		if(!$rootScope.grid2){
			loadContentGrid(config2);
		}else{
			w2ui.grid2.destroy();
			w2ui.layout2.destroy();
			loadContentGrid(config2);

		}
		///////////////////Grid 2 Load Ends0
			
		var json={"entity":2,"entityId":0,"listType":1,"requestData":"","userId":$scope.activeUser.userId,"token":$scope.activeUser.token};
		//HTTP CALL FOR 
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiSysPermissionRole/getSysPermissionRole",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);					
				angular.copy(respData.permissionList,$scope.pGroupList);
				$scope.allPermissionList=[];
				for(i=0;i<$scope.pGroupList.length;i++){
					for(j=0;j<$scope.pGroupList[i].permissionList.length;j++){
						$scope.allPermissionList.push($scope.pGroupList[i].permissionList[j]);
					}
				}
				for(i=0;i<$scope.allPermissionList.length;i++){
					$scope.allPermissionList[i].index=i;//saved index calculation efforts
				}				
				var allObj={permissionGroup:'All',permissionGroupId:-1}
				$scope.pGroupList.unshift(allObj);
				angular.copy(respData.labelList,$scope.labelList);//filter data
				angular.copy(respData.contactTypeList,$scope.contactTypeList);//filter data
				angular.copy(respData.userNameList,$scope.userNameList);//filter data
				angular.copy(respData.userIDList,$scope.userIDList);//filter data
				angular.copy(respData.userList,$scope.userList);
				angular.copy($scope.userList,w2ui.grid2.records);
				w2ui.grid2.refresh();
				$scope.pGroupSelected=allObj;
				$scope.onPGroupSelected();
				ngToast.create({
					  className: 'success',
					  content: '<span>Data loaded successfully...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				
			}else{
				$scope.spinner=false;
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
		}).error(function(data, status, headers, config) {  
			$scope.spinner=false;
			return false;
		});
	};
	$scope.showFilterPopup = function(){
		$modal.open({
			template :' <div id="SPFilter" class="" ng-controller="SPFilterCtrl" ng-init=init()> <div class="container Filter_Large"> <div class="row topblueStrip "> <h6> <span class="topblueStripText">FILTERS</span> <img alt="" class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label ">User&nbsp;Name</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.contactFullName as opt.contactFullName for opt in userNameList" ng-model="filter.userName"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Label</span> </div> <div class="col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.contactLabel as opt.contactLabel for opt in labelList" ng-model="filter.contactLabel"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">User&nbsp;ID</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.contactUserName as opt.contactUserName for opt in userIDList" ng-model="filter.contactUserName"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Contact&nbsp;Type</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.entityDeatilsDescription as opt.entityDeatilsDescription for opt in contactTypeList" ng-model="filter.contactType"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Staff</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.name as opt.name for opt in staffOptList" ng-model="filter.staff"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Organization</span> </div> <div class=" col-md-8"> <input class="form-control input-sm" type="text" tabindex="5" ng-model="filter.organisation"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Permission&nbsp;Type</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.name as opt.name for opt in roleList" ng-model="filter.roleType"> </select> </div> </div> <div class="row fieldsTop_Spacing "> <div class=" col-md-12"> <a ng-click="clearAllFilters()" class=" clearAllFilterPos">CLEAR&nbsp;ALL</a> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class=" col-md-12"> <button ng-click="cancel()" type="button" class="canclebtnSize" tabindex="20">Cancel</button> <button type="button" ng-click="ok(filter)" class="okbtnSize" tabindex="21">OK</button> </div> </div> </div> </div> ',      
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'Filter_Large_Left-Model'

		}).result.then(function(result) {

		});
	};

	$scope.showSysPermissionUserSettingPopup = function(){
		$modal.open({
			template :'<div id="UserSettingsPopup" class="purpleaid"> <div class="grayBG" ng-init=init();> <div class="container contacts_managerAdvanceSettingForm"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Advance Setting</span> <img alt="" class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row fieldsSpacing fieldsTop_Spacing"> <div class=" col-md-1"> <span class="control-label">User&nbsp;Role</span> </div> <div class=" col-md-3"> <select class="form-control input-sm input_rightSpecing"> </select> </div> </div> <div class="row "> <div class="col-md-3"> <div class="row"> <h5> <span class="submenuBlue_heading">Roles</span> </h5> <hr class="horizontal_line"> </div> <div class="row contacts_managerUserPermission_showSelected"> <div class="col-md-12"> <nav class="mainnav"> <ul class="rightFloat_Menu" id="list-nav"> <li><a title="" class="">Show Selected(OFF)</a></li> </ul> </nav> </div> </div> <div class="row"> <div class="col-md-12"> <!--=============GRID========== --> <div id="grid" tabindex="-1" class="contactsManager_AdvSetting_Grid"></div> <!--=============GRID========== --> </div> </div> </div> <div class="col-md-9"> <div class="row"> <h5> <span class="submenuBlue_heading">Permissions</span> </h5> <hr class="horizontal_line"> </div> <div class="row contacts_managerUserPermission_showSelected"> <div class="col-md-12"> <nav class="mainnav"> <ul class="rightFloat_Menu" id="list-nav"> <li><a title="" class="">Show Selected(OFF)</a></li> </ul> </nav> </div> </div> <div class="row"> <div class="col-md-12"> <!--=============GRID========== --> <div id="grid2" tabindex="-1" class="contactsManager_AdvSetting_Grid"></div> <!--=============GRID========== --> </div> </div> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="6" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="7" ng-click="submit()">Save</button> </div> </div> </div> </div> </div> ',   
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'Sys_RolePermission_UserSetting-Model'
		}).result.then(function(result) {


		});
	};
	
	$scope.showAdvancedSettingsPopup=function(){
		
		$modal.open({//ng-controller="AdvancedSettingsCtrl"
			//template :'<div  ng-init=init() id="AdvancedSettings" class="purpleaid" style="margin-left:5%"> <toast></toast> <div class="grayBG"> <div class="container contacts_managerAdvanceSettingForm"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Advance Setting</span> <img alt="" class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row fieldsSpacing fieldsTop_Spacing"> <div class=" col-md-1"> <span class="control-label">User</span> </div> <div class=" col-md-3"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.contactId as opt.contactFullName for opt in userNameList" ng-model="userSelectedId" ng-change="getUserData(userSelectedId)"> </select> </div> </div> <div class="row "> <div class="col-md-3"> <div class="row"> <h5> <span class="submenuBlue_heading">Roles</span> </h5> <hr class="horizontal_line"> </div> <div class="row contacts_managerUserPermission_showSelected"> <div class="col-md-12"> <nav class="mainnav"> <ul class="rightFloat_Menu" id="list-nav"> <li><a ng-click="filterGrids(\'role\')">Show Selected(<span ng-class="roleFilterStatus == \'ON\'?\'highlight_purple\':\'\'">{{roleFilterStatus}}</span>)</a></li> </ul> </nav> </div> </div> <div class="row"> <div class="col-md-12"> <!--=============GRID========== --> <div id="grid4" tabindex="-1" class="contactsManager_AdvSetting_Grid"></div> <!--=============GRID========== --> </div> </div> </div> <div class="col-md-9"> <div class="row"> <h5> <span class="submenuBlue_heading">Permissions</span> </h5> <hr class="horizontal_line"> </div> <div class="row contacts_managerUserPermission_showSelected"> <div class="col-md-12"> <nav class="mainnav"> <ul class="rightFloat_Menu" id="list-nav"> <li><a ng-click="filterGrids(\'permisiion\')">Show Selected(<span ng-class="permissionFilterStatus == \'ON\'?\'highlight_purple\':\'\'">{{permissionFilterStatus}}</span>)</a></li> </ul> </nav> </div> </div> <div class="row"> <div class="col-md-12"> <!--=============GRID========== --> <div id="grid5" tabindex="-1" class="contactsManager_AdvSetting_Grid"></div> <!--=============GRID========== --> </div> </div> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="6" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="7" ng-click="save()">Save</button> </div> </div> </div> </div> </div> ' ,
			templateUrl: 'partials/utility/advanced_settings.jsp',
			controller :'AdvancedSettingsCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'AddvanceSettingPopup-Model',
			resolve:{
				uId:function(){
					return 0;
				},
				pageId:function(){
					return angular.element('*[ng-app]').injector().get("configurable").pageId;
				}
			}
		}).result.then(function(result) {
			
			
		});
	};
	
	$scope.onPGroupSelected=function(){
		if($scope.pGroupSelected.permissionGroupId == -1){
			if($scope.firstCall){
				w2ui.grid.records=[];
				angular.copy($scope.allPermissionList,w2ui.grid.records);
				w2ui.grid.refresh();
				$scope.firstCall=false;
			}else{
				w2ui.grid.reset();
			}
			
			
		
		}else{
			//grid filter on $scope.pGroupSelected.permissionGroupId
			w2ui.grid.search([{ field:'purpleaidACLpermissionGroupID', value:$scope.pGroupSelected.permissionGroupId, operator:'is',type:'int'}]);
			
		}
	};
	
	$scope.onPerissionSelection=function(permission){
		if(permission==null){
			return false;
		}
		$scope.showPermissionSelected=permission;
		var obj={};
		//angular.copy($scope.pGroupSelected.permissionList,w2ui.grid2.records);
		for(i=0;i<permission.userList.length;i++){
			obj=w2ui.grid2.get(permission.userList[i].contactId);
			if(obj != null){
				obj.flagSelected=true;
				obj.manual=permission.userList[i].manual;
				obj.role=permission.userList[i].role;
				//permission.manual=obj.manual
			}
		}
		w2ui.grid2.refresh();
	};
	
	$scope.onPerissionSelectionRemoved=function(permission){
		/*if(permission==null){
			alert('null in removed');
		}
		$scope.showPermissionSelected={};
		var obj={};
		//angular.copy($scope.pGroupSelected.permissionList,w2ui.grid2.records);
		for(i=0;i<permission.userList.length;i++){
			obj=w2ui.grid2.get(permission.userList[i].contactId);
			if(obj != null){
				obj.flagSelected=false;
			}
		}*/
		angular.copy($scope.userList,w2ui.grid2.records);
		w2ui.grid2.refresh();
		//$scope.$apply();
	};
	$scope.updateChanges=function(userSelected){
		if(typeof $scope.showPermissionSelected ==="undefined" || typeof $scope.showPermissionSelected.purpleaidACLpermissionID ==="undefined"){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Please select permission...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			return false;
		}
		var obj={purpleaidACLpermissionID:$scope.showPermissionSelected.purpleaidACLpermissionID,
				purpleaidACLuserID:userSelected.recid,
				purpleaidACLIsPermissionDeleted:!userSelected.flagSelected};
		if($scope.changedStorage.length != 0){
			var found=$.grep($scope.changedStorage,function(e){return e.purpleaidACLpermissionID==obj.purpleaidACLpermissionID && e.purpleaidACLuserID==obj.purpleaidACLuserID});
			var index=akricksGetObjIndex($scope.changedStorage,{purpleaidACLpermissionID:obj.purpleaidACLpermissionID,purpleaidACLuserID:obj.purpleaidACLuserID});
			if(index == -1){
				$scope.changedStorage.push(obj);
			}else{
				
				$scope.changedStorage.splice(index,1);
			}
		}else{
			$scope.changedStorage.push(obj);
		}
		///////////////////////////
		if(userSelected.flagSelected){
			//checked condition
			w2ui.grid.records[$scope.showPermissionSelected.index].userList.push({contactId:userSelected.recid,recid:userSelected.recid,role:'NO',manual:'YES'});
		}else{
			var array=w2ui.grid.records[$scope.showPermissionSelected.index].userList;
			var obj=$.grep(array,function(e){return e.contactId==userSelected.recid;});
			var index=array.indexOf(obj);
			w2ui.grid.records[$scope.showPermissionSelected.index].userList.splice(index,1);
			
		}
		
	}
	
	$scope.sortAndFilter=function(){
		$scope.filterArray=[];
		////
		 /*{ field: 'flagSelected', caption: 'xyz', type: 'text' },
         { field: 'contactFullName', caption: 'Full Name', type: 'text' },
         { field: 'contactLabel', caption: 'Contact Label', type: 'text' },
         { field: 'contactUserName', caption: 'User Id', type: 'text' },
         { field: 'contactTypeDescription', caption: 'Contact Type', type: 'text' },
         { field: 'contactIsStaffDescription', caption: 'Staff', type: 'text' },
         { field: 'contactOrganization', caption: 'Organisation', type: 'text' }*/
		////
		//$scope.mainFilter={userName:'All',contactLabel:'All',contactUserName:'All',contactType:'All',staff:'All',organisation:'',roleType:'All'};;
		if($scope.mainFilter.userName == 'All'){
			
		}else{
			$scope.filterArray.push({ field:'contactFullName', value:$scope.mainFilter.userName, operator:'is',type:'text'});
		}
		
		if($scope.mainFilter.contactLabel == 'All'){
			
		}else{
			$scope.filterArray.push({ field:'contactLabel', value:$scope.mainFilter.contactLabel, operator:'is',type:'text'});
		}
		
		if($scope.mainFilter.contactUserName == 'All'){
			
		}else{
			$scope.filterArray.push({ field:'contactUserName', value:$scope.mainFilter.contactUserName, operator:'is',type:'text'});
		}
		
		if($scope.mainFilter.contactType == 'All'){
			
		}else{
			$scope.filterArray.push({ field:'contactTypeDescription', value:$scope.mainFilter.contactType, operator:'is',type:'text'});
		}
		
		if($scope.mainFilter.staff == 'All'){
			
		}else{
			$scope.filterArray.push({ field:'contactIsStaffDescription', value:$scope.mainFilter.staff, operator:'is',type:'text'});
		}
		
		if($scope.mainFilter.organisation == 'All'){
			
		}else{
			$scope.filterArray.push({ field:'contactOrganization', value:$scope.mainFilter.organisation, operator:'contains',type:'text'});
		}
		
		if($scope.selectAllFlag == 'ON'){
			$scope.filterArray.push({ field:'flagSelected', value:true, operator:'is',type:'text'});
		}else{
			
		}
		w2ui.grid2.search($scope.filterArray);
		if($scope.groupFlag=='ON'){
			w2ui.grid2.sort('flagSelected','desc');
		}
		
	};
	
	$scope.changeFlag=function(type){
		if(type=='group'){
			if($scope.groupFlag=='OFF'){
				$scope.groupFlag='ON';
			}else{
				$scope.groupFlag='OFF';
				w2ui.grid2.reset();
			}
		}else{
			if($scope.selectAllFlag=='OFF'){
				$scope.selectAllFlag='ON';
			}else{
				$scope.selectAllFlag='OFF';
				w2ui.grid2.reset();
			}
			
		}
		$scope.sortAndFilter();
	}
	
	$scope.cancelMainFilter=function(){
		angular.copy($scope.clearFilter,$scope.mainFilter);
		$scope.mainFilterStatus='OFF';
		$scope.sortAndFilter();
	};
	
	
	
	$scope.save=function(){
		if($scope.changedStorage.length==0){
			ngToast.create({
				  className: 'warning',
				  content: '<span>No changes detected to save...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			return false;
		}
		var json={"entity":1,"entityId":0,"listType":0,"requestData":JSON.stringify($scope.changedStorage),"userId":$scope.activeUser.userId,"token":$scope.activeUser.token};
		//HTTP CALL FOR 
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiSysPermissionRole/setSysPermissionRole",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				$scope.changedStorage=[];
				w2ui.grid.selectNone();
				ngToast.create({
					  className: 'success',
					  content: '<span>Data Saved successfully...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				
			}else{
				$scope.spinner=false;
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
		}).error(function(data, status, headers, config) {  
			$scope.spinner=false;
			return false;
		});
	};

}]);