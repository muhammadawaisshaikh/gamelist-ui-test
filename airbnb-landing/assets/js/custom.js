$(document).ready(function () {
  
      $(".sidemenu-icon" ).click(function() {
      $('.sidenav').toggleClass('width-toggle');
      $(this).toggleClass('change');
      $('.inner-page').toggleClass('fade');
    });
  
    $(".sidenav a" ).click(function() {
      $('.sidenav').toggleClass('width-toggle');
      $('.sidemenu-icon').toggleClass('change');
      $('.inner-page').toggleClass('fade');
    });
    
});