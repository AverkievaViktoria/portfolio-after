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
var auth = (function () {

	return {
		init: function () {
			console.log('auth.init');
		}
	}
})();
var flip = (function () {

  return {
    init: function () {
      console.log('flip.init');
    }
  }
})();

//flip
/*var btn_autorization = $('.js-button__autorization');
var card = $('.flip-card.effect__click');
console.log(btn_autorization);
console.log(card);


(function() {

  
  var cards = document.querySelectorAll('.card.effect__click');
  var btns = document.querySelectorAll('.js-button__autorization');
  var btns_esc = document.querySelectorAll('.esc');
  var btns_enter = document.querySelectorAll('.enter');
  console.log(btns);
  console.log(cards);
  console.log(btns_esc);
  console.log(btns_enter);

  var btn = btns[0];
  var btn_esc = btns_esc[0];
  var btn_enter = btns_enter[0];
  var card = cards[0];

  clickbtnListener( btn );
  clickbtn_escListener( btn_esc );
  clickbtn_enterListener( btn_enter );

  console.log(btn);
  console.log(card);
  function clickbtnListener(btn) {
    btn.addEventListener( "click", function() {
      console.log('btn pressed');
      var c = card.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
  function clickbtn_escListener(btn_esc) {
    btn_esc.addEventListener( "click", function() {
      console.log('btn_esc pressed');
      var c = card.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
  function clickbtn_enterListener(btn_enter) {
    btn_enter.addEventListener( "click", function() {
      console.log('btn_enter pressed');
      var c = card.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
})();
*/
var form_contact = (function () {

  return {
    init: function () {
      console.log('form_contact.init');
    }
  }
})();
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
//login
var preloader = (function () {
  let percentsTotal = 0;
  const preloader = $('.preloader');

  // ÒÓ·ÂÂÏ ‚ÒÂ ˝ÎÂÏÂÌÚ˚
  const imgPaths = $('*').map((ndx, element) => {
    const isImg = $(element).is('img'); // ˇ‚ÎˇÂÚÒˇ ÎË Í‡ÚËÌÍÓÈ - ‚ÂÌÂÚ true
    const background = $(element).css('background-image');

    let path = '';

    if (background != 'none') {
      // Û·Ë‡ÂÏ Í‡‚˚˜ÍË Ë ÒÍÓ·ÍË, path = background ‚ÂÌÂÚ url('...') ‚ÂÒ¸, ‡ Ì‡Ï Ì‡‰Ó ÚÓÎ¸ÍÓ Ù‡ÈÎ Ò ÔÛÚÂÏ
      path = background.replace('url("', '').replace('")', '');
    }

    if (isImg) {
      path = $(element).attr('src');
    }

    if (path) return path;
  });

  console.log(imgPaths);

  // ÒÍÓÎ¸ÍÓ ‚ÒÂ„Ó total Ë ÒÍÓÎ¸ÍÓ Â˘Â Á‡„ÛÁËÚ¸ current
  const setPercents = (total, current) => {
    // ÓÍÛ„ÎËÏ ‚ ·ÓÎ¸¯Û˛ ÒÚÓÓÌÛ
    const percents = Math.ceil(current / total * 100);
    console.log(percents);
    
    $('.preloader__percents').text(`${percents}%`);

    // Û·Â‡ÂÚ opasity ‰Ó 0 Ë ‚˚ÒÚ‡‚ÎˇÂÚ display: none
    // ÏÓÊÌÓ ÔÂÂ‰‡Ú¸ ÏËÎÎËÒÂÍÛÌ‰˚ Ë callback fadeOut(1000, () => {})
    if (percents >= 100) preloader.fadeOut(2000); // 400ÏÒ ÔÓ ÛÏÓÎ˜‡ÌË˛, fadeIn slideOut slideIn slideToggle show hide 
  }


  const loadImages = (images) => {
    if (!images.length) return;

    images.forEach((img, i, images) => {

      //for (int j=0;j<1;j++) j=j;
      const fakeImg = $('<img>', {
        attr : {
          src : img
        }
      });

      // Ó·‡·ÓÚÍ‡ ÌÂÒÍÓÎ¸ÍËı ÒÓ·˚ÚËÈ - Á‡„ÛÁÍ‡ Ë Ó¯Ë·Í‡
      fakeImg.on('load error', () => {
        console.log(percentsTotal);
        percentsTotal++;
        setPercents(images.length, percentsTotal);
      });
    })
  }

  const imgs = imgPaths.toArray();

  return {
    init: function () {
      console.log('preloader.init');
      loadImages(imgs);
    }
  }

})();
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

			// √¨√•√≠√æ √§√Æ√´√¶√≠√Æ √ß√†√¥√®√™√±√®√∞√Æ√¢√†√≤√º√±√ø √Ø√∞√® √Ø√∞√Æ√™√∞√≥√≤√™√•!
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
/*
–¥–æ–±–∞–≤–∏—Ç—å:
- –∞–Ω–∏–º–∞—Ü–∏—é –∑–∞–≥–æ–ª–æ–≤–∫–∞
- –ø—Ä–µ–ª–æ–¥–µ—Ä –∑–∞–≥—Ä—É–∑–∫–∏ –≤–µ—Ä—Ö–Ω–µ–π –∫–∞—Ä—Ç–∏–Ω–∫–∏
- –¥–≤–∏–∂–µ–Ω–∏–µ –∫–∞—Ä—Ç–∏–Ω–æ–∫ –Ω–∞ –∫–Ω–æ–ø–∫–∞—Ö - –ø–µ—Ä–µ–ª–∏—Å—Ç—ã–≤–∞–Ω–∏–µ

(–æ—à–∏–±–∫–∞ –∞–¥–∞–ø—Ç–∏–≤–∞ –ø—Ä–∏ —É–º–µ–Ω—å—à–µ–Ω–∏–∏ —ç–∫—Ä–∞–Ω–∞ - –∫–Ω–æ–ø–∫–∏ –Ω–∞–ª–µ–∑–∞—é—Ç –Ω–∞ –∫–∞—Ä—Ç–∏–Ω–∫—É –≤–Ω–∏–∑—É (clearfix?))
*/
var data = [
  {
      image: "works-1.png",
      title: "–°–∞–π—Ç —à–∫–æ–ª—ã –æ–Ω–ª–∞–π–Ω –æ–±—Ä–∞–∑–æ–≤–∞–Ω–∏—è 1",
      skills: ["html", "css", "javascript"],
      link: "#"
  },
  {
      image: "works-2.png",
      title: "–°–∞–π—Ç —à–∫–æ–ª—ã –æ–Ω–ª–∞–π–Ω –æ–±—Ä–∞–∑–æ–≤–∞–Ω–∏—è 2",
      skills: ["css", "html"],
      link: "#"
  },
  {
      image: "works-3.png",
      title: "–°–∞–π—Ç —à–∫–æ–ª—ã –æ–Ω–ª–∞–π–Ω –æ–±—Ä–∞–∑–æ–≤–∞–Ω–∏—è 3",
      skills: ["js", "html"],
      link: "#"
  },
  {
      image: "works-4.png",
      title: "–°–∞–π—Ç —à–∫–æ–ª—ã –æ–Ω–ª–∞–π–Ω –æ–±—Ä–∞–∑–æ–≤–∞–Ω–∏—è 4",
      skills: ["js"],
      link: "#"
  }
];


var slider = (function () {
  const duration = 500;
  let isloading = false;
  let currentSlide = 0;
  let dataLength = data.length;

  let
    sliderTitle = $('.js_slider-title'),
    sliderSkills = $('.js_slider-skills'),
    sliderImg = $('img.slider__display-pic'),
    btnLeft = $('.slider__btn_left'),
    btnRight = $('.slider__btn_right'),
    sliderLink = $('.js_slider-link');


  function getSlide(value, dataLength) {
    if(value >= dataLength){
      return 0
    } else if(value < 0){
      return dataLength - 1;
    } else {
      return value;
    }
  }


  var setSlide = function( currentSlide, strafe ) {
    //console.log('currentSlide=',currentSlide);

    var prev = getSlide(currentSlide - 1, dataLength);
    var next = getSlide(currentSlide + 1, dataLength);

    // ? –ø–æ–ª–æ–∂–∏—Ç—å –≤ background
    sliderImg.attr('src', '../../assets/img/'+`${data[currentSlide].image}`);

    var urlLeft = 'url(../../assets/img/'+`${data[prev].image}`+')';
    console.log(urlLeft);
    // –∞–Ω–∏–º–∞—Ü–∏—è css
    /*btnLeft.animate({
        'top': `${strafe}%`,
    }, 1000); */

    btnLeft.css('background-image', 'url(../../assets/img/'+`${data[prev].image}`+')');
    btnRight.css('background-image', 'url(../../assets/img/'+`${data[next].image}`+')');
    //btnLeft.animate({background-image: 'url(../../assets/img/'+`${data[prev].image}`+')'});
    //btnRight.animate({background-image: 'url(../../assets/img/'+`${data[next].image}`+')'});
/*
$("#round2").hover(function() {
  $(this).animate({background-image:'url(images/round2.gif)'});
}, function() {});

<script type="text/javascript" src="/misc/pack.2.js"></script>
<div id="my" style="height: 100px; background: crimson">–ù–∞–≤–µ–¥–∏—Ç–µ –Ω–∞ —ç—Ç–æ—Ç –¥–∏–≤</div>
<script>
$("#my").hover(function(){
$(this).css('backgroundImage', 'url(http://javascript.ru/forum/images/ca_serenity/misc/logo.gif)')
})
</script>
*/


    sliderTitle.text(data[currentSlide].title);

    var skillsText='';
    var length = data[currentSlide].skills.length;
    for(var i=0;i<length;i++) {
      skillsText+=data[currentSlide].skills[i];
      if (i != length-1) skillsText += ', ';
    }
    sliderSkills.text(skillsText);

    sliderLink.attr('href', `${data[currentSlide].link}`);

  }  


  var moveSlides = function(direction) { 
    let strafeTopPercents = direction === 'down' ? 100 : -100;
    if (direction==='down') {
      currentSlide = getSlide(currentSlide - 1, dataLength);
    } else {
      currentSlide = getSlide(currentSlide + 1, dataLength);
    }
    setSlide(currentSlide, strafeTopPercents);
    isloading = false;
  }

  return {
    init: function () {
      console.log('slider.init');
      currentSlide = 0;
      setSlide(currentSlide);

      $('.slider__btn_left').on('click', function (e) {
        e.preventDefault();

        if (!isloading) {
          isloading = true;          
          moveSlides('down');
          console.log('slider__btn_left');
        }
      });
      $('.slider__btn_right').on('click', function (e) {
        e.preventDefault();

        if (!isloading) {
          isloading = true;    
          moveSlides('up');
          console.log('slider__btn_right');
        }
      });
    }
  }
})();

//slider
/*const duration = 500;
let counter = 1;
let inProgress = false;

const moveSlides = (container, direction) => {
  let items = container.find('.slider__item');
  let activeItem = items.filter('.active');
  let strafeTopPercesnts = direction === 'down' ? 100 : -100;

  if (counter >= items.length) counter = 0;

  const reqItem = items.eq(counter);

  activeItem.animate({
    'top': `${strafeTopPercesnts}%`
  }, duration);

  reqItem.animate({
    top: 0
  }, duration, function () {
    activeItem.removeClass('active')
      .css('top', `${-strafeTopPercesnts}%`);
    $(this).addClass('active');

    inProgress = false;
  });
}

const run = () => {
  $('.slider__controls-top').on('click', function (e) {
    e.preventDefault()

    if (inProgress) return;
    inProgress = true;

    moveSlides($('.slider_first'), 'down');
    moveSlides($('.slider_opposite'), 'up');
    counter++;

  });
}

export default run;
*/
// slideshow
/*export default () => {

  $('.slideshow__link').on('click', e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const container = $this.closest('.slideshow');
    const path = $this.attr('href');
    const display = container.find('.slideshow__display-pic');
    const preloader = $('#preloader');
    const fadedOut = $.Deferred();
    const loaded = $.Deferred();

    display.fadeOut(() => {
      fadedOut.resolve();
    })

    fadedOut.done(() => {
      preloader.show();
      display.attr('src', path).on('load', () => {
        loaded.resolve();
      })
    })

    loaded.done(() => {
      preloader.hide();
      display.show();
    })
  });
}*/

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
// parallax
var parallaxContainer = document.getElementById('js_parallax');
var layers = parallaxContainer.children;
  //console.log(layers);  

const moveLayers = function (e) {
  const initialX = (window.innerWidth / 2) - e.pageX;
  const initialY = (window.innerHeight / 2) - e.pageY;
  //console.log(initialX, initialY);
  [].slice.call(layers).forEach((layer, index) => {
    const divider = index / 100;
    const positionX = initialX * divider;
    const positionY = initialY * divider;
    const bottomPosition = (window.innerHeight / 2) * divider;
    const transformString = `translate(${positionX}px ,${positionY}px)`;
    const image = layer.firstElementChild;
//console.log(index, divider, initialX, initialY);
    layer.style.transform = transformString;
    image.style.bottom = `-${bottomPosition}px`;
  });
};

window.addEventListener('mousemove', moveLayers);


/*
export default moveLayers;


export default function () {
    let paralax = (function () {
        let mountains = document.getElementById('js_parallax_night_mountains');

        return {
            move: function (block, initialX, initialY, amount) {
                let transformString = 'translate(' + initialX*amount + 'px,' + initialY*amount + 'px)',
                    style = block.style;

                style.transform = transformString;
            },
            init: function (initialX, initialY) {
                this.move(mountains, initialX, initialY, 0.01);
            },
        };
    }());

    window.onmousemove = function (e) {
        let initialX = (window.innerWidth / 2) - e.pageX,
            initialY = (window.innerHeight / 2) - e.pageY;

        paralax.init(initialX, initialY);
    };
}
*/
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImF1dGguanMiLCJmbGlwLmpzIiwiZm9ybV9jb250YWN0LmpzIiwiaGFtYnVyZ2VyLmpzIiwibG9naW4uanMiLCJwcmVsb2FkZXIuanMiLCJtZW51X3NpZGViYXIuanMiLCJzbGlkZXIuanMiLCJzbGlkZXNob3cuanMiLCJwYXJhbGxheF9zY3JvbGwuanMiLCJwYXJhbGxheF9tb3VzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9hcHBcbiQoZnVuY3Rpb24gKCkge1xuICBwcmVsb2FkZXIuaW5pdCgpO1xuXHRjb25zb2xlLmxvZygnc3RhcnQnKTtcblx0bWVudV9zaWRlYmFyLmluaXQoKTtcblx0YXV0aC5pbml0KCk7XG5cdGZsaXAuaW5pdCgpO1xuXHRmb3JtX2NvbnRhY3QuaW5pdCgpO1xuXHRoYW1idXJnZXIuaW5pdCgpO1xuICBzbGlkZXIuaW5pdCgpO1xuIFxuLy9cdHBhcmFsbGF4X3Njcm9sbC5pbml0KCk7XG5cdHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuXHRcdGxldCB3U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRcdHNjcm9sbFBhcmFsbGF4LmluaXQod1Njcm9sbCk7XG5cdH1cblxuICAvL2FkbWluX2Jsb2cuaW5pdCgpO1xuICAvL2FkbWluX3dvcmsuaW5pdCgpO1xuICAvL2FkbWluX2Fib3V0LmluaXQoKTtcbiAgLy9sb2dpbi5pbml0KCk7XG59KTsiLCJ2YXIgYXV0aCA9IChmdW5jdGlvbiAoKSB7XG5cblx0cmV0dXJuIHtcblx0XHRpbml0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnYXV0aC5pbml0Jyk7XG5cdFx0fVxuXHR9XG59KSgpOyIsInZhciBmbGlwID0gKGZ1bmN0aW9uICgpIHtcblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmbGlwLmluaXQnKTtcbiAgICB9XG4gIH1cbn0pKCk7XG5cbi8vZmxpcFxuLyp2YXIgYnRuX2F1dG9yaXphdGlvbiA9ICQoJy5qcy1idXR0b25fX2F1dG9yaXphdGlvbicpO1xudmFyIGNhcmQgPSAkKCcuZmxpcC1jYXJkLmVmZmVjdF9fY2xpY2snKTtcbmNvbnNvbGUubG9nKGJ0bl9hdXRvcml6YXRpb24pO1xuY29uc29sZS5sb2coY2FyZCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuXG4gIFxuICB2YXIgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC5lZmZlY3RfX2NsaWNrJyk7XG4gIHZhciBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJ1dHRvbl9fYXV0b3JpemF0aW9uJyk7XG4gIHZhciBidG5zX2VzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lc2MnKTtcbiAgdmFyIGJ0bnNfZW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW50ZXInKTtcbiAgY29uc29sZS5sb2coYnRucyk7XG4gIGNvbnNvbGUubG9nKGNhcmRzKTtcbiAgY29uc29sZS5sb2coYnRuc19lc2MpO1xuICBjb25zb2xlLmxvZyhidG5zX2VudGVyKTtcblxuICB2YXIgYnRuID0gYnRuc1swXTtcbiAgdmFyIGJ0bl9lc2MgPSBidG5zX2VzY1swXTtcbiAgdmFyIGJ0bl9lbnRlciA9IGJ0bnNfZW50ZXJbMF07XG4gIHZhciBjYXJkID0gY2FyZHNbMF07XG5cbiAgY2xpY2tidG5MaXN0ZW5lciggYnRuICk7XG4gIGNsaWNrYnRuX2VzY0xpc3RlbmVyKCBidG5fZXNjICk7XG4gIGNsaWNrYnRuX2VudGVyTGlzdGVuZXIoIGJ0bl9lbnRlciApO1xuXG4gIGNvbnNvbGUubG9nKGJ0bik7XG4gIGNvbnNvbGUubG9nKGNhcmQpO1xuICBmdW5jdGlvbiBjbGlja2J0bkxpc3RlbmVyKGJ0bikge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coJ2J0biBwcmVzc2VkJyk7XG4gICAgICB2YXIgYyA9IGNhcmQuY2xhc3NMaXN0O1xuICAgICAgYy5jb250YWlucyhcImZsaXBwZWRcIikgPT09IHRydWUgPyBjLnJlbW92ZShcImZsaXBwZWRcIikgOiBjLmFkZChcImZsaXBwZWRcIik7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gY2xpY2tidG5fZXNjTGlzdGVuZXIoYnRuX2VzYykge1xuICAgIGJ0bl9lc2MuYWRkRXZlbnRMaXN0ZW5lciggXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdidG5fZXNjIHByZXNzZWQnKTtcbiAgICAgIHZhciBjID0gY2FyZC5jbGFzc0xpc3Q7XG4gICAgICBjLmNvbnRhaW5zKFwiZmxpcHBlZFwiKSA9PT0gdHJ1ZSA/IGMucmVtb3ZlKFwiZmxpcHBlZFwiKSA6IGMuYWRkKFwiZmxpcHBlZFwiKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBjbGlja2J0bl9lbnRlckxpc3RlbmVyKGJ0bl9lbnRlcikge1xuICAgIGJ0bl9lbnRlci5hZGRFdmVudExpc3RlbmVyKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coJ2J0bl9lbnRlciBwcmVzc2VkJyk7XG4gICAgICB2YXIgYyA9IGNhcmQuY2xhc3NMaXN0O1xuICAgICAgYy5jb250YWlucyhcImZsaXBwZWRcIikgPT09IHRydWUgPyBjLnJlbW92ZShcImZsaXBwZWRcIikgOiBjLmFkZChcImZsaXBwZWRcIik7XG4gICAgfSk7XG4gIH1cbn0pKCk7XG4qLyIsInZhciBmb3JtX2NvbnRhY3QgPSAoZnVuY3Rpb24gKCkge1xuXG4gIHJldHVybiB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm1fY29udGFjdC5pbml0Jyk7XG4gICAgfVxuICB9XG59KSgpOyIsInZhciBoYW1idXJnZXIgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgYm94SGFtYnVyZ2VyID0gJCgnLmpzLWhhbWJ1cmdlcicpO1xuICB2YXIgbWVudUhhbWJ1cmdlciA9ICQoJy5qcy1tZW51LWhhbWJ1cmdlcicpO1xuICBcbiAgcmV0dXJuIHtcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnaGFtYnVyZ2VyLmluaXQnKTtcbiAgICAgICQoJy5qcy1oYW1idXJnZXJfX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgXHRlLnByZXZlbnREZWZhdWx0KCk7ICAgICAgXHRcblx0XHRcdFx0Ym94SGFtYnVyZ2VyLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIFx0bWVudUhhbWJ1cmdlci5mYWRlVG9nZ2xlKCk7XG4gICAgICB9KVx0XG4gICAgfVxuICB9XG59KSgpOyIsIi8vbG9naW4iLCJ2YXIgcHJlbG9hZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHBlcmNlbnRzVG90YWwgPSAwO1xuICBjb25zdCBwcmVsb2FkZXIgPSAkKCcucHJlbG9hZGVyJyk7XG5cbiAgLy8g77+977+977+977+977+977+977+9IO+/ve+/ve+/vSDvv73vv73vv73vv73vv73vv73vv73vv71cbiAgY29uc3QgaW1nUGF0aHMgPSAkKCcqJykubWFwKChuZHgsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBpc0ltZyA9ICQoZWxlbWVudCkuaXMoJ2ltZycpOyAvLyDvv73vv73vv73vv73vv73vv73vv73vv70g77+977+9IO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSAtIO+/ve+/ve+/ve+/ve+/ve+/vSB0cnVlXG4gICAgY29uc3QgYmFja2dyb3VuZCA9ICQoZWxlbWVudCkuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyk7XG5cbiAgICBsZXQgcGF0aCA9ICcnO1xuXG4gICAgaWYgKGJhY2tncm91bmQgIT0gJ25vbmUnKSB7XG4gICAgICAvLyDvv73vv73vv73vv73vv73vv73vv70g77+977+977+977+977+977+977+9IO+/vSDvv73vv73vv73vv73vv73vv70sIHBhdGggPSBiYWNrZ3JvdW5kIO+/ve+/ve+/ve+/ve+/ve+/vSB1cmwoJy4uLicpIO+/ve+/ve+/ve+/vSwg77+9IO+/ve+/ve+/vSDvv73vv73vv73vv70g77+977+977+977+977+977+9IO+/ve+/ve+/ve+/vSDvv70g77+977+977+977+977+9XG4gICAgICBwYXRoID0gYmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnXCIpJywgJycpO1xuICAgIH1cblxuICAgIGlmIChpc0ltZykge1xuICAgICAgcGF0aCA9ICQoZWxlbWVudCkuYXR0cignc3JjJyk7XG4gICAgfVxuXG4gICAgaWYgKHBhdGgpIHJldHVybiBwYXRoO1xuICB9KTtcblxuICBjb25zb2xlLmxvZyhpbWdQYXRocyk7XG5cbiAgLy8g77+977+977+977+977+977+977+9IO+/ve+/ve+/ve+/ve+/vSB0b3RhbCDvv70g77+977+977+977+977+977+977+9IO+/ve+/ve+/vSDvv73vv73vv73vv73vv73vv73vv73vv73vv70gY3VycmVudFxuICBjb25zdCBzZXRQZXJjZW50cyA9ICh0b3RhbCwgY3VycmVudCkgPT4ge1xuICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSDvv70g77+977+977+977+977+977+977+9IO+/ve+/ve+/ve+/ve+/ve+/ve+/vVxuICAgIGNvbnN0IHBlcmNlbnRzID0gTWF0aC5jZWlsKGN1cnJlbnQgLyB0b3RhbCAqIDEwMCk7XG4gICAgY29uc29sZS5sb2cocGVyY2VudHMpO1xuICAgIFxuICAgICQoJy5wcmVsb2FkZXJfX3BlcmNlbnRzJykudGV4dChgJHtwZXJjZW50c30lYCk7XG5cbiAgICAvLyDvv73vv73vv73vv73vv73vv73vv70gb3Bhc2l0eSDvv73vv70gMCDvv70g77+977+977+977+977+977+977+977+977+977+9IGRpc3BsYXk6IG5vbmVcbiAgICAvLyDvv73vv73vv73vv73vv70g77+977+977+977+977+977+977+977+9IO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSDvv70gY2FsbGJhY2sgZmFkZU91dCgxMDAwLCAoKSA9PiB7fSlcbiAgICBpZiAocGVyY2VudHMgPj0gMTAwKSBwcmVsb2FkZXIuZmFkZU91dCgyMDAwKTsgLy8gNDAw77+977+9IO+/ve+/vSDvv73vv73vv73vv73vv73vv73vv73vv73vv70sIGZhZGVJbiBzbGlkZU91dCBzbGlkZUluIHNsaWRlVG9nZ2xlIHNob3cgaGlkZSBcbiAgfVxuXG5cbiAgY29uc3QgbG9hZEltYWdlcyA9IChpbWFnZXMpID0+IHtcbiAgICBpZiAoIWltYWdlcy5sZW5ndGgpIHJldHVybjtcblxuICAgIGltYWdlcy5mb3JFYWNoKChpbWcsIGksIGltYWdlcykgPT4ge1xuXG4gICAgICAvL2ZvciAoaW50IGo9MDtqPDE7aisrKSBqPWo7XG4gICAgICBjb25zdCBmYWtlSW1nID0gJCgnPGltZz4nLCB7XG4gICAgICAgIGF0dHIgOiB7XG4gICAgICAgICAgc3JjIDogaW1nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyDvv73vv73vv73vv73vv73vv73vv73vv73vv70g77+977+977+977+977+977+977+977+977+977+9IO+/ve+/ve+/ve+/ve+/ve+/ve+/vSAtIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSDvv70g77+977+977+977+977+977+9XG4gICAgICBmYWtlSW1nLm9uKCdsb2FkIGVycm9yJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwZXJjZW50c1RvdGFsKTtcbiAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xuICAgICAgICBzZXRQZXJjZW50cyhpbWFnZXMubGVuZ3RoLCBwZXJjZW50c1RvdGFsKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICBjb25zdCBpbWdzID0gaW1nUGF0aHMudG9BcnJheSgpO1xuXG4gIHJldHVybiB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coJ3ByZWxvYWRlci5pbml0Jyk7XG4gICAgICBsb2FkSW1hZ2VzKGltZ3MpO1xuICAgIH1cbiAgfVxuXG59KSgpOyIsInZhciBtZW51X3NpZGViYXIgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgYmxvZyA9ICQoJyNqc19zY3JvbGxfYmxvZycpO1xuICB2YXIgbWVudSA9ICQoJyNqc19tZW51X3NpZGViYXInKTsgIFxuICB2YXIgJGl0ZW1zID0gJCgnLmFydGljbGUnKTtcblxuICB2YXIgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLm91dGVySGVpZ2h0KCk7XG5cbiAgJCgnLm1lbnUtc2lkZWJhcl9fbGluaycpLmZpcnN0KCkuYWRkQ2xhc3MoJ21lbnUtc2lkZWJhcl9fbGlua19hY3RpdmUnKTtcblxuICB2YXIgbWVudVNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIGlmICh3aW5kb3dTY3JvbGw+MzAwKSB7XG4gICAgICAgICQoJyNqc19tZW51X3NpZGViYXInKS5hZGRDbGFzcygnbWVudS1zaWRlYmFyX19maXhlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI2pzX21lbnVfc2lkZWJhcicpLnJlbW92ZUNsYXNzKCdtZW51LXNpZGViYXJfX2ZpeGVkJyk7XG4gICAgICB9XG5cbiAgICB2YXIgZnJvbVRvcCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKzMwMDtcbiAgICB2YXIgYWxsSXRlbXMgPSBbXTtcbiAgICB2YXIgJGN1cnJlbnRJdGVtO1xuICAgIGFsbEl0ZW1zID0gJGl0ZW1zLmZpbHRlcihmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkKHRoaXMpLm9mZnNldCgpLnRvcCA8IGZyb21Ub3A7XG4gICAgfSk7XG4gICAgJGN1cnJlbnRJdGVtID0gYWxsSXRlbXMuZXEoYWxsSXRlbXMubGVuZ3RoIC0gMSk7XG5cbiAgICAkKCcubWVudS1zaWRlYmFyX19saW5rJykucmVtb3ZlQ2xhc3MoJ21lbnUtc2lkZWJhcl9fbGlua19hY3RpdmUnKTtcbiAgICBpZiAoJGN1cnJlbnRJdGVtLmxlbmd0aCA8IDEpIHtcbiAgICAgICQoJy5tZW51LXNpZGViYXJfX2xpbmsnKS5lcSgwKS5hZGRDbGFzcygnbWVudS1zaWRlYmFyX19saW5rX2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWVudS1zaWRlYmFyX19saW5rW2hyZWY9XCInKyRjdXJyZW50SXRlbS5kYXRhKCdsaW5rJykrJ1wiXScpLmFkZENsYXNzKCdtZW51LXNpZGViYXJfX2xpbmtfYWN0aXZlJyk7XG4gICAgfSAgXG5cbiAgfTsgIFxuICByZXR1cm4ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdtZW51X3NpZGViYXIuaW5pdCcpO1xuICAgICAgLy8kKCcuc2lkZWJhcl9fY2lyY2xlJykub24oJ2NsaWNrJywgY2lyY2xlQ2xpY2spO1xuICAgICAgLy8kKCcuanMtc2lkZWJhcl9fbGluaycpLm9uKCdjbGljaycsIGxpbmtDbGljayk7XG4gICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIG1lbnVTY3JvbGwpOyAvL3Njcm9sbFNweSk7XG4gICAgfVxuICB9XG59KSgpO1xuXG5cbi8vc2lkZWJhclxuLypcbnZhciBtZW51U2lkZWJhciA9IChmdW5jdGlvbigpIHtcblx0dmFyIGJsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNfc2Nyb2xsX2Jsb2cnKTtcblx0dmFyIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNfbWVudV9zaWRlYmFyJyk7XG5cdGNvbnNvbGUubG9nKG1lbnUpO1xuXHR2YXIgd2luZG93TWFyZ2luID0gTWF0aC5jZWlsKCQod2luZG93KS5oZWlnaHQoKSk7XG5cdGNvbnNvbGUubG9nKCd3aW5kb3dNYXJnaW49Jyt3aW5kb3dNYXJnaW4pO1xuXG5cdHZhciBjdXJBcnRpY2xlPTA7XG5cdCQoJy5tZW51LXNpZGViYXJfX2xpbmsnKS5maXJzdCgpLmFkZENsYXNzKCdtZW51LXNpZGViYXJfX2xpbmtfYWN0aXZlJyk7XG5cblxuXG5cdHJldHVybiB7XG5cdFx0c2Nyb2xsOiBmdW5jdGlvbihibG9jaywgd2luZG93U2Nyb2xsLCBzdHJhZmVBbW91bnQpIHtcblx0XHRcdHZhciBlbGVtZW50cyA9ICQoJy5hcnRpY2xlJyk7XG5cdFx0XHR2YXIgaXRlbXMgPSAkKCcubWVudS1zaWRlYmFyX19pdGVtJyk7XG5cdFx0XHR2YXIgaXRlbSA9IGl0ZW1zW2N1ckFydGljbGVdO1xuXG5cdFx0XHQvLyQoJy5tZW51LXNpZGViYXJfX2l0ZW0nKS5maXJzdCgpLnJlbW92ZUNsYXNzKCdtZW51LXNpZGViYXJfX2l0ZW1fYWN0aXZlJyk7XG5cblx0XHRcdGNvbnNvbGUubG9nKGl0ZW1zW2N1ckFydGljbGVdKTtcblxuXHRcdFx0Ly8gw6zDpcOtw74gw6TDrsOrw6bDrcOuIMOnw6DDtMOow6rDscOow7DDrsOiw6DDssO8w7HDvyDDr8Oww6ggw6/DsMOuw6rDsMOzw7LDqsOlIVxuXHRcdFx0aWYgKHdpbmRvd1Njcm9sbD4zMDApIHtcblx0XHRcdFx0JCgnI2pzX21lbnVfc2lkZWJhcicpLmFkZENsYXNzKCdtZW51LXNpZGViYXJfX2ZpeGVkJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCcjanNfbWVudV9zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ21lbnUtc2lkZWJhcl9fZml4ZWQnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCh3aW5kb3dTY3JvbGw+MzAwKSYmKHdpbmRvd1Njcm9sbDwxMDAwKSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygxKTtcblx0XHRcdFx0Y3VyQXJ0aWNsZSA9IDE7XG5cblx0XHRcdH0gZWxzZSBpZiAoKHdpbmRvd1Njcm9sbD4xMDAwKSYmKHdpbmRvd1Njcm9sbDwyMDAwKSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygyKTtcblx0XHRcdFx0Y3VyQXJ0aWNsZSA9IDI7XG5cblx0XHRcdH0gZWxzZSBpZiAoKHdpbmRvd1Njcm9sbD4yMDAwKSYmKHdpbmRvd1Njcm9sbDwzMDAwKSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygzKTtcblx0XHRcdFx0Y3VyQXJ0aWNsZSA9IDM7XG5cdFx0XHR9O1xuXG5cdFx0XHQvL2l0ZW1zW2N1ckFydGljbGVdLmFkZENsYXNzKCdtZW51LXNpZGViYXJfX2l0ZW1fYWN0aXZlJyk7IFxuXHRcdFxuXHRcdFx0Ly9jb25zb2xlLmxvZyh3aW5kb3dTY3JvbGwpO1xuXHRcdH0sXG5cblx0XHRpbml0OiBmdW5jdGlvbih3U2Nyb2xsKSB7XG5cdFx0XHRcblxuXHRcdFx0dGhpcy5zY3JvbGwoYmxvZywgd1Njcm9sbCwgNDUpO1xuXHRcdH1cblx0fTtcbn0oKSk7XG4qL1xuLypcbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuXHQvL2NvbnNvbGUubG9nKHdTY3JvbGwpO1xuXHRtZW51U2lkZWJhci5pbml0KHdTY3JvbGwpO1xufVxuXG4qL1xuXG4vKlxudmFyIG1lbnVfc2lkZWJhciA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBjb250YWluZXIgPSAkKCcuanMtY29udGFpbmVyJyksXG4gICAgc2lkZWJhciA9ICQoJy5qcy1zaWRlYmFyJyksXG4gICAgJGl0ZW1zID0gJCgnLmFydGljbGUnKSxcbiAgICBhY3RpdmVDbGFzcyA9ICdzaWRlYmFyX19pdGVtLS1hY3RpdmUnO1xuXG4gIHZhciBjaXJjbGVDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICBpZiAoc2lkZWJhci5oYXNDbGFzcygnc2lkZWJhcl9fY2lyY2xlLS1hY3RpdmUnKSkge1xuICAgICAgc2lkZWJhclxuICAgICAgICAuYW5pbWF0ZSh7XG4gICAgICAgICAgJ3JpZ2h0JzogJzEwMHZ3J1xuICAgICAgICB9KVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NpZGViYXJfX2NpcmNsZS0tYWN0aXZlJyk7XG4gICAgICAvLyBjb250YWluZXJcbiAgICAgIC8vICAgLmFuaW1hdGUoe1xuICAgICAgLy8gICAgICdsZWZ0JzogJzAlJ1xuICAgICAgLy8gICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBzaWRlYmFyXG4gICAgICAgIC5hZGRDbGFzcygnc2lkZWJhcl9fY2lyY2xlLS1hY3RpdmUnKVxuICAgICAgICAuYW5pbWF0ZSh7XG4gICAgICAgICAgJ3JpZ2h0JzogJzEwdncnXG4gICAgICAgIH0pO1xuICAgICAgLy8gY29udGFpbmVyXG4gICAgICAvLyAgIC5hbmltYXRlKHtcbiAgICAgIC8vICAgICAnbGVmdCcgOiAnOTAlJ1xuICAgICAgLy8gICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGxpbmtDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIGhyZWYgPSAkKHRoaXMpLmRhdGEoJ2hyZWYnKSxcbiAgICAgIGVsID0gJChocmVmKSxcbiAgICAgIHRvcCA9IGVsLm9mZnNldCgpLnRvcDtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxUb3A6IHRvcFxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBzY3JvbGxTcHkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZnJvbVRvcCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpLFxuICAgICAgYWxsSXRlbXMgPSBbXSxcbiAgICAgICRjdXJyZW50SXRlbTtcbiAgICBhbGxJdGVtcyA9ICRpdGVtcy5maWx0ZXIoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJCh0aGlzKS5vZmZzZXQoKS50b3AgPCBmcm9tVG9wO1xuICAgIH0pO1xuICAgICRjdXJyZW50SXRlbSA9IGFsbEl0ZW1zLmVxKGFsbEl0ZW1zLmxlbmd0aCAtIDEpO1xuXG4gICAgJCgnLnNpZGViYXJfX2l0ZW0nKS5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzcyk7XG4gICAgaWYgKCRjdXJyZW50SXRlbS5sZW5ndGggPCAxKSB7XG4gICAgICAkKCcuc2lkZWJhcl9faXRlbScpLmVxKDApLmFkZENsYXNzKGFjdGl2ZUNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgkY3VycmVudEl0ZW0uZGF0YSgnbGluaycpKS5hZGRDbGFzcyhhY3RpdmVDbGFzcyk7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5zaWRlYmFyX19jaXJjbGUnKS5vbignY2xpY2snLCBjaXJjbGVDbGljayk7XG4gICAgICAkKCcuanMtc2lkZWJhcl9fbGluaycpLm9uKCdjbGljaycsIGxpbmtDbGljayk7XG4gICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIHNjcm9sbFNweSk7XG4gICAgfVxuICB9XG59KSgpOyBcbiovIiwiLypcbtC00L7QsdCw0LLQuNGC0Yw6XG4tINCw0L3QuNC80LDRhtC40Y4g0LfQsNCz0L7Qu9C+0LLQutCwXG4tINC/0YDQtdC70L7QtNC10YAg0LfQsNCz0YDRg9C30LrQuCDQstC10YDRhdC90LXQuSDQutCw0YDRgtC40L3QutC4XG4tINC00LLQuNC20LXQvdC40LUg0LrQsNGA0YLQuNC90L7QuiDQvdCwINC60L3QvtC/0LrQsNGFIC0g0L/QtdGA0LXQu9C40YHRgtGL0LLQsNC90LjQtVxuXG4o0L7RiNC40LHQutCwINCw0LTQsNC/0YLQuNCy0LAg0L/RgNC4INGD0LzQtdC90YzRiNC10L3QuNC4INGN0LrRgNCw0L3QsCAtINC60L3QvtC/0LrQuCDQvdCw0LvQtdC30LDRjtGCINC90LAg0LrQsNGA0YLQuNC90LrRgyDQstC90LjQt9GDIChjbGVhcmZpeD8pKVxuKi9cbnZhciBkYXRhID0gW1xuICB7XG4gICAgICBpbWFnZTogXCJ3b3Jrcy0xLnBuZ1wiLFxuICAgICAgdGl0bGU6IFwi0KHQsNC50YIg0YjQutC+0LvRiyDQvtC90LvQsNC50L0g0L7QsdGA0LDQt9C+0LLQsNC90LjRjyAxXCIsXG4gICAgICBza2lsbHM6IFtcImh0bWxcIiwgXCJjc3NcIiwgXCJqYXZhc2NyaXB0XCJdLFxuICAgICAgbGluazogXCIjXCJcbiAgfSxcbiAge1xuICAgICAgaW1hZ2U6IFwid29ya3MtMi5wbmdcIixcbiAgICAgIHRpdGxlOiBcItCh0LDQudGCINGI0LrQvtC70Ysg0L7QvdC70LDQudC9INC+0LHRgNCw0LfQvtCy0LDQvdC40Y8gMlwiLFxuICAgICAgc2tpbGxzOiBbXCJjc3NcIiwgXCJodG1sXCJdLFxuICAgICAgbGluazogXCIjXCJcbiAgfSxcbiAge1xuICAgICAgaW1hZ2U6IFwid29ya3MtMy5wbmdcIixcbiAgICAgIHRpdGxlOiBcItCh0LDQudGCINGI0LrQvtC70Ysg0L7QvdC70LDQudC9INC+0LHRgNCw0LfQvtCy0LDQvdC40Y8gM1wiLFxuICAgICAgc2tpbGxzOiBbXCJqc1wiLCBcImh0bWxcIl0sXG4gICAgICBsaW5rOiBcIiNcIlxuICB9LFxuICB7XG4gICAgICBpbWFnZTogXCJ3b3Jrcy00LnBuZ1wiLFxuICAgICAgdGl0bGU6IFwi0KHQsNC50YIg0YjQutC+0LvRiyDQvtC90LvQsNC50L0g0L7QsdGA0LDQt9C+0LLQsNC90LjRjyA0XCIsXG4gICAgICBza2lsbHM6IFtcImpzXCJdLFxuICAgICAgbGluazogXCIjXCJcbiAgfVxuXTtcblxuXG52YXIgc2xpZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZHVyYXRpb24gPSA1MDA7XG4gIGxldCBpc2xvYWRpbmcgPSBmYWxzZTtcbiAgbGV0IGN1cnJlbnRTbGlkZSA9IDA7XG4gIGxldCBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG5cbiAgbGV0XG4gICAgc2xpZGVyVGl0bGUgPSAkKCcuanNfc2xpZGVyLXRpdGxlJyksXG4gICAgc2xpZGVyU2tpbGxzID0gJCgnLmpzX3NsaWRlci1za2lsbHMnKSxcbiAgICBzbGlkZXJJbWcgPSAkKCdpbWcuc2xpZGVyX19kaXNwbGF5LXBpYycpLFxuICAgIGJ0bkxlZnQgPSAkKCcuc2xpZGVyX19idG5fbGVmdCcpLFxuICAgIGJ0blJpZ2h0ID0gJCgnLnNsaWRlcl9fYnRuX3JpZ2h0JyksXG4gICAgc2xpZGVyTGluayA9ICQoJy5qc19zbGlkZXItbGluaycpO1xuXG5cbiAgZnVuY3Rpb24gZ2V0U2xpZGUodmFsdWUsIGRhdGFMZW5ndGgpIHtcbiAgICBpZih2YWx1ZSA+PSBkYXRhTGVuZ3RoKXtcbiAgICAgIHJldHVybiAwXG4gICAgfSBlbHNlIGlmKHZhbHVlIDwgMCl7XG4gICAgICByZXR1cm4gZGF0YUxlbmd0aCAtIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuXG4gIHZhciBzZXRTbGlkZSA9IGZ1bmN0aW9uKCBjdXJyZW50U2xpZGUsIHN0cmFmZSApIHtcbiAgICAvL2NvbnNvbGUubG9nKCdjdXJyZW50U2xpZGU9JyxjdXJyZW50U2xpZGUpO1xuXG4gICAgdmFyIHByZXYgPSBnZXRTbGlkZShjdXJyZW50U2xpZGUgLSAxLCBkYXRhTGVuZ3RoKTtcbiAgICB2YXIgbmV4dCA9IGdldFNsaWRlKGN1cnJlbnRTbGlkZSArIDEsIGRhdGFMZW5ndGgpO1xuXG4gICAgLy8gPyDQv9C+0LvQvtC20LjRgtGMINCyIGJhY2tncm91bmRcbiAgICBzbGlkZXJJbWcuYXR0cignc3JjJywgJy4uLy4uL2Fzc2V0cy9pbWcvJytgJHtkYXRhW2N1cnJlbnRTbGlkZV0uaW1hZ2V9YCk7XG5cbiAgICB2YXIgdXJsTGVmdCA9ICd1cmwoLi4vLi4vYXNzZXRzL2ltZy8nK2Ake2RhdGFbcHJldl0uaW1hZ2V9YCsnKSc7XG4gICAgY29uc29sZS5sb2codXJsTGVmdCk7XG4gICAgLy8g0LDQvdC40LzQsNGG0LjRjyBjc3NcbiAgICAvKmJ0bkxlZnQuYW5pbWF0ZSh7XG4gICAgICAgICd0b3AnOiBgJHtzdHJhZmV9JWAsXG4gICAgfSwgMTAwMCk7ICovXG5cbiAgICBidG5MZWZ0LmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoLi4vLi4vYXNzZXRzL2ltZy8nK2Ake2RhdGFbcHJldl0uaW1hZ2V9YCsnKScpO1xuICAgIGJ0blJpZ2h0LmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoLi4vLi4vYXNzZXRzL2ltZy8nK2Ake2RhdGFbbmV4dF0uaW1hZ2V9YCsnKScpO1xuICAgIC8vYnRuTGVmdC5hbmltYXRlKHtiYWNrZ3JvdW5kLWltYWdlOiAndXJsKC4uLy4uL2Fzc2V0cy9pbWcvJytgJHtkYXRhW3ByZXZdLmltYWdlfWArJyknfSk7XG4gICAgLy9idG5SaWdodC5hbmltYXRlKHtiYWNrZ3JvdW5kLWltYWdlOiAndXJsKC4uLy4uL2Fzc2V0cy9pbWcvJytgJHtkYXRhW25leHRdLmltYWdlfWArJyknfSk7XG4vKlxuJChcIiNyb3VuZDJcIikuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICQodGhpcykuYW5pbWF0ZSh7YmFja2dyb3VuZC1pbWFnZTondXJsKGltYWdlcy9yb3VuZDIuZ2lmKSd9KTtcbn0sIGZ1bmN0aW9uKCkge30pO1xuXG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvbWlzYy9wYWNrLjIuanNcIj48L3NjcmlwdD5cbjxkaXYgaWQ9XCJteVwiIHN0eWxlPVwiaGVpZ2h0OiAxMDBweDsgYmFja2dyb3VuZDogY3JpbXNvblwiPtCd0LDQstC10LTQuNGC0LUg0L3QsCDRjdGC0L7RgiDQtNC40LI8L2Rpdj5cbjxzY3JpcHQ+XG4kKFwiI215XCIpLmhvdmVyKGZ1bmN0aW9uKCl7XG4kKHRoaXMpLmNzcygnYmFja2dyb3VuZEltYWdlJywgJ3VybChodHRwOi8vamF2YXNjcmlwdC5ydS9mb3J1bS9pbWFnZXMvY2Ffc2VyZW5pdHkvbWlzYy9sb2dvLmdpZiknKVxufSlcbjwvc2NyaXB0PlxuKi9cblxuXG4gICAgc2xpZGVyVGl0bGUudGV4dChkYXRhW2N1cnJlbnRTbGlkZV0udGl0bGUpO1xuXG4gICAgdmFyIHNraWxsc1RleHQ9Jyc7XG4gICAgdmFyIGxlbmd0aCA9IGRhdGFbY3VycmVudFNsaWRlXS5za2lsbHMubGVuZ3RoO1xuICAgIGZvcih2YXIgaT0wO2k8bGVuZ3RoO2krKykge1xuICAgICAgc2tpbGxzVGV4dCs9ZGF0YVtjdXJyZW50U2xpZGVdLnNraWxsc1tpXTtcbiAgICAgIGlmIChpICE9IGxlbmd0aC0xKSBza2lsbHNUZXh0ICs9ICcsICc7XG4gICAgfVxuICAgIHNsaWRlclNraWxscy50ZXh0KHNraWxsc1RleHQpO1xuXG4gICAgc2xpZGVyTGluay5hdHRyKCdocmVmJywgYCR7ZGF0YVtjdXJyZW50U2xpZGVdLmxpbmt9YCk7XG5cbiAgfSAgXG5cblxuICB2YXIgbW92ZVNsaWRlcyA9IGZ1bmN0aW9uKGRpcmVjdGlvbikgeyBcbiAgICBsZXQgc3RyYWZlVG9wUGVyY2VudHMgPSBkaXJlY3Rpb24gPT09ICdkb3duJyA/IDEwMCA6IC0xMDA7XG4gICAgaWYgKGRpcmVjdGlvbj09PSdkb3duJykge1xuICAgICAgY3VycmVudFNsaWRlID0gZ2V0U2xpZGUoY3VycmVudFNsaWRlIC0gMSwgZGF0YUxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRTbGlkZSA9IGdldFNsaWRlKGN1cnJlbnRTbGlkZSArIDEsIGRhdGFMZW5ndGgpO1xuICAgIH1cbiAgICBzZXRTbGlkZShjdXJyZW50U2xpZGUsIHN0cmFmZVRvcFBlcmNlbnRzKTtcbiAgICBpc2xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coJ3NsaWRlci5pbml0Jyk7XG4gICAgICBjdXJyZW50U2xpZGUgPSAwO1xuICAgICAgc2V0U2xpZGUoY3VycmVudFNsaWRlKTtcblxuICAgICAgJCgnLnNsaWRlcl9fYnRuX2xlZnQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCFpc2xvYWRpbmcpIHtcbiAgICAgICAgICBpc2xvYWRpbmcgPSB0cnVlOyAgICAgICAgICBcbiAgICAgICAgICBtb3ZlU2xpZGVzKCdkb3duJyk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NsaWRlcl9fYnRuX2xlZnQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAkKCcuc2xpZGVyX19idG5fcmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCFpc2xvYWRpbmcpIHtcbiAgICAgICAgICBpc2xvYWRpbmcgPSB0cnVlOyAgICBcbiAgICAgICAgICBtb3ZlU2xpZGVzKCd1cCcpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzbGlkZXJfX2J0bl9yaWdodCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pKCk7XG5cbi8vc2xpZGVyXG4vKmNvbnN0IGR1cmF0aW9uID0gNTAwO1xubGV0IGNvdW50ZXIgPSAxO1xubGV0IGluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuY29uc3QgbW92ZVNsaWRlcyA9IChjb250YWluZXIsIGRpcmVjdGlvbikgPT4ge1xuICBsZXQgaXRlbXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbScpO1xuICBsZXQgYWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcignLmFjdGl2ZScpO1xuICBsZXQgc3RyYWZlVG9wUGVyY2VzbnRzID0gZGlyZWN0aW9uID09PSAnZG93bicgPyAxMDAgOiAtMTAwO1xuXG4gIGlmIChjb3VudGVyID49IGl0ZW1zLmxlbmd0aCkgY291bnRlciA9IDA7XG5cbiAgY29uc3QgcmVxSXRlbSA9IGl0ZW1zLmVxKGNvdW50ZXIpO1xuXG4gIGFjdGl2ZUl0ZW0uYW5pbWF0ZSh7XG4gICAgJ3RvcCc6IGAke3N0cmFmZVRvcFBlcmNlc250c30lYFxuICB9LCBkdXJhdGlvbik7XG5cbiAgcmVxSXRlbS5hbmltYXRlKHtcbiAgICB0b3A6IDBcbiAgfSwgZHVyYXRpb24sIGZ1bmN0aW9uICgpIHtcbiAgICBhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgLmNzcygndG9wJywgYCR7LXN0cmFmZVRvcFBlcmNlc250c30lYCk7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICBpblByb2dyZXNzID0gZmFsc2U7XG4gIH0pO1xufVxuXG5jb25zdCBydW4gPSAoKSA9PiB7XG4gICQoJy5zbGlkZXJfX2NvbnRyb2xzLXRvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoaW5Qcm9ncmVzcykgcmV0dXJuO1xuICAgIGluUHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgbW92ZVNsaWRlcygkKCcuc2xpZGVyX2ZpcnN0JyksICdkb3duJyk7XG4gICAgbW92ZVNsaWRlcygkKCcuc2xpZGVyX29wcG9zaXRlJyksICd1cCcpO1xuICAgIGNvdW50ZXIrKztcblxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcnVuO1xuKi8iLCIvLyBzbGlkZXNob3dcbi8qZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXG4gICQoJy5zbGlkZXNob3dfX2xpbmsnKS5vbignY2xpY2snLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCAkdGhpcyA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCBjb250YWluZXIgPSAkdGhpcy5jbG9zZXN0KCcuc2xpZGVzaG93Jyk7XG4gICAgY29uc3QgcGF0aCA9ICR0aGlzLmF0dHIoJ2hyZWYnKTtcbiAgICBjb25zdCBkaXNwbGF5ID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXNob3dfX2Rpc3BsYXktcGljJyk7XG4gICAgY29uc3QgcHJlbG9hZGVyID0gJCgnI3ByZWxvYWRlcicpO1xuICAgIGNvbnN0IGZhZGVkT3V0ID0gJC5EZWZlcnJlZCgpO1xuICAgIGNvbnN0IGxvYWRlZCA9ICQuRGVmZXJyZWQoKTtcblxuICAgIGRpc3BsYXkuZmFkZU91dCgoKSA9PiB7XG4gICAgICBmYWRlZE91dC5yZXNvbHZlKCk7XG4gICAgfSlcblxuICAgIGZhZGVkT3V0LmRvbmUoKCkgPT4ge1xuICAgICAgcHJlbG9hZGVyLnNob3coKTtcbiAgICAgIGRpc3BsYXkuYXR0cignc3JjJywgcGF0aCkub24oJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGxvYWRlZC5yZXNvbHZlKCk7XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBsb2FkZWQuZG9uZSgoKSA9PiB7XG4gICAgICBwcmVsb2FkZXIuaGlkZSgpO1xuICAgICAgZGlzcGxheS5zaG93KCk7XG4gICAgfSlcbiAgfSk7XG59Ki9cbiIsIi8vISBcbnZhciBzY3JvbGxQYXJhbGxheCA9IChmdW5jdGlvbigpIHtcblx0dmFyIGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC1wYXJhbGxheF9faW1hZ2UnKTtcblx0dmFyIHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLXBhcmFsbGF4X19oZXJvJyk7XG5cblx0cmV0dXJuIHtcblx0XHRtb3ZlOiBmdW5jdGlvbihibG9jaywgd2luZG93U2Nyb2xsLCBzdHJhZmVBbW91bnQpIHtcblx0XHRcdHZhciBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtc3RyYWZlQW1vdW50ICsgJyUnO1xuXHRcdFx0dmFyIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgwLCcgKyBzdHJhZmUgKyAnLCAwKSc7XG5cdFx0XHR2YXIgc3R5bGUgPSBibG9jay5zdHlsZTtcblx0XHRcdHN0eWxlLnRvcCA9IHN0cmFmZTtcblx0XHRcdC8vY29uc29sZS5sb2coc3RyYWZlKTtcblx0XHRcdC8vc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xuXHRcdFx0Ly9zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XG5cdFx0XHQvL2NvbnNvbGUubG9nKHN0cmFmZSk7XG5cdFx0fSxcblxuXHRcdGluaXQ6IGZ1bmN0aW9uKHdTY3JvbGwpIHtcblx0XHRcdHRoaXMubW92ZShiZywgd1Njcm9sbCwgMzApO1xuXHRcdFx0Ly90aGlzLm1vdmUodXNlciwgd1Njcm9sbCwgNSk7XG5cdFx0fSxcblx0fTtcbn0oKSk7IiwiLy8gcGFyYWxsYXhcbnZhciBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqc19wYXJhbGxheCcpO1xudmFyIGxheWVycyA9IHBhcmFsbGF4Q29udGFpbmVyLmNoaWxkcmVuO1xuICAvL2NvbnNvbGUubG9nKGxheWVycyk7ICBcblxuY29uc3QgbW92ZUxheWVycyA9IGZ1bmN0aW9uIChlKSB7XG4gIGNvbnN0IGluaXRpYWxYID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLSBlLnBhZ2VYO1xuICBjb25zdCBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIGUucGFnZVk7XG4gIC8vY29uc29sZS5sb2coaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgW10uc2xpY2UuY2FsbChsYXllcnMpLmZvckVhY2goKGxheWVyLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGRpdmlkZXIgPSBpbmRleCAvIDEwMDtcbiAgICBjb25zdCBwb3NpdGlvblggPSBpbml0aWFsWCAqIGRpdmlkZXI7XG4gICAgY29uc3QgcG9zaXRpb25ZID0gaW5pdGlhbFkgKiBkaXZpZGVyO1xuICAgIGNvbnN0IGJvdHRvbVBvc2l0aW9uID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpICogZGl2aWRlcjtcbiAgICBjb25zdCB0cmFuc2Zvcm1TdHJpbmcgPSBgdHJhbnNsYXRlKCR7cG9zaXRpb25YfXB4ICwke3Bvc2l0aW9uWX1weClgO1xuICAgIGNvbnN0IGltYWdlID0gbGF5ZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4vL2NvbnNvbGUubG9nKGluZGV4LCBkaXZpZGVyLCBpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgIGxheWVyLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICBpbWFnZS5zdHlsZS5ib3R0b20gPSBgLSR7Ym90dG9tUG9zaXRpb259cHhgO1xuICB9KTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlTGF5ZXJzKTtcblxuXG4vKlxuZXhwb3J0IGRlZmF1bHQgbW92ZUxheWVycztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHBhcmFsYXggPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbW91bnRhaW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzX3BhcmFsbGF4X25pZ2h0X21vdW50YWlucycpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3ZlOiBmdW5jdGlvbiAoYmxvY2ssIGluaXRpYWxYLCBpbml0aWFsWSwgYW1vdW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUoJyArIGluaXRpYWxYKmFtb3VudCArICdweCwnICsgaW5pdGlhbFkqYW1vdW50ICsgJ3B4KScsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0gYmxvY2suc3R5bGU7XG5cbiAgICAgICAgICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKGluaXRpYWxYLCBpbml0aWFsWSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZShtb3VudGFpbnMsIGluaXRpYWxYLCBpbml0aWFsWSwgMC4wMSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0oKSk7XG5cbiAgICB3aW5kb3cub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIGUucGFnZVgsXG4gICAgICAgICAgICBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIGUucGFnZVk7XG5cbiAgICAgICAgcGFyYWxheC5pbml0KGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgfTtcbn1cbiovIl19
