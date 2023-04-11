// svg icons support ie11
(function(){
    svg4everybody();
}());

// carousel arrows
const navArrows = [`
    <svg class="icon icon-arrow-prev">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-prev"></use>
    </svg>`,
    `<svg class="icon icon-arrow-next">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-next"></use>
    </svg>`];

// owl carousel
$(document).ready(function(){

	const sliderReview =  $('.js-slider-review');
	sliderReview.owlCarousel({
		items: 3,
		nav: true,
		navElement: 'button',
		navText: navArrows,
		dots: false,
		loop: true,
		smartSpeed: 700,
		responsive: {
			0:{
				items: 1,
				autoHeight: true
			},
			768: {
			    items: 3
			}
		}
	});

	const sliderComment =  $('.js-slider-comment');
	sliderComment.owlCarousel({
		items: 3,
		nav: true,
		navElement: 'button',
		navText: navArrows,
		dots: false,
		loop: true,
		smartSpeed: 700,
		responsive: {
			0:{
				items: 1,
				autoHeight: true
			},
			768: {
			    items: 2
			},
			1024: {
			    items: 3
			}
		}
	});

});

// toggle body theme
(function () {
    const switchTheme = $('.js-switch-theme'),
          body = $('body');

    switchTheme.on('change', function(){
        if (!body.hasClass('dark')){
            body.addClass('dark');
            localStorage.setItem('darkMode', "on");
        }else{
            body.removeClass('dark');
            localStorage.setItem('darkMode', "off");
        }
    });
}());

// faq
(function(){
    const item = $('.faq__item, .questions__item'),
          head = $('.faq__head, .questions__head'),
          body = $('.faq__body, .questions__body');
    head.on('click', function () {
        let thisHead = $(this);
        thisHead.parents('.faq__item, .questions__item').toggleClass('active');
        thisHead.parents('.faq__item, .questions__item').find('.faq__body, .questions__body').slideToggle();
    });
}());

// magnificPopup
(function(){
	var link = $('.js-popup-open');
	link.magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		removalDelay: 200,
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		}
	});
}());

// header
(function(){
    const header = $('.header'),
    	  wrapper = header.find('.header__wrapper'),
    	  burger = header.find('.header__burger');

	burger.on('click', function(){
		burger.toggleClass('active');
		wrapper.toggleClass('visible');
		$('html').toggleClass('no-scroll');
		$('body').toggleClass('no-scroll');
	});

}());

// pricing options
(function(){
    const view = $('.pricing__view');

	view.on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parents('.pricing__item').find('.pricing__options').slideToggle();
	});

}());

// aos animation
AOS.init();