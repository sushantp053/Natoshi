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

const agriland = JSON.parse(
  document.getElementById("agriland-data").textContent
);
// console.log(agriland);
var natoshiData = JSON.parse(agriland.data);
console.log(natoshiData);

var planeLayer = L.layerGroup();

function changeCrop(crop) {
  if (crop == "all") {
    showAllCrop();
  } else {
    changeSelectedCrop(crop);
  }
}

function changeSelectedCrop(crop) {
  planeLayer.clearLayers();
  try {
    for (let i = 0; i < natoshiData.features.length; i++) {
      const element = natoshiData.features[i];
      console.log(element);
      coordinates = element.geometry.coordinates;
      let latlngs = [];
      for (let j = 0; j < coordinates[0][0].length; j++) {
        let a = [coordinates[0][0][j][1], coordinates[0][0][j][0]];
        latlngs.push(a);
      }
      if (element.properties.crop == crop) {
        // L.polygon([latlngs], { color: "green" }).addTo(map);
        planeLayer.addLayer(
          L.polygon([latlngs], {
            color: "green",
            weight: 1,
            fillColor: "green",
          })
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
  planeLayer.addTo(map);
}
function showAllCrop() {
  planeLayer.clearLayers();
  try {
    for (let i = 0; i < natoshiData.features.length; i++) {
      const element = natoshiData.features[i];
      coordinates = element.geometry.coordinates;
      let latlngs = [];
      for (let j = 0; j < coordinates[0][0].length; j++) {
        let a = [coordinates[0][0][j][1], coordinates[0][0][j][0]];
        latlngs.push(a);
      }
      if (element.properties.crop == "Rice") {
        planeLayer.addLayer(
          L.polygon([latlngs], {
            color: "green",
            weight: 1,
            fillColor: "green",
          })
        );
      } else if (element.properties.crop == "Wheat") {
        planeLayer.addLayer(
          L.polygon([latlngs], { color: "blue", weight: 1, fillColor: "blue" })
        );
      } else if (element.properties.crop == "Sugarcane") {
        planeLayer.addLayer(
          L.polygon([latlngs], {
            color: "brown",
            weight: 1,
            fillColor: "brown",
          })
        );
      } else if (element.properties.crop == "Barren") {
        planeLayer.addLayer(
          L.polygon([latlngs], { color: "red", weight: 1, fillColor: "red" })
        );
      } else if (element.properties.crop == "Groundnut") {
        planeLayer.addLayer(
          L.polygon([latlngs], {
            color: "yellow",
            weight: 1,
            fillColor: "yellow",
          })
        );
      } else {
        planeLayer.addLayer(
          L.polygon([latlngs], {
            color: "grey",
            weight: 1,
            fillColor: "grey",
          })
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
  planeLayer.addTo(map);
}

showAllCrop();
