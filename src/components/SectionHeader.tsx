import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

interface SectionHeaderProps {
  title: string;
  rightLabel?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, rightLabel }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {rightLabel && <Text style={styles.rightLabel}>{rightLabel}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  title: {
    fontSize: theme.typography.sizes.xl,
    fontFamily: theme.typography.fonts.bold,
    color: theme.colors.text.primary,
  },
  rightLabel: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.text.tertiary,
  },
});
