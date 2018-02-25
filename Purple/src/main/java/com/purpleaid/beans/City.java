package com.purpleaid.beans;

public class City {
	String cityName;
	
	int cityId;
	
	boolean cityActiveFlag;
	
	State cityState;
	
	
    
	public boolean isCityActiveFlag() {
		return cityActiveFlag;
	}

	public void setCityActiveFlag(boolean cityActiveFlag) {
		this.cityActiveFlag = cityActiveFlag;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public int getCityId() {
		return cityId;
	}

	public void setCityId(int cityId) {
		this.cityId = cityId;
	}

	public State getCityState() {
		return cityState;
	}

	public void setCityState(State cityState) {
		this.cityState = cityState;
	}
	
	
}
