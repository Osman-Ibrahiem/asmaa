# AGENTS.md — asmaa

Static single-page Arabic (RTL) birthday landing page for Asmaa. No build step, no package manager, no tests.

## Project structure

- `index.html` – markup: splash (cake/candle) → hero → stats → gallery → timeline → reasons → letter → gift finale
- `style.css` – all styling; glassmorphism + animated aurora background, RTL-first
- `script.js` – `CONFIG` block at the top holds ALL content (name, `dates`, photos, timeline, reasons, letter). Below it: petal canvas, candle blow (click + mic), reveal-on-scroll, typewriter, count-up, lightbox, gift box, confetti
- `images/` – user photos: `hero.jpeg` + `photo1..11.jpeg`
- `song.mp3` – background music at project root (~44s, loops)

## Commands

None. Open `index.html` in a browser.

## Key details

- **Edit content in `CONFIG` only** — the DOM for stats/gallery/timeline/reasons is generated from it
- Real dates live in `CONFIG.dates` (birth 6 Aug 2002, first met 5 May 2022, fatiha 28 May 2022, engagement 11 Jul 2022, katb ketab 29 Jun 2023, wedding 9 Sep 2023). Note `new Date(y, m-1, d)` — the month is zero-based
- **Live birthday clock** (`startCountdown`, ticks every 1s): counts *down* to midnight of her birthday, counts *up* through the birthday itself, then targets next year. `birthdayClock()` returns `{mode, ms}` and is the single source of truth. At the rollover it fires confetti and re-runs `countUp()` so the age tile increments on its own. The days cell only appears when days > 0
- Numbers use Arabic-Indic digits: the `ar()` helper for the clock (zero-padded), `toLocaleString('ar-EG')` for the animated stat tiles
- **Fonts**: body is Cairo, headings are Aref Ruqaa (Arabic calligraphic). Changing the heading font means editing both the Google Fonts `<link>` in `index.html` and the `h1, h2, h3` rule in `style.css` — Aref Ruqaa needs the extra `line-height: 1.6` for its tall ascenders
- Missing images degrade gracefully: `img` error handler adds `.missing` to the card, which reveals a dashed `.slot` placeholder naming the expected file
- Candle can be blown out by click or by real mic input (peak amplitude > 42 on the time-domain data); mic requires the user to tap the hint line
- Music autoplay is gated on the "افتحي هديتك" click; if `play()` rejects, the floating button appears in the paused state
- `prefers-reduced-motion` disables the petal canvas, the aurora animation, and reveal transitions
