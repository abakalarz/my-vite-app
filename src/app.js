import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const myLocations = [
  {
    name: "Treptower Park",
    location: [52.48891267036914, 13.468083035006051],
    description: "A beautiful park in Berlin.",
  },
  {
    name: "FEZ-Berlin",
    location: [52.461459512752924, 13.549009826266255],
    description: "A popular family activity center for children.",
  },
  {
    name: "Müggelsee Beach",
    location: [52.44313540928999, 13.67654370306775],
    description: "A lovely spot by the lake.",
  },
  {
    name: "Rüyam Gemüse Kebab",
    location: [52.484832312584984, 13.352433734328235],
    description: "A popular and delicious Berlin kebab spot.",
  },
];

// Create the map
const map = Leaflet.map("map").setView(myLocations[0].location, 13);

// Create a custom marker icon
const markerIcon = Leaflet.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconAnchor: [10, 20],
});

// Add the OpenStreetMap tile layer
Leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Add markers for all locations
myLocations.forEach((location) => {
  Leaflet.marker(location.location, { icon: markerIcon }).bindPopup(`<b>${location.name}</b><br>${location.description}`).addTo(map);
});

// Adjust the map view to show all markers
const bounds = Leaflet.latLngBounds(myLocations.map((location) => location.location));

map.fitBounds(bounds);
