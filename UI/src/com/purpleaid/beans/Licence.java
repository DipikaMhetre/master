package com.purpleaid.beans;

import java.util.List;

public class Licence {
	
	double Licencetype;
	
	String LicenceName;
	
	String LicenceCategory;
	
	String LicenceDescription;
	
	String LicenceRemark;
	
	List<Licence> LiscenceList;

	public double getLicencetype() {
		return Licencetype;
	}

	public void setLicencetype(double licencetype) {
		Licencetype = licencetype;
	}

	public String getLicenceName() {
		return LicenceName;
	}

	public void setLicenceName(String licenceName) {
		LicenceName = licenceName;
	}

	public String getLicenceCategory() {
		return LicenceCategory;
	}

	public void setLicenceCategory(String licenceCategory) {
		LicenceCategory = licenceCategory;
	}

	public String getLicenceDescription() {
		return LicenceDescription;
	}

	public void setLicenceDescription(String licenceDescription) {
		LicenceDescription = licenceDescription;
	}

	public String getLicenceRemark() {
		return LicenceRemark;
	}

	public void setLicenceRemark(String licenceRemark) {
		LicenceRemark = licenceRemark;
	}

	public List<Licence> getLiscenceList() {
		return LiscenceList;
	}

	public void setLiscenceList(List<Licence> liscenceList) {
		LiscenceList = liscenceList;
	}
	
	
	

}
