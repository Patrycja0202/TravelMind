import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function BentoOnboardingDemo() {
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
          <TouchableOpacity style={styles.button} onPress={() => alert('Get Started!')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
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
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 32,
    padding: 32,
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
    marginBottom: 16,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#C0D1BC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    fontSize: 32,
  },
  logo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1A1A1A',
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 18,
    fontWeight: '400',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  button: {
    width: '100%',
    backgroundColor: '#C0D1BC',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  features: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 16,
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
    color: '#666666',
    marginBottom: 2,
  },
  featureLabel: {
    fontSize: 13,
    fontWeight: '400',
    color: '#999999',
  },
  featureDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginHorizontal: 16,
  },
});
