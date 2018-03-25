var menu_sidebar = (function () {
  var blog = $('#js_scroll_blog');
  var menu = $('#js_menu_sidebar');  
  var $items = $('.article');

  var windowHeight = $(window).outerHeight();

  $('.menu-sidebar__link').first().addClass('menu-sidebar__link_active');

  var menuScroll = function() {
      var windowScroll = window.pageYOffset;
      if (windowScroll>300) {
        $('#js_menu_sidebar').addClass('menu-sidebar__fixed');
      } else {
        $('#js_menu_sidebar').removeClass('menu-sidebar__fixed');
      }

    var fromTop = $(document).scrollTop()+300;
    var allItems = [];
    var $currentItem;
    allItems = $items.filter(function() {
      return $(this).offset().top < fromTop;
    });
    $currentItem = allItems.eq(allItems.length - 1);

    $('.menu-sidebar__link').removeClass('menu-sidebar__link_active');
    if ($currentItem.length < 1) {
      $('.menu-sidebar__link').eq(0).addClass('menu-sidebar__link_active');
    } else {
      $('.menu-sidebar__link[href="'+$currentItem.data('link')+'"]').addClass('menu-sidebar__link_active');
    }  

  };  
  return {
    init: function () {
      console.log('menu_sidebar.init');
      //$('.sidebar__circle').on('click', circleClick);
      //$('.js-sidebar__link').on('click', linkClick);
      $(window).on('scroll', menuScroll); //scrollSpy);
    }
  }
})();


//sidebar
/*
var menuSidebar = (function() {
	var blog = document.querySelector('#js_scroll_blog');
	var menu = document.querySelector('#js_menu_sidebar');
	console.log(menu);
	var windowMargin = Math.ceil($(window).height());
	console.log('windowMargin='+windowMargin);

	var curArticle=0;
	$('.menu-sidebar__link').first().addClass('menu-sidebar__link_active');



	return {
		scroll: function(block, windowScroll, strafeAmount) {
			var elements = $('.article');
			var items = $('.menu-sidebar__item');
			var item = items[curArticle];

			//$('.menu-sidebar__item').first().removeClass('menu-sidebar__item_active');

			console.log(items[curArticle]);

			// ìåíþ äîëæíî çàôèêñèðîâàòüñÿ ïðè ïðîêðóòêå!
			if (windowScroll>300) {
				$('#js_menu_sidebar').addClass('menu-sidebar__fixed');
			} else {
				$('#js_menu_sidebar').removeClass('menu-sidebar__fixed');
			}

			if ((windowScroll>300)&&(windowScroll<1000)) {
				console.log(1);
				curArticle = 1;

			} else if ((windowScroll>1000)&&(windowScroll<2000)) {
				console.log(2);
				curArticle = 2;

			} else if ((windowScroll>2000)&&(windowScroll<3000)) {
				console.log(3);
				curArticle = 3;
			};

			//items[curArticle].addClass('menu-sidebar__item_active'); 
		
			//console.log(windowScroll);
		},

		init: function(wScroll) {
			

			this.scroll(blog, wScroll, 45);
		}
	};
}());
*/
/*
window.onscroll = function() {
	var wScroll = window.pageYOffset;

	//console.log(wScroll);
	menuSidebar.init(wScroll);
}

*/

/*
var menu_sidebar = (function () {
  var container = $('.js-container'),
    sidebar = $('.js-sidebar'),
    $items = $('.article'),
    activeClass = 'sidebar__item--active';

  var circleClick = function (e) {
    var $this = $(this);
    if (sidebar.hasClass('sidebar__circle--active')) {
      sidebar
        .animate({
          'right': '100vw'
        })
        .removeClass('sidebar__circle--active');
      // container
      //   .animate({
      //     'left': '0%'
      //   })
    } else {
      sidebar
        .addClass('sidebar__circle--active')
        .animate({
          'right': '10vw'
        });
      // container
      //   .animate({
      //     'left' : '90%'
      //   });
    }
  };

  var linkClick = function (e) {
    e.preventDefault();

    var href = $(this).data('href'),
      el = $(href),
      top = el.offset().top;
    $('html, body').animate({
      scrollTop: top
    });
  };

  var scrollSpy = function() {
    var fromTop = $(document).scrollTop(),
      allItems = [],
      $currentItem;
    allItems = $items.filter(function() {
      return $(this).offset().top < fromTop;
    });
    $currentItem = allItems.eq(allItems.length - 1);

    $('.sidebar__item').removeClass(activeClass);
    if ($currentItem.length < 1) {
      $('.sidebar__item').eq(0).addClass(activeClass);
    } else {
      $($currentItem.data('link')).addClass(activeClass);
    }
  };
  return {
    init: function () {
      $('.sidebar__circle').on('click', circleClick);
      $('.js-sidebar__link').on('click', linkClick);
      $(window).on('scroll', scrollSpy);
    }
  }
})(); 
*/