import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = 'm65ndF3IYl30TtHqwAa_2zxVBk9EVDDctDHqfKVuPhQ';

export const fetchArt = async query => {
  const response = await axios.get(`${BASE_URL}?client_id=${API_KEY}&query=${query}&per_page=3`);

  return response.data.results;
};
// const response = await axios.get(`${BASE_URL}?query=${query}&page=${page}&per_page=20&client_id=${API_KEY}`);
// query, page;
