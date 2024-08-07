/* eslint prefer-promise-reject-errors: 0 */
import axios from "axios"
import _isNull from "lodash/isNull"

const request = (params, headers = null) => {
  const { method, data } = params

  if (_isNull(headers)) {
    headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    }
  }

  if (method.toLowerCase() === "get" && typeof data === "object" && Object.keys(data).length !== 0) {
    params.method = "POST"
    headers["X-HTTP-Method-Override"] = "GET"
  }
  return axios({
    ...params,
    headers,
  })
    .then((response) => {
      return Promise.resolve(response || {})
    })
    .catch((error) => {
      return Promise.resolve(error || {})
    })
}

export default request
