package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface ActiveUsers_IF {

	String bl_getAllActiveUsersList(PurpleaidRequest reqObj)throws Exception;

	String bl_deleteActiveUsers(PurpleaidRequest reqObj)throws Exception;

}
