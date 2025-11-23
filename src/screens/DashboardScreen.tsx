import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { theme } from '../theme';
import { BentoCard } from '../components';

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Dashboard</Text>
          <Text style={styles.subtitle}>Your travel journey at a glance</Text>
        </View>

        <View style={styles.bentoGrid}>
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
  bentoGrid: {
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
    fontFamily: theme.typography.fonts.medium,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.xs,
  },
  cardValue: {
    fontSize: theme.typography.sizes.display,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  cardTitle: {
    fontSize: theme.typography.sizes.xl,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  cardSubtext: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.text.secondary,
  },
});
