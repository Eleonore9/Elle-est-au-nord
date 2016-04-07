// Decoration for active tab name
$( document ).ready(function() {

  var path = window.location.pathname;

  if(path=="/"){
    $('.nav li.portfolio').removeClass('active');
    $('.nav li.aboutme').removeClass('active')
    $('.nav li.home').addClass('active');
  } else if(path=="/projects"){
    $('.nav li.home').removeClass('active');
    $('.nav li.aboutme').removeClass('active')
    $('.nav li.portfolio').addClass('active');
  } else if(path=="/aboutme"){
    $('.nav li.portfolio').removeClass('active');
    $('.nav li.home').removeClass('active')
    $('.nav li.aboutme').addClass('active');
  }

});
