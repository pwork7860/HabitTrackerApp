import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../../theme';
import { TopAppBar } from '../../../components/TopAppBar';
import { CustomButton } from '../../../components/CustomButton';

export const CommunityChallengesScreen = () => {
  return (
    <View style={styles.container}>
      <TopAppBar title="Community" showProfile={false} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Active Challenges Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Active Challenges</Text>
              <Text style={styles.sectionSubtitle}>Participating in 2 challenges</Text>
            </View>
          </View>

          {/* Challenge Card 1 */}
          <View style={styles.challengeCard}>
            <View style={styles.cardHeader}>
              <View style={[styles.badge, { backgroundColor: theme.colors.primary }]}>
                <MaterialIcons name="local-fire-department" size={16} color={theme.colors.onPrimary} />
                <Text style={styles.badgeText}>Health</Text>
              </View>
              <View style={styles.timeBadge}>
                <Text style={styles.timeBadgeText}>12 Days Left</Text>
              </View>
            </View>
            
            <Text style={styles.challengeTitle}>75 Hard Lite</Text>
            <Text style={styles.challengeDesc}>Drink 3L water, 45 min workout, read 10 pages.</Text>
            
            <View style={styles.progressSection}>
              <View style={styles.progressHeader}>
                <Text style={styles.progressText}>63% Completed</Text>
                <Text style={styles.rankText}>Rank #4</Text>
              </View>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: '63%', backgroundColor: theme.colors.primary }]} />
              </View>
            </View>
            
            <View style={styles.cardFooter}>
              <View style={styles.avatarGroup}>
                <View style={[styles.avatar, { zIndex: 3 }]} />
                <View style={[styles.avatar, { zIndex: 2, marginLeft: -12 }]} />
                <View style={[styles.avatar, { zIndex: 1, marginLeft: -12 }]} />
                <View style={[styles.avatarMore, { marginLeft: -12 }]}>
                  <Text style={styles.avatarMoreText}>+24</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={styles.viewDetailsText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>

          <CustomButton 
            title="Find New Challenge" 
            icon="add" 
            variant="primary" 
            onPress={() => {}} 
            style={{ marginTop: 16 }}
          />
        </View>

        {/* Global Leaderboard Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Global Leaderboard</Text>
          <View style={{ marginTop: 16, gap: 12 }}>
            {/* Rank 1 */}
            <View style={[styles.leaderboardItem, { backgroundColor: `${theme.colors.tertiaryFixed}33`, borderColor: `${theme.colors.tertiaryFixed}80` }]}>
              <View style={[styles.rankIndicator, { backgroundColor: theme.colors.tertiary }]} />
              <Text style={[styles.rankNumber, { color: theme.colors.tertiary }]}>1</Text>
              <View style={styles.lbAvatar} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.lbName}>Sarah Jenkins</Text>
                <Text style={[styles.lbStreak, { color: theme.colors.tertiary }]}>14 Day Streak</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.lbScore}>2,450</Text>
                <Text style={styles.lbScoreLabel}>Pts</Text>
              </View>
            </View>
            
            {/* Rank 2 */}
            <View style={styles.leaderboardItem}>
              <Text style={styles.rankNumber}>2</Text>
              <View style={styles.lbAvatar} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.lbName}>Marcus Thorne</Text>
                <Text style={styles.lbStreak}>12 Day Streak</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.lbScore}>2,310</Text>
                <Text style={styles.lbScoreLabel}>Pts</Text>
              </View>
            </View>

            {/* Current User */}
            <View style={[styles.leaderboardItem, { backgroundColor: `${theme.colors.primaryContainer}1A`, borderColor: `${theme.colors.primary}4D`, marginTop: 8 }]}>
              <View style={[styles.rankIndicator, { backgroundColor: theme.colors.primary }]} />
              <Text style={[styles.rankNumber, { color: theme.colors.primary }]}>24</Text>
              <View style={[styles.lbAvatar, { borderColor: theme.colors.primary, borderWidth: 2 }]} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={[styles.lbName, { color: theme.colors.primary }]}>You</Text>
                <Text style={[styles.lbStreak, { color: theme.colors.primary }]}>5 Day Streak</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.lbScore}>1,120</Text>
                <Text style={styles.lbScoreLabel}>Pts</Text>
              </View>
            </View>
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
  section: {
    marginBottom: theme.spacing.sectionGap,
  },
  sectionHeader: {
    marginBottom: 24,
  },
  sectionTitle: {
    ...theme.typography.headlineMd,
    color: theme.colors.onSurface,
    fontWeight: 'bold',
  },
  sectionSubtitle: {
    ...theme.typography.bodyMd,
    color: theme.colors.onSurfaceVariant,
    marginTop: 4,
  },
  challengeCard: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.2)',
    ...theme.elevation.level1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: theme.rounded.full,
    gap: 4,
  },
  badgeText: {
    ...theme.typography.labelMd,
    color: theme.colors.onPrimary,
  },
  timeBadge: {
    backgroundColor: theme.colors.surfaceContainer,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: theme.rounded.sm,
  },
  timeBadgeText: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurfaceVariant,
  },
  challengeTitle: {
    ...theme.typography.headlineMd,
    color: theme.colors.onSurface,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  challengeDesc: {
    ...theme.typography.bodySm,
    color: theme.colors.onSurfaceVariant,
    marginBottom: 24,
  },
  progressSection: {
    marginBottom: 24,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressText: {
    ...theme.typography.labelMd,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  rankText: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurfaceVariant,
  },
  progressBarBg: {
    width: '100%',
    height: 10,
    backgroundColor: theme.colors.surfaceContainerHighest,
    borderRadius: theme.rounded.full,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: theme.rounded.full,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(187, 202, 191, 0.3)',
    paddingTop: 16,
  },
  avatarGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ccc',
    borderWidth: 2,
    borderColor: theme.colors.surfaceContainerLowest,
  },
  avatarMore: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.surfaceContainerHigh,
    borderWidth: 2,
    borderColor: theme.colors.surfaceContainerLowest,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarMoreText: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurfaceVariant,
  },
  viewDetailsText: {
    ...theme.typography.labelMd,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: theme.colors.surfaceContainerLow,
    borderRadius: theme.rounded.md,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.2)',
  },
  rankIndicator: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 6,
    borderTopLeftRadius: theme.rounded.md,
    borderBottomLeftRadius: theme.rounded.md,
  },
  rankNumber: {
    ...theme.typography.headlineMd,
    width: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.colors.onSurfaceVariant,
  },
  lbAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
  },
  lbName: {
    ...theme.typography.bodyMd,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
  },
  lbStreak: {
    ...theme.typography.bodySm,
    color: theme.colors.onSurfaceVariant,
  },
  lbScore: {
    ...theme.typography.headlineMd,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
  },
  lbScoreLabel: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurfaceVariant,
    textTransform: 'uppercase',
  },
});
