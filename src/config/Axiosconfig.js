import axios from 'axios';

const Axiosconfig = axios.create({
  baseURL: 'https://mz15q3zq-3000.usw3.devtunnels.ms/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default Axiosconfig;
