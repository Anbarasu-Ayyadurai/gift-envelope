import { useState, useEffect } from "react";

export function useA11yStore() {

  const [state, setState] = useState({

    contrast: "none",        // none | invert | dark | light
    links: false,

    textSize: 0,             // 0 1 2 3 4

    spacing: 0,              // 0 1 2 3

    noanim: false,
    hideimg: false,

    font: "normal",          // normal | dyslexia | readable

    cursor: "normal",        // normal | big | mask | guide

    tooltips: false,

    lineHeight: 0,           // 0 1 2 3

    align: "default",        // left right center justify

    saturation: "normal",    // normal low high desat
    screenReader: "off",     // off | normal | slow | fast

  });

  // Load saved settings

  useEffect(() => {

    const saved = localStorage.getItem("a11y");

    if (saved) {
      setState(JSON.parse(saved));
    }

  }, []);


  // Apply settings

  useEffect(() => {

    localStorage.setItem(
      "a11y",
      JSON.stringify(state)
    );

    const handleSpeak = (event) => {
      const target = event.target;
      let text = target.textContent?.trim() || target.alt || target.getAttribute('aria-label') || target.getAttribute('title') || 'element';
      if (text) {
        const utterance = new SpeechSynthesisUtterance(text);
        let rate = 1;
        if (state.screenReader === 'slow') rate = 0.5;
        if (state.screenReader === 'fast') rate = 1.5;
        utterance.rate = rate;
        speechSynthesis.speak(utterance);
      }
    };

    applyClasses(state, handleSpeak);

  }, [state]);


  const toggle = (key) => {

    setState((s) => ({
      ...s,
      [key]: !s[key],
    }));

  };
  const setMode = (key, value) => {

    setState((s) => {

      const current = s[key];

      return {
        ...s,
        [key]: current === value ? getDefault(key) : value,
      };

    });

  };
  // const setMode = (key, value) => {

  //   setState((s) => ({

  //     ...s,

  //     [key]: s[key] === value
  //       ? getDefault(key)
  //       : value,

  //   }));

  // };
  const setLevel = (key, level) => {

    setState((s) => ({

      ...s,

      [key]: s[key] === level
        ? 0
        : level,

    }));

  };

  return {
    toggle,
    setMode,
    setLevel,
    state,
  };

}
function getDefault(key) {

  const defaults = {

    contrast: "none",
    font: "normal",
    cursor: "normal",
    align: "default",
    saturation: "normal",
    screenReader: "off",

  };

  return defaults[key] || 0;

}

function applyClasses(state, handleSpeak) {
  window.a11yState = state;

  const body = document.body;

  // body.className = "";
  body.classList.remove(
    ...Array.from(body.classList).filter(c => c.startsWith("a11y-"))
  );



  // boolean

  if (state.links)
    body.classList.add("a11y-links");

  if (state.noanim)
    body.classList.add("a11y-noanim");

  if (state.hideimg)
    body.classList.add("a11y-hideimg");

  if (state.tooltips)
    body.classList.add("a11y-tooltips");


  // contrast

  if (state.contrast !== "none") {
    body.classList.add(
      "a11y-contrast-" + state.contrast
    );
  }


  // text size

  if (state.textSize > 0) {
    body.classList.add(
      "a11y-text-" + state.textSize
    );
  }
  // =========================
  // SCREEN READER (MULTI MODE)
  // =========================

  // cleanup first
  document.body.removeEventListener("click", handleSpeak);

  if (state.screenReader !== "off") {

    document.body.addEventListener("click", handleSpeak);

  }

  // spacing

  if (state.spacing > 0) {
    body.classList.add(
      "a11y-spacing-" + state.spacing
    );
  }


  // font

  if (state.font !== "normal") {
    body.classList.add(
      "a11y-font-" + state.font
    );
  }


  // cursor
  // =========================
  // CURSOR MODES
  // =========================

  // Clean up previous cursor elements
  const existingGuide = document.querySelector('.a11y-guide-line');
  if (existingGuide) existingGuide.remove();
  const existingMask = document.querySelector('.a11y-mask');
  if (existingMask) existingMask.remove();
  document.onmousemove = null;

  if (state.cursor === "big") {

    document.body.classList.add("a11y-cursor-big");

  }

  if (state.cursor === "guide") {

    document.body.classList.add("a11y-cursor-guide");

    const line = document.createElement("div");
    line.className = "a11y-guide-line";

    document.body.appendChild(line);

    document.onmousemove = (e) => {
      line.style.top = e.clientY + "px";
    };

  }

  if (state.cursor === "mask") {

    document.body.classList.add("a11y-cursor-mask");

    const mask = document.createElement("div");
    mask.className = "a11y-mask";

    document.body.appendChild(mask);

    document.onmousemove = (e) => {
      mask.style.background = `
        radial-gradient(
          circle at ${e.clientX}px ${e.clientY}px,
          transparent 120px,
          rgba(0,0,0,0.6) 200px
        )
      `;
    };

  }
  // line height

  if (state.lineHeight > 0) {
    body.classList.add(
      "a11y-line-" + state.lineHeight
    );
  }


  // align

  if (state.align !== "default") {
    body.classList.add(
      "a11y-align-" + state.align
    );
  }


  // saturation

  if (state.saturation !== "normal") {
    body.classList.add(
      "a11y-sat-" + state.saturation
    );
  }

}
function handleSpeak(e) {

  const text = e.target.innerText?.trim();

  if (!text) return;

  const speech = new SpeechSynthesisUtterance(text);

  // 🔥 MODE CONTROL
  switch (window.a11yState?.screenReader) {

    case "slow":
      speech.rate = 0.7;
      break;

    case "fast":
      speech.rate = 1.5;
      break;

    default:
      speech.rate = 1;
  }

  speech.pitch = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);

}

// function applyClasses(state) {

//   const classes = [
//     "a11y-contrast",
//     "a11y-links",
//     "a11y-big",
//     "a11y-spacing",
//     "a11y-noanim",
//     "a11y-hideimg",
//     "a11y-dyslexia",
//     "a11y-cursor"
//   ];

//   document.body.classList.remove(...classes);

//   Object.keys(state).forEach((key) => {

//     if (state[key]) {
//       document.body.classList.add("a11y-" + key);
//     }

//   });

// }