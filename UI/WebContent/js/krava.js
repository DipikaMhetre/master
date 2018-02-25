/*global $:false, jQuery:false, google:false, enquire:false, Modernizr:false */
/*jshint unused: false, strict:false */

/*
 *
 * Style box
 *
 */
var stylebox = {
	state: 1,
	setbinds: function() {
		$('#boxedBtn').click(function(){
			$(this).addClass('on');
			$('#fullwithBtn').removeClass();
			$('body').addClass('boxed');
			$(window).trigger('resize');
		});
		$('#fullwithBtn').click(function(){
			$(this).addClass('on');
			$('#boxedBtn').removeClass();
			$('body').removeClass('boxed');
			$(window).trigger('resize');
		});
		$('#boxbtn').click(function(){
			if(stylebox.state) {
				$('#stylebox').stop().animate({left:-285},800,'easeInOutExpo');
				stylebox.state = 0;
			} else {
				$('#stylebox').stop().animate({left:0},800,'easeInOutExpo');
				stylebox.state = 1;
			}
		});
		$('#colorchange li').click(function(){
			$(this).siblings().removeClass('on');
			$(this).addClass('on');
			var cssval = $(this).attr('css-file');
			$('link[rel=stylesheet]').eq(0).attr('href',cssval);
		});
		setTimeout(function() {
			$('#boxbtn').trigger('click');
		},2000);	
	},
	init: function() {
		
		$.get('data/stylebox.html', function(data){
			$('body').append(data);
			stylebox.setbinds();
		});
	}
};

/*
 *
 * Search results
 *
 */
var sResults = {
	init: function() {
		$('.block9').infinitescroll({
			navSelector:'#page_nav',
			nextSelector:'#page_nav a',
			itemSelector:'.block9 li',
			loading: {
				finishedMsg: 'No more pages to load.',
				img: 'http://i.imgur.com/qkKy8.gif'
			}
		});
	}
};

/*
 *
 * Isotope animations
 *
 */
var isotp = {
	cont: $('#isotope'),
	blocks: '.block7',
	filtA: $('.filters a'),
	thisFilt: '*',
	sizeClass: false,
	navigation: function() {
		isotp.cont.infinitescroll({
			navSelector:'#page_nav',
			nextSelector:'#page_nav a',
			itemSelector:isotp.blocks,
			loading: {
				finishedMsg: 'No more pages to load.',
				img: 'http://i.imgur.com/qkKy8.gif'
			}
		}, function( newElements ) {
			isotp.cont.isotope('appended', $(newElements));
			isotp.cont.isotope({ 
				filter: isotp.thisFilt 
			});

			if(krava.ha('.block7')) {
				isotp.makecalcules();
			}
			if(krava.ha('.block6')) {
				responsive.block6();
			}
		});
	},
	filters: function() {
		isotp.filtA.bind('click', function(){
			isotp.thisFilt = $(this).attr('data-filter');
			isotp.cont.isotope({ filter: isotp.thisFilt });

			$(this).parent().siblings().removeClass('current');
			$(this).parent().addClass('current');
			
			return false;
		});
	},
	makecalcules: function() {
		var widthP = $('.portfolio').width();
		var widthEl = $(isotp.blocks).outerWidth(true);

		if(widthP === 960) {
			widthP = 1032;
		}
		if(krava.win.width() < 460 || (widthEl > 460 && krava.win.width() < 660)) {
			widthEl = widthP;
		} else {
			$(isotp.blocks).removeAttr('style');
		}

		var colscount = parseInt((widthP / widthEl), 10);
		isotp.cont.css({
			width:colscount * widthEl
		});
		isotp.cont.isotope({
			masonry: {
				columnWidth: $(isotp.blocks).outerWidth(true)
			}
		}).isotope('reLayout');

		isotp.cont.waitForImages(function() {
			$(isotp.blocks).css({
				paddingTop:$(isotp.blocks).not('.isotope-hidden').find('> figure').height()
			});
			isotp.cont.isotope('reLayout');
		});
	},
	init: function() {
		isotp.cont.isotope({
			resizable: false,
			itemSelector: isotp.blocks,
			masonry: {
				columnWidth: $(isotp.blocks).outerWidth(true)
			}
		},function(){
			if(!krava.ha('.page-navi')) {
				isotp.navigation();
			}
			isotp.filters();
		});
		
		if(krava.ha('.block7')) {
			isotp.makecalcules();
			
			//When window size changed
			krava.win.bind('smartresize',function(){
				isotp.makecalcules();
			});
			
			//When mobile orientation changed
			krava.win.bind('orientationchange',function(){
				setTimeout(function(){ isotp.makecalcules(); },400);
			});
		}
	}
};

/*
 *
 * Toggle
 *
 */
var toggle = {
	lis: $('.toggle h2'),
	more: function() {
		toggle.lis.bind('click', function(){ 
			var parentElm = $(this).parent();
			var parentsElm = $(this).parents('.toggle');
			if(!parentElm.find('> p, > div').is(':visible')){
				parentsElm.find('.on > p, .on > div').slideUp();
				parentsElm.find('.on').removeClass('on');

				parentElm.find('> p, > div').slideDown();
				parentElm.addClass('on');
			} else {
				parentElm.find('> p, > div').slideUp();
				parentElm.removeClass('on');
			}
		});
	}
};

/*
 *
 * Contact Page Google Maps with custom Pin
 *
 */
var map = {
	theMap: 0,
	pin: {
		url:'images/pin.png',
		size: 0,
		origin: 0,
		anchor: 0
	},
	zoom: 14,
	latpos: 0,
	marker: 0,
	init: function() {
		map.pin.size = new google.maps.Size(312, 101);
		map.pin.origin = new google.maps.Point(0,0);
		map.pin.anchor = new google.maps.Point(29, 101);

		map.latpos = new google.maps.LatLng(18.490863, 73.790606);
		var mapOps = {
			scrollwheel:false,
			zoom: map.zoom,
			center: map.latpos,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map.theMap = new google.maps.Map(document.getElementById("mapcont"), mapOps);
		map.marker = new google.maps.Marker({
			position: map.latpos,
			map: map.theMap,
			icon: map.pin
        });

		google.maps.event.addListener(map.theMap, 'click', function(event) {
			map.theMap.set('scrollwheel', true);
		});
		$('#mapcont').bind('mouseleave', function(){
			map.theMap.set('scrollwheel', false);
		});
		krava.win.bind('resize',function(){
			map.theMap.set('center', map.latpos);
		});
	}
};

/*
 *
 * Form default methods
 *
 */
var method = {
	custom1: function(nameRVal,commentRVal) {
		var valR1 = nameRVal;
		var valR2 = commentRVal;
		$.validator.addMethod("nameR", function(value,element) { 
			if(valR1 === value || !value) {	
				$(element).addClass('error');
				$(element).parent().addClass('error');
				return false;
			} else {
				$(element).removeClass('error');
				$(element).parent().removeClass('error');
				return true;
			}
		});
		$.validator.addMethod("commentR", function(value,element) { 
			if(valR2 === value || !value) {	
				$(element).addClass('error');
				$(element).parent().addClass('error');
				return false;
			} else {
				$(element).removeClass('error');
				$(element).parent().removeClass('error');
				return true;
			}
		});
		$.validator.addMethod("customR", function(value,element) {
			if(!value) {	
				$(element).addClass('error');
				$(element).parent().addClass('error');
				return false;
			} else {
				$(element).removeClass('error');
				$(element).parent().removeClass('error');
				return true;
			}
		});
		$.validator.addMethod("emailR", function(value,element) {
			if(!krava.email.test(value)) {	
				$(element).addClass('error');
				$(element).parent().addClass('error');
				return false;
			} else {
				$(element).removeClass('error');
				$(element).parent().removeClass('error');
				return true;
			}
		});
	}
};

/*
 *
 * Form validations
 *
 */
var searchForm = {
	cont: $('#searchForm'),
	smbt: $('#searchSbmt'),
	inp: $('#searchtxt'),
	limpa: function(handler) {
				$('#searchForm').each(function(){
					this.reset();
				});
				var form = $('#searchForm').get(0); 
				$.removeData(form,'validator');
				handler();
			},
	bBind: function() {
				searchForm.smbt.bind('click',function(){
					searchForm.smbt.unbind();
					if ($('#searchForm').valid()) {
						location.href="search-results.html?s="+searchForm.inp.val();
					} else {
						searchForm.bBind();
					}
				});
			},
	valida: function() {
				$('#searchForm').validate({
					debug: false,
					errorElement: 'div',
					errorPlacement: function() {},				
					invalidHandler: function() {},
					success: function() {},					
					rules: {
						searchtxt: {required:true}
					},
					submit: false
				});
				searchForm.bBind();
			},
	init: function() {
				searchForm.inp.focus(function() {if (this.value === this.defaultValue) { this.value=''; }});
				searchForm.inp.blur(function() {
					if (this.value === '') { this.value=this.defaultValue; }
				});
				searchForm.limpa(searchForm.valida);
			}				
};

var contactForm = {
	cont: $('#contactForm'),
	smbt: $('#contactSmbt'),
	loader: $('#contactLoader'),
	msg: $('#msgContact'),
	defName: $('#nameContact').val(),
	defComment: $('#obsContact').val(),
	inp: $('#nameContact, #emailContact, #urlContact, #obsContact'),
	mText: 'Thanks for your contact!',
	limpa: function(handler) {
				contactForm.cont.each(function(){
					this.reset();
				});
				var form = $('#contactForm').get(0); 
				$.removeData(form,'validator');
				handler();
			},
	bBind: function() {
				contactForm.smbt.bind('click',function(){
					contactForm.smbt.unbind();
					if ($('#contactForm').valid()) {
						contactForm.loader.fadeTo(1000,1,function(){
							contactForm.limpa(contactForm.valida);
							contactForm.loader.fadeTo(1000,0,function(){
								contactForm.loader.hide();
								contactForm.msg.html(contactForm.mText);
								contactForm.msg.fadeIn(800);
								setTimeout(function(){
									contactForm.msg.fadeOut(800);	
								},8000);
							});
						});
					} else {
						contactForm.bBind();
					}
				});
			},
	valida: function() {
				$('#contactForm').validate({
					debug: false,
					errorElement: 'div',
					errorPlacement: function() {},				
					invalidHandler: function() {},
					success: function() {},					
					rules: {
						nameContact: {nameR: true},
						emailContact: {emailR: true},
						obsContact: {commentR: true}
					},
					submit: false
				});
				contactForm.bBind();
			},
	init: function() {
				contactForm.inp.focus(function() {if (this.value === this.defaultValue) { this.value=''; }});
				contactForm.inp.blur(function() {
					if (this.value === '') { this.value=this.defaultValue; }
				});
				method.custom1(contactForm.defName,contactForm.defComment);
				contactForm.limpa(contactForm.valida);
			}				
};

var commentform = {
	cont: $('#commentform'),
	smbt: $('#commentSmbt'),
	defName: $('#author').val(),
	defComment: $('#comment').val(),
	inp: $('#author, #email, #url, #comment'),
	limpa: function(handler) {
				commentform.cont.each(function(){this.reset();});
				var form = $('#commentform').get(0); 
				$.removeData(form,'validator');
				handler();
			},
	bBind: function() {
				commentform.smbt.bind('click',function(){
					commentform.smbt.unbind();
					if ($('#commentform').valid()) {
						commentform.cont.submit();
					} else {
						commentform.bBind();
					}
				});
			},
	valida: function() {
				$('#commentform').validate({
					debug: false,
					errorElement: 'div',
					errorPlacement: function() {},				
					invalidHandler: function() {},
					success: function() {},					
					rules: {
						author: {nameR: true},
						email: {emailR: true},
						comment: {commentR: true}
					},
					submit: false
				});
				commentform.bBind();
			},
	init: function() {
				commentform.inp.focus(function() {if (this.value === this.defaultValue) { this.value=''; }});
				commentform.inp.blur(function() {
					if (this.value === '') { this.value=this.defaultValue; }
				});
				method.custom1(commentform.defName,commentform.defComment);
				commentform.limpa(commentform.valida);
			}				
};

var newslettForm = {
	cont: $('#newslettForm'),
	smbt: $('#newslettSmbt'),
	loader: $('#loaderNewslett'),
	inp: $('#emailNewslettTxt'),
	limpa: function(handler) {
				$('#newslettForm').each(function(){
					this.reset();
				});
				var form = $('#newslettForm').get(0); 
				$.removeData(form,'validator');
				handler();
			},
	bBind: function() {
				newslettForm.smbt.bind('click',function(){
					newslettForm.smbt.unbind();
					if ($('#newslettForm').valid()) {
						//Sucess stuff
						newslettForm.loader.fadeTo(1000,1,function(){
							newslettForm.limpa(newslettForm.valida);
							newslettForm.loader.fadeTo(1000,0,function(){
								newslettForm.loader.hide();
							});
						});
					} else {
						newslettForm.bBind();
					}
				});
			},
	valida: function() {
				$('#newslettForm').validate({
					debug: false,
					errorElement: 'div',
					errorPlacement: function() {},				
					invalidHandler: function() {}, 
					success: function() {},					
					rules: {
						emailNewslettTxt: {newsletterval:true}
					},
					submit: false
				});
				newslettForm.bBind();
			},
	init: function() {
				newslettForm.inp.focus(function() {if (this.value === this.defaultValue) { this.value=''; }});
				newslettForm.inp.blur(function() {
					if (this.value === '') { this.value=this.defaultValue; }
				});
				$.validator.addMethod("newsletterval", function(value,element) {
					if(!krava.email.test(value)) {	
						$(element).addClass('error');
						$(element).prev().addClass('error');
						return false;
					} else {
						$(element).removeClass('error');
						$(element).prev().removeClass('error');
						return true;
					}
				});
				newslettForm.limpa(newslettForm.valida);
			}				
};

var infoForm = {
	cont: $('#infoForm'),
	smbt: $('#infoSmbt'),
	loader: $('#loaderInfo'),
	msg: $('#msgInfo'),
	mText: 'Thanks for your contact!',
	limpa: function(handler) {
				$('#infoForm').each(function(){
					this.reset();
				});
				var form = $('#infoForm').get(0); 
				$.removeData(form,'validator');
				handler();
			},
	bBind: function() {
				infoForm.smbt.bind('click',function(){
					infoForm.smbt.unbind();
					if ($('#infoForm').valid()) {
						//Sucess stuff
						infoForm.loader.fadeTo(1000,1,function(){
							infoForm.limpa(infoForm.valida);
							infoForm.loader.fadeTo(1000,0,function(){
								infoForm.loader.hide();
								infoForm.msg.html(infoForm.mText);
								infoForm.msg.fadeIn(800);
								setTimeout(function(){
									infoForm.msg.fadeOut(800);	
								},8000);
							});
						});
					} else {
						infoForm.bBind();
					}
				});
			},
	valida: function() {
				$('#infoForm').validate({
					debug: false,
					errorElement: 'div',
					errorPlacement: function() {},				
					invalidHandler: function() {}, 
					success: function() {},					
					rules: {
						nameTxt: {cRequired:true},
						subjectTxt: {cRequired:true},
						emailTxt: {cEmail:true},
						messageTxt: {cRequired:true}
					},
					submit: false
				});
				infoForm.bBind();
			},
	init: function() {
				$.validator.addMethod("cEmail", function(value,element) {
					if(!krava.email.test(value)) {	
						$(element).addClass('error');
						$(element).prev().addClass('error');
						return false;
					} else {
						$(element).removeClass('error');
						$(element).prev().removeClass('error');
						return true;
					}
				});
				$.validator.addMethod("cRequired", function(value,element) {
					if(!value) {	
						$(element).addClass('error');
						$(element).prev().addClass('error');
						return false;
					} else {
						$(element).removeClass('error');
						$(element).prev().removeClass('error');
						return true;
					}
				});
				infoForm.limpa(infoForm.valida);
			}				
};

/*
 *
 * Responsive
 *
 */
var responsive = {
	ratio: 0.28,
	magazine: function() {
		var mblock = $('#magazineSlider');
		if(krava.win.width() <= 960) {	
			mblock.css({height:mblock.width()*0.476});
		} else {
			mblock.removeAttr('style');
		}
	},
	block6_size1: function() {
		var blocks = $('.block6');
		blocks.find('img').css({width:blocks.width()});
		var padd = blocks.width()*responsive.ratio;
		blocks.css({paddingTop:padd+20});
		blocks.find('figure').css({height:padd});
	},
	block6: function() {
		var block = $('.block6');
		if(block.hasClass('size2') || block.hasClass('size3')) { responsive.ratio = 0.6; }
		if(block.hasClass('size4')) { responsive.ratio = 0.4; }

		if(krava.win.width() <= 960) {
			if(krava.ha('.onecool')) {
				responsive.block6_size1();
				setTimeout(function(){ isotp.cont.isotope('reLayout'); },1000);
			}

			if(!block.hasClass('size3') && !block.hasClass('size4')) {
				responsive.block6_size1();
				isotp.cont.isotope({
					masonry: { columnWidth: $(isotp.blocks).outerWidth(true) }
				});
				setTimeout(function(){ isotp.cont.isotope('reLayout'); },1000);
			}

			if((block.hasClass('size3') || block.hasClass('size4')) && !krava.ha('.onecool')) {
				block.css({'margin-left':10,'margin-right':10,width:$('.isotope').width() / 2-24});
				responsive.block6_size1();
				isotp.cont.isotope({
					masonry: { columnWidth: $('.isotope').width() / 2 }
				});
			}
		} else {
			block.find('img').removeAttr('style');
			block.css({'padding-top':'','margin-left':'','margin-right':'',width:''});
			block.find('figure').removeAttr('style');
			
			if(block.hasClass('size3') || block.hasClass('size4')) {
				isotp.cont.isotope({
					masonry: { columnWidth: $(isotp.blocks).outerWidth(true) }
				});
			}
		}
	},
	work: function() {
		var workcont = $('#workSlide');
		if(krava.win.width() < 960) {
			workcont.css({height:Math.round($('#workSlide').outerWidth(true)*0.66)});
		} else {
			workcont.removeAttr('style');
		}
	},
	hasImg: function() {
		var imgcont = $('.hasImage');
		if(krava.win.width() < 960) {
			imgcont.css({paddingTop:$('.featuredImg').height() + 10});
			$('.featuredImg > img').bind('load',function(){
				imgcont.css({paddingTop:$('.featuredImg').height() + 10});
			});
		} else {
			imgcont.removeAttr('style');
		}
	},
	tabs:0,
	tabsDrop: {
		creates: function() {
			responsive.tabs.prepend('<div class="tabdrop"><span class="icon"></span> Show menu</div>');
			$('.tabdrop').click(function(){
				$(this).parent().find('> ul').slideToggle(400);
				$(this).toggleClass('on');
			});
		},
		removes: function() {
			$('.tabdrop').remove();
			responsive.tabs.find('> ul').removeAttr('style');
		}
	},
	init: function() {	
		enquire.register("screen and (max-width:700px)", {
			match : function() {
				if(krava.ha('.tabs')) {responsive.tabsDrop.creates();}
			},
			unmatch : function() {
				if(krava.ha('.tabs')) {responsive.tabsDrop.removes();}
			} 
		});
	}
};

/*
 *
 * Here starts everything
 *
 */
var moreinfo = {
	h: 0,
	open: 0,
	cont: $('.moreinfo'),
	check: function() {
		moreinfo.h = moreinfo.cont.find('.text').outerHeight();
		moreinfo.cont.stop().css({top:-moreinfo.h});
		if(moreinfo.open) {
			$('header.header').stop().css({marginTop:moreinfo.h});
		} else {
			$('header.header').stop().css({marginTop:0});
		}
	},
	init: function() {
	moreinfo.h = moreinfo.cont.find('.text').outerHeight();
	moreinfo.cont.css({top:-moreinfo.h});
	$('#topBtn').bind('click',function(){
		if(moreinfo.open) {
			moreinfo.open = 0;
			$('header.header').stop().animate({marginTop:0});
			$(this).removeClass('on');
		} else {
			moreinfo.open = 1;
			$('header.header').stop().animate({marginTop:moreinfo.h});
			$(this).addClass('on');
		}
	});
	}
};

/*
 *
 * Here starts everything
 *
 */
var krava = {
	win: $(window),
	bod: $('body'),
	head: $('head'),
	htmlBody: $('html, body'),
	tabBtn: $('#seeTabs'),
	navBtn: $('#navBtn'),
	email: new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
	ha: function(x) { 
		if ($(x).length > 0) { return true; }
	},
	goTop: function() {
		$('#goTop').bind('click', function() {
			krava.htmlBody.stop().animate({scrollTop:0},800, 'easeOutSine');
		});
	},
	checkMenu: function() {
		krava.navBtn.unbind();
		if(krava.navBtn.is(':visible')) {
			krava.navBtn.bind('click',function(){
				krava.navBtn.toggleClass('on');
				$('.header nav > ul').slideToggle(400);
			});
		} else {
			krava.navBtn.removeClass('on');
			$('.header nav > ul').removeAttr('style');
		}
	},		
	init: function() {
			//All pages Functions
			krava.goTop();
			krava.checkMenu();
			moreinfo.init();

			//Check Retina
			if(window.devicePixelRatio === 2) {krava.bod.addClass('retina-display');}

			//Plugins
			if(krava.ha('.tabs')) {
				responsive.tabs = $('.navtabs').parent().not('.tabsSide');
				$('.tabs').tabsPlugin();
			}	

			//Tab's and toggle's
			if(krava.ha('.tabsSide')) { $('.tabsSide').tabsPlugin(); }
			if(krava.ha('.toggle')) { toggle.more(); }

			//Sliders
			if(krava.ha('#sliderHome')) { $('#sliderHome').carouselPlugin(); }
			if(krava.ha('.testemonials')) { $('.testemonials').krvSlider(); }
			if(krava.ha('#workSlide')) {
				$('#workSlide').krvSlider();
				responsive.work();
			}
			if(krava.ha('#magazineSlider')) {
				$('#magazineSlider').krvSlider();
				responsive.magazine();
			}
			if(krava.ha('.logoslider')) {
				$('.logoslider ul').bxSlider({
					slideWidth:191,
					minSlides:1,
					maxSlides:5,
					moveSlides:1,
					slideMargin:0,
					pager:false
				});
			}
			if($('#featured article').length > 4) {
				$('#featured .slider').bxSlider({
					slideWidth:227,
					minSlides:1,
					maxSlides:4,
					moveSlides:1,
					slideMargin:18,
					pager:false
				});
			}

			//Forms
			if(krava.ha('#infoForm')) { infoForm.init(); }
			if(krava.ha('#newslettForm')) { newslettForm.init(); }
			if(krava.ha('#searchForm')) { searchForm.init(); }
			if(krava.ha('#commentform')) { commentform.init(); }
			if(krava.ha('#contactForm')) { contactForm.init(); }

			//Map
			if(krava.ha('#mapcont')) { map.init(); }

			//Responsive
			if(krava.ha('.hasImage')) { responsive.hasImg(); }
			
			krava.win.resize(function(){
				if(krava.ha('.hasImage')) { responsive.hasImg(); }
				if(krava.ha('#workSlide')) { responsive.work(); }
				if(krava.ha('.block6')) {
					responsive.block6();
					setTimeout(function(){
						responsive.block6();
					},500);
				}
				if(krava.ha('#magazineSlider')) { responsive.magazine(); }
				
				moreinfo.check();
				krava.checkMenu();
			});

			responsive.init();

			Modernizr.load([
				{
					test : krava.ha('#isotope'),
					yep : ['scripts/libs/isotope.js','scripts/libs/jquery.infinitescroll.min.js'],
					complete : function () {
						if(krava.ha('#isotope')) { isotp.init(); }
					}
				},
				{
					test : krava.ha('.block6'),
					yep : ['scripts/libs/isotope.js','scripts/libs/jquery.infinitescroll.min.js'],
					complete : function () {
						if(krava.ha('.block6')) {
							responsive.block6();
							if($('.twocools').length > 0) {
								isotp.cont = $('.twocools');
							} else if($('.onecool').length > 0){
								isotp.cont = $('.onecool');
							} else if($('.magazineblog').length > 0) {
								isotp.cont = $('.magazineblog');
							} else {
								isotp.cont = $('.posts');
							}
							isotp.blocks = '.block6';
							isotp.init();
						}
					}
				},
				{
					test : krava.ha('.block9'),
					yep : ['scripts/libs/jquery.infinitescroll.min.js'],
					complete : function () {
						if(krava.ha('.block9')) { sResults.init(); }
					}
				},
				{
					test : krava.ha('.fancybox'),
					yep : ['css/fancybox/fancybox.css','scripts/libs/fancybox.js'],
					complete : function () {
						if(krava.ha('.fancybox')) {
							$('.fancybox').fancybox({
								type: 'image',
								padding: 0
							});
						}
					}
				},
				{
					test : krava.ha('.rs-slider'),
					yep : ['css/refineslide/refineslide.css','scripts/libs/jquery.refineslide.min.js'],
					complete : function () {
						if(krava.ha('.rs-slider')) {
							$('.rsslider').each(function(){
								var class_name = $(this).attr('data-animation');
								$(this).find('> .rs-slider').refineSlide({
									transition:class_name,
									maxWidth: 960,
									useThumbs: false,
									autoPlay: true,
									useArrows: true,
									arrowTemplate: '<a href="#" class="rs-prev"></a><a href="#" class="rs-next"></a>',
									keyNav: true
								});
							});
						}
					}
				}
			]);
		}
};

/*
 *
 * When HTML is ready, starts init function
 *
 */
(function ($) {
	"use strict";
	$(function () {
		//stylebox.init(); //Remove the comment to show the left stylebox
		krava.init();
	});
}(jQuery));