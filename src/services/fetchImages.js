import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = import.meta.env.VITE__PHOTO_API_KEY;
export default async function fetchImages(searchQuery, page) {
  const url = `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(url);
  return response;
}
