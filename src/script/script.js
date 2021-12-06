$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(".hamburger").click(function (e) {
  e.preventDefault();
  $(".main-sidebar").toggleClass("col-3 col-1");
  $(".main-content").toggleClass("col-9 col-11");
  $(".text-menu").toggleClass("hide-text-menu");
  $(".sub-menu").css("display", "none");
  $(".sub-menu-btn").find(".angle-symbol").removeClass("angle-symbol-down");
});

// $(".nav-link").click(function (e) {
//   $(this).toggleClass("active");
//   $(this).siblings().removeClass("active");
// });

$(".menu-link").each(function () {
  $(this).click(function (e) {
    $(this).toggleClass("active");
    $(this)
      .parents()
      .siblings()
      .find(".menu-link, .sub-menu-li")
      .removeClass("active");
  });
});

$(".sub-menu-btn").each(function () {
  $(this).click(function (e) {
    e.preventDefault();
    $(this).siblings().toggle(200, "linear");
    $(this).find(".angle-symbol").toggleClass("angle-symbol-down");
  });
});

$(".main-sidebar")
  .mouseenter(function () {
    if ($(this).hasClass("col-1")) {
      $(this).removeClass("col-1");
      $(this).addClass("col-3");
      $(this).addClass("pop-up-sidebar");
      $(".main-content").removeClass("col-11");
      $(".main-content").addClass("col-9");
      $(".text-menu").removeClass("hide-text-menu");
    }
  })
  .mouseleave(function () {
    if ($(this).hasClass("pop-up-sidebar")) {
      $(this).removeClass("pop-up-sidebar");
      $(this).removeClass("col-3");
      $(this).addClass("col-1");
      $(".main-content").removeClass("col-9");
      $(".main-content").addClass("col-11");
      $(".text-menu").addClass("hide-text-menu");
      $(".sub-menu").css("display", "none");
      $(".sub-menu-btn").find(".angle-symbol").removeClass("angle-symbol-down");
    }
  });

$(".sub-menu-li").each(function () {
  $(this).click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");
    $(this)
      .parent()
      .parent()
      .siblings()
      .find(".sub-menu-li")
      .removeClass("active");
    $(this)
      .parent()
      .parent()
      .siblings()
      .find(".sub-menu-li, .menu-link")
      .removeClass("active");
  });
});
