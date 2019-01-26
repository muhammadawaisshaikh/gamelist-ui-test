$(document).ready(function () {

  $('.sidenav a').addClass('hide');

	$(".sidemenu-icon" ).click(function() {
    $('.sidenav').toggleClass('width-toggle');
    $('.sidenav a').toggleClass('hide');
    $(this).toggleClass('change');
    $('.inner-page').toggleClass('fade');
  });

  $(".sidenav a" ).click(function() {
    $('.sidenav').toggleClass('width-toggle');
    $('.sidemenu-icon').toggleClass('change');
    $('.inner-page').toggleClass('fade');
  });
});