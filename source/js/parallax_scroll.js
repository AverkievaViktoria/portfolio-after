//! 
var scrollParallax = (function() {
	var bg = document.querySelector('.scroll-parallax__image');
	var user = document.querySelector('.scroll-parallax__hero');

	return {
		move: function(block, windowScroll, strafeAmount) {
			var strafe = windowScroll / -strafeAmount + '%';
			var transformString = 'translate3d(0,' + strafe + ', 0)';
			var style = block.style;
			style.top = strafe;
			//console.log(strafe);
			//style.transform = transformString;
			//style.webkitTransform = transformString;
			//console.log(strafe);
		},

		init: function(wScroll) {
			this.move(bg, wScroll, 30);
			//this.move(user, wScroll, 5);
		},
	};
}());