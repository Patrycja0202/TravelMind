import React from 'react';
import { View, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { theme } from '../theme';

interface BentoCardProps {
  children: React.ReactNode;
  backgroundColor?: string;
  onPress?: () => void;
  style?: ViewStyle;
  size?: 'small' | 'medium' | 'large';
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  backgroundColor = theme.colors.primary,
  onPress,
  style,
  size = 'medium',
}) => {
  const cardStyle = [
    styles.card,
    { backgroundColor },
    size === 'small' && styles.smallCard,
    size === 'large' && styles.largeCard,
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity style={cardStyle} onPress={onPress} activeOpacity={0.8}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  smallCard: {
    minHeight: 120,
  },
  largeCard: {
    minHeight: 200,
  },
});
