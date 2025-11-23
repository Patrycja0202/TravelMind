import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { theme } from '../theme';
import { BentoCard } from '../components';
import { Ionicons } from '@expo/vector-icons';

export default function GoalsScreen() {
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
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.subtitle}>Plan and track your adventures</Text>

          <View style={styles.yearSelector}>
            <Ionicons name="chevron-back" size={24} color={theme.colors.text.secondary} />
            <View style={styles.yearBadge}>
              <Text style={styles.yearText}>2025</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={theme.colors.text.secondary} />
          </View>
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
                    <Ionicons name="checkmark" size={16} color="#fff" />
                  </View>
                )}
              </View>
              <Text style={styles.goalCountry}>{goal.country}</Text>
              <Text style={styles.goalDestination}>
                <Ionicons name="location-outline" size={14} color={theme.colors.text.secondary} />{' '}
                {goal.destination}
              </Text>
              <Text style={styles.goalDate}>
                <Ionicons name="calendar-outline" size={14} color={theme.colors.text.secondary} />{' '}
                {goal.date}
              </Text>
            </BentoCard>
          ))}
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
  subtitle: {
    fontSize: theme.typography.sizes.md,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.md,
  },
  yearSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.md,
  },
  yearBadge: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
  },
  yearText: {
    fontSize: theme.typography.sizes.lg,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.text.primary,
  },
  progressLabel: {
    fontSize: theme.typography.sizes.md,
    fontFamily: theme.typography.fonts.medium,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.xs,
  },
  progressValue: {
    fontSize: theme.typography.sizes.xxxl,
    fontFamily: theme.typography.fonts.bold,
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
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.accent,
    textAlign: 'right',
  },
  sectionTitle: {
    fontSize: theme.typography.sizes.xl,
    fontFamily: theme.typography.fonts.bold,
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
  goalCountry: {
    fontSize: theme.typography.sizes.xl,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  goalDestination: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.xs,
  },
  goalDate: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.text.secondary,
  },
});
