import request from "@/utils/request"

const api_name = '/tdocs/manage'
export default {
  queryByPage(searchMap) {
    return request(
      {
        url: `${api_name}/queryLog`,
        method: 'post',
        data: searchMap
      }
    );
  },
  mindDuplicateNode(pojo) {
    return request(
      {
        url: `${api_name}/mindDuplicateNode`,
        method: 'post',
        data: pojo
      }
    );
  }
}

