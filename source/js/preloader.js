var preloader = (function () {
  let percentsTotal = 0;
  const preloader = $('.preloader');

  // соберем все элементы
  const imgPaths = $('*').map((ndx, element) => {
    const isImg = $(element).is('img'); // является ли картинкой - вернет true
    const background = $(element).css('background-image');

    let path = '';

    if (background != 'none') {
      // убираем кавычки и скобки, path = background вернет url('...') весь, а нам надо только файл с путем
      path = background.replace('url("', '').replace('")', '');
    }

    if (isImg) {
      path = $(element).attr('src');
    }

    if (path) return path;
  });

  console.log(imgPaths);

  // сколько всего total и сколько еще загрузить current
  const setPercents = (total, current) => {
    // округлим в большую сторону
    const percents = Math.ceil(current / total * 100);
    console.log(percents);
    
    $('.preloader__percents').text(`${percents}%`);

    // уберает opasity до 0 и выставляет display: none
    // можно передать миллисекунды и callback fadeOut(1000, () => {})
    if (percents >= 100) preloader.fadeOut(2000); // 400мс по умолчанию, fadeIn slideOut slideIn slideToggle show hide 
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

      // обработка нескольких событий - загрузка и ошибка
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