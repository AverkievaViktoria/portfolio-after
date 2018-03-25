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
