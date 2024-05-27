document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([3.4372, -76.5225], 10); // Coordenadas del centro del Valle del Cauca

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Marcadores con descripciones
    var markers = [
        {coords: [4.3369, -75.8275], description: 'La centinela del Valle', popupText: '<b>Caicedonia</b>'},
        {coords: [4.3936, -76.0742], description: 'La tierra que endulza a Colombia', popupText: '<b>Zarzal</b>'},
        {coords: [4.4122, -76.1545], description: 'Pueblo Mágico', popupText: '<b>Roldanillo</b>'},
        {coords: [4.2769, -75.9379], description: 'Pueblo Mágico, Capital cafetera y Balcón del Valle', popupText: '<b>Sevilla</b>'},
        {coords: [4.5714, -75.8145], description: 'La puerta al Paisaje Cultural Cafetero', popupText: '<b>La Unión</b>'}
    ];

    markers.forEach(function(marker) {
        L.marker(marker.coords).addTo(map)
            .bindPopup('<b>' + marker.popupText + '</b><br>' + marker.description);
    });
});
