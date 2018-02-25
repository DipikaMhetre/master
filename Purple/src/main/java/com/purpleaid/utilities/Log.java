package com.purpleaid.utilities;



import org.apache.log4j.Logger;


public class Log {
	public static Logger log = Logger.getLogger("Log");
	
	//private static SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss" );	
	
	public static void logMessage(String errorLevel, String className, String methodName, String errorDetails)
	{
		//Date dt = new Date();
		String errorMessage = errorLevel + " | " + className + " | " + methodName + " | " + errorDetails;
		
		if (errorLevel.equalsIgnoreCase(Constants.DEBUG)) {
			log.debug(errorMessage);
		} else if (errorLevel.equalsIgnoreCase(Constants.INFO)) {
			log.info(errorMessage);
		} else if (errorLevel.equalsIgnoreCase(Constants.WARN)) {
			log.warn(errorMessage);
		} else if (errorLevel.equalsIgnoreCase(Constants.ERROR)) {
			log.error(errorMessage);
		} else if (errorLevel.equalsIgnoreCase(Constants.FATAL)) {
			log.fatal(errorMessage);
		}		
	}
}