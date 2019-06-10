import axios from 'axios';

const sockets = axios.create({ baseURL: 'http://localhost:80' });

export default sockets;
