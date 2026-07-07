import { apiClient } from '../../../api/client';
import { Habit, CreateHabitRequest } from '../types';

export const fetchHabits = async (): Promise<Habit[]> => {
  const response = await apiClient.get<Habit[]>('/v1/habits');
  return response.data;
};

export const createHabit = async (data: CreateHabitRequest): Promise<any> => {
  const response = await apiClient.post('/v1/habits', data);
  return response.data;
};
