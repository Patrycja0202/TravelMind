import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

// ============== THEME ==============
const theme = {
  colors: {
    primary: '#C0D1BC',
    accent: '#8AA68A',
    background: '#FFFFFF',
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
      tertiary: '#999999',
    },
    card: {
      background: '#F5F5F5',
      border: '#E0E0E0',
    },
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FF9800',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  borderRadius: {
    sm: 4,
    md: 12,
    lg: 20,
    round: 999,
  },
  typography: {
    sizes: {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 18,
      xxl: 24,
      xxxl: 28,
      display: 48,
    },
  },
};

// ============== COMPONENTS ==============

// BentoCard Component
const BentoCard = ({ children, backgroundColor = theme.colors.primary, onPress, style, size = 'medium' }: any) => {
  const cardStyle = [
    styles.bentoCard,
    { backgroundColor },
    size === 'small' && styles.smallCard,
    size === 'large' && styles.largeCard,
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity style={cardStyle} onPress={onPress} activeOpacity={0.8}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyle}>{children}</View>;
};

// PrimaryButton Component
const PrimaryButton = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
}: any) => {
  const buttonStyle = [
    styles.button,
    variant === 'primary' && styles.primaryButton,
    variant === 'secondary' && styles.secondaryButton,
    variant === 'outline' && styles.outlineButton,
    (disabled || loading) && styles.disabledButton,
    style,
  ];

  const textStyle = [
    styles.buttonTextStyle,
    variant === 'primary' && styles.primaryText,
    variant === 'secondary' && styles.secondaryText,
    variant === 'outline' && styles.outlineText,
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} disabled={disabled || loading} activeOpacity={0.8}>
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? theme.colors.accent : '#fff'} />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

// ============== SCREENS ==============

// Welcome Screen
const WelcomeScreen = ({ onGetStarted }: any) => {
  return (
    <View style={styles.container}>
      {/* Bento Grid Background */}
      <View style={styles.bentoGrid}>
        {/* Top Row */}
        <View style={styles.topRow}>
          <View style={[styles.bentoItem, styles.bentoLarge]}>
            <View style={[styles.photoPlaceholder, { backgroundColor: '#8AA68A' }]} />
          </View>
          <View style={styles.bentoColumn}>
            <View style={[styles.bentoItem, styles.bentoSmall]}>
              <View style={[styles.photoPlaceholder, { backgroundColor: '#C0D1BC' }]} />
            </View>
            <View style={[styles.bentoItem, styles.bentoSmall]}>
              <View style={[styles.photoPlaceholder, { backgroundColor: '#A8BFA4' }]} />
            </View>
          </View>
        </View>

        {/* Middle Row */}
        <View style={styles.middleRow}>
          <View style={[styles.bentoItem, styles.bentoMedium]}>
            <View style={[styles.photoPlaceholder, { backgroundColor: '#9CAE93' }]} />
          </View>
          <View style={[styles.bentoItem, styles.bentoMedium]}>
            <View style={[styles.photoPlaceholder, { backgroundColor: '#B4C5AF' }]} />
          </View>
        </View>

        {/* Bottom Row */}
        <View style={styles.bottomRow}>
          <View style={[styles.bentoItem, styles.bentoSmall]}>
            <View style={[styles.photoPlaceholder, { backgroundColor: '#A0B89C' }]} />
          </View>
          <View style={[styles.bentoItem, styles.bentoLarge]}>
            <View style={[styles.photoPlaceholder, { backgroundColor: '#8DA487' }]} />
          </View>
        </View>
      </View>

      {/* Overlay Gradient */}
      <LinearGradient
        colors={['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.3)']}
        style={styles.overlay}
      />

      {/* Content Card */}
      <View style={styles.contentWrapper}>
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
          <View style={styles.buttonWrapper}>
            <PrimaryButton title="Get Started" onPress={onGetStarted} variant="primary" />
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
      </View>
    </View>
  );
};

// Dashboard Screen
const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Dashboard</Text>
          <Text style={styles.subtitle}>Your travel journey at a glance</Text>
        </View>

        <View style={styles.bentoGridContent}>
          {/* Large card - World Explored */}
          <BentoCard size="large" backgroundColor={theme.colors.primary}>
            <Text style={styles.cardLabel}>World Explored</Text>
            <Text style={styles.cardValue}>3.6%</Text>
            <Text style={styles.cardSubtext}>7 of 195 countries</Text>
          </BentoCard>

          {/* Row with two medium cards */}
          <View style={styles.row}>
            <BentoCard style={styles.halfCard} backgroundColor="#E8F3E8">
              <Text style={styles.cardLabel}>Travel Goals</Text>
              <Text style={styles.cardValue}>3 of 4</Text>
              <Text style={styles.cardSubtext}>75% complete</Text>
            </BentoCard>

            <BentoCard style={styles.halfCard} backgroundColor="#F5E6D3">
              <Text style={styles.cardLabel}>Bucket List</Text>
              <Text style={styles.cardValue}>3</Text>
              <Text style={styles.cardSubtext}>Countries</Text>
            </BentoCard>
          </View>

          {/* Next trip card */}
          <BentoCard backgroundColor="#D4E5F7">
            <Text style={styles.cardLabel}>Next Trip</Text>
            <Text style={styles.cardTitle}>🇵🇹 Portugal</Text>
            <Text style={styles.cardSubtext}>Lisbon and Porto • October 2025</Text>
          </BentoCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Goals Screen
const GoalsScreen = () => {
  const goals = [
    {
      id: 1,
      country: 'Italy',
      emoji: '🇮🇹',
      destination: 'Visit Rome and Florence',
      date: 'June 2025',
      completed: true,
    },
    {
      id: 2,
      country: 'Spain',
      emoji: '🇪🇸',
      destination: 'Barcelona architecture tour',
      date: 'August 2025',
      completed: true,
    },
    {
      id: 3,
      country: 'Portugal',
      emoji: '🇵🇹',
      destination: 'Lisbon and Porto',
      date: 'October 2025',
      completed: true,
    },
    {
      id: 4,
      country: 'Switzerland',
      emoji: '🇨🇭',
      destination: 'Swiss Alps hiking',
      date: 'December 2025',
      completed: false,
    },
  ];

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Goals</Text>
          <Text style={styles.subtitle}>Plan and track your adventures</Text>
        </View>

        <BentoCard backgroundColor={theme.colors.card.background}>
          <Text style={styles.progressLabel}>Annual Progress</Text>
          <Text style={styles.progressValue}>3 of 4</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: '75%' }]} />
          </View>
          <Text style={styles.progressPercentage}>75%</Text>
        </BentoCard>

        <Text style={styles.sectionTitle}>Planned Destinations</Text>

        <View style={styles.goalsList}>
          {goals.map((goal) => (
            <BentoCard
              key={goal.id}
              backgroundColor={goal.completed ? '#E8F5E9' : theme.colors.card.background}
              style={styles.goalCard}
            >
              <View style={styles.goalHeader}>
                <Text style={styles.goalEmoji}>{goal.emoji}</Text>
                {goal.completed && (
                  <View style={styles.completedBadge}>
                    <Text style={styles.checkmarkText}>✓</Text>
                  </View>
                )}
              </View>
              <Text style={styles.goalCountry}>{goal.country}</Text>
              <Text style={styles.goalDestination}>📍 {goal.destination}</Text>
              <Text style={styles.goalDate}>📅 {goal.date}</Text>
            </BentoCard>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Bucket List Screen
const BucketListScreen = () => {
  const bucketListItems = [
    { id: 1, country: 'Japan', emoji: '🇯🇵', checked: true },
    { id: 2, country: 'Iceland', emoji: '🇮🇸', checked: true },
    { id: 3, country: 'New Zealand', emoji: '🇳🇿', checked: true },
  ];

  const exploreDestinations = [
    { id: 4, country: 'Norway', emoji: '🇳🇴' },
    { id: 5, country: 'Peru', emoji: '🇵🇪' },
  ];

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Bucket List</Text>
          <Text style={styles.subtitle}>Dream destinations to explore</Text>
        </View>

        <Text style={styles.sectionTitle}>My Bucket List (3)</Text>
        <View style={styles.grid}>
          {bucketListItems.map((item) => (
            <BentoCard key={item.id} size="small" style={styles.countryCard}>
              <Text style={styles.countryEmoji}>{item.emoji}</Text>
              <Text style={styles.countryName}>{item.country}</Text>
              {item.checked && (
                <View style={styles.checkmark}>
                  <Text style={styles.checkmarkText}>✓</Text>
                </View>
              )}
            </BentoCard>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Explore Destinations</Text>
        <View style={styles.list}>
          {exploreDestinations.map((item) => (
            <View key={item.id} style={styles.listItem}>
              <Text style={styles.listEmoji}>{item.emoji}</Text>
              <Text style={styles.listCountry}>{item.country}</Text>
              <Text style={styles.addButtonText}>+</Text>
            </View>
          ))}
        </View>

        <PrimaryButton
          title="+ Add New Country"
          onPress={() => console.log('Add country')}
          variant="primary"
          style={styles.addButtonStyle}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// ============== MAIN APP ==============

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onGetStarted={() => setCurrentScreen('dashboard')} />;
      case 'dashboard':
        return <DashboardScreen />;
      case 'goals':
        return <GoalsScreen />;
      case 'bucketlist':
        return <BucketListScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}

      {/* Navigation Tabs - Only show when not on welcome screen */}
      {currentScreen !== 'welcome' && (
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tab} onPress={() => setCurrentScreen('dashboard')}>
            <Text style={[styles.tabText, currentScreen === 'dashboard' && styles.activeTabText]}>🏠</Text>
            <Text style={[styles.tabLabel, currentScreen === 'dashboard' && styles.activeTabLabel]}>Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab} onPress={() => setCurrentScreen('goals')}>
            <Text style={[styles.tabText, currentScreen === 'goals' && styles.activeTabText]}>🎯</Text>
            <Text style={[styles.tabLabel, currentScreen === 'goals' && styles.activeTabLabel]}>Goals</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab} onPress={() => setCurrentScreen('bucketlist')}>
            <Text style={[styles.tabText, currentScreen === 'bucketlist' && styles.activeTabText]}>📋</Text>
            <Text style={[styles.tabLabel, currentScreen === 'bucketlist' && styles.activeTabLabel]}>Bucket List</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab} onPress={() => setCurrentScreen('welcome')}>
            <Text style={[styles.tabText, currentScreen === 'welcome' && styles.activeTabText]}>👤</Text>
            <Text style={[styles.tabLabel, currentScreen === 'welcome' && styles.activeTabLabel]}>Profile</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

// ============== STYLES ==============

const styles = StyleSheet.create({
  // App Container
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  // Welcome Screen Bento Grid
  bentoGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 0,
  },
  topRow: {
    flexDirection: 'row',
    height: height * 0.35,
    gap: 0,
  },
  middleRow: {
    flexDirection: 'row',
    height: height * 0.25,
    gap: 0,
  },
  bottomRow: {
    flexDirection: 'row',
    height: height * 0.4,
    gap: 0,
  },
  bentoColumn: {
    flex: 1,
    gap: 0,
  },
  bentoItem: {
    overflow: 'hidden',
  },
  bentoLarge: {
    flex: 2,
  },
  bentoMedium: {
    flex: 1,
  },
  bentoSmall: {
    flex: 1,
  },
  photoPlaceholder: {
    width: '100%',
    height: '100%',
    opacity: 0.6,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  // Welcome Card
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
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
  logoContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  icon: {
    fontSize: 32,
  },
  logo: {
    fontSize: 28,
    fontWeight: '700',
    color: theme.colors.text.primary,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 18,
    fontWeight: '400',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    color: theme.colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: theme.spacing.lg,
  },
  buttonWrapper: {
    width: '100%',
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
  feature: {
    alignItems: 'center',
    flex: 1,
  },
  featureNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.text.secondary,
    marginBottom: 2,
  },
  featureLabel: {
    fontSize: 13,
    fontWeight: '400',
    color: theme.colors.text.tertiary,
  },
  featureDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginHorizontal: theme.spacing.md,
  },

  // Bento Card Component
  bentoCard: {
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  smallCard: {
    minHeight: 120,
  },
  largeCard: {
    minHeight: 200,
  },

  // Button Component
  button: {
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  primaryButton: {
    backgroundColor: theme.colors.accent,
  },
  secondaryButton: {
    backgroundColor: theme.colors.primary,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: theme.colors.accent,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonTextStyle: {
    fontSize: theme.typography.sizes.md,
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: theme.colors.text.primary,
  },
  outlineText: {
    color: theme.colors.accent,
  },

  // Screen Content
  scrollContent: {
    padding: theme.spacing.lg,
  },
  header: {
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: theme.typography.sizes.xxxl,
    fontWeight: '700',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    fontSize: theme.typography.sizes.md,
    fontWeight: '400',
    color: theme.colors.text.secondary,
  },

  // Dashboard
  bentoGridContent: {
    gap: theme.spacing.md,
  },
  row: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  halfCard: {
    flex: 1,
  },
  cardLabel: {
    fontSize: theme.typography.sizes.sm,
    fontWeight: '500',
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.xs,
  },
  cardValue: {
    fontSize: theme.typography.sizes.display,
    fontWeight: '700',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  cardTitle: {
    fontSize: theme.typography.sizes.xl,
    fontWeight: '700',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  cardSubtext: {
    fontSize: theme.typography.sizes.sm,
    fontWeight: '400',
    color: theme.colors.text.secondary,
  },

  // Goals Screen
  progressLabel: {
    fontSize: theme.typography.sizes.md,
    fontWeight: '500',
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.xs,
  },
  progressValue: {
    fontSize: theme.typography.sizes.xxxl,
    fontWeight: '700',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: theme.borderRadius.sm,
    overflow: 'hidden',
    marginBottom: theme.spacing.sm,
  },
  progressBar: {
    height: '100%',
    backgroundColor: theme.colors.accent,
    borderRadius: theme.borderRadius.sm,
  },
  progressPercentage: {
    fontSize: theme.typography.sizes.xl,
    fontWeight: '700',
    color: theme.colors.accent,
    textAlign: 'right',
  },
  sectionTitle: {
    fontSize: theme.typography.sizes.xl,
    fontWeight: '700',
    color: theme.colors.text.primary,
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  goalsList: {
    gap: theme.spacing.md,
  },
  goalCard: {
    position: 'relative',
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  goalEmoji: {
    fontSize: 32,
  },
  completedBadge: {
    backgroundColor: theme.colors.success,
    borderRadius: theme.borderRadius.round,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  goalCountry: {
    fontSize: theme.typography.sizes.xl,
    fontWeight: '700',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  goalDestination: {
    fontSize: theme.typography.sizes.sm,
    fontWeight: '400',
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.xs,
  },
  goalDate: {
    fontSize: theme.typography.sizes.sm,
    fontWeight: '400',
    color: theme.colors.text.secondary,
  },

  // Bucket List
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  countryCard: {
    width: '47%',
    alignItems: 'center',
    backgroundColor: theme.colors.card.background,
  },
  countryEmoji: {
    fontSize: 40,
    marginBottom: theme.spacing.sm,
  },
  countryName: {
    fontSize: theme.typography.sizes.md,
    fontWeight: '600',
    color: theme.colors.text.primary,
  },
  checkmark: {
    position: 'absolute',
    top: theme.spacing.sm,
    right: theme.spacing.sm,
    backgroundColor: theme.colors.success,
    borderRadius: theme.borderRadius.round,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    gap: theme.spacing.sm,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card.background,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
  },
  listEmoji: {
    fontSize: 24,
    marginRight: theme.spacing.md,
  },
  listCountry: {
    flex: 1,
    fontSize: theme.typography.sizes.md,
    fontWeight: '500',
    color: theme.colors.text.primary,
  },
  addButtonText: {
    fontSize: 24,
    color: theme.colors.accent,
    fontWeight: '700',
  },
  addButtonStyle: {
    marginTop: theme.spacing.lg,
  },

  // Tab Bar
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingBottom: 20,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabText: {
    fontSize: 24,
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 10,
    color: theme.colors.text.secondary,
    fontWeight: '500',
  },
  activeTabText: {
    transform: [{ scale: 1.1 }],
  },
  activeTabLabel: {
    color: theme.colors.accent,
    fontWeight: '700',
  },
});
