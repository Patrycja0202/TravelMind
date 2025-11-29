import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
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
import { RootStackParamList } from '../types/navigation';
import { theme } from '../theme';
import { PrimaryButton, BentoCard } from '../components';

const { width, height } = Dimensions.get('window');

type OnboardingScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

const AnimatedBentoCard = ({
  icon,
  title,
  subtitle,
  delay,
  color
}: {
  icon: keyof typeof Ionicons.glyphMap;
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

export default function OnboardingScreen({ navigation }: OnboardingScreenProps) {
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

  return (
    <View style={styles.container}>
      {/* Beautiful gradient background - replace ImageBackground with your travel photo if desired */}
      <LinearGradient
        colors={['#A8C5A0', '#C0D1BC', '#D4E3D0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.backgroundGradient}
      >
        {/* Optional: Uncomment below to use a custom travel image background */}
        {/* <ImageBackground
          source={require('../../assets/travel-bg.jpg')}
          style={styles.backgroundImage}
          resizeMode="cover"
        > */}
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
                onPress={() => navigation.navigate('Login')}
                variant="primary"
                style={styles.primaryButton}
              />

              <PrimaryButton
                title="Log In"
                onPress={() => navigation.navigate('Login')}
                variant="outline"
                style={styles.outlineButton}
              />

              {/* Google Sign-In Button */}
              <TouchableOpacity
                style={styles.googleButton}
                activeOpacity={0.8}
              >
                <Ionicons name="logo-google" size={24} color="#4285F4" />
                <Text style={styles.googleButtonText}>Continue with Google</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </LinearGradient>
        {/* </ImageBackground> */}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
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
    fontFamily: theme.typography.fonts.bold,
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
    fontFamily: theme.typography.fonts.semiBold,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  bentoSubtitle: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.regular,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
  ctaSection: {
    paddingBottom: theme.spacing.xl,
    gap: theme.spacing.md,
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
    fontFamily: theme.typography.fonts.semiBold,
    color: '#1A1A1A',
  },
});
