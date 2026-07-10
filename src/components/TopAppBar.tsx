import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { theme } from '../theme';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface TopAppBarProps {
  title?: string;
  showProfile?: boolean;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({ title = 'HabitForge', showProfile = true }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.leftContent}>
        {showProfile && (
          <View style={styles.profileContainer}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvLMHPDsu-A-ecZ6r89FihYrdM7phblGIR1wtZtKFMMwkSqcbFbDqK3eobBrAQuVvOrRCLSfOW2ifC6jF1Bod6Nnr8lXcdss2AUGLQ5R8JyAGDQ_vh7jRXFtxobFsx9n8j9JgkvbKvH2cK6sjkS2i_pUUhTqnudmoJ-aT9EFpFaq_6c1Elh8AXDiQqrQ0IOd5CkI3x6cfrUmerpM5srdcGwRzeLFwsvUipApqzgv6mQFJ708sixjD7myMwIpLjxsDI3c9zwPfbhfjg' }} 
              style={styles.profileImage} 
            />
          </View>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.settingsButton}>
        <MaterialIcons name="settings" size={28} color={theme.colors.onSurfaceVariant} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.containerPaddingMobile,
    paddingBottom: 16,
    backgroundColor: theme.colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(187, 202, 191, 0.2)', // outline-variant/20
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: theme.rounded.full,
    overflow: 'hidden',
    backgroundColor: theme.colors.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: 'rgba(187, 202, 191, 0.3)',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    ...theme.typography.headlineMd,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  settingsButton: {
    padding: 4,
  },
});
