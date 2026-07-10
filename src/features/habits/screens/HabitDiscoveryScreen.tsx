import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../../theme';
import { TopAppBar } from '../../../components/TopAppBar';

const FILTERS = [
  { id: 'all', label: 'All', icon: 'check', active: true },
  { id: 'morning', label: 'Morning', icon: 'wb-sunny', active: false },
  { id: 'evening', label: 'Evening', icon: 'bedtime', active: false },
  { id: 'fitness', label: 'Fitness', icon: 'fitness-center', active: false },
  { id: 'focus', label: 'Focus', icon: 'psychology', active: false },
];

export const HabitDiscoveryScreen = () => {
  return (
    <View style={styles.container}>
      <TopAppBar title="Discover" showProfile={false} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Search & Filter Section */}
        <View style={styles.section}>
          <Text style={styles.pageTitle}>Discover New Habits</Text>
          
          <View style={styles.searchContainer}>
            <MaterialIcons name="search" size={24} color={theme.colors.outline} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search habits, routines, or goals..."
              placeholderTextColor={theme.colors.outline}
            />
            <TouchableOpacity style={styles.filterBtn}>
              <MaterialIcons name="tune" size={20} color={theme.colors.primary} />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterStrip}>
            {FILTERS.map(f => (
              <TouchableOpacity key={f.id} style={[styles.filterChip, f.active && styles.filterChipActive]}>
                <MaterialIcons 
                  name={f.icon as any} 
                  size={16} 
                  color={f.active ? theme.colors.onPrimary : theme.colors.onSurface} 
                />
                <Text style={[styles.filterText, f.active && styles.filterTextActive]}>{f.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Curated Collections */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Curated Collections</Text>
            <TouchableOpacity style={styles.seeAllBtn}>
              <Text style={styles.seeAllText}>See All</Text>
              <MaterialIcons name="arrow-forward" size={16} color={theme.colors.primary} />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.collectionsStrip}>
            {/* Card 1 */}
            <ImageBackground
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEOrnDXhzYHNxCcUGxJGn6jSCkpotG1F3LJl6xini3BB6rJ81oe-JuBFCX1pKcw4kY9BHU_1SKSPzEZjJLzFuuXuMFN5My2gGBECXhZ9auvElMqy8ToQYbJUAI3tqkkIceng1GDj7pu8A6PcmsERZyKbwnKuxWAbGi2LRHZQaq3WNctCRUXuP9FqoLpuePONty7AIm4B_u5jpsw9qZj0_SYWKVKPP5u4ihpKu8YFESopiSu1AJTv9hMQCqg5UHcOa-wtjPJrrmYbyY' }}
              style={styles.collectionCard}
              imageStyle={styles.collectionImage}
            >
              <View style={styles.collectionOverlay}>
                <View style={styles.collectionBadge}>
                  <Text style={styles.collectionBadgeText}>PRODUCTIVITY</Text>
                </View>
                <View>
                  <Text style={styles.collectionTitle}>Scientifically Proven Focus Habits</Text>
                  <Text style={styles.collectionSubtitle}>6 habits • Backed by research</Text>
                </View>
              </View>
            </ImageBackground>

            {/* Card 2 */}
            <ImageBackground
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsIv6cKMCyQ5qr-dDtAsXRwzQJRMGnNlW_hDcWsQQGliez2X2a2hfO2GNZO4BNv4i1b7zDq_lCa5oOiasSYe8qigyF_nCqfn_vDbxuKoTdiY713FmpVW3gBowc5AfEa_xTrwSvuZA1U_FjVnqVJoIJe1Hq6yHEoMHOn34rvk32gnvp8T-zf9DyV1x3C5GmbPLwuxFGmkWxnQ1VW0Vuj8Xj96rq1ElZtBMI2TsJ6LaAPIdqA1gNBTF2fu9bgHzx4APy9OhasPnclwdE' }}
              style={styles.collectionCard}
              imageStyle={styles.collectionImage}
            >
              <View style={styles.collectionOverlay}>
                <View style={styles.collectionBadge}>
                  <Text style={styles.collectionBadgeText}>WELLNESS</Text>
                </View>
                <View>
                  <Text style={styles.collectionTitle}>The Perfect Morning Routine</Text>
                  <Text style={styles.collectionSubtitle}>4 habits • Start strong</Text>
                </View>
              </View>
            </ImageBackground>
          </ScrollView>
        </View>

        {/* Popular Templates */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Templates</Text>
          <View style={styles.templatesContainer}>
            {/* Template Card 1 */}
            <TouchableOpacity style={styles.templateCard}>
              <View style={styles.templateIconBox}>
                <MaterialIcons name="local-drink" size={32} color={theme.colors.primary} />
              </View>
              <View style={styles.templateContent}>
                <Text style={styles.templateCategory}>Health & Fitness</Text>
                <Text style={styles.templateTitle}>Hydration Tracking</Text>
                <Text style={styles.templateDesc}>Drink 2L of water daily</Text>
              </View>
              <MaterialIcons name="add-circle-outline" size={28} color={theme.colors.primary} />
            </TouchableOpacity>

            {/* Template Card 2 */}
            <TouchableOpacity style={styles.templateCard}>
              <View style={styles.templateIconBox}>
                <MaterialIcons name="menu-book" size={32} color={theme.colors.secondary} />
              </View>
              <View style={styles.templateContent}>
                <Text style={[styles.templateCategory, { color: theme.colors.secondary }]}>Learning</Text>
                <Text style={styles.templateTitle}>Read 20 Pages</Text>
                <Text style={styles.templateDesc}>Daily reading habit</Text>
              </View>
              <MaterialIcons name="add-circle-outline" size={28} color={theme.colors.secondary} />
            </TouchableOpacity>
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
  pageTitle: {
    ...theme.typography.headlineLgMobile,
    color: theme.colors.onSurface,
    marginBottom: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surfaceContainer,
    borderRadius: theme.rounded.full,
    paddingHorizontal: 16,
    height: 56,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    ...theme.typography.bodyMd,
    color: theme.colors.onSurface,
  },
  filterBtn: {
    padding: 8,
  },
  filterStrip: {
    gap: 12,
    marginTop: 24,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: theme.rounded.full,
    backgroundColor: theme.colors.surfaceContainer,
    borderWidth: 1,
    borderColor: 'transparent',
    gap: 8,
  },
  filterChipActive: {
    backgroundColor: theme.colors.primary,
  },
  filterText: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurface,
  },
  filterTextActive: {
    color: theme.colors.onPrimary,
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
  seeAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  seeAllText: {
    ...theme.typography.labelMd,
    color: theme.colors.primary,
  },
  collectionsStrip: {
    gap: 16,
    paddingRight: 16, // to ensure full scrolling space
  },
  collectionCard: {
    width: 280,
    height: 180,
    borderRadius: theme.rounded.lg,
  },
  collectionImage: {
    borderRadius: theme.rounded.lg,
  },
  collectionOverlay: {
    flex: 1,
    backgroundColor: 'rgba(33, 49, 69, 0.5)', // inverse-surface overlay
    borderRadius: theme.rounded.lg,
    padding: 20,
    justifyContent: 'space-between',
  },
  collectionBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: theme.rounded.sm,
  },
  collectionBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
  },
  collectionTitle: {
    ...theme.typography.headlineMd,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  collectionSubtitle: {
    ...theme.typography.bodySm,
    color: 'rgba(255,255,255,0.8)',
  },
  templatesContainer: {
    marginTop: 16,
    gap: 16,
  },
  templateCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.2)',
    ...theme.elevation.level1,
  },
  templateIconBox: {
    width: 64,
    height: 64,
    borderRadius: theme.rounded.md,
    backgroundColor: theme.colors.surfaceContainer,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  templateContent: {
    flex: 1,
  },
  templateCategory: {
    ...theme.typography.labelMd,
    color: theme.colors.primary,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  templateTitle: {
    ...theme.typography.bodyLg,
    color: theme.colors.onSurface,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  templateDesc: {
    ...theme.typography.bodySm,
    color: theme.colors.onSurfaceVariant,
  },
});
