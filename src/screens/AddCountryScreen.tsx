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

export default function AddCountryScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [countryName, setCountryName] = useState('');
  const [visitDate, setVisitDate] = useState('');

  const handleSave = () => {
    if (!countryName.trim()) {
      Alert.alert('Error', 'Please enter a country name');
      return;
    }

    // In a real app, this would save to state management or API
    Alert.alert(
      'Success',
      `${countryName} has been added to your visited countries!`,
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
        <Text style={styles.title}>Add New Country</Text>
        <Text style={styles.subtitle}>
          Track the countries you've explored around the world
        </Text>

        <View style={styles.form}>
          <TextInputField
            label="Country Name"
            value={countryName}
            onChangeText={setCountryName}
            placeholder="e.g., Japan, France, Brazil"
          />

          <TextInputField
            label="Visit Date (Optional)"
            value={visitDate}
            onChangeText={setVisitDate}
            placeholder="e.g., June 2024"
          />

          <PrimaryButton
            title="Add Country"
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
