/**
 * TravelMind App - Expo Snack Demo
 *
 * Instructions:
 * 1. Go to: https://snack.expo.dev
 * 2. Create new Snack
 * 3. Replace App.tsx content with this entire file
 * 4. Click "Run" or scan QR code with Expo Go app
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Dimensions,
} from 'react-native';

// Theme
const theme = {
  colors: {
    primary: '#C0D1BC',
    accent: '#8AA68A',
    background: '#FFFFFF',
    text: { primary: '#1A1A1A', secondary: '#666666' },
    card: { background: '#F5F5F5' },
  },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  borderRadius: { md: 12, lg: 16 },
};

// Components
const BentoCard = ({ children, backgroundColor = theme.colors.primary, style }: any) => (
  <View style={[styles.bentoCard, { backgroundColor }, style]}>{children}</View>
);

const PrimaryButton = ({ title, onPress, variant = 'primary' }: any) => (
  <TouchableOpacity
    style={[
      styles.button,
      variant === 'primary' ? styles.primaryButton : styles.outlineButton,
    ]}
    onPress={onPress}>
    <Text
      style={[
        styles.buttonText,
        variant === 'outline' && { color: theme.colors.accent },
      ]}>
      {title}
    </Text>
  </TouchableOpacity>
);

// Welcome Screen with Bento Grid
const WelcomeScreen = ({ onGetStarted }: any) => {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.welcomeContainer}>
      {/* Bento Grid Background */}
      <View style={styles.bentoGrid}>
        {/* Top Row */}
        <View style={[styles.topRow, { height: height * 0.35 }]}>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=800&q=80' }}
            style={[styles.bentoItem, styles.bentoLarge]}
            resizeMode="cover"
          >
            <View style={styles.imageOverlay} />
          </ImageBackground>
          <View style={styles.bentoColumn}>
            <ImageBackground
              source={{ uri: 'https://images.unsplash.com/photo-1568849676085-51415703900f?w=400&q=80' }}
              style={[styles.bentoItem, styles.bentoSmall]}
              resizeMode="cover"
            >
              <View style={styles.imageOverlay} />
            </ImageBackground>
            <ImageBackground
              source={{ uri: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80' }}
              style={[styles.bentoItem, styles.bentoSmall]}
              resizeMode="cover"
            >
              <View style={styles.imageOverlay} />
            </ImageBackground>
          </View>
        </View>

        {/* Middle Row */}
        <View style={[styles.middleRow, { height: height * 0.25 }]}>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80' }}
            style={[styles.bentoItem, styles.bentoMedium]}
            resizeMode="cover"
          >
            <View style={styles.imageOverlay} />
          </ImageBackground>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=400&q=80' }}
            style={[styles.bentoItem, styles.bentoMedium]}
            resizeMode="cover"
          >
            <View style={styles.imageOverlay} />
          </ImageBackground>
        </View>

        {/* Bottom Row */}
        <View style={[styles.bottomRow, { height: height * 0.4 }]}>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=400&q=80' }}
            style={[styles.bentoItem, styles.bentoSmall]}
            resizeMode="cover"
          >
            <View style={styles.imageOverlay} />
          </ImageBackground>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=800&q=80' }}
            style={[styles.bentoItem, styles.bentoLarge]}
            resizeMode="cover"
          >
            <View style={styles.imageOverlay} />
          </ImageBackground>
        </View>
      </View>

      {/* White overlay gradient */}
      <View style={styles.whiteOverlay} />

      {/* Content Card */}
      <SafeAreaView style={styles.contentWrapper}>
        <View style={styles.card}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>✈️</Text>
            </View>
            <Text style={styles.logo}>TRAVEL MIND</Text>
          </View>

          {/* Tagline */}
          <Text style={styles.tagline}>Your Journey, Your Story</Text>

          {/* Description */}
          <Text style={styles.description}>
            Track your adventures, set travel goals, and explore the world one destination at a time
          </Text>

          {/* Get Started Button */}
          <View style={{ width: '100%', marginBottom: theme.spacing.lg }}>
            <PrimaryButton title="Get Started" onPress={onGetStarted} />
          </View>

          {/* Features */}
          <View style={styles.features}>
            <View style={styles.feature}>
              <Text style={styles.featureNumber}>195</Text>
              <Text style={styles.featureLabel}>Countries</Text>
            </View>
            <View style={styles.featureDivider} />
            <View style={styles.feature}>
              <Text style={styles.featureNumber}>Goal</Text>
              <Text style={styles.featureLabel}>Tracking</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

// Login Screen
const LoginScreen = ({ onLogin }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: theme.spacing.xl }}>
        <View style={{ marginBottom: theme.spacing.xl }}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to continue your travel journey</Text>
        </View>

        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="your@email.com"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <PrimaryButton title="Sign In" onPress={onLogin} />

          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Dashboard Screen
const DashboardScreen = ({ onNavigate }: any) => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{ padding: theme.spacing.lg }}>
      <View style={{ marginBottom: theme.spacing.lg }}>
        <Text style={styles.screenTitle}>Dashboard</Text>
        <Text style={styles.subtitle}>Your travel journey at a glance</Text>
      </View>

      <BentoCard style={{ marginBottom: theme.spacing.md }}>
        <Text style={styles.cardLabel}>World Explored</Text>
        <Text style={styles.cardValue}>3.6%</Text>
        <Text style={styles.cardSubtext}>7 of 195 countries</Text>
      </BentoCard>

      <View style={{ flexDirection: 'row', gap: theme.spacing.md, marginBottom: theme.spacing.md }}>
        <BentoCard backgroundColor="#E8F3E8" style={{ flex: 1 }}>
          <Text style={styles.cardLabel}>Travel Goals</Text>
          <Text style={styles.cardValue}>75%</Text>
        </BentoCard>
        <BentoCard backgroundColor="#F5E6D3" style={{ flex: 1 }}>
          <Text style={styles.cardLabel}>Bucket List</Text>
          <Text style={styles.cardValue}>3</Text>
        </BentoCard>
      </View>

      <BentoCard backgroundColor="#D4E5F7">
        <Text style={styles.cardLabel}>Next Trip</Text>
        <Text style={styles.cardTitle}>🇵🇹 Portugal</Text>
        <Text style={styles.cardSubtext}>Lisbon and Porto • October 2025</Text>
      </BentoCard>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab}>
          <Text style={[styles.tabText, { color: theme.colors.accent }]}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => onNavigate('bucketList')}>
          <Text style={styles.tabText}>Bucket List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => onNavigate('goals')}>
          <Text style={styles.tabText}>Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => onNavigate('profile')}>
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </SafeAreaView>
);

// Bucket List Screen
const BucketListScreen = ({ onNavigate }: any) => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{ padding: theme.spacing.lg }}>
      <Text style={styles.screenTitle}>Bucket List</Text>
      <Text style={styles.subtitle}>Dream destinations to explore</Text>

      <Text style={styles.sectionTitle}>My Bucket List (3)</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.md }}>
        {[
          { emoji: '🇯🇵', name: 'Japan' },
          { emoji: '🇮🇸', name: 'Iceland' },
          { emoji: '🇳🇿', name: 'New Zealand' },
        ].map((item, i) => (
          <BentoCard key={i} backgroundColor={theme.colors.card.background} style={styles.countryCard}>
            <Text style={styles.countryEmoji}>{item.emoji}</Text>
            <Text style={styles.countryName}>{item.name}</Text>
            <Text style={styles.checkmark}>✓</Text>
          </BentoCard>
        ))}
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab} onPress={() => onNavigate('dashboard')}>
          <Text style={styles.tabText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={[styles.tabText, { color: theme.colors.accent }]}>Bucket List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => onNavigate('goals')}>
          <Text style={styles.tabText}>Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => onNavigate('profile')}>
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </SafeAreaView>
);

// Goals Screen
const GoalsScreen = ({ onNavigate }: any) => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{ padding: theme.spacing.lg }}>
      <Text style={styles.screenTitle}>Travel Goals</Text>
      <Text style={styles.subtitle}>Plan and track your adventures</Text>

      <BentoCard backgroundColor={theme.colors.card.background} style={{ marginBottom: theme.spacing.lg }}>
        <Text style={styles.cardLabel}>Annual Progress</Text>
        <Text style={styles.cardValue}>3 of 4</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '75%' }]} />
        </View>
        <Text style={styles.progressPercent}>75%</Text>
      </BentoCard>

      <Text style={styles.sectionTitle}>Planned Destinations</Text>
      {[
        { emoji: '🇮🇹', name: 'Italy', completed: true },
        { emoji: '🇪🇸', name: 'Spain', completed: true },
        { emoji: '🇵🇹', name: 'Portugal', completed: true },
        { emoji: '🇨🇭', name: 'Switzerland', completed: false },
      ].map((goal, i) => (
        <BentoCard
          key={i}
          backgroundColor={goal.completed ? '#E8F5E9' : theme.colors.card.background}
          style={{ marginBottom: theme.spacing.md }}>
          <Text style={styles.goalEmoji}>{goal.emoji}</Text>
          <Text style={styles.goalName}>{goal.name}</Text>
          {goal.completed && <Text style={styles.checkmark}>✓</Text>}
        </BentoCard>
      ))}

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab} onPress={() => onNavigate('dashboard')}>
          <Text style={styles.tabText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => onNavigate('bucketList')}>
          <Text style={styles.tabText}>Bucket List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={[styles.tabText, { color: theme.colors.accent }]}>Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => onNavigate('profile')}>
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </SafeAreaView>
);

// Profile Screen
const ProfileScreen = ({ onNavigate, onLogout }: any) => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{ padding: theme.spacing.lg }}>
      <Text style={styles.screenTitle}>Profile</Text>

      <BentoCard backgroundColor={theme.colors.card.background}>
        <View style={{ alignItems: 'center', marginBottom: theme.spacing.lg }}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <Text style={styles.profileName}>Jane Doe</Text>
          <Text style={styles.profileEmail}>jane.doe@email.com</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>7</Text>
            <Text style={styles.statLabel}>Visited</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Bucket List</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>4</Text>
            <Text style={styles.statLabel}>Goals</Text>
          </View>
        </View>
      </BentoCard>

      <PrimaryButton title="Log Out" onPress={onLogout} variant="outline" />

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab} onPress={() => onNavigate('dashboard')}>
          <Text style={styles.tabText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => onNavigate('bucketList')}>
          <Text style={styles.tabText}>Bucket List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => onNavigate('goals')}>
          <Text style={styles.tabText}>Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={[styles.tabText, { color: theme.colors.accent }]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </SafeAreaView>
);

// Main App
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  if (currentScreen === 'welcome') {
    return <WelcomeScreen onGetStarted={() => setCurrentScreen('login')} />;
  }

  if (currentScreen === 'login') {
    return <LoginScreen onLogin={() => setCurrentScreen('dashboard')} />;
  }

  if (currentScreen === 'dashboard') {
    return <DashboardScreen onNavigate={setCurrentScreen} />;
  }

  if (currentScreen === 'bucketList') {
    return <BucketListScreen onNavigate={setCurrentScreen} />;
  }

  if (currentScreen === 'goals') {
    return <GoalsScreen onNavigate={setCurrentScreen} />;
  }

  if (currentScreen === 'profile') {
    return <ProfileScreen onNavigate={setCurrentScreen} onLogout={() => setCurrentScreen('welcome')} />;
  }

  return null;
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },

  // Welcome Screen Bento Grid Styles
  welcomeContainer: { flex: 1, backgroundColor: '#F0F0F0' },
  bentoGrid: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, padding: 0 },
  topRow: { flexDirection: 'row', gap: 0 },
  middleRow: { flexDirection: 'row', gap: 0 },
  bottomRow: { flexDirection: 'row', gap: 0 },
  bentoColumn: { flex: 1, gap: 0 },
  bentoItem: { overflow: 'hidden' },
  bentoLarge: { flex: 2 },
  bentoMedium: { flex: 1 },
  bentoSmall: { flex: 1 },
  imageOverlay: { width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.15)' },
  whiteOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.3)' },
  contentWrapper: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: theme.spacing.lg },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 32,
    padding: theme.spacing.xl,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  logoContainer: { alignItems: 'center', marginBottom: theme.spacing.md },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  icon: { fontSize: 32 },
  logo: { fontSize: 28, fontWeight: 'bold', color: theme.colors.text.primary, letterSpacing: 1 },
  tagline: { fontSize: 18, color: theme.colors.text.primary, marginBottom: theme.spacing.md },
  description: {
    fontSize: 15,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: theme.spacing.lg,
  },
  features: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
  },
  feature: { alignItems: 'center', flex: 1 },
  featureNumber: { fontSize: 20, fontWeight: 'bold', color: theme.colors.text.secondary, marginBottom: 2 },
  featureLabel: { fontSize: 13, color: theme.colors.text.secondary },
  featureDivider: { width: 1, height: 40, backgroundColor: 'rgba(0,0,0,0.1)', marginHorizontal: theme.spacing.md },

  // Other Screens
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: theme.spacing.xl },
  emoji: { fontSize: 80, marginBottom: theme.spacing.lg },
  title: { fontSize: 32, fontWeight: 'bold', color: theme.colors.text.primary, textAlign: 'center', marginBottom: theme.spacing.md },
  screenTitle: { fontSize: 32, fontWeight: 'bold', color: theme.colors.text.primary, marginBottom: theme.spacing.xs },
  subtitle: { fontSize: 16, color: theme.colors.text.secondary, textAlign: 'center', lineHeight: 24, marginBottom: theme.spacing.lg },
  label: { fontSize: 14, fontWeight: '500', color: theme.colors.text.primary, marginBottom: theme.spacing.sm, marginTop: theme.spacing.md },
  input: { borderWidth: 1, borderColor: '#E0E0E0', borderRadius: theme.borderRadius.md, padding: theme.spacing.md, fontSize: 16, backgroundColor: theme.colors.background, marginBottom: theme.spacing.md },
  button: { borderRadius: theme.borderRadius.md, paddingVertical: theme.spacing.md, paddingHorizontal: theme.spacing.lg, alignItems: 'center', minHeight: 50, marginTop: theme.spacing.lg },
  primaryButton: { backgroundColor: theme.colors.accent },
  outlineButton: { backgroundColor: 'transparent', borderWidth: 2, borderColor: theme.colors.accent },
  buttonText: { fontSize: 16, fontWeight: '600', color: '#FFFFFF' },
  googleButton: { borderWidth: 1, borderColor: '#E0E0E0', borderRadius: theme.borderRadius.md, paddingVertical: theme.spacing.md, alignItems: 'center', marginTop: theme.spacing.lg },
  googleButtonText: { fontSize: 16, fontWeight: '500', color: theme.colors.text.primary },
  bentoCard: { borderRadius: theme.borderRadius.lg, padding: theme.spacing.lg, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 3 },
  cardLabel: { fontSize: 14, fontWeight: '500', color: theme.colors.text.secondary, marginBottom: theme.spacing.xs },
  cardValue: { fontSize: 48, fontWeight: 'bold', color: theme.colors.text.primary, marginBottom: theme.spacing.xs },
  cardTitle: { fontSize: 20, fontWeight: 'bold', color: theme.colors.text.primary, marginBottom: theme.spacing.xs },
  cardSubtext: { fontSize: 14, color: theme.colors.text.secondary },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: theme.colors.text.primary, marginTop: theme.spacing.lg, marginBottom: theme.spacing.md },
  countryCard: { width: '30%', alignItems: 'center', minHeight: 120 },
  countryEmoji: { fontSize: 40, marginBottom: theme.spacing.sm },
  countryName: { fontSize: 14, fontWeight: '600', color: theme.colors.text.primary },
  checkmark: { position: 'absolute', top: theme.spacing.sm, right: theme.spacing.sm, fontSize: 16, color: '#4CAF50' },
  progressBar: { height: 8, backgroundColor: '#E0E0E0', borderRadius: 4, overflow: 'hidden', marginBottom: theme.spacing.sm },
  progressFill: { height: '100%', backgroundColor: theme.colors.accent },
  progressPercent: { fontSize: 20, fontWeight: 'bold', color: theme.colors.accent, textAlign: 'right' },
  goalEmoji: { fontSize: 32, marginBottom: theme.spacing.sm },
  goalName: { fontSize: 18, fontWeight: 'bold', color: theme.colors.text.primary },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: theme.colors.primary, alignItems: 'center', justifyContent: 'center', marginBottom: theme.spacing.md },
  avatarText: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text.primary },
  profileName: { fontSize: 20, fontWeight: 'bold', color: theme.colors.text.primary, marginBottom: theme.spacing.xs },
  profileEmail: { fontSize: 14, color: theme.colors.text.secondary },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around', paddingTop: theme.spacing.lg, borderTopWidth: 1, borderTopColor: '#E0E0E0' },
  stat: { alignItems: 'center' },
  statValue: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text.primary },
  statLabel: { fontSize: 14, color: theme.colors.text.secondary },
  tabBar: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: theme.spacing.md, marginTop: theme.spacing.xl, borderTopWidth: 1, borderTopColor: '#E0E0E0' },
  tab: { alignItems: 'center' },
  tabText: { fontSize: 12, fontWeight: '500', color: theme.colors.text.secondary },
});
