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