package com.purpleaid.bussinessLayer;


import com.purpleaid.Impl.AreaImpl;
import com.purpleaid.Impl.RegionImpl;
import com.purpleaid.Impl.RouteImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Area_IF;
import com.purpleaid.interfaces.Region_IF;
import com.purpleaid.interfaces.Route_IF;

public class Bl_Route {
	public String bl_getRoute(PurpleaidRequest reqObj) throws Exception{
		Route_IF interfaceRef = null;
		Area_IF areaInterface =null;
		Region_IF regionInterface = null;
		
		String result = null;
		try {
			interfaceRef =  new RouteImpl();
			areaInterface = new AreaImpl();
			regionInterface = new RegionImpl();
			
			result = null;
			switch(reqObj.getEntity()){
			
				case 1:	result=interfaceRef.bl_getRoute(0);	
						break;
				
				case 2: switch(reqObj.getListType()){
								
								case 1:	result=interfaceRef.bl_getAllRouteList(reqObj);
										break;	
								
								case 2:	result=interfaceRef.bl_getAllRouteList(reqObj);
										result=regionInterface.bl_getAllRegionList(reqObj);
										result=areaInterface.bl_getAllAreaList(reqObj);
										result="{\"routeList\":"+interfaceRef.bl_getAllRouteList(reqObj)+",\"areaList\":"+areaInterface.bl_getAllAreaList(reqObj)+",\"regionList\":"+regionInterface.bl_getAllRegionList(reqObj)+" }";
										break;
								/*case 2:interfaceRef.bl_getAllRouteList();	
								break;	*/
						};
						break;
						
			    default:System.out.println("Default");
			    		break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		
		
		
		return result;
	}
	
	public String bl_setRoute(PurpleaidRequest reqObj) throws Exception{
		Route_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new RouteImpl();
			switch(reqObj.getEntity()){
				case 1:		
					result=interfaceRef.bl_setRoute(reqObj);	
					break;
						
				case 2: switch(reqObj.getListType()){ 		
				
						case 1: interfaceRef.bl_setRouteList(reqObj);
			
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
