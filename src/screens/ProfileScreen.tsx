import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from '../theme';
import { BentoCard, PrimaryButton } from '../components';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('userEmail');
      // Navigation will be handled automatically by RootNavigator
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <BentoCard backgroundColor={theme.colors.card.background}>
          <View style={styles.profileHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JD</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.name}>Jane Doe</Text>
              <Text style={styles.email}>jane.doe@email.com</Text>
              <TouchableOpacity>
                <Text style={styles.editProfile}>Edit profile</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>7</Text>
              <Text style={styles.statLabel}>Visited</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.stat}>
              <Text style={styles.statValue}>3</Text>
              <Text style={styles.statLabel}>Bucket List</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.stat}>
              <Text style={styles.statValue}>4</Text>
              <Text style={styles.statLabel}>Goals</Text>
            </View>
          </View>
        </BentoCard>

        <Text style={styles.sectionTitle}>SETTINGS</Text>

        <View style={styles.settingsList}>
          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="settings-outline" size={24} color={theme.colors.text.secondary} />
            <Text style={styles.settingText}>App Settings</Text>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.text.tertiary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="shield-outline" size={24} color={theme.colors.text.secondary} />
            <Text style={styles.settingText}>Privacy</Text>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.text.tertiary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color={theme.colors.text.secondary}
            />
            <Text style={styles.settingText}>About</Text>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.text.tertiary} />
          </TouchableOpacity>
        </View>

        <PrimaryButton
          title="Log Out"
          onPress={handleLogout}
          variant="outline"
          style={styles.logoutButton}
        />

        <Text style={styles.version}>TRAVEL MIND v1.0.0</Text>
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: theme.borderRadius.round,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.md,
  },
  avatarText: {
    fontSize: theme.typography.sizes.xxl,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.text.primary,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: theme.typography.sizes.xl,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  email: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.xs,
  },
  editProfile: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.medium,
    color: theme.colors.accent,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: theme.spacing.lg,
    borderTopWidth: 1,
    borderTopColor: theme.colors.card.border,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: theme.typography.sizes.xxl,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  statLabel: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.text.secondary,
  },
  statDivider: {
    width: 1,
    backgroundColor: theme.colors.card.border,
  },
  sectionTitle: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.text.secondary,
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.md,
    letterSpacing: 1,
  },
  settingsList: {
    backgroundColor: theme.colors.card.background,
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.card.border,
  },
  settingText: {
    flex: 1,
    fontSize: theme.typography.sizes.md,
    fontFamily: theme.typography.fonts.medium,
    color: theme.colors.text.primary,
    marginLeft: theme.spacing.md,
  },
  logoutButton: {
    marginTop: theme.spacing.xl,
    borderColor: theme.colors.error,
  },
  version: {
    fontSize: theme.typography.sizes.xs,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.text.tertiary,
    textAlign: 'center',
    marginTop: theme.spacing.lg,
  },
});
