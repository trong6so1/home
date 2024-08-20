import request from "@/utils/request"
import api from "@/services/api"

export default class PostServices {
    getMaster(query) {
      const reqParams = api("post", "list")
      reqParams.data = Object.assign({}, query)
      console.log((reqParams));
      return request(reqParams)
        .then((response) => {
          return response
        })
        .then((d) => d)
    }
}