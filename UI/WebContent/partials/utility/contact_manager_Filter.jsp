<div id="CMFilterPopup" ng-controller="CMFilterCtrl" class="" ng-init=init()>
	<div class="container lightBox_masterPrductFilter">
		<div class="row topblueStrip ">
			<h6>
				<span class="topblueStripText">FILTERS</span>
			</h6>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">City</span>
					</div>
					<div class=" col-md-7">
						<input id="" type="text" class="form-control productFilterIP_size input-sm" ng-model="filter.contactCity" value={{filter.contactCity}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Phone</span>
					</div>
					<div class=" col-md-7">
						<input type="text"	class="form-control productFilterIP_size  input-sm" ng-model="filter.contactPhone" value={{filter.contactPhone}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Email</span>
					</div>
					<div class=" col-md-7">
						<input type="text"	class="form-control productFilterIP_size  input-sm" ng-model="filter.contactEmail" value={{filter.contactEmail}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Url</span>
					</div>
					<div class=" col-md-7">
						<input type="text"	class="form-control productFilterIP_size  input-sm" ng-model="filter.contactURL" value={{filter.contactURL}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Date</span>
					</div>
					<div class=" col-md-7">
						<input type="text"	class="form-control productFilterIP_size  input-sm" ng-model="filter.contactDate" value={{filter.contactDate}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">HQ</span>
					</div>
					<div class=" col-md-7">
						<input type="text"	class="form-control productFilterIP_size  input-sm" ng-model="filter.contactHQ" value={{filter.contactHQ}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Area</span>
					</div>
					<div class=" col-md-7">
						<select class="productFilterIP_size  input-sm" ng-options="opt.areaID as opt.areaDescription for opt in areaList " ng-model="filter.contactArea" >
							
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Route</span>
					</div>
					<div class=" col-md-7">
						<select class="productFilterIP_size  input-sm" ng-options="opt.routeID as opt.routeDescription for opt in routeList" ng-model="filter.contactRoute">
							
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-4">
						<span class="control-label">Label</span>
					</div>
					<div class=" col-md-7">
						<input type="text"	class="form-control productFilterIP_size  input-sm" ng-model="filter.contactLabel" value={{filter.contactLabel}}>
					</div>
				</div>
			</div>
		</div>									
		
		<div class="row fieldsTop_Spacing">
			<div class=" col-md-3">
				<div class="row">
					<div class=" col-md-7">
						<span> 
							<input type="checkbox" ng-model="filter.contactMyFavoriteFlag" ng-value={{filter.contactMyFavoriteFlag}}> 
							<span class="chechBox_lablePos">My&nbsp;Favorites</span>
						</span>
					</div>
					<div class=" col-md-5">
						<span class="ProductFilterLockpos"> 
							<input type="checkbox" ng-model="filter.contactSystemUserFlag" ng-value={{filter.contactSystemUserFlag}}>
							<span class="chechBox_lablePos">System User</span>
						</span>
					</div>	
				</div>
			</div>
		</div>
        <div class="row fieldsTop_Spacing ">
			<div class=" col-md-3">
				<a ng-click="clearAllFilters();" title="Remove Product"
					class=" clearAllFilterPos">CLEAR&nbsp;ALL</a>
			</div>
		</div>
		<div class="row fieldsTop_Spacing fieldsBot_Spacing">
			<div class=" col-md-3">
				<span>
					<div class=" col-md-5 ContactsManager_FilterBtnPos">
						<button type="button"  ng-click="cancel()" class="canclebtnSize">Cancel</button>
					</div>
					<div class=" col-md-5 ">
						<button type="button" ng-click="submit(filter)" class="okbtnSize">OK</button>
					</div>
					
				</span>
			</div>
		</div>
	</div>
	{{filter}}
</div>
