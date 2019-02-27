function changeBackground(url) {
  $("#hero").css("background", url)
}

var container = document.getElementById('lottie-container')
var animationData = {
  container: container,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "json/1>2.json",
  preserveAspectRatio: false
}
var anim = lottie.loadAnimation(animationData)

window.animatedNav = function (button, primaryColor, background) {
  console.log("1")
  $("#lottie-container").css("margin-top", $(button).position().top + "px")
  $(".active").removeClass("active")
  $(button).addClass("active")
  $(":root").css("--primary", primaryColor)
  $("#bg").css("opacity", "0")
  setTimeout(function(){$("#bg").css("opacity", "1")}, 200)
  // $("#hero").css("background", background)
}

$("#btn-1").mouseover(function () {
  animatedNav("#btn-1", "hsla(0, 100%, 50%, 1)", "rgba(80, 0, 0, 1)")
})
$("#btn-2").mouseover(function () {
  animatedNav("#btn-2", "hsla(180, 100%, 50%, 1)", "rgba(0, 0, 80, 1)")
})
$("#btn-3").mouseover(function () {
  animatedNav("#btn-3", "hsla(120, 100%, 50%, 1)", "rgba(0, 80, 0, 1)")
})