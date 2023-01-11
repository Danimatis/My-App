import axios from "axios";
import config from "../config.json";
axios.defaults.baseURL = config.apiUrl;

export const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};

export function setCommonHeader(headerName, value) {
  axios.defaults.headers.common[headerName] = value;
}
export default httpService;
