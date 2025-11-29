import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { PrimaryButton } from '../components';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type GoalDetailsRouteProp = RouteProp<RootStackParamList, 'GoalDetails'>;

export default function GoalDetailsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<GoalDetailsRouteProp>();
  const { goal } = route.params;

  const handleMarkComplete = () => {
    // In a real app, this would update state management or API
    Alert.alert(
      'Goal Completed!',
      `Congratulations on visiting ${goal.country}!`,
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Goal',
      `Are you sure you want to delete your ${goal.country} goal?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Card */}
        <View style={styles.headerCard}>
          <Text style={styles.flag}>{goal.flag}</Text>
          <Text style={styles.country}>{goal.country}</Text>
          {goal.completed && (
            <View style={styles.completedBadge}>
              <Ionicons name="checkmark-circle" size={24} color={theme.colors.success} />
              <Text style={styles.completedText}>Completed</Text>
            </View>
          )}
        </View>

        {/* Details */}
        <View style={styles.section}>
          <View style={styles.detailRow}>
            <Ionicons name="location" size={20} color={theme.colors.accent} />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Location / Activity</Text>
              <Text style={styles.detailValue}>{goal.location}</Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <Ionicons name="calendar" size={20} color={theme.colors.accent} />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Target Date</Text>
              <Text style={styles.detailValue}>{goal.date}</Text>
            </View>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          {!goal.completed && (
            <PrimaryButton
              title="Mark as Completed"
              onPress={handleMarkComplete}
              variant="primary"
              style={styles.actionButton}
            />
          )}

          <PrimaryButton
            title="Edit Goal"
            onPress={() => Alert.alert('Edit', 'Edit functionality coming soon!')}
            variant="secondary"
            style={styles.actionButton}
          />

          <PrimaryButton
            title="Delete Goal"
            onPress={handleDelete}
            variant="outline"
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
  headerCard: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.xl,
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  flag: {
    fontSize: 64,
    marginBottom: theme.spacing.md,
  },
  country: {
    fontSize: theme.typography.sizes.xxxl,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
  },
  completedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.round,
  },
  completedText: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.medium,
    color: theme.colors.success,
    marginLeft: theme.spacing.xs,
  },
  section: {
    backgroundColor: '#F8F9F8',
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.lg,
  },
  detailContent: {
    marginLeft: theme.spacing.md,
    flex: 1,
  },
  detailLabel: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.text.secondary,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: theme.typography.sizes.lg,
    fontFamily: theme.typography.fonts.semiBold,
    color: theme.colors.text.primary,
  },
  actions: {
    gap: theme.spacing.md,
  },
  actionButton: {
    marginBottom: theme.spacing.sm,
  },
});
