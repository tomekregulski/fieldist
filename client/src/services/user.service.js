import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8081/api/users';

class UserService {
  getPublicContent() {
    console.log(API_URL, { headers: authHeader() });
    return axios.get(API_URL, { headers: authHeader() });
  }

  getRepBoard() {
    return axios.get(API_URL + 'rep', { headers: authHeader() });
  }

  getContactBoard() {
    return axios.get(API_URL + 'contact', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();