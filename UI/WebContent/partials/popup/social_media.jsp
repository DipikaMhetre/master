<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="com.purpleaid.beans.User"%>
<%@page import="java.util.List"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div ng-init="init()"class="container SocialMediaPopup">
		<div class="row topblueStrip fieldsBot_Spacing_lg">
			<h6 class="fieldsTop_Spacing">
				<span class="topblueStripText">Social Media</span> <img ng-click="cancel()" alt=""
					class="close_popupImage" tabindex="2" src="images/close_popup.png">
			</h6>
		</div>
		<div class="row fieldsBot_Spacing_lg">
			<div class=" col-md-8">
				<span><img class="contactsManagerImages"
					style="cursor: pointer;" alt="" src="images/contacts_manager/3.jpg"></span>
				<span class="control-label fieldLeft_spacing_md">Tweeter Profile ID</span>
			</div>
			<div class="col-md-2">
				<input class=" input-sm  form-control SocialMediaInput" type="text"
					tabindex="5" ng-model="contact.contactTwitterUrl">
			</div>
			<div class="col-md-2 ">
				<button ng-click="redirectToSocial('https://twitter.com/'+contact.contactTwitterUrl)"
					class="Go_btn btn btn-primary VisitBtn" tabindex="6">Visit</button>
			</div>
		</div>
		<div class="row fieldsBot_Spacing_lg">
			<div class=" col-md-8">
				<span><img class="contactsManagerImages"
					style="cursor: pointer;" alt="" src="images/contacts_manager/2.png"></span>
				<span class="control-label fieldLeft_spacing_md">Linkedin Profile ID</span>
			</div>
			<div class="col-md-2">
				<input class=" input-sm  form-control SocialMediaInput" type="text"
					tabindex="5" ng-model="contact.contactLinkedinUrl">
			</div>
			<div class="col-md-2 ">
				<button ng-click="redirectToSocial('https://in.linkedin.com/in/'+contact.contactLinkedinUrl)"
					class="Go_btn btn btn-primary VisitBtn" tabindex="6">Visit</button>
			</div>
		</div>
		<div class="row fieldsBot_Spacing_lg">
			<div class=" col-md-8">
				<span> <img class="contactsManagerImages"
					style="cursor: pointer;" alt="" src="images/contacts_manager/1.jpg"></span>
				<span class="control-label fieldLeft_spacing_md">Facebook Profile ID</span>
			</div>
			<div class="col-md-2">
				<input class=" input-sm  form-control SocialMediaInput" type="text"
					tabindex="5" ng-model="contact.contactFacebookUrl">
			</div>
			<div class="col-md-2 ">
				<button 
					class="Go_btn btn btn-primary VisitBtn" tabindex="6" ng-click="redirectToSocial('https://www.facebook.com/'+contact.contactFacebookUrl)">Visit</button>
			</div>
		</div>
		

		<div class="row Ok_Cancle_BtnPos_Popup">
			<div class="col-md-12">
				<button class="btn canclebtnSize" tabindex="5" ng-click="cancel()">Cancel</button>
				<button class="btn okbtnSize" tabindex="6" ng-click="submit(contact)">Ok</button>
			</div>
		</div>
	</div>