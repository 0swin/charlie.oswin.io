"use strict";

function changeBackground(url) {
  $("#hero").css("background", url);
}

function playAnimation() {
  var container = document.getElementById('lottie-container');
  var animationData = {
    container: container,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "json/1>2.json",
    preserveAspectRatio: false
  };
  var anim = lottie.loadAnimation(animationData);

  function animatedNav(button, primaryColor, background) {
    console.log("1");
    $("#lottie-container").css("margin-top", $(button).position().top + "px");
    $(".active").removeClass("active");
    $(button).addClass("active");
    $(":root").css("--primary", primaryColor);
    $("#hero").css("background", background);
  };

  $("#btn-1").mouseover(function () {
    animatedNav("#btn-1", "red", "#500000");
  });
  $("#btn-2").mouseover(function () {
    animatedNav("#btn-2", "aqua", "#000050");
  });
  $("#btn-3").mouseover(function () {
    animatedNav("#btn-3", "lime", "#005000");
  });
};

playAnimation();