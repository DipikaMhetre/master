pharmApp.controller('SystemRoleCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.contactTypeList=[];
	$scope.labelList=[];
	$scope.permissionList=[];
	$scope.roleList=[];
	$scope.userIDList=[];
	$scope.userList=[];
	$scope.userNameList=[];
	$scope.changedPermissionStorage=[];
	$scope.changedUserStorage=[];
	$scope.showRoleSelected={};
	$scope.masterRoleObj={};
	$scope.changedRoles=[];
	$scope.permissionFilterStatus='OFF';
	$scope.userShowFilterStatus='OFF';
	$scope.newFlag=false;
	$scope.clearFilter={userName:'All',contactLabel:'All',contactUserName:'All',contactType:'All',staff:'All',organisation:'',roleType:'All'};
	$scope.mainFilter={userName:'All',contactLabel:'All',contactUserName:'All',contactType:'All',staff:'All',organisation:'',roleType:'All'};
	$scope.mainFilterStatus='OFF';
	$scope.filterArray=[];
	$scope.editable=$rootScope.editable;
	$scope.init=function(){
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
					  { field: 'role',caption : 'Role',size : '50%',style : 'text-align: left' },
			          
					  { field : 'isRole',hidden:true},					     
			          { field : 'permissionList',hidden:true},
			          { field: 'roleActiveFlag',hidden:true },
			          { field: 'roleId',hidden:true },
			          { field: 'rolePermissionList',hidden:true },
			          { field: 'roleUserList',hidden:true }         
			          ],
					records:[],
					onSelect: function(event) {
						event.onComplete = function () {	
							var angScope=angular.element(document.getElementById('SystemRole')).scope();
							//angular.copy(w2ui.grid.get(event.recid),angScope.showRoleSelected); 
							if(angScope.newFlag){
								if(angScope.showRoleSelected.role != ''){
									var r = confirm("You have new record to save !! \nPress ok to save and cancel for discard new record? ");
									if (r == true) {    
										//insert new record on changedRoles array
										//angScope.changedRoles.push(angScope.showRoleSelected);
										angScope.save();
									} else {
										
									}
								}
								angScope.newFlag=false;
							}
							angular.copy(w2ui.grid.get(event.recid),angScope.showRoleSelected); 
							//angScope.showRoleSelected=w2ui.grid.get(event.recid);
							angular.copy(w2ui.grid.get(event.recid),angScope.masterRoleObj); 
							angScope.onRoleSelection(w2ui.grid.get(event.recid));
							angScope.currRecId=event.recid;
							angScope.$apply();

						}
					} ,
					onUnselect: function(event) {
			        	  event.onComplete = function () {			        		 
			        		  var angScope=angular.element(document.getElementById('SystemRole')).scope();					        		 
			        		  angScope.onRoleSelectionRemoved();
			        		  if(angScope.showRoleSelected.role != angScope.masterRoleObj.role || angScope.showRoleSelected.roleActiveFlag != angScope.masterRoleObj.roleActiveFlag ||  angScope.showRoleSelected.roleDescription != angScope.masterRoleObj.roleDescription || angScope.changedUserStorage.length>0 || angScope.changedPermissionStorage.length>0){			    		 
			        			  var r = confirm("You have record with unsaved changes !! \nPress ok to save and cancel for discard new record? ");
									if (r == true) {
										//angScope.changedRoles.push({purpleaidACLroleID:angScope.showRoleSelected.roleId,purpleaidACLroleDescription:angScope.showRoleSelected.roleDescription,purpleaidACLrole:angScope.showRoleSelected.role});
										angScope.save();
									} else {
										angScope.changedRoles=[];
										angScope.changedUserStorage=[];
										angScope.changedPermissionStorage=[];
										angular.copy(angScope.masterRoleObj,w2ui.grid.records[angScope.showRoleSelected.index]);
										
									}
			        		  }
			        		  //angular.copy(angular.element(angScope.userList,w2ui.grid2.records));
			        		  //w2ui.grid2.refresh();					     				        
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
		//===========GRID 1 Ends==========
		var config2 = {
				layout: {
					name: 'layout2',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%'},
					         { type: 'main', minSize: 300 }
					         ]
				},
				grid: { 

					name: 'grid2',
					show: {
						footer:true,
						toolbar : true,
						toolbarDelete: false,
						toolbarAdd : false
					},
					columns:[ 
					  { field: 'recid',hidden:true }, 
					  { field: 'index',hidden:true },
					  
					  { field : 'purpleaidACLroleFlgActive',caption : '',size : '15%',sortable:true,editable: { type: 'checkbox'  }},
			          { field : 'purpleaidACLpermissionDescription',hidden:true},					     
			          { field : 'purpleaidACLpermission',caption : 'Permission',size : '50%',style : 'text-align: left'},
			          { field : 'purpleaidACLpermissionGroup',caption : 'Group',size : '50%',style : 'text-align: left'},
			          
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
							

						}
					} ,
					onUnselect: function(event) {
			        	  event.onComplete = function () {
			        		  
			        		  

			        	  }
			          },
			          onChange: function(event) {
			        	  event.onComplete = function () {     		 
			        		 var angScope=angular.element(document.getElementById('SystemRole')).scope();		
			        		 w2ui.grid2.save();
			        		 angScope.updatePermissionChanges(w2ui.grid2.get(event.recid));
			        		  
			        		  angScope.$apply();
			        	  }
			          },
			          searches: [
					              { field: 'purpleaidACLroleFlgActive', caption: 'Selected', type: 'int' },
					              { field: 'purpleaidACLpermission', caption: 'Permission Name', type: 'text' }
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


		if(!$rootScope.grid2){
			loadContentGrid(config2);
		}else{
			w2ui.grid2.destroy();
			w2ui.layout2.destroy();
			loadContentGrid(config2);

		}
		///////////////////Grid 2 Load Ends0
		var config3 = {
				layout: {
					name: 'layout3',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%'},
					         { type: 'main' }
					         ]
				},
				grid: { 

					name: 'grid3',
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
					        		 var angScope=angular.element(document.getElementById('SystemRole')).scope();	
					        		 w2ui.grid3.save();
					        		 angScope.updateUserChanges(w2ui.grid3.get(event.recid));
					        		  
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

		if(!$rootScope.grid3){
			loadContentpopupGrid(config3);
		}else{
			w2ui.grid3.destroy();
			w2ui.layout3.destroy();
			loadContentpopupGrid(config3);
			
		}
		///////////////////Grid 3 Load Ends0
		var json={"entity":2,"entityId":0,"listType":1,"requestData":"","userId":$scope.activeUser.userId,"token":$scope.activeUser.token};
		//HTTP CALL FOR 
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiSystemRole/getSystemRole",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				angular.copy(respData.contactTypeList,$scope.contactTypeList);
				angular.copy(respData.labelList,$scope.labelList);
				angular.copy(respData.permissionList,$scope.permissionList);
				angular.copy(respData.roleList,$scope.roleList);
				angular.copy(respData.userIDList,$scope.userIDList);
				angular.copy(respData.userList,$scope.userList);
				angular.copy(respData.userNameList,$scope.userNameList);
				for(i=0;i<$scope.roleList.length;i++){
					$scope.roleList[i].index=i;//saved index calculation
					if($scope.roleList[i].rolePermissionList==null){
						$scope.roleList[i].rolePermissionList=[];
					}
					if($scope.roleList[i].roleUserList==null){
						$scope.roleList[i].roleUserList=[];
					}
					
				}
				angular.copy($scope.roleList,w2ui.grid.records);
				angular.copy($scope.permissionList,w2ui.grid2.records);
				angular.copy($scope.userList,w2ui.grid3.records);	
				w2ui.grid.refresh();
				w2ui.grid2.refresh();
				w2ui.grid3.refresh();
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
		
	}
	$scope.onRoleSelection=function(roleSelected){
		if(roleSelected.rolePermissionList == null){
			return false;
		}
		var obj={};
		var obj2={}
		for(i=0;i<roleSelected.rolePermissionList.length;i++){
			obj=w2ui.grid2.get(roleSelected.rolePermissionList[i].purpleaidACLpermissionID);
			if(obj != null){
				obj.purpleaidACLroleFlgActive=true;	
			}
		}
		for(i=0;i<roleSelected.roleUserList.length;i++){
			obj2=w2ui.grid3.get(roleSelected.roleUserList[i].contactId);
			if(obj2 != null){
				obj2.flagSelected=true;	
			}
		}
		w2ui.grid2.refresh();
		w2ui.grid3.refresh();
	};
	$scope.onRoleSelectionRemoved=function(){
		//permission grid
		angular.copy($scope.permissionList,w2ui.grid2.records);
		w2ui.grid2.refresh();
		//user grid
		angular.copy($scope.userList,w2ui.grid3.records);	
		w2ui.grid3.refresh();
	}
	
	$scope.showFilterPopup = function(){
		$modal.open({
			template :'<div class="" ng-init=init()> <div class="container Filter_Small"> <div class="row topblueStrip "> <h6> <span class="topblueStripText">FILTERS</span> <img alt="" class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-5"> <span class="control-label ">User&nbsp;Name</span> </div> <div class=" col-md-7"> <select class="form-control input-sm input_rightSpecing"></select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-5"> <span class="control-label">Label</span> </div> <div class=" col-md-7"> <select class="form-control input-sm input_rightSpecing"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-5"> <span class="control-label">User&nbsp;ID</span> </div> <div class=" col-md-7"> <select class="form-control input-sm input_rightSpecing"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-5"> <span class="control-label">Contact&nbsp;Type</span> </div> <div class=" col-md-7"> <select class="form-control input-sm input_rightSpecing"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-5"> <span class="control-label">Staff</span> </div> <div class=" col-md-7"> <select class="form-control input-sm input_rightSpecing"><option>Yes</option> <option>No</option> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-5"> <span class="control-label">Organization</span> </div> <div class=" col-md-7"> <input class="form-control input-sm" type="text" tabindex="5"> </div> </div> <div class="row fieldsTop_Spacing "> <div class=" col-md-12"> <a class=" clearAllFilterPos">CLEAR&nbsp;ALL</a> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class=" col-md-12"> <button ng-click="cancel()" type="button" class="canclebtnSize" tabindex="20">Cancel</button> <button type="button" ng-click="ok(filter)" class="okbtnSize" tabindex="21">OK</button> </div> </div> </div> </div> ',  
				 controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'Filter_Small_Left-Model'
		}).result.then(function(result) {


		});
	};
	
	$scope.showSysRoleUserSettingPopup = function(){
		$modal.open({
			template :'<div id="UserSettingsPopup" class="purpleaid"> <div class="grayBG" ng-init=init();> <div class="container contacts_managerAdvanceSettingForm"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Advance Setting</span> <img alt="" class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row fieldsSpacing fieldsTop_Spacing"> <div class=" col-md-1"> <span class="control-label">User&nbsp;Role</span> </div> <div class=" col-md-3"> <select class="form-control input-sm input_rightSpecing"> </select> </div> </div> <div class="row "> <div class="col-md-3"> <div class="row"> <h5> <span class="submenuBlue_heading">Roles</span> </h5> <hr class="horizontal_line"> </div> <div class="row contacts_managerUserPermission_showSelected"> <div class="col-md-12"> <nav class="mainnav"> <ul class="rightFloat_Menu" id="list-nav"> <li><a title="" class="">Show Selected(OFF)</a></li> </ul> </nav> </div> </div> <div class="row"> <div class="col-md-12"> <!--=============GRID========== --> <div id="grid" tabindex="-1" class="contactsManager_AdvSetting_Grid"></div> <!--=============GRID========== --> </div> </div> </div> <div class="col-md-9"> <div class="row"> <h5> <span class="submenuBlue_heading">Permissions</span> </h5> <hr class="horizontal_line"> </div> <div class="row contacts_managerUserPermission_showSelected"> <div class="col-md-12"> <nav class="mainnav"> <ul class="rightFloat_Menu" id="list-nav"> <li><a title="" class="">Show Selected(OFF)</a></li> </ul> </nav> </div> </div> <div class="row"> <div class="col-md-12"> <!--=============GRID========== --> <div id="grid2" tabindex="-1" class="contactsManager_AdvSetting_Grid"></div> <!--=============GRID========== --> </div> </div> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="6" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="7" ng-click="submit()">Save</button> </div> </div> </div> </div> </div> ',   
				 controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'Sys_RolePermission_UserSetting-Model'
		}).result.then(function(result) {


		});
	};
	
	$scope.updatePermissionChanges=function(permissionSelected){
		if(!$scope.newFlag){
				if(typeof $scope.showRoleSelected ==="undefined" || typeof $scope.showRoleSelected.roleId ==="undefined"){
					ngToast.create({
						  className: 'warning',
						  content: '<span>Please select role...</span>',
						  timeout: 3000,
						  animation:'fade'
						});
					return false;
				}
				
				var obj={purpleaidACLrolePermissionID:permissionSelected.recid,purpleaidACLroleID:$scope.showRoleSelected.roleId,purpleaidACLIsPermissionDeleted:!permissionSelected.purpleaidACLroleFlgActive};
				////////////
				if($scope.changedPermissionStorage.length != 0){
					var found=$.grep($scope.changedPermissionStorage,function(e){return e.purpleaidACLrolePermissionID==obj.purpleaidACLrolePermissionID && e.purpleaidACLroleID==obj.purpleaidACLroleID});
					if(found.length==0){
						$scope.changedPermissionStorage.push(obj);
					}else{
						var index=$scope.changedPermissionStorage.indexOf(found[0]);
						$scope.changedPermissionStorage.splice(index,1);
					}
				}else{
					$scope.changedPermissionStorage.push(obj);
				}
				
				if(permissionSelected.purpleaidACLroleFlgActive){
					//checked condition
					w2ui.grid.records[$scope.showRoleSelected.index].rolePermissionList.push({purpleaidACLpermissionID:permissionSelected.recid,recid:permissionSelected.recid});
				}else{
					var array=w2ui.grid.records[$scope.showRoleSelected.index].rolePermissionList;
					var obj=$.grep(array,function(e){return e.purpleaidACLpermissionID==permissionSelected.recid;});
					var index=array.indexOf(obj);
					w2ui.grid.records[$scope.showRoleSelected.index].rolePermissionList.splice(index,1);
					
				}
			}else{
				//When new flag is ON
				if(permissionSelected.purpleaidACLroleFlgActive){
					//checked condition
					$scope.showRoleSelected.rolePermissionList.push({purpleaidACLpermissionID:permissionSelected.recid,recid:permissionSelected.recid});
				}else{
					var array=$scope.showRoleSelected.rolePermissionList;
					var obj=$.grep(array,function(e){return e.purpleaidACLpermissionID==permissionSelected.recid;});
					var index=array.indexOf(obj);
					$scope.showRoleSelected.rolePermissionList.splice(index,1);
					
				}
				//Users pending
			}	///////////
		};
		
		//========================================================================
		$scope.updateUserChanges=function(userSelected){
			if(!$scope.newFlag){
				if(typeof $scope.showRoleSelected ==="undefined" || typeof $scope.showRoleSelected.roleId ==="undefined"){
					ngToast.create({
						  className: 'warning',
						  content: '<span>Please select role...</span>',
						  timeout: 3000,
						  animation:'fade'
						});
					return false;
				}
				
				var obj={purpleaidACLuserID:userSelected.recid,purpleaidACLroleID:$scope.showRoleSelected.roleId,purpleaidACLIsPermissionDeleted:!userSelected.flagSelected};
				
				if($scope.changedUserStorage.length != 0){
					var found=$.grep($scope.changedUserStorage,function(e){return e.purpleaidACLuserID==obj.purpleaidACLuserID && e.purpleaidACLroleID==obj.purpleaidACLroleID});
					if(found.length==0){
						$scope.changedUserStorage.push(obj);
					}else{
						var index=$scope.changedUserStorage.indexOf(found[0]);
						$scope.changedUserStorage.splice(index,1);
					}
				}else{
					$scope.changedUserStorage.push(obj);
				}
				///////////////////////////
				if(userSelected.flagSelected){
					//checked condition
					w2ui.grid.records[$scope.showRoleSelected.index].roleUserList.push({contactId:userSelected.recid,recid:userSelected.recid});
				}else{
					var array=w2ui.grid.records[$scope.showRoleSelected.index].roleUserList;
					var obj=$.grep(array,function(e){return e.contactId==userSelected.recid;});
					var index=array.indexOf(obj);
					w2ui.grid.records[$scope.showRoleSelected.index].roleUserList.splice(index,1);
					
				}
			}else{
				if(userSelected.flagSelected){
					//checked condition
					$scope.showRoleSelected.roleUserList.push({contactId:userSelected.recid,recid:userSelected.recid});
				}else{
					var array=$scope.showRoleSelected.roleUserList;
					var obj=$.grep(array,function(e){return e.contactId==userSelected.recid;});
					var index=array.indexOf(obj);
					$scope.showRoleSelected.roleUserList.splice(index,1);
					
				}
			}
		};
		//========================================================================
		$scope.newRole=function(){
			if($scope.newFlag){
				return false;
			}
			w2ui.grid.selectNone();
			//$scope.changedPermissionStorage;
			//$scope.changedUserStorage;
			//$scope.changedRoles;
			$scope.newFlag=true;
			$scope.showRoleSelected={roleId:0,rolePermissionList:[],roleUserList:[],role:'',roleDescription:'',roleActiveFlag:true,recid:0};
		}
		
		/*$scope.updateChangedRoles=function(roleSelected){
			var obj=roleSelected;
			if($scope.changedRoles.length != 0){
				var found=$.grep($scope.changedRoles,function(e){return e.recid==obj.recid});
				if(found.length==0){
					$scope.changedRoles.push(obj);
				}else{
					var index=$scope.changedRoles.indexOf(found[0]);
					$scope.changedRoles.splice(index,1);
					$scope.changedRoles.push(obj);
				}
			}else{
				$scope.changedRoles.push(obj);
			}
		};*/
		
		$scope.showFilterPopup = function(){
			$modal.open({
				template :' <div id="SystemRoleFilter" class="" ng-controller="SystemRoleFilterCtrl" ng-init=init()> <div class="container Filter_Large"> <div class="row topblueStrip "> <h6> <span class="topblueStripText">FILTERS</span> <img alt="" class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label ">User&nbsp;Name</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.contactFullName as opt.contactFullName for opt in userNameList" ng-model="filter.userName"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Label</span> </div> <div class="col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.contactLabel as opt.contactLabel for opt in labelList" ng-model="filter.contactLabel"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">User&nbsp;ID</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.contactUserName as opt.contactUserName for opt in userIDList" ng-model="filter.contactUserName"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Contact&nbsp;Type</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.entityDeatilsDescription as opt.entityDeatilsDescription for opt in contactTypeList" ng-model="filter.contactType"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Staff</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.name as opt.name for opt in staffOptList" ng-model="filter.staff"> </select> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Organization</span> </div> <div class=" col-md-8"> <input class="form-control input-sm" type="text" tabindex="5" ng-model="filter.organisation"> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-4"> <span class="control-label">Permission&nbsp;Type</span> </div> <div class=" col-md-8"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.name as opt.name for opt in roleList" ng-model="filter.roleType"> </select> </div> </div> <div class="row fieldsTop_Spacing "> <div class=" col-md-12"> <a ng-click="clearAllFilters()" class=" clearAllFilterPos">CLEAR&nbsp;ALL</a> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class=" col-md-12"> <button ng-click="cancel()" type="button" class="canclebtnSize" tabindex="20">Cancel</button> <button type="button" ng-click="ok(filter)" class="okbtnSize" tabindex="21">OK</button> </div> </div> </div> </div> ',      
				controller :'',
				backdrop: 'static',
				size:'lg',
				windowClass: 'Filter_Large_Left-Model'

			}).result.then(function(result) {

			});
		};
		$scope.applyUserFilter=function(){
			if(userShowFilterStatus);
		};
		
		$scope.changeFlag=function(type){
			if(type == 'user'){
				if($scope.userShowFilterStatus == 'ON'){
					$scope.userShowFilterStatus = 'OFF';
				}else{
					$scope.userShowFilterStatus = 'ON'					
				}
				$scope.sortAndFilter();
			}else{
				if($scope.permissionFilterStatus == 'ON'){
					$scope.permissionFilterStatus = 'OFF';
					w2ui.grid2.reset();
				}else{
					$scope.permissionFilterStatus = 'ON';
					w2ui.grid2.search([{field:'purpleaidACLroleFlgActive',value:'1',type: 'int',operator:'is'}]);
				}
			}
		}
		
		$scope.sortAndFilter=function(){
			w2ui.grid3.reset();
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
			
			if($scope.userShowFilterStatus == 'ON'){
				$scope.filterArray.push({ field:'flagSelected', value:true, operator:'is',type:'text'});
			}else{
				
			}
			w2ui.grid3.search($scope.filterArray);
		
		};
		
		$scope.cancelMainFilter=function(){
			angular.copy($scope.clearFilter,$scope.mainFilter);
			$scope.mainFilterStatus='OFF';
			$scope.sortAndFilter();
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
		
		$scope.save=function(){
			if(angular.equals($scope.showRoleSelected,{})){
				ngToast.create({
					  className: 'warning',
					  content: '<span>No changes detected to save...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				return false;
			}
			//w2ui.grid.selectNone();
			var optype='modify';
			var roleSelected={};
			angular.copy($scope.showRoleSelected,roleSelected);
			if($scope.newFlag){
				optype='new';
			//	$scope.changedRoles.push({purpleaidACLroleID:0,purpleaidACLroleDescription:$scope.showRoleSelected.roleDescription,purpleaidACLrole:$scope.showRoleSelected.role});
				$scope.showRoleSelected.roleId=0;
				//delete roleSelected.rolePermissionList;
				//delete roleSelected.roleUserList;
				($scope.changedPermissionStorage);
				var json2=JSON.stringify($scope.changedUserStorage);
				for(i=0;i<roleSelected.rolePermissionList.length;i++){
					obj={"purpleaidACLrolePermissionID":roleSelected.rolePermissionList[i].purpleaidACLpermissionID,"purpleaidACLroleID":0,"purpleaidACLIsPermissionDeleted":false}
					$scope.changedPermissionStorage.push(obj);
				}
				for(i=0;i<roleSelected.roleUserList.length;i++){
					obj={"purpleaidACLuserID":roleSelected.roleUserList[i].contactId,"purpleaidACLroleID":0,"purpleaidACLIsPermissionDeleted":false}
					$scope.changedUserStorage.push(obj);
				}
				delete roleSelected.index;
				$scope.changedRoles.push(roleSelected);
				
			}else{
				//if( $scope.showRoleSelected.roleActiveFlag.role == $scope.masterRoleObj.role && $scope.showRoleSelected.roleActiveFlag == $scope.masterRoleObj.roleActiveFlag && $scope.showRoleSelected.roleDescription == $scope.masterRoleObj.roleDescription && $scope.changedUserStorage.length==0 && $scope.changedPermissionStorage.length==0 ){
				if(angular.equals($scope.masterRoleObj,$scope.showRoleSelected) && $scope.changedUserStorage.length==0 && $scope.changedPermissionStorage.length==0){
				ngToast.create({
						  className: 'warning',
						  content: '<span>No changes detected to save...</span>',
						  timeout: 3000,
						  animation:'fade'
						});
					return false;
				}
				//$scope.changedRoles.push({purpleaidACLroleID:$scope.showRoleSelected.roleId,purpleaidACLroleDescription:$scope.showRoleSelected.roleDescription,purpleaidACLrole:$scope.showRoleSelected.role});
				//delete roleSelected.rolePermissionList;
				//delete roleSelected.roleUserList;
				delete roleSelected.index;
				$scope.changedRoles.push(roleSelected);
			}
			
			var json1=JSON.stringify($scope.changedPermissionStorage);
			var json2=JSON.stringify($scope.changedUserStorage);
			var json3=JSON.stringify($scope.changedRoles);
			var diffs='->';
			var jsonCombine=json1+diffs+json2+diffs+json3;
			var json={"entity":1,"entityId":0,"listType":0,"requestData":jsonCombine,"userId":$scope.activeUser.userId,"token":$scope.activeUser.token};
			//HTTP CALL FOR 
			$http({
				method: 'POST',
				url: "http://localhost:8080/Purple/rest/apiSystemRole/setSystemRole",
				async:false,
				data:JSON.stringify(json),
				headers: {'Content-Type': 'application/json'}
			}).success(function(data, status, headers, config) {
				if(data.responseCode == 200){
					var respData=JSON.parse(data.responseData);
					if(optype == 'new'){
						w2ui.grid.records.push(respData[0]);
						//w2ui.grid.select(respData.roleId);
					}else{
						///Replace userlist and permissin list 
						var index=akricksGetObjIndex(w2ui.grid.records,{recid:respData[0].roleId});
						angular.copy(respData[0],w2ui.grid.records[index]);
						
					}
					if(!angular.equals($scope.masterRoleObj,$scope.showRoleSelected)){
						angular.copy($scope.showRoleSelected,$scope.masterRoleObj);
					}
					$scope.changedPermissionStorage=[];
					$scope.changedUserStorage=[];
					$scope.changedRoles=[];
					$scope.newFlag=false;
					w2ui.grid.refresh();
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
		
		/*$scope.save11=function(){
			//validate
			var optype='modify';
			if($scope.newFlag){
				optype='new';
			}else if($scope.changedPermissionStorage.length==0 && $scope.changedUserStorage.length==0 && $scope.changedRoles.length==0){
				ngToast.create({
					  className: 'warning',
					  content: '<span>No changes detected to save...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				return false;
			}
			var json1=$scope.showRoleSelected;
			
			
		};*/

}]);