/*global $:false, jQuery:false, google:false, Modernizr:false, krava:false */
/*jshint unused: false, strict:false */
 
/*
 *
 * Slide plugin by FuseCoders (version 0.6)
 *
 */
$.fn.tabsPlugin = function() {
	return this.each(function(){
		var _this = $(this),
			_ul = _this.find('.navtabs'),
			_lis = _ul.find('> li'),
			_divs = _this.find('.navcont > div'),
			_now = 0,
			_last = 0,
			build = function(_this, _ul, _lis, _divs, _now, _last) {
				_lis.bind('click', function() {
					if(!$(this).hasClass('on')) {
						_now = $(this).index();
						_lis.removeClass('on');
						_divs.eq(_last).fadeOut(200,function(){
							_divs.eq(_now).fadeIn(200);
							_lis.eq(_last).addClass('on');
						});
						_last = _now;
					}
				});
			};

			build(_this, _ul, _lis, _divs, _now, _last);		
	});
};

/*
 *
 * Full width carousel by FuseCoders (version 1.5)
 *
 */
$.fn.carouselPlugin = function(options) {
	return this.each(function(){
		var _this = $(this),
			_slider = _this.find('> .slider'),
			_articles = _slider.find('> article'),
			_count = _articles.length,
			_prev = _this.find('.prev'),
			_next = _this.find('.next'),
			_ocult = _this.find('.ocult'),
			_loader = _this.find('> .loader'),
			_index = 0,
			_width = 960,
			_speed = 1000,
			_hWidth = 0,
			_left = 0,
			_animateW = 0,

			_eq = 0,

			_auto = true,
			_dur = 7000,
			_timedSlide = 0,
			_checkClick = true,
			
			calculate = function(){
				if(krava.win.width() < 960) {
					_width = krava.win.width();
				} else {
					_width = 960;
				}
				_hWidth = _count * _width;
				_left = -Number(Math.round(_width - (($('.wrapper').width() / _width - 1) * _width / 2)));
				_ocult.css({width:_width-Math.abs(_left)});
				if(!_left) { _left = 0; }
				_slider.css({left:_left});
			},
			calculatePosLeft = function() {
				_slider.css({left:_left});
				_articles = _slider.find('> article');
				var thisOne = _articles.first();
				_articles.first().remove();
				_slider.append(thisOne);
			},
			calculatePosRight = function() {
				_slider.css({left:_left});
				_articles = _slider.find('> article');
				var thisOne = _articles.last();
				_articles.last().remove();
				_slider.prepend(thisOne);
			},
			doSlide = function(where){
				clearTimeout(_timedSlide);
				if(where > 0) {
					_animateW = _left - _width;
					_slider.stop().animate({left:_animateW},_speed,'easeInOutExpo',function(){
						calculatePosLeft();
						_checkClick = true;
					});
				} else {
					_animateW = _left;
					_slider.stop().animate({left:_animateW},_speed,'easeInOutExpo',function(){
						_checkClick = true;
					});
				}
				
				restartTimer();
			},
			restartTimer = function(){
				_timedSlide = setTimeout(autoSlide,_dur + 500);
			},
			autoSlide = function(){
				if(_auto) { doSlide(1); }
			},
			duplicate = function() {
				_slider.append(_articles.clone());
				_articles = _slider.find('> article');
				_count = _articles.length;
			};
			
			//Duplicate all articles before make calcs
			if(_count === 3) { duplicate(); }

			//Makes all main calcules
			calculate(); calculatePosRight();

			//Auto Slide
			if(_auto) { _timedSlide = setTimeout(autoSlide,_dur); }

			//Sets slider width
			_slider.css({width:_hWidth});

			//Previous and Next Buttons
			_prev.bind('click',function(){
				if(_checkClick) {
					_checkClick = false;
					_slider.css({left:_left - _width});
					_articles = _slider.find('> article');
					var thisOne = _articles.last();
					_articles.last().remove();
					_slider.prepend(thisOne);

					doSlide(-1);
				}
			});
			_next.bind('click',function(){
				if(_checkClick) {
					_checkClick = false;
					doSlide(1);
				}
			});
			_this.waitForImages(function() {
				_loader.fadeOut(600);
			});

			function responsive() {
				_articles = _slider.find('> article');
				if (krava.win.width() < 960) {
					_articles.css({width:krava.htmlBody.width()});
					_this.css({height:_articles.first().find('img').height()});
				} else {
					_articles.removeAttr('style');
					_this.removeAttr('style');
				}
				_slider.css({width:_hWidth});
			}

			responsive();
			krava.win.bind('resize',function(){
				calculate();
				responsive();
			});
	});
};

/*
 *
 * FadeIn/Out slider
 *
 */
$.fn.krvSlider = function () {
	return this.each(function () {
		var _this = $(this),
			_articles = _this.find('article, .slider li, .slider > a, .slider > iframe'),
			_prev = _this.find('.prev'),
			_next = _this.find('.next'),
			_nav2 = _this.find('.sliderNav2'),
			_btns = _nav2.find('> li'),
			_stop = false,
			_count = _articles.length - 1,
			_index = 0,
			_dur = 6000,
			_timedSlide = 0,
			_auto = true,
			build = function(_this,_articles,_prev,_next,_nav2,_btns,_stop,_count,_index,_dur,_timedSlide,_auto) {
				function doSlide(numb) {
					_stop = true;
					clearTimeout(_timedSlide);
					_articles.eq(_index).fadeOut(800);
					if(numb + _index > _count) {
						_index = 0;
					}
					else if(numb + _index < 0) {
						_index = _count;
					} else {
						_index+=numb;
					}
					_articles.eq(_index).fadeIn(800,function() {
						_stop = false;
						restartTimer();
					});
					if(_btns.length) {
						_btns.removeClass('on');
						_btns.eq(_index).addClass('on');
					}
				}
				function doSlideIndx(indx) {
					_stop = true;
					clearTimeout(_timedSlide);
					_articles.eq(_index).fadeOut(800);
					
					_index = indx;
					_articles.eq(_index).fadeIn(800,function() {
						_stop = false;
						restartTimer();
					});
				}
				function restartTimer(){
					_timedSlide = setTimeout(autoSlide,_dur);
				}
				function autoSlide(){
					if(_this !== null && _auto) { doSlide(+1); }
				}

				_prev.bind('click',function(){
					if(!_stop) { doSlide(-1); }
				});
				_next.bind('click',function(){
					if(!_stop) { doSlide(+1); }
				});
				if(_btns.length) {
					_btns.bind('click', function() {
						if(!$(this).hasClass('on') && !_stop) {
							$(this).siblings().removeClass('on');
							$(this).addClass('on');
							doSlideIndx($(this).index());
						}
					});
				}
				_articles.eq(0).show();
				
				if(_this.find('iframe').length >= 1) { _auto = false; }
				if(_auto && _count > 0) { _timedSlide = setTimeout(autoSlide,_dur); }
				if(_count > 0) {
					_prev.fadeIn(800);
					_next.fadeIn(800);
				}
			};
			build(_this,_articles,_prev,_next,_nav2,_btns,_stop,_count,_index,_dur,_timedSlide,_auto);
	});
};