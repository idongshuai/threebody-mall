import request from "@/utils/request"

const api_name = 'searchTag'
export default {
  query(channel, designerType) {
    return request(
      {
        url: `/${api_name}/${channel}/${designerType}`,
        method: 'post'
      }
    );
  },
  update(pojo) {
    return request({
      url: `/${api_name}`,
      method: 'put',
      data: pojo
    })
  }
}

