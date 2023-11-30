// Add a map centered on Paris
var map;

function initmap() {

  map = new L.Map('map');

  var stamenLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>
&copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a>
&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>
&copy; <a href="https://www.openstreetmap.org/about/" target="_blank">OpenStreetMap contributors</a>'
  }).addTo(map);
  map.setView([48.8587, 2.3429], 14);
}
