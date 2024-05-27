document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([4.3369, -75.8275], 12); // Coordenadas de Caicedonia

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Iconos personalizados
    var cityIcon = L.icon({
        iconUrl: 'city-icon.png', // Ruta del icono de ciudad
        iconSize: [40, 40], // Tamaño del icono
        iconAnchor: [20, 40], // Punto de anclaje del icono
        popupAnchor: [0, -40] // Punto de anclaje del popup
    });

    var attractionIcon = L.icon({
        iconUrl: 'attraction-icon.png', // Ruta del icono de sitio de interés turístico
        iconSize: [40, 40], // Tamaño del icono
        iconAnchor: [20, 40], // Punto de anclaje del icono
        popupAnchor: [0, -40] // Punto de anclaje del popup
    });

    // Marcadores de ciudades
    var cities = [
        {coords: [4.3369, -75.8275], description: 'La centinela del Valle', popupText: '<b>Caicedonia</b>'},
        {coords: [4.3936, -76.0742], description: 'La tierra que endulza a Colombia', popupText: '<b>Zarzal</b>'},
        {coords: [4.4122, -76.1545], description: 'Pueblo Mágico', popupText: '<b>Roldanillo</b>'},
        {coords: [4.2769, -75.9379], description: 'Pueblo Mágico, Capital cafetera y Balcón del Valle', popupText: '<b>Sevilla</b>'},
        {coords: [4.5714, -75.8145], description: 'La puerta al Paisaje Cultural Cafetero', popupText: '<b>La Unión</b>'}
    ];

    cities.forEach(function(marker) {
        L.marker(marker.coords, {icon: cityIcon}).addTo(map)
            .bindPopup('<b>' + marker.popupText + '</b><br>' + marker.description);
    });

    // Marcadores de sitios de interés turístico
    var attractions = [
        {coords: [4.3387, -75.8272], description: 'Parque Natural Regional Planes de Sonson', popupText: '<b>Parque Natural Regional Planes de Sonson</b>'}, // Cerca de Caicedonia
        {coords: [4.3938, -76.0786], description: 'Museo Arqueológico de Zarzal', popupText: '<b>Museo Arqueológico de Zarzal</b>'}, // Cerca de Zarzal
        {coords: [4.4078, -76.1565], description: 'Museo Rayo', popupText: '<b>Museo Rayo</b>'}, // Cerca de Roldanillo
        {coords: [4.2783, -75.9385], description: 'Monumento a la Gaitana', popupText: '<b>Monumento a la Gaitana</b>'}, // Cerca de Sevilla
        {coords: [4.5689, -75.8086], description: 'Mirador Salto de Aguacatal', popupText: '<b>Mirador Salto de Aguacatal</b>'} // Cerca de La Unión
    ];

    attractions.forEach(function(marker) {
        L.marker(marker.coords, {icon: attractionIcon}).addTo(map)
            .bindPopup('<b>' + marker.popupText + '</b><br>' + marker.description);
    });
});
