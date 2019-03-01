"use strict";

function changeBackground(url) {
  $("#hero").css("background", url);
}

var container = document.getElementById('lottie-container');
var anim;

function playAnimation(path) {
  anim = lottie.loadAnimation({
    container: container,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: path,
    preserveAspectRatio: false
  });
}

playAnimation("json/logo.json");
anim.setSpeed(10);

window.animatedNav = function (button, primaryColor, animationPath) {
  $("#lottie-container").css("top", $(button).position().top + "px");
  $(".active").removeClass("active");
  $(button).addClass("active");
  $(":root").css("--primary", primaryColor);
  $(".bg").css("opacity", "0");
  setTimeout(function () {
    $(".bg").css("opacity", "1");
  }, 250);
};

$("#btn-1").mouseover(function () {
  if ($("#btn-3").hasClass("active")) {
    anim.playSegments([240, 299], false);
  }
  if ($("#btn-2").hasClass("active")) {
    anim.playSegments([120, 179], false);
  }
  animatedNav("#btn-1", "hsla(0, 100%, 50%, 1)", "rgba(80, 0, 0, 1)");
});
$("#btn-2").mouseover(function () {
  if ($("#btn-1").hasClass("active")) {
    anim.playSegments([0, 59], false);
  }
  if ($("#btn-3").hasClass("active")) {
    anim.playSegments([300, 359], false);
  }
  animatedNav("#btn-2", "hsla(180, 100%, 50%, 1)", "rgba(0, 0, 80, 1)");
});
$("#btn-3").mouseover(function () {
  if ($("#btn-1").hasClass("active")) {}
  anim.playSegments([60, 119], false);
  if ($("#btn-2").hasClass("active")) {
    anim.playSegments([180, 239], false);
  }
  animatedNav("#btn-3", "hsla(120, 100%, 50%, 1)", "rgba(0, 80, 0, 1)");
});
// anim = lottie.destroy()
// anim = lottie.loadAnimation({
//   container: container,
//   renderer: "svg",
//   loop: false,
//   autoplay: true,
//   path: "json/3>1.json",
//   preserveAspectRatio: false
// })