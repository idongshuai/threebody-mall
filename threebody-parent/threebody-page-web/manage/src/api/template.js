import request from "@/utils/request"

const api_name = '/tdocs/template'
export default {
  getList() {
    return request(
      {
        url: `${api_name}`,
        method: 'get'
      }
    );
  },
  queryByPage(searchMap) {
    return request(
      {
        url: `${api_name}/query`,
        method: 'post',
        data: searchMap
      }
    );
  },
  syncTemplate(idsObj) {
    return request(
      {
        url: `${api_name}/syncTemplate`,
        method: 'post',
        data: idsObj
      }
    );
  },
  getAllCategories() {
    return request({
      url: `${api_name}/getAllCategories`,
      method: 'get'
    })
  },
  save(pojo) {
    return request({
      url: `${api_name}`,
      method: 'post',
      data: pojo
    })
  },
  findById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  },
  getClassTag(id) {
    return request({
      url: `${api_name}/getClassTag/${id}`,
      method: 'get'
    })
  },
  update(id, pojo) {
    return request({
      url: `${api_name}/editTemplate`,
      method: 'post',
      data: pojo
    })
  },
  regenerateImage(id, type) {
    return request({
      url: `${api_name}/regenerateImage/${id}/${type}`,
      method: 'get'
    })
  },
  deleteById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  }
}

