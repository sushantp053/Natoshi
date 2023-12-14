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

let canal = fetch("http://localhost:8000/api/v1/canal/");

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

let agriland = fetch("http://localhost:8000/api/v1/agriland/").then((response) => {
    return response.json();
    }).then((data) => {
    L.geoJSON(data, {
        style: function (feature) {
            return { color: "red" };
        },
    }).bindPopup(function (layer) {
        return layer.feature.properties;
      })
      .addTo(map);
    }
    );



