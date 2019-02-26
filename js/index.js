function changeBackground(url) {
  $("#hero").css("background", url)
}

function playAnimation() {
  var container = document.getElementById('lottie-container')
  var animationData = {
    container: container,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "json/data.json",
    preserveAspectRatio: false
  };
  var anim = lottie.loadAnimation(animationData);

  $("#btn-1").mouseover(function() {
    $("#lottie-container").css("margin-top", "0px");
    $(".active").removeClass("active");
    $("#btn-1").addClass("active");
    changeBackground("#000000");
  });

  $("#btn-2").mouseover(function() {
    $("#lottie-container").css("margin-top", "40px");
    $(".active").removeClass("active");
    $("#btn-2").addClass("active");
    changeBackground("#999999");
  });

  $("#btn-3").mouseover(function() {
    $("#lottie-container").css("margin-top", "80px");
    $(".active").removeClass("active");
    $("#btn-3").addClass("active");
    changeBackground("#cccccc");
  });

};

playAnimation();
lottie.setSpeed(1 / 60);

// $("#btn-1").hasClass("active")
