# 🚀 Testing in Expo Go

## Quick Start

1. **Install Expo Go on your phone:**
   - iOS: [Download from App Store](https://apps.apple.com/app/expo-go/id982107779)
   - Android: [Download from Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Scan the QR code:**
   - **iOS**: Open Camera app and scan the QR code
   - **Android**: Open Expo Go app and tap "Scan QR code"

4. **See your onboarding screen!** 🎉

## What You'll See

✨ **Beautiful Onboarding Screen** with:
- Smooth gradient background (green/sage tones)
- Auto-fading hero text: "Where you've been. Where you're going."
- Three animated bento cards sliding in:
  - 🌍 Visited Countries
  - 🚩 Travel Goals
  - 📝 Bucket List
- "Get Started" and "Log In" buttons
- Google Sign-In button (visual only for now)

## Troubleshooting

**QR code not working?**
- Make sure your phone and computer are on the same WiFi network

**App won't load?**
- Try running `npm start --clear` to clear the cache
- Make sure Expo Go is updated to the latest version

**Animations not smooth?**
- First load might be slower - reload the app once (shake phone → "Reload")
- This is normal in development mode; production builds are much faster

**Want to reload?**
- Shake your device
- Tap "Reload" from the developer menu

## Alternative: Use Tunnel

If you're on different networks, use tunnel mode:
```bash
npm start --tunnel
```

Then scan the QR code as usual.

---

Enjoy testing your beautiful onboarding screen! 🌍✈️
