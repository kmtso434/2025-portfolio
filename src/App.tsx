import { type Component } from "solid-js";
import { RotateText2 } from "./components/RotateText";

const App: Component = () => {
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        width: "100vw",
        height: "100vh",
        "overflow-x": "hidden",
        position: "fixed",
      }}
    >
      {/* First Section */}
      <div
        id="Introduce"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          "overflow-x": "hidden",
          "overflow-y": "auto",
          "background-color": "hsla(33,0%,0%,1)",
          "background-image": `
            radial-gradient(at 2% 3%, hsla(39,88%,47%,1) 0px, transparent 50%),
            radial-gradient(at 99% 85%, hsla(21,93%,75%,0.35) 0px, transparent 50%),
            radial-gradient(at 91% 15%, hsla(41,92%,74%,0.25) 0px, transparent 50%)
          `,
          "scrollbar-width": "none",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "110%",
            "object-fit": "cover",
            "mask-image": `linear-gradient(0deg, #00000000 1%, black)`,
          }}
          src="/images/astrounet_watch_left.png"
          alt="background"
        />

        <div
          style={{
            "font-family": "NimbusSanL-Bol",
            "font-weight": "bold",
            position: "absolute",
            color: "#ffffffff",
            top: "55%",
            left: "3%",
            "font-size": "clamp(2rem, 6vw, 6rem)",
            width: "100%",
            gap: "0",
          }}
        >
          <span style={{ display: "block", height: "clamp(2rem, 6vw, 6rem)" }}>
            {"I AM"}
          </span>

          <span
            style={{
              display: "block",
              height: "clamp(2rem, 6vw, 6rem)",
              color: "hsla(39,88%,47%,1)",
            }}
          >
            {"UI/UX DESIGNER"}
          </span>
          <span
            style={{
              display: "block",
              height: "clamp(2rem, 6vw, 6rem)",
              color: "hsla(39,88%,47%,1)",
            }}
          >
            {"FRONT ENGINEER"}
          </span>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "7%",
          display: "flex",
          position: "absolute",
          top: "0",
          "padding-right": "3%",
          "padding-left": "3%",
          "padding-top": "1%",
          "font-size": "clamp(1rem, 2vw, 2rem)",
          background: `rgba(0, 0, 0, 0.02))`,
          "backdrop-filter": `blur(2px)`,
          "background-blend-mode": "overlay",
          color: "white",
        }}
      >
        <span
          style={{
            "font-family": "NimbusSanL-Bol",
            opacity: "1",
            "margin-right": "0.5%",
          }}
        >
          {" "}
          {"2025"}
        </span>
        <span style={{ "font-family": "NimbusSanL-Bol", opacity: "0.5" }}>
          {" "}
          {" PORTFOLIO"}
        </span>
      </div>
    </div>
  );
};

export default App;
