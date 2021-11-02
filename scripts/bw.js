$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 600) {
      $(".header, .caption, .menuWrapper, .quick_menu2 li a").css(
        "color",
        "#000"
      );
    } else {
      $(".header, .caption, .menuWrapper, .quick_menu2 li a").css(
        "color",
        "#fff"
      );
    }
  });
});
