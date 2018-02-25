function getPurpleObjIndex(source,criteria){

	var reultArray=akricksFilter(source,criteria);
	var n=0;
	n=reultArray.length;
	if(n>1){
		return 0;
	}else if(n==1){
		return source.indexOf(reultArray[0]); 
	}else if(n==0){
		return -1;//not found
	}
}

function akricksFilter(source, criteria) {
	return source.filter(function(obj) {
		return Object.keys(criteria).every(function(c) {
			return obj[c] == criteria[c];
		});
	});
}

function getPurpleObjArray(source,criteria){
	var resultArray=akricksFilter(source,criteria);
	return resultArray;
}