var preloader = (function () {
  let percentsTotal = 0;
  const preloader = $('.preloader');

  // ������� ��� ��������
  const imgPaths = $('*').map((ndx, element) => {
    const isImg = $(element).is('img'); // �������� �� ��������� - ������ true
    const background = $(element).css('background-image');

    let path = '';

    if (background != 'none') {
      // ������� ������� � ������, path = background ������ url('...') ����, � ��� ���� ������ ���� � �����
      path = background.replace('url("', '').replace('")', '');
    }

    if (isImg) {
      path = $(element).attr('src');
    }

    if (path) return path;
  });

  console.log(imgPaths);

  // ������� ����� total � ������� ��� ��������� current
  const setPercents = (total, current) => {
    // �������� � ������� �������
    const percents = Math.ceil(current / total * 100);
    console.log(percents);
    
    $('.preloader__percents').text(`${percents}%`);

    // ������� opasity �� 0 � ���������� display: none
    // ����� �������� ������������ � callback fadeOut(1000, () => {})
    if (percents >= 100) preloader.fadeOut(2000); // 400�� �� ���������, fadeIn slideOut slideIn slideToggle show hide 
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

      // ��������� ���������� ������� - �������� � ������
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