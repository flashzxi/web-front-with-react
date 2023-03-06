import axios from 'axios'

const baseURL = "http://flashzxi.cn/"

export default axios.create({
  baseURL: baseURL,
});