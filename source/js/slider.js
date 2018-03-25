/*
добавить:
- анимацию заголовка
- прелодер загрузки верхней картинки
- движение картинок на кнопках - перелистывание

(ошибка адаптива при уменьшении экрана - кнопки налезают на картинку внизу (clearfix?))
*/
var data = [
  {
      image: "works-1.png",
      title: "Сайт школы онлайн образования 1",
      skills: ["html", "css", "javascript"],
      link: "#"
  },
  {
      image: "works-2.png",
      title: "Сайт школы онлайн образования 2",
      skills: ["css", "html"],
      link: "#"
  },
  {
      image: "works-3.png",
      title: "Сайт школы онлайн образования 3",
      skills: ["js", "html"],
      link: "#"
  },
  {
      image: "works-4.png",
      title: "Сайт школы онлайн образования 4",
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

    // ? положить в background
    sliderImg.attr('src', '../../assets/img/'+`${data[currentSlide].image}`);

    var urlLeft = 'url(../../assets/img/'+`${data[prev].image}`+')';
    console.log(urlLeft);
    // анимация css
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
<div id="my" style="height: 100px; background: crimson">Наведите на этот див</div>
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