package com.purpleaid.exception;

public class MoreThanTwoUserException extends Exception  {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String message = null;
	 
    public MoreThanTwoUserException() {
        super();
    }
 
    public MoreThanTwoUserException(String message) {
        super(message);
        this.message = message;
    }
 
    public MoreThanTwoUserException(Throwable cause) {
        super(cause);
    }
 
    @Override
    public String toString() {
        return message;
    }
 
    @Override
    public String getMessage() {
        return message;
    }


}
