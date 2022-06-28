import axios from '../utils/axios'

export function getGroupApplications() {
  return axios.get('/getGroupApps');
}

export function getIndividualApplications() {
  return axios.get('/getIndividualApps');
}

