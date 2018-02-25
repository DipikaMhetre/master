pharmApp.controller('ContactManagerCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.entityAreaList=[];
	$scope.entityRouteList=[];
	$scope.entityAddressList=[];
	$scope.entityContactTypeList=[];
	$scope.entityDateList=[];
	$scope.entityEmailList=[];
	$scope.entityPhoneList=[];
	$scope.entityRelatedNamesList=[];
	$scope.entityUrlList=[];
	$scope.lastMaxId=0;
	$scope.editModeOn=false;
	$scope.showContactSelected={};
	$scope.firstCall=true;
	$scope.isNew=true;
	$scope.spinner=true;
	$scope.gridTouched=false;
	$scope.errorCount=0;
	$scope.masterRecord={};
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.filter={"contactCity":"","contactPhone":"","contactEmail":"","contactURL":"","contactDate":"","contactHQ":"","contactLabel":"","contactArea":0,"contactRoute":0,"contactMyFavoriteFlag":false,"contactSystemUserFlag":false,"userName":"","userLock":false,"contactName":"","contactMyContactFlag":false};
	$scope.filterStatus='OFF';
	$scope.contactNameTitles=[{id:0,name:'Mr.'},{id:1,name:'Mrs.'},{id:2,name:'Miss.'}];
	
	$scope.editable=$rootScope.editable;
	//Lists for managing Deleted lists
	$scope.deleteList=[];
	//$scope.showContactSelected={relatedNames:[{relatedNamesId:1,relatedNamesTypeId:1,relatedNames:'Satyajit',relatedNamesTypeDescription:'',entity:{entityDeatilsDescription: "home",entityDetailsId: 14,entityDetailsTypeId: 2}},{relatedNamesId:2,relatedNamesTypeId:2,relatedNames:'Umya',relatedNamesTypeDescription:'',entity:{entityDeatilsDescription: "home",entityDetailsId: 14,entityDetailsTypeId: 2}},{relatedNamesId:1,relatedNamesTypeId:1,relatedNames:'Satyajit',relatedNamesTypeDescription:'',entity:{entityDeatilsDescription: "home",entityDetailsId: 14,entityDetailsTypeId: 2}}]};
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
			            toolbar : false,
			            toolbarDelete: false,
						toolbarAdd : false
			        },
			        columns: [
			                 
			                 { field: 'recid', caption: 'recid', hidden:true},
			                 	{ field: 'contactFullName', caption: 'Person', size: '100%',style: 'text-align: left',sortable:true
			                     
			                 	},
				              { field: 'contactId', hidden:true},
				              { field: 'contactNameTitle', hidden:true},
				              
				              { field: 'contactFirstName', hidden:true},
				              { field: 'contactMiddleName', hidden:true},
				              { field: 'contactLastName',  hidden:true},
				              { field: 'contactNickName', hidden:true},
				              { field: 'contactjobTitle', hidden:true},
				              { field: 'contactLabel', hidden:true},
				              { field: 'contactTypeId', hidden:true},
				              { field: 'contactCompanyId', hidden:true},
				              { field: 'contactHQ', hidden:true},
				              { field: 'contactNotes', hidden:true},
				              { field: 'contactTypeDescription', hidden:true},
				              { field: 'contactActiveFlag', hidden:true},
				              { field: 'contactMyFavouriteFlag', hidden:true},
				              { field: 'contactSendGreetingFlag', hidden:true},
				              { field: 'contactOnlyMyContactFlag', hidden:true},
				              { field: 'contactRoute', hidden:true},
				              { field: 'contactRelatedNamesList', hidden:true},
				              { field: 'contactAddressList', hidden:true},
				              { field: 'contctPhoneList', hidden:true},
				              { field: 'contactEmailList', hidden:true},
				              { field: 'contactUrlList', hidden:true},
				              { field: 'contctImportantDatesList', hidden:true}
				              				            
			  	        ],
			        records:[],
			        onSelect: function(event) {
			        	event.onComplete = function () {
			        		debugger;
			        		var angScope=angular.element(document.getElementById('ContactManager')).scope();
			        		if(angScope.gridTouched){
			        			debugger;
			        			if(!angular.equals(angScope.masterRecord,angScope.showContactSelected)){
			        				angScope.confirmFunction();
			        			}
			        		}
			        		
			        		//,
			        		if(!angular.equals(w2ui.grid.get(event.recid),angScope.masterRecord)){
			        			angular.copy(w2ui.grid.get(event.recid),angScope.masterRecord);
			        		}
			        		
			        		if(!angular.equals(w2ui.grid.get(event.recid),angScope.showContactSelected)){
			        			angular.copy(w2ui.grid.get(event.recid),angScope.showContactSelected);
			        		}
			        		
			        		
			        		var x=angScope.showContactSelected;
			        		if(x.contactAddressList ==null){
			        			x.contactAddressList=[];
			        			angScope.masterRecord.contactAddressList=[]
			        		}
			        		for(i=0;i<x.contactAddressList.length;i++){
			        			x.contactAddressList[i].addressSummary=addressFormated(x.contactAddressList[i]);
			        		}
			        		for(i=0;i<angScope.masterRecord.contactAddressList.length;i++){
			        			angScope.masterRecord.contactAddressList[i].addressSummary=addressFormated(angScope.masterRecord.contactAddressList[i]);
			        		}
			        		/////////////////=============/////////////////////
			        		/*if(angScope.showContactSelected.contactRelatedNamesList == null || angScope.showContactSelected.contactRelatedNamesList.length==0){
			        			angScope.showContactSelected.contactRelatedNamesList=[];	
			        			angScope.masterRecord.contactRelatedNamesList=[];
			        			angScope.showContactSelected.contactRelatedNamesList.push({entity:{},relatedNamesTypeDescription:"",relatedNames:"",relatedNamesTypeId:0,relatedNamesCDID:0,relatedNamesId:0});
			        			angScope.masterRecord.contactRelatedNamesList.push({entity:{},relatedNamesTypeDescription:"",relatedNames:"",relatedNamesTypeId:0,relatedNamesCDID:0,relatedNamesId:0});
	        				}
			        		
			        		if(angScope.showContactSelected.contctPhoneList == null || angScope.showContactSelected.contctPhoneList.length==0){
			        			angScope.showContactSelected.contctPhoneList=[];	
			        			angScope.masterRecord.contctPhoneList=[];
			        			angScope.showContactSelected.contctPhoneList.push({entity:{},phone:"",phoneId:0,phoneCDID:0,phoneAreaCode:"",phoneTypeDescription:"",phoneCountry:"",phoneLocalNumber:"",phoneTypeId:0,phoneExtension:"",phoneEntityId:0});
			        			angScope.masterRecord.contctPhoneList.push({entity:{},phone:"",phoneId:0,phoneCDID:0,phoneAreaCode:"",phoneTypeDescription:"",phoneCountry:"",phoneLocalNumber:"",phoneTypeId:0,phoneExtension:"",phoneEntityId:0});
	        				}
			        		
			        		if(angScope.showContactSelected.contctImportantDatesList == null || angScope.showContactSelected.contctImportantDatesList.length==0){
			        			angScope.showContactSelected.contctImportantDatesList=[];	
			        			angScope.masterRecord.contctImportantDatesList=[];
			        			angScope.showContactSelected.contctImportantDatesList.push({entity:{},importantDatesTypesDescription:"",importantDatesId:0,importantTypeId:0,importantDates:"",importantDatesCDID:0});
			        			angScope.masterRecord.contctImportantDatesList.push({entity:{},importantDatesTypesDescription:"",importantDatesId:0,importantTypeId:0,importantDates:"",importantDatesCDID:0});
	        				}
			        		
			        		if(angScope.showContactSelected.contactEmailList == null || angScope.showContactSelected.contactEmailList.length==0){
			        			angScope.showContactSelected.contactEmailList=[];	
			        			angScope.masterRecord.contactEmailList=[];
			        			angScope.showContactSelected.contactEmailList.push({entity:{},emailCDID:0,emailId:0,email:"",emailTypeId:0,emailTypeDescription:""});
			        			angScope.masterRecord.contactEmailList.push({entity:{},emailCDID:0,emailId:0,email:"",emailTypeId:0,emailTypeDescription:""});
	        				}
			        		
			        		if(angScope.showContactSelected.contactUrlList == null || angScope.showContactSelected.contactUrlList.length==0){
			        			angScope.showContactSelected.contactUrlList=[];	
			        			angScope.masterRecord.contactUrlList=[];
			        			angScope.showContactSelected.contactUrlList.push({url:"",entity:{},urlTypeId:0,urlId:0,urlCDID:0,urlTypeDescription:""});
			        			angScope.masterRecord.contactUrlList.push({url:"",entity:{},urlTypeId:0,urlId:0,urlCDID:0,urlTypeDescription:""});
	        				}
			        		
			        		if(angScope.showContactSelected.contactAssociationList == null || angScope.showContactSelected.contactAssociationList.length==0){
			        			angScope.showContactSelected.contactAssociationList=[];	
			        			angScope.masterRecord.contactAssociationList=[];
			        			angScope.showContactSelected.contactAssociationList.push({entity:{"entityDetailsId":0,"entityCompanyList":null,"entityDetailsTypeId":0,"entityDeatilsDescription":""},associationId:0,associationTypeId:0,associationTypeDescription:"",associationCDID:0,associationName:"",associtaionIsDeleted:false});
			        			angScope.masterRecord.contactAssociationList.push({entity:{"entityDetailsId":0,"entityCompanyList":null,"entityDetailsTypeId":0,"entityDeatilsDescription":""},associationId:0,associationTypeId:0,associationTypeDescription:"",associationCDID:0,associationName:"",associtaionIsDeleted:false});
	        				}
			        		if(angScope.showContactSelected.contactAddressList == null || angScope.showContactSelected.contactAddressList.length==0){
			        			angScope.showContactSelected.contactAddressList=[];	
			        			angScope.masterRecord.contactAddressList=[];
			        			angScope.showContactSelected.contactAddressList.push({entity:{},associationId:0,associationTypeId:0,associationTypeDescription:"",associationCDID:0,associationName:"",associtaionIsDeleted:false});
			        			angScope.masterRecord.contactAddressList.push({entity:{},associationId:0,associationTypeId:0,associationTypeDescription:"",associationCDID:0,associationName:"",associtaionIsDeleted:false});
	        				}*/
			        		////////////////==============//////////////////////
			        		angScope.deleteList=[];
			        		angScope.isNew=false;
			        		angScope.gridTouched=true;

			        		$("#first_name").css("background-color", "white");
			        		$("#last_name").css("background-color", "white");
			        		$("#contact_type").css("background-color", "white");
			        		$("#mobile").css("background-color", "white");
			        		$("#emails").css("background-color", "white");
			        		angScope.$apply();
			        	//scriptSelectCompany(w2ui.grid.get(event.recid));
			        	}
			        } ,
			        sortData: [
			  	                 {field: 'contactFirstName', direction: 'asc' }
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
					
					$("#grid").contents()[0].setAttribute("id", "my");
				}else{
					w2ui.grid.destroy();
					w2ui.layout.destroy();
					loadA(config);
					//$('#grid').contents()[0].attr('id','my');
					$("#grid").contents()[0].setAttribute("id", "my");
					
			};
			
			//////////////Config and Grid load ends
			var json={entity:0,entityId:0,listType:3,requestData:"",
					userId:$scope.activeUser.userId,token:$scope.activeUser.token,companyId:0,grDate:0,lastID:$scope.lastMaxId,listLimit:100,contactTypeId:0,userName:"",userLock:0,contactMyFavoriteFlag:0,contactArea:0,contactRoute:0,contactHQ:"",contactLabel:"",contactName:"",contactPhone:"",contactURL:"",contactCity:"",contactEmail:""}//Date ignored;
			//HTTP CALL FOR GETTING CompanyList enclosed division 
			$http({
			    method: 'POST',
			    url: "http://localhost:8080/Purple/rest/apiPeople/getPeople",
			    async:false,
			    data:JSON.stringify(json),
			    headers: {'Content-Type': 'application/json'}
			}).success(function(data, status, headers, config) {
				if(data.responseCode == 200){
					var respData=JSON.parse(data.responseData);
					$scope.entityAreaList=respData.areaList;
					$scope.entityRouteList=respData.routeList;
					$scope.entityAddressList=respData.masterDataList.addressList;
					$scope.entityContactTypeList=respData.masterDataList.contactTypeList;
					$scope.entityDateList=respData.masterDataList.dateList;
					$scope.entityEmailList=respData.masterDataList.emailList;
					$scope.entityPhoneList=respData.masterDataList.phoneList;
					$scope.entityRelatedNamesList=respData.masterDataList.relatedNamesList;
					$scope.entityUrlList=respData.masterDataList.urlList;
					$scope.entityAssociationList=respData.masterDataList.associationList;
					$scope.companyList=respData.masterDataList.companyList;
					$scope.customerList=respData.masterDataList.customerList;
					$scope.supplierList=respData.masterDataList.supplierList;
					$scope.divisionList=respData.masterDataList.divisionList;
					$scope.allContactList=respData.allContactNameList;
					
					$scope.mixContactTypeList=[];
					angular.copy($scope.entityContactTypeList,$scope.mixContactTypeList);	
					var obj1={entityDeatilsDescription: "System User",entityDetailsId: -300,entityDetailsTypeId: 0};
					$scope.mixContactTypeList.unshift(obj1);
					obj1={entityDeatilsDescription: "My Favourites",entityDetailsId: -200,entityDetailsTypeId: 0};				
					$scope.mixContactTypeList.unshift(obj1);
					obj1={entityDeatilsDescription: "My Contact",entityDetailsId: -100,entityDetailsTypeId: 0};
					$scope.mixContactTypeList.unshift(obj1);
					obj1={entityDeatilsDescription: "ALL",entityDetailsId: 0,entityDetailsTypeId: 0};					
					$scope.mixContactTypeList.unshift(obj1);
					//var obj2={entityDeatilsDescription: "ALL",entityDetailsId: 0,entityDetailsTypeId: 0};
					angular.copy(respData.contactList.cList,w2ui.grid.records);
					w2ui.grid.refresh();
					$scope.lastMaxId=respData.contactList.maxId;
					$scope.onMixTypeSelection(obj1);
					$scope.mixTypeSelected=obj1;
					$scope.firstCall=false;
					w2ui['grid'].columnClick('contactFullName', event);
					//$scope.onCompanySelection($scope.showCompanyList[0]);
					$scope.spinner=false;
				}else{
					$scope.spinner=false;
					alert('Purpleaid Error Manager \n'+data.responseCode);
					
				}
	        }).error(function(data, status, headers, config) {  
	        	$scope.spinner=false;
	        	return false;
	        });
	};
	
	$scope.onMixTypeSelection = function(mixType){
		$scope.spinner=true;
		if($scope.firstCall){
			$scope.spinner=false;
			return false;
		}
		$scope.lastMaxId=0;
		if(typeof $scope.listLimit === "undefined" || typeof $scope.listLimit !== "undefined" && $scope.listLimit==0){
			$scope.listLimit=10;
		}
		 if(mixType.entityDetailsId==0){
			 var json={entity:1,entityId:0,listType:1,requestData:"",
					 userId:$scope.activeUser.userId,token:$scope.activeUser.token,lastID:$scope.lastMaxId,listLimit:$scope.listLimit,contactTypeId:$scope.mixTypeSelected.entityDetailsId,userName:$scope.filter.userName,userLock:$scope.filter.userLock,contactMyFavoriteFlag:$scope.filter.contactMyFavoriteFlag,contactArea:$scope.filter.contactArea,contactRoute:$scope.filter.contactRoute,contactHQ:$scope.filter.contactHQ,contactLabel:$scope.filter.contactLabel,contactName:$scope.filter.contactName,contactPhone:$scope.filter.contactPhone,contactURL:$scope.filter.contactURL,contactCity:$scope.filter.contactCity,contactEmail:$scope.filter.contactEmail,contactMyContactFlag:$scope.filter.contactMyContactFlag,contactSystemUser:$scope.filter.contactSystemUserFlag,contactDate:$scope.filter.contactDate}//Date ignored;contacttypeId n entityDetails are same
		 }else{
			 var json={entity:1,entityId:0,listType:1,requestData:"",
					 userId:$scope.activeUser.userId,token:$scope.activeUser.token,lastID:$scope.lastMaxId,listLimit:$scope.listLimit,contactTypeId:$scope.mixTypeSelected.entityDetailsId,userName:$scope.filter.userName,userLock:$scope.filter.userLock,contactMyFavoriteFlag:$scope.filter.contactMyFavoriteFlag,contactArea:$scope.filter.contactArea,contactRoute:$scope.filter.contactRoute,contactHQ:$scope.filter.contactHQ,contactLabel:$scope.filter.contactLabel,contactName:$scope.filter.contactName,contactPhone:$scope.filter.contactPhone,contactURL:$scope.filter.contactURL,contactCity:$scope.filter.contactCity,contactEmail:$scope.filter.contactEmail,contactMyContactFlag:$scope.filter.contactMyContactFlag,contactSystemUser:$scope.filter.contactSystemUserFlag,contactDate:$scope.filter.contactDate}//Date ignored;contacttypeId n entityDetails are same
		 }
		 //HTTP CALL FOR GETTING CompanyList enclosed division 
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiPeople/getPeople",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				angular.copy(respData.cList,w2ui.grid.records);
				w2ui.grid.refresh();
				$scope.lastMaxId=respData.maxId;
				$scope.spinner=false;
				//$scope.onCompanySelection($scope.showCompanyList[0]);
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {   
        	$scope.spinner=false;
        	return false;
        	
        });
		
	};
	
	$scope.removeArrayElement = function(type,index){
		if(type=='related'){
			if($scope.showContactSelected.contactRelatedNamesList[index].relatedNamesCDID !=0){
				$scope.showContactSelected.contactRelatedNamesList[index].relatedNamesIsDeleted=true;
				$scope.deleteList.push({objType:type,obj:$scope.showContactSelected.contactRelatedNamesList[index]});
			}
			$scope.showContactSelected.contactRelatedNamesList.splice(index,1);
		}else if(type=='address'){
			
			if($scope.showContactSelected.contactAddressList[index].adreessId !=0){
				$scope.showContactSelected.contactAddressList[index].addressIsDeleted=true;
				$scope.deleteList.push({objType:type,obj:$scope.showContactSelected.contactAddressList[index]});
			}
			$scope.showContactSelected.contactAddressList.splice(index,1);
		}else if(type=='phone'){
			if($scope.showContactSelected.contctPhoneList[index].phoneId !=0){
				$scope.showContactSelected.contctPhoneList[index].phoneIsDeleted=true;
				$scope.deleteList.push({objType:type,obj:$scope.showContactSelected.contctPhoneList[index]});
			}
			$scope.showContactSelected.contctPhoneList.splice(index,1);
		}else if(type=='dates'){
			if($scope.showContactSelected.contctImportantDatesList[index].imortantDatesId !=0){
				$scope.showContactSelected.contctImportantDatesList[index].importantDatesIsDeleted=true;
				$scope.deleteList.push({objType:type,obj:$scope.showContactSelected.contctImportantDatesList[index]});
			}
			$scope.showContactSelected.contctImportantDatesList.splice(index,1);
		}else if(type=='email'){
			if($scope.showContactSelected.contactEmailList[index].emailId !=0){
				$scope.showContactSelected.contactEmailList[index].emailIsDeleted=true;
				$scope.deleteList.push({objType:type,obj:$scope.showContactSelected.contactEmailList[index]});
			}
			$scope.showContactSelected.contactEmailList.splice(index,1);
		}else if(type=='url'){
			if($scope.showContactSelected.contactUrlList[index].urlId !=0){
				$scope.showContactSelected.contactUrlList[index].urlIsDeleted=true;
				$scope.deleteList.push({objType:type,obj:$scope.showContactSelected.contactUrlList[index]});
			}
			$scope.showContactSelected.contactUrlList.splice(index,1);
		}else if(type=='association'){
			if($scope.showContactSelected.contactAssociationList[index].associationCDID !=0){
				$scope.showContactSelected.contactAssociationList[index].associtaionIsDeleted=true;
				$scope.deleteList.push({objType:type,obj:$scope.showContactSelected.contactAssociationList[index]});
			}
			$scope.showContactSelected.contactAssociationList.splice(index,1);
		}
		
		/*if($scope.showContactSelected.relatedNames.length==0){
			$scope.editModeOn=false;
		}*/
	};
	$scope.addArrayElement = function(type){
		var index=0;
		var prevIndex=0;
		if(type=='related'){
			if($scope.showContactSelected.contactRelatedNamesList == null){
				$scope.showContactSelected.contactRelatedNamesList=[];	
				$scope.masterRecord.contactRelatedNamesList=[];
			}
			if($scope.showContactSelected.contactRelatedNamesList.length !=0){
				index=$scope.showContactSelected.contactRelatedNamesList.length-1;
				if($scope.showContactSelected.contactRelatedNamesList[index].relatedNamesId == 0 || angular.equals($scope.showContactSelected.contactRelatedNamesList[index].entity,{})){
					ngToast.create({
						  className: 'warning',
						  content: '<span>Please complete last Related information \nthen only you can add next...</span>',
						  timeout: 3000,
						  animation:'fade'
						});
					return false;
				}
				
			}		
			$scope.showContactSelected.contactRelatedNamesList.push({entity:{},relatedNamesTypeDescription:"",relatedNames:"",relatedNamesTypeId:0,relatedNamesCDID:0,relatedNamesId:0});
		}else if(type=='phone'){
			if($scope.showContactSelected.contctPhoneList == null){
				$scope.showContactSelected.contctPhoneList=[];	
				$scope.masterRecord.contctPhoneList=[];
			}
			if($scope.showContactSelected.contctPhoneList.length !=0){
				index=$scope.showContactSelected.contctPhoneList.length-1;
				
				if($scope.showContactSelected.contctPhoneList[index].phone == "" || angular.equals($scope.showContactSelected.contctPhoneList[index].entity,{}) ){
					ngToast.create({
						  className: 'warning',
						  content: '<span>Please complete last Phone information \nthen only you can add next...</span>',
						  timeout: 3000,
						  animation:'fade'
						});
					return false;
				}
				
			}		
			$scope.showContactSelected.contctPhoneList.push({entity:{},phone:"",phoneId:0,phoneCDID:0,phoneAreaCode:"",phoneTypeDescription:"",phoneCountry:"",phoneLocalNumber:"",phoneTypeId:0,phoneExtension:"",phoneEntityId:0});
		}else if(type=='dates'){
			
			if($scope.showContactSelected.contctImportantDatesList == null){
				$scope.showContactSelected.contctImportantDatesList=[];	
				$scope.masterRecord.contctImportantDatesList=[];
			}
			if($scope.showContactSelected.contctImportantDatesList.length !=0){
				index=$scope.showContactSelected.contctImportantDatesList.length-1;
				if($scope.showContactSelected.contctImportantDatesList[index].importantDates == "" || angular.equals($scope.showContactSelected.contctImportantDatesList[index].entity,{})){
					ngToast.create({
						  className: 'warning',
						  content: '<span>Please complete last Date information \nthen only you can add next...</span>',
						  timeout: 3000,
						  animation:'fade'
						});
					return false;
				}
				
			}	
			$scope.showContactSelected.contctImportantDatesList.push({entity:{},importantDatesTypesDescription:"",importantDatesId:0,importantTypeId:0,importantDates:"",importantDatesCDID:0});
		}else if(type=='email'){
			if($scope.showContactSelected.contactEmailList == null){
				$scope.showContactSelected.contactEmailList=[];		
				$scope.masterRecord.contactEmailList=[];
				
			}
			if($scope.showContactSelected.contactEmailList.length !=0){
				index=$scope.showContactSelected.contactEmailList.length-1;
				if($scope.showContactSelected.contactEmailList[index].email == "" || angular.equals($scope.showContactSelected.contactEmailList[index].entity,{})){
					ngToast.create({
						  className: 'warning',
						  content: '<span>Please complete last Email information \nthen only you can add next...</span>',
						  timeout: 3000,
						  animation:'fade'
						});
					return false;
				}
				
			}	
			$scope.showContactSelected.contactEmailList.push({entity:{},emailCDID:0,emailId:0,email:"",emailTypeId:0,emailTypeDescription:""});
		}else if(type=='url'){
			if($scope.showContactSelected.contactUrlList == null){
				$scope.showContactSelected.contactUrlList=[];	
				$scope.masterRecord.contactUrlList=[];
			}
			if($scope.showContactSelected.contactUrlList.length !=0){
				index=$scope.showContactSelected.contactUrlList.length-1;
				if($scope.showContactSelected.contactUrlList[index].url == "" || angular.equals($scope.showContactSelected.contactUrlList[index].entity,{})){
					ngToast.create({
						  className: 'warning',
						  content: '<span>Please complete last Url information \nthen only you can add next...</span>',
						  timeout: 3000,
						  animation:'fade'
						});
					return false;
				}
				
			}	
			$scope.showContactSelected.contactUrlList.push({url:"",entity:{},urlTypeId:0,urlId:0,urlCDID:0,urlTypeDescription:""});
		}else if(type=='association'){
			if($scope.showContactSelected.contactAssociationList == null){
				$scope.showContactSelected.contactAssociationList=[];
				$scope.masterRecord.contactAssociationList=[];
			}
			if($scope.showContactSelected.contactAssociationList.length !=0){
				index=$scope.showContactSelected.contactAssociationList.length-1;
				if($scope.showContactSelected.contactAssociationList[index].associationId == 0 || angular.equals($scope.showContactSelected.contactAssociationList[index].entity,{"entityDetailsId":0,"entityCompanyList":null,"entityDetailsTypeId":0,"entityDeatilsDescription":""})){
					ngToast.create({
						  className: 'warning',
						  content: '<span>Please complete last Association information \nthen only you can add next...</span>',
						  timeout: 3000,
						  animation:'fade'
						});
					return false;
				}
				
			}	
			$scope.showContactSelected.contactAssociationList.push({entity:{"entityDetailsId":0,"entityCompanyList":null,"entityDetailsTypeId":0,"entityDeatilsDescription":""},associationId:0,associationTypeId:0,associationTypeDescription:"",associationCDID:0,associationName:"",associtaionIsDeleted:false});
		}else if(type=='address'){
			if($scope.showContactSelected.contactAddressList == null){
				$scope.showContactSelected.contactAddressList=[];	
				$scope.masterRecord.contactAddressList=[];
			}
			if($scope.showContactSelected.contactAddressList.length !=0){
				index=$scope.showContactSelected.contactAddressList.length-1;
				if($scope.showContactSelected.contactAddressList[index].addressSummary == "" || $scope.showContactSelected.contactAddressList[index].addressSummary == "" || angular.equals($scope.showContactSelected.contactAddressList[index].entity,{})){
					ngToast.create({
						  className: 'warning',
						  content: '<span>Please complete last Address information \nthen only you can add next...</span>',
						  timeout: 3000,
						  animation:'fade'
						});
					return false;
				}
				
			}		
			$scope.showContactSelected.contactAddressList.push({entity:{},adreessId:0,addressState:"",addressIsDeleted:false,addressLine1:"",addressLine2:"",addressCountry:"",addressPinCode:"",addressCity:"",addressCDID:0,addressSummary:"",addressTypeDescription:"",addressTypeId:0,addressEntityID:0});
		}
		
		
	};
	
	$scope.showAddressPopup = function(type,index){
		if(angular.equals($scope.showContactSelected.contactAddressList[index].entity,{})){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Please select  Adress related dropdown information \nthen only you can proceed...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			return false;
		}
		var myType=type;
		/*if(myType == 'new'){
			if($scope.showContactSelected.contactAddressList == null){
				$scope.showContactSelected.contactAddressList=[];
				$scope.masterRecord.contactAddressList=[];
			}
			if($scope.showContactSelected.contactAddressList.length !=0){
				index=$scope.showContactSelected.contactAddressList.length-1;
				if($scope.showContactSelected.contactAddressList[index].associationId == 0 || angular.equals($scope.showContactSelected.contactAddressList[index].entity,{"entityDetailsId":0,"entityCompanyList":null,"entityDetailsTypeId":0,"entityDeatilsDescription":""})){
					ngToast.create({
						  className: 'warning',
						  content: '<span>Please complete previous Adress information \nthen only you can add next...</span>',
						  timeout: 3000,
						  animation:'fade'
						});
					return false;
				}
				
			}
		}*/
		$modal.open({
			template :'<div id="CMAddressPopup" ng-init="init()" class="purpleaid"> <div class="grayBG"> <div class="container contacts_managerUserForm"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Address Details</span> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">Address&nbsp;Line1</span> </div> <div class=" col-md-9"> <input type="text" class="form-control input-sm" id="caddressline1" name="caddressline1" allow-address required value="{{showAddressSelected.addressLine1}}" ng-model="showAddressSelected.addressLine1" onclick="Purplevalidator(\'caddressline1\',2,\'CMAddressPopup\',\' \')" onfocus="Purplevalidator(\'caddressline1\',2,\'CMAddressPopup\',\'\')"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">Address&nbsp;Line2</span> </div> <div class=" col-md-9"> <input type="text" class="form-control input-sm" id="caddressline2" name="caddressline2" allow-address value="{{showAddressSelected.addressLine2}}" ng-model="showAddressSelected.addressLine2"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">City</span> </div> <div class=" col-md-9"> <input type="text" class="form-control input-sm" id="city" name="city" allow-text required value="{{showAddressSelected.addressCity}}" ng-model="showAddressSelected.addressCity" onclick="Purplevalidator(\'city\',2,\'CMAddressPopup\',\' \')" onfocus="Purplevalidator(\'city\',2,\'CMAddressPopup\',\'\')"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">State</span> </div> <div class=" col-md-9"> <input type="text" class="form-control input-sm" required id="state" name="state" allow-text value="{{showAddressSelected.addressState}}" ng-model="showAddressSelected.addressState" onclick="Purplevalidator(\'state\',2,\'CMAddressPopup\',\' \')" onfocus="Purplevalidator(\'state\',2,\'CMAddressPopup\',\'\')"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">Pin&nbsp;Code</span> </div> <div class=" col-md-9"> <input type="text" class="form-control input-sm" required id="pincode" name="pincode" allow-numbers value="{{showAddressSelected.addressPinCode}}" ng-model="showAddressSelected.addressPinCode" onclick="Purplevalidator(\'pincode\',2,\'CMAddressPopup\',\' \')" onfocus="Purplevalidator(\'pincode\',2,\'CMAddressPopup\',\'\')"> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">Country</span> </div> <div class=" col-md-9"> <select class="form-control input-sm " ng-options="opt.countryName as opt.countryName for opt in countryList" ng-model="showAddressSelected.addressCountry"></select> </div> </div> <div class="row fields_headingSpacing textRight fieldsBot_Spacing_lg"> <button class="btn canclebtnSize" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" ng-click="submit()">OK</button> </div> </div> </div> </div><script type="text/javascript">$(document).ready(function() {$("#caddressline1").keypress(function() {$("#caddressline1").css("background-color", "white");});$("#city").keypress(function() {$("#city").css("background-color", "white");});$("#pincode").keypress(function() {$("#pincode").css("background-color", "white");});$("#state").keypress(function() {$("#state").css("background-color", "white");});});</script> ', 
			controller :'CMAddressPopupCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'peopleManager_addressSetting-Modal',
			resolve:{
				popuptype:function(){
					return myType;
				},
				objIndex:function(){
					return index;
				}
			}
		}).result.then(function(result) {
			
			
		});
	};
	
	$scope.showAssociationPopup = function(type,index){
		if(typeof type === "undefined"){
			alert('Please select type first!!');
			return false;
		}
		var myType=type;
		$modal.open({
			template :'<div id="CMAssociationPopup"  ng-init="init()" class="purpleaid"> <div class="grayBG"> <div class="container contacts_managerUserForm"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Association Details</span> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Details</span> </h5> <hr class="horizontal_line"> </div> <div ng-show="showCompany" class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">Company</span> </div> <div class=" col-md-9"> <select class="form-control input-sm" ng-options="opt.companyId as opt.companyName for opt in companyList" ng-model="masterId"></select> </div> </div> <div ng-show="showSupplier" class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">Supplier</span> </div> <div class=" col-md-9"> <select class="form-control input-sm " ng-options="opt.supplierId as opt.supplierName for opt in supplierList | supplierFilter:{companyId:masterId}" ng-model="child1Id"></select> </div> </div> <div ng-show="showDivision" class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">Division</span> </div> <div class=" col-md-9"> <select class="form-control input-sm " ng-options="opt.divisionId as opt.divisionName for opt in divisionList | divisionFilter:{companyId:masterId}" ng-model="child2Id"></select> </div> </div> <div ng-show="showCustomer" class="row fieldsSpacing"> <div class=" col-md-3"> <span class="control-label">Customer</span> </div> <div class=" col-md-9"> <select class="form-control input-sm " ng-options="opt.divisionName for opt in customerList" ng-model="child3Id"></select> </div> </div> <div class="row fields_headingSpacing textRight fieldsBot_Spacing_lg"> <button class="btn canclebtnSize" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" ng-click="submit()">OK</button> </div> </div> </div> </div> ', 
			controller :'CMAssociationPopupCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'peopleManager_addressSetting-Modal',
			resolve:{
				popuptype:function(){
					return myType;
				},
				objIndex:function(){
					return index;
				}
			}
		}).result.then(function(result) {
			
			
		});
	};
	
	$scope.showFilterPopup = function(){
		$modal.open({
			template :'<div id="CMFilterPopup" ng-controller="CMFilterCtrl" class="" ng-init=init()> <div class="container lightBox_masterPrductFilter"> <div class="row topblueStrip "> <h6> <span class="topblueStripText">FILTERS</span> </h6> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Username</span> </div> <div class=" col-md-7"> <input id="" type="text" class="form-control productFilterIP_size input-sm" ng-model="filter.userName" value={{filter.userName}}> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Contact&nbsp;Name</span> </div> <div class=" col-md-7"> <input id="" type="text" class="form-control productFilterIP_size input-sm" ng-model="filter.contactName" value={{filter.contactName}}> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">City</span> </div> <div class=" col-md-7"> <input id="" type="text" class="form-control productFilterIP_size input-sm" ng-model="filter.contactCity" value={{filter.contactCity}}> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Phone</span> </div> <div class=" col-md-7"> <input type="text" class="form-control productFilterIP_size input-sm" ng-model="filter.contactPhone" value={{filter.contactPhone}}> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Email</span> </div> <div class=" col-md-7"> <input type="text" class="form-control productFilterIP_size input-sm" ng-model="filter.contactEmail" value={{filter.contactEmail}}> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Url</span> </div> <div class=" col-md-7"> <input type="text" class="form-control productFilterIP_size input-sm" ng-model="filter.contactURL" value={{filter.contactURL}}> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Date</span> </div> <div class=" col-md-7"> <input type="text" class="form-control productFilterIP_size input-sm" ng-model="filter.contactDate" value={{filter.contactDate}}> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">HQ</span> </div> <div class=" col-md-7"> <input type="text" class="form-control productFilterIP_size input-sm" ng-model="filter.contactHQ" value={{filter.contactHQ}}> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Area</span> </div> <div class=" col-md-7"> <select class="productFilterIP_size input-sm" ng-options="opt.areaID as opt.areaDescription for opt in areaList " ng-model="filter.contactArea"> </select> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Route</span> </div> <div class=" col-md-7"> <select class="productFilterIP_size input-sm" ng-options="opt.routeID as opt.routeDescription for opt in routeList" ng-model="filter.contactRoute"> </select> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class=" col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Label</span> </div> <div class=" col-md-7"> <input type="text" class="form-control productFilterIP_size input-sm" ng-model="filter.contactLabel" value={{filter.contactLabel}}> </div> </div> </div> </div> <div class="row fieldsTop_Spacing"> <div class="col-md-12"> <span> <input type="checkbox" ng-model="filter.contactMyFavoriteFlag" ng-value={{filter.contactMyFavoriteFlag}}> <span class="chechBox_lablePos">My&nbsp;Favorites</span> </span> <span class=""> <input type="checkbox" ng-model="filter.contactMyContactFlag" ng-value={{filter.contactMyContactFlag}}> <span class="chechBox_lablePos">My&nbsp;Contacts</span> </span> </div> </div> <div class="row fieldsTop_Spacing"> <div class="col-md-12"> <span class="" style="margin-right: 4px;"> <input type="checkbox" ng-model="filter.contactSystemUserFlag" ng-value={{filter.contactSystemUserFlag}}> <span class="chechBox_lablePos">System&nbsp;User</span> </span> <span> <input type="checkbox" ng-model="filter.userLock" ng-value={{filter.userLock}}> <span class="chechBox_lablePos">User&nbsp;Lock</span> </span> </div> </div> </div> <div class="row fieldsTop_Spacing "> <div class=" col-md-3" style="margin-left: 13px;"> <a ng-click="clearAllFilters();" title="Remove Product" class="">CLEAR&nbsp;ALL</a> </div> </div> <div class="row fieldsTop_Spacing fieldsBot_Spacing"> <div class=" col-md-3"> <span> <div class=" col-md-5 ContactsManager_FilterBtnPos"> <button type="button" ng-click="cancel()" class="canclebtnSize">Cancel</button> </div> <div class=" col-md-5 "> <button type="button" ng-click="submit(filter)" class="okbtnSize">OK</button> </div> </span> </div> </div> </div> ' , 
			controller :'CMFilterCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'peopleManager-Filter'/*,
			resolve:{
				popuptype:function(){
					return myType;
				},
				objIndex:function(){
					return index;
				}
			}*/
		}).result.then(function(result) {
			
			
		});
	};
	
	$scope.cancelFilter = function(){
		$scope.filter={"contactCity":"","contactPhone":"","contactEmail":"","contactURL":"","contactDate":"","contactHQ":"","contactLabel":"","contactArea":0,"contactRoute":0,"contactMyFavoriteFlag":false,"contactSystemUserFlag":false,"userName":"","userLock":false,"contactName":"","contactMyContactFlag":false};
		$scope.filterStatus='OFF';		
		$scope.onMixTypeSelection($scope.mixTypeSelected);
	};
	
	$scope.showUserSettingsPopup = function(){
		if(typeof $scope.showContactSelected.contactId === "undefined"){
			alert('Please save the contact then only you will get access to this service!!');
			return false;
		}
		//ng-controller="UserSettingsCtrl"
		$modal.open({
			template :' <div id="UserSettingsPopup" ng-controller="UserSettingsCtrl" class="purpleaid"> <div class="grayBG" ng-init=init();> <div class="container contacts_managerUserForm"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText"> User Setting</span> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class=" col-md-4"> <span class="control-label">User Id</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="1" ng-model="contact.contactUserName" value={{contact.contactUserName}}> </div> </div> <div class="row fieldsSpacing"> <div class=" col-md-4"> <span class="control-label">Password</span> </div> <div class=" col-md-8"> <input type="password" class="form-control input-sm" tabindex="2" ng-model="contact.contactUserPassward" value={{contact.contactUserPassward}}> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <span class="control-label">Conform&nbsp;Password</span> </div> <div class="col-md-8"> <input type="password" class="form-control input-sm" tabindex="3" ng-model="confirmPass" value={{confirmPass}}> </div> </div> <div class="row"> <div class="col-md-12 textRight"> <input type="checkbox" ng-model="contact.contactUserLock" tabindex="4" ng-value={{contact.contactUserLock}}> <span>Lock</span> </div> </div> <div class="row fields_headingSpacing textRight fieldsBot_Spacing_lg"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="5" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="6" ng-click="submit()">Ok</button> </div> </div> </div> </div> </div> ',
			controller :'UserSettingsCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'peopleManager_userSetting-Modal'/*,
			resolve:{
				popuptype:function(){
					return myType;
				},
				objIndex:function(){
					return index;
				}
			}*/
		}).result.then(function(result) {
			
			
		});
	};
	
	
	$scope.saveContact = function(){
		$scope.spinner=true;
		debugger;
		var a=peopleManagerValidate();
		   if(a==false)
		    {
			 $scope.spinner=false;
		     return false;
		    }
		var saveType = "modify";
		if(typeof $scope.showContactSelected.contactId === "undefined" ){
			$scope.showContactSelected.contactId=0;
			saveType="new";
		}
		var flag=true;
		var dataFlag=true;
		if($scope.showContactSelected.contactAddressList == null){
			$scope.showContactSelected.contactAddressList=[];
			$scope.masterRecord.contactAddressList=[];
		}
		if($scope.showContactSelected.contactEmailList == null){
			$scope.showContactSelected.contactEmailList=[];
			$scope.masterRecord.contactEmailList=[];
		}else{
			var regex=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			for(i=0;i<$scope.showContactSelected.contactEmailList.length;i++){
				if($.trim($scope.showContactSelected.contactEmailList[i].email).length == 0 || angular.equals($scope.showContactSelected.contactEmailList[i].entity,{}) || !regex.test($scope.showContactSelected.contactEmailList[i].email)){
					flag=false;
					dataFlag=false;
				}
			}	
			if(!dataFlag){
				ngToast.create({
					  className: 'warning',
					  content: '<span>Please insert valid email Field...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				dataFlag=true
			}
		}
		if($scope.showContactSelected.contactRelatedNamesList == null){
			$scope.showContactSelected.contactRelatedNamesList=[];
			$scope.masterRecord.contactRelatedNamesList=[];
		}else{
			for(i=0;i<$scope.showContactSelected.contactRelatedNamesList.length;i++){
				if($scope.showContactSelected.contactRelatedNamesList[i].relatedNamesId == 0 || angular.equals($scope.showContactSelected.contactRelatedNamesList[i].entity,{})){
					
					flag=false;
					dataFlag=false
				}
			}
			if(!dataFlag){
				ngToast.create({
					  className: 'warning',
					  content: '<span>Please select all information of RelatedNames Field...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				dataFlag=true
			}
			
		}
		if($scope.showContactSelected.contactUrlList == null){
			$scope.showContactSelected.contactUrlList=[];
			$scope.masterRecord.contactUrlList=[];
		}else{
		var	regex=/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
			for(i=0;i<$scope.showContactSelected.contactUrlList.length;i++){
			
				if($.trim($scope.showContactSelected.contactUrlList[i].url).length==0 || angular.equals($scope.showContactSelected.contactUrlList[i].entity,{}) || !regex.test($scope.showContactSelected.contactUrlList[i].url)){


					flag=false;
					dataFlag=false;
				}
			}
			if(!dataFlag){
				ngToast.create({
					  className: 'warning',
					  content: '<span>Please insert valid URL Field...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				dataFlag=true;
			}
		}
		if($scope.showContactSelected.contctImportantDatesList == null){
			$scope.showContactSelected.contctImportantDatesList=[];
			$scope.masterRecord.contctImportantDatesList=[];
		}else{
			var regex=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
			for(i=0;i<$scope.showContactSelected.contctImportantDatesList.length;i++){
				if($scope.showContactSelected.contctImportantDatesList[i].importantDates == "" || !regex.test($scope.showContactSelected.contctImportantDatesList[i].importantDates)){
					flag=false;
					dataFlag=false;
				}
			}
			if(!dataFlag){
				ngToast.create({
					  className: 'warning',
					  content: '<span>Please insert valid Date...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				dataFlag=true;
			}
		}
		if($scope.showContactSelected.contctPhoneList == null){
			$scope.showContactSelected.contctPhoneList=[];
			$scope.masterRecord.contctPhoneList=[];
		}else{
			for(i=0;i<$scope.showContactSelected.contctPhoneList.length;i++){
				
				if($.trim($scope.showContactSelected.contctPhoneList[i].phone).length<6 ){
					flag=false;
					dataFlag=false;
				}
			}
			if(!dataFlag){
				ngToast.create({
					  className: 'warning',
					  content: '<span>Please insert valid Number...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				dataFlag=true;
			}
		}
		if($scope.showContactSelected.contactAssociationList == null){
			$scope.showContactSelected.contactAssociationList=[];
			$scope.masterRecord.contactAssociationList=[];
		}else{
			for(i=0;i<$scope.showContactSelected.contactAssociationList.length;i++){
				if($scope.showContactSelected.contactAssociationList[i].associationName == ""){
					flag=false;
				}
			}
		}
		
		if(flag==false){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Please complete all Miscellaneous information \nthen only you can proceed to save this record...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			$scope.spinner=false;
			return false;
		}
		
		/////////////////////////////////===fORMAT vALIDATIONS FOR dATA TYPE======
	
		
		
		
		
		//////////////====Validation code if list informations are null or empty=======////////
		for(i=0;i<$scope.deleteList.length;i++){ 
			if($scope.deleteList[i].objType == "phone"){
				var obj=$scope.deleteList[i].obj;
				//delete obj.$$hashKey;
				$scope.showContactSelected.contctPhoneList.push(obj);
			}
			if($scope.deleteList[i].objType == "address"){
				var obj=$scope.deleteList[i].obj;
				//delete obj.$$hashKey;
				$scope.showContactSelected.contactAddressList.push(obj);
			}
			if($scope.deleteList[i].objType == "related"){
				var obj=$scope.deleteList[i].obj;
				//delete obj.$$hashKey;
				$scope.showContactSelected.contactRelatedNamesList.push(obj);
			}
			if($scope.deleteList[i].objType == "dates"){
				var obj=$scope.deleteList[i].obj;
				//delete obj.$$hashKey;
				$scope.showContactSelected.contctImportantDatesList.push(obj);
			}
			if($scope.deleteList[i].objType == "email"){
				var obj=$scope.deleteList[i].obj;
				//delete obj.$$hashKey;
				$scope.showContactSelected.contactEmailList.push(obj);
			}
			if($scope.deleteList[i].objType == "url"){
				var obj=$scope.deleteList[i].obj;
				//delete obj.$$hashKey;
				$scope.showContactSelected.contactUrlList.push(obj);
			}
			if($scope.deleteList[i].objType == "association"){
				var obj=$scope.deleteList[i].obj;
				//delete obj.$$hashKey;
				$scope.showContactSelected.contactAssociationList.push(obj);
			}
		}
		
		if(typeof $scope.showContactSelected.contactTypeId === "undefined"){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Please select ContactType Field...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			$scope.spinner=false;
			return false;
		}
		var json1=angular.toJson($scope.showContactSelected);
		
		var json={entity:1,entityId:0,listType:3,requestData:json1,
				userId:$scope.activeUser.userId,token:$scope.activeUser.token,companyId:0,grDate:0};
		//HTTP CALL FOR GETTING CompanyList enclosed division 
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiPeople/setPeople",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				angular.copy(respData,$scope.showContactSelected);
				if(!angular.equals($scope.masterRecord,respData)){
					angular.copy(respData,$scope.masterRecord)
				}
				if(saveType == 'new' ){
					respData.contactFullName=respData.contactFirstName+' '+respData.contactLastName;
					w2ui.grid.records.push(respData);
					$scope.allContactList.push(respData);
					w2ui.grid.refresh();
					//w2ui.grid.select(respData.recid);
				}
				
				/*$scope.showContactSelected={}
				angular.copy(respData,$scope.showContactSelected);
				angular.copy(respData,$scope.masterRecord);*/
				
				if(saveType != 'new'){
					var ob=$.grep(w2ui.grid.records,function(e){return e.recid == $scope.showContactSelected.recid;})[0];
					var ind=w2ui.grid.records.indexOf(ob);
					angular.copy($scope.showContactSelected,w2ui.grid.records[ind]);
					ob=$.grep($scope.allContactList,function(e){return e.contactId == $scope.showContactSelected.contactId;})[0];
					ind=$scope.allContactList.indexOf(ob);
					angular.copy($scope.showContactSelected,$scope.allContactList[ind]);
					w2ui.grid.refresh();
				}
				
				$scope.deleteList=[];
				w2ui['grid'].columnClick('contactFullName', event);
				w2ui['grid'].columnClick('contactFullName', event);
				ngToast.create({
					  className: 'success',
					  content: '<span>Data Saved successfully...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				
				$scope.spinner=false;
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
				$scope.spinner=false;
			}
        }).error(function(data, status, headers, config) { 
        	$scope.spinner=false;
        	return false;
        	
        });
	};
	
	$scope.newContact = function(){
		$scope.isNew=true;
		$scope.showContactSelected={};
		$scope.masterRecord={};
		w2ui.grid.selectNone();
		$("#first_name").css("background-color", "white");
		$("#last_name").css("background-color", "white");
		$("#contact_type").css("background-color", "white");
		
	};
	
	$scope.updateGridData = function(){
		$scope.spinner=true;
//////////////Config and Grid load ends
		if(typeof $scope.listLimit == "undefined" || typeof $scope.listLimit != "undefined" && $scope.listLimit == 0){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Please insert valid LIMIT VALUE...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			$scope.spinner=false;
			return false;
		}
		var json={entity:1,entityId:0,listType:1,requestData:"",
				userId:$scope.activeUser.userId,token:$scope.activeUser.token,lastID:$scope.lastMaxId,listLimit:$scope.listLimit,contactTypeId:$scope.mixTypeSelected.entityDetailsId,userName:$scope.filter.userName,userLock:$scope.filter.userLock,contactMyFavoriteFlag:$scope.filter.contactMyFavoriteFlag,contactArea:$scope.filter.contactArea,contactRoute:$scope.filter.contactRoute,contactHQ:$scope.filter.contactHQ,contactLabel:$scope.filter.contactLabel,contactName:$scope.filter.contactName,contactPhone:$scope.filter.contactPhone,contactURL:$scope.filter.contactURL,contactCity:$scope.filter.contactCity,contactEmail:$scope.filter.contactEmail,contactMyContactFlag:$scope.filter.contactMyContactFlag,contactDate:$scope.filter.contactDate}//Date ignored;contacttypeId n entityDetails are same//HTTP CALL FOR GETTING CompanyList enclosed division 
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiPeople/getPeople",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				if(data.responseData == null ){
					data.responseData=[];
				}
				if(respData.cList.length != 0 ){
					angular.copy(w2ui.grid.records.concat(respData.cList),w2ui.grid.records);
					w2ui.grid.refresh();
					w2ui['grid'].columnClick('contactFullName', event);
					w2ui['grid'].columnClick('contactFullName', event);
					$scope.lastMaxId=respData.maxId;
				}
				$scope.firstCall=false;
				$scope.spinner=false;
				ngToast.create({
					  className: 'success',
					  content: '<span>Data Updated successfully...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				//$scope.onCompanySelection($scope.showCompanyList[0]);
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) { 
        	$scope.spinner=false;
        	return false;
        });
	};
	
	$scope.showUploadImgPopup = function(){
		$modal.open({
			template :' <div id="CMImageUploadPopup" class="purpleaid"> <div class="grayBG" ng-init=init();> <div class="container contacts_managerUserForm"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText"> User Setting</span> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <!-- <div class="col-md-6"> --> <img ng-show="picFile" id="blah" src="#" alt="your image" /> <img ng-show="picFile" id="blah1" src="#" alt="your image" /> <!-- </div> <div class="col-md-6"> <img ng-show="picFile" id="blah1" class="" src="#" alt="your image" /> </div> --> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <span class="control-label">Choose&nbsp;File</span> </div> <div class="col-md-8"> <input type="file" ngf-select="" ng-model="picFile" name="file" onchange="readURL(this);" accept="image/*" required=""> </div> </div> <div class="row fields_headingSpacing textRight fieldsBot_Spacing_lg"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="5" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="6" ng-click="submit()">Ok</button> </div> </div> </div> </div> </div> ', 
			controller :'CMImageUploadCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'peopleManager_userSetting-Modal'/*,
			resolve:{
				popuptype:function(){
					return myType;
				},
				objIndex:function(){
					return index;
				}
			}*/
		}).result.then(function(result) {
			
			
		});
	};
	
	 $scope.confirmFunction=function(scope,ngToast) {
		 debugger;
	    var txt;
	    var r = confirm("Your prev record contains some changes ...Press Ok to Save and cancel to discard");
	    if (r == true) {    
	       alert('Recrod saved!!');
	       $scope.saveContact($scope.showContactSelected);
	    } else {
	       alert('Record changes discarded!!');
	    }
	    
	};
	
	$scope.deleteContact=function() {
		if(typeof $scope.showContactSelected.contactId === "undefined" || typeof $scope.showContactSelected.contactId !== "undefined" && $scope.showContactSelected.contactId==0){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Delete not allowed untill you save the records...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			return false;
			
		}
		
		var json={entity:3,entityId:$scope.showContactSelected.contactId,listType:1,requestData:"",
				userId:$scope.activeUser.userId,token:$scope.activeUser.token}//Date ignored;contacttypeId n entityDetails are same//HTTP CALL FOR GETTING CompanyList enclosed division 
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiPeople/setPeople",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var index=0;
				var obj=$.grep(w2ui.grid.records,function(e){return e.contactId ==$scope.showContactSelected.contactId; })[0];
				if(typeof obj !=="undefined"){
					index=w2ui.grid.records.indexOf(obj);
					w2ui.grid.records.splice(index,1);
					w2ui.grid.refresh();
				}
				obj=$.grep($scope.allContactList,function(e){return e.contactId ==$scope.showContactSelected.contactId; })[0];
				if(typeof obj !=="undefined"){
					index=$scope.allContactList.indexOf(obj);
					$scope.allContactList.splice(index,1);
				}
				$scope.showContactSelected={};
				$scope.masterRecord={};
				ngToast.create({
					  className: 'success',
					  content: '<span>Delete successfull...!</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) { 
        	$scope.spinner=false;
        	return false;
        });
		 
		 
		 
		 
		 
	};
	
	
	$scope.refreshAll = function(){
		location.reload();
	};
	
	$scope.getSocialClass=function(type){
		if(typeof $scope.showContactSelected ==="undefined" ){
			return 'not_implemented_link not_active';
		}
		if(!$scope.editable){
			return 'not_implemented_link not_active';
		}
		
		var returnClass='';
		
		switch(type){
			case 'twitter':
							if(typeof $scope.showContactSelected.contactTwitterUrl ==="undefined"){
								returnClass = 'disableWithoutData';
							}else{
								if($scope.showContactSelected.contactTwitterUrl == null || $scope.showContactSelected.contactTwitterUrl.length==0){
									returnClass = 'editableWithoutData';
								}else{
									returnClass = 'editableWithData';
								}
							}
							break;
							
			case 'facebook':
							if(typeof $scope.showContactSelected.contactFacebookUrl ==="undefined"){
								returnClass = 'disableWithoutData';
							}else{
								if($scope.showContactSelected.contactFacebookUrl == null || $scope.showContactSelected.contactFacebookUrl.length==0){
									returnClass = 'editableWithoutData';
								}else{
									returnClass = 'editableWithData';
								}
							}
							break;
			case 'linkedin':
							if(typeof $scope.showContactSelected.contactLinkedinUrl ==="undefined"){
								returnClass = 'disableWithoutData';
							}else{
								if($scope.showContactSelected.contactLinkedinUrl == null || $scope.showContactSelected.contactLinkedinUrl.length==0){
									returnClass = 'editableWithoutData';
								}else{
									returnClass = 'editableWithData';
								}
							}
							break;
			
			default:
			break;
		}
		return returnClass;
	};
	
	$scope.socialMediaPopup=function(){
		if(typeof $scope.showContactSelected ==="undefined" ){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Please select contact!</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			return false;
		}
		$modal.open({
			templateUrl: 'partials/popup/social_media.jsp',
			controller :'SocialMediaCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'SocialMediaPopup-Model',
			resolve:{
				contactSelected:function(){
					return $scope.showContactSelected;
				}
			}
		}).result.then(function(result) {
			if(typeof result !== "undefined"){
				$scope.showContactSelected.contactLinkedinUrl=result.contactLinkedinUrl;
				$scope.showContactSelected.contactFacebookUrl=result.contactFacebookUrl;
				$scope.showContactSelected.contactTwitterUrl=result.contactTwitterUrl;
			}
			
		});
		
	};
	$scope.showAdvancedSettingsPopup=function(){
		if(typeof $scope.showContactSelected.contactUserName ==="undefined" ||  typeof $scope.showContactSelected.contactUserName !=="undefined"&& $scope.showContactSelected.contactUserName == null || typeof $scope.showContactSelected.contactUserName !=="undefined"&&$scope.showContactSelected.contactUserName.length==0){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Please Set the user first then click here again to use this feature!</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			return false;
		}
		/*if(w2ui.grid.getSelection().length == 0){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Please Select contact first then click here again!</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			return false;
		}*/
		$modal.open({//ng-controller="AdvancedSettingsCtrl"
			//template :'<div  ng-init=init() id="AdvancedSettings" class="purpleaid" style="margin-left:5%"> <toast></toast> <div class="grayBG"> <div class="container contacts_managerAdvanceSettingForm"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Advance Setting</span> <img alt="" class="close_popupImage" tabindex="2" src="images/close_popup.png"> </h6> </div> <div class="row fieldsSpacing fieldsTop_Spacing"> <div class=" col-md-1"> <span class="control-label">User</span> </div> <div class=" col-md-3"> <select class="form-control input-sm input_rightSpecing" ng-options="opt.contactId as opt.contactFullName for opt in userNameList" ng-model="userSelectedId" ng-change="getUserData(userSelectedId)"> </select> </div> </div> <div class="row "> <div class="col-md-3"> <div class="row"> <h5> <span class="submenuBlue_heading">Roles</span> </h5> <hr class="horizontal_line"> </div> <div class="row contacts_managerUserPermission_showSelected"> <div class="col-md-12"> <nav class="mainnav"> <ul class="rightFloat_Menu" id="list-nav"> <li><a ng-click="filterGrids(\'role\')">Show Selected(<span ng-class="roleFilterStatus == \'ON\'?\'highlight_purple\':\'\'">{{roleFilterStatus}}</span>)</a></li> </ul> </nav> </div> </div> <div class="row"> <div class="col-md-12"> <!--=============GRID========== --> <div id="grid4" tabindex="-1" class="contactsManager_AdvSetting_Grid"></div> <!--=============GRID========== --> </div> </div> </div> <div class="col-md-9"> <div class="row"> <h5> <span class="submenuBlue_heading">Permissions</span> </h5> <hr class="horizontal_line"> </div> <div class="row contacts_managerUserPermission_showSelected"> <div class="col-md-12"> <nav class="mainnav"> <ul class="rightFloat_Menu" id="list-nav"> <li><a ng-click="filterGrids(\'permisiion\')">Show Selected(<span ng-class="permissionFilterStatus == \'ON\'?\'highlight_purple\':\'\'">{{permissionFilterStatus}}</span>)</a></li> </ul> </nav> </div> </div> <div class="row"> <div class="col-md-12"> <!--=============GRID========== --> <div id="grid5" tabindex="-1" class="contactsManager_AdvSetting_Grid"></div> <!--=============GRID========== --> </div> </div> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="6" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="7" ng-click="save()">Save</button> </div> </div> </div> </div> </div> ' ,
			templateUrl: 'partials/utility/advanced_settings.jsp',
			controller :'AdvancedSettingsCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'AddvanceSettingPopup-Model',
			resolve:{
				uId:function(){
					return $scope.showContactSelected.recid;
				},
				pageId:function(){
					return angular.element('*[ng-app]').injector().get("configurable").pageId;
				}
			}
		}).result.then(function(result) {
			
			
		});
	};
	
}]);


pharmApp.filter('relatedDropdownFilter', function() {
    return function(items, entityDetailsId){
    	if(typeof entityDetailsId == "undefined" || items==null)
            return items;
    	else{
    		
	        var arrayToReturn = [];
	        for (var i = 0; i < items.length; i++) {
	            if (items[i].contactTypeId == entityDetailsId) {
	            	//console.log(''+items[i].supplierName);
	                arrayToReturn.push(items[i]);
	            }
	        }
	        return arrayToReturn;
        }
    };
});


function addressFormated(obj){
	var txt='';
	var comma=','
	if(typeof obj.addressLine1 !=="undefined" && obj.addressLine1 != ''){
		txt=txt+obj.addressLine1;
	}else{
		comma=' '
	}	
	if(typeof obj.addressLine2 !=="undefined" && obj.addressLine2 != ''){
		txt=txt+comma+''+ obj.addressLine2;
		comma=','
	}else{
		comma=' '
	}	
	if(typeof obj.addressCity !=="undefined" && obj.addressCity != ''){
		txt=txt+comma+''+ obj.addressCity;
		comma=','		
	}else{
		comma=' '
	}	
	if(typeof obj.addressPinCode !=="undefined" && obj.addressPinCode != '' || typeof obj.addressPinCode !=="undefined" && obj.addressPinCode != null ){
		txt=txt+' - '+obj.addressPinCode;
	}
	
	
	/*comma=',';
	if(obj.addressState == ''){
		comma='';
	}
	txt=txt+obj.addressState+''+comma;
	comma=',';
	if(obj.addressCountry == ''){
		comma='';
	}
	txt=txt+obj.addressCountry+''+comma;*/
	
	
	return txt;	
		
};




/*function mySort(input){
	 var array = [];
	    for(var objectKey in input) {
	        array.push(input[objectKey]);
	    }

	    array.sort(function(a, b){
	        a = parseInt(a[attribute]);
	        b = parseInt(b[attribute]);
	        return a - b;
	    });
	    return array;
};*/

function peopleManagerValidate(){
	 flag=true;
	 if($.trim($('#first_name').val()).length==0){
	  $("#first_name").css("background-color", "#fff4eb");
	  //create error message using tooltip
	  flag=false;
	 }
	 if($.trim($('#last_name').val()).length==0){
	  $("#last_name").css("background-color", "#fff4eb");
	  //create error message using tooltip
	  flag=false;
	 }
	 if(typeof angular.element(document.getElementById('ContactManager')).scope().showContactSelected.contactTypeId==="undefined"){
			$("#contact_type").css("background-color", "#fff4eb");
			flag=false;
		} 
	
	 return flag;
	}
