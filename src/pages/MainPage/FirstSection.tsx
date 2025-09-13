import { JSX } from "solid-js/jsx-runtime";

export type FirstSectionProps = JSX.HTMLAttributes<HTMLDivElement> & {
  id: string;
};

export const FirstSection = (props: FirstSectionProps) => {
  return (
    <>
      {/* First Section */}
      <img
        id={props.id}
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
    </>
  );
};
