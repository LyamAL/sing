import axios from '../utils/axios'

export function getProjects() {
  return axios.get('/getProjects');
}

