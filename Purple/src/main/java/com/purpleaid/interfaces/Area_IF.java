package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface Area_IF {

	String bl_setArea(PurpleaidRequest reqObj) throws Exception;

	String bl_getArea(int i);

	String bl_getAllAreaList(PurpleaidRequest reqObj) throws Exception;

	String bl_setAreaList(PurpleaidRequest requestData)throws Exception;

	
	

}
