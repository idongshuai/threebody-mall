import request from "@/utils/request"
const api_name='doc'
export default {
    getList() {
        return request(
            {
                url:`/${api_name}`,
                method:'get'
            }
        );
    },
    queryByPage(searchMap) {
        return request(
            {
                url:`/${api_name}/queryByPage`,
                method:'post',
                data: searchMap
            }
        );
    },
    save(pojo) {
        return request({
            url:`/${api_name}`,
            method: 'post',
            data: pojo
        })
    },
    findById(id) {
        return request({
            url: `/${api_name}/${id}`,
            method: 'get'
        })
    },
    update(id, pojo){
        if (id == null || id == '') {
            return this.save(pojo)
        }
        return request({
            url: `/${api_name}/${id}`,
            method: 'put',
            data: pojo
        })
    },
    deleteById(id){
        return request({
            url: `/${api_name}/${id}`,
            method: 'delete'
        })
    }
}

