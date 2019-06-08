$('#collapseOne').on('shown.bs.collapse', function () {
  $('html, body').animate({
    scrollTop: $("#collapseOne").offset().top
  }, 450);
});
$('#collapseTwo').on('shown.bs.collapse', function () {
  $('html, body').animate({
    scrollTop: $("#collapseTwo").offset().top
  }, 450);
});
$('#collapseThree').on('shown.bs.collapse', function () {
  $('html, body').animate({
    scrollTop: $("#collapseThree").offset().top
  }, 450);
});
$('#collapseFour').on('shown.bs.collapse', function () {
  $('html, body').animate({
    scrollTop: $("#collapseFour").offset().top
  }, 450);
});

$('.modal').on('hide.bs.modal', function() {
  var memory = $(this).html();
  $(this).html(memory);
});