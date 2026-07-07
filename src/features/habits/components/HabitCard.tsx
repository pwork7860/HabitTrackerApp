import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Habit } from '../types';

interface HabitCardProps {
  habit: Habit;
}

export const HabitCard: React.FC<HabitCardProps> = ({ habit }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{habit.name}</Text>
      <Text style={styles.frequency}>Frequency: {habit.frequency}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  frequency: {
    fontSize: 14,
    color: '#666666',
  },
});
