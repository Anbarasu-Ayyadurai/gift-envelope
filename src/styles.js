const styles = `
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

body {
  margin: 0;
  /* background: #d8d8fb; */
  height: 100vh;
}

.envelope {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #7979aa;
  width: 150px;
  height: 90px;
}

/* keep ALL your existing CSS exactly same below */

.cover {
  position: relative;
}

.top,
.side,
.bottom {
  position: absolute;
  width: 150px;
  z-index: 2;
}

.top {
  cursor: pointer;
}

.top-cover {
  height: 60px;
  background: #7979aa;
  clip-path: polygon(0 0, 50% 100%, 100% 0);
}

.side {
  height: 90px;
}

.left,
.right {
  position: absolute;
  background: #5d5d93;
  width: 75px;
  height: 90px;
}

.left {
  left: 0;
  clip-path: polygon(0 0, 0 100%, 100% 50%);
}

.right {
  right: 0;
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
}

.bottom {
  top: 45px;
  height: 45px;
  background: #555587;
  clip-path: polygon(0 100%, 50% 0%, 100% 100%);
}

.paper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 180px;
  background: #dadae7;
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
}

.paper.show {
  visibility: visible;
}

.portrait {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.close {
  cursor: pointer;
  position: absolute;
  top: -10px;
  right: -5px;
  background: rgba(58, 58, 61, 0.62);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shadow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 250%);
  height: 30px;
  width: 160px;
  border-radius: 50%;
  background-image: radial-gradient(rgba(0, 0, 50, 0.3), rgba(250, 250, 250, 0));
}

/* =========================
   CONTRAST MODES
========================= */

.a11y-contrast-invert {
    filter: invert(1) hue-rotate(180deg);
}


/* 
.a11y-contrast-invert.a11y-sat-low {
  filter: invert(1) hue-rotate(180deg) saturate(0.5);
}

.a11y-contrast-invert.a11y-sat-high {
  filter: invert(1) hue-rotate(180deg) saturate(2);
}

.a11y-contrast-invert.a11y-sat-desat {
  filter: invert(1) hue-rotate(180deg) grayscale(1);
} */

.a11y-contrast-dark {
    background: black !important;
    color: yellow !important;
}

.a11y-contrast-dark a {
    color: cyan !important;
}

.a11y-contrast-light {
    background: white !important;
    color: black !important;
}



/* =========================
   HIGHLIGHT LINKS
========================= */

.a11y-links a {
    transition: all;
    text-decoration: underline !important;

    outline: 2px solid rgb(245, 223, 23) !important;
    color: rgb(255, 255green, 0) !important;
    background-color: rgb(153, 146, 146);
}



/* =========================
   TEXT SIZE LEVELS
========================= */

.a11y-text-1 {
    font-size: 110%;
}

.a11y-text-2 {
    font-size: 120%;
}

.a11y-text-3 {
    font-size: 130%;
}

.a11y-text-4 {
    font-size: 150%;
}



/* =========================
   TEXT SPACING LEVELS
========================= */

.a11y-spacing-1 {
    letter-spacing: 1px;
    word-spacing: 2px;
}

.a11y-spacing-2 {
    letter-spacing: 2px;
    word-spacing: 3px;
}

.a11y-spacing-3 {
    letter-spacing: 3px;
    word-spacing: 4px;
}



/* =========================
   LINE HEIGHT
========================= */

.a11y-line-1 {
    line-height: 1.5;
}

.a11y-line-2 {
    line-height: 1.75;
}

.a11y-line-3 {
    line-height: 2;
}



/* =========================
   TEXT ALIGN
========================= */

.a11y-align-left {
    text-align: left !important;
}

.a11y-align-center {
    text-align: center !important;
}

.a11y-align-right {
    text-align: right !important;
}

.a11y-align-justify {
    text-align: justify !important;
}



/* =========================
   FONT MODES
========================= */

.a11y-font-dyslexia {
    font-family: Arial, Helvetica, sans-serif !important;
}

.a11y-font-readable {
    font-family: Verdana, Tahoma, sans-serif !important;
}



/* =========================
   CURSOR MODES
========================= */
/* BIG CURSOR */
.a11y-cursor-big,
.a11y-cursor-big * {
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 44 44'%3E%3Cpath d='M6 4 L6 31 L13 24 L18 38 L24 35 L19 22 L29 22 Z' fill='%23000' stroke='%23f5df17' stroke-width='2.5' stroke-linejoin='round'/%3E%3C/svg%3E") 6 4, pointer !important;
}



/* READING GUIDE (line follows mouse) */
.a11y-guide-line {
    position: fixed;
    left: 0;
    width: 330px;
    height: 8px;
    background: #111;
    border: 3px solid #f4ea17;
    border-radius: 0 6px 6px 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
    pointer-events: none;
    z-index: 999999;
    box-sizing: border-box;
}

.a11y-guide-line::before {
    content: "";
    position: absolute;
    left: 68px;
    top: -18px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 18px solid #f4ea17;
}

.a11y-guide-line::after {
    content: "";
    position: absolute;
    left: 72px;
    top: -13px;
    width: 0;
    height: 0;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-bottom: 13px solid #111;
}

.a11y-cursor-guide .a11y-guide-line {
    background: #111;
    border-color: #f4ea17;
}

.a11y-cursor-guide .a11y-guide-line::before {
    border-bottom-color: #f4ea17;
}

.a11y-cursor-guide .a11y-guide-line::after {
    border-bottom-color: #111;
}

.a11y-cursor-mask .a11y-mask {
    border-top-color: #56d8c0;
    border-bottom-color: #56d8c0;
}

/* READING MASK */
.a11y-mask {
    position: fixed;
    left: 0;
    width: 100%;
    height: 120px;
    pointer-events: none;
    background: rgba(255, 255, 255, 0.04);
    border-top: 5px solid #2a2a2a;
    border-bottom: 5px solid #2a2a2a;
    box-sizing: border-box;
    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.45);
    z-index: 999998;
    transform: translateY(-50%);
}

/* =========================
   SATURATION
========================= */

.a11y-sat-low {
    filter: saturate(0.65);
}

.a11y-sat-high {
    filter: saturate(1.6);
}

.a11y-sat-desat {
    filter: saturate(0);
}



/* =========================
   BOOLEAN FEATURES
========================= */

.a11y-noanim * {
    animation: none !important;
    transition: none !important;
}

.a11y-lowvision {
    filter: brightness(1.05) contrast(1.2) saturate(1.2);
    animation: a11y-lowvision-glow 1.8s ease-in-out infinite alternate;
}

@keyframes a11y-lowvision-glow {
    from {
        filter: brightness(1.05) contrast(1.15) saturate(1.1);
    }

    to {
        filter: brightness(1.12) contrast(1.3) saturate(1.3);
    }
}

.a11y-hideimg img {
    display: none !important;
}

.a11y-tooltips [title] {
    position: relative;
}



/* =========================
   TOOLTIP STYLE
========================= */

.a11y-tooltips [title]:hover::after {
    content: attr(title);
    position: absolute;
    background: black;
    color: white;
    padding: 4px 6px;
    font-size: 12px;
    top: 100%;
    left: 0;
    white-space: nowrap;
    z-index: 9999;
}



/* =========================
   SAFETY FIX
========================= */

body[class*="a11y-"] img.a11y-icon {
    display: inline !important;
}

/* =========================
   Colorblindness Filters
========================= */
.cvd-protanopia {
    filter: url(#protanopia);
}

.cvd-deuteranopia {
    filter: url(#deuteranopia);
}

.cvd-tritanopia {
    filter: url(#tritanopia);
}
    /* =========================
   ACTIVE BUTTON
========================= */

.a11y-group button.active {

    background: #5b3b6f;
    color: white;

    box-shadow: 0 0 0 2px #c9a9db inset;

}

.a11y-card.active {

    background: #5b3b6f;
    color: white;

}

/* =========================
   FLOAT BUTTON
========================= */

.a11y-float {

    position: fixed;
    right: 20px;
    top: 17px;

    z-index: 9999;

    width: 48px;
    height: 48px;

    border-radius: 12px;

    background: #5b3b6f;
    color: white;

    border: none;

    font-size: 22px;

    cursor: pointer;

    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

    transition: 0.2s;
}

.a11y-float:hover {
    transform: scale(1.05);
}



/* =========================
   PANEL
========================= */

.a11y-container {

    position: fixed;
    right: 0;
    top: 0;

    width: 360px;
    height: 100vh !important;

    background: #f7f7f7;

    box-shadow: -4px 0 10px rgba(0, 0, 0, 0.25);

    z-index: 9999;

    display: flex;
    flex-direction: column;

    font-family: Arial, sans-serif;

}



/* =========================
   HEADER
========================= */

.a11y-header {

    background: #5b3b6f;
    color: white;

    padding: 14px;

    font-weight: bold;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 16px;
}

.a11y-close {

    cursor: pointer;
    font-size: 18px;

}



/* =========================
   GRID
========================= */

/* .a11y-grid {

  padding: 12px;

  display: flex;
  flex-direction: column;

  gap: 14px;

  overflow-y: auto;

} */

.a11y-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* 🔥 2 columns */
    gap: 12px;
    padding: 14px;
    overflow-y: auto;
}



/* =========================
   GROUP
========================= */

.a11y-group {

    background: white;

    border-radius: 10px;

    padding: 10px;

    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

}

.a11y-group p {

    margin: 0 0 6px 0;

    font-size: 13px;
    font-weight: bold;

}



/* =========================
   BUTTON ROW
========================= */

.a11y-group button {

    margin: 3px;

    padding: 6px 8px;

    border: none;

    border-radius: 6px;

    font-size: 12px;

    background: #e5e5e5;

    cursor: pointer;

    transition: 0.15s;

}

.a11y-group button:hover {

    background: #d0c2db;

}



/* =========================
   CARD (single toggle)
========================= */
/* 
.a11y-card {

  background: white;

  border-radius: 10px;

  padding: 12px;

  text-align: center;

  width: 100% !important;

  cursor: pointer;

  box-shadow: 0 2px 5px rgba(0,0,0,0.15);

  transition: 0.15s;

} */



/* =========================
   SCROLLBAR
========================= */

.a11y-container::-webkit-scrollbar {
    width: 6px;
}

.a11y-container::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 4px;
}



/* =========================
   RESPONSIVE
========================= */

@media (max-width: 600px) {

    .a11y-container {
        width: 100%;
    }

}

.a11y-card {

    background: white;
    border-radius: 14px;
    padding: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    align-items: stretch;
    min-height: 80px;
    color: #2c2727;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    transition: all 0.2s ease;
}

.a11y-card:hover {
    border: 1px solid #2563eb;
    /* blue */

}


.a11y-card-title {
    font-size: 15px;
    font-weight: 600;
}

.a11y-card-value {
    font-size: 12px;
    opacity: 0.8;
    text-transform: capitalize;
}

@media (max-width: 600px) {
    .a11y-grid {
        grid-template-columns: 1fr;
        /* 1 column on mobile */
    }
}

/* OPTIONAL: MAKE SOME ITEMS FULL WIDTH */
.a11y-card.full {
    grid-column: span 2;
}


/* BIG MODE */
.a11y-widget-big .a11y-container {
    width: 550px;
    font-size: 18px;
}

.a11y-widget-big .a11y-card {
    padding: 18px;
}

/* POSITION */
.a11y-widget-left .a11y-container {
    left: 20px;
    right: auto;
}

.a11y-widget-right .a11y-container {
    right: 20px;
    left: auto;
}

/* FLOAT BUTTON POSITION */
.a11y-widget-left .a11y-float {
    left: 20px;
    right: auto;
}

.a11y-widget-right .a11y-float {
    right: 20px;
    left: auto;
}

/* RESTORE BUTTON */
.a11y-restore {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
}


/* CONTAINER */
.a11y-switch-container {
    border-top: 10px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 12px;
    margin-top: 6px;
    border-top: 1px solid #e5e7eb;
    /* subtle gray */
}

/* LABEL */
.a11y-switch-text {
    padding: auto;
    font-size: 19px;
    font-weight: 450;
}

/* BUTTON SWITCH */
.a11y-switch {
    width: 42px;
    height: 22px;

    border-radius: 999px;
    border: none;

    background: #ccc;
    position: relative;

    cursor: pointer;
    transition: all 0.25s ease;
}

/* ACTIVE STATE */
.a11y-switch.active {
    background: #2563eb;
}

/* KNOB */
.a11y-switch-knob {
    position: absolute;
    top: 3px;
    left: 3px;

    width: 20px;
    height: 16px;

    background: white;
    border-radius: 50%;

    transition: all 0.25s ease;
}

/* MOVE KNOB */
.a11y-switch.active .a11y-switch-knob {
    transform: translateX(20px);
}

/* FOOTER */
.a11y-footer {
    padding: 10px;
    border-top: 1px solid #eee;
}

/* RESET BUTTON */
.a11y-reset-btn {
    width: 100%;
    padding: 10px;

    border: none;
    border-radius: 10px;

    font-size: 13px;
    font-weight: 600;

    cursor: pointer;

    background: #5b3b6f;
    /* red */
    color: white;

    transition: all 0.2s ease;

    gap: 8px;
    /* modern and clean spacing */
}


/* HOVER */
.a11y-reset-btn:hover {
    background: #31046b;
    border: 2px solid #2563eb;
    /* blue */
}

/* CLICK */
.a11y-reset-btn:active {
    transform: scale(0.98);
}

/* FOCUS (accessibility) */
.a11y-reset-btn:focus {

    outline-offset: 2px;
}

/* footer control */
.a11y-footer-controls {
    display: flex;
    gap: 8px;
    margin-top: 10px;
}

/* BUTTON */
.a11y-control-btn {
    flex: 1;
    padding: 8px;

    border: none;
    border-radius: 8px;

    font-size: 12px;
    font-weight: 500;

    cursor: pointer;

    background: #f3f4f6;
    transition: all 0.2s ease;
}

.a11y-control-btn:hover {

    border: 2px solid #2563eb;
    /* blue */
}

/* DANGER */
.a11y-control-btn.danger {
    background: #fee2e2;
    color: #b91c1c;
}

.a11y-control-btn.danger:hover {
    background: #fecaca;
}

/* RIGHT */
.a11y-right .a11y-container,
.a11y-right .a11y-float {
    right: 20px;
    left: auto;
}

/* LEFT */
.a11y-left .a11y-container,
.a11y-left .a11y-float {
    left: 20px;
    right: auto;
}

/* iCONS */
.a11y-card-icon {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
    opacity: 0.8;
}

.a11y-card.active .a11y-card-icon {
    opacity: 1;
}

.a11y-card.low-vision.active {
    animation: a11y-card-pulse 1.4s ease-in-out infinite alternate;
}

@keyframes a11y-card-pulse {
    from {
        transform: scale(1);
        box-shadow: 0 4px 14px rgba(91, 59, 111, 0.14);
    }

    to {
        transform: scale(1.02);
        box-shadow: 0 6px 18px rgba(91, 59, 111, 0.22);
    }
}

.a11y-select {
    width: 100%;
    padding: 8px 10px;
    border-radius: 10px;
    border: 1px solid #d1d5db;
    background: white;
    color: #111827;
    font-size: 14px;
    margin-top: 6px;
}

.a11y-card {
    text-align: center;
}
`;

export default styles;