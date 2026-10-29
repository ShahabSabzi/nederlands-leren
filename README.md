# Nederlands Leren

An interactive Dutch course based on the textbook Nederlands in gang. It covers chapters 1 to 18 with dialogues, vocabulary, flashcards, grammar, pronunciation drills, exercises, and chapter tests.

The app is a static web app. It runs in the browser and works on iPhone, iPad, and desktop. Progress and playback speed are saved on the device.

## Open on iPhone

1. Open the app link in Safari.
2. Tap the Share button.
3. Tap Add to Home Screen.
4. Tap Add.

The app opens full screen from its own icon.

## Run locally

Requirements: Node.js 22 or newer.

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

The output goes to `dist/`.

## Deploy

Every push to `main` builds the app and publishes it with GitHub Pages through `.github/workflows/deploy.yml`.

First-time setup on GitHub: go to Settings, then Pages, then set Source to GitHub Actions.

## Icons

The icons in `public/icons/` come from `scripts/generate-icons.py`. To change the design, edit the script and run:

```bash
python3 scripts/generate-icons.py
```

## Project layout

- `src/App.tsx` is the app shell and holds the chapter selection and saved progress.
- `src/components/` holds the screens for each section.
- `src/data/` holds the course content for chapters 1 to 18.
- `src/utils/answers.ts` checks typed answers. It ignores case, punctuation, and accents.
- `src/utils/speech.ts` reads Dutch text aloud with the device voice.

## Content

The course content follows Nederlands in gang. The textbook itself is not included in this repository.
