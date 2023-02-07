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

  //TOPへ戻るボタン
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $("#back-btn").css("display", "inline");
    } else {
      $("#back-btn").css("display", "none");
    }
  });

  //スクロールをなめらかにする
  $('a[href^="#"]').on("click", function () {
    const href = $(this).attr("href");
    const speed = 500;
    let target;
    if (href == "#") {
      target = $("html");
    } else {
      target = $(href);
    }
    const position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
  });

  //セクションのフェードイン
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();
    $("section").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("fade-in");
      }
    });
  });

  //モータル
  $(".works img").on("click", function () {
    const imgSrc = $(this).attr("src");
    $(".big-img").attr("src", imgSrc);
    $(".modal").fadeIn();
    return false;
  });

  //閉じるボタン
  $(".close-btn").on("click", function () {
    $(".modal").fadeOut();
    return false;
  });
});
