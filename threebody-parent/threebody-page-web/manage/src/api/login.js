import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/tdocs/manage/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/tdocs/manage/info',
    method: 'post',
    data: { token }
  })
}

export function logout() {
  return request({
    url: '/tdocs/manage/logout',
    method: 'post'
  })
}
