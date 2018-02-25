package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.ControlPanelImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.ControlPanel_IF;

public class Bl_ControlPanel {
	
	public String bl_getControlPanel(PurpleaidRequest reqObj) throws Exception {
		
		ControlPanel_IF interfaceRef = null;
		interfaceRef = new ControlPanelImpl();
		String result = null;
		try{
			
				switch (reqObj.getEntity()) {
				case 1:
						break;
						
				case 2: switch (reqObj.getListType()) {
						case 1:result = interfaceRef.bl_getControlPanelList(reqObj);
								break;
					
				}
				default:
						break;
				}
			
		}catch(Exception e){
			
			throw new Exception(e.getMessage());
			
		}
		return result;
	}

	public String bl_setControlPanel(PurpleaidRequest reqObj) throws Exception {
		
		
		String result = null;
		ControlPanel_IF interfaceRef = null;
		
		try{
			interfaceRef = new ControlPanelImpl();
			switch (reqObj.getEntity()) {
			case 1:
					break;
					
			case 2: switch (reqObj.getListType()) {
					
					case 1:	result = interfaceRef.bl_setControlPanelList(reqObj);
							//result = interfaceRef.bl_setControlPanelList(reqObj.getRequestData());
							break;
				
					case 2:result = interfaceRef.bl_setDefaultList(reqObj);
						   break;
			}
			default:
					break;
			}
		
	}catch(Exception e){
		
		throw new Exception(e.getMessage());
		
	}
	return result;
	}

}
