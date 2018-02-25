package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface ControlPanel_IF {
	
	
	public String bl_getControlPanelList(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_setControlPanelList(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_setDefaultList(PurpleaidRequest reqObj) throws Exception ;




}
