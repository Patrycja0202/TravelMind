# 🌍 TravelMind Onboarding Screen Guide

## Overview

The new onboarding screen features:
- ✨ Beautiful gradient background (customizable with travel images)
- 🎬 Auto-fading hero text with smooth animations
- 📦 Animated bento cards sliding into view
- 🔘 Modern CTA buttons (Get Started & Log In)
- 🔐 Optional Google Sign-In button
- 📱 iOS safe-area layout with bottom spacing
- 🎨 Poppins font family throughout
- ⚡ React Native Reanimated for smooth 60fps animations

## Features Breakdown

### 1. **Hero Text Animation**
- Auto-fading effect with subtle pulsing
- Text: "Where you've been. Where you're going."
- Scales in on load with smooth cubic easing

### 2. **Animated Bento Cards**
- Three cards with staggered slide-in animation:
  - 🌍 **Visited Countries** - Track your journeys
  - 🚩 **Travel Goals** - Plan your dreams
  - 📝 **Bucket List** - Never miss a place
- Each card slides from bottom with 200ms delay between them
- Beautiful color gradients matching your theme (#C0D1BC)

### 3. **Call-to-Action Buttons**
- **Get Started** - Primary accent button with shadow
- **Log In** - Outline variant for existing users
- **Continue with Google** - Optional OAuth integration

### 4. **Background Options**

#### Option A: Gradient Background (Default - Ready to Use)
The screen uses a beautiful gradient by default that works immediately.

#### Option B: Custom Travel Image
To add your own travel photo:

1. Download a stunning travel image (recommended: 1080x1920px)
2. Save it as `/assets/travel-bg.jpg`
3. In `OnboardingScreen.tsx`, uncomment lines 120-124:
   ```tsx
   <ImageBackground
     source={require('../../assets/travel-bg.jpg')}
     style={styles.backgroundImage}
     resizeMode="cover"
   >
   ```
4. Comment out the gradient background (line 113-118)

**Recommended Image Sources:**
- [Unsplash Travel Photos](https://unsplash.com/s/photos/travel)
- [Unsplash Airplane Views](https://unsplash.com/s/photos/airplane-view)
- [Unsplash Wanderlust](https://unsplash.com/s/photos/wanderlust)

## Customization Guide

### Change Colors

Edit the gradient colors in `OnboardingScreen.tsx`:

```tsx
// Main background gradient
<LinearGradient
  colors={['#A8C5A0', '#C0D1BC', '#D4E3D0']} // Change these!
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={styles.backgroundGradient}
>
```

```tsx
// Overlay gradient (if using image background)
<LinearGradient
  colors={[
    'rgba(192, 209, 188, 0.3)',  // Light overlay
    'rgba(192, 209, 188, 0.6)',  // Medium overlay
    'rgba(192, 209, 188, 0.85)'  // Strong overlay at bottom
  ]}
  locations={[0, 0.5, 1]}
  style={styles.gradient}
>
```

### Change Hero Text

Update line 133-135 in `OnboardingScreen.tsx`:

```tsx
<Text style={styles.heroText}>
  Where you've been.{'\n'}Where you're going.
</Text>
```

### Modify Bento Cards

Customize the cards around lines 142-165:

```tsx
<AnimatedBentoCard
  icon="earth"              // Change Ionicon name
  title="Visited Countries" // Change title
  subtitle="Track your journeys" // Change subtitle
  delay={400}              // Animation delay (ms)
  color="rgba(138, 166, 138, 0.9)" // Card background color
/>
```

**Popular Ionicons for Travel:**
- `earth`, `globe`, `airplane`, `compass`
- `map`, `location`, `pin`, `navigate`
- `flag`, `bookmark`, `star`, `heart`
- `camera`, `images`, `calendar`, `list`

### Adjust Animation Timing

**Hero text fade speed** (line 97):
```tsx
withTiming(1, { duration: 2000 }) // Change 2000 to speed up/slow down
```

**Bento card slide delay** (AnimatedBentoCard props):
```tsx
delay={400}  // First card
delay={600}  // Second card
delay={800}  // Third card
```

### Button Actions

Update navigation in the button `onPress` handlers:

```tsx
<PrimaryButton
  title="Get Started"
  onPress={() => navigation.navigate('Login')} // Change destination
  variant="primary"
/>
```

### Google Sign-In Integration

The Google button is ready for integration (lines 184-192). To make it functional:

1. Install: `expo install expo-auth-session expo-random`
2. Set up Google OAuth credentials
3. Add authentication logic to the button's `onPress`

Example:
```tsx
<TouchableOpacity
  style={styles.googleButton}
  activeOpacity={0.8}
  onPress={handleGoogleSignIn} // Add your handler
>
```

## File Structure

```
src/
├── screens/
│   ├── OnboardingScreen.tsx  ← Main onboarding component
│   └── WelcomeScreen.tsx     ← Old welcome screen (kept for reference)
├── navigation/
│   └── RootNavigator.tsx     ← Updated to use OnboardingScreen
├── components/
│   ├── BentoCard.tsx         ← Reusable bento card component
│   └── PrimaryButton.tsx     ← Reusable button component
└── theme/
    └── colors.ts             ← App color palette
```

## Dependencies

All required packages are installed:
- ✅ `react-native-reanimated` - Smooth 60fps animations
- ✅ `expo-linear-gradient` - Beautiful gradients
- ✅ `react-native-safe-area-context` - Safe area handling
- ✅ `@expo/vector-icons` - Ionicons
- ✅ `@expo-google-fonts/poppins` - Poppins font

## Testing

Run the app to see your onboarding screen:

```bash
npm start
# Then press 'i' for iOS or 'a' for Android
```

## Performance Notes

- All animations run on the native thread (60fps)
- Reanimated v4 ensures smooth performance
- Gradient rendering is hardware-accelerated
- Safe area insets handle notches and home indicators

## Troubleshooting

**Issue:** Fonts not loading
- **Solution:** Make sure `expo-font` is installed and fonts are loaded in App.tsx

**Issue:** Animations not smooth
- **Solution:** Ensure `babel.config.js` includes the reanimated plugin:
  ```js
  plugins: ['react-native-reanimated/plugin']
  ```

**Issue:** Image not displaying
- **Solution:** Check that `travel-bg.jpg` exists in `/assets` folder

**Issue:** Safe area not working
- **Solution:** Wrap your app with `SafeAreaProvider` in App.tsx

## Next Steps

1. Customize the hero text and colors to match your brand
2. Add your own travel photo background
3. Implement Google Sign-In authentication
4. Add analytics tracking to buttons
5. Create additional onboarding slides if needed

---

**Need help?** Check out the React Native Reanimated docs: https://docs.swmansion.com/react-native-reanimated/
