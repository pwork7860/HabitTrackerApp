import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../../theme';
import { TopAppBar } from '../../../components/TopAppBar';
import { ProgressBar } from '../../../components/ProgressBar';

export const ProgressAnalyticsScreen = () => {
  return (
    <View style={styles.container}>
      <TopAppBar title="Analytics" showProfile={false} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>Your Progress</Text>
        
        <View style={styles.metricsGrid}>
          {/* Completion Rate */}
          <View style={[styles.metricCard, styles.fullWidth]}>
            <Text style={styles.metricLabel}>Completion Rate</Text>
            <View style={styles.progressContainer}>
              <ProgressBar progress={68} size={140} strokeWidth={12} />
              <View style={styles.progressInfo}>
                <Text style={styles.progressText}>+12%</Text>
                <Text style={styles.progressSubtext}>vs last week</Text>
              </View>
            </View>
          </View>

          {/* Longest Streak */}
          <View style={styles.metricCard}>
            <View style={styles.metricHeader}>
              <Text style={styles.metricLabel}>Longest Streak</Text>
              <View style={[styles.iconBox, { backgroundColor: `${theme.colors.tertiaryContainer}1A` }]}>
                <MaterialIcons name="local-fire-department" size={20} color={theme.colors.tertiaryContainer} />
              </View>
            </View>
            <View style={styles.metricValueContainer}>
              <Text style={styles.metricValue}>42</Text>
              <Text style={styles.metricUnit}>Days</Text>
            </View>
            <Text style={styles.metricSubtitle}>Meditation</Text>
          </View>

          {/* Consistency Score */}
          <View style={styles.metricCard}>
            <View style={styles.metricHeader}>
              <Text style={styles.metricLabel}>Consistency</Text>
              <View style={[styles.iconBox, { backgroundColor: `${theme.colors.secondary}1A` }]}>
                <MaterialIcons name="star" size={20} color={theme.colors.secondary} />
              </View>
            </View>
            <View style={styles.metricValueContainer}>
              <Text style={[styles.metricValue, { color: theme.colors.secondary }]}>94%</Text>
            </View>
            <Text style={[styles.metricSubtitle, { color: theme.colors.secondary }]}>Top 5% of users</Text>
          </View>
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
  pageTitle: {
    ...theme.typography.headlineLgMobile,
    color: theme.colors.onSurface,
    marginBottom: 24,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.cardGap,
  },
  fullWidth: {
    width: '100%',
  },
  metricCard: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.2)', // outline-variant/20
    flexGrow: 1,
    width: '45%', // roughly half
    ...theme.elevation.level1,
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricLabel: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurfaceVariant,
    textTransform: 'uppercase',
  },
  iconBox: {
    padding: 6,
    borderRadius: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  progressInfo: {
    alignItems: 'flex-end',
  },
  progressText: {
    ...theme.typography.headlineMd,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  progressSubtext: {
    ...theme.typography.bodySm,
    color: theme.colors.onSurfaceVariant,
  },
  metricValueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 24,
  },
  metricValue: {
    ...theme.typography.headlineLgMobile,
    color: theme.colors.onSurface,
    fontWeight: 'bold',
  },
  metricUnit: {
    ...theme.typography.headlineMd,
    color: theme.colors.onSurfaceVariant,
    marginLeft: 4,
  },
  metricSubtitle: {
    ...theme.typography.bodySm,
    color: theme.colors.onSurfaceVariant,
    marginTop: 4,
  },
});
