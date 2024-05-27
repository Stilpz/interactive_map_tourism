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
        {coords: [4.287, -75.935], name: 'Sevilla', description: 'Pueblo Mágico, Capital cafetera y Balcón del Valle', image: 'sevilla-image.jpg'},
        {coords: [4.415, -76.147], name: 'Roldanillo', description: 'Pueblo Mágico', image: 'roldanillo-image.jpg'},
        {coords: [4.533, -75.753], name: 'LaUnion', description: 'La puerta al Paisaje Cultural Cafetero', image: 'launion-image.jpg'},
        {coords: [4.3369, -75.8275], name: 'Caicedonia', description: 'La centinela del Valle', image: 'caicedonia-image.jpg'},
        {coords: [4.3936, -76.0742], name: 'Zarzal', description: 'La tierra que endulza a Colombia', image: 'zarzal-image.jpg'}
    ];

    cities.forEach(function(city) {
        var cityMarker = L.marker(city.coords, {icon: cityIcons[city.name]}).addTo(map);
        var popupContent = '<div><h3>' + city.name + '</h3><img src="' + city.image + '" alt="' + city.name + '"><p>' + city.description + '</p></div>';
        cityMarker.bindPopup(popupContent);
    });

    // Marcadores de sitios de interés turístico
    var attractions = [
        // En Sevilla
        {coords: [4.2871, -75.9335], name: 'Iglesia Nuestra Señora del Rosario', description: 'Iglesia colonial en el centro histórico de Sevilla', image: 'sevilla-iglesia.jpg'},
        {coords: [4.2883, -75.9391], name: 'Parque Principal', description: 'Parque central con árboles frondosos y bancas', image: 'sevilla-parque.jpg'},
        {coords: [4.2856, -75.9347], name: 'Casa de la Cultura', description: 'Centro cultural con exposiciones de arte y eventos', image: 'sevilla-casa-cultura.jpg'},
        {coords: [4.2892, -75.9413], name: 'Cascada del Amor', description: 'Cascada natural para disfrutar de la naturaleza', image: 'sevilla-cascada.jpg'},
        // En Roldanillo
        {coords: [4.4102, -76.1453], name: 'Museo Rayo', description: 'Museo de arte moderno', image: 'roldanillo-museo.jpg'},
        {coords: [4.4052, -76.1484], name: 'Parque de la Cultura', description: 'Parque al aire libre con obras de arte escultóricas', image: 'roldanillo-parque.jpg'},
        {coords: [4.4098, -76.1519], name: 'Plaza de Toros', description: 'Plaza de toros histórica', image: 'roldanillo-plaza-toros.jpg'},
        {coords: [4.4128, -76.1506], name: 'Galería de Arte Contemporáneo', description: 'Galería con exposiciones de arte contemporáneo', image: 'roldanillo-galeria.jpg'},
        // En La Unión
        {coords: [4.531, -75.753], name: 'Cerro del Mirador', description: 'Mirador con vista panorámica del Valle del Cauca', image: 'launion-mirador.jpg'},
        {coords: [4.522, -75.749], name: 'Parque Lineal del Rio', description: 'Área recreativa junto al río', image: 'launion-parque-rio.jpg'},
        {coords: [4.521, -75.754], name: 'Plaza de la Libertad', description: 'Plaza central con áreas verdes y juegos para niños', image: 'launion-plaza-libertad.jpg'},
        {coords: [4.528, -75.752], name: 'Museo de la Uva', description: 'Museo dedicado a la historia y cultura de la uva en la región', image: 'launion-museo-uva.jpg'},
        // En Caicedonia
        {coords: [4.3406, -75.8274], name: 'Parque de la Libertad', description: 'Parque central de la ciudad', image: 'caicedonia-parque.jpg'},
        {coords: [4.3402, -75.8271], name: 'Iglesia de San José', description: 'Iglesia histórica con arquitectura colonial', image: 'caicedonia-iglesia.jpg'},
        {coords: [4.3413, -75.8265], name: 'Monumento al Café', description: 'Monumento que celebra la cultura del café', image: 'caicedonia-monumento.jpg'},
        {coords: [4.3428, -75.8270], name: 'Plaza de Bolívar', description: 'Plaza principal con monumentos históricos', image: 'caicedonia-plaza.jpg'},
        // En Zarzal (Guasimal - Avistamiento de OVNIS)
        {coords: [4.3861, -76.0809], name: 'Guasimal', description: 'Corregimiento conocido por avistamientos de OVNIS', image: 'zarzal-guasimal.jpg'},
        {coords: [4.3987, -76.0864], name: 'Iglesia de la Inmaculada Concepción', description: 'Iglesia en el centro de Guasimal', image: 'zarzal-iglesia.jpg'},
        {coords: [4.3874, -76.0838], name: 'Parque Principal', description: 'Parque central con áreas verdes y juegos infantiles', image: 'zarzal-parque.jpg'},
        {coords: [4.3921, -76.0821], name: 'Museo Histórico', description: 'Museo con artefactos históricos de la región', image: 'zarzal-museo.jpg'}
        // Agrega más sitios de interés turístico según sea necesario
    ];

    attractions.forEach(function(attraction) {
        var attractionMarker = L.marker(attraction.coords, {icon: attractionIcon}).addTo(map);
        var popupContent = '<div><h3>' + attraction.name + '</h3><img src="' + attraction.image + '" alt="' + attraction.name + '"><p>' + attraction.description + '</p></div>';
        attractionMarker.bindPopup(popupContent);
    });
});
