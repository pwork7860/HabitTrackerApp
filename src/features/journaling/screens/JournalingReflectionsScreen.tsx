import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../../theme';
import { TopAppBar } from '../../../components/TopAppBar';
import { CustomButton } from '../../../components/CustomButton';

export const JournalingReflectionsScreen = () => {
  const [reflection, setReflection] = useState('');
  const [mood, setMood] = useState<string | null>('satisfied');

  return (
    <View style={styles.container}>
      <TopAppBar title="Journal" showProfile={false} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Page Header */}
        <View style={styles.headerSection}>
          <Text style={styles.pageTitle}>Daily Journal</Text>
          <Text style={styles.pageSubtitle}>Reflect on your progress and capture your thoughts.</Text>
        </View>

        {/* New Entry Card */}
        <View style={styles.card}>
          <View style={styles.dateMoodRow}>
            <View style={styles.dateContainer}>
              <MaterialIcons name="calendar-month" size={20} color={theme.colors.primary} />
              <Text style={styles.dateText}>OCTOBER 24, 2023</Text>
            </View>
            <View style={styles.moodContainer}>
              <Text style={styles.moodLabel}>HOW ARE YOU FEELING?</Text>
              <View style={styles.moodSelector}>
                {['sentiment-very-dissatisfied', 'sentiment-neutral', 'sentiment-satisfied', 'sentiment-very-satisfied'].map(icon => (
                  <TouchableOpacity 
                    key={icon}
                    style={[styles.moodBtn, mood === icon && styles.moodBtnActive]}
                    onPress={() => setMood(icon)}
                  >
                    <MaterialIcons 
                      name={icon as any} 
                      size={24} 
                      color={mood === icon ? theme.colors.onPrimary : theme.colors.onSurfaceVariant} 
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* Prompt */}
          <View style={styles.promptBox}>
            <MaterialIcons name="lightbulb" size={24} color={theme.colors.secondary} style={{ marginTop: 2 }} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.promptLabel}>REFLECTION OF THE DAY</Text>
              <Text style={styles.promptText}>What was your biggest win today, no matter how small?</Text>
            </View>
          </View>

          {/* Text Area */}
          <TextInput
            style={styles.textArea}
            multiline
            textAlignVertical="top"
            placeholder="Start typing your reflection here..."
            placeholderTextColor={theme.colors.outline}
            value={reflection}
            onChangeText={setReflection}
          />

          {/* Actions */}
          <View style={styles.actionRow}>
            <View style={styles.tagsContainer}>
              <MaterialIcons name="local-offer" size={16} color={theme.colors.onSurfaceVariant} style={{ marginRight: 4 }} />
              <View style={styles.tagBadge}>
                <Text style={styles.tagText}>Morning Routine</Text>
              </View>
              <TouchableOpacity style={styles.addTagBtn}>
                <MaterialIcons name="add" size={16} color={theme.colors.onSurfaceVariant} />
                <Text style={styles.addTagText}>Add Tag</Text>
              </TouchableOpacity>
            </View>
            <CustomButton 
              title="Save Entry" 
              icon="check" 
              onPress={() => {}} 
              style={{ marginTop: 16 }}
            />
          </View>
        </View>

        {/* Recent Entries */}
        <View style={styles.recentSection}>
          <View style={styles.recentHeader}>
            <Text style={styles.recentTitle}>Recent Entries</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.timeline}>
            {/* Entry 1 */}
            <View style={styles.timelineItem}>
              <View style={[styles.timelineDot, { backgroundColor: theme.colors.primary }]} />
              <View style={styles.timelineContent}>
                <View style={styles.timelineItemHeader}>
                  <Text style={styles.timelineDate}>YESTERDAY</Text>
                  <MaterialIcons name="sentiment-very-satisfied" size={20} color={theme.colors.secondary} />
                </View>
                <View style={styles.entryCard}>
                  <Text style={styles.entryTitle}>Crushed the morning run!</Text>
                  <Text style={styles.entryDesc} numberOfLines={2}>
                    Woke up early and finally managed to run the full 5k without stopping. The air was crisp and it set a great tone for the day...
                  </Text>
                  <View style={styles.entryTag}>
                    <Text style={styles.entryTagText}>FITNESS</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Entry 2 */}
            <View style={styles.timelineItem}>
              <View style={[styles.timelineDot, { backgroundColor: theme.colors.outlineVariant }]} />
              <View style={styles.timelineContent}>
                <View style={styles.timelineItemHeader}>
                  <Text style={styles.timelineDate}>OCT 22, 2023</Text>
                  <MaterialIcons name="sentiment-neutral" size={20} color={theme.colors.onSurfaceVariant} />
                </View>
                <View style={styles.entryCard}>
                  <Text style={styles.entryTitle}>Missed meditation, but that's okay.</Text>
                  <Text style={styles.entryDesc} numberOfLines={2}>
                    Things got really hectic at work this morning and I completely skipped my meditation block. Feeling a bit scattered but trying not to beat myself up.
                  </Text>
                  <View style={styles.entryTag}>
                    <Text style={styles.entryTagText}>MINDFULNESS</Text>
                  </View>
                </View>
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
  headerSection: {
    marginBottom: theme.spacing.sectionGap,
  },
  pageTitle: {
    ...theme.typography.headlineLgMobile,
    color: theme.colors.onSurface,
    marginBottom: 8,
  },
  pageSubtitle: {
    ...theme.typography.bodyMd,
    color: theme.colors.onSurfaceVariant,
  },
  card: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.lg,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.2)',
    marginBottom: theme.spacing.sectionGap,
    ...theme.elevation.level1,
  },
  dateMoodRow: {
    flexDirection: 'column',
    gap: 16,
    marginBottom: 24,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dateText: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurface,
  },
  moodContainer: {
    alignItems: 'flex-start',
  },
  moodLabel: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurfaceVariant,
    marginBottom: 8,
  },
  moodSelector: {
    flexDirection: 'row',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.rounded.full,
    padding: 4,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.3)',
    gap: 4,
  },
  moodBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moodBtnActive: {
    backgroundColor: theme.colors.primary,
    ...theme.elevation.level1,
  },
  promptBox: {
    flexDirection: 'row',
    backgroundColor: theme.colors.surfaceContainerLow,
    borderRadius: theme.rounded.md,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.2)',
  },
  promptLabel: {
    ...theme.typography.labelMd,
    color: theme.colors.secondary,
    marginBottom: 6,
  },
  promptText: {
    ...theme.typography.bodyMd,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
  },
  textArea: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.4)',
    borderRadius: theme.rounded.md,
    padding: 16,
    height: 200,
    ...theme.typography.bodyLg,
    color: theme.colors.onSurface,
    marginBottom: 24,
  },
  actionRow: {
    flexDirection: 'column',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
  },
  tagBadge: {
    backgroundColor: theme.colors.surfaceContainer,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: theme.rounded.full,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.3)',
  },
  tagText: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurfaceVariant,
  },
  addTagBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: theme.rounded.full,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderStyle: 'dashed',
    gap: 4,
  },
  addTagText: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurfaceVariant,
  },
  recentSection: {
    marginTop: 16,
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  recentTitle: {
    ...theme.typography.headlineMd,
    color: theme.colors.onSurface,
  },
  viewAllText: {
    ...theme.typography.labelMd,
    color: theme.colors.secondary,
  },
  timeline: {
    paddingLeft: 16,
    borderLeftWidth: 2,
    borderLeftColor: theme.colors.surfaceVariant,
    marginLeft: 8,
  },
  timelineItem: {
    marginBottom: 24,
    position: 'relative',
  },
  timelineDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    position: 'absolute',
    left: -24, // -16 (padding) - 8 (half width)
    top: 4,
    borderWidth: 4,
    borderColor: theme.colors.surfaceContainerLowest,
  },
  timelineContent: {
    flex: 1,
  },
  timelineItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  timelineDate: {
    ...theme.typography.labelMd,
    color: theme.colors.onSurfaceVariant,
  },
  entryCard: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderRadius: theme.rounded.md,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.2)',
    ...theme.elevation.level1,
  },
  entryTitle: {
    ...theme.typography.bodyMd,
    fontWeight: 'bold',
    color: theme.colors.onSurface,
    marginBottom: 8,
  },
  entryDesc: {
    ...theme.typography.bodySm,
    color: theme.colors.onSurfaceVariant,
    marginBottom: 16,
  },
  entryTag: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.surfaceContainer,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.2)',
  },
  entryTagText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: theme.colors.onSurfaceVariant,
    letterSpacing: 1,
  },
});
