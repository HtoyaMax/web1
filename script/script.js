// ua
$(function () {
  $(".ua").click(function () {
    //cappibara

    $(".language-selected").text("ua");
    $(".language-selected").removeClass(".change-ru");
    $(".language-selected").removeClass(".change-en");
    $(".language-selected").addClass(".change-ua");
  });
});

// Eng
$(function () {
  $(".en").click(function () {
    $(".language-selected").text("en");
    $(".language-selected").removeClass(".change-ua");
    $(".language-selected").removeClass(".change-ru");
    $(".language-selected").addClass(".change-en");
  });
});

// ru
$(function () {
  $(".ru").click(function () {
    $(".language-selected").text("ru");
    $(".language-selected").removeClass(".change-ua");
    $(".language-selected").removeClass(".change-en");
    $(".language-selected").addClass(".change-ru");
  });
});

var header = $("#header");
var scrollChange = 25;
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= scrollChange) {
    header.addClass("header-bg");
  } else {
    header.removeClass("header-bg");
  }
});

// mobile
const bar = document.getElementById("menu-btn");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// swiper
$(".events-slider").slick({
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
  prevArrow: $("#home-events .prev"),
  nextArrow: $("#home-events .next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// slider team

$(".img-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".img-slider-nav",
});
$(".img-slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".img-slider",
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  prevArrow: $("#home-team .prev"),
  nextArrow: $("#home-team .next"),
});

$(".reviews-slider").slick({
  infinite: true,
  slidesToShow: 3,
  prevArrow: $("#home-review .prev"),
  nextArrow: $("#home-review .next"),
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 550,
      settings: {
        variableWidth: true,
        slidesToShow: 1,
      },
    },
  ],
});

$(".reviews-slider .play").click(function () {
  $(this).closest(".slide").addClass("video-active");
  $(this).siblings("video").get(0).play();
});

$(".reviews-slider .pause").click(function () {
  $(this).closest(".slide").removeClass("video-active");
  $(this).siblings("video").get(0).pause();
});

if ($(window).width() < 1100) {
  $(".blog-slider").slick({
    infinite: true,
    slidesToShow: 2,
    prevArrow: $("#home-blog .prev"),
    nextArrow: $("#home-blog .next"),
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
} else {
  // alert('More than 960');
}

if ($(window).width() < 1100) {
  $(".book-slider").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    prevArrow: $("#home-book .prev"),
    nextArrow: $("#home-book .next"),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  });
  $(".theme-content").slick({
    infinite: true,
    slidesToShow: 3,
    prevArrow: $("#question .prev"),
    nextArrow: $("#question .next"),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          variableWidth: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        },
      },
    ],
  });
} else {
  // alert('More than 960');
}

$(function () {
  $(".go-top").bind("click", function (e) {
    e.preventDefault();
    $("body,html").animate({ scrollTop: 0 }, 1000);
  });
});

$(".video-slider").slick({
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  prevArrow: $("#igor-content-2 .prev"),
  nextArrow: $("#igor-content-2 .next"),
});

$(document).ready(function () {
  $(".item").slice(0, 8).fadeIn();
  $(".load-more").click(function () {
    $(".item").slice(0, 12).fadeIn();
    $(this).fadeOut();
  });
});

$(document).ready(function () {
  $(".true-gray").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".item").show("1000");
    } else {
      $(".item")
        .not("." + value)
        .hide("1000");
      $(".item")
        .filter("." + value)
        .show("1000");
    }
  });

  $(".true-gray").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

if ($(window).width() < 1100) {
  $(".category-list").slick({
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
} else {
  // alert('More than 960');
}

$(document).ready(function () {
  $(".item-blog").slice(0, 9).fadeIn();
  $(".load-more").click(function () {
    $(".item-blog").slice(0, 12).fadeIn();
    $(this).fadeOut();
  });
});

$(document).ready(function () {
  $(".true-gray").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".item-blog").show("6");
    } else {
      $(".item-blog")
        .not("." + value)
        .hide("1000");
      $(".item-blog")
        .filter("." + value)
        .show("1000");
    }
  });

  $(".true-gray").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

$(document).ready(function () {
  $(".true-gray").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".item-blog").show("6");
    } else {
      $(".item-blog")
        .not("." + value)
        .hide("1000");
      $(".item-blog")
        .filter("." + value)
        .show("1000");
    }
  });

  $(".true-gray").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

const popupLinks = document.querySelectorAll(".popup-link");
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".gentep-popup.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".gentep-popup");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
