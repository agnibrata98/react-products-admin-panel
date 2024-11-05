import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import { GeocodingControl } from "@maptiler/geocoding-control/react";
import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl-controller";
import "@maptiler/geocoding-control/style.css";
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

export default function GeoLocationMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 88.3629;
  const lat = 22.5744;
  const zoom = 14;
  const API_KEY = 'AgmQyQUNtm2rrySy5kdo';
  const [mapController, setMapController] = useState();

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    setMapController(createMapLibreGlMapController(map.current, maplibregl));

  }, [API_KEY, lng, lat, zoom]);


  return (
    <>
    <div style={{ textAlign: "center", marginBottom: "2rem", fontFamily: "Poppins, sans-serif", fontSize: "1.5rem", fontWeight: "500" }}>
      Find Our Location
    </div>
      <div>
        <div className="map-wrap">
            <div className="geocoding">
            <GeocodingControl apiKey={API_KEY} mapController={mapController} />
            </div>
            <div ref={mapContainer} className="map" />
        </div>
      </div>
    </>
  );
}