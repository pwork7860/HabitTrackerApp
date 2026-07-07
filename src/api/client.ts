import axios from 'axios';
import { Platform } from 'react-native';

// Use Render live URL for backend
const baseURL = 'https://habittracker-bdud.onrender.com';

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
