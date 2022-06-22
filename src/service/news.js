import axios from '../utils/axios'

export function getEntertainmentNews() {
  return axios.get('/');
}

export function getAcademicNews() {
  return axios.get('/');
}

