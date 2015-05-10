// Add a map centered on London
var map;

function initmap() {

  map = new L.Map('map');

  var stamenLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
  }).addTo(map);
  map.setView([51.5020, -0.1239], 11);
}

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
