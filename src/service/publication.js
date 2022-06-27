import axios from '../utils/axios'

export function getAllPapers() {
  return axios.get('/getPublications');
}

