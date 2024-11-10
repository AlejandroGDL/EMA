import axios from 'axios';
import config from './Url';

const Axiosconfig = axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default Axiosconfig;
