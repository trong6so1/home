import config from "./config"
import _cloneDeep from "lodash/cloneDeep"

export default (key, action, data = {}) => {
  const params = {
    url: config[key].url,
    method: config[key][action].method,
    data: {
      ...config[key][action].data,
      ...data,
    },
  }
  if (data.hasOwnProperty("query")) {
    params.url += `/${data.query}`
    delete params.data.query
  }

  if (config[key][action].hasOwnProperty("path")) {
    params.url += config[key][action].path
  }

  return _cloneDeep(params)
}
