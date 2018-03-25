//app
$(function () {
  preloader.init();
	console.log('start');
	menu_sidebar.init();
	auth.init();
	flip.init();
	form_contact.init();
	hamburger.init();
  slider.init();
 
//	parallax_scroll.init();
	window.onscroll = function() {
		let wScroll = window.pageYOffset;
		scrollParallax.init(wScroll);
	}

  //admin_blog.init();
  //admin_work.init();
  //admin_about.init();
  //login.init();
});