import {request} from '@/plugins/request'


// 通过标签进行查询
export const getTags = () => {
    return request({
        method: 'GET',
        url: '/api/tags',
    })
  }