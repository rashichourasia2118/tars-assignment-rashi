
const ACCESS_KEY = '44o2LetFI7O2KX_ncPKUwplEqThRLjuQknJbCrxLjSs';

const fetchPhotos = async (query) => {
  const response = await fetch(`https://api.unsplash.com/photos/?query=${query}&client_id=${ACCESS_KEY}&per_page=20`);
  const data = await response.json();
  return data;
};

const searchPhotos = async (query) => {
  const response = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&client_id=${ACCESS_KEY}&per_page=20`);
  const data = await response.json();
  return data.results;
};

export { fetchPhotos, searchPhotos };
