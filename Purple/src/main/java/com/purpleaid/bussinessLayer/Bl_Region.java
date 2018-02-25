package com.purpleaid.bussinessLayer;
import com.purpleaid.Impl.RegionImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Region_IF;


public class Bl_Region {	
	public String bl_getRegion(PurpleaidRequest reqObj){
	Region_IF interfaceRef = null;
	
	interfaceRef = new RegionImpl();
	String result = null;
	switch(reqObj.getEntity()){
		
		case 1:	result=interfaceRef.bl_getRegion(0);	
				break;

		case 2: switch(reqObj.getListType()){
			
					case 1: result=interfaceRef.bl_getAllRegionList(reqObj);	
							
					break;	
			
					/*case 2:interfaceRef.bl_getAllRouteList();	
					break;	*/
				}
				
	    default:;
        break;
	}
	
	
	
	return result;
}

	

}
