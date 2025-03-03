import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Custom blue icon
const blueIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  iconSize: [15, 25],
  iconAnchor: [7, 25],
  popupAnchor: [1, -20],
});

const AirportMarker = ({ airport }) => {
  return (
    <Marker position={airport.coords} icon={blueIcon}>
      <Popup>
        <strong>
          {airport.city}, {airport.country}
        </strong>{' '}
        <br />
        {airport.airport} <br />
        <strong>Code:</strong> {airport.code}
      </Popup>
    </Marker>
  );
};

export default AirportMarker;
