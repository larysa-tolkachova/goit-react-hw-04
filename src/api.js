import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = 'm65ndF3IYl30TtHqwAa_2zxVBk9EVDDctDHqfKVuPhQ';

export const fetchArt = async (query, page) => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      client_id: API_KEY,
      query: query,
      page: page,
      per_page: 3,
    },
  });

  return response.data.results;
};
