// src/services/tursoService.ts
import axios from 'axios';

const API_URL = process.env.TURSO_API_URL; // API URL from Turso DB
const API_KEY = process.env.TURSO_API_KEY; // API Key or other authentication

const connectToDatabase = async () => {
  try {
    const response = await axios.get(`${API_URL}/test-connection`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });
    console.log('Database connected successfully:', response.data);
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
};

export default connectToDatabase; // Export as default
