package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.AreaImpl;
import com.purpleaid.Impl.RegionImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Area_IF;
import com.purpleaid.interfaces.Region_IF;


public class Bl_Area {
	public String bl_getArea(PurpleaidRequest reqObj) throws Exception{
		Area_IF interfaceRef = null;
		Region_IF regionInterface = null;
		
		interfaceRef =  new AreaImpl();
		regionInterface = new RegionImpl();
		
		String result = null;
		try {
			switch(reqObj.getEntity()){

				case 1:	result=interfaceRef.bl_getArea(0);	
				break;

				case 2: switch(reqObj.getListType()){

						case 1: result=interfaceRef.bl_getAllAreaList(reqObj);	
						
						//result="{\"areaList\":"+interfaceRef.bl_getAllAreaList()+",\"regionList\":"+regionInterface.bl_getAllRegionList()+"}";
								break;	
				
						case 2:	result="{\"areaList\":"+interfaceRef.bl_getAllAreaList(reqObj)+",\"regionList\":"+regionInterface.bl_getAllRegionList(reqObj)+"}";
								break;

					   /*case 3:interfaceRef.bl_getAllRouteList();	
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
	
	public String bl_setArea(PurpleaidRequest reqObj) throws Exception{
		Area_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new AreaImpl();
			switch(reqObj.getEntity()){
				case 1:		
					result=interfaceRef.bl_setArea(reqObj);	
					break;
						
				case 2: switch(reqObj.getListType()){ 		
				
						case 1: interfaceRef.bl_setAreaList(reqObj);
			
				}
				default:System.out.println("Default");
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
			
		return result;
	}
}
