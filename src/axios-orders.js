import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://learn-react-burger-f258a.firebaseio.com/',
});

export default instance;