import {request} from '@/plugins/request'

// 获取个人主页
export const getProfile = (username) => {
    return request ({
        method:'GET',
        url:`/api/profiles/${username}`
    })
}

// follow user
export const getFollow = (username) => {
    return request ({
        method: 'POST',
        url:`/api/profiles/${username}/follow`
    })
}
// unfollow user 
export const getUnFollow = (username) => {
    return request ({
        method: 'DELETE',
        url:`/api/profiles/${username}/follow`
    })
}