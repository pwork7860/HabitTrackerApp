import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../theme';
import { MaterialIcons } from '@expo/vector-icons';

export interface HabitCardProps {
  title: string;
  subtitle?: string;
  streak: number;
  category?: string;
  categoryColor?: string;
  completed?: boolean;
  progress?: number; // 0 to 1
  onToggle?: () => void;
  onPress?: () => void;
}

export const HabitCard: React.FC<HabitCardProps> = ({
  title,
  subtitle,
  streak,
  category,
  categoryColor = theme.colors.secondary,
  completed = false,
  progress = 0,
  onToggle,
  onPress,
}) => {
  return (
    <TouchableOpacity 
      style={[
        styles.card,
        completed && styles.cardCompleted
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[
        styles.streakContainer,
        completed ? styles.streakCompleted : styles.streakPending
      ]}>
        <Text style={[
          styles.streakText,
          completed ? styles.streakTextCompleted : styles.streakTextPending
        ]}>🔥{streak}</Text>
      </View>

      <View style={styles.contentContainer}>
        {category && !completed && (
          <View style={styles.categoryContainer}>
            <View style={[styles.categoryBadge, { backgroundColor: `${categoryColor}1A` }]}>
              <Text style={[styles.categoryText, { color: categoryColor }]}>{category}</Text>
            </View>
          </View>
        )}
        <Text style={[
          styles.title,
          completed && styles.titleCompleted
        ]}>{title}</Text>
        {subtitle && (
          <Text style={styles.subtitle}>{subtitle}</Text>
        )}
      </View>

      <TouchableOpacity 
        style={styles.actionContainer} 
        onPress={onToggle}
        activeOpacity={0.6}
      >
        {completed ? (
          <View style={styles.checkboxCompleted}>
            <MaterialIcons name="check" size={20} color={theme.colors.primary} />
          </View>
        ) : (
          <View style={styles.checkboxPending}>
            {/* Can add SVG progress here later if needed */}
          </View>
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.1)', // outline-variant/10
    ...theme.elevation.level1,
    marginBottom: theme.spacing.cardGap,
  },
  cardCompleted: {
    backgroundColor: theme.colors.surfaceContainerLow,
    borderColor: theme.colors.primaryContainer,
  },
  streakContainer: {
    width: 56,
    height: 56,
    borderRadius: theme.rounded.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  streakPending: {
    backgroundColor: theme.colors.surfaceContainerHigh,
  },
  streakCompleted: {
    backgroundColor: `${theme.colors.primary}1A`, // primary/10
  },
  streakText: {
    ...theme.typography.headlineMd,
  },
  streakTextPending: {
    color: theme.colors.secondary,
  },
  streakTextCompleted: {
    color: theme.colors.primary,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 4,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    ...theme.typography.bodyLg,
    color: theme.colors.onSurface,
    fontWeight: '500',
  },
  titleCompleted: {
    color: theme.colors.primary, // Wait, design says text-primary? Let's check. Yes `.habit-card.completed .text-primary`
  },
  subtitle: {
    ...theme.typography.bodySm,
    color: theme.colors.onSurfaceVariant,
    marginTop: 4,
  },
  actionContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  checkboxCompleted: {
    width: 40,
    height: 40,
    borderRadius: theme.rounded.full,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    backgroundColor: `${theme.colors.primary}1A`, // primary/10
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxPending: {
    width: 40,
    height: 40,
    borderRadius: theme.rounded.full,
    borderWidth: 2,
    borderColor: 'rgba(187, 202, 191, 0.3)', // outline-variant/30
    backgroundColor: theme.colors.surfaceContainerLowest,
  },
});
