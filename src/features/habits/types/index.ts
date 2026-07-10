export interface Habit {
  id: string;
  name: string;
  frequency: string;
}

export interface CreateHabitRequest {
  name: string;
  frequency: string;
}

export interface UpdateHabitRequest {
  name: string;
  frequency: string;
}

export interface HealthCheckResponse {
  status?: string;
  message?: string;
}
