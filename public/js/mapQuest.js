function initMap() {
	// add your code here
    L.mapquest.key = 'wtz9M8Bfit0FlZAnkX8UNs0GpXGdecNQ';
    var map = L.mapquest.map('map', {
        center: [32.8788, -117.2359],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12,
        zoomContrl: false
    });

    L.marker([32.8788, -117.2359]).addTo(map);
}