document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([4.533, -75.753], 12); // Coordenadas de La Unión, Valle del Cauca

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Iconos personalizados para las ciudades
    var cityIcons = {
        Sevilla: L.icon({
            iconUrl: 'sevilla-icon.png', // Icono de Sevilla
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -40]
        }),
        Roldanillo: L.icon({
            iconUrl: 'roldanillo-icon.png', // Icono de Roldanillo
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -40]
        }),
        LaUnion: L.icon({
            iconUrl: 'launion-icon.png', // Icono de La Unión
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -40]
        }),
        Caicedonia: L.icon({
            iconUrl: 'caicedonia-icon.png', // Icono de Caicedonia
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -40]
        }),
        Zarzal: L.icon({
            iconUrl: 'zarzal-icon.png', // Icono de Zarzal
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -40]
        })
    };

    // Icono para los sitios de interés turístico
    var attractionIcon = L.icon({
        iconUrl: 'attraction-icon.png', // Icono de los sitios de interés turístico
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    });

    // Marcadores de ciudades
    var cities = [
        {coords: [4.287, -75.935], name: 'Sevilla', description: 'Pueblo Mágico, Capital cafetera y Balcón del Valle'},
        {coords: [4.415, -76.147], name: 'Roldanillo', description: 'Pueblo Mágico'},
        {coords: [4.53309, -76.10383], name: 'LaUnion', description: 'La puerta al Paisaje Cultural Cafetero'},
        {coords: [4.3369, -75.8275], name: 'Caicedonia', description: 'La centinela del Valle'},
        {coords: [4.3936, -76.0742], name: 'Zarzal', description: 'La tierra que endulza a Colombia'}
    ];

    cities.forEach(function(city) {
        L.marker(city.coords, {icon: cityIcons[city.name]}).addTo(map)
            .bindPopup('<b>' + city.name + '</b><br>' + city.description);
    });

    // Marcadores de sitios de interés turístico
    var attractions = [
        // En Sevilla
        {coords: [4.2871, -75.9335], name: 'Iglesia Nuestra Señora del Rosario', description: 'Iglesia colonial en el centro histórico de Sevilla'},
        {coords: [4.2883, -75.9391], name: 'Parque Principal', description: 'Parque central con árboles frondosos y bancas'},
        {coords: [4.2856, -75.9347], name: 'Casa de la Cultura', description: 'Centro cultural con exposiciones de arte y eventos'},
        {coords: [4.2892, -75.9413], name: 'Cascada del Amor', description: 'Cascada natural para disfrutar de la naturaleza'},
        // En Roldanillo
        {coords: [4.4102, -76.1453], name: 'Museo Rayo', description: 'Museo de arte moderno'},
        {coords: [4.4052, -76.1484], name: 'Parque de la Cultura', description: 'Parque al aire libre con obras de arte escultóricas'},
        {coords: [4.4098, -76.1519], name: 'Plaza de Toros', description: 'Plaza de toros histórica'},
        {coords: [4.4128, -76.1506], name: 'Galería de Arte Contemporáneo', description: 'Galería con exposiciones de arte contemporáneo'},
        // En La Unión
        {coords: [4.531, -75.753], name: 'Cerro del Mirador', description: 'Mirador con vista panorámica del Valle del Cauca'},
        {coords: [4.522, -75.749], name: 'Parque Lineal del Rio', description: 'Área recreativa junto al río'},
        {coords: [4.521, -75.754], name: 'Plaza de la Libertad', description: 'Plaza central con áreas verdes y juegos para niños'},
        {coords: [4.530992443964521, -76.08733440574537], name: 'Museo de la Uva', description: 'Museo dedicado a la historia y cultura de la uva en la región'},
        {coords: [4.526306942000144, -76.0885469776011], name: 'Hotel Los Viñedos', description: 'Hotel Los Viñedos'},
        // En Caicedonia
        {coords: [4.3406, -75.8274], name: 'Parque de la Libertad', description: 'Parque central de la ciudad'},
        {coords: [4.3402, -75.8271], name: 'Iglesia de San José', description: 'Iglesia histórica con arquitectura colonial'},
        {coords: [4.3413, -75.8265], name: 'Monumento al Café', description: 'Monumento que celebra la cultura del café'},
        {coords: [4.3428, -75.8270], name: 'Plaza de Bolívar', description: 'Plaza principal con monumentos históricos'},
        // En Zarzal (Guasimal - Avistamiento de OVNIS)
        {coords: [4.3861, -76.0809], name: 'Guasimal', description: 'Corregimiento conocido por avistamientos de OVNIS'},
        {coords: [4.3987, -76.0864], name: 'Iglesia de la Inmaculada Concepción', description: 'Iglesia en el centro de Guasimal'},
        {coords: [4.3874, -76.0838], name: 'Parque Principal', description: 'Parque central con áreas verdes y juegos infantiles'},
        {coords: [4.3921, -76.0821], name: 'Museo Histórico', description: 'Museo con artefactos históricos de la región'}
        // Agrega más sitios de interés turístico según sea necesario
    ];

    attractions.forEach(function(attraction) {
        L.marker(attraction.coords, {icon: attractionIcon}).addTo(map)
            .bindPopup('<b>' + attraction.name + '</b><br>' + attraction.description);
    });
});
