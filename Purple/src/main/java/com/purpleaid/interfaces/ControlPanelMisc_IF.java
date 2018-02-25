package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface ControlPanelMisc_IF {
	
	public String bl_getControlPanelMiscList(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_getDefaultRoleList(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_setControlPanelMiscList(PurpleaidRequest reqObj) throws Exception;

}
