import { For, type Component } from "solid-js";
import { FirstSection } from "./pages/MainPage/FirstSection";

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
        <div
          style={{
            width: "100%",
            height: "100%",
            padding: "0rem 3% 3% 3%",
            "font-family": "NimbusSanL-Bol",
            "font-weight": "bold",
            "font-size": "clamp(1rem, 3vw, 3rem)",
            color: "#ffffff",
            opacity: "0.5",
          }}
        >
          <span>Skills & Tools</span>

          <div
            style={{
              display: "flex",
              width: "100%",
              height: `calc(100% - 3rem)`,
            }}
          >
            <div style={{ width: "50%", height: "100%" }}>
              <For
                each={[
                  { key: "UI & UX Design", percent: 70 },
                  { key: "Web Development", percent: 80 },
                  { key: "Embedding Binaries", percent: 80 },
                  { key: "Plot", percent: 70 },
                ]}
              >
                {(skill) => {
                  return (
                    <div
                      style={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gridTemplateRows: "1fr 1fr",
                        "row-gap": "0.5rem",
                        "margin-top": "0.5rem",
                        "font-weight": "light",
                        "font-size": "clamp(1rem, 2vw, 2rem)",
                      }}
                    >
                      <span style={{ "grid-row": 1, "grid-column": 1 }}>
                        {skill.key}
                      </span>
                      <span style={{ "grid-row": 1, "grid-column": 2 }}>
                        {skill.percent}%
                      </span>
                      <div
                        style={{
                          "grid-row": 2,
                          "grid-column": "1 / span 2",
                          width: "100%",
                          height: "0.5rem",
                          background: "#ffffff",
                        }}
                      />
                      <div
                        style={{
                          "grid-row": 2,
                          "grid-column": "1 / span 2",
                          width: `${skill.percent}%`,
                          height: "0.5rem",
                          background: "hsla(39,88%,47%,1)",
                        }}
                      />
                    </div>
                  );
                }}
              </For>
            </div>

            <div style={{ width: "50%", "margin-left": "2rem" }}>
              <span style={{ "margin-bottom": "2rem" }}>
                {"Tools | Work with"}
              </span>
              <div className="flex flex-wrap gap-3" style={{ height: "25%" }}>
                <For
                  each={[
                    "uplot",
                    "tauri",
                    "solid js",
                    "github",
                    "figma",
                    "typescript",
                    "rust",
                  ]}
                >
                  {(tool) => {
                    return (
                      <span
                        style={{
                          padding: "0.5rem",
                          "border-width": "1px",
                          "border-color": "#ffffff",
                          "line-height": "1",
                          //height: "1rem",
                        }}
                      >
                        {tool}
                      </span>
                    );
                  }}
                </For>
              </div>
            </div>
          </div>
        </div>
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
