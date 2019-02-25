function playAnimation() {
  var container = document.getElementById('animation')
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
    $("#button-bg").css("margin-top", "calc(0*(100vh / 3))");
    $(".active").removeClass("active")
    $("#btn-1").addClass("active")
  });

  $("#btn-2").mouseover(function() {
    $("#button-bg").css("margin-top", "calc(100vh / 3)");
    $(".active").removeClass("active")
    $("#btn-2").addClass("active")
  });

  $("#btn-3").mouseover(function() {
    $("#button-bg").css("margin-top", "calc(2*(100vh / 3))");
    $(".active").removeClass("active")
    $("#btn-3").addClass("active")
  });

};

playAnimation();
lottie.setSpeed(1 / 60);

// $("#btn-1").hasClass("active")
