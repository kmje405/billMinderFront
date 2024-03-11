import axios from 'axios';


// Create an Axios instance with default configuration
const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // Additional default configurations can be added here
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000, // Optional: Set default request timeout
});

console.log(client)

export default client;