import request from "@/utils/request"

const api_name = '/tdocs/manage'
export default {
  queryByPage(searchMap) {
    return request(
      {
        url: `${api_name}/query`,
        method: 'post',
        data: searchMap
      }
    );
  },
  edit(id, pojo) {
    return request({
      url: `${api_name}/edit`,
      method: 'post',
      data: pojo
    })
  },
  deleteById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  }
}

