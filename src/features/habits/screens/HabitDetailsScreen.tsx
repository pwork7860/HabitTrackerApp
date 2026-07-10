import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../../theme';
import { TopAppBar } from '../../../components/TopAppBar';

export const HabitDetailsScreen = () => {
  const [reminderEnabled, setReminderEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <TopAppBar title="Details" showProfile={false} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.titleRow}>
            <View style={styles.iconBox}>
              <MaterialIcons name="self-improvement" size={32} color={theme.colors.primary} />
            </View>
            <View>
              <Text style={styles.habitTitle}>Morning Meditation</Text>
              <View style={styles.subtitleRow}>
                <View style={styles.dot} />
                <Text style={styles.habitSubtitle}>Daily • Health & Mindfulness</Text>
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

        {/* 30-Day Activity Heatmap Placeholder */}
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

        {/* Consistency Trend Placeholder */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Consistency Trend</Text>
            <TouchableOpacity style={styles.dropdownBtn}>
              <Text style={styles.dropdownText}>Past 30 Days</Text>
              <MaterialIcons name="arrow-drop-down" size={20} color={theme.colors.onSurface} />
            </TouchableOpacity>
          </View>
          <View style={styles.chartArea}>
            {/* Simple bar chart mock */}
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
          
          <TouchableOpacity style={styles.settingRow}>
            <View>
              <Text style={styles.settingLabel}>Edit Habit</Text>
              <Text style={styles.settingSub}>Change name, frequency or icon</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color={theme.colors.onSurfaceVariant} />
          </TouchableOpacity>
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
    paddingBottom: 100,
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
    marginBottom: 24, // sometimes overridden by cardHeader
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
});
