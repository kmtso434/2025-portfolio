import { For, Show, type Component } from "solid-js";
import RotatingBoxText from "./components/RotateText";
import RotateText from "./components/RotateText";

const App: Component = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        id="Introduce"
        style={{
          width: "100%",
          height: "100%",
          "overflow-y": "auto",
          background: "black",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            "min-width": "50rem",
            "max-width": "77rem",
            "mask-image": `linear-gradient(0deg, #00000000 1% , black )`,
          }}
          src="/images/astrounet_watch_left.png"
          alt="background"
        />
        <text
          style={{
            "font-family": "NimbusSanL-Bol",
            "font-weight": "bold",
            position: "absolute",
            color: "#ffffffff",
            top: "60%",
            left: "3rem",
            "font-size": "8rem",
            animation: `rotate3D 3s infinite ease-in-out`,
          }}
        >
          {"I AM"}
        </text>
      </div>

      <RotateText
        texts={["UI/UX DESIGNER", "FRONT ENGINEER"]}
        fontStyle={{
          "font-family": "NimbusSanL-Bol",
          "font-weight": "bold",
          position: "absolute",
          color: "#f1a000ff",
          top: `calc(60% + 8rem)`,
          left: "3rem",
          "font-size": "8rem",
        }}
      />
    </div>
  );
};

export default App;
