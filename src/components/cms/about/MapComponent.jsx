import maplibregl from "maplibre-gl";
import { GeocodingControl } from "@maptiler/geocoding-control/maplibregl";
import "@maptiler/geocoding-control/dist/style.css";
import "maplibre-gl/dist/maplibre-gl.css";

const apiKey = "YOUR_MAPTILER_API_KEY_HERE";

const map = new maplibregl.Map({
  container: "map", // id of HTML container element
  style: "https://api.maptiler.com/maps/streets/style.json?key=" + apiKey,
  center: [16.3, 49.2],
  zoom: 7,
});

const gc = new GeocodingControl({ apiKey, maplibregl });

map.addControl(gc);