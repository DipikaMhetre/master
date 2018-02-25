package com.purpleaid.ui.utilities;

import java.io.InputStream;
import java.util.Properties;

public class PurpleProperties {
	
	private static Properties properties;
	
	public static Properties getPurpleProperties(){
		if(properties==null){
			readProperties();
		}
		
		return properties;
	}

	private static void readProperties() {
		try{
			properties = new Properties();
			InputStream stream = Thread.currentThread().getContextClassLoader().getResourceAsStream("purple.properties");
			properties.load(stream);
		}catch(Exception exe){
			exe.printStackTrace();
		}
		
	}

}
