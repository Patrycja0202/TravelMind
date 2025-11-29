import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Animated,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { theme } from '../theme';
import {
  LargeStatCard,
  GoalCard,
  SecondaryButton,
  SectionHeader,
} from '../components';
import { RootStackParamList, Goal } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Mock data - in a real app, this would come from state management or API
const MOCK_VISITED_COUNTRIES = [
  'France',
  'Italy',
  'Spain',
  'Germany',
  'United Kingdom',
  'Japan',
  'USA',
  'Canada',
];

const MOCK_GOALS: Goal[] = [
  {
    id: '1',
    country: 'Portugal',
    flag: '🇵🇹',
    location: 'Lisbon and Porto',
    date: 'October 2025',
    completed: true,
  },
  {
    id: '2',
    country: 'Switzerland',
    flag: '🇨🇭',
    location: 'Swiss Alps hiking',
    date: 'December 2025',
    completed: false,
  },
];

export default function DashboardScreen() {
  const navigation = useNavigation<NavigationProp>();

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    // Entrance animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 50,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleAddCountry = () => {
    navigation.navigate('AddCountry');
  };

  const handleAddGoal = () => {
    navigation.navigate('AddGoal');
  };

  const handleGoalPress = (goal: Goal) => {
    navigation.navigate('GoalDetails', { goal });
  };

  const completedGoals = MOCK_GOALS.filter((g) => g.completed).length;
  const totalGoals = MOCK_GOALS.length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Animated.View
          style={[
            styles.header,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text style={styles.title}>Dashboard</Text>
          <Text style={styles.subtitle}>Your travel journey at a glance</Text>
        </Animated.View>

        {/* World Explored Card */}
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
        >
          <LargeStatCard visitedCountries={MOCK_VISITED_COUNTRIES.length} />
        </Animated.View>

        {/* Add New Country Button */}
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
        >
          <SecondaryButton
            title="Add New Country"
            icon="add-circle-outline"
            onPress={handleAddCountry}
            style={styles.addCountryButton}
          />
        </Animated.View>

        {/* My Goals Section */}
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
        >
          <SectionHeader
            title="My Goals"
            rightLabel={`${completedGoals}/${totalGoals} completed`}
          />

          {/* Goal Cards */}
          {MOCK_GOALS.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onPress={() => handleGoalPress(goal)}
            />
          ))}
        </Animated.View>

        {/* Add My Goal Button */}
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
        >
          <SecondaryButton
            title="Add My Goal"
            icon="add-outline"
            onPress={handleAddGoal}
            style={styles.addGoalButton}
          />
        </Animated.View>
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
    paddingBottom: theme.spacing.xxl,
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
  addCountryButton: {
    marginBottom: theme.spacing.xl,
  },
  addGoalButton: {
    marginTop: theme.spacing.md,
  },
});
