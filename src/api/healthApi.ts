import { apiClient } from './client';
import { HealthCheckResponse } from '../features/habits/types';

export const checkHealth = async (): Promise<HealthCheckResponse> => {
  const response = await apiClient.get<HealthCheckResponse>('/');
  return response.data;
};
