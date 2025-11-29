import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { Goal } from '../types/navigation';

interface GoalCardProps {
  goal: Goal;
  onPress: () => void;
}

export const GoalCard: React.FC<GoalCardProps> = ({ goal, onPress }) => {
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
    >
      <Animated.View
        style={[
          styles.container,
          goal.completed && styles.completedContainer,
          { transform: [{ scale: scaleValue }] },
        ]}
      >
        <View style={styles.content}>
          {/* Flag and Country */}
          <View style={styles.header}>
            <Text style={styles.flag}>{goal.flag}</Text>
            <View style={styles.headerText}>
              <View style={styles.countryRow}>
                <Text style={styles.country}>{goal.country}</Text>
                {goal.completed && (
                  <View style={styles.completedBadge}>
                    <Ionicons name="checkmark-circle" size={20} color={theme.colors.success} />
                  </View>
                )}
              </View>
              <Text style={styles.location}>{goal.location}</Text>
            </View>
          </View>

          {/* Date */}
          <View style={styles.dateContainer}>
            <Ionicons name="calendar-outline" size={14} color={theme.colors.text.tertiary} />
            <Text style={styles.date}>{goal.date}</Text>
          </View>
        </View>

        {/* Arrow Icon */}
        <Ionicons name="chevron-forward" size={20} color={theme.colors.text.tertiary} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9F8',
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  completedContainer: {
    backgroundColor: '#E8F5E9',
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  flag: {
    fontSize: 32,
    marginRight: theme.spacing.md,
  },
  headerText: {
    flex: 1,
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  country: {
    fontSize: theme.typography.sizes.lg,
    fontFamily: theme.typography.fonts.semiBold,
    color: theme.colors.text.primary,
    marginRight: theme.spacing.xs,
  },
  completedBadge: {
    marginLeft: theme.spacing.xs,
  },
  location: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.text.secondary,
    marginTop: 2,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.text.tertiary,
    marginLeft: theme.spacing.xs,
  },
});
