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
const blueIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  iconSize: [16, 26],
  iconAnchor: [7, 25],
  popupAnchor: [1, -20],
});

const primaryLocation = [32.0055, 34.8854];

const App = () => {
  return (
    <MapContainer
      center={primaryLocation}
      zoom={5}
      style={{ width: '100%', height: '100vh' }}
    >
      {/* <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="&copy; <a href='https://www.esri.com'>Esri</a>, &copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      /> */}

      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={primaryLocation} icon={blueIcon}>
        <Popup>Tel Aviv Ben Gurion Airport</Popup>
      </Marker>

      {/* Airport Markers */}
      {destinations.map((airport, index) => (
        <React.Fragment key={index}>
          <AirportMarker airport={airport} />
          <Polyline
            positions={[primaryLocation, airport.coords]}
            color="grey"
            weight={0.8}
            opacity={0.4}
          />
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default App;
