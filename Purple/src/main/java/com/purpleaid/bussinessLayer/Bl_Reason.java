package com.purpleaid.bussinessLayer;
import com.purpleaid.Impl.ReasonImpl;

import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.*;


public class Bl_Reason {

		public String bl_getReason (PurpleaidRequest reqObj) throws Exception {
			
			Reason_IF interfaceRef = null;
			String result = null;
		
			try
			{
				
				interfaceRef = new ReasonImpl();
				result = null;
				
				switch (reqObj.getEntity()) {
				case 1:
					break;
						
				case 2: switch (reqObj.getListType()) {
						
						case 1:result = interfaceRef.bl_getAllReason(reqObj);
							   break;

						case 2:result = interfaceRef.bl_getReasonList(reqObj);
						   break;
						
						default:System.out.println("default");
								break;
				}

				default:System.out.println("default");
						break;
				}
				
				
				
			}catch(Exception e){
				throw new Exception(e.getMessage());
			}
			
			return result;
			
		}

		public String bl_setReason(PurpleaidRequest reqObj) throws Exception
		{
			
			Reason_IF interfaceRef = null;
			String result;
			
			try
			{
				interfaceRef = new ReasonImpl();
				result = null;
				
				switch (reqObj.getEntity()) {
				case 1: result = interfaceRef.bl_setReason(reqObj);
						break;
						
		
						default:;
						break;
				}

			}catch(Exception e){
				throw new Exception(e.getMessage());
			}
			return result;
			
			
		}
	}
