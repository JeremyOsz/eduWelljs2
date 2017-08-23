//Establish leaflet map

let mymap = L.map('mapid').setView([-37.814, 144.96332],13);

// Load tiles
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets-basic',
    accessToken: 'pk.eyJ1Ijoiam9zenRyZWljaGVyIiwiYSI6ImNqNmJicmxtczE3ZnUydnFybWl4am94bnAifQ.AqK2Zt30_RpbcPHLatRS2A'
}).addTo(mymap);

//Create markers
var markers = [
	[-37.814, 144.96332],
	[-37.817, 144.96332],
	[-37.812, 144.96332]
	]

for (var i = 0; i < markers.length; i++){
	marker = new L.marker([markers[i][0],markers[i][1]]).addTo(mymap);
}

// var googleLayer = new L.Google('ROADMAP');
//     mymap.addLayer(googleLayer);

// function(x){
// 	for each(x){
// 	}
// }
// markers.addTo(mymap)


//Create polygons (Local Govt Areas)

//new L.LGAs = L.Shapefile(arrayBuffer or url[,options][,importUrl]);

console.log(markers)