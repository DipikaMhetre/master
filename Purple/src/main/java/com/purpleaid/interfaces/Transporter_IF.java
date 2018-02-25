package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface Transporter_IF {
	//public String bl_getTransporter(double id);
	public String bl_getAllTransporterList(PurpleaidRequest reqObj) throws Exception;

	public String bl_setTransporter(PurpleaidRequest reqObj) throws Exception;
	//public String bl_setDivisionList(String requestData) throws Exception;
}
