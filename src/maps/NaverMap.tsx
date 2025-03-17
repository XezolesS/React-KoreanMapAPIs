import { useState, useEffect } from "react";
import { CSU_COORDINATE, IT_PATH } from "./MapData";

const MAP_ELEMENT_ID = "map_naver";
const API_URL = "//oapi.map.naver.com/openapi/v3/maps.js";
const CLIENT_ID = "5ssychuaas";

export default function NaverMap() {
  // Add an API script on component load.
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${API_URL}?ncpClientId=${CLIENT_ID}&submodules=drawing`;
    script.async = true;
    script.onload = () => loadNaverMap();

    document.head.appendChild(script);

    console.debug("[NaverMap.tsx] Naver Map API Script has been loaded.");
  }, []);

  return (
    <div id={MAP_ELEMENT_ID} style={{ width: "100%", height: "100%" }}></div>
  );
}

/**
 * Load Naver Map.
 */
function loadNaverMap() {
  let [y, x] = CSU_COORDINATE;
  const map = new naver.maps.Map(MAP_ELEMENT_ID, {
    center: new naver.maps.LatLng(y, x),
    zoom: 16,
  });

  // linting error goes crazy dude.
  const samplePath: any = new naver.maps.Polyline({
    strokeColor: "#007EEA",
    strokeLineCap: "butt",
    path: IT_PATH,
  });

  naver.maps.Event.once(map, "init", function () {
    const drawingManager = new naver.maps.drawing.DrawingManager({ map: map });
    drawingManager.addDrawing(
      samplePath,
      naver.maps.drawing.DrawingMode.POLYLINE
    );

    drawingManager.addListener(naver.maps.drawing.DrawingEvents.ADD, function (e) {
      console.debug(e);
    });
  });
}
