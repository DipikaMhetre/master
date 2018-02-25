package com.purpleaid.beans;

import java.util.List;



public class Route {

	double routeID;
	
	String routeDescription;
	
	boolean routeActiveFlag;
	
	double recid;
	
	double idpk;
	
	String rrID;
	
	List<Route> routeList;
	
	public String getRrID() {
		return rrID;
	}

	public void setRrID(String rrID) {
		this.rrID = rrID;
	}

	public double getIdpk() {
		return idpk;
	}

	public void setIdpk(double idpk) {
		this.idpk = idpk;
	}

	List<RouteAreaRegion> rarList;

	
	public List<RouteAreaRegion> getRarList() {
		return rarList;
	}

	public void setRarList(List<RouteAreaRegion> rarList) {
		this.rarList = rarList;
	}


	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}


	public double getRouteID() {
		return routeID;
	}

	public void setRouteID(double routeID) {
		this.routeID = routeID;
	}

	public String getRouteDescription() {
		return routeDescription;
	}

	public void setRouteDescription(String routeDescription) {
		this.routeDescription = routeDescription;
	}

	public boolean isRouteActiveFlag() {
		return routeActiveFlag;
	}

	public void setRouteActiveFlag(boolean routeActiveFlag) {
		this.routeActiveFlag = routeActiveFlag;
	}
		
	List<RouteArea> routeAreaList;
	
	
	public List<RouteArea> getRouteAreaList() {
		return routeAreaList;
	}
	
	public void setRouteAreaList(List<RouteArea> routeAreaList) {
		this.routeAreaList = routeAreaList;
	}

	public List<Route> getRouteList() {
		return routeList;
	}

	public void setRouteList(List<Route> routeList) {
		this.routeList = routeList;
	}

	
	
}
