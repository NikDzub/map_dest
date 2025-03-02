import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom small blue icon
const blueIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  iconSize: [15, 25], // Smaller size
  iconAnchor: [7, 25], // Adjust anchor to match new size
  popupAnchor: [1, -20],
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [25, 25],
});

const greenIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  iconSize: [15, 25], // Smaller size
  iconAnchor: [7, 25], // Adjust anchor to match new size
  popupAnchor: [1, -20],
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [25, 25],
});

const App = () => {
  const primaryLocation = [32.0853, 34.7818]; // Tel Aviv
  const destinations = [
    { name: 'Jerusalem', coords: [31.7683, 35.2137] },
    { name: 'Haifa', coords: [32.794, 34.9896] },
    { name: 'Eilat', coords: [29.5577, 34.9519] },
  ];

  return (
    <div className="App">
      <MapContainer
        center={primaryLocation}
        zoom={7}
        style={{ width: '100%', height: '100vh' }}
      >
        {/* Dark Mode Tile Layer */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />

        {/* Marker for Primary Location (Tel Aviv) */}
        <Marker position={primaryLocation} icon={greenIcon}>
          <Popup>Tel Aviv - Main Hub</Popup>
        </Marker>

        {/* Markers & White Thin Lines to Destinations */}
        {destinations.map((dest, index) => (
          <React.Fragment key={index}>
            <Marker position={dest.coords} icon={blueIcon}>
              <Popup>{dest.name}</Popup>
            </Marker>
            <Polyline
              positions={[primaryLocation, dest.coords]}
              color="white"
              weight={2}
            />
          </React.Fragment>
        ))}
      </MapContainer>
    </div>
  );
};

export default App;
