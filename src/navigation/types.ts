export type RootStackParamList = {
  MainTabs: undefined;
  HabitDetails: { habitId: string };
  HabitDiscovery: undefined;
  RewardsStore: undefined;
  CreateHabit: undefined;
  UpdateHabit: { habitId: string; name: string; frequency: string };
};
