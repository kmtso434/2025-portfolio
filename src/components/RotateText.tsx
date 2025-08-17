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
            class={prevIndex() === i() ? "animated-text" : ""}
            style={{
              opacity: i() === index() ? "1" : "0",
              transition: "opacity ease-in-out 1s",
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

export function RotateText2(props: Props) {
  const [index, setIndex] = createSignal(0);
  const [prevIndex, setPrevIndex] = createSignal<number | null>(null);

  createEffect(
    on(
      () => index(),
      () => {
        const timeout = props.interval ?? 2500;
        const id = setTimeout(() => {
          setPrevIndex(index());
          const newIndex = index() + 1 < props.texts.length ? index() + 1 : 0;
          setIndex(newIndex);
        }, timeout);
      },
    ),
  );

  return (
    <>
      <For each={props.texts}>
        {(text, i) => {
          return (
            <Show when={i() === index() || i() === prevIndex()}>
              <div
                style={{
                  position: "absolute",
                  left: "5%",

                  transform: `translateY(-45vh)`,
                }}
              >
                <div
                  class={`animate__animated  ${i() === index() ? "animate__fadeIn" : " animate__fadeOut"}`}
                >
                  <span
                    style={
                      props.fontStyle ? props.fontStyle : { color: "#ffffff" }
                    }
                  >
                    {text}
                  </span>
                </div>
              </div>
            </Show>
          );
        }}
      </For>
    </>
  );
}
