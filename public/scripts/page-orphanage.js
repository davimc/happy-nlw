const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-2.529835, -44.256727], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
});

L.marker([-2.529835, -44.256727], {icon})
    .addTo(map)