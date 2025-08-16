// src/components/RotatingBoxText.tsx
import { Component, createEffect, For, on, Show, JSX } from "solid-js";

import { createSignal, onCleanup, onMount } from "solid-js";

type Props = {
  texts: string[];
  interval?: number;
  fontStyle?: string | JSX.CSSProperties | undefined;
};

export default function RotateText(props: Props) {
  const [index, setIndex] = createSignal(0);
  const [prevIndex, setPrevIndex] = createSignal<number | null>(null);

  createEffect(
    on(
      () => index(),
      () => {
        const timeout = props.interval ? props.interval : 2500;

        setTimeout(() => {
          const newIndex = index() + 1 < props.texts.length ? index() + 1 : 0;
          setIndex(newIndex);
          setPrevIndex(index());
        }, timeout);
      },
    ),
  );

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        height: "8rem",
      }}
    >
      <For each={props.texts}>
        {(text, i) => (
          <div
            style={{
              opacity: index() === i() ? 1 : 0,
              transform:
                index() === i()
                  ? "translateY(0)"
                  : prevIndex() === i()
                    ? "translateY(-100%)"
                    : "translateY(100%)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              width: "100%",
              height: "100%",
              display: "flex",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          >
            <span
              style={props.fontStyle ? props.fontStyle : { color: "#ffffff" }}
            >
              {text}
            </span>
          </div>
        )}
      </For>
    </div>
  );
}
