import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import destinations from './destinations.json';
import AirportMarker from './components/AirportMarker'; // Import the reusable component

// Green icon for primary location (Tel Aviv)
const greenIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  iconSize: [15, 25],
  iconAnchor: [7, 25],
  popupAnchor: [1, -20],
});

const primaryLocation = [32.0853, 34.7818];

const App = () => {
  return (
    <MapContainer
      center={primaryLocation}
      zoom={3}
      style={{ width: '100%', height: '100vh' }}
    >
      {/* Light mode tile layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Primary Location: Tel Aviv */}
      <Marker position={primaryLocation} icon={greenIcon}>
        <Popup>Primary Location: Tel Aviv Ben Gurion Airport</Popup>
      </Marker>

      {/* Airport Markers */}
      {destinations.map((airport, index) => (
        <React.Fragment key={index}>
          <AirportMarker airport={airport} />
          <Polyline
            positions={[primaryLocation, airport.coords]}
            color="black"
            weight={1}
            opacity={0.4}
          />
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default App;
