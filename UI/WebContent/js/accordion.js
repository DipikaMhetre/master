
$(document)
.ready(
		function() {
			$('#accordion_sale')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							// The accordion believes a panel is being opened
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
								// The accordion believes a panel is being closed
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							// Since we've changed the default behavior, this detects the actual status
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';

							// Toggle the panel's header
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));

							// Toggle the panel's icon
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							// Toggle the panel's content
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false; // Cancels the default action
						}
					});
		});

$(document)
.ready(
		function() {
			$('#accordion_CreditNoteRegister')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});

$(document)
.ready(
		function() {
			$('#accordion_DebitNoteRegister')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});

$(document)
.ready(
		function() {
			$('#accordion_PurchaseOrderRegister')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_PurchaseOrder')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_GoodsReceiptRegister')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_GoodsReceipt')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_StockManager')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_StockAudit')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_ReturnRegister')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_GoodsReturn')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_SaleableReturns')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_CompanyClaim')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_AccountingMaster')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_AccountingGroup')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_ReceiptAndPayments')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_ChequePrinting')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_BankDepositSlip')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_ChequeBounceReturnEntry')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_JournalVoucher')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});


$(document)
.ready(
		function() {
			$('#accordion_BankReconciliation')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_UnallottedReceiptsAndPayments')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_Company')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_Supplier')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_Division')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_Product')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_Content')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_Customer')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_Area')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_Route')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_TaxCode')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
$(document)
.ready(
		function() {
			$('#accordion_BusinessDetails')
			.accordion(
					{
						collapsible : true,
						heightStyle : "content",
						beforeActivate : function(event, ui) {
							if (ui.newHeader[0]) {
								var currHeader = ui.newHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							} else {
								var currHeader = ui.oldHeader;
								var currContent = currHeader
								.next('.ui-accordion-content');
							}
							var isPanelSelected = currHeader
							.attr('aria-selected') == 'true';
							currHeader
							.toggleClass(
									'ui-corner-all',
									isPanelSelected)
									.toggleClass(
											'accordion-header-active ui-state-active ui-corner-top',
											!isPanelSelected)
											.attr(
													'aria-selected',
													((!isPanelSelected)
															.toString()));
							currHeader
							.children('.ui-icon')
							.toggleClass(
									'ui-icon-triangle-1-e',
									isPanelSelected)
									.toggleClass(
											'ui-icon-triangle-1-s',
											!isPanelSelected);
							currContent
							.toggleClass(
									'accordion-content-active',
									!isPanelSelected)
									if (isPanelSelected) {
										currContent.slideUp();
									} else {
										currContent.slideDown();
									}
							return false;
						}
					});
		});
