import React, { useState, useEffect, useCallback } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent, Popup, LatLng, latLng } from 'leaflet';
import { Container } from './styles';
interface IThreats {
  id?: string;
  dangerLevel?: string;
  monsterName?: string;
  lat: number;
  lng: number;
}

interface Position {
  latitude: number;
  longitude: number;
}

interface Props {
  content: string;
  position: [Position];
}

interface MarkerData extends Props {
  key: string;
}
interface IMapProps {
  handleSetCoordinate(latlng?: [number, number]): void;
  latlng?: [number, number];
}

const MapContainer = ({ handleSetCoordinate, latlng }: IMapProps) => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    -14.1215155,
    -55.6595907,
  ]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>(
    latlng || [0, 0],
  );
  const [initialZoom, setInitialZoom] = useState(1);
  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    setSelectedPosition([lat, lng]);
    handleSetCoordinate([lat, lng]);
  }
  useEffect(() => {
    setSelectedPosition(latlng || [0, 0]);
  }, [latlng]);

  return (
    <Container>
      <Map
        center={[0, 0]}
        zoom={initialZoom}
        style={{ height: 350, borderRadius: 4 }}
        onclick={handleMapClick}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={selectedPosition} />
      </Map>
    </Container>
  );
};

export default MapContainer;
