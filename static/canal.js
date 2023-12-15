lat = "17.31272258513325";
lng = "73.88772606233213";

//73.84776677812441, 17.3049261491680
var map = L.map("map", {
  center: [lat, lng],
  zoom: 13,
});

// Adding tile layer
L.tileLayer(
  "https://{s}.tile.thunderforest.com/{variant}/{z}/{x}/{y}.png?apikey={apikey}",
  {
    attribution:
      '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, {attribution.OpenStreetMap}',
    variant: "cycle",
    apikey: "a2ad2a37b490431bb6d705cb381a0444",
    maxZoom: 22,
  }
).addTo(map);

// Fetching Data using url and showing it on map

let canal = fetch("http://localhost:8000/api/v1/canal/");
let agriLayer 
let currentVillage

canal.then((response) => {
    return response.json();
    }).then((data) => {
    L.geoJSON(data, {
        style: function (feature) {
            return { color: "blue" };
        },
    }).bindPopup(function (layer) {
        return layer.feature.properties;
      })
      .addTo(map);
    }
    );

function fetchdata( village = "Kokisare") {
fetch("http://127.0.0.1:8000/api/v1/agriland/"+village).then((response) => {
    console.log(response)
    return response.json();
    }).then((data) => {
    currentVillage = data
    let lv = L.geoJSON(data, {
        style: function (feature) {
            return { color: "red" };
        },
    }).bindPopup(function (layer) {
        return layer.feature.properties;
      })
      .addTo(map);

      if(agriLayer){
        map.removeLayer(agriLayer)
      }
      agriLayer = lv
    }
    );
  }
function changeCrop(crop){
  let lv = L.geoJSON(currentVillage, {
    style: function (feature) {
        return { color: "red" };
    },
    filter: function(feature, layer) {
      if(crop == "all")
        return feature.properties
      return feature.properties.crop == crop;
    }
}).bindPopup(function (layer) {
    return layer.feature.properties;
  })
  .addTo(map);

  if(agriLayer){
    map.removeLayer(agriLayer)
  }
  agriLayer = lv
}

function changeVillage(village){
  fetchdata(village)
}
