$(function () {
  //カルーセル
  $(".carousel").slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    swipe: true,
  });

  //ボタン透明化
  $(".nav-menu").on("mouseover", function () {
    $(this).animate(
      {
        opacity: 0.6,
      },
      300
    );
  });
  $(".nav-menu").on("mouseout", function () {
    $(this).animate(
      {
        opacity: 1.0,
      },
      300
    );
  });
});
