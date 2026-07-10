import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../theme';

// Screens
import { DailyDashboardScreen } from '../features/dashboard/screens/DailyDashboardScreen';
import { ProgressAnalyticsScreen } from '../features/analytics/screens/ProgressAnalyticsScreen';
import { CommunityChallengesScreen } from '../features/community/screens/CommunityChallengesScreen';
import { HabitDetailsScreen } from '../features/habits/screens/HabitDetailsScreen';
import { HabitDiscoveryScreen } from '../features/habits/screens/HabitDiscoveryScreen';
import { JournalingReflectionsScreen } from '../features/journaling/screens/JournalingReflectionsScreen';
import { RewardsStoreScreen } from '../features/rewards/screens/RewardsStoreScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopWidth: 1,
          borderTopColor: 'rgba(187, 202, 191, 0.2)',
          elevation: 0,
          height: 80,
          paddingBottom: 24,
          paddingTop: 12,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
        tabBarLabelStyle: {
          ...theme.typography.labelMd,
          fontSize: 11,
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={DailyDashboardScreen} 
        options={{
          tabBarLabel: 'Today',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="check-circle" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Analytics" 
        component={ProgressAnalyticsScreen} 
        options={{
          tabBarLabel: 'Stats',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="leaderboard" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Community" 
        component={CommunityChallengesScreen} 
        options={{
          tabBarLabel: 'Social',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="groups" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Trends" 
        component={JournalingReflectionsScreen} // Placeholder for Trends, let's map it to Journaling or just use a dummy
        options={{
          tabBarLabel: 'Trends',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="show-chart" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="MainTabs"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background }
        }}
      >
        <Stack.Screen name="MainTabs" component={BottomTabs} />
        <Stack.Screen name="HabitDetails" component={HabitDetailsScreen} />
        <Stack.Screen name="HabitDiscovery" component={HabitDiscoveryScreen} />
        <Stack.Screen name="RewardsStore" component={RewardsStoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
