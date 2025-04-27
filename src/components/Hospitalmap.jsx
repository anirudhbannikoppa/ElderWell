import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Loader from '../UI/loader';

// ✅ Fix for missing default Leaflet markers in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

const Hospitalmap = () => {
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({ lat: latitude, lng: longitude });

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=hospital&limit=10&viewbox=${
              longitude - 0.05
            },${latitude + 0.05},${longitude + 0.05},${latitude - 0.05}&bounded=1`,
            
          );
          const data = await res.json();
          setHospitals(data);
        } catch (err) {
          setError('Failed to fetch hospitals');
        }
      },
      () => setError('Could not get your location')
    );
  }, []);

  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!location) return <div className="flex items-center justify-center h-screen">
  <Loader />
     </div>

  return (
    <>
   <h1 className="text-center text-2xl font-bold ">Nearby Hospitals</h1>
    <div className="w-full  h-[550px] px-6 ">
      <MapContainer
        center={location}
        zoom={14}
        style={{ height: '100%', width: '100%' }}
        className="border-4 border-solid-600"
      >
        <TileLayer
          attribution='© OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location}>
          <Tooltip direction="top" offset={[0, -10]} opacity={1}>
            You are here
          </Tooltip>
          <Popup>You are here</Popup>
        </Marker>
        {hospitals.map((hospital, i) => (
          <Marker key={i} position={{ lat: hospital.lat, lng: hospital.lon }}>
            <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
              {hospital.display_name}
            </Tooltip>
            <Popup>
              <strong>{hospital.display_name}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
    </>
  );
};

export default Hospitalmap;
