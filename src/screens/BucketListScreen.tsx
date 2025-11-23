import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { theme } from '../theme';
import { BentoCard, PrimaryButton } from '../components';

export default function BucketListScreen() {
  const bucketListItems = [
    { id: 1, country: 'Japan', emoji: '🇯🇵', checked: true },
    { id: 2, country: 'Iceland', emoji: '🇮🇸', checked: true },
    { id: 3, country: 'New Zealand', emoji: '🇳🇿', checked: true },
  ];

  const exploreDestinations = [
    { id: 4, country: 'Norway', emoji: '🇳🇴' },
    { id: 5, country: 'Peru', emoji: '🇵🇪' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.subtitle}>Dream destinations to explore</Text>
        </View>

        <Text style={styles.sectionTitle}>My Bucket List (3)</Text>
        <View style={styles.grid}>
          {bucketListItems.map((item) => (
            <BentoCard key={item.id} size="small" style={styles.countryCard}>
              <Text style={styles.countryEmoji}>{item.emoji}</Text>
              <Text style={styles.countryName}>{item.country}</Text>
              {item.checked && (
                <View style={styles.checkmark}>
                  <Text style={styles.checkmarkText}>✓</Text>
                </View>
              )}
            </BentoCard>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Explore Destinations</Text>
        <View style={styles.list}>
          {exploreDestinations.map((item) => (
            <View key={item.id} style={styles.listItem}>
              <Text style={styles.listEmoji}>{item.emoji}</Text>
              <Text style={styles.listCountry}>{item.country}</Text>
              <Text style={styles.addButton}>+</Text>
            </View>
          ))}
        </View>

        <PrimaryButton
          title="+ Add New Country"
          onPress={() => console.log('Add country')}
          variant="primary"
          style={styles.addButton}
        />
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
  },
  sectionTitle: {
    fontSize: theme.typography.sizes.xl,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.text.primary,
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  countryCard: {
    width: '47%',
    alignItems: 'center',
    backgroundColor: theme.colors.card.background,
  },
  countryEmoji: {
    fontSize: 40,
    marginBottom: theme.spacing.sm,
  },
  countryName: {
    fontSize: theme.typography.sizes.md,
    fontFamily: theme.typography.fonts.semiBold,
    color: theme.colors.text.primary,
  },
  checkmark: {
    position: 'absolute',
    top: theme.spacing.sm,
    right: theme.spacing.sm,
    backgroundColor: theme.colors.success,
    borderRadius: theme.borderRadius.round,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: theme.typography.fonts.bold,
  },
  list: {
    gap: theme.spacing.sm,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card.background,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
  },
  listEmoji: {
    fontSize: 24,
    marginRight: theme.spacing.md,
  },
  listCountry: {
    flex: 1,
    fontSize: theme.typography.sizes.md,
    fontFamily: theme.typography.fonts.medium,
    color: theme.colors.text.primary,
  },
  addButton: {
    marginTop: theme.spacing.lg,
  },
});
