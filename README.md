# 🌍 TravelMind

A beautiful, modern travel tracking app for iOS built with React Native and Expo.

Track your journeys, plan your dreams, and explore the world one country at a time.

## ✨ Features

### MVP Features (Current)
- ✅ **Beautiful UI**: Bento-style cards with modern, clean design
- ✅ **Authentication**: Email/password login with Google Sign-In structure
- ✅ **Dashboard**: Your travel journey at a glance with stats
- ✅ **Bucket List**: Manage countries you want to visit
- ✅ **Travel Goals**: Set and track yearly travel targets with progress
- ✅ **Share**: Shareable travel summary (ready for image export)
- ✅ **Profile**: User stats and settings

### Design
- **Primary Color**: #C0D1BC (Sage green)
- **Accent Color**: #8AA68A (Forest green)
- **Font**: Poppins (Regular, Medium, SemiBold, Bold)
- **Style**: iOS-first, Bento grid layout, modern and minimal

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- Expo Go app on your iOS device (for testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd TravelMind
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on iOS**
   - Scan the QR code with your iPhone camera
   - Open in Expo Go app
   - OR use: `npm run ios` (requires macOS with Xcode)

## 📱 How to Use the App

### First Time Setup
1. Open the app - you'll see the Welcome screen
2. Tap "Get Started"
3. Enter any email and password (min 6 characters) - for MVP, this is stored locally
4. You'll be logged in and see the Dashboard

### Navigation
The app has 5 main tabs:
- **Dashboard**: Overview of your travel stats
- **Bucket List**: Countries you want to visit
- **Goals**: Yearly travel goals with progress
- **Share**: Shareable travel summary card
- **Profile**: Your stats and settings

### Logout
Go to Profile tab → Tap "Log Out"

## 🏗️ Project Structure

```
TravelMind/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── BentoCard.tsx
│   │   ├── PrimaryButton.tsx
│   │   └── TextInputField.tsx
│   ├── screens/             # All app screens
│   │   ├── WelcomeScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── DashboardScreen.tsx
│   │   ├── BucketListScreen.tsx
│   │   ├── GoalsScreen.tsx
│   │   ├── ShareScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── navigation/          # Navigation setup
│   │   ├── RootNavigator.tsx
│   │   └── TabNavigator.tsx
│   ├── theme/               # Design system
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── index.ts
│   ├── hooks/               # Custom React hooks
│   │   └── useFonts.ts
│   ├── types/               # TypeScript types
│   │   └── navigation.ts
│   └── services/            # Future: API services
├── App.tsx                  # App entry point
└── app.json                 # Expo configuration
```

## 🔧 Tech Stack

- **Framework**: React Native 0.81
- **Platform**: Expo SDK 54
- **Language**: TypeScript
- **Navigation**: React Navigation 6
- **Storage**: AsyncStorage (local storage)
- **Fonts**: Poppins (via @expo-google-fonts)
- **Icons**: Ionicons (@expo/vector-icons)

## 📦 Building for Production

### Build with EAS (Expo Application Services)

1. **Install EAS CLI**
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo**
   ```bash
   eas login
   ```

3. **Configure EAS Build**
   ```bash
   eas build:configure
   ```

4. **Build for iOS**
   ```bash
   eas build --platform ios
   ```

5. **Submit to App Store**
   ```bash
   eas submit --platform ios
   ```

### Before App Store Submission

You'll need to:
1. Update `app.json`:
   - Change `bundleIdentifier` to your own (currently: `com.travelmind.app`)
   - Update app icon and splash screen images
2. Create Apple Developer account ($99/year)
3. Create App Store Connect listing
4. Implement production authentication (see next section)

## 🔐 Authentication Setup (Production)

### Current State (MVP)
- Email/password stored locally in AsyncStorage
- No backend connection
- "Continue with Google" button is a placeholder

### For Production

#### Google Sign-In
1. **Create Google Cloud Project**
   - Go to https://console.cloud.google.com
   - Create new project
   - Enable Google Sign-In API

2. **Configure OAuth**
   - Create OAuth 2.0 credentials
   - Add iOS bundle identifier: `com.travelmind.app`
   - Get Client ID

3. **Update Code**
   ```typescript
   // In LoginScreen.tsx, replace handleGoogleSignIn with:
   import * as Google from 'expo-auth-session/providers/google';

   const [request, response, promptAsync] = Google.useAuthRequest({
     iosClientId: 'YOUR_IOS_CLIENT_ID.apps.googleusercontent.com',
   });
   ```

#### Apple Sign-In (Required for App Store)
1. Enable "Sign in with Apple" in Apple Developer account
2. Install: `expo install expo-apple-authentication`
3. Implement in LoginScreen.tsx

#### Backend Integration
To connect a real backend:
1. Create API endpoints for `/auth/login`, `/auth/register`
2. Create a service in `src/services/authService.ts`
3. Replace AsyncStorage token logic with API calls
4. Store JWT tokens securely

## 🔮 Future Enhancements

### Features to Add
- [ ] Real country database with search
- [ ] Map visualization of visited countries
- [ ] Photo uploads for trips
- [ ] Social sharing (export travel card as image)
- [ ] Trip details (dates, notes, photos)
- [ ] Travel statistics and insights
- [ ] Dark mode support
- [ ] Offline mode with sync

### Backend Integration
- [ ] User accounts with cloud sync
- [ ] Real authentication
- [ ] Data persistence across devices
- [ ] Privacy policy and terms of service

### Additional Screens
- [ ] Country detail screen
- [ ] Trip detail screen
- [ ] Settings screens (notifications, privacy, etc.)
- [ ] Onboarding tutorial

## 🐛 Known Issues / Limitations

1. **Mock Data**: All data is currently hardcoded in screens
2. **No Persistence**: Data is lost when you log out
3. **Google Sign-In**: Not connected to real Google OAuth
4. **No Image Export**: Share screen doesn't export to image yet
5. **No Search**: Can't search for countries yet

## 📝 Environment Variables (Future)

Create `.env` file for:
```
GOOGLE_IOS_CLIENT_ID=your_client_id
API_BASE_URL=https://your-api.com
```

## 🤝 Contributing

This is an MVP. To extend:
1. Add data models in `src/types/`
2. Create services in `src/services/`
3. Connect to backend API
4. Add more screens as needed

## 📄 License

Private project - All rights reserved

## 🆘 Support

For issues or questions:
- Check Expo docs: https://docs.expo.dev
- React Navigation: https://reactnavigation.org

---

**Version**: 1.0.0
**Last Updated**: 2025-11-23
