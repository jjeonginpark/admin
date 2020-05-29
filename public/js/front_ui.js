if (window.console == undefined) {console={log:function(){} };}

var smartDMB = {

	init : function(){
		smartDMB.topBanner();
		smartDMB.topFilter();
		smartDMB.btnTop();
		smartDMB.viewDetail();
		smartDMB.layerMovieEnd();

	}

	,topBanner : function(){
		var wrap = $('#wrap'),
			topBannerClose = $('#topBanner .close');

		topBannerClose.on('click', function(){

			wrap.addClass('hide-banner');

			return false;
		});
	}

	,topFilter : function(){
		var header = $('header'),
			menu = header.find('.menu'),
			layer = header.find('nav'),
			layerUl = layer.find('ul'),
			dim = $('<div class="dim"></div>'),
			state = false,
			menuH;

		menu.on('click', function(){
			var topAreaTop = $('#topArea').height(),
				winH = $(window).height(),
				conH = winH - topAreaTop,
				layerH = layer.height(),
				bannerNone = ($('#wrap').hasClass('hide-banner')) ? parseInt($('#topBanner').height()+2) : 0 ;

			if(!state){
				$('#dBody').append(dim);
				state = true;
			}else {
				dim.remove()
				state = false;
			}

			menu.toggleClass('active');
			layer.stop().toggle();

			// 레이어가 윈도우 높이보다 높을 경우
			if (layerH >= winH) {
				layerUl.height(parseInt(conH+bannerNone));
			}

			return false;
		});
	}

	,btnTop : function(){
		var btn = $('.quick-top > a'),
			body = $('html, body');

		btn.on('click', function(){
			body.stop().animate({
				scrollTop : 0
			}, {
				queue:false, duration:450, easing:'easeInOutExpo'
			});
			return false;
		});
	}

	,viewDetail : function(){
		var box = $('.movie-view01'),
			info = box.find('.movie-info'),
			btn = info.find('.btn-arrow');

		btn.on('click', function(){
			info.toggleClass('active');
			return false;
		});
	}

	,layerMovieEnd : function(){
		var layer = $('.layer-movie-end'),
			close = layer.find('.close');

		// layer close
		close.on('click', function(){
			var $this = $(this);

			$this.closest(layer).fadeOut(250);
			return false;
		});
		
	}

}

$(function(){
	smartDMB.init();
});
