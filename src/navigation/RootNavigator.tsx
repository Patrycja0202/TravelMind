import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '../types/navigation';
import { theme } from '../theme';

// Import screens
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import TabNavigator from './TabNavigator';
import AddCountryScreen from '../screens/AddCountryScreen';
import AddGoalScreen from '../screens/AddGoalScreen';
import GoalDetailsScreen from '../screens/GoalDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      setIsAuthenticated(!!userToken);
    } catch (error) {
      console.error('Error checking auth status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return null; // Or a loading screen
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: theme.colors.text.primary,
          headerTitleStyle: {
            fontFamily: theme.typography.fonts.bold,
          },
        }}
      >
        {!isAuthenticated ? (
          <>
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="MainTabs"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddCountry"
              component={AddCountryScreen}
              options={{ title: 'Add Country' }}
            />
            <Stack.Screen
              name="AddGoal"
              component={AddGoalScreen}
              options={{ title: 'Add Goal' }}
            />
            <Stack.Screen
              name="GoalDetails"
              component={GoalDetailsScreen}
              options={{ title: 'Goal Details' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
