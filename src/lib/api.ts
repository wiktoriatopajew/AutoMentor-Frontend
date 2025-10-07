// API helper functions for Railway deployment

// Get API URL from environment variable (for Railway deployment)
const API_URL = import.meta.env.VITE_API_URL || '';

export function getApiUrl(path: string): string {
  // If path already starts with http, use it as-is
  if (path.startsWith('http')) {
    return path;
  }
  
  // If we have API_URL, use it
  if (API_URL) {
    return `${API_URL}${path}`;
  }
  
  // Fallback to relative path (for local development)
  return path;
}

// Enhanced fetch that automatically uses correct API URL
export async function apiFetch(path: string, options?: RequestInit): Promise<Response> {
  const url = getApiUrl(path);
  return fetch(url, {
    credentials: "include",
    ...options,
  });
}
