package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.ControlPanelMiscImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.ControlPanelMisc_IF;

public class Bl_ControlPanelMisc {

public String bl_getControlPanelMisc(PurpleaidRequest reqObj) throws Exception {
		
		ControlPanelMisc_IF interfaceref = null;
		interfaceref = new ControlPanelMiscImpl();
		String result = null;
		
		try{
			
			switch (reqObj.getEntity()) {
			
			case 1:	
					break;
			
			case 2:switch (reqObj.getListType()) {
					
					case 1: result = interfaceref.bl_getControlPanelMiscList(reqObj);
							break;
							
					case 2:result = interfaceref.bl_getDefaultRoleList(reqObj);
							break;
							
					
			}
			default:System.out.println("Default");
			break;
			}
			
		}catch(Exception e){
			
			throw new Exception(e.getMessage());
			
		}
		return result;
	}

	public String bl_setControlPanelMisc(PurpleaidRequest reqObj) throws Exception {
		
		ControlPanelMisc_IF interfaceref = null;
		interfaceref = new ControlPanelMiscImpl();
		String result = null;
		
		try{
			
			switch (reqObj.getEntity()) {
			
			case 1:	
					break;
			
			case 2:switch (reqObj.getListType()) {
					
					case 1: result = interfaceref.bl_setControlPanelMiscList(reqObj);
							break;
		
			}
			default:System.out.println("Default");
			break;
			}
			
		}catch(Exception e){
			
			throw new Exception(e.getMessage());
			
		}
		return result;
	}

}
