$('#collapseOne').on('shown.bs.collapse', function () {
  $('html, body').animate({
    scrollTop: $("#headingOne").offset().top
  }, 450);
});
$('#collapseTwo').on('shown.bs.collapse', function () {
  $('html, body').animate({
    scrollTop: $("#headingTwo").offset().top
  }, 450);
});
$('#collapseThree').on('shown.bs.collapse', function () {
  $('html, body').animate({
    scrollTop: $("#headingThree").offset().top
  }, 450);
});
$('#collapseFour').on('shown.bs.collapse', function () {
  $('html, body').animate({
    scrollTop: $("#headingFour").offset().top
  }, 450);
});