import React, { useCallback, useRef, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Button from "../UIFields/Button";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 43.7,
  lng: -79.4,
};

const MapContainer: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBL6h-ACD3HMgrtnVVOvbRMo7FLESz7nTo",
    libraries: ["drawing"],
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const drawingManagerRef = useRef<google.maps.drawing.DrawingManager | null>(
    null
  );
  const polygonRef = useRef<google.maps.Polygon | null>(null);

  const [drawingActive, setDrawingActive] = useState(false);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;

    drawingManagerRef.current = new window.google.maps.drawing.DrawingManager({
      drawingMode: null,
      drawingControl: false,
      polygonOptions: {
        fillColor: "#2196F3",
        fillOpacity: 0.2,
        strokeWeight: 2,
        clickable: false,
        editable: false,
        draggable: false,
        zIndex: 1,
      },
    });

    drawingManagerRef.current.setMap(map);

    window.google.maps.event.addListener(
      drawingManagerRef.current,
      "polygoncomplete",
      (polygon: google.maps.Polygon) => {
        if (polygonRef.current) {
          polygonRef.current.setMap(null);
        }
        polygonRef.current = polygon;

        const path = polygon.getPath();
        const coords = [];
        for (let i = 0; i < path.getLength(); i++) {
          const point = path.getAt(i);
          coords.push(`${point.lng()},${point.lat()}`);
        }
        console.log("Polygon Coordinates:", coords.join(" | "));

        drawingManagerRef.current?.setDrawingMode(null);
        setDrawingActive(false);
      }
    );
  }, []);

  const startPolygonDrawing = () => {
    if (drawingManagerRef.current) {
      drawingManagerRef.current.setDrawingMode(
        window.google.maps.drawing.OverlayType.POLYGON
      );
      setDrawingActive(true);
    }
  };

  const clearPolygon = () => {
    if (polygonRef.current) {
      polygonRef.current.setMap(null);
      polygonRef.current = null;
    }
    drawingManagerRef.current?.setDrawingMode(null);
    setDrawingActive(false);
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="relative">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onMapLoad}
      />

      <div className="absolute bottom-2 left-2 flex gap-2">
        <Button
          onPress={startPolygonDrawing}
          disabled={drawingActive}
          className="bg-white text-primary shadow"
        >
          Draw Polygon
        </Button>

        <Button onPress={clearPolygon} className="bg-white shadow text-primary">
          Clear Polygon
        </Button>
      </div>
    </div>
  );
};

export default MapContainer;
