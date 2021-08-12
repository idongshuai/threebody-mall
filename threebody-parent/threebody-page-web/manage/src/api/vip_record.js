import request from "@/utils/request"

const api_name = '/tdocs/manage'
export default {
  queryByPage(searchMap) {
    return request(
      {
        url: `${api_name}/queryUserRecords`,
        method: 'post',
        data: searchMap
      }
    );
  }
}

