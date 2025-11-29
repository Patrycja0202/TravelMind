import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { theme } from '../theme';
import { PrimaryButton } from '../components';

type WelcomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bentoContainer}>
        {/* Top Row - Large image on left, small on right */}
        <View style={styles.topRow}>
          <ImageBackground
            source={require('../../assets/onboarding-1.jpg')}
            style={styles.largeBentoCard}
            imageStyle={styles.imageStyle}
          >
            <View style={styles.overlay} />
          </ImageBackground>

          <View style={styles.topRightColumn}>
            <ImageBackground
              source={require('../../assets/onboarding-2.jpg')}
              style={styles.smallBentoCard}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.overlay} />
            </ImageBackground>

            <ImageBackground
              source={require('../../assets/onboarding-3.jpg')}
              style={styles.smallBentoCard}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.overlay} />
            </ImageBackground>
          </View>
        </View>

        {/* Content Overlay */}
        <View style={styles.contentOverlay}>
          <View style={styles.textContainer}>
            <Text style={styles.emoji}>🌍</Text>
            <Text style={styles.title}>Welcome to TravelMind</Text>
            <Text style={styles.subtitle}>
              Track your journeys, plan your dreams, and explore the world one country at a time.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton
              title="Get Started"
              onPress={() => navigation.navigate('Login')}
              variant="primary"
            />
          </View>
        </View>

        {/* Bottom Row - Two medium cards */}
        <View style={styles.bottomRow}>
          <ImageBackground
            source={require('../../assets/onboarding-4.jpg')}
            style={styles.mediumBentoCard}
            imageStyle={styles.imageStyle}
          >
            <View style={styles.overlay} />
          </ImageBackground>

          <ImageBackground
            source={require('../../assets/onboarding-5.jpg')}
            style={styles.mediumBentoCard}
            imageStyle={styles.imageStyle}
          >
            <View style={styles.overlay} />
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  bentoContainer: {
    flex: 1,
    padding: theme.spacing.sm,
  },
  topRow: {
    flexDirection: 'row',
    height: height * 0.5,
    marginBottom: theme.spacing.sm,
  },
  largeBentoCard: {
    flex: 2,
    marginRight: theme.spacing.sm,
    borderRadius: theme.borderRadius.xl,
    overflow: 'hidden',
  },
  topRightColumn: {
    flex: 1,
    justifyContent: 'space-between',
  },
  smallBentoCard: {
    flex: 1,
    borderRadius: theme.borderRadius.xl,
    overflow: 'hidden',
    marginBottom: theme.spacing.sm,
  },
  bottomRow: {
    flexDirection: 'row',
    height: height * 0.2,
    marginTop: theme.spacing.sm,
  },
  mediumBentoCard: {
    flex: 1,
    marginHorizontal: theme.spacing.xs,
    borderRadius: theme.borderRadius.xl,
    overflow: 'hidden',
  },
  imageStyle: {
    borderRadius: theme.borderRadius.xl,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  contentOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.xl,
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.xl,
    marginBottom: theme.spacing.xl,
  },
  emoji: {
    fontSize: 60,
    marginBottom: theme.spacing.md,
  },
  title: {
    fontSize: theme.typography.sizes.xxxl,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.text.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  subtitle: {
    fontSize: theme.typography.sizes.md,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    lineHeight: theme.typography.sizes.md * theme.typography.lineHeights.relaxed,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 400,
  },
});
