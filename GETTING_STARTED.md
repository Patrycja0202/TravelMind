# 🚀 Getting Started with TravelMind

This guide is for **non-developers** who want to run and test the TravelMind app.

## What You'll Need

1. **A smartphone** (iPhone recommended, Android works too)
2. **Expo Go app** - Download from App Store or Google Play
3. **This code** - Already in this repository

## Step 1: Install Expo Go on Your Phone

- iPhone: https://apps.apple.com/app/expo-go/id982107779
- Android: https://play.google.com/store/apps/details?id=host.exp.exponent

## Step 2: Run the App (In This Environment)

Since you're in Claude Code environment, you can start the development server:

```bash
npm start
```

This will:
1. Start the Expo development server
2. Show you a QR code in the terminal

## Step 3: Open on Your Phone

1. **On iPhone:**
   - Open the Camera app
   - Point at the QR code on your computer
   - Tap the notification to open in Expo Go

2. **On Android:**
   - Open the Expo Go app
   - Tap "Scan QR Code"
   - Point at the QR code on your computer

## Step 4: Test the App

1. You'll see the **Welcome Screen** first
2. Tap "Get Started"
3. Enter any email (like: test@example.com)
4. Enter any password (at least 6 characters)
5. Tap "Sign In"
6. Explore the app!

### What to Try:
- ✅ Check out the **Dashboard** with Bento-style cards
- ✅ View your **Bucket List** of countries
- ✅ See **Travel Goals** with progress tracking
- ✅ Preview the **Share** card
- ✅ Check your **Profile** and stats
- ✅ Tap "Log Out" to go back to login

## 🎨 Comparing to Your Figma Design

Open your Figma file side-by-side and compare:
- **Colors**: Does #C0D1BC primary color match?
- **Layout**: Are the Bento cards arranged similarly?
- **Typography**: Is Poppins font loading correctly?
- **Spacing**: Does the padding and gaps feel right?

## 🔧 If Something Doesn't Look Right

Common issues and fixes:

### Fonts not loading
- Close and reopen the app
- Wait a few seconds for fonts to download

### App shows error
- Look at the error message
- Try closing Expo Go and reopening
- Restart the development server

### Can't connect to server
- Make sure your phone and computer are on the same WiFi network
- Try scanning the QR code again

## 📱 Running Locally (On Your Computer)

If you want to run this on your own computer later:

1. **Install Node.js**
   - Download from: https://nodejs.org
   - Choose LTS version

2. **Clone this repository**
   ```bash
   git clone <your-repo-url>
   cd TravelMind
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the app**
   ```bash
   npm start
   ```

5. **Open on your phone** (same as Step 3 above)

## 🍎 Building for the App Store (Later)

When you're ready to ship this to the App Store:

### Prerequisites
- Apple Developer Account ($99/year)
- macOS computer (for final testing)

### Steps:
1. Install EAS CLI: `npm install -g eas-cli`
2. Create Expo account: `eas login`
3. Configure build: `eas build:configure`
4. Build for iOS: `eas build --platform ios`
5. Submit to App Store: `eas submit --platform ios`

**Full instructions are in README.md**

## 🎯 What This MVP Includes

✅ **Complete UI** - All screens from your Figma design
✅ **Navigation** - Tab bar with 5 sections
✅ **Login Flow** - Welcome and login screens
✅ **Mock Data** - Sample countries and goals
✅ **Bento Cards** - Modern card layout
✅ **Theme System** - Your exact colors and fonts

## 🚧 What's NOT Included Yet (Future Work)

❌ Real Google Sign-In (needs Google Cloud setup)
❌ Real database (data is hardcoded for now)
❌ Photo uploads
❌ Backend API (data stored locally only)
❌ Social sharing (export as image)
❌ Search for countries

These can be added later when you're ready to go to production.

## 💡 Next Steps

### To customize:
1. **Change colors**: Edit `src/theme/colors.ts`
2. **Update data**: Edit the screen files in `src/screens/`
3. **Add features**: Create new components and screens

### To deploy:
1. Follow "Building for App Store" section above
2. Set up backend (optional)
3. Implement real authentication
4. Add privacy policy and terms

## 🆘 Need Help?

- Check `README.md` for full documentation
- Expo docs: https://docs.expo.dev
- React Native docs: https://reactnative.dev

## 🎉 That's It!

Your TravelMind app is ready to test. Scan the QR code and start exploring!

---

**Questions?** All the code is in this repository. Feel free to ask for changes or enhancements.
