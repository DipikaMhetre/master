pharmApp.controller('ControlPanelCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.SystemVaraibleSubList=[];
	$scope.SystemVaribaleList=[];
	$scope.isSelect=false;
	$scope.ShowList=[];
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");

	$scope.init=function(){

		var config = {

				layout: {
					name: 'layout',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%'},
					         { type: 'main' }
					         ]
				},
				grid: { 

					name: 'grid',
					show: {

						toolbarDelete: false,
						toolbarAdd : false, 
						toolbar     : false,
						selectColumn: true

					},


					columns: [ 
					          { field: 'recid', caption: 'Recid',hidden:true },
					          { field: 'systemVariableId', caption: 'Recid',hidden:true },
					          { field: 'systemVariableGroup', caption: 'Description', size: '30%', style: 'text-align:left' },
					          { field: 'systemVariableValue', caption: 'Value', size: '8%',  },
					          { field: 'systemVariableUnit', caption: 'Unit', size: '8%' },
					          { field: 'systemVariableMinimumValue', caption: 'Min Value', size: '8%' },
					          { field: 'systemVariableMaximumVale', caption: 'Max Value', size: '8%' },
					          { field: 'systemVariableValueSet', caption: 'Value Set', size: '8%' },
					          ],
					          records: [],
					          onColumnOnOff: function (event) {
					        	  console.log(event);
					          },
					          onToolbar: function(event) {

					        	  event.OnComplete=function(){
					        		  alert("hi");
					        	  }
					          },   
					          onCollapse: function (event) {

					        	  event.onComplete = function () {
					        		  var angScope=angular.element(document.getElementById('ControlPanelSystemValue')).scope();
					        		  var mainGridRowRec=$.grep(angScope.SystemVaribaleList,function(e){return e.recid ==  event.recid;})[0];	
					        		  var index=angScope.SystemVaribaleList.indexOf(mainGridRowRec);
					        		  angular.copy(w2ui['subgrid-'+event.recid].records,angScope.SystemVaribaleList[index].systemVariableSubList);
					        	  }


					          },
					          onSelect:function(event){
					        	  // clist='recid' + event.recid+' target : '+event.target+'  index'+event.index;


					        	  event.onComplete = function () {
					        		  var rec=w2ui[''+event.target].get(event.recid);
					        		  if(rec!=null){
					        			  var angScope=angular.element(document.getElementById('ControlPanelSystemValue')).scope();
					        			  var mainGridRowRec=$.grep(angScope.SystemVaribaleList,function(e){return e.recid ==  event.recid;})[0];	
					        			  var index=angScope.SystemVaribaleList.indexOf(mainGridRowRec);
					        			  for(i=0;i<angScope.SystemVaribaleList[index].systemVariableSubList.length;i++){
					        				  angScope.SystemVaribaleList[index].systemVariableSubList[i].systemVariableIsSelected=true;
					        				  angScope.SystemVaribaleList[index].systemVariableIsSelected=true;
					        			  } 

					        			  if(w2ui.grid.expand(event.recid)){

					        			  }else{
					        				  w2ui['subgrid-'+event.recid].selectAll(); 
					        				  for(i=0;i<angScope.SystemVaribaleList[index].systemVariableSubList.length;i++){
					        					  angScope.SystemVaribaleList[index].systemVariableSubList[i].systemVariableIsSelected=true;
					        					  angScope.SystemVaribaleList[index].systemVariableIsSelected=true;
					        				  }
					        			  }
					        		  }
					        		  else{
					        			  var angScope=angular.element(document.getElementById('ControlPanelSystemValue')).scope();

					        			  for(i=0;i<angScope.SystemVaribaleList.length;i++){
					        				  for(j=0;j<angScope.SystemVaribaleList[i].systemVariableSubList.length;j++){
					        					  angScope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableIsSelected=true;
					        					  var rec=event.target;
					        					  var a=angScope.SystemVaribaleList[i].recid;


					        				  }
					        				  if(w2ui.grid.expand(angScope.SystemVaribaleList[i].recid)){

					        				  }
					        				  else{

					        				  }
					        			  }


					        		  }







					        	  }
					          },
					          onUnselect:function(event){
					        	  // clist='recid' + event.recid+' target : '+event.target+'  index'+event.index;


					        	  event.onComplete = function () {
					        		  var rec=w2ui[''+event.target].get(event.recid);
					        		  if(rec!=null){
					        			  var angScope=angular.element(document.getElementById('ControlPanelSystemValue')).scope();
					        			  var mainGridRowRec=$.grep(angScope.SystemVaribaleList,function(e){return e.recid ==  event.recid;})[0];	
					        			  var index=angScope.SystemVaribaleList.indexOf(mainGridRowRec);
					        			  for(i=0;i<angScope.SystemVaribaleList[index].systemVariableSubList.length;i++){
					        				  angScope.SystemVaribaleList[index].systemVariableSubList[i].systemVariableIsSelected=false;
					        				  angScope.SystemVaribaleList[index].systemVariableIsSelected=false;
					        			  }
					        			  if(w2ui.grid.expand(event.recid)){

					        			  }else{

					        				  for(i=0;i<w2ui['subgrid-'+event.recid].records.length;i++){
					        					  a=w2ui['subgrid-'+event.recid].records[i].recid
					        					  w2ui['subgrid-'+event.recid].unselect(a)
					        				  }
					        			  }
					        		  }
					        		  else{
					        			  var angScope=angular.element(document.getElementById('ControlPanelSystemValue')).scope();

					        			  for(i=0;i<angScope.SystemVaribaleList.length;i++){
					        				  for(j=0;j<angScope.SystemVaribaleList[i].systemVariableSubList.length;j++){
					        					  angScope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableIsSelected=false;
					        					  var rec=event.target;
					        					  var a=angScope.SystemVaribaleList[i].recid;


					        				  }
					        				  if(w2ui.grid.expand(angScope.SystemVaribaleList[i].recid)){

					        				  }
					        				  else{
					        					  for(k=0;k<angScope.SystemVaribaleList.length;k++){
					        						  //var c=w2ui['subgrid-'+angScope.SystemVaribaleList[i].recid].records;
					        						  for(j=0;j<w2ui['subgrid-' +angScope.SystemVaribaleList[k].recid].records.length;j++){
					        							  d= w2ui['subgrid-'+angScope.SystemVaribaleList[k].recid].records[j];
					        							  w2ui['subgrid-'+angScope.SystemVaribaleList[k].recid].unselect(d)
					        						  }
					        					  }
					        				  }
					        			  }

					        		  }



					        	  }




					          },
					          onChange: function(event) {

					        	  event.onComplete = function () {
					        		  /*mainGridRowRec=$.grep(angScope.SystemVaribaleList,function(e){return e.recid==c})[0]
                                    var index=angScope.SystemVaribaleList.indexOf(mainGridRowRec);*/
					        		  angular.element(document.getElementById('ControlPanelSystemValue')).scope().SystemVaribaleList=w2ui.grid.records;

					        	  }

					          }, 
					          onExpand: function (event) {
					        	  var angScope=angular.element(document.getElementById('ControlPanelSystemValue')).scope();
					        	  var mainGridRowRec=$.grep(angScope.SystemVaribaleList,function(e){return e.recid ==  event.recid;})[0];	
					        	  var myRecs=[];
					        	  if (w2ui.hasOwnProperty('subgrid-' + event.recid)){ 

					        		  angular.copy(mainGridRowRec.systemVariableSubList,myRecs);
					        		  //myRecs=angScope.SystemVaribaleSubList
					        		  w2ui['subgrid-' + event.recid].destroy();

					        	  }else{

					        		  angular.copy(mainGridRowRec.systemVariableSubList,myRecs);
					        	  }

					        	  $('#'+ event.box_id).css({ margin: '0px', padding: '0px', width: '100%' }).animate({ height: '105px' }, 100);
					        	  setTimeout(function () {
					        		  $('#'+ event.box_id).w2grid({
					        			  name: 'subgrid-' + event.recid, 
					        			  show: { columnHeaders: false, 
					        				  selectColumn: true

					        			  },
					        			  fixedBody: false,
					        			  columns: [                
					        			            { field: 'systemVariableName', caption: 'Description', size: '28.5%', style: 'text-align:left' },
					        			            { field: 'systemVariableValue', caption: 'Value', size: '8%', editable: { type: 'number'},  style: 'background-color: #ccffff'  },
					        			            { field: 'systemVariableUnit', caption: 'Unit', size: '8%' },
					        			            { field: 'systemVariableMinimumValue', caption: 'Min Value', size: '8%' },
					        			            { field: 'systemVariableMaximumVale', caption: 'Max Value', size: '8%' },
					        			            { field: 'systemVariableValueSet', caption: 'Value Set', size: '8%' },
					        			            { field: 'systemVariableIsSelected', caption: 'systemVariableIsSelected', size: '8%',hidden:true},
					        			            { field: 'systemVariableValidationType', caption: 'systemVariableIsSelected', size: '8%',hidden:true},
					        			            ],
					        			            onSelect:function(event){		

					        			            	event.onComplete = function () {

					        			            		str=event.target;
					        			            		b=str.split('-')
					        			            		c= Number(b[1]);

					        			            		mainGridRowRec=$.grep(angScope.SystemVaribaleList,function(e){return e.recid==c})[0]
					        			            		var index=angScope.SystemVaribaleList.indexOf(mainGridRowRec);
					        			            		angular.copy(w2ui[event.target].records,angScope.SystemVaribaleList[index].systemVariableSubList);
					        			            		var rec=w2ui[''+event.target].get(event.recid);
					        			            		//var index=w2ui[''+event.target].records.indexOf(rec);
					        			            		if(rec != null){

					        			            			rec.systemVariableIsSelected=true;

					        			            			//w2ui[event.target].records[index].systemVariableIsSelected=true;
					        			            			angular.copy(w2ui[event.target].records,angScope.SystemVaribaleList[index].systemVariableSubList);

					        			            		}
					        			            		/*if(w2ui.grid.selectAll()){
					        			            			alert("selectall");
					        			            		}
					        			            		 */
					        			            	}

					        			            },
					        			            onChange: function(event) {
					        			            	/*event.onComplete = function () {
					        			            		var angScope=angular.element(document.getElementById('ControlPanelSystemValue')).scope();
					        			            		var mainGridRowRec=$.grep(angScope.SystemVaribaleList,function(e){return e.recid ==  event.recid;})[0];	
					        			            		var index=angScope.SystemVaribaleList.indexOf(mainGridRowRec);

					        			            		//b=event.recid;
					        			            		a=w2ui['subgrid-'+event.recid].records
					        			            		angScope.SystemVaribaleList[0].systemVariableSubList[0]=a;
					        			            	}*/
					        			            	event.onComplete = function () {
					        			            		str=event.target;
					        			            		b=str.split('-')
					        			            		c= Number(b[1]);
					        			            		mainGridRowRec=$.grep(angScope.SystemVaribaleList,function(e){return e.recid==c})[0]
					        			            		var index=angScope.SystemVaribaleList.indexOf(mainGridRowRec);
					        			            		angular.copy(w2ui[event.target].records,angScope.SystemVaribaleList[index].systemVariableSubList);						                                   
					        			            	}

					        			            }, 

					        			            onEditField: function(event) {

					        			            	event.onComplete = function () {
					        			            		str=event.target;
					        			            		b=str.split('-')
					        			            		c= Number(b[1]);             
					        			            	}

					        			            }, 

					        			            onUnselect:function(event){

					        			            	event.onComplete = function () {
					        			            		//w2ui.grid.unselect(2);
					        			            		str=event.target;
					        			            		b=str.split('-')
					        			            		c= Number(b[1]);
					        			            		mainGridRowRec=$.grep(angScope.SystemVaribaleList,function(e){return e.recid==c})[0]
					        			            		var index=angScope.SystemVaribaleList.indexOf(mainGridRowRec);
					        			            		angular.copy(w2ui[event.target].records,angScope.SystemVaribaleList[index].systemVariableSubList);
					        			            		var rec=w2ui[''+event.target].get(event.recid);

					        			            		//var index=w2ui[''+event.target].records.indexOf(rec);
					        			            		if(rec != null){


					        			            			rec.systemVariableIsSelected=false;
					        			            			//w2ui[event.target].records[index].systemVariableIsSelected=true;
					        			            			angular.copy(w2ui[event.target].records,angScope.SystemVaribaleList[index].systemVariableSubList);


					        			            		}


					        			            	}

					        			            },
					        			            records: myRecs
					        		  });
					        		  /////////After expand subgrid loads Select logic
					        		  for(i=0;i<mainGridRowRec.systemVariableSubList.length;i++){
					        			  if(mainGridRowRec.systemVariableSubList[i].systemVariableIsSelected == true){
					        				  w2ui['subgrid-' + event.recid].select(mainGridRowRec.systemVariableSubList[i].recid)

					        			  }
					        		  }
					        		  w2ui['subgrid-' + event.recid].resize();
					        	  }, 300);

					          },



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

		}
		/*============================================================*/


		if(!$rootScope.grid){
			loadC(config);
		}else{
			w2ui.grid.destroy();
			w2ui.layout.destroy();
			loadC(config);

		}

		GetClock();
	};
	var json=  {entity:2,listType:1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
	clist=[];

	$http({
		method: 'POST',
		url: "http://localhost:8080/Purple/rest/apiControlPanel/getControlPanel",
		async:false,
		data:JSON.stringify(json),
		headers: {'Content-Type': 'application/json'}
	}).success(function(data, status, headers, config) {
		if(data.responseCode == 200){
			var respData=JSON.parse(data.responseData);
			$scope.SystemVaribaleList=respData;
			for(i=0;i<$scope.SystemVaribaleList.length;i++){
				if($scope.SystemVaribaleList[i].systemVariableMaximumVale==0){
					$scope.SystemVaribaleList[i].systemVariableMaximumVale=null;
				}
				if($scope.SystemVaribaleList[i].systemVariableMinimumValue==0){
					$scope.SystemVaribaleList[i].systemVariableMinimumValue=null;
				}
				if($scope.SystemVaribaleList[i].systemVariableValueSet==0){
					$scope.SystemVaribaleList[i].systemVariableValueSet=null;
				}
				for(j=0;j<$scope.SystemVaribaleList[i].systemVariableSubList.length;j++){
					if($scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableMaximumVale==0){
						$scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableMaximumVale=null;
					}
					if($scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableMinimumValue==0){
						$scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableMinimumValue=null;
					}
					if($scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableValueSet==0){
						$scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableValueSet=null;
					}
				}

			}

			angular.copy($scope.SystemVaribaleList,w2ui.grid.records);
			w2ui.grid.refresh();	
			ngToast.create({
				className: 'success',
				content: '<span>Data load successfully...</span>',
				timeout: 3000,
				animation:'fade'
			});


		}
		else{
			//alert('Purpleaid Error Manager \n'+data.responseCode);
			var msg = 'Purpleaid Error Manager \n'+data.responseCode;
			//w2ui.w2confirm(msg, function (btn) { console.log(btn); });
			w2alert(msg);
		}


	}).error(function(data, status, headers, config) {          
		return false;
	});
	//$scope.buttonText = 'Save';

	$scope.Collpaseall=function(){
		for(i=0;i<w2ui.grid.records.length;i++){
			w2ui.grid.collapse(w2ui.grid.records[i].recid);
			//return flag;
		}		  

	};
	$scope.Expandall=function(){
		for(i=0;i<w2ui.grid.records.length;i++){
			w2ui.grid.expand(w2ui.grid.records[i].recid);

		}	

	};
	$scope.selectall=function(){

		if(w2ui.grid.selecAll()){

		}
		else{
			w2ui.grid.expand(1)
			w2ui['subgrid-1'].select(10);
		}
		//return  flag;
	};

	/*$scope.refreshAll = function(){
		location.reload();
	}*/;
	$scope.ControlPanelValidation=function(){
		flag=false;
		slist=[]
		for(i=0;i<$scope.SystemVaribaleList.length;i++){
			for(j=0;j<$scope.SystemVaribaleList[i].systemVariableSubList.length;j++){
				if($scope.SystemVaribaleList[i].systemVariableSubList[j].changes!=undefined){
					flag=true;
				}
			}

		}

		return flag;
	}	
	$scope.ControlPanelsValidation=function(){
		flag=false;
		slist=[]
		for(i=0;i<$scope.SystemVaribaleList.length;i++){
			for(j=0;j<$scope.SystemVaribaleList[i].systemVariableSubList.length;j++){
				if($scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableIsSelected==true){
					flag=true;
				}
			}

		}

		return flag;
	}	
	$scope.save = function(){
		a= $scope.ControlPanelValidation();
		if(a==false){
			alert("There is No Value For Change");
			ngToast.create({
				className: 'success',
				content: '<span>Delete successfull...!</span>',
				timeout: 3000,
				animation:'fade'
			});
			return false;
		}
		valueList=[];

		for(i=0;i<$scope.SystemVaribaleList.length;i++){
			for(j=0;j<$scope.SystemVaribaleList[i].systemVariableSubList.length;j++){
				if($scope.SystemVaribaleList[i].systemVariableSubList[j].changes!=undefined){	
					$scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableValue=$scope.SystemVaribaleList[i].systemVariableSubList[j].changes.systemVariableValue

				}	
			}

		}
		angular.copy($scope.SystemVaribaleList,$scope.ShowList);
		for(i=0;i<$scope.ShowList.length;i++){
			for(j=0;j<$scope.ShowList[i].systemVariableSubList.length;j++){
				if($scope.ShowList[i].systemVariableSubList[j].changes!=undefined){
					valueList.push($scope.ShowList[i].systemVariableSubList[j]);

				}

			}
		}
		for(i=0;i<valueList.length;i++){
			delete(valueList[i].changes);
			if(valueList[i].systemVariableMaximumVale==null){
				valueList[i].systemVariableMaximumVale=0;
			}
			if(valueList[i].systemVariableMinimumValue==null){
				valueList[i].systemVariableMinimumValue=0;
			}
			if(valueList[i].systemVariableValueSet==null){
				valueList[i].systemVariableValueSet=0;
			}
		}

		var json1=angular.toJson(valueList);
		var json={entity:2,listType:1,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiControlPanel/setControlPanel",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var returnObj=JSON.parse(data.responseData);

				for(i=0;i<returnObj.length;i++){
					recs=returnObj[i].recid;
					for(j=0;j<$scope.SystemVaribaleList.length;j++){
						for(k=0;k<$scope.SystemVaribaleList[j].systemVariableSubList.length;k++){
							if(recs==$scope.SystemVaribaleList[j].systemVariableSubList[k].recid){
								angular.copy(returnObj[i],$scope.SystemVaribaleList[j].systemVariableSubList[k])
							}
						}
					}
				}
				for(i=0;i<$scope.SystemVaribaleList.length;i++){
					if($scope.SystemVaribaleList[i].systemVariableMaximumVale==0){
						$scope.SystemVaribaleList[i].systemVariableMaximumVale=null;
					}
					if($scope.SystemVaribaleList[i].systemVariableMinimumValue==0){
						$scope.SystemVaribaleList[i].systemVariableMinimumValue=null;
					}
					if($scope.SystemVaribaleList[i].systemVariableValueSet==0){
						$scope.SystemVaribaleList[i].systemVariableValueSet=null;
					}
					for(j=0;j<$scope.SystemVaribaleList[i].systemVariableSubList.length;j++){
						if($scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableMaximumVale==0){
							$scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableMaximumVale=null;
						}
						if($scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableMinimumValue==0){
							$scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableMinimumValue=null;
						}
						if($scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableValueSet==0){
							$scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableValueSet=null;
						}
					}

				}
				for(i=0;i<$scope.SystemVaribaleList.length;i++){
					recsid=$scope.SystemVaribaleList[i].recid;
					if(w2ui['subgrid-' +recsid]==undefined){

					}
					else{
						angular.copy($scope.SystemVaribaleList[i].systemVariableSubList,w2ui['subgrid-' +recsid].records)
						for(a=0;a<w2ui['subgrid-' +recsid].records.length;a++){
							b=w2ui['subgrid-' +recsid].records[a].recid;
							w2ui['subgrid-' +recsid].unselect(b);
						}
						w2ui['subgrid-' +recsid].save();
					}
				}
				/*angular.copy(returnObj,$scope.SystemVaribaleList[1].systemVariableSubList[2])
					angular.copy($scope.SystemVaribaleList[1].systemVariableSubList,w2ui['subgrid-2'].records)
					w2ui['subgrid-2'].unselect(30);
					w2ui['subgrid-2'].save();*/

				ngToast.create({
					className: 'success',
					content: '<span>Data Loaded successfully...</span>',
					timeout: 3000,
					animation:'fade'
				});


			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
				//$scope.spinner=false;
			}
		}).error(function(data, status, headers, config) { 
			//$scope.spinner=false;
			return false;

		});
	};
	$scope.Setdefault = function(){
		a=$scope.ControlPanelsValidation()
		 if(a==false){
			 alert("Plese Select One Value");
		 }
		defaulList=[];
		//var json1=angular.toJson($scope.SystemVaribaleList);
		for(i=0;i<$scope.SystemVaribaleList.length;i++){
			for(j=0;j<$scope.SystemVaribaleList[i].systemVariableSubList.length;j++){
				if($scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableIsSelected==true ){ 
					defaulList.push($scope.SystemVaribaleList[i].systemVariableSubList[j]);   

				}    
			}

		}
		for(i=0;i<defaulList.length;i++){
			delete(defaulList[i].changes);
			if(defaulList[i].systemVariableMaximumVale==null){
				defaulList[i].systemVariableMaximumVale=0;
			}
			if(defaulList[i].systemVariableMinimumValue==null){
				defaulList[i].systemVariableMinimumValue=0;
			}
			if(defaulList[i].systemVariableValueSet==null){
				defaulList[i].systemVariableValueSet=0;
			}
		}

		var json1=angular.toJson(defaulList);
		var json={entity:2,listType:2,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiControlPanel/setControlPanel",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var returnObj=JSON.parse(data.responseData);
				$scope.List=[];
			  for(length=0;length<returnObj.length;length++){
				    var index=akricksGetObjIndex($scope.SystemVaribaleList,{systemVariableGroupId:returnObj[length].systemVariableGroupId});
				      if(index!=-1){
				      var index2=akricksGetObjIndex($scope.SystemVaribaleList[index].systemVariableSubList,{systemVariableId:returnObj[length].systemVariableId});
				      w2ui['subgrid-'+$scope.SystemVaribaleList[index].systemVariableSubList[index2].recid]
				      w2ui['subgrid-'+$scope.SystemVaribaleList[index].recid].unselect($scope.SystemVaribaleList[index].systemVariableSubList[index2].recid)
				        w2ui['subgrid-'+$scope.SystemVaribaleList[index].recid].save();
				      angular.copy(returnObj[length],$scope.SystemVaribaleList[index].systemVariableSubList[index2]);
				      angular.copy(returnObj[length],w2ui['subgrid-'+$scope.SystemVaribaleList[index].recid].records[index2]);
				      }
				      
				     
				      
				    
			  }
				/*for(i=0;i<$scope.SystemVaribaleList.length;i++){
					if($scope.SystemVaribaleList[i].systemVariableMaximumVale==0){
						$scope.SystemVaribaleList[i].systemVariableMaximumVale=null;
					}
					if($scope.SystemVaribaleList[i].systemVariableMinimumValue==0){
						$scope.SystemVaribaleList[i].systemVariableMinimumValue=null;
					}
					if($scope.SystemVaribaleList[i].systemVariableValueSet==0){
						$scope.SystemVaribaleList[i].systemVariableValueSet=null;
					}
					for(j=0;j<$scope.SystemVaribaleList[i].systemVariableSubList.length;j++){
						if($scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableMaximumVale==0){
							$scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableMaximumVale=null;
						}
						if($scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableMinimumValue==0){
							$scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableMinimumValue=null;
						}
						if($scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableValueSet==0){
							$scope.SystemVaribaleList[i].systemVariableSubList[j].systemVariableValueSet=null;
						}
					}

				}
				for(m=0;m<$scope.SystemVaribaleList.length;m++){
					recsid=$scope.SystemVaribaleList[m].recid;
					if(w2ui['subgrid-' +recsid]==undefined){

					}
					else{
						angular.copy($scope.SystemVaribaleList[m].systemVariableSubList,w2ui['subgrid-' +recsid].records)
						for(a=0;a<w2ui['subgrid-' +recsid].records.length;a++){
							b=w2ui['subgrid-' +recsid].records[a].recid
							w2ui['subgrid-' +recsid].unselect(b);
							w2ui.grid.unselect(recsid);
						}
						w2ui['subgrid-' +recsid].save();
					}
				}*/
				/*angular.copy(returnObj,$scope.SystemVaribaleList[1].systemVariableSubList[2])
				angular.copy($scope.SystemVaribaleList[1].systemVariableSubList,w2ui['subgrid-2'].records)
				w2ui['subgrid-2'].save();*/

			}
			else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
				//$scope.spinner=false;
			}
		}).error(function(data, status, headers, config) { 
			//$scope.spinner=false;
			return false;

		});
	};

}]);
