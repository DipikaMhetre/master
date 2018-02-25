pharmApp.controller('AdvancedSettingsCtrl', ['$scope','$rootScope','$http','$modalInstance','$log','$timeout','ngToast','uId','pageId', function ($scope,$rootScope,$http, $modalInstance, $log,$timeout,ngToast,uId,pageId) {
	$scope.rolePermissionList=[];
	$scope.permissionRoleList=[];
	$scope.changedRoleList=[];
	$scope.pageId=pageId;
	$scope.changedPermissionList=[];
	$scope.changes=[];
	$scope.userSelectionDisabled=false;
	//$scope.userSelectedId=10;//HARDCODE
	$scope.permissionFilterStatus='OFF'; 
	$scope.roleFilterStatus='OFF';
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.init=function(){
		
		var config4 = {
				layout: {
					name: 'layout4',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%'},
					         { type: 'main', minSize: 300 }
					         ]
				},
				grid: { 

					name: 'grid4',
					show: {
						footer:true,
						toolbar : false,
						toolbarDelete: false,
						toolbarAdd : false
					},
					columns:[ 
					  { field: 'recid',hidden:true }, 
					  { field: 'index',hidden:true },
					  { field: 'isRole',size : '20%',style : 'text-align: left',sortable:true,editable: { type: 'checkbox'  } },
					  { field: 'role',caption : 'Role',size : '50%',style : 'text-align: left' },
			          /*{ field : 'isRole',hidden:true},*/					     
			          { field : 'permissionList',hidden:true},
			          { field: 'roleActiveFlag',hidden:true },
			          { field: 'roleId',hidden:true },
			          { field: 'rolePermissionList',hidden:true },
			          { field: 'roleUserList',hidden:true }         
			          ],
					records:[],
					onSelect: function(event) {
						event.onComplete = function () {
							

						}
					} ,
					onUnselect: function(event) {
			        	  event.onComplete = function () {
			        		  
			        		  /*var angScope=angular.element(document.getElementById('SystemRole')).scope();					        		 
			        		  angScope.onRoleSelectionRemoved();
			        		  if(angScope.showRoleSelected.role != angScope.masterRoleObj.role || angScope.showRoleSelected.roleActiveFlag != angScope.masterRoleObj.roleActiveFlag ||  angScope.showRoleSelected.roleDescription != angScope.masterRoleObj.roleDescription){			    		 
			        			  $scope.updateChangedRoles(angScope.showRoleSelected);
			        		  }
			        		  //angular.copy(angular.element(angScope.userList,w2ui.grid2.records));
			        		  //w2ui.grid2.refresh();					     				        
			        		  angScope.$apply();*/

			        	  }
			          },
			          onChange:function(event){
			        	  event.onComplete = function () {
			        	  var angScope=angular.element(document.getElementById('AdvancedSettings')).scope();	
							angScope.onRoleEdit(w2ui.grid4.get(event.recid));
							angScope.currRecId=event.recid;
							w2ui.grid4.save();
							angScope.$apply();
			        	  }
			          },
			          searches: [
					              { field: 'isRole', caption: 'Role Selected', type: 'int' },
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
		if(!$rootScope.grid4){
			loadGrid4(config4);
		}else{
			w2ui.grid4.destroy();
			w2ui.layout4.destroy();
			loadGrid4(config4);
			
		}
		//grid 4 ends==============================
		var config5 = {
				layout: {
					name: 'layout5',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%'},
					         { type: 'main', minSize: 300 }
					         ]
				},
				grid: { 

					name: 'grid5',
					show: {
						footer:true,
						toolbar : true,
						toolbarDelete: false,
						toolbarAdd : false
					},
					columns:[ 
					  { field: 'recid',hidden:true }, 
					  { field: 'index',hidden:true },
					  
					  { field : 'purpleaidACLIsPermission',caption : '',size : '15%',sortable:true,editable: { type: 'checkbox'  }},
			          { field : 'purpleaidACLpermissionDescription',hidden:true},					     
			          { field : 'purpleaidACLpermission',caption : 'Permission',size : '50%',style : 'text-align: left'},
			          { field: 'manual',hidden:true },
			          { field: 'permissionList',hidden:true },
			          { field: 'permissionRoleList',hidden:true },			          
			          { field: 'purpleaidACLIsPermission',hidden:true },
			          { field: 'purpleaidACLIsPermissionDeleted',hidden:true },
			          { field: 'purpleaidACLManualFlag',hidden:true },			          
			          { field: 'purpleaidACLactiveUserId',hidden:true },		          
			          { field: 'purpleaidACLroleFlgActive',hidden:true },			         
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
			        		 var angScope=angular.element(document.getElementById('AdvancedSettings')).scope();					        		 
			        		 angScope.onPermissionEdit(w2ui.grid5.get(event.recid));
			        		  w2ui.grid5.save();
			        		  angScope.$apply();
			        	  }
			          },
			          searches: [
					              { field: 'purpleaidACLIsPermission', caption: 'Selected', type: 'int' },
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
		
		if(!$rootScope.grid5){
			loadGrid5(config5);
		}else{
			if(typeof w2ui.grid5 !== 'undefined'){
			w2ui.grid5.destroy();
			w2ui.layout5.destroy();
			}
			loadGrid5(config5);
			
		}
		//====Grid 5 ends
		//$scope.getUserData(10);
		
		//call for userLIst
		var json={"entity":2,pageId:$scope.pageId,"entityId":0,"listType":2,"requestData":""/*,uid:userSelectedId*/,"userId":$scope.activeUser.userId,"token":$scope.activeUser.token};
		//HTTP CALL FOR 
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiAdvanceSetting/getAdvanceSetting",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				$scope.userNameList=respData.userNameList;
				$scope.changedStorage=[];
				
				if(typeof uId !== "undefined" && uId !=0){
					$scope.userSelectionDisabled=true;
					$scope.userSelectedId=uId;
					$scope.getUserData(uId);
				}
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
	
	$scope.getUserData=function(userSelectedId){
		var json={"entity":2,pageId:$scope.pageId,"entityId":0,"listType":1,"requestData":"","uid":userSelectedId/*userSelectedId*/,"userId":$scope.activeUser.userId,"token":$scope.activeUser.token};
		//HTTP CALL FOR 
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiAdvanceSetting/getAdvanceSetting",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				angular.copy(respData.rolePermissionList,$scope.rolePermissionList);
				/////modified this for try Remove below line
				//$scope.rolePermissionList[1].rolePermissionList=[];
				angular.copy(respData.permissionRoleList,$scope.permissionRoleList);
				angular.copy($scope.permissionRoleList,w2ui.grid5.records);
				angular.copy($scope.rolePermissionList,w2ui.grid4.records);
				///////////////////////////////////////////////
				//for(i=0;i<w2ui.grid5.records.length;i++){w2ui.grid5.records[i].purpleaidACLIsPermission=false;w2ui.grid5.records[i].permissionRoleList=[];};w2ui.grid5.save();w2ui.grid5.refresh();
				//for(i=0;i<w2ui.grid4.records.length;i++){w2ui.grid4.records[i].isRole=false;};w2ui.grid4.save();w2ui.grid4.refresh();
				w2ui.grid4.refresh();
				w2ui.grid5.refresh();
				
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
	
	
	$scope.onRoleEdit=function(roleSelected){
		var obj={};
		var obj3={};
		if(!roleSelected.isRole){
			//alert('Checked');
			for(i=0;i<roleSelected.rolePermissionList.length;i++){
				obj=w2ui.grid5.get(roleSelected.rolePermissionList[i].purpleaidACLpermissionID);
				if(obj ==  null){
					alert('object null at '+i);
				}
				if(obj.permissionRoleList.length > 0){
					var index = getPurpleObjIndex(obj.permissionRoleList,{roleId:roleSelected.roleId});
					if(index == -1){
						obj.permissionRoleList.push({roleId:roleSelected.roleId});
					}
				}else{
					obj.permissionRoleList.push({roleId:roleSelected.roleId});
				}
				obj.purpleaidACLIsPermission=true;
				obj3={purpleaidACLuserID:$scope.userSelectedId,purpleaidACLroleID:roleSelected.roleId,purpleaidACLpermissionID:obj.recid,purpleaidACLIsPermissionDeleted:false};
				$scope.changes.push(obj3);

			}
			
			
		}else{
			
			for(i=0;i<roleSelected.rolePermissionList.length;i++){
				obj=w2ui.grid5.get(roleSelected.rolePermissionList[i].purpleaidACLpermissionID);
				if(obj ==  null){
					alert('object null at '+i);
				}
				if(obj.permissionRoleList.length > 0){
					var index = getPurpleObjIndex(obj.permissionRoleList,{roleId:roleSelected.roleId});
					if(index>-1){
						obj.permissionRoleList.splice(index,1);
					}
				}else{
					//obj.permissionRoleList.push({roleId:roleSelected.roleId});
				}
				if(obj.permissionRoleList.length==0 && !obj.purpleaidACLManualFlag){
					obj.purpleaidACLIsPermission=false;
				}
				obj3={purpleaidACLuserID:$scope.userSelectedId,purpleaidACLroleID:roleSelected.roleId,purpleaidACLpermissionID:obj.recid,purpleaidACLIsPermissionDeleted:true};
				$scope.changes.push(obj3);
			}
			
		}
		
		/*var obj2={purpleaidACLuserID:$scope.userSelectedId,purpleaidACLroleID:roleSelected.roleId,purpleaidACLIsPermissionDeleted:roleSelected.isRole};
		if($scope.changedRoleList.length == 0){			
			$scope.changedRoleList.push(obj2);
		}else{
			var index=getPurpleObjIndex($scope.changedRoleList,{purpleaidACLroleID:obj2.purpleaidACLroleID});
			if(index == -1){
				$scope.changedRoleList.push(obj2);
			}else{
				$scope.changedRoleList.splice(index,1);
			}
		}*/
		w2ui.grid5.refresh();
	};
	
	$scope.onPermissionEdit=function(permissionSelected){
		var obj={};
		var obj3={};
		if(!permissionSelected.purpleaidACLIsPermission){
			//alert('Checked');
			//if(permissionSelected.permissionRoleList.length==0){
				permissionSelected.purpleaidACLManualFlag=true;
			//}
			/*for(i=0;i<roleSelected.rolePermissionList.length;i++){
				obj=w2ui.grid5.get(roleSelected.rolePermissionList[i].purpleaidACLpermissionID);
				if(obj ==  null){
					alert('object null at '+i);
				}
				if(obj.permissionRoleList.length > 0){
					var index = getPurpleObjIndex(obj.permissionRoleList,{roleId:roleSelected.roleId});
					if(index == -1){
						obj.permissionRoleList.push({roleId:roleSelected.roleId});
					}
				}else{
					obj.permissionRoleList.push({roleId:roleSelected.roleId});
				}
				obj.purpleaidACLIsPermission=true;
			}*/
			
			obj3={purpleaidACLuserID:$scope.userSelectedId,purpleaidACLroleID:0,purpleaidACLpermissionID:permissionSelected.recid,purpleaidACLIsPermissionDeleted:false};
			$scope.changes.push(obj3);
		}else{
			//alert('UNChecked');
			if(permissionSelected.permissionRoleList.length!=0){
				permissionSelected.permissionRoleList=[];
				
			}
			permissionSelected.purpleaidACLManualFlag=false;
			obj3={purpleaidACLuserID:$scope.userSelectedId,purpleaidACLroleID:0,purpleaidACLpermissionID:permissionSelected.recid,purpleaidACLIsPermissionDeleted:true};
			$scope.changes.push(obj3);
		}
		
		//var obj2={purpleaidACLuserID:$scope.userSelectedId,purpleaidACLpermissionID:permissionSelected.purpleaidACLpermissionID,purpleaidACLIsPermissionDeleted:permissionSelected.purpleaidACLIsPermission};
		
		
		/*if($scope.changedPermissionList.length == 0){			
			$scope.changedPermissionList.push(obj2);
		}else{
			var index=getPurpleObjIndex($scope.changedPermissionList,{purpleaidACLpermissionID:obj2.purpleaidACLpermissionID});
			if(index == -1){
				$scope.changedPermissionList.push(obj2);
			}else{
				$scope.changedPermissionList.splice(index,1);
			}
		}*/
		w2ui.grid5.refresh();
	};
	
	$scope.filterGrids=function(type){
		if(type=='role'){
			if($scope.roleFilterStatus=='ON'){
				$scope.roleFilterStatus='OFF';
				w2ui.grid4.reset();
			}else{
				$scope.roleFilterStatus='ON';
				w2ui.grid4.search([{ field:'isRole', value:'1', operator:'is',type:'int'}]);
			}
		}else{
			if($scope.permissionFilterStatus=='ON'){
				$scope.permissionFilterStatus='OFF';
				w2ui.grid5.reset();
			}else{
				$scope.permissionFilterStatus='ON';
				w2ui.grid5.search([{ field:'purpleaidACLIsPermission', value:'1', operator:'is',type:'text'}]);
			}
		}
	};
	$scope.save=function(){
		if($scope.changes.length==0){
			ngToast.create({
				  className: 'warning',
				  content: '<span>No changes to save ...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			return false;
		}
		var json={"entity":1,pageId:$scope.pageId,"entityId":0,"listType":0,"requestData":JSON.stringify($scope.changes),"userId":$scope.activeUser.userId,"token":$scope.activeUser.token};
		//HTTP CALL FOR 
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiAdvanceSetting/setAdvanceSetting",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				$scope.changes=[];
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
	$scope.cancel=function(){
		//$scope.$close();
		$modalInstance.close();
	};
}]);