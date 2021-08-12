import request from "@/utils/request"

const api_name = '/order'
export default {
  queryByPage(searchMap) {
    return request(
      {
        url: `${api_name}/queryAllOrder`,
        method: 'post',
        data: searchMap
      }
    );
  }
}

