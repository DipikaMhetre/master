package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface Route_IF {

	public String bl_getRoute(double id);
	public String bl_getAllRouteList(PurpleaidRequest reqObj) throws Exception;
	public String bl_setRoute(PurpleaidRequest reqObj) throws Exception;
	public String bl_setRouteList(PurpleaidRequest requestData)throws Exception;
	
}
