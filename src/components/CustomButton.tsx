import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { theme } from '../theme';
import { MaterialIcons } from '@expo/vector-icons';

type ButtonVariant = 'primary' | 'secondary' | 'dashed';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  icon?: keyof typeof MaterialIcons.glyphMap;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  icon,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity 
      style={[
        styles.button,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'dashed' && styles.dashed,
        style
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon && (
        <MaterialIcons 
          name={icon} 
          size={20} 
          color={
            variant === 'primary' ? theme.colors.onPrimary : 
            variant === 'secondary' ? theme.colors.secondary : 
            theme.colors.primary
          } 
          style={styles.icon}
        />
      )}
      <Text style={[
        styles.text,
        variant === 'primary' && styles.textPrimary,
        variant === 'secondary' && styles.textSecondary,
        variant === 'dashed' && styles.textDashed,
        textStyle
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: theme.rounded.default,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    ...theme.typography.labelMd,
    textTransform: 'uppercase',
  },
  primary: {
    backgroundColor: theme.colors.primary,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  textPrimary: {
    color: theme.colors.onPrimary,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  },
  textSecondary: {
    color: theme.colors.secondary,
  },
  dashed: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'rgba(0, 108, 73, 0.3)', // primary/30
    borderStyle: 'dashed',
  },
  textDashed: {
    color: theme.colors.primary,
  },
});
