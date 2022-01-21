import axios from "axios";

export function requestEmployees() {
  return axios.request({
    method: 'get',
    url: 'https://6164f6e709a29d0017c88ed9.mockapi.io/fetest/employees'
  })
}