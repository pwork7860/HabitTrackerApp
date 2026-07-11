import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { theme } from '../../../theme';
import { TopAppBar } from '../../../components/TopAppBar';
import { HabitCard } from '../../../components/HabitCard';
import { CustomButton } from '../../../components/CustomButton';
import { RootStackParamList } from '../../../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const DAYS = [
  { day: 'Mon', date: '16', active: false, indicator: true },
  { day: 'Tue', date: '17', active: false, indicator: true },
  { day: 'Wed', date: '18', active: true, indicator: true },
  { day: 'Thu', date: '19', active: false, indicator: false },
  { day: 'Fri', date: '20', active: false, indicator: false },
  { day: 'Sat', date: '21', active: false, indicator: false },
  { day: 'Sun', date: '22', active: false, indicator: false },
];

export const DailyDashboardScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [habits, setHabits] = useState([
    {
      id: '1',
      title: 'Morning Meditation',
      subtitle: '10 minutes',
      streak: 12,
      completed: true,
    },
    {
      id: '2',
      title: 'Drink 2L Water',
      subtitle: '0.5L / 2L',
      streak: 4,
      category: 'Health',
      categoryColor: theme.colors.secondary,
      completed: false,
    },
    {
      id: '3',
      title: 'Read 20 Pages',
      subtitle: 'Daily',
      streak: 1,
      category: 'Learning',
      categoryColor: theme.colors.tertiary,
      completed: false,
    },
    {
      id: '4',
      title: 'Stretch',
      subtitle: 'Post-workout',
      streak: 8,
      completed: true,
    }
  ]);

  const toggleHabit = (id: string) => {
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  return (
    <View style={styles.container}>
      <TopAppBar />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Section */}
        <View style={styles.section}>
          <Text style={styles.greeting}>Good Morning, Alex!</Text>
          <View style={styles.quoteCard}>
            <MaterialIcons name="format-quote" size={32} color={theme.colors.tertiaryContainer} style={{ opacity: 0.8, marginRight: 12 }} />
            <View style={{ flex: 1 }}>
              <Text style={styles.quoteText}>"Motivation is what gets you started. Habit is what keeps you going."</Text>
              <Text style={styles.quoteAuthor}>JIM RYUN</Text>
            </View>
          </View>
        </View>

        {/* Calendar Strip */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>This Week</Text>
            <TouchableOpacity style={styles.monthBadge}>
              <Text style={styles.monthText}>Oct 2023</Text>
              <MaterialIcons name="expand-more" size={16} color={theme.colors.primary} />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.calendarStrip}>
            {DAYS.map((d, index) => (
              <TouchableOpacity 
                key={index} 
                style={[styles.dayCard, d.active && styles.dayCardActive]}
                activeOpacity={0.7}
              >
                <Text style={[styles.dayName, d.active && styles.dayNameActive]}>{d.day}</Text>
                <Text style={[styles.dayDate, d.active && styles.dayDateActive]}>{d.date}</Text>
                {d.indicator && (
                  <View style={[styles.dayIndicator, d.active && styles.dayIndicatorActive]} />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Habits List */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's Habits</Text>
            <View style={styles.completedBadge}>
              <Text style={styles.completedBadgeText}>
                {habits.filter(h => h.completed).length}/{habits.length} Completed
              </Text>
            </View>
          </View>
          
          <View style={styles.habitsContainer}>
            {habits.map((habit) => (
              <HabitCard 
                key={habit.id}
                title={habit.title}
                subtitle={habit.subtitle}
                streak={habit.streak}
                category={habit.category}
                categoryColor={habit.categoryColor}
                completed={habit.completed}
                onToggle={() => toggleHabit(habit.id)}
                onPress={() => navigation.navigate('HabitDetails', { habitId: habit.id })}
              />
            ))}
          </View>

          <CustomButton 
            title="Add New Habit" 
            icon="add" 
            variant="dashed" 
            onPress={() => navigation.navigate('CreateHabit')} 
            style={{ marginTop: 8 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    padding: theme.spacing.containerPaddingMobile,
    paddingBottom: 100, // Space for bottom tabs
  },
  section: {
    marginBottom: theme.spacing.sectionGap,
  },
  greeting: {
    ...theme.typography.headlineLgMobile,
    color: theme.colors.onSurface,
    marginBottom: 24,
  },
  quoteCard: {
    backgroundColor: theme.colors.surfaceContainerLow,
    borderRadius: theme.rounded.md,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
    ...theme.elevation.level1,
  },
  quoteText: {
    ...theme.typography.bodyLg,
    color: theme.colors.onSurface,
    fontStyle: 'italic',
  },
  quoteAuthor: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurfaceVariant,
    marginTop: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  sectionTitle: {
    ...theme.typography.headlineMd,
    color: theme.colors.onSurface,
  },
  monthBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${theme.colors.primary}1A`,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: theme.rounded.full,
  },
  monthText: {
    ...theme.typography.labelMd,
    color: theme.colors.primary,
    marginRight: 4,
  },
  calendarStrip: {
    gap: 12,
  },
  dayCard: {
    width: 64,
    height: 88,
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.elevation.level1,
  },
  dayCardActive: {
    backgroundColor: theme.colors.primaryContainer,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  dayName: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurfaceVariant,
  },
  dayNameActive: {
    color: theme.colors.onPrimaryContainer,
  },
  dayDate: {
    ...theme.typography.headlineMd,
    color: theme.colors.onSurfaceVariant,
    marginTop: 8,
  },
  dayDateActive: {
    color: theme.colors.onPrimaryContainer,
    fontWeight: 'bold',
  },
  dayIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.primary,
    marginTop: 8,
  },
  dayIndicatorActive: {
    backgroundColor: theme.colors.onPrimaryContainer,
  },
  completedBadge: {
    backgroundColor: `${theme.colors.primaryContainer}33`,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: theme.rounded.full,
  },
  completedBadgeText: {
    ...theme.typography.labelMd,
    color: theme.colors.primary,
  },
  habitsContainer: {
    gap: theme.spacing.cardGap,
  },
});
