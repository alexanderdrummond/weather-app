const GOOGLE_API_KEY = import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY;

export async function getPlaceSuggestions(input) {
    const response = await fetch(
      `/api/maps/api/place/autocomplete/json?input=${input}&types=(cities)&key=${GOOGLE_API_KEY}`
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch place suggestions');
    }
  
    const data = await response.json();
    return data.predictions;
  }