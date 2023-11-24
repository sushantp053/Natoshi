var map = L.map("map", {
  center: [17.31272258513325, 73.88772606233213],
  zoom: 13,
});

// Adding tile layer
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
