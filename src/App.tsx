import { useState, Component, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NaverMap from "./maps/NaverMap";
import KakaoMap from "./maps/KakaoMap";

function App() {
  const [map, setMap] = useState("naver");

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="buttonPanel">
        <button onClick={() => setMap("naver")}>네이버맵</button>
        <button onClick={() => setMap("kakao")}>카카오맵</button>
      </div>
      <div style={{ position: "relative", width: "60rem", height: "40rem" }}>
        <div
          style={{
            visibility: map == "naver" ? "visible" : "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <NaverMap />
        </div>
        <div
          style={{
            visibility: map == "kakao" ? "visible" : "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <KakaoMap />
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
