var hamburger = (function () {
	var boxHamburger = $('.js-hamburger');
  var menuHamburger = $('.js-menu-hamburger');
  
  return {
    init: function () {
      console.log('hamburger.init');
      $('.js-hamburger__link').on('click', function (e) {
      	e.preventDefault();      	
				boxHamburger.toggleClass('is-active');
      	menuHamburger.fadeToggle();
      })	
    }
  }
})();