import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { theme } from '../theme';
import { PrimaryButton, TextInputField } from '../components';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function AddGoalScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [country, setCountry] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const handleSave = () => {
    if (!country.trim()) {
      Alert.alert('Error', 'Please enter a country name');
      return;
    }

    if (!location.trim()) {
      Alert.alert('Error', 'Please enter a location or activity');
      return;
    }

    // In a real app, this would save to state management or API
    Alert.alert(
      'Success',
      `Your goal to visit ${country} has been added!`,
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Add My Goal</Text>
        <Text style={styles.subtitle}>
          Set a new travel goal and make your dreams come true
        </Text>

        <View style={styles.form}>
          <TextInputField
            label="Country"
            value={country}
            onChangeText={setCountry}
            placeholder="e.g., Portugal, Switzerland"
          />

          <TextInputField
            label="Location / Activity"
            value={location}
            onChangeText={setLocation}
            placeholder="e.g., Lisbon and Porto, Swiss Alps hiking"
          />

          <TextInputField
            label="Target Date (Optional)"
            value={date}
            onChangeText={setDate}
            placeholder="e.g., October 2025"
          />

          <PrimaryButton
            title="Add Goal"
            onPress={handleSave}
            variant="primary"
            style={styles.saveButton}
          />

          <PrimaryButton
            title="Cancel"
            onPress={() => navigation.goBack()}
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
    marginBottom: theme.spacing.xl,
  },
  form: {
    gap: theme.spacing.lg,
  },
  saveButton: {
    marginTop: theme.spacing.md,
  },
});
