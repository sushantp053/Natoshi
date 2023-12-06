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
L.tileLayer("https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution:
    'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var p = L.marker([lat, lng]).addTo(map);
L.marker([17.337664, 73.882345]).addTo(map);

const agriland = JSON.parse(
  document.getElementById("agriland-data").textContent
);
// console.log(agriland);
var natoshiData = JSON.parse(agriland.data);
console.log(natoshiData);

for (let i = 0; i < natoshiData.features.length; i++) {
  const element = natoshiData.features[i];
  coordinates = element.geometry.coordinates;
  let latlngs = [];

  for (let j = 0; j < coordinates[0][0].length; j++) {
    let a = [coordinates[0][0][j][1], coordinates[0][0][j][0]];
    latlngs.push(a);
  }
  L.polygon([latlngs], { color: "red" }).addTo(map);
}

p.bindPopup("I am a popup.");
p.on("click", function (e) {
  console.log("You clicked the map at " + e.latlng);
});

map.on("click", function (e) {
  console.log("You clicked the map at " + e.latlng);
});
