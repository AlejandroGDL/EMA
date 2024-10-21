import axios from 'axios';

const Axiosconfig = axios.create({
  baseURL: 'https://emabackend.onrender.com/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default Axiosconfig;
