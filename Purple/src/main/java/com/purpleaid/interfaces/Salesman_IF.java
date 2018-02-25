package com.purpleaid.interfaces;

public interface Salesman_IF {
	public String bl_getSalesman(double id);
	public String bl_getAllSalesmanList() throws Exception;
	public String bl_setSalesman(String reqObj) throws Exception;
	public String bl_setSalesmanList(String requestData)throws Exception;
}
