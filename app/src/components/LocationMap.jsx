import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap = ({ position, city }) => {
  return (
    <div className="widget border rounded-2xl bg-white p-4 shadow-md">
      <h3 className="text-lg font-bold mb-2">Localisation</h3>
      <MapContainer center={position    } zoom={13} className="h-60 w-full rounded-2xl">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <span>Localisation actuelle : {city}</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
