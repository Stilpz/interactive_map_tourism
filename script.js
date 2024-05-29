document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([4.3936, -76.0742], 12); // Coordenadas corregidas de La Unión, Valle del Cauca

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
        }),
        Uva: L.icon({
            iconUrl: 'park-icon-uva.png', // Icono para parque de la Uva
            iconSize: [30, 30],
            iconAnchor: [15, 30],
            popupAnchor: [0, -30]
        })
    };

    // Icono para los sitios de interés turístico
    var museumIcon = L.icon({
        iconUrl: 'museum-icon.png', // Icono para museos
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
    });

    var parkIcon = L.icon({
        iconUrl: 'park-icon.png', // Icono para parques
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
    });

    var parkIconUva = L.icon({
        iconUrl: 'park-icon-uva.png', // Icono para parque de la Uva
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
    });

    var artGalleryIcon = L.icon({
        iconUrl: 'art-gallery-icon.png', // Icono para galerías de arte
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
    });

    // Marcadores de ciudades
    var cities = [
        {coords: [4.265020858056078, -75.93436804040148], name: 'Sevilla', description: 'Pueblo Mágico, Capital cafetera y Balcón del Valle', image: 'sevilla-image.jpg'},
        {coords: [4.41062865492367, -76.15432375128934], name: 'Roldanillo', description: 'Pueblo Mágico', image: 'roldanillo-image.jpg'},
        {coords: [4.53309, -76.10383], name: 'LaUnion', description: 'Capital vitivinícola de Colombia', image: 'launion-image.jpg'},
        {coords: [4.33471, -75.82686], name: 'Caicedonia', description: 'La centinela del Valle', image: 'caicedonia-image.jpg'},
        {coords: [4.39678, -76.07290], name: 'Zarzal', description: 'La tierra que endulza a Colombia', image: 'zarzal-image.jpg'}
    ];

    cities.forEach(function(city) {
        var cityMarker = L.marker(city.coords, {icon: cityIcons[city.name]}).addTo(map);
        var popupContent = '<div style="text-align:center;"><h3>' + city.name + '</h3><img src="' + city.image + '" alt="' + city.name + '" class="popup-image"><p>' + city.description + '</p></div>';
        cityMarker.bindPopup(popupContent);
    });

    // Marcadores de sitios de interés turístico
    var attractions = [
        // En Sevilla
        {coords: [4.2871, -75.9335], name: 'Basílica San Luis Gonzaga', description: 'Iglesia cuyo diseño arquitectónico es tipo neogótico', image: 'sevilla-basilica-san-luis-gonzaga.jpg', icon: museumIcon},
        {coords: [4.2883, -75.9391], name: 'Mirador Alto de la Cruz', description: 'Plazoleta cuenta con variedad gastronómica, asados, comidas rápidas, cócteles, comida fusión mexicana', image: 'sevilla-mirador-delacruz.jpg', icon: parkIcon},
        {coords: [4.27464, -75.93098], name: 'El Bosque que Camina', description: 'Parque Eco Pedagógico y Turístico, ideal para los amantes de las bondades del bambú y de la guadua', image: 'sevilla-bosque-camina.jpg', icon: artGalleryIcon},
        {coords: [4.2892, -75.9413], name: 'Cascada La Toma', description: 'Destino que vale la pena conocer en Sevilla, especialmente para los amantes de la naturaleza', image: 'sevilla-cascada-latoma.jpg', icon: parkIcon},
        // En Roldanillo
        {coords: [4.4102, -76.1453], name: 'Museo Rayo', description: 'Museo de arte moderno', image: 'roldanillo-museo.jpg', icon: museumIcon},
        {coords: [4.4052, -76.1484], name: 'Parque de la Cultura', description: 'Parque al aire libre con obras de arte escultóricas', image: 'roldanillo-parque.jpg', icon: parkIcon},
        {coords: [4.4098, -76.1519], name: 'Plaza de Toros', description: 'Plaza de toros histórica', image: 'roldanillo-plaza-toros.jpg', icon: parkIcon},
        {coords: [4.4128, -76.1506], name: 'Galería de Arte Contemporáneo', description: 'Galería con exposiciones de arte contemporáneo', image: 'roldanillo-galeria.jpg', icon: artGalleryIcon},
        // En La Unión
        {coords: [4.53797, -76.11664], name: 'La Cantera Bike Park', description: 'Bajada de downhill en bicicleta Specialized de enduro', image: 'launion-lacantera-bikepark.jpg', icon: parkIcon},
        {coords: [4.53033, -76.08736], name: 'Parque Nacional de la Uva', description: 'Una experiencia única en el Valle del Cauca', image: 'launion-parque-uva.jpg', icon: parkIconUva},
        {coords: [4.53122, -76.09412], name: 'Museo de la Uva y el vino', description: 'Museo dedicado a la viticultura, a la producción e historia del vino y su difusión', image: 'launion-museo-uvayvino.jpg', icon: parkIcon},
        {coords: [4.526306942000144, -76.0885469776011], name: 'Hotel Los Viñedos', description: 'Hotel de referencia en la región', image: 'launion-hotel-losvinedos.jpg', icon: museumIcon},
        // En Caicedonia
        {coords: [4.33249, -75.82906], name: 'Parque Principal de Caicedonia', description: 'Parque central de la ciudad', image: 'caicedonia-parque-principal.jpg', icon: parkIcon},
        {coords: [4.33202, -75.82383], name: 'Romboide La Celestina', description: 'Glorieta con monumentos culturales propios de Caicedonia: Jeeps', image: 'caicedonia-romboide-lacelestina.jpg', icon: museumIcon},
        {coords: [4.31881, -75.87541], name: 'Parque Nacional de las Heliconias', description: 'Lugar de fácil acceso, rodeado de cultivos de café y cítricos que hacen del viaje una experiencia en sí misma', image: 'caicedonia-parque-heliconias.jpg', icon: parkIcon},
        {coords: [4.32247, -75.82009], name: 'Mirador Caicedonia', description: 'Mirador en las afueras de Caicedonia', image: 'caicedonia-mirador.jpg', icon: parkIcon},
        // En Zarzal (Guasimal - Avistamiento de OVNIS)
        {coords: [4.41302, -76.04178], name: 'Guasimal', description: 'Corregimiento conocido por avistamientos de OVNIS', image: 'zarzal-guasimal.jpg', icon: museumIcon},
        {coords: [4.37735, -76.07109], name: 'Kartódromo Internacional', description: 'Si eres amante de la velocidad podrás conocer el Kartódromo Internacional de Zarzal', image: 'zarzal-kartodromo.jpg', icon: museumIcon},
        {coords: [4.39524, -76.07117], name: 'Parque Principal', description: 'Parque central con áreas verdes y esculturas de iguanas', image: 'zarzal-parque.jpg', icon: parkIcon},
        {coords: [4.36459, -75.94835], name: 'Complejo Ecoturístico Leña Verde', description: 'Es un amplio espacio natural diseñado y adecuado para la recreación', image: 'zarzal-lena-verde.jpg', icon: museumIcon}
        // Agrega más sitios de interés turístico según sea necesario
    ];

    attractions.forEach(function(attraction) {
        var attractionMarker = L.marker(attraction.coords, {icon: attraction.icon}).addTo(map);
        var popupContent = '<div style="text-align:center;"><h3>' + attraction.name + '</h3><img src="' + attraction.image + '" alt="' + attraction.name + '" class="popup-image"><p>' + attraction.description + '</p></div>';
        attractionMarker.bindPopup(popupContent);
    });
});
