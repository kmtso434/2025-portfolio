import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
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
          }}
          src="/images/astrounet_watch_left.png"
          alt="background"
        />
      </div>
    </div>
  );
};

export default App;
