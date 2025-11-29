import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { theme } from '../theme';
import { BentoCard, PrimaryButton, TextInputField } from '../components';

export default function BucketListScreen() {
  const [bucketListItems, setBucketListItems] = useState([
    { id: 1, country: 'Japan', color: '#E91E63', checked: true },
    { id: 2, country: 'Iceland', color: '#2196F3', checked: true },
    { id: 3, country: 'New Zealand', color: '#4CAF50', checked: true },
  ]);

  const [exploreDestinations, setExploreDestinations] = useState([
    { id: 4, country: 'Norway', color: '#FF5722' },
    { id: 5, country: 'Peru', color: '#9C27B0' },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newCountryName, setNewCountryName] = useState('');
  const [selectedColor, setSelectedColor] = useState('#8AA68A');

  const availableColors = [
    '#E91E63', '#2196F3', '#4CAF50', '#FF5722', '#9C27B0',
    '#FF9800', '#00BCD4', '#FFEB3B', '#795548', '#607D8B',
  ];

  const getInitials = (country: string) => {
    const words = country.split(' ');
    if (words.length > 1) {
      return words[0][0] + words[1][0];
    }
    return country.substring(0, 2).toUpperCase();
  };

  const handleAddCountry = () => {
    if (newCountryName.trim()) {
      const newCountry = {
        id: Date.now(),
        country: newCountryName.trim(),
        color: selectedColor,
      };
      setExploreDestinations([...exploreDestinations, newCountry]);
      setNewCountryName('');
      setSelectedColor('#8AA68A');
      setModalVisible(false);
    }
  };

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
              <View style={[styles.countryIndicator, { backgroundColor: item.color }]}>
                <Text style={styles.countryInitials}>{getInitials(item.country)}</Text>
              </View>
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
              <View style={[styles.listIndicator, { backgroundColor: item.color }]}>
                <Text style={styles.listInitials}>{getInitials(item.country)}</Text>
              </View>
              <Text style={styles.listCountry}>{item.country}</Text>
              <Text style={styles.addIcon}>+</Text>
            </View>
          ))}
        </View>

        <PrimaryButton
          title="+ Add New Country"
          onPress={() => setModalVisible(true)}
          variant="primary"
          style={styles.addButton}
        />
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Country</Text>

            <TextInputField
              placeholder="Country name"
              value={newCountryName}
              onChangeText={setNewCountryName}
              autoCapitalize="words"
            />

            <Text style={styles.colorLabel}>Select Color:</Text>
            <View style={styles.colorGrid}>
              {availableColors.map((color) => (
                <TouchableOpacity
                  key={color}
                  style={[
                    styles.colorOption,
                    { backgroundColor: color },
                    selectedColor === color && styles.selectedColor,
                  ]}
                  onPress={() => setSelectedColor(color)}
                >
                  {selectedColor === color && <Text style={styles.checkmark}>✓</Text>}
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.modalButtons}>
              <PrimaryButton
                title="Cancel"
                onPress={() => {
                  setModalVisible(false);
                  setNewCountryName('');
                  setSelectedColor('#8AA68A');
                }}
                variant="outline"
                style={styles.modalButton}
              />
              <PrimaryButton
                title="Add Country"
                onPress={handleAddCountry}
                variant="primary"
                style={styles.modalButton}
              />
            </View>
          </View>
        </View>
      </Modal>
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
  countryIndicator: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  countryInitials: {
    fontSize: 20,
    fontFamily: theme.typography.fonts.bold,
    color: '#FFFFFF',
  },
  countryName: {
    fontSize: theme.typography.sizes.md,
    fontFamily: theme.typography.fonts.bold,
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
  listIndicator: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  listInitials: {
    fontSize: 14,
    fontFamily: theme.typography.fonts.bold,
    color: '#FFFFFF',
  },
  listCountry: {
    flex: 1,
    fontSize: theme.typography.sizes.md,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.text.primary,
  },
  addIcon: {
    fontSize: 24,
    color: theme.colors.text.secondary,
    fontFamily: theme.typography.fonts.bold,
  },
  addButton: {
    marginTop: theme.spacing.lg,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xl,
    width: '100%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: theme.typography.sizes.xxl,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  colorLabel: {
    fontSize: theme.typography.sizes.md,
    fontFamily: theme.typography.fonts.semiBold,
    color: theme.colors.text.primary,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },
  colorOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedColor: {
    borderColor: theme.colors.text.primary,
    borderWidth: 3,
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: theme.typography.fonts.bold,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginTop: theme.spacing.md,
  },
  modalButton: {
    flex: 1,
  },
});
