import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { theme } from '../theme';
import { BentoCard, PrimaryButton } from '../components';

export default function ShareScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Share</Text>
          <Text style={styles.subtitle}>Share your travel journey</Text>
        </View>

        <Text style={styles.previewLabel}>Preview</Text>

        <BentoCard backgroundColor={theme.colors.primary} style={styles.previewCard}>
          <View style={styles.previewIcon}>
            <Text style={styles.previewIconText}>🌍</Text>
          </View>
          <Text style={styles.previewTitle}>My 2025 Travel Goals</Text>
          <Text style={styles.previewSubtitle}>TRAVEL MIND</Text>

          <View style={styles.statsGrid}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Visited</Text>
              <Text style={styles.statValue}>7</Text>
              <Text style={styles.statUnit}>Countries</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Goals</Text>
              <Text style={styles.statValue}>75%</Text>
              <Text style={styles.statUnit}>Complete</Text>
            </View>
          </View>

          <View style={styles.bucketListBox}>
            <Text style={styles.bucketListTitle}>BUCKET LIST</Text>
            <View style={styles.bucketListItems}>
              <Text style={styles.bucketListItem}>🇯🇵 Japan</Text>
              <Text style={styles.bucketListItem}>🇮🇸 Iceland</Text>
              <Text style={styles.bucketListItem}>🇳🇿 New Zealand</Text>
            </View>
          </View>
        </BentoCard>

        <View style={styles.actions}>
          <PrimaryButton
            title="Share as Image"
            onPress={() => console.log('Share as image')}
            variant="primary"
          />
          <PrimaryButton
            title="Share Link"
            onPress={() => console.log('Share link')}
            variant="outline"
            style={styles.secondaryButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    padding: theme.spacing.lg,
  },
  header: {
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: theme.typography.sizes.xxxl,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    fontSize: theme.typography.sizes.md,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.text.secondary,
  },
  previewLabel: {
    fontSize: theme.typography.sizes.md,
    fontFamily: theme.typography.fonts.semiBold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
  },
  previewCard: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
  },
  previewIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 80,
    height: 80,
    borderRadius: theme.borderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.md,
  },
  previewIconText: {
    fontSize: 40,
  },
  previewTitle: {
    fontSize: theme.typography.sizes.xxl,
    fontFamily: theme.typography.fonts.bold,
    color: '#fff',
    marginBottom: theme.spacing.xs,
  },
  previewSubtitle: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.medium,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: theme.spacing.lg,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    width: '100%',
  },
  statBox: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.medium,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: theme.spacing.xs,
  },
  statValue: {
    fontSize: theme.typography.sizes.xxl,
    fontFamily: theme.typography.fonts.bold,
    color: '#fff',
    marginBottom: theme.spacing.xs,
  },
  statUnit: {
    fontSize: theme.typography.sizes.xs,
    fontFamily: theme.typography.fonts.regular,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  bucketListBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    width: '100%',
  },
  bucketListTitle: {
    fontSize: theme.typography.sizes.xs,
    fontFamily: theme.typography.fonts.bold,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: theme.spacing.sm,
    letterSpacing: 1,
  },
  bucketListItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  bucketListItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.medium,
    color: '#fff',
  },
  actions: {
    marginTop: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  secondaryButton: {
    marginTop: theme.spacing.sm,
  },
});
