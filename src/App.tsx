import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div style = {{padding : "3rem", height : "100vh", width : "100vw"}} >
      <div style={{
        "height" : "3rem",
        "width" : "100%",
        "display" : "flex"
      }}>
        <text style={{
          height : "100%",
          "width" : "33%",
          "font-size": "16px",
          "font-weight" : "bold"
        }}>
          HYUNA KIM
        </text>

        <text style={{
          height : "100%",
          "width" : "33%",
          "font-size": "10px",
          "text-align" : "center"
        }}>
          Life ain't fun without pain. <br/>
          Haseeb deserve II tickles
        </text>

          <text style = {{
            width : "33%", 
            "height" : "100%",
             "font-size": "10px",
             "text-align" : "right"
          }}>
            Contact
          </text>


      </div>

        
        <div style={{
          height : `calc(100% - 3rem)`,
        }}>
          <div style={{"height" : `calc(100% - 5rem)`, width : "100%","align-items" : "right", display: "flex",
  "justify-content": "flex-end",}}>
    <div>
            <div style={{
              width: "20rem",
              height: "20rem",
              "border-radius": "100%",
              "position": "relative",
              overflow: "hidden",
              filter: "contrast(290%) brightness(100%)",
              "background": "radial-gradient(circle at 50% 92%, rgba(0,0,0,1), rgba(255, 255, 255, 0))"
            }}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0.2,
                    "pointer-events": "none"
                  }}>
                <filter id="noiseFilter">
                  <feTurbulence type="fractalNoise" baseFrequency="10" numOctaves="100" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
              </svg>
            </div>

            <div style={{
              width: "20rem",
              height: "20rem",
              "border-radius": "100%",
              "position": "relative",
              overflow: "hidden",
              filter: "contrast(290%) brightness(100%)",
              "background": "radial-gradient(circle at 50% -4%, rgba(0,0,0,1), rgba(255, 255, 255, 0))"
            }}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0.2,
                    "pointer-events": "none"
                  }}>
                <filter id="noiseFilter">
                  <feTurbulence type="fractalNoise" baseFrequency="10" numOctaves="100" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
              </svg>
            </div>
          </div>
          </div>

          
          <text style = {{"font-weight" : "bold", height : "5rem", "width" : "100%", "font-size" : "60px"}}>
            PORTFOLIO
          </text>
        </div>



    </div>
  );
};

export default App;
