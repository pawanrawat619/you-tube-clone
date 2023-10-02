import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "134f783865msh37ea4444e1a4490p11c66bjsn334e127c7e6b",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);
  const data = response.data;

  return data;
};

// e540ef82ddmsh3e80f21ba7ff958p1e2edejsnd294b1ca22cc;
