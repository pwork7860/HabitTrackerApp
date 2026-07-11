import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { updateHabit } from '../api/habitsApi';
import { RootStackParamList } from '../../../navigation/types';
import { theme } from '../../../theme';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'UpdateHabit'>;
type RouteProps = RouteProp<RootStackParamList, 'UpdateHabit'>;

interface Props {
  navigation: NavigationProp;
  route: RouteProps;
}

const FREQUENCY_OPTIONS = ['Daily', 'Weekly', '3x per week', 'Weekdays', 'Weekends'];

export const UpdateHabitScreen: React.FC<Props> = ({ navigation, route }) => {
  const { habitId, name: initialName, frequency: initialFrequency } = route.params;
  const [name, setName] = useState(initialName);
  const [frequency, setFrequency] = useState(initialFrequency);

  const insets = useSafeAreaInsets();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => updateHabit(habitId, { name, frequency }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['habits'] });
      queryClient.invalidateQueries({ queryKey: ['habit', habitId] });
      navigation.goBack();
    },
    onError: (error) => {
      Alert.alert('Error', 'Failed to update habit. Please try again.');
      console.error(error);
    },
  });

  const handleSubmit = () => {
    if (!name.trim()) {
      Alert.alert('Validation Error', 'Habit name cannot be empty.');
      return;
    }
    if (!frequency.trim()) {
      Alert.alert('Validation Error', 'Please select or enter a frequency.');
      return;
    }
    mutation.mutate();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={[styles.container, { paddingTop: insets.top }]}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color={theme.colors.onBackground} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Habit</Text>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView
          contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 24 }]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Icon Preview */}
          <View style={styles.iconPreview}>
            <View style={styles.iconBox}>
              <MaterialIcons name="edit" size={40} color={theme.colors.primary} />
            </View>
            <Text style={styles.iconLabel}>Update your habit details below</Text>
          </View>

          {/* Name Field */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Habit Name</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons
                name="task-alt"
                size={20}
                color={theme.colors.primary}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="e.g., Morning Meditation"
                placeholderTextColor={theme.colors.outline}
                value={name}
                onChangeText={setName}
                returnKeyType="next"
              />
            </View>
          </View>

          {/* Frequency Quick Picks */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Frequency</Text>
            <View style={styles.frequencyChips}>
              {FREQUENCY_OPTIONS.map((opt) => (
                <TouchableOpacity
                  key={opt}
                  style={[
                    styles.chip,
                    frequency === opt && styles.chipSelected,
                  ]}
                  onPress={() => setFrequency(opt)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.chipText,
                      frequency === opt && styles.chipTextSelected,
                    ]}
                  >
                    {opt}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.inputWrapper}>
              <MaterialIcons
                name="repeat"
                size={20}
                color={theme.colors.primary}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Or type custom frequency…"
                placeholderTextColor={theme.colors.outline}
                value={frequency}
                onChangeText={setFrequency}
              />
            </View>
          </View>

          {/* Save Button */}
          <TouchableOpacity
            style={[styles.saveButton, mutation.isPending && styles.saveButtonDisabled]}
            onPress={handleSubmit}
            disabled={mutation.isPending}
            activeOpacity={0.85}
          >
            {mutation.isPending ? (
              <ActivityIndicator color={theme.colors.onPrimary} />
            ) : (
              <>
                <MaterialIcons name="check" size={20} color={theme.colors.onPrimary} style={{ marginRight: 8 }} />
                <Text style={styles.saveButtonText}>Save Changes</Text>
              </>
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
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
  scrollContent: {
    padding: theme.spacing.containerPaddingMobile,
  },
  iconPreview: {
    alignItems: 'center',
    marginVertical: 32,
  },
  iconBox: {
    width: 96,
    height: 96,
    borderRadius: theme.rounded.xl,
    backgroundColor: `${theme.colors.primary}15`,
    borderWidth: 2,
    borderColor: `${theme.colors.primary}30`,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  iconLabel: {
    ...theme.typography.bodySm,
    color: theme.colors.onSurfaceVariant,
  },
  fieldGroup: {
    marginBottom: 28,
  },
  label: {
    ...theme.typography.bodyMd,
    fontWeight: '600',
    color: theme.colors.onBackground,
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderWidth: 1.5,
    borderColor: 'rgba(187, 202, 191, 0.4)',
    borderRadius: theme.rounded.md,
    paddingHorizontal: 14,
    ...theme.elevation.level1,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 15,
    color: theme.colors.onBackground,
  },
  frequencyChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: theme.rounded.full,
    borderWidth: 1.5,
    borderColor: 'rgba(187, 202, 191, 0.4)',
    backgroundColor: theme.colors.surfaceContainerLowest,
  },
  chipSelected: {
    backgroundColor: `${theme.colors.primary}15`,
    borderColor: theme.colors.primary,
  },
  chipText: {
    fontSize: 13,
    color: theme.colors.onSurfaceVariant,
    fontWeight: '500',
  },
  chipTextSelected: {
    color: theme.colors.primary,
    fontWeight: '700',
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    padding: 18,
    borderRadius: theme.rounded.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    ...theme.elevation.level2,
  },
  saveButtonDisabled: {
    opacity: 0.6,
  },
  saveButtonText: {
    color: theme.colors.onPrimary,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
