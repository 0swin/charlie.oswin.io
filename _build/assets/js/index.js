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

$('.modal').on('hide.bs.modal', function() {
  var memory = $(this).html();
  $(this).html(memory);
});

$('.modal').on("show.bs.modal", function(){
    $(this).find(".lazy").each(function() {
        $(this).attr('src', $(this).attr('data-src-lazy'));
    });
});