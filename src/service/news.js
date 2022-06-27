import axios from '../utils/axios'

export function getEntertainmentNews() {
  return axios.get('/getEntertainNews');
}

export function getAcademicNews() {
  return axios.get('/getAcademicNews');
}

