import WebFont from "webfontloader";

// Cache to ensure the font is only loaded once
let fontPromise: Promise<void> | null = null;

export function loadMonigueFont(): Promise<void> {
  if (!fontPromise) {
    fontPromise = new Promise((resolve) => {
      WebFont.load({
        custom: {
          families: ["Monigue"],
          urls: ["/global.css"],
        },
        active: () => {
          resolve();
        },
        inactive: () => {
          resolve(); // Resolve even if font fails to show fallback
        },
        timeout: 2000, // Shorter timeout to prevent long waits
      });
    });
  }
  return fontPromise;
}

export default loadMonigueFont;
