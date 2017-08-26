//Establish leaflet map
function buildMap(){
    let mymap = L.map('mapid',{
        loadingControl: true
    }).setView([-37.814, 144.96332],13);

    // Load tiles
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets-basic',
        accessToken: 'pk.eyJ1Ijoiam9zenRyZWljaGVyIiwiYSI6ImNqNmJicmxtczE3ZnUydnFybWl4am94bnAifQ.AqK2Zt30_RpbcPHLatRS2A'
    }).addTo(mymap);

    mymap.spin(true)
    addMarkers(mymap)
    loadGeoJSON(mymap)
    mymap.spin(false)
}

//Load LGA
function loadGeoJSON(map){

    let LGA = new L.geoJson();
    LGA.addTo(map);

    $.ajax({
        dataType: "json",
        url: "data/LGA_geojson.geojson",
        success: function(data) {
            $(data.features).each(function(key, data) {
                LGA.addData(data);
                map.spin(false);
            });
        }
    }).error(function () {
        map.spin(false)
        console.log('error')
    })
    map.spin(false)
}

//Create markers and add to map
function addMarkers(map){

    // for (let i = 0; i < markers.length; i++){
    //     marker = new L.marker([markers[i][0],markers[i][1]]).addTo(map);
    // }
    getSchoolList(map)
}


function getSchoolList(map) {
    $.getJSON("data/schoolList.json", function(json) {
        addSchoolMarkers(json, map)
    });
}

function addSchoolMarkers(data, map){
    var markers = L.markerClusterGroup({ animateAddingMarkers : true });
    var markersList = [];

    console.log(data)
    for(i = 0; i < data.length; i++){
        let lat = data[i].X
        let lon = data[i].Y
        let latlon = L.latLng(lon,lat)
        console.log(latlon)
        marker = new L.marker(latlon)
        markersList.push(marker)
        markers.addLayer(marker)
     }

     map.addLayer(markers)
}

buildMap()


//
// $.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?', function(data) {
//     console.log(JSON.stringify(data, null, 2));
// });

// fetch('getschooldata.php').then(function (response) {
// 		console.log(response)
// 		return response
//     }
// ).then(function(json){
//     console.log(json)
// })
//
// function getDatabaseRows()
// {
//     $.getJSON('schooldata.json', function(json) {
//         console.log(json);
//
//     });
// }
//
// var xmlhttp = new XMLHttpRequest();
//
// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var myObj = this.responseText;
//         document.getElementById("demo").innerHTML = myObj[2];
//     }
// };
// xmlhttp.open("GET", "getschooldata.php", true);
// xmlhttp.send();


// var googleLayer = new L.Google('ROADMAP');
//     mymap.addLayer(googleLayer);

// function(x){
// 	for each(x){
// 	}
// }
// markers.addTo(mymap)


//Create polygons (Local Govt Areas)

//new L.LGAs = L.Shapefile(arrayBuffer or url[,options][,importUrl]);
