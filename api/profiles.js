import {request} from '@/plugins/request'

// 获取个人主页
export const getProfile = (username) => {
    return request ({
        method:'GET',
        url:`/api/profiles/${username}`
    })
}