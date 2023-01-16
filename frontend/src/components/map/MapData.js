const Images = [
	{ image: require('../../assets/images/image1.jpeg')},
	{ image: require('../../assets/images/image2.jpeg')},
	{ image: require('../../assets/images/image3.jpeg')},
];

// dummy data markers
export const Markers = [
	{
		title: "Noordlaan", 
		descripition: 'Dope spot',
		image: Images[0].image,
		info: {
			difficulty: "intermediate",
			space: "indoor",
			type: "stairs",
			checkins: 34,
			safe: true,
			risk: false, 
			activity: "chill",
		},
		coordinate: {
			latitude: 51.02899,
			longitude: 4.10196,
		},
	},
	{
		title: "Keizerpark", 
		descripition: 'Chille spot',
		image: Images[1].image,
		info: {
			difficulty: "beginner",
			space: "outdoor",
			type: "rail",
			checkins: 148,
			safe: true,
			risk: false, 
			activity: "busy",
		},
		coordinate: {
			latitude: 51.03800,
			longitude: 4.10100,
		},
	},
	{
		title: "Grote markt", 
		descripition: 'Aight spot',
		image: Images[2].image,
		info: {
			difficulty: "intermediate",
			space: "covered",
			type: "gap",
			checkins: 51,
			safe: false,
			risk: false, 
			activity: "average",
		},
		coordinate: {
			latitude: 51.02740,
			longitude: 4.10430,
		},
	},
	{
		title: "Lendestraat", 
		descripition: 'Chille spot',
		image: Images[1].image,
		info: {
			difficulty: "pro",
			space: "outdoor",
			type: "pump",
			checkins: 140,
			safe: true,
			risk: false, 
			activity: "busy",
		},
		coordinate: {
			latitude: 51.02893,
			longitude: 4.10653,
		},
	},
	{
		title: "Koningsweg", 
		descripition: 'Aight spot',
		image: Images[2].image,
		info: {
			difficulty: "intermediate",
			space: "covered",
			type: "gap",
			checkins: 74,
			safe: false,
			risk: false, 
			activity: "chill",
		},
		coordinate: {
			latitude: 51.02495,
			longitude: 4.10194,
		},
	},
]

// mapstyle made with: https://mapstyle.withgoogle.com/
export const MapStyle = [
	{
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#f5f5f5"
		}
	  ]
	},
	{
	  "elementType": "labels.icon",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#616161"
		}
	  ]
	},
	{
	  "elementType": "labels.text.stroke",
	  "stylers": [
		{
		  "color": "#f5f5f5"
		}
	  ]
	},
	{
	  "featureType": "administrative.land_parcel",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#bdbdbd"
		}
	  ]
	},
	{
	  "featureType": "poi",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#eeeeee"
		}
	  ]
	},
	{
	  "featureType": "poi",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#757575"
		}
	  ]
	},
	{
	  "featureType": "poi.park",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#e5e5e5"
		}
	  ]
	},
	{
	  "featureType": "poi.park",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#9e9e9e"
		}
	  ]
	},
	{
	  "featureType": "road",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#ffffff"
		}
	  ]
	},
	{
	  "featureType": "road.arterial",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#757575"
		}
	  ]
	},
	{
	  "featureType": "road.highway",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#dadada"
		}
	  ]
	},
	{
	  "featureType": "road.highway",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#616161"
		}
	  ]
	},
	{
	  "featureType": "road.local",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#9e9e9e"
		}
	  ]
	},
	{
	  "featureType": "transit.line",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#e5e5e5"
		}
	  ]
	},
	{
	  "featureType": "transit.station",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#eeeeee"
		}
	  ]
	},
	{
	  "featureType": "water",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#c9c9c9"
		}
	  ]
	},
	{
	  "featureType": "water",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#9e9e9e"
		}
	  ]
	}
  ]