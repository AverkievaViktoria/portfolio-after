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