import axios from '../utils/axios'

export function getGroupApplications() {
  return axios.get('/');
}

export function getIndividualApplications() {
  return axios.get('/');
}

