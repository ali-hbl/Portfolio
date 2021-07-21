$(function () {
  $('.navbar a, footer a').on('click', function (e) {
    e.preventDefault();
    let hash = this.hash;

    $('body, html').animate({ scrollTop: $(hash).offset().top }, 900, function () {
      window.location.hash = hash;
    });
  });
});
