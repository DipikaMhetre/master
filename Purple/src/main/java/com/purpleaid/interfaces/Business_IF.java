package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface Business_IF {
	
	public String bl_getBusinessDetails(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_getLicenceList(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_setBusinessDetails(PurpleaidRequest reqObj) throws Exception;
	
	//public String bl_setBusinessLicence(PurpleaidRequest reqObj) throws Exception;

}
