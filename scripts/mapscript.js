// Coordinates 
  //a random spot next to super 8 by Wyndham Amarillo East
  var lat = 35.1946663301045;
  var lon = -101.74048072044762;

// Initialize Map
  var map = L.map('map').setView([lat, lon], 9);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Add Marker
  var marker = L.marker([lat, lon]).addTo(map);
  marker.bindPopup("<b>Gabe's Motel Store</b><br>Loading weather...").openPopup();

// Weather Fetch
  fetch("https://api.weather.gov/points/" + lat + "," + lon)
    .then(function(res) { return res.json(); })
    .then(function(data) { return fetch(data.properties.forecast); })
    .then(function(res) { return res.json(); })
    .then(function(weather) {
      var current = weather.properties.periods[0];
      marker.setPopupContent("<b>Gabe's Motel Store</b><br>" + current.temperature + "°F and " + current.shortForecast);
    })
    .catch(function(err) {
      marker.setPopupContent("<b>Gabe's Motel Store</b><br>Weather unavailable");
    });