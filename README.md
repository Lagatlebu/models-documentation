# Trading Knowledge Base — Android App

A personal trading knowledge base for documenting and refining your models,
concepts, and rules. Built to be re-read every day.

## Three sections

- **Models** — each model has: description, market structure required, entry trigger,
  confluences, SL/TP logic, invalidation, a hand-drawn sketch, and real trade examples
  (each with its own sketch + written breakdown).
- **Concepts** — foundational ideas that underpin your models, in your own words.
- **Rules** — ordered rule sets you can re-read and refine over time.

## Data storage

Everything is stored locally on the device via IndexedDB inside the app's WebView.
Nothing is sent anywhere. Fully offline.

## Build the APK

### Option A — Android Studio (easiest, free)
1. Download and install [Android Studio](https://developer.android.com/studio).
2. Open Android Studio → Open → select the `android/` folder in this project.
3. Wait for Gradle to sync (downloads SDK automatically on first run).
4. **Build → Generate Signed Bundle / APK → APK → debug** to produce an installable
   APK you can sideload onto your phone.
   Or just click ▶ Run to install directly on a connected device.

### Option B — Command line
```bash
npm install
npx cap sync android
cd android
./gradlew assembleDebug
# Output: android/app/build/outputs/apk/debug/app-debug.apk
```

### Option C — Cloud build (no local setup)
Push this project to GitHub and use [Codemagic](https://codemagic.io) (free tier)
to build the APK in the cloud and download it.

## Making changes

Edit `www/index.html` then run:
```bash
npx cap copy android
```
before rebuilding.

## App info
- App name: Trading KB
- Package: com.caleb.tradingknowledgebase
- Min Android: 7.0 (API 24)
