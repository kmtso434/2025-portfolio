import { type Component } from "solid-js";
import { FirstSection } from "./pages/FirstSection";

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
      <div
        id="Background"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          "overflow-x": "hidden",
          "background-color": "hsla(33,0%,0%,1)",
          "background-image": `
            radial-gradient(at 2% 3%, hsla(39,88%,47%,1) 0px, transparent 50%),
            radial-gradient(at 99% 85%, hsla(21,93%,75%,0.35) 0px, transparent 50%),
            radial-gradient(at 91% 15%, hsla(41,92%,74%,0.25) 0px, transparent 50%)
          `,
          "scrollbar-width": "none",
        }}
      >
        {/* First Section */}
        <FirstSection id="FirstSection" />
      </div>
      {/*Top bar */}
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
          {" PORTFOLIO"}
        </span>
      </div>
    </div>
  );
};

export default App;
