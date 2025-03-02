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
    {
      name: 'Vienna - Vienna International Airport - VIE',
      coords: [48.1103, 16.5697],
    },
    {
      name: 'Minsk - Minsk National Airport - MSQ',
      coords: [53.9026, 27.5036],
    },
    { name: 'Brussels - Brussels Airport - BRU', coords: [50.9014, 4.4844] },
    { name: 'Liège - Liège Airport - LGG', coords: [50.6378, 5.4431] },
    {
      name: 'São Paulo - São Paulo/Guarulhos International Airport - GRU',
      coords: [-23.4356, -46.4731],
    },
    {
      name: 'Sofia - Vasil Levski Sofia Airport - SOF',
      coords: [42.6953, 23.4034],
    },
    {
      name: 'Montréal - Montréal–Mirabel International Airport - YMX',
      coords: [45.4571, -73.7491],
    },
    {
      name: 'Toronto - Toronto Pearson International Airport - YYZ',
      coords: [43.6777, -79.6248],
    },
    {
      name: 'Beijing - Beijing Capital International Airport - PEK',
      coords: [40.0801, 116.5846],
    },
    { name: 'Dubrovnik - Dubrovnik Airport - DBV', coords: [42.5605, 18.2683] },
    { name: 'Zagreb - Zagreb Airport - ZAG', coords: [45.7422, 16.0686] },
    {
      name: 'Larnaca - Larnaca International Airport - LCA',
      coords: [34.8754, 33.6247],
    },
    {
      name: 'Nicosia - Nicosia International Airport - NIC',
      coords: [35.167, 33.4367],
    },
    {
      name: 'Prague - Václav Havel Airport Prague - PRG',
      coords: [50.1, 14.26],
    },
    {
      name: 'Copenhagen - Copenhagen Airport - CPH',
      coords: [55.617, 12.6556],
    },
    {
      name: 'Cairo - Cairo International Airport - CAI',
      coords: [30.1219, 31.4064],
    },
    {
      name: 'Addis Ababa - Addis Ababa Bole International Airport - ADD',
      coords: [9.0304, 38.742],
    },
    {
      name: 'Marseille - Marseille Provence Airport - MRS',
      coords: [43.4397, 5.2217],
    },
    { name: "Nice - Nice Côte d'Azur Airport - NCE", coords: [43.6653, 7.216] },
    {
      name: 'Paris - Charles de Gaulle Airport - CDG',
      coords: [49.0097, 2.5477],
    },
    { name: 'Orly - Orly Airport - ORY', coords: [48.7262, 2.3594] },
    {
      name: 'Tbilisi - Tbilisi International Airport - TBS',
      coords: [41.6055, 41.1584],
    },
    {
      name: 'Berlin - Berlin Brandenburg Airport - BER',
      coords: [52.3667, 13.5033],
    },
    {
      name: 'Cologne/Bonn - Cologne Bonn Airport - CGN',
      coords: [50.865, 7.1428],
    },
    {
      name: 'Düsseldorf - Düsseldorf Airport - DUS',
      coords: [51.2893, 6.7667],
    },
    { name: 'Frankfurt - Frankfurt Airport - FRA', coords: [50.0379, 8.5622] },
    { name: 'Hanover - Hannover Airport - HAJ', coords: [52.46, 9.685] },
    { name: 'Munich - Munich Airport - MUC', coords: [48.3538, 11.786] },
    {
      name: 'Athens - Athens International Airport - ATH',
      coords: [37.9364, 23.9477],
    },
    {
      name: 'Rhodes - Rhodes International Airport - RHO',
      coords: [36.405, 28.0844],
    },
    {
      name: 'Hong Kong - Hong Kong International Airport - HKG',
      coords: [22.308, 113.9141],
    },
    {
      name: 'Budapest - Budapest Ferenc Liszt International Airport - BUD',
      coords: [47.437, 19.2611],
    },
    {
      name: 'Delhi - Indira Gandhi International Airport - DEL',
      coords: [28.5562, 77.1],
    },
    {
      name: 'Mumbai - Chhatrapati Shivaji Maharaj International Airport - BOM',
      coords: [19.0886, 72.8656],
    },
    {
      name: 'Tehran - Tehran Mehrabad International Airport - THR',
      coords: [35.6892, 51.313],
    },
    { name: 'Dublin - Dublin Airport - DUB', coords: [53.4213, -6.2701] },
    { name: 'Eilat - Eilat Airport - ETH', coords: [29.558, 34.948] },
    { name: 'Jerusalem - Atarot Airport - JRS', coords: [31.792, 35.235] },
    { name: 'Milan - Milan Malpensa Airport - MXP', coords: [45.63, 8.7269] },
    {
      name: 'Naples - Naples International Airport - NAP',
      coords: [40.8851, 14.2906],
    },
    { name: 'Rome - Rome Fiumicino Airport - FCO', coords: [41.8003, 12.2388] },
    {
      name: 'Venice - Venice Marco Polo Airport - VCE',
      coords: [45.505, 12.3517],
    },
    {
      name: 'Tokyo - Narita International Airport - NRT',
      coords: [35.7769, 140.3911],
    },
    {
      name: 'Amman - Queen Alia International Airport - AMM',
      coords: [31.7226, 35.9931],
    },
    {
      name: 'Almaty - Almaty International Airport - ALA',
      coords: [43.35, 77.04],
    },
    {
      name: 'Nairobi - Jomo Kenyatta International Airport - NBO',
      coords: [-1.3192, 36.9279],
    },
    {
      name: 'Riga - Riga International Airport - RIX',
      coords: [56.9236, 23.9712],
    },
    {
      name: 'Luxembourg City - Luxembourg Airport - LUX',
      coords: [49.6264, 6.2115],
    },
    {
      name: 'Mexico City - Mexico City International Airport - MEX',
      coords: [19.4361, -99.0719],
    },
    {
      name: 'Chișinău - Chișinău International Airport - KIV',
      coords: [46.9273, 28.93],
    },
    {
      name: 'Casablanca - Mohammed V International Airport - CMN',
      coords: [33.3675, -7.589],
    },
    {
      name: 'Marrakesh - Marrakesh Menara Airport - RAK',
      coords: [31.6064, -8.0369],
    },
    {
      name: 'Amsterdam - Amsterdam Airport Schiphol - AMS',
      coords: [52.3086, 4.7639],
    },
    {
      name: 'Kraków - Kraków John Paul II International Airport - KRK',
      coords: [50.077, 19.7842],
    },
    {
      name: 'Warsaw - Warsaw Chopin Airport - WAW',
      coords: [52.1655, 20.9674],
    },
    { name: 'Lisbon - Lisbon Airport - LIS', coords: [38.774, -9.1349] },
    {
      name: 'Bucharest - Henri Coandă International Airport - OTP',
      coords: [44.5747, 26.1033],
    },
    {
      name: 'Moscow - Moscow Domodedovo Airport - DME',
      coords: [55.41, 37.9022],
    },
    {
      name: 'Saint Petersburg - Pulkovo Airport - LED',
      coords: [59.8003, 30.2628],
    },
    {
      name: 'Mahé - Seychelles International Airport - SEZ',
      coords: [-4.6742, 55.5212],
    },
    {
      name: 'Johannesburg - O. R. Tambo International Airport - JNB',
      coords: [-26.1375, 28.2468],
    },
    {
      name: 'Seoul - Incheon International Airport - ICN',
      coords: [37.46, 126.4407],
    },
    {
      name: 'Barcelona - Josep Tarradellas Barcelona–El Prat Airport - BCN',
      coords: [41.2974, 2.0787],
    },
    {
      name: 'Madrid - Adolfo Suárez Madrid–Barajas Airport - MAD',
      coords: [40.4935, -3.5667],
    },
    { name: 'Geneva - Geneva Airport - GVA', coords: [46.2381, 6.108] },
    { name: 'Zürich - Zürich Airport - ZRH', coords: [47.4647, 8.5492] },
  ];

  return (
    <MapContainer
      center={primaryLocation}
      zoom={3}
      style={{ width: '100%', height: '100vh' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        className="dark-mode"
      />
      <Marker position={primaryLocation} icon={greenIcon}>
        <Popup>Primary Location: Tel Aviv Ben Gurion Airport</Popup>
      </Marker>

      {destinations.map((destination, index) => (
        <React.Fragment key={index}>
          <Marker position={destination.coords} icon={blueIcon}>
            <Popup>{destination.name}</Popup>
          </Marker>
          <Polyline
            positions={[primaryLocation, destination.coords]}
            color="white"
            weight={1}
            opacity={0.7}
          />
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default App;
