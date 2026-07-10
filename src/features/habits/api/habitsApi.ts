import { apiClient } from '../../../api/client';
import { Habit, CreateHabitRequest, UpdateHabitRequest } from '../types';

export const fetchHabits = async (): Promise<Habit[]> => {
  const response = await apiClient.get<Habit[]>('/v1/habits');
  return response.data;
};

export const createHabit = async (data: CreateHabitRequest): Promise<any> => {
  const response = await apiClient.post('/v1/habits', data);
  return response.data;
};

export const getHabit = async (id: string): Promise<Habit> => {
  const response = await apiClient.get<Habit>(`/v1/habits/${id}`);
  return response.data;
};

export const updateHabit = async (id: string, data: UpdateHabitRequest): Promise<Habit> => {
  const response = await apiClient.put<Habit>(`/v1/habits/${id}`, data);
  return response.data;
};

export const deleteHabit = async (id: string): Promise<string> => {
  const response = await apiClient.delete<string>(`/v1/habits/${id}`);
  return response.data;
};
