

function getGridRecords(){
	
	//Hard coded input which will be replaced by server call 
	var gridRec=[
					{ recid: 1, fname: 'John', lname: 'Doe', email: 'jdoe@gmail.com', sdate: '4/3/2012',recStatus:'R'},
					{ recid: 2, fname: 'Stuart', lname: 'Motzart', email: 'jdoe@gmail.com', sdate: '4/3/2012',recStatus:'R' },
					{ recid: 3, fname: 'Jin', lname: 'Franson', email: 'jdoe@gmail.com', sdate: '4/3/2012',recStatus:'R' },
					{ recid: 4, fname: 'Susan', lname: 'Ottie', email: 'jdoe@gmail.com', sdate: '4/3/2012',recStatus:'R' },
					{ recid: 5, fname: 'Kelly', lname: 'Silver', email: 'jdoe@gmail.com', sdate: '4/3/2012',recStatus:'R' },
					{ recid: 6, fname: 'Francis', lname: 'Gatos', email: 'jdoe@gmail.com', sdate: '4/3/2012',recStatus:'R' },
					{ recid: 7, fname: 'Mark', lname: 'Welldo', email: 'jdoe@gmail.com', sdate: '4/3/2012',recStatus:'R' },
					{ recid: 8, fname: 'Thomas', lname: 'Bahh', email: 'jdoe@gmail.com', sdate: '4/3/2012',recStatus:'R' },
					{ recid: 9, fname: 'Sergei', lname: 'Rachmaninov', email: 'jdoe@gmail.com', sdate: '4/3/2012',recStatus:'R' },
					{ recid: -1, fname: '...', lname: '', email: '', sdate: '',recStatus:'R' }
					
    ]
	
	return gridRec;
	
	
}

//servercall populated data for pass to grid records
//var ogGridRecs=getGridRecords(); 

//binding data to Grid Records(Rendering)
//renderTable(config.grid,ogGridRecs);

//function for rendering the data into grid with recStatus R
function renderTable(grid,recArray){
	grid.records=recArray;
};

//global array for storing deleted ids 
var deletedRecId=[];

//function for pushing ids to deletedRecId array
function setdeleteRow(recid){
	deletedRecId.push(recid);
	
};

//getSeparate records for updated and deleted and prepare JSON for passing to REST  for Database SAVE
function createJson(grid,deletedArray){
	var deleted=[];
	var updated=[];
	
	var recordsInGrid=grid.records;
	
	for (i = 0; i < recordsInGrid.length; i++){ 
		if(recordsInGrid[i].recStatus=='C' || recordsInGrid[i].recStatus=='U'){
			updated.push(recordsInGrid[i]);		
		};
	}
	
	var combine={deleted:deleted,updated:updated}
	
	var finalJson=JSON.stringify(combine);
	
};

//function 
function savePage(reqType,id,data){
	debugger;
	//Here ajax call will be added 
	$.ajax({
			type:reqType,
		    url:'' ,//,
		    data: data,
		    dataType: 'json',
		    contentType: "application/json; charset=utf-8",
		    success: function(result){
		    	
		    	
		    },
		   error:function(xhr, ajaxOptions, thrownError){
		    	console.log(xhr.responseText);
		    	alert("Error Occured "+xhr.responseText);
		    }
	});
};

//function
function updateServer(){};


