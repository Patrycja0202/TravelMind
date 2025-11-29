/**
 * TravelMind Onboarding Screen - Expo Snack Version
 *
 * INSTRUCTIONS:
 * 1. Go to https://snack.expo.dev
 * 2. Replace ALL content in App.tsx with this file
 * 3. Press Save and scan QR code with Expo Go
 *
 * That's it! No setup needed.
 */

import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withRepeat,
  withSequence,
  Easing,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

// Theme Configuration
const theme = {
  colors: {
    primary: '#C0D1BC',
    accent: '#8AA68A',
    background: '#FFFFFF',
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
    },
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    md: 12,
    lg: 20,
  },
  typography: {
    fonts: {
      regular: 'System',
      semiBold: 'System',
      bold: 'System',
    },
    sizes: {
      sm: 12,
      md: 16,
      lg: 20,
    },
  },
};

// PrimaryButton Component
const PrimaryButton = ({ title, onPress, variant = 'primary', style }: any) => {
  const buttonStyle = [
    styles.button,
    variant === 'primary' && styles.primaryButton,
    variant === 'outline' && styles.outlineButton,
    style,
  ];

  const textStyle = [
    styles.buttonText,
    variant === 'primary' && styles.primaryText,
    variant === 'outline' && styles.outlineText,
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} activeOpacity={0.8}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

// BentoCard Component
const BentoCard = ({ children, backgroundColor, style }: any) => {
  return (
    <View style={[styles.card, { backgroundColor }, style]}>
      {children}
    </View>
  );
};

// AnimatedBentoCard Component
const AnimatedBentoCard = ({
  icon,
  title,
  subtitle,
  delay,
  color,
}: {
  icon: any;
  title: string;
  subtitle: string;
  delay: number;
  color: string;
}) => {
  const translateY = useSharedValue(100);
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateY.value = withDelay(
      delay,
      withTiming(0, {
        duration: 800,
        easing: Easing.out(Easing.cubic),
      })
    );
    opacity.value = withDelay(
      delay,
      withTiming(1, {
        duration: 800,
        easing: Easing.out(Easing.cubic),
      })
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[styles.bentoWrapper, animatedStyle]}>
      <BentoCard backgroundColor={color} style={styles.bentoCard}>
        <View style={styles.bentoContent}>
          <Ionicons name={icon} size={32} color="#FFFFFF" />
          <Text style={styles.bentoTitle}>{title}</Text>
          <Text style={styles.bentoSubtitle}>{subtitle}</Text>
        </View>
      </BentoCard>
    </Animated.View>
  );
};

// Main Onboarding Screen
function OnboardingScreen() {
  const heroOpacity = useSharedValue(0);
  const heroScale = useSharedValue(0.8);

  useEffect(() => {
    // Auto-fading hero text animation
    heroOpacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
        withDelay(3000, withTiming(0.85, { duration: 2000, easing: Easing.inOut(Easing.ease) }))
      ),
      -1,
      true
    );

    heroScale.value = withTiming(1, {
      duration: 1500,
      easing: Easing.out(Easing.cubic),
    });
  }, []);

  const heroAnimatedStyle = useAnimatedStyle(() => ({
    opacity: heroOpacity.value,
    transform: [{ scale: heroScale.value }],
  }));

  const handleGetStarted = () => {
    alert('Get Started pressed! 🚀');
  };

  const handleLogin = () => {
    alert('Log In pressed! 👋');
  };

  const handleGoogleSignIn = () => {
    alert('Google Sign-In pressed! 🔐');
  };

  return (
    <View style={styles.container}>
      {/* Beautiful gradient background */}
      <LinearGradient
        colors={['#A8C5A0', '#C0D1BC', '#D4E3D0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.backgroundGradient}
      >
        <LinearGradient
          colors={['rgba(192, 209, 188, 0.3)', 'rgba(192, 209, 188, 0.6)', 'rgba(192, 209, 188, 0.85)']}
          locations={[0, 0.5, 1]}
          style={styles.gradient}
        >
          <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
            {/* Hero Text Section */}
            <View style={styles.heroSection}>
              <Animated.View style={heroAnimatedStyle}>
                <Text style={styles.heroText}>
                  Where you've been.{'\n'}Where you're going.
                </Text>
              </Animated.View>
            </View>

            {/* Bento Cards Section */}
            <View style={styles.bentoSection}>
              <AnimatedBentoCard
                icon="earth"
                title="Visited Countries"
                subtitle="Track your journeys"
                delay={400}
                color="rgba(138, 166, 138, 0.9)"
              />
              <View style={styles.bentoRow}>
                <AnimatedBentoCard
                  icon="flag"
                  title="Travel Goals"
                  subtitle="Plan your dreams"
                  delay={600}
                  color="rgba(106, 156, 137, 0.9)"
                />
                <AnimatedBentoCard
                  icon="list"
                  title="Bucket List"
                  subtitle="Never miss a place"
                  delay={800}
                  color="rgba(90, 146, 127, 0.9)"
                />
              </View>
            </View>

            {/* CTA Buttons Section */}
            <View style={styles.ctaSection}>
              <PrimaryButton
                title="Get Started"
                onPress={handleGetStarted}
                variant="primary"
                style={styles.primaryButton}
              />

              <PrimaryButton
                title="Log In"
                onPress={handleLogin}
                variant="outline"
                style={styles.outlineButton}
              />

              {/* Google Sign-In Button */}
              <TouchableOpacity
                style={styles.googleButton}
                activeOpacity={0.8}
                onPress={handleGoogleSignIn}
              >
                <Ionicons name="logo-google" size={24} color="#4285F4" />
                <Text style={styles.googleButtonText}>Continue with Google</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
}

// Main App Component
export default function App() {
  return <OnboardingScreen />;
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  heroSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing.xxl,
  },
  heroText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 44,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  bentoSection: {
    flex: 1.2,
    justifyContent: 'center',
    gap: theme.spacing.md,
  },
  bentoWrapper: {
    width: '100%',
  },
  bentoRow: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  card: {
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  bentoCard: {
    flex: 1,
    minHeight: 140,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  bentoContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  bentoTitle: {
    fontSize: theme.typography.sizes.md,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  bentoSubtitle: {
    fontSize: theme.typography.sizes.sm,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
  ctaSection: {
    paddingBottom: theme.spacing.xl,
    gap: theme.spacing.md,
  },
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  outlineButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderWidth: 2,
    borderColor: theme.colors.accent,
  },
  buttonText: {
    fontSize: theme.typography.sizes.md,
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  outlineText: {
    color: theme.colors.accent,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    minHeight: 50,
    gap: theme.spacing.sm,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  googleButtonText: {
    fontSize: theme.typography.sizes.md,
    fontWeight: '600',
    color: '#1A1A1A',
  },
});
