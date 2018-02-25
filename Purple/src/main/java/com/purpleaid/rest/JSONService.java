package com.purpleaid.rest;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.purpleaid.Track;
import com.purpleaid.beans.Company;
import com.purpleaid.beans.Supplier;

@Path("/json")
public class JSONService {

	@GET
	@Path("/getTrack")
	@Produces(MediaType.APPLICATION_JSON)
	public Track getTrackInJSON() {

		Track track = new Track();
		track.setTitle("Enter Sandman");
		track.setSinger(1);

		return track;

	}

	@POST
	@Path("/saveTrack")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createTrackInJSON(Track track) {

		String result = "Track saved : " + track;
		return Response.status(201).entity(result).build();
		
	}
	
	@POST
	@Path("/getCompanySuppliers")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCompanySuppliers(Company c) {
		
		List<Supplier> list=new ArrayList<Supplier>();
		//Company company = new Company(1, "Cipla");
		/*Supplier supplier1 = new Supplier(c,1,"Hindustan Liver");
		Supplier supplier2 = new Supplier(c,2,"Big Bazaaar");*/
		/*list.add(supplier1);
		list.add(supplier2);*/

		return Response.status(201).entity(list).build();

	}
	
	@POST
	@Path("/getCompanyList")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCompanyList() {
		
		List<Company> list=new ArrayList<Company>();
		Company cipla = new Company();
		cipla.setCompanyId(1);
		cipla.setCompanyName("Cipla");
		Company drReddys = new Company();
		drReddys.setCompanyId(2);
		drReddys.setCompanyName("DrReddys");
		list.add(cipla);
		list.add(drReddys);

		return Response.status(201).entity(list).build();

	}
	
	
	
}