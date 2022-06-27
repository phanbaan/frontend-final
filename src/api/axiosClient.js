import axios from 'axios';


const getToken  = async() =>{
  const token =  JSON.parse(localStorage.getItem("jwt"));
  if(!token)  return null;
  return token;
}
const axiosClient = axios.create({
  baseURL: "https://localhost:7242/api/",
  headers: {
    'content-type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const token  = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }

  return response;
}, (error) => {
  throw error;
});

export default axiosClient;