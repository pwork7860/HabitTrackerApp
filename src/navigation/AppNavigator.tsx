import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HabitsListScreen } from '../features/habits/screens/HabitsListScreen';
import { CreateHabitScreen } from '../features/habits/screens/CreateHabitScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="HabitsList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0066cc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="HabitsList" 
          component={HabitsListScreen} 
          options={{ title: 'My Habits' }} 
        />
        <Stack.Screen 
          name="CreateHabit" 
          component={CreateHabitScreen} 
          options={{ title: 'New Habit', presentation: 'modal' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
