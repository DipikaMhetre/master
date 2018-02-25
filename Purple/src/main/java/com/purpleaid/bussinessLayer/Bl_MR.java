package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.MRImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.MR_IF;


public class Bl_MR {
	public String bl_getMR(PurpleaidRequest reqObj) throws Exception{
		MR_IF interfaceRef = null;
		
		interfaceRef =  new MRImpl();
	
		String result = null;
		try {
			switch(reqObj.getEntity()){

				case 1:	result=interfaceRef.bl_getMR(0);	
				break;

				case 2: switch(reqObj.getListType()){

						case 1: result=interfaceRef.bl_getAllMRList();	
						
						//result="{\"areaList\":"+interfaceRef.bl_getAllAreaList()+",\"regionList\":"+regionInterface.bl_getAllRegionList()+"}";
								break;	
				
								/*case 2: result=interfaceRef.bl_getAllAreaList();	
								result=regionInterface.bl_getAllRegionList();	
								result="{\"areaList\":"+interfaceRef.bl_getAllAreaList()+",\"regionList\":"+regionInterface.bl_getAllRegionList()+"}";
								break;

				case 3:interfaceRef.bl_getAllRouteList();	
								break;	*/
				}

				default:;
				break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		
		
		
		return result;
	}
	
/*	public String bl_setArea(PurpleaidRequest reqObj) throws Exception{
		Area_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new AreaImpl();
			switch(reqObj.getEntity()){
				case 1:		
					result=interfaceRef.bl_setArea(reqObj.getRequestData());	
					break;
						
			    default:;
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
			
		return result;
	}*/
}
