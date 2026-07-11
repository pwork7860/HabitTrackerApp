import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { theme } from '../../../theme';
import { getHabit, deleteHabit } from '../api/habitsApi';
import { RootStackParamList } from '../../../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HabitDetails'>;
type RouteProps = RouteProp<RootStackParamList, 'HabitDetails'>;

interface Props {
  navigation: NavigationProp;
  route: RouteProps;
}

export const HabitDetailsScreen: React.FC<Props> = ({ navigation, route }) => {
  const { habitId } = route.params;
  const [reminderEnabled, setReminderEnabled] = useState(true);
  const insets = useSafeAreaInsets();
  const queryClient = useQueryClient();

  // Fetch habit by ID
  const { data: habit, isLoading, isError } = useQuery({
    queryKey: ['habit', habitId],
    queryFn: () => getHabit(habitId),
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: () => deleteHabit(habitId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['habits'] });
      navigation.goBack();
    },
    onError: () => {
      Alert.alert('Error', 'Failed to delete habit. Please try again.');
    },
  });

  const handleDelete = () => {
    Alert.alert(
      'Delete Habit',
      `Are you sure you want to delete "${habit?.name}"? This action cannot be undone.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => deleteMutation.mutate(),
        },
      ]
    );
  };

  const handleEdit = () => {
    if (!habit) return;
    navigation.navigate('UpdateHabit', {
      habitId,
      name: habit.name,
      frequency: habit.frequency,
    });
  };

  // Loading state
  if (isLoading) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color={theme.colors.onBackground} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Details</Text>
          <View style={{ width: 40 }} />
        </View>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
          <Text style={styles.loadingText}>Loading habit…</Text>
        </View>
      </View>
    );
  }

  // Error state
  if (isError || !habit) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color={theme.colors.onBackground} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Details</Text>
          <View style={{ width: 40 }} />
        </View>
        <View style={styles.centered}>
          <MaterialIcons name="error-outline" size={48} color={theme.colors.error} />
          <Text style={styles.errorText}>Failed to load habit.</Text>
          <TouchableOpacity style={styles.retryButton} onPress={() => navigation.goBack()}>
            <Text style={styles.retryText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color={theme.colors.onBackground} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details</Text>
        <TouchableOpacity
          style={styles.deleteHeaderBtn}
          onPress={handleDelete}
          disabled={deleteMutation.isPending}
        >
          {deleteMutation.isPending ? (
            <ActivityIndicator size="small" color={theme.colors.error} />
          ) : (
            <MaterialIcons name="delete-outline" size={24} color={theme.colors.error} />
          )}
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 100 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.titleRow}>
            <View style={styles.iconBox}>
              <MaterialIcons name="self-improvement" size={32} color={theme.colors.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.habitTitle}>{habit.name}</Text>
              <View style={styles.subtitleRow}>
                <View style={styles.dot} />
                <Text style={styles.habitSubtitle}>{habit.frequency}</Text>
              </View>
            </View>
          </View>

          <View style={styles.streakBox}>
            <View style={styles.streakItem}>
              <Text style={styles.streakLabel}>CURRENT STREAK</Text>
              <Text style={styles.streakValueCurrent}>14 Days</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.streakItem}>
              <Text style={styles.streakLabel}>LONGEST STREAK</Text>
              <Text style={styles.streakValueLongest}>32 Days</Text>
            </View>
          </View>
        </View>

        {/* 30-Day Activity Heatmap */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>30-Day Activity</Text>
          <View style={styles.heatmapGrid}>
            {Array.from({ length: 30 }).map((_, i) => {
              const level = i > 15 ? Math.floor(Math.random() * 3) + 2 : Math.floor(Math.random() * 5);
              let bgColor = theme.colors.surfaceContainer;
              if (level === 1) bgColor = `${theme.colors.primary}33`;
              if (level === 2) bgColor = `${theme.colors.primary}66`;
              if (level === 3) bgColor = `${theme.colors.primary}99`;
              if (level === 4) bgColor = theme.colors.primary;
              return <View key={i} style={[styles.heatCell, { backgroundColor: bgColor }]} />;
            })}
          </View>
          <View style={styles.heatLegend}>
            <Text style={styles.legendText}>Less</Text>
            <View style={[styles.legendCell, { backgroundColor: theme.colors.surfaceContainer }]} />
            <View style={[styles.legendCell, { backgroundColor: `${theme.colors.primary}33` }]} />
            <View style={[styles.legendCell, { backgroundColor: `${theme.colors.primary}66` }]} />
            <View style={[styles.legendCell, { backgroundColor: `${theme.colors.primary}99` }]} />
            <View style={[styles.legendCell, { backgroundColor: theme.colors.primary }]} />
            <Text style={styles.legendText}>More</Text>
          </View>
        </View>

        {/* Consistency Trend */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Consistency Trend</Text>
            <TouchableOpacity style={styles.dropdownBtn}>
              <Text style={styles.dropdownText}>Past 30 Days</Text>
              <MaterialIcons name="arrow-drop-down" size={20} color={theme.colors.onSurface} />
            </TouchableOpacity>
          </View>
          <View style={styles.chartArea}>
            {Array.from({ length: 15 }).map((_, i) => {
              const height = Math.floor(Math.random() * 60) + 20 + i * 2;
              return (
                <View key={i} style={styles.barContainer}>
                  <View style={[styles.bar, { height: `${Math.min(height, 100)}%` }]} />
                </View>
              );
            })}
          </View>
        </View>

        {/* Settings */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Settings</Text>

          <View style={styles.settingRow}>
            <View>
              <Text style={styles.settingLabel}>Reminders</Text>
              <Text style={styles.settingSub}>7:00 AM, Daily</Text>
            </View>
            <Switch
              trackColor={{ false: theme.colors.surfaceContainerHighest, true: `${theme.colors.primary}80` }}
              thumbColor={reminderEnabled ? theme.colors.primary : theme.colors.onSurfaceVariant}
              onValueChange={setReminderEnabled}
              value={reminderEnabled}
            />
          </View>

          <View style={styles.settingDivider} />

          <TouchableOpacity style={styles.settingRow} onPress={handleEdit}>
            <View>
              <Text style={styles.settingLabel}>Edit Habit</Text>
              <Text style={styles.settingSub}>Change name or frequency</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color={theme.colors.onSurfaceVariant} />
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <MaterialIcons name="edit" size={20} color={theme.colors.onPrimary} style={{ marginRight: 8 }} />
          <Text style={styles.editButtonText}>Edit Habit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.deleteButton, deleteMutation.isPending && { opacity: 0.6 }]}
          onPress={handleDelete}
          disabled={deleteMutation.isPending}
        >
          {deleteMutation.isPending ? (
            <ActivityIndicator color={theme.colors.error} />
          ) : (
            <>
              <MaterialIcons name="delete-outline" size={20} color={theme.colors.error} style={{ marginRight: 8 }} />
              <Text style={styles.deleteButtonText}>Delete Habit</Text>
            </>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.containerPaddingMobile,
    paddingVertical: 16,
    backgroundColor: theme.colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(187, 202, 191, 0.2)',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: theme.rounded.full,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.surfaceContainerLow,
  },
  headerTitle: {
    ...theme.typography.headlineMd,
    color: theme.colors.onBackground,
    fontWeight: 'bold',
  },
  deleteHeaderBtn: {
    width: 40,
    height: 40,
    borderRadius: theme.rounded.full,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${theme.colors.error}12`,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  loadingText: {
    ...theme.typography.bodyMd,
    color: theme.colors.onSurfaceVariant,
    marginTop: 8,
  },
  errorText: {
    ...theme.typography.bodyMd,
    color: theme.colors.error,
  },
  retryButton: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: theme.colors.surfaceContainerLow,
    borderRadius: theme.rounded.md,
  },
  retryText: {
    ...theme.typography.bodyMd,
    color: theme.colors.primary,
    fontWeight: '600',
  },
  scrollContent: {
    padding: theme.spacing.containerPaddingMobile,
  },
  headerSection: {
    marginBottom: theme.spacing.sectionGap,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
  },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: theme.rounded.md,
    backgroundColor: `${theme.colors.primaryContainer}1A`,
    borderWidth: 1,
    borderColor: `${theme.colors.primaryContainer}33`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  habitTitle: {
    ...theme.typography.headlineLgMobile,
    color: theme.colors.onBackground,
    marginBottom: 4,
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
  },
  habitSubtitle: {
    ...theme.typography.bodyMd,
    color: theme.colors.onSurfaceVariant,
  },
  streakBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surfaceContainerLowest,
    padding: 20,
    borderRadius: theme.rounded.lg,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.3)',
    ...theme.elevation.level1,
  },
  streakItem: {
    flex: 1,
    alignItems: 'center',
  },
  streakLabel: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurfaceVariant,
    marginBottom: 4,
  },
  streakValueCurrent: {
    ...theme.typography.headlineMd,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  streakValueLongest: {
    ...theme.typography.headlineMd,
    color: theme.colors.onBackground,
    fontWeight: 'bold',
  },
  divider: {
    width: 1,
    height: 48,
    backgroundColor: 'rgba(187, 202, 191, 0.3)',
  },
  card: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.3)',
    marginBottom: theme.spacing.sectionGap,
    ...theme.elevation.level1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  cardTitle: {
    ...theme.typography.headlineMd,
    color: theme.colors.onBackground,
    marginBottom: 24,
  },
  heatmapGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  heatCell: {
    width: 28,
    height: 28,
    borderRadius: 6,
  },
  heatLegend: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 24,
    gap: 6,
  },
  legendText: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurfaceVariant,
  },
  legendCell: {
    width: 12,
    height: 12,
    borderRadius: 3,
  },
  dropdownBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surfaceContainerLow,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: theme.rounded.default,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.3)',
  },
  dropdownText: {
    ...theme.typography.bodySm,
    color: theme.colors.onBackground,
  },
  chartArea: {
    height: 160,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 6,
  },
  barContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-end',
  },
  bar: {
    backgroundColor: theme.colors.primaryFixedDim,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingLabel: {
    ...theme.typography.bodyMd,
    fontWeight: '500',
    color: theme.colors.onBackground,
  },
  settingSub: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurfaceVariant,
    marginTop: 2,
  },
  settingDivider: {
    height: 1,
    backgroundColor: 'rgba(187, 202, 191, 0.2)',
    marginVertical: 16,
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    padding: 18,
    borderRadius: theme.rounded.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    ...theme.elevation.level2,
  },
  editButtonText: {
    color: theme.colors.onPrimary,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  deleteButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.surfaceContainerLowest,
    padding: 18,
    borderRadius: theme.rounded.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: `${theme.colors.error}40`,
    marginBottom: 8,
  },
  deleteButtonText: {
    color: theme.colors.error,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
