import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../../theme';
import { TopAppBar } from '../../../components/TopAppBar';
import { CustomButton } from '../../../components/CustomButton';

export const RewardsStoreScreen = () => {
  return (
    <View style={styles.container}>
      <TopAppBar title="Rewards Store" showProfile={false} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Status Dashboard */}
        <View style={styles.statusCard}>
          <View style={styles.statusInfo}>
            <View style={styles.statusBadge}>
              <MaterialIcons name="stars" size={16} color={theme.colors.tertiaryContainer} />
              <Text style={styles.statusBadgeText}>STATUS: GOLD TIER</Text>
            </View>
            <Text style={styles.statusTitle}>Your Forge Points</Text>
            <Text style={styles.statusDesc}>
              Consistently building habits earns you points. Use them to unlock exclusive themes, badges, and companions.
            </Text>
            <TouchableOpacity style={styles.howToEarnBtn}>
              <Text style={styles.howToEarnText}>How to earn more</Text>
              <MaterialIcons name="arrow-forward" size={16} color={theme.colors.secondary} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.pointsBox}>
            <MaterialIcons name="stars" size={48} color={theme.colors.tertiaryContainer} style={{ marginBottom: 8 }} />
            <Text style={styles.pointsValue}>1,250</Text>
            <Text style={styles.pointsLabel}>FP AVAILABLE</Text>
          </View>
        </View>

        {/* Categories Section - Themes */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>App Themes</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.itemsStrip}>
            {/* Item 1 */}
            <View style={styles.itemCard}>
              <View style={[styles.itemImagePlaceholder, { backgroundColor: '#1A1A24' }]}>
                <MaterialIcons name="dark-mode" size={32} color="#fff" />
              </View>
              <Text style={styles.itemTitle}>Midnight Obsidian</Text>
              <Text style={styles.itemDesc}>Deep dark mode</Text>
              <View style={styles.itemFooter}>
                <View style={styles.priceTag}>
                  <MaterialIcons name="stars" size={14} color={theme.colors.tertiaryContainer} />
                  <Text style={styles.priceText}>500</Text>
                </View>
                <TouchableOpacity style={styles.buyBtn}>
                  <Text style={styles.buyBtnText}>Unlock</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Item 2 */}
            <View style={styles.itemCard}>
              <View style={[styles.itemImagePlaceholder, { backgroundColor: '#F0E6D2' }]}>
                <MaterialIcons name="light-mode" size={32} color="#A08B6B" />
              </View>
              <Text style={styles.itemTitle}>Desert Sand</Text>
              <Text style={styles.itemDesc}>Warm aesthetic</Text>
              <View style={styles.itemFooter}>
                <View style={styles.priceTag}>
                  <MaterialIcons name="stars" size={14} color={theme.colors.tertiaryContainer} />
                  <Text style={styles.priceText}>300</Text>
                </View>
                <TouchableOpacity style={styles.buyBtn}>
                  <Text style={styles.buyBtnText}>Unlock</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Profile Badges */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile Badges</Text>
          <View style={styles.badgesContainer}>
            {/* Badge 1 */}
            <View style={styles.badgeItem}>
              <View style={[styles.badgeIcon, { backgroundColor: `${theme.colors.primaryContainer}33` }]}>
                <MaterialIcons name="local-fire-department" size={24} color={theme.colors.primary} />
              </View>
              <View style={styles.badgeInfo}>
                <Text style={styles.badgeTitle}>365 Day Streak</Text>
                <View style={styles.priceTag}>
                  <MaterialIcons name="stars" size={14} color={theme.colors.tertiaryContainer} />
                  <Text style={styles.priceText}>1000</Text>
                </View>
              </View>
              <CustomButton title="Unlock" variant="secondary" onPress={() => {}} style={styles.smallBtn} textStyle={styles.smallBtnText} />
            </View>

            {/* Badge 2 */}
            <View style={styles.badgeItem}>
              <View style={[styles.badgeIcon, { backgroundColor: `${theme.colors.secondary}1A` }]}>
                <MaterialIcons name="emoji-events" size={24} color={theme.colors.secondary} />
              </View>
              <View style={styles.badgeInfo}>
                <Text style={styles.badgeTitle}>Challenge Champion</Text>
                <View style={styles.priceTag}>
                  <MaterialIcons name="stars" size={14} color={theme.colors.tertiaryContainer} />
                  <Text style={styles.priceText}>750</Text>
                </View>
              </View>
              <CustomButton title="Unlock" variant="secondary" onPress={() => {}} style={styles.smallBtn} textStyle={styles.smallBtnText} />
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
  statusCard: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.3)',
    marginBottom: theme.spacing.sectionGap,
    ...theme.elevation.level1,
  },
  statusInfo: {
    marginBottom: 24,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surfaceContainerHigh,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: theme.rounded.full,
    gap: 4,
    marginBottom: 16,
  },
  statusBadgeText: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurfaceVariant,
  },
  statusTitle: {
    ...theme.typography.headlineLgMobile,
    color: theme.colors.onSurface,
    marginBottom: 8,
  },
  statusDesc: {
    ...theme.typography.bodyMd,
    color: theme.colors.onSurfaceVariant,
    marginBottom: 16,
  },
  howToEarnBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  howToEarnText: {
    ...theme.typography.labelMd,
    color: theme.colors.secondary,
    fontWeight: 'bold',
  },
  pointsBox: {
    backgroundColor: `${theme.colors.primaryContainer}1A`,
    borderRadius: theme.rounded.md,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.2)',
  },
  pointsValue: {
    ...theme.typography.headlineLgMobile,
    color: theme.colors.onSurface,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  pointsLabel: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurfaceVariant,
  },
  section: {
    marginBottom: theme.spacing.sectionGap,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    ...theme.typography.headlineMd,
    color: theme.colors.onSurface,
    fontWeight: 'bold',
  },
  viewAllText: {
    ...theme.typography.labelMd,
    color: theme.colors.secondary,
  },
  itemsStrip: {
    gap: 16,
  },
  itemCard: {
    width: 200,
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.md,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.3)',
  },
  itemImagePlaceholder: {
    height: 120,
    borderRadius: theme.rounded.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  itemTitle: {
    ...theme.typography.bodyMd,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
  },
  itemDesc: {
    ...theme.typography.bodySm,
    color: theme.colors.onSurfaceVariant,
    marginBottom: 12,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  priceTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  priceText: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurface,
    fontWeight: 'bold',
  },
  buyBtn: {
    backgroundColor: `${theme.colors.primary}1A`,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: theme.rounded.full,
  },
  buyBtnText: {
    ...theme.typography.labelMd,
    color: theme.colors.primary,
  },
  badgesContainer: {
    gap: 12,
  },
  badgeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.md,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.2)',
  },
  badgeIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  badgeInfo: {
    flex: 1,
  },
  badgeTitle: {
    ...theme.typography.bodyMd,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    marginBottom: 4,
  },
  smallBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderBottomWidth: 1,
  },
  smallBtnText: {
    fontSize: 12,
  },
});
