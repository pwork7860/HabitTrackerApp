import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createHabit } from '../api/habitsApi';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  HabitsList: undefined;
  CreateHabit: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'CreateHabit'>;

interface Props {
  navigation: NavigationProp;
}

export const CreateHabitScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('');
  
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createHabit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['habits'] });
      navigation.goBack();
    },
    onError: (error) => {
      Alert.alert('Error', 'Failed to create habit');
      console.error(error);
    },
  });

  const handleSubmit = () => {
    if (!name.trim() || !frequency.trim()) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }
    mutation.mutate({ name, frequency });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Habit Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Read a book"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Frequency</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Daily"
        value={frequency}
        onChangeText={setFrequency}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>Create Habit</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 32,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
