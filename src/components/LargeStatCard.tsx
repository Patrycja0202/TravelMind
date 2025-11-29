import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';

interface LargeStatCardProps {
  visitedCountries: number;
  totalCountries?: number;
}

export const LargeStatCard: React.FC<LargeStatCardProps> = ({
  visitedCountries,
  totalCountries = 195,
}) => {
  const percentage = ((visitedCountries / totalCountries) * 100).toFixed(1);
  const percentageNumber = parseFloat(percentage);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>World Explored</Text>
        <Text style={styles.percentage}>{percentage}%</Text>
        <Text style={styles.subtext}>
          {visitedCountries} of {totalCountries} countries
        </Text>

        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${percentageNumber}%` as any }]} />
        </View>
      </View>

      {/* Globe Icon */}
      <View style={styles.iconContainer}>
        <View style={styles.iconCircle}>
          <Ionicons name="earth" size={32} color={theme.colors.accent} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.xl,
    marginBottom: theme.spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    minHeight: 200,
    position: 'relative',
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: theme.typography.sizes.md,
    fontFamily: theme.typography.fonts.medium,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: theme.spacing.sm,
  },
  percentage: {
    fontSize: 56,
    fontFamily: theme.typography.fonts.bold,
    color: '#FFFFFF',
    marginBottom: theme.spacing.xs,
    lineHeight: 64,
  },
  subtext: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.regular,
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: theme.spacing.lg,
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: theme.borderRadius.round,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: theme.borderRadius.round,
  },
  iconContainer: {
    position: 'absolute',
    top: theme.spacing.xl,
    right: theme.spacing.xl,
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
});
