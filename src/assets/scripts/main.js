/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import Siema from 'siema';


/**
 * Write any other JavaScript below
 */

// js slider with siema
const jsSlider = new Siema({
  selector: '.js-slider',
  loop: true,
  duration: 600,
  easing: 'cubic-bezier(.17,.67,.68,1.73)'
});

setInterval(() => jsSlider.next(), 3000)


// leaflet map 



function leafletMap () {

let leafletMap = document.getElementById('map');

const map = L.map('map').setView([leafletMap.dataset.mapLat, leafletMap.dataset.mapLon], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const svgIcon = L.divIcon({
html: `
<svg
width="30"
height="48"
viewBox="0 0 100 100"
version="1.1"
preserveAspectRatio="none"
xmlns="http://www.w3.org/2000/svg"
>
<path d="M0 0 L50 100 L100 0 Z" fill="#fffff"></path>
</svg>`,
className: "",
iconSize: [24, 40],
iconAnchor: [12, 40],
});

const marker = L.marker([leafletMap.dataset.mapMarkLat, leafletMap.dataset.mapMarkLon], {icon: svgIcon}).addTo(map);
}


leafletMap();


+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();
