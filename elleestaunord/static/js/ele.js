// Decoration for active tab name
$( document ).ready(function() {

  var path = window.location.pathname;

  if(path == "/"){
    $('.nav li.link-portfolio').removeClass('active');
    $('.nav li.link-aboutme').removeClass('active');
    $('.nav li.link-home').addClass('active');
  } else if(path == "/projects/"){
    $('.nav li.link-home').removeClass('active');
    $('.nav li.link-aboutme').removeClass('active');
    $('.nav li.link-portfolio').addClass('active');
  } else if(path == "/aboutme/"){
    $('.nav li.link-portfolio').removeClass('active');
    $('.nav li.link-home').removeClass('active');
    $('.nav li.link-aboutme').addClass('active');
  };

  $(".intro_client_work").click(function () {
    $(".projects.client").toggle();
  });
  $(".intro_personal_work").click(function () {
    $(".projects.perso").toggle();
  });

});
